import {fetchJSON,parsePlace} from './air-data.js';

export function pointLocationUrl(point) {
 return 'https://photon.komoot.io/reverse?'+new URLSearchParams({
  lat:point.latitude,lon:point.longitude,lang:'en',limit:1,radius:20
 });
}

export function parsePointLocation(payload) {
 if(!Array.isArray(payload?.features))throw new Error('Unexpected place response');
 const properties=payload.features[0]?.properties;
 if(!properties)return null;
 const locality=properties.city||properties.district||properties.locality||
  (properties.osm_key==='place'?properties.name:'');
 return parsePlace({country:properties.country,region:properties.state||properties.county,locality});
}

export function formatPlaceLabel(place) {
 if(place.kind==='point'){
  if(place.surface==='ocean')return 'Ocean';
  if(place.place)return uniqueParts([place.place.country,place.place.region,place.place.locality]);
  return place.surface==='inland-water'?'Inland water':'Unnamed location';
 }
 return uniqueParts([place.country,place.region,place.name]);
}
function uniqueParts(parts) {
 const seen=new Set();
 return parts.filter(part=>{
  if(!part)return false;
  const key=part.trim().toLowerCase();if(seen.has(key))return false;seen.add(key);return true;
 }).join(' · ');
}

export async function fetchPointLocation(point,signal,fetcher=fetch) {
 const response=await fetchJSON(pointLocationUrl(point),signal,fetcher);
 return {...response,place:parsePointLocation(response.payload)};
}
