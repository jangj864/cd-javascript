// Pointer capture keeps a turn continuous when the pointer leaves the canvas.
export function createOrbit(canvas,canStart=()=>true){
 const state={yaw:0,pitch:0,dragging:false};
 let active=null,suppressClick=false;
 function finish(event){
  if(!active||event.pointerId!==active.id)return;
  const id=active.id;active=null;state.dragging=false;canvas.classList.remove('dragging');
  if(event.type==='pointercancel')suppressClick=true;
  if(canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);
 }
 canvas.addEventListener('pointerdown',event=>{
  if(active||event.isPrimary===false||event.button!==0||!canStart(event))return;
  suppressClick=false;active={id:event.pointerId,x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY};
  canvas.setPointerCapture(event.pointerId);
 });
 canvas.addEventListener('pointermove',event=>{
  if(!active||event.pointerId!==active.id)return;
  if(Math.hypot(event.clientX-active.startX,event.clientY-active.startY)>6)state.dragging=true;
  if(state.dragging){
   suppressClick=true;canvas.classList.add('dragging');
   const bounds=canvas.getBoundingClientRect(),span=Math.max(180,Math.min(bounds.width,bounds.height));
   state.yaw+=(event.clientX-active.x)/span*Math.PI*2;
   state.pitch=Math.max(-Math.PI*.47,Math.min(Math.PI*.47,state.pitch+(event.clientY-active.y)/span*Math.PI));
   event.preventDefault();
  }
  active.x=event.clientX;active.y=event.clientY;
 },{passive:false});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,finish);
 return {state,consumeClick(){const suppressed=suppressClick;suppressClick=false;return suppressed;},reset(){state.yaw=0;state.pitch=0;},turn(yaw,pitch=0){state.yaw+=yaw;state.pitch=Math.max(-Math.PI*.47,Math.min(Math.PI*.47,state.pitch+pitch));}};
}
