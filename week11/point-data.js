import {fetchJSON} from './air-data.js';

export function formatCoordinates(point) {
 const latitude=`${Math.abs(point.latitude).toFixed(2)}° ${point.latitude<0?'S':'N'}`;
 const longitude=`${Math.abs(point.longitude).toFixed(2)}° ${point.longitude<0?'W':'E'}`;
 return `${latitude}, ${longitude}`;
}
export function pointWeatherUrl(point) {
 return 'https://api.open-meteo.com/v1/forecast?'+new URLSearchParams({
  latitude:point.latitude,longitude:point.longitude,current:'temperature_2m,precipitation,wind_speed_10m',
  temperature_unit:'celsius',wind_speed_unit:'kmh',precipitation_unit:'mm',timeformat:'unixtime',timezone:'GMT',cell_selection:'nearest'
 });
}
export function parsePointWeather(payload,now=Date.now()) {
 const current=payload?.current,units=payload?.current_units;
 if(!current||!Number.isFinite(current.time)||Math.abs(now-current.time*1000)>2*3600000)throw new Error('Missing or stale point weather');
 if(units?.temperature_2m!=='°C'||units?.precipitation!=='mm'||units?.wind_speed_10m!=='km/h')throw new Error('Unexpected weather units');
 if(!Number.isFinite(current.temperature_2m)||!Number.isFinite(current.precipitation)||current.precipitation<0||!Number.isFinite(current.interval)||current.interval<=0||!Number.isFinite(current.wind_speed_10m)||current.wind_speed_10m<0)throw new Error('Missing weather values');
 return {temperature:current.temperature_2m,rain:current.precipitation*3600/current.interval,wind:current.wind_speed_10m,time:current.time*1000};
}
export async function fetchPointWeather(point,signal,fetcher=fetch) {
 const response=await fetchJSON(pointWeatherUrl(point),signal,fetcher);
 try { return {...response,reading:parsePointWeather(response.payload)}; }
 catch(error) { Object.assign(error,response);error.invalidData=true;throw error; }
}
