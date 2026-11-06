(()=>{var jc=0,Ha=1,el=2;var pc=1,tl=2,nn=3,vn=0,Tt=1,Vt=2;var gn=0,ii=1,Ga=2,Wa=3,Xa=4,nl=5,Cn=100,il=101,sl=102,qa=103,Ya=104,rl=200,al=201,ol=202,cl=203,Cr=204,Pr=205,ll=206,hl=207,ul=208,dl=209,fl=210,pl=211,ml=212,gl=213,_l=214,xl=0,vl=1,yl=2,ds=3,Ml=4,Sl=5,bl=6,El=7,mc=0,wl=1,Tl=2,_n=0,Al=1,Rl=2,Cl=3,Pl=4,Ll=5,Il=6;var gc=300,ai=301,oi=302,Lr=303,Ir=304,ks=306,Ur=1e3,Ht=1001,Dr=1002,bt=1003,$a=1004;var Qs=1005;var Ut=1006,Ul=1007;var Ri=1008;var xn=1009,Dl=1010,Nl=1011,xa=1012,_c=1013,pn=1014,mn=1015,Ci=1016,xc=1017,vc=1018,Ln=1020,Ol=1021,Gt=1023,Fl=1024,Bl=1025,In=1026,ci=1027,zl=1028,yc=1029,kl=1030,Mc=1031,Sc=1033,Js=33776,Ks=33777,js=33778,er=33779,Za=35840,Qa=35841,Ja=35842,Ka=35843,bc=36196,ja=37492,eo=37496,to=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,co=37815,lo=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,tr=36492,go=36494,_o=36495,Vl=36283,xo=36284,vo=36285,yo=36286;var fs=2300,ps=2301,nr=2302,Mo=2400,So=2401,bo=2402;var Ec=3e3,Un=3001,Hl=3200,Gl=3201,Wl=0,Xl=1,Dt="",st="srgb",an="srgb-linear",va="display-p3",Vs="display-p3-linear",ms="linear",Je="srgb",gs="rec709",_s="p3";var Fn=7680;var Eo=519,ql=512,Yl=513,$l=514,wc=515,Zl=516,Ql=517,Jl=518,Kl=519,wo=35044;var To="300 es",Nr=1035,rn=2e3,xs=2001,yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=1234567,Si=Math.PI/180,Pi=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function ya(i,e){return(i%e+e)%e}function jl(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eh(i,e,t){return i!==e?(t-i)/(e-i):0}function bi(i,e,t){return(1-t)*i+t*e}function th(i,e,t,n){return bi(i,e,1-Math.exp(-t*n))}function nh(i,e=1){return e-Math.abs(ya(i,e*2)-e)}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ah(i,e){return i+Math.random()*(e-i)}function oh(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(Ao=i);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*Si}function hh(i){return i*Pi}function Or(i){return(i&i-1)===0&&i!==0}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dh(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mi={DEG2RAD:Si,RAD2DEG:Pi,generateUUID:pi,clamp:pt,euclideanModulo:ya,mapLinear:jl,inverseLerp:eh,lerp:bi,damp:th,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:ch,degToRad:lh,radToDeg:hh,isPowerOfTwo:Or,ceilPowerOfTwo:uh,floorPowerOfTwo:vs,setQuaternionFromProperEuler:dh,normalize:Mt,denormalize:jn},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],u=s[6],b=s[1],v=s[4],w=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*x+a*b+c*L,r[3]=o*p+a*v+c*T,r[6]=o*u+a*w+c*A,r[1]=l*x+h*b+d*L,r[4]=l*p+h*v+d*T,r[7]=l*u+h*w+d*A,r[2]=f*x+m*b+g*L,r[5]=f*p+m*v+g*T,r[8]=f*u+m*w+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ir=new He;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){let i=ys("canvas");return i.style.display="block",i}var Ro={};function Ei(i){i in Ro||(Ro[i]=!0,console.warn(i))}var Co=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Po=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[an]:{transfer:ms,primaries:gs,toReference:i=>i,fromReference:i=>i},[st]:{transfer:Je,primaries:gs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vs]:{transfer:ms,primaries:_s,toReference:i=>i.applyMatrix3(Po),fromReference:i=>i.applyMatrix3(Co)},[va]:{transfer:Je,primaries:_s,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Po),fromReference:i=>i.applyMatrix3(Co).convertLinearToSRGB()}},ph=new Set([an,Vs]),Ye={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ph.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Hi[e].toReference,s=Hi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hi[i].primaries},getTransfer:function(i){return i===Dt?ms:Hi[i].transfer}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bn,Ms=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=ys("canvas")),Bn.width=e.width,Bn.height=e.height;let n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mh=0,Ss=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rr(s[o].image)):r.push(rr(s[o]))}else r=rr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ms.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gh=0,Ft=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ht,s=Ht,r=Ut,o=Ri,a=Gt,c=xn,l=i.DEFAULT_ANISOTROPY,h=Dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=pi(),this.name="",this.source=new Ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?st:Dt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?Un:Ec}set encoding(e){Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?st:Dt}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=gc;Ft.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,w=(m+1)/2,L=(u+1)/2,T=(h+f)/4,A=(d+x)/4,W=(g+p)/4;return v>w&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=A/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=W/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=W/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr=class extends yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?st:Dt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ss(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Fr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==m||h!==g){let p=1-a,u=c*f+l*m+h*g+d*x,b=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let L=Math.sqrt(v),T=Math.atan2(L,u*b);p=Math.sin(p*T)/L,a=Math.sin(a*T)/L}let w=a*b;if(c=c*p+f*w,l=l*p+m*w,h=h*p+g*w,d=d*p+x*w,p===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-a*m,e[t+2]=l*g+h*m+a*f-c*d,e[t+3]=h*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ar=new P,Lo=new Mn,Dn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bt):Bt.fromBufferAttribute(r,o),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Wi.subVectors(this.max,xi),zn.subVectors(e.a,xi),kn.subVectors(e.b,xi),Vn.subVectors(e.c,xi),ln.subVectors(kn,zn),hn.subVectors(Vn,kn),En.subVectors(zn,Vn);let t=[0,-ln.z,ln.y,0,-hn.z,hn.y,0,-En.z,En.y,ln.z,0,-ln.x,hn.z,0,-hn.x,En.z,0,-En.x,-ln.y,ln.x,0,-hn.y,hn.x,0,-En.y,En.x,0];return!or(t,zn,kn,Vn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!or(t,zn,kn,Vn,Wi))?!1:(Xi.crossVectors(ln,hn),t=[Xi.x,Xi.y,Xi.z],or(t,zn,kn,Vn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jt=[new P,new P,new P,new P,new P,new P,new P,new P],Bt=new P,Gi=new Dn,zn=new P,kn=new P,Vn=new P,ln=new P,hn=new P,En=new P,xi=new P,Wi=new P,Xi=new P,wn=new P;function or(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wn.fromArray(i,r);let a=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),c=e.dot(wn),l=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _h=new Dn,vi=new P,cr=new P,Li=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);let t=vi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(cr)),this.expandByPoint(vi.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kt=new P,lr=new P,qi=new P,un=new P,hr=new P,Yi=new P,ur=new P,zr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),un.copy(this.origin).sub(lr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qi),a=un.dot(this.direction),c=-un.dot(qi),l=un.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lr).addScaledVector(qi,f),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);let n=Kt.dot(this.direction),s=Kt.dot(Kt)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,s,r){hr.subVectors(t,e),Yi.subVectors(n,e),ur.crossVectors(hr,Yi);let o=this.direction.dot(ur),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,e);let c=a*this.direction.dot(Yi.crossVectors(un,Yi));if(c<0)return null;let l=a*this.direction.dot(hr.cross(un));if(l<0||c+l>o)return null;let h=-a*un.dot(ur);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,f,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,f,m,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,d,f,m,g,x,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Hn.setFromMatrixColumn(e,0).length(),r=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,m=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,vh)}lookAt(e,t,n){let s=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),dn.crossVectors(n,Rt),dn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),dn.crossVectors(n,Rt)),dn.normalize(),$i.crossVectors(Rt,dn),s[0]=dn.x,s[4]=$i.x,s[8]=Rt.x,s[1]=dn.y,s[5]=$i.y,s[9]=Rt.y,s[2]=dn.z,s[6]=$i.z,s[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],b=n[3],v=n[7],w=n[11],L=n[15],T=s[0],A=s[4],W=s[8],S=s[12],E=s[1],N=s[5],$=s[9],re=s[13],C=s[2],B=s[6],V=s[10],q=s[14],G=s[3],H=s[7],J=s[11],ee=s[15];return r[0]=o*T+a*E+c*C+l*G,r[4]=o*A+a*N+c*B+l*H,r[8]=o*W+a*$+c*V+l*J,r[12]=o*S+a*re+c*q+l*ee,r[1]=h*T+d*E+f*C+m*G,r[5]=h*A+d*N+f*B+m*H,r[9]=h*W+d*$+f*V+m*J,r[13]=h*S+d*re+f*q+m*ee,r[2]=g*T+x*E+p*C+u*G,r[6]=g*A+x*N+p*B+u*H,r[10]=g*W+x*$+p*V+u*J,r[14]=g*S+x*re+p*q+u*ee,r[3]=b*T+v*E+w*C+L*G,r[7]=b*A+v*N+w*B+L*H,r[11]=b*W+v*$+w*V+L*J,r[15]=b*S+v*re+w*q+L*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*m-n*c*m)+x*(+t*c*m-t*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+u*(-s*a*h-t*c*d+t*a*f+s*o*d-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],b=d*p*l-x*f*l+x*c*m-a*p*m-d*c*u+a*f*u,v=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,w=h*x*l-g*d*l+g*a*m-o*x*m-h*a*u+o*d*u,L=g*d*c-h*x*c-g*a*f+o*x*f+h*a*p-o*d*p,T=t*b+n*v+s*w+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(x*f*r-d*p*r-x*s*m+n*p*m+d*s*u-n*f*u)*A,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*u+n*c*u)*A,e[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*m-n*c*m)*A,e[4]=v*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*u-t*c*u)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*m+t*c*m)*A,e[8]=w*A,e[9]=(g*d*r-h*x*r-g*n*m+t*x*m+h*n*u-t*d*u)*A,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*A,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(h*x*s-g*d*s+g*n*f-t*x*f-h*n*p+t*d*p)*A,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*p-t*a*p)*A,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,f=r*l,m=r*h,g=r*d,x=o*h,p=o*d,u=a*d,b=c*l,v=c*h,w=c*d,L=n.x,T=n.y,A=n.z;return s[0]=(1-(x+u))*L,s[1]=(m+w)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(f+u))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+v)*A,s[9]=(p-b)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Hn.set(s[0],s[1],s[2]).length(),o=Hn.set(s[4],s[5],s[6]).length(),a=Hn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zt.copy(this);let l=1/r,h=1/o,d=1/a;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=d,zt.elements[9]*=d,zt.elements[10]*=d,t.setFromRotationMatrix(zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=rn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===rn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=rn){let c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*l,m=(n+s)*h,g,x;if(a===rn)g=(o+r)*d,x=-2*d;else if(a===xs)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hn=new P,zt=new rt,xh=new P(0,0,0),vh=new P(1,1,1),dn=new P,$i=new P,Rt=new P,Io=new rt,Uo=new Mn,Es=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yh=0,Do=new P,Gn=new Mn,jt=new rt,Zi=new P,yi=new P,Mh=new P,Sh=new Mn,No=new P(1,0,0),Oo=new P(0,1,0),Fo=new P(0,0,1),bh={type:"added"},Eh={type:"removed"},Et=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Es,n=new Mn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(yi,Zi,this.up):jt.lookAt(Zi,yi,this.up),this.quaternion.setFromRotationMatrix(jt),s&&(jt.extractRotation(s.matrixWorld),Gn.setFromRotationMatrix(jt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=new P,en=new P,dr=new P,tn=new P,Wn=new P,Xn=new P,Bo=new P,fr=new P,pr=new P,mr=new P,Qi=!1,ei=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kt.subVectors(e,t),s.cross(kt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kt.subVectors(s,t),en.subVectors(n,t),dr.subVectors(e,t);let o=kt.dot(kt),a=kt.dot(en),c=kt.dot(dr),l=en.dot(en),h=en.dot(dr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,s,r,o,a,c){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c)}static isFrontFacing(e,t,n,s){return kt.subVectors(n,t),en.subVectors(e,t),kt.cross(en).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),kt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Wn.subVectors(s,n),Xn.subVectors(r,n),fr.subVectors(e,n);let c=Wn.dot(fr),l=Xn.dot(fr);if(c<=0&&l<=0)return t.copy(n);pr.subVectors(e,s);let h=Wn.dot(pr),d=Xn.dot(pr);if(h>=0&&d<=h)return t.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Wn,o);mr.subVectors(e,r);let m=Wn.dot(mr),g=Xn.dot(mr);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xn,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Bo.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Bo,a);let u=1/(p+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Wn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=ya(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gr(o,r,e+1/3),this.g=gr(o,r,e),this.b=gr(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=Ac[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(pt(xt.r*255,0,255))*65536+Math.round(pt(xt.g*255,0,255))*256+Math.round(pt(xt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);let n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=st){Ye.fromWorkingColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,s=xt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Ji);let n=bi(fn.h,Ji.h,t),s=bi(fn.s,Ji.s,t),r=bi(fn.l,Ji.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new We;We.NAMES=Ac;var wh=0,li=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ii,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Pr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var it=new P,Ki=new Se,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}};var Ts=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Th=0,It=new rt,_r=new Et,qn=new P,Ct=new Dn,Mi=new Dn,ht=new P,$t=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?As:Ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ct.min,Mi.min),Ct.expandByPoint(ht),ht.addVectors(Ct.max,Mi.max),Ct.expandByPoint(ht)):(Ct.expandByPoint(Mi.min),Ct.expandByPoint(Mi.max))}Ct.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ht.fromBufferAttribute(a,l),c&&(qn.fromBufferAttribute(e,l),ht.add(qn)),s=Math.max(s,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new P,h[E]=new P;let d=new P,f=new P,m=new P,g=new Se,x=new Se,p=new Se,u=new P,b=new P;function v(E,N,$){d.fromArray(s,E*3),f.fromArray(s,N*3),m.fromArray(s,$*3),g.fromArray(o,E*2),x.fromArray(o,N*2),p.fromArray(o,$*2),f.sub(d),m.sub(d),x.sub(g),p.sub(g);let re=1/(x.x*p.y-p.x*x.y);isFinite(re)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(re),b.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(re),l[E].add(u),l[N].add(u),l[$].add(u),h[E].add(b),h[N].add(b),h[$].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,N=w.length;E<N;++E){let $=w[E],re=$.start,C=$.count;for(let B=re,V=re+C;B<V;B+=3)v(n[B+0],n[B+1],n[B+2])}let L=new P,T=new P,A=new P,W=new P;function S(E){A.fromArray(r,E*3),W.copy(A);let N=l[E];L.copy(N),L.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(W,N);let re=T.dot(h[E])<0?-1:1;c[E*4]=L.x,c[E*4+1]=L.y,c[E*4+2]=L.z,c[E*4+3]=re}for(let E=0,N=w.length;E<N;++E){let $=w[E],re=$.start,C=$.count;for(let B=re,V=re+C;B<V;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Ot(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zo=new rt,Tn=new zr,ji=new Li,ko=new P,Yn=new P,$n=new P,Zn=new P,xr=new P,es=new P,ts=new Se,ns=new Se,is=new Se,Vo=new P,Ho=new P,Go=new P,ss=new P,rs=new P,mt=class extends Et{constructor(e=new $t,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(xr.fromBufferAttribute(d,e),o?es.addScaledVector(xr,h):es.addScaledVector(xr.sub(t),h))}t.add(es)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),!(ji.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(ji,ko)===null||Tn.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(zo.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(zo),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,L=v;w<L;w+=3){let T=a.getX(w),A=a.getX(w+1),W=a.getX(w+2);s=as(this,u,e,n,l,h,d,T,A,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let b=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);s=as(this,o,e,n,l,h,d,b,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,L=v;w<L;w+=3){let T=w,A=w+1,W=w+2;s=as(this,u,e,n,l,h,d,T,A,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let b=p,v=p+1,w=p+2;s=as(this,o,e,n,l,h,d,b,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ah(i,e,t,n,s,r,o,a){let c;if(e.side===Tt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===vn,a),c===null)return null;rs.copy(a),rs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(rs);return l<t.near||l>t.far?null:{distance:l,point:rs.clone(),object:i}}function as(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Yn),i.getVertexPosition(c,$n),i.getVertexPosition(l,Zn);let h=Ah(i,e,t,n,Yn,$n,Zn,ss);if(h){s&&(ts.fromBufferAttribute(s,a),ns.fromBufferAttribute(s,c),is.fromBufferAttribute(s,l),h.uv=ei.getInterpolation(ss,Yn,$n,Zn,ts,ns,is,new Se)),r&&(ts.fromBufferAttribute(r,a),ns.fromBufferAttribute(r,c),is.fromBufferAttribute(r,l),h.uv1=ei.getInterpolation(ss,Yn,$n,Zn,ts,ns,is,new Se),h.uv2=h.uv1),o&&(Vo.fromBufferAttribute(o,a),Ho.fromBufferAttribute(o,c),Go.fromBufferAttribute(o,l),h.normal=ei.getInterpolation(ss,Yn,$n,Zn,Vo,Ho,Go,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};ei.getNormal(Yn,$n,Zn,d.normal),h.face=d}return h}var Ii=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function g(x,p,u,b,v,w,L,T,A,W,S){let E=w/A,N=L/W,$=w/2,re=L/2,C=T/2,B=A+1,V=W+1,q=0,G=0,H=new P;for(let J=0;J<V;J++){let ee=J*N-re;for(let ue=0;ue<B;ue++){let k=ue*E-$;H[x]=k*b,H[p]=ee*v,H[u]=C,l.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[u]=T>0?1:-1,h.push(H.x,H.y,H.z),d.push(ue/A),d.push(1-J/W),q+=1}}for(let J=0;J<W;J++)for(let ee=0;ee<A;ee++){let ue=f+ee+B*J,k=f+ee+B*(J+1),X=f+(ee+1)+B*(J+1),he=f+(ee+1)+B*J;c.push(ue,k,he),c.push(k,X,he),G+=6}a.addGroup(m,G,S),m+=G,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function St(i){let e={};for(let t=0;t<i.length;t++){let n=hi(i[t]);for(let s in n)e[s]=n[s]}return e}function Rh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rc(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}var Ch={clone:hi,merge:St},Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rs=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends Rs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(Si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Si*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qn=-90,Jn=1,kr=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(Qn,Jn,e,t);s.layers=this.layers,this.add(s);let r=new Pt(Qn,Jn,e,t);r.layers=this.layers,this.add(r);let o=new Pt(Qn,Jn,e,t);o.layers=this.layers,this.add(o);let a=new Pt(Qn,Jn,e,t);a.layers=this.layers,this.add(a);let c=new Pt(Qn,Jn,e,t);c.layers=this.layers,this.add(c);let l=new Pt(Qn,Jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cs=class extends Ft{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ai,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vr=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?st:Dt),this.texture=new Cs(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:gn});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Ut),new kr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},vr=new P,Ih=new P,Uh=new He,sn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vr.subVectors(n,t).cross(Ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Uh.getNormalMatrix(e),s=this.coplanarPoint(vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},An=new Li,os=new P,Ui=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],u=s[12],b=s[13],v=s[14],w=s[15];if(n[0].setComponents(c-r,f-l,p-m,w-u).normalize(),n[1].setComponents(c+r,f+l,p+m,w+u).normalize(),n[2].setComponents(c+o,f+h,p+g,w+b).normalize(),n[3].setComponents(c-o,f-h,p-g,w-b).normalize(),n[4].setComponents(c-a,f-d,p-x,w-v).normalize(),t===rn)n[5].setComponents(c+a,f+d,p+x,w+v).normalize();else if(t===xs)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(os.x=s.normal.x>0?e.max.x:e.min.x,os.y=s.normal.y>0?e.max.y:e.min.y,os.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let d=l.array,f=l.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,l),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let u=g[x];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var ui=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,f=t/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){let b=u*f-o;for(let v=0;v<l;v++){let w=v*d-r;g.push(w,-b,0),x.push(0,0,1),p.push(v/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<a;b++){let v=b+l*u,w=b+l*(u+1),L=b+1+l*(u+1),T=b+1+l*u;m.push(v,w,T),m.push(w,L,T)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
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
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
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
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
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
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,au=`vec3 transformedNormal = objectNormal;
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
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
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
}`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
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
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
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
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
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
#endif`,Du=`struct PhysicalMaterial {
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
}`,Nu=`
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xu=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Hd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Qd=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,Kd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,tf=`#define NORMAL
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
}`,nf=`#define PHONG
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
}`,sf=`#define PHONG
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
}`,rf=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,of=`#define TOON
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
}`,cf=`#define TOON
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
}`,lf=`uniform float size;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 color;
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
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Nh,alphahash_pars_fragment:Oh,alphamap_fragment:Fh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Vh,aomap_pars_fragment:Hh,batching_pars_vertex:Gh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:Yh,iridescence_fragment:$h,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:jh,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:su,cube_uv_reflection_fragment:ru,defaultnormal_vertex:au,displacementmap_pars_vertex:ou,displacementmap_vertex:cu,emissivemap_fragment:lu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Ru,envmap_vertex:_u,fog_vertex:xu,fog_pars_vertex:vu,fog_fragment:yu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_fragment:bu,lightmap_pars_fragment:Eu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Du,lights_fragment_begin:Nu,lights_fragment_maps:Ou,lights_fragment_end:Fu,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Vu,map_fragment:Hu,map_pars_fragment:Gu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Yu,morphcolor_vertex:$u,morphnormal_vertex:Zu,morphtarget_pars_vertex:Qu,morphtarget_vertex:Ju,normal_fragment_begin:Ku,normal_fragment_maps:ju,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,opaque_fragment:cd,packing:ld,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:xd,shadowmask_pars_fragment:vd,skinbase_vertex:yd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:bd,specularmap_fragment:Ed,specularmap_pars_fragment:wd,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Ld,uv_vertex:Id,worldpos_vertex:Ud,background_vert:Dd,background_frag:Nd,backgroundCube_vert:Od,backgroundCube_frag:Fd,cube_vert:Bd,cube_frag:zd,depth_vert:kd,depth_frag:Vd,distanceRGBA_vert:Hd,distanceRGBA_frag:Gd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Yd,meshbasic_vert:$d,meshbasic_frag:Zd,meshlambert_vert:Qd,meshlambert_frag:Jd,meshmatcap_vert:Kd,meshmatcap_frag:jd,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:cf,points_vert:lf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yt={basic:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:St([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:St([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:St([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:St([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:St([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:St([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:St([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:St([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:St([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:St([se.lights,se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var cs={r:0,b:0,g:0};function mf(i,e,t,n,s,r,o){let a=new We(0),c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let b=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ks)?(h===void 0&&(h=new mt(new Ii(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:hi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Je,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mt(new ui(2,2),new wt({name:"BackgroundMaterial",uniforms:hi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,u){p.getRGB(cs,Rc(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function gf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function d(C,B,V,q,G){let H=!1;if(o){let J=x(q,V,B);l!==J&&(l=J,m(l.object)),H=u(C,q,V,G),H&&b(C,q,V,G)}else{let J=B.wireframe===!0;(l.geometry!==q.id||l.program!==V.id||l.wireframe!==J)&&(l.geometry=q.id,l.program=V.id,l.wireframe=J,H=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,W(C,B,V,q),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,B,V){let q=V.wireframe===!0,G=a[C.id];G===void 0&&(G={},a[C.id]=G);let H=G[B.id];H===void 0&&(H={},G[B.id]=H);let J=H[q];return J===void 0&&(J=p(f()),H[q]=J),J}function p(C){let B=[],V=[],q=[];for(let G=0;G<s;G++)B[G]=0,V[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:q,object:C,attributes:{},index:null}}function u(C,B,V,q){let G=l.attributes,H=B.attributes,J=0,ee=V.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let X=G[ue],he=H[ue];if(he===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),X===void 0||X.attribute!==he||he&&X.data!==he.data)return!0;J++}return l.attributesNum!==J||l.index!==q}function b(C,B,V,q){let G={},H=B.attributes,J=0,ee=V.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let X=H[ue];X===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));let he={};he.attribute=X,X&&X.data&&(he.data=X.data),G[ue]=he,J++}l.attributes=G,l.attributesNum=J,l.index=q}function v(){let C=l.newAttributes;for(let B=0,V=C.length;B<V;B++)C[B]=0}function w(C){L(C,0)}function L(C,B){let V=l.newAttributes,q=l.enabledAttributes,G=l.attributeDivisors;V[C]=1,q[C]===0&&(i.enableVertexAttribArray(C),q[C]=1),G[C]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),G[C]=B)}function T(){let C=l.newAttributes,B=l.enabledAttributes;for(let V=0,q=B.length;V<q;V++)B[V]!==C[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function A(C,B,V,q,G,H,J){J===!0?i.vertexAttribIPointer(C,B,V,G,H):i.vertexAttribPointer(C,B,V,q,G,H)}function W(C,B,V,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let G=q.attributes,H=V.getAttributes(),J=B.defaultAttributeValues;for(let ee in H){let ue=H[ee];if(ue.location>=0){let k=G[ee];if(k===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let X=k.normalized,he=k.itemSize,ae=t.get(k);if(ae===void 0)continue;let pe=ae.buffer,Te=ae.type,Re=ae.bytesPerElement,ye=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||k.gpuType===_c);if(k.isInterleavedBufferAttribute){let Be=k.data,D=Be.stride,ft=k.offset;if(Be.isInstancedInterleavedBuffer){for(let Z=0;Z<ue.locationSize;Z++)L(ue.location+Z,Be.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Z=0;Z<ue.locationSize;Z++)w(ue.location+Z);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Z=0;Z<ue.locationSize;Z++)A(ue.location+Z,he/ue.locationSize,Te,X,D*Re,(ft+he/ue.locationSize*Z)*Re,ye)}else{if(k.isInstancedBufferAttribute){for(let Be=0;Be<ue.locationSize;Be++)L(ue.location+Be,k.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Be=0;Be<ue.locationSize;Be++)w(ue.location+Be);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Be=0;Be<ue.locationSize;Be++)A(ue.location+Be,he/ue.locationSize,Te,X,he*Re,he/ue.locationSize*Be*Re,ye)}}else if(J!==void 0){let X=J[ee];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(ue.location,X);break;case 3:i.vertexAttrib3fv(ue.location,X);break;case 4:i.vertexAttrib4fv(ue.location,X);break;default:i.vertexAttrib1fv(ue.location,X)}}}}T()}function S(){$();for(let C in a){let B=a[C];for(let V in B){let q=B[V];for(let G in q)g(q[G].object),delete q[G];delete B[V]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;let B=a[C.id];for(let V in B){let q=B[V];for(let G in q)g(q[G].object),delete q[G];delete B[V]}delete a[C.id]}function N(C){for(let B in a){let V=a[B];if(V[C.id]===void 0)continue;let q=V[C.id];for(let G in q)g(q[G].object),delete q[G];delete V[C.id]}}function $(){re(),h=!0,l!==c&&(l=c,m(l.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:$,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:w,disableUnusedAttributes:T}}function _f(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function l(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function xf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=o||e.has("OES_texture_float"),L=v&&w,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:T}}function vf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new sn,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,v=b*4,w=u.clippingState||null;c.value=w,w=h(g,f,v,m);for(let L=0;L!==v;++L)w[L]=t[L];u.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let u=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,w=m;v!==x;++v,w+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function yf(i){let e=new WeakMap;function t(o,a){return a===Lr?o.mapping=ai:a===Ir&&(o.mapping=oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lr||a===Ir)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vr(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var di=class extends Rs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ti=4,Wo=[.125,.215,.35,.446,.526,.582],Pn=20,yr=new di,Xo=new We,Mr=null,Sr=0,br=0,Rn=(1+Math.sqrt(5))/2,Kn=1/Rn,qo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Rn,Kn),new P(0,Rn,-Kn),new P(Kn,0,Rn),new P(-Kn,0,Rn),new P(Rn,Kn,0),new P(-Rn,Kn,0)],Ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,br),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Ci,format:Gt,colorSpace:an,depthBuffer:!1},s=Yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mf(r)),this._blurMaterial=Sf(r,e,t)}return s}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s){let a=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Xo),h.toneMapping=_n,h.autoClear=!1;let m=new cn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new mt(new Ii,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Xo),x=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):b===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let v=this._cubeSize;ls(s,b*v,u>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ai||e.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qo[(s-1)%qo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new mt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Pn;p>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);let u=[],b=0;for(let A=0;A<Pn;++A){let W=A/x,S=Math.exp(-W*W/2);u.push(S),A===0?b+=S:A<p&&(b+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[s],L=3*w*(s>v-ti?s-v+ti:0),T=4*(this._cubeSize-w);ls(t,L,T,3*w,2*w),c.setRenderTarget(t),c.render(d,yr)}};function Mf(i){let e=[],t=[],n=[],s=i,r=i-ti+1+Wo.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ti?c=Wo[o-i+ti-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,b=new Float32Array(x*g*m),v=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,W=T>2?0:-1,S=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];b.set(S,x*g*T),v.set(f,p*g*T);let E=[T,T,T,T,T,T];w.set(E,u*g*T)}let L=new $t;L.setAttribute("position",new Ot(b,x)),L.setAttribute("uv",new Ot(v,p)),L.setAttribute("faceIndex",new Ot(w,u)),e.push(L),s>ti&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yo(i,e,t){let n=new on(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sf(i,e,t){let n=new Float32Array(Pn),s=new P(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function $o(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Zo(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function bf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lr||c===Ir,h=c===ai||c===oi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ps(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Ps(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ef(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wf(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let x=m[g];for(let p=0,u=x.length;p<u;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(d){let f=[],m=d.index,g=d.attributes.position,x=0;if(m!==null){let b=m.array;x=m.version;for(let v=0,w=b.length;v<w;v+=3){let L=b[v+0],T=b[v+1],A=b[v+2];f.push(L,T,T,A,A,L)}}else if(g!==void 0){let b=g.array;x=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){let L=v+0,T=v+1,A=v+2;f.push(L,T,T,A,A,L)}}else return;let p=new(Tc(f)?As:Ts)(f,1);p.version=x;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Tf(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*c),t.update(g,r,1)}function d(m,g,x){if(x===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*c,x),t.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let u=0;for(let b=0;b<x;b++)u+=g[b];t.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Af(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,e){return i[0]-e[0]}function Cf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Pf(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let C=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],W=0;b===!0&&(W=1),v===!0&&(W=2),w===!0&&(W=3);let S=h.attributes.position.count*W,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let N=new Float32Array(S*E*4*g),$=new bs(N,S,E,g);$.type=mn,$.needsUpdate=!0;let re=W*4;for(let B=0;B<g;B++){let V=L[B],q=T[B],G=A[B],H=S*E*4*B;for(let J=0;J<V.count;J++){let ee=J*re;b===!0&&(o.fromBufferAttribute(V,J),N[H+ee+0]=o.x,N[H+ee+1]=o.y,N[H+ee+2]=o.z,N[H+ee+3]=0),v===!0&&(o.fromBufferAttribute(q,J),N[H+ee+4]=o.x,N[H+ee+5]=o.y,N[H+ee+6]=o.z,N[H+ee+7]=0),w===!0&&(o.fromBufferAttribute(G,J),N[H+ee+8]=o.x,N[H+ee+9]=o.y,N[H+ee+10]=o.z,N[H+ee+11]=G.itemSize===4?o.w:1)}}x={count:g,texture:$,size:new Se(S,E)},r.set(h,x),h.addEventListener("dispose",C)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(Cf);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Rf);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let w=a[v],L=w[0],T=w[1];L!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+v)!==x[L]&&h.setAttribute("morphTarget"+v,x[L]),p&&h.getAttribute("morphNormal"+v)!==p[L]&&h.setAttribute("morphNormal"+v,p[L]),s[v]=T,u+=T):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Lf(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ls=class extends Ft{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:In,h!==In&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=pn),n===void 0&&h===ci&&(n=Ln),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pc=new Ft,Lc=new Ls(1,1);Lc.compareFunction=wc;var Ic=new bs,Uc=new Br,Dc=new Cs,Qo=[],Jo=[],Ko=new Float32Array(16),jo=new Float32Array(9),ec=new Float32Array(4);function gi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qo[s];if(r===void 0&&(r=new Float32Array(s),Qo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function at(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hs(i,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function If(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2fv(this.addr,e),ot(t,e)}}function Df(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;i.uniform3fv(this.addr,e),ot(t,e)}}function Nf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4fv(this.addr,e),ot(t,e)}}function Of(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),ot(t,n)}}function Ff(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),ot(t,n)}}function Bf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),ot(t,n)}}function zf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2iv(this.addr,e),ot(t,e)}}function Vf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3iv(this.addr,e),ot(t,e)}}function Hf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4iv(this.addr,e),ot(t,e)}}function Gf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2uiv(this.addr,e),ot(t,e)}}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3uiv(this.addr,e),ot(t,e)}}function qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4uiv(this.addr,e),ot(t,e)}}function Yf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Lc:Pc;t.setTexture2D(e||r,s)}function $f(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uc,s)}function Zf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dc,s)}function Qf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ic,s)}function Jf(i){switch(i){case 5126:return If;case 35664:return Uf;case 35665:return Df;case 35666:return Nf;case 35674:return Of;case 35675:return Ff;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Qf}}function Kf(i,e){i.uniform1fv(this.addr,e)}function jf(i,e){let t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function ep(i,e){let t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function tp(i,e){let t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function np(i,e){let t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ip(i,e){let t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sp(i,e){let t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rp(i,e){i.uniform1iv(this.addr,e)}function ap(i,e){i.uniform2iv(this.addr,e)}function op(i,e){i.uniform3iv(this.addr,e)}function cp(i,e){i.uniform4iv(this.addr,e)}function lp(i,e){i.uniform1uiv(this.addr,e)}function hp(i,e){i.uniform2uiv(this.addr,e)}function up(i,e){i.uniform3uiv(this.addr,e)}function dp(i,e){i.uniform4uiv(this.addr,e)}function fp(i,e,t){let n=this.cache,s=e.length,r=Hs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pc,r[o])}function pp(i,e,t){let n=this.cache,s=e.length,r=Hs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Uc,r[o])}function mp(i,e,t){let n=this.cache,s=e.length,r=Hs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dc,r[o])}function gp(i,e,t){let n=this.cache,s=e.length,r=Hs(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ic,r[o])}function _p(i){switch(i){case 5126:return Kf;case 35664:return jf;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return cp;case 5125:return lp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}var Hr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jf(t.type)}},Gr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_p(t.type)}},Wr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Er=/(\w+)(\])?(\[|\.)?/g;function tc(i,e){i.seq.push(e),i.map[e.id]=e}function xp(i,e,t){let n=i.name,s=n.length;for(Er.lastIndex=0;;){let r=Er.exec(n),o=Er.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){tc(t,l===void 0?new Hr(a,i,e):new Gr(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Wr(a),tc(t,d)),t=d}}}var ri=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function nc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vp=37297,yp=0;function Mp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sp(i){let e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i),n;switch(e===t?n="":e===_s&&t===gs?n="LinearDisplayP3ToLinearSRGB":e===gs&&t===_s&&(n="LinearSRGBToLinearDisplayP3"),i){case an:case Vs:return[n,"LinearTransferOETF"];case st:case va:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ic(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(e),o)}else return s}function bp(i,e){let t=Sp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ep(i,e){let t;switch(e){case Al:t="Linear";break;case Rl:t="Reinhard";break;case Cl:t="OptimizedCineon";break;case Pl:t="ACESFilmic";break;case Il:t="AgX";break;case Ll:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ni).join(`
`)}function Ap(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ni(i){return i!==""}function sc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(i){return i.replace(Cp,Lp)}var Pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lp(i,e){let t=Oe[e];if(t===void 0){let n=Pp.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xr(t)}var Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(Ip,Up)}function Up(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Np(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ai:case oi:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Op(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===oi&&(e="ENVMAP_MODE_REFRACTION"),e}function Fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case wl:e="ENVMAP_BLENDING_MIX";break;case Tl:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dp(t),l=Np(t),h=Op(t),d=Fp(t),f=Bp(t),m=t.isWebGL2?"":wp(t),g=Tp(t),x=Ap(r),p=s.createProgram(),u,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ni).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ni).join(`
`),b.length>0&&(b+=`
`)):(u=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),b=[m,oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Oe.tonemapping_pars_fragment:"",t.toneMapping!==_n?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=Xr(o),o=sc(o,t),o=rc(o,t),a=Xr(a),a=sc(a,t),a=rc(a,t),o=ac(o),a=ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=v+u+o,L=v+b+a,T=nc(s,s.VERTEX_SHADER,w),A=nc(s,s.FRAGMENT_SHADER,L);s.attachShader(p,T),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function W($){if(i.debug.checkShaderErrors){let re=s.getProgramInfoLog(p).trim(),C=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(A).trim(),V=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,A);else{let G=ic(s,T,"vertex"),H=ic(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+G+`
`+H)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(C===""||B==="")&&(q=!1);q&&($.diagnostics={runnable:V,programLog:re,vertexShader:{log:C,prefix:u},fragmentShader:{log:B,prefix:b}})}s.deleteShader(T),s.deleteShader(A),S=new ri(s,p),E=Rp(s,p)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let E;this.getAttributes=function(){return E===void 0&&W(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,vp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var kp=0,qr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yr(e),t.set(e,n)),n}},Yr=class{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}};function Vp(i,e,t,n,s,r,o){let a=new ws,c=new qr,l=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,E,N,$,re){let C=$.fog,B=re.geometry,V=S.isMeshStandardMaterial?$.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=q&&q.mapping===ks?q.image.height:null,H=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=J!==void 0?J.length:0,ue=0;B.morphAttributes.position!==void 0&&(ue=1),B.morphAttributes.normal!==void 0&&(ue=2),B.morphAttributes.color!==void 0&&(ue=3);let k,X,he,ae;if(H){let vt=Yt[H];k=vt.vertexShader,X=vt.fragmentShader}else k=S.vertexShader,X=S.fragmentShader,c.update(S),he=c.getVertexShaderID(S),ae=c.getFragmentShaderID(S);let pe=i.getRenderTarget(),Te=re.isInstancedMesh===!0,Re=re.isBatchedMesh===!0,ye=!!S.map,Be=!!S.matcap,D=!!q,ft=!!S.aoMap,Z=!!S.lightMap,ne=!!S.bumpMap,te=!!S.normalMap,Ce=!!S.displacementMap,xe=!!S.emissiveMap,M=!!S.metalnessMap,_=!!S.roughnessMap,U=S.anisotropy>0,Y=S.clearcoat>0,K=S.iridescence>0,j=S.sheen>0,_e=S.transmission>0,oe=U&&!!S.anisotropyMap,fe=Y&&!!S.clearcoatMap,me=Y&&!!S.clearcoatNormalMap,Pe=Y&&!!S.clearcoatRoughnessMap,Q=K&&!!S.iridescenceMap,Xe=K&&!!S.iridescenceThicknessMap,De=j&&!!S.sheenColorMap,Le=j&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ge=!!S.specularColorMap,Ne=!!S.specularIntensityMap,qe=_e&&!!S.transmissionMap,et=_e&&!!S.thicknessMap,ke=!!S.gradientMap,ie=!!S.alphaMap,R=S.alphaTest>0,ce=!!S.alphaHash,le=!!S.extensions,we=!!B.attributes.uv1,be=!!B.attributes.uv2,$e=!!B.attributes.uv3,Ze=_n;return S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:h,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:X,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Re,instancing:Te,instancingColor:Te&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:an,map:ye,matcap:Be,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:G,aoMap:ft,lightMap:Z,bumpMap:ne,normalMap:te,displacementMap:f&&Ce,emissiveMap:xe,normalMapObjectSpace:te&&S.normalMapType===Xl,normalMapTangentSpace:te&&S.normalMapType===Wl,metalnessMap:M,roughnessMap:_,anisotropy:U,anisotropyMap:oe,clearcoat:Y,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:Pe,iridescence:K,iridescenceMap:Q,iridescenceThicknessMap:Xe,sheen:j,sheenColorMap:De,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:ge,specularIntensityMap:Ne,transmission:_e,transmissionMap:qe,thicknessMap:et,gradientMap:ke,opaque:S.transparent===!1&&S.blending===ii,alphaMap:ie,alphaTest:R,alphaHash:ce,combine:S.combine,mapUv:ye&&x(S.map.channel),aoMapUv:ft&&x(S.aoMap.channel),lightMapUv:Z&&x(S.lightMap.channel),bumpMapUv:ne&&x(S.bumpMap.channel),normalMapUv:te&&x(S.normalMap.channel),displacementMapUv:Ce&&x(S.displacementMap.channel),emissiveMapUv:xe&&x(S.emissiveMap.channel),metalnessMapUv:M&&x(S.metalnessMap.channel),roughnessMapUv:_&&x(S.roughnessMap.channel),anisotropyMapUv:oe&&x(S.anisotropyMap.channel),clearcoatMapUv:fe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(S.sheenRoughnessMap.channel),specularMapUv:Me&&x(S.specularMap.channel),specularColorMapUv:ge&&x(S.specularColorMap.channel),specularIntensityMapUv:Ne&&x(S.specularIntensityMap.channel),transmissionMapUv:qe&&x(S.transmissionMap.channel),thicknessMapUv:et&&x(S.thicknessMap.channel),alphaMapUv:ie&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(te||U),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:be,vertexUv3s:$e,pointsUvs:re.isPoints===!0&&!!B.attributes.uv&&(ye||ie),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(b(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function b(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){let E=g[S.type],N;if(E){let $=Yt[E];N=Ch.clone($.uniforms)}else N=S.uniforms;return N}function L(S,E){let N;for(let $=0,re=l.length;$<re;$++){let C=l[$];if(C.cacheKey===E){N=C,++N.usedTimes;break}}return N===void 0&&(N=new zp(i,E,S,r),l.push(N)),N}function T(S){if(--S.usedTimes===0){let E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function W(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:W}}function Hp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,x,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,f,m,g,x,p){let u=o(d,f,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function c(d,f,m,g,x,p){let u=o(d,f,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Gp),n.length>1&&n.sort(f||cc),s.length>1&&s.sort(f||cc)}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Wp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new lc,i.set(n,[o])):s>=r.length?(o=new lc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function qp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yp=0;function $p(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zp(i,e){let t=new Xp,n=qp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new rt,a=new rt;function c(h,d){let f=0,m=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let x=0,p=0,u=0,b=0,v=0,w=0,L=0,T=0,A=0,W=0,S=0;h.sort($p);let E=d===!0?Math.PI:1;for(let $=0,re=h.length;$<re;$++){let C=h[$],B=C.color,V=C.intensity,q=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=B.r*V*E,m+=B.g*V*E,g+=B.b*V*E;else if(C.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(C.sh.coefficients[H],V);S++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){let J=C.shadow,ee=n.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.directionalShadow[x]=ee,s.directionalShadowMap[x]=G,s.directionalShadowMatrix[x]=C.shadow.matrix,w++}s.directional[x]=H,x++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(B).multiplyScalar(V*E),H.distance=q,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,s.spot[u]=H;let J=C.shadow;if(C.map&&(s.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&W++),s.spotLightMatrix[u]=J.matrix,C.castShadow){let ee=n.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.spotShadow[u]=ee,s.spotShadowMap[u]=G,T++}u++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(B).multiplyScalar(V),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),s.rectArea[b]=H,b++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),H.distance=C.distance,H.decay=C.decay,C.castShadow){let J=C.shadow,ee=n.get(C);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,s.pointShadow[p]=ee,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=C.shadow.matrix,L++}s.point[p]=H,p++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(V*E),H.groundColor.copy(C.groundColor).multiplyScalar(V*E),s.hemi[v]=H,v++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==p||N.spotLength!==u||N.rectAreaLength!==b||N.hemiLength!==v||N.numDirectionalShadows!==w||N.numPointShadows!==L||N.numSpotShadows!==T||N.numSpotMaps!==A||N.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+A-W,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,N.directionalLength=x,N.pointLength=p,N.spotLength=u,N.rectAreaLength=b,N.hemiLength=v,N.numDirectionalShadows=w,N.numPointShadows=L,N.numSpotShadows=T,N.numSpotMaps=A,N.numLightProbes=S,s.version=Yp++)}function l(h,d){let f=0,m=0,g=0,x=0,p=0,u=d.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let w=h[b];if(w.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),f++}else if(w.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),g++}else if(w.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let L=s.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){let L=s.hemi[p];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:s}}function hc(i,e){let t=new Zp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Qp(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new hc(i,e),t.set(r,[c])):o>=a.length?(c=new hc(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var $r=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zr=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`;function jp(i,e,t){let n=new Ui,s=new Se,r=new Se,o=new ut,a=new $r({depthPacking:Gl}),c=new Zr,l={},h=t.maxTextureSize,d={[vn]:Tt,[Tt]:vn,[Vt]:Vt},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Jp,fragmentShader:Kp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let u=this.type;this.render=function(T,A,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),$=i.state;$.setBlending(gn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let re=u!==nn&&this.type===nn,C=u===nn&&this.type!==nn;for(let B=0,V=T.length;B<V;B++){let q=T[B],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let H=G.getFrameExtents();if(s.multiply(H),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,G.mapSize.y=r.y)),G.map===null||re===!0||C===!0){let ee=this.type!==nn?{minFilter:bt,magFilter:bt}:{};G.map!==null&&G.map.dispose(),G.map=new on(s.x,s.y,ee),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let J=G.getViewportCount();for(let ee=0;ee<J;ee++){let ue=G.getViewport(ee);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),$.viewport(o),G.updateMatrices(q,ee),n=G.getFrustum(),w(A,W,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&b(G,W),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,E,N)};function b(T,A){let W=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,W,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,W,m,x,null)}function v(T,A,W,S){let E=null,N=W.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=W.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=E.uuid,re=A.uuid,C=l[$];C===void 0&&(C={},l[$]=C);let B=C[re];B===void 0&&(B=E.clone(),C[re]=B,A.addEventListener("dispose",L)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,S===nn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,W.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let $=i.properties.get(E);$.light=W}return E}function w(T,A,W,S,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld);let re=e.update(T),C=T.material;if(Array.isArray(C)){let B=re.groups;for(let V=0,q=B.length;V<q;V++){let G=B[V],H=C[G.materialIndex];if(H&&H.visible){let J=v(T,H,S,E);T.onBeforeShadow(i,T,A,W,re,J,G),i.renderBufferDirect(W,null,re,J,T,G),T.onAfterShadow(i,T,A,W,re,J,G)}}}else if(C.visible){let B=v(T,C,S,E);T.onBeforeShadow(i,T,A,W,re,B,null),i.renderBufferDirect(W,null,re,B,T,null),T.onAfterShadow(i,T,A,W,re,B,null)}}let $=T.children;for(let re=0,C=$.length;re<C;re++)w($[re],A,W,S,E)}function L(T){T.target.removeEventListener("dispose",L);for(let W in l){let S=l[W],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function em(i,e,t){let n=t.isWebGL2;function s(){let R=!1,ce=new ut,le=null,we=new ut(0,0,0,0);return{setMask:function(be){le!==be&&!R&&(i.colorMask(be,be,be,be),le=be)},setLocked:function(be){R=be},setClear:function(be,$e,Ze,ct,vt){vt===!0&&(be*=ct,$e*=ct,Ze*=ct),ce.set(be,$e,Ze,ct),we.equals(ce)===!1&&(i.clearColor(be,$e,Ze,ct),we.copy(ce))},reset:function(){R=!1,le=null,we.set(-1,0,0,0)}}}function r(){let R=!1,ce=null,le=null,we=null;return{setTest:function(be){be?Re(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(be){ce!==be&&!R&&(i.depthMask(be),ce=be)},setFunc:function(be){if(le!==be){switch(be){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=be}},setLocked:function(be){R=be},setClear:function(be){we!==be&&(i.clearDepth(be),we=be)},reset:function(){R=!1,ce=null,le=null,we=null}}}function o(){let R=!1,ce=null,le=null,we=null,be=null,$e=null,Ze=null,ct=null,vt=null;return{setTest:function(Qe){R||(Qe?Re(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!R&&(i.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,yt,qt){(le!==Qe||we!==yt||be!==qt)&&(i.stencilFunc(Qe,yt,qt),le=Qe,we=yt,be=qt)},setOp:function(Qe,yt,qt){($e!==Qe||Ze!==yt||ct!==qt)&&(i.stencilOp(Qe,yt,qt),$e=Qe,Ze=yt,ct=qt)},setLocked:function(Qe){R=Qe},setClear:function(Qe){vt!==Qe&&(i.clearStencil(Qe),vt=Qe)},reset:function(){R=!1,ce=null,le=null,we=null,be=null,$e=null,Ze=null,ct=null,vt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,u=!1,b=null,v=null,w=null,L=null,T=null,A=null,W=null,S=new We(0,0,0),E=0,N=!1,$=null,re=null,C=null,B=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,H=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=H>=2);let ee=null,ue={},k=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),he=new ut().fromArray(k),ae=new ut().fromArray(X);function pe(R,ce,le,we){let be=new Uint8Array(4),$e=i.createTexture();i.bindTexture(R,$e),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<le;Ze++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ce+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return $e}let Te={};Te[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Re(i.DEPTH_TEST),c.setFunc(ds),xe(!1),M(Ha),Re(i.CULL_FACE),te(gn);function Re(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function ye(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Be(R,ce){return m[R]!==ce?(i.bindFramebuffer(R,ce),m[R]=ce,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function D(R,ce){let le=x,we=!1;if(R)if(le=g.get(ce),le===void 0&&(le=[],g.set(ce,le)),R.isWebGLMultipleRenderTargets){let be=R.texture;if(le.length!==be.length||le[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Ze=be.length;$e<Ze;$e++)le[$e]=i.COLOR_ATTACHMENT0+$e;le.length=be.length,we=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,we=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function ft(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let Z={[Cn]:i.FUNC_ADD,[il]:i.FUNC_SUBTRACT,[sl]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[qa]=i.MIN,Z[Ya]=i.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(Z[qa]=R.MIN_EXT,Z[Ya]=R.MAX_EXT)}let ne={[rl]:i.ZERO,[al]:i.ONE,[ol]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[fl]:i.SRC_ALPHA_SATURATE,[ul]:i.DST_COLOR,[ll]:i.DST_ALPHA,[cl]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[dl]:i.ONE_MINUS_DST_COLOR,[hl]:i.ONE_MINUS_DST_ALPHA,[pl]:i.CONSTANT_COLOR,[ml]:i.ONE_MINUS_CONSTANT_COLOR,[gl]:i.CONSTANT_ALPHA,[_l]:i.ONE_MINUS_CONSTANT_ALPHA};function te(R,ce,le,we,be,$e,Ze,ct,vt,Qe){if(R===gn){u===!0&&(ye(i.BLEND),u=!1);return}if(u===!1&&(Re(i.BLEND),u=!0),R!==nl){if(R!==b||Qe!==N){if((v!==Cn||T!==Cn)&&(i.blendEquation(i.FUNC_ADD),v=Cn,T=Cn),Qe)switch(R){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,L=null,A=null,W=null,S.set(0,0,0),E=0,b=R,N=Qe}return}be=be||ce,$e=$e||le,Ze=Ze||we,(ce!==v||be!==T)&&(i.blendEquationSeparate(Z[ce],Z[be]),v=ce,T=be),(le!==w||we!==L||$e!==A||Ze!==W)&&(i.blendFuncSeparate(ne[le],ne[we],ne[$e],ne[Ze]),w=le,L=we,A=$e,W=Ze),(ct.equals(S)===!1||vt!==E)&&(i.blendColor(ct.r,ct.g,ct.b,vt),S.copy(ct),E=vt),b=R,N=!1}function Ce(R,ce){R.side===Vt?ye(i.CULL_FACE):Re(i.CULL_FACE);let le=R.side===Tt;ce&&(le=!le),xe(le),R.blending===ii&&R.transparent===!1?te(gn):te(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);let we=R.stencilWrite;l.setTest(we),we&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),U(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(R){$!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),$=R)}function M(R){R!==jc?(Re(i.CULL_FACE),R!==re&&(R===Ha?i.cullFace(i.BACK):R===el?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),re=R}function _(R){R!==C&&(G&&i.lineWidth(R),C=R)}function U(R,ce,le){R?(Re(i.POLYGON_OFFSET_FILL),(B!==ce||V!==le)&&(i.polygonOffset(ce,le),B=ce,V=le)):ye(i.POLYGON_OFFSET_FILL)}function Y(R){R?Re(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function K(R){R===void 0&&(R=i.TEXTURE0+q-1),ee!==R&&(i.activeTexture(R),ee=R)}function j(R,ce,le){le===void 0&&(ee===null?le=i.TEXTURE0+q-1:le=ee);let we=ue[le];we===void 0&&(we={type:void 0,texture:void 0},ue[le]=we),(we.type!==R||we.texture!==ce)&&(ee!==le&&(i.activeTexture(le),ee=le),i.bindTexture(R,ce||Te[R]),we.type=R,we.texture=ce)}function _e(){let R=ue[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(R){he.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),he.copy(R))}function qe(R){ae.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ae.copy(R))}function et(R,ce){let le=d.get(ce);le===void 0&&(le=new WeakMap,d.set(ce,le));let we=le.get(R);we===void 0&&(we=i.getUniformBlockIndex(ce,R.name),le.set(R,we))}function ke(R,ce){let we=d.get(ce).get(R);h.get(ce)!==we&&(i.uniformBlockBinding(ce,we,R.__bindingPointIndex),h.set(ce,we))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,ue={},m={},g=new WeakMap,x=[],p=null,u=!1,b=null,v=null,w=null,L=null,T=null,A=null,W=null,S=new We(0,0,0),E=0,N=!1,$=null,re=null,C=null,B=null,V=null,he.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Re,disable:ye,bindFramebuffer:Be,drawBuffers:D,useProgram:ft,setBlending:te,setMaterial:Ce,setFlipSided:xe,setCullFace:M,setLineWidth:_,setPolygonOffset:U,setScissorTest:Y,activeTexture:K,bindTexture:j,unbindTexture:_e,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Me,texImage3D:ge,updateUBOMapping:et,uniformBlockBinding:ke,texStorage2D:De,texStorage3D:Le,texSubImage2D:me,texSubImage3D:Pe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Xe,scissor:Ne,viewport:qe,reset:ie}}function tm(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):ys("canvas")}function x(M,_,U,Y){let K=1;if((M.width>Y||M.height>Y)&&(K=Y/Math.max(M.width,M.height)),K<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let j=_?vs:Math.floor,_e=j(K*M.width),oe=j(K*M.height);d===void 0&&(d=g(_e,oe));let fe=U?g(_e,oe):d;return fe.width=_e,fe.height=oe,fe.getContext("2d").drawImage(M,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+oe+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Or(M.width)&&Or(M.height)}function u(M){return a?!1:M.wrapS!==Ht||M.wrapT!==Ht||M.minFilter!==bt&&M.minFilter!==Ut}function b(M,_){return M.generateMipmaps&&_&&M.minFilter!==bt&&M.minFilter!==Ut}function v(M){i.generateMipmap(M)}function w(M,_,U,Y,K=!1){if(a===!1)return _;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=_;if(_===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),_===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RGBA){let _e=K?ms:Ye.getTransfer(Y);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=_e===Je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function L(M,_,U){return b(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==bt&&M.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function T(M){return M===bt||M===$a||M===Qs?i.NEAREST:i.LINEAR}function A(M){let _=M.target;_.removeEventListener("dispose",A),S(_),_.isVideoTexture&&h.delete(_)}function W(M){let _=M.target;_.removeEventListener("dispose",W),N(_)}function S(M){let _=n.get(M);if(_.__webglInit===void 0)return;let U=M.source,Y=f.get(U);if(Y){let K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(M),Object.keys(Y).length===0&&f.delete(U)}n.remove(M)}function E(M){let _=n.get(M);i.deleteTexture(_.__webglTexture);let U=M.source,Y=f.get(U);delete Y[_.__cacheKey],o.memory.textures--}function N(M){let _=M.texture,U=n.get(M),Y=n.get(_);if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(U.__webglFramebuffer[K]))for(let j=0;j<U.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(U.__webglFramebuffer[K][j]);else i.deleteFramebuffer(U.__webglFramebuffer[K]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[K])}else{if(Array.isArray(U.__webglFramebuffer))for(let K=0;K<U.__webglFramebuffer.length;K++)i.deleteFramebuffer(U.__webglFramebuffer[K]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let K=0;K<U.__webglColorRenderbuffer.length;K++)U.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[K]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,j=_.length;K<j;K++){let _e=n.get(_[K]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(_[K])}n.remove(_),n.remove(M)}let $=0;function re(){$=0}function C(){let M=$;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),$+=1,M}function B(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function V(M,_){let U=n.get(M);if(M.isVideoTexture&&Ce(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(U,M,_);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function q(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){he(U,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function G(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){he(U,M,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function H(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){ae(U,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let J={[Ur]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},ee={[bt]:i.NEAREST,[$a]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Ul]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ue={[ql]:i.NEVER,[Kl]:i.ALWAYS,[Yl]:i.LESS,[wc]:i.LEQUAL,[$l]:i.EQUAL,[Jl]:i.GEQUAL,[Zl]:i.GREATER,[Ql]:i.NOTEQUAL};function k(M,_,U){if(U?(i.texParameteri(M,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,J[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ee[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ee[_.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Ht||_.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,T(_.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==bt&&_.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Y=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===bt||_.minFilter!==Qs&&_.minFilter!==Ri||_.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(M,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function X(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));let Y=_.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let j=B(_);if(j!==M.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[j].usedTimes++;let _e=K[M.__cacheKey];_e!==void 0&&(K[M.__cacheKey].usedTimes--,_e.usedTimes===0&&E(_)),M.__cacheKey=j,M.__webglTexture=K[j].texture}return U}function he(M,_,U){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let K=X(M,_),j=_.source;t.bindTexture(Y,M.__webglTexture,i.TEXTURE0+U);let _e=n.get(j);if(j.version!==_e.__version||K===!0){t.activeTexture(i.TEXTURE0+U);let oe=Ye.getPrimaries(Ye.workingColorSpace),fe=_.colorSpace===Dt?null:Ye.getPrimaries(_.colorSpace),me=_.colorSpace===Dt||oe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Pe=u(_)&&p(_.image)===!1,Q=x(_.image,Pe,!1,s.maxTextureSize);Q=xe(_,Q);let Xe=p(Q)||a,De=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Me=w(_.internalFormat,De,Le,_.colorSpace,_.isVideoTexture);k(Y,_,Xe);let ge,Ne=_.mipmaps,qe=a&&_.isVideoTexture!==!0&&Me!==bc,et=_e.__version===void 0||K===!0,ke=L(_,Q,Xe);if(_.isDepthTexture)Me=i.DEPTH_COMPONENT,a?_.type===mn?Me=i.DEPTH_COMPONENT32F:_.type===pn?Me=i.DEPTH_COMPONENT24:_.type===Ln?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:_.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===In&&Me===i.DEPTH_COMPONENT&&_.type!==xa&&_.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=pn,Le=r.convert(_.type)),_.format===ci&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,_.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ln,Le=r.convert(_.type))),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,De,Le,null));else if(_.isDataTexture)if(Ne.length>0&&Xe){qe&&et&&t.texStorage2D(i.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,R=Ne.length;ie<R;ie++)ge=Ne[ie],qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,De,Le,ge.data):t.texImage2D(i.TEXTURE_2D,ie,Me,ge.width,ge.height,0,De,Le,ge.data);_.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,ke,Me,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,De,Le,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,De,Le,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Me,Ne[0].width,Ne[0].height,Q.depth);for(let ie=0,R=Ne.length;ie<R;ie++)ge=Ne[ie],_.format!==Gt?De!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,Q.depth,De,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Me,ge.width,ge.height,Q.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,Q.depth,De,Le,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Me,ge.width,ge.height,Q.depth,0,De,Le,ge.data)}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,R=Ne.length;ie<R;ie++)ge=Ne[ie],_.format!==Gt?De!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,De,Le,ge.data):t.texImage2D(i.TEXTURE_2D,ie,Me,ge.width,ge.height,0,De,Le,ge.data)}else if(_.isDataArrayTexture)qe?(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,De,Le,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,De,Le,Q.data);else if(_.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,ke,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,De,Le,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,De,Le,Q.data);else if(_.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,ke,Me,Q.width,Q.height);else{let ie=Q.width,R=Q.height;for(let ce=0;ce<ke;ce++)t.texImage2D(i.TEXTURE_2D,ce,Me,ie,R,0,De,Le,null),ie>>=1,R>>=1}}else if(Ne.length>0&&Xe){qe&&et&&t.texStorage2D(i.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,R=Ne.length;ie<R;ie++)ge=Ne[ie],qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,De,Le,ge):t.texImage2D(i.TEXTURE_2D,ie,Me,De,Le,ge);_.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,ke,Me,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Le,Q)):t.texImage2D(i.TEXTURE_2D,0,Me,De,Le,Q);b(_,Xe)&&v(Y),_e.__version=j.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ae(M,_,U){if(_.image.length!==6)return;let Y=X(M,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let j=n.get(K);if(K.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);let _e=Ye.getPrimaries(Ye.workingColorSpace),oe=_.colorSpace===Dt?null:Ye.getPrimaries(_.colorSpace),fe=_.colorSpace===Dt||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let me=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!me&&!Pe?Q[ie]=x(_.image[ie],!1,!0,s.maxCubemapSize):Q[ie]=Pe?_.image[ie].image:_.image[ie],Q[ie]=xe(_,Q[ie]);let Xe=Q[0],De=p(Xe)||a,Le=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),ge=w(_.internalFormat,Le,Me,_.colorSpace),Ne=a&&_.isVideoTexture!==!0,qe=j.__version===void 0||Y===!0,et=L(_,Xe,De);k(i.TEXTURE_CUBE_MAP,_,De);let ke;if(me){Ne&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ge,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){ke=Q[ie].mipmaps;for(let R=0;R<ke.length;R++){let ce=ke[R];_.format!==Gt?Le!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,ce.width,ce.height,Le,Me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,ge,ce.width,ce.height,0,Le,Me,ce.data)}}}else{ke=_.mipmaps,Ne&&qe&&(ke.length>0&&et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ge,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Pe){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Le,Me,Q[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,Q[ie].width,Q[ie].height,0,Le,Me,Q[ie].data);for(let R=0;R<ke.length;R++){let le=ke[R].image[ie].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,le.width,le.height,Le,Me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,ge,le.width,le.height,0,Le,Me,le.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Me,Q[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,Le,Me,Q[ie]);for(let R=0;R<ke.length;R++){let ce=ke[R];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,Le,Me,ce.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,ge,Le,Me,ce.image[ie])}}}b(_,De)&&v(i.TEXTURE_CUBE_MAP),j.__version=K.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function pe(M,_,U,Y,K,j){let _e=r.convert(U.format,U.colorSpace),oe=r.convert(U.type),fe=w(U.internalFormat,_e,oe,U.colorSpace);if(!n.get(_).__hasExternalTextures){let Pe=Math.max(1,_.width>>j),Q=Math.max(1,_.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,j,fe,Pe,Q,_.depth,0,_e,oe,null):t.texImage2D(K,j,fe,Pe,Q,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),te(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,n.get(U).__webglTexture,0,ne(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,n.get(U).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(M,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let Y=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||te(_)){let K=_.depthTexture;K&&K.isDepthTexture&&(K.type===mn?Y=i.DEPTH_COMPONENT32F:K.type===pn&&(Y=i.DEPTH_COMPONENT24));let j=ne(_);te(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,Y,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,Y,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){let Y=ne(_);U&&te(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,_.width,_.height):te(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let Y=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let K=0;K<Y.length;K++){let j=Y[K],_e=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),fe=w(j.internalFormat,_e,oe,j.colorSpace),me=ne(_);U&&te(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,fe,_.width,_.height):te(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let Y=n.get(_.depthTexture).__webglTexture,K=ne(_);if(_.depthTexture.format===In)te(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(_.depthTexture.format===ci)te(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ye(M){let _=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,M)}else if(U){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Te(_.__webglDepthbuffer[Y],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Te(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(M,_,U){let Y=n.get(M);_!==void 0&&pe(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ye(M)}function D(M){let _=M.texture,U=n.get(M),Y=n.get(_);M.addEventListener("dispose",W),M.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++);let K=M.isWebGLCubeRenderTarget===!0,j=M.isWebGLMultipleRenderTargets===!0,_e=p(M)||a;if(K){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let fe=0;fe<_.mipmaps.length;fe++)U.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else U.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(j)if(s.drawBuffers){let oe=M.texture;for(let fe=0,me=oe.length;fe<me;fe++){let Pe=n.get(oe[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&te(M)===!1){let oe=j?_:[_];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){let me=oe[fe];U.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);let Pe=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),Xe=w(me.internalFormat,Pe,Q,me.colorSpace,M.isXRRenderTarget===!0),De=ne(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Xe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),k(i.TEXTURE_CUBE_MAP,_,_e);for(let oe=0;oe<6;oe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)pe(U.__webglFramebuffer[oe][fe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else pe(U.__webglFramebuffer[oe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(_,_e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let oe=M.texture;for(let fe=0,me=oe.length;fe<me;fe++){let Pe=oe[fe],Q=n.get(Pe);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),k(i.TEXTURE_2D,Pe,_e),pe(U.__webglFramebuffer,M,Pe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),b(Pe,_e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?oe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Y.__webglTexture),k(oe,_,_e),a&&_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)pe(U.__webglFramebuffer[fe],M,_,i.COLOR_ATTACHMENT0,oe,fe);else pe(U.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,oe,0);b(_,_e)&&v(oe),t.unbindTexture()}M.depthBuffer&&ye(M)}function ft(M){let _=p(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0,K=U.length;Y<K;Y++){let j=U[Y];if(b(j,_)){let _e=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(j).__webglTexture;t.bindTexture(_e,oe),v(_e),t.unbindTexture()}}}function Z(M){if(a&&M.samples>0&&te(M)===!1){let _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,Y=M.height,K=i.COLOR_BUFFER_BIT,j=[],_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(M),fe=M.isWebGLMultipleRenderTargets===!0;if(fe)for(let me=0;me<_.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let me=0;me<_.length;me++){j.push(i.COLOR_ATTACHMENT0+me),M.depthBuffer&&j.push(_e);let Pe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Pe===!1&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[me]),Pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),fe){let Q=n.get(_[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,K,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<_.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,oe.__webglColorRenderbuffer[me]);let Pe=n.get(_[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ne(M){return Math.min(s.maxSamples,M.samples)}function te(M){let _=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(M){let _=o.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function xe(M,_){let U=M.colorSpace,Y=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Nr||U!==an&&U!==Dt&&(Ye.getTransfer(U)===Je?a===!1?e.has("EXT_sRGB")===!0&&Y===Gt?(M.format=Nr,M.minFilter=Ut,M.generateMipmaps=!1):_=Ms.sRGBToLinear(_):(Y!==Gt||K!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=C,this.resetTextureUnits=re,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=te}function nm(i,e,t){let n=t.isWebGL2;function s(r,o=Dt){let a,c=Ye.getTransfer(o);if(r===xn)return i.UNSIGNED_BYTE;if(r===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Dl)return i.BYTE;if(r===Nl)return i.SHORT;if(r===xa)return i.UNSIGNED_SHORT;if(r===_c)return i.INT;if(r===pn)return i.UNSIGNED_INT;if(r===mn)return i.FLOAT;if(r===Ci)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ol)return i.ALPHA;if(r===Gt)return i.RGBA;if(r===Fl)return i.LUMINANCE;if(r===Bl)return i.LUMINANCE_ALPHA;if(r===In)return i.DEPTH_COMPONENT;if(r===ci)return i.DEPTH_STENCIL;if(r===Nr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===zl)return i.RED;if(r===yc)return i.RED_INTEGER;if(r===kl)return i.RG;if(r===Mc)return i.RG_INTEGER;if(r===Sc)return i.RGBA_INTEGER;if(r===Js||r===Ks||r===js||r===er)if(c===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Qa||r===Ja||r===Ka)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Za)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ka)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ja||r===eo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ja)return c===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===to||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===co||r===lo||r===ho||r===uo||r===fo||r===po||r===mo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===to)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===no)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===io)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===so)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ro)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ao)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===co)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ho)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===po)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mo)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tr||r===go||r===_o)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===tr)return c===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===go)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vl||r===xo||r===vo||r===yo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===tr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ln?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qr=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jr=class extends yn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null,x=t.getContextAttributes(),p=null,u=null,b=[],v=[],w=new Se,L=null,T=new Pt;T.layers.enable(1),T.viewport=new ut;let A=new Pt;A.layers.enable(2),A.viewport=new ut;let W=[T,A],S=new Qr;S.layers.enable(1),S.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=b[k];return X===void 0&&(X=new wi,b[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=b[k];return X===void 0&&(X=new wi,b[k]=X),X.getGripSpace()},this.getHand=function(k){let X=b[k];return X===void 0&&(X=new wi,b[k]=X),X.getHandSpace()};function $(k){let X=v.indexOf(k.inputSource);if(X===-1)return;let he=b[X];he!==void 0&&(he.update(k.inputSource,k.frame,l||o),he.dispatchEvent({type:k.type,data:k.inputSource}))}function re(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",C);for(let k=0;k<b.length;k++){let X=v[k];X!==null&&(v[k]=null,b[k].disconnect(X))}E=null,N=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",re),s.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new on(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,he=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?ci:In,he=x.stencil?Ln:pn);let pe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new on(f.textureWidth,f.textureHeight,{format:Gt,type:xn,depthTexture:new Ls(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Te=e.properties.get(u);Te.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(k){for(let X=0;X<k.removed.length;X++){let he=k.removed[X],ae=v.indexOf(he);ae>=0&&(v[ae]=null,b[ae].disconnect(he))}for(let X=0;X<k.added.length;X++){let he=k.added[X],ae=v.indexOf(he);if(ae===-1){for(let Te=0;Te<b.length;Te++)if(Te>=v.length){v.push(he),ae=Te;break}else if(v[Te]===null){v[Te]=he,ae=Te;break}if(ae===-1)break}let pe=b[ae];pe&&pe.connect(he)}}let B=new P,V=new P;function q(k,X,he){B.setFromMatrixPosition(X.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);let ae=B.distanceTo(V),pe=X.projectionMatrix.elements,Te=he.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),ye=pe[14]/(pe[10]+1),Be=(pe[9]+1)/pe[5],D=(pe[9]-1)/pe[5],ft=(pe[8]-1)/pe[0],Z=(Te[8]+1)/Te[0],ne=Re*ft,te=Re*Z,Ce=ae/(-ft+Z),xe=Ce*-ft;X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(xe),k.translateZ(Ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let M=Re+Ce,_=ye+Ce,U=ne-xe,Y=te+(ae-xe),K=Be*ye/_*M,j=D*ye/_*M;k.projectionMatrix.makePerspective(U,Y,K,j,M,_),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=A.near=T.near=k.near,S.far=A.far=T.far=k.far,(E!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,N=S.far);let X=k.parent,he=S.cameras;G(S,X);for(let ae=0;ae<he.length;ae++)G(he[ae],X);he.length===2?q(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),H(k,S,X)};function H(k,X,he){he===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(he.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Pi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let J=null;function ee(k,X){if(h=X.getViewerPose(l||o),g=X,h!==null){let he=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ae=!1;he.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let pe=0;pe<he.length;pe++){let Te=he[pe],Re=null;if(m!==null)Re=m.getViewport(Te);else{let Be=d.getViewSubImage(f,Te);Re=Be.viewport,pe===0&&(e.setRenderTargetTextures(u,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(u))}let ye=W[pe];ye===void 0&&(ye=new Pt,ye.layers.enable(pe),ye.viewport=new ut,W[pe]=ye),ye.matrix.fromArray(Te.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Te.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(ye)}}for(let he=0;he<b.length;he++){let ae=v[he],pe=b[he];ae!==null&&pe!==void 0&&pe.update(ae,X,l||o)}J&&J(k,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let ue=new Cc;ue.setAnimationLoop(ee),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}};function sm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Rc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,v,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,b,v):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Tt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Tt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rm(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,v){let w=v.program;n.uniformBlockBinding(b,w)}function l(b,v){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));let L=v.program;n.updateUBOMapping(b,L);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let v=d();b.__bindingPointIndex=v;let w=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],w=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,A=w.length;T<A;T++){let W=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,E=W.length;S<E;S++){let N=W[S];if(m(N,T,S,L)===!0){let $=N.__offset,re=Array.isArray(N.value)?N.value:[N.value],C=0;for(let B=0;B<re.length;B++){let V=re[B],q=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,$+C,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,v,w,L){let T=b.value,A=v+"_"+w;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{let W=L[A];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return L[A]=T,!0}else if(W.equals(T)===!1)return W.copy(T),!0}return!1}function g(b){let v=b.uniforms,w=0,L=16;for(let A=0,W=v.length;A<W;A++){let S=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,N=S.length;E<N;E++){let $=S[E],re=Array.isArray($.value)?$.value:[$.value];for(let C=0,B=re.length;C<B;C++){let V=re[C],q=x(V),G=w%L;G!==0&&L-G<q.boundary&&(w+=L-G),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=q.storage}}}let T=w%L;return T>0&&(w+=L-T),b.__size=w,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Di=class{constructor(e={}){let{canvas:t=fh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;let v=this,w=!1,L=0,T=0,A=null,W=-1,S=null,E=new ut,N=new ut,$=null,re=new We(0),C=0,B=t.width,V=t.height,q=1,G=null,H=null,J=new ut(0,0,B,V),ee=new ut(0,0,B,V),ue=!1,k=new Ui,X=!1,he=!1,ae=null,pe=new rt,Te=new Se,Re=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?q:1}let D=n;function ft(y,I){for(let F=0;F<y.length;F++){let z=y[F],O=t.getContext(z,I);if(O!==null)return O}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),D=ft(I,y),D===null)throw ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Z,ne,te,Ce,xe,M,_,U,Y,K,j,_e,oe,fe,me,Pe,Q,Xe,De,Le,Me,ge,Ne,qe;function et(){Z=new Ef(D),ne=new xf(D,Z,e),Z.init(ne),ge=new nm(D,Z,ne),te=new em(D,Z,ne),Ce=new Af(D),xe=new Hp,M=new tm(D,Z,te,xe,ne,ge,Ce),_=new yf(v),U=new bf(v),Y=new Dh(D,ne),Ne=new gf(D,Z,Y,ne),K=new wf(D,Y,Ce,Ne),j=new Lf(D,K,Y,Ce),De=new Pf(D,ne,M),Pe=new vf(xe),_e=new Vp(v,_,U,Z,ne,Ne,Pe),oe=new sm(v,xe),fe=new Wp,me=new Qp(Z,ne),Xe=new mf(v,_,U,te,j,f,c),Q=new jp(v,j,ne),qe=new rm(D,Ce,ne,te),Le=new _f(D,Z,Ce,ne),Me=new Tf(D,Z,Ce,ne),Ce.programs=_e.programs,v.capabilities=ne,v.extensions=Z,v.properties=xe,v.renderLists=fe,v.shadowMap=Q,v.state=te,v.info=Ce}et();let ke=new Jr(v,D);this.xr=ke,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Z.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Z.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(B,V,!1))},this.getSize=function(y){return y.set(B,V)},this.setSize=function(y,I,F=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=y,V=I,t.width=Math.floor(y*q),t.height=Math.floor(I*q),F===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(B*q,V*q).floor()},this.setDrawingBufferSize=function(y,I,F){B=y,V=I,q=F,t.width=Math.floor(y*F),t.height=Math.floor(I*F),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,I,F,z){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,I,F,z),te.viewport(E.copy(J).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,I,F,z){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,I,F,z),te.scissor(N.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){te.setScissorTest(ue=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){H=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(y=!0,I=!0,F=!0){let z=0;if(y){let O=!1;if(A!==null){let de=A.texture.format;O=de===Sc||de===Mc||de===yc}if(O){let de=A.texture.type,ve=de===xn||de===pn||de===xa||de===Ln||de===xc||de===vc,Ee=Xe.getClearColor(),Ae=Xe.getClearAlpha(),ze=Ee.r,Ie=Ee.g,Ue=Ee.b;ve?(m[0]=ze,m[1]=Ie,m[2]=Ue,m[3]=Ae,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=ze,g[1]=Ie,g[2]=Ue,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),F&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),me.dispose(),xe.dispose(),_.dispose(),U.dispose(),j.dispose(),Ne.dispose(),qe.dispose(),_e.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",vt),ke.removeEventListener("sessionend",Qe),ae&&(ae.dispose(),ae=null),yt.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let y=Ce.autoReset,I=Q.enabled,F=Q.autoUpdate,z=Q.needsUpdate,O=Q.type;et(),Ce.autoReset=y,Q.enabled=I,Q.autoUpdate=F,Q.needsUpdate=z,Q.type=O}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){let I=y.target;I.removeEventListener("dispose",le),we(I)}function we(y){be(y),xe.remove(y)}function be(y){let I=xe.get(y).programs;I!==void 0&&(I.forEach(function(F){_e.releaseProgram(F)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,F,z,O,de){I===null&&(I=ye);let ve=O.isMesh&&O.matrixWorld.determinant()<0,Ee=Zc(y,I,F,z,O);te.setMaterial(z,ve);let Ae=F.index,ze=1;if(z.wireframe===!0){if(Ae=K.getWireframeAttribute(F),Ae===void 0)return;ze=2}let Ie=F.drawRange,Ue=F.attributes.position,nt=Ie.start*ze,At=(Ie.start+Ie.count)*ze;de!==null&&(nt=Math.max(nt,de.start*ze),At=Math.min(At,(de.start+de.count)*ze)),Ae!==null?(nt=Math.max(nt,0),At=Math.min(At,Ae.count)):Ue!=null&&(nt=Math.max(nt,0),At=Math.min(At,Ue.count));let lt=At-nt;if(lt<0||lt===1/0)return;Ne.setup(O,z,Ee,F,Ae);let Qt,je=Le;if(Ae!==null&&(Qt=Y.get(Ae),je=Me,je.setIndex(Qt)),O.isMesh)z.wireframe===!0?(te.setLineWidth(z.wireframeLinewidth*Be()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(O.isLine){let Ve=z.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*Be()),O.isLineSegments?je.setMode(D.LINES):O.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else O.isPoints?je.setMode(D.POINTS):O.isSprite&&je.setMode(D.TRIANGLES);if(O.isBatchedMesh)je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)je.renderInstances(nt,lt,O.count);else if(F.isInstancedBufferGeometry){let Ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,qs=Math.min(F.instanceCount,Ve);je.renderInstances(nt,lt,qs)}else je.render(nt,lt)};function $e(y,I,F){y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=Tt,y.needsUpdate=!0,Vi(y,I,F),y.side=vn,y.needsUpdate=!0,Vi(y,I,F),y.side=Vt):Vi(y,I,F)}this.compile=function(y,I,F=null){F===null&&(F=y),p=me.get(F),p.init(),b.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==F&&y.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);let z=new Set;return y.traverse(function(O){let de=O.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let Ee=de[ve];$e(Ee,F,O),z.add(Ee)}else $e(de,F,O),z.add(de)}),b.pop(),p=null,z},this.compileAsync=function(y,I,F=null){let z=this.compile(y,I,F);return new Promise(O=>{function de(){if(z.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){O(y);return}setTimeout(de,10)}Z.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ze=null;function ct(y){Ze&&Ze(y)}function vt(){yt.stop()}function Qe(){yt.start()}let yt=new Cc;yt.setAnimationLoop(ct),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(y){Ze=y,ke.setAnimationLoop(y),y===null?yt.stop():yt.start()},ke.addEventListener("sessionstart",vt),ke.addEventListener("sessionend",Qe),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,A),p=me.get(y,b.length),p.init(),b.push(p),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(pe),he=this.localClippingEnabled,X=Pe.init(this.clippingPlanes,he),x=fe.get(y,u.length),x.init(),u.push(x),qt(y,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(G,H),this.info.render.frame++,X===!0&&Pe.beginShadows();let F=p.state.shadowsArray;if(Q.render(F,y,I),X===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(x,y),p.setupLights(v._useLegacyLights),I.isArrayCamera){let z=I.cameras;for(let O=0,de=z.length;O<de;O++){let ve=z[O];Oa(x,y,ve,ve.viewport)}}else Oa(x,y,I);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,I),Ne.resetDefaultState(),W=-1,S=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function qt(y,I,F,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){z&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe);let ve=j.update(y),Ee=y.material;Ee.visible&&x.push(y,ve,Ee,F,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let ve=j.update(y),Ee=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){let Ae=ve.groups;for(let ze=0,Ie=Ae.length;ze<Ie;ze++){let Ue=Ae[ze],nt=Ee[Ue.materialIndex];nt&&nt.visible&&x.push(y,ve,nt,F,Re.z,Ue)}}else Ee.visible&&x.push(y,ve,Ee,F,Re.z,null)}}let de=y.children;for(let ve=0,Ee=de.length;ve<Ee;ve++)qt(de[ve],I,F,z)}function Oa(y,I,F,z){let O=y.opaque,de=y.transmissive,ve=y.transparent;p.setupLightsView(F),X===!0&&Pe.setGlobalState(v.clippingPlanes,F),de.length>0&&$c(O,de,I,F),z&&te.viewport(E.copy(z)),O.length>0&&ki(O,I,F),de.length>0&&ki(de,I,F),ve.length>0&&ki(ve,I,F),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function $c(y,I,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let de=ne.isWebGL2;ae===null&&(ae=new on(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ci:xn,minFilter:Ri,samples:de?4:0})),v.getDrawingBufferSize(Te),de?ae.setSize(Te.x,Te.y):ae.setSize(vs(Te.x),vs(Te.y));let ve=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(re),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let Ee=v.toneMapping;v.toneMapping=_n,ki(y,F,z),M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae);let Ae=!1;for(let ze=0,Ie=I.length;ze<Ie;ze++){let Ue=I[ze],nt=Ue.object,At=Ue.geometry,lt=Ue.material,Qt=Ue.group;if(lt.side===Vt&&nt.layers.test(z.layers)){let je=lt.side;lt.side=Tt,lt.needsUpdate=!0,Fa(nt,F,z,At,lt,Qt),lt.side=je,lt.needsUpdate=!0,Ae=!0}}Ae===!0&&(M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae)),v.setRenderTarget(ve),v.setClearColor(re,C),v.toneMapping=Ee}function ki(y,I,F){let z=I.isScene===!0?I.overrideMaterial:null;for(let O=0,de=y.length;O<de;O++){let ve=y[O],Ee=ve.object,Ae=ve.geometry,ze=z===null?ve.material:z,Ie=ve.group;Ee.layers.test(F.layers)&&Fa(Ee,I,F,Ae,ze,Ie)}}function Fa(y,I,F,z,O,de){y.onBeforeRender(v,I,F,z,O,de),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,I,F,z,y,de),O.transparent===!0&&O.side===Vt&&O.forceSinglePass===!1?(O.side=Tt,O.needsUpdate=!0,v.renderBufferDirect(F,I,z,O,y,de),O.side=vn,O.needsUpdate=!0,v.renderBufferDirect(F,I,z,O,y,de),O.side=Vt):v.renderBufferDirect(F,I,z,O,y,de),y.onAfterRender(v,I,F,z,O,de)}function Vi(y,I,F){I.isScene!==!0&&(I=ye);let z=xe.get(y),O=p.state.lights,de=p.state.shadowsArray,ve=O.state.version,Ee=_e.getParameters(y,O.state,de,I,F),Ae=_e.getProgramCacheKey(Ee),ze=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?U:_).get(y.envMap||z.environment),ze===void 0&&(y.addEventListener("dispose",le),ze=new Map,z.programs=ze);let Ie=ze.get(Ae);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===ve)return za(y,Ee),Ie}else Ee.uniforms=_e.getUniforms(y),y.onBuild(F,Ee,v),y.onBeforeCompile(Ee,v),Ie=_e.acquireProgram(Ee,Ae),ze.set(Ae,Ie),z.uniforms=Ee.uniforms;let Ue=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Pe.uniform),za(y,Ee),z.needsLights=Jc(y),z.lightsStateVersion=ve,z.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Ba(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=ri.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function za(y,I){let F=xe.get(y);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Zc(y,I,F,z,O){I.isScene!==!0&&(I=ye),M.resetTextureUnits();let de=I.fog,ve=z.isMeshStandardMaterial?I.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:an,Ae=(z.isMeshStandardMaterial?U:_).get(z.envMap||ve),ze=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ue=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,At=!!F.morphAttributes.color,lt=_n;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(lt=v.toneMapping);let Qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,je=Qt!==void 0?Qt.length:0,Ve=xe.get(z),qs=p.state.lights;if(X===!0&&(he===!0||y!==S)){let Lt=y===S&&z.id===W;Pe.setState(z,y,Lt)}let tt=!1;z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==qs.state.version||Ve.outputColorSpace!==Ee||O.isBatchedMesh&&Ve.batching===!1||!O.isBatchedMesh&&Ve.batching===!0||O.isInstancedMesh&&Ve.instancing===!1||!O.isInstancedMesh&&Ve.instancing===!0||O.isSkinnedMesh&&Ve.skinning===!1||!O.isSkinnedMesh&&Ve.skinning===!0||O.isInstancedMesh&&Ve.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ve.instancingColor===!1&&O.instanceColor!==null||Ve.envMap!==Ae||z.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Pe.numPlanes||Ve.numIntersection!==Pe.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ie||Ve.morphTargets!==Ue||Ve.morphNormals!==nt||Ve.morphColors!==At||Ve.toneMapping!==lt||ne.isWebGL2===!0&&Ve.morphTargetsCount!==je)&&(tt=!0):(tt=!0,Ve.__version=z.version);let Sn=Ve.currentProgram;tt===!0&&(Sn=Vi(z,I,O));let ka=!1,_i=!1,Ys=!1,gt=Sn.getUniforms(),bn=Ve.uniforms;if(te.useProgram(Sn.program)&&(ka=!0,_i=!0,Ys=!0),z.id!==W&&(W=z.id,_i=!0),ka||S!==y){gt.setValue(D,"projectionMatrix",y.projectionMatrix),gt.setValue(D,"viewMatrix",y.matrixWorldInverse);let Lt=gt.map.cameraPosition;Lt!==void 0&&Lt.setValue(D,Re.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,_i=!0,Ys=!0)}if(O.isSkinnedMesh){gt.setOptional(D,O,"bindMatrix"),gt.setOptional(D,O,"bindMatrixInverse");let Lt=O.skeleton;Lt&&(ne.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),gt.setValue(D,"boneTexture",Lt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(gt.setOptional(D,O,"batchingTexture"),gt.setValue(D,"batchingTexture",O._matricesTexture,M));let $s=F.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&ne.isWebGL2===!0)&&De.update(O,F,Sn),(_i||Ve.receiveShadow!==O.receiveShadow)&&(Ve.receiveShadow=O.receiveShadow,gt.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(bn.envMap.value=Ae,bn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),_i&&(gt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Qc(bn,Ys),de&&z.fog===!0&&oe.refreshFogUniforms(bn,de),oe.refreshMaterialUniforms(bn,z,q,V,ae),ri.upload(D,Ba(Ve),bn,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ri.upload(D,Ba(Ve),bn,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(D,"center",O.center),gt.setValue(D,"modelViewMatrix",O.modelViewMatrix),gt.setValue(D,"normalMatrix",O.normalMatrix),gt.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Lt=z.uniformsGroups;for(let Zs=0,Kc=Lt.length;Zs<Kc;Zs++)if(ne.isWebGL2){let Va=Lt[Zs];qe.update(Va,Sn),qe.bind(Va,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Qc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Jc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,F){xe.get(y.texture).__webglTexture=I,xe.get(y.depthTexture).__webglTexture=F;let z=xe.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let F=xe.get(y);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,F=0){A=y,L=I,T=F;let z=!0,O=null,de=!1,ve=!1;if(y){let Ae=xe.get(y);Ae.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Ae.__webglFramebuffer===void 0?M.setupRenderTarget(y):Ae.__hasExternalTextures&&M.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);let ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ve=!0);let Ie=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?O=Ie[I][F]:O=Ie[I],de=!0):ne.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?O=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[F]:O=Ie,E.copy(y.viewport),N.copy(y.scissor),$=y.scissorTest}else E.copy(J).multiplyScalar(q).floor(),N.copy(ee).multiplyScalar(q).floor(),$=ue;if(te.bindFramebuffer(D.FRAMEBUFFER,O)&&ne.drawBuffers&&z&&te.drawBuffers(y,O),te.viewport(E),te.scissor(N),te.setScissorTest($),de){let Ae=xe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,F)}else if(ve){let Ae=xe.get(y.texture),ze=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,ze)}W=-1},this.readRenderTargetPixels=function(y,I,F,z,O,de,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){te.bindFramebuffer(D.FRAMEBUFFER,Ee);try{let Ae=y.texture,ze=Ae.format,Ie=Ae.type;if(ze!==Gt&&ge.convert(ze)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Ie===Ci&&(Z.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ie!==xn&&ge.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===mn&&(ne.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&F>=0&&F<=y.height-O&&D.readPixels(I,F,z,O,ge.convert(ze),ge.convert(Ie),de)}finally{let Ae=A!==null?xe.get(A).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,I,F=0){let z=Math.pow(2,-F),O=Math.floor(I.image.width*z),de=Math.floor(I.image.height*z);M.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,y.x,y.y,O,de),te.unbindTexture()},this.copyTextureToTexture=function(y,I,F,z=0){let O=I.image.width,de=I.image.height,ve=ge.convert(F.format),Ee=ge.convert(F.type);M.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,y.x,y.y,O,de,ve,Ee,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,y.x,y.y,ve,Ee,I.image),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(y,I,F,z,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=y.max.x-y.min.x+1,ve=y.max.y-y.min.y+1,Ee=y.max.z-y.min.z+1,Ae=ge.convert(z.format),ze=ge.convert(z.type),Ie;if(z.isData3DTexture)M.setTexture3D(z,0),Ie=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ue=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),At=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),Qt=D.getParameter(D.UNPACK_SKIP_IMAGES),je=F.isCompressedTexture?F.mipmaps[O]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,y.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,y.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,y.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Ie,O,I.x,I.y,I.z,de,ve,Ee,Ae,ze,je.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ie,O,I.x,I.y,I.z,de,ve,Ee,Ae,je.data)):D.texSubImage3D(Ie,O,I.x,I.y,I.z,de,ve,Ee,Ae,ze,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ue),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt),O===0&&z.generateMipmaps&&D.generateMipmap(Ie),te.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),te.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,te.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===va?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?Un:Ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?st:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Kr=class extends Di{};Kr.prototype.isWebGL1Renderer=!0;var Is=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ni=class extends Ft{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],o=[],a=new P,c=new rt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(pt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends Wt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new Se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jr=class extends Us{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sa(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hs=new P,wr=new Sa,Tr=new Sa,Ar=new Sa,Oi=class extends Wt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hs.subVectors(s[0],s[1]).add(s[0]),l=hs);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),m),x=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),wr.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,x,p),Tr.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,x,p),Ar.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Tr.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Ar.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(wr.calc(c),Tr.calc(c),Ar.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function am(i,e){let t=1-i;return t*t*e}function om(i,e){return 2*(1-i)*i*e}function cm(i,e){return i*i*e}function Ti(i,e,t,n){return am(i,e)+om(i,t)+cm(i,n)}function lm(i,e){let t=1-i;return t*t*t*e}function hm(i,e){let t=1-i;return 3*t*t*i*e}function um(i,e){return 3*(1-i)*i*i*e}function dm(i,e){return i*i*i*e}function Ai(i,e,t,n,s){return lm(i,e)+hm(i,t)+um(i,n)+dm(i,s)}var ea=class extends Wt{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(e,s.x,r.x,o.x,a.x),Ai(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends Wt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(e,s.x,r.x,o.x,a.x),Ai(e,s.y,r.y,o.y,a.y),Ai(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Wt{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Wt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Wt{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ti(e,s.x,r.x,o.x),Ti(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Wt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ti(e,s.x,r.x,o.x),Ti(e,s.y,r.y,o.y),Ti(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Wt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(uc(a,c.x,l.x,h.x,d.x),uc(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},fm=Object.freeze({__proto__:null,ArcCurve:jr,CatmullRomCurve3:Oi,CubicBezierCurve:ea,CubicBezierCurve3:ta,EllipseCurve:Us,LineCurve:na,LineCurve3:ia,QuadraticBezierCurve:sa,QuadraticBezierCurve3:Ds,SplineCurve:ra});var Ns=class i extends $t{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=e,f=(t-e)/s,m=new P,g=new Se;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let u=r+p/n*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let u=0;u<n;u++){let b=u+p,v=b,w=b+n+1,L=b+n+2,T=b+1;a.push(v,w,T),a.push(w,L,T)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Fi=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new P,f=new P,m=[],g=[],x=[],p=[];for(let u=0;u<=n;u++){let b=[],v=u/n,w=0;u===0&&o===0?w=.5/t:u===n&&c===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){let T=L/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(T+w,1-v),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let v=h[u][b+1],w=h[u][b],L=h[u+1][b],T=h[u+1][b+1];(u!==0||o>0)&&m.push(v,w,T),(u!==n-1||c<Math.PI)&&m.push(w,L,T)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class i extends $t{constructor(e=new Ds(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new Se,h=new P,d=[],f=[],m=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function x(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),b(),u()}function p(v){h=e.getPointAt(v/t,h);let w=o.normals[v],L=o.binormals[v];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,W=Math.sin(A),S=-Math.cos(A);c.x=S*w.x+W*L.x,c.y=S*w.y+W*L.y,c.z=S*w.z+W*L.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=t;v++)for(let w=1;w<=s;w++){let L=(s+1)*(v-1)+(w-1),T=(s+1)*v+(w-1),A=(s+1)*v+w,W=(s+1)*(v-1)+w;g.push(L,T,W),g.push(T,A,W)}}function b(){for(let v=0;v<=t;v++)for(let w=0;w<=s;w++)l.x=v/t,l.y=w/s,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new fm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function us(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},aa=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mo,endingEnd:Mo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case So:r=e,a=2*t-n;break;case bo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case So:o=e,c=2*n-t;break;case bo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,u=-f*p+2*f*x-f*g,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,w=m*p-m*x;for(let L=0;L!==a;++L)r[L]=u*o[h+L]+b*o[l+L]+v*o[c+L]+w*o[d+L];return r}},oa=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},ca=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case nr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return nr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&pm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=ps;var Nn=class extends Xt{};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=fs;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Xt{};la.prototype.ValueTypeName="color";var ha=class extends Xt{};ha.prototype.ValueTypeName="number";var ua=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bi=class extends Xt{InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.DefaultInterpolation=ps;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends Xt{};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=fs;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Xt{};da.prototype.ValueTypeName="vector";var fa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},mm=new fa,pa=class{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Bs=class extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rr=new rt,dc=new P,fc=new P,ma=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ga=class extends ma{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ga}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ba="\\[\\]\\.:\\/",gm=new RegExp("["+ba+"]","g"),Ea="[^"+ba+"]",_m="[^"+ba.replace("\\.","")+"]",xm=/((?:WC+[\/:])*)/.source.replace("WC",Ea),vm=/(WCOD+)?/.source.replace("WCOD",_m),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ea),Mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ea),Sm=new RegExp("^"+xm+vm+ym+Mm+"$"),bm=["material","materials","bones","map"],_a=class{constructor(e,t,n){let s=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ke=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(e){let t=Sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=_a;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pm=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Nc(i){let e=new Di({alpha:!0,antialias:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,0),e.outputColorSpace=st,i.replaceChildren(e.domElement);let t=new Is,n=new di(-1.35,1.35,1.35,-1.35,.1,20);n.position.z=6,t.add(new Bs(16777215,3560554,2));let s=new zs(16774631,2.1);s.position.set(-3,4,5),t.add(s);let r=new Nt;t.add(r);let o=new cn({color:"#303b40"}),a=new cn({color:"#e9e9de"}),c=new cn({color:"#354247"}),l=new Fi(1,72,48);function h(Z,ne,te,Ce,xe,M,_,U){let Y=new mt(l,U);return Y.position.set(ne,te,Ce),Y.scale.set(xe,M,_),Z.add(Y),Y}function d(Z,ne,te=.012){return Math.sqrt(Math.max(.015,1-Z*Z-ne*ne))+te}function f(Z,ne,te,Ce=.016){let xe=new Oi(ne.map(_=>new P(..._))),M=new mt(new Os(xe,32,Ce,8,!1),te);return Z.add(M),M}let m=document.createElement("canvas");m.width=2048,m.height=1024;let g=m.getContext("2d");g.scale(2,2),g.fillStyle="#ffffff",["M12 104Q21 88 37 83Q43 78 49 83Q59 73 70 77Q82 68 94 76Q103 72 111 82Q121 91 132 94Q137 103 149 105Q155 112 166 115Q177 125 168 138Q158 140 157 149Q146 154 149 166Q153 174 144 181Q139 187 144 197Q150 204 145 210Q137 206 133 195Q124 191 119 202Q118 211 124 216Q133 221 129 228Q124 234 117 227Q109 224 106 214Q99 215 98 225Q94 226 91 216Q87 205 80 200Q78 188 71 179Q62 169 51 172Q44 175 39 166Q30 165 29 157Q19 154 19 144Q10 135 12 122Q8 114 12 104Z","M123 240Q133 234 144 239Q149 247 161 249Q167 259 177 262Q181 270 187 279Q192 290 185 300Q180 305 183 313Q178 322 179 331Q172 340 171 350Q163 357 161 367Q154 375 152 386Q148 398 144 391Q141 380 145 369Q140 360 144 350Q139 340 143 329Q139 316 132 311Q132 299 125 292Q125 282 118 274Q113 257 123 240Z","M179 47Q188 38 201 38Q205 31 214 40Q226 41 228 52Q236 59 227 70Q226 80 218 84Q214 95 204 96Q196 105 190 92Q181 88 181 77Q173 70 180 61Q175 53 179 47Z","M341 134Q349 120 357 121Q358 109 368 112Q374 123 382 116Q390 120 394 114Q402 115 403 104Q411 86 424 94Q431 91 434 100Q440 106 449 99Q458 99 467 86Q480 75 493 77Q505 67 521 76Q535 89 546 85Q555 91 569 81Q588 75 602 78Q620 70 641 81Q651 96 665 92Q679 102 690 94Q706 86 718 94Q735 88 747 99Q760 109 761 117Q774 123 760 133Q766 142 751 146Q740 161 727 154Q715 161 705 156Q690 159 686 171Q683 181 673 181Q664 192 656 192Q653 182 646 187Q639 191 636 202Q628 205 626 215Q617 223 611 213Q604 226 595 217Q589 211 589 201Q577 201 574 187Q566 180 556 182Q544 178 542 169Q529 168 525 157Q514 151 501 159Q486 164 477 158Q463 166 458 154Q447 148 441 158Q437 171 426 165Q417 174 408 171Q397 174 388 164Q378 157 372 165Q363 172 358 164Q345 169 341 157Q335 147 341 134Z","M353 188Q364 179 378 181Q388 174 400 184Q414 181 425 194Q437 197 441 212Q441 222 449 224Q458 223 455 230Q448 241 437 244Q432 252 423 260Q420 271 416 281Q418 295 408 305Q405 318 393 323Q382 331 377 318Q372 309 371 298Q362 292 362 280Q355 274 359 263Q357 252 347 250Q338 251 336 240Q328 230 335 220Q332 209 342 201Q342 191 353 188Z","M607 241Q615 233 625 237Q632 230 640 242Q643 251 651 250Q656 257 666 253Q679 250 684 259Q692 266 681 273Q672 279 663 269Q653 264 650 272Q640 275 635 267Q625 271 621 263Q608 264 611 253Q603 248 607 241Z","M680 312Q689 303 697 302Q701 287 712 292Q719 294 721 305Q724 313 731 308Q737 303 737 294Q742 287 748 299Q751 308 760 311Q767 320 770 330Q779 339 770 348Q772 359 759 360Q751 369 742 361Q733 367 725 358Q718 348 711 351Q700 358 691 349Q679 351 675 341Q665 339 671 327Q668 320 680 312Z","M438 286Q444 281 449 287Q453 296 448 304Q447 315 440 317Q432 313 435 304Q431 295 438 286Z"].forEach(Z=>g.fill(new Path2D(Z)));let p=new Ni(m);p.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy());let u={map:{value:p}},b=new wt({uniforms:u,vertexShader:"varying vec2 vUv;varying vec3 vN;varying vec3 vP;varying vec3 vView;void main(){vUv=uv;vP=position;vN=normalize(normalMatrix*normal);vec4 viewed=modelViewMatrix*vec4(position,1.);vView=viewed.xyz;gl_Position=projectionMatrix*viewed;}",fragmentShader:`uniform sampler2D map;varying vec2 vUv;varying vec3 vN;varying vec3 vP;varying vec3 vView;
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
   }`}),v=new Fi(1,192,128),w=v.attributes.position;for(let Z=0;Z<w.count;Z++){let ne=w.getX(Z),te=w.getY(Z),Ce=w.getZ(Z);if(Ce<.75)continue;let xe=.015*Math.exp(-((ne/.075)**2)-((te+.085)/.07)**2),M=.006*Math.exp(-((ne/.036)**2)-((te-.005)/.1)**2);w.setZ(Z,Ce+xe+M)}v.computeVertexNormals(),r.add(new mt(v,b));let L={heat:{value:0}},T=new wt({uniforms:L,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float heat;varying vec3 vN;void main(){
   vec3 colour=mix(vec3(1.,.88,.16),vec3(1.,.38,.045),smoothstep(.28,.65,heat));
   colour=mix(colour,vec3(1.,.075,.035),smoothstep(.65,1.,heat));
   float rim=pow(1.-abs(normalize(vN).z),mix(3.,1.15,heat));
   float alpha=heat*(.025+(.52+heat*.40)*rim);gl_FragColor=vec4(colour,alpha);
  }`}),A=h(r,0,0,0,1.045,1.045,1.045,T);A.renderOrder=1;let W=[],S=[];for(let Z of[-.3,.3]){let ne=new Nt;ne.position.set(Z,.16,d(Z,.16,.004)),ne.quaternion.setFromUnitVectors(new P(0,0,1),new P(Z,.16,d(Z,.16,0)).normalize()),r.add(ne);let te=new Nt;ne.add(te),h(te,0,0,0,.128,.166,.016,a);let Ce=new Nt;te.add(Ce),h(Ce,0,0,0,.068,.1,.005,c),h(Ce,-.018,.042,.006,.01,.014,.002,a),W.push({eye:te,gaze:Ce,baseX:Z>0?-.012:.012});let xe=new Nt;xe.position.set(Z,.41,d(Z,.41,.009)),r.add(xe),f(xe,[[-.105,-.018,0],[0,.018,.004],[.105,-.018,0]],o,.013),S.push(xe)}let E=document.createElement("canvas");E.width=512,E.height=640;let N=E.getContext("2d");N.beginPath(),N.ellipse(256,320,246,309,0,0,Math.PI*2),N.fillStyle="#2c2a33",N.fill(),N.save(),N.clip(),N.fillStyle="#fff5dc",N.beginPath(),N.moveTo(-10,-30),N.lineTo(522,-30),N.lineTo(522,116),N.quadraticCurveTo(256,172,-10,116),N.closePath(),N.fill(),N.fillStyle="#c78689",N.beginPath(),N.ellipse(256,594,176,106,0,0,Math.PI*2),N.fill(),N.restore();let $=new Ni(E);$.colorSpace=st;let re={scale:{value:new Se(1,1)},map:{value:$}},C=new mt(new ui(2,2,40,40),new wt({uniforms:re,transparent:!0,depthWrite:!1,vertexShader:"uniform vec2 scale;varying vec2 vUv;void main(){vUv=uv;vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.009;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}",fragmentShader:"uniform sampler2D map;varying vec2 vUv;void main(){vec4 c=texture2D(map,vUv);if(c.a<.01)discard;gl_FragColor=c;}"}));r.add(C);let B=new mt(new Ns(.965,1.01,80),new wt({uniforms:{scale:re.scale},transparent:!0,vertexShader:"uniform vec2 scale;varying float rim;void main(){rim=length(position.xy);vec2 p=position.xy*vec2(.17,.185)*scale+vec2(0.,-.39);float z=sqrt(max(.015,1.-dot(p,p)))+.010+sin((rim-.965)/.045*3.14159)*.0015;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,z,1.);}",fragmentShader:"varying float rim;void main(){gl_FragColor=vec4(.18,.21,.25,.65);}"}));r.add(B);let V=o.clone();V.transparent=!0;let q=f(r,[[-.115,-.32,d(-.115,-.32)],[0,-.28,d(0,-.28)],[.115,-.32,d(.115,-.32)]],V,.012),G={time:{value:0},strength:{value:0}},H=new wt({uniforms:G,transparent:!0,depthWrite:!1,side:Vt,vertexShader:"uniform float strength;varying vec2 vUv;void main(){vUv=uv;float side=position.z;float p=uv.y;float centre=side*(.30+.035*(1.-p));float amount=strength*strength;float width=(.035+amount*.32)*(.80+.20*p);float x=centre+(uv.x-.5)*width;float y=(.006+amount*.080)-(1.-p)*(.24+strength*.70);float z=sqrt(max(.015,1.-x*x-y*y))+.020;gl_Position=projectionMatrix*modelViewMatrix*vec4(x,y,z,1.);}",fragmentShader:`uniform float time;uniform float strength;varying vec2 vUv;void main(){
   float edge=1.-smoothstep(.27,.50,abs(vUv.x-.5));
   float dissolve=smoothstep(0.,.34,vUv.y);
   float flow=.5+.5*sin(vUv.y*30.+time*(.003+strength*.014));
   vec3 ocean=vec3(.25,.49,.63);
   vec3 waterColour=mix(vec3(.30,.60,.76),vec3(.58,.83,.89),.10+strength*.14+flow*strength*.12);
   vec3 colour=mix(ocean,waterColour,smoothstep(.15,.75,vUv.y));
   gl_FragColor=vec4(colour,edge*dissolve*(.12+strength*strength*.72));
  }`}),J=[];for(let Z of[-1,1]){let ne=new ui(1,1,4,48),te=ne.attributes.position;for(let xe=0;xe<te.count;xe++)te.setZ(xe,Z);let Ce=new mt(ne,H);Ce.frustumCulled=!1,Ce.renderOrder=3,r.add(Ce),J.push(Ce)}let ee=new cn({color:"#73b2cc",transparent:!0,opacity:.38}),ue=[-.3,.3].map(Z=>h(r,Z,-.008,d(Z,-.008,.022),.105,.012,.007,ee)),k=0,X=0,he=0,ae=0,pe=0,Te=0,Re=0,ye=0,Be=0,D=()=>{Te=0,Re=0};function ft(Z){if(Z.pointerType==="touch"||Z.buttons>0)return;let ne=i.getBoundingClientRect(),te=Math.min(ne.width,ne.height)*.65;te&&(Te=mi.clamp((Z.clientX-ne.left-ne.width/2)/te,-1,1),Re=mi.clamp((ne.top+ne.height/2-Z.clientY)/te,-1,1))}return window.addEventListener("pointermove",ft,{passive:!0}),document.documentElement.addEventListener("pointerleave",D),window.addEventListener("blur",D),new ResizeObserver(()=>{if(k=i.clientWidth,X=i.clientHeight,!X)return;e.setSize(k,X,!1);let Z=k/X,ne=Math.max(1.17,1.18/Z);n.left=-ne*Z,n.right=ne*Z,n.top=ne,n.bottom=-ne,n.updateProjectionMatrix()}).observe(i),{draw(Z,ne,te){let Ce=Math.min(80,Math.max(16,ne-he));he=ne;let xe=te?1:1-Math.exp(-Ce*.005),M=te?1:1-Math.exp(-Ce*.007);ye+=(Te-ye)*M,Be+=(Re-Be)*M,ae+=(Z.tears-ae)*xe,pe+=((Z.scream||Z.tears>.66?1:0)-pe)*xe,L.heat.value=Z.heat,A.scale.setScalar(1.012+Math.pow(Z.heat,1.6)*.083);let _=Math.sqrt(Z.shake),U=ne%6500,Y=1800+_*4e3,K=_>0?mi.smoothstep(U,0,260)*(1-mi.smoothstep(U,Y-420,Y)):0,j=te?0:Math.sin(ne*(.016+_*.032))*_*K,_e=!te&&ae>.66?Math.sin(ne*(.008+ae*.008))*(ae-.66)/.34:0;r.position.set(ye*.045+j*.025,Be*.035+_e*.017,0),r.rotation.set(-Be*.075+_e*.022,mi.clamp(ye*.1+j*.46,-.53,.53),j*.065-ye*.015);let oe=ne%5800,fe=!te&&oe<180?Math.sin(oe/180*Math.PI)**2:0;W.forEach(({eye:me,gaze:Pe,baseX:Q})=>{me.scale.y=(1-ae*ae*.48)*(1-fe*.9);let Xe=Q+ye*.026,De=-.012-ae*.012+Be*.032;Pe.position.set(Xe,De,.016*Math.sqrt(Math.max(.1,1-(Xe/.128)**2-(De/.166)**2))+.003)}),S.forEach((me,Pe)=>{me.rotation.z=(Pe?-1:1)*(ae*.44+Z.heat*.16),me.position.y=.4+pe*.025}),C.visible=B.visible=pe>.05,V.opacity=1-pe,re.scale.value.set(.8+ae*ae*.55,.05+pe*(.72+Z.heat*.25+ae*.25)+_e*.07),G.time.value=te?0:ne,G.strength.value=ae,J.forEach(me=>{me.visible=ae>.28}),ue.forEach(me=>{me.visible=ae>.04,me.position.y=.006+ae*ae*.08,me.position.z=d(me.position.x,me.position.y,.022),me.scale.set(.08+ae*ae*.085,.004+ae*.016,.007)}),k&&X&&e.render(t,n)}}}var Gs=class{constructor(){this.enabled=!1,this.context=null,this.last={heat:-1/0,shake:-1/0,tears:-1/0}}async toggle(){if(this.enabled)return this.enabled=!1,this.master.gain.cancelScheduledValues(this.context.currentTime),this.master.gain.setTargetAtTime(0,this.context.currentTime,.015),!1;let e=window.AudioContext||window.webkitAudioContext;if(!e)throw new Error("Audio unavailable");return this.context||(this.context=new e,this.master=this.context.createGain(),this.master.gain.value=0,this.master.connect(this.context.destination)),await this.context.resume(),this.enabled=!0,this.master.gain.cancelScheduledValues(this.context.currentTime),this.master.gain.setTargetAtTime(.09,this.context.currentTime,.03),this.last={heat:-1/0,shake:-1/0,tears:-1/0},!0}tick(e,t){!this.enabled||document.hidden||this.context.state!=="running"||(e.scream&&t-this.last.heat>12e3&&(this.scream(e.heat),this.last.heat=t),e.shake>0&&t-this.last.shake>6500&&(this.rattle(e.shake),this.last.shake=t),e.tears>.66&&t-(this.last.sob??-1/0)>6500&&(this.sob(),this.last.sob=t),e.tears>.1&&t-this.last.tears>3e3/(.5+e.tears)&&(this.drop(e.tears),this.last.tears=t))}scream(e){let t=this.context,n=t.currentTime,s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(190,n),s.frequency.linearRampToValueAtTime(280,n+.3),s.frequency.linearRampToValueAtTime(210,n+1.25);let r=t.createOscillator(),o=t.createGain();r.frequency.value=6,o.gain.value=7,r.connect(o).connect(s.frequency);let a=t.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.2+e*.3,n+.15),a.gain.setValueAtTime(.2+e*.3,n+.8),a.gain.linearRampToValueAtTime(0,n+1.5),a.connect(this.master);let c=[720,1250,2600].map((l,h)=>{let d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=l,d.Q.value=5;let f=t.createGain();return f.gain.value=[1,.5,.15][h],s.connect(d).connect(f).connect(a),[d,f]});s.start(n),r.start(n),s.stop(n+1.55),r.stop(n+1.55),s.onended=()=>{s.disconnect(),r.disconnect(),o.disconnect(),a.disconnect(),c.flat().forEach(l=>l.disconnect())}}rattle(e=1){let t=this.context,n=t.currentTime,s=t.createBuffer(1,Math.floor(t.sampleRate*.45),t.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/r.length*5);let o=t.createBufferSource();o.buffer=s;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=280;let c=t.createGain();c.gain.value=.15+e*.3,o.connect(a).connect(c).connect(this.master),o.start(n),o.onended=()=>{o.disconnect(),a.disconnect(),c.disconnect()}}drop(e=1){let t=this.context,n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(1050+e*300,n),s.frequency.exponentialRampToValueAtTime(480,n+.13),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.22,n+.008),r.gain.exponentialRampToValueAtTime(.001,n+.22),s.connect(r).connect(this.master),s.start(n),s.stop(n+.23),s.onended=()=>{s.disconnect(),r.disconnect()}}sob(){let e=this.context,t=e.currentTime,n=e.createOscillator(),s=e.createBiquadFilter(),r=e.createGain();n.type="triangle",s.type="lowpass",s.frequency.value=650,n.frequency.setValueAtTime(240,t),n.frequency.linearRampToValueAtTime(150,t+.9),r.gain.setValueAtTime(0,t);for(let o=0;o<3;o++){let a=t+o*.3;r.gain.linearRampToValueAtTime(.18,a+.05),r.gain.exponentialRampToValueAtTime(.001,a+.24)}n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+1),n.onended=()=>{n.disconnect(),s.disconnect(),r.disconnect()}}async visibility(e){this.context&&(e?await this.context.suspend():this.enabled&&await this.context.resume())}};var Oc="https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",Fc="https://science.nasa.gov/earth/explore/earth-indicators/sea-leve/",Bc="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",wa={temperature:{value:1.38,previous:1.42,date:"2026-09",saved:!0},sea:{value:115.8,uncertainty:4,date:"2026-10",saved:!0}},zi=[-75,-45,-15,15,45,75].flatMap(i=>[-150,-90,-30,30,90,150].map(e=>({latitude:i,longitude:e,weight:Math.cos(i*Math.PI/180)}))),zc="https://api.open-meteo.com/v1/forecast?"+new URLSearchParams({latitude:zi.map(i=>i.latitude).join(","),longitude:zi.map(i=>i.longitude).join(","),current:"precipitation",timezone:"GMT",timeformat:"unixtime",precipitation_unit:"mm",cell_selection:"nearest"});function kc(i,e=Date.now()){if(!i.includes("Land-Ocean: Global Means")||!i.includes("Year,Jan,Feb"))throw new Error("Unexpected global temperature source");let t=[];for(let n of i.split(/\r?\n/)){let s=n.split(","),r=Number(s[0]);if(!(!Number.isInteger(r)||r<1880||r>new Date(e).getUTCFullYear()))for(let o=1;o<=12;o++){let a=s[o]?.trim(),c=Number(a);!a||!Number.isFinite(c)||Math.abs(c)>10||Date.UTC(r,o-1,1)>e||t.push({date:`${r}-${String(o).padStart(2,"0")}`,value:c})}}if(t.sort((n,s)=>n.date.localeCompare(s.date)),t.length<2)throw new Error("Missing temperature observations");return{...t.at(-1),previous:t.at(-2).value,saved:!1}}function Vc(i){let e=new DOMParser().parseFromString(i,"text/html");e.querySelectorAll("script,style").forEach(c=>c.remove());let t=e.body.textContent.replace(/\s+/g," "),n=t.match(/Latest Measurement\s*([\d.]+)\s*(?:\(±\s*[\d.]+\))?\s*mm/i),s=t.match(/Latest Measurement Date\s*([A-Za-z]+)\s+(20\d\d)/i);if(!n||!s)throw new Error("Missing sea-level observation");let r=["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(s[1].toLowerCase())+1,o=Number(n[1]);if(!r||!Number.isFinite(o)||o<0||o>1e3)throw new Error("Unexpected sea-level observation");let a=`${s[2]}-${String(r).padStart(2,"0")}`;if(Date.parse(a+"-01")>Date.now())throw new Error("Future sea-level observation");return{value:o,date:a,saved:!1}}function Hc(i,e=Date.now()){if(!Array.isArray(i)||i.length!==zi.length)throw new Error("Incomplete rain grid");let t=0,n=0,s=[];return i.forEach((r,o)=>{let a=r.current;if(r.current_units?.precipitation!=="mm"||!Number.isFinite(a?.precipitation)||a.precipitation<0||!Number.isFinite(a.interval)||a.interval<=0||!Number.isFinite(a.time))throw new Error("Invalid rain sample");if(Math.abs(e-a.time*1e3)>2*36e5)throw new Error("Stale rain grid");t+=a.precipitation*3600/a.interval*zi[o].weight,n+=zi[o].weight,s.push(a.time*1e3)}),{value:t/n,time:Math.min(...s),count:i.length}}function Gc(i,e=Date.now()){if(i.type!=="FeatureCollection"||!Array.isArray(i.features)||!Number.isFinite(i.metadata?.generated))throw new Error("Invalid earthquake feed");if(Math.abs(e-i.metadata.generated)>15*6e4)throw new Error("Stale earthquake feed");let t=i.features.filter(r=>r.properties?.type==="earthquake"&&Number.isFinite(r.properties.time)),n=t.filter(r=>r.properties.time>e-36e5&&r.properties.time<=e).length,s=t.filter(r=>r.properties.time>e-72e5&&r.properties.time<=e-36e5).length;return{current:n,previous:s,time:i.metadata.generated}}function Ta(i){let e=Math.max(0,Math.min(1,(i.temperature?.value||0)/1.5)),t=i.quakes&&i.quakes.current>i.quakes.previous?Math.min(1,(i.quakes.current-i.quakes.previous)/Math.max(1,i.quakes.previous)):0,n=i.rain?Math.min(1,i.rain.value/.5):0,s=i.sea?Math.min(1,i.sea.value/200):0;return{heat:e,shake:t,tears:Math.min(1,n*.75+s*.45),scream:e>2/3}}var Fe=i=>document.getElementById(i),Wc=matchMedia("(prefers-reduced-motion: reduce)").matches,Ge={temperature:{...wa.temperature},sea:{...wa.sea},rain:null,quakes:null},Zt={temperature:{busy:!1,checked:0,failed:!1},sea:{busy:!1,checked:0,failed:!1},rain:{busy:!1,checked:0,failed:!1},quakes:{busy:!1,checked:0,failed:!1}},wm={temperature:864e5,sea:864e5,rain:9e5,quakes:6e4},Tm={temperature:kc,sea:Vc,rain:Hc,quakes:Gc},Am={temperature:Oc,sea:Fc,rain:zc,quakes:Bc},Da=new Gs,Pa=null,Aa=0,Ra=0,La=0,Xc="";function qc(i,e){Fe(i).textContent!==e&&(Fe(i).textContent=e)}var Ws=i=>new Date(i+"-01T00:00:00Z").toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"UTC"}),Ca=i=>new Date(i).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})+" UTC";function Ia(){if(Fe("temperature-value").textContent=`${Ge.temperature.value>=0?"+":""}${Ge.temperature.value.toFixed(2)}\xB0C`,Fe("temperature-date").textContent=Ws(Ge.temperature.date)+(Ge.temperature.saved?" \xB7 saved":""),Fe("temperature-source-note").textContent=`Shown: ${Ws(Ge.temperature.date)}${Ge.temperature.saved?" (saved observation; direct refresh unavailable or pending)":""}.`,Fe("sea-value").textContent=`+${Ge.sea.value.toFixed(1)} mm`,Fe("sea-date").textContent=Ws(Ge.sea.date)+(Ge.sea.saved?" \xB7 saved":""),Fe("sea-source-note").textContent=`Shown: ${Ws(Ge.sea.date)}${Ge.sea.saved?" (saved observation; direct refresh unavailable or pending)":""}.`,Fe("quake-value").textContent=Ge.quakes?`${Ge.quakes.current} /h`:"\u2014",Ge.quakes){let t=Ge.quakes.current-Ge.quakes.previous;Fe("quake-change").textContent=`${t>=0?"+":""}${t} vs previous hour${Zt.quakes.failed?" \xB7 old data":""}`}else Fe("quake-change").textContent=Zt.quakes.failed?"feed unavailable":"last hour";Fe("quake-source-note").textContent=Ge.quakes?`Feed generated ${Ca(Ge.quakes.time)}; ${Ge.quakes.current} events vs ${Ge.quakes.previous} in the preceding hour${Zt.quakes.failed?"; latest refresh failed":""}.`:"Feed unavailable or pending; no automatic shaking without data.",Fe("rain-value").textContent=Ge.rain?`${Ge.rain.value.toFixed(2)}`:"\u2014",Fe("rain-date").textContent=Ge.rain?`mm/h \xB7 ${Ca(Ge.rain.time)}${Zt.rain.failed?" \xB7 old":""}`:Zt.rain.failed?"feed unavailable":"mm/h \xB7 36 samples",Fe("rain-source-note").textContent=Ge.rain?`Model valid ${Ca(Ge.rain.time)}; 36/36 samples${Zt.rain.failed?"; latest refresh failed":""}.`:"Model unavailable or pending; rain adds no tears until data arrives.";let i=Object.values(Zt).some(t=>t.busy),e=Object.values(Zt).some(t=>t.failed);Fe("feed-status").textContent=i?"checking the data\u2026":e||Ge.temperature.saved||Ge.sea.saved?"live + dated readings \xB7 ? for sources":"connected to the data",Fe("refresh").disabled=i}async function Rm(i,e=!1){let t=Zt[i];if(t.busy||!e&&Date.now()-t.checked<wm[i])return;t.busy=!0,t.checked=Date.now(),Ia();let n=new AbortController,s=setTimeout(()=>n.abort(),15e3);try{let r=await fetch(Am[i],{signal:n.signal});if(!r.ok)throw new Error("Source unavailable");let o=["temperature","sea"].includes(i)?await r.text():await r.json(),a=Tm[i](o);if(["temperature","sea"].includes(i)&&a.date<Ge[i].date)throw new Error("Older climate source");Ge[i]=a,t.failed=!1}catch{t.failed=!0}finally{clearTimeout(s),t.busy=!1,Ia()}}function Xs(i=!1){return Promise.all(Object.keys(Zt).map(e=>Rm(e,i)))}function Cm(){let i=Ta(Ge);return Ge.rain&&Date.now()-Ge.rain.time>2*36e5&&(i.tears=Ta({...Ge,rain:null}).tears),Ge.quakes&&Date.now()-Ge.quakes.time>15*6e4&&(i.shake=0),i}function Yc(i){if(requestAnimationFrame(Yc),document.hidden||i-Aa<32)return;let e=Math.min(50,i-Aa);Aa=i;let t=Cm();Ra+=(t.heat-Ra)*(Wc?1:1-Math.exp(-e*.003)),Pa&&Pa.draw({...t,heat:Ra},i,Wc);let n=h=>h>.66?2:h>.28?1:0,s=n(t.heat),r=n(t.tears),o=n(t.shake),a=[];t.heat>.05&&a.push(...[["\u201Cis it getting warm, or is it me?\u201D","\u201Ca little shade would be nice.\u201D"],["\u201Ccould someone turn the heat down?\u201D","\u201Ci could really use a cool breeze.\u201D"],["\u201Cit\u2019s too hot in here.\u201D","\u201Ci\u2019m burning up!\u201D","\u201Cthis is more than a bad fever.\u201D"]][s]),t.shake>0&&a.push(...[["\u201Csomething\u2019s making me restless.\u201D","\u201Ca little unsteady today.\u201D"],["\u201Cno. no. no.\u201D","\u201Ci can\u2019t keep my head still.\u201D"],["\u201Ceverything is shaking!\u201D","\u201Cplease, give me a moment to settle.\u201D"]][o]),t.tears>.04&&a.push(...[["\u201Cjust a little teary today.\u201D","\u201Ci think i need a tissue.\u201D"],["\u201Ci\u2019m a little overwhelmed.\u201D","\u201Cthe water keeps coming.\u201D"],["\u201Ci can\u2019t stop crying.\u201D","\u201Cthat\u2019s a whole ocean of feelings.\u201D","\u201Ci\u2019m trying to hold it together.\u201D"]][r]),a.length||a.push("\u201Cstill here.\u201D","\u201Ca quiet moment. finally.\u201D");let c=`${s}:${r}:${o}:${t.shake>0}:${t.tears>.04}`;c!==Xc&&(Xc=c,La=0),qc("feeling",a[La%a.length].replace(/[“”]/g,"")),qc("reaction-note","move your pointer \xB7 earth follows your gaze");let l=`A blue 3D Earth face is ${t.scream?"surrounded by a warm atmosphere and opening its mouth":"surrounded by a temperature-coloured atmosphere"}, ${t.shake>0?"shaking its head at intensity "+(o+1):"not shaking"}, and ${t.tears>.04?"crying at intensity "+(r+1):"not crying"}. Reactions happen together, based on the displayed observations.`;Fe("planet").getAttribute("aria-label")!==l&&Fe("planet").setAttribute("aria-label",l),Da.tick(t,i)}var Ua=matchMedia("(max-width:950px)");function Na(){let i=Fe("speech").offsetWidth,e=Fe("speech").offsetHeight;if(!i||!e)return;let t=1.5,n=i-t,s=e-t,r=i/2,o=e/2,a=Math.min(26,(e-34)/2,i/4),c=`M ${t+a} ${t} H ${n-a} Q ${n} ${t} ${n} ${t+a} V ${s-a} Q ${n} ${s} ${n-a} ${s}`;Ua.matches&&(c+=` H ${r+18} C ${r+9} ${s} ${r+8} ${s+8} ${r+3} ${s+17} Q ${r} ${s+22} ${r-3} ${s+17} C ${r-8} ${s+8} ${r-9} ${s} ${r-18} ${s}`),c+=` H ${t+a} Q ${t} ${s} ${t} ${s-a}`,Ua.matches||(c+=` V ${o+16} C ${t} ${o+8} -5 ${o+7} -17 ${o+3} Q -22 ${o} -17 ${o-3} C -5 ${o-7} ${t} ${o-8} ${t} ${o-16}`),c+=` V ${t+a} Q ${t} ${t} ${t+a} ${t} Z`,Fe("speech-shape").setAttribute("viewBox",`0 0 ${i} ${e}`),Fe("speech-outline").setAttribute("d",c)}new ResizeObserver(Na).observe(Fe("speech"));Ua.addEventListener("change",Na);Na();Fe("speech").addEventListener("click",()=>{La++});Fe("sound").addEventListener("click",async()=>{try{let i=await Da.toggle();Fe("sound").setAttribute("aria-pressed",String(i)),Fe("sound").innerHTML=i?'sound on <span aria-hidden="true">\u25C9</span>':'sound off <span aria-hidden="true">\u25CC</span>'}catch{Fe("sound").textContent="sound unavailable"}});Fe("refresh").addEventListener("click",()=>Xs(!0));Fe("info-open").addEventListener("click",()=>Fe("info").showModal());Fe("info-close").addEventListener("click",()=>Fe("info").close());Fe("info").addEventListener("click",i=>{let e=Fe("info").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&Fe("info").close()});document.addEventListener("visibilitychange",()=>{Da.visibility(document.hidden).catch(()=>{}),document.hidden||Xs()});setInterval(()=>{document.hidden||Xs()},6e4);try{Pa=Nc(Fe("globe"))}catch{Fe("planet").classList.add("fallback"),Fe("globe").innerHTML='<svg viewBox="0 0 400 400" width="100%" height="100%"><circle cx="200" cy="200" r="148" fill="#246386"/><path d="M68 135L105 90 151 100 142 138 120 164 132 205 95 230 63 183M284 100L329 150 329 218 284 257 266 209 285 158Z" fill="#719377"/><ellipse cx="160" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="240" cy="174" rx="23" ry="32" fill="#fffdf1"/><ellipse cx="164" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="236" cy="179" rx="13" ry="21" fill="#352631"/><ellipse cx="200" cy="255" rx="23" ry="29" fill="#352631"/></svg>'}Ia();Xs();requestAnimationFrame(Yc);})();
/*! For license information please see app.js.LEGAL.txt */
