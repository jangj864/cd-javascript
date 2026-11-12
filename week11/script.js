import {createEarth} from './globe.js';
import {EarthSound} from './sound.js';
import {createAirPanel} from './air.js';
import {getAirMood} from './air-data.js';
import {getOceanStory} from './surface.js';
import {CLIMATE_SNAPSHOT,TEMP_URL,SEA_URL,QUAKE_URL,RAIN_URL,parseTemperature,parseSea,parseRain,parseQuakes,getReaction} from './climate.js';

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const pointerMedia=matchMedia('(pointer:coarse)');
const data={temperature:{...CLIMATE_SNAPSHOT.temperature},sea:{...CLIMATE_SNAPSHOT.sea},rain:null,quakes:null,air:null};
const feeds={temperature:{busy:false,checked:0,failed:false},sea:{busy:false,checked:0,failed:false},rain:{busy:false,checked:0,failed:false},quakes:{busy:false,checked:0,failed:false}};
const intervals={temperature:86400000,sea:86400000,rain:900000,quakes:60000};
const parsers={temperature:parseTemperature,sea:parseSea,rain:parseRain,quakes:parseQuakes};
const urls={temperature:TEMP_URL,sea:SEA_URL,rain:RAIN_URL,quakes:QUAKE_URL};
const sound=new EarthSound();
let earth=null,lastFrame=0,smoothHeat=0,smoothCold=0,shoutUntil=0;
let thoughtIndex=0,thoughtKey='';
let oceanSelection=false,oceanThoughtIndex=0,oceanUntil=0;
function setText(id,text){if($(id).textContent!==text)$(id).textContent=text;}
const dateLabel=date=>new Date(date+'-01T00:00:00Z').toLocaleDateString('en-US',{month:'short',year:'numeric',timeZone:'UTC'});
const timeLabel=time=>new Date(time).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'})+' UTC';
function setReading(id,value,unit=''){
 const element=$(id);if(element.textContent===value+unit)return;
 const nodes=[document.createTextNode(value)];
 if(unit){const label=document.createElement('span');label.className='reading-unit';label.textContent=unit;nodes.push(label);}
 element.replaceChildren(...nodes);
}
function renderSound(enabled){
 $('sound').setAttribute('aria-pressed',String(enabled));
 $('sound').setAttribute('aria-label',enabled?'Turn sound off':'Turn sound on');
 const detail=enabled?'<path d="M15 8a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14"/>':'<path d="m16 9 5 6m0-6-5 6"/>';
 $('sound').innerHTML=`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/>${detail}</svg><span class="sound-label">Sound ${enabled?'on':'off'}</span>`;
}
function updateReadings(){
 setReading('temperature-value',`${data.temperature.value>=0?'+':''}${data.temperature.value.toFixed(2)}`,'°C');
 $('temperature-date').textContent=dateLabel(data.temperature.date)+(data.temperature.saved?' · saved':'');
 $('temperature-source-note').textContent=`Shown: ${dateLabel(data.temperature.date)}${data.temperature.saved?' (saved observation; direct refresh unavailable or pending)':''}.`;
 setReading('sea-value',`+${data.sea.value.toFixed(1)}`,'mm');
 $('sea-date').textContent=dateLabel(data.sea.date)+(data.sea.saved?' · saved':'');
 $('sea-source-note').textContent=`Shown: ${dateLabel(data.sea.date)}${data.sea.saved?' (saved observation; direct refresh unavailable or pending)':''}.`;
 setReading('quake-value',data.quakes?String(data.quakes.current):'—','/h');
 if(data.quakes){const change=data.quakes.current-data.quakes.previous;$('quake-change').textContent=`${change>=0?'+':''}${change} vs prior hour${feeds.quakes.failed?' · old data':''}`;}
 else $('quake-change').textContent=feeds.quakes.failed?'feed unavailable':'last hour';
 $('quake-source-note').textContent=data.quakes?`Feed generated ${timeLabel(data.quakes.time)}; ${data.quakes.current} events vs ${data.quakes.previous} in the preceding hour${feeds.quakes.failed?'; latest refresh failed':''}.`:'Feed unavailable or pending; no automatic shaking without data.';
 setReading('rain-value',data.rain?data.rain.value.toFixed(2):'—','mm/h');
 $('rain-date').textContent=data.rain?`${timeLabel(data.rain.time)}${feeds.rain.failed?' · old':''}`:feeds.rain.failed?'Feed unavailable':'36-point estimate';
 $('rain-source-note').textContent=data.rain?`Model valid ${timeLabel(data.rain.time)}; 36/36 samples${feeds.rain.failed?'; latest refresh failed':''}.`:'Model unavailable or pending; rain adds no tears until data arrives.';
 const busy=Object.values(feeds).some(feed=>feed.busy),failed=Object.values(feeds).some(feed=>feed.failed);
 const retained=data.temperature.saved||data.sea.saved;
 $('feed-status').textContent=busy?'Checking observations…':failed?'Some sources unavailable':retained?'Live + dated observations':'Observations connected';
 document.querySelector('.data-status').dataset.state=busy?'checking':failed||retained?'mixed':'connected';
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
function refreshAll(force=false){return Promise.all([...Object.keys(feeds).map(key=>refreshFeed(key,force)),airPanel.refresh(force)]);}
function reaction(){
 const real=getReaction(data);
 if(data.rain&&Date.now()-data.rain.time>2*3600000)real.tears=getReaction({...data,rain:null}).tears;
 if(data.quakes&&Date.now()-data.quakes.time>15*60000)real.shake=0;
 if(data.air&&Date.now()-data.air.time>2*3600000)real.air=0;
 return real;
}
function animate(time){
 requestAnimationFrame(animate);if(document.hidden)return;
 if(time-lastFrame<32)return;
 const dt=Math.min(50,time-lastFrame);lastFrame=time;
 const r=reaction();smoothHeat+= (r.heat-smoothHeat)*(reduced?1:1-Math.exp(-dt*.003));
 smoothCold+=(r.cold-smoothCold)*(reduced?1:1-Math.exp(-dt*.003));
 if(earth)earth.draw({...r,heat:smoothHeat,cold:smoothCold,scream:r.scream||time<shoutUntil},time,reduced);
 const stage=value=>value>.66?2:value>.28?1:0;
 const freshAir=data.air&&Date.now()-data.air.time<=2*3600000;
 const heatStage=stage(r.heat),coldStage=stage(r.cold),tearStage=stage(r.tears),shakeStage=stage(r.shake),airStage=getAirMood(freshAir?data.air.aqi:undefined).stage;
 const thoughts=[];
 if(r.heat>.05)thoughts.push(...[
  ['“Is it getting warm, or is it me?”','“A little shade would be nice.”'],
  ['“Could someone turn the heat down?”','“I could really use a cool breeze.”'],
  ['“It’s too hot in here.”','“I’m burning up!”','“This is more than a bad fever.”']
 ][heatStage]);
 if(r.cold>.02)thoughts.push(...[
  ['“Brrr. It’s getting chilly.”','“Could I borrow a blanket?”'],
  ['“I can’t feel my oceans.”','“Someone turn the heating on.”'],
  ['“I’m freezing over!”','“That’s ice. Everywhere.”']
 ][coldStage]);
 if(r.shake>0)thoughts.push(...[
  ['“Something’s making me restless.”','“A little unsteady today.”'],
  ['“No. No. No.”','“I can’t keep my head still.”'],
  ['“Everything is shaking!”','“Please, give me a moment to settle.”']
 ][shakeStage]);
 if(r.tears>.04)thoughts.push(...[
  ['“Just a little teary today.”','“I think I need a tissue.”'],
  ['“I’m a little overwhelmed.”','“The water keeps coming.”'],
  ['“I can’t stop crying.”','“That’s a whole ocean of feelings.”','“I’m trying to hold it together.”']
 ][tearStage]);
 if(freshAir){
  if(r.air>0)thoughts.push(...[
   ['“The air feels a little heavy.”','“I could use some fresh air.”'],
   ['“Breathing feels like hard work.”','“My eyes could use a break.”'],
   ['“That air is wearing me out.”','“I really need a clearer sky.”']
  ][airStage]);
  else thoughts.push('“A little room to breathe.”');
 }
 if(!thoughts.length)thoughts.push('“Still here.”','“A quiet moment. Finally.”');
 const key=`${airStage}:${!!freshAir}:${coldStage}:${heatStage}:${tearStage}:${shakeStage}:${r.shake>0}:${r.tears>.04}`;
 if(key!==thoughtKey){thoughtKey=key;thoughtIndex=0;}
 const oceanActive=oceanSelection&&time<oceanUntil;
 const oceanStory=oceanActive?getOceanStory(data.sea):null;
 setText('feeling',time<shoutUntil?'Aaaah!':oceanActive?oceanStory.phrases[oceanThoughtIndex%oceanStory.phrases.length]:thoughts[thoughtIndex%thoughts.length].replace(/[“”]/g,''));
 $('speech').lang='en';
 setText('reaction-note',pointerMedia.matches?'Drag · Double-tap to inspect':'Drag · Double-click to inspect');
 const description=`A blue 3D Earth face is ${r.cold>.02?'freezing with frost at intensity '+(coldStage+1):r.scream?'surrounded by a warm atmosphere and opening its mouth':'surrounded by a temperature-coloured atmosphere'}, ${r.shake>0?'shaking its head at intensity '+(shakeStage+1):'not shaking'}, and ${r.tears>.04?'crying at intensity '+(tearStage+1):'not crying'}. Reactions happen together, based on the displayed observations. Drag to turn through 360 degrees, arrow keys to turn, Home to reset, press I to inspect the centre point, double-click or double-tap a point for local conditions, or click or press Enter to hear its voice. City air quality: ${freshAir?r.air>0?'a tired expression at intensity '+(airStage+1):'no added tiredness':'unavailable or stale'}.`;
 if($('planet').getAttribute('aria-label')!==description)$('planet').setAttribute('aria-label',description);
 sound.tick(r,time);
}
// Draw body and tail as one contour, keeping a consistent border at every size.
const speechLayout=matchMedia('(max-width:950px)');
function resizeBubble(element,shape,outline,bottomTail){
 const w=element.offsetWidth,h=element.offsetHeight;
 if(!w||!h)return;
 const a=1.5,right=w-a,bottom=h-a,cx=w/2,cy=h/2;
 const radius=Math.min(23,(h-30)/2,w/4);
 let path=`M ${a+radius} ${a} H ${right-radius} Q ${right} ${a} ${right} ${a+radius} V ${bottom-radius} Q ${right} ${bottom} ${right-radius} ${bottom}`;
 if(bottomTail){
  path+=` H ${cx+16} C ${cx+8} ${bottom} ${cx+7} ${bottom+6} ${cx+2} ${bottom+14} Q ${cx} ${bottom+18} ${cx-2} ${bottom+14} C ${cx-7} ${bottom+6} ${cx-8} ${bottom} ${cx-16} ${bottom}`;
 }
 path+=` H ${a+radius} Q ${a} ${bottom} ${a} ${bottom-radius}`;
 if(!bottomTail){
  path+=` V ${cy+14} C ${a} ${cy+7} -4 ${cy+6} -14 ${cy+2} Q -18 ${cy} -14 ${cy-2} C -4 ${cy-6} ${a} ${cy-7} ${a} ${cy-14}`;
 }
 path+=` V ${a+radius} Q ${a} ${a} ${a+radius} ${a} Z`;
 shape.setAttribute('viewBox',`0 0 ${w} ${h}`);
 outline.setAttribute('d',path);
}
function resizeSpeech(){resizeBubble($('speech'),$('speech-shape'),$('speech-outline'),speechLayout.matches);}
new ResizeObserver(resizeSpeech).observe($('speech'));
speechLayout.addEventListener('change',resizeSpeech);
resizeSpeech();
const airPanel=createAirPanel({onChange:air=>{data.air=air;},getSeaLevel:()=>data.sea,onSelect:place=>{oceanSelection=place.surface==='ocean';oceanThoughtIndex=0;oceanUntil=performance.now()+20000;}});
function inspectPoint(point){
 airPanel.selectPoint(point);
}
$('air-panel').addEventListener('close',()=>{if(oceanSelection)oceanUntil=performance.now()+15000;});
$('reset-view').addEventListener('click',()=>earth?.resetView());
let voicePending=false;
async function screamOnClick(){
 if(voicePending)return;voicePending=true;
 try{
  await sound.cry(reaction().heat);shoutUntil=performance.now()+1500;
  renderSound(true);
 }catch{setText('reaction-note','Sound is unavailable in this browser.');}
 finally{voicePending=false;}
}
$('planet').addEventListener('keydown',event=>{
 if(event.key==='Enter'||event.key===' '){event.preventDefault();screamOnClick();}
 else if(event.key.toLowerCase()==='i'){event.preventDefault();earth?.inspectCenter();}
 else if(event.key==='Home'){event.preventDefault();earth?.resetView();}
 else if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)){
  event.preventDefault();earth?.turnView(event.key==='ArrowLeft'?-.18:event.key==='ArrowRight'?.18:0,event.key==='ArrowUp'?-.12:event.key==='ArrowDown'?.12:0);
 }
});
$('speech').addEventListener('click',()=>{if(oceanSelection&&performance.now()<oceanUntil){oceanThoughtIndex++;oceanUntil=performance.now()+20000;}else thoughtIndex++;});
$('sound').addEventListener('click',async()=>{
 try{renderSound(await sound.toggle());}
 catch{$('sound').setAttribute('aria-label','Sound unavailable');$('sound').title='Sound unavailable';}
});
$('refresh').addEventListener('click',()=>refreshAll(true));
$('info-open').addEventListener('click',()=>$('info').showModal());$('info-close').addEventListener('click',()=>$('info').close());
$('info').addEventListener('click',event=>{const box=$('info').getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)$('info').close();});
document.addEventListener('visibilitychange',()=>{sound.visibility(document.hidden).catch(()=>{});if(!document.hidden)refreshAll();});
setInterval(()=>{if(!document.hidden)refreshAll();},60000);
try{earth=createEarth($('globe'),{onEarthClick:screamOnClick,onPointSelect:inspectPoint,onGesture:()=>{sound.prepare().catch(()=>{});}});}catch{
 $('planet').classList.add('fallback');$('globe').addEventListener('click',screamOnClick);
 $('globe').innerHTML='<svg viewBox="0 0 400 400" width="100%" height="100%"><circle cx="200" cy="200" r="148" fill="#246386"/><path d="M68 135L105 90 151 100 142 138 120 164 132 205 95 230 63 183M284 100L329 150 329 218 284 257 266 209 285 158Z" fill="#719377"/><ellipse cx="160" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="240" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="164" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="236" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="200" cy="255" rx="23" ry="29" fill="#352631"/></svg>';
}
updateReadings();refreshAll();requestAnimationFrame(animate);
