(()=>{var kl=0,mo=1,Vl=2;var Vc=1,Hl=2,sn=3,yn=0,At=1,Ht=2;var _n=0,ri=1,go=2,_o=3,xo=4,Gl=5,Pn=100,Wl=101,Xl=102,vo=103,yo=104,ql=200,Yl=201,$l=202,Zl=203,Wr=204,Xr=205,Jl=206,Kl=207,Ql=208,jl=209,eh=210,th=211,nh=212,ih=213,sh=214,rh=0,ah=1,oh=2,Ms=3,ch=4,lh=5,hh=6,uh=7,Hc=0,dh=1,fh=2,xn=0,ph=1,mh=2,gh=3,_h=4,xh=5,vh=6;var Gc=300,ci=301,li=302,qr=303,Yr=304,Js=306,$r=1e3,Gt=1001,Zr=1002,bt=1003,Mo=1004;var ur=1005;var Nt=1006,yh=1007;var Ii=1008;var vn=1009,Mh=1010,Sh=1011,Ua=1012,Wc=1013,mn=1014,gn=1015,Ui=1016,Xc=1017,qc=1018,In=1020,bh=1021,Wt=1023,Eh=1024,wh=1025,Un=1026,hi=1027,Th=1028,Yc=1029,Ah=1030,$c=1031,Zc=1033,dr=33776,fr=33777,pr=33778,mr=33779,So=35840,bo=35841,Eo=35842,wo=35843,Jc=36196,To=37492,Ao=37496,Co=37808,Ro=37809,Po=37810,Lo=37811,Io=37812,Uo=37813,Do=37814,No=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Vo=37821,gr=36492,Ho=36494,Go=36495,Ch=36283,Wo=36284,Xo=36285,qo=36286;var Ss=2300,bs=2301,_r=2302,Yo=2400,$o=2401,Zo=2402;var Kc=3e3,Dn=3001,Rh=3200,Ph=3201,Lh=0,Ih=1,Ft="",st="srgb",on="srgb-linear",Da="display-p3",Ks="display-p3-linear",Es="linear",Qe="srgb",ws="rec709",Ts="p3";var zn=7680;var Jo=519,Uh=512,Dh=513,Nh=514,Qc=515,Fh=516,Oh=517,Bh=518,zh=519,Ko=35044;var Qo="300 es",Jr=1035,an=2e3,As=2001,Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=1234567,Ti=Math.PI/180,Di=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Na(i,e){return(i%e+e)%e}function kh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Vh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ai(i,e,t){return(1-t)*i+t*e}function Hh(i,e,t,n){return Ai(i,e,1-Math.exp(-t*n))}function Gh(i,e=1){return e-Math.abs(Na(i,e*2)-e)}function Wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yh(i,e){return i+Math.random()*(e-i)}function $h(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(jo=i);let e=jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*Ti}function Kh(i){return i*Di}function Kr(i){return(i&i-1)===0&&i!==0}function Qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jh(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _i={DEG2RAD:Ti,RAD2DEG:Di,generateUUID:gi,clamp:pt,euclideanModulo:Na,mapLinear:kh,inverseLerp:Vh,lerp:Ai,damp:Hh,pingpong:Gh,smoothstep:Wh,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:$h,seededRandom:Zh,degToRad:Jh,radToDeg:Kh,isPowerOfTwo:Kr,ceilPowerOfTwo:Qh,floorPowerOfTwo:Cs,setQuaternionFromProperEuler:jh,normalize:Mt,denormalize:ti},ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],b=s[1],v=s[4],T=s[7],P=s[2],A=s[5],E=s[8];return r[0]=o*_+a*b+c*P,r[3]=o*m+a*v+c*A,r[6]=o*d+a*T+c*E,r[1]=l*_+h*b+u*P,r[4]=l*m+h*v+u*A,r[7]=l*d+h*T+u*E,r[2]=f*_+p*b+g*P,r[5]=f*m+p*v+g*A,r[8]=f*d+p*T+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xr=new Ge;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){let i=Rs("canvas");return i.style.display="block",i}var ec={};function Ci(i){i in ec||(ec[i]=!0,console.warn(i))}var tc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[on]:{transfer:Es,primaries:ws,toReference:i=>i,fromReference:i=>i},[st]:{transfer:Qe,primaries:ws,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ks]:{transfer:Es,primaries:Ts,toReference:i=>i.applyMatrix3(nc),fromReference:i=>i.applyMatrix3(tc)},[Da]:{transfer:Qe,primaries:Ts,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nc),fromReference:i=>i.applyMatrix3(tc).convertLinearToSRGB()}},tu=new Set([on,Ks]),qe={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ki[e].toReference,s=Ki[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ki[i].primaries},getTransfer:function(i){return i===Ft?Es:Ki[i].transfer}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kn,Ps=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=Rs("canvas")),kn.width=e.width,kn.height=e.height;let n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nu=0,Ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yr(s[o].image)):r.push(yr(s[o]))}else r=yr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ps.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,Bt=class i extends Mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gt,s=Gt,r=Nt,o=Ii,a=Wt,c=vn,l=i.DEFAULT_ANISOTROPY,h=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=gi(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dn?st:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?Dn:Kc}set encoding(e){Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?st:Ft}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Gc;Bt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,T=(p+1)/2,P=(d+1)/2,A=(h+f)/4,E=(u+_)/4,q=(g+m)/4;return v>T&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=E/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=q/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=q/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr=class extends Mn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?st:Ft),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ls(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Is=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*_,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let P=Math.sqrt(v),A=Math.atan2(P,d*b);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let T=a*b;if(c=c*m+f*T,l=l*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mr=new L,ic=new Sn,Nn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(r,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),ji.subVectors(this.max,Si),Vn.subVectors(e.a,Si),Hn.subVectors(e.b,Si),Gn.subVectors(e.c,Si),hn.subVectors(Hn,Vn),un.subVectors(Gn,Hn),wn.subVectors(Vn,Gn);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-wn.z,wn.y,hn.z,0,-hn.x,un.z,0,-un.x,wn.z,0,-wn.x,-hn.y,hn.x,0,-un.y,un.x,0,-wn.y,wn.x,0];return!Sr(t,Vn,Hn,Gn,ji)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,Vn,Hn,Gn,ji))?!1:(es.crossVectors(hn,un),t=[es.x,es.y,es.z],Sr(t,Vn,Hn,Gn,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qt=[new L,new L,new L,new L,new L,new L,new L,new L],zt=new L,Qi=new Nn,Vn=new L,Hn=new L,Gn=new L,hn=new L,un=new L,wn=new L,Si=new L,ji=new L,es=new L,Tn=new L;function Sr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Tn.fromArray(i,r);let a=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var su=new Nn,bi=new L,br=new L,Ni=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);let t=bi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(br)),this.expandByPoint(bi.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jt=new L,Er=new L,ts=new L,dn=new L,wr=new L,ns=new L,Tr=new L,Us=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Er.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Er);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=dn.dot(this.direction),c=-dn.dot(ts),l=dn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Er).addScaledVector(ts,f),p}intersectSphere(e,t){jt.subVectors(e.center,this.origin);let n=jt.dot(this.direction),s=jt.dot(jt)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,s,r){wr.subVectors(t,e),ns.subVectors(n,e),Tr.crossVectors(wr,ns);let o=this.direction.dot(Tr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);let c=a*this.direction.dot(ns.crossVectors(dn,ns));if(c<0)return null;let l=a*this.direction.dot(wr.cross(dn));if(l<0||c+l>o)return null;let h=-a*dn.dot(Tr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Wn.setFromMatrixColumn(e,0).length(),r=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,au)}lookAt(e,t,n){let s=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),fn.crossVectors(n,Rt),fn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),fn.crossVectors(n,Rt)),fn.normalize(),is.crossVectors(Rt,fn),s[0]=fn.x,s[4]=is.x,s[8]=Rt.x,s[1]=fn.y,s[5]=is.y,s[9]=Rt.y,s[2]=fn.z,s[6]=is.z,s[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],v=n[7],T=n[11],P=n[15],A=s[0],E=s[4],q=s[8],y=s[12],w=s[1],X=s[5],Q=s[9],re=s[13],R=s[2],O=s[6],Y=s[10],N=s[14],I=s[3],U=s[7],$=s[11],J=s[15];return r[0]=o*A+a*w+c*R+l*I,r[4]=o*E+a*X+c*O+l*U,r[8]=o*q+a*Q+c*Y+l*$,r[12]=o*y+a*re+c*N+l*J,r[1]=h*A+u*w+f*R+p*I,r[5]=h*E+u*X+f*O+p*U,r[9]=h*q+u*Q+f*Y+p*$,r[13]=h*y+u*re+f*N+p*J,r[2]=g*A+_*w+m*R+d*I,r[6]=g*E+_*X+m*O+d*U,r[10]=g*q+_*Q+m*Y+d*$,r[14]=g*y+_*re+m*N+d*J,r[3]=b*A+v*w+T*R+P*I,r[7]=b*E+v*X+T*O+P*U,r[11]=b*q+v*Q+T*Y+P*$,r[15]=b*y+v*re+T*N+P*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],b=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,v=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,T=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,P=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,A=t*b+n*v+s*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=b*E,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*E,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*E,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*E,e[4]=v*E,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*E,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*E,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*E,e[8]=T*E,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*d-t*u*d)*E,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*d+t*a*d)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*E,e[12]=P*E,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*E,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,b=c*l,v=c*h,T=c*u,P=n.x,A=n.y,E=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+T)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(f+d))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+v)*E,s[9]=(m-b)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Wn.set(s[0],s[1],s[2]).length(),o=Wn.set(s[4],s[5],s[6]).length(),a=Wn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);let l=1/r,h=1/o,u=1/a;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===an)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===As)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,g,_;if(a===an)g=(o+r)*u,_=-2*u;else if(a===As)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wn=new L,kt=new rt,ru=new L(0,0,0),au=new L(1,1,1),fn=new L,is=new L,Rt=new L,sc=new rt,rc=new Sn,Ds=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ds.DEFAULT_ORDER="XYZ";var Fi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ou=0,ac=new L,Xn=new Sn,en=new rt,ss=new L,Ei=new L,cu=new L,lu=new Sn,oc=new L(1,0,0),cc=new L(0,1,0),lc=new L(0,0,1),hu={type:"added"},uu={type:"removed"},Et=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ds,n=new Sn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ei,ss,this.up):en.lookAt(ss,Ei,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(en),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new L(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=new L,tn=new L,Ar=new L,nn=new L,qn=new L,Yn=new L,hc=new L,Cr=new L,Rr=new L,Pr=new L,rs=!1,ni=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vt.subVectors(e,t),s.cross(Vt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vt.subVectors(s,t),tn.subVectors(n,t),Ar.subVectors(e,t);let o=Vt.dot(Vt),a=Vt.dot(tn),c=Vt.dot(Ar),l=tn.dot(tn),h=tn.dot(Ar),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,s,r,o,a,c){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,nn.x),c.addScaledVector(o,nn.y),c.addScaledVector(a,nn.z),c)}static isFrontFacing(e,t,n,s){return Vt.subVectors(n,t),tn.subVectors(e,t),Vt.cross(tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Vt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qn.subVectors(s,n),Yn.subVectors(r,n),Cr.subVectors(e,n);let c=qn.dot(Cr),l=Yn.dot(Cr);if(c<=0&&l<=0)return t.copy(n);Rr.subVectors(e,s);let h=qn.dot(Rr),u=Yn.dot(Rr);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(qn,o);Pr.subVectors(e,r);let p=qn.dot(Pr),g=Yn.dot(Pr);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Yn,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return hc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(hc,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(qn,o).addScaledVector(Yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},as={h:0,s:0,l:0};function Lr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Na(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=el[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return qe.fromWorkingColorSpace(xt.copy(this),e),Math.round(pt(xt.r*255,0,255))*65536+Math.round(pt(xt.g*255,0,255))*256+Math.round(pt(xt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(xt.copy(this),t);let n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=st){qe.fromWorkingColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,s=xt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(as);let n=Ai(pn.h,as.h,t),s=Ai(pn.s,as.s,t),r=Ai(pn.l,as.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new Xe;Xe.NAMES=el;var du=0,ui=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ri,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ln=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var it=new L,os=new ye,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}};var Ns=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fs=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}};var fu=0,Dt=new rt,Ir=new Et,$n=new L,Pt=new Nn,wi=new Nn,ut=new L,Zt=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?Fs:Ns)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Pt.min,wi.min),Pt.expandByPoint(ut),ut.addVectors(Pt.max,wi.max),Pt.expandByPoint(ut)):(Pt.expandByPoint(wi.min),Pt.expandByPoint(wi.max))}Pt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ut.fromBufferAttribute(a,l),c&&($n.fromBufferAttribute(e,l),ut.add($n)),s=Math.max(s,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new L,h[w]=new L;let u=new L,f=new L,p=new L,g=new ye,_=new ye,m=new ye,d=new L,b=new L;function v(w,X,Q){u.fromArray(s,w*3),f.fromArray(s,X*3),p.fromArray(s,Q*3),g.fromArray(o,w*2),_.fromArray(o,X*2),m.fromArray(o,Q*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let re=1/(_.x*m.y-m.x*_.y);isFinite(re)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(re),b.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(re),l[w].add(d),l[X].add(d),l[Q].add(d),h[w].add(b),h[X].add(b),h[Q].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,X=T.length;w<X;++w){let Q=T[w],re=Q.start,R=Q.count;for(let O=re,Y=re+R;O<Y;O+=3)v(n[O+0],n[O+1],n[O+2])}let P=new L,A=new L,E=new L,q=new L;function y(w){E.fromArray(r,w*3),q.copy(E);let X=l[w];P.copy(X),P.sub(E.multiplyScalar(E.dot(X))).normalize(),A.crossVectors(q,X);let re=A.dot(h[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=re}for(let w=0,X=T.length;w<X;++w){let Q=T[w],re=Q.start,R=Q.count;for(let O=re,Y=re+R;O<Y;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uc=new rt,An=new Us,cs=new Ni,dc=new L,Zn=new L,Jn=new L,Kn=new L,Ur=new L,ls=new L,hs=new ye,us=new ye,ds=new ye,fc=new L,pc=new L,mc=new L,fs=new L,ps=new L,mt=class extends Et{constructor(e=new Zt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ls.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ur.fromBufferAttribute(u,e),o?ls.addScaledVector(Ur,h):ls.addScaledVector(Ur.sub(t),h))}t.add(ls)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(cs.containsPoint(An.origin)===!1&&(An.intersectSphere(cs,dc)===null||An.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(uc.copy(r).invert(),An.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,P=v;T<P;T+=3){let A=a.getX(T),E=a.getX(T+1),q=a.getX(T+2);s=ms(this,d,e,n,l,h,u,A,E,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=a.getX(m),v=a.getX(m+1),T=a.getX(m+2);s=ms(this,o,e,n,l,h,u,b,v,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,P=v;T<P;T+=3){let A=T,E=T+1,q=T+2;s=ms(this,d,e,n,l,h,u,A,E,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=m,v=m+1,T=m+2;s=ms(this,o,e,n,l,h,u,b,v,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pu(i,e,t,n,s,r,o,a){let c;if(e.side===At?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===yn,a),c===null)return null;ps.copy(a),ps.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ps);return l<t.near||l>t.far?null:{distance:l,point:ps.clone(),object:i}}function ms(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Zn),i.getVertexPosition(c,Jn),i.getVertexPosition(l,Kn);let h=pu(i,e,t,n,Zn,Jn,Kn,fs);if(h){s&&(hs.fromBufferAttribute(s,a),us.fromBufferAttribute(s,c),ds.fromBufferAttribute(s,l),h.uv=ni.getInterpolation(fs,Zn,Jn,Kn,hs,us,ds,new ye)),r&&(hs.fromBufferAttribute(r,a),us.fromBufferAttribute(r,c),ds.fromBufferAttribute(r,l),h.uv1=ni.getInterpolation(fs,Zn,Jn,Kn,hs,us,ds,new ye),h.uv2=h.uv1),o&&(fc.fromBufferAttribute(o,a),pc.fromBufferAttribute(o,c),mc.fromBufferAttribute(o,l),h.normal=ni.getInterpolation(fs,Zn,Jn,Kn,fc,pc,mc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};ni.getNormal(Zn,Jn,Kn,u.normal),h.face=u}return h}var Oi=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,d,b,v,T,P,A,E,q,y){let w=T/E,X=P/q,Q=T/2,re=P/2,R=A/2,O=E+1,Y=q+1,N=0,I=0,U=new L;for(let $=0;$<Y;$++){let J=$*X-re;for(let ie=0;ie<O;ie++){let W=ie*w-Q;U[_]=W*b,U[m]=J*v,U[d]=R,l.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[d]=A>0?1:-1,h.push(U.x,U.y,U.z),u.push(ie/E),u.push(1-$/q),N+=1}}for(let $=0;$<q;$++)for(let J=0;J<E;J++){let ie=f+J+O*$,W=f+J+O*($+1),K=f+(J+1)+O*($+1),oe=f+(J+1)+O*$;c.push(ie,W,oe),c.push(W,K,oe),I+=6}a.addGroup(p,I,y),p+=I,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function St(i){let e={};for(let t=0;t<i.length;t++){let n=di(i[t]);for(let s in n)e[s]=n[s]}return e}function mu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tl(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}var gu={clone:di,merge:St},_u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Os=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lt=class extends Os{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qn=-90,jn=1,ea=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Qn,jn,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Qn,jn,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Qn,jn,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Qn,jn,e,t);a.layers=this.layers,this.add(a);let c=new Lt(Qn,jn,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Qn,jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bs=class extends Bt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ta=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?st:Ft),this.texture=new Bs(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oi(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:_n});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Nt),new ea(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Dr=new L,vu=new L,yu=new Ge,rn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dr.subVectors(n,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yu.getNormalMatrix(e),s=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new Ni,gs=new L,Bi=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],b=s[13],v=s[14],T=s[15];if(n[0].setComponents(c-r,f-l,m-p,T-d).normalize(),n[1].setComponents(c+r,f+l,m+p,T+d).normalize(),n[2].setComponents(c+o,f+h,m+g,T+b).normalize(),n[3].setComponents(c-o,f-h,m-g,T-b).normalize(),n[4].setComponents(c-a,f-u,m-_,T-v).normalize(),t===an)n[5].setComponents(c+a,f+u,m+_,T+v).normalize();else if(t===As)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var fi=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let b=d*f-o;for(let v=0;v<l;v++){let T=v*u-r;g.push(T,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let v=b+l*d,T=b+l*(d+1),P=b+1+l*(d+1),A=b+1+l*d;p.push(v,T,A),p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Su,alphahash_pars_fragment:bu,alphamap_fragment:Eu,alphamap_pars_fragment:wu,alphatest_fragment:Tu,alphatest_pars_fragment:Au,aomap_fragment:Cu,aomap_pars_fragment:Ru,batching_pars_vertex:Pu,batching_vertex:Lu,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Du,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:ku,color_fragment:Vu,color_pars_fragment:Hu,color_pars_vertex:Gu,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:$u,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Ku,colorspace_fragment:Qu,colorspace_pars_fragment:ju,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:md,envmap_vertex:sd,fog_vertex:rd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:cd,gradientmap_pars_fragment:ld,lightmap_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:dd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:xd,lights_phong_pars_fragment:vd,lights_physical_fragment:yd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:bd,lights_fragment_end:Ed,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Id,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:Bd,normal_fragment_begin:zd,normal_fragment_maps:kd,normal_pars_fragment:Vd,normal_pars_vertex:Hd,normal_vertex:Gd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:$d,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Kd,project_vertex:Qd,dithering_fragment:jd,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:rf,shadowmap_vertex:af,shadowmask_pars_fragment:of,skinbase_vertex:cf,skinning_pars_vertex:lf,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:_f,uv_pars_fragment:xf,uv_pars_vertex:vf,uv_vertex:yf,worldpos_vertex:Mf,background_vert:Sf,background_frag:bf,backgroundCube_vert:Ef,backgroundCube_frag:wf,cube_vert:Tf,cube_frag:Af,depth_vert:Cf,depth_frag:Rf,distanceRGBA_vert:Pf,distanceRGBA_frag:Lf,equirect_vert:If,equirect_frag:Uf,linedashed_vert:Df,linedashed_frag:Nf,meshbasic_vert:Ff,meshbasic_frag:Of,meshlambert_vert:Bf,meshlambert_frag:zf,meshmatcap_vert:kf,meshmatcap_frag:Vf,meshnormal_vert:Hf,meshnormal_frag:Gf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:$f,meshtoon_frag:Zf,points_vert:Jf,points_frag:Kf,shadow_vert:Qf,shadow_frag:jf,sprite_vert:ep,sprite_frag:tp},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},$t={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$t.physical={uniforms:St([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var _s={r:0,b:0,g:0};function np(i,e,t,n,s,r,o){let a=new Xe(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let b=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Js)?(h===void 0&&(h=new mt(new Oi(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:di($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=qe.getTransfer(v.colorSpace)!==Qe,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mt(new fi(2,2),new wt({name:"BackgroundMaterial",uniforms:di($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(_s,tl(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function ip(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(R,O,Y,N,I){let U=!1;if(o){let $=_(N,Y,O);l!==$&&(l=$,p(l.object)),U=d(R,N,Y,I),U&&b(R,N,Y,I)}else{let $=O.wireframe===!0;(l.geometry!==N.id||l.program!==Y.id||l.wireframe!==$)&&(l.geometry=N.id,l.program=Y.id,l.wireframe=$,U=!0)}I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,q(R,O,Y,N),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,O,Y){let N=Y.wireframe===!0,I=a[R.id];I===void 0&&(I={},a[R.id]=I);let U=I[O.id];U===void 0&&(U={},I[O.id]=U);let $=U[N];return $===void 0&&($=m(f()),U[N]=$),$}function m(R){let O=[],Y=[],N=[];for(let I=0;I<s;I++)O[I]=0,Y[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:N,object:R,attributes:{},index:null}}function d(R,O,Y,N){let I=l.attributes,U=O.attributes,$=0,J=Y.getAttributes();for(let ie in J)if(J[ie].location>=0){let K=I[ie],oe=U[ie];if(oe===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;$++}return l.attributesNum!==$||l.index!==N}function b(R,O,Y,N){let I={},U=O.attributes,$=0,J=Y.getAttributes();for(let ie in J)if(J[ie].location>=0){let K=U[ie];K===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));let oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),I[ie]=oe,$++}l.attributes=I,l.attributesNum=$,l.index=N}function v(){let R=l.newAttributes;for(let O=0,Y=R.length;O<Y;O++)R[O]=0}function T(R){P(R,0)}function P(R,O){let Y=l.newAttributes,N=l.enabledAttributes,I=l.attributeDivisors;Y[R]=1,N[R]===0&&(i.enableVertexAttribArray(R),N[R]=1),I[R]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),I[R]=O)}function A(){let R=l.newAttributes,O=l.enabledAttributes;for(let Y=0,N=O.length;Y<N;Y++)O[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function E(R,O,Y,N,I,U,$){$===!0?i.vertexAttribIPointer(R,O,Y,I,U):i.vertexAttribPointer(R,O,Y,N,I,U)}function q(R,O,Y,N){if(n.isWebGL2===!1&&(R.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let I=N.attributes,U=Y.getAttributes(),$=O.defaultAttributeValues;for(let J in U){let ie=U[J];if(ie.location>=0){let W=I[J];if(W===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){let K=W.normalized,oe=W.itemSize,ge=t.get(W);if(ge===void 0)continue;let me=ge.buffer,Ce=ge.type,Re=ge.bytesPerElement,ve=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||W.gpuType===Wc);if(W.isInterleavedBufferAttribute){let Ve=W.data,B=Ve.stride,ct=W.offset;if(Ve.isInstancedInterleavedBuffer){for(let he=0;he<ie.locationSize;he++)P(ie.location+he,Ve.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let he=0;he<ie.locationSize;he++)T(ie.location+he);i.bindBuffer(i.ARRAY_BUFFER,me);for(let he=0;he<ie.locationSize;he++)E(ie.location+he,oe/ie.locationSize,Ce,K,B*Re,(ct+oe/ie.locationSize*he)*Re,ve)}else{if(W.isInstancedBufferAttribute){for(let Ve=0;Ve<ie.locationSize;Ve++)P(ie.location+Ve,W.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ve=0;Ve<ie.locationSize;Ve++)T(ie.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Ve=0;Ve<ie.locationSize;Ve++)E(ie.location+Ve,oe/ie.locationSize,Ce,K,oe*Re,oe/ie.locationSize*Ve*Re,ve)}}else if($!==void 0){let K=$[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(ie.location,K);break;case 3:i.vertexAttrib3fv(ie.location,K);break;case 4:i.vertexAttrib4fv(ie.location,K);break;default:i.vertexAttrib1fv(ie.location,K)}}}}A()}function y(){Q();for(let R in a){let O=a[R];for(let Y in O){let N=O[Y];for(let I in N)g(N[I].object),delete N[I];delete O[Y]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let O=a[R.id];for(let Y in O){let N=O[Y];for(let I in N)g(N[I].object),delete N[I];delete O[Y]}delete a[R.id]}function X(R){for(let O in a){let Y=a[O];if(Y[R.id]===void 0)continue;let N=Y[R.id];for(let I in N)g(N[I].object),delete N[I];delete Y[R.id]}}function Q(){re(),h=!0,l!==c&&(l=c,p(l.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:re,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function sp(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function rp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||e.has("OES_texture_float"),P=v&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:A}}function ap(i){let e=this,t=null,n=0,s=!1,r=!1,o=new rn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,v=b*4,T=d.clippingState||null;c.value=T,T=h(g,f,v,p);for(let P=0;P!==v;++P)T[P]=t[P];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,T=p;v!==_;++v,T+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function op(i){let e=new WeakMap;function t(o,a){return a===qr?o.mapping=ci:a===Yr&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qr||a===Yr)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ta(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var pi=class extends Os{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ii=4,gc=[.125,.215,.35,.446,.526,.582],Ln=20,Nr=new pi,_c=new Xe,Fr=null,Or=0,Br=0,Rn=(1+Math.sqrt(5))/2,ei=1/Rn,xc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Rn,ei),new L(0,Rn,-ei),new L(ei,0,Rn),new L(-ei,0,Rn),new L(Rn,ei,0),new L(-Rn,ei,0)],zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ui,format:Wt,colorSpace:on,depthBuffer:!1},s=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(r)),this._blurMaterial=lp(r,e,t)}return s}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){let a=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_c),h.toneMapping=xn,h.autoClear=!1;let p=new ln({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new mt(new Oi,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(_c),_=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;xs(s,b*v,d>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ci||e.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xc[(s-1)%xc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ln-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ln;m>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ln}`);let d=[],b=0;for(let E=0;E<Ln;++E){let q=E/_,y=Math.exp(-q*q/2);d.push(y),E===0?b+=y:E<m&&(b+=2*y)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let T=this._sizeLods[s],P=3*T*(s>v-ii?s-v+ii:0),A=4*(this._cubeSize-T);xs(t,P,A,3*T,2*T),c.setRenderTarget(t),c.render(u,Nr)}};function cp(i){let e=[],t=[],n=[],s=i,r=i-ii+1+gc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ii?c=gc[o-i+ii-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){let E=A%3*2/3-1,q=A>2?0:-1,y=[E,q,0,E+2/3,q,0,E+2/3,q+1,0,E,q,0,E+2/3,q+1,0,E,q+1,0];b.set(y,_*g*A),v.set(f,m*g*A);let w=[A,A,A,A,A,A];T.set(w,d*g*A)}let P=new Zt;P.setAttribute("position",new Ot(b,_)),P.setAttribute("uv",new Ot(v,m)),P.setAttribute("faceIndex",new Ot(T,d)),e.push(P),s>ii&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lp(i,e,t){let n=new Float32Array(Ln),s=new L(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function yc(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Mc(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===qr||c===Yr,h=c===ci||c===li;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new zs(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new zs(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function up(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let v=0,T=b.length;v<T;v+=3){let P=b[v+0],A=b[v+1],E=b[v+2];f.push(P,A,A,E,E,P)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,T=b.length/3-1;v<T;v+=3){let P=v+0,A=v+1,E=v+2;f.push(P,A,A,E,E,P)}}else return;let m=new(jc(f)?Fs:Ns)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fp(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let b=0;b<_;b++)d+=g[b];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function pp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mp(i,e){return i[0]-e[0]}function gp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _p(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let R=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],q=0;b===!0&&(q=1),v===!0&&(q=2),T===!0&&(q=3);let y=h.attributes.position.count*q,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let X=new Float32Array(y*w*4*g),Q=new Is(X,y,w,g);Q.type=gn,Q.needsUpdate=!0;let re=q*4;for(let O=0;O<g;O++){let Y=P[O],N=A[O],I=E[O],U=y*w*4*O;for(let $=0;$<Y.count;$++){let J=$*re;b===!0&&(o.fromBufferAttribute(Y,$),X[U+J+0]=o.x,X[U+J+1]=o.y,X[U+J+2]=o.z,X[U+J+3]=0),v===!0&&(o.fromBufferAttribute(N,$),X[U+J+4]=o.x,X[U+J+5]=o.y,X[U+J+6]=o.z,X[U+J+7]=0),T===!0&&(o.fromBufferAttribute(I,$),X[U+J+8]=o.x,X[U+J+9]=o.y,X[U+J+10]=o.z,X[U+J+11]=I.itemSize===4?o.w:1)}}_={count:g,texture:Q,size:new ye(y,w)},r.set(h,_),h.addEventListener("dispose",R)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let T=g[v];T[0]=v,T[1]=f[v]}g.sort(gp);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mp);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let T=a[v],P=T[0],A=T[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[P]&&h.setAttribute("morphTarget"+v,_[P]),m&&h.getAttribute("morphNormal"+v)!==m[P]&&h.setAttribute("morphNormal"+v,m[P]),s[v]=A,d+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function xp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ks=class extends Bt{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Un,h!==Un&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Un&&(n=mn),n===void 0&&h===hi&&(n=In),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},il=new Bt,sl=new ks(1,1);sl.compareFunction=Qc;var rl=new Is,al=new jr,ol=new Bs,Sc=[],bc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function xi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function at(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2fv(this.addr,e),ot(t,e)}}function Mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;i.uniform3fv(this.addr,e),ot(t,e)}}function Sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4fv(this.addr,e),ot(t,e)}}function bp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Tc.set(n),i.uniformMatrix2fv(this.addr,!1,Tc),ot(t,n)}}function Ep(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),ot(t,n)}}function wp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),ot(t,n)}}function Tp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2iv(this.addr,e),ot(t,e)}}function Cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3iv(this.addr,e),ot(t,e)}}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4iv(this.addr,e),ot(t,e)}}function Pp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2uiv(this.addr,e),ot(t,e)}}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3uiv(this.addr,e),ot(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4uiv(this.addr,e),ot(t,e)}}function Dp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?sl:il;t.setTexture2D(e||r,s)}function Np(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||al,s)}function Fp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ol,s)}function Op(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rl,s)}function Bp(i){switch(i){case 5126:return vp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return bp;case 35675:return Ep;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Lp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(i,e){i.uniform1fv(this.addr,e)}function kp(i,e){let t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Vp(i,e){let t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Hp(i,e){let t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function Gp(i,e){let t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wp(i,e){let t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xp(i,e){let t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function $p(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function Jp(i,e){i.uniform1uiv(this.addr,e)}function Kp(i,e){i.uniform2uiv(this.addr,e)}function Qp(i,e){i.uniform3uiv(this.addr,e)}function jp(i,e){i.uniform4uiv(this.addr,e)}function e1(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||il,r[o])}function t1(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||al,r[o])}function n1(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ol,r[o])}function i1(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rl,r[o])}function s1(i){switch(i){case 5126:return zp;case 35664:return kp;case 35665:return Vp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return $p;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Kp;case 36295:return Qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}var na=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}},ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}},sa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zr=/(\w+)(\])?(\[|\.)?/g;function Ac(i,e){i.seq.push(e),i.map[e.id]=e}function r1(i,e,t){let n=i.name,s=n.length;for(zr.lastIndex=0;;){let r=zr.exec(n),o=zr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ac(t,l===void 0?new na(a,i,e):new ia(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new sa(a),Ac(t,u)),t=u}}}var oi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);r1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Cc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var a1=37297,o1=0;function c1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function l1(i){let e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i),n;switch(e===t?n="":e===Ts&&t===ws?n="LinearDisplayP3ToLinearSRGB":e===ws&&t===Ts&&(n="LinearSRGBToLinearDisplayP3"),i){case on:case Ks:return[n,"LinearTransferOETF"];case st:case Da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Rc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+c1(i.getShaderSource(e),o)}else return s}function h1(i,e){let t=l1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u1(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="OptimizedCineon";break;case _h:t="ACESFilmic";break;case vh:t="AgX";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function f1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(si).join(`
`)}function p1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function si(i){return i!==""}function Pc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(g1,x1)}var _1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x1(i,e){let t=Be[e];if(t===void 0){let n=_1.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ra(t)}var v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(v1,y1)}function y1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function S1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function E1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case dh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function w1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=M1(t),l=S1(t),h=b1(t),u=E1(t),f=w1(t),p=t.isWebGL2?"":d1(t),g=f1(t),_=p1(r),m=s.createProgram(),d,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),d.length>0&&(d+=`
`),b=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),b.length>0&&(b+=`
`)):(d=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),b=[p,Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Be.tonemapping_pars_fragment:"",t.toneMapping!==xn?u1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,h1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=ra(o),o=Pc(o,t),o=Lc(o,t),a=ra(a),a=Pc(a,t),a=Lc(a,t),o=Ic(o),a=Ic(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let T=v+d+o,P=v+b+a,A=Cc(s,s.VERTEX_SHADER,T),E=Cc(s,s.FRAGMENT_SHADER,P);s.attachShader(m,A),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function q(Q){if(i.debug.checkShaderErrors){let re=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(E).trim(),Y=!0,N=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,E);else{let I=Rc(s,A,"vertex"),U=Rc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+I+`
`+U)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(R===""||O==="")&&(N=!1);N&&(Q.diagnostics={runnable:Y,programLog:re,vertexShader:{log:R,prefix:d},fragmentShader:{log:O,prefix:b}})}s.deleteShader(A),s.deleteShader(E),y=new oi(s,m),w=m1(s,m)}let y;this.getUniforms=function(){return y===void 0&&q(this),y};let w;this.getAttributes=function(){return w===void 0&&q(this),w};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(m,a1)),X},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=E,this}var A1=0,aa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oa(e),t.set(e,n)),n}},oa=class{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}};function C1(i,e,t,n,s,r,o){let a=new Fi,c=new aa,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,w,X,Q,re){let R=Q.fog,O=re.geometry,Y=y.isMeshStandardMaterial?Q.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),I=N&&N.mapping===Js?N.image.height:null,U=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=$!==void 0?$.length:0,ie=0;O.morphAttributes.position!==void 0&&(ie=1),O.morphAttributes.normal!==void 0&&(ie=2),O.morphAttributes.color!==void 0&&(ie=3);let W,K,oe,ge;if(U){let vt=$t[U];W=vt.vertexShader,K=vt.fragmentShader}else W=y.vertexShader,K=y.fragmentShader,c.update(y),oe=c.getVertexShaderID(y),ge=c.getFragmentShaderID(y);let me=i.getRenderTarget(),Ce=re.isInstancedMesh===!0,Re=re.isBatchedMesh===!0,ve=!!y.map,Ve=!!y.matcap,B=!!N,ct=!!y.aoMap,he=!!y.lightMap,Se=!!y.bumpMap,fe=!!y.normalMap,Ye=!!y.displacementMap,Le=!!y.emissiveMap,S=!!y.metalnessMap,x=!!y.roughnessMap,k=y.anisotropy>0,ee=y.clearcoat>0,F=y.iridescence>0,z=y.sheen>0,te=y.transmission>0,j=k&&!!y.anisotropyMap,ne=ee&&!!y.clearcoatMap,pe=ee&&!!y.clearcoatNormalMap,Me=ee&&!!y.clearcoatRoughnessMap,Z=F&&!!y.iridescenceMap,We=F&&!!y.iridescenceThicknessMap,ze=z&&!!y.sheenColorMap,we=z&&!!y.sheenRoughnessMap,_e=!!y.specularMap,de=!!y.specularColorMap,De=!!y.specularIntensityMap,Ie=te&&!!y.transmissionMap,$e=te&&!!y.thicknessMap,Oe=!!y.gradientMap,se=!!y.alphaMap,C=y.alphaTest>0,ce=!!y.alphaHash,le=!!y.extensions,Te=!!O.attributes.uv1,be=!!O.attributes.uv2,Ze=!!O.attributes.uv3,Je=xn;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:U,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Re,instancing:Ce,instancingColor:Ce&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:on,map:ve,matcap:Ve,envMap:B,envMapMode:B&&N.mapping,envMapCubeUVHeight:I,aoMap:ct,lightMap:he,bumpMap:Se,normalMap:fe,displacementMap:f&&Ye,emissiveMap:Le,normalMapObjectSpace:fe&&y.normalMapType===Ih,normalMapTangentSpace:fe&&y.normalMapType===Lh,metalnessMap:S,roughnessMap:x,anisotropy:k,anisotropyMap:j,clearcoat:ee,clearcoatMap:ne,clearcoatNormalMap:pe,clearcoatRoughnessMap:Me,iridescence:F,iridescenceMap:Z,iridescenceThicknessMap:We,sheen:z,sheenColorMap:ze,sheenRoughnessMap:we,specularMap:_e,specularColorMap:de,specularIntensityMap:De,transmission:te,transmissionMap:Ie,thicknessMap:$e,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===ri,alphaMap:se,alphaTest:C,alphaHash:ce,combine:y.combine,mapUv:ve&&_(y.map.channel),aoMapUv:ct&&_(y.aoMap.channel),lightMapUv:he&&_(y.lightMap.channel),bumpMapUv:Se&&_(y.bumpMap.channel),normalMapUv:fe&&_(y.normalMap.channel),displacementMapUv:Ye&&_(y.displacementMap.channel),emissiveMapUv:Le&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:j&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:de&&_(y.specularColorMap.channel),specularIntensityMapUv:De&&_(y.specularIntensityMap.channel),transmissionMapUv:Ie&&_(y.transmissionMap.channel),thicknessMapUv:$e&&_(y.thicknessMap.channel),alphaMapUv:se&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(fe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:be,vertexUv3s:Ze,pointsUvs:re.isPoints===!0&&!!O.attributes.uv&&(ve||se),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===At,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:le&&y.extensions.derivatives===!0,extensionFragDepth:le&&y.extensions.fragDepth===!0,extensionDrawBuffers:le&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let X in y.defines)w.push(X),w.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(b(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){let w=g[y.type],X;if(w){let Q=$t[w];X=gu.clone(Q.uniforms)}else X=y.uniforms;return X}function P(y,w){let X;for(let Q=0,re=l.length;Q<re;Q++){let R=l[Q];if(R.cacheKey===w){X=R,++X.usedTimes;break}}return X===void 0&&(X=new T1(i,w,y,r),l.push(X)),X}function A(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function E(y){c.remove(y)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:q}}function R1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function P1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||P1),n.length>1&&n.sort(f||Dc),s.length>1&&s.sort(f||Dc)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function L1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nc,i.set(n,[o])):s>=r.length?(o=new Nc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function I1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Xe};break;case"SpotLight":t={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function U1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var D1=0;function N1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F1(i,e){let t=new I1,n=U1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new rt,a=new rt;function c(h,u){let f=0,p=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let _=0,m=0,d=0,b=0,v=0,T=0,P=0,A=0,E=0,q=0,y=0;h.sort(N1);let w=u===!0?Math.PI:1;for(let Q=0,re=h.length;Q<re;Q++){let R=h[Q],O=R.color,Y=R.intensity,N=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=O.r*Y*w,p+=O.g*Y*w,g+=O.b*Y*w;else if(R.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(R.sh.coefficients[U],Y);y++}else if(R.isDirectionalLight){let U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let $=R.shadow,J=n.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.directionalShadow[_]=J,s.directionalShadowMap[_]=I,s.directionalShadowMatrix[_]=R.shadow.matrix,T++}s.directional[_]=U,_++}else if(R.isSpotLight){let U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(O).multiplyScalar(Y*w),U.distance=N,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,s.spot[d]=U;let $=R.shadow;if(R.map&&(s.spotLightMap[E]=R.map,E++,$.updateMatrices(R),R.castShadow&&q++),s.spotLightMatrix[d]=$.matrix,R.castShadow){let J=n.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.spotShadow[d]=J,s.spotShadowMap[d]=I,A++}d++}else if(R.isRectAreaLight){let U=t.get(R);U.color.copy(O).multiplyScalar(Y),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),s.rectArea[b]=U,b++}else if(R.isPointLight){let U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity*w),U.distance=R.distance,U.decay=R.decay,R.castShadow){let $=R.shadow,J=n.get(R);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=I,s.pointShadowMatrix[m]=R.shadow.matrix,P++}s.point[m]=U,m++}else if(R.isHemisphereLight){let U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(Y*w),U.groundColor.copy(R.groundColor).multiplyScalar(Y*w),s.hemi[v]=U,v++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let X=s.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==d||X.rectAreaLength!==b||X.hemiLength!==v||X.numDirectionalShadows!==T||X.numPointShadows!==P||X.numSpotShadows!==A||X.numSpotMaps!==E||X.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=b,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+E-q,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=y,X.directionalLength=_,X.pointLength=m,X.spotLength=d,X.rectAreaLength=b,X.hemiLength=v,X.numDirectionalShadows=T,X.numPointShadows=P,X.numSpotShadows=A,X.numSpotMaps=E,X.numLightProbes=y,s.version=D1++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let T=h[b];if(T.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(T.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Fc(i,e){let t=new F1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function O1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Fc(i,e),t.set(r,[c])):o>=a.length?(c=new Fc(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var ca=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k1(i,e,t){let n=new Bi,s=new ye,r=new ye,o=new dt,a=new ca({depthPacking:Ph}),c=new la,l={},h=t.maxTextureSize,u={[yn]:At,[At]:yn,[Ht]:Ht},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:B1,fragmentShader:z1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let d=this.type;this.render=function(A,E,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),w=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(_n),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let re=d!==sn&&this.type===sn,R=d===sn&&this.type!==sn;for(let O=0,Y=A.length;O<Y;O++){let N=A[O],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let U=I.getFrameExtents();if(s.multiply(U),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/U.x),s.x=r.x*U.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/U.y),s.y=r.y*U.y,I.mapSize.y=r.y)),I.map===null||re===!0||R===!0){let J=this.type!==sn?{minFilter:bt,magFilter:bt}:{};I.map!==null&&I.map.dispose(),I.map=new cn(s.x,s.y,J),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let $=I.getViewportCount();for(let J=0;J<$;J++){let ie=I.getViewport(J);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),Q.viewport(o),I.updateMatrices(N,J),n=I.getFrustum(),T(E,q,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===sn&&b(I,q),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,X)};function b(A,E){let q=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,q,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,q,p,_,null)}function v(A,E,q,y){let w=null,X=q.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(X!==void 0)w=X;else if(w=q.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let Q=w.uuid,re=E.uuid,R=l[Q];R===void 0&&(R={},l[Q]=R);let O=R[re];O===void 0&&(O=w.clone(),R[re]=O,E.addEventListener("dispose",P)),w=O}if(w.visible=E.visible,w.wireframe=E.wireframe,y===sn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Q=i.properties.get(w);Q.light=q}return w}function T(A,E,q,y,w){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld);let re=e.update(A),R=A.material;if(Array.isArray(R)){let O=re.groups;for(let Y=0,N=O.length;Y<N;Y++){let I=O[Y],U=R[I.materialIndex];if(U&&U.visible){let $=v(A,U,y,w);A.onBeforeShadow(i,A,E,q,re,$,I),i.renderBufferDirect(q,null,re,$,A,I),A.onAfterShadow(i,A,E,q,re,$,I)}}}else if(R.visible){let O=v(A,R,y,w);A.onBeforeShadow(i,A,E,q,re,O,null),i.renderBufferDirect(q,null,re,O,A,null),A.onAfterShadow(i,A,E,q,re,O,null)}}let Q=A.children;for(let re=0,R=Q.length;re<R;re++)T(Q[re],E,q,y,w)}function P(A){A.target.removeEventListener("dispose",P);for(let q in l){let y=l[q],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function V1(i,e,t){let n=t.isWebGL2;function s(){let C=!1,ce=new dt,le=null,Te=new dt(0,0,0,0);return{setMask:function(be){le!==be&&!C&&(i.colorMask(be,be,be,be),le=be)},setLocked:function(be){C=be},setClear:function(be,Ze,Je,lt,vt){vt===!0&&(be*=lt,Ze*=lt,Je*=lt),ce.set(be,Ze,Je,lt),Te.equals(ce)===!1&&(i.clearColor(be,Ze,Je,lt),Te.copy(ce))},reset:function(){C=!1,le=null,Te.set(-1,0,0,0)}}}function r(){let C=!1,ce=null,le=null,Te=null;return{setTest:function(be){be?Re(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(be){ce!==be&&!C&&(i.depthMask(be),ce=be)},setFunc:function(be){if(le!==be){switch(be){case rh:i.depthFunc(i.NEVER);break;case ah:i.depthFunc(i.ALWAYS);break;case oh:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case ch:i.depthFunc(i.EQUAL);break;case lh:i.depthFunc(i.GEQUAL);break;case hh:i.depthFunc(i.GREATER);break;case uh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=be}},setLocked:function(be){C=be},setClear:function(be){Te!==be&&(i.clearDepth(be),Te=be)},reset:function(){C=!1,ce=null,le=null,Te=null}}}function o(){let C=!1,ce=null,le=null,Te=null,be=null,Ze=null,Je=null,lt=null,vt=null;return{setTest:function(Ke){C||(Ke?Re(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!C&&(i.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,yt,Yt){(le!==Ke||Te!==yt||be!==Yt)&&(i.stencilFunc(Ke,yt,Yt),le=Ke,Te=yt,be=Yt)},setOp:function(Ke,yt,Yt){(Ze!==Ke||Je!==yt||lt!==Yt)&&(i.stencilOp(Ke,yt,Yt),Ze=Ke,Je=yt,lt=Yt)},setLocked:function(Ke){C=Ke},setClear:function(Ke){vt!==Ke&&(i.clearStencil(Ke),vt=Ke)},reset:function(){C=!1,ce=null,le=null,Te=null,be=null,Ze=null,Je=null,lt=null,vt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,T=null,P=null,A=null,E=null,q=null,y=new Xe(0,0,0),w=0,X=!1,Q=null,re=null,R=null,O=null,Y=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,U=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec($)[1]),I=U>=1):$.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=U>=2);let J=null,ie={},W=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),oe=new dt().fromArray(W),ge=new dt().fromArray(K);function me(C,ce,le,Te){let be=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(C,Ze),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<le;Je++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ce+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ze}let Ce={};Ce[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Re(i.DEPTH_TEST),c.setFunc(Ms),Le(!1),S(mo),Re(i.CULL_FACE),fe(_n);function Re(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function ve(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Ve(C,ce){return p[C]!==ce?(i.bindFramebuffer(C,ce),p[C]=ce,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function B(C,ce){let le=_,Te=!1;if(C)if(le=g.get(ce),le===void 0&&(le=[],g.set(ce,le)),C.isWebGLMultipleRenderTargets){let be=C.texture;if(le.length!==be.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Je=be.length;Ze<Je;Ze++)le[Ze]=i.COLOR_ATTACHMENT0+Ze;le.length=be.length,Te=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Te=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function ct(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let he={[Pn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};if(n)he[vo]=i.MIN,he[yo]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(he[vo]=C.MIN_EXT,he[yo]=C.MAX_EXT)}let Se={[ql]:i.ZERO,[Yl]:i.ONE,[$l]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[Ql]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[Zl]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[jl]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[th]:i.CONSTANT_COLOR,[nh]:i.ONE_MINUS_CONSTANT_COLOR,[ih]:i.CONSTANT_ALPHA,[sh]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,ce,le,Te,be,Ze,Je,lt,vt,Ke){if(C===_n){d===!0&&(ve(i.BLEND),d=!1);return}if(d===!1&&(Re(i.BLEND),d=!0),C!==Gl){if(C!==b||Ke!==X){if((v!==Pn||A!==Pn)&&(i.blendEquation(i.FUNC_ADD),v=Pn,A=Pn),Ke)switch(C){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,P=null,E=null,q=null,y.set(0,0,0),w=0,b=C,X=Ke}return}be=be||ce,Ze=Ze||le,Je=Je||Te,(ce!==v||be!==A)&&(i.blendEquationSeparate(he[ce],he[be]),v=ce,A=be),(le!==T||Te!==P||Ze!==E||Je!==q)&&(i.blendFuncSeparate(Se[le],Se[Te],Se[Ze],Se[Je]),T=le,P=Te,E=Ze,q=Je),(lt.equals(y)===!1||vt!==w)&&(i.blendColor(lt.r,lt.g,lt.b,vt),y.copy(lt),w=vt),b=C,X=!1}function Ye(C,ce){C.side===Ht?ve(i.CULL_FACE):Re(i.CULL_FACE);let le=C.side===At;ce&&(le=!le),Le(le),C.blending===ri&&C.transparent===!1?fe(_n):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Te=C.stencilWrite;l.setTest(Te),Te&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(C){Q!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Q=C)}function S(C){C!==kl?(Re(i.CULL_FACE),C!==re&&(C===mo?i.cullFace(i.BACK):C===Vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),re=C}function x(C){C!==R&&(I&&i.lineWidth(C),R=C)}function k(C,ce,le){C?(Re(i.POLYGON_OFFSET_FILL),(O!==ce||Y!==le)&&(i.polygonOffset(ce,le),O=ce,Y=le)):ve(i.POLYGON_OFFSET_FILL)}function ee(C){C?Re(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function F(C){C===void 0&&(C=i.TEXTURE0+N-1),J!==C&&(i.activeTexture(C),J=C)}function z(C,ce,le){le===void 0&&(J===null?le=i.TEXTURE0+N-1:le=J);let Te=ie[le];Te===void 0&&(Te={type:void 0,texture:void 0},ie[le]=Te),(Te.type!==C||Te.texture!==ce)&&(J!==le&&(i.activeTexture(le),J=le),i.bindTexture(C,ce||Ce[C]),Te.type=C,Te.texture=ce)}function te(){let C=ie[J];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(C){oe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ie(C){ge.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function $e(C,ce){let le=u.get(ce);le===void 0&&(le=new WeakMap,u.set(ce,le));let Te=le.get(C);Te===void 0&&(Te=i.getUniformBlockIndex(ce,C.name),le.set(C,Te))}function Oe(C,ce){let Te=u.get(ce).get(C);h.get(ce)!==Te&&(i.uniformBlockBinding(ce,Te,C.__bindingPointIndex),h.set(ce,Te))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,ie={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,T=null,P=null,A=null,E=null,q=null,y=new Xe(0,0,0),w=0,X=!1,Q=null,re=null,R=null,O=null,Y=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Re,disable:ve,bindFramebuffer:Ve,drawBuffers:B,useProgram:ct,setBlending:fe,setMaterial:Ye,setFlipSided:Le,setCullFace:S,setLineWidth:x,setPolygonOffset:k,setScissorTest:ee,activeTexture:F,bindTexture:z,unbindTexture:te,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:_e,texImage3D:de,updateUBOMapping:$e,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:we,texSubImage2D:pe,texSubImage3D:Me,compressedTexSubImage2D:Z,compressedTexSubImage3D:We,scissor:De,viewport:Ie,reset:se}}function H1(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return p?new OffscreenCanvas(S,x):Rs("canvas")}function _(S,x,k,ee){let F=1;if((S.width>ee||S.height>ee)&&(F=ee/Math.max(S.width,S.height)),F<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let z=x?Cs:Math.floor,te=z(F*S.width),j=z(F*S.height);u===void 0&&(u=g(te,j));let ne=k?g(te,j):u;return ne.width=te,ne.height=j,ne.getContext("2d").drawImage(S,0,0,te,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+te+"x"+j+")."),ne}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Kr(S.width)&&Kr(S.height)}function d(S){return a?!1:S.wrapS!==Gt||S.wrapT!==Gt||S.minFilter!==bt&&S.minFilter!==Nt}function b(S,x){return S.generateMipmaps&&x&&S.minFilter!==bt&&S.minFilter!==Nt}function v(S){i.generateMipmap(S)}function T(S,x,k,ee,F=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=x;if(x===i.RED&&(k===i.FLOAT&&(z=i.R32F),k===i.HALF_FLOAT&&(z=i.R16F),k===i.UNSIGNED_BYTE&&(z=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(z=i.R8UI),k===i.UNSIGNED_SHORT&&(z=i.R16UI),k===i.UNSIGNED_INT&&(z=i.R32UI),k===i.BYTE&&(z=i.R8I),k===i.SHORT&&(z=i.R16I),k===i.INT&&(z=i.R32I)),x===i.RG&&(k===i.FLOAT&&(z=i.RG32F),k===i.HALF_FLOAT&&(z=i.RG16F),k===i.UNSIGNED_BYTE&&(z=i.RG8)),x===i.RGBA){let te=F?Es:qe.getTransfer(ee);k===i.FLOAT&&(z=i.RGBA32F),k===i.HALF_FLOAT&&(z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(z=te===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function P(S,x,k){return b(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==bt&&S.minFilter!==Nt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){return S===bt||S===Mo||S===ur?i.NEAREST:i.LINEAR}function E(S){let x=S.target;x.removeEventListener("dispose",E),y(x),x.isVideoTexture&&h.delete(x)}function q(S){let x=S.target;x.removeEventListener("dispose",q),X(x)}function y(S){let x=n.get(S);if(x.__webglInit===void 0)return;let k=S.source,ee=f.get(k);if(ee){let F=ee[x.__cacheKey];F.usedTimes--,F.usedTimes===0&&w(S),Object.keys(ee).length===0&&f.delete(k)}n.remove(S)}function w(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let k=S.source,ee=f.get(k);delete ee[x.__cacheKey],o.memory.textures--}function X(S){let x=S.texture,k=n.get(S),ee=n.get(x);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(k.__webglFramebuffer[F]))for(let z=0;z<k.__webglFramebuffer[F].length;z++)i.deleteFramebuffer(k.__webglFramebuffer[F][z]);else i.deleteFramebuffer(k.__webglFramebuffer[F]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[F])}else{if(Array.isArray(k.__webglFramebuffer))for(let F=0;F<k.__webglFramebuffer.length;F++)i.deleteFramebuffer(k.__webglFramebuffer[F]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let F=0;F<k.__webglColorRenderbuffer.length;F++)k.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[F]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let F=0,z=x.length;F<z;F++){let te=n.get(x[F]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(x[F])}n.remove(x),n.remove(S)}let Q=0;function re(){Q=0}function R(){let S=Q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),Q+=1,S}function O(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function Y(S,x){let k=n.get(S);if(S.isVideoTexture&&Ye(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,S,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function N(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){oe(k,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function I(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){oe(k,S,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function U(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){ge(k,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let $={[$r]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},J={[bt]:i.NEAREST,[Mo]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[yh]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ie={[Uh]:i.NEVER,[zh]:i.ALWAYS,[Dh]:i.LESS,[Qc]:i.LEQUAL,[Nh]:i.EQUAL,[Bh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function W(S,x,k){if(k?(i.texParameteri(S,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,$[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,J[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Gt||x.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==bt&&x.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===bt||x.minFilter!==ur&&x.minFilter!==Ii||x.type===gn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function K(S,x){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",E));let ee=x.source,F=f.get(ee);F===void 0&&(F={},f.set(ee,F));let z=O(x);if(z!==S.__cacheKey){F[z]===void 0&&(F[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),F[z].usedTimes++;let te=F[S.__cacheKey];te!==void 0&&(F[S.__cacheKey].usedTimes--,te.usedTimes===0&&w(x)),S.__cacheKey=z,S.__webglTexture=F[z].texture}return k}function oe(S,x,k){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);let F=K(S,x),z=x.source;t.bindTexture(ee,S.__webglTexture,i.TEXTURE0+k);let te=n.get(z);if(z.version!==te.__version||F===!0){t.activeTexture(i.TEXTURE0+k);let j=qe.getPrimaries(qe.workingColorSpace),ne=x.colorSpace===Ft?null:qe.getPrimaries(x.colorSpace),pe=x.colorSpace===Ft||j===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Me=d(x)&&m(x.image)===!1,Z=_(x.image,Me,!1,s.maxTextureSize);Z=Le(x,Z);let We=m(Z)||a,ze=r.convert(x.format,x.colorSpace),we=r.convert(x.type),_e=T(x.internalFormat,ze,we,x.colorSpace,x.isVideoTexture);W(ee,x,We);let de,De=x.mipmaps,Ie=a&&x.isVideoTexture!==!0&&_e!==Jc,$e=te.__version===void 0||F===!0,Oe=P(x,Z,We);if(x.isDepthTexture)_e=i.DEPTH_COMPONENT,a?x.type===gn?_e=i.DEPTH_COMPONENT32F:x.type===mn?_e=i.DEPTH_COMPONENT24:x.type===In?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:x.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Un&&_e===i.DEPTH_COMPONENT&&x.type!==Ua&&x.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=mn,we=r.convert(x.type)),x.format===hi&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,x.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=In,we=r.convert(x.type))),$e&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,_e,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,_e,Z.width,Z.height,0,ze,we,null));else if(x.isDataTexture)if(De.length>0&&We){Ie&&$e&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,De[0].width,De[0].height);for(let se=0,C=De.length;se<C;se++)de=De[se],Ie?t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,ze,we,de.data):t.texImage2D(i.TEXTURE_2D,se,_e,de.width,de.height,0,ze,we,de.data);x.generateMipmaps=!1}else Ie?($e&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ze,we,Z.data)):t.texImage2D(i.TEXTURE_2D,0,_e,Z.width,Z.height,0,ze,we,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,De[0].width,De[0].height,Z.depth);for(let se=0,C=De.length;se<C;se++)de=De[se],x.format!==Wt?ze!==null?Ie?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,Z.depth,ze,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,_e,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,Z.depth,ze,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,_e,de.width,de.height,Z.depth,0,ze,we,de.data)}else{Ie&&$e&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,De[0].width,De[0].height);for(let se=0,C=De.length;se<C;se++)de=De[se],x.format!==Wt?ze!==null?Ie?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,ze,de.data):t.compressedTexImage2D(i.TEXTURE_2D,se,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,ze,we,de.data):t.texImage2D(i.TEXTURE_2D,se,_e,de.width,de.height,0,ze,we,de.data)}else if(x.isDataArrayTexture)Ie?($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ze,we,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,Z.width,Z.height,Z.depth,0,ze,we,Z.data);else if(x.isData3DTexture)Ie?($e&&t.texStorage3D(i.TEXTURE_3D,Oe,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ze,we,Z.data)):t.texImage3D(i.TEXTURE_3D,0,_e,Z.width,Z.height,Z.depth,0,ze,we,Z.data);else if(x.isFramebufferTexture){if($e)if(Ie)t.texStorage2D(i.TEXTURE_2D,Oe,_e,Z.width,Z.height);else{let se=Z.width,C=Z.height;for(let ce=0;ce<Oe;ce++)t.texImage2D(i.TEXTURE_2D,ce,_e,se,C,0,ze,we,null),se>>=1,C>>=1}}else if(De.length>0&&We){Ie&&$e&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,De[0].width,De[0].height);for(let se=0,C=De.length;se<C;se++)de=De[se],Ie?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ze,we,de):t.texImage2D(i.TEXTURE_2D,se,_e,ze,we,de);x.generateMipmaps=!1}else Ie?($e&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,we,Z)):t.texImage2D(i.TEXTURE_2D,0,_e,ze,we,Z);b(x,We)&&v(ee),te.__version=z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ge(S,x,k){if(x.image.length!==6)return;let ee=K(S,x),F=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+k);let z=n.get(F);if(F.version!==z.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);let te=qe.getPrimaries(qe.workingColorSpace),j=x.colorSpace===Ft?null:qe.getPrimaries(x.colorSpace),ne=x.colorSpace===Ft||te===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!pe&&!Me?Z[se]=_(x.image[se],!1,!0,s.maxCubemapSize):Z[se]=Me?x.image[se].image:x.image[se],Z[se]=Le(x,Z[se]);let We=Z[0],ze=m(We)||a,we=r.convert(x.format,x.colorSpace),_e=r.convert(x.type),de=T(x.internalFormat,we,_e,x.colorSpace),De=a&&x.isVideoTexture!==!0,Ie=z.__version===void 0||ee===!0,$e=P(x,We,ze);W(i.TEXTURE_CUBE_MAP,x,ze);let Oe;if(pe){De&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,de,We.width,We.height);for(let se=0;se<6;se++){Oe=Z[se].mipmaps;for(let C=0;C<Oe.length;C++){let ce=Oe[C];x.format!==Wt?we!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,0,0,ce.width,ce.height,we,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,0,0,ce.width,ce.height,we,_e,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,de,ce.width,ce.height,0,we,_e,ce.data)}}}else{Oe=x.mipmaps,De&&Ie&&(Oe.length>0&&$e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,de,Z[0].width,Z[0].height));for(let se=0;se<6;se++)if(Me){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Z[se].width,Z[se].height,we,_e,Z[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,Z[se].width,Z[se].height,0,we,_e,Z[se].data);for(let C=0;C<Oe.length;C++){let le=Oe[C].image[se].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,0,0,le.width,le.height,we,_e,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,de,le.width,le.height,0,we,_e,le.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,_e,Z[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,we,_e,Z[se]);for(let C=0;C<Oe.length;C++){let ce=Oe[C];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,0,0,we,_e,ce.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,de,we,_e,ce.image[se])}}}b(x,ze)&&v(i.TEXTURE_CUBE_MAP),z.__version=F.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function me(S,x,k,ee,F,z){let te=r.convert(k.format,k.colorSpace),j=r.convert(k.type),ne=T(k.internalFormat,te,j,k.colorSpace);if(!n.get(x).__hasExternalTextures){let Me=Math.max(1,x.width>>z),Z=Math.max(1,x.height>>z);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,z,ne,Me,Z,x.depth,0,te,j,null):t.texImage2D(F,z,ne,Me,Z,0,te,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,F,n.get(k).__webglTexture,0,Se(x)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,F,n.get(k).__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(S,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||fe(x)){let F=x.depthTexture;F&&F.isDepthTexture&&(F.type===gn?ee=i.DEPTH_COMPONENT32F:F.type===mn&&(ee=i.DEPTH_COMPONENT24));let z=Se(x);fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,ee,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,z,ee,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let ee=Se(x);k&&fe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let ee=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let F=0;F<ee.length;F++){let z=ee[F],te=r.convert(z.format,z.colorSpace),j=r.convert(z.type),ne=T(z.internalFormat,te,j,z.colorSpace),pe=Se(x);k&&fe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ne,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let ee=n.get(x.depthTexture).__webglTexture,F=Se(x);if(x.depthTexture.format===Un)fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===hi)fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ve(S){let x=n.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,S)}else if(k){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=i.createRenderbuffer(),Ce(x.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ce(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(S,x,k){let ee=n.get(S);x!==void 0&&me(ee.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ve(S)}function B(S){let x=S.texture,k=n.get(S),ee=n.get(x);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,o.memory.textures++);let F=S.isWebGLCubeRenderTarget===!0,z=S.isWebGLMultipleRenderTargets===!0,te=m(S)||a;if(F){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[j][ne]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(z)if(s.drawBuffers){let j=S.texture;for(let ne=0,pe=j.length;ne<pe;ne++){let Me=n.get(j[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&fe(S)===!1){let j=z?x:[x];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){let pe=j[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);let Me=r.convert(pe.format,pe.colorSpace),Z=r.convert(pe.type),We=T(pe.internalFormat,Me,Z,pe.colorSpace,S.isXRRenderTarget===!0),ze=Se(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,We,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),W(i.TEXTURE_CUBE_MAP,x,te);for(let j=0;j<6;j++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[j][ne],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else me(k.__webglFramebuffer[j],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);b(x,te)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){let j=S.texture;for(let ne=0,pe=j.length;ne<pe;ne++){let Me=j[ne],Z=n.get(Me);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),W(i.TEXTURE_2D,Me,te),me(k.__webglFramebuffer,S,Me,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),b(Me,te)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?j=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,ee.__webglTexture),W(j,x,te),a&&x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[ne],S,x,i.COLOR_ATTACHMENT0,j,ne);else me(k.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,j,0);b(x,te)&&v(j),t.unbindTexture()}S.depthBuffer&&ve(S)}function ct(S){let x=m(S)||a,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,F=k.length;ee<F;ee++){let z=k[ee];if(b(z,x)){let te=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,j=n.get(z).__webglTexture;t.bindTexture(te,j),v(te),t.unbindTexture()}}}function he(S){if(a&&S.samples>0&&fe(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],k=S.width,ee=S.height,F=i.COLOR_BUFFER_BIT,z=[],te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(S),ne=S.isWebGLMultipleRenderTargets===!0;if(ne)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){z.push(i.COLOR_ATTACHMENT0+pe),S.depthBuffer&&z.push(te);let Me=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(Me===!1&&(S.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[pe]),Me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[te])),ne){let Z=n.get(x[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,k,ee,0,0,k,ee,F,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);let Me=n.get(x[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Se(S){return Math.min(s.maxSamples,S.samples)}function fe(S){let x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Le(S,x){let k=S.colorSpace,ee=S.format,F=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Jr||k!==on&&k!==Ft&&(qe.getTransfer(k)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ee===Wt?(S.format=Jr,S.minFilter=Nt,S.generateMipmaps=!1):x=Ps.sRGBToLinear(x):(ee!==Wt||F!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}this.allocateTextureUnit=R,this.resetTextureUnits=re,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=U,this.rebindTextures=Ve,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function G1(i,e,t){let n=t.isWebGL2;function s(r,o=Ft){let a,c=qe.getTransfer(o);if(r===vn)return i.UNSIGNED_BYTE;if(r===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mh)return i.BYTE;if(r===Sh)return i.SHORT;if(r===Ua)return i.UNSIGNED_SHORT;if(r===Wc)return i.INT;if(r===mn)return i.UNSIGNED_INT;if(r===gn)return i.FLOAT;if(r===Ui)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bh)return i.ALPHA;if(r===Wt)return i.RGBA;if(r===Eh)return i.LUMINANCE;if(r===wh)return i.LUMINANCE_ALPHA;if(r===Un)return i.DEPTH_COMPONENT;if(r===hi)return i.DEPTH_STENCIL;if(r===Jr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Th)return i.RED;if(r===Yc)return i.RED_INTEGER;if(r===Ah)return i.RG;if(r===$c)return i.RG_INTEGER;if(r===Zc)return i.RGBA_INTEGER;if(r===dr||r===fr||r===pr||r===mr)if(c===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===dr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===dr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===So||r===bo||r===Eo||r===wo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===So)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===To||r===Ao)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===To)return c===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ao)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Co||r===Ro||r===Po||r===Lo||r===Io||r===Uo||r===Do||r===No||r===Fo||r===Oo||r===Bo||r===zo||r===ko||r===Vo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Co)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ro)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Po)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Io)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Do)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===No)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ko)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gr||r===Ho||r===Go)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===gr)return c===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Go)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===Wo||r===Xo||r===qo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===gr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===In?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ha=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},W1={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ua=class extends Mn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,_=t.getContextAttributes(),m=null,d=null,b=[],v=[],T=new ye,P=null,A=new Lt;A.layers.enable(1),A.viewport=new dt;let E=new Lt;E.layers.enable(2),E.viewport=new dt;let q=[A,E],y=new ha;y.layers.enable(1),y.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=b[W];return K===void 0&&(K=new Ri,b[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=b[W];return K===void 0&&(K=new Ri,b[W]=K),K.getGripSpace()},this.getHand=function(W){let K=b[W];return K===void 0&&(K=new Ri,b[W]=K),K.getHandSpace()};function Q(W){let K=v.indexOf(W.inputSource);if(K===-1)return;let oe=b[K];oe!==void 0&&(oe.update(W.inputSource,W.frame,l||o),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function re(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",R);for(let W=0;W<b.length;W++){let K=v[W];K!==null&&(v[W]=null,b[W].disconnect(K))}w=null,X=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",re),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new cn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,oe=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?hi:Un,oe=_.stencil?In:mn);let me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new cn(f.textureWidth,f.textureHeight,{format:Wt,type:vn,depthTexture:new ks(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ce=e.properties.get(d);Ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(W){for(let K=0;K<W.removed.length;K++){let oe=W.removed[K],ge=v.indexOf(oe);ge>=0&&(v[ge]=null,b[ge].disconnect(oe))}for(let K=0;K<W.added.length;K++){let oe=W.added[K],ge=v.indexOf(oe);if(ge===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=v.length){v.push(oe),ge=Ce;break}else if(v[Ce]===null){v[Ce]=oe,ge=Ce;break}if(ge===-1)break}let me=b[ge];me&&me.connect(oe)}}let O=new L,Y=new L;function N(W,K,oe){O.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);let ge=O.distanceTo(Y),me=K.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Re=me[14]/(me[10]-1),ve=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],B=(me[9]-1)/me[5],ct=(me[8]-1)/me[0],he=(Ce[8]+1)/Ce[0],Se=Re*ct,fe=Re*he,Ye=ge/(-ct+he),Le=Ye*-ct;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(Ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=Re+Ye,x=ve+Ye,k=Se-Le,ee=fe+(ge-Le),F=Ve*ve/x*S,z=B*ve/x*S;W.projectionMatrix.makePerspective(k,ee,F,z,S,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function I(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;y.near=E.near=A.near=W.near,y.far=E.far=A.far=W.far,(w!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,X=y.far);let K=W.parent,oe=y.cameras;I(y,K);for(let ge=0;ge<oe.length;ge++)I(oe[ge],K);oe.length===2?N(y,A,E):y.projectionMatrix.copy(A.projectionMatrix),U(W,y,K)};function U(W,K,oe){oe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Di*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let $=null;function J(W,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ge=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){let Ce=oe[me],Re=null;if(p!==null)Re=p.getViewport(Ce);else{let Ve=u.getViewSubImage(f,Ce);Re=Ve.viewport,me===0&&(e.setRenderTargetTextures(d,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(d))}let ve=q[me];ve===void 0&&(ve=new Lt,ve.layers.enable(me),ve.viewport=new dt,q[me]=ve),ve.matrix.fromArray(Ce.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ce.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(y.matrix.copy(ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(ve)}}for(let oe=0;oe<b.length;oe++){let ge=v[oe],me=b[oe];ge!==null&&me!==void 0&&me.update(ge,K,l||o)}$&&$(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ie=new nl;ie.setAnimationLoop(J),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}};function X1(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,tl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,v,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===At&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===At&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q1(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,v){let T=v.program;n.uniformBlockBinding(b,T)}function l(b,v){let T=s[b.id];T===void 0&&(g(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(b,P);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){let v=u();b.__bindingPointIndex=v;let T=i.createBuffer(),P=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],T=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,E=T.length;A<E;A++){let q=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,w=q.length;y<w;y++){let X=q[y];if(p(X,A,y,P)===!0){let Q=X.__offset,re=Array.isArray(X.value)?X.value:[X.value],R=0;for(let O=0;O<re.length;O++){let Y=re[O],N=_(Y);typeof Y=="number"||typeof Y=="boolean"?(X.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,Q+R,X.__data)):Y.isMatrix3?(X.__data[0]=Y.elements[0],X.__data[1]=Y.elements[1],X.__data[2]=Y.elements[2],X.__data[3]=0,X.__data[4]=Y.elements[3],X.__data[5]=Y.elements[4],X.__data[6]=Y.elements[5],X.__data[7]=0,X.__data[8]=Y.elements[6],X.__data[9]=Y.elements[7],X.__data[10]=Y.elements[8],X.__data[11]=0):(Y.toArray(X.__data,R),R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,X.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,v,T,P){let A=b.value,E=v+"_"+T;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{let q=P[E];if(typeof A=="number"||typeof A=="boolean"){if(q!==A)return P[E]=A,!0}else if(q.equals(A)===!1)return q.copy(A),!0}return!1}function g(b){let v=b.uniforms,T=0,P=16;for(let E=0,q=v.length;E<q;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,X=y.length;w<X;w++){let Q=y[w],re=Array.isArray(Q.value)?Q.value:[Q.value];for(let R=0,O=re.length;R<O;R++){let Y=re[R],N=_(Y),I=T%P;I!==0&&P-I<N.boundary&&(T+=P-I),Q.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=N.storage}}}let A=T%P;return A>0&&(T+=P-A),b.__size=T,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var zi=class{constructor(e={}){let{canvas:t=eu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;let v=this,T=!1,P=0,A=0,E=null,q=-1,y=null,w=new dt,X=new dt,Q=null,re=new Xe(0),R=0,O=t.width,Y=t.height,N=1,I=null,U=null,$=new dt(0,0,O,Y),J=new dt(0,0,O,Y),ie=!1,W=new Bi,K=!1,oe=!1,ge=null,me=new rt,Ce=new ye,Re=new L,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return E===null?N:1}let B=n;function ct(M,D){for(let H=0;H<M.length;H++){let G=M[H],V=t.getContext(G,D);if(V!==null)return V}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ce,!1),B===null){let D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),B=ct(D,M),B===null)throw ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let he,Se,fe,Ye,Le,S,x,k,ee,F,z,te,j,ne,pe,Me,Z,We,ze,we,_e,de,De,Ie;function $e(){he=new up(B),Se=new rp(B,he,e),he.init(Se),de=new G1(B,he,Se),fe=new V1(B,he,Se),Ye=new pp(B),Le=new R1,S=new H1(B,he,fe,Le,Se,de,Ye),x=new op(v),k=new hp(v),ee=new Mu(B,Se),De=new ip(B,he,ee,Se),F=new dp(B,ee,Ye,De),z=new xp(B,F,ee,Ye),ze=new _p(B,Se,S),Me=new ap(Le),te=new C1(v,x,k,he,Se,De,Me),j=new X1(v,Le),ne=new L1,pe=new O1(he,Se),We=new np(v,x,k,fe,z,f,c),Z=new k1(v,z,Se),Ie=new q1(B,Ye,Se,fe),we=new sp(B,he,Ye,Se),_e=new fp(B,he,Ye,Se),Ye.programs=te.programs,v.capabilities=Se,v.extensions=he,v.properties=Le,v.renderLists=ne,v.shadowMap=Z,v.state=fe,v.info=Ye}$e();let Oe=new ua(v,B);this.xr=Oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(O,Y,!1))},this.getSize=function(M){return M.set(O,Y)},this.setSize=function(M,D,H=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,Y=D,t.width=Math.floor(M*N),t.height=Math.floor(D*N),H===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(O*N,Y*N).floor()},this.setDrawingBufferSize=function(M,D,H){O=M,Y=D,N=H,t.width=Math.floor(M*H),t.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,D,H,G){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,D,H,G),fe.viewport(w.copy($).multiplyScalar(N).floor())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,D,H,G){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,D,H,G),fe.scissor(X.copy(J).multiplyScalar(N).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){fe.setScissorTest(ie=M)},this.setOpaqueSort=function(M){I=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,D=!0,H=!0){let G=0;if(M){let V=!1;if(E!==null){let ue=E.texture.format;V=ue===Zc||ue===$c||ue===Yc}if(V){let ue=E.texture.type,xe=ue===vn||ue===mn||ue===Ua||ue===In||ue===Xc||ue===qc,Ee=We.getClearColor(),Ae=We.getClearAlpha(),ke=Ee.r,Ne=Ee.g,Fe=Ee.b;xe?(p[0]=ke,p[1]=Ne,p[2]=Fe,p[3]=Ae,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=ke,g[1]=Ne,g[2]=Fe,g[3]=Ae,B.clearBufferiv(B.COLOR,0,g))}else G|=B.COLOR_BUFFER_BIT}D&&(G|=B.DEPTH_BUFFER_BIT),H&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ne.dispose(),pe.dispose(),Le.dispose(),x.dispose(),k.dispose(),z.dispose(),De.dispose(),Ie.dispose(),te.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",vt),Oe.removeEventListener("sessionend",Ke),ge&&(ge.dispose(),ge=null),yt.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=Ye.autoReset,D=Z.enabled,H=Z.autoUpdate,G=Z.needsUpdate,V=Z.type;$e(),Ye.autoReset=M,Z.enabled=D,Z.autoUpdate=H,Z.needsUpdate=G,Z.type=V}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function le(M){let D=M.target;D.removeEventListener("dispose",le),Te(D)}function Te(M){be(M),Le.remove(M)}function be(M){let D=Le.get(M).programs;D!==void 0&&(D.forEach(function(H){te.releaseProgram(H)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,G,V,ue){D===null&&(D=ve);let xe=V.isMesh&&V.matrixWorld.determinant()<0,Ee=Fl(M,D,H,G,V);fe.setMaterial(G,xe);let Ae=H.index,ke=1;if(G.wireframe===!0){if(Ae=F.getWireframeAttribute(H),Ae===void 0)return;ke=2}let Ne=H.drawRange,Fe=H.attributes.position,nt=Ne.start*ke,Ct=(Ne.start+Ne.count)*ke;ue!==null&&(nt=Math.max(nt,ue.start*ke),Ct=Math.min(Ct,(ue.start+ue.count)*ke)),Ae!==null?(nt=Math.max(nt,0),Ct=Math.min(Ct,Ae.count)):Fe!=null&&(nt=Math.max(nt,0),Ct=Math.min(Ct,Fe.count));let ht=Ct-nt;if(ht<0||ht===1/0)return;De.setup(V,G,Ee,H,Ae);let Kt,et=we;if(Ae!==null&&(Kt=ee.get(Ae),et=_e,et.setIndex(Kt)),V.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*Ve()),et.setMode(B.LINES)):et.setMode(B.TRIANGLES);else if(V.isLine){let He=G.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*Ve()),V.isLineSegments?et.setMode(B.LINES):V.isLineLoop?et.setMode(B.LINE_LOOP):et.setMode(B.LINE_STRIP)}else V.isPoints?et.setMode(B.POINTS):V.isSprite&&et.setMode(B.TRIANGLES);if(V.isBatchedMesh)et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)et.renderInstances(nt,ht,V.count);else if(H.isInstancedBufferGeometry){let He=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,or=Math.min(H.instanceCount,He);et.renderInstances(nt,ht,or)}else et.render(nt,ht)};function Ze(M,D,H){M.transparent===!0&&M.side===Ht&&M.forceSinglePass===!1?(M.side=At,M.needsUpdate=!0,Ji(M,D,H),M.side=yn,M.needsUpdate=!0,Ji(M,D,H),M.side=Ht):Ji(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),m=pe.get(H),m.init(),b.push(m),H.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),M!==H&&M.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);let G=new Set;return M.traverse(function(V){let ue=V.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let Ee=ue[xe];Ze(Ee,H,V),G.add(Ee)}else Ze(ue,H,V),G.add(ue)}),b.pop(),m=null,G},this.compileAsync=function(M,D,H=null){let G=this.compile(M,D,H);return new Promise(V=>{function ue(){if(G.forEach(function(xe){Le.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){V(M);return}setTimeout(ue,10)}he.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Je=null;function lt(M){Je&&Je(M)}function vt(){yt.stop()}function Ke(){yt.start()}let yt=new nl;yt.setAnimationLoop(lt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(M){Je=M,Oe.setAnimationLoop(M),M===null?yt.stop():yt.start()},Oe.addEventListener("sessionstart",vt),Oe.addEventListener("sessionend",Ke),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,E),m=pe.get(M,b.length),m.init(),b.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(me),oe=this.localClippingEnabled,K=Me.init(this.clippingPlanes,oe),_=ne.get(M,d.length),_.init(),d.push(_),Yt(M,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(I,U),this.info.render.frame++,K===!0&&Me.beginShadows();let H=m.state.shadowsArray;if(Z.render(H,M,D),K===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(_,M),m.setupLights(v._useLegacyLights),D.isArrayCamera){let G=D.cameras;for(let V=0,ue=G.length;V<ue;V++){let xe=G[V];co(_,M,xe,xe.viewport)}}else co(_,M,D);E!==null&&(S.updateMultisampleRenderTarget(E),S.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(v,M,D),De.resetDefaultState(),q=-1,y=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Yt(M,D,H,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){G&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);let xe=z.update(M),Ee=M.material;Ee.visible&&_.push(M,xe,Ee,H,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){let xe=z.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Re.copy(xe.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){let Ae=xe.groups;for(let ke=0,Ne=Ae.length;ke<Ne;ke++){let Fe=Ae[ke],nt=Ee[Fe.materialIndex];nt&&nt.visible&&_.push(M,xe,nt,H,Re.z,Fe)}}else Ee.visible&&_.push(M,xe,Ee,H,Re.z,null)}}let ue=M.children;for(let xe=0,Ee=ue.length;xe<Ee;xe++)Yt(ue[xe],D,H,G)}function co(M,D,H,G){let V=M.opaque,ue=M.transmissive,xe=M.transparent;m.setupLightsView(H),K===!0&&Me.setGlobalState(v.clippingPlanes,H),ue.length>0&&Nl(V,ue,D,H),G&&fe.viewport(w.copy(G)),V.length>0&&Zi(V,D,H),ue.length>0&&Zi(ue,D,H),xe.length>0&&Zi(xe,D,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Nl(M,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ue=Se.isWebGL2;ge===null&&(ge=new cn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ui:vn,minFilter:Ii,samples:ue?4:0})),v.getDrawingBufferSize(Ce),ue?ge.setSize(Ce.x,Ce.y):ge.setSize(Cs(Ce.x),Cs(Ce.y));let xe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(re),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();let Ee=v.toneMapping;v.toneMapping=xn,Zi(M,H,G),S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge);let Ae=!1;for(let ke=0,Ne=D.length;ke<Ne;ke++){let Fe=D[ke],nt=Fe.object,Ct=Fe.geometry,ht=Fe.material,Kt=Fe.group;if(ht.side===Ht&&nt.layers.test(G.layers)){let et=ht.side;ht.side=At,ht.needsUpdate=!0,lo(nt,H,G,Ct,ht,Kt),ht.side=et,ht.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge)),v.setRenderTarget(xe),v.setClearColor(re,R),v.toneMapping=Ee}function Zi(M,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ue=M.length;V<ue;V++){let xe=M[V],Ee=xe.object,Ae=xe.geometry,ke=G===null?xe.material:G,Ne=xe.group;Ee.layers.test(H.layers)&&lo(Ee,D,H,Ae,ke,Ne)}}function lo(M,D,H,G,V,ue){M.onBeforeRender(v,D,H,G,V,ue),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(v,D,H,G,M,ue),V.transparent===!0&&V.side===Ht&&V.forceSinglePass===!1?(V.side=At,V.needsUpdate=!0,v.renderBufferDirect(H,D,G,V,M,ue),V.side=yn,V.needsUpdate=!0,v.renderBufferDirect(H,D,G,V,M,ue),V.side=Ht):v.renderBufferDirect(H,D,G,V,M,ue),M.onAfterRender(v,D,H,G,V,ue)}function Ji(M,D,H){D.isScene!==!0&&(D=ve);let G=Le.get(M),V=m.state.lights,ue=m.state.shadowsArray,xe=V.state.version,Ee=te.getParameters(M,V.state,ue,D,H),Ae=te.getProgramCacheKey(Ee),ke=G.programs;G.environment=M.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(M.isMeshStandardMaterial?k:x).get(M.envMap||G.environment),ke===void 0&&(M.addEventListener("dispose",le),ke=new Map,G.programs=ke);let Ne=ke.get(Ae);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===xe)return uo(M,Ee),Ne}else Ee.uniforms=te.getUniforms(M),M.onBuild(H,Ee,v),M.onBeforeCompile(Ee,v),Ne=te.acquireProgram(Ee,Ae),ke.set(Ae,Ne),G.uniforms=Ee.uniforms;let Fe=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=Me.uniform),uo(M,Ee),G.needsLights=Bl(M),G.lightsStateVersion=xe,G.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function ho(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=oi.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function uo(M,D){let H=Le.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Fl(M,D,H,G,V){D.isScene!==!0&&(D=ve),S.resetTextureUnits();let ue=D.fog,xe=G.isMeshStandardMaterial?D.environment:null,Ee=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:on,Ae=(G.isMeshStandardMaterial?k:x).get(G.envMap||xe),ke=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color,ht=xn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ht=v.toneMapping);let Kt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=Kt!==void 0?Kt.length:0,He=Le.get(G),or=m.state.lights;if(K===!0&&(oe===!0||M!==y)){let Ut=M===y&&G.id===q;Me.setState(G,M,Ut)}let tt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==or.state.version||He.outputColorSpace!==Ee||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||He.envMap!==Ae||G.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Fe||He.morphNormals!==nt||He.morphColors!==Ct||He.toneMapping!==ht||Se.isWebGL2===!0&&He.morphTargetsCount!==et)&&(tt=!0):(tt=!0,He.__version=G.version);let bn=He.currentProgram;tt===!0&&(bn=Ji(G,D,V));let fo=!1,Mi=!1,cr=!1,gt=bn.getUniforms(),En=He.uniforms;if(fe.useProgram(bn.program)&&(fo=!0,Mi=!0,cr=!0),G.id!==q&&(q=G.id,Mi=!0),fo||y!==M){gt.setValue(B,"projectionMatrix",M.projectionMatrix),gt.setValue(B,"viewMatrix",M.matrixWorldInverse);let Ut=gt.map.cameraPosition;Ut!==void 0&&Ut.setValue(B,Re.setFromMatrixPosition(M.matrixWorld)),Se.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Mi=!0,cr=!0)}if(V.isSkinnedMesh){gt.setOptional(B,V,"bindMatrix"),gt.setOptional(B,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Se.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),gt.setValue(B,"boneTexture",Ut.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(gt.setOptional(B,V,"batchingTexture"),gt.setValue(B,"batchingTexture",V._matricesTexture,S));let lr=H.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&Se.isWebGL2===!0)&&ze.update(V,H,bn),(Mi||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,gt.setValue(B,"receiveShadow",V.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(En.envMap.value=Ae,En.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Mi&&(gt.setValue(B,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Ol(En,cr),ue&&G.fog===!0&&j.refreshFogUniforms(En,ue),j.refreshMaterialUniforms(En,G,N,Y,ge),oi.upload(B,ho(He),En,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oi.upload(B,ho(He),En,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(B,"center",V.center),gt.setValue(B,"modelViewMatrix",V.modelViewMatrix),gt.setValue(B,"normalMatrix",V.normalMatrix),gt.setValue(B,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ut=G.uniformsGroups;for(let hr=0,zl=Ut.length;hr<zl;hr++)if(Se.isWebGL2){let po=Ut[hr];Ie.update(po,bn),Ie.bind(po,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function Ol(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Bl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,D,H){Le.get(M.texture).__webglTexture=D,Le.get(M.depthTexture).__webglTexture=H;let G=Le.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){let H=Le.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){E=M,P=D,A=H;let G=!0,V=null,ue=!1,xe=!1;if(M){let Ae=Le.get(M);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(B.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?S.setupRenderTarget(M):Ae.__hasExternalTextures&&S.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);let ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);let Ne=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?V=Ne[D][H]:V=Ne[D],ue=!0):Se.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?V=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[H]:V=Ne,w.copy(M.viewport),X.copy(M.scissor),Q=M.scissorTest}else w.copy($).multiplyScalar(N).floor(),X.copy(J).multiplyScalar(N).floor(),Q=ie;if(fe.bindFramebuffer(B.FRAMEBUFFER,V)&&Se.drawBuffers&&G&&fe.drawBuffers(M,V),fe.viewport(w),fe.scissor(X),fe.setScissorTest(Q),ue){let Ae=Le.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,H)}else if(xe){let Ae=Le.get(M.texture),ke=D||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.__webglTexture,H||0,ke)}q=-1},this.readRenderTargetPixels=function(M,D,H,G,V,ue,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){fe.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let Ae=M.texture,ke=Ae.format,Ne=Ae.type;if(ke!==Wt&&de.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ne===Ui&&(he.has("EXT_color_buffer_half_float")||Se.isWebGL2&&he.has("EXT_color_buffer_float"));if(Ne!==vn&&de.convert(Ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===gn&&(Se.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&H>=0&&H<=M.height-V&&B.readPixels(D,H,G,V,de.convert(ke),de.convert(Ne),ue)}finally{let Ae=E!==null?Le.get(E).__webglFramebuffer:null;fe.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,D,H=0){let G=Math.pow(2,-H),V=Math.floor(D.image.width*G),ue=Math.floor(D.image.height*G);S.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,M.x,M.y,V,ue),fe.unbindTexture()},this.copyTextureToTexture=function(M,D,H,G=0){let V=D.image.width,ue=D.image.height,xe=de.convert(H.format),Ee=de.convert(H.type);S.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,M.x,M.y,V,ue,xe,Ee,D.image.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,G,M.x,M.y,xe,Ee,D.image),G===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H,G,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,Ae=de.convert(G.format),ke=de.convert(G.type),Ne;if(G.isData3DTexture)S.setTexture3D(G,0),Ne=B.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ne=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let Fe=B.getParameter(B.UNPACK_ROW_LENGTH),nt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ct=B.getParameter(B.UNPACK_SKIP_PIXELS),ht=B.getParameter(B.UNPACK_SKIP_ROWS),Kt=B.getParameter(B.UNPACK_SKIP_IMAGES),et=H.isCompressedTexture?H.mipmaps[V]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,et.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,M.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,M.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(Ne,V,D.x,D.y,D.z,ue,xe,Ee,Ae,ke,et.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,V,D.x,D.y,D.z,ue,xe,Ee,Ae,et.data)):B.texSubImage3D(Ne,V,D.x,D.y,D.z,ue,xe,Ee,Ae,ke,et),B.pixelStorei(B.UNPACK_ROW_LENGTH,Fe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt),V===0&&G.generateMipmaps&&B.generateMipmap(Ne),fe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Da?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?Dn:Kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?st:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},da=class extends zi{};da.prototype.isWebGL1Renderer=!0;var Vs=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ki=class extends Bt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new rt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends Xt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new ye,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends Hs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oa(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var vs=new L,kr=new Oa,Vr=new Oa,Hr=new Oa,Vi=class extends Xt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(vs.subVectors(s[0],s[1]).add(s[0]),l=vs);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Vr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Hr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Vr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(kr.calc(c),Vr.calc(c),Hr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Y1(i,e){let t=1-i;return t*t*e}function $1(i,e){return 2*(1-i)*i*e}function Z1(i,e){return i*i*e}function Pi(i,e,t,n){return Y1(i,e)+$1(i,t)+Z1(i,n)}function J1(i,e){let t=1-i;return t*t*t*e}function K1(i,e){let t=1-i;return 3*t*t*i*e}function Q1(i,e){return 3*(1-i)*i*i*e}function j1(i,e){return i*i*i*e}function Li(i,e,t,n,s){return J1(i,e)+K1(i,t)+Q1(i,n)+j1(i,s)}var pa=class extends Xt{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,s.x,r.x,o.x,a.x),Li(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends Xt{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,s.x,r.x,o.x,a.x),Li(e,s.y,r.y,o.y,a.y),Li(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Xt{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Xt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xt{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pi(e,s.x,r.x,o.x),Pi(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends Xt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pi(e,s.x,r.x,o.x),Pi(e,s.y,r.y,o.y),Pi(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Oc(a,c.x,l.x,h.x,u.x),Oc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},e0=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:Vi,CubicBezierCurve:pa,CubicBezierCurve3:ma,EllipseCurve:Hs,LineCurve:ga,LineCurve3:_a,QuadraticBezierCurve:xa,QuadraticBezierCurve3:Gs,SplineCurve:va});var Ws=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new L,g=new ye;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let b=d+m,v=b,T=b+n+1,P=b+n+2,A=b+1;a.push(v,T,A),a.push(T,P,A)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Hi=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let b=[],v=d/n,T=0;d===0&&o===0?T=.5/t:d===n&&c===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+T,1-v),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let v=h[d][b+1],T=h[d][b],P=h[d+1][b],A=h[d+1][b+1];(d!==0||o>0)&&p.push(v,T,A),(d!==n-1||c<Math.PI)&&p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xs=class i extends Zt{constructor(e=new Gs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ye,h=new L,u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),b(),d()}function m(v){h=e.getPointAt(v/t,h);let T=o.normals[v],P=o.binormals[v];for(let A=0;A<=s;A++){let E=A/s*Math.PI*2,q=Math.sin(E),y=-Math.cos(E);c.x=y*T.x+q*P.x,c.y=y*T.y+q*P.y,c.z=y*T.z+q*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=t;v++)for(let T=1;T<=s;T++){let P=(s+1)*(v-1)+(T-1),A=(s+1)*v+(T-1),E=(s+1)*v+T,q=(s+1)*(v-1)+T;g.push(P,A,q),g.push(A,E,q)}}function b(){for(let v=0;v<=t;v++)for(let T=0;T<=s;T++)l.x=v/t,l.y=T/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new e0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ys(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ya=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $o:r=e,a=2*t-n;break;case Zo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $o:o=e,c=2*n-t;break;case Zo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+b*o[l+P]+v*o[c+P]+T*o[u+P];return r}},Ma=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sa=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ya(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case _r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&t0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_r,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=bs;var Fn=class extends qt{};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Ss;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends qt{};ba.prototype.ValueTypeName="color";var Ea=class extends qt{};Ea.prototype.ValueTypeName="number";var wa=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gi=class extends qt{InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=bs;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends qt{};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Ss;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends qt{};Ta.prototype.ValueTypeName="vector";var Aa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},n0=new Aa,Ca=class{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ys=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gr=new rt,Bc=new L,zc=new L,Ra=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),Gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pa=class extends Ra{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Pa}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ba="\\[\\]\\.:\\/",i0=new RegExp("["+Ba+"]","g"),za="[^"+Ba+"]",s0="[^"+Ba.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",za),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",za),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",za),l0=new RegExp("^"+r0+a0+o0+c0+"$"),h0=["material","materials","bones","map"],La=class{constructor(e,t,n){let s=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=l0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=La;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);var Zs=class{constructor(e,t,n=0,s=1/0){this.ray=new Us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(kc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ia(e[s],this,n,t);return n.sort(kc),n}};function kc(i,e){return i.distance-e.distance}function Ia(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ia(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ka=[[[[-59.572,-80.04],[-59.866,-80.55],[-60.16,-81],[-62.255,-80.863],[-64.488,-80.922],[-65.742,-80.589],[-65.742,-80.55],[-66.29,-80.256],[-64.038,-80.295],[-61.883,-80.393],[-61.139,-79.981],[-60.61,-79.629],[-59.572,-80.04]]],[[[-159.208,-79.497],[-161.128,-79.634],[-162.44,-79.281],[-163.027,-78.929],[-163.067,-78.87],[-163.713,-78.596],[-163.713,-78.596],[-163.106,-78.223],[-161.245,-78.38],[-160.246,-78.694],[-159.482,-79.046],[-159.208,-79.497]]],[[[-45.155,-78.047],[-43.921,-78.478],[-43.49,-79.086],[-43.372,-79.517],[-43.333,-80.026],[-44.881,-80.34],[-46.506,-80.594],[-48.386,-80.829],[-50.482,-81.025],[-52.852,-80.967],[-54.164,-80.634],[-53.988,-80.222],[-51.853,-79.948],[-50.991,-79.615],[-50.365,-79.183],[-49.914,-78.811],[-49.307,-78.459],[-48.661,-78.047],[-48.661,-78.047],[-48.151,-78.047],[-46.663,-77.831],[-45.155,-78.047]]],[[[-121.212,-73.501],[-119.919,-73.658],[-118.724,-73.481],[-119.292,-73.834],[-120.232,-74.089],[-121.623,-74.01],[-122.622,-73.658],[-122.622,-73.658],[-122.406,-73.325],[-121.212,-73.501]]],[[[-125.56,-73.481],[-124.032,-73.873],[-124.619,-73.834],[-125.912,-73.736],[-127.283,-73.462],[-127.283,-73.462],[-126.558,-73.246],[-125.56,-73.481]]],[[[-98.982,-71.933],[-97.885,-72.071],[-96.788,-71.953],[-96.2,-72.521],[-96.984,-72.443],[-98.198,-72.482],[-99.432,-72.443],[-100.783,-72.502],[-101.802,-72.306],[-102.331,-71.894],[-102.331,-71.894],[-101.704,-71.718],[-100.431,-71.855],[-98.982,-71.933]]],[[[-68.451,-70.956],[-68.334,-71.406],[-68.51,-71.798],[-68.784,-72.171],[-69.959,-72.308],[-71.076,-72.504],[-72.388,-72.484],[-71.898,-72.092],[-73.074,-72.229],[-74.19,-72.367],[-74.954,-72.073],[-75.013,-71.661],[-73.916,-71.269],[-73.916,-71.269],[-73.23,-71.152],[-72.075,-71.191],[-71.781,-70.681],[-71.722,-70.309],[-71.742,-69.506],[-71.174,-69.035],[-70.253,-68.879],[-69.724,-69.251],[-69.489,-69.623],[-69.059,-70.074],[-68.726,-70.505],[-68.451,-70.956]]],[[[-58.614,-64.152],[-59.045,-64.368],[-59.789,-64.211],[-60.612,-64.309],[-61.297,-64.544],[-62.022,-64.799],[-62.512,-65.093],[-62.649,-65.485],[-62.59,-65.857],[-62.12,-66.19],[-62.806,-66.426],[-63.746,-66.504],[-64.294,-66.837],[-64.882,-67.15],[-65.508,-67.582],[-65.665,-67.954],[-65.313,-68.365],[-64.784,-68.679],[-63.961,-68.914],[-63.197,-69.228],[-62.786,-69.619],[-62.571,-69.992],[-62.277,-70.384],[-61.807,-70.717],[-61.513,-71.089],[-61.376,-72.01],[-61.082,-72.382],[-61.004,-72.774],[-60.69,-73.166],[-60.827,-73.695],[-61.376,-74.107],[-61.963,-74.44],[-63.295,-74.577],[-63.746,-74.93],[-64.353,-75.263],[-65.861,-75.635],[-67.193,-75.792],[-68.446,-76.007],[-69.798,-76.223],[-70.601,-76.634],[-72.207,-76.674],[-73.97,-76.634],[-75.556,-76.713],[-77.24,-76.713],[-76.927,-77.105],[-75.399,-77.281],[-74.283,-77.555],[-73.656,-77.908],[-74.773,-78.222],[-76.496,-78.124],[-77.926,-78.378],[-77.985,-78.79],[-78.024,-79.182],[-76.849,-79.515],[-76.633,-79.887],[-75.36,-80.26],[-73.245,-80.416],[-71.443,-80.691],[-70.013,-81.004],[-68.192,-81.318],[-65.704,-81.474],[-63.256,-81.749],[-61.552,-82.043],[-59.691,-82.376],[-58.712,-82.846],[-58.222,-83.218],[-57.008,-82.866],[-55.363,-82.572],[-53.62,-82.258],[-51.544,-82.004],[-49.761,-81.729],[-47.274,-81.71],[-44.826,-81.847],[-42.808,-82.082],[-42.162,-81.651],[-40.771,-81.357],[-38.245,-81.337],[-36.267,-81.122],[-34.386,-80.906],[-32.31,-80.769],[-30.097,-80.593],[-28.55,-80.338],[-29.255,-79.985],[-29.686,-79.633],[-29.686,-79.26],[-31.625,-79.299],[-33.681,-79.456],[-35.64,-79.456],[-35.914,-79.084],[-35.777,-78.339],[-35.327,-78.124],[-33.897,-77.889],[-32.212,-77.653],[-30.998,-77.36],[-29.784,-77.066],[-28.883,-76.674],[-27.512,-76.497],[-26.16,-76.36],[-25.475,-76.282],[-23.928,-76.243],[-22.459,-76.105],[-21.225,-75.909],[-20.01,-75.674],[-18.914,-75.439],[-17.523,-75.126],[-16.642,-74.793],[-15.701,-74.499],[-15.408,-74.107],[-16.465,-73.872],[-16.113,-73.46],[-15.447,-73.147],[-14.409,-72.951],[-13.312,-72.715],[-12.294,-72.402],[-11.51,-72.01],[-11.02,-71.54],[-10.296,-71.265],[-9.101,-71.324],[-8.611,-71.657],[-7.417,-71.697],[-7.377,-71.324],[-6.868,-70.932],[-5.791,-71.03],[-5.536,-71.403],[-4.342,-71.461],[-3.049,-71.285],[-1.795,-71.167],[-.659,-71.226],[-.229,-71.638],[.868,-71.305],[1.887,-71.128],[3.023,-70.991],[4.139,-70.854],[5.158,-70.619],[6.274,-70.462],[7.136,-70.247],[7.743,-69.894],[8.487,-70.149],[9.525,-70.011],[10.25,-70.482],[10.818,-70.834],[11.954,-70.638],[12.404,-70.247],[13.423,-69.972],[14.735,-70.031],[15.127,-70.403],[15.949,-70.031],[17.027,-69.913],[18.202,-69.874],[19.259,-69.894],[20.376,-70.011],[21.453,-70.07],[21.923,-70.403],[22.569,-70.697],[23.666,-70.521],[24.841,-70.482],[25.977,-70.482],[27.094,-70.462],[28.093,-70.325],[29.15,-70.207],[30.032,-69.933],[30.972,-69.757],[31.99,-69.659],[32.754,-69.384],[33.302,-68.836],[33.87,-68.503],[34.908,-68.659],[35.3,-69.012],[36.162,-69.247],[37.2,-69.169],[37.905,-69.521],[38.649,-69.776],[39.668,-69.541],[40.02,-69.11],[40.921,-68.934],[41.959,-68.601],[42.939,-68.463],[44.114,-68.267],[44.897,-68.052],[45.72,-67.817],[46.503,-67.601],[47.443,-67.719],[48.344,-67.366],[48.991,-67.092],[49.931,-67.111],[50.753,-66.876],[50.949,-66.523],[51.792,-66.249],[52.614,-66.053],[53.613,-65.896],[54.534,-65.818],[55.415,-65.877],[56.355,-65.975],[57.158,-66.249],[57.256,-66.68],[58.137,-67.013],[58.745,-67.288],[59.939,-67.405],[60.605,-67.68],[61.428,-67.954],[62.387,-68.013],[63.19,-67.817],[64.052,-67.405],[64.992,-67.621],[65.972,-67.738],[66.912,-67.856],[67.891,-67.934],[68.89,-67.934],[69.713,-68.973],[69.673,-69.228],[69.556,-69.678],[68.596,-69.933],[67.813,-70.305],[67.95,-70.697],[69.066,-70.678],[68.929,-71.069],[68.42,-71.442],[67.95,-71.853],[68.714,-72.167],[69.869,-72.265],[71.025,-72.088],[71.573,-71.697],[71.906,-71.324],[72.455,-71.011],[73.081,-70.717],[73.336,-70.364],[73.865,-69.874],[74.492,-69.776],[75.628,-69.737],[76.626,-69.619],[77.645,-69.463],[78.135,-69.071],[78.428,-68.698],[79.114,-68.326],[80.093,-68.072],[80.935,-67.876],[81.484,-67.542],[82.052,-67.366],[82.776,-67.209],[83.775,-67.307],[84.676,-67.209],[85.656,-67.092],[86.752,-67.15],[87.477,-66.876],[87.986,-66.21],[88.358,-66.484],[88.828,-66.955],[89.671,-67.15],[90.63,-67.229],[91.59,-67.111],[92.609,-67.19],[93.549,-67.209],[94.175,-67.111],[95.018,-67.17],[95.781,-67.386],[96.682,-67.249],[97.76,-67.249],[98.68,-67.111],[99.718,-67.249],[100.384,-66.915],[100.893,-66.582],[101.579,-66.308],[102.832,-65.563],[103.479,-65.7],[104.243,-65.975],[104.908,-66.328],[106.182,-66.935],[107.161,-66.955],[108.081,-66.955],[109.159,-66.837],[110.236,-66.7],[111.058,-66.426],[111.744,-66.132],[112.86,-66.092],[113.605,-65.877],[114.388,-66.073],[114.897,-66.386],[115.602,-66.7],[116.699,-66.661],[117.385,-66.915],[118.579,-67.17],[119.833,-67.268],[120.871,-67.19],[121.654,-66.876],[122.32,-66.563],[123.221,-66.484],[124.122,-66.621],[125.16,-66.719],[126.1,-66.563],[127.001,-66.563],[127.883,-66.661],[128.803,-66.759],[129.704,-66.582],[130.781,-66.426],[131.8,-66.386],[132.936,-66.386],[133.856,-66.288],[134.757,-66.21],[135.032,-65.72],[135.071,-65.309],[135.697,-65.583],[135.874,-66.034],[136.207,-66.445],[136.618,-66.778],[137.46,-66.955],[138.596,-66.896],[139.908,-66.876],[140.809,-66.817],[142.122,-66.817],[143.062,-66.798],[144.374,-66.837],[145.49,-66.915],[146.196,-67.229],[146,-67.601],[146.646,-67.895],[147.723,-68.13],[148.84,-68.385],[150.132,-68.561],[151.484,-68.718],[152.502,-68.875],[153.638,-68.895],[154.285,-68.561],[155.166,-68.836],[155.93,-69.149],[156.811,-69.384],[158.026,-69.482],[159.181,-69.6],[159.671,-69.992],[160.807,-70.227],[161.57,-70.58],[162.687,-70.736],[163.842,-70.717],[164.92,-70.776],[166.114,-70.756],[167.309,-70.834],[168.426,-70.971],[169.464,-71.207],[170.502,-71.403],[171.207,-71.697],[171.089,-72.088],[170.56,-72.441],[170.11,-72.892],[169.757,-73.245],[169.287,-73.656],[167.975,-73.813],[167.387,-74.165],[166.095,-74.381],[165.644,-74.773],[164.959,-75.145],[164.234,-75.459],[163.823,-75.87],[163.568,-76.243],[163.47,-76.693],[163.49,-77.066],[164.058,-77.457],[164.273,-77.83],[164.743,-78.183],[166.604,-78.32],[166.996,-78.751],[165.194,-78.907],[163.666,-79.123],[161.766,-79.162],[160.924,-79.73],[160.748,-80.201],[160.317,-80.573],[159.788,-80.945],[161.12,-81.279],[161.629,-81.69],[162.491,-82.062],[163.705,-82.395],[165.096,-82.709],[166.604,-83.022],[168.896,-83.336],[169.405,-83.826],[172.284,-84.041],[172.477,-84.118],[173.224,-84.414],[175.986,-84.159],[178.277,-84.473],[180,-84.713],[180,-90],[-180,-90],[-180,-84.713],[-179.942,-84.721],[-179.059,-84.139],[-177.257,-84.453],[-177.141,-84.418],[-176.862,-84.334],[-176.524,-84.232],[-176.23,-84.143],[-176.085,-84.099],[-175.934,-84.102],[-175.83,-84.118],[-174.383,-84.534],[-173.117,-84.118],[-172.889,-84.061],[-169.951,-83.885],[-169,-84.118],[-168.53,-84.237],[-167.022,-84.57],[-164.182,-84.825],[-161.93,-85.139],[-158.071,-85.374],[-155.192,-85.1],[-150.942,-85.296],[-148.533,-85.609],[-145.889,-85.315],[-143.108,-85.041],[-142.892,-84.57],[-146.829,-84.531],[-150.061,-84.296],[-150.903,-83.904],[-153.586,-83.689],[-153.41,-83.238],[-153.038,-82.827],[-152.666,-82.454],[-152.862,-82.043],[-154.526,-81.768],[-155.29,-81.416],[-156.837,-81.102],[-154.409,-81.161],[-152.098,-81.004],[-150.648,-81.337],[-148.866,-81.043],[-147.221,-80.671],[-146.418,-80.338],[-146.77,-79.926],[-148.063,-79.652],[-149.532,-79.358],[-151.588,-79.299],[-153.39,-79.162],[-155.329,-79.064],[-155.976,-78.692],[-157.268,-78.378],[-158.052,-78.026],[-158.365,-76.889],[-157.875,-76.987],[-156.975,-77.301],[-155.329,-77.203],[-153.743,-77.066],[-152.92,-77.497],[-151.334,-77.399],[-150.002,-77.183],[-148.748,-76.909],[-147.612,-76.576],[-146.104,-76.478],[-146.144,-76.105],[-146.496,-75.733],[-146.202,-75.38],[-144.91,-75.204],[-144.322,-75.537],[-142.794,-75.341],[-141.639,-75.086],[-140.209,-75.067],[-138.858,-74.969],[-137.506,-74.734],[-136.429,-74.518],[-135.215,-74.303],[-134.431,-74.361],[-133.746,-74.44],[-132.257,-74.303],[-130.925,-74.479],[-129.554,-74.459],[-128.242,-74.322],[-126.891,-74.42],[-125.402,-74.518],[-124.011,-74.479],[-122.562,-74.499],[-121.074,-74.518],[-119.703,-74.479],[-118.684,-74.185],[-117.47,-74.028],[-116.216,-74.244],[-115.022,-74.068],[-113.944,-73.715],[-113.298,-74.028],[-112.945,-74.381],[-112.299,-74.714],[-111.261,-74.42],[-110.066,-74.793],[-108.715,-74.91],[-107.559,-75.184],[-106.149,-75.126],[-104.876,-74.949],[-103.368,-74.988],[-102.017,-75.126],[-100.646,-75.302],[-100.117,-74.871],[-100.763,-74.538],[-101.253,-74.185],[-102.545,-74.107],[-103.113,-73.734],[-103.329,-73.362],[-103.681,-72.618],[-102.917,-72.755],[-101.605,-72.813],[-100.313,-72.755],[-99.137,-72.911],[-98.119,-73.205],[-97.688,-73.558],[-96.337,-73.617],[-95.044,-73.48],[-93.673,-73.284],[-92.439,-73.166],[-91.421,-73.401],[-90.089,-73.323],[-89.227,-72.559],[-88.424,-73.009],[-87.268,-73.186],[-86.015,-73.088],[-85.192,-73.48],[-83.88,-73.519],[-82.666,-73.636],[-81.471,-73.852],[-80.687,-73.48],[-80.296,-73.127],[-79.297,-73.519],[-77.926,-73.421],[-76.907,-73.636],[-76.222,-73.97],[-74.89,-73.872],[-73.852,-73.656],[-72.834,-73.401],[-71.619,-73.264],[-70.209,-73.147],[-68.936,-73.009],[-67.957,-72.794],[-67.369,-72.48],[-67.134,-72.049],[-67.252,-71.638],[-67.565,-71.246],[-67.917,-70.854],[-68.231,-70.462],[-68.485,-70.109],[-68.544,-69.717],[-68.446,-69.326],[-67.976,-68.953],[-67.585,-68.542],[-67.428,-68.15],[-67.624,-67.719],[-67.741,-67.327],[-67.252,-66.876],[-66.703,-66.582],[-66.057,-66.21],[-65.371,-65.896],[-64.568,-65.603],[-64.177,-65.171],[-63.628,-64.897],[-63.001,-64.642],[-62.042,-64.584],[-61.415,-64.27],[-60.71,-64.074],[-59.887,-63.957],[-59.163,-63.702],[-58.595,-63.388],[-57.811,-63.271],[-57.224,-63.525],[-57.596,-63.859],[-58.614,-64.152]]],[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.897],[-67.291,-55.301],[-68.149,-55.612],[-69.232,-55.499],[-69.958,-55.198],[-71.006,-55.054],[-72.264,-54.495],[-73.285,-53.958],[-74.663,-52.837],[-73.838,-53.047],[-72.434,-53.715],[-71.108,-54.074],[-70.592,-53.616],[-70.267,-52.931],[-69.346,-52.518],[-68.634,-52.636],[-68.634,-52.636],[-68.25,-53.1],[-67.75,-53.85]]],[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]],[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.242],[68.868,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]],[[[145.398,-40.793],[146.364,-41.138],[146.909,-41.001],[147.689,-40.808],[148.289,-40.875],[148.36,-42.062],[148.017,-42.407],[147.914,-43.212],[147.565,-42.938],[146.87,-43.635],[146.663,-43.581],[146.048,-43.55],[145.432,-42.694],[145.295,-42.034],[144.718,-41.163],[144.744,-40.704],[145.398,-40.793]]],[[[173.02,-40.919],[173.247,-41.332],[173.958,-40.927],[174.248,-41.349],[174.249,-41.77],[173.876,-42.233],[173.223,-42.97],[172.711,-43.372],[173.08,-43.853],[172.309,-43.866],[171.453,-44.243],[171.185,-44.897],[170.617,-45.909],[169.831,-46.356],[169.332,-46.641],[168.411,-46.62],[167.764,-46.29],[166.677,-46.22],[166.509,-45.853],[167.046,-45.111],[168.304,-44.124],[168.949,-43.936],[169.668,-43.555],[170.525,-43.032],[171.125,-42.513],[171.57,-41.767],[171.949,-41.514],[172.097,-40.956],[172.799,-40.494],[173.02,-40.919]]],[[[174.612,-36.156],[175.337,-37.209],[175.358,-36.526],[175.809,-36.799],[175.958,-37.555],[176.763,-37.881],[177.439,-37.961],[178.01,-37.58],[178.517,-37.695],[178.275,-38.583],[177.97,-39.166],[177.207,-39.146],[176.94,-39.45],[177.033,-39.88],[176.886,-40.066],[176.508,-40.605],[176.012,-41.29],[175.24,-41.688],[175.068,-41.426],[174.651,-41.282],[175.228,-40.459],[174.9,-39.909],[173.824,-39.509],[173.852,-39.147],[174.575,-38.798],[174.743,-38.028],[174.697,-37.381],[174.292,-36.711],[174.319,-36.535],[173.841,-36.122],[173.054,-35.237],[172.636,-34.529],[173.007,-34.451],[173.551,-35.006],[174.329,-35.265],[174.612,-36.156]]],[[[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.474,-21.68],[164.83,-21.15],[164.168,-20.445],[164.03,-20.106],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08],[166.6,-21.7],[167.12,-22.16]]],[[[178.374,-17.34],[178.718,-17.628],[178.553,-18.151],[177.933,-18.288],[177.381,-18.164],[177.285,-17.725],[177.671,-17.381],[178.126,-17.505],[178.374,-17.34]]],[[[179.364,-16.801],[178.725,-17.012],[178.597,-16.639],[179.097,-16.434],[179.414,-16.379],[180,-16.067],[180,-16.555],[179.364,-16.801]]],[[[-179.917,-16.502],[-180,-16.555],[-180,-16.067],[-179.793,-16.021],[-179.917,-16.502]]],[[[167.845,-16.466],[167.515,-16.598],[167.18,-16.16],[167.217,-15.892],[167.845,-16.466]]],[[[167.108,-14.934],[167.27,-15.74],[167.001,-15.615],[166.793,-15.669],[166.65,-15.393],[166.629,-14.626],[167.108,-14.934]]],[[[50.057,-13.556],[50.217,-14.759],[50.477,-15.227],[50.377,-15.706],[50.2,-16],[49.861,-15.414],[49.673,-15.71],[49.863,-16.451],[49.775,-16.875],[49.499,-17.106],[49.436,-17.953],[49.042,-19.119],[48.549,-20.497],[47.931,-22.392],[47.548,-23.782],[47.096,-24.942],[46.282,-25.178],[45.41,-25.601],[44.834,-25.346],[44.04,-24.988],[43.764,-24.461],[43.698,-23.574],[43.346,-22.777],[43.254,-22.057],[43.433,-21.336],[43.894,-21.163],[43.896,-20.83],[44.374,-20.072],[44.464,-19.435],[44.232,-18.962],[44.043,-18.331],[43.963,-17.41],[44.312,-16.85],[44.447,-16.216],[44.945,-16.179],[45.503,-15.974],[45.873,-15.793],[46.312,-15.78],[46.882,-15.21],[47.705,-14.594],[48.005,-14.091],[47.869,-13.664],[48.294,-13.784],[48.845,-13.089],[48.864,-12.488],[49.195,-12.041],[49.544,-12.47],[49.809,-12.895],[50.057,-13.556]]],[[[143.562,-13.764],[143.922,-14.548],[144.564,-14.171],[144.895,-14.594],[145.375,-14.985],[145.272,-15.428],[145.485,-16.286],[145.637,-16.785],[145.889,-16.907],[146.16,-17.762],[146.064,-18.28],[146.387,-18.958],[147.471,-19.481],[148.178,-19.956],[148.848,-20.391],[148.717,-20.633],[149.289,-21.261],[149.678,-22.343],[150.077,-22.123],[150.483,-22.556],[150.727,-22.402],[150.9,-23.462],[151.609,-24.076],[152.074,-24.458],[152.855,-25.268],[153.136,-26.071],[153.162,-26.641],[153.093,-27.26],[153.569,-28.11],[153.512,-28.995],[153.339,-29.458],[153.069,-30.35],[153.09,-30.924],[152.892,-31.64],[152.45,-32.55],[151.709,-33.041],[151.344,-33.816],[151.011,-34.31],[150.714,-35.173],[150.328,-35.672],[150.075,-36.42],[149.946,-37.109],[149.997,-37.425],[149.424,-37.773],[148.305,-37.809],[147.382,-38.219],[146.922,-38.607],[146.318,-39.036],[145.49,-38.594],[144.877,-38.417],[145.032,-37.896],[144.486,-38.085],[143.61,-38.809],[142.745,-38.538],[142.178,-38.38],[141.607,-38.309],[140.639,-38.019],[139.992,-37.403],[139.807,-36.644],[139.574,-36.138],[139.083,-35.733],[138.121,-35.612],[138.449,-35.127],[138.208,-34.385],[137.719,-35.077],[136.829,-35.261],[137.352,-34.707],[137.504,-34.13],[137.89,-33.64],[137.81,-32.9],[136.997,-33.753],[136.372,-34.095],[135.989,-34.89],[135.208,-34.479],[135.239,-33.948],[134.613,-33.223],[134.086,-32.848],[134.274,-32.617],[132.991,-32.011],[132.288,-31.983],[131.326,-31.496],[129.536,-31.59],[128.241,-31.948],[127.103,-32.282],[126.149,-32.216],[125.089,-32.729],[124.222,-32.959],[124.029,-33.484],[123.66,-33.89],[122.811,-33.914],[122.183,-34.003],[121.299,-33.821],[120.58,-33.93],[119.894,-33.976],[119.299,-34.509],[119.007,-34.464],[118.506,-34.747],[118.025,-35.065],[117.296,-35.025],[116.625,-35.025],[115.564,-34.386],[115.027,-34.197],[115.049,-33.623],[115.545,-33.487],[115.715,-33.26],[115.679,-32.9],[115.802,-32.205],[115.69,-31.612],[115.161,-30.602],[114.997,-30.031],[115.04,-29.461],[114.642,-28.81],[114.616,-28.516],[114.174,-28.118],[114.049,-27.335],[113.477,-26.543],[113.339,-26.117],[113.778,-26.549],[113.441,-25.621],[113.937,-25.911],[114.233,-26.298],[114.216,-25.786],[113.721,-24.999],[113.625,-24.684],[113.394,-24.385],[113.502,-23.806],[113.707,-23.56],[113.843,-23.06],[113.737,-22.475],[114.15,-21.756],[114.225,-22.517],[114.648,-21.83],[115.46,-21.495],[115.947,-21.069],[116.712,-20.702],[117.166,-20.624],[117.442,-20.747],[118.23,-20.374],[118.836,-20.263],[118.988,-20.044],[119.252,-19.953],[119.805,-19.977],[120.856,-19.684],[121.4,-19.24],[121.655,-18.705],[122.242,-18.198],[122.287,-17.799],[122.313,-17.255],[123.013,-16.405],[123.434,-17.269],[123.859,-17.069],[123.503,-16.597],[123.817,-16.111],[124.258,-16.328],[124.38,-15.567],[124.926,-15.075],[125.167,-14.68],[125.67,-14.51],[125.686,-14.231],[126.125,-14.347],[126.143,-14.096],[126.583,-13.953],[127.066,-13.818],[127.805,-14.277],[128.36,-14.869],[128.986,-14.876],[129.621,-14.97],[129.41,-14.421],[129.889,-13.619],[130.339,-13.357],[130.184,-13.108],[130.618,-12.536],[131.223,-12.184],[131.735,-12.302],[132.575,-12.114],[132.557,-11.603],[131.825,-11.274],[132.357,-11.129],[133.02,-11.376],[133.551,-11.787],[134.393,-12.042],[134.679,-11.941],[135.298,-12.249],[135.883,-11.962],[136.258,-12.049],[136.492,-11.857],[136.952,-12.352],[136.685,-12.887],[136.305,-13.291],[135.962,-13.325],[136.078,-13.724],[135.784,-14.224],[135.429,-14.715],[135.5,-14.998],[136.295,-15.55],[137.065,-15.871],[137.58,-16.215],[138.303,-16.808],[138.585,-16.807],[139.109,-17.063],[139.261,-17.372],[140.215,-17.711],[140.875,-17.369],[141.071,-16.832],[141.274,-16.389],[141.398,-15.841],[141.702,-15.045],[141.563,-14.561],[141.636,-14.27],[141.52,-13.698],[141.651,-12.945],[141.843,-12.742],[141.687,-12.408],[141.929,-11.877],[142.118,-11.328],[142.144,-11.043],[142.515,-10.668],[142.797,-11.157],[142.867,-11.785],[143.116,-11.906],[143.159,-12.326],[143.522,-12.834],[143.597,-13.4],[143.562,-13.764]]],[[[162.119,-10.483],[162.399,-10.826],[161.7,-10.82],[161.32,-10.205],[161.917,-10.447],[162.119,-10.483]]],[[[120.716,-10.24],[120.295,-10.259],[118.968,-9.558],[119.9,-9.361],[120.426,-9.666],[120.776,-9.97],[120.716,-10.24]]],[[[160.852,-9.873],[160.463,-9.895],[159.849,-9.794],[159.64,-9.64],[159.703,-9.243],[160.363,-9.4],[160.689,-9.61],[160.852,-9.873]]],[[[161.68,-9.6],[161.529,-9.784],[160.788,-8.918],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]]],[[[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.969,-8.893],[125.086,-8.657],[125.947,-8.432],[126.645,-8.398],[126.957,-8.273],[127.336,-8.397],[126.968,-8.668],[125.926,-9.106],[125.089,-9.393],[124.436,-10.14]]],[[[117.9,-8.096],[118.261,-8.362],[118.878,-8.281],[119.127,-8.706],[117.97,-8.907],[117.278,-9.041],[116.74,-9.033],[117.084,-8.457],[117.632,-8.449],[117.9,-8.096]]],[[[122.904,-8.094],[122.757,-8.65],[121.254,-8.934],[119.924,-8.81],[119.921,-8.445],[120.715,-8.237],[121.342,-8.537],[122.007,-8.461],[122.904,-8.094]]],[[[159.875,-8.337],[159.917,-8.538],[159.134,-8.114],[158.586,-7.755],[158.211,-7.422],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.875,-8.337]]],[[[157.538,-7.348],[157.339,-7.405],[156.902,-7.177],[156.491,-6.766],[156.543,-6.599],[157.14,-7.022],[157.538,-7.348]]],[[[108.623,-6.778],[110.539,-6.877],[110.76,-6.465],[112.615,-6.946],[112.979,-7.594],[114.479,-7.777],[115.706,-8.371],[114.565,-8.752],[113.465,-8.349],[112.56,-8.376],[111.522,-8.302],[110.586,-8.123],[109.428,-7.741],[108.694,-7.642],[108.278,-7.767],[106.454,-7.355],[106.281,-6.925],[105.365,-6.851],[106.052,-5.896],[107.265,-5.955],[108.072,-6.346],[108.487,-6.422],[108.623,-6.778]]],[[[134.725,-6.214],[134.21,-6.895],[134.113,-6.142],[134.29,-5.783],[134.5,-5.445],[134.727,-5.738],[134.725,-6.214]]],[[[155.88,-6.82],[155.6,-6.92],[155.167,-6.536],[154.729,-5.901],[154.514,-5.139],[154.653,-5.042],[154.76,-5.34],[155.063,-5.567],[155.548,-6.201],[156.02,-6.54],[155.88,-6.82]]],[[[151.983,-5.478],[151.459,-5.56],[151.301,-5.841],[150.754,-6.084],[150.241,-6.318],[149.71,-6.317],[148.89,-6.026],[148.319,-5.747],[148.402,-5.438],[149.298,-5.584],[149.846,-5.506],[149.996,-5.026],[150.14,-5.001],[150.237,-5.532],[150.807,-5.456],[151.09,-5.114],[151.648,-4.757],[151.538,-4.168],[152.137,-4.149],[152.339,-4.313],[152.319,-4.868],[151.983,-5.478]]],[[[127.249,-3.459],[126.875,-3.791],[126.184,-3.607],[125.989,-3.177],[127.001,-3.129],[127.249,-3.459]]],[[[130.471,-3.094],[130.835,-3.858],[129.991,-3.446],[129.155,-3.363],[128.591,-3.429],[127.899,-3.393],[128.136,-2.844],[129.371,-2.802],[130.471,-3.094]]],[[[153.14,-4.5],[152.827,-4.766],[152.639,-4.176],[152.406,-3.79],[151.953,-3.462],[151.384,-3.035],[150.662,-2.741],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]]],[[[134.143,-1.152],[134.423,-2.769],[135.458,-3.368],[136.293,-2.307],[137.441,-1.704],[138.33,-1.703],[139.185,-2.051],[139.927,-2.409],[141,-2.6],[142.735,-3.289],[144.584,-3.861],[145.273,-4.374],[145.83,-4.876],[145.982,-5.466],[147.648,-6.084],[147.891,-6.614],[146.971,-6.722],[147.192,-7.388],[148.085,-8.044],[148.734,-9.105],[149.307,-9.071],[149.267,-9.514],[150.039,-9.684],[149.739,-9.873],[150.802,-10.294],[150.691,-10.583],[150.028,-10.652],[149.782,-10.393],[148.923,-10.281],[147.913,-10.13],[147.135,-9.492],[146.568,-8.943],[146.048,-8.067],[144.744,-7.63],[143.897,-7.915],[143.286,-8.245],[143.414,-8.983],[142.628,-9.327],[142.068,-9.16],[141.034,-9.118],[140.143,-8.297],[139.128,-8.096],[138.881,-8.381],[137.614,-8.412],[138.039,-7.598],[138.669,-7.32],[138.408,-6.233],[137.928,-5.393],[135.989,-4.547],[135.165,-4.463],[133.663,-3.539],[133.368,-4.025],[132.984,-4.113],[132.757,-3.746],[132.754,-3.312],[131.99,-2.821],[133.067,-2.46],[133.78,-2.48],[133.696,-2.215],[132.232,-2.213],[131.836,-1.617],[130.943,-1.433],[130.52,-.938],[131.868,-.695],[132.38,-.37],[133.986,-.78],[134.143,-1.152]]],[[[125.241,1.42],[124.437,.428],[123.686,.236],[122.723,.431],[121.057,.381],[120.183,.237],[120.041,-.52],[120.936,-1.409],[121.476,-.956],[123.341,-.616],[123.258,-1.076],[122.823,-.931],[122.389,-1.517],[121.508,-1.904],[122.455,-3.186],[122.272,-3.53],[123.171,-4.684],[123.162,-5.341],[122.629,-5.635],[122.236,-5.283],[122.72,-4.464],[121.738,-4.851],[121.489,-4.575],[121.619,-4.188],[120.898,-3.602],[120.972,-2.628],[120.305,-2.932],[120.39,-4.098],[120.431,-5.528],[119.797,-5.673],[119.367,-5.38],[119.654,-4.459],[119.499,-3.494],[119.078,-3.487],[118.768,-2.802],[119.181,-2.147],[119.323,-1.353],[119.826,.154],[120.036,.566],[120.886,1.309],[121.667,1.014],[122.928,.875],[124.078,.917],[125.066,1.643],[125.241,1.42]]],[[[128.688,1.132],[128.636,.258],[128.12,.356],[127.968,-.252],[128.38,-.78],[128.1,-.9],[127.696,-.267],[127.399,1.012],[127.601,1.811],[127.932,2.175],[128.004,1.629],[128.595,1.541],[128.688,1.132]]],[[[105.818,-5.852],[104.71,-5.873],[103.868,-5.037],[102.584,-4.22],[102.156,-3.614],[101.399,-2.8],[100.903,-2.05],[100.142,-.65],[99.264,.183],[98.97,1.043],[98.601,1.824],[97.7,2.453],[97.177,3.309],[96.424,3.869],[95.381,4.971],[95.293,5.48],[95.937,5.44],[97.485,5.246],[98.369,4.268],[99.143,3.59],[99.694,3.174],[100.641,2.099],[101.658,2.084],[102.498,1.399],[103.077,.561],[103.838,.105],[103.438,-.712],[104.011,-1.059],[104.37,-1.085],[104.539,-1.782],[104.888,-2.34],[105.622,-2.429],[106.109,-3.062],[105.857,-4.306],[105.818,-5.852]]],[[[117.876,1.828],[118.997,.902],[117.812,.784],[117.478,.102],[117.522,-.804],[116.56,-1.488],[116.534,-2.484],[116.148,-4.013],[116.001,-3.657],[114.865,-4.107],[114.469,-3.496],[113.756,-3.439],[113.257,-3.119],[112.068,-3.478],[111.703,-2.994],[111.048,-3.049],[110.224,-2.934],[110.071,-1.593],[109.572,-1.315],[109.092,-.46],[108.953,.415],[109.069,1.342],[109.663,2.006],[110.396,1.664],[111.169,1.851],[111.37,2.697],[111.797,2.886],[112.996,3.102],[113.713,3.894],[114.204,4.526],[114.6,4.9],[115.451,5.448],[116.221,6.143],[116.725,6.925],[117.13,6.928],[117.643,6.422],[117.689,5.987],[118.348,5.709],[119.182,5.408],[119.111,5.016],[118.44,4.967],[118.618,4.478],[117.882,4.138],[117.313,3.234],[118.048,2.288],[117.876,1.828]]],[[[126.377,8.415],[126.479,7.75],[126.537,7.189],[126.197,6.274],[125.831,7.294],[125.364,6.786],[125.683,6.05],[125.397,5.581],[124.22,6.161],[123.939,6.885],[124.244,7.361],[123.61,7.834],[123.296,7.419],[122.826,7.457],[122.085,6.899],[121.92,7.192],[122.312,8.035],[122.942,8.316],[123.488,8.693],[123.841,8.24],[124.601,8.514],[124.765,8.96],[125.471,8.987],[125.412,9.76],[126.223,9.286],[126.307,8.782],[126.377,8.415]]],[[[81.218,6.197],[80.348,5.968],[79.872,6.763],[79.695,8.201],[80.148,9.824],[80.839,9.268],[81.304,8.564],[81.788,7.523],[81.637,6.482],[81.218,6.197]]],[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]],[[[123.982,10.279],[123.623,9.95],[123.31,9.318],[122.996,9.022],[122.38,9.713],[122.586,9.981],[122.837,10.261],[122.947,10.882],[123.499,10.941],[123.338,10.267],[124.078,11.233],[123.982,10.279]]],[[[118.505,9.316],[117.174,8.367],[117.664,9.067],[118.387,9.684],[118.987,10.376],[119.511,11.37],[119.69,10.554],[119.029,10.004],[118.505,9.316]]],[[[121.884,11.892],[122.484,11.582],[123.12,11.584],[123.101,11.166],[122.638,10.741],[122.003,10.441],[121.967,10.906],[122.038,11.416],[121.884,11.892]]],[[[125.503,12.163],[125.783,11.046],[125.012,11.311],[125.033,10.976],[125.277,10.359],[124.802,10.135],[124.76,10.838],[124.459,10.89],[124.303,11.495],[124.891,11.416],[124.878,11.794],[124.267,12.558],[125.227,12.536],[125.503,12.163]]],[[[121.527,13.07],[121.262,12.206],[120.834,12.704],[120.323,13.466],[121.18,13.43],[121.527,13.07]]],[[[121.321,18.504],[121.938,18.219],[122.246,18.479],[122.337,18.225],[122.174,17.81],[122.516,17.094],[122.252,16.262],[121.663,15.931],[121.505,15.125],[121.729,14.328],[122.259,14.218],[122.701,14.337],[123.95,13.782],[123.855,13.238],[124.181,12.998],[124.077,12.537],[123.298,13.028],[122.929,13.553],[122.671,13.186],[122.035,13.784],[121.126,13.637],[120.629,13.858],[120.679,14.271],[120.992,14.525],[120.693,14.757],[120.564,14.396],[120.07,14.971],[119.921,15.406],[119.884,16.364],[120.286,16.035],[120.39,17.599],[120.716,18.505],[121.321,18.504]]],[[[-65.591,18.228],[-65.847,17.976],[-66.6,17.982],[-67.184,17.947],[-67.242,18.374],[-67.101,18.521],[-66.282,18.515],[-65.771,18.427],[-65.591,18.228]]],[[[-76.903,17.868],[-77.206,17.701],[-77.766,17.862],[-78.338,18.226],[-78.218,18.455],[-77.797,18.524],[-77.57,18.491],[-76.897,18.401],[-76.365,18.161],[-76.2,17.887],[-76.903,17.868]]],[[[-72.58,19.872],[-71.712,19.714],[-71.587,19.885],[-70.807,19.88],[-70.214,19.623],[-69.951,19.648],[-69.769,19.293],[-69.222,19.313],[-69.254,19.015],[-68.809,18.979],[-68.318,18.612],[-68.689,18.205],[-69.165,18.423],[-69.624,18.381],[-69.953,18.428],[-70.133,18.246],[-70.517,18.184],[-70.669,18.427],[-71,18.283],[-71.4,17.599],[-71.658,17.758],[-71.708,18.045],[-72.372,18.215],[-72.844,18.146],[-73.455,18.218],[-73.922,18.031],[-74.458,18.343],[-74.37,18.665],[-73.45,18.526],[-72.695,18.446],[-72.335,18.668],[-72.792,19.102],[-72.784,19.484],[-73.415,19.64],[-73.19,19.916],[-72.58,19.872]]],[[[110.339,18.678],[109.475,18.198],[108.655,18.508],[108.626,19.368],[109.119,19.821],[110.212,20.101],[110.787,20.078],[111.01,19.696],[110.571,19.256],[110.339,18.678]]],[[[-155.542,19.083],[-155.688,18.916],[-155.937,19.059],[-155.908,19.339],[-156.073,19.703],[-156.024,19.814],[-155.85,19.977],[-155.919,20.174],[-155.861,20.267],[-155.785,20.249],[-155.402,20.08],[-155.225,19.993],[-155.062,19.859],[-154.807,19.509],[-154.831,19.453],[-155.222,19.24],[-155.542,19.083]]],[[[-156.079,20.644],[-156.414,20.572],[-156.587,20.783],[-156.702,20.864],[-156.711,20.927],[-156.613,21.012],[-156.257,20.917],[-155.996,20.764],[-156.079,20.644]]],[[[-156.758,21.177],[-156.789,21.069],[-157.325,21.098],[-157.25,21.22],[-156.758,21.177]]],[[[-157.653,21.322],[-157.707,21.264],[-157.779,21.277],[-158.127,21.312],[-158.254,21.539],[-158.293,21.579],[-158.025,21.717],[-157.942,21.653],[-157.653,21.322]]],[[[-159.345,21.982],[-159.464,21.883],[-159.801,22.065],[-159.749,22.138],[-159.596,22.236],[-159.366,22.215],[-159.345,21.982]]],[[[-79.68,22.765],[-79.281,22.399],[-78.347,22.512],[-77.993,22.277],[-77.146,21.658],[-76.524,21.207],[-76.195,21.221],[-75.598,21.017],[-75.671,20.735],[-74.934,20.694],[-74.178,20.285],[-74.297,20.05],[-74.962,19.923],[-75.635,19.874],[-76.324,19.953],[-77.755,19.855],[-77.085,20.413],[-77.493,20.673],[-78.137,20.74],[-78.483,21.029],[-78.72,21.598],[-79.285,21.559],[-80.217,21.827],[-80.518,22.037],[-81.821,22.192],[-82.17,22.387],[-81.795,22.637],[-82.776,22.688],[-83.494,22.169],[-83.909,22.155],[-84.052,21.911],[-84.547,21.801],[-84.975,21.896],[-84.447,22.205],[-84.23,22.566],[-83.778,22.788],[-83.268,22.983],[-82.51,23.079],[-82.268,23.189],[-81.404,23.117],[-80.619,23.106],[-79.68,22.765]]],[[[-77.535,23.76],[-77.78,23.71],[-78.034,24.286],[-78.408,24.576],[-78.191,25.21],[-77.89,25.17],[-77.54,24.34],[-77.535,23.76]]],[[[121.176,22.791],[120.747,21.971],[120.22,22.815],[120.106,23.556],[120.695,24.538],[121.495,25.295],[121.951,24.998],[121.778,24.394],[121.176,22.791]]],[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]],[[[-77,26.59],[-77.173,25.879],[-77.356,26.007],[-77.34,26.53],[-77.788,26.925],[-77.79,27.04],[-77,26.59]]],[[[134.638,34.149],[134.766,33.806],[134.203,33.201],[133.793,33.522],[133.28,33.29],[133.015,32.705],[132.363,32.989],[132.371,33.464],[132.924,34.06],[133.493,33.945],[133.904,34.365],[134.638,34.149]]],[[[34.576,35.672],[33.901,35.246],[33.974,35.059],[34.005,34.978],[32.98,34.572],[32.49,34.702],[32.257,35.103],[32.732,35.14],[32.802,35.146],[32.947,35.387],[33.667,35.373],[34.576,35.672]]],[[[23.7,35.705],[24.247,35.368],[25.025,35.425],[25.769,35.354],[25.745,35.18],[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705]]],[[[15.52,38.231],[15.16,37.444],[15.31,37.134],[15.1,36.62],[14.335,36.997],[13.827,37.105],[12.431,37.613],[12.571,38.126],[13.741,38.035],[14.761,38.144],[15.52,38.231]]],[[[9.21,41.21],[9.81,40.5],[9.67,39.177],[9.215,39.24],[8.807,38.907],[8.428,39.172],[8.388,40.378],[8.16,40.95],[8.71,40.9],[9.21,41.21]]],[[[140.976,37.142],[140.6,36.344],[140.774,35.843],[140.253,35.138],[138.976,34.668],[137.218,34.606],[135.793,33.465],[135.121,33.849],[135.079,34.597],[133.34,34.376],[132.157,33.905],[130.986,33.886],[132,33.15],[131.333,31.45],[130.686,31.03],[130.202,31.418],[130.448,32.319],[129.815,32.61],[129.408,33.296],[130.354,33.604],[130.878,34.233],[131.884,34.75],[132.618,35.433],[134.608,35.732],[135.678,35.527],[136.724,37.305],[137.391,36.827],[138.858,37.827],[139.426,38.216],[140.055,39.439],[139.883,40.563],[140.306,41.195],[141.369,41.379],[141.914,39.992],[141.885,39.181],[140.959,38.174],[140.976,37.142]]],[[[9.56,42.152],[9.23,41.38],[8.776,41.584],[8.544,42.257],[8.746,42.628],[9.39,43.01],[9.56,42.152]]],[[[143.91,44.174],[144.613,43.961],[145.321,44.385],[145.543,43.262],[144.06,42.988],[143.184,41.995],[141.611,42.679],[141.067,41.585],[139.955,41.57],[139.818,42.564],[140.312,43.333],[141.381,43.389],[141.672,44.772],[141.968,45.551],[143.143,44.51],[143.91,44.174]]],[[[-63.664,46.55],[-62.939,46.416],[-62.012,46.443],[-62.504,46.033],[-62.874,45.968],[-64.143,46.393],[-64.393,46.727],[-64.015,47.036],[-63.664,46.55]]],[[[-61.806,49.105],[-62.293,49.087],[-63.589,49.401],[-64.519,49.873],[-64.173,49.957],[-62.858,49.706],[-61.836,49.289],[-61.806,49.105]]],[[[-123.51,48.51],[-124.013,48.371],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.059,49.995],[-128.445,50.539],[-128.358,50.771],[-127.309,50.553],[-126.695,50.401],[-125.755,50.295],[-125.415,49.95],[-124.921,49.475],[-123.923,49.062],[-123.51,48.51]]],[[[-56.134,50.687],[-56.796,49.812],[-56.143,50.15],[-55.471,49.936],[-55.822,49.587],[-54.935,49.313],[-54.474,49.557],[-53.477,49.249],[-53.786,48.517],[-53.086,48.688],[-52.959,48.157],[-52.648,47.536],[-53.069,46.655],[-53.521,46.618],[-54.179,46.807],[-53.962,47.625],[-54.24,47.752],[-55.401,46.885],[-55.997,46.92],[-55.291,47.39],[-56.251,47.633],[-57.325,47.573],[-59.266,47.603],[-59.419,47.899],[-58.797,48.252],[-59.232,48.523],[-58.392,49.126],[-57.359,50.718],[-56.739,51.287],[-55.871,51.632],[-55.407,51.588],[-55.6,51.317],[-56.134,50.687]]],[[[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-131.75,54.12],[-132.049,52.985],[-131.179,52.18],[-131.578,52.182],[-132.18,52.64],[-132.55,53.1],[-133.055,53.411],[-133.24,53.851],[-133.18,54.17],[-132.71,54.04]]],[[[143.648,50.748],[144.654,48.976],[143.174,49.307],[142.559,47.862],[143.533,46.837],[143.505,46.138],[142.748,46.741],[142.092,45.967],[141.907,46.806],[142.018,47.78],[141.904,48.859],[142.136,49.615],[142.18,50.952],[141.594,51.935],[141.683,53.302],[142.607,53.762],[142.21,54.225],[142.655,54.366],[142.915,53.705],[143.261,52.741],[143.235,51.757],[143.648,50.748]]],[[[-6.789,52.26],[-8.562,51.669],[-9.977,51.82],[-9.166,52.865],[-9.689,53.881],[-8.328,54.665],[-7.572,55.132],[-6.734,55.173],[-5.662,54.555],[-6.198,53.868],[-6.033,53.153],[-6.789,52.26]]],[[[12.69,55.61],[12.09,54.8],[11.044,55.365],[10.904,55.78],[12.371,56.111],[12.69,55.61]]],[[[-153.006,57.116],[-154.005,56.735],[-154.516,56.993],[-154.671,57.461],[-153.763,57.817],[-153.229,57.969],[-152.565,57.901],[-152.141,57.591],[-153.006,57.116]]],[[[-3.005,58.635],[-4.074,57.553],[-3.055,57.69],[-1.959,57.685],[-2.22,56.87],[-3.119,55.974],[-2.085,55.91],[-1.115,54.625],[-.43,54.464],[.185,53.325],[.47,52.93],[1.682,52.74],[1.56,52.1],[1.051,51.807],[1.45,51.289],[.55,50.766],[-.788,50.775],[-2.49,50.5],[-2.956,50.697],[-3.617,50.228],[-4.543,50.342],[-5.245,49.96],[-5.777,50.16],[-4.31,51.21],[-3.415,51.426],[-4.984,51.593],[-5.267,51.991],[-4.222,52.301],[-4.77,52.84],[-4.58,53.495],[-3.092,53.404],[-2.945,53.985],[-3.63,54.615],[-4.844,54.791],[-5.083,55.062],[-4.719,55.508],[-5.048,55.784],[-5.586,55.311],[-5.645,56.275],[-6.15,56.785],[-5.787,57.819],[-5.01,58.63],[-4.211,58.551],[-3.005,58.635]]],[[[-165.579,59.91],[-166.193,59.754],[-166.848,59.941],[-167.455,60.213],[-166.468,60.384],[-165.674,60.294],[-165.579,59.91]]],[[[-79.266,62.159],[-79.658,61.633],[-80.1,61.718],[-80.362,62.016],[-80.315,62.086],[-79.929,62.386],[-79.52,62.364],[-79.266,62.159]]],[[[-81.898,62.711],[-83.069,62.159],[-83.775,62.182],[-83.994,62.453],[-83.25,62.914],[-81.877,62.905],[-81.898,62.711]]],[[[-171.732,63.783],[-171.114,63.592],[-170.491,63.695],[-169.683,63.431],[-168.689,63.298],[-168.772,63.189],[-169.529,62.977],[-170.291,63.194],[-170.671,63.376],[-171.553,63.318],[-171.791,63.406],[-171.732,63.783]]],[[[-85.161,65.657],[-84.976,65.218],[-84.464,65.372],[-83.883,65.11],[-82.788,64.767],[-81.642,64.455],[-81.553,63.98],[-80.817,64.057],[-80.103,63.726],[-80.991,63.411],[-82.547,63.652],[-83.109,64.102],[-84.1,63.57],[-85.523,63.052],[-85.867,63.637],[-87.222,63.541],[-86.353,64.036],[-86.225,64.823],[-85.884,65.739],[-85.161,65.657]]],[[[-14.509,66.456],[-14.74,65.809],[-13.61,65.127],[-14.91,64.364],[-17.794,63.679],[-18.656,63.496],[-19.973,63.644],[-22.763,63.96],[-21.778,64.402],[-23.955,64.891],[-22.184,65.085],[-22.227,65.379],[-24.326,65.611],[-23.651,66.263],[-22.135,66.41],[-20.576,65.732],[-19.057,66.277],[-17.799,65.994],[-16.168,66.527],[-14.509,66.456]]],[[[-75.866,67.149],[-76.987,67.099],[-77.236,67.588],[-76.812,68.149],[-75.895,68.287],[-75.115,68.01],[-75.103,67.582],[-75.216,67.444],[-75.866,67.149]]],[[[-175.014,66.584],[-174.34,66.336],[-174.572,67.062],[-171.857,66.913],[-169.9,65.977],[-170.891,65.541],[-172.53,65.438],[-172.555,64.461],[-172.955,64.253],[-173.892,64.283],[-174.654,64.631],[-175.984,64.923],[-176.207,65.357],[-177.223,65.52],[-178.36,65.391],[-178.903,65.74],[-178.686,66.112],[-179.884,65.875],[-179.433,65.404],[-180,64.98],[-180,68.964],[-177.55,68.2],[-174.928,67.206],[-175.014,66.584]]],[[[-95.648,69.108],[-96.27,68.757],[-97.617,69.06],[-98.432,68.951],[-99.797,69.4],[-98.917,69.71],[-98.218,70.144],[-97.157,69.86],[-96.557,69.68],[-96.257,69.49],[-95.648,69.108]]],[[[180,70.832],[178.903,70.781],[178.725,71.099],[180,71.516],[180,70.832]]],[[[-178.694,70.893],[-180,70.832],[-180,71.516],[-179.872,71.558],[-179.024,71.556],[-177.578,71.269],[-177.664,71.133],[-178.694,70.893]]],[[[-90.547,69.498],[-90.552,68.475],[-89.215,69.259],[-88.02,68.615],[-88.318,67.873],[-87.35,67.199],[-86.306,67.922],[-85.577,68.784],[-85.522,69.882],[-84.101,69.805],[-82.622,69.658],[-81.28,69.162],[-81.22,68.666],[-81.964,68.133],[-81.259,67.597],[-81.386,67.111],[-83.344,66.412],[-84.735,66.257],[-85.769,66.558],[-86.068,66.056],[-87.031,65.213],[-87.323,64.776],[-88.483,64.099],[-89.914,64.033],[-90.704,63.61],[-90.77,62.96],[-91.933,62.835],[-93.157,62.025],[-94.242,60.899],[-94.629,60.11],[-94.685,58.949],[-93.215,58.782],[-92.765,57.846],[-92.297,57.087],[-90.898,57.285],[-89.039,56.852],[-88.04,56.472],[-87.324,55.999],[-86.071,55.724],[-85.012,55.303],[-83.36,55.245],[-82.273,55.148],[-82.436,54.282],[-82.125,53.277],[-81.401,52.158],[-79.913,51.208],[-79.143,51.534],[-78.602,52.562],[-79.124,54.141],[-79.83,54.668],[-78.229,55.136],[-77.096,55.838],[-76.541,56.534],[-76.623,57.203],[-77.302,58.052],[-78.517,58.805],[-77.337,59.853],[-77.773,60.758],[-78.107,62.32],[-77.411,62.55],[-75.696,62.279],[-74.668,62.181],[-73.84,62.444],[-72.909,62.105],[-71.677,61.525],[-71.374,61.137],[-69.59,61.062],[-69.62,60.221],[-69.288,58.957],[-68.375,58.801],[-67.65,58.212],[-66.202,58.767],[-65.245,59.871],[-64.583,60.336],[-63.805,59.443],[-62.502,58.167],[-61.396,56.968],[-61.799,56.339],[-60.469,55.776],[-59.57,55.204],[-57.975,54.945],[-57.333,54.627],[-56.937,53.78],[-56.158,53.648],[-55.756,53.271],[-55.683,52.147],[-56.409,51.771],[-57.127,51.42],[-58.775,51.064],[-60.033,50.243],[-61.724,50.081],[-63.862,50.291],[-65.363,50.298],[-66.399,50.229],[-67.236,49.511],[-68.511,49.068],[-69.954,47.745],[-71.104,46.822],[-70.255,46.986],[-68.65,48.3],[-66.552,49.133],[-65.056,49.233],[-64.171,48.742],[-65.115,48.071],[-64.799,46.993],[-64.472,46.239],[-63.173,45.739],[-61.521,45.884],[-60.518,47.008],[-60.449,46.283],[-59.803,45.92],[-61.04,45.265],[-63.255,44.67],[-64.247,44.266],[-65.364,43.545],[-66.123,43.619],[-66.162,44.465],[-64.425,45.292],[-66.026,45.259],[-67.137,45.138],[-66.965,44.81],[-68.032,44.325],[-69.06,43.98],[-70.116,43.684],[-70.69,43.03],[-70.815,42.865],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.923],[-69.965,41.637],[-70.64,41.475],[-71.12,41.495],[-71.86,41.32],[-72.295,41.27],[-72.876,41.221],[-73.71,40.931],[-72.241,41.12],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.952,40.751],[-74.257,40.474],[-73.962,40.428],[-74.178,39.709],[-74.906,38.94],[-74.98,39.196],[-75.2,39.248],[-75.528,39.498],[-75.32,38.96],[-75.083,38.781],[-75.057,38.404],[-75.377,38.016],[-75.94,37.217],[-76.031,37.257],[-75.722,37.937],[-76.233,38.319],[-76.35,39.15],[-76.543,38.718],[-76.329,38.083],[-76.96,38.233],[-76.302,37.918],[-76.259,36.966],[-75.972,36.897],[-75.868,36.551],[-75.727,35.551],[-76.363,34.808],[-77.398,34.512],[-78.055,33.925],[-78.554,33.861],[-79.061,33.494],[-79.203,33.159],[-80.301,32.509],[-80.865,32.033],[-81.336,31.44],[-81.49,30.73],[-81.314,30.036],[-80.98,29.18],[-80.536,28.472],[-80.53,28.04],[-80.057,26.88],[-80.088,26.206],[-80.131,25.817],[-80.381,25.206],[-80.68,25.08],[-81.172,25.201],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.705,27.495],[-82.855,27.886],[-82.65,28.55],[-82.93,29.1],[-83.71,29.937],[-84.1,30.09],[-85.109,29.636],[-85.288,29.686],[-85.773,30.153],[-86.4,30.4],[-87.53,30.274],[-88.418,30.385],[-89.18,30.316],[-89.605,30.176],[-89.414,29.894],[-89.43,29.489],[-89.218,29.291],[-89.408,29.16],[-89.779,29.307],[-90.155,29.117],[-90.88,29.149],[-91.627,29.677],[-92.499,29.552],[-93.226,29.784],[-93.848,29.714],[-94.69,29.48],[-95.6,28.739],[-96.594,28.307],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.139,25.868],[-97.142,25.866],[-97.528,24.992],[-97.703,24.272],[-97.776,22.933],[-97.872,22.444],[-97.699,21.899],[-97.389,21.411],[-97.189,20.635],[-96.526,19.891],[-96.292,19.32],[-95.901,18.828],[-94.839,18.563],[-94.426,18.144],[-93.549,18.424],[-92.786,18.525],[-92.037,18.705],[-91.408,18.876],[-90.772,19.284],[-90.534,19.867],[-90.451,20.708],[-90.279,21],[-89.601,21.262],[-88.544,21.494],[-87.658,21.459],[-87.052,21.544],[-86.812,21.331],[-86.846,20.85],[-87.383,20.255],[-87.621,19.646],[-87.437,19.472],[-87.586,19.04],[-87.837,18.26],[-88.091,18.517],[-88.3,18.5],[-88.296,18.353],[-88.107,18.349],[-88.123,18.077],[-88.285,17.644],[-88.198,17.49],[-88.303,17.132],[-88.24,17.036],[-88.355,16.531],[-88.552,16.266],[-88.732,16.234],[-88.931,15.887],[-88.605,15.706],[-88.518,15.856],[-88.225,15.728],[-88.121,15.689],[-87.902,15.865],[-87.616,15.879],[-87.523,15.797],[-87.368,15.847],[-86.903,15.757],[-86.441,15.783],[-86.119,15.893],[-86.002,16.005],[-85.683,15.954],[-85.444,15.886],[-85.182,15.909],[-84.984,15.996],[-84.527,15.857],[-84.368,15.835],[-84.063,15.648],[-83.774,15.424],[-83.41,15.271],[-83.147,14.996],[-83.233,14.9],[-83.284,14.677],[-83.182,14.311],[-83.412,13.97],[-83.52,13.568],[-83.552,13.127],[-83.498,12.869],[-83.473,12.419],[-83.626,12.321],[-83.72,11.893],[-83.651,11.629],[-83.855,11.373],[-83.809,11.103],[-83.656,10.939],[-83.402,10.396],[-83.016,9.993],[-82.546,9.566],[-82.187,9.208],[-82.208,8.996],[-81.809,8.951],[-81.714,9.032],[-81.439,8.786],[-80.947,8.859],[-80.522,9.111],[-79.915,9.313],[-79.573,9.612],[-79.021,9.553],[-79.058,9.455],[-78.501,9.42],[-78.056,9.248],[-77.729,8.947],[-77.353,8.67],[-76.837,8.639],[-76.086,9.337],[-75.675,9.443],[-75.665,9.774],[-75.48,10.619],[-74.907,11.083],[-74.277,11.102],[-74.197,11.31],[-73.415,11.227],[-72.628,11.732],[-72.238,11.956],[-71.754,12.437],[-71.4,12.376],[-71.137,12.113],[-71.332,11.776],[-71.36,11.54],[-71.947,11.423],[-71.621,10.969],[-71.633,10.446],[-72.074,9.866],[-71.696,9.072],[-71.265,9.137],[-71.04,9.86],[-71.35,10.212],[-71.401,10.969],[-70.155,11.375],[-70.294,11.847],[-69.943,12.162],[-69.584,11.46],[-68.883,11.443],[-68.233,10.886],[-68.194,10.555],[-67.296,10.546],[-66.228,10.649],[-65.655,10.201],[-64.89,10.077],[-64.329,10.39],[-64.318,10.641],[-63.079,10.702],[-61.881,10.716],[-62.73,10.42],[-62.388,9.948],[-61.589,9.873],[-60.831,9.381],[-60.671,8.58],[-60.15,8.603],[-59.758,8.367],[-59.102,7.999],[-58.483,7.348],[-58.455,6.833],[-58.078,6.809],[-57.542,6.321],[-57.147,5.973],[-55.949,5.773],[-55.842,5.953],[-55.033,6.025],[-53.958,5.757],[-53.618,5.646],[-52.882,5.41],[-51.823,4.566],[-51.658,4.156],[-51.317,4.203],[-51.07,3.651],[-50.509,1.901],[-49.974,1.737],[-49.947,1.046],[-50.699,.223],[-50.388,-.078],[-48.62,-.235],[-48.584,-1.238],[-47.825,-.582],[-46.567,-.941],[-44.906,-1.552],[-44.418,-2.138],[-44.582,-2.691],[-43.419,-2.383],[-41.473,-2.912],[-39.979,-2.873],[-38.5,-3.701],[-37.223,-4.821],[-36.453,-5.109],[-35.598,-5.149],[-35.235,-5.465],[-34.896,-6.738],[-34.73,-7.343],[-35.128,-8.996],[-35.637,-9.649],[-37.047,-11.041],[-37.684,-12.171],[-38.424,-13.038],[-38.674,-13.058],[-38.953,-13.793],[-38.882,-15.667],[-39.161,-17.208],[-39.267,-17.868],[-39.583,-18.262],[-39.761,-19.599],[-40.775,-20.904],[-40.945,-21.937],[-41.754,-22.371],[-41.988,-22.97],[-43.075,-22.968],[-44.648,-23.352],[-45.352,-23.797],[-46.472,-24.089],[-47.649,-24.885],[-48.495,-25.877],[-48.641,-26.624],[-48.475,-27.176],[-48.661,-28.186],[-48.888,-28.674],[-49.587,-29.224],[-50.697,-30.984],[-51.576,-31.778],[-52.256,-32.245],[-52.712,-33.197],[-53.374,-33.768],[-53.806,-34.397],[-54.936,-34.953],[-55.674,-34.753],[-56.215,-34.86],[-57.14,-34.43],[-57.818,-34.463],[-58.427,-33.909],[-58.495,-34.432],[-57.226,-35.288],[-57.362,-35.977],[-56.737,-36.413],[-56.788,-36.901],[-57.749,-38.184],[-59.232,-38.72],[-61.237,-38.928],[-62.336,-38.828],[-62.126,-39.424],[-62.331,-40.173],[-62.146,-40.677],[-62.746,-41.029],[-63.771,-41.167],[-64.732,-40.803],[-65.118,-41.064],[-64.979,-42.058],[-64.303,-42.359],[-63.756,-42.044],[-63.458,-42.563],[-64.379,-42.873],[-65.182,-43.495],[-65.329,-44.501],[-65.565,-45.037],[-66.51,-45.04],[-67.294,-45.552],[-67.581,-46.302],[-66.597,-47.034],[-65.641,-47.236],[-65.985,-48.133],[-67.166,-48.697],[-67.816,-49.87],[-68.729,-50.264],[-69.138,-50.732],[-68.815,-51.771],[-68.15,-52.35],[-68.571,-52.299],[-69.461,-52.292],[-69.943,-52.538],[-70.845,-52.899],[-71.006,-53.833],[-71.43,-53.856],[-72.558,-53.531],[-73.703,-52.835],[-74.947,-52.263],[-75.26,-51.629],[-74.977,-51.043],[-75.48,-50.378],[-75.608,-48.674],[-75.183,-47.712],[-74.127,-46.939],[-75.644,-46.648],[-74.692,-45.764],[-74.352,-44.103],[-73.24,-44.455],[-72.718,-42.383],[-73.389,-42.117],[-73.701,-43.366],[-74.332,-43.225],[-74.018,-41.795],[-73.677,-39.942],[-73.218,-39.259],[-73.505,-38.283],[-73.588,-37.156],[-73.167,-37.124],[-72.553,-35.509],[-71.862,-33.909],[-71.438,-32.419],[-71.669,-30.921],[-71.37,-30.096],[-71.49,-28.861],[-70.905,-27.64],[-70.725,-25.706],[-70.404,-23.629],[-70.091,-21.393],[-70.164,-19.756],[-70.372,-18.348],[-71.375,-17.774],[-71.462,-17.363],[-73.445,-16.359],[-75.238,-15.266],[-76.009,-14.649],[-76.423,-13.823],[-76.259,-13.535],[-77.106,-12.223],[-78.092,-10.378],[-79.037,-8.387],[-79.446,-7.931],[-79.76,-7.194],[-80.537,-6.542],[-81.25,-6.137],[-80.926,-5.69],[-81.411,-4.737],[-81.1,-4.036],[-80.302,-3.405],[-79.77,-2.657],[-79.987,-2.221],[-80.369,-2.685],[-80.968,-2.247],[-80.765,-1.965],[-80.934,-1.057],[-80.583,-.907],[-80.399,-.284],[-80.021,.36],[-80.091,.768],[-79.543,.983],[-78.855,1.381],[-78.991,1.691],[-78.618,1.766],[-78.662,2.267],[-78.428,2.63],[-77.932,2.697],[-77.51,3.325],[-77.128,3.85],[-77.496,4.088],[-77.308,4.668],[-77.533,5.583],[-77.319,5.845],[-77.477,6.691],[-77.882,7.224],[-78.215,7.512],[-78.429,8.052],[-78.182,8.319],[-78.435,8.388],[-78.622,8.718],[-79.12,8.996],[-79.558,8.932],[-79.76,8.584],[-80.164,8.333],[-80.383,8.299],[-80.481,8.09],[-80.004,7.547],[-80.277,7.42],[-80.421,7.271],[-80.886,7.221],[-81.06,7.818],[-81.19,7.648],[-81.519,7.707],[-81.721,8.109],[-82.131,8.175],[-82.391,8.292],[-82.82,8.291],[-82.851,8.074],[-82.966,8.225],[-83.508,8.447],[-83.711,8.657],[-83.596,8.831],[-83.633,9.052],[-83.91,9.291],[-84.303,9.487],[-84.648,9.615],[-84.713,9.908],[-84.976,10.087],[-84.911,9.796],[-85.111,9.557],[-85.339,9.834],[-85.661,9.933],[-85.797,10.135],[-85.792,10.439],[-85.659,10.754],[-85.942,10.895],[-85.713,11.089],[-86.058,11.404],[-86.526,11.807],[-86.746,12.144],[-87.167,12.458],[-87.669,12.91],[-87.557,13.065],[-87.392,12.914],[-87.317,12.985],[-87.489,13.297],[-87.793,13.385],[-87.904,13.149],[-88.483,13.164],[-88.843,13.26],[-89.257,13.459],[-89.812,13.521],[-90.096,13.735],[-90.609,13.91],[-91.232,13.928],[-91.69,14.126],[-92.228,14.539],[-93.359,15.615],[-93.875,15.94],[-94.692,16.201],[-95.25,16.128],[-96.053,15.752],[-96.557,15.654],[-97.264,15.917],[-98.013,16.107],[-98.948,16.566],[-99.697,16.706],[-100.83,17.171],[-101.666,17.649],[-101.919,17.916],[-102.478,17.976],[-103.501,18.292],[-103.917,18.749],[-104.992,19.316],[-105.493,19.947],[-105.731,20.434],[-105.398,20.532],[-105.501,20.817],[-105.271,21.076],[-105.266,21.422],[-105.603,21.871],[-105.693,22.269],[-106.029,22.774],[-106.91,23.768],[-107.915,24.549],[-108.402,25.172],[-109.26,25.581],[-109.444,25.825],[-109.292,26.443],[-109.801,26.676],[-110.392,27.162],[-110.641,27.86],[-111.179,27.941],[-111.76,28.468],[-112.228,28.955],[-112.272,29.267],[-112.81,30.021],[-113.164,30.787],[-113.149,31.171],[-113.872,31.568],[-114.206,31.524],[-114.776,31.8],[-114.937,31.393],[-114.771,30.914],[-114.674,30.163],[-114.331,29.75],[-113.589,29.062],[-113.424,28.826],[-113.272,28.755],[-113.14,28.411],[-112.962,28.425],[-112.762,27.78],[-112.458,27.526],[-112.245,27.172],[-111.617,26.663],[-111.285,25.733],[-110.988,25.295],[-110.71,24.826],[-110.655,24.299],[-110.173,24.266],[-109.772,23.811],[-109.409,23.365],[-109.433,23.186],[-109.854,22.818],[-110.031,22.823],[-110.295,23.431],[-110.95,24.001],[-111.671,24.484],[-112.182,24.739],[-112.149,25.47],[-112.301,26.012],[-112.777,26.322],[-113.465,26.768],[-113.597,26.64],[-113.849,26.9],[-114.466,27.142],[-115.055,27.723],[-114.982,27.798],[-114.57,27.742],[-114.199,28.115],[-114.162,28.566],[-114.932,29.279],[-115.519,29.556],[-115.887,30.181],[-116.258,30.836],[-116.721,31.636],[-117.128,32.535],[-117.296,33.046],[-117.944,33.621],[-118.411,33.741],[-118.52,34.028],[-119.081,34.078],[-119.439,34.349],[-120.368,34.447],[-120.623,34.609],[-120.744,35.157],[-121.715,36.162],[-122.547,37.552],[-122.512,37.784],[-122.953,38.114],[-123.727,38.952],[-123.865,39.767],[-124.398,40.313],[-124.179,41.142],[-124.214,42],[-124.533,42.766],[-124.142,43.708],[-123.899,45.523],[-124.08,46.865],[-124.396,47.72],[-124.687,48.185],[-124.566,48.38],[-123.12,48.04],[-122.587,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-122.974,49.003],[-124.91,49.985],[-125.625,50.417],[-127.436,50.831],[-127.993,51.716],[-127.85,52.33],[-129.13,52.755],[-129.305,53.562],[-130.515,54.288],[-130.536,54.803],[-131.086,55.179],[-131.967,55.498],[-132.25,56.37],[-133.539,57.179],[-134.078,58.123],[-135.038,58.188],[-136.628,58.212],[-137.8,58.5],[-139.868,59.538],[-140.825,59.727],[-142.574,60.084],[-143.959,59.999],[-145.925,60.459],[-147.114,60.885],[-148.224,60.673],[-148.018,59.978],[-148.571,59.914],[-149.728,59.706],[-150.608,59.368],[-151.716,59.156],[-151.859,59.745],[-151.41,60.726],[-150.347,61.034],[-150.621,61.284],[-151.896,60.727],[-152.578,60.062],[-154.019,59.35],[-153.287,58.865],[-154.232,58.146],[-155.307,57.728],[-156.308,57.423],[-156.556,56.98],[-158.117,56.464],[-158.433,55.994],[-159.603,55.567],[-160.29,55.644],[-161.223,55.365],[-162.238,55.024],[-163.069,54.69],[-164.786,54.404],[-164.942,54.572],[-163.848,55.039],[-162.87,55.348],[-161.804,55.895],[-160.564,56.008],[-160.07,56.418],[-158.684,57.017],[-158.461,57.217],[-157.723,57.57],[-157.55,58.328],[-157.042,58.919],[-158.195,58.616],[-158.517,58.788],[-159.059,58.424],[-159.712,58.932],[-159.981,58.573],[-160.355,59.071],[-161.355,58.671],[-161.969,58.672],[-162.055,59.267],[-161.874,59.634],[-162.518,59.99],[-163.818,59.798],[-164.662,60.268],[-165.346,60.508],[-165.351,61.074],[-166.121,61.5],[-165.734,62.075],[-164.919,62.633],[-164.562,63.146],[-163.753,63.219],[-163.067,63.06],[-162.26,63.542],[-161.534,63.456],[-160.773,63.766],[-160.958,64.223],[-161.518,64.403],[-160.778,64.789],[-161.392,64.777],[-162.453,64.56],[-162.758,64.339],[-163.546,64.559],[-164.961,64.447],[-166.425,64.687],[-166.845,65.089],[-168.11,65.67],[-166.705,66.088],[-164.475,66.577],[-163.653,66.577],[-163.789,66.077],[-161.678,66.116],[-162.49,66.735],[-163.72,67.117],[-164.431,67.616],[-165.39,68.043],[-166.764,68.359],[-166.205,68.883],[-164.431,68.916],[-163.169,69.371],[-162.93,69.858],[-161.909,70.333],[-160.935,70.448],[-159.039,70.892],[-158.12,70.825],[-156.581,71.358],[-155.068,71.148],[-154.344,70.696],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.613,70.214],[-145.69,70.12],[-144.92,69.99],[-143.589,70.153],[-142.073,69.852],[-140.986,69.712],[-139.12,69.471],[-137.546,68.99],[-136.504,68.898],[-135.626,69.315],[-134.415,69.628],[-132.929,69.505],[-131.431,69.945],[-129.795,70.194],[-129.108,69.779],[-128.362,70.013],[-128.138,70.484],[-127.447,70.377],[-125.756,69.481],[-124.425,70.159],[-124.29,69.4],[-123.061,69.564],[-122.683,69.856],[-121.472,69.798],[-119.943,69.378],[-117.603,69.011],[-116.226,68.841],[-115.247,68.906],[-113.898,68.399],[-115.305,67.903],[-113.497,67.688],[-110.798,67.806],[-109.946,67.981],[-108.88,67.382],[-107.792,67.888],[-108.813,68.312],[-108.167,68.654],[-106.95,68.7],[-106.15,68.8],[-105.343,68.561],[-104.338,68.018],[-103.221,68.098],[-101.454,67.647],[-99.902,67.806],[-98.443,67.782],[-98.559,68.404],[-97.669,68.579],[-96.12,68.24],[-96.126,67.294],[-95.489,68.091],[-94.685,68.064],[-94.233,69.069],[-95.304,69.686],[-96.471,70.09],[-96.391,71.195],[-95.209,71.92],[-93.89,71.76],[-92.878,71.319],[-91.52,70.191],[-92.407,69.7],[-90.547,69.498]]],[[[-114.167,73.121],[-114.666,72.653],[-112.441,72.955],[-111.05,72.45],[-109.92,72.961],[-109.007,72.633],[-108.188,71.651],[-107.686,72.065],[-108.396,73.09],[-107.516,73.236],[-106.523,73.076],[-105.402,72.673],[-104.775,71.698],[-104.465,70.993],[-102.785,70.498],[-100.981,70.024],[-101.089,69.584],[-102.731,69.504],[-102.093,69.12],[-102.43,68.753],[-104.24,68.91],[-105.96,69.18],[-107.123,69.119],[-109,68.78],[-111.967,68.604],[-113.313,68.536],[-113.855,69.007],[-115.22,69.28],[-116.108,69.168],[-117.34,69.96],[-116.675,70.067],[-115.131,70.237],[-113.721,70.192],[-112.416,70.366],[-114.35,70.6],[-116.487,70.52],[-117.905,70.541],[-118.432,70.909],[-116.113,71.309],[-117.656,71.295],[-119.402,71.559],[-118.563,72.308],[-117.866,72.706],[-115.189,73.315],[-114.167,73.121]]],[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]],[[[-76.34,73.103],[-76.251,72.826],[-77.314,72.856],[-78.392,72.877],[-79.486,72.742],[-79.776,72.803],[-80.876,73.333],[-80.834,73.693],[-80.353,73.76],[-78.064,73.652],[-76.34,73.103]]],[[[-86.562,73.157],[-85.774,72.534],[-84.85,73.34],[-82.316,73.751],[-80.6,72.717],[-80.749,72.062],[-78.771,72.352],[-77.825,72.75],[-75.606,72.244],[-74.229,71.767],[-74.099,71.331],[-72.242,71.557],[-71.2,70.92],[-68.786,70.525],[-67.915,70.122],[-66.969,69.186],[-68.805,68.72],[-66.45,68.067],[-64.862,67.848],[-63.425,66.928],[-61.852,66.862],[-62.163,66.16],[-63.918,64.999],[-65.149,65.426],[-66.721,66.388],[-68.015,66.263],[-68.141,65.69],[-67.09,65.108],[-65.732,64.648],[-65.32,64.383],[-64.669,63.393],[-65.014,62.674],[-66.275,62.945],[-68.783,63.746],[-67.37,62.884],[-66.328,62.28],[-66.166,61.931],[-68.877,62.33],[-71.023,62.911],[-72.235,63.398],[-71.886,63.68],[-73.378,64.194],[-74.834,64.679],[-74.819,64.389],[-77.71,64.23],[-78.556,64.573],[-77.897,65.309],[-76.018,65.327],[-73.96,65.455],[-74.294,65.812],[-73.945,66.311],[-72.651,67.285],[-72.926,67.727],[-73.312,68.069],[-74.843,68.555],[-76.869,68.895],[-76.229,69.148],[-77.287,69.77],[-78.169,69.826],[-78.957,70.167],[-79.492,69.872],[-81.305,69.743],[-84.945,69.967],[-87.06,70.26],[-88.682,70.411],[-89.513,70.762],[-88.468,71.218],[-89.888,71.223],[-90.205,72.235],[-89.437,73.129],[-88.408,73.538],[-85.826,73.804],[-86.562,73.157]]],[[[-100.356,73.844],[-99.164,73.633],[-97.38,73.76],[-97.12,73.47],[-98.054,72.991],[-96.54,72.56],[-96.72,71.66],[-98.36,71.273],[-99.323,71.356],[-100.015,71.738],[-102.5,72.51],[-102.48,72.83],[-100.438,72.706],[-101.54,73.36],[-100.356,73.844]]],[[[143.604,73.212],[142.088,73.205],[140.038,73.317],[139.863,73.37],[140.812,73.765],[142.062,73.858],[143.483,73.475],[143.604,73.212]]],[[[-93.196,72.772],[-94.269,72.025],[-95.41,72.062],[-96.034,72.94],[-96.018,73.437],[-95.496,73.862],[-94.504,74.135],[-92.42,74.1],[-90.51,73.857],[-92.004,72.966],[-93.196,72.772]]],[[[-120.46,71.4],[-123.092,70.902],[-123.62,71.34],[-125.929,71.869],[-125.593,72.195],[-124.807,73.023],[-123.94,73.68],[-124.918,74.293],[-121.538,74.449],[-120.11,74.241],[-117.556,74.186],[-116.584,73.896],[-115.511,73.475],[-116.768,73.223],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]],[[[150.732,75.084],[149.576,74.689],[147.977,74.778],[146.119,75.173],[146.358,75.497],[148.222,75.346],[150.732,75.084]]],[[[-93.613,74.98],[-94.157,74.592],[-95.609,74.667],[-96.821,74.928],[-96.289,75.378],[-94.851,75.647],[-93.978,75.296],[-93.613,74.98]]],[[[145.086,75.563],[144.3,74.82],[140.614,74.848],[138.955,74.611],[136.974,75.262],[137.512,75.949],[138.831,76.137],[141.472,76.093],[145.086,75.563]]],[[[-98.5,76.72],[-97.736,76.257],[-97.704,75.743],[-98.16,75],[-99.809,74.897],[-100.884,75.057],[-100.863,75.641],[-102.502,75.564],[-102.566,76.337],[-101.49,76.305],[-99.983,76.646],[-98.577,76.589],[-98.5,76.72]]],[[[-108.211,76.202],[-107.819,75.846],[-106.929,76.013],[-105.881,75.969],[-105.705,75.48],[-106.313,75.005],[-109.7,74.85],[-112.223,74.417],[-113.744,74.394],[-113.871,74.72],[-111.794,75.162],[-116.312,75.043],[-117.71,75.222],[-116.346,76.199],[-115.405,76.479],[-112.591,76.141],[-110.814,75.549],[-109.067,75.473],[-110.497,76.43],[-109.581,76.794],[-108.549,76.678],[-108.211,76.202]]],[[[57.536,70.72],[56.945,70.633],[53.677,70.763],[53.412,71.207],[51.602,71.475],[51.456,72.015],[52.478,72.229],[52.444,72.775],[54.428,73.628],[53.508,73.75],[55.902,74.627],[55.632,75.081],[57.869,75.609],[61.17,76.252],[64.498,76.439],[66.211,76.81],[68.157,76.94],[68.852,76.545],[68.181,76.234],[64.637,75.738],[61.584,75.261],[58.477,74.309],[56.987,73.333],[55.419,72.371],[55.623,71.541],[57.536,70.72]]],[[[-94.684,77.098],[-93.574,76.776],[-91.605,76.779],[-90.742,76.45],[-90.97,76.074],[-89.822,75.848],[-89.187,75.61],[-87.838,75.566],[-86.379,75.482],[-84.79,75.699],[-82.753,75.784],[-81.129,75.714],[-80.058,75.337],[-79.834,74.923],[-80.458,74.657],[-81.949,74.442],[-83.229,74.564],[-86.097,74.41],[-88.15,74.392],[-89.765,74.516],[-92.422,74.838],[-92.768,75.387],[-92.89,75.883],[-93.894,76.319],[-95.962,76.441],[-97.121,76.751],[-96.745,77.161],[-94.684,77.098]]],[[[-116.199,77.645],[-116.336,76.877],[-117.106,76.53],[-118.04,76.481],[-119.899,76.053],[-121.5,75.9],[-122.855,76.117],[-122.855,76.117],[-121.158,76.865],[-119.104,77.512],[-117.57,77.498],[-116.199,77.645]]],[[[106.97,76.974],[107.24,76.48],[108.154,76.723],[111.077,76.71],[113.331,76.222],[114.134,75.848],[113.885,75.328],[112.779,75.032],[110.151,74.477],[109.4,74.18],[110.64,74.04],[112.119,73.788],[113.019,73.977],[113.53,73.335],[113.969,73.595],[115.568,73.753],[118.776,73.588],[119.02,73.12],[123.201,72.971],[123.258,73.735],[125.38,73.56],[126.977,73.565],[128.591,73.039],[129.052,72.399],[128.46,71.98],[129.716,71.193],[131.289,70.787],[132.253,71.836],[133.858,71.386],[135.562,71.655],[137.498,71.348],[138.234,71.628],[139.87,71.488],[139.148,72.416],[140.468,72.849],[149.5,72.2],[150.351,71.607],[152.969,70.842],[157.007,71.031],[158.998,70.867],[159.83,70.453],[159.709,69.722],[160.941,69.437],[162.279,69.642],[164.052,69.668],[165.94,69.472],[167.836,69.583],[169.578,68.694],[170.817,69.014],[170.008,69.653],[170.453,70.097],[173.644,69.818],[175.724,69.877],[178.6,69.4],[180,68.964],[180,64.98],[179.993,64.974],[178.707,64.535],[177.411,64.608],[178.313,64.076],[178.908,63.252],[179.37,62.983],[179.487,62.569],[179.228,62.304],[177.364,62.522],[174.569,61.769],[173.68,61.653],[172.15,60.95],[170.698,60.336],[170.331,59.882],[168.901,60.573],[166.295,59.789],[165.84,60.16],[164.877,59.732],[163.539,59.869],[163.217,59.211],[162.017,58.243],[162.053,57.839],[163.192,57.615],[163.058,56.159],[162.13,56.122],[161.701,55.286],[162.117,54.855],[160.369,54.344],[160.022,53.203],[158.531,52.959],[158.231,51.943],[156.79,51.011],[156.42,51.7],[155.992,53.159],[155.434,55.381],[155.914,56.768],[156.758,57.365],[156.81,57.832],[158.364,58.056],[160.151,59.315],[161.872,60.343],[163.67,61.141],[164.474,62.551],[163.258,62.466],[162.658,61.643],[160.122,60.544],[159.302,61.774],[156.721,61.435],[154.218,59.758],[155.044,59.145],[152.812,58.884],[151.266,58.781],[151.338,59.504],[149.784,59.656],[148.545,59.164],[145.487,59.336],[142.198,59.04],[138.958,57.088],[135.126,54.73],[136.702,54.604],[137.193,53.977],[138.165,53.755],[138.805,54.255],[139.901,54.19],[141.345,53.09],[141.379,52.239],[140.597,51.24],[140.513,50.045],[140.062,48.447],[138.555,47],[138.22,46.308],[136.862,45.143],[135.515,43.989],[134.87,43.398],[133.537,42.812],[132.906,42.799],[132.278,43.284],[130.936,42.553],[130.78,42.22],[130.4,42.28],[129.966,41.941],[129.667,41.601],[129.705,40.883],[129.188,40.662],[129.01,40.485],[128.633,40.19],[127.968,40.026],[127.534,39.757],[127.502,39.324],[127.385,39.214],[127.783,39.051],[128.35,38.612],[129.213,37.432],[129.461,36.784],[129.468,35.632],[129.091,35.083],[128.186,34.891],[127.386,34.476],[126.486,34.39],[126.374,34.935],[126.559,35.685],[126.117,36.726],[126.86,36.894],[126.175,37.75],[125.689,37.94],[125.568,37.752],[125.275,37.669],[125.24,37.857],[124.981,37.949],[124.712,38.108],[124.986,38.549],[125.222,38.666],[125.133,38.849],[125.387,39.388],[125.321,39.552],[124.737,39.66],[124.266,39.929],[122.868,39.638],[122.132,39.17],[121.055,38.898],[121.586,39.361],[121.377,39.75],[122.169,40.422],[121.641,40.946],[120.769,40.594],[119.64,39.898],[119.023,39.252],[118.043,39.204],[117.533,38.738],[118.06,38.062],[118.878,37.897],[118.912,37.448],[119.703,37.156],[120.823,37.87],[121.711,37.481],[122.358,37.455],[122.52,36.931],[121.104,36.651],[120.637,36.112],[119.665,35.61],[119.151,34.91],[120.227,34.36],[120.62,33.377],[121.229,32.46],[121.908,31.692],[121.892,30.949],[121.264,30.676],[121.503,30.143],[122.092,29.833],[121.938,29.018],[121.685,28.226],[121.126,28.136],[120.396,27.053],[119.586,25.741],[118.657,24.547],[117.282,23.625],[115.891,22.783],[114.764,22.668],[114.153,22.224],[113.807,22.548],[113.241,22.052],[111.844,21.55],[110.786,21.397],[110.444,20.341],[109.89,20.282],[109.628,21.008],[109.865,21.395],[108.523,21.715],[108.05,21.552],[106.715,20.697],[105.882,19.752],[105.662,19.058],[106.427,18.004],[107.362,16.698],[108.269,16.08],[108.877,15.277],[109.335,13.426],[109.2,11.667],[108.366,11.008],[107.221,10.365],[106.405,9.531],[105.158,8.6],[104.795,9.241],[105.076,9.919],[104.334,10.487],[103.497,10.633],[103.091,11.154],[102.585,12.187],[101.687,12.646],[100.832,12.627],[100.979,13.413],[100.098,13.407],[100.019,12.307],[99.479,10.846],[99.154,9.963],[99.222,9.239],[99.874,9.208],[100.28,8.295],[100.459,7.43],[101.017,6.857],[101.623,6.741],[102.141,6.222],[102.371,6.128],[102.962,5.524],[103.381,4.855],[103.439,4.182],[103.332,3.727],[103.43,3.383],[103.503,2.791],[103.855,2.516],[104.248,1.631],[104.229,1.293],[103.52,1.226],[102.574,1.967],[101.391,2.761],[101.274,3.27],[100.695,3.939],[100.557,4.767],[100.197,5.312],[100.306,6.041],[100.086,6.464],[99.691,6.848],[99.52,7.344],[98.988,7.908],[98.504,8.382],[98.34,7.794],[98.15,8.35],[98.259,8.974],[98.554,9.933],[98.457,10.675],[98.765,11.441],[98.428,12.033],[98.51,13.122],[98.104,13.641],[97.778,14.837],[97.597,16.101],[97.165,16.929],[96.506,16.427],[95.369,15.714],[94.808,15.804],[94.189,16.038],[94.534,17.277],[94.325,18.214],[93.541,19.367],[93.663,19.727],[93.078,19.855],[92.369,20.671],[92.083,21.192],[92.025,21.702],[91.835,22.183],[91.417,22.765],[90.496,22.805],[90.587,22.393],[90.273,21.836],[89.847,22.039],[89.702,21.857],[89.419,21.966],[89.032,22.056],[88.889,21.691],[88.208,21.703],[86.976,21.495],[87.033,20.743],[86.499,20.152],[85.06,19.479],[83.941,18.302],[83.189,17.671],[82.193,17.017],[82.191,16.557],[81.693,16.31],[80.792,15.952],[80.325,15.899],[80.025,15.136],[80.233,13.836],[80.286,13.006],[79.862,12.056],[79.858,10.357],[79.341,10.309],[78.885,9.546],[79.19,9.217],[78.278,8.933],[77.941,8.253],[77.54,7.966],[76.593,8.899],[76.13,10.3],[75.747,11.308],[75.396,11.781],[74.865,12.742],[74.617,13.993],[74.444,14.617],[73.534,15.991],[73.12,17.929],[72.821,19.208],[72.825,20.419],[72.631,21.356],[71.175,20.758],[70.471,20.877],[69.164,22.089],[69.645,22.451],[69.35,22.843],[68.177,23.692],[67.444,23.945],[67.146,24.664],[66.373,25.425],[64.531,25.237],[62.906,25.219],[61.497,25.078],[59.616,25.38],[58.526,25.61],[57.397,25.74],[56.971,26.966],[56.492,27.143],[55.724,26.965],[54.715,26.481],[53.493,26.812],[52.484,27.581],[51.521,27.866],[50.853,28.815],[50.115,30.148],[49.577,29.986],[48.941,30.317],[48.568,29.927],[47.974,29.976],[48.183,29.534],[48.094,29.306],[48.416,28.552],[48.808,27.69],[49.3,27.461],[49.471,27.11],[50.153,26.69],[50.213,26.277],[50.113,25.944],[50.24,25.608],[50.528,25.328],[50.661,25],[50.81,24.755],[50.744,25.482],[51.013,26.007],[51.286,26.115],[51.589,25.801],[51.607,25.216],[51.39,24.628],[51.58,24.245],[51.758,24.294],[51.794,24.02],[52.577,24.177],[53.404,24.151],[54.008,24.122],[54.693,24.798],[55.439,25.439],[56.071,26.055],[56.362,26.396],[56.486,26.309],[56.391,25.896],[56.261,25.715],[56.397,24.925],[56.845,24.242],[57.404,23.879],[58.137,23.748],[58.729,23.566],[59.18,22.992],[59.45,22.66],[59.808,22.534],[59.806,22.31],[59.442,21.714],[59.282,21.434],[58.861,21.114],[58.488,20.429],[58.034,20.482],[57.826,20.243],[57.666,19.736],[57.789,19.068],[57.695,18.945],[57.234,18.948],[56.61,18.574],[56.512,18.087],[56.284,17.876],[55.661,17.884],[55.27,17.632],[55.275,17.228],[54.791,16.951],[54.239,17.045],[53.57,16.708],[53.109,16.651],[52.385,16.383],[52.192,15.938],[52.168,15.597],[51.172,15.175],[49.575,14.709],[48.679,14.003],[48.239,13.948],[47.939,14.007],[47.354,13.592],[46.717,13.4],[45.878,13.348],[45.625,13.291],[45.406,13.027],[45.144,12.954],[44.99,12.7],[44.495,12.722],[44.175,12.586],[43.483,12.637],[43.223,13.221],[43.252,13.768],[43.088,14.063],[42.892,14.802],[42.605,15.213],[42.805,15.262],[42.703,15.719],[42.824,15.912],[42.779,16.348],[42.65,16.775],[42.348,17.076],[42.271,17.475],[41.755,17.833],[41.221,18.672],[40.939,19.487],[40.248,20.175],[39.802,20.339],[39.14,21.292],[39.024,21.987],[39.066,22.58],[38.493,23.688],[38.024,24.079],[37.484,24.286],[37.155,24.859],[37.209,25.084],[36.932,25.603],[36.64,25.826],[36.249,26.57],[35.64,27.377],[35.13,28.063],[34.632,28.058],[34.788,28.607],[34.832,28.958],[34.956,29.357],[34.923,29.501],[34.642,29.099],[34.427,28.344],[34.154,27.823],[33.922,27.649],[33.588,27.971],[33.137,28.418],[32.423,29.851],[32.32,29.76],[32.735,28.705],[33.349,27.7],[34.105,26.142],[34.474,25.599],[34.795,25.034],[35.693,23.927],[35.494,23.753],[35.526,23.102],[36.691,22.205],[36.866,22],[37.189,21.019],[36.969,20.838],[37.115,19.808],[37.482,18.614],[37.863,18.368],[38.41,17.998],[38.991,16.841],[39.266,15.923],[39.814,15.436],[41.179,14.491],[41.735,13.921],[42.277,13.344],[42.59,13],[43.081,12.7],[43.318,12.39],[43.286,11.975],[42.716,11.736],[43.145,11.462],[43.471,11.278],[43.667,10.864],[44.118,10.446],[44.614,10.442],[45.557,10.698],[46.646,10.817],[47.526,11.127],[48.022,11.193],[48.379,11.375],[48.948,11.411],[49.268,11.43],[49.729,11.579],[50.259,11.68],[50.732,12.022],[51.111,12.025],[51.134,11.748],[51.042,11.167],[51.045,10.641],[50.834,10.28],[50.552,9.199],[50.071,8.082],[49.453,6.805],[48.594,5.339],[47.741,4.219],[46.565,2.855],[45.564,2.046],[44.068,1.053],[43.136,.292],[42.042,-.919],[41.811,-1.446],[41.585,-1.683],[40.885,-2.083],[40.638,-2.5],[40.263,-2.573],[40.121,-3.278],[39.8,-3.681],[39.605,-4.346],[39.202,-4.677],[38.74,-5.909],[38.8,-6.476],[39.44,-6.84],[39.47,-7.1],[39.195,-7.704],[39.252,-8.008],[39.187,-8.485],[39.536,-9.112],[39.95,-10.098],[40.317,-10.317],[40.479,-10.765],[40.437,-11.762],[40.561,-12.639],[40.6,-14.202],[40.776,-14.692],[40.477,-15.406],[40.089,-16.101],[39.453,-16.721],[38.538,-17.101],[37.411,-17.586],[36.281,-18.66],[35.896,-18.842],[35.198,-19.553],[34.786,-19.784],[34.702,-20.497],[35.176,-21.254],[35.373,-21.841],[35.386,-22.14],[35.563,-22.09],[35.534,-23.071],[35.372,-23.535],[35.607,-23.706],[35.459,-24.123],[35.041,-24.478],[34.216,-24.816],[33.013,-25.357],[32.575,-25.727],[32.66,-26.148],[32.916,-26.216],[32.83,-26.742],[32.58,-27.47],[32.462,-28.301],[32.203,-28.752],[31.521,-29.257],[31.326,-29.402],[30.902,-29.91],[30.623,-30.424],[30.056,-31.14],[28.925,-32.172],[28.22,-32.772],[27.465,-33.227],[26.419,-33.615],[25.91,-33.667],[25.781,-33.945],[25.173,-33.797],[24.678,-33.987],[23.594,-33.794],[22.988,-33.916],[22.574,-33.864],[21.543,-34.259],[20.689,-34.417],[20.071,-34.795],[19.617,-34.819],[19.193,-34.463],[18.855,-34.444],[18.425,-33.998],[18.378,-34.136],[18.245,-33.868],[18.25,-33.281],[17.925,-32.611],[18.248,-32.429],[18.222,-31.662],[17.567,-30.726],[17.065,-29.879],[17.063,-29.876],[16.345,-28.577],[15.602,-27.821],[15.211,-27.091],[14.99,-26.117],[14.743,-25.393],[14.408,-23.853],[14.386,-22.657],[14.258,-22.111],[13.869,-21.699],[13.352,-20.873],[12.827,-19.673],[12.609,-19.045],[11.795,-18.069],[11.734,-17.302],[11.64,-16.673],[11.779,-15.794],[12.124,-14.878],[12.176,-14.449],[12.5,-13.548],[12.739,-13.138],[13.313,-12.484],[13.634,-12.039],[13.739,-11.298],[13.687,-10.731],[13.387,-10.374],[13.121,-9.767],[12.875,-9.167],[12.929,-8.959],[13.237,-8.563],[12.933,-7.596],[12.728,-6.927],[12.227,-6.294],[12.323,-6.1],[12.182,-5.79],[11.915,-5.038],[11.094,-3.979],[10.066,-2.969],[9.405,-2.144],[8.798,-1.111],[8.83,-.779],[9.049,-.459],[9.291,.269],[9.493,1.01],[9.306,1.161],[9.649,2.284],[9.795,3.073],[9.404,3.734],[8.948,3.904],[8.745,4.352],[8.489,4.496],[8.5,4.772],[7.462,4.412],[7.083,4.465],[6.698,4.241],[5.898,4.263],[5.363,4.888],[5.034,5.612],[4.326,6.271],[3.574,6.258],[2.692,6.259],[1.865,6.142],[1.06,5.929],[-.508,5.344],[-1.064,5],[-1.965,4.711],[-2.856,4.995],[-3.311,4.984],[-4.009,5.18],[-4.65,5.168],[-5.834,4.994],[-6.529,4.705],[-7.519,4.338],[-7.712,4.365],[-7.974,4.356],[-9.005,4.833],[-9.913,5.594],[-10.765,6.141],[-11.439,6.786],[-11.708,6.86],[-12.428,7.263],[-12.949,7.799],[-13.124,8.164],[-13.247,8.903],[-13.685,9.495],[-14.074,9.886],[-14.33,10.016],[-14.58,10.214],[-14.693,10.656],[-14.839,10.877],[-15.13,11.041],[-15.664,11.458],[-16.085,11.525],[-16.315,11.807],[-16.309,11.959],[-16.614,12.171],[-16.677,12.385],[-16.841,13.151],[-16.714,13.595],[-17.126,14.373],[-17.625,14.73],[-17.185,14.919],[-16.701,15.622],[-16.463,16.135],[-16.55,16.674],[-16.271,17.167],[-16.146,18.109],[-16.257,19.097],[-16.378,19.594],[-16.278,20.093],[-16.536,20.568],[-17.063,21],[-17.02,21.422],[-16.973,21.886],[-16.589,22.158],[-16.262,22.679],[-16.326,23.018],[-15.983,23.724],[-15.426,24.359],[-15.089,24.52],[-14.825,25.104],[-14.801,25.636],[-14.44,26.255],[-13.774,26.619],[-13.14,27.64],[-12.619,28.038],[-11.689,28.149],[-10.901,28.832],[-10.4,29.099],[-9.565,29.934],[-9.815,31.178],[-9.435,32.038],[-9.301,32.565],[-8.657,33.24],[-7.654,33.697],[-6.912,34.11],[-6.244,35.146],[-5.93,35.76],[-5.194,35.755],[-4.591,35.331],[-3.64,35.4],[-2.604,35.179],[-2.17,35.169],[-1.209,35.715],[-.127,35.889],[.504,36.301],[1.467,36.606],[3.162,36.784],[4.816,36.865],[5.32,36.716],[6.262,37.111],[7.331,37.119],[7.737,36.886],[8.421,36.946],[9.51,37.35],[10.21,37.23],[10.181,36.724],[11.029,37.092],[11.1,36.9],[10.6,36.41],[10.593,35.948],[10.94,35.699],[10.808,34.833],[10.15,34.331],[10.34,33.786],[10.857,33.769],[11.109,33.293],[11.489,33.137],[12.663,32.793],[13.083,32.879],[13.919,32.712],[15.246,32.265],[15.714,31.376],[16.612,31.182],[18.021,30.763],[19.086,30.266],[19.574,30.526],[20.053,30.986],[19.82,31.752],[20.134,32.238],[20.854,32.707],[21.543,32.843],[22.896,32.638],[23.237,32.192],[23.609,32.187],[23.927,32.017],[24.921,31.899],[25.165,31.569],[26.495,31.586],[27.458,31.321],[28.451,31.026],[28.914,30.87],[29.683,31.187],[30.095,31.474],[30.977,31.556],[31.688,31.43],[31.961,30.934],[32.193,31.26],[32.994,31.024],[33.773,30.968],[34.266,31.219],[34.557,31.549],[34.488,31.606],[34.753,32.073],[34.956,32.828],[35.099,33.081],[35.126,33.091],[35.482,33.906],[35.98,34.61],[35.998,34.645],[35.905,35.41],[36.15,35.821],[35.782,36.275],[36.161,36.651],[35.551,36.565],[34.714,36.795],[34.027,36.22],[32.509,36.107],[31.7,36.644],[30.622,36.678],[30.391,36.263],[29.7,36.144],[28.733,36.677],[27.641,36.659],[27.049,37.654],[26.318,38.208],[26.805,38.986],[26.171,39.464],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.146,41.088],[32.348,41.736],[33.513,42.019],[35.168,42.04],[36.913,41.336],[38.348,40.949],[39.513,41.103],[40.373,41.014],[41.554,41.536],[41.703,41.963],[41.453,42.645],[40.875,43.014],[40.321,43.129],[39.955,43.435],[38.68,44.28],[37.539,44.657],[36.675,45.245],[37.403,45.404],[38.233,46.241],[37.674,46.637],[39.148,47.045],[39.121,47.263],[38.224,47.102],[37.425,47.022],[36.76,46.699],[35.824,46.646],[34.962,46.273],[35.021,45.651],[35.51,45.41],[36.53,45.47],[36.335,45.113],[35.24,44.94],[33.883,44.362],[33.326,44.565],[33.547,45.035],[32.454,45.328],[32.631,45.519],[33.588,45.852],[33.299,46.081],[31.744,46.333],[31.675,46.706],[30.749,46.583],[30.378,46.032],[29.603,45.293],[29.627,45.036],[29.142,44.82],[28.838,44.914],[28.558,43.708],[28.039,43.293],[27.674,42.578],[27.997,42.008],[28.115,41.623],[28.989,41.3],[28.807,41.055],[27.619,41],[27.193,40.691],[26.358,40.152],[26.043,40.618],[26.057,40.824],[25.448,40.852],[24.926,40.947],[23.715,40.687],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.626,40.257],[22.85,39.659],[23.35,39.19],[22.973,38.971],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.154,36.422],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.31],[20.73,38.77],[20.218,39.34],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.406,40.251],[19.319,40.727],[19.404,41.409],[19.54,41.72],[19.372,41.878],[19.162,41.955],[18.882,42.281],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.016,43.507],[15.175,44.243],[15.376,44.318],[14.92,44.739],[14.902,45.076],[14.259,45.234],[13.952,44.802],[13.657,45.137],[13.68,45.484],[13.715,45.5],[13.938,45.591],[13.142,45.737],[12.329,45.382],[12.384,44.885],[12.261,44.601],[12.589,44.091],[13.527,43.588],[14.03,42.761],[15.143,41.955],[15.926,41.961],[16.17,41.74],[15.889,41.541],[16.785,41.18],[17.519,40.877],[18.377,40.356],[18.48,40.169],[18.294,39.811],[17.739,40.278],[16.87,40.442],[16.449,39.795],[17.172,39.425],[17.053,38.903],[16.635,38.844],[16.101,37.986],[15.684,37.909],[15.688,38.215],[15.892,38.751],[16.109,38.964],[15.719,39.544],[15.414,40.048],[14.998,40.173],[14.703,40.605],[14.061,40.786],[13.628,41.188],[12.888,41.253],[12.107,41.705],[11.192,42.356],[10.512,42.932],[10.2,43.92],[9.703,44.036],[8.889,44.366],[8.429,44.231],[7.851,43.767],[7.435,43.694],[6.529,43.129],[4.557,43.4],[3.101,43.075],[2.986,42.473],[3.039,41.892],[2.092,41.226],[.81,41.015],[.721,40.678],[.107,40.124],[-.279,39.31],[.111,38.739],[-.467,38.292],[-.683,37.642],[-1.438,37.443],[-2.146,36.674],[-3.416,36.659],[-4.369,36.678],[-4.995,36.325],[-5.377,35.947],[-5.866,36.03],[-6.237,36.368],[-6.52,36.943],[-7.454,37.098],[-7.856,36.838],[-8.383,36.979],[-8.899,36.869],[-8.746,37.651],[-8.84,38.266],[-9.287,38.359],[-9.526,38.737],[-9.447,39.392],[-9.048,39.755],[-8.977,40.159],[-8.769,40.761],[-8.791,41.184],[-8.991,41.544],[-9.035,41.881],[-8.984,42.593],[-9.393,43.027],[-7.978,43.748],[-6.755,43.568],[-5.412,43.574],[-4.348,43.404],[-3.518,43.456],[-1.901,43.423],[-1.384,44.023],[-1.194,46.015],[-2.226,47.065],[-2.963,47.57],[-4.492,47.955],[-4.592,48.684],[-3.296,48.902],[-1.617,48.644],[-1.933,49.776],[-.989,49.347],[1.339,50.127],[1.639,50.947],[2.513,51.148],[3.315,51.346],[3.83,51.62],[4.706,53.092],[6.074,53.51],[6.905,53.482],[7.101,53.694],[7.936,53.748],[8.122,53.528],[8.801,54.021],[8.572,54.396],[8.526,54.963],[8.12,55.518],[8.09,56.54],[8.257,56.81],[8.544,57.11],[9.425,57.172],[9.776,57.448],[10.58,57.73],[10.546,57.216],[10.25,56.89],[10.37,56.61],[10.912,56.459],[10.668,56.081],[10.37,56.19],[9.65,55.47],[9.922,54.983],[9.94,54.597],[10.95,54.364],[10.94,54.009],[11.956,54.196],[12.518,54.471],[13.648,54.075],[14.12,53.757],[14.803,54.051],[16.364,54.513],[17.623,54.852],[18.621,54.683],[18.696,54.439],[19.661,54.426],[19.888,54.866],[21.268,55.19],[21.056,56.031],[21.091,56.784],[21.582,57.412],[22.524,57.753],[23.318,57.006],[24.121,57.026],[24.313,57.794],[24.429,58.383],[24.061,58.258],[23.427,58.613],[23.34,59.187],[24.604,59.466],[25.864,59.611],[26.949,59.446],[27.981,59.476],[29.118,60.028],[28.07,60.503],[26.255,60.424],[24.497,60.057],[22.87,59.846],[22.291,60.392],[21.322,60.72],[21.545,61.705],[21.059,62.607],[21.536,63.19],[22.443,63.818],[24.731,64.902],[25.398,65.112],[25.294,65.534],[23.904,66.007],[22.183,65.724],[21.214,65.026],[21.37,64.414],[19.779,63.61],[17.848,62.75],[17.12,61.341],[17.831,60.637],[18.788,60.082],[17.869,58.954],[16.829,58.72],[16.448,57.041],[15.88,56.104],[14.667,56.201],[14.101,55.408],[12.943,55.362],[12.625,56.307],[11.788,57.442],[11.027,58.856],[10.357,59.47],[8.382,58.313],[7.049,58.079],[5.666,58.588],[5.308,59.663],[4.992,61.971],[5.913,62.615],[8.554,63.454],[10.528,64.486],[12.358,65.88],[14.761,67.811],[16.436,68.563],[19.184,69.818],[21.378,70.255],[23.024,70.202],[24.547,71.031],[26.37,70.986],[28.166,71.185],[31.294,70.454],[30.005,70.186],[31.101,69.558],[32.133,69.906],[33.776,69.302],[36.514,69.063],[40.292,67.932],[41.06,67.457],[41.126,66.792],[40.016,66.266],[38.383,66],[33.919,66.76],[33.185,66.633],[34.815,65.9],[34.944,64.414],[36.231,64.109],[37.013,63.85],[37.142,64.335],[36.518,64.78],[37.176,65.143],[39.594,64.521],[40.436,64.765],[39.763,65.497],[42.093,66.476],[43.016,66.419],[43.95,66.069],[44.532,66.756],[43.698,67.352],[44.188,67.951],[43.453,68.571],[46.25,68.25],[46.821,67.69],[45.555,67.567],[45.562,67.01],[46.349,66.668],[47.894,66.885],[48.139,67.523],[50.228,67.999],[53.718,68.857],[54.472,68.808],[53.486,68.201],[54.726,68.097],[55.443,68.439],[57.317,68.466],[58.802,68.881],[59.942,68.279],[61.078,68.941],[60.03,69.52],[60.55,69.85],[63.504,69.547],[64.888,69.235],[68.512,68.092],[69.181,68.616],[68.164,69.144],[68.135,69.357],[66.93,69.455],[67.26,69.929],[66.725,70.709],[66.695,71.029],[68.54,71.935],[69.196,72.844],[69.94,73.04],[72.588,72.776],[72.796,72.22],[71.848,71.409],[72.47,71.09],[72.792,70.391],[72.565,69.021],[73.668,68.408],[73.239,67.74],[71.28,66.32],[72.423,66.173],[72.821,66.533],[73.921,66.789],[74.187,67.284],[75.052,67.76],[74.469,68.329],[74.936,68.989],[73.842,69.071],[73.602,69.628],[74.4,70.632],[73.101,71.447],[74.891,72.121],[74.659,72.832],[75.158,72.855],[75.683,72.3],[75.289,71.336],[76.359,71.153],[75.903,71.874],[77.577,72.267],[79.652,72.32],[81.5,71.75],[80.611,72.583],[80.511,73.648],[82.25,73.85],[84.655,73.806],[86.822,73.937],[86.01,74.46],[87.167,75.117],[88.316,75.144],[90.26,75.64],[92.901,75.773],[93.234,76.047],[95.86,76.14],[96.678,75.916],[98.922,76.447],[100.76,76.43],[101.035,76.862],[101.991,77.287],[104.352,77.698],[106.067,77.374],[104.705,77.128],[106.97,76.974]],[[49.11,41.282],[49.619,40.573],[50.085,40.526],[50.393,40.257],[49.569,40.176],[49.395,39.399],[49.223,39.049],[48.857,38.815],[48.883,38.32],[49.2,37.583],[50.148,37.375],[50.842,36.873],[52.264,36.7],[53.826,36.965],[53.922,37.199],[53.735,37.906],[53.881,38.952],[53.101,39.291],[53.358,39.975],[52.694,40.034],[52.915,40.877],[53.858,40.631],[54.737,40.951],[54.008,41.551],[53.722,42.123],[52.917,41.868],[52.815,41.135],[52.503,41.783],[52.446,42.027],[52.692,42.444],[52.502,42.792],[51.343,43.133],[50.891,44.031],[50.339,44.284],[50.306,44.61],[51.279,44.515],[51.317,45.246],[52.167,45.409],[53.041,45.259],[53.221,46.235],[53.043,46.853],[52.042,46.805],[51.192,47.049],[50.034,46.609],[49.101,46.399],[48.646,45.806],[47.676,45.641],[46.682,44.609],[47.591,43.66],[47.492,42.987],[48.584,41.809],[49.11,41.282]]],[[[-93.84,77.52],[-94.296,77.491],[-96.17,77.555],[-96.436,77.835],[-94.423,77.82],[-93.721,77.634],[-93.84,77.52]]],[[[-110.187,77.697],[-112.051,77.409],[-113.534,77.732],[-112.725,78.051],[-111.264,78.153],[-109.854,77.996],[-110.187,77.697]]],[[[24.724,77.854],[22.49,77.445],[20.726,77.677],[21.416,77.935],[20.812,78.255],[22.884,78.455],[23.281,78.08],[24.724,77.854]]],[[[-109.663,78.602],[-110.881,78.407],[-112.542,78.408],[-112.526,78.551],[-111.5,78.85],[-110.964,78.804],[-109.663,78.602]]],[[[-95.83,78.057],[-97.31,77.851],[-98.124,78.083],[-98.553,78.458],[-98.632,78.872],[-97.337,78.832],[-96.754,78.766],[-95.559,78.418],[-95.83,78.057]]],[[[-100.06,78.325],[-99.671,77.908],[-101.304,78.019],[-102.95,78.343],[-105.176,78.38],[-104.21,78.677],[-105.42,78.918],[-105.492,79.302],[-103.529,79.165],[-100.825,78.8],[-100.06,78.325]]],[[[105.075,78.307],[99.438,77.921],[101.265,79.234],[102.086,79.346],[102.838,79.281],[105.372,78.713],[105.075,78.307]]],[[[18.252,79.702],[21.544,78.956],[19.027,78.563],[18.472,77.827],[17.594,77.638],[17.118,76.809],[15.913,76.77],[13.763,77.38],[14.67,77.736],[13.171,78.025],[11.222,78.869],[10.445,79.652],[13.171,80.01],[13.719,79.66],[15.143,79.674],[15.523,80.016],[16.991,80.051],[18.252,79.702]]],[[[25.448,80.407],[27.408,80.056],[25.925,79.518],[23.024,79.4],[20.075,79.567],[19.897,79.842],[18.462,79.86],[17.368,80.319],[20.456,80.598],[21.908,80.358],[22.919,80.657],[25.448,80.407]]],[[[51.136,80.547],[49.794,80.415],[48.894,80.34],[48.755,80.175],[47.586,80.01],[46.503,80.247],[47.072,80.559],[44.847,80.59],[46.799,80.772],[48.318,80.784],[48.523,80.515],[49.097,80.754],[50.04,80.919],[51.523,80.7],[51.136,80.547]]],[[[99.94,78.881],[97.758,78.756],[94.973,79.045],[93.313,79.427],[92.545,80.144],[91.181,80.341],[93.778,81.025],[95.941,81.25],[97.884,80.747],[100.187,79.78],[99.94,78.881]]],[[[-87.02,79.66],[-85.814,79.337],[-87.188,79.039],[-89.035,78.287],[-90.804,78.215],[-92.877,78.343],[-93.951,78.751],[-93.936,79.114],[-93.145,79.38],[-94.974,79.372],[-96.076,79.705],[-96.71,80.158],[-96.016,80.602],[-95.323,80.907],[-94.298,80.977],[-94.735,81.206],[-92.41,81.257],[-91.133,80.723],[-89.45,80.509],[-87.81,80.32],[-87.02,79.66]]],[[[-68.5,83.106],[-65.827,83.028],[-63.68,82.9],[-61.85,82.629],[-61.894,82.362],[-64.334,81.928],[-66.753,81.725],[-67.658,81.501],[-65.48,81.507],[-67.84,80.9],[-69.47,80.617],[-71.18,79.8],[-73.243,79.634],[-73.88,79.43],[-76.908,79.323],[-75.529,79.198],[-76.22,79.019],[-75.393,78.526],[-76.344,78.183],[-77.889,77.9],[-78.363,77.509],[-79.76,77.21],[-79.62,76.983],[-77.911,77.022],[-77.889,76.778],[-80.561,76.178],[-83.174,76.454],[-86.112,76.299],[-87.6,76.42],[-89.491,76.472],[-89.616,76.952],[-87.767,77.178],[-88.26,77.9],[-87.65,77.97],[-84.976,77.539],[-86.34,78.18],[-87.962,78.372],[-87.152,78.759],[-85.379,78.997],[-85.095,79.345],[-86.507,79.736],[-86.932,80.251],[-84.198,80.208],[-83.409,80.1],[-81.848,80.464],[-84.1,80.58],[-87.599,80.516],[-89.367,80.856],[-90.2,81.26],[-91.368,81.553],[-91.587,81.894],[-90.1,82.085],[-88.932,82.118],[-86.97,82.28],[-85.5,82.652],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.307,83.131],[-76.25,83.172],[-75.719,83.064],[-72.832,83.233],[-70.666,83.17],[-68.5,83.106]]],[[[-27.1,83.52],[-20.845,82.727],[-22.692,82.342],[-26.518,82.298],[-31.9,82.2],[-31.396,82.022],[-27.857,82.132],[-24.844,81.787],[-22.903,82.093],[-22.072,81.734],[-23.17,81.153],[-20.624,81.525],[-15.768,81.912],[-12.77,81.719],[-12.209,81.292],[-16.285,80.58],[-16.85,80.35],[-20.046,80.177],[-17.73,80.129],[-18.9,79.4],[-19.705,78.751],[-19.674,77.639],[-18.473,76.986],[-20.035,76.944],[-21.679,76.628],[-19.834,76.098],[-19.599,75.248],[-20.668,75.156],[-19.373,74.296],[-21.594,74.224],[-20.435,73.817],[-20.762,73.464],[-22.172,73.31],[-23.566,73.307],[-22.313,72.629],[-22.3,72.184],[-24.278,72.598],[-24.793,72.33],[-23.443,72.08],[-22.133,71.469],[-21.754,70.664],[-23.536,70.471],[-24.307,70.856],[-25.543,71.431],[-25.201,70.752],[-26.363,70.226],[-23.727,70.184],[-22.349,70.129],[-25.029,69.259],[-27.747,68.47],[-30.674,68.125],[-31.777,68.121],[-32.811,67.735],[-34.202,66.68],[-36.353,65.979],[-37.044,65.938],[-38.375,65.692],[-39.812,65.458],[-40.669,64.84],[-40.683,64.139],[-41.189,63.482],[-42.819,62.682],[-42.417,61.901],[-42.866,61.074],[-43.378,60.098],[-44.788,60.037],[-46.264,60.853],[-48.263,60.858],[-49.233,61.407],[-49.9,62.383],[-51.633,63.627],[-52.14,64.278],[-52.277,65.177],[-53.662,66.1],[-53.302,66.837],[-53.969,67.189],[-52.98,68.358],[-51.475,68.73],[-51.08,69.148],[-50.871,69.929],[-52.014,69.575],[-52.558,69.426],[-53.456,69.284],[-54.683,69.61],[-54.75,70.289],[-54.359,70.821],[-53.431,70.836],[-51.39,70.57],[-53.109,71.205],[-54.004,71.547],[-55,71.407],[-55.835,71.654],[-54.718,72.586],[-55.326,72.959],[-56.12,73.65],[-57.324,74.71],[-58.597,75.099],[-58.585,75.517],[-61.269,76.102],[-63.392,76.175],[-66.064,76.135],[-68.504,76.061],[-69.665,76.38],[-71.403,77.009],[-68.777,77.323],[-66.764,77.376],[-71.043,77.636],[-73.297,78.044],[-73.159,78.433],[-69.373,78.914],[-65.711,79.394],[-65.324,79.758],[-68.023,80.117],[-67.151,80.516],[-63.689,81.214],[-62.234,81.321],[-62.651,81.77],[-60.282,82.034],[-57.207,82.191],[-54.134,82.2],[-53.043,81.888],[-50.391,82.439],[-48.004,82.065],[-46.6,81.986],[-44.523,81.661],[-46.901,82.2],[-46.764,82.628],[-43.406,83.225],[-39.898,83.18],[-38.622,83.549],[-35.088,83.645],[-27.1,83.52]]]];function cl(i,e=()=>!0){let t={yaw:0,pitch:0,dragging:!1},n=null,s=!1;function r(o){if(!n||o.pointerId!==n.id)return;let a=n.id;n=null,t.dragging=!1,i.classList.remove("dragging"),o.type==="pointercancel"&&(s=!0),i.hasPointerCapture(a)&&i.releasePointerCapture(a)}i.addEventListener("pointerdown",o=>{n||o.isPrimary===!1||o.button!==0||!e(o)||(s=!1,n={id:o.pointerId,x:o.clientX,y:o.clientY,startX:o.clientX,startY:o.clientY},i.setPointerCapture(o.pointerId))}),i.addEventListener("pointermove",o=>{if(!(!n||o.pointerId!==n.id)){if(Math.hypot(o.clientX-n.startX,o.clientY-n.startY)>6&&(t.dragging=!0),t.dragging){s=!0,i.classList.add("dragging");let a=i.getBoundingClientRect(),c=Math.max(180,Math.min(a.width,a.height));t.yaw+=(o.clientX-n.x)/c*Math.PI*2,t.pitch=Math.max(-Math.PI*.47,Math.min(Math.PI*.47,t.pitch+(o.clientY-n.y)/c*Math.PI)),o.preventDefault()}n.x=o.clientX,n.y=o.clientY}},{passive:!1});for(let o of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(o,r);return{state:t,consumeClick(){let o=s;return s=!1,o},reset(){t.yaw=0,t.pitch=0},turn(o,a=0){t.yaw+=o,t.pitch=Math.max(-Math.PI*.47,Math.min(Math.PI*.47,t.pitch+a))}}}function ll(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[c,l]=t[r];a>e!=l>e&&i<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function hl(i,e){if(!Number.isFinite(i?.latitude)||!Number.isFinite(i?.longitude)||Math.abs(i.latitude)>90||Math.abs(i.longitude)>180)return"unknown";let t=!1;for(let n of e)if(!(!n.length||!ll(i.longitude,i.latitude,n[0])))if(n.slice(1).some(s=>ll(i.longitude,i.latitude,s)))t=!0;else return"land";return t?"inland-water":"ocean"}function js(i){let e=Number.isFinite(i?.value),n=e&&i.value>0?[`That\u2019s the ocean!
The water is rising!`,`Splash! You found the ocean.
My seas are slowly rising.`,`You found my blue ocean!
Take a look at the sea-level record.`]:[`That\u2019s the ocean!
Let\u2019s take a closer look at my waters.`,"Splash! You found my blue ocean."],s="Global sea-level observation is unavailable.";if(e){let r=/^\d{4}-(0[1-9]|1[0-2])$/.test(i.date||"")?new Date(i.date+"-01T00:00:00Z").toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"UTC"}):"Date unavailable";s=`Global mean sea level: ${i.value>=0?"+":""}${i.value.toFixed(1)} mm since 1993 \xB7 ${r}${i.saved?" \xB7 saved observation":""}`}return{phrases:n,observation:s}}function Va(i){return!Number.isFinite(i?.x)||!Number.isFinite(i?.y)?null:{latitude:Number((Math.max(0,Math.min(1,i.y))*180-90).toFixed(4)),longitude:Number((Math.max(0,Math.min(1,i.x))*360-180).toFixed(4))}}function Ha(i){let e=Va(i?.uv);return e?["land","ocean","inland-water"].includes(i.surface)?{...e,surface:i.surface}:e:null}function ul(i,{hitTest:e,consumeDrag:t=()=>!1,onClick:n=()=>{},onPointSelect:s=()=>{},onGesture:r=()=>{},now:o=Date.now,setTimer:a=setTimeout,clearTimer:c=clearTimeout}){let l=null,h=null,u=[],f=null,p=0,g=[];function _(E,q){i.addEventListener(E,q),g.push([E,q])}function m(){l!==null&&c(l),l=null}function d(){m(),u=[],f=null}function b(E,q){return Math.hypot(E.x-q.clientX,E.y-q.clientY)<=24}function v(E){return Ha(e(E))}function T(E){m(),l=a(()=>{l=null,f=null,u=[],n()},E)}_("pointerdown",E=>{h||E.isPrimary===!1||E.button!==0||(h={id:E.pointerId,x:E.clientX,y:E.clientY,moved:!1})}),_("pointermove",E=>{!h||h.id!==E.pointerId||Math.hypot(h.x-E.clientX,h.y-E.clientY)>6&&(h.moved=!0,d())}),_("pointerup",E=>{if(!h||h.id!==E.pointerId)return;let q=h.moved;if(h=null,E.pointerType!=="touch")return;if(p=o()+800,t()||q){d();return}let y=v(E);y&&(r(),f&&o()-f.time<=350&&b(f,E)?(d(),s(y)):(f&&(m(),n()),f={x:E.clientX,y:E.clientY,time:o()},T(350)))}),_("pointercancel",E=>{h&&h.id===E.pointerId&&(h=null,d())}),_("lostpointercapture",E=>{queueMicrotask(()=>{h&&h.id===E.pointerId&&(h=null,d())})}),_("click",E=>{if(o()<p)return;if(t()){d();return}if(!v(E)){d();return}r();let q=u.at(-1);q&&(o()-q.time>700||!b(q,E))&&(u=[]),u.push({x:E.clientX,y:E.clientY,time:o()}),u=u.slice(-2),T(600)}),_("dblclick",E=>{if(E.preventDefault(),o()<p)return;let q=v(E),y=u.length===2&&q;d(),y&&s(q)});let P=i.ownerDocument,A=()=>{P.hidden&&(h=null,d())};return P?.addEventListener("visibilitychange",A),{dispose(){d(),g.forEach(([E,q])=>i.removeEventListener(E,q)),P?.removeEventListener("visibilitychange",A)}}}function dl(i,{onEarthClick:e=()=>{},onPointSelect:t=()=>{},onGesture:n=()=>{}}={}){let s=new zi({alpha:!0,antialias:!0,powerPreference:"low-power"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.setClearColor(0,0),s.outputColorSpace=st,i.replaceChildren(s.domElement);let r=new Vs,o=new pi(-1.35,1.35,1.35,-1.35,.1,20);o.position.z=6,r.add(new Ys(16777215,3560554,2));let a=new $s(16774631,2.1);a.position.set(-3,4,5),r.add(a);let c=new It;r.add(c);let l=new It;c.add(l);let h=new ln({color:"#303b40"}),u=new ln({color:"#e9e9de"}),f=new ln({color:"#354247"}),p=new Hi(1,72,48);function g(F,z,te,j,ne,pe,Me,Z){let We=new mt(p,Z);return We.position.set(z,te,j),We.scale.set(ne,pe,Me),F.add(We),We}function _(F,z,te=.012){return Math.sqrt(Math.max(.015,1-F*F-z*z))+te}function m(F,z,te,j=.016){let ne=new Vi(z.map(Me=>new L(...Me))),pe=new mt(new Xs(ne,32,j,8,!1),te);return F.add(pe),pe}let d=document.createElement("canvas");d.width=2048,d.height=1024;let b=d.getContext("2d");b.scale(2,2),b.fillStyle="#ffffff";for(let F of ka){let z=new Path2D;for(let te of F)te.forEach(([j,ne],pe)=>{let Me=(j+180)/360*1024,Z=(90-ne)/180*512;pe?z.lineTo(Me,Z):z.moveTo(Me,Z)}),z.closePath();b.fill(z,"evenodd")}let v=new ki(d);v.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy());let T={map:{value:v},cold:{value:0}},P=new wt({uniforms:T,vertexShader:"varying vec2 vUv;varying vec3 vN;varying vec3 vP;void main(){vUv=uv;vP=position;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D map;uniform float cold;varying vec2 vUv;varying vec3 vN;varying vec3 vP;
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
   }`}),A=new Hi(1,192,128),E=A.attributes.position;for(let F=0;F<E.count;F++){let z=E.getX(F),te=E.getY(F),j=E.getZ(F);if(j<.75)continue;let ne=.015*Math.exp(-((z/.075)**2)-((te+.085)/.07)**2),pe=.006*Math.exp(-((z/.036)**2)-((te-.005)/.1)**2);E.setZ(F,j+ne+pe)}A.computeVertexNormals();let q=new mt(A,P);l.add(q);let y={heat:{value:0},cold:{value:0}},w=new wt({uniforms:y,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float heat;uniform float cold;varying vec3 vN;void main(){
   vec3 colour=mix(vec3(1.,.88,.16),vec3(1.,.38,.045),smoothstep(.28,.65,heat));
   colour=mix(colour,vec3(1.,.075,.035),smoothstep(.65,1.,heat));
   float rim=pow(1.-abs(normalize(vN).z),mix(3.,1.15,heat));
   float alpha=heat*(.025+(.52+heat*.40)*rim);
   if(cold>0.){colour=mix(vec3(.24,.65,1.),vec3(.88,.97,1.),cold*cold);rim=pow(1.-abs(normalize(vN).z),mix(3.,1.1,cold));alpha=cold*(.025+(.50+cold*.42)*rim);}
   gl_FragColor=vec4(colour,alpha);
  }`}),X=g(l,0,0,0,1.045,1.045,1.045,w);X.renderOrder=1;let Q=[],re=[];for(let F of[-.3,.3]){let z=new It;z.position.set(F,.16,_(F,.16,.004)),z.quaternion.setFromUnitVectors(new L(0,0,1),new L(F,.16,_(F,.16,0)).normalize()),l.add(z);let te=new It;z.add(te),g(te,0,0,0,.128,.166,.016,u);let j=new It;te.add(j),g(j,0,0,0,.068,.1,.005,f),g(j,-.018,.042,.006,.01,.014,.002,u),Q.push({eye:te,gaze:j,baseX:F>0?-.012:.012});let ne=new It;ne.position.set(F,.41,_(F,.41,.009)),l.add(ne),m(ne,[[-.105,-.018,0],[0,.018,.004],[.105,-.018,0]],h,.013);for(let pe of[-.105,.105])g(ne,pe,-.018,0,.013,.013,.013,h);re.push(ne)}let R=document.createElement("canvas");R.width=512,R.height=640;let O=R.getContext("2d");O.beginPath(),O.ellipse(256,320,246,309,0,0,Math.PI*2),O.fillStyle="#2c2a33",O.fill(),O.save(),O.clip(),O.fillStyle="#fff5dc",O.beginPath(),O.moveTo(-10,-30),O.lineTo(522,-30),O.lineTo(522,116),O.quadraticCurveTo(256,172,-10,116),O.closePath(),O.fill(),O.fillStyle="#c78689",O.beginPath(),O.ellipse(256,594,176,106,0,0,Math.PI*2),O.fill(),O.restore();let Y=new ki(R);Y.colorSpace=st;let N={scale:{value:new ye(1,1)},map:{value:Y}},I=new mt(new fi(2,2,40,40),new wt({uniforms:N,transparent:!0,depthWrite:!1,vertexShader:"uniform vec2 scale;varying vec2 vUv;void main(){vUv=uv;vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.009;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}",fragmentShader:"uniform sampler2D map;varying vec2 vUv;void main(){vec4 c=texture2D(map,vUv);if(c.a<.01)discard;gl_FragColor=c;}"}));l.add(I);let U=new mt(new Ws(.965,1.01,80),new wt({uniforms:{scale:N.scale},transparent:!0,vertexShader:"uniform vec2 scale;varying float rim;void main(){rim=length(position.xy);vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.010+sin((rim-.965)/.045*3.14159)*.0015;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}",fragmentShader:"varying float rim;void main(){gl_FragColor=vec4(.18,.21,.25,.65);}"}));l.add(U);let $=h.clone();$.transparent=!0;let J=m(l,[[-.115,-.32,_(-.115,-.32)],[0,-.28,_(0,-.28)],[.115,-.32,_(.115,-.32)]],$,.012),ie={time:{value:0},strength:{value:0}},W=new wt({uniforms:ie,transparent:!0,depthWrite:!1,side:Ht,vertexShader:"uniform float strength;varying vec2 vUv;void main(){vUv=uv;float side=position.z;float p=uv.y;float centre=side*(.30+.035*(1.-p));float amount=strength*strength;float width=(.035+amount*.32)*(.80+.20*p);float x=centre+(uv.x-.5)*width;float y=(.006+amount*.080)-(1.-p)*(.24+strength*.70);float z=sqrt(max(.015,1.-x*x-y*y))+.020;gl_Position=projectionMatrix*modelViewMatrix*vec4(x,y,z,1.);}",fragmentShader:`uniform float time;uniform float strength;varying vec2 vUv;void main(){
   float edge=1.-smoothstep(.27,.50,abs(vUv.x-.5));
   float dissolve=smoothstep(0.,.34,vUv.y);
   float flow=.5+.5*sin(vUv.y*30.+time*(.003+strength*.014));
   vec3 ocean=vec3(.25,.49,.63);
   vec3 waterColour=mix(vec3(.30,.60,.76),vec3(.58,.83,.89),.10+strength*.14+flow*strength*.12);
   vec3 colour=mix(ocean,waterColour,smoothstep(.15,.75,vUv.y));
   gl_FragColor=vec4(colour,edge*dissolve*(.12+strength*strength*.72));
  }`}),K=[];for(let F of[-1,1]){let z=new fi(1,1,4,48),te=z.attributes.position;for(let ne=0;ne<te.count;ne++)te.setZ(ne,F);let j=new mt(z,W);j.frustumCulled=!1,j.renderOrder=3,l.add(j),K.push(j)}let oe=new ln({color:"#73b2cc",transparent:!0,opacity:.38}),ge=[-.3,.3].map(F=>g(l,F,-.008,_(F,-.008,.022),.105,.012,.007,oe)),me=new Zs,Ce=new ye;function Re(F){let z=s.domElement.getBoundingClientRect();if(!z.width||!z.height)return null;Ce.set((F.clientX-z.left)/z.width*2-1,-(F.clientY-z.top)/z.height*2+1),me.setFromCamera(Ce,o);let te=me.intersectObject(q,!1)[0]||null;return te?.uv&&(te.surface=hl(Va(te.uv),ka)),te}let ve=cl(s.domElement,Re);ul(s.domElement,{hitTest:Re,consumeDrag:()=>ve.consumeClick(),onClick:e,onPointSelect:t,onGesture:n});let Ve=0,B=0,ct=0,he=0,Se=0,fe=0,Ye=0,Le=0,S=0,x=0,k=()=>{Ye=0,Le=0};function ee(F){if(F.pointerType==="touch"||F.buttons>0||ve.state.dragging)return;let z=i.getBoundingClientRect(),te=Math.min(z.width,z.height)*.65;te&&(Ye=_i.clamp((F.clientX-z.left-z.width/2)/te,-1,1),Le=_i.clamp((z.top+z.height/2-F.clientY)/te,-1,1))}return window.addEventListener("pointermove",ee,{passive:!0}),document.documentElement.addEventListener("pointerleave",k),window.addEventListener("blur",k),new ResizeObserver(()=>{if(Ve=i.clientWidth,B=i.clientHeight,!B)return;s.setSize(Ve,B,!1);let F=Ve/B,z=Math.max(1.17,1.18/F);o.left=-z*F,o.right=z*F,o.top=z,o.bottom=-z,o.updateProjectionMatrix()}).observe(i),{inspectCenter(){let F=s.domElement.getBoundingClientRect(),z=Ha(Re({clientX:F.left+F.width/2,clientY:F.top+F.height/2}));z&&t(z)},resetView:()=>ve.reset(),turnView:(F,z)=>ve.turn(F,z),draw(F,z,te){let j=Math.min(80,Math.max(16,z-ct));ct=z;let ne=te?1:1-Math.exp(-j*.005),pe=te?1:1-Math.exp(-j*.007);S+=(Ye-S)*pe,x+=(Le-x)*pe,fe+=((F.air||0)-fe)*ne,he+=(F.tears-he)*ne,Se+=((F.scream||F.tears>.66?1:0)-Se)*ne,y.heat.value=F.heat,y.cold.value=F.cold||0,T.cold.value=F.cold||0,X.scale.setScalar(1.012+Math.pow(Math.max(F.heat,F.cold||0),1.6)*.083),c.rotation.set(ve.state.pitch,ve.state.yaw,0);let Me=Math.sqrt(F.shake),Z=z%6500,We=1800+Me*4e3,ze=Me>0?_i.smoothstep(Z,0,260)*(1-_i.smoothstep(Z,We-420,We)):0,we=te?0:Math.sin(z*(.016+Me*.032))*Me*ze,_e=!te&&he>.66?Math.sin(z*(.008+he*.008))*(he-.66)/.34:0;l.position.set(S*.045+we*.025,x*.035+_e*.017,0),l.rotation.set(-x*.075+_e*.022,_i.clamp(S*.1+we*.46,-.53,.53),we*.065-S*.015);let de=z%5800,De=!te&&de<180?Math.sin(de/180*Math.PI)**2:0;Q.forEach(({eye:Ie,gaze:$e,baseX:Oe})=>{Ie.scale.y=(1-he*he*.48-fe*.25)*(1-De*.9);let se=Oe+S*.026,C=-.012-he*.012+x*.032;$e.position.set(se,C,.016*Math.sqrt(Math.max(.1,1-(se/.128)**2-(C/.166)**2))+.003)}),re.forEach((Ie,$e)=>{Ie.rotation.z=($e?-1:1)*(he*.44+F.heat*.16+fe*.18),Ie.position.y=.4+Se*.025+(F.cold||0)*.018}),I.visible=U.visible=Se>.05,$.opacity=1-Se,N.scale.value.set(.8+he*he*.55,.05+Se*(.72+F.heat*.25+he*.25)+_e*.07),(F.cold||0)>.04&&!F.scream&&he<=.66&&(I.visible=U.visible=!0,$.opacity=0,N.scale.value.set(.8+(te?0:Math.sin(z*.045)*(F.cold||0)*.035),.18+(F.cold||0)*.12)),ie.time.value=te?0:z,ie.strength.value=he,K.forEach(Ie=>{Ie.visible=he>.28}),ge.forEach(Ie=>{Ie.visible=he>.04,Ie.position.y=.006+he*he*.08,Ie.position.z=_(Ie.position.x,Ie.position.y,.022),Ie.scale.set(.08+he*he*.085,.004+he*.016,.007)}),Ve&&B&&s.render(r,o)}}}var er=class{constructor(){this.enabled=!1,this.context=null,this.last={heat:-1/0,shake:-1/0,tears:-1/0}}async prepare(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw new Error("Audio unavailable");this.context||(this.context=new e,this.master=this.context.createGain(),this.master.gain.value=0,this.master.connect(this.context.destination)),await this.context.resume()}async toggle(){return this.enabled?(this.enabled=!1,this.master.gain.cancelScheduledValues(this.context.currentTime),this.master.gain.setTargetAtTime(0,this.context.currentTime,.015),!1):(await this.prepare(),this.enabled=!0,this.master.gain.cancelScheduledValues(this.context.currentTime),this.master.gain.setTargetAtTime(.09,this.context.currentTime,.03),this.last={heat:-1/0,shake:-1/0,tears:-1/0},!0)}async cry(e=1){this.enabled?await this.context.resume():await this.toggle(),this.scream(Math.max(.5,e)),this.last.heat=performance.now()}tick(e,t){!this.enabled||document.hidden||this.context.state!=="running"||(e.scream&&t-this.last.heat>12e3&&(this.scream(e.heat),this.last.heat=t),e.shake>0&&t-this.last.shake>6500&&(this.rattle(e.shake),this.last.shake=t),e.tears>.66&&t-(this.last.sob??-1/0)>6500&&(this.sob(),this.last.sob=t),e.tears>.1&&t-this.last.tears>3e3/(.5+e.tears)&&(this.drop(e.tears),this.last.tears=t))}scream(e){let t=this.context,n=t.currentTime,s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(190,n),s.frequency.linearRampToValueAtTime(280,n+.3),s.frequency.linearRampToValueAtTime(210,n+1.25);let r=t.createOscillator(),o=t.createGain();r.frequency.value=6,o.gain.value=7,r.connect(o).connect(s.frequency);let a=t.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.2+e*.3,n+.15),a.gain.setValueAtTime(.2+e*.3,n+.8),a.gain.linearRampToValueAtTime(0,n+1.5),a.connect(this.master);let c=[720,1250,2600].map((l,h)=>{let u=t.createBiquadFilter();u.type="bandpass",u.frequency.value=l,u.Q.value=5;let f=t.createGain();return f.gain.value=[1,.5,.15][h],s.connect(u).connect(f).connect(a),[u,f]});s.start(n),r.start(n),s.stop(n+1.55),r.stop(n+1.55),s.onended=()=>{s.disconnect(),r.disconnect(),o.disconnect(),a.disconnect(),c.flat().forEach(l=>l.disconnect())}}rattle(e=1){let t=this.context,n=t.currentTime,s=t.createBuffer(1,Math.floor(t.sampleRate*.45),t.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/r.length*5);let o=t.createBufferSource();o.buffer=s;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=280;let c=t.createGain();c.gain.value=.15+e*.3,o.connect(a).connect(c).connect(this.master),o.start(n),o.onended=()=>{o.disconnect(),a.disconnect(),c.disconnect()}}drop(e=1){let t=this.context,n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(1050+e*300,n),s.frequency.exponentialRampToValueAtTime(480,n+.13),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.22,n+.008),r.gain.exponentialRampToValueAtTime(.001,n+.22),s.connect(r).connect(this.master),s.start(n),s.stop(n+.23),s.onended=()=>{s.disconnect(),r.disconnect()}}sob(){let e=this.context,t=e.currentTime,n=e.createOscillator(),s=e.createBiquadFilter(),r=e.createGain();n.type="triangle",s.type="lowpass",s.frequency.value=650,n.frequency.setValueAtTime(240,t),n.frequency.linearRampToValueAtTime(150,t+.9),r.gain.setValueAtTime(0,t);for(let o=0;o<3;o++){let a=t+o*.3;r.gain.linearRampToValueAtTime(.18,a+.05),r.gain.exponentialRampToValueAtTime(.001,a+.24)}n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+1),n.onended=()=>{n.disconnect(),s.disconnect(),r.disconnect()}}async visibility(e){this.context&&(e?await this.context.suspend():this.enabled&&await this.context.resume())}};var Ga={name:"New York",country:"United States",latitude:40.7128,longitude:-74.006};function Wa(i){let e=r=>typeof r=="string"?r.trim().slice(0,100):"";if(!i||typeof i!="object")return null;let t=e(i.country),n=e(i.region),s=e(i.locality);return t?{country:t,region:n,locality:s}:null}function Wi(i){if(!i||typeof i.name!="string"||!i.name.trim()||!Number.isFinite(i.latitude)||!Number.isFinite(i.longitude)||Math.abs(i.latitude)>90||Math.abs(i.longitude)>180)return null;let e=Wa(i.place);return{name:i.name.trim().slice(0,100),country:typeof i.country=="string"?i.country.slice(0,100):"",region:typeof(i.admin1||i.region)=="string"?(i.admin1||i.region).slice(0,100):"",latitude:i.latitude,longitude:i.longitude,...i.kind==="point"?{kind:"point",...["land","ocean","inland-water"].includes(i.surface)?{surface:i.surface}:{},...e?{place:e}:{}}:{}}}function f0(i){if(i?.error||!i||"results"in i&&!Array.isArray(i.results))throw new Error("Unexpected location response");return(i.results||[]).map(Wi).filter(Boolean)}function Xa(i){return"https://air-quality-api.open-meteo.com/v1/air-quality?"+new URLSearchParams({latitude:i.latitude,longitude:i.longitude,current:"us_aqi,pm2_5",timeformat:"unixtime",timezone:"GMT"})}function p0(i,e=Date.now()){let t=i?.current,n=i?.current_units;if(!t||!Number.isFinite(t.time)||Math.abs(e-t.time*1e3)>2*36e5)throw new Error("Missing or stale air-quality model");if(!Number.isFinite(t.us_aqi)||t.us_aqi<0||!Number.isFinite(t.pm2_5)||t.pm2_5<0||n?.us_aqi!=="USAQI"||n?.pm2_5?.replace("\xB5","\u03BC")!=="\u03BCg/m\xB3")throw new Error("Invalid air-quality values or units");return{aqi:t.us_aqi,pm25:t.pm2_5,time:t.time*1e3}}function fl(i){return i<=50?{label:"Good",colour:"#a8d8ad"}:i<=100?{label:"Moderate",colour:"#e5cc78"}:i<=150?{label:"Unhealthy for sensitive groups",colour:"#e7aa76"}:i<=200?{label:"Unhealthy",colour:"#e88784"}:i<=300?{label:"Very unhealthy",colour:"#c3a0d1"}:{label:"Hazardous",colour:"#c49aa8"}}function vi(i){if(!Number.isFinite(i)||i<0)return{label:"Waiting for data",stage:0,intensity:0,condition:"No fresh AQI is available.",effect:"No air-related fatigue is added."};let e=Math.max(0,Math.min(1,(i-50)/150));return i<=50?{label:"Comfortable",stage:0,intensity:e,condition:"AQI \u2264 50",effect:"The air reading adds no eye droop."}:i<=100?{label:"A little tired",stage:0,intensity:e,condition:"50 < AQI \u2264 100",effect:"The eyes begin to grow heavier."}:i<=150?{label:"Tired",stage:1,intensity:e,condition:"100 < AQI \u2264 150",effect:"The eyes droop more and the eyebrows tilt."}:{label:"Very tired",stage:2,intensity:e,condition:"AQI > 150",effect:"The eyes grow heavier, reaching maximum fatigue at AQI 200."}}var Xi=6;function Tt(i){return[i.name.toLowerCase(),i.country.toLowerCase(),i.latitude.toFixed(2),i.longitude.toFixed(2)].join("|")}function pl(i){if(!Array.isArray(i))return[];let e=[];return i.map(Wi).filter(Boolean).forEach(function(t){e.length<Xi&&!e.some(n=>Tt(n)===Tt(t))&&e.push(t)}),e}async function yi(i,e,t=fetch){let n=await t(i,{signal:e});if(!n.ok){let s=new Error("API request failed");throw s.status=n.status,s.receivedAt=Date.now(),s}try{return{payload:await n.json(),status:n.status,receivedAt:Date.now(),requestUrl:i}}catch(s){throw s.status=n.status,s.receivedAt=Date.now(),s}}async function ml(i,e,t=fetch){let n="https://geocoding-api.open-meteo.com/v1/search?"+new URLSearchParams({name:i,count:6,language:"en",format:"json"}),s=await yi(n,e,t);return{...s,cities:f0(s.payload)}}async function gl(i,e,t=fetch){let n=await yi(Xa(i),e,t);try{return{...n,reading:p0(n.payload)}}catch(s){throw Object.assign(s,n),s.invalidData=!0,s}}function tr(i){let e=`${Math.abs(i.latitude).toFixed(2)}\xB0 ${i.latitude<0?"S":"N"}`,t=`${Math.abs(i.longitude).toFixed(2)}\xB0 ${i.longitude<0?"W":"E"}`;return`${e}, ${t}`}function qa(i){return"https://api.open-meteo.com/v1/forecast?"+new URLSearchParams({latitude:i.latitude,longitude:i.longitude,current:"temperature_2m,precipitation,wind_speed_10m",temperature_unit:"celsius",wind_speed_unit:"kmh",precipitation_unit:"mm",timeformat:"unixtime",timezone:"GMT",cell_selection:"nearest"})}function m0(i,e=Date.now()){let t=i?.current,n=i?.current_units;if(!t||!Number.isFinite(t.time)||Math.abs(e-t.time*1e3)>2*36e5)throw new Error("Missing or stale point weather");if(n?.temperature_2m!=="\xB0C"||n?.precipitation!=="mm"||n?.wind_speed_10m!=="km/h")throw new Error("Unexpected weather units");if(!Number.isFinite(t.temperature_2m)||!Number.isFinite(t.precipitation)||t.precipitation<0||!Number.isFinite(t.interval)||t.interval<=0||!Number.isFinite(t.wind_speed_10m)||t.wind_speed_10m<0)throw new Error("Missing weather values");return{temperature:t.temperature_2m,rain:t.precipitation*3600/t.interval,wind:t.wind_speed_10m,time:t.time*1e3}}async function _l(i,e,t=fetch){let n=await yi(qa(i),e,t);try{return{...n,reading:m0(n.payload)}}catch(s){throw Object.assign(s,n),s.invalidData=!0,s}}function g0(i){return"https://photon.komoot.io/reverse?"+new URLSearchParams({lat:i.latitude,lon:i.longitude,lang:"en",limit:1,radius:20})}function _0(i){if(!Array.isArray(i?.features))throw new Error("Unexpected place response");let e=i.features[0]?.properties;if(!e)return null;let t=e.city||e.district||e.locality||(e.osm_key==="place"?e.name:"");return Wa({country:e.country,region:e.state||e.county,locality:t})}function nr(i){return i.kind==="point"?i.surface==="ocean"?"Ocean":i.place?xl([i.place.country,i.place.region,i.place.locality]):i.surface==="inland-water"?"Inland water":"Unnamed location":xl([i.country,i.region,i.name])}function xl(i){let e=new Set;return i.filter(t=>{if(!t)return!1;let n=t.trim().toLowerCase();return e.has(n)?!1:(e.add(n),!0)}).join(" \xB7 ")}async function vl(i,e,t=fetch){let n=await yi(g0(i),e,t);return{...n,place:_0(n.payload)}}function yl({onChange:i=()=>{},getSeaLevel:e=()=>null,onSelect:t=()=>{}}={}){let n=N=>document.getElementById(N),s=Ga,r=[],o=0,a=null,c=null,l=0,h=0,u=new Map;try{s=Wi(JSON.parse(localStorage.getItem("earth-air-city")))||Ga}catch{}try{r=pl(JSON.parse(localStorage.getItem("earth-favorite-cities")))}catch{}try{n("city-query").value=localStorage.getItem("earth-city-query")||""}catch{}function f(N,I){try{return localStorage.setItem(N,I),!0}catch{return!1}}function p(N){return new Date(N).toLocaleString("en-GB",{timeZone:"UTC"})+" UTC"}function g(N){i(N?{...N,city:s}:null)}function _(){n("air-city").textContent=nr(s),n("air-coordinates").textContent=tr(s)}function m(N){let I=vi(N?.aqi);n("air-mood").textContent=I.label,n("air-rule").textContent=I.condition,n("air-effect").textContent=I.effect,n("air-strength").textContent=N?`${Math.round(I.intensity*100)}% fatigue`:"\u2014",n("air-meter").hidden=!N,n("air-meter").value=I.intensity,n("air-meter").textContent=N?`${Math.round(I.intensity*100)}%`:""}function d(){n("air-response-state").textContent="Requesting\u2026",n("air-response-state").dataset.state="loading",n("air-http-status").textContent="Pending",n("air-received").textContent="\u2014",n("air-response-json").textContent="Waiting for an API response.",n("air-request-url").href=Xa(s)}function b(N){n("air-http-status").textContent=`HTTP ${N.status}`,n("air-received").textContent=p(N.receivedAt),n("air-response-json").textContent=JSON.stringify(N.payload,null,2),n("air-response-state").textContent=`HTTP ${N.status}`,n("air-response-state").dataset.state="success"}function v(){n("air-panel").dataset.mode=s.kind==="point"?"point":"city",_();let N=s.kind==="point"&&s.surface==="ocean";if(n("air-title").textContent=N?"A little ocean story":s.kind==="point"?"Point conditions":"City air",n("ocean-note").hidden=!N,N){let I=js(e());n("ocean-quote").textContent=I.phrases[0],n("ocean-observation").textContent=I.observation}n("air-selection-source").hidden=s.kind!=="point",n("air-aqi").textContent="\u2014",n("air-pm25").textContent="\u2014",n("air-band").textContent="Waiting",n("air-time").textContent="",n("air-open").textContent="Air",n("air-open").style.removeProperty("--air-colour"),n("air-band").style.removeProperty("--band-colour"),n("air-open").setAttribute("aria-label",`Search city air quality. Selected city: ${s.name}.`),m(null),g(null)}function T(N){let I=N.reading,U=fl(I.aqi);n("air-aqi").textContent=String(I.aqi),n("air-pm25").textContent=I.pm25.toFixed(1),n("air-band").textContent=U.label,n("air-band").style.setProperty("--band-colour",U.colour),n("air-open").textContent=`Air ${Math.round(I.aqi)}`,n("air-open").style.setProperty("--air-colour",U.colour),n("air-open").setAttribute("aria-label",`${s.name}: AQI ${Math.round(I.aqi)}. Search another city's air quality.`),n("air-time").textContent=`Model valid ${p(I.time)}`,n("air-status").textContent="",n("air-status").hidden=!0,b(N),m(I),g(I)}function P(){n("point-weather").hidden=s.kind!=="point",n("point-debug").hidden=s.kind!=="point";for(let N of["point-temperature","point-rain","point-wind"])n(N).textContent="\u2014";n("point-weather-time").textContent="",n("point-weather-state").textContent="Requesting\u2026",n("point-weather-state").dataset.state="loading",n("point-weather-status").textContent="",n("point-weather-status").hidden=!0,n("point-weather-received").textContent="",n("point-weather-json").textContent="Waiting for a weather response.",n("point-weather-request").href=qa(s)}async function A(N,I){try{let U=await gl(s,N.signal);if(I!==l)return;T(U)}catch(U){if(I!==l)return;U.payload&&b(U),n("air-response-state").textContent=U.status?`HTTP ${U.status} \xB7 unavailable`:N.signal.aborted?"Request timed out":"Network unavailable",n("air-response-state").dataset.state="error",n("air-http-status").textContent=U.status?`HTTP ${U.status}${U.invalidData?" \xB7 invalid or stale data":""}`:"No response received",U.receivedAt&&(n("air-received").textContent=p(U.receivedAt)),U.payload||(n("air-response-json").textContent="No usable JSON response is available."),n("air-band").textContent="Unavailable",n("air-status").hidden=!1,n("air-status").textContent=U.invalidData?"The response is missing valid, recent readings. No air-related fatigue is added.":"The air-quality API could not be reached. Retry or choose another location."}}async function E(N,I){try{let U=await _l(s,N.signal);if(I!==l)return;n("point-temperature").textContent=U.reading.temperature.toFixed(1),n("point-rain").textContent=U.reading.rain.toFixed(2),n("point-wind").textContent=U.reading.wind.toFixed(1),n("point-weather-state").textContent=`HTTP ${U.status}`,n("point-weather-state").dataset.state="success",n("point-weather-time").textContent=`Model valid ${p(U.reading.time)}`,n("point-weather-received").textContent=`Received ${p(U.receivedAt)}`,n("point-weather-json").textContent=JSON.stringify(U.payload,null,2)}catch(U){if(I!==l)return;n("point-weather-state").textContent=U.status?`HTTP ${U.status} \xB7 unavailable`:"Weather unavailable",n("point-weather-state").dataset.state="error",n("point-weather-status").hidden=!1,n("point-weather-status").textContent="No valid, recent weather is available for this point. Air quality is checked separately.",n("point-weather-json").textContent=U.payload?JSON.stringify(U.payload,null,2):"No usable weather response is available."}}async function q(N,I){if(s.surface==="ocean"||s.place)return;let U=s,$=`${U.latitude},${U.longitude}`;try{if(!u.has($)){n("air-city").textContent="Finding this place\u2026";let ie=await vl(U,N.signal);if(I!==l)return;ie.place&&(u.size>=50&&u.delete(u.keys().next().value),u.set($,ie.place))}if(I!==l)return;let J=u.get($);J&&(s={...s,place:J},f("earth-air-city",JSON.stringify(s)),r=r.map(ie=>Tt(ie)===Tt(s)?{...ie,place:J}:ie),r.some(ie=>Tt(ie)===Tt(s))&&X(),w()),_()}catch{I===l&&_()}}async function y(N=!1){if(!N&&Date.now()-o<9e5)return;o=Date.now(),a?.abort(),a=new AbortController;let I=a,U=++l;v(),d(),P(),n("air-status").textContent="",n("air-status").hidden=!0,n("air-refresh").disabled=!0;let $=setTimeout(()=>I.abort(),12e3);try{await Promise.all([A(I,U),...s.kind==="point"?[E(I,U),q(I,U)]:[]])}finally{clearTimeout($),U===l&&(n("air-refresh").disabled=!1)}}function w(){n("favorite-cities").replaceChildren(),n("favorites-empty").hidden=r.length>0,n("favorite-count").textContent=`${r.length} / ${Xi}`,r.forEach(function(I){let U=document.createElement("li");U.className="favorite-city";let $=document.createElement("button");$.type="button",$.className="favorite-select",$.textContent=I.kind==="point"&&!I.place&&I.surface!=="ocean"?I.name:nr(I),$.title=`${nr(I)} \xB7 ${tr(I)}`,$.setAttribute("aria-pressed",String(Tt(I)===Tt(s))),$.addEventListener("click",function(){R(I)});let J=document.createElement("button");J.type="button",J.className="favorite-remove",J.textContent="\xD7",J.setAttribute("aria-label",`Remove ${I.name} from saved places`),J.addEventListener("click",function(){re(I),n("favorite-toggle").focus()}),U.append($,J),n("favorite-cities").append(U)});let N=r.some(I=>Tt(I)===Tt(s));n("favorite-toggle").textContent=N?"Saved \u2713":"Save +",n("favorite-toggle").setAttribute("aria-pressed",String(N)),n("favorite-toggle").setAttribute("aria-label",N?`Remove ${s.name} from saved places`:`Save ${s.name}`),n("favorite-toggle").disabled=!N&&r.length>=Xi}function X(){return f("earth-favorite-cities",JSON.stringify(r))}function Q(){if(r.some(I=>Tt(I)===Tt(s))){re(s);return}if(r.length>=Xi)return;r.push({...s});let N=X();w(),n("favorites-status").textContent=N?`${s.name} saved. Your places return on your next visit.`:`${s.name} added for this visit. Browser storage is unavailable.`}function re(N){r=r.filter(U=>Tt(U)!==Tt(N));let I=X();w(),n("favorites-status").textContent=I?`${N.name} removed from saved places.`:`${N.name} removed for this visit. Browser storage is unavailable.`}function R(N){return h++,c?.abort(),s=N,f("earth-air-city",JSON.stringify(s)),t(s),n("place-tools").open=!1,n("api-inspector").open=!1,n("air-body").scrollTop=0,n("air-panel").open&&n("air-title").focus(),n("city-results").replaceChildren(),n("city-search-status").textContent="",n("favorites-status").textContent="",w(),y(!0)}function O(N){let I=Wi({name:"Selected point",kind:"point",latitude:N?.latitude,longitude:N?.longitude,surface:N?.surface});if(I)return I.name=tr(I),n("air-panel").open||n("air-panel").showModal(),n("air-body").scrollTop=0,n("air-title").focus(),R(I)}async function Y(N){N.preventDefault();let I=n("city-query").value.trim();c?.abort();let U=++h;if(n("city-results").replaceChildren(),I.length<2){n("city-search-status").textContent="Enter at least two characters.";return}c=new AbortController;let $=c,J=setTimeout(()=>$.abort(),12e3);n("city-search-status").textContent="Searching cities\u2026";try{let ie=await ml(I,$.signal);if(U!==h)return;n("city-search-status").textContent=ie.cities.length?"Choose a city:":"No matching city. Try another name or add a country.",ie.cities.forEach(function(W){let K=document.createElement("li"),oe=document.createElement("button");oe.type="button",oe.textContent=[W.name,W.region!==W.name?W.region:"",W.country].filter(Boolean).join(", "),oe.addEventListener("click",function(){R(W)}),K.append(oe),n("city-results").append(K)})}catch{U===h&&(n("city-search-status").textContent="City search is unavailable. Try again.")}finally{clearTimeout(J)}}return n("city-query").addEventListener("input",function(){f("earth-city-query",n("city-query").value),h++,c?.abort(),n("city-results").replaceChildren(),n("city-search-status").textContent=""}),n("city-form").addEventListener("submit",Y),n("favorite-toggle").addEventListener("click",Q),n("air-open").addEventListener("click",function(){n("air-panel").showModal(),n("place-tools").open=!0,n("air-body").scrollTop=0,n("city-query").focus()}),n("air-close").addEventListener("click",function(){n("air-panel").close()}),n("air-refresh").addEventListener("click",function(){y(!0)}),n("air-panel").addEventListener("close",function(){h++,c?.abort()}),v(),P(),w(),n("air-response-state").textContent="Not requested",{refresh:y,selectPoint:O}}var Ml="https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",Sl="https://science.nasa.gov/earth/explore/earth-indicators/sea-leve/",bl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",Ya={temperature:{value:1.38,previous:1.42,date:"2026-09",saved:!0},sea:{value:115.8,uncertainty:4,date:"2026-10",saved:!0}},qi=[-75,-45,-15,15,45,75].flatMap(i=>[-150,-90,-30,30,90,150].map(e=>({latitude:i,longitude:e,weight:Math.cos(i*Math.PI/180)}))),El="https://api.open-meteo.com/v1/forecast?"+new URLSearchParams({latitude:qi.map(i=>i.latitude).join(","),longitude:qi.map(i=>i.longitude).join(","),current:"precipitation",timezone:"GMT",timeformat:"unixtime",precipitation_unit:"mm",cell_selection:"nearest"});function wl(i,e=Date.now()){if(!i.includes("Land-Ocean: Global Means")||!i.includes("Year,Jan,Feb"))throw new Error("Unexpected global temperature source");let t=[];for(let n of i.split(/\r?\n/)){let s=n.split(","),r=Number(s[0]);if(!(!Number.isInteger(r)||r<1880||r>new Date(e).getUTCFullYear()))for(let o=1;o<=12;o++){let a=s[o]?.trim(),c=Number(a);!a||!Number.isFinite(c)||Math.abs(c)>10||Date.UTC(r,o-1,1)>e||t.push({date:`${r}-${String(o).padStart(2,"0")}`,value:c})}}if(t.sort((n,s)=>n.date.localeCompare(s.date)),t.length<2)throw new Error("Missing temperature observations");return{...t.at(-1),previous:t.at(-2).value,saved:!1}}function Tl(i){let e=new DOMParser().parseFromString(i,"text/html");e.querySelectorAll("script,style").forEach(c=>c.remove());let t=e.body.textContent.replace(/\s+/g," "),n=t.match(/Latest Measurement\s*([\d.]+)\s*(?:\(±\s*[\d.]+\))?\s*mm/i),s=t.match(/Latest Measurement Date\s*([A-Za-z]+)\s+(20\d\d)/i);if(!n||!s)throw new Error("Missing sea-level observation");let r=["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(s[1].toLowerCase())+1,o=Number(n[1]);if(!r||!Number.isFinite(o)||o<0||o>1e3)throw new Error("Unexpected sea-level observation");let a=`${s[2]}-${String(r).padStart(2,"0")}`;if(Date.parse(a+"-01")>Date.now())throw new Error("Future sea-level observation");return{value:o,date:a,saved:!1}}function Al(i,e=Date.now()){if(!Array.isArray(i)||i.length!==qi.length)throw new Error("Incomplete rain grid");let t=0,n=0,s=[];return i.forEach((r,o)=>{let a=r.current;if(r.current_units?.precipitation!=="mm"||!Number.isFinite(a?.precipitation)||a.precipitation<0||!Number.isFinite(a.interval)||a.interval<=0||!Number.isFinite(a.time))throw new Error("Invalid rain sample");if(Math.abs(e-a.time*1e3)>2*36e5)throw new Error("Stale rain grid");t+=a.precipitation*3600/a.interval*qi[o].weight,n+=qi[o].weight,s.push(a.time*1e3)}),{value:t/n,time:Math.min(...s),count:i.length}}function Cl(i,e=Date.now()){if(i.type!=="FeatureCollection"||!Array.isArray(i.features)||!Number.isFinite(i.metadata?.generated))throw new Error("Invalid earthquake feed");if(Math.abs(e-i.metadata.generated)>15*6e4)throw new Error("Stale earthquake feed");let t=i.features.filter(r=>r.properties?.type==="earthquake"&&Number.isFinite(r.properties.time)),n=t.filter(r=>r.properties.time>e-36e5&&r.properties.time<=e).length,s=t.filter(r=>r.properties.time>e-72e5&&r.properties.time<=e-36e5).length;return{current:n,previous:s,time:i.metadata.generated}}function $a(i){let e=Number.isFinite(i.temperature?.value)?i.temperature.value:0,t=Math.max(0,Math.min(1,e/1.5)),n=Math.max(0,Math.min(1,-e/1.5)),s=i.quakes&&i.quakes.current>i.quakes.previous?Math.min(1,(i.quakes.current-i.quakes.previous)/Math.max(1,i.quakes.previous)):0,r=i.rain?Math.min(1,i.rain.value/.5):0,o=i.sea?Math.min(1,i.sea.value/200):0,a=vi(i.air?.aqi).intensity;return{heat:t,cold:n,shake:s,air:a,tears:Math.min(1,r*.75+o*.45),scream:t>2/3}}var Ue=i=>document.getElementById(i),Za=matchMedia("(prefers-reduced-motion: reduce)").matches,x0=matchMedia("(pointer:coarse)"),Pe={temperature:{...Ya.temperature},sea:{...Ya.sea},rain:null,quakes:null,air:null},Jt={temperature:{busy:!1,checked:0,failed:!1},sea:{busy:!1,checked:0,failed:!1},rain:{busy:!1,checked:0,failed:!1},quakes:{busy:!1,checked:0,failed:!1}},v0={temperature:864e5,sea:864e5,rain:9e5,quakes:6e4},y0={temperature:wl,sea:Tl,rain:Al,quakes:Cl},M0={temperature:Ml,sea:Sl,rain:El,quakes:bl},$i=new er,Bn=null,Ja=0,Ka=0,Qa=0,to=0,no=0,Rl="",rr=!1,ao=0,Yi=0;function io(i,e){Ue(i).textContent!==e&&(Ue(i).textContent=e)}var ir=i=>new Date(i+"-01T00:00:00Z").toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"UTC"}),ja=i=>new Date(i).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})+" UTC";function sr(i,e,t=""){let n=Ue(i);if(n.textContent===e+t)return;let s=[document.createTextNode(e)];if(t){let r=document.createElement("span");r.className="reading-unit",r.textContent=t,s.push(r)}n.replaceChildren(...s)}function Pl(i){Ue("sound").setAttribute("aria-pressed",String(i)),Ue("sound").setAttribute("aria-label",i?"Turn sound off":"Turn sound on");let e=i?'<path d="M15 8a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14"/>':'<path d="m16 9 5 6m0-6-5 6"/>';Ue("sound").innerHTML=`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/>${e}</svg><span class="sound-label">Sound ${i?"on":"off"}</span>`}function so(){if(sr("temperature-value",`${Pe.temperature.value>=0?"+":""}${Pe.temperature.value.toFixed(2)}`,"\xB0C"),Ue("temperature-date").textContent=ir(Pe.temperature.date)+(Pe.temperature.saved?" \xB7 saved":""),Ue("temperature-source-note").textContent=`Shown: ${ir(Pe.temperature.date)}${Pe.temperature.saved?" (saved observation; direct refresh unavailable or pending)":""}.`,sr("sea-value",`+${Pe.sea.value.toFixed(1)}`,"mm"),Ue("sea-date").textContent=ir(Pe.sea.date)+(Pe.sea.saved?" \xB7 saved":""),Ue("sea-source-note").textContent=`Shown: ${ir(Pe.sea.date)}${Pe.sea.saved?" (saved observation; direct refresh unavailable or pending)":""}.`,sr("quake-value",Pe.quakes?String(Pe.quakes.current):"\u2014","/h"),Pe.quakes){let n=Pe.quakes.current-Pe.quakes.previous;Ue("quake-change").textContent=`${n>=0?"+":""}${n} vs prior hour${Jt.quakes.failed?" \xB7 old data":""}`}else Ue("quake-change").textContent=Jt.quakes.failed?"feed unavailable":"last hour";Ue("quake-source-note").textContent=Pe.quakes?`Feed generated ${ja(Pe.quakes.time)}; ${Pe.quakes.current} events vs ${Pe.quakes.previous} in the preceding hour${Jt.quakes.failed?"; latest refresh failed":""}.`:"Feed unavailable or pending; no automatic shaking without data.",sr("rain-value",Pe.rain?Pe.rain.value.toFixed(2):"\u2014","mm/h"),Ue("rain-date").textContent=Pe.rain?`${ja(Pe.rain.time)}${Jt.rain.failed?" \xB7 old":""}`:Jt.rain.failed?"Feed unavailable":"36-point estimate",Ue("rain-source-note").textContent=Pe.rain?`Model valid ${ja(Pe.rain.time)}; 36/36 samples${Jt.rain.failed?"; latest refresh failed":""}.`:"Model unavailable or pending; rain adds no tears until data arrives.";let i=Object.values(Jt).some(n=>n.busy),e=Object.values(Jt).some(n=>n.failed),t=Pe.temperature.saved||Pe.sea.saved;Ue("feed-status").textContent=i?"Checking observations\u2026":e?"Some sources unavailable":t?"Live + dated observations":"Observations connected",document.querySelector(".data-status").dataset.state=i?"checking":e||t?"mixed":"connected",Ue("refresh").disabled=i}async function S0(i,e=!1){let t=Jt[i];if(t.busy||!e&&Date.now()-t.checked<v0[i])return;t.busy=!0,t.checked=Date.now(),so();let n=new AbortController,s=setTimeout(()=>n.abort(),15e3);try{let r=await fetch(M0[i],{signal:n.signal});if(!r.ok)throw new Error("Source unavailable");let o=["temperature","sea"].includes(i)?await r.text():await r.json(),a=y0[i](o);if(["temperature","sea"].includes(i)&&a.date<Pe[i].date)throw new Error("Older climate source");Pe[i]=a,t.failed=!1}catch{t.failed=!0}finally{clearTimeout(s),t.busy=!1,so()}}function ar(i=!1){return Promise.all([...Object.keys(Jt).map(e=>S0(e,i)),Dl.refresh(i)])}function Ll(){let i=$a(Pe);return Pe.rain&&Date.now()-Pe.rain.time>2*36e5&&(i.tears=$a({...Pe,rain:null}).tears),Pe.quakes&&Date.now()-Pe.quakes.time>15*6e4&&(i.shake=0),Pe.air&&Date.now()-Pe.air.time>2*36e5&&(i.air=0),i}function Il(i){if(requestAnimationFrame(Il),document.hidden||i-Ja<32)return;let e=Math.min(50,i-Ja);Ja=i;let t=Ll();Ka+=(t.heat-Ka)*(Za?1:1-Math.exp(-e*.003)),Qa+=(t.cold-Qa)*(Za?1:1-Math.exp(-e*.003)),Bn&&Bn.draw({...t,heat:Ka,cold:Qa,scream:t.scream||i<to},i,Za);let n=_=>_>.66?2:_>.28?1:0,s=Pe.air&&Date.now()-Pe.air.time<=2*36e5,r=n(t.heat),o=n(t.cold),a=n(t.tears),c=n(t.shake),l=vi(s?Pe.air.aqi:void 0).stage,h=[];t.heat>.05&&h.push(...[["\u201CIs it getting warm, or is it me?\u201D","\u201CA little shade would be nice.\u201D"],["\u201CCould someone turn the heat down?\u201D","\u201CI could really use a cool breeze.\u201D"],["\u201CIt\u2019s too hot in here.\u201D","\u201CI\u2019m burning up!\u201D","\u201CThis is more than a bad fever.\u201D"]][r]),t.cold>.02&&h.push(...[["\u201CBrrr. It\u2019s getting chilly.\u201D","\u201CCould I borrow a blanket?\u201D"],["\u201CI can\u2019t feel my oceans.\u201D","\u201CSomeone turn the heating on.\u201D"],["\u201CI\u2019m freezing over!\u201D","\u201CThat\u2019s ice. Everywhere.\u201D"]][o]),t.shake>0&&h.push(...[["\u201CSomething\u2019s making me restless.\u201D","\u201CA little unsteady today.\u201D"],["\u201CNo. No. No.\u201D","\u201CI can\u2019t keep my head still.\u201D"],["\u201CEverything is shaking!\u201D","\u201CPlease, give me a moment to settle.\u201D"]][c]),t.tears>.04&&h.push(...[["\u201CJust a little teary today.\u201D","\u201CI think I need a tissue.\u201D"],["\u201CI\u2019m a little overwhelmed.\u201D","\u201CThe water keeps coming.\u201D"],["\u201CI can\u2019t stop crying.\u201D","\u201CThat\u2019s a whole ocean of feelings.\u201D","\u201CI\u2019m trying to hold it together.\u201D"]][a]),s&&(t.air>0?h.push(...[["\u201CThe air feels a little heavy.\u201D","\u201CI could use some fresh air.\u201D"],["\u201CBreathing feels like hard work.\u201D","\u201CMy eyes could use a break.\u201D"],["\u201CThat air is wearing me out.\u201D","\u201CI really need a clearer sky.\u201D"]][l]):h.push("\u201CA little room to breathe.\u201D")),h.length||h.push("\u201CStill here.\u201D","\u201CA quiet moment. Finally.\u201D");let u=`${l}:${!!s}:${o}:${r}:${a}:${c}:${t.shake>0}:${t.tears>.04}`;u!==Rl&&(Rl=u,no=0);let f=rr&&i<Yi,p=f?js(Pe.sea):null;io("feeling",i<to?"Aaaah!":f?p.phrases[ao%p.phrases.length]:h[no%h.length].replace(/[“”]/g,"")),Ue("speech").lang="en",io("reaction-note",x0.matches?"Drag \xB7 Double-tap to inspect":"Drag \xB7 Double-click to inspect");let g=`A blue 3D Earth face is ${t.cold>.02?"freezing with frost at intensity "+(o+1):t.scream?"surrounded by a warm atmosphere and opening its mouth":"surrounded by a temperature-coloured atmosphere"}, ${t.shake>0?"shaking its head at intensity "+(c+1):"not shaking"}, and ${t.tears>.04?"crying at intensity "+(a+1):"not crying"}. Reactions happen together, based on the displayed observations. Drag to turn through 360 degrees, arrow keys to turn, Home to reset, press I to inspect the centre point, double-click or double-tap a point for local conditions, or click or press Enter to hear its voice. City air quality: ${s?t.air>0?"a tired expression at intensity "+(l+1):"no added tiredness":"unavailable or stale"}.`;Ue("planet").getAttribute("aria-label")!==g&&Ue("planet").setAttribute("aria-label",g),$i.tick(t,i)}var Ul=matchMedia("(max-width:950px)");function b0(i,e,t,n){let s=i.offsetWidth,r=i.offsetHeight;if(!s||!r)return;let o=1.5,a=s-o,c=r-o,l=s/2,h=r/2,u=Math.min(23,(r-30)/2,s/4),f=`M ${o+u} ${o} H ${a-u} Q ${a} ${o} ${a} ${o+u} V ${c-u} Q ${a} ${c} ${a-u} ${c}`;n&&(f+=` H ${l+16} C ${l+8} ${c} ${l+7} ${c+6} ${l+2} ${c+14} Q ${l} ${c+18} ${l-2} ${c+14} C ${l-7} ${c+6} ${l-8} ${c} ${l-16} ${c}`),f+=` H ${o+u} Q ${o} ${c} ${o} ${c-u}`,n||(f+=` V ${h+14} C ${o} ${h+7} -4 ${h+6} -14 ${h+2} Q -18 ${h} -14 ${h-2} C -4 ${h-6} ${o} ${h-7} ${o} ${h-14}`),f+=` V ${o+u} Q ${o} ${o} ${o+u} ${o} Z`,e.setAttribute("viewBox",`0 0 ${s} ${r}`),t.setAttribute("d",f)}function oo(){b0(Ue("speech"),Ue("speech-shape"),Ue("speech-outline"),Ul.matches)}new ResizeObserver(oo).observe(Ue("speech"));Ul.addEventListener("change",oo);oo();var Dl=yl({onChange:i=>{Pe.air=i},getSeaLevel:()=>Pe.sea,onSelect:i=>{rr=i.surface==="ocean",ao=0,Yi=performance.now()+2e4}});function E0(i){Dl.selectPoint(i)}Ue("air-panel").addEventListener("close",()=>{rr&&(Yi=performance.now()+15e3)});Ue("reset-view").addEventListener("click",()=>Bn?.resetView());var eo=!1;async function ro(){if(!eo){eo=!0;try{await $i.cry(Ll().heat),to=performance.now()+1500,Pl(!0)}catch{io("reaction-note","Sound is unavailable in this browser.")}finally{eo=!1}}}Ue("planet").addEventListener("keydown",i=>{i.key==="Enter"||i.key===" "?(i.preventDefault(),ro()):i.key.toLowerCase()==="i"?(i.preventDefault(),Bn?.inspectCenter()):i.key==="Home"?(i.preventDefault(),Bn?.resetView()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)&&(i.preventDefault(),Bn?.turnView(i.key==="ArrowLeft"?-.18:i.key==="ArrowRight"?.18:0,i.key==="ArrowUp"?-.12:i.key==="ArrowDown"?.12:0))});Ue("speech").addEventListener("click",()=>{rr&&performance.now()<Yi?(ao++,Yi=performance.now()+2e4):no++});Ue("sound").addEventListener("click",async()=>{try{Pl(await $i.toggle())}catch{Ue("sound").setAttribute("aria-label","Sound unavailable"),Ue("sound").title="Sound unavailable"}});Ue("refresh").addEventListener("click",()=>ar(!0));Ue("info-open").addEventListener("click",()=>Ue("info").showModal());Ue("info-close").addEventListener("click",()=>Ue("info").close());Ue("info").addEventListener("click",i=>{let e=Ue("info").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&Ue("info").close()});document.addEventListener("visibilitychange",()=>{$i.visibility(document.hidden).catch(()=>{}),document.hidden||ar()});setInterval(()=>{document.hidden||ar()},6e4);try{Bn=dl(Ue("globe"),{onEarthClick:ro,onPointSelect:E0,onGesture:()=>{$i.prepare().catch(()=>{})}})}catch{Ue("planet").classList.add("fallback"),Ue("globe").addEventListener("click",ro),Ue("globe").innerHTML='<svg viewBox="0 0 400 400" width="100%" height="100%"><circle cx="200" cy="200" r="148" fill="#246386"/><path d="M68 135L105 90 151 100 142 138 120 164 132 205 95 230 63 183M284 100L329 150 329 218 284 257 266 209 285 158Z" fill="#719377"/><ellipse cx="160" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="240" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="164" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="236" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="200" cy="255" rx="23" ry="29" fill="#352631"/></svg>'}so();ar();requestAnimationFrame(Il);})();
/*! For license information please see app.js.LEGAL.txt */
