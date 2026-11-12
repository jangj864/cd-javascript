import {DEFAULT_CITY,parseCity,airBand,getAirMood,cityKey,parseFavorites,FAVORITES_LIMIT,searchCities,fetchAirQuality} from './air-data.js';
export * from './air-data.js';
import {fetchPointWeather,formatCoordinates} from './point-data.js';
import {getOceanStory} from './surface.js';
import {fetchPointLocation,formatPlaceLabel} from './location-data.js';

export function createAirPanel({onChange=()=>{},getSeaLevel=()=>null,onSelect=()=>{}}={}) {
 const $=id=>document.getElementById(id);
 let city=DEFAULT_CITY;
 let favoriteCities=[];
 let checked=0,controller=null,searchController=null,request=0,searchRequest=0;
 const placeCache=new Map();
 try {
  city=parseCity(JSON.parse(localStorage.getItem('earth-air-city')))||DEFAULT_CITY;
 } catch {}
 try { favoriteCities=parseFavorites(JSON.parse(localStorage.getItem('earth-favorite-cities'))); } catch {}
 try { $('city-query').value=localStorage.getItem('earth-city-query')||''; } catch {}

 function store(key,value) {
  try { localStorage.setItem(key,value);return true; } catch { return false; }
 }
 function formatTime(time) {
  return new Date(time).toLocaleString('en-GB',{timeZone:'UTC'})+' UTC';
 }
 function updateEarthFace(reading) {
  onChange(reading ? {...reading,city} : null);
 }
 function displayLocation() {
  $('air-city').textContent=formatPlaceLabel(city);
  $('air-coordinates').textContent=formatCoordinates(city);
 }
 function updateExpression(reading) {
  // The sentence and the rendered eyes share getAirMood's AQI conditions.
  $('air-effect').textContent=reading?getAirMood(reading.aqi).effect:'';
  $('air-effect').hidden=!reading;
 }
 function clearReading() {
  $('air-panel').dataset.mode=city.kind==='point'?'point':'city';
  displayLocation();
  const ocean=city.kind==='point'&&city.surface==='ocean';
  $('air-title').textContent=ocean?'A little ocean story':city.kind==='point'?'Point conditions':'City air';
  $('ocean-note').hidden=!ocean;
  if(ocean){const story=getOceanStory(getSeaLevel());$('ocean-quote').textContent=story.phrases[0];$('ocean-observation').textContent=story.observation;}
  $('air-aqi').textContent='—';$('air-pm25').textContent='—';
  $('air-band').textContent='Loading…';$('air-time').textContent='';
  $('air-open').textContent='Air';$('air-open').style.removeProperty('--air-colour');
  $('air-band').style.removeProperty('--band-colour');
  $('air-open').setAttribute('aria-label',`Search city air quality. Selected city: ${city.name}.`);
  updateExpression(null);updateEarthFace(null);
 }
 function displayAirReading(response) {
  const reading=response.reading,band=airBand(reading.aqi);
  $('air-aqi').textContent=String(reading.aqi);$('air-pm25').textContent=reading.pm25.toFixed(1);
  $('air-band').textContent=band.label;
  $('air-band').style.setProperty('--band-colour',band.colour);
  $('air-open').textContent=`Air ${Math.round(reading.aqi)}`;
  $('air-open').style.setProperty('--air-colour',band.colour);
  $('air-open').setAttribute('aria-label',`${city.name}: AQI ${Math.round(reading.aqi)}. Search another city's air quality.`);
  $('air-time').textContent=`Model valid ${formatTime(reading.time)}`;
  $('air-status').textContent='';$('air-status').hidden=true;
  updateExpression(reading);updateEarthFace(reading);
 }
 function resetPointWeather() {
  $('point-weather').hidden=city.kind!=='point';
  for(const id of ['point-temperature','point-rain','point-wind'])$(id).textContent='—';
  $('point-weather-time').textContent='';
  $('point-weather-status').textContent='';$('point-weather-status').hidden=true;
 }
 async function loadAirReading(active,current) {
  try {
   const response=await fetchAirQuality(city,active.signal);
   if(current!==request)return;
   displayAirReading(response);
  } catch(error) {
   if(current!==request)return;
   $('air-band').textContent='Unavailable';
   $('air-status').hidden=false;
   $('air-status').textContent=error.invalidData?'Fresh air data isn’t available right now.':'Air data is unavailable. Try Refresh or choose another place.';
  }
 }
 async function loadPointWeather(active,current) {
  try {
   const response=await fetchPointWeather(city,active.signal);if(current!==request)return;
   $('point-temperature').textContent=response.reading.temperature.toFixed(1);
   $('point-rain').textContent=response.reading.rain.toFixed(2);
   $('point-wind').textContent=response.reading.wind.toFixed(1);
   $('point-weather-time').textContent=`Model valid ${formatTime(response.reading.time)}`;
  } catch(error) {
   if(current!==request)return;
   $('point-weather-status').hidden=false;
   $('point-weather-status').textContent='Weather is unavailable for this point. Try Refresh.';
  }
 }
 async function loadPointName(active,current) {
  if(city.surface==='ocean'||city.place)return;
  const selected=city,key=`${selected.latitude},${selected.longitude}`;
  try {
   if(!placeCache.has(key)){
    $('air-city').textContent='Finding this place…';
    const response=await fetchPointLocation(selected,active.signal);
    if(current!==request)return;
    if(response.place){
     if(placeCache.size>=50)placeCache.delete(placeCache.keys().next().value);
     placeCache.set(key,response.place);
    }
   }
   if(current!==request)return;
   const place=placeCache.get(key);
   if(place){
    city={...city,place};store('earth-air-city',JSON.stringify(city));
    favoriteCities=favoriteCities.map(saved=>cityKey(saved)===cityKey(city)?{...saved,place}:saved);
    if(favoriteCities.some(saved=>cityKey(saved)===cityKey(city)))persistFavoriteCities();
    renderFavoriteCities();
   }
   displayLocation();
  } catch {
   if(current===request)displayLocation();
  }
 }
 async function refresh(force=false) {
  if(!force&&Date.now()-checked<900000)return;
  checked=Date.now();controller?.abort();controller=new AbortController();
  const active=controller,current=++request;
  clearReading();resetPointWeather();
  $('air-status').textContent='';$('air-status').hidden=true;$('air-refresh').disabled=true;
  const timeout=setTimeout(()=>active.abort(),12000);
  try {
   await Promise.all([loadAirReading(active,current),...(city.kind==='point'?[loadPointWeather(active,current),loadPointName(active,current)]:[])]);
  } finally {
   clearTimeout(timeout);if(current===request)$('air-refresh').disabled=false;
  }
 }

 // An array, push/filter, forEach and localStorage extend the class word-list exercise.
 function renderFavoriteCities() {
  $('favorite-cities').replaceChildren();
  $('favorites-empty').hidden=favoriteCities.length>0;
  $('favorite-count').textContent=`${favoriteCities.length} / ${FAVORITES_LIMIT}`;
  favoriteCities.forEach(function(savedCity) {
   const item=document.createElement('li');item.className='favorite-city';
   const selectButton=document.createElement('button');selectButton.type='button';selectButton.className='favorite-select';
   selectButton.textContent=savedCity.kind==='point'&&!savedCity.place&&savedCity.surface!=='ocean'?savedCity.name:formatPlaceLabel(savedCity);
   selectButton.title=`${formatPlaceLabel(savedCity)} · ${formatCoordinates(savedCity)}`;
   selectButton.setAttribute('aria-pressed',String(cityKey(savedCity)===cityKey(city)));
   selectButton.addEventListener('click',function() { selectCity(savedCity); });
   const removeButton=document.createElement('button');removeButton.type='button';removeButton.className='favorite-remove';
   removeButton.textContent='×';removeButton.setAttribute('aria-label',`Remove ${savedCity.name} from saved places`);
   removeButton.addEventListener('click',function() { removeFavoriteCity(savedCity);$('favorite-toggle').focus(); });
   item.append(selectButton,removeButton);$('favorite-cities').append(item);
  });
  const saved=favoriteCities.some(savedCity=>cityKey(savedCity)===cityKey(city));
  $('favorite-toggle').textContent=saved ? 'Saved ✓' : 'Save +';
  $('favorite-toggle').setAttribute('aria-pressed',String(saved));
  $('favorite-toggle').setAttribute('aria-label',saved ? `Remove ${city.name} from saved places` : `Save ${city.name}`);
  $('favorite-toggle').disabled=!saved && favoriteCities.length>=FAVORITES_LIMIT;
 }
 function persistFavoriteCities() {
  return store('earth-favorite-cities',JSON.stringify(favoriteCities));
 }
 function saveFavoriteCity() {
  if (favoriteCities.some(savedCity=>cityKey(savedCity)===cityKey(city))) { removeFavoriteCity(city);return; }
  if (favoriteCities.length>=FAVORITES_LIMIT) return;
  favoriteCities.push({...city});
  const persisted=persistFavoriteCities();renderFavoriteCities();
  $('favorites-status').textContent=persisted ? `${city.name} saved. Your places return on your next visit.` : `${city.name} added for this visit. Browser storage is unavailable.`;
 }
 function removeFavoriteCity(selected) {
  favoriteCities=favoriteCities.filter(savedCity=>cityKey(savedCity)!==cityKey(selected));
  const persisted=persistFavoriteCities();renderFavoriteCities();
  $('favorites-status').textContent=persisted ? `${selected.name} removed from saved places.` : `${selected.name} removed for this visit. Browser storage is unavailable.`;
 }
 function selectCity(next) {
  searchRequest++;searchController?.abort();
  city=next;store('earth-air-city',JSON.stringify(city));onSelect(city);
  $('place-tools').open=false;$('air-body').scrollTop=0;
  if($('air-panel').open)$('air-title').focus();
  $('city-results').replaceChildren();$('city-search-status').textContent='';
  $('favorites-status').textContent='';renderFavoriteCities();
  return refresh(true);
 }
 function selectPoint(point) {
  const selected=parseCity({name:'Selected point',kind:'point',latitude:point?.latitude,longitude:point?.longitude,surface:point?.surface});
  if(!selected)return;
  selected.name=formatCoordinates(selected);
  if(!$('air-panel').open)$('air-panel').showModal();
  $('air-body').scrollTop=0;
  $('air-title').focus();
  return selectCity(selected);
 }
 async function submitCitySearch(event) {
  event.preventDefault();const query=$('city-query').value.trim();
  searchController?.abort();const current=++searchRequest;
  $('city-results').replaceChildren();
  if (query.length<2) { $('city-search-status').textContent='Enter at least two characters.';return; }
  searchController=new AbortController();const active=searchController;
  const timeout=setTimeout(()=>active.abort(),12000);
  $('city-search-status').textContent='Searching cities…';
  try {
   const response=await searchCities(query,active.signal);
   if (current!==searchRequest) return;
   $('city-search-status').textContent=response.cities.length ? 'Choose a city:' : 'No matching city. Try another name or add a country.';
   response.cities.forEach(function(result) {
    const item=document.createElement('li'),button=document.createElement('button');button.type='button';
    button.textContent=[result.name,result.region!==result.name?result.region:'',result.country].filter(Boolean).join(', ');
    button.addEventListener('click',function() { selectCity(result); });item.append(button);$('city-results').append(item);
   });
  } catch {
   if (current===searchRequest) $('city-search-status').textContent='City search is unavailable. Try again.';
  } finally { clearTimeout(timeout); }
 }
 $('city-query').addEventListener('input',function() {
  store('earth-city-query',$('city-query').value);searchRequest++;searchController?.abort();
  $('city-results').replaceChildren();$('city-search-status').textContent='';
 });
 $('city-form').addEventListener('submit',submitCitySearch);
 $('favorite-toggle').addEventListener('click',saveFavoriteCity);
 $('air-open').addEventListener('click',function() { $('air-panel').showModal();$('place-tools').open=true;$('air-body').scrollTop=0;$('city-query').focus(); });
 $('air-close').addEventListener('click',function() { $('air-panel').close(); });
 $('air-refresh').addEventListener('click',function() { refresh(true); });
 $('air-panel').addEventListener('close',function() { searchRequest++;searchController?.abort(); });
 clearReading();resetPointWeather();renderFavoriteCities();
 return {refresh,selectPoint};
}
