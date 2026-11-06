import * as THREE from './vendor/three.module.js';

// A single blue globe with expressions on its curved surface.
export function createEarth(container) {
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 container.replaceChildren(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1.35,1.35,1.35,-1.35,.1,20);
 camera.position.z=6;
 scene.add(new THREE.HemisphereLight(0xffffff,0x36546a,2));
 const key=new THREE.DirectionalLight(0xfff5e7,2.1);key.position.set(-3,4,5);scene.add(key);
 const globe=new THREE.Group();scene.add(globe);
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
 const continents=[
  // Rounded coastal bays and peninsulas keep the map legible without a jagged outline.
  'M12 104Q21 88 37 83Q43 78 49 83Q59 73 70 77Q82 68 94 76Q103 72 111 82Q121 91 132 94Q137 103 149 105Q155 112 166 115Q177 125 168 138Q158 140 157 149Q146 154 149 166Q153 174 144 181Q139 187 144 197Q150 204 145 210Q137 206 133 195Q124 191 119 202Q118 211 124 216Q133 221 129 228Q124 234 117 227Q109 224 106 214Q99 215 98 225Q94 226 91 216Q87 205 80 200Q78 188 71 179Q62 169 51 172Q44 175 39 166Q30 165 29 157Q19 154 19 144Q10 135 12 122Q8 114 12 104Z',
  'M123 240Q133 234 144 239Q149 247 161 249Q167 259 177 262Q181 270 187 279Q192 290 185 300Q180 305 183 313Q178 322 179 331Q172 340 171 350Q163 357 161 367Q154 375 152 386Q148 398 144 391Q141 380 145 369Q140 360 144 350Q139 340 143 329Q139 316 132 311Q132 299 125 292Q125 282 118 274Q113 257 123 240Z',
  'M179 47Q188 38 201 38Q205 31 214 40Q226 41 228 52Q236 59 227 70Q226 80 218 84Q214 95 204 96Q196 105 190 92Q181 88 181 77Q173 70 180 61Q175 53 179 47Z',
  'M341 134Q349 120 357 121Q358 109 368 112Q374 123 382 116Q390 120 394 114Q402 115 403 104Q411 86 424 94Q431 91 434 100Q440 106 449 99Q458 99 467 86Q480 75 493 77Q505 67 521 76Q535 89 546 85Q555 91 569 81Q588 75 602 78Q620 70 641 81Q651 96 665 92Q679 102 690 94Q706 86 718 94Q735 88 747 99Q760 109 761 117Q774 123 760 133Q766 142 751 146Q740 161 727 154Q715 161 705 156Q690 159 686 171Q683 181 673 181Q664 192 656 192Q653 182 646 187Q639 191 636 202Q628 205 626 215Q617 223 611 213Q604 226 595 217Q589 211 589 201Q577 201 574 187Q566 180 556 182Q544 178 542 169Q529 168 525 157Q514 151 501 159Q486 164 477 158Q463 166 458 154Q447 148 441 158Q437 171 426 165Q417 174 408 171Q397 174 388 164Q378 157 372 165Q363 172 358 164Q345 169 341 157Q335 147 341 134Z',
  'M353 188Q364 179 378 181Q388 174 400 184Q414 181 425 194Q437 197 441 212Q441 222 449 224Q458 223 455 230Q448 241 437 244Q432 252 423 260Q420 271 416 281Q418 295 408 305Q405 318 393 323Q382 331 377 318Q372 309 371 298Q362 292 362 280Q355 274 359 263Q357 252 347 250Q338 251 336 240Q328 230 335 220Q332 209 342 201Q342 191 353 188Z',
  'M607 241Q615 233 625 237Q632 230 640 242Q643 251 651 250Q656 257 666 253Q679 250 684 259Q692 266 681 273Q672 279 663 269Q653 264 650 272Q640 275 635 267Q625 271 621 263Q608 264 611 253Q603 248 607 241Z',
  'M680 312Q689 303 697 302Q701 287 712 292Q719 294 721 305Q724 313 731 308Q737 303 737 294Q742 287 748 299Q751 308 760 311Q767 320 770 330Q779 339 770 348Q772 359 759 360Q751 369 742 361Q733 367 725 358Q718 348 711 351Q700 358 691 349Q679 351 675 341Q665 339 671 327Q668 320 680 312Z',
  'M438 286Q444 281 449 287Q453 296 448 304Q447 315 440 317Q432 313 435 304Q431 295 438 286Z'
 ];
 continents.forEach(path=>mapContext.fill(new Path2D(path)));
 const texture=new THREE.CanvasTexture(map);texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 const uniforms={map:{value:texture}};
 const earthMaterial=new THREE.ShaderMaterial({uniforms,
  vertexShader:'varying vec2 vUv;varying vec3 vN;varying vec3 vP;varying vec3 vView;void main(){vUv=uv;vP=position;vN=normalize(normalMatrix*normal);vec4 viewed=modelViewMatrix*vec4(position,1.);vView=viewed.xyz;gl_Position=projectionMatrix*viewed;}',
  fragmentShader:`uniform sampler2D map;varying vec2 vUv;varying vec3 vN;varying vec3 vP;varying vec3 vView;
   float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
   float noise(vec3 p){vec3 cell=floor(p),f=fract(p);f=f*f*(3.-2.*f);
    return mix(mix(mix(hash(cell),hash(cell+vec3(1.,0.,0.)),f.x),mix(hash(cell+vec3(0.,1.,0.)),hash(cell+vec3(1.,1.,0.)),f.x),f.y),mix(mix(hash(cell+vec3(0.,0.,1.)),hash(cell+vec3(1.,0.,1.)),f.x),mix(hash(cell+vec3(0.,1.,1.)),hash(cell+vec3(1.,1.,1.)),f.x),f.y),f.z);
   }
   float terrain(vec3 p){return noise(p)*.57+noise(p*2.03+7.)*.29+noise(p*4.07+17.)*.14;}
   void main(){
    float land=texture2D(map,vUv).a;float front=smoothstep(.45,.8,vP.z);
    float face=(1.-smoothstep(.62,1.,length(vec2(vP.x/.66,(vP.y+.01)/.67))))*front;
    float coverage=land*(1.-face),height=terrain(vP*18.);
    vec3 ocean=vec3(.055,.22,.36);
    vec3 ground=mix(vec3(.235,.405,.295),vec3(.365,.535,.365),smoothstep(.23,.78,height));
    ground=mix(ground,vec3(.43,.52,.365),smoothstep(.69,.86,height)*.32);
    vec3 colour=mix(ocean,ground,coverage);
    vec3 normal=normalize(vN),dx=dFdx(vView),dy=dFdy(vView);
    vec3 r1=cross(dy,normal),r2=cross(normal,dx);float determinant=dot(dx,r1);
    float relief=height*.009*coverage;
    vec3 gradient=sign(determinant)*(dFdx(relief)*r1+dFdy(relief)*r2);
    normal=normalize(max(abs(determinant),.00000001)*normal-gradient);
    float light=.72+.28*max(0.,dot(normal,normalize(vec3(-.4,.6,1.))));
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
 headGeometry.computeVertexNormals();globe.add(new THREE.Mesh(headGeometry,earthMaterial));
 const warmth={heat:{value:0}};
 const atmosphereMaterial=new THREE.ShaderMaterial({uniforms:warmth,transparent:true,depthWrite:false,
  vertexShader:'varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform float heat;varying vec3 vN;void main(){
   vec3 colour=mix(vec3(1.,.88,.16),vec3(1.,.38,.045),smoothstep(.28,.65,heat));
   colour=mix(colour,vec3(1.,.075,.035),smoothstep(.65,1.,heat));
   float rim=pow(1.-abs(normalize(vN).z),mix(3.,1.15,heat));
   float alpha=heat*(.025+(.52+heat*.40)*rim);gl_FragColor=vec4(colour,alpha);
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
  line(brow,[[-.105,-.018,0],[0,.018,.004],[.105,-.018,0]],ink,.013);brows.push(brow);
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
 let width=0,height=0,lastTime=0,tears=0,open=0;
 let targetX=0,targetY=0,lookX=0,lookY=0;
 const centrePointer=()=>{targetX=0;targetY=0;};
 function trackPointer(event){
  if(event.pointerType==='touch'||event.buttons>0)return;
  const bounds=container.getBoundingClientRect(),reach=Math.min(bounds.width,bounds.height)*.65;
  if(!reach)return;
  targetX=THREE.MathUtils.clamp((event.clientX-bounds.left-bounds.width/2)/reach,-1,1);
  targetY=THREE.MathUtils.clamp((bounds.top+bounds.height/2-event.clientY)/reach,-1,1);
 }
 window.addEventListener('pointermove',trackPointer,{passive:true});
 document.documentElement.addEventListener('pointerleave',centrePointer);window.addEventListener('blur',centrePointer);
 new ResizeObserver(()=>{width=container.clientWidth;height=container.clientHeight;if(!height)return;renderer.setSize(width,height,false);const aspect=width/height,h=Math.max(1.17,1.18/aspect);camera.left=-h*aspect;camera.right=h*aspect;camera.top=h;camera.bottom=-h;camera.updateProjectionMatrix();}).observe(container);
 return {draw(r,time,reduced){
  const dt=Math.min(80,Math.max(16,time-lastTime));lastTime=time;const ease=reduced?1:1-Math.exp(-dt*.005);
  const pointerEase=reduced?1:1-Math.exp(-dt*.007);lookX+=(targetX-lookX)*pointerEase;lookY+=(targetY-lookY)*pointerEase;
  tears+=(r.tears-tears)*ease;open+=((r.scream||r.tears>.66?1:0)-open)*ease;warmth.heat.value=r.heat;
  atmosphere.scale.setScalar(1.012+Math.pow(r.heat,1.6)*.083);
  // Continuous API intensity, with eased starts/stops instead of three identical shake loops.
  const shake=Math.sqrt(r.shake),phase=time%6500,duration=1800+shake*4000;
  const envelope=shake>0?THREE.MathUtils.smoothstep(phase,0,260)*(1-THREE.MathUtils.smoothstep(phase,duration-420,duration)):0;
  const wave=reduced?0:Math.sin(time*(.016+shake*.032))*shake*envelope;
  const sob=!reduced&&tears>.66?Math.sin(time*(.008+tears*.008))*(tears-.66)/.34:0;
  globe.position.set(lookX*.045+wave*.025,lookY*.035+sob*.017,0);
  globe.rotation.set(-lookY*.075+sob*.022,THREE.MathUtils.clamp(lookX*.10+wave*.46,-.53,.53),wave*.065-lookX*.015);
  const blinkPhase=time%5800,blink=!reduced&&blinkPhase<180?Math.sin(blinkPhase/180*Math.PI)**2:0;
  eyes.forEach(({eye,gaze,baseX})=>{
   eye.scale.y=(1-tears*tears*.48)*(1-blink*.9);
   const x=baseX+lookX*.026,y=-.012-tears*.012+lookY*.032;
   gaze.position.set(x,y,.016*Math.sqrt(Math.max(.1,1-(x/.128)**2-(y/.166)**2))+.003);
  });
  brows.forEach((b,i)=>{b.rotation.z=(i?-1:1)*(tears*.44+r.heat*.16);b.position.y=.40+open*.025;});
  mouth.visible=lips.visible=open>.05;quietMaterial.opacity=1-open;
  expression.scale.value.set(.80+tears*tears*.55,.05+open*(.72+r.heat*.25+tears*.25)+sob*.07);
  water.time.value=reduced?0:time;water.strength.value=tears;streams.forEach(stream=>{stream.visible=tears>.28;});pools.forEach(pool=>{pool.visible=tears>.04;pool.position.y=.006+tears*tears*.080;pool.position.z=surface(pool.position.x,pool.position.y,.022);pool.scale.set(.08+tears*tears*.085,.004+tears*.016,.007);});
  if(width&&height)renderer.render(scene,camera);
 }};
}
