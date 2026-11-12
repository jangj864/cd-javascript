import test from 'node:test';
import assert from 'node:assert/strict';
import {pointLocationUrl,parsePointLocation,formatPlaceLabel,fetchPointLocation} from '../location-data.js';
import {parseCity,cityKey} from '../air-data.js';

test('reverse lookup requests the selected coordinates and ignores building names',async()=>{
 const point={latitude:37.5665,longitude:126.978};
 const url=new URL(pointLocationUrl(point));
 assert.equal(url.searchParams.get('lat'),'37.5665');assert.equal(url.searchParams.get('lon'),'126.978');
 assert.equal(url.searchParams.get('lang'),'en');assert.equal(url.searchParams.get('radius'),'20');
 const payload={features:[{properties:{country:'South Korea',city:'Seoul',name:'Seoul Metropolitan Library',osm_key:'amenity'}}]};
 const response=await fetchPointLocation(point,undefined,async()=>({ok:true,status:200,json:async()=>payload}));
 assert.deepEqual(response.place,{country:'South Korea',region:'',locality:'Seoul'});
 assert.equal(response.payload,payload);
 assert.equal(formatPlaceLabel({kind:'point',place:response.place}),'South Korea · Seoul');
});

test('country and region labels omit repeats and use honest ocean/unknown fallbacks',()=>{
 assert.equal(formatPlaceLabel({country:'United States',region:'New York',name:'New York'}),'United States · New York');
 assert.equal(formatPlaceLabel({kind:'point',surface:'ocean',place:{country:'Wrong land'}}),'Ocean');
 assert.equal(formatPlaceLabel({kind:'point',surface:'land'}),'Unnamed location');
 assert.equal(formatPlaceLabel({kind:'point',surface:'inland-water'}),'Inland water');
 assert.equal(parsePointLocation({features:[]}),null);
 assert.equal(parsePointLocation({features:[{properties:{name:'A landmark'}}]}),null);
 assert.throws(()=>parsePointLocation({results:[]}));
 assert.deepEqual(parsePointLocation({features:[{properties:{country:'Germany',state:'Berlin',name:'Berlin',osm_key:'place'}}]}),{country:'Germany',region:'Berlin',locality:'Berlin'});
});

test('place names survive storage without changing point coordinates or favorite identity',()=>{
 const point={name:'37.57° N, 126.98° E',kind:'point',latitude:37.5665,longitude:126.978};
 const located=parseCity({...point,place:{country:'South Korea',region:'Seoul',locality:'Seoul'}});
 assert.equal(cityKey(located),cityKey(parseCity(point)));
 assert.equal(located.latitude,point.latitude);assert.equal(located.longitude,point.longitude);
 assert.deepEqual(JSON.parse(JSON.stringify(located)).place,{country:'South Korea',region:'Seoul',locality:'Seoul'});
 assert.equal(parseCity({...point,place:{country:42,region:'Bad'}}).place,undefined);
});
