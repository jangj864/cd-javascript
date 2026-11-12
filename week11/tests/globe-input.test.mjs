import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../vendor/three.module.js';
import {coordinatesFromUv,createGlobeActions} from '../globe-input.js';

function harness(t){
 let time=1000,id=0,drag=false;const tasks=new Map(),events={};
 const voices=[],points=[];
 const canvas={addEventListener:(type,fn)=>events[type]=fn,removeEventListener:type=>delete events[type]};
 const controller=createGlobeActions(canvas,{
  hitTest:event=>event.clientX<0?null:{uv:{x:.85,y:.7}},consumeDrag:()=>{const value=drag;drag=false;return value;},
  onClick:()=>voices.push(time),onPointSelect:point=>points.push(point),now:()=>time,
  setTimer:(fn,delay)=>{tasks.set(++id,{fn,at:time+delay});return id;},clearTimer:id=>tasks.delete(id)
 });
 t.after(()=>controller.dispose());
 function emit(type,extra={}){events[type]?.({type,clientX:100,clientY:100,pointerId:1,button:0,isPrimary:true,pointerType:'mouse',preventDefault(){},...extra});}
 function advance(ms){const end=time+ms;while(true){const due=[...tasks].filter(([,task])=>task.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!due)break;time=due[1].at;tasks.delete(due[0]);due[1].fn();}time=end;}
 return {emit,advance,voices,points,setDrag:()=>drag=true};
}

test('one click waits for double-click detection, then speaks exactly once',t=>{
 const h=harness(t);h.emit('click');h.advance(599);assert.equal(h.voices.length,0);h.advance(1);assert.equal(h.voices.length,1);assert.equal(h.points.length,0);
});

test('double-click requests the clicked point without either voice click',t=>{
 const h=harness(t);h.emit('click');h.advance(200);h.emit('click');h.emit('dblclick');h.advance(1000);
 assert.deepEqual(h.points,[{latitude:36,longitude:126}]);assert.equal(h.voices.length,0);
});

test('a drag and a later click are not interpreted as a double-click selection',t=>{
 const h=harness(t);h.emit('pointerdown');h.emit('pointermove',{clientX:250});h.setDrag();h.emit('pointerup',{clientX:250});h.emit('click');
 h.advance(100);h.emit('click');h.emit('dblclick');h.advance(1000);assert.equal(h.points.length,0);assert.equal(h.voices.length,0);
});

test('double-tap opens once and ignores compatibility mouse clicks',t=>{
 const h=harness(t);const touch={pointerType:'touch'};
 h.emit('pointerdown',touch);h.emit('pointerup',touch);h.emit('click');h.advance(200);
 h.emit('pointerdown',touch);h.emit('pointerup',touch);h.emit('click');h.emit('dblclick');h.advance(1000);
 assert.equal(h.points.length,1);assert.equal(h.voices.length,0);
});

test('single touch taps do not retain an old tap or speak twice',t=>{
 const h=harness(t);const touch={pointerType:'touch'};
 for(let i=0;i<2;i++){h.emit('pointerdown',touch);h.emit('pointerup',touch);h.advance(1000);}
 assert.equal(h.voices.length,2);assert.equal(h.points.length,0);
});

test('lost pointer capture during normal touch release does not swallow the tap',async t=>{
 const h=harness(t);const touch={pointerType:'touch'};
 h.emit('pointerdown',touch);h.emit('lostpointercapture',touch);h.emit('pointerup',touch);await Promise.resolve();h.advance(400);
 assert.equal(h.voices.length,1);
});

test('outside-globe clicks and invalid UVs never request a point',t=>{
 const h=harness(t);h.emit('click',{clientX:-10});h.emit('click',{clientX:-10});h.emit('dblclick',{clientX:-10});h.advance(1000);
 assert.equal(h.voices.length,0);assert.equal(h.points.length,0);
 assert.equal(coordinatesFromUv(null),null);assert.deepEqual(coordinatesFromUv({x:.5,y:1}),{latitude:90,longitude:0});
});

test('raycast UVs recover geographic coordinates after nested yaw, tilt and translation',()=>{
 const scene=new THREE.Scene(),turntable=new THREE.Group(),globe=new THREE.Group();scene.add(turntable);turntable.add(globe);
 globe.position.set(.025,-.015,0);globe.rotation.set(.04,.1,-.02);
 const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,192,128),new THREE.MeshBasicMaterial());globe.add(mesh);
 const camera=new THREE.OrthographicCamera(-1.5,1.5,1.5,-1.5,.1,20);camera.position.z=6;camera.updateMatrixWorld();
 const ray=new THREE.Raycaster();let checked=0;
 for(const [pitch,yaw] of [[0,0],[.4,1.3],[-.6,4.5]]){
  turntable.rotation.set(pitch,yaw,0);scene.updateMatrixWorld(true);
  for(const longitude of [-160,-120,-80,-40,0,40,80,120,160])for(const latitude of [-45,0,45]){
   const lon=longitude*Math.PI/180,lat=latitude*Math.PI/180;
   const local=new THREE.Vector3(Math.cos(lon)*Math.cos(lat),Math.sin(lat),-Math.sin(lon)*Math.cos(lat));
   const normal=local.clone().transformDirection(mesh.matrixWorld);if(normal.z<.45)continue;
   const projected=mesh.localToWorld(local).project(camera);ray.setFromCamera(new THREE.Vector2(projected.x,projected.y),camera);
   const hit=ray.intersectObject(mesh)[0];assert(hit);
   const point=coordinatesFromUv(hit.uv);
   const delta=Math.abs(((point.longitude-longitude+540)%360)-180);
   assert(delta<.1,`${longitude}: got ${point.longitude}`);assert(Math.abs(point.latitude-latitude)<.1);checked++;
  }
 }
 assert(checked>15);mesh.geometry.dispose();mesh.material.dispose();
});
