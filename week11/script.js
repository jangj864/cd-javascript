import {createEarth} from './globe.js';
import {EarthSound} from './sound.js';
import {CLIMATE_SNAPSHOT,TEMP_URL,SEA_URL,QUAKE_URL,RAIN_URL,parseTemperature,parseSea,parseRain,parseQuakes,getReaction} from './climate.js';

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const data={temperature:{...CLIMATE_SNAPSHOT.temperature},sea:{...CLIMATE_SNAPSHOT.sea},rain:null,quakes:null};
const feeds={temperature:{busy:false,checked:0,failed:false},sea:{busy:false,checked:0,failed:false},rain:{busy:false,checked:0,failed:false},quakes:{busy:false,checked:0,failed:false}};
const intervals={temperature:86400000,sea:86400000,rain:900000,quakes:60000};
const parsers={temperature:parseTemperature,sea:parseSea,rain:parseRain,quakes:parseQuakes};
const urls={temperature:TEMP_URL,sea:SEA_URL,rain:RAIN_URL,quakes:QUAKE_URL};
const sound=new EarthSound();
let earth=null,lastFrame=0,smoothHeat=0;
let thoughtIndex=0,thoughtKey='';
function setText(id,text){if($(id).textContent!==text)$(id).textContent=text;}
const dateLabel=date=>new Date(date+'-01T00:00:00Z').toLocaleDateString('en-US',{month:'short',year:'numeric',timeZone:'UTC'});
const timeLabel=time=>new Date(time).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'})+' UTC';
function updateReadings(){
 $('temperature-value').textContent=`${data.temperature.value>=0?'+':''}${data.temperature.value.toFixed(2)}°C`;
 $('temperature-date').textContent=dateLabel(data.temperature.date)+(data.temperature.saved?' · saved':'');
 $('temperature-source-note').textContent=`Shown: ${dateLabel(data.temperature.date)}${data.temperature.saved?' (saved observation; direct refresh unavailable or pending)':''}.`;
 $('sea-value').textContent=`+${data.sea.value.toFixed(1)} mm`;
 $('sea-date').textContent=dateLabel(data.sea.date)+(data.sea.saved?' · saved':'');
 $('sea-source-note').textContent=`Shown: ${dateLabel(data.sea.date)}${data.sea.saved?' (saved observation; direct refresh unavailable or pending)':''}.`;
 $('quake-value').textContent=data.quakes?`${data.quakes.current} /h`:'—';
 if(data.quakes){const change=data.quakes.current-data.quakes.previous;$('quake-change').textContent=`${change>=0?'+':''}${change} vs previous hour${feeds.quakes.failed?' · old data':''}`;}
 else $('quake-change').textContent=feeds.quakes.failed?'feed unavailable':'last hour';
 $('quake-source-note').textContent=data.quakes?`Feed generated ${timeLabel(data.quakes.time)}; ${data.quakes.current} events vs ${data.quakes.previous} in the preceding hour${feeds.quakes.failed?'; latest refresh failed':''}.`:'Feed unavailable or pending; no automatic shaking without data.';
 $('rain-value').textContent=data.rain?`${data.rain.value.toFixed(2)}`:'—';
 $('rain-date').textContent=data.rain?`mm/h · ${timeLabel(data.rain.time)}${feeds.rain.failed?' · old':''}`:feeds.rain.failed?'feed unavailable':'mm/h · 36 samples';
 $('rain-source-note').textContent=data.rain?`Model valid ${timeLabel(data.rain.time)}; 36/36 samples${feeds.rain.failed?'; latest refresh failed':''}.`:'Model unavailable or pending; rain adds no tears until data arrives.';
 const busy=Object.values(feeds).some(feed=>feed.busy),failed=Object.values(feeds).some(feed=>feed.failed);
 $('feed-status').textContent=busy?'checking the data…':failed||data.temperature.saved||data.sea.saved?'live + dated readings · ? for sources':'connected to the data';
 $('refresh').disabled=busy;
}
async function refreshFeed(key,force=false){
 const feed=feeds[key];if(feed.busy||(!force&&Date.now()-feed.checked<intervals[key]))return;
 feed.busy=true;feed.checked=Date.now();updateReadings();
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);
 try{
  const response=await fetch(urls[key],{signal:controller.signal});if(!response.ok)throw new Error('Source unavailable');
  const payload=['temperature','sea'].includes(key)?await response.text():await response.json();
  const next=parsers[key](payload);
  if(['temperature','sea'].includes(key)&&next.date<data[key].date)throw new Error('Older climate source');
  data[key]=next;feed.failed=false;
 }catch{feed.failed=true;}
 finally{clearTimeout(timeout);feed.busy=false;updateReadings();}
}
function refreshAll(force=false){return Promise.all(Object.keys(feeds).map(key=>refreshFeed(key,force)));}
function reaction(){
 const real=getReaction(data);
 if(data.rain&&Date.now()-data.rain.time>2*3600000)real.tears=getReaction({...data,rain:null}).tears;
 if(data.quakes&&Date.now()-data.quakes.time>15*60000)real.shake=0;
 return real;
}
function animate(time){
 requestAnimationFrame(animate);if(document.hidden)return;
 if(time-lastFrame<32)return;
 const dt=Math.min(50,time-lastFrame);lastFrame=time;
 const r=reaction();smoothHeat+= (r.heat-smoothHeat)*(reduced?1:1-Math.exp(-dt*.003));
 if(earth)earth.draw({...r,heat:smoothHeat},time,reduced);
 const stage=value=>value>.66?2:value>.28?1:0;
 const heatStage=stage(r.heat),tearStage=stage(r.tears),shakeStage=stage(r.shake);
 const thoughts=[];
 if(r.heat>.05)thoughts.push(...[
  ['“is it getting warm, or is it me?”','“a little shade would be nice.”'],
  ['“could someone turn the heat down?”','“i could really use a cool breeze.”'],
  ['“it’s too hot in here.”','“i’m burning up!”','“this is more than a bad fever.”']
 ][heatStage]);
 if(r.shake>0)thoughts.push(...[
  ['“something’s making me restless.”','“a little unsteady today.”'],
  ['“no. no. no.”','“i can’t keep my head still.”'],
  ['“everything is shaking!”','“please, give me a moment to settle.”']
 ][shakeStage]);
 if(r.tears>.04)thoughts.push(...[
  ['“just a little teary today.”','“i think i need a tissue.”'],
  ['“i’m a little overwhelmed.”','“the water keeps coming.”'],
  ['“i can’t stop crying.”','“that’s a whole ocean of feelings.”','“i’m trying to hold it together.”']
 ][tearStage]);
 if(!thoughts.length)thoughts.push('“still here.”','“a quiet moment. finally.”');
 const key=`${heatStage}:${tearStage}:${shakeStage}:${r.shake>0}:${r.tears>.04}`;
 if(key!==thoughtKey){thoughtKey=key;thoughtIndex=0;}
 setText('feeling',thoughts[thoughtIndex%thoughts.length].replace(/[“”]/g,''));
 setText('reaction-note','drag gently left or right · double-click to centre');
 const description=`A blue 3D Earth face is ${r.scream?'surrounded by a warm atmosphere and opening its mouth':'surrounded by a temperature-coloured atmosphere'}, ${r.shake>0?'shaking its head at intensity '+(shakeStage+1):'not shaking'}, and ${r.tears>.04?'crying at intensity '+(tearStage+1):'not crying'}. Reactions happen together, based on the displayed observations.`;
 if($('planet').getAttribute('aria-label')!==description)$('planet').setAttribute('aria-label',description);
 sound.tick(r,time);
}
$('speech').addEventListener('click',()=>{thoughtIndex++;});
$('sound').addEventListener('click',async()=>{
 try{const enabled=await sound.toggle();$('sound').setAttribute('aria-pressed',String(enabled));$('sound').innerHTML=enabled?'sound on <span aria-hidden="true">◉</span>':'sound off <span aria-hidden="true">◌</span>';}
 catch{$('sound').textContent='sound unavailable';}
});
$('refresh').addEventListener('click',()=>refreshAll(true));
$('info-open').addEventListener('click',()=>$('info').showModal());$('info-close').addEventListener('click',()=>$('info').close());
$('info').addEventListener('click',event=>{const box=$('info').getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)$('info').close();});
document.addEventListener('visibilitychange',()=>{sound.visibility(document.hidden).catch(()=>{});if(!document.hidden)refreshAll();});
setInterval(()=>{if(!document.hidden)refreshAll();},60000);
try{earth=createEarth($('globe'));}catch{
 $('planet').classList.add('fallback');
 $('globe').innerHTML='<svg viewBox="0 0 400 400" width="100%" height="100%"><circle cx="200" cy="200" r="148" fill="#246386"/><path d="M68 135L105 90 151 100 142 138 120 164 132 205 95 230 63 183M284 100L329 150 329 218 284 257 266 209 285 158Z" fill="#719377"/><ellipse cx="160" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="240" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="164" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="236" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="200" cy="255" rx="23" ry="29" fill="#352631"/></svg>';
}
updateReadings();refreshAll();requestAnimationFrame(animate);
