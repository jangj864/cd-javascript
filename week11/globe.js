import * as THREE from './vendor/three.module.js';
import earthMap from './assets/earth.jpg';

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
 const ink=new THREE.MeshStandardMaterial({color:'#26202c',roughness:.85});
 const eyeWhite=new THREE.MeshStandardMaterial({color:'#fffdf2',roughness:.5});
 const iris=new THREE.MeshStandardMaterial({color:'#352631',roughness:.4});
 const sphere=new THREE.SphereGeometry(1,72,48);
 function ball(parent,x,y,z,sx,sy,sz,material){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;}
 function surface(x,y,extra=.012){return Math.sqrt(Math.max(.015,1-x*x-y*y))+extra;}
 function line(parent,points,material,r=.016){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,32,r,8,false),material);parent.add(mesh);return mesh;}
 const texture=new THREE.TextureLoader().load(earthMap);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 const uniforms={map:{value:texture}};
 const earthMaterial=new THREE.ShaderMaterial({uniforms,
  vertexShader:'varying vec2 vUv;varying vec3 vN;varying vec3 vP;void main(){vUv=uv;vP=position;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform sampler2D map;varying vec2 vUv;varying vec3 vN;varying vec3 vP;void main(){
   vec3 land=texture2D(map,vUv).rgb;float front=smoothstep(.45,.8,vP.z);
   float face=(1.-smoothstep(.62,1.,length(vec2(vP.x/.66,(vP.y+.01)/.67))))*front;
   vec3 ocean=vec3(.055,.17,.30);land=mix(land*1.28,ocean,face*.90);
   float light=.66+.34*max(0.,dot(normalize(vN),normalize(vec3(-.4,.6,1.))));
   gl_FragColor=vec4(land*light,1.);
   #include <colorspace_fragment>
  }`});
 const headGeometry=new THREE.SphereGeometry(1,192,128),headPositions=headGeometry.attributes.position;
 for(let i=0;i<headPositions.count;i++){
  const x=headPositions.getX(i),y=headPositions.getY(i),z=headPositions.getZ(i);if(z<.75)continue;
  const tip=.065*Math.exp(-((x/.075)**2)-(((y+.085)/.07)**2));
  const bridge=.022*Math.exp(-((x/.036)**2)-(((y-.005)/.10)**2));
  headPositions.setZ(i,z+tip+bridge);
 }
 headGeometry.computeVertexNormals();globe.add(new THREE.Mesh(headGeometry,earthMaterial));
 const warmth={heat:{value:0}};
 const atmosphereMaterial=new THREE.ShaderMaterial({uniforms:warmth,transparent:true,depthWrite:false,
  vertexShader:'varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform float heat;varying vec3 vN;void main(){
   vec3 colour=heat<.5?mix(vec3(1.,.82,.23),vec3(1.,.43,.14),heat*2.):mix(vec3(1.,.43,.14),vec3(1.,.15,.12),(heat-.5)*2.);
   float rim=pow(1.-abs(normalize(vN).z),1.9);float alpha=heat*(.035+.64*rim);gl_FragColor=vec4(colour,alpha);
  }`});
 const atmosphere=ball(globe,0,0,0,1.045,1.045,1.045,atmosphereMaterial);atmosphere.renderOrder=1;
 const skin=new THREE.MeshStandardMaterial({color:'#24547b',roughness:.95});
 for(const side of [-1,1]){
  ball(globe,side*1.005,-.02,0,.10,.15,.075,skin);
  line(globe,[[side*1.018,.04,.072],[side*1.045,-.025,.077],[side*1.02,-.075,.071]],ink,.008);
 }
 const eyes=[],brows=[];
 for(const x of [-.30,.30]){
  const group=new THREE.Group();group.position.set(x,.16,surface(x,.16,.008));group.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),new THREE.Vector3(x,.16,surface(x,.16,0)).normalize());globe.add(group);
  const eye=new THREE.Group();group.add(eye);
  ball(eye,0,0,0,.137,.181,.055,eyeWhite);
  const pupil=ball(eye,x>0?-.012:.012,-.012,.053,.083,.120,.022,iris);
  ball(eye,-.027,.055,.077,.027,.035,.008,eyeWhite);ball(eye,.025,-.030,.078,.011,.014,.006,eyeWhite);
  eyes.push({eye,pupil});
  const brow=new THREE.Group();brow.position.set(x,.41,surface(x,.41,.017));globe.add(brow);
  line(brow,[[-.105,-.025,0],[0,.025,.014],[.105,-.025,0]],ink,.024);brows.push(brow);
 }
 // A curved mouth patch and a shallow lip rim share the same expression controls.
 const mouthCanvas=document.createElement('canvas');mouthCanvas.width=512;mouthCanvas.height=640;const c=mouthCanvas.getContext('2d');
 c.beginPath();c.ellipse(256,320,246,309,0,0,Math.PI*2);const cavity=c.createRadialGradient(256,370,20,256,320,320);cavity.addColorStop(0,'#482631');cavity.addColorStop(1,'#180e19');c.fillStyle=cavity;c.fill();c.save();c.clip();
 c.fillStyle='#fff5dc';c.beginPath();c.moveTo(10,56);c.quadraticCurveTo(256,112,502,56);c.lineTo(502,124);c.quadraticCurveTo(256,183,10,124);c.closePath();c.fill();
 const tongue=c.createLinearGradient(0,490,0,640);tongue.addColorStop(0,'#ec909c');tongue.addColorStop(1,'#b86579');c.fillStyle=tongue;c.beginPath();c.ellipse(256,594,176,106,0,0,Math.PI*2);c.fill();c.restore();
 const mouthTexture=new THREE.CanvasTexture(mouthCanvas);mouthTexture.colorSpace=THREE.SRGBColorSpace;
 const expression={scale:{value:new THREE.Vector2(1,1)},map:{value:mouthTexture}};
 const mouth=new THREE.Mesh(new THREE.PlaneGeometry(2,2,40,40),new THREE.ShaderMaterial({uniforms:expression,transparent:true,depthWrite:false,
  vertexShader:'uniform vec2 scale;varying vec2 vUv;void main(){vUv=uv;vec2 p=position.xy*vec2(.17,.195)*scale+vec2(0.,-.35);float z=sqrt(max(.015,1.-dot(p,p)))+.015;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}',
  fragmentShader:'uniform sampler2D map;varying vec2 vUv;void main(){vec4 c=texture2D(map,vUv);if(c.a<.01)discard;gl_FragColor=c;}'
 }));globe.add(mouth);
 const lips=new THREE.Mesh(new THREE.RingGeometry(.91,1.035,80),new THREE.ShaderMaterial({uniforms:{scale:expression.scale},transparent:true,
  vertexShader:'uniform vec2 scale;varying float rim;void main(){rim=length(position.xy);vec2 p=position.xy*vec2(.17,.195)*scale+vec2(0.,-.35);float z=sqrt(max(.015,1.-dot(p,p)))+.018+sin((rim-.91)/.125*3.14159)*.008;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}',
  fragmentShader:'varying float rim;void main(){gl_FragColor=vec4(.21,.22,.31,.84);}'
 }));globe.add(lips);
 const quietMaterial=ink.clone();quietMaterial.transparent=true;
 const quiet=line(globe,[[-.115,-.32,surface(-.115,-.32)],[0,-.28,surface(0,-.28)],[.115,-.32,surface(.115,-.32)]],quietMaterial,.012);
 // Unbroken water follows the cheeks; its edges and end dissolve softly.
 const water={time:{value:0},strength:{value:0}};
 const waterMaterial=new THREE.ShaderMaterial({uniforms:water,transparent:true,depthWrite:false,side:THREE.DoubleSide,
  vertexShader:'uniform float strength;varying vec2 vUv;void main(){vUv=uv;float side=position.z;float p=uv.y;float centre=side*(.30+.035*(1.-p));float x=centre+(uv.x-.5)*(.018+strength*.067);float y=(-.014+strength*.030)-(1.-p)*(.64+strength*.31);float z=sqrt(max(.015,1.-x*x-y*y))+.020;gl_Position=projectionMatrix*modelViewMatrix*vec4(x,y,z,1.);}',
  fragmentShader:`uniform float time;uniform float strength;varying vec2 vUv;void main(){float edge=smoothstep(0.,.18,vUv.x)*smoothstep(0.,.18,1.-vUv.x);float end=smoothstep(0.,.13,vUv.y);float flow=.5+.5*sin(vUv.y*30.+time*.007);vec3 colour=mix(vec3(.20,.66,.87),vec3(.72,.92,1.),.24+flow*.14);gl_FragColor=vec4(colour,edge*end*(.36+strength*.43));}`
 });
 const streams=[];
 for(const side of [-1,1]){const geometry=new THREE.PlaneGeometry(1,1,4,48);const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,side);const stream=new THREE.Mesh(geometry,waterMaterial);stream.frustumCulled=false;stream.renderOrder=3;globe.add(stream);streams.push(stream);}
 // Small pools under the eyelids make the first tear stage feel wet rather than mechanical.
 const poolMaterial=new THREE.MeshStandardMaterial({color:'#78cce8',roughness:.2,transparent:true,opacity:.65});
 const pools=[-.30,.30].map(x=>ball(globe,x,-.008,surface(x,-.008,.035),.09,.018,.018,poolMaterial));
 let yaw=0,dragging=false,lastX=0,lastInteraction=-Infinity,width=0,height=0,lastTime=0,tears=0,open=0;
 container.style.touchAction='none';
 container.addEventListener('pointerdown',event=>{if(event.button!==0)return;dragging=true;lastX=event.clientX;container.setPointerCapture(event.pointerId);container.classList.add('dragging');});
 container.addEventListener('pointermove',event=>{if(!dragging)return;yaw=THREE.MathUtils.clamp(yaw+(event.clientX-lastX)*.004,-.35,.35);lastX=event.clientX;lastInteraction=performance.now();});
 const end=()=>{dragging=false;container.classList.remove('dragging');};['pointerup','pointercancel','lostpointercapture'].forEach(event=>container.addEventListener(event,end));
 const reset=()=>{yaw=0;lastInteraction=performance.now();};container.addEventListener('dblclick',reset);
 container.parentElement.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home'].includes(event.key))return;event.preventDefault();if(event.key==='Home')reset();else{if(event.key==='ArrowLeft')yaw=Math.max(-.35,yaw-.10);if(event.key==='ArrowRight')yaw=Math.min(.35,yaw+.10);lastInteraction=performance.now();}});
 new ResizeObserver(()=>{width=container.clientWidth;height=container.clientHeight;if(!height)return;renderer.setSize(width,height,false);const aspect=width/height,h=Math.max(1.17,1.18/aspect);camera.left=-h*aspect;camera.right=h*aspect;camera.top=h;camera.bottom=-h;camera.updateProjectionMatrix();}).observe(container);
 return {draw(r,time,reduced){
  const dt=Math.min(80,Math.max(16,time-lastTime));lastTime=time;const ease=reduced?1:1-Math.exp(-dt*.005);
  tears+=(r.tears-tears)*ease;open+=((r.scream||r.tears>.66?1:0)-open)*ease;warmth.heat.value=r.heat;
  const shake=r.shake<=0?0:r.shake>.66?1:r.shake>.28?.55:.22;const active=shake>0&&(time%6500)<1600+shake*3500;
  const wave=active&&!reduced&&!dragging&&time-lastInteraction>1400?Math.sin(time*(.012+shake*.037))*shake:0;
  globe.rotation.set(0,THREE.MathUtils.clamp(yaw+wave*.25,-.50,.50),wave*.035);
  const blinkPhase=time%5800,blink=!reduced&&blinkPhase<180?Math.sin(blinkPhase/180*Math.PI)**2:0;eyes.forEach(({eye,pupil},i)=>{eye.scale.y=(1-tears*.20)*(1-blink*.9);pupil.position.y=-.012-tears*.012;pupil.position.x=(i?-.012:.012)+(reduced?0:Math.sin(time*.00045)*.004);});
  brows.forEach((b,i)=>{b.rotation.z=(i?-1:1)*(tears*.30+r.heat*.10);b.position.y=.40+open*.025;});
  mouth.visible=lips.visible=open>.05;quietMaterial.opacity=1-open;
  expression.scale.value.set(.85+tears*.25,.05+open*(.90+tears*.18)+(reduced?0:Math.sin(time*.012)*open*.018));
  water.time.value=reduced?0:time;water.strength.value=tears;streams.forEach(stream=>{stream.visible=tears>.28;});pools.forEach(pool=>{pool.visible=tears>.04;pool.position.y=-.014+tears*.030;pool.position.z=surface(pool.position.x,pool.position.y,.035);pool.scale.y=.010+tears*.013;});
  if(width&&height)renderer.render(scene,camera);
 }};
}
