import test from 'node:test';
import assert from 'node:assert/strict';
import {getReaction,parseQuakes,parseRain,RAIN_SITES} from '../climate.js';
import {parseAir,parseCities,airBand} from '../air.js';
import {createOrbit} from '../orbit.js';

const now=Date.UTC(2026,10,6,16);
const feature=(id,time,coordinates,extra={})=>({id,properties:{type:'earthquake',time,mag:2.4,place:'Example epicentre',url:`https://earthquake.usgs.gov/earthquakes/eventpage/${id}`,...extra},geometry:{type:'Point',coordinates}});

test('below-average anomalies freeze; positive anomalies heat; zero is neutral',()=>{
 const cold=[-.3,-.9,-1.5].map(value=>getReaction({temperature:{value}}));
 assert(cold[0].cold<cold[1].cold&&cold[1].cold<cold[2].cold);
 cold.forEach(reaction=>{assert.equal(reaction.heat,0);assert.equal(reaction.scream,false);});
 assert.equal(cold[2].cold,1);
 for(const value of [0,undefined,NaN]){const r=getReaction({temperature:{value}});assert.equal(r.heat,0);assert.equal(r.cold,0);}
 assert.equal(getReaction({temperature:{value:1.38}}).cold,0);
 assert.equal(getReaction({temperature:{value:4}}).heat,1);
 assert.equal(getReaction({temperature:{value:-4}}).cold,1);
});

test('USGS hourly counts ignore future and non-earthquake events',()=>{
 const feed={type:'FeatureCollection',metadata:{generated:now},features:[
  feature('current',now-1000,[-122,37,5]),feature('previous',now-3700000,[-120,36,8]),
  feature('day-old',now-86500000,[-100,30,3]),feature('future',now+1,[-100,30,3]),
  feature('bad-location',now-1000,[999,37,5]),feature('explosion',now-1000,[-122,37,5],{type:'explosion'}),
  feature('untrusted',now-2000,[-121,36,null],{url:'javascript:alert(1)',mag:null})]};
 const q=parseQuakes(feed,now);
 assert.equal(q.current,3);assert.equal(q.previous,1);
 assert.throws(()=>parseQuakes({...feed,metadata:{generated:now-16*60000}},now));
});

test('quake count decreases do not shake; doubling reaches the strongest shake',()=>{
 assert.equal(getReaction({quakes:{current:9,previous:10}}).shake,0);
 assert.equal(getReaction({quakes:{current:10,previous:10}}).shake,0);
 assert.equal(getReaction({quakes:{current:20,previous:10}}).shake,1);
});

test('low mean rain remains subtle; high mean rain can cry even while cold',()=>{
 const rain=value=>parseRain(RAIN_SITES.map(()=>({current_units:{precipitation:'mm'},current:{precipitation:value/4,interval:900,time:now/1000}})),now);
 const base={temperature:{value:-1.2},sea:{value:115.8}};
 const levels=[.0,.2,.5].map(value=>getReaction({...base,rain:rain(value)}));
 assert(levels[0].tears<.28);assert(levels[1].tears>.28);assert.equal(levels[2].tears,1);
 assert(levels.every(r=>r.cold>0&&r.heat===0));
 assert.throws(()=>parseRain([],now));
});

test('air-quality parsing rejects missing, stale and incorrectly labelled data',()=>{
 const payload={current:{time:now/1000,us_aqi:134,pm2_5:37.2},current_units:{us_aqi:'USAQI',pm2_5:'μg/m³'}};
 assert.deepEqual(parseAir(payload,now),{aqi:134,pm25:37.2,time:now});
 assert.throws(()=>parseAir({...payload,current:{...payload.current,pm2_5:null}},now));
 assert.throws(()=>parseAir(payload,now+3*3600000));
 assert.throws(()=>parseAir({...payload,current_units:{us_aqi:'European AQI',pm2_5:'μg/m³'}},now));
 assert.equal(airBand(50).label,'Good');assert.equal(airBand(51).label,'Moderate');assert.equal(airBand(201).label,'Very unhealthy');
 const levels=[50,100,150,200].map(aqi=>getReaction({air:{aqi}}).air);
 assert.deepEqual(levels,[0,1/3,2/3,1]);assert.equal(getReaction({air:{aqi:999}}).air,1);
});

test('city search validates coordinates and handles no results',()=>{
 const cities=parseCities({results:[{name:'Seoul',latitude:37.566,longitude:126.9784,country:'South Korea'},{name:'Invalid',latitude:999,longitude:0}]});
 assert.equal(cities.length,1);assert.equal(cities[0].name,'Seoul');
 assert.deepEqual(parseCities({}),[]);assert.throws(()=>parseCities({error:true}));
});

function fakeCanvas(){
 const handlers={},capture=new Set(),classes=new Set();
 return {handlers,classes,addEventListener:(name,fn)=>handlers[name]=fn,classList:{add:name=>classes.add(name),remove:name=>classes.delete(name)},
  setPointerCapture:id=>capture.add(id),hasPointerCapture:id=>capture.has(id),releasePointerCapture:id=>capture.delete(id),getBoundingClientRect:()=>({width:800,height:600})};
}
const pointer=(type,x,y=300,id=1)=>({type,clientX:x,clientY:y,pointerId:id,button:0,isPrimary:true,preventDefault(){}});
test('drag supports a full turn, keeps its position, and does not become a sound click',()=>{
 const canvas=fakeCanvas(),orbit=createOrbit(canvas);
 canvas.handlers.pointerdown(pointer('pointerdown',100));
 canvas.handlers.pointermove(pointer('pointermove',700));
 assert(Math.abs(orbit.state.yaw-Math.PI*2)<1e-10);assert.equal(orbit.state.dragging,true);
 canvas.handlers.pointerup(pointer('pointerup',700));
 assert.equal(orbit.state.dragging,false);assert.equal(canvas.classes.size,0);
 assert.equal(orbit.consumeClick(),true);assert.equal(orbit.consumeClick(),false);
 assert(Math.abs(orbit.state.yaw-Math.PI*2)<1e-10);
 canvas.handlers.pointerdown(pointer('pointerdown',300));canvas.handlers.pointerup(pointer('pointerup',301));
 assert.equal(orbit.consumeClick(),false);
 orbit.reset();assert.equal(orbit.state.yaw,0);assert.equal(orbit.state.pitch,0);
});

test('touch cancellation, secondary pointers, tilt limits and clicks outside Earth',()=>{
 const canvas=fakeCanvas(),orbit=createOrbit(canvas,event=>event.clientX>50);
 canvas.handlers.pointerdown(pointer('pointerdown',10));canvas.handlers.pointermove(pointer('pointermove',500));assert.equal(orbit.state.yaw,0);
 canvas.handlers.pointerdown(pointer('pointerdown',100));
 canvas.handlers.pointermove(pointer('pointermove',500,9999,2));assert.equal(orbit.state.pitch,0);
 canvas.handlers.pointermove(pointer('pointermove',100,9999));assert(orbit.state.pitch<Math.PI/2);
 canvas.handlers.pointercancel(pointer('pointercancel',100,9999));assert.equal(orbit.consumeClick(),true);
});
