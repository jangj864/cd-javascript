export const DEFAULT_CITY={name:'New York',country:'United States',latitude:40.7128,longitude:-74.006};
export function parsePlace(value) {
 const clean=text=>typeof text==='string'?text.trim().slice(0,100):'';
 if(!value||typeof value!=='object')return null;
 const country=clean(value.country),region=clean(value.region),locality=clean(value.locality);
 return country?{country,region,locality}:null;
}
export function parseCity(value){
 if(!value||typeof value.name!=='string'||!value.name.trim()||!Number.isFinite(value.latitude)||!Number.isFinite(value.longitude)||Math.abs(value.latitude)>90||Math.abs(value.longitude)>180)return null;
 const place=parsePlace(value.place);
 return {name:value.name.trim().slice(0,100),country:typeof value.country==='string'?value.country.slice(0,100):'',region:typeof (value.admin1||value.region)==='string'?(value.admin1||value.region).slice(0,100):'',latitude:value.latitude,longitude:value.longitude,...(value.kind==='point'?{kind:'point',...(['land','ocean','inland-water'].includes(value.surface)?{surface:value.surface}:{}),...(place?{place}:{})}:{})};
}
export function parseCities(payload){
 if(payload?.error||!payload||('results' in payload&&!Array.isArray(payload.results)))throw new Error('Unexpected location response');
 return (payload.results||[]).map(parseCity).filter(Boolean);
}
export function airUrl(city){
 return 'https://air-quality-api.open-meteo.com/v1/air-quality?'+new URLSearchParams({latitude:city.latitude,longitude:city.longitude,current:'us_aqi,pm2_5',timeformat:'unixtime',timezone:'GMT'});
}
export function parseAir(payload,now=Date.now()){
 const current=payload?.current,units=payload?.current_units;
 if(!current||!Number.isFinite(current.time)||Math.abs(now-current.time*1000)>2*3600000)throw new Error('Missing or stale air-quality model');
 if(!Number.isFinite(current.us_aqi)||current.us_aqi<0||!Number.isFinite(current.pm2_5)||current.pm2_5<0||units?.us_aqi!=='USAQI'||units?.pm2_5?.replace('µ','μ')!=='μg/m³')throw new Error('Invalid air-quality values or units');
 return {aqi:current.us_aqi,pm25:current.pm2_5,time:current.time*1000};
}
export function airBand(aqi){
 if(aqi<=50)return {label:'Good',colour:'#a8d8ad'};
 if(aqi<=100)return {label:'Moderate',colour:'#e5cc78'};
 if(aqi<=150)return {label:'Unhealthy for sensitive groups',colour:'#e7aa76'};
 if(aqi<=200)return {label:'Unhealthy',colour:'#e88784'};
 if(aqi<=300)return {label:'Very unhealthy',colour:'#c3a0d1'};
 return {label:'Hazardous',colour:'#c49aa8'};
}

// The same function supplies the explanation panel and the rendered expression.
export function getAirMood(aqi) {
 if (!Number.isFinite(aqi) || aqi < 0) {
  return {label:'Waiting for data',stage:0,intensity:0,condition:'No fresh AQI is available.',effect:'No air-related fatigue is added.'};
 }
 const intensity=Math.max(0,Math.min(1,(aqi-50)/150));
 if (aqi<=50) return {label:'Comfortable',stage:0,intensity,condition:'AQI ≤ 50',effect:'The air reading adds no eye droop.'};
 if (aqi<=100) return {label:'A little tired',stage:0,intensity,condition:'50 < AQI ≤ 100',effect:'The eyes begin to grow heavier.'};
 if (aqi<=150) return {label:'Tired',stage:1,intensity,condition:'100 < AQI ≤ 150',effect:'The eyes droop more and the eyebrows tilt.'};
 return {label:'Very tired',stage:2,intensity,condition:'AQI > 150',effect:'The eyes grow heavier, reaching maximum fatigue at AQI 200.'};
}

export const FAVORITES_LIMIT=6;
export function cityKey(city) {
 return [city.name.toLowerCase(),city.country.toLowerCase(),city.latitude.toFixed(2),city.longitude.toFixed(2)].join('|');
}
export function parseFavorites(value) {
 if (!Array.isArray(value)) return [];
 const favorites=[];
 value.map(parseCity).filter(Boolean).forEach(function(city) {
  if (favorites.length<FAVORITES_LIMIT && !favorites.some(saved=>cityKey(saved)===cityKey(city))) favorites.push(city);
 });
 return favorites;
}

export async function fetchJSON(url,signal,fetcher=fetch) {
 const response=await fetcher(url,{signal});
 if (!response.ok) {
  const error=new Error('API request failed');error.status=response.status;error.receivedAt=Date.now();throw error;
 }
 try {
  return {payload:await response.json(),status:response.status,receivedAt:Date.now(),requestUrl:url};
 } catch (error) {
  error.status=response.status;error.receivedAt=Date.now();throw error;
 }
}
export async function searchCities(query,signal,fetcher=fetch) {
 const url='https://geocoding-api.open-meteo.com/v1/search?'+new URLSearchParams({name:query,count:6,language:'en',format:'json'});
 const response=await fetchJSON(url,signal,fetcher);
 return {...response,cities:parseCities(response.payload)};
}
export async function fetchAirQuality(city,signal,fetcher=fetch) {
 const response=await fetchJSON(airUrl(city),signal,fetcher);
 try {
  return {...response,reading:parseAir(response.payload)};
 } catch (error) {
  Object.assign(error,response);error.invalidData=true;throw error;
 }
}
