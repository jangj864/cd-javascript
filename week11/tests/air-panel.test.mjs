import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createAirPanel} from '../air.js';
import {DEFAULT_CITY,getAirMood,parseFavorites,cityKey,FAVORITES_LIMIT,fetchAirQuality,searchCities} from '../air-data.js';
import {getReaction} from '../climate.js';

const seoul={name:'Seoul',country:'South Korea',latitude:37.566,longitude:126.9784};
const pageIds=new Set([...readFileSync(new URL('../index.html',import.meta.url),'utf8').matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
function payload(aqi=125,time=Date.now()) {
 return {latitude:37.5,longitude:127,current_units:{time:'unixtime',us_aqi:'USAQI',pm2_5:'μg/m³'},current:{time:Math.floor(time/1000),us_aqi:aqi,pm2_5:24.6}};
}
function response(body,status=200) { return {ok:status>=200&&status<300,status,json:async()=>body}; }

test('the explanation and renderer share fatigue intensity and readable conditions',()=>{
 for (const aqi of [0,50,50.5,100,100.5,150,151,200,500]) {
  const mood=getAirMood(aqi);
  assert.equal(mood.intensity,getReaction({air:{aqi}}).air);
  assert(mood.condition.includes('AQI'));assert(mood.effect.length>0);
 }
 assert.equal(getAirMood(50).label,'Comfortable');
 assert.equal(getAirMood(100).label,'A little tired');
 assert.equal(getAirMood(150).label,'Tired');
 assert.equal(getAirMood(151).label,'Very tired');
 assert.equal(getAirMood(undefined).intensity,0);
});

test('saved city arrays are validated, deduplicated and limited',()=>{
 const bad={...seoul,latitude:999};
 const cities=Array.from({length:10},(_,i)=>({...seoul,name:'City '+i,latitude:30+i}));
 const favorites=parseFavorites([seoul,{...seoul,name:'SEOUL'},bad,null,...cities]);
 assert.equal(favorites.length,FAVORITES_LIMIT);
 assert.equal(cityKey(favorites[0]),cityKey(seoul));
 assert.deepEqual(parseFavorites({}),[]);
});

test('fetch helpers preserve the actual JSON, status, request URL and receive time',async()=>{
 const body=payload();
 const result=await fetchAirQuality(seoul,undefined,async url=>{
  assert(new URL(url).searchParams.get('current').includes('us_aqi'));return response(body);
 });
 assert.equal(result.payload,body);assert.equal(result.status,200);assert.equal(result.reading.aqi,125);
 assert(result.receivedAt>=body.current.time*1000);
 const cities=await searchCities('Seoul',undefined,async url=>{
  assert.equal(new URL(url).searchParams.get('name'),'Seoul');return response({results:[seoul]});
 });
 assert.equal(cities.cities[0].name,'Seoul');
 await assert.rejects(fetchAirQuality(seoul,undefined,async()=>response({},503)),error=>error.status===503);
 const stale=payload(50,Date.now()-3*3600000);
 await assert.rejects(fetchAirQuality(seoul,undefined,async()=>response(stale)),error=>error.invalidData&&error.status===200&&error.payload===stale);
});

class Element {
 constructor(){this.children=[];this.events={};this.attrs={};this.dataset={};this.value='';this.hidden=false;this.textContent='';this.style={setProperty(){},removeProperty(){}};}
 addEventListener(type,callback){this.events[type]=callback;}
 setAttribute(key,value){this.attrs[key]=String(value);}
 append(...nodes){this.children.push(...nodes);}
 replaceChildren(...nodes){this.children=nodes;}
 focus(){this.focused=true;}
 showModal(){this.open=true;}
 close(){this.open=false;this.events.close?.();}
}
function setup(t,storage=new Map()) {
 const originals=Object.fromEntries(['document','localStorage','fetch'].map(key=>[key,Object.getOwnPropertyDescriptor(globalThis,key)]));
 const nodes=new Map();
 const $=id=>{assert(pageIds.has(id),`Missing page element: ${id}`);if(!nodes.has(id))nodes.set(id,new Element());return nodes.get(id);};
 globalThis.document={getElementById:$,createElement:()=>new Element()};
 globalThis.localStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)};
 t.after(()=>{for(const [key,descriptor] of Object.entries(originals)){if(descriptor)Object.defineProperty(globalThis,key,descriptor);else delete globalThis[key];}});
 return {$,storage};
}
const settle=()=>new Promise(resolve=>setImmediate(resolve));

test('city search, saving, selecting, reload restoration and removing use current requests',async t=>{
 const {$,storage}=setup(t);let reading;
 const requested=[];
 globalThis.fetch=async url=>{
  requested.push(url);
  return response(url.includes('geocoding')?{results:[seoul]}:payload(url.includes('37.566')?125:50));
 };
 const panel=createAirPanel({onChange:value=>reading=value});
 $('air-open').events.click();
 assert.equal($('place-tools').open,true);assert.equal($('city-query').focused,true);
 await panel.refresh();
 assert.equal(reading.city.name,'New York');assert.equal($('air-aqi').textContent,'50');
 assert($('air-time').textContent.startsWith('Model valid '));
 assert.equal($('air-effect').textContent,'Clearer air gives my eyes a little rest.');
 $('city-query').value='Seoul';$('city-query').events.input();
 await $('city-form').events.submit({preventDefault(){}});
 $('city-results').children[0].children[0].events.click();await settle();
 assert.equal($('place-tools').open,false);
 assert.equal($('air-panel').dataset.mode,'city');assert.equal($('air-status').hidden,true);
 assert.equal(reading.city.name,'Seoul');assert.equal($('air-effect').textContent,'This air is making my eyes droop.');
 assert.equal(getReaction({air:reading}).air,.5);assert.equal($('air-effect').hidden,false);
 $('favorite-toggle').events.click();
 assert.equal(JSON.parse(storage.get('earth-favorite-cities'))[0].name,'Seoul');
 assert.equal($('favorite-toggle').attrs['aria-pressed'],'true');
 assert.equal($('favorite-cities').children.length,1);
 // Recreate the controller as on a reload: only city preferences are restored.
 reading='not loaded';const reloaded=createAirPanel({onChange:value=>reading=value});
 assert.equal(reading,null);assert.equal($('air-aqi').textContent,'—');assert.equal($('favorite-cities').children.length,1);
 await reloaded.refresh();assert.equal(reading.city.name,'Seoul');
 assert(requested.filter(url=>url.includes('air-quality')).length>=3);
 $('favorite-cities').children[0].children[1].events.click();
 assert.deepEqual(JSON.parse(storage.get('earth-favorite-cities')),[]);assert.equal($('favorite-toggle').focused,true);
});

test('outdated responses cannot replace newer readings; failures clear the previous expression',async t=>{
 const {$}=setup(t);let reading;
 let releaseOld;
 globalThis.fetch=()=>new Promise(resolve=>releaseOld=resolve);
 const panel=createAirPanel({onChange:value=>reading=value});const old=panel.refresh(true);
 globalThis.fetch=async()=>response(payload(175));await panel.refresh(true);
 releaseOld(response(payload(10)));await old;
 assert.equal(reading.aqi,175);assert.equal($('air-aqi').textContent,'175');
 globalThis.fetch=async()=>response({},503);await panel.refresh(true);
 assert.equal(reading,null);assert.equal($('air-aqi').textContent,'—');assert.equal($('air-effect').hidden,true);
 assert.equal($('air-status').hidden,false);
 assert.equal($('air-band').textContent,'Unavailable');
 assert.equal($('air-effect').textContent,'');assert(!$('air-status').textContent.includes('503'));
});

test('corrupt storage and storage failures do not stop live data or claim persistence',async t=>{
 const {$}=setup(t,new Map([['earth-air-city','{'],['earth-favorite-cities',JSON.stringify([seoul])]]));
 globalThis.fetch=async()=>response(payload());
 let reading;const panel=createAirPanel({onChange:value=>reading=value});
 assert.equal($('favorite-cities').children.length,1);
 await panel.refresh();assert.equal(reading.city.name,DEFAULT_CITY.name);
 globalThis.localStorage.setItem=()=>{throw new Error('Storage disabled');};
 $('favorite-toggle').events.click();
 assert($('favorites-status').textContent.includes('for this visit'));
});

function weatherPayload(temperature=12.4){
 return {current_units:{temperature_2m:'°C',precipitation:'mm',wind_speed_10m:'km/h'},current:{time:Math.floor(Date.now()/1000),interval:900,temperature_2m:temperature,precipitation:.25,wind_speed_10m:8.2}};
}

test('globe selection opens coordinates with weather and air, and saved points reload correctly',async t=>{
 const {$,storage}=setup(t);let reading;
 globalThis.fetch=async url=>response(url.includes('photon')?{features:[]}:url.includes('air-quality')?payload(85):weatherPayload());
 const panel=createAirPanel({onChange:value=>reading=value});
 $('place-tools').open=true;
 await panel.selectPoint({latitude:37.1234,longitude:126.4321});
 assert.equal($('air-panel').open,true);assert.equal($('air-title').focused,true);
 assert.equal($('air-title').textContent,'Point conditions');assert($('air-coordinates').textContent.includes('37.12° N'));
 assert.equal(reading.city.kind,'point');assert.equal($('point-weather').hidden,false);
 assert.equal($('air-panel').dataset.mode,'point');assert.equal($('place-tools').open,false);
 assert.equal($('point-weather-status').hidden,true);
 assert($('point-weather-time').textContent.startsWith('Model valid '));
 assert.equal($('point-temperature').textContent,'12.4');assert.equal($('point-rain').textContent,'1.00');
 $('favorite-toggle').events.click();const saved=JSON.parse(storage.get('earth-favorite-cities'))[0];
 assert.equal(saved.kind,'point');assert.equal(saved.latitude,37.1234);
 const restored=createAirPanel({onChange:value=>reading=value});await restored.refresh();assert.equal($('point-weather').hidden,false);assert.equal(reading.city.kind,'point');
});

test('weather and air fail independently, and old point responses cannot replace a newer selection',async t=>{
 const {$}=setup(t);let reading;
 globalThis.fetch=async url=>url.includes('photon')?response({features:[]}):url.includes('air-quality')?response({},503):response(weatherPayload());
 const panel=createAirPanel({onChange:value=>reading=value});await panel.selectPoint({latitude:37,longitude:127});
 assert.equal(reading,null);assert.equal($('point-temperature').textContent,'12.4');assert.equal($('air-band').textContent,'Unavailable');
 globalThis.fetch=async url=>url.includes('photon')?response({features:[]}):url.includes('air-quality')?response(payload(90)):response({},503);
 await panel.refresh(true);assert.equal(reading.aqi,90);assert.equal($('point-temperature').textContent,'—');
 assert($('point-weather-status').textContent.includes('Weather is unavailable'));
 assert(!$('point-weather-status').textContent.includes('503'));
 assert.equal($('point-weather-status').hidden,false);
 let releaseWeather;
 globalThis.fetch=async url=>url.includes('photon')?response({features:[]}):url.includes('air-quality')?response(payload(100)):new Promise(resolve=>releaseWeather=resolve);
 const old=panel.selectPoint({latitude:40,longitude:140});
 await settle();
 globalThis.fetch=async url=>response(url.includes('photon')?{features:[]}:url.includes('air-quality')?payload(150):weatherPayload(22));
 const current=panel.selectPoint({latitude:10,longitude:20});
 await current;releaseWeather(response(weatherPayload(99)));await old;
 assert.equal(reading.city.latitude,10);assert.equal(reading.aqi,150);assert.equal($('point-temperature').textContent,'22.0');
});

test('ocean hides search and save across reloads; land and the Air button restore search',async t=>{
 const {$,storage}=setup(t);let selected;
 globalThis.fetch=async url=>response(url.includes('photon')?{features:[]}:url.includes('air-quality')?payload(50):weatherPayload());
 const options={getSeaLevel:()=>({value:115.8,date:'2026-10',saved:true}),onSelect:place=>selected=place};
 const panel=createAirPanel(options);
 $('air-body').scrollTop=700;
 await panel.selectPoint({latitude:0,longitude:-140,surface:'ocean'});
 assert.equal($('air-body').scrollTop,0);
 assert.equal(selected.surface,'ocean');assert.equal($('ocean-note').hidden,false);
 assert.equal($('air-title').textContent,'A little ocean story');
 assert($('ocean-quote').textContent.includes('That’s the ocean!'));
 assert($('ocean-observation').textContent.includes('Oct 2026'));
 assert($('ocean-observation').textContent.includes('saved observation'));
 assert.equal($('point-temperature').textContent,'12.4');
 assert.equal($('place-tools').hidden,true);assert.equal($('favorite-toggle').hidden,true);
 assert.equal($('favorites-status').hidden,true);assert.equal($('place-tools').open,false);
 $('favorite-toggle').events.click();
 assert.equal(storage.get('earth-favorite-cities'),undefined);
 const restored=createAirPanel(options);await restored.refresh();
 assert.equal($('ocean-note').hidden,false);
 assert.equal($('place-tools').hidden,true);assert.equal($('favorite-toggle').hidden,true);
 await restored.selectPoint({latitude:39.9,longitude:116.4,surface:'land'});
 assert.equal(selected.surface,'land');assert.equal($('ocean-note').hidden,true);
 assert.equal($('air-title').textContent,'Point conditions');
 assert.equal($('place-tools').hidden,false);assert.equal($('favorite-toggle').hidden,false);
 await restored.selectPoint({latitude:0,longitude:-140,surface:'ocean'});
 $('air-open').events.click();await settle();
 assert.equal($('ocean-note').hidden,true);assert.equal($('place-tools').hidden,false);
 assert.equal($('place-tools').open,true);assert.equal($('city-query').focused,true);
 assert.equal(selected.latitude,39.9);
});

test('point place names arrive independently, preserve exact coordinates and update saved places',async t=>{
 const {$,storage}=setup(t);let releaseName;const requested=[];
 globalThis.fetch=async url=>{
  requested.push(url);
  if(url.includes('photon'))return new Promise(resolve=>releaseName=resolve);
  return response(url.includes('air-quality')?payload(85):weatherPayload());
 };
 const panel=createAirPanel();
 const pending=panel.selectPoint({latitude:37.5665,longitude:126.978,surface:'land'});
 await settle();
 assert.equal($('air-city').textContent,'Finding this place…');
 assert.equal($('point-temperature').textContent,'12.4');assert.equal($('air-aqi').textContent,'85');
 const coordinates=$('air-coordinates').textContent;
 $('favorite-toggle').events.click();
 releaseName(response({features:[{properties:{country:'South Korea',state:'Seoul',city:'Seoul'}}]}));
 await pending;
 assert.equal($('air-city').textContent,'South Korea · Seoul');assert.equal($('air-coordinates').textContent,coordinates);
 const saved=JSON.parse(storage.get('earth-favorite-cities'));
 assert.equal(saved.length,1);assert.equal(saved[0].latitude,37.5665);assert.equal(saved[0].place.country,'South Korea');
 assert.equal($('favorite-cities').children[0].children[0].textContent,'South Korea · Seoul');
 assert.equal($('favorite-toggle').attrs['aria-pressed'],'true');
 const restored=createAirPanel();await restored.refresh();
 assert.equal($('air-city').textContent,'South Korea · Seoul');
 assert.equal(requested.filter(url=>url.includes('photon')).length,1);
});

test('late place names cannot replace another point; failed lookup leaves weather and coordinates usable',async t=>{
 const {$}=setup(t);let releaseName;
 globalThis.fetch=async url=>url.includes('photon')?new Promise(resolve=>releaseName=resolve):response(url.includes('air-quality')?payload(50):weatherPayload());
 const panel=createAirPanel();const old=panel.selectPoint({latitude:37.5665,longitude:126.978,surface:'land'});
 await settle();
 globalThis.fetch=async url=>response(url.includes('photon')?{features:[{properties:{country:'United States',state:'New York',city:'New York'}}]}:url.includes('air-quality')?payload(90):weatherPayload(18));
 await panel.selectPoint({latitude:40.7128,longitude:-74.006,surface:'land'});
 releaseName(response({features:[{properties:{country:'South Korea',city:'Seoul'}}]}));await old;
 assert.equal($('air-city').textContent,'United States · New York');
 assert.equal($('air-coordinates').textContent,'40.71° N, 74.01° W');
 globalThis.fetch=async url=>url.includes('photon')?response({},503):response(url.includes('air-quality')?payload(75):weatherPayload(21));
 await panel.selectPoint({latitude:51.5,longitude:-.1,surface:'land'});
 assert.equal($('air-city').textContent,'Unnamed location');
 assert.equal($('air-coordinates').textContent,'51.50° N, 0.10° W');
 assert.equal($('point-temperature').textContent,'21.0');assert.equal($('air-aqi').textContent,'75');
 const requested=[];globalThis.fetch=async url=>{requested.push(url);return response(url.includes('air-quality')?payload():weatherPayload());};
 await panel.selectPoint({latitude:0,longitude:-140,surface:'ocean'});
 assert.equal($('air-city').textContent,'Ocean');assert(!requested.some(url=>url.includes('photon')));
});
