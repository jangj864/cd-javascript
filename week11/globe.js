import * as THREE from './vendor/three.module.js';
import land from './assets/land.json';
import {createOrbit} from './orbit.js';
import {classifySurface} from './surface.js';
import {createGlobeActions,coordinatesFromUv,pointFromHit} from './globe-input.js';

// A single blue globe with expressions on its curved surface.
export function createEarth(container,{onEarthClick=()=>{},onPointSelect=()=>{},onGesture=()=>{}}={}) {
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 container.replaceChildren(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1.35,1.35,1.35,-1.35,.1,20);
 camera.position.z=6;
 scene.add(new THREE.HemisphereLight(0xffffff,0x36546a,2));
 const key=new THREE.DirectionalLight(0xfff5e7,2.1);key.position.set(-3,4,5);scene.add(key);
 const turntable=new THREE.Group();scene.add(turntable);
 const globe=new THREE.Group();turntable.add(globe);
 const ink=new THREE.MeshBasicMaterial({color:'#303b40'});
 const eyeWhite=new THREE.MeshBasicMaterial({color:'#e9e9de'});
 const iris=new THREE.MeshBasicMaterial({color:'#354247'});
 const sphere=new THREE.SphereGeometry(1,72,48);
 function ball(parent,x,y,z,sx,sy,sz,material){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;}
 function surface(x,y,extra=.012){return Math.sqrt(Math.max(.015,1-x*x-y*y))+extra;}
 function line(parent,points,material,r=.016){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,32,r,8,false),material);parent.add(mesh);return mesh;}
 // Soft, hand-drawn continents share the face's simple visual language.
 const map=document.createElement('canvas');map.width=2048;map.height=1024;
 const mapContext=map.getContext('2d');mapContext.scale(2,2);mapContext.fillStyle='#ffffff';
 // A clean silhouette keeps geography recognisable without photographic terrain.
 for(const polygon of land){
  const path=new Path2D();
  for(const ring of polygon){
   ring.forEach(([lon,lat],index)=>{const x=(lon+180)/360*1024,y=(90-lat)/180*512;if(index)path.lineTo(x,y);else path.moveTo(x,y);});
   path.closePath();
  }
  mapContext.fill(path,'evenodd');
 }
 const texture=new THREE.CanvasTexture(map);texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 const uniforms={map:{value:texture},cold:{value:0}};
 const earthMaterial=new THREE.ShaderMaterial({uniforms,
  vertexShader:'varying vec2 vUv;varying vec3 vN;varying vec3 vP;void main(){vUv=uv;vP=position;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform sampler2D map;uniform float cold;varying vec2 vUv;varying vec3 vN;varying vec3 vP;
   void main(){
    float land=texture2D(map,vUv).a;float front=smoothstep(.45,.8,vP.z);
    float face=(1.-smoothstep(.62,1.,length(vec2(vP.x/.66,(vP.y+.01)/.67))))*front;
    float coverage=land*(1.-face);
    vec3 ocean=vec3(.055,.22,.36);
    vec3 ground=vec3(.32,.54,.36);
    float interior=texture2D(map,vUv+vec2(.001,0.)).a*texture2D(map,vUv-vec2(.001,0.)).a;
    interior*=texture2D(map,vUv+vec2(0.,.002)).a*texture2D(map,vUv-vec2(0.,.002)).a;
    ground=mix(vec3(.23,.40,.29),ground,interior);
    vec3 colour=mix(ocean,ground,coverage);
    float frostEdge=pow(1.-abs(normalize(vN).z),1.8);
    float scallop=sin(vP.x*24.+sin(vP.y*16.)*.8)*.025;
    float frost=smoothstep(.44-cold*.24,.50-cold*.24,frostEdge+abs(vP.y)*.10+scallop)*cold;
    colour=mix(colour,vec3(.62,.85,.91),cold*.18);
    colour=mix(colour,vec3(.88,.97,1.),frost*(1.-face*.88));
    float facing=dot(normalize(vN),normalize(vec3(-.4,.6,1.)));
    float light=.79+.10*smoothstep(-.15,.18,facing)+.11*smoothstep(.42,.72,facing);
    gl_FragColor=vec4(colour*light,1.);
    #include <colorspace_fragment>
   }`});
 const headGeometry=new THREE.SphereGeometry(1,192,128),headPositions=headGeometry.attributes.position;
 for(let i=0;i<headPositions.count;i++){
  const x=headPositions.getX(i),y=headPositions.getY(i),z=headPositions.getZ(i);if(z<.75)continue;
  const tip=.015*Math.exp(-((x/.075)**2)-(((y+.085)/.07)**2));
  const bridge=.006*Math.exp(-((x/.036)**2)-(((y-.005)/.10)**2));
  headPositions.setZ(i,z+tip+bridge);
 }
 headGeometry.computeVertexNormals();const head=new THREE.Mesh(headGeometry,earthMaterial);globe.add(head);
 const warmth={heat:{value:0},cold:{value:0}};
 const atmosphereMaterial=new THREE.ShaderMaterial({uniforms:warmth,transparent:true,depthWrite:false,
  vertexShader:'varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform float heat;uniform float cold;varying vec3 vN;void main(){
   vec3 colour=mix(vec3(1.,.88,.16),vec3(1.,.38,.045),smoothstep(.28,.65,heat));
   colour=mix(colour,vec3(1.,.075,.035),smoothstep(.65,1.,heat));
   float rim=pow(1.-abs(normalize(vN).z),mix(3.,1.15,heat));
   float alpha=heat*(.025+(.52+heat*.40)*rim);
   if(cold>0.){colour=mix(vec3(.24,.65,1.),vec3(.88,.97,1.),cold*cold);rim=pow(1.-abs(normalize(vN).z),mix(3.,1.1,cold));alpha=cold*(.025+(.50+cold*.42)*rim);}
   gl_FragColor=vec4(colour,alpha);
  }`});
 const atmosphere=ball(globe,0,0,0,1.045,1.045,1.045,atmosphereMaterial);atmosphere.renderOrder=1;
 const eyes=[],brows=[];
 for(const x of [-.30,.30]){
  const group=new THREE.Group();group.position.set(x,.16,surface(x,.16,.004));group.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),new THREE.Vector3(x,.16,surface(x,.16,0)).normalize());globe.add(group);
  const eye=new THREE.Group();group.add(eye);
  ball(eye,0,0,0,.128,.166,.016,eyeWhite);
  const gaze=new THREE.Group();eye.add(gaze);
  ball(gaze,0,0,0,.068,.100,.005,iris);
  ball(gaze,-.018,.042,.006,.010,.014,.002,eyeWhite);
  eyes.push({eye,gaze,baseX:x>0?-.012:.012});
  const brow=new THREE.Group();brow.position.set(x,.41,surface(x,.41,.009));globe.add(brow);
  line(brow,[[-.105,-.018,0],[0,.018,.004],[.105,-.018,0]],ink,.013);
  for(const end of [-.105,.105])ball(brow,end,-.018,0,.013,.013,.013,ink);
  brows.push(brow);
 }
 // A curved mouth patch and a shallow lip rim share the same expression controls.
 const mouthCanvas=document.createElement('canvas');mouthCanvas.width=512;mouthCanvas.height=640;const c=mouthCanvas.getContext('2d');
 c.beginPath();c.ellipse(256,320,246,309,0,0,Math.PI*2);c.fillStyle='#2c2a33';c.fill();c.save();c.clip();
 c.fillStyle='#fff5dc';c.beginPath();c.moveTo(-10,-30);c.lineTo(522,-30);c.lineTo(522,116);c.quadraticCurveTo(256,172,-10,116);c.closePath();c.fill();
 c.fillStyle='#c78689';c.beginPath();c.ellipse(256,594,176,106,0,0,Math.PI*2);c.fill();c.restore();
 const mouthTexture=new THREE.CanvasTexture(mouthCanvas);mouthTexture.colorSpace=THREE.SRGBColorSpace;
 const expression={scale:{value:new THREE.Vector2(1,1)},map:{value:mouthTexture}};
 const mouth=new THREE.Mesh(new THREE.PlaneGeometry(2,2,40,40),new THREE.ShaderMaterial({uniforms:expression,transparent:true,depthWrite:false,
  vertexShader:'uniform vec2 scale;varying vec2 vUv;void main(){vUv=uv;vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.009;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}',
  fragmentShader:'uniform sampler2D map;varying vec2 vUv;void main(){vec4 c=texture2D(map,vUv);if(c.a<.01)discard;gl_FragColor=c;}'
 }));globe.add(mouth);
 const lips=new THREE.Mesh(new THREE.RingGeometry(.965,1.01,80),new THREE.ShaderMaterial({uniforms:{scale:expression.scale},transparent:true,
  vertexShader:'uniform vec2 scale;varying float rim;void main(){rim=length(position.xy);vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.010+sin((rim-.965)/.045*3.14159)*.0015;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}',
  fragmentShader:'varying float rim;void main(){gl_FragColor=vec4(.18,.21,.25,.65);}'
 }));globe.add(lips);
 const quietMaterial=ink.clone();quietMaterial.transparent=true;
 const quiet=line(globe,[[-.115,-.32,surface(-.115,-.32)],[0,-.28,surface(0,-.28)],[.115,-.32,surface(.115,-.32)]],quietMaterial,.012);
 // Unbroken water follows the cheeks; its edges and end dissolve softly.
 const water={time:{value:0},strength:{value:0}};
 const waterMaterial=new THREE.ShaderMaterial({uniforms:water,transparent:true,depthWrite:false,side:THREE.DoubleSide,
  vertexShader:'uniform float strength;varying vec2 vUv;void main(){vUv=uv;float side=position.z;float p=uv.y;float centre=side*(.30+.035*(1.-p));float amount=strength*strength;float width=(.035+amount*.32)*(.80+.20*p);float x=centre+(uv.x-.5)*width;float y=(.006+amount*.080)-(1.-p)*(.24+strength*.70);float z=sqrt(max(.015,1.-x*x-y*y))+.020;gl_Position=projectionMatrix*modelViewMatrix*vec4(x,y,z,1.);}',
  fragmentShader:`uniform float time;uniform float strength;varying vec2 vUv;void main(){
   float edge=1.-smoothstep(.27,.50,abs(vUv.x-.5));
   float dissolve=smoothstep(0.,.34,vUv.y);
   float flow=.5+.5*sin(vUv.y*30.+time*(.003+strength*.014));
   vec3 ocean=vec3(.25,.49,.63);
   vec3 waterColour=mix(vec3(.30,.60,.76),vec3(.58,.83,.89),.10+strength*.14+flow*strength*.12);
   vec3 colour=mix(ocean,waterColour,smoothstep(.15,.75,vUv.y));
   gl_FragColor=vec4(colour,edge*dissolve*(.12+strength*strength*.72));
  }`
 });
 const streams=[];
 for(const side of [-1,1]){const geometry=new THREE.PlaneGeometry(1,1,4,48);const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,side);const stream=new THREE.Mesh(geometry,waterMaterial);stream.frustumCulled=false;stream.renderOrder=3;globe.add(stream);streams.push(stream);}
 // Small pools under the eyelids make the first tear stage feel wet rather than mechanical.
 const poolMaterial=new THREE.MeshBasicMaterial({color:'#73b2cc',transparent:true,opacity:.38});
 const pools=[-.30,.30].map(x=>ball(globe,x,-.008,surface(x,-.008,.022),.105,.012,.007,poolMaterial));
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
 function hitEarth(event){
  const bounds=renderer.domElement.getBoundingClientRect();
  if(!bounds.width||!bounds.height)return null;
  pointer.set((event.clientX-bounds.left)/bounds.width*2-1,-(event.clientY-bounds.top)/bounds.height*2+1);
  raycaster.setFromCamera(pointer,camera);
  const hit=raycaster.intersectObject(head,false)[0]||null;
  if(hit?.uv)hit.surface=classifySurface(coordinatesFromUv(hit.uv),land);
  return hit;
 }
 const orbit=createOrbit(renderer.domElement,hitEarth);
 createGlobeActions(renderer.domElement,{hitTest:hitEarth,consumeDrag:()=>orbit.consumeClick(),onClick:onEarthClick,onPointSelect,onGesture});
 let width=0,height=0,lastTime=0,tears=0,open=0,fatigue=0;
 let targetX=0,targetY=0,lookX=0,lookY=0;
 const centrePointer=()=>{targetX=0;targetY=0;};
 function trackPointer(event){
  if(event.pointerType==='touch'||event.buttons>0||orbit.state.dragging)return;
  const bounds=container.getBoundingClientRect(),reach=Math.min(bounds.width,bounds.height)*.65;
  if(!reach)return;
  targetX=THREE.MathUtils.clamp((event.clientX-bounds.left-bounds.width/2)/reach,-1,1);
  targetY=THREE.MathUtils.clamp((bounds.top+bounds.height/2-event.clientY)/reach,-1,1);
 }
 window.addEventListener('pointermove',trackPointer,{passive:true});
 document.documentElement.addEventListener('pointerleave',centrePointer);window.addEventListener('blur',centrePointer);
 new ResizeObserver(()=>{width=container.clientWidth;height=container.clientHeight;if(!height)return;renderer.setSize(width,height,false);const aspect=width/height,h=Math.max(1.17,1.18/aspect);camera.left=-h*aspect;camera.right=h*aspect;camera.top=h;camera.bottom=-h;camera.updateProjectionMatrix();}).observe(container);
 return {inspectCenter(){
  const bounds=renderer.domElement.getBoundingClientRect();
  const coordinates=pointFromHit(hitEarth({clientX:bounds.left+bounds.width/2,clientY:bounds.top+bounds.height/2}));
  if(coordinates)onPointSelect(coordinates);
 },resetView:()=>orbit.reset(),turnView:(yaw,pitch)=>orbit.turn(yaw,pitch),draw(r,time,reduced){
  const dt=Math.min(80,Math.max(16,time-lastTime));lastTime=time;const ease=reduced?1:1-Math.exp(-dt*.005);
  const pointerEase=reduced?1:1-Math.exp(-dt*.007);lookX+=(targetX-lookX)*pointerEase;lookY+=(targetY-lookY)*pointerEase;
  fatigue+=((r.air||0)-fatigue)*ease;
  tears+=(r.tears-tears)*ease;open+=((r.scream||r.tears>.66?1:0)-open)*ease;warmth.heat.value=r.heat;warmth.cold.value=r.cold||0;uniforms.cold.value=r.cold||0;
  atmosphere.scale.setScalar(1.012+Math.pow(Math.max(r.heat,r.cold||0),1.6)*.083);
  turntable.rotation.set(orbit.state.pitch,orbit.state.yaw,0);
  // Continuous API intensity, with eased starts/stops instead of three identical shake loops.
  const shake=Math.sqrt(r.shake),phase=time%6500,duration=1800+shake*4000;
  const envelope=shake>0?THREE.MathUtils.smoothstep(phase,0,260)*(1-THREE.MathUtils.smoothstep(phase,duration-420,duration)):0;
  const wave=reduced?0:Math.sin(time*(.016+shake*.032))*shake*envelope;
  const sob=!reduced&&tears>.66?Math.sin(time*(.008+tears*.008))*(tears-.66)/.34:0;
  globe.position.set(lookX*.045+wave*.025,lookY*.035+sob*.017,0);
  globe.rotation.set(-lookY*.075+sob*.022,THREE.MathUtils.clamp(lookX*.10+wave*.46,-.53,.53),wave*.065-lookX*.015);
  const blinkPhase=time%5800,blink=!reduced&&blinkPhase<180?Math.sin(blinkPhase/180*Math.PI)**2:0;
  eyes.forEach(({eye,gaze,baseX})=>{
   eye.scale.y=(1-tears*tears*.48-fatigue*.25)*(1-blink*.9);
   const x=baseX+lookX*.026,y=-.012-tears*.012+lookY*.032;
   gaze.position.set(x,y,.016*Math.sqrt(Math.max(.1,1-(x/.128)**2-(y/.166)**2))+.003);
  });
  brows.forEach((b,i)=>{b.rotation.z=(i?-1:1)*(tears*.44+r.heat*.16+fatigue*.18);b.position.y=.40+open*.025+(r.cold||0)*.018;});
  mouth.visible=lips.visible=open>.05;quietMaterial.opacity=1-open;
  expression.scale.value.set(.80+tears*tears*.55,.05+open*(.72+r.heat*.25+tears*.25)+sob*.07);
  if((r.cold||0)>.04&&!r.scream&&tears<=.66){
   mouth.visible=lips.visible=true;quietMaterial.opacity=0;
   expression.scale.value.set(.80+(reduced?0:Math.sin(time*.045)*(r.cold||0)*.035),.18+(r.cold||0)*.12);
  }
  water.time.value=reduced?0:time;water.strength.value=tears;streams.forEach(stream=>{stream.visible=tears>.28;});pools.forEach(pool=>{pool.visible=tears>.04;pool.position.y=.006+tears*tears*.080;pool.position.z=surface(pool.position.x,pool.position.y,.022);pool.scale.set(.08+tears*tears*.085,.004+tears*.016,.007);});
  if(width&&height)renderer.render(scene,camera);
 }};
}
