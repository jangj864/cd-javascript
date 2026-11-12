import test from 'node:test';
import assert from 'node:assert/strict';
import {EarthSound} from '../sound.js';

test('preparing audio during a gesture stays muted until a single click is confirmed',async t=>{
 const previous=Object.getOwnPropertyDescriptor(globalThis,'window');
 t.after(()=>{if(previous)Object.defineProperty(globalThis,'window',previous);else delete globalThis.window;});
 const ramps=[];let contexts=0;
 globalThis.window={AudioContext:class{
  constructor(){contexts++;this.currentTime=0;this.destination={};}
  createGain(){return {gain:{value:1,cancelScheduledValues(){},setTargetAtTime:value=>ramps.push(value)},connect(){}};}
  async resume(){this.state='running';}
 }};
 const sound=new EarthSound();let voices=0;sound.scream=()=>voices++;
 await sound.prepare();assert.equal(sound.enabled,false);assert.equal(sound.master.gain.value,0);assert.equal(voices,0);assert.deepEqual(ramps,[]);
 await sound.cry();assert.equal(sound.enabled,true);assert.equal(voices,1);assert.equal(contexts,1);assert.equal(ramps[0],.09);
});
