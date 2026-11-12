// SphereGeometry UVs follow the same longitude/latitude layout as the land texture.
export function coordinatesFromUv(uv) {
 if (!Number.isFinite(uv?.x)||!Number.isFinite(uv?.y)) return null;
 return {
  latitude:Number((Math.max(0,Math.min(1,uv.y))*180-90).toFixed(4)),
  longitude:Number((Math.max(0,Math.min(1,uv.x))*360-180).toFixed(4))
 };
}

export function pointFromHit(hit) {
 const point=coordinatesFromUv(hit?.uv);if(!point)return null;
 return ['land','ocean','inland-water'].includes(hit.surface)?{...point,surface:hit.surface}:point;
}

export function createGlobeActions(canvas,{
 hitTest,consumeDrag=()=>false,onClick=()=>{},onPointSelect=()=>{},onGesture=()=>{},
 now=Date.now,setTimer=setTimeout,clearTimer=clearTimeout
}) {
 let singleTimer=null,pressed=null,mouseClicks=[],lastTouch=null,ignoreMouseUntil=0;
 const listeners=[];
 function listen(type,handler) { canvas.addEventListener(type,handler);listeners.push([type,handler]); }
 function stopSingle() { if(singleTimer!==null)clearTimer(singleTimer);singleTimer=null; }
 function cancel() { stopSingle();mouseClicks=[];lastTouch=null; }
 function nearby(first,event) { return Math.hypot(first.x-event.clientX,first.y-event.clientY)<=24; }
 function pointAt(event) { return pointFromHit(hitTest(event)); }
 function scheduleVoice(delay) { stopSingle();singleTimer=setTimer(()=>{singleTimer=null;lastTouch=null;mouseClicks=[];onClick();},delay); }

 listen('pointerdown',event=>{
  if(pressed||event.isPrimary===false||event.button!==0)return;
  pressed={id:event.pointerId,x:event.clientX,y:event.clientY,moved:false};
 });
 listen('pointermove',event=>{
  if(!pressed||pressed.id!==event.pointerId)return;
  if(Math.hypot(pressed.x-event.clientX,pressed.y-event.clientY)>6){pressed.moved=true;cancel();}
 });
 listen('pointerup',event=>{
  if(!pressed||pressed.id!==event.pointerId)return;
  const moved=pressed.moved;pressed=null;
  if(event.pointerType!=='touch')return;
  ignoreMouseUntil=now()+800;
  if(consumeDrag()||moved){cancel();return;}
  const coordinates=pointAt(event);if(!coordinates)return;onGesture();
  if(lastTouch&&now()-lastTouch.time<=350&&nearby(lastTouch,event)){
   cancel();onPointSelect(coordinates);
  }else{
   if(lastTouch){stopSingle();onClick();}
   lastTouch={x:event.clientX,y:event.clientY,time:now()};
   scheduleVoice(350);
  }
 });
 listen('pointercancel',event=>{if(pressed&&pressed.id===event.pointerId){pressed=null;cancel();}});
 listen('lostpointercapture',event=>{queueMicrotask(()=>{if(pressed&&pressed.id===event.pointerId){pressed=null;cancel();}});});
 listen('click',event=>{
  if(now()<ignoreMouseUntil)return;
  if(consumeDrag()){cancel();return;}
  if(!pointAt(event)){cancel();return;}onGesture();
  const previous=mouseClicks.at(-1);
  if(previous&&(now()-previous.time>700||!nearby(previous,event)))mouseClicks=[];
  mouseClicks.push({x:event.clientX,y:event.clientY,time:now()});mouseClicks=mouseClicks.slice(-2);
  scheduleVoice(600);
 });
 listen('dblclick',event=>{
  event.preventDefault();if(now()<ignoreMouseUntil)return;
  const coordinates=pointAt(event);
  const valid=mouseClicks.length===2&&coordinates;
  cancel();if(valid)onPointSelect(coordinates);
 });
 const document=canvas.ownerDocument;
 const hide=()=>{if(document.hidden){pressed=null;cancel();}};
 document?.addEventListener('visibilitychange',hide);
 return {dispose(){cancel();listeners.forEach(([type,handler])=>canvas.removeEventListener(type,handler));document?.removeEventListener('visibilitychange',hide);}};
}
