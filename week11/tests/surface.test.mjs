import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {classifySurface,getOceanStory} from '../surface.js';
import {pointFromHit} from '../globe-input.js';

const land=JSON.parse(readFileSync(new URL('../assets/land.json',import.meta.url),'utf8'));

test('surface selection uses the globe map, separating known land from open ocean',()=>{
 for(const [latitude,longitude] of [[37.566,126.978],[39.9,116.4],[52.52,13.4],[-33.86,151.2]]){
  assert.equal(classifySurface({latitude,longitude},land),'land',`${latitude}, ${longitude}`);
 }
 for(const [latitude,longitude] of [[0,-140],[-35,-150],[30,-40],[-30,80]]){
  assert.equal(classifySurface({latitude,longitude},land),'ocean',`${latitude}, ${longitude}`);
 }
 assert.equal(classifySurface({latitude:91,longitude:0},land),'unknown');
 assert.equal(classifySurface({latitude:0,longitude:NaN},land),'unknown');
});

test('inland holes do not trigger ocean stories, and islands remain land',()=>{
 const square=[[0,0],[10,0],[10,10],[0,10],[0,0]];
 const lake=[[2,2],[8,2],[8,8],[2,8],[2,2]];
 const island=[[4,4],[6,4],[6,6],[4,6],[4,4]];
 assert.equal(classifySurface({latitude:3,longitude:3},[[square,lake]]),'inland-water');
 assert.equal(classifySurface({latitude:5,longitude:5},[[square,lake],[island]]),'land');
});

test('ocean stories use a dated global observation and avoid rising claims without data',()=>{
 const story=getOceanStory({value:115.8,date:'2026-10',saved:true});
 assert(story.phrases[0].includes('The water is rising!'));
 assert(story.observation.includes('+115.8 mm since 1993'));
 assert(story.observation.includes('Oct 2026'));
 assert(story.observation.includes('saved observation'));
 for(const sea of [null,{value:NaN},{value:-1,date:'2026-10'},{value:0,date:'2026-10'}]){
  assert(!getOceanStory(sea).phrases.join('').includes('rising'));
 }
 assert(getOceanStory(null).observation.includes('unavailable'));
 assert(getOceanStory({value:12,date:'2026-99'}).observation.includes('Date unavailable'));
});

test('raycast metadata travels with geographical coordinates into point selection',()=>{
 assert.deepEqual(pointFromHit({uv:{x:.5,y:.5},surface:'ocean'}),{latitude:0,longitude:0,surface:'ocean'});
 assert.deepEqual(pointFromHit({uv:{x:.5,y:.5},surface:'invalid'}),{latitude:0,longitude:0});
 assert.equal(pointFromHit(null),null);
});
