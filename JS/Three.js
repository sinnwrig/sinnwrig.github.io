/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
*/

const ho="129",Gd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,uo=1,Sl=2,kd=3,Vd=0,fo=1,Tl=2,jn=3,$n=0,Je=1,Bi=2,po=1,Wd=2,Wt=0,Qn=1,mo=2,go=3,xo=4,El=5,Tn=100,Al=101,Ll=102,yo=103,vo=104,Rl=200,Cl=201,Pl=202,Il=203,_o=204,wo=205,Dl=206,Fl=207,Bl=208,Nl=209,zl=210,Ul=0,Ol=1,Gl=2,Fr=3,Hl=4,kl=5,Vl=6,Wl=7,Ni=0,ql=1,Xl=2,En=0,Yl=1,Zl=2,Jl=3,jl=4,$l=5,Br=300,zi=301,Ui=302,Nr=303,zr=304,Kn=306,Oi=307,Gi=1e3,at=1001,Hi=1002,je=1003,Ur=1004,qd=1004,Or=1005,Xd=1005,Ke=1006,Mo=1007,Yd=1007,An=1008,Zd=1008,ei=1009,Ql=1010,Kl=1011,ki=1012,ec=1013,Vi=1014,qt=1015,Wi=1016,tc=1017,nc=1018,ic=1019,ti=1020,rc=1021,nn=1022,Mt=1023,sc=1024,oc=1025,ac=Mt,Ln=1026,ni=1027,lc=1028,cc=1029,hc=1030,uc=1031,dc=1032,fc=1033,bo=33776,So=33777,To=33778,Eo=33779,Ao=35840,Lo=35841,Ro=35842,Co=35843,pc=36196,Po=37492,Io=37496,mc=37808,gc=37809,xc=37810,yc=37811,vc=37812,_c=37813,wc=37814,Mc=37815,bc=37816,Sc=37817,Tc=37818,Ec=37819,Ac=37820,Lc=37821,Rc=36492,Cc=37840,Pc=37841,Ic=37842,Dc=37843,Fc=37844,Bc=37845,Nc=37846,zc=37847,Uc=37848,Oc=37849,Gc=37850,Hc=37851,kc=37852,Vc=37853,Wc=2200,qc=2201,Xc=2202,qi=2300,Xi=2301,Gr=2302,Rn=2400,Cn=2401,Yi=2402,Hr=2500,Do=2501,Yc=0,Jd=1,jd=2,xt=3e3,Zi=3001,kr=3007,Vr=3002,Zc=3003,Fo=3004,Bo=3005,No=3006,Jc=3200,jc=3201,Pn=0,$c=1,$d=0,Wr=7680,Qd=7681,Kd=7682,ef=7683,tf=34055,nf=34056,rf=5386,sf=512,of=513,af=514,lf=515,cf=516,hf=517,uf=518,Qc=519,ii=35044,ri=35048,df=35040,ff=35045,pf=35049,mf=35041,gf=35046,xf=35050,yf=35042,vf="100",zo="300 es";class rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners,i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners,n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const lt=[];for(let s=0;s<256;s++)lt[s]=(s<16?"0":"")+s.toString(16);let qr=1234567;const In=Math.PI/180,Ji=180/Math.PI;function bt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=lt[s&255]+lt[s>>8&255]+lt[s>>16&255]+lt[s>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255];return i.toUpperCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function Uo(s,e){return(s%e+e)%e}function _f(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wf(s,e,t){return s!==e?(t-s)/(e-s):0}function ji(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,n){return ji(s,e,1-Math.exp(-t*n))}function bf(s,e=1){return e-Math.abs(Uo(s,e*2)-e)}function Sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ef(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Af(s,e){return s+Math.random()*(e-s)}function Lf(s){return s*(.5-Math.random())}function Rf(s){return s!==void 0&&(qr=s%2147483647),qr=qr*16807%2147483647,(qr-1)/2147483646}function Cf(s){return s*In}function Pf(s){return s*Ji}function Oo(s){return(s&s-1)===0&&s!==0}function Kc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function If(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var th=Object.freeze({__proto__:null,DEG2RAD:In,RAD2DEG:Ji,generateUUID:bt,clamp:ct,euclideanModulo:Uo,mapLinear:_f,inverseLerp:wf,lerp:ji,damp:Mf,pingpong:bf,smoothstep:Sf,smootherstep:Tf,randInt:Ef,randFloat:Af,randFloatSpread:Lf,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:Oo,ceilPowerOfTwo:Kc,floorPowerOfTwo:eh,setQuaternionFromProperEuler:If});class q{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}q.prototype.isVector2=!0;class et{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],y=i[3],g=i[6],m=i[1],_=i[4],M=i[7],T=i[2],v=i[5],A=i[8];return r[0]=o*x+a*m+c*T,r[3]=o*y+a*_+c*v,r[6]=o*g+a*M+c*A,r[1]=l*x+h*m+u*T,r[4]=l*y+h*_+u*v,r[7]=l*g+h*M+u*A,r[2]=d*x+f*m+p*T,r[5]=d*y+f*_+p*v,r[8]=d*g+f*M+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}et.prototype.isMatrix3=!0;let si;class Dn{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Df=0;class tt extends rn{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,n=at,i=at,r=Ke,o=An,a=Mt,c=ei,l=1,h=xt){super();Object.defineProperty(this,"id",{value:Df++}),this.uuid=bt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=bt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Go(i[o].image)):r.push(Go(i[o]))}else r=Go(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Br)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case at:e.x=e.x<0?0:1;break;case Hi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case at:e.y=e.y<0?0:1;break;case Hi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}tt.DEFAULT_IMAGE=void 0,tt.DEFAULT_MAPPING=Br,tt.prototype.isTexture=!0;function Go(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Dn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ne{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const o=.01,a=.1,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],y=c[6],g=c[10];if(Math.abs(h-d)<o&&Math.abs(u-x)<o&&Math.abs(p-y)<o){if(Math.abs(h+d)<a&&Math.abs(u+x)<a&&Math.abs(p+y)<a&&Math.abs(l+f+g-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(f+1)/2,T=(g+1)/2,v=(h+d)/4,A=(u+x)/4,L=(p+y)/4;return _>M&&_>T?_<o?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=v/n,r=A/n):M>T?M<o?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=v/i,r=L/i):T<o?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=L/r),this.set(n,i,r,t),this}let m=Math.sqrt((y-p)*(y-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(y-p)/m,this.y=(u-x)/m,this.z=(d-h)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Ne.prototype.isVector4=!0;class Rt extends rn{constructor(e,t,n){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ne(0,0,e,t),this.scissorTest=!1,this.viewport=new Ne(0,0,e,t),n=n||{},this.texture=new tt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.prototype.isWebGLRenderTarget=!0;class nh extends Rt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}nh.prototype.isWebGLMultipleRenderTargets=!0;class ih extends Rt{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}ih.prototype.isWebGLMultisampleRenderTarget=!0;class nt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==p){let y=1-a;const g=c*d+l*f+h*p+u*x,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const T=Math.sqrt(_),v=Math.atan2(T,g*m);y=Math.sin(y*v)/T,a=Math.sin(a*v)/T}const M=a*m;if(c=c*y+d*M,l=l*y+f*M,h=h*y+p*M,u=u*y+x*M,y===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}nt.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,u=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}w.prototype.isVector3=!0;const Ho=new w,rh=new nt;class _t{constructor(e=new w(Infinity,Infinity,Infinity),t=new w(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox),ko.applyMatrix4(e.matrixWorld),this.union(ko));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Xr.subVectors(this.max,Qi),oi.subVectors(e.a,Qi),ai.subVectors(e.b,Qi),li.subVectors(e.c,Qi),sn.subVectors(ai,oi),on.subVectors(li,ai),Fn.subVectors(oi,li);let t=[0,-sn.z,sn.y,0,-on.z,on.y,0,-Fn.z,Fn.y,sn.z,0,-sn.x,on.z,0,-on.x,Fn.z,0,-Fn.x,-sn.y,sn.x,0,-on.y,on.x,0,-Fn.y,Fn.x,0];return Vo(t,oi,ai,li,Xr)?(t=[1,0,0,0,1,0,0,0,1],Vo(t,oi,ai,li,Xr)?(Yr.crossVectors(sn,on),t=[Yr.x,Yr.y,Yr.z],Vo(t,oi,ai,li,Xr)):!1):!1}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){const t=$i.copy(e).clamp(this.min,this.max);return t.sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize($i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}_t.prototype.isBox3=!0;const Xt=[new w,new w,new w,new w,new w,new w,new w,new w],$i=new w,ko=new _t,oi=new w,ai=new w,li=new w,sn=new w,on=new w,Fn=new w,Qi=new w,Xr=new w,Yr=new w,Bn=new w;function Vo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ff=new _t,sh=new w,Wo=new w,qo=new w;class an{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new _t),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(qo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Wo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(sh.copy(e.center).add(Wo)),this.expandByPoint(sh.copy(e.center).sub(Wo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new w,Xo=new w,Zr=new w,ln=new w,Yo=new w,Jr=new w,Zo=new w;class cn{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xo.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=ln.dot(this.direction),c=-ln.dot(Zr),l=ln.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Zr).multiplyScalar(d).add(Xo),f}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i?null:((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i?null:((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,i,r){Yo.subVectors(t,e),Jr.subVectors(n,e),Zo.crossVectors(Yo,Jr);let o=this.direction.dot(Zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=a*this.direction.dot(Jr.crossVectors(ln,Jr));if(c<0)return null;const l=a*this.direction.dot(Yo.cross(ln));if(l<0)return null;if(c+l>o)return null;const h=-a*ln.dot(Zo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,x,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,Nf)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),hn.crossVectors(n,St),hn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),hn.crossVectors(n,St)),hn.normalize(),jr.crossVectors(St,hn),i[0]=hn.x,i[4]=jr.x,i[8]=St.x,i[1]=hn.y,i[5]=jr.y,i[9]=St.y,i[2]=hn.z,i[6]=jr.z,i[10]=St.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],y=n[10],g=n[14],m=n[3],_=n[7],M=n[11],T=n[15],v=i[0],A=i[4],L=i[8],I=i[12],N=i[1],G=i[5],z=i[9],R=i[13],D=i[2],F=i[6],C=i[10],W=i[14],ee=i[3],J=i[7],oe=i[11],re=i[15];return r[0]=o*v+a*N+c*D+l*ee,r[4]=o*A+a*G+c*F+l*J,r[8]=o*L+a*z+c*C+l*oe,r[12]=o*I+a*R+c*W+l*re,r[1]=h*v+u*N+d*D+f*ee,r[5]=h*A+u*G+d*F+f*J,r[9]=h*L+u*z+d*C+f*oe,r[13]=h*I+u*R+d*W+f*re,r[2]=p*v+x*N+y*D+g*ee,r[6]=p*A+x*G+y*F+g*J,r[10]=p*L+x*z+y*C+g*oe,r[14]=p*I+x*R+y*W+g*re,r[3]=m*v+_*N+M*D+T*ee,r[7]=m*A+_*G+M*F+T*J,r[11]=m*L+_*z+M*C+T*oe,r[15]=m*I+_*R+M*W+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],y=e[11],g=e[15];return p*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+y*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+g*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],y=e[14],g=e[15],m=u*y*l-x*d*l+x*c*f-a*y*f-u*c*g+a*d*g,_=p*d*l-h*y*l-p*c*f+o*y*f+h*c*g-o*d*g,M=h*x*l-p*u*l+p*a*f-o*x*f-h*a*g+o*u*g,T=p*u*c-h*x*c-p*a*d+o*x*d+h*a*y-o*u*y,v=t*m+n*_+i*M+r*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=m*A,e[1]=(x*d*r-u*y*r-x*i*f+n*y*f+u*i*g-n*d*g)*A,e[2]=(a*y*r-x*c*r+x*i*l-n*y*l-a*i*g+n*c*g)*A,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=_*A,e[5]=(h*y*r-p*d*r+p*i*f-t*y*f-h*i*g+t*d*g)*A,e[6]=(p*c*r-o*y*r-p*i*l+t*y*l+o*i*g-t*c*g)*A,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=M*A,e[9]=(p*u*r-h*x*r-p*n*f+t*x*f+h*n*g-t*u*g)*A,e[10]=(o*x*r-p*a*r+p*n*l-t*x*l-o*n*g+t*a*g)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(h*x*i-p*u*i+p*n*d-t*x*d-h*n*y+t*u*y)*A,e[14]=(p*a*i-o*x*i-p*n*c+t*x*c+o*n*y-t*a*y)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,x=o*h,y=o*u,g=a*u,m=c*l,_=c*h,M=c*u,T=n.x,v=n.y,A=n.z;return i[0]=(1-(x+g))*T,i[1]=(f+M)*T,i[2]=(p-_)*T,i[3]=0,i[4]=(f-M)*v,i[5]=(1-(d+g))*v,i[6]=(y+m)*v,i[7]=0,i[8]=(p+_)*A,i[9]=(y-m)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length(),c=this.determinant();c<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ct.copy(this);const l=1/r,h=1/o,u=1/a;return Ct.elements[0]*=l,Ct.elements[1]*=l,Ct.elements[2]*=l,Ct.elements[4]*=h,Ct.elements[5]*=h,Ct.elements[6]*=h,Ct.elements[8]*=u,Ct.elements[9]*=u,Ct.elements[10]*=u,t.setFromRotationMatrix(Ct),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),u=(t+e)*c,d=(n+i)*l,f=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ce.prototype.isMatrix4=!0;const ci=new w,Ct=new ce,Bf=new w(0,0,0),Nf=new w(1,1,1),hn=new w,jr=new w,St=new w,oh=new ce,ah=new nt;class Nn{constructor(e=0,t=0,n=0,i=Nn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];t=t||this._order;switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Nn.prototype.isEuler=!0,Nn.DefaultOrder="XYZ",Nn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jo{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let zf=0;const lh=new w,hi=new nt,Zt=new ce,$r=new w,Ki=new w,Uf=new w,Of=new nt,ch=new w(1,0,0),hh=new w(0,1,0),uh=new w(0,0,1),Gf={type:"added"},dh={type:"removed"};class Te extends rn{constructor(){super();Object.defineProperty(this,"id",{value:zf++}),this.uuid=bt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DefaultUp.clone();const e=new w,t=new Nn,n=new nt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new et}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Ki,$r,this.up):Zt.lookAt($r,Ki,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(Zt),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(dh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n],o=r.getObjectByProperty(e,t);if(o!==void 0)return o}return}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new nt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Uf),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Of,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Te.DefaultUp=new w(0,1,0),Te.DefaultMatrixAutoUpdate=!0,Te.prototype.isObject3D=!0;const jo=new w,Hf=new w,kf=new et;class Pt{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jo.subVectors(n,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);const n=e.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kf.getNormalMatrix(e),i=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Pt.prototype.isPlane=!0;const It=new w,Jt=new w,$o=new w,jt=new w,ui=new w,di=new w,fh=new w,Qo=new w,Ko=new w,ea=new w;class Xe{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){It.subVectors(i,t),Jt.subVectors(n,t),$o.subVectors(e,t);const o=It.dot(It),a=It.dot(Jt),c=It.dot($o),l=Jt.dot(Jt),h=Jt.dot($o),u=o*l-a*a;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new w),u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,jt),c.set(0,0),c.addScaledVector(r,jt.x),c.addScaledVector(o,jt.y),c.addScaledVector(a,jt.z),c}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),Jt.subVectors(e,t),It.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),It.cross(Jt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Pt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Xe.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);const n=this.a,i=this.b,r=this.c;let o,a;ui.subVectors(i,n),di.subVectors(r,n),Qo.subVectors(e,n);const c=ui.dot(Qo),l=di.dot(Qo);if(c<=0&&l<=0)return t.copy(n);Ko.subVectors(e,i);const h=ui.dot(Ko),u=di.dot(Ko);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ui,o);ea.subVectors(e,r);const f=ui.dot(ea),p=di.dot(ea);if(p>=0&&f<=p)return t.copy(r);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(di,a);const y=h*p-f*u;if(y<=0&&u-h>=0&&f-p>=0)return fh.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(fh,a);const g=1/(y+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(ui,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vf=0;class it extends rn{constructor(){super();Object.defineProperty(this,"id",{value:Vf++}),this.uuid=bt(),this.name="",this.type="Material",this.fog=!0,this.blending=Qn,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_o,this.blendDst=wo,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===po;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}it.prototype.isMaterial=!0;const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class ne{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Uo(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ta(r,i,e+1/3),this.g=ta(r,i,e),this.b=ta(r,i,e-1/3)}return this}setStyle(e){function t(i){if(i===void 0)return;parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ph[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let a,c;const l=(o+r)/2;if(o===r)a=0,c=0;else{const h=r-o;c=l<=.5?h/(r+o):h/(2-r-o);switch(r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(Qr);const n=ji(Dt.h,Qr.h,t),i=ji(Dt.s,Qr.s,t),r=ji(Dt.l,Qr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ne.NAMES=ph,ne.prototype.isColor=!0,ne.prototype.r=1,ne.prototype.g=1,ne.prototype.b=1;class $t extends it{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this}}$t.prototype.isMeshBasicMaterial=!0;const Oe=new w,Kr=new q;class Ee{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ii,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ne),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new q),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new w),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ne),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Oe.fromBufferAttribute(this,t),Oe.applyMatrix3(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.applyMatrix4(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.applyNormalMatrix(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.transformDirection(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ii&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ee.prototype.isBufferAttribute=!0;class mh extends Ee{constructor(e,t,n){super(new Int8Array(e),t,n)}}class gh extends Ee{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class xh extends Ee{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class yh extends Ee{constructor(e,t,n){super(new Int16Array(e),t,n)}}class es extends Ee{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends Ee{constructor(e,t,n){super(new Int32Array(e),t,n)}}class ts extends Ee{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _h extends Ee{constructor(e,t,n){super(new Uint16Array(e),t,n)}}_h.prototype.isFloat16BufferAttribute=!0;class le extends Ee{constructor(e,t,n){super(new Float32Array(e),t,n)}}class wh extends Ee{constructor(e,t,n){super(new Float64Array(e),t,n)}}function Mh(s){if(s.length===0)return-Infinity;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}const Wf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function er(s,e){return new Wf[s](e)}let qf=0;const At=new ce,ra=new Te,fi=new w,Tt=new _t,tr=new _t,rt=new w;class fe extends rn{constructor(){super();Object.defineProperty(this,"id",{value:qf++}),this.uuid=bt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)>65535?ts:es)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(Tt.min,tr.min),Tt.expandByPoint(rt),rt.addVectors(Tt.max,tr.max),Tt.expandByPoint(rt)):(Tt.expandByPoint(tr.min),Tt.expandByPoint(tr.max))}Tt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rt.fromBufferAttribute(a,l),c&&(fi.fromBufferAttribute(e,l),rt.add(fi)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ee(new Float32Array(4*a),4));const c=t.tangent.array,l=[],h=[];for(let N=0;N<a;N++)l[N]=new w,h[N]=new w;const u=new w,d=new w,f=new w,p=new q,x=new q,y=new q,g=new w,m=new w;function _(N,G,z){u.fromArray(i,N*3),d.fromArray(i,G*3),f.fromArray(i,z*3),p.fromArray(o,N*2),x.fromArray(o,G*2),y.fromArray(o,z*2),d.sub(u),f.sub(u),x.sub(p),y.sub(p);const R=1/(x.x*y.y-y.x*x.y);if(!isFinite(R))return;g.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(R),m.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(R),l[N].add(g),l[G].add(g),l[z].add(g),h[N].add(m),h[G].add(m),h[z].add(m)}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let N=0,G=M.length;N<G;++N){const z=M[N],R=z.start,D=z.count;for(let F=R,C=R+D;F<C;F+=3)_(n[F+0],n[F+1],n[F+2])}const T=new w,v=new w,A=new w,L=new w;function I(N){A.fromArray(r,N*3),L.copy(A);const G=l[N];T.copy(G),T.sub(A.multiplyScalar(A.dot(G))).normalize(),v.crossVectors(L,G);const z=v.dot(h[N]),R=z<0?-1:1;c[N*4]=T.x,c[N*4+1]=T.y,c[N*4+2]=T.z,c[N*4+3]=R}for(let N=0,G=M.length;N<G;++N){const z=M[N],R=z.start,D=z.count;for(let F=R,C=R+D;F<C;F+=3)I(n[F+0]),I(n[F+1]),I(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i],o=r.array,a=e.attributes[i],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let x=0,y=c.length;x<y;x++){f=c[x]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new fe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}fe.prototype.isBufferGeometry=!0;const bh=new ce,pi=new cn,sa=new an,un=new w,dn=new w,fn=new w,oa=new w,aa=new w,la=new w,ns=new w,is=new w,rs=new w,ss=new q,os=new q,as=new q,ca=new w,ls=new w;class $e extends Te{constructor(e=new fe,t=new $t){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),e.ray.intersectsSphere(sa)===!1)return;if(bh.copy(r).invert(),pi.copy(e.ray).applyMatrix4(bh),n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const g=f[x],m=i[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(g.start+g.count,p.start+p.count);for(let T=_,v=M;T<v;T+=3){const A=a.getX(T),L=a.getX(T+1),I=a.getX(T+2);o=cs(this,m,e,pi,c,l,h,u,d,A,L,I),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const _=a.getX(g),M=a.getX(g+1),T=a.getX(g+2);o=cs(this,i,e,pi,c,l,h,u,d,_,M,T),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const g=f[x],m=i[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(g.start+g.count,p.start+p.count);for(let T=_,v=M;T<v;T+=3){const A=T,L=T+1,I=T+2;o=cs(this,m,e,pi,c,l,h,u,d,A,L,I),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const _=g,M=g+1,T=g+2;o=cs(this,i,e,pi,c,l,h,u,d,_,M,T),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}$e.prototype.isMesh=!0;function Xf(s,e,t,n,i,r,o,a){let c;if(e.side===Je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==Bi,a),c===null)return null;ls.copy(a),ls.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ls);return l<t.near||l>t.far?null:{distance:l,point:ls.clone(),object:s}}function cs(s,e,t,n,i,r,o,a,c,l,h,u){un.fromBufferAttribute(i,l),dn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(e.morphTargets&&r&&d){ns.set(0,0,0),is.set(0,0,0),rs.set(0,0,0);for(let p=0,x=r.length;p<x;p++){const y=d[p],g=r[p];if(y===0)continue;oa.fromBufferAttribute(g,l),aa.fromBufferAttribute(g,h),la.fromBufferAttribute(g,u),o?(ns.addScaledVector(oa,y),is.addScaledVector(aa,y),rs.addScaledVector(la,y)):(ns.addScaledVector(oa.sub(un),y),is.addScaledVector(aa.sub(dn),y),rs.addScaledVector(la.sub(fn),y))}un.add(ns),dn.add(is),fn.add(rs)}s.isSkinnedMesh&&(s.boneTransform(l,un),s.boneTransform(h,dn),s.boneTransform(u,fn));const f=Xf(s,e,t,n,un,dn,fn,ca);if(f){a&&(ss.fromBufferAttribute(a,l),os.fromBufferAttribute(a,h),as.fromBufferAttribute(a,u),f.uv=Xe.getUV(ca,un,dn,fn,ss,os,as,new q)),c&&(ss.fromBufferAttribute(c,l),os.fromBufferAttribute(c,h),as.fromBufferAttribute(c,u),f.uv2=Xe.getUV(ca,un,dn,fn,ss,os,as,new q));const p={a:l,b:h,c:u,normal:new w,materialIndex:0};Xe.getNormal(un,dn,fn,p.normal),f.face=p}return f}class zn extends fe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function p(x,y,g,m,_,M,T,v,A,L,I){const N=M/A,G=T/L,z=M/2,R=T/2,D=v/2,F=A+1,C=L+1;let W=0,ee=0;const J=new w;for(let oe=0;oe<C;oe++){const re=oe*G-R;for(let Me=0;Me<F;Me++){const _e=Me*N-z;J[x]=_e*m,J[y]=re*_,J[g]=D,l.push(J.x,J.y,J.z),J[x]=0,J[y]=0,J[g]=v>0?1:-1,h.push(J.x,J.y,J.z),u.push(Me/A),u.push(1-oe/L),W+=1}}for(let oe=0;oe<L;oe++)for(let re=0;re<A;re++){const Me=d+re+F*oe,_e=d+re+F*(oe+1),Be=d+(re+1)+F*(oe+1),Ce=d+(re+1)+F*oe;c.push(Me,_e,Ce),c.push(_e,Be,Ce),ee+=6}a.addGroup(f,ee,I),f+=ee,d+=W}}}function mi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ft(s){const e={};for(let t=0;t<s.length;t++){const n=mi(s[t]);for(const i in n)e[i]=n[i]}return e}const Sh={clone:mi,merge:ft};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends it{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Yf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i],o=r.value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Qt.prototype.isShaderMaterial=!0;class nr extends Te{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}nr.prototype.isCamera=!0;class st extends nr{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(In*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(In*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(In*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}st.prototype.isPerspectiveCamera=!0;const gi=90,xi=1;class hs extends Te{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new st(gi,xi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new st(gi,xi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const o=new st(gi,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new w(0,1,0)),this.add(o);const a=new st(gi,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new w(0,-1,0)),this.add(a);const c=new st(gi,xi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,1)),this.add(c);const l=new st(gi,xi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h}}class yi extends tt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zi,a=a!==void 0?a:nn,super(e,t,n,i,r,o,a,c,l,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}yi.prototype.isCubeTexture=!0;class us extends Rt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new yi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ke,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zn(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Wt});r.uniforms.tEquirect.value=t;const o=new $e(i,r),a=t.minFilter;t.minFilter===An&&(t.minFilter=Ke);const c=new hs(1,10,this);return c.update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}us.prototype.isWebGLCubeRenderTarget=!0;const vi=new an,ds=new w;class ir{constructor(e=new Pt,t=new Pt,n=new Pt,i=new Pt,r=new Pt,o=new Pt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],p=n[10],x=n[11],y=n[12],g=n[13],m=n[14],_=n[15];return t[0].setComponents(a-i,u-c,x-d,_-y).normalize(),t[1].setComponents(a+i,u+c,x+d,_+y).normalize(),t[2].setComponents(a+r,u+l,x+f,_+g).normalize(),t[3].setComponents(a-r,u-l,x-f,_-g).normalize(),t[4].setComponents(a-o,u-h,x-p,_-m).normalize(),t[5].setComponents(a+o,u+h,x+p,_+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++){const o=t[r].distanceToPoint(n);if(o<i)return!1}return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){if(e===!0)return;if(t===null)return;n=s.requestAnimationFrame(i),e=!0},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,l),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class rr extends fe{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],x=[],y=[];for(let g=0;g<h;g++){const m=g*d-o;for(let _=0;_<l;_++){const M=_*u-r;p.push(M,-m,0),x.push(0,0,1),y.push(_/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const _=m+l*g,M=m+l*(g+1),T=m+1+l*(g+1),v=m+1+l*g;f.push(_,M,v),f.push(M,T,v)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(y,2))}}var jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp="vec3 transformed = vec3( position );",np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Mp=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Np=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), rawDiffuseColor, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), rawDiffuseColor, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,im=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,om=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,lm=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,vm=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,_m=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,wm=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
	#ifdef USE_TRANSMISSIONMAP
		totalTransmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSNMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	vec3 viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 f0 = vec3( pow( ior - 1.0, 2.0 ) / pow( ior + 1.0, 2.0 ) );
	vec3 f90 = vec3( 1.0 );
	vec3 f_transmission = totalTransmission * getIBLVolumeRefraction(
		normal, v, viewDir, roughnessFactor, diffuseColor.rgb, f0, f90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance);
	diffuseColor.rgb = mix( diffuseColor.rgb, f_transmission, totalTransmission );
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, vec3 viewDir, float perceptualRoughness, vec3 baseColor, vec3 f0, vec3 f90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		float NdotV = saturate(dot(n, viewDir));
		vec2 brdf = integrateSpecularBRDF(NdotV, perceptualRoughness);
		vec3 specularColor = f0 * brdf.x + f90 * brdf.y;
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,Im=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Dm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,sg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform vec3 attenuationColor;
	uniform float attenuationDistance;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef USE_TRANSMISSION
		float totalTransmission = transmission;
		float thicknessFactor = thickness;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	vec3 rawDiffuseColor = diffuseColor.rgb;
	#include <transmission_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
	vWorldPosition = worldPosition;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pg=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gg=`uniform float rotation;
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
}`;const Ae={alphamap_fragment:jf,alphamap_pars_fragment:$f,alphatest_fragment:Qf,aomap_fragment:Kf,aomap_pars_fragment:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,bumpmap_pars_fragment:rp,clipping_planes_fragment:sp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:yp,emissivemap_pars_fragment:vp,encodings_fragment:_p,encodings_pars_fragment:wp,envmap_fragment:Mp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Sp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:Ap,fog_pars_vertex:Lp,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_fragment:Ip,lightmap_pars_fragment:Dp,lights_lambert_vertex:Fp,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Up,lights_phong_fragment:Op,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:kp,lights_fragment_begin:Vp,lights_fragment_maps:Wp,lights_fragment_end:qp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:jp,map_pars_fragment:$p,map_particle_fragment:Qp,map_particle_pars_fragment:Kp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,packing:um,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:_m,shadowmask_pars_fragment:wm,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:Tm,specularmap_fragment:Em,specularmap_pars_fragment:Am,tonemapping_fragment:Lm,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Im,uv_pars_vertex:Dm,uv_vertex:Fm,uv2_pars_fragment:Bm,uv2_pars_vertex:Nm,uv2_vertex:zm,worldpos_vertex:Um,background_frag:Om,background_vert:Gm,cube_frag:Hm,cube_vert:km,depth_frag:Vm,depth_vert:Wm,distanceRGBA_frag:qm,distanceRGBA_vert:Xm,equirect_frag:Ym,equirect_vert:Zm,linedashed_frag:Jm,linedashed_vert:jm,meshbasic_frag:$m,meshbasic_vert:Qm,meshlambert_frag:Km,meshlambert_vert:eg,meshmatcap_frag:tg,meshmatcap_vert:ng,meshtoon_frag:ig,meshtoon_vert:rg,meshphong_frag:sg,meshphong_vert:og,meshphysical_frag:ag,meshphysical_vert:lg,normal_frag:cg,normal_vert:hg,points_frag:ug,points_vert:dg,shadow_frag:fg,shadow_vert:pg,sprite_frag:mg,sprite_vert:gg},K={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new et},uv2Transform:{value:new et},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}}},Ft={basic:{uniforms:ft([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ft([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ft([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ft([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ft([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ft([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ft([K.points,K.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ft([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ft([K.common,K.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ft([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.normal_vert,fragmentShader:Ae.normal_frag},sprite:{uniforms:ft([K.sprite,K.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:ft([K.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ft([K.common,K.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ft([K.lights,K.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ft.physical={uniforms:ft([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ne(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function xg(s,e,t,n,i){const r=new ne(0);let o=0,a,c,l=null,h=0,u=null;function d(p,x){let y=!1,g=x.isScene===!0?x.background:null;g&&g.isTexture&&(g=e.get(g));const m=s.xr,_=m.getSession&&m.getSession();_&&_.environmentBlendMode==="additive"&&(g=null),g===null?f(r,o):g&&g.isColor&&(f(g,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Kn)?(c===void 0&&(c=new $e(new zn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:mi(Ft.cube.uniforms),vertexShader:Ft.cube.vertexShader,fragmentShader:Ft.cube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g._needsFlipEnvMap?-1:1,(l!==g||h!==g.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,l=g,h=g.version,u=s.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(a===void 0&&(a=new $e(new rr(2,2),new Qt({name:"BackgroundMaterial",uniforms:mi(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(l!==g||h!==g.version||u!==s.toneMapping)&&(a.material.needsUpdate=!0,l=g,h=g.version,u=s.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,x){t.buffers.color.setClear(p.r,p.g,p.b,x,i)}return{getClearColor:function(){return r},setClearColor:function(p,x=1){r.set(p),o=x,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(r,o)},render:d}}function yg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=x(null);let l=c;function h(R,D,F,C,W){let ee=!1;if(o){const J=p(C,F,D);l!==J&&(l=J,d(l.object)),ee=y(C,W),ee&&g(C,W)}else{const J=D.wireframe===!0;(l.geometry!==C.id||l.program!==F.id||l.wireframe!==J)&&(l.geometry=C.id,l.program=F.id,l.wireframe=J,ee=!0)}R.isInstancedMesh===!0&&(ee=!0),W!==null&&t.update(W,34963),ee&&(A(R,D,F,C),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function f(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,D,F){const C=F.wireframe===!0;let W=a[R.id];W===void 0&&(W={},a[R.id]=W);let ee=W[D.id];ee===void 0&&(ee={},W[D.id]=ee);let J=ee[C];return J===void 0&&(J=x(u()),ee[C]=J),J}function x(R){const D=[],F=[],C=[];for(let W=0;W<i;W++)D[W]=0,F[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:C,object:R,attributes:{},index:null}}function y(R,D){const F=l.attributes,C=R.attributes;let W=0;for(const ee in C){const J=F[ee],oe=C[ee];if(J===void 0)return!0;if(J.attribute!==oe)return!0;if(J.data!==oe.data)return!0;W++}return l.attributesNum!==W?!0:l.index!==D}function g(R,D){const F={},C=R.attributes;let W=0;for(const ee in C){const J=C[ee],oe={};oe.attribute=J,J.data&&(oe.data=J.data),F[ee]=oe,W++}l.attributes=F,l.attributesNum=W,l.index=D}function m(){const R=l.newAttributes;for(let D=0,F=R.length;D<F;D++)R[D]=0}function _(R){M(R,0)}function M(R,D){const F=l.newAttributes,C=l.enabledAttributes,W=l.attributeDivisors;if(F[R]=1,C[R]===0&&(s.enableVertexAttribArray(R),C[R]=1),W[R]!==D){const ee=n.isWebGL2?s:e.get("ANGLE_instanced_arrays");ee[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,D),W[R]=D}}function T(){const R=l.newAttributes,D=l.enabledAttributes;for(let F=0,C=D.length;F<C;F++)D[F]!==R[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function v(R,D,F,C,W,ee){n.isWebGL2===!0&&(F===5124||F===5125)?s.vertexAttribIPointer(R,D,F,W,ee):s.vertexAttribPointer(R,D,F,C,W,ee)}function A(R,D,F,C){if(n.isWebGL2===!1&&(R.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const W=C.attributes,ee=F.getAttributes(),J=D.defaultAttributeValues;for(const oe in ee){const re=ee[oe];if(re>=0){const Me=W[oe];if(Me!==void 0){const _e=Me.normalized,Be=Me.itemSize,Ce=t.get(Me);if(Ce===void 0)continue;const k=Ce.buffer,ke=Ce.type,Pe=Ce.bytesPerElement;if(Me.isInterleavedBufferAttribute){const we=Me.data,me=we.stride,Le=Me.offset;we&&we.isInstancedInterleavedBuffer?(M(re,we.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=we.meshPerAttribute*we.count)):_(re),s.bindBuffer(34962,k),v(re,Be,ke,_e,me*Pe,Le*Pe)}else Me.isInstancedBufferAttribute?(M(re,Me.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=Me.meshPerAttribute*Me.count)):_(re),s.bindBuffer(34962,k),v(re,Be,ke,_e,0,0)}else if(oe==="instanceMatrix"){const _e=t.get(R.instanceMatrix);if(_e===void 0)continue;const Be=_e.buffer,Ce=_e.type;M(re+0,1),M(re+1,1),M(re+2,1),M(re+3,1),s.bindBuffer(34962,Be),s.vertexAttribPointer(re+0,4,Ce,!1,64,0),s.vertexAttribPointer(re+1,4,Ce,!1,64,16),s.vertexAttribPointer(re+2,4,Ce,!1,64,32),s.vertexAttribPointer(re+3,4,Ce,!1,64,48)}else if(oe==="instanceColor"){const _e=t.get(R.instanceColor);if(_e===void 0)continue;const Be=_e.buffer,Ce=_e.type;M(re,1),s.bindBuffer(34962,Be),s.vertexAttribPointer(re,3,Ce,!1,12,0)}else if(J!==void 0){const _e=J[oe];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(re,_e);break;case 3:s.vertexAttrib3fv(re,_e);break;case 4:s.vertexAttrib4fv(re,_e);break;default:s.vertexAttrib1fv(re,_e)}}}}T()}function L(){G();for(const R in a){const D=a[R];for(const F in D){const C=D[F];for(const W in C)f(C[W].object),delete C[W];delete D[F]}delete a[R]}}function I(R){if(a[R.id]===void 0)return;const D=a[R.id];for(const F in D){const C=D[F];for(const W in C)f(C[W].object),delete C[W];delete D[F]}delete a[R.id]}function N(R){for(const D in a){const F=a[D];if(F[R.id]===void 0)continue;const C=F[R.id];for(const W in C)f(C[W].object),delete C[W];delete F[R.id]}}function G(){if(z(),l===c)return;l=c,d(l.object)}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:m,enableAttribute:_,disableUnusedAttributes:T}}function vg(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function _g(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&(s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0)?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),p=s.getParameter(34076),x=s.getParameter(34921),y=s.getParameter(36347),g=s.getParameter(36348),m=s.getParameter(36349),_=d>0,M=o||e.has("OES_texture_float"),T=_&&M,v=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:v}}function wg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Pt,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const p=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!y)r?h(null):l();else{const m=r?0:n,_=m*4;let M=g.clippingState||null;c.value=M,M=h(p,d,_,f);for(let T=0;T!==_;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let y=null;if(x!==0){if(y=c.value,p!==!0||y===null){const g=f+x*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(m,a),o.normal.toArray(y,M),y[M+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function Mg(s){let e=new WeakMap;function t(o,a){return a===Nr?o.mapping=zi:a===zr&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nr||a===zr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=s.getRenderTarget(),h=new us(c.height/2);return h.fromEquirectangularTexture(s,o),e.set(o,h),s.setRenderTarget(l),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sg(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],34962);const f=u.morphAttributes;for(const p in f){const x=f[p];for(let y=0,g=x.length;y<g;y++)e.update(x[y],34962)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let x=0;if(f!==null){const m=f.array;x=f.version;for(let _=0,M=m.length;_<M;_+=3){const T=m[_+0],v=m[_+1],A=m[_+2];d.push(T,v,v,A,A,T)}}else{const m=p.array;x=p.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const T=_+0,v=_+1,A=_+2;d.push(T,v,v,A,A,T)}}const y=new(Mh(d)>65535?ts:es)(d,1);y.version=x;const g=r.get(u);g&&e.remove(g),r.set(u,y)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&(d.version<f.version&&l(u))}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Tg(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,p){if(p===0)return;let x,y;if(i)x=s,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,f,a,d*c,p),t.update(f,r,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Eg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){t.calls++;switch(o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ag(s,e){return s[0]-e[0]}function Lg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Rg(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,o,a,c){const l=r.morphTargetInfluences,h=l===void 0?0:l.length;let u=e[o.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[o.id]=u}for(let y=0;y<h;y++){const g=u[y];g[0]=y,g[1]=l[y]}u.sort(Lg);for(let y=0;y<8;y++)y<h&&u[y][1]?(n[y][0]=u[y][0],n[y][1]=u[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(Ag);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const g=n[y],m=g[0],_=g[1];m!==Number.MAX_SAFE_INTEGER&&_?(d&&o.getAttribute("morphTarget"+y)!==d[m]&&o.setAttribute("morphTarget"+y,d[m]),f&&o.getAttribute("morphNormal"+y)!==f[m]&&o.setAttribute("morphNormal"+y,f[m]),t[y]=_,p+=_):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),f&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),t[y]=0)}const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function Cg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class ha extends tt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=at,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ha.prototype.isDataTexture2DArray=!0;class ua extends tt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=at,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ua.prototype.isDataTexture3D=!0;const Eh=new tt,Pg=new ha,Ig=new ua,Ah=new yi,Lh=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function _i(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Lh[i];if(r===void 0&&(r=new Float32Array(i),Lh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dh(s,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Dg(s,e){const t=this.cache;if(t[0]===e)return;s.uniform1f(this.addr,e),t[0]=e}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(yt(t,n))return;Ih.set(n),s.uniformMatrix2fv(this.addr,!1,Ih),pt(t,n)}}function Ug(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(yt(t,n))return;Ph.set(n),s.uniformMatrix3fv(this.addr,!1,Ph),pt(t,n)}}function Og(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(yt(t,n))return;Ch.set(n),s.uniformMatrix4fv(this.addr,!1,Ch),pt(t,n)}}function Gg(s,e){const t=this.cache;if(t[0]===e)return;s.uniform1i(this.addr,e),t[0]=e}function Hg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}function kg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}function Vg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}function Wg(s,e){const t=this.cache;if(t[0]===e)return;s.uniform1ui(this.addr,e),t[0]=e}function qg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}function Xg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}function Yg(s,e){const t=this.cache;if(yt(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}function Zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Eh,i)}function Jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ig,i)}function jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Ah,i)}function $g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pg,i)}function Qg(s){switch(s){case 5126:return Dg;case 35664:return Fg;case 35665:return Bg;case 35666:return Ng;case 35674:return zg;case 35675:return Ug;case 35676:return Og;case 5124:case 35670:return Gg;case 35667:case 35671:return Hg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return qg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return $g}}function Kg(s,e){s.uniform1fv(this.addr,e)}function ex(s,e){const t=_i(e,this.size,2);s.uniform2fv(this.addr,t)}function tx(s,e){const t=_i(e,this.size,3);s.uniform3fv(this.addr,t)}function nx(s,e){const t=_i(e,this.size,4);s.uniform4fv(this.addr,t)}function ix(s,e){const t=_i(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rx(s,e){const t=_i(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sx(s,e){const t=_i(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ox(s,e){s.uniform1iv(this.addr,e)}function ax(s,e){s.uniform2iv(this.addr,e)}function lx(s,e){s.uniform3iv(this.addr,e)}function cx(s,e){s.uniform4iv(this.addr,e)}function hx(s,e){s.uniform1uiv(this.addr,e)}function ux(s,e){s.uniform2uiv(this.addr,e)}function dx(s,e){s.uniform3uiv(this.addr,e)}function fx(s,e){s.uniform4uiv(this.addr,e)}function px(s,e,t){const n=e.length,i=Dh(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Eh,i[r])}function mx(s,e,t){const n=e.length,i=Dh(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Ah,i[r])}function gx(s){switch(s){case 5126:return Kg;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return rx;case 35676:return sx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35680:case 36300:case 36308:case 36293:return mx}}function xx(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Qg(e.type)}function Fh(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=gx(e.type)}Fh.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),pt(e,s)};function Bh(s){this.id=s,this.seq=[],this.map={}}Bh.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t)}};const da=/(\w+)(\])?(\[|\.)?/g;function Nh(s,e){s.seq.push(e),s.map[e.id]=e}function yx(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),o=da.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Nh(t,l===void 0?new xx(a,s,e):new Fh(a,s,e));break}else{const h=t.map;let u=h[a];u===void 0&&(u=new Bh(a),Nh(t,u)),t=u}}}function pn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);yx(i,r,this)}}pn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)},pn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)},pn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}},pn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function zh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let vx=0;function _x(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Uh(s){switch(s){case xt:return["Linear","( value )"];case Zi:return["sRGB","( value )"];case Vr:return["RGBE","( value )"];case Fo:return["RGBM","( value, 7.0 )"];case Bo:return["RGBM","( value, 16.0 )"];case No:return["RGBD","( value, 256.0 )"];case kr:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Zc:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Oh(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+_x(r)}function sr(s,e){const t=Uh(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function wx(s,e){const t=Uh(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mx(s,e){let t;switch(e){case Yl:t="Linear";break;case Zl:t="Reinhard";break;case Jl:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case $l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bx(s){const e=[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission>0)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return e.filter(or).join(`
`)}function Sx(s){const e=[];for(const t in s){const n=s[t];if(n===!1)continue;e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;t[o]=s.getAttribLocation(e,o)}return t}function or(s){return s!==""}function Gh(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(Ex,Ax)}function Ax(s,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fa(t)}const Lx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(s){return s.replace(Rx,Vh).replace(Lx,Cx)}function Cx(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vh(s,e,t,n)}function Vh(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Px(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case Ui:e="ENVMAP_TYPE_CUBE";break;case Kn:case Oi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ni:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function Bx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Px(t),l=Ix(t),h=Dx(t),u=Fx(t),d=s.gammaFactor>0?s.gammaFactor:1,f=t.isWebGL2?"":bx(t),p=Sx(r),x=i.createProgram();let y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[p].filter(or).join(`
`),y.length>0&&(y+=`
`),g=[f,p].filter(or).join(`
`),g.length>0&&(g+=`
`)):(y=[Wh(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),g=[f,Wh(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ae.tonemapping_pars_fragment:"",t.toneMapping!==En?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ae.encodings_pars_fragment,t.map?sr("mapTexelToLinear",t.mapEncoding):"",t.matcap?sr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?sr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?sr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?sr("lightMapTexelToLinear",t.lightMapEncoding):"",wx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=fa(o),o=Gh(o,t),o=Hh(o,t),a=fa(a),a=Gh(a,t),a=Hh(a,t),o=kh(o),a=kh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===zo?"":"out highp vec4 pc_fragColor;",t.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+y+o,M=m+g+a,T=zh(i,35633,_),v=zh(i,35632,M);if(i.attachShader(x,T),i.attachShader(x,v),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const I=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(v).trim();let z=!0,R=!0;if(i.getProgramParameter(x,35714)===!1){z=!1;const D=Oh(i,T,"vertex"),F=Oh(i,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",I,D,F)}else I!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):(N===""||G==="")&&(R=!1);R&&(this.diagnostics={runnable:z,programLog:I,vertexShader:{log:N,prefix:y},fragmentShader:{log:G,prefix:g}})}i.deleteShader(T),i.deleteShader(v);let A;this.getUniforms=function(){return A===void 0&&(A=new pn(i,x)),A};let L;return this.getAttributes=function(){return L===void 0&&(L=Tx(i,x)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=v,this}function Nx(s,e,t,n,i,r){const o=[],a=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function x(v){const A=v.skeleton,L=A.bones;if(l)return 1024;{const I=h,N=Math.floor((I-20)/4),G=Math.min(N,L.length);return G<L.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+L.length+" bones. This GPU supports "+G+"."),0):G}}function y(v){let A;return v&&v.isTexture?A=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=v.texture.encoding):A=xt,A}function g(v,A,L,I,N){const G=I.fog,z=v.isMeshStandardMaterial?I.environment:null,R=e.get(v.envMap||z),D=f[v.type],F=N.isSkinnedMesh?x(N):0;v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let C,W;if(D){const oe=Ft[D];C=oe.vertexShader,W=oe.fragmentShader}else C=v.vertexShader,W=v.fragmentShader;const ee=s.getRenderTarget(),J={isWebGL2:a,shaderID:D,shaderName:v.type,vertexShader:C,fragmentShader:W,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ee!==null?y(ee.texture):s.outputEncoding,map:!!v.map,mapEncoding:y(v.map),matcap:!!v.matcap,matcapEncoding:y(v.matcap),envMap:!!R,envMapMode:R&&R.mapping,envMapEncoding:y(R),envMapCubeUV:!!R&&(R.mapping===Kn||R.mapping===Oi),lightMap:!!v.lightMap,lightMapEncoding:y(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:y(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===$c,tangentSpaceNormalMap:v.normalMapType===Pn,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmission:!!v.transmission,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&N.geometry&&N.geometry.attributes.color&&N.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmission||!!v.transmissionMap||!!v.thicknessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmission||!!v.transmissionMap||!!v.thicknessMap)&&!!v.displacementMap,fog:!!G,useFog:v.fog,fogExp2:G&&G.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:N.isSkinnedMesh===!0&&F>0,maxBones:F,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:En,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Bi,flipSided:v.side===Je,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()};return J}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.fragmentShader),A.push(v.vertexShader)),v.defines!==void 0)for(const L in v.defines)A.push(L),A.push(v.defines[L]);if(v.isRawShaderMaterial===!1){for(let L=0;L<p.length;L++)A.push(v[p[L]]);A.push(s.outputEncoding),A.push(s.gammaFactor)}return A.push(v.customProgramCacheKey),A.join()}function _(v){const A=f[v.type];let L;if(A){const I=Ft[A];L=Sh.clone(I.uniforms)}else L=v.uniforms;return L}function M(v,A){let L;for(let I=0,N=o.length;I<N;I++){const G=o[I];if(G.cacheKey===A){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Bx(s,A,v,i),o.push(L)),L}function T(v){if(--v.usedTimes===0){const A=o.indexOf(v);o[A]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:M,releaseProgram:T,programs:o}}function zx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ux(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xh(s){const e=[];let t=0;const n=[],i=[],r=[],o={id:-1};function a(){t=0,n.length=0,i.length=0,r.length=0}function c(f,p,x,y,g,m){let _=e[t];const M=s.get(x);return _===void 0?(_={id:f.id,object:f,geometry:p,material:x,program:M.program||o,groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},e[t]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=x,_.program=M.program||o,_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=g,_.group=m),t++,_}function l(f,p,x,y,g,m){const _=c(f,p,x,y,g,m);x.transmission>0?i.push(_):x.transparent===!0?r.push(_):n.push(_)}function h(f,p,x,y,g,m){const _=c(f,p,x,y,g,m);x.transmission>0?i.unshift(_):x.transparent===!0?r.unshift(_):n.unshift(_)}function u(f,p){n.length>1&&n.sort(f||Ux),i.length>1&&i.sort(p||qh),r.length>1&&r.sort(p||qh)}function d(){for(let f=t,p=e.length;f<p;f++){const x=e[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.program=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:l,unshift:h,finish:d,sort:u}}function Ox(s){let e=new WeakMap;function t(i,r){let o;return e.has(i)===!1?(o=new Xh(s),e.set(i,[o])):r>=e.get(i).length?(o=new Xh(s),e.get(i).push(o)):o=e.get(i)[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Gx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ne};break;case"SpotLight":t={position:new w,direction:new w,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Hx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kx=0;function Vx(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Wx(s,e){const t=new Gx,n=Hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const r=new w,o=new ce,a=new ce;function c(h){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,x=0,y=0,g=0,m=0,_=0,M=0,T=0;h.sort(Vx);for(let A=0,L=h.length;A<L;A++){const I=h[A],N=I.color,G=I.intensity,z=I.distance,R=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*G,d+=N.g*G,f+=N.b*G;else if(I.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(I.sh.coefficients[D],G);else if(I.isDirectionalLight){const D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const F=I.shadow,C=n.get(I);C.shadowBias=F.bias,C.shadowNormalBias=F.normalBias,C.shadowRadius=F.radius,C.shadowMapSize=F.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=R,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=D,p++}else if(I.isSpotLight){const D=t.get(I);if(D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(N).multiplyScalar(G),D.distance=z,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,I.castShadow){const F=I.shadow,C=n.get(I);C.shadowBias=F.bias,C.shadowNormalBias=F.normalBias,C.shadowRadius=F.radius,C.shadowMapSize=F.mapSize,i.spotShadow[y]=C,i.spotShadowMap[y]=R,i.spotShadowMatrix[y]=I.shadow.matrix,T++}i.spot[y]=D,y++}else if(I.isRectAreaLight){const D=t.get(I);D.color.copy(N).multiplyScalar(G),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=D,g++}else if(I.isPointLight){const D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){const F=I.shadow,C=n.get(I);C.shadowBias=F.bias,C.shadowNormalBias=F.normalBias,C.shadowRadius=F.radius,C.shadowMapSize=F.mapSize,C.shadowCameraNear=F.camera.near,C.shadowCameraFar=F.camera.far,i.pointShadow[x]=C,i.pointShadowMap[x]=R,i.pointShadowMatrix[x]=I.shadow.matrix,M++}i.point[x]=D,x++}else if(I.isHemisphereLight){const D=t.get(I);D.skyColor.copy(I.color).multiplyScalar(G),D.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[m]=D,m++}}g>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=K.LTC_FLOAT_1,i.rectAreaLTC2=K.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=K.LTC_HALF_1,i.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==p||v.pointLength!==x||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,v.directionalLength=p,v.pointLength=x,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=T,i.version=kx++)}function l(h,u){let d=0,f=0,p=0,x=0,y=0;const g=u.matrixWorldInverse;for(let m=0,_=h.length;m<_;m++){const M=h[m];if(M.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),d++}else if(M.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),T.direction.normalize(),y++}}}return{setup:c,setupView:l,state:i}}function Yh(s,e){const t=new Wx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(){t.setup(n)}function l(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lights:t};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qx(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Yh(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Yh(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class fs extends it{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Jc,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}fs.prototype.isMeshDepthMaterial=!0;class ps extends it{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ps.prototype.isMeshDistanceMaterial=!0;var Xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Zh(s,e,t){let n=new ir;const i=new q,r=new q,o=new Ne,a=[],c=[],l={},h=t.maxTextureSize,u={0:Je,1:$n,2:Bi},d=new Qt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Yx,fragmentShader:Xx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new fe;p.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $e(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo,this.render=function(v,A,L){if(y.enabled===!1)return;if(y.autoUpdate===!1&&y.needsUpdate===!1)return;if(v.length===0)return;const I=s.getRenderTarget(),N=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Wt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let R=0,D=v.length;R<D;R++){const F=v[R],C=F.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const W=C.getFrameExtents();if(i.multiply(W),r.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,C.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,C.mapSize.y=r.y)),C.map===null&&!C.isPointLightShadow&&this.type===jn){const J={minFilter:Ke,magFilter:Ke,format:Mt};C.map=new Rt(i.x,i.y,J),C.map.texture.name=F.name+".shadowMap",C.mapPass=new Rt(i.x,i.y,J),C.camera.updateProjectionMatrix()}if(C.map===null){const J={minFilter:je,magFilter:je,format:Mt};C.map=new Rt(i.x,i.y,J),C.map.texture.name=F.name+".shadowMap",C.camera.updateProjectionMatrix()}s.setRenderTarget(C.map),s.clear();const ee=C.getViewportCount();for(let J=0;J<ee;J++){const oe=C.getViewport(J);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),z.viewport(o),C.updateMatrices(F,J),n=C.getFrustum(),T(A,L,C.camera,F,this.type)}!C.isPointLightShadow&&this.type===jn&&g(C,L),C.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(I,N,G)};function g(v,A){const L=e.update(x);d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(A,null,L,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(A,null,L,f,x,null)}function m(v){const A=v<<0;let L=a[A];return L===void 0&&(L=new fs({depthPacking:jc,morphTargets:v}),a[A]=L),L}function _(v){const A=v<<0;let L=c[A];return L===void 0&&(L=new ps({morphTargets:v}),c[A]=L),L}function M(v,A,L,I,N,G,z){let R=null,D=m,F=v.customDepthMaterial;if(I.isPointLight===!0&&(D=_,F=v.customDistanceMaterial),F===void 0){let C=!1;L.morphTargets===!0&&(C=A.morphAttributes&&A.morphAttributes.position&&A.morphAttributes.position.length>0),R=D(C)}else R=F;if(s.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0){const C=R.uuid,W=L.uuid;let ee=l[C];ee===void 0&&(ee={},l[C]=ee);let J=ee[W];J===void 0&&(J=R.clone(),ee[W]=J),R=J}return R.visible=L.visible,R.wireframe=L.wireframe,z===jn?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:u[L.side],R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(I.matrixWorld),R.nearDistance=N,R.farDistance=G),R}function T(v,A,L,I,N){if(v.visible===!1)return;const G=v.layers.test(A.layers);if(G&&(v.isMesh||v.isLine||v.isPoints)&&((v.castShadow||v.receiveShadow&&N===jn)&&(!v.frustumCulled||n.intersectsObject(v)))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const R=e.update(v),D=v.material;if(Array.isArray(D)){const F=R.groups;for(let C=0,W=F.length;C<W;C++){const ee=F[C],J=D[ee.materialIndex];if(J&&J.visible){const oe=M(v,R,J,I,L.near,L.far,N);s.renderBufferDirect(L,null,R,oe,v,ee)}}}else if(D.visible){const F=M(v,R,D,I,L.near,L.far,N);s.renderBufferDirect(L,null,R,F,v,null)}}const z=v.children;for(let R=0,D=z.length;R<D;R++)T(z[R],A,L,I,N)}}function Zx(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const j=new Ne;let V=null;const de=new Ne(0,0,0,0);return{setMask:function(te){V!==te&&!P&&(s.colorMask(te,te,te,te),V=te)},setLocked:function(te){P=te},setClear:function(te,He,ht,ut,wn){wn===!0&&(te*=ut,He*=ut,ht*=ut),j.set(te,He,ht,ut),de.equals(j)===!1&&(s.clearColor(te,He,ht,ut),de.copy(j))},reset:function(){P=!1,V=null,de.set(-1,0,0,0)}}}function r(){let P=!1,j=null,V=null,de=null;return{setTest:function(te){te?Be(2929):Ce(2929)},setMask:function(te){j!==te&&!P&&(s.depthMask(te),j=te)},setFunc:function(te){if(V!==te){if(te)switch(te){case Ul:s.depthFunc(512);break;case Ol:s.depthFunc(519);break;case Gl:s.depthFunc(513);break;case Fr:s.depthFunc(515);break;case Hl:s.depthFunc(514);break;case kl:s.depthFunc(518);break;case Vl:s.depthFunc(516);break;case Wl:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);V=te}},setLocked:function(te){P=te},setClear:function(te){de!==te&&(s.clearDepth(te),de=te)},reset:function(){P=!1,j=null,V=null,de=null}}}function o(){let P=!1,j=null,V=null,de=null,te=null,He=null,ht=null,ut=null,wn=null;return{setTest:function(qe){P||(qe?Be(2960):Ce(2960))},setMask:function(qe){j!==qe&&!P&&(s.stencilMask(qe),j=qe)},setFunc:function(qe,Vt,Lt){(V!==qe||de!==Vt||te!==Lt)&&(s.stencilFunc(qe,Vt,Lt),V=qe,de=Vt,te=Lt)},setOp:function(qe,Vt,Lt){(He!==qe||ht!==Vt||ut!==Lt)&&(s.stencilOp(qe,Vt,Lt),He=qe,ht=Vt,ut=Lt)},setLocked:function(qe){P=qe},setClear:function(qe){wn!==qe&&(s.clearStencil(qe),wn=qe)},reset:function(){P=!1,j=null,V=null,de=null,te=null,He=null,ht=null,ut=null,wn=null}}}const a=new i,c=new r,l=new o;let h={},u=null,d={},f=null,p=!1,x=null,y=null,g=null,m=null,_=null,M=null,T=null,v=!1,A=null,L=null,I=null,N=null,G=null;const z=s.getParameter(35661);let R=!1,D=0;const F=s.getParameter(7938);F.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=D>=1):F.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=D>=2);let C=null,W={};const ee=s.getParameter(3088),J=s.getParameter(2978),oe=new Ne().fromArray(ee),re=new Ne().fromArray(J);function Me(P,j,V){const de=new Uint8Array(4),te=s.createTexture();s.bindTexture(P,te),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let He=0;He<V;He++)s.texImage2D(j+He,0,6408,1,1,0,6408,5121,de);return te}const _e={};_e[3553]=Me(3553,3553,1),_e[34067]=Me(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(2929),c.setFunc(Fr),Z(!1),Q(uo),Be(2884),Le(Wt);function Be(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Ce(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function k(P){P!==u&&(s.bindFramebuffer(36160,P),u=P)}function ke(P,j){return j===null&&u!==null&&(j=u),d[P]!==j?(s.bindFramebuffer(P,j),d[P]=j,n&&(P===36009&&(d[36160]=j),P===36160&&(d[36009]=j)),!0):!1}function Pe(P){return f!==P?(s.useProgram(P),f=P,!0):!1}const we={[Tn]:32774,[Al]:32778,[Ll]:32779};if(n)we[yo]=32775,we[vo]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(we[yo]=P.MIN_EXT,we[vo]=P.MAX_EXT)}const me={[Rl]:0,[Cl]:1,[Pl]:768,[_o]:770,[zl]:776,[Bl]:774,[Dl]:772,[Il]:769,[wo]:771,[Nl]:775,[Fl]:773};function Le(P,j,V,de,te,He,ht,ut){if(P===Wt){p===!0&&(Ce(3042),p=!1);return}if(p===!1&&(Be(3042),p=!0),P!==El){if(P!==x||ut!==v){if((y!==Tn||_!==Tn)&&(s.blendEquation(32774),y=Tn,_=Tn),ut)switch(P){case Qn:s.blendFuncSeparate(1,771,1,771);break;case mo:s.blendFunc(1,1);break;case go:s.blendFuncSeparate(0,0,769,771);break;case xo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qn:s.blendFuncSeparate(770,771,1,771);break;case mo:s.blendFunc(770,1);break;case go:s.blendFunc(0,769);break;case xo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,m=null,M=null,T=null,x=P,v=ut}return}te=te||j,He=He||V,ht=ht||de,(j!==y||te!==_)&&(s.blendEquationSeparate(we[j],we[te]),y=j,_=te),(V!==g||de!==m||He!==M||ht!==T)&&(s.blendFuncSeparate(me[V],me[de],me[He],me[ht]),g=V,m=de,M=He,T=ht),x=P,v=null}function X(P,j){P.side===Bi?Ce(2884):Be(2884);let V=P.side===Je;j&&(V=!V),Z(V),P.blending===Qn&&P.transparent===!1?Le(Wt):Le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const de=P.stencilWrite;l.setTest(de),de&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Be(32926):Ce(32926)}function Z(P){A!==P&&(P?s.frontFace(2304):s.frontFace(2305),A=P)}function Q(P){P!==bl?(Be(2884),P!==L&&(P===uo?s.cullFace(1029):P===Sl?s.cullFace(1028):s.cullFace(1032))):Ce(2884),L=P}function ue(P){P!==I&&(R&&s.lineWidth(P),I=P)}function se(P,j,V){P?(Be(32823),(N!==j||G!==V)&&(s.polygonOffset(j,V),N=j,G=V)):Ce(32823)}function E(P){P?Be(3089):Ce(3089)}function S(P){P===void 0&&(P=33984+z-1),C!==P&&(s.activeTexture(P),C=P)}function H(P,j){C===null&&S();let V=W[C];V===void 0&&(V={type:void 0,texture:void 0},W[C]=V),(V.type!==P||V.texture!==j)&&(s.bindTexture(P,j||_e[P]),V.type=P,V.texture=j)}function Y(){const P=W[C];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){oe.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function Se(P){re.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function he(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},C=null,W={},u=null,d={},f=null,p=!1,x=null,y=null,g=null,m=null,_=null,M=null,T=null,v=!1,A=null,L=null,I=null,N=null,G=null,oe.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Be,disable:Ce,bindFramebuffer:ke,bindXRFramebuffer:k,useProgram:Pe,setBlending:Le,setMaterial:X,setFlipSided:Z,setCullFace:Q,setLineWidth:ue,setPolygonOffset:se,setScissorTest:E,activeTexture:S,bindTexture:H,unbindTexture:Y,compressedTexImage2D:ie,texImage2D:ae,texImage3D:ye,scissor:ge,viewport:Se,reset:he}}function Jx(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function x(E,S){return p?new OffscreenCanvas(E,S):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(E,S,H,Y){let ie=1;if((E.width>Y||E.height>Y)&&(ie=Y/Math.max(E.width,E.height)),ie<1||S===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const ae=S?eh:Math.floor,ye=ae(ie*E.width),ge=ae(ie*E.height);f===void 0&&(f=x(ye,ge));const Se=H?x(ye,ge):f;Se.width=ye,Se.height=ge;const he=Se.getContext("2d");return he.drawImage(E,0,0,ye,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+ge+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return Oo(E.width)&&Oo(E.height)}function m(E){return a?!1:E.wrapS!==at||E.wrapT!==at||E.minFilter!==je&&E.minFilter!==Ke}function _(E,S){return E.generateMipmaps&&S&&E.minFilter!==je&&E.minFilter!==Ke}function M(E,S,H,Y){s.generateMipmap(E);const ie=n.get(S);ie.__maxMipLevel=Math.log2(Math.max(H,Y))}function T(E,S,H){if(a===!1)return S;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=S;return S===6403&&(H===5126&&(Y=33326),H===5131&&(Y=33325),H===5121&&(Y=33321)),S===6407&&(H===5126&&(Y=34837),H===5131&&(Y=34843),H===5121&&(Y=32849)),S===6408&&(H===5126&&(Y=34836),H===5131&&(Y=34842),H===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function v(E){return E===je||E===Ur||E===Or?9728:9729}function A(E){const S=E.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&d.delete(S),o.memory.textures--}function L(E){const S=E.target;S.removeEventListener("dispose",L),N(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;s.deleteTexture(S.__webglTexture),n.remove(E)}function N(E){const S=E.texture,H=n.get(E),Y=n.get(S);if(!E)return;if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else s.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&s.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ie=0,ae=S.length;ie<ae;ie++){const ye=n.get(S[ie]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(E)}let G=0;function z(){G=0}function R(){const E=G;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),G+=1,E}function D(E,S){const H=n.get(E);if(E.isVideoTexture&&X(E),E.version>0&&H.__version!==E.version){const Y=E.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(H,E,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,H.__webglTexture)}function F(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Me(H,E,S);return}t.activeTexture(33984+S),t.bindTexture(35866,H.__webglTexture)}function C(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Me(H,E,S);return}t.activeTexture(33984+S),t.bindTexture(32879,H.__webglTexture)}function W(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){_e(H,E,S);return}t.activeTexture(33984+S),t.bindTexture(34067,H.__webglTexture)}const ee={[Gi]:10497,[at]:33071,[Hi]:33648},J={[je]:9728,[Ur]:9984,[Or]:9986,[Ke]:9729,[Mo]:9985,[An]:9987};function oe(E,S,H){if(H?(s.texParameteri(E,10242,ee[S.wrapS]),s.texParameteri(E,10243,ee[S.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,ee[S.wrapR]),s.texParameteri(E,10240,J[S.magFilter]),s.texParameteri(E,10241,J[S.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(S.wrapS!==at||S.wrapT!==at)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,v(S.magFilter)),s.texParameteri(E,10241,v(S.minFilter)),S.minFilter!==je&&S.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(S.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(a===!1&&S.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(E,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function re(E,S){E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A),E.__webglTexture=s.createTexture(),o.memory.textures++)}function Me(E,S,H){let Y=3553;S.isDataTexture2DArray&&(Y=35866),S.isDataTexture3D&&(Y=32879),re(E,S),t.activeTexture(33984+H),t.bindTexture(Y,E.__webglTexture),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const ie=m(S)&&g(S.image)===!1,ae=y(S.image,ie,!1,h),ye=g(ae)||a,ge=r.convert(S.format);let Se=r.convert(S.type),he=T(S.internalFormat,ge,Se);oe(Y,S,ye);let P;const j=S.mipmaps;if(S.isDepthTexture)he=6402,a?S.type===qt?he=36012:S.type===Vi?he=33190:S.type===ti?he=35056:he=33189:S.type===qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ln&&he===6402&&(S.type!==ki&&S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,Se=r.convert(S.type))),S.format===ni&&he===6402&&(he=34041,S.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ti,Se=r.convert(S.type))),t.texImage2D(3553,0,he,ae.width,ae.height,0,ge,Se,null);else if(S.isDataTexture)if(j.length>0&&ye){for(let V=0,de=j.length;V<de;V++)P=j[V],t.texImage2D(3553,V,he,P.width,P.height,0,ge,Se,P.data);S.generateMipmaps=!1,E.__maxMipLevel=j.length-1}else t.texImage2D(3553,0,he,ae.width,ae.height,0,ge,Se,ae.data),E.__maxMipLevel=0;else if(S.isCompressedTexture){for(let V=0,de=j.length;V<de;V++)P=j[V],S.format!==Mt&&S.format!==nn?ge!==null?t.compressedTexImage2D(3553,V,he,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,V,he,P.width,P.height,0,ge,Se,P.data);E.__maxMipLevel=j.length-1}else if(S.isDataTexture2DArray)t.texImage3D(35866,0,he,ae.width,ae.height,ae.depth,0,ge,Se,ae.data),E.__maxMipLevel=0;else if(S.isDataTexture3D)t.texImage3D(32879,0,he,ae.width,ae.height,ae.depth,0,ge,Se,ae.data),E.__maxMipLevel=0;else if(j.length>0&&ye){for(let V=0,de=j.length;V<de;V++)P=j[V],t.texImage2D(3553,V,he,ge,Se,P);S.generateMipmaps=!1,E.__maxMipLevel=j.length-1}else t.texImage2D(3553,0,he,ge,Se,ae),E.__maxMipLevel=0;_(S,ye)&&M(Y,S,ae.width,ae.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function _e(E,S,H){if(S.image.length!==6)return;re(E,S),t.activeTexture(33984+H),t.bindTexture(34067,E.__webglTexture),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const Y=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),ie=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let V=0;V<6;V++)!Y&&!ie?ae[V]=y(S.image[V],!1,!0,l):ae[V]=ie?S.image[V].image:S.image[V];const ye=ae[0],ge=g(ye)||a,Se=r.convert(S.format),he=r.convert(S.type),P=T(S.internalFormat,Se,he);oe(34067,S,ge);let j;if(Y){for(let V=0;V<6;V++){j=ae[V].mipmaps;for(let de=0;de<j.length;de++){const te=j[de];S.format!==Mt&&S.format!==nn?Se!==null?t.compressedTexImage2D(34069+V,de,P,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+V,de,P,te.width,te.height,0,Se,he,te.data)}}E.__maxMipLevel=j.length-1}else{j=S.mipmaps;for(let V=0;V<6;V++)if(ie){t.texImage2D(34069+V,0,P,ae[V].width,ae[V].height,0,Se,he,ae[V].data);for(let de=0;de<j.length;de++){const te=j[de],He=te.image[V].image;t.texImage2D(34069+V,de+1,P,He.width,He.height,0,Se,he,He.data)}}else{t.texImage2D(34069+V,0,P,Se,he,ae[V]);for(let de=0;de<j.length;de++){const te=j[de];t.texImage2D(34069+V,de+1,P,Se,he,te.image[V])}}E.__maxMipLevel=j.length}_(S,ge)&&M(34067,S,ye.width,ye.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Be(E,S,H,Y,ie){const ae=r.convert(H.format),ye=r.convert(H.type),ge=T(H.internalFormat,ae,ye);ie===32879||ie===35866?t.texImage3D(ie,0,ge,S.width,S.height,S.depth,0,ae,ye,null):t.texImage2D(ie,0,ge,S.width,S.height,0,ae,ye,null),t.bindFramebuffer(36160,E),s.framebufferTexture2D(36160,Y,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(E,S,H){if(s.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let Y=33189;if(H){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===qt?Y=36012:ie.type===Vi&&(Y=33190));const ae=Le(S);s.renderbufferStorageMultisample(36161,ae,Y,S.width,S.height)}else s.renderbufferStorage(36161,Y,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){if(H){const Y=Le(S);s.renderbufferStorageMultisample(36161,Y,35056,S.width,S.height)}else s.renderbufferStorage(36161,34041,S.width,S.height);s.framebufferRenderbuffer(36160,33306,36161,E)}else{const Y=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,ie=r.convert(Y.format),ae=r.convert(Y.type),ye=T(Y.internalFormat,ie,ae);if(H){const ge=Le(S);s.renderbufferStorageMultisample(36161,ge,ye,S.width,S.height)}else s.renderbufferStorage(36161,ye,S.width,S.height)}s.bindRenderbuffer(36161,null)}function k(E,S){const H=S&&S.isWebGLCubeRenderTarget;if(H)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const Y=n.get(S.depthTexture).__webglTexture;if(S.depthTexture.format===Ln)s.framebufferTexture2D(36160,36096,3553,Y,0);else if(S.depthTexture.format===ni)s.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function ke(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(H)throw new Error("target.depthTexture not supported in Cube render targets");k(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ce(S.__webglDepthbuffer[Y],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ce(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Pe(E){const S=E.texture,H=n.get(E),Y=n.get(S);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture=s.createTexture(),Y.__version=S.version,o.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,ye=E.isWebGLMultisampleRenderTarget===!0,ge=S.isDataTexture3D||S.isDataTexture2DArray,Se=g(E)||a;if(a&&S.format===nn&&(S.type===qt||S.type===Wi)&&(S.format=Mt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ie){H.__webglFramebuffer=[];for(let he=0;he<6;he++)H.__webglFramebuffer[he]=s.createFramebuffer()}else if(H.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const he=E.texture;for(let P=0,j=he.length;P<j;P++){const V=n.get(he[P]);V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ye)if(a){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const he=r.convert(S.format),P=r.convert(S.type),j=T(S.internalFormat,he,P),V=Le(E);s.renderbufferStorageMultisample(36161,V,j,E.width,E.height),t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ie){t.bindTexture(34067,Y.__webglTexture),oe(34067,S,Se);for(let he=0;he<6;he++)Be(H.__webglFramebuffer[he],E,S,36064,34069+he);_(S,Se)&&M(34067,S,E.width,E.height),t.bindTexture(34067,null)}else if(ae){const he=E.texture;for(let P=0,j=he.length;P<j;P++){const V=he[P],de=n.get(V);t.bindTexture(3553,de.__webglTexture),oe(3553,V,Se),Be(H.__webglFramebuffer,E,V,36064+P,3553),_(V,Se)&&M(3553,V,E.width,E.height)}t.bindTexture(3553,null)}else{let he=3553;if(ge)if(a){const P=S.isDataTexture3D;he=P?32879:35866}else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");t.bindTexture(he,Y.__webglTexture),oe(he,S,Se),Be(H.__webglFramebuffer,E,S,36064,he),_(S,Se)&&M(3553,S,E.width,E.height),t.bindTexture(3553,null)}E.depthBuffer&&ke(E)}function we(E){const S=g(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Y=0,ie=H.length;Y<ie;Y++){const ae=H[Y];if(_(ae,S)){const ye=E.isWebGLCubeRenderTarget?34067:3553,ge=n.get(ae).__webglTexture;t.bindTexture(ye,ge),M(ye,ae,E.width,E.height),t.bindTexture(ye,null)}}}function me(E){if(E.isWebGLMultisampleRenderTarget)if(a){const S=E.width,H=E.height;let Y=16384;E.depthBuffer&&(Y|=256),E.stencilBuffer&&(Y|=1024);const ie=n.get(E);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer),s.blitFramebuffer(0,0,S,H,0,0,S,H,Y,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Le(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}function X(E){const S=o.render.frame;d.get(E)!==S&&(d.set(E,S),E.update())}let Z=!1,Q=!1;function ue(E,S){E&&E.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),E=E.texture),D(E,S)}function se(E,S){E&&E.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),E=E.texture),W(E,S)}this.allocateTextureUnit=R,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=C,this.setTextureCube=W,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=me,this.safeSetTexture2D=ue,this.safeSetTextureCube=se}function Jh(s,e,t){const n=t.isWebGL2;function i(r){let o;if(r===ei)return 5121;if(r===tc)return 32819;if(r===nc)return 32820;if(r===ic)return 33635;if(r===Ql)return 5120;if(r===Kl)return 5122;if(r===ki)return 5123;if(r===ec)return 5124;if(r===Vi)return 5125;if(r===qt)return 5126;if(r===Wi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rc)return 6406;if(r===nn)return 6407;if(r===Mt)return 6408;if(r===sc)return 6409;if(r===oc)return 6410;if(r===Ln)return 6402;if(r===ni)return 34041;if(r===lc)return 6403;if(r===cc)return 36244;if(r===hc)return 33319;if(r===uc)return 33320;if(r===dc)return 36248;if(r===fc)return 36249;if(r===bo||r===So||r===To||r===Eo)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ao||r===Lo||r===Ro||r===Co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Po||r===Io)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===Po)return o.COMPRESSED_RGB8_ETC2;if(r===Io)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===mc||r===gc||r===xc||r===yc||r===vc||r===_c||r===wc||r===Mc||r===bc||r===Sc||r===Tc||r===Ec||r===Ac||r===Lc||r===Cc||r===Pc||r===Ic||r===Dc||r===Fc||r===Bc||r===Nc||r===zc||r===Uc||r===Oc||r===Gc||r===Hc||r===kc||r===Vc)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===Rc)return o=e.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===ti)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class pa extends st{constructor(e=[]){super();this.cameras=e}}pa.prototype.isArrayCamera=!0;class Un extends Te{constructor(){super();this.type="Group"}}Un.prototype.isGroup=!0;const jx={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jx))),l&&e.hand){o=!0;for(const x of e.hand.values()){const y=t.getJointPose(x,n);if(l.joints[x.jointName]===void 0){const m=new Un;m.matrixAutoUpdate=!1,m.visible=!1,l.joints[x.jointName]=m,l.add(m)}const g=l.joints[x.jointName];y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=y.radius),g.visible=y!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class $x extends rn{constructor(e,t){super();const n=this,i=e.state;let r=null,o=1,a=null,c="local-floor",l=null;const h=[],u=new Map,d=new st;d.layers.enable(1),d.viewport=new Ne;const f=new st;f.layers.enable(2),f.viewport=new Ne;const p=[d,f],x=new pa;x.layers.enable(1),x.layers.enable(2);let y=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let R=h[z];return R===void 0&&(R=new ma,h[z]=R),R.getTargetRaySpace()},this.getControllerGrip=function(z){let R=h[z];return R===void 0&&(R=new ma,h[z]=R),R.getGripSpace()},this.getHand=function(z){let R=h[z];return R===void 0&&(R=new ma,h[z]=R),R.getHandSpace()};function m(z){const R=u.get(z.inputSource);R&&R.dispatchEvent({type:z.type,data:z.inputSource})}function _(){u.forEach(function(z,R){z.disconnect(R)}),u.clear(),y=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){c=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){r.addEventListener("select",m),r.addEventListener("selectstart",m),r.addEventListener("selectend",m),r.addEventListener("squeeze",m),r.addEventListener("squeezestart",m),r.addEventListener("squeezeend",m),r.addEventListener("end",_),r.addEventListener("inputsourceschange",M);const R=t.getContextAttributes();R.xrCompatible!==!0&&await t.makeXRCompatible();const D={antialias:R.antialias,alpha:R.alpha,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o},F=new XRWebGLLayer(r,t,D);r.updateRenderState({baseLayer:F}),a=await r.requestReferenceSpace(c),G.setContext(r),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function M(z){const R=r.inputSources;for(let D=0;D<h.length;D++)u.set(R[D],h[D]);for(let D=0;D<z.removed.length;D++){const F=z.removed[D],C=u.get(F);C&&(C.dispatchEvent({type:"disconnected",data:F}),u.delete(F))}for(let D=0;D<z.added.length;D++){const F=z.added[D],C=u.get(F);C&&C.dispatchEvent({type:"connected",data:F})}}const T=new w,v=new w;function A(z,R,D){T.setFromMatrixPosition(R.matrixWorld),v.setFromMatrixPosition(D.matrixWorld);const F=T.distanceTo(v),C=R.projectionMatrix.elements,W=D.projectionMatrix.elements,ee=C[14]/(C[10]-1),J=C[14]/(C[10]+1),oe=(C[9]+1)/C[5],re=(C[9]-1)/C[5],Me=(C[8]-1)/C[0],_e=(W[8]+1)/W[0],Be=ee*Me,Ce=ee*_e,k=F/(-Me+_e),ke=k*-Me;R.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ke),z.translateZ(k),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Pe=ee+k,we=J+k,me=Be-ke,Le=Ce+(F-ke),X=oe*J/we*Pe,Z=re*J/we*Pe;z.projectionMatrix.makePerspective(me,Le,X,Z,Pe,we)}function L(z,R){R===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(R.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;x.near=f.near=d.near=z.near,x.far=f.far=d.far=z.far,(y!==x.near||g!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,g=x.far);const R=z.parent,D=x.cameras;L(x,R);for(let C=0;C<D.length;C++)L(D[C],R);z.matrixWorld.copy(x.matrixWorld),z.matrix.copy(x.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const F=z.children;for(let C=0,W=F.length;C<W;C++)F[C].updateMatrixWorld(!0);D.length===2?A(x,d,f):x.projectionMatrix.copy(d.projectionMatrix)},this.getCamera=function(){return x};let I=null;function N(z,R){if(l=R.getViewerPose(a),l!==null){const F=l.views,C=r.renderState.baseLayer;i.bindXRFramebuffer(C.framebuffer);let W=!1;F.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let ee=0;ee<F.length;ee++){const J=F[ee],oe=C.getViewport(J),re=p[ee];re.matrix.fromArray(J.transform.matrix),re.projectionMatrix.fromArray(J.projectionMatrix),re.viewport.set(oe.x,oe.y,oe.width,oe.height),ee===0&&x.matrix.copy(re.matrix),W===!0&&x.cameras.push(re)}}const D=r.inputSources;for(let F=0;F<h.length;F++){const C=h[F],W=D[F];C.update(W,R,a)}I&&I(z,R)}const G=new Th;G.setAnimationLoop(N),this.setAnimationLoop=function(z){I=z},this.dispose=function(){}}}function Qx(s){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,_,M,T){m.isMeshBasicMaterial?n(g,m):m.isMeshLambertMaterial?(n(g,m),c(g,m)):m.isMeshToonMaterial?(n(g,m),h(g,m)):m.isMeshPhongMaterial?(n(g,m),l(g,m)):m.isMeshStandardMaterial?(n(g,m),m.isMeshPhysicalMaterial?d(g,m,T):u(g,m)):m.isMeshMatcapMaterial?(n(g,m),f(g,m)):m.isMeshDepthMaterial?(n(g,m),p(g,m)):m.isMeshDistanceMaterial?(n(g,m),x(g,m)):m.isMeshNormalMaterial?(n(g,m),y(g,m)):m.isLineBasicMaterial?(i(g,m),m.isLineDashedMaterial&&r(g,m)):m.isPointsMaterial?o(g,m,_,M):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const _=s.get(m).envMap;if(_){g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const v=s.get(_).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(M=m.clearcoatRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uv2Transform.value.copy(T.matrix))}function i(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function r(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias);const _=s.get(m).envMap;_&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){u(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Je&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),m.transmission>0&&(g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function x(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function y(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Kx(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Ue(s){s=s||{};const e=s.canvas!==void 0?s.canvas:Kx(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=xt,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const x=this;let y=!1,g=0,m=0,_=null,M=-1,T=null;const v=new Ne,A=new Ne;let L=null,I=e.width,N=e.height,G=1,z=null,R=null;const D=new Ne(0,0,I,N),F=new Ne(0,0,I,N);let C=!1;const W=[],ee=new ir;let J=!1,oe=!1,re=null;const Me=new ce,_e=new w,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return _===null?G:1}let k=t;function ke(b,U){for(let B=0;B<b.length;B++){const O=b[B],$=e.getContext(O,U);if($!==null)return $}return null}try{const b={alpha:n,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",ht,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),k=ke(U,b),k===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,we,me,Le,X,Z,Q,ue,se,E,S,H,Y,ie,ae,ye,ge,Se,he,P,j,V;function de(){Pe=new bg(k),we=new _g(k,Pe,s),Pe.init(we),j=new Jh(k,Pe,we),me=new Zx(k,Pe,we),W[0]=1029,Le=new Eg(k),X=new zx,Z=new Jx(k,Pe,me,X,we,j,Le),Q=new Mg(x),ue=new Jf(k,we),V=new yg(k,Pe,ue,we),se=new Sg(k,ue,Le,V),E=new Cg(k,se,ue,Le),Se=new Rg(k),ae=new wg(X),S=new Nx(x,Q,Pe,we,V,ae),H=new Qx(X),Y=new Ox(X),ie=new qx(Pe,we),ge=new xg(x,Q,me,E,a),ye=new Zh(x,E,we),he=new vg(k,Pe,Le,we),P=new Tg(k,Pe,Le,we),Le.programs=S.programs,x.capabilities=we,x.extensions=Pe,x.properties=X,x.renderLists=Y,x.shadowMap=ye,x.state=me,x.info=Le}de();const te=new $x(x,k);this.xr=te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){if(b===void 0)return;G=b,this.setSize(I,N,!1)},this.getSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),b=new q),b.set(I,N)},this.setSize=function(b,U,B){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,N=U,e.width=Math.floor(b*G),e.height=Math.floor(U*G),B!==!1&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),b=new q),b.set(I*G,N*G).floor()},this.setDrawingBufferSize=function(b,U,B){I=b,N=U,G=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),b=new Ne),b.copy(v)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,U,B,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,U,B,O),me.viewport(v.copy(D).multiplyScalar(G).floor())},this.getScissor=function(b){return b.copy(F)},this.setScissor=function(b,U,B,O){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,U,B,O),me.scissor(A.copy(F).multiplyScalar(G).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(b){me.setScissorTest(C=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){R=b},this.getClearColor=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),b=new ne),b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b,U,B){let O=0;(b===void 0||b)&&(O|=16384),(U===void 0||U)&&(O|=256),(B===void 0||B)&&(O|=1024),k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",ht,!1),Y.dispose(),ie.dispose(),X.dispose(),Q.dispose(),E.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",xl),te.removeEventListener("sessionend",yl),re&&(re.dispose(),re=null),Mn.stop()};function He(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Le.autoReset,U=ye.enabled,B=ye.autoUpdate,O=ye.needsUpdate,$=ye.type;de(),Le.autoReset=b,ye.enabled=U,ye.autoUpdate=B,ye.needsUpdate=O,ye.type=$}function ut(b){const U=b.target;U.removeEventListener("dispose",ut),wn(U)}function wn(b){qe(b),X.remove(b)}function qe(b){const U=X.get(b).programs;U!==void 0&&U.forEach(function(B){S.releaseProgram(B)})}function Vt(b,U){b.render(function(B){x.renderBufferImmediate(B,U)})}this.renderBufferImmediate=function(b,U){V.initAttributes();const B=X.get(b);b.hasPositions&&!B.position&&(B.position=k.createBuffer()),b.hasNormals&&!B.normal&&(B.normal=k.createBuffer()),b.hasUvs&&!B.uv&&(B.uv=k.createBuffer()),b.hasColors&&!B.color&&(B.color=k.createBuffer());const O=U.getAttributes();b.hasPositions&&(k.bindBuffer(34962,B.position),k.bufferData(34962,b.positionArray,35048),V.enableAttribute(O.position),k.vertexAttribPointer(O.position,3,5126,!1,0,0)),b.hasNormals&&(k.bindBuffer(34962,B.normal),k.bufferData(34962,b.normalArray,35048),V.enableAttribute(O.normal),k.vertexAttribPointer(O.normal,3,5126,!1,0,0)),b.hasUvs&&(k.bindBuffer(34962,B.uv),k.bufferData(34962,b.uvArray,35048),V.enableAttribute(O.uv),k.vertexAttribPointer(O.uv,2,5126,!1,0,0)),b.hasColors&&(k.bindBuffer(34962,B.color),k.bufferData(34962,b.colorArray,35048),V.enableAttribute(O.color),k.vertexAttribPointer(O.color,3,5126,!1,0,0)),V.disableUnusedAttributes(),k.drawArrays(4,0,b.count),b.count=0},this.renderBufferDirect=function(b,U,B,O,$,De){U===null&&(U=Be);const be=$.isMesh&&$.matrixWorld.determinant()<0,xe=Ml(b,U,O,$);me.setMaterial(O,be);let Re=B.index;const pe=B.attributes.position;if(Re===null){if(pe===void 0||pe.count===0)return}else if(Re.count===0)return;let Ie=1;O.wireframe===!0&&(Re=se.getWireframeAttribute(B),Ie=2),(O.morphTargets||O.morphNormals)&&Se.update($,B,O,xe),V.setup($,O,xe,B,Re);let ve,ze=he;Re!==null&&(ve=ue.get(Re),ze=P,ze.setIndex(ve));const Ut=Re!==null?Re.count:pe.count,gt=B.drawRange.start*Ie,bn=B.drawRange.count*Ie,Qe=De!==null?De.start*Ie:0,Sn=De!==null?De.count*Ie:Infinity,dt=Math.max(gt,Qe),Od=Math.min(Ut,gt+bn,Qe+Sn)-1,Dr=Math.max(0,Od-dt+1);if(Dr===0)return;if($.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*Ce()),ze.setMode(1)):ze.setMode(4);else if($.isLine){let Fi=O.linewidth;Fi===void 0&&(Fi=1),me.setLineWidth(Fi*Ce()),$.isLineSegments?ze.setMode(1):$.isLineLoop?ze.setMode(2):ze.setMode(3)}else $.isPoints?ze.setMode(0):$.isSprite&&ze.setMode(4);if($.isInstancedMesh)ze.renderInstances(dt,Dr,$.count);else if(B.isInstancedBufferGeometry){const Fi=Math.min(B.instanceCount,B._maxInstanceCount);ze.renderInstances(dt,Dr,Fi)}else ze.render(dt,Dr)},this.compile=function(b,U){d=ie.get(b),d.init(),b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(),b.traverse(function(B){const O=B.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){const De=O[$];co(De,b,B)}else co(O,b,B)})};let Lt=null;function Bd(b){Lt&&Lt(b)}function xl(){Mn.stop()}function yl(){Mn.start()}const Mn=new Th;Mn.setAnimationLoop(Bd),typeof window!="undefined"&&Mn.setContext(window),this.setAnimationLoop=function(b){Lt=b,te.setAnimationLoop(b),b===null?Mn.stop():Mn.start()},te.addEventListener("sessionstart",xl),te.addEventListener("sessionend",yl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,_),d=ie.get(b,p.length),d.init(),p.push(d),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,J=ae.init(this.clippingPlanes,oe,U),u=Y.get(b,f.length),u.init(),f.push(u),vl(b,U,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(z,R),J===!0&&ae.beginShadows();const B=d.state.shadowsArray;ye.render(B,b,U),d.setupLights(),d.setupLightsView(U),J===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(u,b);const O=u.opaque,$=u.transmissive,De=u.transparent;O.length>0&&Ir(O,b,U),$.length>0&&Nd(O,$,b,U),De.length>0&&Ir(De,b,U),_!==null&&(Z.updateRenderTargetMipmap(_),Z.updateMultisampleRenderTarget(_)),b.isScene===!0&&b.onAfterRender(x,b,U),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1),V.resetDefaultState(),M=-1,T=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function vl(b,U,B,O){if(b.visible===!1)return;const $=b.layers.test(U.layers);if($){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){O&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const be=E.update(b),xe=b.material;xe.visible&&u.push(b,be,xe,B,_e.z,null)}}else if(b.isImmediateRenderObject)O&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me),u.push(b,null,b.material,B,_e.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&(b.skeleton.frame!==Le.render.frame&&(b.skeleton.update(),b.skeleton.frame=Le.render.frame)),!b.frustumCulled||ee.intersectsObject(b))){O&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const be=E.update(b),xe=b.material;if(Array.isArray(xe)){const Re=be.groups;for(let pe=0,Ie=Re.length;pe<Ie;pe++){const ve=Re[pe],ze=xe[ve.materialIndex];ze&&ze.visible&&u.push(b,be,ze,B,_e.z,ve)}}else xe.visible&&u.push(b,be,xe,B,_e.z,null)}}const De=b.children;for(let be=0,xe=De.length;be<xe;be++)vl(De[be],U,B,O)}function Nd(b,U,B,O){re===null&&(re=new Rt(1024,1024,{generateMipmaps:!0,minFilter:An,magFilter:je,wrapS:at,wrapT:at}));const $=x.getRenderTarget();x.setRenderTarget(re),x.clear(),Ir(b,B,O),Z.updateRenderTargetMipmap(re),x.setRenderTarget($),Ir(U,B,O)}function Ir(b,U,B){const O=U.isScene===!0?U.overrideMaterial:null;for(let $=0,De=b.length;$<De;$++){const be=b[$],xe=be.object,Re=be.geometry,pe=O===null?be.material:O,Ie=be.group;if(B.isArrayCamera){const ve=B.cameras;for(let ze=0,Ut=ve.length;ze<Ut;ze++){const gt=ve[ze];xe.layers.test(gt.layers)&&(me.viewport(v.copy(gt.viewport)),d.setupLightsView(gt),_l(xe,U,gt,Re,pe,Ie))}}else _l(xe,U,B,Re,pe,Ie)}}function _l(b,U,B,O,$,De){if(b.onBeforeRender(x,U,B,O,$,De),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),b.isImmediateRenderObject){const be=Ml(B,U,$,b);me.setMaterial($),V.reset(),Vt(b,be)}else x.renderBufferDirect(B,U,O,$,b,De);b.onAfterRender(x,U,B,O,$,De)}function co(b,U,B){U.isScene!==!0&&(U=Be);const O=X.get(b),$=d.state.lights,De=d.state.shadowsArray,be=$.state.version,xe=S.getParameters(b,$.state,De,U,B),Re=S.getProgramCacheKey(xe);let pe=O.programs;O.environment=b.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=Q.get(b.envMap||O.environment),pe===void 0&&(b.addEventListener("dispose",ut),pe=new Map,O.programs=pe);let Ie=pe.get(Re);if(Ie!==void 0){if(O.currentProgram===Ie&&O.lightsStateVersion===be)return wl(b,xe),Ie}else xe.uniforms=S.getUniforms(b),b.onBuild(xe,x),b.onBeforeCompile(xe,x),Ie=S.acquireProgram(xe,Re),pe.set(Re,Ie),O.uniforms=xe.uniforms;const ve=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ve.clippingPlanes=ae.uniform),wl(b,xe),O.needsLights=Ud(b),O.lightsStateVersion=be,O.needsLights&&(ve.ambientLightColor.value=$.state.ambient,ve.lightProbe.value=$.state.probe,ve.directionalLights.value=$.state.directional,ve.directionalLightShadows.value=$.state.directionalShadow,ve.spotLights.value=$.state.spot,ve.spotLightShadows.value=$.state.spotShadow,ve.rectAreaLights.value=$.state.rectArea,ve.ltc_1.value=$.state.rectAreaLTC1,ve.ltc_2.value=$.state.rectAreaLTC2,ve.pointLights.value=$.state.point,ve.pointLightShadows.value=$.state.pointShadow,ve.hemisphereLights.value=$.state.hemi,ve.directionalShadowMap.value=$.state.directionalShadowMap,ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ve.spotShadowMap.value=$.state.spotShadowMap,ve.spotShadowMatrix.value=$.state.spotShadowMatrix,ve.pointShadowMap.value=$.state.pointShadowMap,ve.pointShadowMatrix.value=$.state.pointShadowMatrix);const ze=Ie.getUniforms(),Ut=pn.seqWithValue(ze.seq,ve);return O.currentProgram=Ie,O.uniformsList=Ut,Ie}function wl(b,U){const B=X.get(b);B.outputEncoding=U.outputEncoding,B.instancing=U.instancing,B.skinning=U.skinning,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas}function Ml(b,U,B,O){U.isScene!==!0&&(U=Be),Z.resetTextureUnits();const $=U.fog,De=B.isMeshStandardMaterial?U.environment:null,be=_===null?x.outputEncoding:_.texture.encoding,xe=Q.get(B.envMap||De),Re=B.vertexColors===!0&&O.geometry&&O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,pe=X.get(B),Ie=d.state.lights;if(J===!0&&(oe===!0||b!==T)){const dt=b===T&&B.id===M;ae.setState(B,b,dt)}let ve=!1;B.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Ie.state.version||(pe.outputEncoding!==be||(O.isInstancedMesh&&pe.instancing===!1||(!O.isInstancedMesh&&pe.instancing===!0||(O.isSkinnedMesh&&pe.skinning===!1||(!O.isSkinnedMesh&&pe.skinning===!0||(pe.envMap!==xe||(B.fog&&pe.fog!==$||(pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==ae.numPlanes||pe.numIntersection!==ae.numIntersection)||pe.vertexAlphas!==Re)))))))))&&(ve=!0):(ve=!0,pe.__version=B.version);let ze=pe.currentProgram;ve===!0&&(ze=co(B,U,O));let Ut=!1,gt=!1,bn=!1;const Qe=ze.getUniforms(),Sn=pe.uniforms;if(me.useProgram(ze.program)&&(Ut=!0,gt=!0,bn=!0),B.id!==M&&(M=B.id,gt=!0),Ut||T!==b){if(Qe.setValue(k,"projectionMatrix",b.projectionMatrix),we.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,gt=!0,bn=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const dt=Qe.map.cameraPosition;dt!==void 0&&dt.setValue(k,_e.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||O.isSkinnedMesh)&&Qe.setValue(k,"viewMatrix",b.matrixWorldInverse)}if(O.isSkinnedMesh){Qe.setOptional(k,O,"bindMatrix"),Qe.setOptional(k,O,"bindMatrixInverse");const dt=O.skeleton;dt&&(we.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),Qe.setValue(k,"boneTexture",dt.boneTexture,Z),Qe.setValue(k,"boneTextureSize",dt.boneTextureSize)):Qe.setOptional(k,dt,"boneMatrices"))}return(gt||pe.receiveShadow!==O.receiveShadow)&&(pe.receiveShadow=O.receiveShadow,Qe.setValue(k,"receiveShadow",O.receiveShadow)),gt&&(Qe.setValue(k,"toneMappingExposure",x.toneMappingExposure),pe.needsLights&&zd(Sn,bn),$&&B.fog&&H.refreshFogUniforms(Sn,$),H.refreshMaterialUniforms(Sn,B,G,N,re),pn.upload(k,pe.uniformsList,Sn,Z)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(pn.upload(k,pe.uniformsList,Sn,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qe.setValue(k,"center",O.center),Qe.setValue(k,"modelViewMatrix",O.modelViewMatrix),Qe.setValue(k,"normalMatrix",O.normalMatrix),Qe.setValue(k,"modelMatrix",O.matrixWorld),ze}function zd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ud(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return _},this.setRenderTarget=function(b,U=0,B=0){_=b,g=U,m=B,b&&X.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b);let O=null,$=!1,De=!1;if(b){const xe=b.texture;(xe.isDataTexture3D||xe.isDataTexture2DArray)&&(De=!0);const Re=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(O=Re[U],$=!0):b.isWebGLMultisampleRenderTarget?O=X.get(b).__webglMultisampledFramebuffer:O=Re,v.copy(b.viewport),A.copy(b.scissor),L=b.scissorTest}else v.copy(D).multiplyScalar(G).floor(),A.copy(F).multiplyScalar(G).floor(),L=C;const be=me.bindFramebuffer(36160,O);if(be&&we.drawBuffers){let xe=!1;if(b)if(b.isWebGLMultipleRenderTargets){const Re=b.texture;if(W.length!==Re.length||W[0]!==36064){for(let pe=0,Ie=Re.length;pe<Ie;pe++)W[pe]=36064+pe;W.length=Re.length,xe=!0}}else(W.length!==1||W[0]!==36064)&&(W[0]=36064,W.length=1,xe=!0);else(W.length!==1||W[0]!==1029)&&(W[0]=1029,W.length=1,xe=!0);xe&&(we.isWebGL2?k.drawBuffers(W):Pe.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}if(me.viewport(v),me.scissor(A),me.setScissorTest(L),$){const xe=X.get(b.texture);k.framebufferTexture2D(36160,36064,34069+U,xe.__webglTexture,B)}else if(De){const xe=X.get(b.texture),Re=U||0;k.framebufferTextureLayer(36160,36064,xe.__webglTexture,B||0,Re)}},this.readRenderTargetPixels=function(b,U,B,O,$,De,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(xe=xe[be]),xe){me.bindFramebuffer(36160,xe);try{const Re=b.texture,pe=Re.format,Ie=Re.type;if(pe!==Mt&&j.convert(pe)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ve=Ie===Wi&&(Pe.has("EXT_color_buffer_half_float")||we.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ie!==ei&&j.convert(Ie)!==k.getParameter(35738)&&!(Ie===qt&&(we.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?U>=0&&U<=b.width-O&&B>=0&&B<=b.height-$&&k.readPixels(U,B,O,$,j.convert(pe),j.convert(Ie),De):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Re=_!==null?X.get(_).__webglFramebuffer:null;me.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(b,U,B=0){const O=Math.pow(2,-B),$=Math.floor(U.image.width*O),De=Math.floor(U.image.height*O);let be=j.convert(U.format);we.isWebGL2&&(be===6407&&(be=32849),be===6408&&(be=32856)),Z.setTexture2D(U,0),k.copyTexImage2D(3553,B,be,b.x,b.y,$,De,0),me.unbindTexture()},this.copyTextureToTexture=function(b,U,B,O=0){const $=U.image.width,De=U.image.height,be=j.convert(B.format),xe=j.convert(B.type);Z.setTexture2D(B,0),k.pixelStorei(37440,B.flipY),k.pixelStorei(37441,B.premultiplyAlpha),k.pixelStorei(3317,B.unpackAlignment),U.isDataTexture?k.texSubImage2D(3553,O,b.x,b.y,$,De,be,xe,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(3553,O,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):k.texSubImage2D(3553,O,b.x,b.y,be,xe,U.image),O===0&&B.generateMipmaps&&k.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B,O,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:De,height:be,data:xe}=B.image,Re=j.convert(O.format),pe=j.convert(O.type);let Ie;if(O.isDataTexture3D)Z.setTexture3D(O,0),Ie=32879;else if(O.isDataTexture2DArray)Z.setTexture2DArray(O,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,O.flipY),k.pixelStorei(37441,O.premultiplyAlpha),k.pixelStorei(3317,O.unpackAlignment);const ve=k.getParameter(3314),ze=k.getParameter(32878),Ut=k.getParameter(3316),gt=k.getParameter(3315),bn=k.getParameter(32877);k.pixelStorei(3314,De),k.pixelStorei(32878,be),k.pixelStorei(3316,b.min.x),k.pixelStorei(3315,b.min.y),k.pixelStorei(32877,b.min.z),k.texSubImage3D(Ie,$,U.x,U.y,U.z,b.max.x-b.min.x+1,b.max.y-b.min.y+1,b.max.z-b.min.z+1,Re,pe,xe),k.pixelStorei(3314,ve),k.pixelStorei(32878,ze),k.pixelStorei(3316,Ut),k.pixelStorei(3315,gt),k.pixelStorei(32877,bn),$===0&&O.generateMipmaps&&k.generateMipmap(Ie),me.unbindTexture()},this.initTexture=function(b){Z.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){g=0,m=0,_=null,me.reset(),V.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class jh extends Ue{}jh.prototype.isWebGL1Renderer=!0;class ar{constructor(e,t=25e-5){this.name="",this.color=new ne(e),this.density=t}clone(){return new ar(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}ar.prototype.isFogExp2=!0;class lr{constructor(e,t=1,n=1e3){this.name="",this.color=new ne(e),this.near=t,this.far=n}clone(){return new lr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}lr.prototype.isFog=!0;class ms extends Te{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ms.prototype.isScene=!0;class On{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ii,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}On.prototype.isInterleavedBuffer=!0;const Ye=new w;class mn{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ee(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}mn.prototype.isInterleavedBufferAttribute=!0;class gs extends it{constructor(e){super();this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}gs.prototype.isSpriteMaterial=!0;let wi;const cr=new w,Mi=new w,bi=new w,Si=new q,hr=new q,$h=new ce,xs=new w,ur=new w,ys=new w,Qh=new q,ga=new q,Kh=new q;class vs extends Te{constructor(e){super();if(this.type="Sprite",wi===void 0){wi=new fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new On(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new mn(n,3,0,!1)),wi.setAttribute("uv",new mn(n,2,3,!1))}this.geometry=wi,this.material=e!==void 0?e:new gs,this.center=new q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-bi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;_s(xs.set(-.5,-.5,0),bi,o,Mi,i,r),_s(ur.set(.5,-.5,0),bi,o,Mi,i,r),_s(ys.set(.5,.5,0),bi,o,Mi,i,r),Qh.set(0,0),ga.set(1,0),Kh.set(1,1);let a=e.ray.intersectTriangle(xs,ur,ys,!1,cr);if(a===null&&(_s(ur.set(-.5,.5,0),bi,o,Mi,i,r),ga.set(0,1),a=e.ray.intersectTriangle(xs,ys,ur,!1,cr),a===null))return;const c=e.ray.origin.distanceTo(cr);if(c<e.near||c>e.far)return;t.push({distance:c,point:cr.clone(),uv:Xe.getUV(cr,xs,ur,ys,Qh,ga,Kh,new q),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}vs.prototype.isSprite=!0;function _s(s,e,t,n,i,r){Si.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(hr.x=r*Si.x-i*Si.y,hr.y=i*Si.x+r*Si.y):hr.copy(Si),s.copy(e),s.x+=hr.x,s.y+=hr.y,s.applyMatrix4($h)}const ws=new w,eu=new w;class tu extends Te{constructor(){super();this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){const n=this.levels;if(n.length>0){ws.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(ws);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ws.setFromMatrixPosition(e.matrixWorld),eu.setFromMatrixPosition(this.matrixWorld);const n=ws.distanceTo(eu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}}const nu=new w,iu=new Ne,ru=new Ne,ey=new w,su=new ce;class Ms extends $e{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ce,this.bindMatrixInverse=new ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ne,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==Infinity?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,e),ru.fromBufferAttribute(i.attributes.skinWeight,e),nu.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ru.getComponent(r);if(o!==0){const a=iu.getComponent(r);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ey.copy(nu).applyMatrix4(su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Ms.prototype.isSkinnedMesh=!0;class bs extends Te{constructor(){super();this.type="Bone"}}bs.prototype.isBone=!0;class Ti extends tt{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d);this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:je,this.minFilter=h!==void 0?h:je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ti.prototype.isDataTexture=!0;const ou=new ce,ty=new ce;class Ss{constructor(e=[],t=[]){this.uuid=bt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ty;ou.multiplyMatrices(a,t[r]),ou.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ss(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Kc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ti(t,e,e,Mt,qt);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}return}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bs),this.bones.push(o),this.boneInverses.push(new ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const au=new ce,lu=new ce,Ts=[],dr=new $e;class xa extends $e{constructor(e,t,n){super(e,t);this.instanceMatrix=new Ee(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material===void 0)return;for(let r=0;r<i;r++){this.getMatrixAt(r,au),lu.multiplyMatrices(n,au),dr.matrixWorld=lu,dr.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const c=Ts[o];c.instanceId=r,c.object=this,t.push(c)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ee(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}xa.prototype.isInstancedMesh=!0;class ot extends it{constructor(e){super();this.type="LineBasicMaterial",this.color=new ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}ot.prototype.isLineBasicMaterial=!0;const cu=new w,hu=new w,uu=new ce,ya=new cn,Es=new an;class Kt extends Te{constructor(e=new fe,t=new ot){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cu.fromBufferAttribute(t,i-1),hu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cu.distanceTo(hu);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;uu.copy(i).invert(),ya.copy(e.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,x=n.attributes,y=x.position;if(p!==null){const g=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=g,M=m-1;_<M;_+=f){const T=p.getX(_),v=p.getX(_+1);l.fromBufferAttribute(y,T),h.fromBufferAttribute(y,v);const A=ya.distanceSqToSegment(l,h,d,u);if(A>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);if(L<e.near||L>e.far)continue;t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),m=Math.min(y.count,o.start+o.count);for(let _=g,M=m-1;_<M;_+=f){l.fromBufferAttribute(y,_),h.fromBufferAttribute(y,_+1);const T=ya.distanceSqToSegment(l,h,d,u);if(T>c)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);if(v<e.near||v>e.far)continue;t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Kt.prototype.isLine=!0;const du=new w,fu=new w;class wt extends Kt{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)du.fromBufferAttribute(t,i),fu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+du.distanceTo(fu);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}wt.prototype.isLineSegments=!0;class va extends Kt{constructor(e,t){super(e,t);this.type="LineLoop"}}va.prototype.isLineLoop=!0;class Gn extends it{constructor(e){super();this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Gn.prototype.isPointsMaterial=!0;const pu=new ce,_a=new cn,As=new an,Ls=new w;class fr extends Te{constructor(e=new fe,t=new Gn){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;pu.copy(i).invert(),_a.copy(e.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,h=n.attributes,u=h.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const y=l.getX(p);Ls.fromBufferAttribute(u,y),mu(Ls,y,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Ls.fromBufferAttribute(u,p),mu(Ls,p,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}fr.prototype.isPoints=!0;function mu(s,e,t,n,i,r,o){const a=_a.distanceSqToPoint(s);if(a<t){const c=new w;_a.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class gu extends tt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l);this.format=a!==void 0?a:nn,this.minFilter=o!==void 0?o:Ke,this.magFilter=r!==void 0?r:Ke,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image,t="requestVideoFrameCallback"in e;t===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}gu.prototype.isVideoTexture=!0;class wa extends tt{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}wa.prototype.isCompressedTexture=!0;class xu extends tt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l);this.needsUpdate=!0}}xu.prototype.isCanvasTexture=!0;class yu extends tt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Ln,h!==Ln&&h!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ln&&(n=ki),n===void 0&&h===ni&&(n=ti),super(null,i,r,o,a,c,h,n,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1}}yu.prototype.isDepthTexture=!0;class Rs extends fe{constructor(e=1,t=8,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new w,h=new q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}}class Ei extends fe{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const x=[],y=n/2;let g=0;m(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function m(){const M=new w,T=new w;let v=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const I=[],N=L/r,G=N*(t-e)+e;for(let z=0;z<=i;z++){const R=z/i,D=R*c+a,F=Math.sin(D),C=Math.cos(D);T.x=G*F,T.y=-N*n+y,T.z=G*C,u.push(T.x,T.y,T.z),M.set(F,A,C).normalize(),d.push(M.x,M.y,M.z),f.push(R,1-N),I.push(p++)}x.push(I)}for(let L=0;L<i;L++)for(let I=0;I<r;I++){const N=x[I][L],G=x[I+1][L],z=x[I+1][L+1],R=x[I][L+1];h.push(N,G,R),h.push(G,z,R),v+=6}l.addGroup(g,v,0),g+=v}function _(M){const T=p,v=new q,A=new w;let L=0;const I=M===!0?e:t,N=M===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,y*N,0),d.push(0,N,0),f.push(.5,.5),p++;const G=p;for(let z=0;z<=i;z++){const R=z/i,D=R*c+a,F=Math.cos(D),C=Math.sin(D);A.x=I*C,A.y=y*N,A.z=I*F,u.push(A.x,A.y,A.z),d.push(0,N,0),v.x=F*.5+.5,v.y=C*.5*N+.5,f.push(v.x,v.y),p++}for(let z=0;z<i;z++){const R=T+z,D=G+z;M===!0?h.push(D,D+1,R):h.push(D+1,D,R),L+=3}l.addGroup(g,L,M===!0?1:2),g+=L}}}class Cs extends Ei{constructor(e=1,t=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}}class gn extends fe{constructor(e,t,n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new w,M=new w,T=new w;for(let v=0;v<t.length;v+=3)f(t[v+0],_),f(t[v+1],M),f(t[v+2],T),c(_,M,T,m)}function c(m,_,M,T){const v=T+1,A=[];for(let L=0;L<=v;L++){A[L]=[];const I=m.clone().lerp(M,L/v),N=_.clone().lerp(M,L/v),G=v-L;for(let z=0;z<=G;z++)z===0&&L===v?A[L][z]=I:A[L][z]=I.clone().lerp(N,z/G)}for(let L=0;L<v;L++)for(let I=0;I<2*(v-L)-1;I++){const N=Math.floor(I/2);I%2===0?(d(A[L][N+1]),d(A[L+1][N]),d(A[L][N])):(d(A[L][N+1]),d(A[L+1][N+1]),d(A[L+1][N]))}}function l(m){const _=new w;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(m),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){const m=new w;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const M=y(m)/2/Math.PI+.5,T=g(m)/Math.PI+.5;o.push(M,1-T)}p(),u()}function u(){for(let m=0;m<o.length;m+=6){const _=o[m+0],M=o[m+2],T=o[m+4],v=Math.max(_,M,T),A=Math.min(_,M,T);v>.9&&A<.1&&(_<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),T<.2&&(o[m+4]+=1))}}function d(m){r.push(m.x,m.y,m.z)}function f(m,_){const M=m*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function p(){const m=new w,_=new w,M=new w,T=new w,v=new q,A=new q,L=new q;for(let I=0,N=0;I<r.length;I+=9,N+=6){m.set(r[I+0],r[I+1],r[I+2]),_.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),v.set(o[N+0],o[N+1]),A.set(o[N+2],o[N+3]),L.set(o[N+4],o[N+5]),T.copy(m).add(_).add(M).divideScalar(3);const G=y(T);x(v,N+0,m,G),x(A,N+2,_,G),x(L,N+4,M,G)}}function x(m,_,M,T){T<0&&m.x===1&&(o[_]=m.x-1),M.x===0&&M.z===0&&(o[_]=T/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}class Ps extends gn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}}const Is=new w,Ds=new w,Ma=new w,Fs=new Xe;class ba extends fe{constructor(e,t){super();if(this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const n=4,i=Math.pow(10,n),r=Math.cos(In*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:x,b:y,c:g}=Fs;if(x.fromBufferAttribute(a,l[0]),y.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Fs.getNormal(Ma),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]===u[1]||u[1]===u[2]||u[2]===u[0])continue;for(let m=0;m<3;m++){const _=(m+1)%3,M=u[m],T=u[_],v=Fs[h[m]],A=Fs[h[_]],L=`${M}_${T}`,I=`${T}_${M}`;I in d&&d[I]?(Ma.dot(d[I].normal)<=r&&(f.push(v.x,v.y,v.z),f.push(A.x,A.y,A.z)),d[I]=null):L in d||(d[L]={index0:l[m],index1:l[_],normal:Ma.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:y}=d[p];Is.fromBufferAttribute(a,x),Ds.fromBufferAttribute(a,y),f.push(Is.x,Is.y,Is.z),f.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new le(f,3))}}const ny={triangulate:function(s,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:s.length;let r=vu(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=ay(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return pr(r,o,t,a,c,f),o}};function vu(s,e,t,n,i){let r,o;if(i===yy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Mu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Mu(r,s[r],s[r+1],o);return o&&Bs(o,o.next)&&(gr(o),o=o.next),o}function xn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Bs(t,t.next)||Ve(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&dy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?ry(s,n,i,r):iy(s)){e.push(c.i/t),e.push(s.i/t),e.push(l.i/t),gr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=sy(xn(s),e,t),pr(s,e,t,n,i,r,2)):o===2&&oy(s,e,t,n,i,r):pr(xn(s),e,t,n,i,r,1);break}}}function iy(s){const e=s.prev,t=s,n=s.next;if(Ve(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Ai(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ry(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ve(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Sa(a,c,e,t,n),d=Sa(l,h,e,t,n);let f=s.prevZ,p=s.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==s.prev&&f!==s.next&&Ai(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,p!==s.prev&&p!==s.next&&Ai(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&Ai(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==s.prev&&p!==s.next&&Ai(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function sy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Bs(i,r)&&_u(i,n,n.next,r)&&mr(i,r)&&mr(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),gr(n),gr(n.next),n=s=r),n=n.next}while(n!==s);return xn(n)}function oy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&my(o,a)){let c=wu(o,a);o=xn(o,o.next),c=xn(c,c.next),pr(o,e,t,n,i,r),pr(c,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function ay(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=vu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(py(l));for(i.sort(ly),r=0;r<i.length;r++)cy(i[r],t),t=xn(t,t.next);return t}function ly(s,e){return s.x-e.x}function cy(s,e){if(e=hy(s,e),e){const t=wu(e,s);xn(e,e.next),xn(t,t.next)}}function hy(s,e){let t=e;const n=s.x,i=s.y;let r=-Infinity,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,c=o.x,l=o.y;let h=Infinity,u;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&Ai(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),mr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&uy(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function uy(s,e){return Ve(s.prev,s,e.prev)<0&&Ve(e.next,s,s.next)<0}function dy(s,e,t,n){let i=s;do i.z===null&&(i.z=Sa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,fy(i)}function fy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&!(a++,n=n.nextZ,!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Sa(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function py(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ai(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function my(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!gy(s,e)&&(mr(s,e)&&mr(e,s)&&xy(s,e)&&(Ve(s.prev,s,e.prev)||Ve(s,e.prev,e))||Bs(s,e)&&Ve(s.prev,s,s.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Bs(s,e){return s.x===e.x&&s.y===e.y}function _u(s,e,t,n){const i=zs(Ve(s,e,t)),r=zs(Ve(s,e,n)),o=zs(Ve(t,n,s)),a=zs(Ve(t,n,e));return i!==r&&o!==a||(i===0&&Ns(s,t,e)||(r===0&&Ns(s,n,e)||o===0&&Ns(t,s,n)))?!0:!!(a===0&&Ns(t,e,n))}function Ns(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function zs(s){return s>0?1:s<0?-1:0}function gy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_u(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function mr(s,e){return Ve(s.prev,s,s.next)<0?Ve(s,e,s.next)>=0&&Ve(s,s.prev,e)>=0:Ve(s,e,s.prev)<0||Ve(s,s.next,e)<0}function xy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!==t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function wu(s,e){const t=new Ta(s.i,s.x,s.y),n=new Ta(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mu(s,e,t,n){const i=new Ta(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ta(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ot{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ot.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];bu(e),Su(n,e);let o=e.length;t.forEach(bu);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Su(n,t[c]);const a=ny.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function bu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Su(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class en extends fe{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:vy;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let _,M=!1,T,v,A,L;g&&(_=g.getSpacedPoints(h),M=!0,d=!1,T=g.computeFrenetFrames(h,!1),v=new w,A=new w,L=new w),d||(y=0,f=0,p=0,x=0);const I=a.extractPoints(l);let N=I.shape;const G=I.holes,z=!Ot.isClockWise(N);if(z){N=N.reverse();for(let X=0,Z=G.length;X<Z;X++){const Q=G[X];Ot.isClockWise(Q)&&(G[X]=Q.reverse())}}const R=Ot.triangulateShape(N,G),D=N;for(let X=0,Z=G.length;X<Z;X++){const Q=G[X];N=N.concat(Q)}function F(X,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(Q).add(X)}const C=N.length,W=R.length;function ee(X,Z,Q){let ue,se,E;const S=X.x-Z.x,H=X.y-Z.y,Y=Q.x-X.x,ie=Q.y-X.y,ae=S*S+H*H,ye=S*ie-H*Y;if(Math.abs(ye)>Number.EPSILON){const ge=Math.sqrt(ae),Se=Math.sqrt(Y*Y+ie*ie),he=Z.x-H/ge,P=Z.y+S/ge,j=Q.x-ie/Se,V=Q.y+Y/Se,de=((j-he)*ie-(V-P)*Y)/(S*ie-H*Y);ue=he+S*de-X.x,se=P+H*de-X.y;const te=ue*ue+se*se;if(te<=2)return new q(ue,se);E=Math.sqrt(te/2)}else{let ge=!1;S>Number.EPSILON?Y>Number.EPSILON&&(ge=!0):S<-Number.EPSILON?Y<-Number.EPSILON&&(ge=!0):Math.sign(H)===Math.sign(ie)&&(ge=!0),ge?(ue=-H,se=S,E=Math.sqrt(ae)):(ue=S,se=H,E=Math.sqrt(ae/2))}return new q(ue/E,se/E)}const J=[];for(let X=0,Z=D.length,Q=Z-1,ue=X+1;X<Z;X++,Q++,ue++)Q===Z&&(Q=0),ue===Z&&(ue=0),J[X]=ee(D[X],D[Q],D[ue]);const oe=[];let re,Me=J.concat();for(let X=0,Z=G.length;X<Z;X++){const Q=G[X];re=[];for(let ue=0,se=Q.length,E=se-1,S=ue+1;ue<se;ue++,E++,S++)E===se&&(E=0),S===se&&(S=0),re[ue]=ee(Q[ue],Q[E],Q[S]);oe.push(re),Me=Me.concat(re)}for(let X=0;X<y;X++){const Z=X/y,Q=f*Math.cos(Z*Math.PI/2),ue=p*Math.sin(Z*Math.PI/2)+x;for(let se=0,E=D.length;se<E;se++){const S=F(D[se],J[se],ue);ke(S.x,S.y,-Q)}for(let se=0,E=G.length;se<E;se++){const S=G[se];re=oe[se];for(let H=0,Y=S.length;H<Y;H++){const ie=F(S[H],re[H],ue);ke(ie.x,ie.y,-Q)}}}const _e=p+x;for(let X=0;X<C;X++){const Z=d?F(N[X],Me[X],_e):N[X];M?(A.copy(T.normals[0]).multiplyScalar(Z.x),v.copy(T.binormals[0]).multiplyScalar(Z.y),L.copy(_[0]).add(A).add(v),ke(L.x,L.y,L.z)):ke(Z.x,Z.y,0)}for(let X=1;X<=h;X++)for(let Z=0;Z<C;Z++){const Q=d?F(N[Z],Me[Z],_e):N[Z];M?(A.copy(T.normals[X]).multiplyScalar(Q.x),v.copy(T.binormals[X]).multiplyScalar(Q.y),L.copy(_[X]).add(A).add(v),ke(L.x,L.y,L.z)):ke(Q.x,Q.y,u/h*X)}for(let X=y-1;X>=0;X--){const Z=X/y,Q=f*Math.cos(Z*Math.PI/2),ue=p*Math.sin(Z*Math.PI/2)+x;for(let se=0,E=D.length;se<E;se++){const S=F(D[se],J[se],ue);ke(S.x,S.y,u+Q)}for(let se=0,E=G.length;se<E;se++){const S=G[se];re=oe[se];for(let H=0,Y=S.length;H<Y;H++){const ie=F(S[H],re[H],ue);M?ke(ie.x,ie.y+_[h-1].y,_[h-1].x+Q):ke(ie.x,ie.y,u+Q)}}}Be(),Ce();function Be(){const X=i.length/3;if(d){let Z=0,Q=C*Z;for(let ue=0;ue<W;ue++){const se=R[ue];Pe(se[2]+Q,se[1]+Q,se[0]+Q)}Z=h+y*2,Q=C*Z;for(let ue=0;ue<W;ue++){const se=R[ue];Pe(se[0]+Q,se[1]+Q,se[2]+Q)}}else{for(let Z=0;Z<W;Z++){const Q=R[Z];Pe(Q[2],Q[1],Q[0])}for(let Z=0;Z<W;Z++){const Q=R[Z];Pe(Q[0]+C*h,Q[1]+C*h,Q[2]+C*h)}}n.addGroup(X,i.length/3-X,0)}function Ce(){const X=i.length/3;let Z=0;k(D,Z),Z+=D.length;for(let Q=0,ue=G.length;Q<ue;Q++){const se=G[Q];k(se,Z),Z+=se.length}n.addGroup(X,i.length/3-X,1)}function k(X,Z){let Q=X.length;for(;--Q>=0;){const ue=Q;let se=Q-1;se<0&&(se=X.length-1);for(let E=0,S=h+y*2;E<S;E++){const H=C*E,Y=C*(E+1),ie=Z+ue+H,ae=Z+se+H,ye=Z+se+Y,ge=Z+ue+Y;we(ie,ae,ye,ge)}}}function ke(X,Z,Q){c.push(X),c.push(Z),c.push(Q)}function Pe(X,Z,Q){me(X),me(Z),me(Q);const ue=i.length/3,se=m.generateTopUV(n,i,ue-3,ue-2,ue-1);Le(se[0]),Le(se[1]),Le(se[2])}function we(X,Z,Q,ue){me(X),me(Z),me(ue),me(Z),me(Q),me(ue);const se=i.length/3,E=m.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Le(E[0]),Le(E[1]),Le(E[3]),Le(E[1]),Le(E[2]),Le(E[3])}function me(X){i.push(c[X*3+0]),i.push(c[X*3+1]),i.push(c[X*3+2])}function Le(X){r.push(X.x),r.push(X.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _y(t,n,e)}}const vy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new q(r,o),new q(a,c),new q(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],y=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new q(o,1-c),new q(l,1-u),new q(d,1-p),new q(x,1-g)]:[new q(a,1-c),new q(h,1-u),new q(f,1-p),new q(y,1-g)]}};function _y(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Us extends gn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}}class Os extends fe{constructor(e,t=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ct(i,0,Math.PI*2);const r=[],o=[],a=[],c=1/t,l=new w,h=new q;for(let u=0;u<=t;u++){const d=n+u*c*i,f=Math.sin(d),p=Math.cos(d);for(let x=0;x<=e.length-1;x++)l.x=e[x].x*f,l.y=e[x].y,l.z=e[x].x*p,o.push(l.x,l.y,l.z),h.x=u/t,h.y=x/(e.length-1),a.push(h.x,h.y)}for(let u=0;u<t;u++)for(let d=0;d<e.length-1;d++){const f=d+u*e.length,p=f,x=f+e.length,y=f+e.length+1,g=f+1;r.push(p,x,g),r.push(x,y,g)}if(this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.computeVertexNormals(),i===Math.PI*2){const u=this.attributes.normal.array,d=new w,f=new w,p=new w,x=t*e.length*3;for(let y=0,g=0;y<e.length;y++,g+=3)d.x=u[g+0],d.y=u[g+1],d.z=u[g+2],f.x=u[x+g+0],f.y=u[x+g+1],f.z=u[x+g+2],p.addVectors(d,f).normalize(),u[g+0]=u[x+g+0]=p.x,u[g+1]=u[x+g+1]=p.y,u[g+2]=u[x+g+2]=p.z}}}class xr extends gn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t);this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}}class Gs extends fe{constructor(e,t,n){super();this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],o=[],a=[],c=1e-5,l=new w,h=new w,u=new w,d=new w,f=new w;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const p=t+1;for(let x=0;x<=n;x++){const y=x/n;for(let g=0;g<=t;g++){const m=g/t;e(m,y,h),r.push(h.x,h.y,h.z),m-c>=0?(e(m-c,y,u),d.subVectors(h,u)):(e(m+c,y,u),d.subVectors(u,h)),y-c>=0?(e(m,y-c,u),f.subVectors(h,u)):(e(m,y+c,u),f.subVectors(u,h)),l.crossVectors(d,f).normalize(),o.push(l.x,l.y,l.z),a.push(m,y)}}for(let x=0;x<n;x++)for(let y=0;y<t;y++){const g=x*p+y,m=x*p+y+1,_=(x+1)*p+y+1,M=(x+1)*p+y;i.push(g,m,M),i.push(m,_,M)}this.setIndex(i),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(a,2))}}class Hs extends fe{constructor(e=.5,t=1,n=8,i=1,r=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new w,p=new q;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){const g=r+y/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){const y=x*(n+1);for(let g=0;g<n;g++){const m=g+y,_=m,M=m+n+1,T=m+n+2,v=m+1;a.push(_,M,v),a.push(M,T,v)}}this.setIndex(a),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}}class yr extends fe{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Ot.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=p.length;y<g;y++){const m=p[y];Ot.isClockWise(m)===!0&&(p[y]=m.reverse())}const x=Ot.triangulateShape(f,p);for(let y=0,g=p.length;y<g;y++){const m=p[y];f=f.concat(m)}for(let y=0,g=f.length;y<g;y++){const m=f[y];i.push(m.x,m.y,0),r.push(0,0,1),o.push(m.x,m.y)}for(let y=0,g=x.length;y<g;y++){const m=x[y],_=m[0]+u,M=m[1]+u,T=m[2]+u;n.push(_,M,T),c+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wy(t,e)}}function wy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class vr extends fe{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,d=new w,f=[],p=[],x=[],y=[];for(let g=0;g<=n;g++){const m=[],_=g/n;let M=0;g==0&&o==0?M=.5/t:g==n&&c==Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const v=T/t;u.x=-e*Math.cos(i+v*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+v*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),y.push(v+M,1-_),m.push(l++)}h.push(m)}for(let g=0;g<n;g++)for(let m=0;m<t;m++){const _=h[g][m+1],M=h[g][m],T=h[g+1][m],v=h[g+1][m+1];(g!==0||o>0)&&f.push(_,M,v),(g!==n-1||c<Math.PI)&&f.push(M,T,v)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(y,2))}}class ks extends gn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t);this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class Vs extends en{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new fe;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}}class Ws extends fe{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*r,y=f/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(x),u.y=(e+t*Math.cos(y))*Math.sin(x),u.z=t*Math.sin(y),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,y=(i+1)*(f-1)+p-1,g=(i+1)*(f-1)+p,m=(i+1)*f+p;o.push(x,y,m),o.push(y,g,m)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}}class qs extends fe{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new w,d=new w,f=new w,p=new w,x=new w,y=new w,g=new w;for(let _=0;_<=n;++_){const M=_/n*r*Math.PI*2;m(M,r,o,e,f),m(M+.01,r,o,e,p),y.subVectors(p,f),g.addVectors(p,f),x.crossVectors(y,g),g.crossVectors(x,y),x.normalize(),g.normalize();for(let T=0;T<=i;++T){const v=T/i*Math.PI*2,A=-t*Math.cos(v),L=t*Math.sin(v);u.x=f.x+(A*g.x+L*x.x),u.y=f.y+(A*g.y+L*x.y),u.z=f.z+(A*g.z+L*x.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(_/n),h.push(T/i)}}for(let _=1;_<=n;_++)for(let M=1;M<=i;M++){const T=(i+1)*(_-1)+(M-1),v=(i+1)*_+(M-1),A=(i+1)*_+M,L=(i+1)*(_-1)+M;a.push(T,v,L),a.push(v,A,L)}this.setIndex(a),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2));function m(_,M,T,v,A){const L=Math.cos(_),I=Math.sin(_),N=T/M*_,G=Math.cos(N);A.x=v*(2+G)*.5*L,A.y=v*(2+G)*I*.5,A.z=v*Math.sin(N)*.5}}}class Xs extends fe{constructor(e,t=64,n=1,i=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new q;let h=new w;const u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function x(){for(let _=0;_<t;_++)y(_);y(r===!1?t:0),m(),g()}function y(_){h=e.getPointAt(_/t,h);const M=o.normals[_],T=o.binormals[_];for(let v=0;v<=i;v++){const A=v/i*Math.PI*2,L=Math.sin(A),I=-Math.cos(A);c.x=I*M.x+L*T.x,c.y=I*M.y+L*T.y,c.z=I*M.z+L*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=t;_++)for(let M=1;M<=i;M++){const T=(i+1)*(_-1)+(M-1),v=(i+1)*_+(M-1),A=(i+1)*_+M,L=(i+1)*(_-1)+M;p.push(T,v,L),p.push(v,A,L)}}function m(){for(let _=0;_<=t;_++)for(let M=0;M<=i;M++)l.x=_/t,l.y=M/i,f.push(l.x,l.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}}class Ea extends fe{constructor(e){super();if(this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],n=[0,0],i={},r=new w;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let y=0;y<3;y++){const g=a.getX(p+y),m=a.getX(p+(y+1)%3);n[0]=Math.min(g,m),n[1]=Math.max(g,m);const _=n[0]+","+n[1];i[_]===void 0&&(i[_]={index1:n[0],index2:n[1]})}}for(const l in i){const h=i[l];r.fromBufferAttribute(o,h.index1),t.push(r.x,r.y,r.z),r.fromBufferAttribute(o,h.index2),t.push(r.x,r.y,r.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l;r.fromBufferAttribute(o,h),t.push(r.x,r.y,r.z);const u=3*a+(l+1)%3;r.fromBufferAttribute(o,u),t.push(r.x,r.y,r.z)}}this.setAttribute("position",new le(t,3))}}var vt=Object.freeze({__proto__:null,BoxGeometry:zn,BoxBufferGeometry:zn,CircleGeometry:Rs,CircleBufferGeometry:Rs,ConeGeometry:Cs,ConeBufferGeometry:Cs,CylinderGeometry:Ei,CylinderBufferGeometry:Ei,DodecahedronGeometry:Ps,DodecahedronBufferGeometry:Ps,EdgesGeometry:ba,ExtrudeGeometry:en,ExtrudeBufferGeometry:en,IcosahedronGeometry:Us,IcosahedronBufferGeometry:Us,LatheGeometry:Os,LatheBufferGeometry:Os,OctahedronGeometry:xr,OctahedronBufferGeometry:xr,ParametricGeometry:Gs,ParametricBufferGeometry:Gs,PlaneGeometry:rr,PlaneBufferGeometry:rr,PolyhedronGeometry:gn,PolyhedronBufferGeometry:gn,RingGeometry:Hs,RingBufferGeometry:Hs,ShapeGeometry:yr,ShapeBufferGeometry:yr,SphereGeometry:vr,SphereBufferGeometry:vr,TetrahedronGeometry:ks,TetrahedronBufferGeometry:ks,TextGeometry:Vs,TextBufferGeometry:Vs,TorusGeometry:Ws,TorusBufferGeometry:Ws,TorusKnotGeometry:qs,TorusKnotBufferGeometry:qs,TubeGeometry:Xs,TubeBufferGeometry:Xs,WireframeGeometry:Ea});class Aa extends it{constructor(e){super();this.type="ShadowMaterial",this.color=new ne(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Aa.prototype.isShadowMaterial=!0;class Li extends Qt{constructor(e){super(e);this.type="RawShaderMaterial"}}Li.prototype.isRawShaderMaterial=!0;class Ys extends it{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}Ys.prototype.isMeshStandardMaterial=!0;class La extends Ys{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ct(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ne(1,1,1),this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ne).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this}}La.prototype.isMeshPhysicalMaterial=!0;class Ra extends it{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ne(16777215),this.specular=new ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Ra.prototype.isMeshPhongMaterial=!0;class Ca extends it{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Ca.prototype.isMeshToonMaterial=!0;class Pa extends it{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Pa.prototype.isMeshNormalMaterial=!0;class Ia extends it{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ni,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Ia.prototype.isMeshLambertMaterial=!0;class Da extends it{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Da.prototype.isMeshMatcapMaterial=!0;class Fa extends ot{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Fa.prototype.isLineDashedMaterial=!0;var My=Object.freeze({__proto__:null,ShadowMaterial:Aa,SpriteMaterial:gs,RawShaderMaterial:Li,ShaderMaterial:Qt,PointsMaterial:Gn,MeshPhysicalMaterial:La,MeshStandardMaterial:Ys,MeshPhongMaterial:Ra,MeshToonMaterial:Ca,MeshNormalMaterial:Pa,MeshLambertMaterial:Ia,MeshDepthMaterial:fs,MeshDistanceMaterial:ps,MeshBasicMaterial:$t,MeshMatcapMaterial:Da,LineDashedMaterial:Fa,LineBasicMaterial:ot,Material:it});const Ge={arraySlice:function(s,e,t){return Ge.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o===void 0)return;if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(p<t||p>=n)continue;u.push(l.times[f]);for(let x=0;x<h;++x)d.push(l.values[f*h+x])}if(u.length===0)continue;l.times=Ge.convertArray(u,l.times.constructor),l.values=Ge.convertArray(d,l.values.constructor),o.push(l)}r.tracks=o;let a=Infinity;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let x;if(r<=a.times[0]){const g=h,m=u-h;x=Ge.arraySlice(a.values,g,m)}else if(r>=a.times[p]){const g=p*u+h,m=g+u-h;x=Ge.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=h,_=u-h;g.evaluate(r),x=Ge.arraySlice(g.resultBuffer,m,_)}if(c==="quaternion"){const g=new nt().fromArray(x).normalize().conjugate();g.toArray(x)}const y=l.times.length;for(let g=0;g<y;++g){const m=g*f+d;if(c==="quaternion")nt.multiplyQuaternionsFlat(l.values,m,x,0,l.values,m);else{const _=f-d*2;for(let M=0;M<_;++M)l.values[m+M]-=x[M]}}}return s.blendMode=Do,s}};class tn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}tn.prototype.beforeStart_=tn.prototype.copySampleValue_,tn.prototype.afterEnd_=tn.prototype.copySampleValue_;class Tu extends tn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rn,endingEnd:Rn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cn:r=e,a=2*t-n;break;case Yi:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cn:o=e,c=2*n-t;break;case Yi:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,y=x*p,g=-d*y+2*d*x-d*p,m=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*y+(1.5+f)*x+.5*p,M=f*y-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+m*o[l+T]+_*o[c+T]+M*o[u+T];return r}}class Ba extends tn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Eu extends tn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ge.convertArray(t,this.TimeBufferType),this.values=Ge.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ge.convertArray(e.times,Array),values:Ge.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qi:t=this.InterpolantFactoryMethodDiscrete;break;case Xi:t=this.InterpolantFactoryMethodLinear;break;case Gr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qi;case this.InterpolantFactoryMethodLinear:return Xi;case this.InterpolantFactoryMethodSmooth:return Gr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Ge.arraySlice(n,r,o),this.values=Ge.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ge.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Ge.arraySlice(this.times),t=Ge.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Gr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Ge.arraySlice(e,0,o),this.values=Ge.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Ge.arraySlice(this.times,0),t=Ge.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bt.prototype.TimeBufferType=Float32Array,Bt.prototype.ValueBufferType=Float32Array,Bt.prototype.DefaultInterpolation=Xi;class Hn extends Bt{}Hn.prototype.ValueTypeName="bool",Hn.prototype.ValueBufferType=Array,Hn.prototype.DefaultInterpolation=qi,Hn.prototype.InterpolantFactoryMethodLinear=void 0,Hn.prototype.InterpolantFactoryMethodSmooth=void 0;class Na extends Bt{}Na.prototype.ValueTypeName="color";class _r extends Bt{}_r.prototype.ValueTypeName="number";class Au extends tn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)nt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ri extends Bt{InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}}Ri.prototype.ValueTypeName="quaternion",Ri.prototype.DefaultInterpolation=Xi,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class kn extends Bt{}kn.prototype.ValueTypeName="string",kn.prototype.ValueBufferType=Array,kn.prototype.DefaultInterpolation=qi,kn.prototype.InterpolantFactoryMethodLinear=void 0,kn.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends Bt{}wr.prototype.ValueTypeName="vector";class Mr{constructor(e,t=-1,n,i=Hr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Ge.getKeyframeOrder(c);c=Ge.sortedArray(c,1,h),l=Ge.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new _r(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,x){if(f.length!==0){const y=[],g=[];Ge.flattenJSON(f,y,g,p),y.length!==0&&x.push(new u(d,y,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!d||d.length===0)continue;if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const y=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){const _=d[p];y.push(_.time),g.push(_.morphTarget===x?1:0)}i.push(new _r(".morphTargetInfluence["+x+"]",y,g))}c=f.length*(o||1)}else{const f=".bones["+t[u].name+"]";n(wr,f+".position",d,"pos",i),n(Ri,f+".quaternion",d,"rot",i),n(wr,f+".scale",d,"scl",i)}}if(i.length===0)return null;const h=new this(r,c,i,a);return h}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function by(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _r;case"vector":case"vector2":case"vector3":case"vector4":return wr;case"color":return Na;case"quaternion":return Ri;case"bool":case"boolean":return Hn;case"string":return kn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=by(s.type);if(s.times===void 0){const t=[],n=[];Ge.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vn={enabled:!1,files:{},add:function(s,e){if(this.enabled===!1)return;this.files[s]=e},get:function(s){return this.enabled===!1?void 0:this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class za{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&(i.onStart!==void 0&&i.onStart(h,o,a)),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Lu=new za;class mt{constructor(e){this.manager=e!==void 0?e:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Nt={};class Gt extends mt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(Nt[e]!==void 0){Nt[e].push({onLoad:t,onProgress:n,onError:i});return}const a=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(a);let l;if(c){const h=c[1],u=!!c[2];let d=c[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const x=new Uint8Array(d.length);for(let g=0;g<d.length;g++)x[g]=d.charCodeAt(g);p==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":const y=new DOMParser;f=y.parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Nt[e]=[],Nt[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(h){const u=this.response,d=Nt[e];if(delete Nt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Vn.add(e,u);for(let f=0,p=d.length;f<p;f++){const x=d[f];x.onLoad&&x.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,p=d.length;f<p;f++){const x=d[f];x.onError&&x.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(h){const u=Nt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onProgress&&p.onProgress(h)}},!1),l.addEventListener("error",function(h){const u=Nt[e];delete Nt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),l.addEventListener("abort",function(h){const u=Nt[e];delete Nt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)l.setRequestHeader(h,this.requestHeader[h]);l.send(null)}return r.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gt(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Mr.parse(e[n]);t.push(i)}return t}}class Ey extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new wa,c=new Gt(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=Ke),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Ke),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Zs extends mt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),Vn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&(this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin)),r.manager.itemStart(e),a.src=e,a}}class Ru extends mt{constructor(e){super(e)}load(e,t,n,i){const r=new yi,o=new Zs(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class Cu extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ti,a=new Gt(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){const l=r.parse(c);if(!l)return;l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:at,o.wrapT=l.wrapT!==void 0?l.wrapT:at,o.magFilter=l.magFilter!==void 0?l.magFilter:Ke,o.minFilter=l.minFilter!==void 0?l.minFilter:Ke,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=An),l.mipmapCount===1&&(o.minFilter=Ke),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Pu extends mt{constructor(e){super(e)}load(e,t,n,i){const r=new tt,o=new Zs(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a;const c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=c?nn:Mt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Et{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1],d=u-h,f=(o-h)/d,p=(i+f)/(r-1);return p}getTangent(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new q:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,c=new ce;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new w),i[f].normalize()}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ct(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class br extends Et{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new q,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}br.prototype.isEllipseCurve=!0;class Ua extends br{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o);this.type="ArcCurve"}}Ua.prototype.isArcCurve=!0;function Oa(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Js=new w,Ga=new Oa,Ha=new Oa,ka=new Oa;class Va extends Et{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Js.subVectors(i[0],i[1]).add(i[0]),l=Js);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Js.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),y<1e-4&&(y=x),Ga.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,y),Ha.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,y),ka.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,y)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ga.calc(c),Ha.calc(c),ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Va.prototype.isCatmullRomCurve3=!0;function Iu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Ay(s,e){const t=1-s;return t*t*e}function Ly(s,e){return 2*(1-s)*s*e}function Ry(s,e){return s*s*e}function Sr(s,e,t,n){return Ay(s,e)+Ly(s,t)+Ry(s,n)}function Cy(s,e){const t=1-s;return t*t*t*e}function Py(s,e){const t=1-s;return 3*t*t*s*e}function Iy(s,e){return 3*(1-s)*s*s*e}function Dy(s,e){return s*s*s*e}function Tr(s,e,t,n,i){return Cy(s,e)+Py(s,t)+Iy(s,n)+Dy(s,i)}class js extends Et{constructor(e=new q,t=new q,n=new q,i=new q){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new q){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}js.prototype.isCubicBezierCurve=!0;class Wa extends Et{constructor(e=new w,t=new w,n=new w,i=new w){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y),Tr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Wa.prototype.isCubicBezierCurve3=!0;class Er extends Et{constructor(e=new q,t=new q){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Er.prototype.isLineCurve=!0;class Du extends Et{constructor(e=new w,t=new w){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $s extends Et{constructor(e=new q,t=new q,n=new q){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,i.x,r.x,o.x),Sr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}$s.prototype.isQuadraticBezierCurve=!0;class qa extends Et{constructor(e=new w,t=new w,n=new w){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,i.x,r.x,o.x),Sr(e,i.y,r.y,o.y),Sr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}qa.prototype.isQuadraticBezierCurve3=!0;class Qs extends Et{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new q){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Iu(a,c.x,l.x,h.x,u.x),Iu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new q().fromArray(i))}return this}}Qs.prototype.isSplineCurve=!0;var Xa=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Va,CubicBezierCurve:js,CubicBezierCurve3:Wa,EllipseCurve:br,LineCurve:Er,LineCurve3:Du,QuadraticBezierCurve:$s,QuadraticBezierCurve3:qa,SplineCurve:Qs});class Fu extends Et{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Er(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,o=this.curves[i],a=o.getLength(),c=a===0?0:1-r/a;return o.getPointAt(c)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];if(n&&n.equals(h))continue;t.push(h),n=h}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Xa[i.type]().fromJSON(i))}return this}}class Ar extends Fu{constructor(e){super();this.type="Path",this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Er(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new $s(this.currentPoint.clone(),new q(e,t),new q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new js(this.currentPoint.clone(),new q(e,t),new q(n,i),new q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new br(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yn extends Ar{constructor(e){super(e);this.uuid=bt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ar().fromJSON(i))}return this}}class zt extends Te{constructor(e,t=1){super();this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}zt.prototype.isLight=!0;class Ya extends zt{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.groundColor=new ne(t)}copy(e){return zt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Ya.prototype.isHemisphereLight=!0;const Bu=new ce,Nu=new w,zu=new w;class Za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uu extends Za{constructor(){super(new st(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Uu.prototype.isSpotLightShadow=!0;class Ja extends zt{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ja.prototype.isSpotLight=!0;const Ou=new ce,Lr=new w,ja=new w;class Gu extends Za{constructor(){super(new st(90,1,.5,500));this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}Gu.prototype.isPointLightShadow=!0;class $a extends zt{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}$a.prototype.isPointLight=!0;class Rr extends nr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Rr.prototype.isOrthographicCamera=!0;class Hu extends Za{constructor(){super(new Rr(-5,5,5,-5,.5,500))}}Hu.prototype.isDirectionalLightShadow=!0;class Qa extends zt{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.target=new Te,this.shadow=new Hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Qa.prototype.isDirectionalLight=!0;class Ka extends zt{constructor(e,t){super(e,t);this.type="AmbientLight"}}Ka.prototype.isAmbientLight=!0;class el extends zt{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}el.prototype.isRectAreaLight=!0;class tl{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}tl.prototype.isSphericalHarmonics3=!0;class Cr extends zt{constructor(e=new tl,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Cr.prototype.isLightProbe=!0;class ku extends mt{constructor(e){super(e);this.textures={}}load(e,t,n,i){const r=this,o=new Gt(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new My[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new ne().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];i.uniforms[r]={};switch(o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new ne().setHex(o.value);break;case"v2":i.uniforms[r].value=new q().fromArray(o.value);break;case"v3":i.uniforms[r].value=new w().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Ne().fromArray(o.value);break;case"m3":i.uniforms[r].value=new et().fromArray(o.value);break;case"m4":i.uniforms[r].value=new ce().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new q().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),i}setTextures(e){return this.textures=e,this}}class nl{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class il extends fe{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=Infinity}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}il.prototype.isInstancedBufferGeometry=!0;class rl extends Ee{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}rl.prototype.isInstancedBufferAttribute=!0;class Vu extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gt(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const x=f.interleavedBuffers,y=x[p],g=r(f,y.buffer),m=er(y.type,g),_=new On(m,y.stride);return _.uuid=y.uuid,t[p]=_,_}function r(f,p){if(n[p]!==void 0)return n[p];const x=f.arrayBuffers,y=x[p],g=new Uint32Array(y).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new il:new fe,a=e.data.index;if(a!==void 0){const f=er(a.type,a.array);o.setIndex(new Ee(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let x;if(p.isInterleavedBufferAttribute){const y=i(e.data,p.data);x=new mn(y,p.itemSize,p.offset,p.normalized)}else{const y=er(p.type,p.array),g=p.isInstancedBufferAttribute?rl:Ee;x=new g(y,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.updateRange!==void 0&&(x.updateRange.offset=p.updateRange.offset,x.updateRange.count=p.updateRange.count),o.setAttribute(f,x)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],x=[];for(let y=0,g=p.length;y<g;y++){const m=p[y];let _;if(m.isInterleavedBufferAttribute){const M=i(e.data,m.data);_=new mn(M,m.itemSize,m.offset,m.normalized)}else{const M=er(m.type,m.array);_=new Ee(M,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),x.push(_)}o.morphAttributes[f]=x}const h=e.data.morphTargetsRelative;h&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const x=u[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new w;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new an(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Fy extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?nl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Gt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let u=!1;for(const d in o)if(o[d]instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new yn().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new Ss().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};let i;if(e!==void 0){const r=new Vu;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new vt[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":c=new vt[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new vt[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new vt[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new vt[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new vt[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new vt[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new vt[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new vt[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new vt[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new vt[l.type](new Xa[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new vt[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new vt[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let u=0,d=l.shapes.length;u<d;u++){const f=t[l.shapes[u]];i.push(f)}c=new vt[l.type](i,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let u=0,d=l.shapes.length;u<d;u++){const f=t[l.shapes[u]];i.push(f)}const h=l.options.extrudePath;h!==void 0&&(l.options.extrudePath=new Xa[h.type]().fromJSON(h)),c=new vt[l.type](i,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=r.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),n[l.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new ku;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let h=0;h<c.materials.length;h++){const u=c.materials[h];n[u.uuid]===void 0&&(n[u.uuid]=r.parse(u)),l.push(n[u.uuid])}i[c.uuid]=l}else n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Mr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:er(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new za(t);r=new Zs(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){i[u.uuid]=[];for(let f=0,p=d.length;f<p;f++){const x=d[f],y=a(x);y!==null&&(y instanceof HTMLImageElement?i[u.uuid].push(y):i[u.uuid].push(new Ti(y.data,y.width,y.height)))}}else{const f=a(u.url);f!==null&&(i[u.uuid]=f)}}}return i}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=t[a.image];Array.isArray(l)?(c=new yi(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new Ti(l.data,l.width,l.height):c=new tt(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=n(a.mapping,By)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=n(a.wrap[0],Wu),c.wrapT=n(a.wrap[1],Wu)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=n(a.minFilter,qu)),a.magFilter!==void 0&&(c.magFilter=n(a.magFilter,qu)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),i[a.uuid]=c}return i}parseObject(e,t,n,i){let r;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function a(h){if(h===void 0)return;if(Array.isArray(h)){const u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),u.push(n[p])}return u}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}let c,l;switch(e.type){case"Scene":r=new ms,e.background!==void 0&&(Number.isInteger(e.background)&&(r.background=new ne(e.background))),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new lr(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new ar(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new st(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new Rr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Ka(e.color,e.intensity);break;case"DirectionalLight":r=new Qa(e.color,e.intensity);break;case"PointLight":r=new $a(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new el(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new Ja(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Ya(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new Cr().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),r=new Ms(c,l),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),r=new $e(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const h=e.count,u=e.instanceMatrix,d=e.instanceColor;r=new xa(c,l,h),r.instanceMatrix=new Ee(new Float32Array(u.array),16),d!==void 0&&(r.instanceColor=new Ee(new Float32Array(d.array),d.itemSize));break;case"LOD":r=new tu;break;case"Line":r=new Kt(o(e.geometry),a(e.material));break;case"LineLoop":r=new va(o(e.geometry),a(e.material));break;case"LineSegments":r=new wt(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":r=new fr(o(e.geometry),a(e.material));break;case"Sprite":r=new vs(a(e.material));break;case"Group":r=new Un;break;case"Bone":r=new bs;break;default:r=new Te}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let u=0;u<h.length;u++)r.add(this.parseObject(h[u],t,n,i))}if(e.animations!==void 0){const h=e.animations;for(let u=0;u<h.length;u++){const d=h[u];r.animations.push(i[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const h=e.levels;for(let u=0;u<h.length;u++){const d=h[u],f=r.getObjectByProperty("uuid",d.object);f!==void 0&&r.addLevel(f,d.distance)}}return r}bindSkeletons(e,t){if(Object.keys(t).length===0)return;e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const By={UVMapping:Br,CubeReflectionMapping:zi,CubeRefractionMapping:Ui,EquirectangularReflectionMapping:Nr,EquirectangularRefractionMapping:zr,CubeUVReflectionMapping:Kn,CubeUVRefractionMapping:Oi},Wu={RepeatWrapping:Gi,ClampToEdgeWrapping:at,MirroredRepeatWrapping:Hi},qu={NearestFilter:je,NearestMipmapNearestFilter:Ur,NearestMipmapLinearFilter:Or,LinearFilter:Ke,LinearMipmapNearestFilter:Mo,LinearMipmapLinearFilter:An};class Xu extends mt{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Vn.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}Xu.prototype.isImageBitmapLoader=!0;class Yu{constructor(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ar,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(m){const _=[];for(let M=0,T=m.length;M<T;M++){const v=m[M],A=new yn;A.curves=v.curves,_.push(A)}return _}function i(m,_){const M=_.length;let T=!1;for(let v=M-1,A=0;A<M;v=A++){let L=_[v],I=_[A],N=I.x-L.x,G=I.y-L.y;if(Math.abs(G)>Number.EPSILON){if(G<0&&(L=_[A],N=-N,I=_[v],G=-G),m.y<L.y||m.y>I.y)continue;if(m.y===L.y){if(m.x===L.x)return!0}else{const z=G*(m.x-L.x)-N*(m.y-L.y);if(z===0)return!0;if(z<0)continue;T=!T}}else{if(m.y!==L.y)continue;if(I.x<=m.x&&m.x<=L.x||L.x<=m.x&&m.x<=I.x)return!0}}return T}const r=Ot.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,c,l;const h=[];if(o.length===1)return c=o[0],l=new yn,l.curves=c.curves,h.push(l),h;let u=!r(o[0].getPoints());u=e?!u:u;const d=[],f=[];let p=[],x=0,y;f[x]=void 0,p[x]=[];for(let m=0,_=o.length;m<_;m++)c=o[m],y=c.getPoints(),a=r(y),a=e?!a:a,a?(!u&&f[x]&&x++,f[x]={s:new yn,p:y},f[x].s.curves=c.curves,u&&x++,p[x]=[]):p[x].push({h:c,p:y[0]});if(!f[0])return n(o);if(f.length>1){let m=!1;const _=[];for(let M=0,T=f.length;M<T;M++)d[M]=[];for(let M=0,T=f.length;M<T;M++){const v=p[M];for(let A=0;A<v.length;A++){const L=v[A];let I=!0;for(let N=0;N<f.length;N++)i(L.p,f[N].p)&&(M!==N&&_.push({froms:M,tos:N,hole:A}),I?(I=!1,d[N].push(L)):m=!0);I&&d[M].push(L)}}_.length>0&&(m||(p=d))}let g;for(let m=0,_=f.length;m<_;m++){l=f[m].s,h.push(l),g=p[m];for(let M=0,T=g.length;M<T;M++)l.holes.push(g[M].h)}return h}}class sl{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Ny(e,t,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}}function Ny(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=r;else{const u=zy(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function zy(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new Yu;let a,c,l,h,u,d,f,p;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let y=0,g=x.length;y<g;){const m=x[y++];switch(m){case"m":a=x[y++]*e+t,c=x[y++]*e+n,o.moveTo(a,c);break;case"l":a=x[y++]*e+t,c=x[y++]*e+n,o.lineTo(a,c);break;case"q":l=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,f=x[y++]*e+t,p=x[y++]*e+n,o.bezierCurveTo(u,d,f,p,l,h);break}}}return{offsetX:r.ha*e,path:o}}sl.prototype.isFont=!0;class Uy extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gt(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){let c;try{c=JSON.parse(a)}catch(h){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}const l=r.parse(c);t&&t(l)},n,i)}parse(e){return new sl(e)}}let Ks;const ol={getContext:function(){return Ks===void 0&&(Ks=new(window.AudioContext||window.webkitAudioContext)),Ks},setContext:function(s){Ks=s}};class Zu extends mt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gt(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const c=a.slice(0),l=ol.getContext();l.decodeAudioData(c,function(h){t(h)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}}class Ju extends Cr{constructor(e,t,n=1){super(void 0,n);const i=new ne().set(e),r=new ne().set(t),o=new w(i.r,i.g,i.b),a=new w(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}Ju.prototype.isHemisphereLightProbe=!0;class ju extends Cr{constructor(e,t=1){super(void 0,t);const n=new ne().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}ju.prototype.isAmbientLightProbe=!0;const $u=new ce,Qu=new ce;class Oy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new st,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new st,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache,n=t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep;if(n){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,o=r*t.near/t.focus,a=t.near*Math.tan(In*t.fov*.5)/t.zoom;let c,l;Qu.elements[12]=-r,$u.elements[12]=r,c=-a*t.aspect+o,l=a*t.aspect+o,i.elements[0]=2*t.near/(l-c),i.elements[8]=(l+c)/(l-c),this.cameraL.projectionMatrix.copy(i),c=-a*t.aspect-o,l=a*t.aspect-o,i.elements[0]=2*t.near/(l-c),i.elements[8]=(l+c)/(l-c),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Qu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply($u)}}class Ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ed();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ed(){return(typeof performance=="undefined"?Date:performance).now()}const Wn=new w,td=new nt,Gy=new w,qn=new w;class Hy extends Te{constructor(){super();this.type="AudioListener",this.context=ol.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ku}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Wn,td,Gy),qn.set(0,0,-1).applyQuaternion(td),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Wn.x,i),t.positionY.linearRampToValueAtTime(Wn.y,i),t.positionZ.linearRampToValueAtTime(Wn.z,i),t.forwardX.linearRampToValueAtTime(qn.x,i),t.forwardY.linearRampToValueAtTime(qn.y,i),t.forwardZ.linearRampToValueAtTime(qn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Wn.x,Wn.y,Wn.z),t.setOrientation(qn.x,qn.y,qn.z,n.x,n.y,n.z)}}class al extends Te{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.source.detune===void 0?void 0:(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this)}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Xn=new w,nd=new nt,ky=new w,Yn=new w;class Vy extends al{constructor(e){super(e);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xn,nd,ky),Yn.set(0,0,1).applyQuaternion(nd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Xn.x,n),t.positionY.linearRampToValueAtTime(Xn.y,n),t.positionZ.linearRampToValueAtTime(Xn.z,n),t.orientationX.linearRampToValueAtTime(Yn.x,n),t.orientationY.linearRampToValueAtTime(Yn.y,n),t.orientationZ.linearRampToValueAtTime(Yn.z,n)}else t.setPosition(Xn.x,Xn.y,Xn.z),t.setOrientation(Yn.x,Yn.y,Yn.z)}}class id{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class rd{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;nt.multiplyQuaternionsFlat(e,o,e,t,e,n),nt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ll="\\[\\]\\.:\\/",Wy=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",qy="[^"+ll.replace("\\.","")+"]",Xy=/((?:WC+[\/:])*)/.source.replace("WC",cl),Yy=/(WCOD+)?/.source.replace("WCOD",qy),Zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),jy=new RegExp("^"+Xy+Yy+Zy+Jy+"$"),$y=["material","materials","bones"];class Qy{constructor(e,t,n){const i=n||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Fe{constructor(e,t,n){this.path=t,this.parsedPath=n||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,n):new Fe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wy,"")}static parseTrackName(e){const t=jy.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=Qy,Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray],Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sd{constructor(){this.uuid=bt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let x=0,y=o;x!==y;++x)r[x].push(new Fe(d,n[x],i[x]))}else if(p<l){a=e[p];const x=--l,y=e[x];t[y.uuid]=p,e[p]=y,t[f]=x,e[x]=d;for(let g=0,m=o;g!==m;++g){const _=r[g],M=_[x];let T=_[p];_[p]=M,T===void 0&&(T=new Fe(d,n[g],i[g])),_[x]=T}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const x=n[f],y=x[u],g=x[h];x[h]=y,x[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--o,x=e[p];t[f.uuid]=u,e[u]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let y=0,g=i;y!==g;++y){const m=n[y],_=m[d],M=m[p];m[u]=_,m[d]=M,m.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,x=i;p!==x;++p){const y=n[p];y[u]=y[d],y.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new Fe(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}sd.prototype.isAnimationObjectGroup=!0;class Ky{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Rn,endingEnd:Rn};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Do:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Hr:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Xc;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Wc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Cn,i.endingEnd=Cn):(e?i.endingStart=this.zeroSlopeAtStart?Cn:Rn:i.endingStart=Yi,t?i.endingEnd=this.zeroSlopeAtEnd?Cn:Rn:i.endingEnd=Yi)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}class od extends rn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;p=new rd(Fe.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ba(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Mr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Hr),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Ky(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Mr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l){const h=t[l];h._update(i,e,r,o)}const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}od.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class eo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new eo(this.value.clone===void 0?this.value:this.value.clone())}}class ad extends On{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}ad.prototype.isInstancedInterleavedBuffer=!0;class ld{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}ld.prototype.isGLBufferAttribute=!0;class ev{constructor(e,t,n=0,i=Infinity){this.ray=new cn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return hl(e,this,n,t),n.sort(cd),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)hl(e[i],this,n,t);return n.sort(cd),n}}function cd(s,e){return s.distance-e.distance}function hl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)hl(i[r],e,t,!0)}}class tv{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nv{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const hd=new q;class Ci{constructor(e=new q(Infinity,Infinity),t=new q(-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new q),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new q),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new q),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new q),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){const t=hd.copy(e).clamp(this.min,this.max);return t.sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ci.prototype.isBox2=!0;const ud=new w,to=new w;class dd{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new w),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new w),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new w),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ud.subVectors(e,this.start),to.subVectors(this.end,this.start);const n=to.dot(to),i=to.dot(ud);let r=i/n;return t&&(r=ct(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new w),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class fd extends Te{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}fd.prototype.isImmediateRenderObject=!0;const pd=new w;class iv extends Te{constructor(e,t){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new fe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new le(i,3));const r=new ot({fog:!1,toneMapped:!1});this.cone=new wt(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),pd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(pd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const vn=new w,no=new ce,ul=new ce;class md extends wt{constructor(e){const t=gd(e),n=new fe,i=[],r=[],o=new ne(0,0,1),a=new ne(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new le(i,3)),n.setAttribute("color",new le(r,3));const c=new ot({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ul.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(no.multiplyMatrices(ul,a.matrixWorld),vn.setFromMatrixPosition(no),i.setXYZ(o,vn.x,vn.y,vn.z),no.multiplyMatrices(ul,a.parent.matrixWorld),vn.setFromMatrixPosition(no),i.setXYZ(o+1,vn.x,vn.y,vn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function gd(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,gd(s.children[t]));return e}class rv extends $e{constructor(e,t,n){const i=new vr(t,4,2),r=new $t({wireframe:!0,fog:!1,toneMapped:!1});super(i,r);this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const sv=new w,xd=new ne,yd=new ne;class ov extends Te{constructor(e,t,n){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new xr(t);i.rotateY(Math.PI*.5),this.material=new $t({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Ee(o,3)),this.add(new $e(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");xd.copy(this.light.color),yd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?xd:yd;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(sv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vd extends wt{constructor(e=10,t=10,n=4473924,i=8947848){n=new ne(n),i=new ne(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=d===r?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const h=new fe;h.setAttribute("position",new le(c,3)),h.setAttribute("color",new le(l,3));const u=new ot({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}class av extends wt{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new ne(r),o=new ne(o);const a=[],c=[];for(let u=0;u<=t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const x=u&1?r:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let u=0;u<=n;u++){const d=u&1?r:o,f=e-e/n*u;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),y=Math.sin(x)*f,g=Math.cos(x)*f;a.push(y,0,g),c.push(d.r,d.g,d.b),x=(p+1)/i*(Math.PI*2),y=Math.sin(x)*f,g=Math.cos(x)*f,a.push(y,0,g),c.push(d.r,d.g,d.b)}}const l=new fe;l.setAttribute("position",new le(a,3)),l.setAttribute("color",new le(c,3));const h=new ot({vertexColors:!0,toneMapped:!1});super(l,h);this.type="PolarGridHelper"}}const _d=new w,io=new w,wd=new w;class lv extends Te{constructor(e,t,n){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new fe;i.setAttribute("position",new le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new ot({fog:!1,toneMapped:!1});this.lightPlane=new Kt(i,r),this.add(this.lightPlane),i=new fe,i.setAttribute("position",new le([0,0,0,0,0,1],3)),this.targetLine=new Kt(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){_d.setFromMatrixPosition(this.light.matrixWorld),io.setFromMatrixPosition(this.light.target.matrixWorld),wd.subVectors(io,_d),this.lightPlane.lookAt(io),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(io),this.targetLine.scale.z=wd.length()}}const ro=new w,We=new nr;class cv extends wt{constructor(e){const t=new fe,n=new ot({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},a=new ne(16755200),c=new ne(16711680),l=new ne(43775),h=new ne(16777215),u=new ne(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",c),d("p","n2",c),d("p","n3",c),d("p","n4",c),d("u1","u2",l),d("u2","u3",l),d("u3","u1",l),d("c","t",h),d("p","c",u),d("cn1","cn2",u),d("cn3","cn4",u),d("cf1","cf2",u),d("cf3","cf4",u);function d(p,x,y){f(p,y),f(x,y)}function f(p,x){i.push(0,0,0),r.push(x.r,x.g,x.b),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new le(i,3)),t.setAttribute("color",new le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;We.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ze("c",t,e,We,0,0,-1),Ze("t",t,e,We,0,0,1),Ze("n1",t,e,We,-n,-i,-1),Ze("n2",t,e,We,n,-i,-1),Ze("n3",t,e,We,-n,i,-1),Ze("n4",t,e,We,n,i,-1),Ze("f1",t,e,We,-n,-i,1),Ze("f2",t,e,We,n,-i,1),Ze("f3",t,e,We,-n,i,1),Ze("f4",t,e,We,n,i,1),Ze("u1",t,e,We,n*.7,i*1.1,-1),Ze("u2",t,e,We,-n*.7,i*1.1,-1),Ze("u3",t,e,We,0,i*2,-1),Ze("cf1",t,e,We,-n,0,1),Ze("cf2",t,e,We,n,0,1),Ze("cf3",t,e,We,0,-i,1),Ze("cf4",t,e,We,0,i,1),Ze("cn1",t,e,We,-n,0,-1),Ze("cn2",t,e,We,n,0,-1),Ze("cn3",t,e,We,0,-i,-1),Ze("cn4",t,e,We,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ze(s,e,t,n,i,r,o){ro.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],ro.x,ro.y,ro.z)}}const so=new _t;class Md extends wt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new fe;r.setIndex(new Ee(n,1)),r.setAttribute("position",new Ee(i,3)),super(r,new ot({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&so.setFromObject(this.object),so.isEmpty())return;const t=so.min,n=so.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return wt.prototype.copy.call(this,e),this.object=e.object,this}}class hv extends wt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new fe;r.setIndex(new Ee(n,1)),r.setAttribute("position",new le(i,3)),super(r,new ot({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;if(t.isEmpty())return;t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e)}}class uv extends Kt{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new fe;o.setAttribute("position",new le(r,3)),o.computeBoundingSphere(),super(o,new ot({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new fe;c.setAttribute("position",new le(a,3)),c.computeBoundingSphere(),this.add(new $e(c,new $t({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?Je:$n,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const bd=new w;let oo,dl;class dv extends Te{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super();this.type="ArrowHelper",oo===void 0&&(oo=new fe,oo.setAttribute("position",new le([0,0,0,0,1,0],3)),dl=new Ei(0,.5,1,5,1),dl.translate(0,-.5,0)),this.position.copy(t),this.line=new Kt(oo,new ot({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $e(dl,new $t({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class Sd extends wt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new fe;i.setAttribute("position",new le(t,3)),i.setAttribute("color",new le(n,3));const r=new ot({vertexColors:!0,toneMapped:!1});super(i,r);this.type="AxesHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Td=new Float32Array(1),fv=new Int32Array(Td.buffer);class pv{static toHalfFloat(e){Td[0]=e;const t=fv[0];let n=t>>16&32768,i=t>>12&2047;const r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}}const Pi=4,_n=8,Ht=Math.pow(2,_n),Ed=[.125,.215,.35,.446,.526,.582],Ad=_n-Pi+1+Ed.length,Ii=20,kt={[xt]:0,[Zi]:1,[Vr]:2,[Fo]:3,[Bo]:4,[No]:5,[kr]:6},Zn=new $t({side:Je,depthWrite:!1,depthTest:!1}),mv=new $e(new zn,Zn),fl=new Rr,{_lodPlanes:Pr,_sizeLods:Ld,_sigmas:ao}=yv(),Rd=new ne;let pl=null;const Jn=(1+Math.sqrt(5))/2,Di=1/Jn,Cd=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Jn,Di),new w(0,Jn,-Di),new w(Di,0,Jn),new w(-Di,0,Jn),new w(Jn,Di,0),new w(-Jn,Di,0)];function Pd(s){const e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);s.multiplyScalar(Math.pow(2,-t));const n=(t+128)/255;return n}class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=vv(Ii),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pl=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Fd(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Dd(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Pr.length;e++)Pr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(pl),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e){pl=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:je,minFilter:je,generateMipmaps:!1,type:ei,format:ac,encoding:xv(e)?e.encoding:Vr,depthBuffer:!1},n=Id(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Id(t),n}_compileMaterial(e){const t=new $e(Pr[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,i){const r=90,o=1,a=new st(r,o,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.outputEncoding,f=h.toneMapping;h.getClearColor(Rd),h.toneMapping=En,h.outputEncoding=xt,h.autoClear=!1;let p=!1;const x=e.background;if(x){if(x.isColor){Zn.color.copy(x).convertSRGBToLinear(),e.background=null;const y=Pd(Zn.color);Zn.opacity=y,p=!0}}else{Zn.color.copy(Rd).convertSRGBToLinear();const y=Pd(Zn.color);Zn.opacity=y,p=!0}for(let y=0;y<6;y++){const g=y%3;g==0?(a.up.set(0,c[y],0),a.lookAt(l[y],0,0)):g==1?(a.up.set(0,0,c[y]),a.lookAt(0,l[y],0)):(a.up.set(0,c[y],0),a.lookAt(0,0,l[y])),lo(i,g*Ht,y>2?Ht:0,Ht,Ht),h.setRenderTarget(i),p&&h.render(mv,a),h.render(e,a)}h.toneMapping=f,h.outputEncoding=d,h.autoClear=u}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Fd()):this._equirectShader==null&&(this._equirectShader=Dd());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new $e(Pr[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=kt[e.encoding],o.outputEncoding.value=kt[t.texture.encoding],lo(t,0,0,3*Ht,2*Ht),n.setRenderTarget(t),n.render(r,fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Ad;i++){const r=Math.sqrt(ao[i]*ao[i]-ao[i-1]*ao[i-1]),o=Cd[(i-1)%Cd.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(Pr[i],l),d=l.uniforms,f=Ld[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),x=r/p,y=isFinite(r)?1+Math.floor(h*x):Ii;y>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ii}`);const g=[];let m=0;for(let v=0;v<Ii;++v){const A=v/x,L=Math.exp(-A*A/2);g.push(L),v==0?m+=L:v<y&&(m+=2*L)}for(let v=0;v<g.length;v++)g[v]=g[v]/m;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=p,d.mipInt.value=_n-n,d.inputEncoding.value=kt[e.texture.encoding],d.outputEncoding.value=kt[e.texture.encoding];const _=Ld[i],M=3*Math.max(0,Ht-2*_),T=(i===0?0:2*Ht)+2*_*(i>_n-Pi?i-_n+Pi:0);lo(t,M,T,3*_,2*_),c.setRenderTarget(t),c.render(u,fl)}}function xv(s){return s===void 0||s.type!==ei?!1:s.encoding===xt||s.encoding===Zi||s.encoding===kr}function yv(){const s=[],e=[],t=[];let n=_n;for(let i=0;i<Ad;i++){const r=Math.pow(2,n);e.push(r);let o=1/r;i>_n-Pi?o=Ed[i-_n+Pi-1]:i==0&&(o=0),t.push(o);const a=1/(r-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=2,x=1,y=new Float32Array(f*d*u),g=new Float32Array(p*d*u),m=new Float32Array(x*d*u);for(let M=0;M<u;M++){const T=M%3*2/3-1,v=M>2?0:-1,A=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];y.set(A,f*d*M),g.set(h,p*d*M);const L=[M,M,M,M,M,M];m.set(L,x*d*M)}const _=new fe;_.setAttribute("position",new Ee(y,f)),_.setAttribute("uv",new Ee(g,p)),_.setAttribute("faceIndex",new Ee(m,x)),s.push(_),n>Pi&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Id(s){const e=new Rt(3*Ht,3*Ht,s);return e.texture.mapping=Kn,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function lo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function vv(s){const e=new Float32Array(s),t=new w(0,1,0),n=new Li({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:kt[xt]},outputEncoding:{value:kt[xt]}},vertexShader:ml(),fragmentShader:`

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

			${gl()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1});return n}function Dd(){const s=new q(1,1),e=new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:kt[xt]},outputEncoding:{value:kt[xt]}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${gl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1});return e}function Fd(){const s=new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:kt[xt]},outputEncoding:{value:kt[xt]}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${gl()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1});return s}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function gl(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}const _v=0,wv=1,Mv=0,bv=1,Sv=2;function Tv(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s}function Ev(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s}function Av(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new fr(s,e)}function Lv(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new vs(s)}function Rv(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new fr(s,e)}function Cv(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Gn(s)}function Pv(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Gn(s)}function Iv(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Gn(s)}function Dv(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new w(s,e,t)}function Fv(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Ee(s,e).setUsage(ri)}function Bv(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new mh(s,e)}function Nv(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new gh(s,e)}function zv(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new xh(s,e)}function Uv(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new yh(s,e)}function Ov(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new es(s,e)}function Gv(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new vh(s,e)}function Hv(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new ts(s,e)}function kv(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new le(s,e)}function Vv(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new wh(s,e)}Et.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Et.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s},Ar.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};function Wv(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Sd(s)}function qv(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Md(s,e)}function Xv(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new wt(new ba(s.geometry),new ot({color:e!==void 0?e:16777215}))}vd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},md.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function Yv(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new wt(new Ea(s.geometry),new ot({color:e!==void 0?e:16777215}))}mt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),nl.extractUrlBase(s)},mt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function Zv(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Gt(s)}function Jv(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Cu(s)}Ci.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)},Ci.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Ci.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},Ci.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)},_t.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)},_t.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},_t.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},_t.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},_t.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)},an.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ir.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)},dd.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)},et.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},et.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},et.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},et.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},ce.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)},ce.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)},ce.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)},ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ce.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ce.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)},ce.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ce.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ce.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)},ce.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},Pt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)},nt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)},nt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},cn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},cn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)},cn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},Xe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},Xe.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)},Xe.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)},Xe.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)},Xe.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)},Xe.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Xe.getBarycoord(s,e,t,n,i)},Xe.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Xe.getNormal(s,e,t,n)},yn.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)},yn.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new en(this,s)},yn.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new yr(this,s)},q.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},q.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},w.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)},w.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)},w.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)},w.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)},w.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},w.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ne.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},Ne.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Te.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)},Te.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Te.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)},Te.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Te.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Te.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),$e.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties($e.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Yc},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Ms.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},st.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)},Object.defineProperties(zt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}}),Object.defineProperties(Ee.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ri},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ri)}}}),Ee.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ri:ii),this},Ee.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ee.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},fe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)},fe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Ee(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)},fe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)},fe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},fe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},fe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)},fe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),On.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ri:ii),this},On.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},en.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},en.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},en.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},ms.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},eo.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(it.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ne}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===po}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}}),Object.defineProperties(Qt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}}),Ue.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)},Ue.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)},Ue.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ue.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ue.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ue.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ue.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ue.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ue.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ue.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ue.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ue.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ue.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ue.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ue.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)},Ue.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ue.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ue.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ue.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ue.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ue.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ue.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ue.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ue.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ue.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ue.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Zi:xt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Zh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function jv(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new us(s,t)}Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}}),al.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this,t=new Zu;return t.load(s,function(n){e.setBuffer(n)}),this},id.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},hs.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)},hs.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)},Dn.crossOrigin=void 0,Dn.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Pu;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},Dn.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Ru;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},Dn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Dn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function $v(){console.error("THREE.CanvasRenderer has been removed")}function Qv(){console.error("THREE.JSONLoader has been removed.")}const Kv={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function e0(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);export{jl as ACESFilmicToneMapping,Tn as AddEquation,Xl as AddOperation,Do as AdditiveAnimationBlendMode,mo as AdditiveBlending,rc as AlphaFormat,Ol as AlwaysDepth,Qc as AlwaysStencilFunc,Ka as AmbientLight,ju as AmbientLightProbe,Mr as AnimationClip,Ty as AnimationLoader,od as AnimationMixer,sd as AnimationObjectGroup,Ge as AnimationUtils,Ua as ArcCurve,pa as ArrayCamera,dv as ArrowHelper,al as Audio,id as AudioAnalyser,ol as AudioContext,Hy as AudioListener,Zu as AudioLoader,Sd as AxesHelper,Wv as AxisHelper,Je as BackSide,Jc as BasicDepthPacking,Vd as BasicShadowMap,Jv as BinaryTextureLoader,bs as Bone,Hn as BooleanKeyframeTrack,qv as BoundingBoxHelper,Ci as Box2,_t as Box3,hv as Box3Helper,zn as BoxBufferGeometry,zn as BoxGeometry,Md as BoxHelper,Ee as BufferAttribute,fe as BufferGeometry,Vu as BufferGeometryLoader,Ql as ByteType,Vn as Cache,nr as Camera,cv as CameraHelper,$v as CanvasRenderer,xu as CanvasTexture,Va as CatmullRomCurve3,Jl as CineonToneMapping,Rs as CircleBufferGeometry,Rs as CircleGeometry,at as ClampToEdgeWrapping,Ku as Clock,ne as Color,Na as ColorKeyframeTrack,wa as CompressedTexture,Ey as CompressedTextureLoader,Cs as ConeBufferGeometry,Cs as ConeGeometry,hs as CubeCamera,zi as CubeReflectionMapping,Ui as CubeRefractionMapping,yi as CubeTexture,Ru as CubeTextureLoader,Kn as CubeUVReflectionMapping,Oi as CubeUVRefractionMapping,js as CubicBezierCurve,Wa as CubicBezierCurve3,Tu as CubicInterpolant,uo as CullFaceBack,Sl as CullFaceFront,kd as CullFaceFrontBack,bl as CullFaceNone,Et as Curve,Fu as CurvePath,El as CustomBlending,$l as CustomToneMapping,Ei as CylinderBufferGeometry,Ei as CylinderGeometry,nv as Cylindrical,Ti as DataTexture,ha as DataTexture2DArray,ua as DataTexture3D,Cu as DataTextureLoader,pv as DataUtils,ef as DecrementStencilOp,nf as DecrementWrapStencilOp,Lu as DefaultLoadingManager,Ln as DepthFormat,ni as DepthStencilFormat,yu as DepthTexture,Qa as DirectionalLight,lv as DirectionalLightHelper,Eu as DiscreteInterpolant,Ps as DodecahedronBufferGeometry,Ps as DodecahedronGeometry,Bi as DoubleSide,Dl as DstAlphaFactor,Bl as DstColorFactor,Fv as DynamicBufferAttribute,xf as DynamicCopyUsage,ri as DynamicDrawUsage,pf as DynamicReadUsage,ba as EdgesGeometry,Xv as EdgesHelper,br as EllipseCurve,Hl as EqualDepth,af as EqualStencilFunc,Nr as EquirectangularReflectionMapping,zr as EquirectangularRefractionMapping,Nn as Euler,rn as EventDispatcher,en as ExtrudeBufferGeometry,en as ExtrudeGeometry,bv as FaceColors,Gt as FileLoader,po as FlatShading,_h as Float16BufferAttribute,kv as Float32Attribute,le as Float32BufferAttribute,Vv as Float64Attribute,wh as Float64BufferAttribute,qt as FloatType,lr as Fog,ar as FogExp2,sl as Font,Uy as FontLoader,$n as FrontSide,ir as Frustum,ld as GLBufferAttribute,vf as GLSL1,zo as GLSL3,kr as GammaEncoding,Vl as GreaterDepth,kl as GreaterEqualDepth,uf as GreaterEqualStencilFunc,cf as GreaterStencilFunc,vd as GridHelper,Un as Group,Wi as HalfFloatType,Ya as HemisphereLight,ov as HemisphereLightHelper,Ju as HemisphereLightProbe,Us as IcosahedronBufferGeometry,Us as IcosahedronGeometry,Xu as ImageBitmapLoader,Zs as ImageLoader,Dn as ImageUtils,fd as ImmediateRenderObject,Kd as IncrementStencilOp,tf as IncrementWrapStencilOp,rl as InstancedBufferAttribute,il as InstancedBufferGeometry,ad as InstancedInterleavedBuffer,xa as InstancedMesh,Uv as Int16Attribute,yh as Int16BufferAttribute,Gv as Int32Attribute,vh as Int32BufferAttribute,Bv as Int8Attribute,mh as Int8BufferAttribute,ec as IntType,On as InterleavedBuffer,mn as InterleavedBufferAttribute,tn as Interpolant,qi as InterpolateDiscrete,Xi as InterpolateLinear,Gr as InterpolateSmooth,rf as InvertStencilOp,Qv as JSONLoader,Wr as KeepStencilOp,Bt as KeyframeTrack,tu as LOD,Os as LatheBufferGeometry,Os as LatheGeometry,Jo as Layers,e0 as LensFlare,Gl as LessDepth,Fr as LessEqualDepth,lf as LessEqualStencilFunc,of as LessStencilFunc,zt as Light,Cr as LightProbe,Kt as Line,dd as Line3,ot as LineBasicMaterial,Er as LineCurve,Du as LineCurve3,Fa as LineDashedMaterial,va as LineLoop,wv as LinePieces,wt as LineSegments,_v as LineStrip,xt as LinearEncoding,Ke as LinearFilter,Ba as LinearInterpolant,Zd as LinearMipMapLinearFilter,Yd as LinearMipMapNearestFilter,An as LinearMipmapLinearFilter,Mo as LinearMipmapNearestFilter,Yl as LinearToneMapping,mt as Loader,nl as LoaderUtils,za as LoadingManager,Zc as LogLuvEncoding,Wc as LoopOnce,Xc as LoopPingPong,qc as LoopRepeat,oc as LuminanceAlphaFormat,sc as LuminanceFormat,Gd as MOUSE,it as Material,ku as MaterialLoader,th as Math,th as MathUtils,et as Matrix3,ce as Matrix4,vo as MaxEquation,$e as Mesh,$t as MeshBasicMaterial,fs as MeshDepthMaterial,ps as MeshDistanceMaterial,Tv as MeshFaceMaterial,Ia as MeshLambertMaterial,Da as MeshMatcapMaterial,Pa as MeshNormalMaterial,Ra as MeshPhongMaterial,La as MeshPhysicalMaterial,Ys as MeshStandardMaterial,Ca as MeshToonMaterial,yo as MinEquation,Hi as MirroredRepeatWrapping,ql as MixOperation,Ev as MultiMaterial,xo as MultiplyBlending,Ni as MultiplyOperation,je as NearestFilter,Xd as NearestMipMapLinearFilter,qd as NearestMipMapNearestFilter,Or as NearestMipmapLinearFilter,Ur as NearestMipmapNearestFilter,Ul as NeverDepth,sf as NeverStencilFunc,Wt as NoBlending,Mv as NoColors,En as NoToneMapping,Hr as NormalAnimationBlendMode,Qn as NormalBlending,Wl as NotEqualDepth,hf as NotEqualStencilFunc,_r as NumberKeyframeTrack,Te as Object3D,Fy as ObjectLoader,$c as ObjectSpaceNormalMap,xr as OctahedronBufferGeometry,xr as OctahedronGeometry,Cl as OneFactor,Fl as OneMinusDstAlphaFactor,Nl as OneMinusDstColorFactor,wo as OneMinusSrcAlphaFactor,Il as OneMinusSrcColorFactor,Rr as OrthographicCamera,fo as PCFShadowMap,Tl as PCFSoftShadowMap,gv as PMREMGenerator,Gs as ParametricBufferGeometry,Gs as ParametricGeometry,Lv as Particle,Pv as ParticleBasicMaterial,Rv as ParticleSystem,Iv as ParticleSystemMaterial,Ar as Path,st as PerspectiveCamera,Pt as Plane,rr as PlaneBufferGeometry,rr as PlaneGeometry,uv as PlaneHelper,Av as PointCloud,Cv as PointCloudMaterial,$a as PointLight,rv as PointLightHelper,fr as Points,Gn as PointsMaterial,av as PolarGridHelper,gn as PolyhedronBufferGeometry,gn as PolyhedronGeometry,Vy as PositionalAudio,Fe as PropertyBinding,rd as PropertyMixer,$s as QuadraticBezierCurve,qa as QuadraticBezierCurve3,nt as Quaternion,Ri as QuaternionKeyframeTrack,Au as QuaternionLinearInterpolant,ho as REVISION,jc as RGBADepthPacking,Mt as RGBAFormat,fc as RGBAIntegerFormat,Ec as RGBA_ASTC_10x10_Format,bc as RGBA_ASTC_10x5_Format,Sc as RGBA_ASTC_10x6_Format,Tc as RGBA_ASTC_10x8_Format,Ac as RGBA_ASTC_12x10_Format,Lc as RGBA_ASTC_12x12_Format,mc as RGBA_ASTC_4x4_Format,gc as RGBA_ASTC_5x4_Format,xc as RGBA_ASTC_5x5_Format,yc as RGBA_ASTC_6x5_Format,vc as RGBA_ASTC_6x6_Format,_c as RGBA_ASTC_8x5_Format,wc as RGBA_ASTC_8x6_Format,Mc as RGBA_ASTC_8x8_Format,Rc as RGBA_BPTC_Format,Io as RGBA_ETC2_EAC_Format,Co as RGBA_PVRTC_2BPPV1_Format,Ro as RGBA_PVRTC_4BPPV1_Format,So as RGBA_S3TC_DXT1_Format,To as RGBA_S3TC_DXT3_Format,Eo as RGBA_S3TC_DXT5_Format,No as RGBDEncoding,Vr as RGBEEncoding,ac as RGBEFormat,nn as RGBFormat,dc as RGBIntegerFormat,Bo as RGBM16Encoding,Fo as RGBM7Encoding,pc as RGB_ETC1_Format,Po as RGB_ETC2_Format,Lo as RGB_PVRTC_2BPPV1_Format,Ao as RGB_PVRTC_4BPPV1_Format,bo as RGB_S3TC_DXT1_Format,hc as RGFormat,uc as RGIntegerFormat,Li as RawShaderMaterial,cn as Ray,ev as Raycaster,el as RectAreaLight,lc as RedFormat,cc as RedIntegerFormat,Zl as ReinhardToneMapping,Gi as RepeatWrapping,Qd as ReplaceStencilOp,Ll as ReverseSubtractEquation,Hs as RingBufferGeometry,Hs as RingGeometry,Hc as SRGB8_ALPHA8_ASTC_10x10_Format,Uc as SRGB8_ALPHA8_ASTC_10x5_Format,Oc as SRGB8_ALPHA8_ASTC_10x6_Format,Gc as SRGB8_ALPHA8_ASTC_10x8_Format,kc as SRGB8_ALPHA8_ASTC_12x10_Format,Vc as SRGB8_ALPHA8_ASTC_12x12_Format,Cc as SRGB8_ALPHA8_ASTC_4x4_Format,Pc as SRGB8_ALPHA8_ASTC_5x4_Format,Ic as SRGB8_ALPHA8_ASTC_5x5_Format,Dc as SRGB8_ALPHA8_ASTC_6x5_Format,Fc as SRGB8_ALPHA8_ASTC_6x6_Format,Bc as SRGB8_ALPHA8_ASTC_8x5_Format,Nc as SRGB8_ALPHA8_ASTC_8x6_Format,zc as SRGB8_ALPHA8_ASTC_8x8_Format,ms as Scene,Kv as SceneUtils,Ae as ShaderChunk,Ft as ShaderLib,Qt as ShaderMaterial,Aa as ShadowMaterial,yn as Shape,yr as ShapeBufferGeometry,yr as ShapeGeometry,Yu as ShapePath,Ot as ShapeUtils,Kl as ShortType,Ss as Skeleton,md as SkeletonHelper,Ms as SkinnedMesh,Wd as SmoothShading,an as Sphere,vr as SphereBufferGeometry,vr as SphereGeometry,tv as Spherical,tl as SphericalHarmonics3,Qs as SplineCurve,Ja as SpotLight,iv as SpotLightHelper,vs as Sprite,gs as SpriteMaterial,_o as SrcAlphaFactor,zl as SrcAlphaSaturateFactor,Pl as SrcColorFactor,gf as StaticCopyUsage,ii as StaticDrawUsage,ff as StaticReadUsage,Oy as StereoCamera,yf as StreamCopyUsage,df as StreamDrawUsage,mf as StreamReadUsage,kn as StringKeyframeTrack,Al as SubtractEquation,go as SubtractiveBlending,Hd as TOUCH,Pn as TangentSpaceNormalMap,ks as TetrahedronBufferGeometry,ks as TetrahedronGeometry,Vs as TextBufferGeometry,Vs as TextGeometry,tt as Texture,Pu as TextureLoader,Ws as TorusBufferGeometry,Ws as TorusGeometry,qs as TorusKnotBufferGeometry,qs as TorusKnotGeometry,Xe as Triangle,jd as TriangleFanDrawMode,Jd as TriangleStripDrawMode,Yc as TrianglesDrawMode,Xs as TubeBufferGeometry,Xs as TubeGeometry,Br as UVMapping,Ov as Uint16Attribute,es as Uint16BufferAttribute,Hv as Uint32Attribute,ts as Uint32BufferAttribute,Nv as Uint8Attribute,gh as Uint8BufferAttribute,zv as Uint8ClampedAttribute,xh as Uint8ClampedBufferAttribute,eo as Uniform,K as UniformsLib,Sh as UniformsUtils,ei as UnsignedByteType,ti as UnsignedInt248Type,Vi as UnsignedIntType,tc as UnsignedShort4444Type,nc as UnsignedShort5551Type,ic as UnsignedShort565Type,ki as UnsignedShortType,jn as VSMShadowMap,q as Vector2,w as Vector3,Ne as Vector4,wr as VectorKeyframeTrack,Dv as Vertex,Sv as VertexColors,gu as VideoTexture,jh as WebGL1Renderer,us as WebGLCubeRenderTarget,nh as WebGLMultipleRenderTargets,ih as WebGLMultisampleRenderTarget,Rt as WebGLRenderTarget,jv as WebGLRenderTargetCube,Ue as WebGLRenderer,Jh as WebGLUtils,Ea as WireframeGeometry,Yv as WireframeHelper,Yi as WrapAroundEnding,Zv as XHRLoader,Rn as ZeroCurvatureEnding,Rl as ZeroFactor,Cn as ZeroSlopeEnding,$d as ZeroStencilOp,Zi as sRGBEncoding};export default null;
