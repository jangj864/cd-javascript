import test from 'node:test';
import assert from 'node:assert/strict';
import {pointWeatherUrl,parsePointWeather,fetchPointWeather,formatCoordinates} from '../point-data.js';
import {parseCity,parseFavorites} from '../air-data.js';
const now=Date.now();
const weather={current_units:{temperature_2m:'°C',precipitation:'mm',wind_speed_10m:'km/h'},current:{time:Math.floor(now/1000),interval:900,temperature_2m:12.4,precipitation:.25,wind_speed_10m:8.2}};

test('point weather requests exact coordinates and normalizes model precipitation intervals',()=>{
 const point={latitude:37.1234,longitude:126.4321};const url=new URL(pointWeatherUrl(point));
 assert.equal(url.searchParams.get('latitude'),'37.1234');assert.equal(url.searchParams.get('longitude'),'126.4321');assert.equal(url.searchParams.get('cell_selection'),'nearest');
 const parsed=parsePointWeather(weather,now);assert.equal(parsed.rain,1);assert.equal(parsed.temperature,12.4);assert.equal(parsed.wind,8.2);
});

test('stale, missing and mismatched-unit weather stays unavailable',()=>{
 assert.throws(()=>parsePointWeather(weather,now+3*3600000));
 assert.throws(()=>parsePointWeather({...weather,current:{...weather.current,temperature_2m:null}},now));
 assert.throws(()=>parsePointWeather({...weather,current_units:{...weather.current_units,wind_speed_10m:'m/s'}},now));
});

test('point mode and coordinates survive saved-location parsing without inventing a city',async()=>{
 const point={name:'37.12° N, 126.43° E',latitude:37.1234,longitude:126.4321,kind:'point'};
 assert.equal(parseCity(point).kind,'point');assert.equal(parseFavorites([point])[0].latitude,37.1234);
 assert.equal(formatCoordinates({latitude:-35,longitude:-150}),'35.00° S, 150.00° W');
 const result=await fetchPointWeather(point,undefined,async()=>({ok:true,status:200,json:async()=>weather}));assert.equal(result.status,200);assert.equal(result.payload,weather);
});
