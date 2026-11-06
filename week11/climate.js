export const TEMP_URL = 'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv';
export const SEA_URL = 'https://science.nasa.gov/earth/explore/earth-indicators/sea-leve/';
export const QUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
// Verified against the original NASA sources on 2026-11-05. Dates remain visible.
export const CLIMATE_SNAPSHOT = {
 temperature:{value:1.38, previous:1.42, date:'2026-09', saved:true},
 sea:{value:115.8, uncertainty:4, date:'2026-10', saved:true},
};
export const RAIN_SITES = [-75,-45,-15,15,45,75].flatMap(latitude => [-150,-90,-30,30,90,150].map(longitude=>({latitude,longitude,weight:Math.cos(latitude*Math.PI/180)})));
export const RAIN_URL = 'https://api.open-meteo.com/v1/forecast?' + new URLSearchParams({
 latitude:RAIN_SITES.map(site=>site.latitude).join(','),longitude:RAIN_SITES.map(site=>site.longitude).join(','),
 current:'precipitation',timezone:'GMT',timeformat:'unixtime',precipitation_unit:'mm',cell_selection:'nearest',
});
export function parseTemperature(text, now=Date.now()) {
 if(!text.includes('Land-Ocean: Global Means') || !text.includes('Year,Jan,Feb'))throw new Error('Unexpected global temperature source');
 const values=[];
 for(const line of text.split(/\r?\n/)){
  const fields=line.split(',');const year=Number(fields[0]);
  if(!Number.isInteger(year)||year<1880||year>new Date(now).getUTCFullYear())continue;
  for(let month=1;month<=12;month++){
   const field=fields[month]?.trim();const value=Number(field);
   if(!field||!Number.isFinite(value)||Math.abs(value)>10)continue;
   const time=Date.UTC(year,month-1,1);
   if(time>now)continue;
   values.push({date:`${year}-${String(month).padStart(2,'0')}`,value});
  }
 }
 values.sort((a,b)=>a.date.localeCompare(b.date));
 if(values.length<2)throw new Error('Missing temperature observations');
 return {...values.at(-1),previous:values.at(-2).value,saved:false};
}
export function parseSea(text) {
 const doc = new DOMParser().parseFromString(text,'text/html');
 doc.querySelectorAll('script,style').forEach(node=>node.remove());
 const content=doc.body.textContent.replace(/\s+/g,' ');
 const value=content.match(/Latest Measurement\s*([\d.]+)\s*(?:\(±\s*[\d.]+\))?\s*mm/i);
 const date=content.match(/Latest Measurement Date\s*([A-Za-z]+)\s+(20\d\d)/i);
 if(!value||!date)throw new Error('Missing sea-level observation');
 const month=['january','february','march','april','may','june','july','august','september','october','november','december'].indexOf(date[1].toLowerCase())+1;
 const amount=Number(value[1]);
 if(!month||!Number.isFinite(amount)||amount<0||amount>1000)throw new Error('Unexpected sea-level observation');
 const observed=`${date[2]}-${String(month).padStart(2,'0')}`;
 if(Date.parse(observed+'-01')>Date.now())throw new Error('Future sea-level observation');
 return {value:amount,date:observed,saved:false};
}
export function parseRain(payload, now=Date.now()) {
 if(!Array.isArray(payload)||payload.length!==RAIN_SITES.length)throw new Error('Incomplete rain grid');
 let total=0,weight=0;const times=[];
 payload.forEach((data,index)=>{
  const c=data.current;
  if(data.current_units?.precipitation!=='mm'||!Number.isFinite(c?.precipitation)||c.precipitation<0||!Number.isFinite(c.interval)||c.interval<=0||!Number.isFinite(c.time))throw new Error('Invalid rain sample');
  if(Math.abs(now-c.time*1000)>2*3600000)throw new Error('Stale rain grid');
  total+=c.precipitation*3600/c.interval*RAIN_SITES[index].weight;weight+=RAIN_SITES[index].weight;times.push(c.time*1000);
 });
 return {value:total/weight,time:Math.min(...times),count:payload.length};
}
export function parseQuakes(payload,now=Date.now()) {
 if(payload.type!=='FeatureCollection'||!Array.isArray(payload.features)||!Number.isFinite(payload.metadata?.generated))throw new Error('Invalid earthquake feed');
 if(Math.abs(now-payload.metadata.generated)>15*60000)throw new Error('Stale earthquake feed');
 const events=payload.features.filter(event=>event.properties?.type==='earthquake'&&Number.isFinite(event.properties.time));
 const current=events.filter(event=>event.properties.time>now-3600000&&event.properties.time<=now).length;
 const previous=events.filter(event=>event.properties.time>now-7200000&&event.properties.time<=now-3600000).length;
 return {current,previous,time:payload.metadata.generated};
}
export function getReaction(data) {
 const heat=Math.max(0,Math.min(1,(data.temperature?.value||0)/1.5));
 const shake=data.quakes&&data.quakes.current>data.quakes.previous?Math.min(1,(data.quakes.current-data.quakes.previous)/Math.max(1,data.quakes.previous)):0;
 const rain=data.rain?Math.min(1,data.rain.value/0.5):0;
 const sea=data.sea?Math.min(1,data.sea.value/200):0;
 return {heat,shake,tears:Math.min(1,rain*0.75+sea*0.45),scream:heat>2/3};
}
