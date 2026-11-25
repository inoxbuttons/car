var Ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xg=0,od=1,qg=2;var Cp=1,Yg=2,Di=3,Nn=0,Wt=1,dn=2,di=0,ur=1,Ps=2,ad=3,cd=4,jg=5,Rs=100,Zg=101,Kg=102,Jg=103,Qg=104,$g=200,e0=201,t0=202,n0=203,oh=204,ah=205,i0=206,s0=207,r0=208,o0=209,a0=210,c0=211,l0=212,h0=213,u0=214,ch=0,lh=1,hh=2,mr=3,uh=4,fh=5,dh=6,ph=7,Pp=0,f0=1,d0=2,ns=0,bu=1,_u=2,vu=3,Do=4,p0=5,yu=6,Mu=7,ld="attached",m0="detached",Ip=300,gr=301,xr=302,bo=303,mh=304,Tc=306,pi=1e3,Kn=1001,_o=1002,mn=1003,Su=1004;var lr=1005;var It=1006,po=1007;var Jn=1008;var $n=1009,Dp=1010,Lp=1011,vo=1012,wu=1013,ss=1014,rn=1015,Ht=1016,Tu=1017,Au=1018,br=1020,Up=35902,Np=1021,Fp=1022,pn=1023,Op=1024,Bp=1025,fr=1026,_r=1027,Ns=1028,Ac=1029,zp=1030,Eu=1031;var Ru=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,gh=35840,xh=35841,bh=35842,_h=35843,vh=36196,yh=37492,Mh=37496,Sh=37808,wh=37809,Th=37810,Ah=37811,Eh=37812,Rh=37813,Ch=37814,Ph=37815,Ih=37816,Dh=37817,Lh=37818,Uh=37819,Nh=37820,Fh=37821,ja=36492,Oh=36494,Bh=36495,kp=36283,zh=36284,kh=36285,Hh=36286;var vr=2300,yr=2301,Tl=2302,hd=2400,ud=2401,fd=2402,g0=2500;var Hp=0,Ec=1,Lo=2,x0=3200,b0=3201;var Vp=0,_0=1,fi="",Pt="srgb",jt="srgb-linear",Rc="linear",dt="srgb";var js=7680;var dd=519,v0=512,y0=513,M0=514,Gp=515,S0=516,w0=517,T0=518,A0=519,Vh=35044;var pd="300 es",Ui=2e3,Za=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=1234567,mo=Math.PI/180,Mr=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Cu(i,e){return(i%e+e)%e}function E0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function R0(i,e,t){return i!==e?(t-i)/(e-i):0}function go(i,e,t){return(1-t)*i+t*e}function C0(i,e,t,n){return go(i,e,1-Math.exp(-t*n))}function P0(i,e=1){return e-Math.abs(Cu(i,e*2)-e)}function I0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function D0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function L0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U0(i,e){return i+Math.random()*(e-i)}function N0(i){return i*(.5-Math.random())}function F0(i){i!==void 0&&(md=i);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O0(i){return i*mo}function B0(i){return i*Mr}function z0(i){return(i&i-1)===0&&i!==0}function k0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function H0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ot={DEG2RAD:mo,RAD2DEG:Mr,generateUUID:Qn,clamp:Gt,euclideanModulo:Cu,mapLinear:E0,inverseLerp:R0,lerp:go,damp:C0,pingpong:P0,smoothstep:I0,smootherstep:D0,randInt:L0,randFloat:U0,randFloatSpread:N0,seededRandom:F0,degToRad:O0,radToDeg:B0,isPowerOfTwo:z0,ceilPowerOfTwo:k0,floorPowerOfTwo:H0,setQuaternionFromProperEuler:V0,normalize:gt,denormalize:Zn},Me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],x=n[8],b=s[0],g=s[3],p=s[6],y=s[1],M=s[4],v=s[7],R=s[2],E=s[5],C=s[8];return r[0]=o*b+a*y+c*R,r[3]=o*g+a*M+c*E,r[6]=o*p+a*v+c*C,r[1]=l*b+h*y+u*R,r[4]=l*g+h*M+u*E,r[7]=l*p+h*v+u*C,r[2]=f*b+m*y+x*R,r[5]=f*g+m*M+x*E,r[8]=f*p+m*v+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,x=t*u+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=f*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-a*t)*b,e[6]=m*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new ke;function Wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function G0(){let i=yo("canvas");return i.style.display="block",i}var gd={};function uo(i){i in gd||(gd[i]=!0,console.warn(i))}function W0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function X0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function q0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ye={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Rc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xd=[.64,.33,.3,.6,.15,.06],bd=[.2126,.7152,.0722],_d=[.3127,.329],vd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[jt]:{primaries:xd,whitePoint:_d,transfer:Rc,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:bd,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:xd,whitePoint:_d,transfer:dt,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:bd,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});var Zs,Gh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=yo("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y0=0,Ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var j0=0,en=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=It,o=Jn,a=pn,c=$n,l=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Qn(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Ip;en.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],x=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(x+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(m+1)/2,R=(p+1)/2,E=(h+f)/4,C=(u+b)/4,U=(x+g)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=C/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-x)*(g-x)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(u-b)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wh=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],x=r[o+2],b=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=b;return}if(u!==b||c!==f||l!==m||h!==x){let g=1-a,p=c*f+l*m+h*x+u*b,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let R=Math.sqrt(M),E=Math.atan2(R,p*y);g=Math.sin(g*E)/R,a=Math.sin(a*E)/R}let v=a*y;if(c=c*g+f*v,l=l*g+m*v,h=h*g+x*v,u=u*g+b*v,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*m-l*f,e[t+1]=c*x+h*f+l*u-a*m,e[t+2]=l*x+h*m+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),m=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"YZX":this._x=f*h*u+l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u-f*m*x;break;case"XZY":this._x=f*h*u-l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new D,Md=new An,ot=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),ma.subVectors(this.max,no),Ks.subVectors(e.a,no),Js.subVectors(e.b,no),Qs.subVectors(e.c,no),Zi.subVectors(Js,Ks),Ki.subVectors(Qs,Js),_s.subVectors(Ks,Qs);let t=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-_s.z,_s.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,_s.z,0,-_s.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-_s.y,_s.x,0];return!Cl(t,Ks,Js,Qs,ma)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,Ks,Js,Qs,ma))?!1:(ga.crossVectors(Zi,Ki),t=[ga.x,ga.y,ga.z],Cl(t,Ks,Js,Qs,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,pa=new ot,Ks=new D,Js=new D,Qs=new D,Zi=new D,Ki=new D,_s=new D,no=new D,ma=new D,ga=new D,vs=new D;function Cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vs.fromArray(i,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Z0=new ot,io=new D,Pl=new D,Nt=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Pl)),this.expandByPoint(io.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new D,Il=new D,xa=new D,Ji=new D,Dl=new D,ba=new D,Ll=new D,ei=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Il.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Il);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Ji.dot(this.direction),c=-Ji.dot(xa),l=Ji.lengthSq(),h=Math.abs(1-o*o),u,f,m,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let b=1/h;u*=b,f*=b,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Il).addScaledVector(xa,f),m}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Dl.subVectors(t,e),ba.subVectors(n,e),Ll.crossVectors(Dl,ba);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let c=a*this.direction.dot(ba.crossVectors(Ji,ba));if(c<0)return null;let l=a*this.direction.dot(Dl.cross(Ji));if(l<0||c+l>o)return null;let h=-a*Ji.dot(Ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,m,x,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,m,x,b,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,m,x,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=x,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,x=a*h,b=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=f-b*l,t[9]=-a*c,t[2]=b-f*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,x=l*h,b=l*u;t[0]=f+b*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=b+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,x=l*h,b=l*u;t[0]=f-b*a,t[4]=-o*u,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=b-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,m=o*u,x=a*h,b=a*u;t[0]=c*h,t[4]=x*l-m,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,m=o*l,x=a*c,b=a*l;t[0]=c*h,t[4]=b-f*u,t[8]=x*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+x,t[10]=f-b*u}else if(e.order==="XZY"){let f=o*c,m=o*l,x=a*c,b=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=o*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=a*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,J0)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Qi.crossVectors(n,Ln),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Qi.crossVectors(n,Ln)),Qi.normalize(),_a.crossVectors(Ln,Qi),s[0]=Qi.x,s[4]=_a.x,s[8]=Ln.x,s[1]=Qi.y,s[5]=_a.y,s[9]=Ln.y,s[2]=Qi.z,s[6]=_a.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],x=n[2],b=n[6],g=n[10],p=n[14],y=n[3],M=n[7],v=n[11],R=n[15],E=s[0],C=s[4],U=s[8],T=s[12],S=s[1],L=s[5],O=s[9],B=s[13],V=s[2],J=s[6],Y=s[10],re=s[14],K=s[3],ue=s[7],xe=s[11],Ce=s[15];return r[0]=o*E+a*S+c*V+l*K,r[4]=o*C+a*L+c*J+l*ue,r[8]=o*U+a*O+c*Y+l*xe,r[12]=o*T+a*B+c*re+l*Ce,r[1]=h*E+u*S+f*V+m*K,r[5]=h*C+u*L+f*J+m*ue,r[9]=h*U+u*O+f*Y+m*xe,r[13]=h*T+u*B+f*re+m*Ce,r[2]=x*E+b*S+g*V+p*K,r[6]=x*C+b*L+g*J+p*ue,r[10]=x*U+b*O+g*Y+p*xe,r[14]=x*T+b*B+g*re+p*Ce,r[3]=y*E+M*S+v*V+R*K,r[7]=y*C+M*L+v*J+R*ue,r[11]=y*U+M*O+v*Y+R*xe,r[15]=y*T+M*B+v*re+R*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],b=e[7],g=e[11],p=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*m-n*c*m)+b*(+t*c*m-t*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+g*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],b=e[13],g=e[14],p=e[15],y=u*g*l-b*f*l+b*c*m-a*g*m-u*c*p+a*f*p,M=x*f*l-h*g*l-x*c*m+o*g*m+h*c*p-o*f*p,v=h*b*l-x*u*l+x*a*m-o*b*m-h*a*p+o*u*p,R=x*u*c-h*b*c-x*a*f+o*b*f+h*a*g-o*u*g,E=t*y+n*M+s*v+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=y*C,e[1]=(b*f*r-u*g*r-b*s*m+n*g*m+u*s*p-n*f*p)*C,e[2]=(a*g*r-b*c*r+b*s*l-n*g*l-a*s*p+n*c*p)*C,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*m-n*c*m)*C,e[4]=M*C,e[5]=(h*g*r-x*f*r+x*s*m-t*g*m-h*s*p+t*f*p)*C,e[6]=(x*c*r-o*g*r-x*s*l+t*g*l+o*s*p-t*c*p)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*m+t*c*m)*C,e[8]=v*C,e[9]=(x*u*r-h*b*r-x*n*m+t*b*m+h*n*p-t*u*p)*C,e[10]=(o*b*r-x*a*r+x*n*l-t*b*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*C,e[12]=R*C,e[13]=(h*b*s-x*u*s+x*n*f-t*b*f-h*n*g+t*u*g)*C,e[14]=(x*a*s-o*b*s-x*n*c+t*b*c+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,x=r*u,b=o*h,g=o*u,p=a*u,y=c*l,M=c*h,v=c*u,R=n.x,E=n.y,C=n.z;return s[0]=(1-(b+p))*R,s[1]=(m+v)*R,s[2]=(x-M)*R,s[3]=0,s[4]=(m-v)*E,s[5]=(1-(f+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(x+M)*C,s[9]=(g-y)*C,s[10]=(1-(f+b))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let l=1/r,h=1/o,u=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ui){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(a===Ui)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Za)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ui){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,m=(n+s)*h,x,b;if(a===Ui)x=(o+r)*u,b=-2*u;else if(a===Za)x=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$s=new D,Yn=new we,K0=new D(0,0,0),J0=new D(1,1,1),Qi=new D,_a=new D,Ln=new D,Sd=new we,wd=new An,mi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Q0=0,Td=new D,er=new An,Ri=new we,va=new D,so=new D,$0=new D,ex=new An,Ad=new D(1,0,0),Ed=new D(0,1,0),Rd=new D(0,0,1),Cd={type:"added"},tx={type:"removed"},tr={type:"childadded",child:null},Ul={type:"childremoved",child:null},Dt=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new mi,n=new An,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new ke}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(so,va,this.up):Ri.lookAt(va,so,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Ri),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new D,Ci=new D,Nl=new D,Pi=new D,nr=new D,ir=new D,Pd=new D,Fl=new D,Ol=new D,Bl=new D,zl=new nt,kl=new nt,Hl=new nt,_n=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Ci.subVectors(n,t),Nl.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Ci),c=jn.dot(Nl),l=Ci.dot(Ci),h=Ci.dot(Nl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return zl.setScalar(0),kl.setScalar(0),Hl.setScalar(0),zl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Ci.subVectors(e,t),jn.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,n),ir.subVectors(r,n),Fl.subVectors(e,n);let c=nr.dot(Fl),l=ir.dot(Fl);if(c<=0&&l<=0)return t.copy(n);Ol.subVectors(e,s);let h=nr.dot(Ol),u=ir.dot(Ol);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(nr,o);Bl.subVectors(e,r);let m=nr.dot(Bl),x=ir.dot(Bl);if(x>=0&&m<=x)return t.copy(r);let b=m*l-c*x;if(b<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(ir,a);let g=h*x-m*u;if(g<=0&&u-h>=0&&m-x>=0)return Pd.subVectors(r,s),a=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Pd,a);let p=1/(g+b+f);return o=b*p,a=f*p,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Cu(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vl(o,r,e+1/3),this.g=Vl(o,r,e),this.b=Vl(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ye.fromWorkingColorSpace(un.copy(this),e),Math.round(Gt(un.r*255,0,255))*65536+Math.round(Gt(un.g*255,0,255))*256+Math.round(Gt(un.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(un.copy(this),t);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Pt){Ye.fromWorkingColorSpace(un.copy(this),e);let t=un.r,n=un.g,s=un.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(ya);let n=go($i.h,ya.h,t),s=go($i.s,ya.s,t),r=go($i.l,ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Te;Te.NAMES=Xp;var nx=0,Fn=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Qn(),this.name="",this.blending=ur,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oh&&(n.blendSrc=this.blendSrc),this.blendDst!==ah&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},kt=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Li=ix();function ix(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function sx(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Gt(i,-65504,65504),Li.floatView[0]=i;let e=Li.uint32View[0],t=e>>23&511;return Li.baseTable[t]+((e&8388607)>>Li.shiftTable[t])}function rx(i){let e=i>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[e]+(i&1023)]+Li.exponentTable[e],Li.floatView[0]}var Pu={toHalfFloat:sx,fromHalfFloat:rx},zt=new D,Ma=new Me,ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}};var Qa=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $a=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $t=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},ox=0,zn=new we,Gl=new Dt,sr=new D,Un=new ot,ro=new ot,Qt=new D,Ft=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?$a:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Un.min,ro.min),Un.expandByPoint(Qt),Qt.addVectors(Un.max,ro.max),Un.expandByPoint(Qt)):(Un.expandByPoint(ro.min),Un.expandByPoint(ro.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(e,l),Qt.add(sr)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new D,c[U]=new D;let l=new D,h=new D,u=new D,f=new Me,m=new Me,x=new Me,b=new D,g=new D;function p(U,T,S){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,S),h.sub(l),u.sub(l),m.sub(f),x.sub(f);let L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(L),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(L),a[U].add(b),a[T].add(b),a[S].add(b),c[U].add(g),c[T].add(g),c[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,T=y.length;U<T;++U){let S=y[U],L=S.start,O=S.count;for(let B=L,V=L+O;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new D,v=new D,R=new D,E=new D;function C(U){R.fromBufferAttribute(s,U),E.copy(R);let T=a[U];M.copy(T),M.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(E,T);let L=v.dot(c[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,L)}for(let U=0,T=y.length;U<T;++U){let S=y[U],L=S.start,O=S.count;for(let B=L,V=L+O;B<V;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,x=0;for(let b=0,g=c.length;b<g;b++){a.isInterleavedBufferAttribute?m=c[b]*a.data.stride+a.offset:m=c[b]*h;for(let p=0;p<h;p++)f[x++]=l[m++]}return new ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Id=new we,ys=new ei,Sa=new Nt,Dd=new D,wa=new D,Ta=new D,Aa=new D,Wl=new D,Ea=new D,Ld=new D,Ra=new D,Qe=class extends Dt{constructor(e=new Ft,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Wl.fromBufferAttribute(u,e),o?Ea.addScaledVector(Wl,h):Ea.addScaledVector(Wl.sub(t),h))}t.add(Ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Sa.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Sa,Dd)===null||ys.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Id.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Id),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=f.length;x<b;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,m.start),M=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=y,R=M;v<R;v+=3){let E=a.getX(v),C=a.getX(v+1),U=a.getX(v+2);s=Ca(this,p,e,n,l,h,u,E,C,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let g=x,p=b;g<p;g+=3){let y=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=Ca(this,o,e,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,b=f.length;x<b;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let v=y,R=M;v<R;v+=3){let E=v,C=v+1,U=v+2;s=Ca(this,p,e,n,l,h,u,E,C,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let g=x,p=b;g<p;g+=3){let y=g,M=g+1,v=g+2;s=Ca(this,o,e,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ax(i,e,t,n,s,r,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Nn,a),c===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ra);return l<t.near||l>t.far?null:{distance:l,point:Ra.clone(),object:i}}function Ca(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,wa),i.getVertexPosition(c,Ta),i.getVertexPosition(l,Aa);let h=ax(i,e,t,n,wa,Ta,Aa,Ld);if(h){let u=new D;_n.getBarycoord(Ld,wa,Ta,Aa,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,u,new Me)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,c,l,u,new Me)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};_n.getNormal(wa,Ta,Aa,f.normal),h.face=f,h.barycoord=u}return h}var ti=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function x(b,g,p,y,M,v,R,E,C,U,T){let S=v/C,L=R/U,O=v/2,B=R/2,V=E/2,J=C+1,Y=U+1,re=0,K=0,ue=new D;for(let xe=0;xe<Y;xe++){let Ce=xe*L-B;for(let Oe=0;Oe<J;Oe++){let je=Oe*S-O;ue[b]=je*y,ue[g]=Ce*M,ue[p]=V,l.push(ue.x,ue.y,ue.z),ue[b]=0,ue[g]=0,ue[p]=E>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Oe/C),u.push(1-xe/U),re+=1}}for(let xe=0;xe<U;xe++)for(let Ce=0;Ce<C;Ce++){let Oe=f+Ce+J*xe,je=f+Ce+J*(xe+1),ee=f+(Ce+1)+J*(xe+1),le=f+(Ce+1)+J*xe;c.push(Oe,je,le),c.push(je,ee,le),K+=6}a.addGroup(m,K,T),m+=K,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let s in n)e[s]=n[s]}return e}function cx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var _i={clone:Sr,merge:bn},lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ec=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new D,Ud=new Me,Nd=new Me,Ut=class extends ec{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Nd),t.subVectors(Nd,Ud)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,or=1,Xh=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Ut(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Ut(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Ut(rr,or,e,t);a.layers=this.layers,this.add(a);let c=new Ut(rr,or,e,t);c.layers=this.layers,this.add(c);let l=new Ut(rr,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},tc=class extends en{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qh=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new tc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:di});r.uniforms.tEquirect.value=t;let o=new Qe(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=It),new Xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Xl=new D,ux=new D,fx=new ke,sn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xl.subVectors(n,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fx.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new Nt,Pa=new D,wr=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],x=s[9],b=s[10],g=s[11],p=s[12],y=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,g-m,v-p).normalize(),n[1].setComponents(c+r,f+l,g+m,v+p).normalize(),n[2].setComponents(c+o,f+h,g+x,v+y).normalize(),n[3].setComponents(c-o,f-h,g-x,v-y).normalize(),n[4].setComponents(c-a,f-u,g-b,v-M).normalize(),t===Ui)n[5].setComponents(c+a,f+u,g+b,v+M).normalize();else if(t===Za)n[5].setComponents(a,u,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<u.length;m++){let x=u[f],b=u[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,u[f]=b)}u.length=f+1;for(let m=0,x=u.length;m<x;m++){let b=u[m];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var gi=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,m=[],x=[],b=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let M=0;M<l;M++){let v=M*u-r;x.push(v,-y,0),b.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let M=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),E=y+1+l*p;m.push(M,v,E),m.push(v,R,E)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rb=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,db=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sb=`#if defined( USE_POINTS_UV )
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
#endif`,wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,M_=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,R_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,C_=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,P_=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,I_=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,D_=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,L_=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,U_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N_=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,F_=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,O_=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,B_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,z_=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,k_=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,H_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,V_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,q_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,We={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:bx,alphatest_pars_fragment:_x,aomap_fragment:vx,aomap_pars_fragment:yx,batching_pars_vertex:Mx,batching_vertex:Sx,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Ex,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Lx,color_pars_fragment:Ux,color_pars_vertex:Nx,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:kx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:jx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:ob,envmap_vertex:Kx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:$x,fog_pars_fragment:eb,gradientmap_pars_fragment:tb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:sb,lights_pars_begin:rb,lights_toon_fragment:ab,lights_toon_pars_fragment:cb,lights_phong_fragment:lb,lights_phong_pars_fragment:hb,lights_physical_fragment:ub,lights_physical_pars_fragment:fb,lights_fragment_begin:db,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:_b,map_fragment:vb,map_pars_fragment:yb,map_particle_fragment:Mb,map_particle_pars_fragment:Sb,metalnessmap_fragment:wb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Ab,morphcolor_vertex:Eb,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Pb,normal_fragment_begin:Ib,normal_fragment_maps:Db,normal_pars_fragment:Lb,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Fb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:zb,iridescence_pars_fragment:kb,opaque_fragment:Hb,packing:Vb,premultiplied_alpha_fragment:Gb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Jb,shadowmask_pars_fragment:Qb,skinbase_vertex:$b,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:c_,uv_pars_fragment:l_,uv_pars_vertex:h_,uv_vertex:u_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:x_,cube_frag:b_,depth_vert:__,depth_frag:v_,distanceRGBA_vert:y_,distanceRGBA_frag:M_,equirect_vert:S_,equirect_frag:w_,linedashed_vert:T_,linedashed_frag:A_,meshbasic_vert:E_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:P_,meshmatcap_vert:I_,meshmatcap_frag:D_,meshnormal_vert:L_,meshnormal_frag:U_,meshphong_vert:N_,meshphong_frag:F_,meshphysical_vert:O_,meshphysical_frag:B_,meshtoon_vert:z_,meshtoon_frag:k_,points_vert:H_,points_frag:V_,shadow_vert:G_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},be={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ui={basic:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:bn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:bn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:bn([be.points,be.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:bn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:bn([be.common,be.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:bn([be.sprite,be.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:bn([be.common,be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:bn([be.lights,be.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:bn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Ia={r:0,b:0,g:0},Ss=new mi,Y_=new we;function j_(i,e,t,n,s,r,o){let a=new Te(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function x(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function b(y){let M=!1,v=x(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){let v=x(M);v&&(v.isCubeTexture||v.mapping===Tc)?(h===void 0&&(h=new Qe(new ti(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Sr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(M.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(Ss)),h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==dt,(u!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qe(new gi(2,2),new xt({name:"BackgroundMaterial",uniforms:Sr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(Ia,qp(i)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:b,addToRenderList:g}}function Z_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,L,O,B,V){let J=!1,Y=u(B,O,L);r!==Y&&(r=Y,l(r.object)),J=m(S,B,O,V),J&&x(S,B,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,L,O,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,O){let B=O.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let J=V[L.id];J===void 0&&(J={},V[L.id]=J);let Y=J[B];return Y===void 0&&(Y=f(c()),J[B]=Y),Y}function f(S){let L=[],O=[],B=[];for(let V=0;V<t;V++)L[V]=0,O[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,L,O,B){let V=r.attributes,J=L.attributes,Y=0,re=O.getAttributes();for(let K in re)if(re[K].location>=0){let xe=V[K],Ce=J[K];if(Ce===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Ce=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Ce=S.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function x(S,L,O,B){let V={},J=L.attributes,Y=0,re=O.getAttributes();for(let K in re)if(re[K].location>=0){let xe=J[K];xe===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));let Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),V[K]=Ce,Y++}r.attributes=V,r.attributesNum=Y,r.index=B}function b(){let S=r.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){let O=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;O[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),V[S]!==L&&(i.vertexAttribDivisor(S,L),V[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==S[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function M(S,L,O,B,V,J,Y){Y===!0?i.vertexAttribIPointer(S,L,O,V,J):i.vertexAttribPointer(S,L,O,B,V,J)}function v(S,L,O,B){b();let V=B.attributes,J=O.getAttributes(),Y=L.defaultAttributeValues;for(let re in J){let K=J[re];if(K.location>=0){let ue=V[re];if(ue===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){let xe=ue.normalized,Ce=ue.itemSize,Oe=e.get(ue);if(Oe===void 0)continue;let je=Oe.buffer,ee=Oe.type,le=Oe.bytesPerElement,de=ee===i.INT||ee===i.UNSIGNED_INT||ue.gpuType===wu;if(ue.isInterleavedBufferAttribute){let pe=ue.data,De=pe.stride,Be=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<K.locationSize;Xe++)p(K.location+Xe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Xe=0;Xe<K.locationSize;Xe++)g(K.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Xe=0;Xe<K.locationSize;Xe++)M(K.location+Xe,Ce/K.locationSize,ee,xe,De*le,(Be+Ce/K.locationSize*Xe)*le,de)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)p(K.location+pe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<K.locationSize;pe++)g(K.location+pe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let pe=0;pe<K.locationSize;pe++)M(K.location+pe,Ce/K.locationSize,ee,xe,Ce*le,Ce/K.locationSize*pe*le,de)}}else if(Y!==void 0){let xe=Y[re];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(K.location,xe);break;case 3:i.vertexAttrib3fv(K.location,xe);break;case 4:i.vertexAttrib4fv(K.location,xe);break;default:i.vertexAttrib1fv(K.location,xe)}}}}y()}function R(){U();for(let S in n){let L=n[S];for(let O in L){let B=L[O];for(let V in B)h(B[V].object),delete B[V];delete L[O]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let O in L){let B=L[O];for(let V in B)h(B[V].object),delete B[V];delete L[O]}delete n[S.id]}function C(S){for(let L in n){let O=n[L];if(O[S.id]===void 0)continue;let B=O[S.id];for(let V in B)h(B[V].object),delete B[V];delete O[S.id]}}function U(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function K_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];t.update(m,n,1)}function c(l,h,u,f){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let b=0;b<u;b++)x+=h[b]*f[b];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function J_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let U=C===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==rn&&!U)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function Q_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new sn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let x=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,M=y*4,v=p.clippingState||null;c.value=v,v=h(x,f,M,m);for(let R=0;R!==M;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,x){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,x!==!0||g===null){let p=m+b*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=m;M!==b;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function $_(i){let e=new WeakMap;function t(o,a){return a===bo?o.mapping=gr:a===mh&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bo||a===mh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rs=class extends ec{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,Fd=[.125,.215,.35,.446,.526,.582],Cs=20,ql=new rs,Od=new Te,Yl=null,jl=0,Zl=0,Kl=!1,Es=(1+Math.sqrt(5))/2,ar=1/Es,Bd=[new D(-Es,ar,0),new D(Es,ar,0),new D(-ar,0,Es),new D(ar,0,Es),new D(0,Es,-ar),new D(0,Es,ar),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,jl,Zl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ht,format:pn,colorSpace:jt,depthBuffer:!1},s=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(r)),this._blurMaterial=tv(r,e,t)}return s}_compileMaterial(e){let t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,s){let a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Od),h.toneMapping=ns,h.autoClear=!1;let m=new kt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),x=new Qe(new ti,m),b=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,b=!0):(m.color.copy(Od),b=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;Da(s,y*M,p>2?M:0,M,M),h.setRenderTarget(s),b&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gr||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bd[(s-r-1)%Bd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qe(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),b=r/x,g=isFinite(r)?1+Math.floor(h*b):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let p=[],y=0;for(let C=0;C<Cs;++C){let U=C/b,T=Math.exp(-U*U/2);p.push(T),C===0?y+=T:C<g&&(y+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let v=this._sizeLods[s],R=3*v*(s>M-hr?s-M+hr:0),E=4*(this._cubeSize-v);Da(t,R,E,3*v,2*v),c.setRenderTarget(t),c.render(u,ql)}};function ev(i){let e=[],t=[],n=[],s=i,r=i-hr+1+Fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hr?c=Fd[o-i+hr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,b=3,g=2,p=1,y=new Float32Array(b*x*m),M=new Float32Array(g*x*m),v=new Float32Array(p*x*m);for(let E=0;E<m;E++){let C=E%3*2/3-1,U=E>2?0:-1,T=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(T,b*x*E),M.set(f,g*x*E);let S=[E,E,E,E,E,E];v.set(S,p*x*E)}let R=new Ft;R.setAttribute("position",new ut(y,b)),R.setAttribute("uv",new ut(M,g)),R.setAttribute("faceIndex",new ut(v,p)),e.push(R),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=Tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tv(i,e,t){let n=new Float32Array(Cs),s=new D(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function kd(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Hd(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function nv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===bo||c===mh,h=c===gr||c===xr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Tr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Tr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sv(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let b=f.morphAttributes[x];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let x in m){let b=m[x];for(let g=0,p=b.length;g<p;g++)e.update(b[g],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,x=u.attributes.position,b=0;if(m!==null){let y=m.array;b=m.version;for(let M=0,v=y.length;M<v;M+=3){let R=y[M+0],E=y[M+1],C=y[M+2];f.push(R,E,E,C,C,R)}}else if(x!==void 0){let y=x.array;b=x.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let R=M+0,E=M+1,C=M+2;f.push(R,E,E,C,C,R)}}else return;let g=new(Wp(f)?$a:Qa)(f,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function l(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,f*o,x),t.update(m,n,x))}function h(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,x);let g=0;for(let p=0;p<x;p++)g+=m[p];t.update(g,n,1)}function u(f,m,x,b){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,m[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,b,0,x);let p=0;for(let y=0;y<x;y++)p+=m[y]*b[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function av(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;m===!0&&(M=1),x===!0&&(M=2),b===!0&&(M=3);let v=a.attributes.position.count*M,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*R*4*u),C=new Ja(E,v,R,u);C.type=rn,C.needsUpdate=!0;let U=M*4;for(let S=0;S<u;S++){let L=g[S],O=p[S],B=y[S],V=v*R*4*S;for(let J=0;J<L.count;J++){let Y=J*U;m===!0&&(s.fromBufferAttribute(L,J),E[V+Y+0]=s.x,E[V+Y+1]=s.y,E[V+Y+2]=s.z,E[V+Y+3]=0),x===!0&&(s.fromBufferAttribute(O,J),E[V+Y+4]=s.x,E[V+Y+5]=s.y,E[V+Y+6]=s.z,E[V+Y+7]=0),b===!0&&(s.fromBufferAttribute(B,J),E[V+Y+8]=s.x,E[V+Y+9]=s.y,E[V+Y+10]=s.z,E[V+Y+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Me(v,R)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let b=0;b<l.length;b++)m+=l[b];let x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var nc=class extends en{constructor(e,t,n,s,r,o,a,c,l,h=fr){if(h!==fr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fr&&(n=ss),n===void 0&&h===_r&&(n=br),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jp=new en,Vd=new nc(1,1),Zp=new Ja,Kp=new Mo,Jp=new tc,Gd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cc(i,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Yd.set(n),i.uniformMatrix2fv(this.addr,!1,Yd),Yt(t,n)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Yt(t,n)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Xd.set(n),i.uniformMatrix4fv(this.addr,!1,Xd),Yt(t,n)}}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vd.compareFunction=Gp,r=Vd):r=jp,t.setTexture2D(e||r,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kp,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jp,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zp,s)}function Rv(i){switch(i){case 5126:return lv;case 35664:return hv;case 35665:return uv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return bv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Ev}}function Cv(i,e){i.uniform1fv(this.addr,e)}function Pv(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Iv(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dv(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Lv(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nv(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fv(i,e){i.uniform1iv(this.addr,e)}function Ov(i,e){i.uniform2iv(this.addr,e)}function Bv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function kv(i,e){i.uniform1uiv(this.addr,e)}function Hv(i,e){i.uniform2uiv(this.addr,e)}function Vv(i,e){i.uniform3uiv(this.addr,e)}function Gv(i,e){i.uniform4uiv(this.addr,e)}function Wv(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jp,r[o])}function Xv(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kp,r[o])}function qv(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jp,r[o])}function Yv(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zp,r[o])}function jv(i){switch(i){case 5126:return Cv;case 35664:return Pv;case 35665:return Iv;case 35666:return Dv;case 35674:return Lv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}var Yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}},jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function jd(i,e){i.seq.push(e),i.map[e.id]=e}function Zv(i,e,t){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),o=Jl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jd(t,l===void 0?new Yh(a,i,e):new jh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Zh(a),jd(t,u)),t=u}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Zv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Zd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Kv=37297,Jv=0;function Qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Kd=new ke;function $v(i){Ye._getMatrix(Kd,Ye.workingColorSpace,i);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Rc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qv(i.getShaderSource(e),o)}else return s}function ey(i,e){let t=$v(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ty(i,e){let t;switch(e){case bu:t="Linear";break;case _u:t="Reinhard";break;case vu:t="Cineon";break;case Do:t="ACESFilmic";break;case yu:t="AgX";break;case Mu:t="Neutral";break;case p0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var La=new D;function ny(){Ye.getLuminanceCoefficients(La);let i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function sy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ry(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fo(i){return i!==""}function Qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(oy,cy)}var ay=new Map;function cy(i,e){let t=We[e];if(t===void 0){let n=ay.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}var ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(ly,hy)}function hy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case xr:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xr&&(e="ENVMAP_MODE_REFRACTION"),e}function py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pp:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case d0:e="ENVMAP_BLENDING_ADD";break}return e}function my(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=uy(t),l=fy(t),h=dy(t),u=py(t),f=my(t),m=iy(t),x=sy(r),b=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(g=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?We.tonemapping_pars_fragment:"",t.toneMapping!==ns?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Kh(o),o=Qd(o,t),o=$d(o,t),a=Kh(a),a=Qd(a,t),a=$d(a,t),o=ep(o),a=ep(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+o,v=y+p+a,R=Zd(s,s.VERTEX_SHADER,M),E=Zd(s,s.FRAGMENT_SHADER,v);s.attachShader(b,R),s.attachShader(b,E),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(b).trim(),B=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(E).trim(),J=!0,Y=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,E);else{let re=Jd(s,R,"vertex"),K=Jd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+re+`
`+K)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||V==="")&&(Y=!1);Y&&(L.diagnostics={runnable:J,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(R),s.deleteShader(E),U=new pr(s,b),T=ry(s,b)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(b,Kv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=E,this}var xy=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qh(e),t.set(e,n)),n}},Qh=class{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}};function by(i,e,t,n,s,r,o){let a=new So,c=new Jh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,S,L,O,B){let V=O.fog,J=B.geometry,Y=T.isMeshStandardMaterial?O.environment:null,re=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),K=re&&re.mapping===Tc?re.image.height:null,ue=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ce=xe!==void 0?xe.length:0,Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let je,ee,le,de;if(ue){let ht=ui[ue];je=ht.vertexShader,ee=ht.fragmentShader}else je=T.vertexShader,ee=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),de=c.getFragmentShaderID(T);let pe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Xe=B.isBatchedMesh===!0,pt=!!T.map,Ze=!!T.matcap,_t=!!re,k=!!T.aoMap,gn=!!T.lightMap,et=!!T.bumpMap,tt=!!T.normalMap,Fe=!!T.displacementMap,vt=!!T.emissiveMap,Ne=!!T.metalnessMap,N=!!T.roughnessMap,A=T.anisotropy>0,W=T.clearcoat>0,ne=T.dispersion>0,se=T.iridescence>0,te=T.sheen>0,Pe=T.transmission>0,_e=A&&!!T.anisotropyMap,Se=W&&!!T.clearcoatMap,st=W&&!!T.clearcoatNormalMap,fe=W&&!!T.clearcoatRoughnessMap,Ee=se&&!!T.iridescenceMap,Re=se&&!!T.iridescenceThicknessMap,Ie=te&&!!T.sheenColorMap,Ae=te&&!!T.sheenRoughnessMap,He=!!T.specularMap,Le=!!T.specularColorMap,Ve=!!T.specularIntensityMap,z=Pe&&!!T.transmissionMap,Z=Pe&&!!T.thicknessMap,Q=!!T.gradientMap,ie=!!T.alphaMap,ye=T.alphaTest>0,ve=!!T.alphaHash,Ge=!!T.extensions,Et=ns;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Kt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:je,fragmentShader:ee,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Xe,batchingColor:Xe&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:jt,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:Ze,envMap:_t,envMapMode:_t&&re.mapping,envMapCubeUVHeight:K,aoMap:k,lightMap:gn,bumpMap:et,normalMap:tt,displacementMap:f&&Fe,emissiveMap:vt,normalMapObjectSpace:tt&&T.normalMapType===_0,normalMapTangentSpace:tt&&T.normalMapType===Vp,metalnessMap:Ne,roughnessMap:N,anisotropy:A,anisotropyMap:_e,clearcoat:W,clearcoatMap:Se,clearcoatNormalMap:st,clearcoatRoughnessMap:fe,dispersion:ne,iridescence:se,iridescenceMap:Ee,iridescenceThicknessMap:Re,sheen:te,sheenColorMap:Ie,sheenRoughnessMap:Ae,specularMap:He,specularColorMap:Le,specularIntensityMap:Ve,transmission:Pe,transmissionMap:z,thicknessMap:Z,gradientMap:Q,opaque:T.transparent===!1&&T.blending===ur&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:ve,combine:T.combine,mapUv:pt&&b(T.map.channel),aoMapUv:k&&b(T.aoMap.channel),lightMapUv:gn&&b(T.lightMap.channel),bumpMapUv:et&&b(T.bumpMap.channel),normalMapUv:tt&&b(T.normalMap.channel),displacementMapUv:Fe&&b(T.displacementMap.channel),emissiveMapUv:vt&&b(T.emissiveMap.channel),metalnessMapUv:Ne&&b(T.metalnessMap.channel),roughnessMapUv:N&&b(T.roughnessMap.channel),anisotropyMapUv:_e&&b(T.anisotropyMap.channel),clearcoatMapUv:Se&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&b(T.sheenRoughnessMap.channel),specularMapUv:He&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:Ve&&b(T.specularIntensityMap.channel),transmissionMapUv:z&&b(T.transmissionMap.channel),thicknessMapUv:Z&&b(T.thicknessMap.channel),alphaMapUv:ie&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(tt||A),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(pt||ie),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===dt,decodeVideoTextureEmissive:vt&&T.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(T.emissiveMap.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===Wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(y(S,T),M(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let S=x[T.type],L;if(S){let O=ui[S];L=_i.clone(O.uniforms)}else L=T.uniforms;return L}function R(T,S){let L;for(let O=0,B=h.length;O<B;O++){let V=h[O];if(V.cacheKey===S){L=V,++L.usedTimes;break}}return L===void 0&&(L=new gy(i,S,T,r),h.push(L)),L}function E(T){if(--T.usedTimes===0){let S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:U}}function _y(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ip(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,x,b,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:b,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function a(u,f,m,x,b,g){let p=o(u,f,m,x,b,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(u,f,m,x,b,g){let p=o(u,f,m,x,b,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||vy),n.length>1&&n.sort(f||np),s.length>1&&s.sort(f||np)}function h(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function yy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ip,i.set(n,[o])):s>=r.length?(o=new ip,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function My(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Sy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wy=0;function Ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ay(i){let e=new My,t=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new we,o=new we;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,x=0,b=0,g=0,p=0,y=0,M=0,v=0,R=0,E=0,C=0;l.sort(Ty);for(let T=0,S=l.length;T<S;T++){let L=l[T],O=L.color,B=L.intensity,V=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],B);C++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let re=L.shadow,K=t.get(L);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=Y,m++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(B),Y.distance=V,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[b]=Y;let re=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,re.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[b]=re.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=J,v++}b++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(O).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=Y,g++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let re=L.shadow,K=t.get(L);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,K.shadowCameraNear=re.camera.near,K.shadowCameraFar=re.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=L.shadow.matrix,M++}n.point[x]=Y,x++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(B),Y.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==m||U.pointLength!==x||U.spotLength!==b||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==y||U.numPointShadows!==M||U.numSpotShadows!==v||U.numSpotMaps!==R||U.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,U.directionalLength=m,U.pointLength=x,U.spotLength=b,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=y,U.numPointShadows=M,U.numSpotShadows=v,U.numSpotMaps=R,U.numLightProbes=C,n.version=wy++)}function c(l,h){let u=0,f=0,m=0,x=0,b=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let M=l[p];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),b++}}}return{setup:a,setupView:c,state:n}}function sp(i){let e=new Ay(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ey(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sp(i),e.set(s,[a])):r>=o.length?(a=new sp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $h=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eu=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`;function Py(i,e,t){let n=new wr,s=new Me,r=new Me,o=new nt,a=new $h({depthPacking:b0}),c=new eu,l={},h=t.maxTextureSize,u={[Nn]:Wt,[Wt]:Nn,[dn]:dn},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ft;x.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Qe(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cp;let p=this.type;this.render=function(E,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let T=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==Di&&this.type===Di,V=p===Di&&this.type!==Di;for(let J=0,Y=E.length;J<Y;J++){let re=E[J],K=re.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ue=K.getFrameExtents();if(s.multiply(ue),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,K.mapSize.y=r.y)),K.map===null||B===!0||V===!0){let Ce=this.type!==Di?{minFilter:mn,magFilter:mn}:{};K.map!==null&&K.map.dispose(),K.map=new Xt(s.x,s.y,Ce),K.map.texture.name=re.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let xe=K.getViewportCount();for(let Ce=0;Ce<xe;Ce++){let Oe=K.getViewport(Ce);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),O.viewport(o),K.updateMatrices(re,Ce),n=K.getFrustum(),v(C,U,K.camera,re,this.type)}K.isPointLightShadow!==!0&&this.type===Di&&y(K,U),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,L)};function y(E,C){let U=e.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,U,f,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,U,m,b,null)}function M(E,C,U,T){let S=null,L=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=S.uuid,B=C.uuid,V=l[O];V===void 0&&(V={},l[O]=V);let J=V[B];J===void 0&&(J=S.clone(),V[B]=J,C.addEventListener("dispose",R)),S=J}if(S.visible=C.visible,S.wireframe=C.wireframe,T===Di?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=i.properties.get(S);O.light=U}return S}function v(E,C,U,T,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let B=e.update(E),V=E.material;if(Array.isArray(V)){let J=B.groups;for(let Y=0,re=J.length;Y<re;Y++){let K=J[Y],ue=V[K.materialIndex];if(ue&&ue.visible){let xe=M(E,ue,T,S);E.onBeforeShadow(i,E,C,U,B,xe,K),i.renderBufferDirect(U,null,B,xe,E,K),E.onAfterShadow(i,E,C,U,B,xe,K)}}}else if(V.visible){let J=M(E,V,T,S);E.onBeforeShadow(i,E,C,U,B,J,null),i.renderBufferDirect(U,null,B,J,E,null),E.onAfterShadow(i,E,C,U,B,J,null)}}let O=E.children;for(let B=0,V=O.length;B<V;B++)v(O[B],C,U,T,S)}function R(E){E.target.removeEventListener("dispose",R);for(let U in l){let T=l[U],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var Iy={[ch]:lh,[hh]:dh,[uh]:ph,[mr]:fh,[lh]:ch,[dh]:hh,[ph]:uh,[fh]:mr};function Dy(i,e){function t(){let z=!1,Z=new nt,Q=null,ie=new nt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!z&&(i.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ve,Ge,Et,Kt){Kt===!0&&(ye*=Et,ve*=Et,Ge*=Et),Z.set(ye,ve,Ge,Et),ie.equals(Z)===!1&&(i.clearColor(ye,ve,Ge,Et),ie.copy(Z))},reset:function(){z=!1,Q=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,Z=!1,Q=null,ie=null,ye=null;return{setReversed:function(ve){if(Z!==ve){let Ge=e.get("EXT_clip_control");Z?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let Et=ye;ye=null,this.setClear(Et)}Z=ve},getReversed:function(){return Z},setTest:function(ve){ve?pe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!z&&(i.depthMask(ve),Q=ve)},setFunc:function(ve){if(Z&&(ve=Iy[ve]),ie!==ve){switch(ve){case ch:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case hh:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case uh:i.depthFunc(i.EQUAL);break;case fh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=ve}},setLocked:function(ve){z=ve},setClear:function(ve){ye!==ve&&(Z&&(ve=1-ve),i.clearDepth(ve),ye=ve)},reset:function(){z=!1,Q=null,ie=null,ye=null,Z=!1}}}function s(){let z=!1,Z=null,Q=null,ie=null,ye=null,ve=null,Ge=null,Et=null,Kt=null;return{setTest:function(ht){z||(ht?pe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ht){Z!==ht&&!z&&(i.stencilMask(ht),Z=ht)},setFunc:function(ht,In,Xn){(Q!==ht||ie!==In||ye!==Xn)&&(i.stencilFunc(ht,In,Xn),Q=ht,ie=In,ye=Xn)},setOp:function(ht,In,Xn){(ve!==ht||Ge!==In||Et!==Xn)&&(i.stencilOp(ht,In,Xn),ve=ht,Ge=In,Et=Xn)},setLocked:function(ht){z=ht},setClear:function(ht){Kt!==ht&&(i.clearStencil(ht),Kt=ht)},reset:function(){z=!1,Z=null,Q=null,ie=null,ye=null,ve=null,Ge=null,Et=null,Kt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,m=[],x=null,b=!1,g=null,p=null,y=null,M=null,v=null,R=null,E=null,C=new Te(0,0,0),U=0,T=!1,S=null,L=null,O=null,B=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,re=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=re>=2);let ue=null,xe={},Ce=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new nt().fromArray(Ce),ee=new nt().fromArray(Oe);function le(z,Z,Q,ie){let ye=new Uint8Array(4),ve=i.createTexture();i.bindTexture(z,ve),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Q;Ge++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Z+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ve}let de={};de[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(mr),et(!1),tt(od),pe(i.CULL_FACE),k(di);function pe(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function De(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Be(z,Z){return u[z]!==Z?(i.bindFramebuffer(z,Z),u[z]=Z,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Xe(z,Z){let Q=m,ie=!1;if(z){Q=f.get(Z),Q===void 0&&(Q=[],f.set(Z,Q));let ye=z.textures;if(Q.length!==ye.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ge=ye.length;ve<Ge;ve++)Q[ve]=i.COLOR_ATTACHMENT0+ve;Q.length=ye.length,ie=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Q)}function pt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let Ze={[Rs]:i.FUNC_ADD,[Zg]:i.FUNC_SUBTRACT,[Kg]:i.FUNC_REVERSE_SUBTRACT};Ze[Jg]=i.MIN,Ze[Qg]=i.MAX;let _t={[$g]:i.ZERO,[e0]:i.ONE,[t0]:i.SRC_COLOR,[oh]:i.SRC_ALPHA,[a0]:i.SRC_ALPHA_SATURATE,[r0]:i.DST_COLOR,[i0]:i.DST_ALPHA,[n0]:i.ONE_MINUS_SRC_COLOR,[ah]:i.ONE_MINUS_SRC_ALPHA,[o0]:i.ONE_MINUS_DST_COLOR,[s0]:i.ONE_MINUS_DST_ALPHA,[c0]:i.CONSTANT_COLOR,[l0]:i.ONE_MINUS_CONSTANT_COLOR,[h0]:i.CONSTANT_ALPHA,[u0]:i.ONE_MINUS_CONSTANT_ALPHA};function k(z,Z,Q,ie,ye,ve,Ge,Et,Kt,ht){if(z===di){b===!0&&(De(i.BLEND),b=!1);return}if(b===!1&&(pe(i.BLEND),b=!0),z!==jg){if(z!==g||ht!==T){if((p!==Rs||v!==Rs)&&(i.blendEquation(i.FUNC_ADD),p=Rs,v=Rs),ht)switch(z){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,M=null,R=null,E=null,C.set(0,0,0),U=0,g=z,T=ht}return}ye=ye||Z,ve=ve||Q,Ge=Ge||ie,(Z!==p||ye!==v)&&(i.blendEquationSeparate(Ze[Z],Ze[ye]),p=Z,v=ye),(Q!==y||ie!==M||ve!==R||Ge!==E)&&(i.blendFuncSeparate(_t[Q],_t[ie],_t[ve],_t[Ge]),y=Q,M=ie,R=ve,E=Ge),(Et.equals(C)===!1||Kt!==U)&&(i.blendColor(Et.r,Et.g,Et.b,Kt),C.copy(Et),U=Kt),g=z,T=!1}function gn(z,Z){z.side===dn?De(i.CULL_FACE):pe(i.CULL_FACE);let Q=z.side===Wt;Z&&(Q=!Q),et(Q),z.blending===ur&&z.transparent===!1?k(di):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let ie=z.stencilWrite;a.setTest(ie),ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function tt(z){z!==Xg?(pe(i.CULL_FACE),z!==L&&(z===od?i.cullFace(i.BACK):z===qg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),L=z}function Fe(z){z!==O&&(Y&&i.lineWidth(z),O=z)}function vt(z,Z,Q){z?(pe(i.POLYGON_OFFSET_FILL),(B!==Z||V!==Q)&&(i.polygonOffset(Z,Q),B=Z,V=Q)):De(i.POLYGON_OFFSET_FILL)}function Ne(z){z?pe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function N(z){z===void 0&&(z=i.TEXTURE0+J-1),ue!==z&&(i.activeTexture(z),ue=z)}function A(z,Z,Q){Q===void 0&&(ue===null?Q=i.TEXTURE0+J-1:Q=ue);let ie=xe[Q];ie===void 0&&(ie={type:void 0,texture:void 0},xe[Q]=ie),(ie.type!==z||ie.texture!==Z)&&(ue!==Q&&(i.activeTexture(Q),ue=Q),i.bindTexture(z,Z||de[z]),ie.type=z,ie.texture=Z)}function W(){let z=xe[ue];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){je.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),je.copy(z))}function Ae(z){ee.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ee.copy(z))}function He(z,Z){let Q=l.get(Z);Q===void 0&&(Q=new WeakMap,l.set(Z,Q));let ie=Q.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(Z,z.name),Q.set(z,ie))}function Le(z,Z){let ie=l.get(Z).get(z);c.get(Z)!==ie&&(i.uniformBlockBinding(Z,ie,z.__bindingPointIndex),c.set(Z,ie))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,xe={},u={},f=new WeakMap,m=[],x=null,b=!1,g=null,p=null,y=null,M=null,v=null,R=null,E=null,C=new Te(0,0,0),U=0,T=!1,S=null,L=null,O=null,B=null,V=null,je.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:De,bindFramebuffer:Be,drawBuffers:Xe,useProgram:pt,setBlending:k,setMaterial:gn,setFlipSided:et,setCullFace:tt,setLineWidth:Fe,setPolygonOffset:vt,setScissorTest:Ne,activeTexture:N,bindTexture:A,unbindTexture:W,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Ee,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:st,texStorage3D:fe,texSubImage2D:te,texSubImage3D:Pe,compressedTexSubImage2D:_e,compressedTexSubImage3D:Se,scissor:Ie,viewport:Ae,reset:Ve}}function rp(i,e,t,n){let s=Ly(n);switch(t){case Np:return i*e;case Op:return i*e;case Bp:return i*e*2;case Ns:return i*e/s.components*s.byteLength;case Ac:return i*e/s.components*s.byteLength;case zp:return i*e*2/s.components*s.byteLength;case Eu:return i*e*2/s.components*s.byteLength;case Fp:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Ru:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:case _h:return Math.max(i,16)*Math.max(e,8)/4;case gh:case bh:return Math.max(i,8)*Math.max(e,8)/2;case vh:case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case Oh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kp:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kh:case Hh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ly(i){switch(i){case $n:case Dp:return{byteLength:1,components:1};case vo:case Lp:case Ht:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case ss:case wu:case rn:return{byteLength:4,components:1};case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,A){return m?new OffscreenCanvas(N,A):yo("canvas")}function b(N,A,W){let ne=1,se=Ne(N);if((se.width>W||se.height>W)&&(ne=W/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let te=Math.floor(ne*se.width),Pe=Math.floor(ne*se.height);u===void 0&&(u=x(te,Pe));let _e=A?x(te,Pe):u;return _e.width=te,_e.height=Pe,_e.getContext("2d").drawImage(N,0,0,te,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Pe+")."),_e}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,A,W,ne,se=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let te=A;if(A===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8)),A===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),A===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8)),A===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),A===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),A===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),A===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),A===i.RGBA){let Pe=se?Rc:Ye.getTransfer(ne);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=Pe===dt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(N,A){let W;return N?A===null||A===ss||A===br?W=i.DEPTH24_STENCIL8:A===rn?W=i.DEPTH32F_STENCIL8:A===vo&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ss||A===br?W=i.DEPTH_COMPONENT24:A===rn?W=i.DEPTH_COMPONENT32F:A===vo&&(W=i.DEPTH_COMPONENT16),W}function R(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==mn&&N.minFilter!==It?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function E(N){let A=N.target;A.removeEventListener("dispose",E),U(A),A.isVideoTexture&&h.delete(A)}function C(N){let A=N.target;A.removeEventListener("dispose",C),S(A)}function U(N){let A=n.get(N);if(A.__webglInit===void 0)return;let W=N.source,ne=f.get(W);if(ne){let se=ne[A.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(N),Object.keys(ne).length===0&&f.delete(W)}n.remove(N)}function T(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let W=N.source,ne=f.get(W);delete ne[A.__cacheKey],o.memory.textures--}function S(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let se=0;se<A.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(A.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)i.deleteFramebuffer(A.__webglFramebuffer[ne]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=N.textures;for(let ne=0,se=W.length;ne<se;ne++){let te=n.get(W[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(W[ne])}n.remove(N)}let L=0;function O(){L=0}function B(){let N=L;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function V(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function J(N,A){let W=n.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){let ne=N.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,N,A);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+A)}function Y(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){ee(W,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+A)}function re(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){ee(W,N,A);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+A)}function K(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){le(W,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+A)}let ue={[pi]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},xe={[mn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Ce={[v0]:i.NEVER,[A0]:i.ALWAYS,[y0]:i.LESS,[Gp]:i.LEQUAL,[M0]:i.EQUAL,[T0]:i.GEQUAL,[S0]:i.GREATER,[w0]:i.NOTEQUAL};function Oe(N,A){if(A.type===rn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===It||A.magFilter===po||A.magFilter===lr||A.magFilter===Jn||A.minFilter===It||A.minFilter===po||A.minFilter===lr||A.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ue[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ue[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ue[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,xe[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,xe[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mn||A.minFilter!==lr&&A.minFilter!==Jn||A.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function je(N,A){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",E));let ne=A.source,se=f.get(ne);se===void 0&&(se={},f.set(ne,se));let te=V(A);if(te!==N.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),se[te].usedTimes++;let Pe=se[N.__cacheKey];Pe!==void 0&&(se[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(A)),N.__cacheKey=te,N.__webglTexture=se[te].texture}return W}function ee(N,A,W){let ne=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=i.TEXTURE_3D);let se=je(N,A),te=A.source;t.bindTexture(ne,N.__webglTexture,i.TEXTURE0+W);let Pe=n.get(te);if(te.version!==Pe.__version||se===!0){t.activeTexture(i.TEXTURE0+W);let _e=Ye.getPrimaries(Ye.workingColorSpace),Se=A.colorSpace===fi?null:Ye.getPrimaries(A.colorSpace),st=A.colorSpace===fi||_e===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let fe=b(A.image,!1,s.maxTextureSize);fe=vt(A,fe);let Ee=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Ie=M(A.internalFormat,Ee,Re,A.colorSpace,A.isVideoTexture);Oe(ne,A);let Ae,He=A.mipmaps,Le=A.isVideoTexture!==!0,Ve=Pe.__version===void 0||se===!0,z=te.dataReady,Z=R(A,fe);if(A.isDepthTexture)Ie=v(A.format===_r,A.type),Ve&&(Le?t.texStorage2D(i.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ee,Re,null));else if(A.isDataTexture)if(He.length>0){Le&&Ve&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,He[0].width,He[0].height);for(let Q=0,ie=He.length;Q<ie;Q++)Ae=He[Q],Le?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,Ee,Re,Ae.data):t.texImage2D(i.TEXTURE_2D,Q,Ie,Ae.width,Ae.height,0,Ee,Re,Ae.data);A.generateMipmaps=!1}else Le?(Ve&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,fe.width,fe.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ee,Re,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ee,Re,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Le&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Ie,He[0].width,He[0].height,fe.depth);for(let Q=0,ie=He.length;Q<ie;Q++)if(Ae=He[Q],A.format!==pn)if(Ee!==null)if(Le){if(z)if(A.layerUpdates.size>0){let ye=rp(Ae.width,Ae.height,A.format,A.type);for(let ve of A.layerUpdates){let Ge=Ae.data.subarray(ve*ye/Ae.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ve,Ae.width,Ae.height,1,Ee,Ge)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ae.width,Ae.height,fe.depth,Ee,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ie,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ae.width,Ae.height,fe.depth,Ee,Re,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ie,Ae.width,Ae.height,fe.depth,0,Ee,Re,Ae.data)}else{Le&&Ve&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,He[0].width,He[0].height);for(let Q=0,ie=He.length;Q<ie;Q++)Ae=He[Q],A.format!==pn?Ee!==null?Le?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ie,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ae.width,Ae.height,Ee,Re,Ae.data):t.texImage2D(i.TEXTURE_2D,Q,Ie,Ae.width,Ae.height,0,Ee,Re,Ae.data)}else if(A.isDataArrayTexture)if(Le){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Ie,fe.width,fe.height,fe.depth),z)if(A.layerUpdates.size>0){let Q=rp(fe.width,fe.height,A.format,A.type);for(let ie of A.layerUpdates){let ye=fe.data.subarray(ie*Q/fe.data.BYTES_PER_ELEMENT,(ie+1)*Q/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,fe.width,fe.height,1,Ee,Re,ye)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Re,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,Ee,Re,fe.data);else if(A.isData3DTexture)Le?(Ve&&t.texStorage3D(i.TEXTURE_3D,Z,Ie,fe.width,fe.height,fe.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Re,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,Ee,Re,fe.data);else if(A.isFramebufferTexture){if(Ve)if(Le)t.texStorage2D(i.TEXTURE_2D,Z,Ie,fe.width,fe.height);else{let Q=fe.width,ie=fe.height;for(let ye=0;ye<Z;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ie,Q,ie,0,Ee,Re,null),Q>>=1,ie>>=1}}else if(He.length>0){if(Le&&Ve){let Q=Ne(He[0]);t.texStorage2D(i.TEXTURE_2D,Z,Ie,Q.width,Q.height)}for(let Q=0,ie=He.length;Q<ie;Q++)Ae=He[Q],Le?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ee,Re,Ae):t.texImage2D(i.TEXTURE_2D,Q,Ie,Ee,Re,Ae);A.generateMipmaps=!1}else if(Le){if(Ve){let Q=Ne(fe);t.texStorage2D(i.TEXTURE_2D,Z,Ie,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Re,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ee,Re,fe);g(A)&&p(ne),Pe.__version=te.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function le(N,A,W){if(A.image.length!==6)return;let ne=je(N,A),se=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let te=n.get(se);if(se.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);let Pe=Ye.getPrimaries(Ye.workingColorSpace),_e=A.colorSpace===fi?null:Ye.getPrimaries(A.colorSpace),Se=A.colorSpace===fi||Pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let st=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!st&&!fe?Ee[ie]=b(A.image[ie],!0,s.maxCubemapSize):Ee[ie]=fe?A.image[ie].image:A.image[ie],Ee[ie]=vt(A,Ee[ie]);let Re=Ee[0],Ie=r.convert(A.format,A.colorSpace),Ae=r.convert(A.type),He=M(A.internalFormat,Ie,Ae,A.colorSpace),Le=A.isVideoTexture!==!0,Ve=te.__version===void 0||ne===!0,z=se.dataReady,Z=R(A,Re);Oe(i.TEXTURE_CUBE_MAP,A);let Q;if(st){Le&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,He,Re.width,Re.height);for(let ie=0;ie<6;ie++){Q=Ee[ie].mipmaps;for(let ye=0;ye<Q.length;ye++){let ve=Q[ye];A.format!==pn?Ie!==null?Le?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,ve.width,ve.height,Ie,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,He,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,ve.width,ve.height,Ie,Ae,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,He,ve.width,ve.height,0,Ie,Ae,ve.data)}}}else{if(Q=A.mipmaps,Le&&Ve){Q.length>0&&Z++;let ie=Ne(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(fe){Le?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,Ie,Ae,Ee[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Ee[ie].width,Ee[ie].height,0,Ie,Ae,Ee[ie].data);for(let ye=0;ye<Q.length;ye++){let Ge=Q[ye].image[ie].image;Le?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Ge.width,Ge.height,Ie,Ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,He,Ge.width,Ge.height,0,Ie,Ae,Ge.data)}}else{Le?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Ae,Ee[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Ie,Ae,Ee[ie]);for(let ye=0;ye<Q.length;ye++){let ve=Q[ye];Le?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Ie,Ae,ve.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,He,Ie,Ae,ve.image[ie])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),te.__version=se.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function de(N,A,W,ne,se,te){let Pe=r.convert(W.format,W.colorSpace),_e=r.convert(W.type),Se=M(W.internalFormat,Pe,_e,W.colorSpace),st=n.get(A),fe=n.get(W);if(fe.__renderTarget=A,!st.__hasExternalTextures){let Ee=Math.max(1,A.width>>te),Re=Math.max(1,A.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,Se,Ee,Re,A.depth,0,Pe,_e,null):t.texImage2D(se,te,Se,Ee,Re,0,Pe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),tt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,fe.__webglTexture,0,et(A)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,fe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(N,A,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ne=A.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=v(A.stencilBuffer,se),Pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=et(A);tt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,te,A.width,A.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,te,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,N)}else{let ne=A.textures;for(let se=0;se<ne.length;se++){let te=ne[se],Pe=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),Se=M(te.internalFormat,Pe,_e,te.colorSpace),st=et(A);W&&tt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Se,A.width,A.height):tt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Se,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(A.depthTexture);ne.__renderTarget=A,(!ne.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);let se=ne.__webglTexture,te=et(A);if(A.depthTexture.format===fr)tt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(A.depthTexture.format===_r)tt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Be(N){let A=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ne=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ne){let se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),A.__depthDisposeCallback=se}A.__boundDepthTexture=ne}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,N)}else if(W){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]===void 0)A.__webglDepthbuffer[ne]=i.createRenderbuffer(),pe(A.__webglDepthbuffer[ne],N,!1);else{let se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=A.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),pe(A.__webglDepthbuffer,N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(N,A,W){let ne=n.get(N);A!==void 0&&de(ne.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Be(N)}function pt(N){let A=N.texture,W=n.get(N),ne=n.get(A);N.addEventListener("dispose",C);let se=N.textures,te=N.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=A.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let Se=0;Se<A.mipmaps.length;Se++)W.__webglFramebuffer[_e][Se]=i.createFramebuffer()}else W.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)W.__webglFramebuffer[_e]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let _e=0,Se=se.length;_e<Se;_e++){let st=n.get(se[_e]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&tt(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){let Se=se[_e];W.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);let st=r.convert(Se.format,Se.colorSpace),fe=r.convert(Se.type),Ee=M(Se.internalFormat,st,fe,Se.colorSpace,N.isXRRenderTarget===!0),Re=et(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ee,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,A);for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)de(W.__webglFramebuffer[_e][Se],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else de(W.__webglFramebuffer[_e],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,Se=se.length;_e<Se;_e++){let st=se[_e],fe=n.get(st);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Oe(i.TEXTURE_2D,st),de(W.__webglFramebuffer,N,st,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),g(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_e=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),Oe(_e,A),A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)de(W.__webglFramebuffer[Se],N,A,i.COLOR_ATTACHMENT0,_e,Se);else de(W.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,_e,0);g(A)&&p(_e),t.unbindTexture()}N.depthBuffer&&Be(N)}function Ze(N){let A=N.textures;for(let W=0,ne=A.length;W<ne;W++){let se=A[W];if(g(se)){let te=y(N),Pe=n.get(se).__webglTexture;t.bindTexture(te,Pe),p(te),t.unbindTexture()}}}let _t=[],k=[];function gn(N){if(N.samples>0){if(tt(N)===!1){let A=N.textures,W=N.width,ne=N.height,se=i.COLOR_BUFFER_BIT,te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(N),_e=A.length>1;if(_e)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);let st=n.get(A[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,W,ne,0,0,W,ne,se,i.NEAREST),c===!0&&(_t.length=0,k.length=0,_t.push(i.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_t.push(te),k.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);let st=n.get(A[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function et(N){return Math.min(s.maxSamples,N.samples)}function tt(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Fe(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function vt(N,A){let W=N.colorSpace,ne=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==jt&&W!==fi&&(Ye.getTransfer(W)===dt?(ne!==pn||se!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=tt}function Ny(i,e){function t(n,s=fi){let r,o=Ye.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return i.BYTE;if(n===Lp)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===wu)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Np)return i.ALPHA;if(n===Fp)return i.RGB;if(n===pn)return i.RGBA;if(n===Op)return i.LUMINANCE;if(n===Bp)return i.LUMINANCE_ALPHA;if(n===fr)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===Ns)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===zp)return i.RG;if(n===Eu)return i.RG_INTEGER;if(n===Ru)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===xh||n===bh||n===_h)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vh||n===yh||n===Mh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vh||n===yh)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sh||n===wh||n===Th||n===Ah||n===Eh||n===Rh||n===Ch||n===Ph||n===Ih||n===Dh||n===Lh||n===Uh||n===Nh||n===Fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Oh||n===Bh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kp||n===zh||n===kh||n===Hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tu=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Tn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fy={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new en,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,x=null,b=new nu,g=t.getContextAttributes(),p=null,y=null,M=[],v=[],R=new Me,E=null,C=new Ut;C.viewport=new nt;let U=new Ut;U.viewport=new nt;let T=[C,U],S=new tu,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=M[ee];return le===void 0&&(le=new xo,M[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=M[ee];return le===void 0&&(le=new xo,M[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=M[ee];return le===void 0&&(le=new xo,M[ee]=le),le.getHandSpace()};function B(ee){let le=v.indexOf(ee.inputSource);if(le===-1)return;let de=M[le];de!==void 0&&(de.update(ee.inputSource,ee.frame,l||o),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let ee=0;ee<M.length;ee++){let le=v[ee];le!==null&&(v[ee]=null,M[ee].disconnect(le))}L=null,O=null,b.reset(),e.setRenderTarget(p),m=null,f=null,u=null,s=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Xt(m.framebufferWidth,m.framebufferHeight,{format:pn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,de=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?_r:fr,de=g.stencil?br:ss);let De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Xt(f.textureWidth,f.textureHeight,{format:pn,type:$n,depthTexture:new nc(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function J(ee){for(let le=0;le<ee.removed.length;le++){let de=ee.removed[le],pe=v.indexOf(de);pe>=0&&(v[pe]=null,M[pe].disconnect(de))}for(let le=0;le<ee.added.length;le++){let de=ee.added[le],pe=v.indexOf(de);if(pe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=v.length){v.push(de),pe=Be;break}else if(v[Be]===null){v[Be]=de,pe=Be;break}if(pe===-1)break}let De=M[pe];De&&De.connect(de)}}let Y=new D,re=new D;function K(ee,le,de){Y.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);let pe=Y.distanceTo(re),De=le.projectionMatrix.elements,Be=de.projectionMatrix.elements,Xe=De[14]/(De[10]-1),pt=De[14]/(De[10]+1),Ze=(De[9]+1)/De[5],_t=(De[9]-1)/De[5],k=(De[8]-1)/De[0],gn=(Be[8]+1)/Be[0],et=Xe*k,tt=Xe*gn,Fe=pe/(-k+gn),vt=Fe*-k;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(vt),ee.translateZ(Fe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),De[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Ne=Xe+Fe,N=pt+Fe,A=et-vt,W=tt+(pe-vt),ne=Ze*pt/N*Ne,se=_t*pt/N*Ne;ee.projectionMatrix.makePerspective(A,W,ne,se,Ne,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let le=ee.near,de=ee.far;b.texture!==null&&(b.depthNear>0&&(le=b.depthNear),b.depthFar>0&&(de=b.depthFar)),S.near=U.near=C.near=le,S.far=U.far=C.far=de,(L!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,O=S.far),C.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,S.layers.mask=C.layers.mask|U.layers.mask;let pe=ee.parent,De=S.cameras;ue(S,pe);for(let Be=0;Be<De.length;Be++)ue(De[Be],pe);De.length===2?K(S,C,U):S.projectionMatrix.copy(C.projectionMatrix),xe(ee,S,pe)};function xe(ee,le,de){de===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Mr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(S)};let Ce=null;function Oe(ee,le){if(h=le.getViewerPose(l||o),x=le,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let pe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Be=0;Be<de.length;Be++){let Xe=de[Be],pt=null;if(m!==null)pt=m.getViewport(Xe);else{let _t=u.getViewSubImage(f,Xe);pt=_t.viewport,Be===0&&(e.setRenderTargetTextures(y,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(y))}let Ze=T[Be];Ze===void 0&&(Ze=new Ut,Ze.layers.enable(Be),Ze.viewport=new nt,T[Be]=Ze),Ze.matrix.fromArray(Xe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Xe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(pt.x,pt.y,pt.width,pt.height),Be===0&&(S.matrix.copy(Ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Ze)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){let Be=u.getDepthInformation(de[0]);Be&&Be.isValid&&Be.texture&&b.init(e,Be,s.renderState)}}for(let de=0;de<M.length;de++){let pe=v[de],De=M[de];pe!==null&&De!==void 0&&De.update(pe,le,l||o)}Ce&&Ce(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),x=null}let je=new Yp;je.setAnimationLoop(Oe),this.setAnimationLoop=function(ee){Ce=ee},this.dispose=function(){}}},ws=new mi,zy=new we;function ky(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,qp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(g.envMap.value=M,ws.copy(v),ws.x*=-1,ws.y*=-1,ws.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(ws)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function l(y,M){let v=s[y.id];v===void 0&&(x(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let R=M.program;n.updateUBOMapping(y,R);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let M=u();y.__bindingPointIndex=M;let v=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,C=v.length;E<C;E++){let U=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,S=U.length;T<S;T++){let L=U[T];if(m(L,E,T,R)===!0){let O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value],V=0;for(let J=0;J<B.length;J++){let Y=B[J],re=b(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+V,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,V),V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,v,R){let E=y.value,C=M+"_"+v;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{let U=R[C];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[C]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function x(y){let M=y.uniforms,v=0,R=16;for(let C=0,U=M.length;C<U;C++){let T=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,L=T.length;S<L;S++){let O=T[S],B=Array.isArray(O.value)?O.value:[O.value];for(let V=0,J=B.length;V<J;V++){let Y=B[V],re=b(Y),K=v%R,ue=K%re.boundary,xe=K+ue;v+=ue,xe!==0&&R-xe<re.storage&&(v+=R-xe),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=re.storage}}}let E=v%R;return E>0&&(v+=R-E),y.__size=v,y.__cache={},this}function b(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){let M=y.target;M.removeEventListener("dispose",g);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ic=class{constructor(e={}){let{canvas:t=G0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=new Uint32Array(4),b=new Int32Array(4),g=null,p=null,y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=ns,this.toneMappingExposure=1;let v=this,R=!1,E=0,C=0,U=null,T=-1,S=null,L=new nt,O=new nt,B=null,V=new Te(0),J=0,Y=t.width,re=t.height,K=1,ue=null,xe=null,Ce=new nt(0,0,Y,re),Oe=new nt(0,0,Y,re),je=!1,ee=new wr,le=!1,de=!1,pe=new we,De=new we,Be=new D,Xe=new nt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function _t(){return U===null?K:1}let k=n;function gn(d,_){return t.getContext(d,_)}try{let d={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ve,!1),k===null){let _="webgl2";if(k=gn(_,d),k===null)throw gn(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let et,tt,Fe,vt,Ne,N,A,W,ne,se,te,Pe,_e,Se,st,fe,Ee,Re,Ie,Ae,He,Le,Ve,z;function Z(){et=new iv(k),et.init(),Le=new Ny(k,et),tt=new J_(k,et,e,Le),Fe=new Dy(k,et),tt.reverseDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),vt=new ov(k),Ne=new _y,N=new Uy(k,et,Fe,Ne,tt,Le,vt),A=new $_(v),W=new nv(v),ne=new dx(k),Ve=new Z_(k,ne),se=new sv(k,ne,vt,Ve),te=new cv(k,se,ne,vt),Ie=new av(k,tt,N),fe=new Q_(Ne),Pe=new by(v,A,W,et,tt,Ve,fe),_e=new ky(v,Ne),Se=new yy,st=new Ey(et),Re=new j_(v,A,W,Fe,te,m,c),Ee=new Py(v,te,tt),z=new Hy(k,vt,tt,Fe),Ae=new K_(k,et,vt),He=new rv(k,et,vt),vt.programs=Pe.programs,v.capabilities=tt,v.extensions=et,v.properties=Ne,v.renderLists=Se,v.shadowMap=Ee,v.state=Fe,v.info=vt}Z();let Q=new iu(v,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let d=et.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){let d=et.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(d){d!==void 0&&(K=d,this.setSize(Y,re,!1))},this.getSize=function(d){return d.set(Y,re)},this.setSize=function(d,_,w=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=d,re=_,t.width=Math.floor(d*K),t.height=Math.floor(_*K),w===!0&&(t.style.width=d+"px",t.style.height=_+"px"),this.setViewport(0,0,d,_)},this.getDrawingBufferSize=function(d){return d.set(Y*K,re*K).floor()},this.setDrawingBufferSize=function(d,_,w){Y=d,re=_,K=w,t.width=Math.floor(d*w),t.height=Math.floor(_*w),this.setViewport(0,0,d,_)},this.getCurrentViewport=function(d){return d.copy(L)},this.getViewport=function(d){return d.copy(Ce)},this.setViewport=function(d,_,w,P){d.isVector4?Ce.set(d.x,d.y,d.z,d.w):Ce.set(d,_,w,P),Fe.viewport(L.copy(Ce).multiplyScalar(K).round())},this.getScissor=function(d){return d.copy(Oe)},this.setScissor=function(d,_,w,P){d.isVector4?Oe.set(d.x,d.y,d.z,d.w):Oe.set(d,_,w,P),Fe.scissor(O.copy(Oe).multiplyScalar(K).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(d){Fe.setScissorTest(je=d)},this.setOpaqueSort=function(d){ue=d},this.setTransparentSort=function(d){xe=d},this.getClearColor=function(d){return d.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(d=!0,_=!0,w=!0){let P=0;if(d){let I=!1;if(U!==null){let F=U.texture.format;I=F===Ru||F===Eu||F===Ac}if(I){let F=U.texture.type,H=F===$n||F===ss||F===vo||F===br||F===Tu||F===Au,j=Re.getClearColor(),G=Re.getClearAlpha(),X=j.r,q=j.g,$=j.b;H?(x[0]=X,x[1]=q,x[2]=$,x[3]=G,k.clearBufferuiv(k.COLOR,0,x)):(b[0]=X,b[1]=q,b[2]=$,b[3]=G,k.clearBufferiv(k.COLOR,0,b))}else P|=k.COLOR_BUFFER_BIT}_&&(P|=k.DEPTH_BUFFER_BIT),w&&(P|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),st.dispose(),Ne.dispose(),A.dispose(),W.dispose(),te.dispose(),Ve.dispose(),z.dispose(),Pe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",la),Q.removeEventListener("sessionend",ha),wi.stop()};function ie(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let d=vt.autoReset,_=Ee.enabled,w=Ee.autoUpdate,P=Ee.needsUpdate,I=Ee.type;Z(),vt.autoReset=d,Ee.enabled=_,Ee.autoUpdate=w,Ee.needsUpdate=P,Ee.type=I}function ve(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function Ge(d){let _=d.target;_.removeEventListener("dispose",Ge),Et(_)}function Et(d){Kt(d),Ne.remove(d)}function Kt(d){let _=Ne.get(d).programs;_!==void 0&&(_.forEach(function(w){Pe.releaseProgram(w)}),d.isShaderMaterial&&Pe.releaseShaderCache(d))}this.renderBufferDirect=function(d,_,w,P,I,F){_===null&&(_=pt);let H=I.isMesh&&I.matrixWorld.determinant()<0,j=wl(d,_,w,P,I);Fe.setMaterial(P,H);let G=w.index,X=1;if(P.wireframe===!0){if(G=se.getWireframeAttribute(w),G===void 0)return;X=2}let q=w.drawRange,$=w.attributes.position,ae=q.start*X,ce=(q.start+q.count)*X;F!==null&&(ae=Math.max(ae,F.start*X),ce=Math.min(ce,(F.start+F.count)*X)),G!==null?(ae=Math.max(ae,0),ce=Math.min(ce,G.count)):$!=null&&(ae=Math.max(ae,0),ce=Math.min(ce,$.count));let ge=ce-ae;if(ge<0||ge===1/0)return;Ve.setup(I,P,j,w,G);let me,he=Ae;if(G!==null&&(me=ne.get(G),he=He,he.setIndex(me)),I.isMesh)P.wireframe===!0?(Fe.setLineWidth(P.wireframeLinewidth*_t()),he.setMode(k.LINES)):he.setMode(k.TRIANGLES);else if(I.isLine){let oe=P.linewidth;oe===void 0&&(oe=1),Fe.setLineWidth(oe*_t()),I.isLineSegments?he.setMode(k.LINES):I.isLineLoop?he.setMode(k.LINE_LOOP):he.setMode(k.LINE_STRIP)}else I.isPoints?he.setMode(k.POINTS):I.isSprite&&he.setMode(k.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)he.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))he.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let oe=I._multiDrawStarts,Ke=I._multiDrawCounts,Ue=I._multiDrawCount,Tt=G?ne.get(G).bytesPerElement:1,lt=Ne.get(P).currentProgram.getUniforms();for(let ze=0;ze<Ue;ze++)lt.setValue(k,"_gl_DrawID",ze),he.render(oe[ze]/Tt,Ke[ze])}else if(I.isInstancedMesh)he.renderInstances(ae,ge,I.count);else if(w.isInstancedBufferGeometry){let oe=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ke=Math.min(w.instanceCount,oe);he.renderInstances(ae,ge,Ke)}else he.render(ae,ge)};function ht(d,_,w){d.transparent===!0&&d.side===dn&&d.forceSinglePass===!1?(d.side=Wt,d.needsUpdate=!0,Ys(d,_,w),d.side=Nn,d.needsUpdate=!0,Ys(d,_,w),d.side=dn):Ys(d,_,w)}this.compile=function(d,_,w=null){w===null&&(w=d),p=st.get(w),p.init(_),M.push(p),w.traverseVisible(function(I){I.isLight&&I.layers.test(_.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),d!==w&&d.traverseVisible(function(I){I.isLight&&I.layers.test(_.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();let P=new Set;return d.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let F=I.material;if(F)if(Array.isArray(F))for(let H=0;H<F.length;H++){let j=F[H];ht(j,w,I),P.add(j)}else ht(F,w,I),P.add(F)}),M.pop(),p=null,P},this.compileAsync=function(d,_,w=null){let P=this.compile(d,_,w);return new Promise(I=>{function F(){if(P.forEach(function(H){Ne.get(H).currentProgram.isReady()&&P.delete(H)}),P.size===0){I(d);return}setTimeout(F,10)}et.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let In=null;function Xn(d){In&&In(d)}function la(){wi.stop()}function ha(){wi.start()}let wi=new Yp;wi.setAnimationLoop(Xn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(d){In=d,Q.setAnimationLoop(d),d===null?wi.stop():wi.start()},Q.addEventListener("sessionstart",la),Q.addEventListener("sessionend",ha),this.render=function(d,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(_),_=Q.getCamera()),d.isScene===!0&&d.onBeforeRender(v,d,_,U),p=st.get(d,M.length),p.init(_),M.push(p),De.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),ee.setFromProjectionMatrix(De),de=this.localClippingEnabled,le=fe.init(this.clippingPlanes,de),g=Se.get(d,y.length),g.init(),y.push(g),Q.enabled===!0&&Q.isPresenting===!0){let F=v.xr.getDepthSensingMesh();F!==null&&Qr(F,_,-1/0,v.sortObjects)}Qr(d,_,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ue,xe),Ze=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ze&&Re.addToRenderList(g,d),this.info.render.frame++,le===!0&&fe.beginShadows();let w=p.state.shadowsArray;Ee.render(w,d,_),le===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let P=g.opaque,I=g.transmissive;if(p.setupLights(),_.isArrayCamera){let F=_.cameras;if(I.length>0)for(let H=0,j=F.length;H<j;H++){let G=F[H];ua(P,I,d,G)}Ze&&Re.render(d);for(let H=0,j=F.length;H<j;H++){let G=F[H];$r(g,d,G,G.viewport)}}else I.length>0&&ua(P,I,d,_),Ze&&Re.render(d),$r(g,d,_);U!==null&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),d.isScene===!0&&d.onAfterRender(v,d,_),Ve.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],le===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Qr(d,_,w,P){if(d.visible===!1)return;if(d.layers.test(_.layers)){if(d.isGroup)w=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(_);else if(d.isLight)p.pushLight(d),d.castShadow&&p.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||ee.intersectsSprite(d)){P&&Xe.setFromMatrixPosition(d.matrixWorld).applyMatrix4(De);let H=te.update(d),j=d.material;j.visible&&g.push(d,H,j,w,Xe.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||ee.intersectsObject(d))){let H=te.update(d),j=d.material;if(P&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Xe.copy(d.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),Xe.copy(H.boundingSphere.center)),Xe.applyMatrix4(d.matrixWorld).applyMatrix4(De)),Array.isArray(j)){let G=H.groups;for(let X=0,q=G.length;X<q;X++){let $=G[X],ae=j[$.materialIndex];ae&&ae.visible&&g.push(d,H,ae,w,Xe.z,$)}}else j.visible&&g.push(d,H,j,w,Xe.z,null)}}let F=d.children;for(let H=0,j=F.length;H<j;H++)Qr(F[H],_,w,P)}function $r(d,_,w,P){let I=d.opaque,F=d.transmissive,H=d.transparent;p.setupLightsView(w),le===!0&&fe.setGlobalState(v.clippingPlanes,w),P&&Fe.viewport(L.copy(P)),I.length>0&&qs(I,_,w),F.length>0&&qs(F,_,w),H.length>0&&qs(H,_,w),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ua(d,_,w,P){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[P.id]===void 0&&(p.state.transmissionRenderTarget[P.id]=new Xt(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ht:$n,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let F=p.state.transmissionRenderTarget[P.id],H=P.viewport||L;F.setSize(H.z,H.w);let j=v.getRenderTarget();v.setRenderTarget(F),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Re.render(w);let G=v.toneMapping;v.toneMapping=ns;let X=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),p.setupLightsView(P),le===!0&&fe.setGlobalState(v.clippingPlanes,P),qs(d,w,P),N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F),et.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let $=0,ae=_.length;$<ae;$++){let ce=_[$],ge=ce.object,me=ce.geometry,he=ce.material,oe=ce.group;if(he.side===dn&&ge.layers.test(P.layers)){let Ke=he.side;he.side=Wt,he.needsUpdate=!0,fa(ge,w,P,me,he,oe),he.side=Ke,he.needsUpdate=!0,q=!0}}q===!0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F))}v.setRenderTarget(j),v.setClearColor(V,J),X!==void 0&&(P.viewport=X),v.toneMapping=G}function qs(d,_,w){let P=_.isScene===!0?_.overrideMaterial:null;for(let I=0,F=d.length;I<F;I++){let H=d[I],j=H.object,G=H.geometry,X=P===null?H.material:P,q=H.group;j.layers.test(w.layers)&&fa(j,_,w,G,X,q)}}function fa(d,_,w,P,I,F){d.onBeforeRender(v,_,w,P,I,F),d.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),I.onBeforeRender(v,_,w,P,d,F),I.transparent===!0&&I.side===dn&&I.forceSinglePass===!1?(I.side=Wt,I.needsUpdate=!0,v.renderBufferDirect(w,_,P,I,d,F),I.side=Nn,I.needsUpdate=!0,v.renderBufferDirect(w,_,P,I,d,F),I.side=dn):v.renderBufferDirect(w,_,P,I,d,F),d.onAfterRender(v,_,w,P,I,F)}function Ys(d,_,w){_.isScene!==!0&&(_=pt);let P=Ne.get(d),I=p.state.lights,F=p.state.shadowsArray,H=I.state.version,j=Pe.getParameters(d,I.state,F,_,w),G=Pe.getProgramCacheKey(j),X=P.programs;P.environment=d.isMeshStandardMaterial?_.environment:null,P.fog=_.fog,P.envMap=(d.isMeshStandardMaterial?W:A).get(d.envMap||P.environment),P.envMapRotation=P.environment!==null&&d.envMap===null?_.environmentRotation:d.envMapRotation,X===void 0&&(d.addEventListener("dispose",Ge),X=new Map,P.programs=X);let q=X.get(G);if(q!==void 0){if(P.currentProgram===q&&P.lightsStateVersion===H)return to(d,j),q}else j.uniforms=Pe.getUniforms(d),d.onBeforeCompile(j,v),q=Pe.acquireProgram(j,G),X.set(G,q),P.uniforms=j.uniforms;let $=P.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&($.clippingPlanes=fe.uniform),to(d,j),P.needsLights=ji(d),P.lightsStateVersion=H,P.needsLights&&($.ambientLightColor.value=I.state.ambient,$.lightProbe.value=I.state.probe,$.directionalLights.value=I.state.directional,$.directionalLightShadows.value=I.state.directionalShadow,$.spotLights.value=I.state.spot,$.spotLightShadows.value=I.state.spotShadow,$.rectAreaLights.value=I.state.rectArea,$.ltc_1.value=I.state.rectAreaLTC1,$.ltc_2.value=I.state.rectAreaLTC2,$.pointLights.value=I.state.point,$.pointLightShadows.value=I.state.pointShadow,$.hemisphereLights.value=I.state.hemi,$.directionalShadowMap.value=I.state.directionalShadowMap,$.directionalShadowMatrix.value=I.state.directionalShadowMatrix,$.spotShadowMap.value=I.state.spotShadowMap,$.spotLightMatrix.value=I.state.spotLightMatrix,$.spotLightMap.value=I.state.spotLightMap,$.pointShadowMap.value=I.state.pointShadowMap,$.pointShadowMatrix.value=I.state.pointShadowMatrix),P.currentProgram=q,P.uniformsList=null,q}function eo(d){if(d.uniformsList===null){let _=d.currentProgram.getUniforms();d.uniformsList=pr.seqWithValue(_.seq,d.uniforms)}return d.uniformsList}function to(d,_){let w=Ne.get(d);w.outputColorSpace=_.outputColorSpace,w.batching=_.batching,w.batchingColor=_.batchingColor,w.instancing=_.instancing,w.instancingColor=_.instancingColor,w.instancingMorph=_.instancingMorph,w.skinning=_.skinning,w.morphTargets=_.morphTargets,w.morphNormals=_.morphNormals,w.morphColors=_.morphColors,w.morphTargetsCount=_.morphTargetsCount,w.numClippingPlanes=_.numClippingPlanes,w.numIntersection=_.numClipIntersection,w.vertexAlphas=_.vertexAlphas,w.vertexTangents=_.vertexTangents,w.toneMapping=_.toneMapping}function wl(d,_,w,P,I){_.isScene!==!0&&(_=pt),N.resetTextureUnits();let F=_.fog,H=P.isMeshStandardMaterial?_.environment:null,j=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:jt,G=(P.isMeshStandardMaterial?W:A).get(P.envMap||H),X=P.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,q=!!w.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),$=!!w.morphAttributes.position,ae=!!w.morphAttributes.normal,ce=!!w.morphAttributes.color,ge=ns;P.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=v.toneMapping);let me=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,he=me!==void 0?me.length:0,oe=Ne.get(P),Ke=p.state.lights;if(le===!0&&(de===!0||d!==S)){let qe=d===S&&P.id===T;fe.setState(P,d,qe)}let Ue=!1;P.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Ke.state.version||oe.outputColorSpace!==j||I.isBatchedMesh&&oe.batching===!1||!I.isBatchedMesh&&oe.batching===!0||I.isBatchedMesh&&oe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&oe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&oe.instancing===!1||!I.isInstancedMesh&&oe.instancing===!0||I.isSkinnedMesh&&oe.skinning===!1||!I.isSkinnedMesh&&oe.skinning===!0||I.isInstancedMesh&&oe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&oe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&oe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&oe.instancingMorph===!1&&I.morphTexture!==null||oe.envMap!==G||P.fog===!0&&oe.fog!==F||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==fe.numPlanes||oe.numIntersection!==fe.numIntersection)||oe.vertexAlphas!==X||oe.vertexTangents!==q||oe.morphTargets!==$||oe.morphNormals!==ae||oe.morphColors!==ce||oe.toneMapping!==ge||oe.morphTargetsCount!==he)&&(Ue=!0):(Ue=!0,oe.__version=P.version);let Tt=oe.currentProgram;Ue===!0&&(Tt=Ys(P,_,I));let lt=!1,ze=!1,At=!1,Je=Tt.getUniforms(),mt=oe.uniforms;if(Fe.useProgram(Tt.program)&&(lt=!0,ze=!0,At=!0),P.id!==T&&(T=P.id,ze=!0),lt||S!==d){Fe.buffers.depth.getReversed()?(pe.copy(d.projectionMatrix),X0(pe),q0(pe),Je.setValue(k,"projectionMatrix",pe)):Je.setValue(k,"projectionMatrix",d.projectionMatrix),Je.setValue(k,"viewMatrix",d.matrixWorldInverse);let Jt=Je.map.cameraPosition;Jt!==void 0&&Jt.setValue(k,Be.setFromMatrixPosition(d.matrixWorld)),tt.logarithmicDepthBuffer&&Je.setValue(k,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Je.setValue(k,"isOrthographic",d.isOrthographicCamera===!0),S!==d&&(S=d,ze=!0,At=!0)}if(I.isSkinnedMesh){Je.setOptional(k,I,"bindMatrix"),Je.setOptional(k,I,"bindMatrixInverse");let qe=I.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Je.setValue(k,"boneTexture",qe.boneTexture,N))}I.isBatchedMesh&&(Je.setOptional(k,I,"batchingTexture"),Je.setValue(k,"batchingTexture",I._matricesTexture,N),Je.setOptional(k,I,"batchingIdTexture"),Je.setValue(k,"batchingIdTexture",I._indirectTexture,N),Je.setOptional(k,I,"batchingColorTexture"),I._colorsTexture!==null&&Je.setValue(k,"batchingColorTexture",I._colorsTexture,N));let rt=w.morphAttributes;if((rt.position!==void 0||rt.normal!==void 0||rt.color!==void 0)&&Ie.update(I,w,Tt),(ze||oe.receiveShadow!==I.receiveShadow)&&(oe.receiveShadow=I.receiveShadow,Je.setValue(k,"receiveShadow",I.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(mt.envMap.value=G,mt.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&_.environment!==null&&(mt.envMapIntensity.value=_.environmentIntensity),ze&&(Je.setValue(k,"toneMappingExposure",v.toneMappingExposure),oe.needsLights&&Ti(mt,At),F&&P.fog===!0&&_e.refreshFogUniforms(mt,F),_e.refreshMaterialUniforms(mt,P,K,re,p.state.transmissionRenderTarget[d.id]),pr.upload(k,eo(oe),mt,N)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(pr.upload(k,eo(oe),mt,N),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Je.setValue(k,"center",I.center),Je.setValue(k,"modelViewMatrix",I.modelViewMatrix),Je.setValue(k,"normalMatrix",I.normalMatrix),Je.setValue(k,"modelMatrix",I.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let qe=P.uniformsGroups;for(let Jt=0,Sn=qe.length;Jt<Sn;Jt++){let Dn=qe[Jt];z.update(Dn,Tt),z.bind(Dn,Tt)}}return Tt}function Ti(d,_){d.ambientLightColor.needsUpdate=_,d.lightProbe.needsUpdate=_,d.directionalLights.needsUpdate=_,d.directionalLightShadows.needsUpdate=_,d.pointLights.needsUpdate=_,d.pointLightShadows.needsUpdate=_,d.spotLights.needsUpdate=_,d.spotLightShadows.needsUpdate=_,d.rectAreaLights.needsUpdate=_,d.hemisphereLights.needsUpdate=_}function ji(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(d,_,w){Ne.get(d.texture).__webglTexture=_,Ne.get(d.depthTexture).__webglTexture=w;let P=Ne.get(d);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=w===void 0,P.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,_){let w=Ne.get(d);w.__webglFramebuffer=_,w.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(d,_=0,w=0){U=d,E=_,C=w;let P=!0,I=null,F=!1,H=!1;if(d){let G=Ne.get(d);if(G.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(k.FRAMEBUFFER,null),P=!1;else if(G.__webglFramebuffer===void 0)N.setupRenderTarget(d);else if(G.__hasExternalTextures)N.rebindTextures(d,Ne.get(d.texture).__webglTexture,Ne.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){let $=d.depthTexture;if(G.__boundDepthTexture!==$){if($!==null&&Ne.has($)&&(d.width!==$.image.width||d.height!==$.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(d)}}let X=d.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(H=!0);let q=Ne.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(q[_])?I=q[_][w]:I=q[_],F=!0):d.samples>0&&N.useMultisampledRTT(d)===!1?I=Ne.get(d).__webglMultisampledFramebuffer:Array.isArray(q)?I=q[w]:I=q,L.copy(d.viewport),O.copy(d.scissor),B=d.scissorTest}else L.copy(Ce).multiplyScalar(K).floor(),O.copy(Oe).multiplyScalar(K).floor(),B=je;if(Fe.bindFramebuffer(k.FRAMEBUFFER,I)&&P&&Fe.drawBuffers(d,I),Fe.viewport(L),Fe.scissor(O),Fe.setScissorTest(B),F){let G=Ne.get(d.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+_,G.__webglTexture,w)}else if(H){let G=Ne.get(d.texture),X=_||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.__webglTexture,w||0,X)}T=-1},this.readRenderTargetPixels=function(d,_,w,P,I,F,H){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=Ne.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&H!==void 0&&(j=j[H]),j){Fe.bindFramebuffer(k.FRAMEBUFFER,j);try{let G=d.texture,X=G.format,q=G.type;if(!tt.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=d.width-P&&w>=0&&w<=d.height-I&&k.readPixels(_,w,P,I,Le.convert(X),Le.convert(q),F)}finally{let G=U!==null?Ne.get(U).__webglFramebuffer:null;Fe.bindFramebuffer(k.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(d,_,w,P,I,F,H){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=Ne.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&H!==void 0&&(j=j[H]),j){let G=d.texture,X=G.format,q=G.type;if(!tt.textureFormatReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(_>=0&&_<=d.width-P&&w>=0&&w<=d.height-I){Fe.bindFramebuffer(k.FRAMEBUFFER,j);let $=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$),k.bufferData(k.PIXEL_PACK_BUFFER,F.byteLength,k.STREAM_READ),k.readPixels(_,w,P,I,Le.convert(X),Le.convert(q),0);let ae=U!==null?Ne.get(U).__webglFramebuffer:null;Fe.bindFramebuffer(k.FRAMEBUFFER,ae);let ce=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await W0(k,ce,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,F),k.deleteBuffer($),k.deleteSync(ce),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,_=null,w=0){d.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),_=arguments[0]||null,d=arguments[1]);let P=Math.pow(2,-w),I=Math.floor(d.image.width*P),F=Math.floor(d.image.height*P),H=_!==null?_.x:0,j=_!==null?_.y:0;N.setTexture2D(d,0),k.copyTexSubImage2D(k.TEXTURE_2D,w,0,0,H,j,I,F),Fe.unbindTexture()},this.copyTextureToTexture=function(d,_,w=null,P=null,I=0){d.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),P=arguments[0]||null,d=arguments[1],_=arguments[2],I=arguments[3]||0,w=null);let F,H,j,G,X,q,$,ae,ce,ge=d.isCompressedTexture?d.mipmaps[I]:d.image;w!==null?(F=w.max.x-w.min.x,H=w.max.y-w.min.y,j=w.isBox3?w.max.z-w.min.z:1,G=w.min.x,X=w.min.y,q=w.isBox3?w.min.z:0):(F=ge.width,H=ge.height,j=ge.depth||1,G=0,X=0,q=0),P!==null?($=P.x,ae=P.y,ce=P.z):($=0,ae=0,ce=0);let me=Le.convert(_.format),he=Le.convert(_.type),oe;_.isData3DTexture?(N.setTexture3D(_,0),oe=k.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(N.setTexture2DArray(_,0),oe=k.TEXTURE_2D_ARRAY):(N.setTexture2D(_,0),oe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,_.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,_.unpackAlignment);let Ke=k.getParameter(k.UNPACK_ROW_LENGTH),Ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tt=k.getParameter(k.UNPACK_SKIP_PIXELS),lt=k.getParameter(k.UNPACK_SKIP_ROWS),ze=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ge.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,G),k.pixelStorei(k.UNPACK_SKIP_ROWS,X),k.pixelStorei(k.UNPACK_SKIP_IMAGES,q);let At=d.isDataArrayTexture||d.isData3DTexture,Je=_.isDataArrayTexture||_.isData3DTexture;if(d.isRenderTargetTexture||d.isDepthTexture){let mt=Ne.get(d),rt=Ne.get(_),qe=Ne.get(mt.__renderTarget),Jt=Ne.get(rt.__renderTarget);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,qe.__webglFramebuffer),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Sn=0;Sn<j;Sn++)At&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(d).__webglTexture,I,q+Sn),d.isDepthTexture?(Je&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(_).__webglTexture,I,ce+Sn),k.blitFramebuffer(G,X,F,H,$,ae,F,H,k.DEPTH_BUFFER_BIT,k.NEAREST)):Je?k.copyTexSubImage3D(oe,I,$,ae,ce+Sn,G,X,F,H):k.copyTexSubImage2D(oe,I,$,ae,ce+Sn,G,X,F,H);Fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Je?d.isDataTexture||d.isData3DTexture?k.texSubImage3D(oe,I,$,ae,ce,F,H,j,me,he,ge.data):_.isCompressedArrayTexture?k.compressedTexSubImage3D(oe,I,$,ae,ce,F,H,j,me,ge.data):k.texSubImage3D(oe,I,$,ae,ce,F,H,j,me,he,ge):d.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,I,$,ae,F,H,me,he,ge.data):d.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,I,$,ae,ge.width,ge.height,me,ge.data):k.texSubImage2D(k.TEXTURE_2D,I,$,ae,F,H,me,he,ge);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,lt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ze),I===0&&_.generateMipmaps&&k.generateMipmap(oe),Fe.unbindTexture()},this.copyTextureToTexture3D=function(d,_,w=null,P=null,I=0){return d.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),w=arguments[0]||null,P=arguments[1]||null,d=arguments[2],_=arguments[3],I=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,_,w,P,I)},this.initRenderTarget=function(d){Ne.get(d).__webglFramebuffer===void 0&&N.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?N.setTextureCube(d,0):d.isData3DTexture?N.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?N.setTexture2DArray(d,0):N.setTexture2D(d,0),Fe.unbindTexture()},this.resetState=function(){E=0,C=0,U=null,Fe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var sc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wo=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},To=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new D,Ao=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var op=new D,ap=new nt,cp=new nt,Vy=new D,lp=new we,Ua=new D,Ql=new Nt,hp=new we,$l=new ei,rc=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ld,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ot),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),e.ray.intersectsSphere(Ql)!==!1&&(hp.copy(s).invert(),$l.copy(e.ray).applyMatrix4(hp),!(this.boundingBox!==null&&$l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ap.fromBufferAttribute(s.attributes.skinIndex,e),cp.fromBufferAttribute(s.attributes.skinWeight,e),op.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=cp.getComponent(r);if(o!==0){let a=ap.getComponent(r);lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vy.copy(op).applyMatrix4(lp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},is=class extends en{constructor(e=null,t=1,n=1,s,r,o,a,c,l=mn,h=mn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},up=new we,Gy=new we,oc=class i{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Gy;up.multiplyMatrices(a,t[r]),up.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new is(t,e,e,pn,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Eo),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Is=class extends ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new we,fp=new we,Na=[],dp=new ot,Wy=new we,oo=new Qe,ao=new Nt,ac=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),dp.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(dp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ao.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),fp.multiplyMatrices(n,cr),oo.matrixWorld=fp,oo.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){let c=Na[o];c.instanceId=r,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(s*this.count),s,this.count,Ns,rn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function eh(i,e){return i-e}function Xy(i,e){return i.z-e.z}function qy(i,e){return e.z-i.z}var su=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},wn=new we,Yy=new Te(1,1,1),th=new wr,Fa=new ot,Ts=new Nt,co=new D,pp=new D,jy=new D,nh=new su,fn=new Qe,Oa=[];function Zy(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function As(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var cc=class extends Qe{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new Ft,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new is(t,e,e,pn,rn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new is(t,e,e,Ac,ss);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new is(t,e,e,pn,rn);n.colorSpace=Ye.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new ut(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,wn),this.getBoundingBoxAt(r,Fa).applyMatrix4(wn),e.union(Fa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,wn),this.getBoundingSphereAt(r,Ts).applyMatrix4(wn),e.union(Ts)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(eh),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;wn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Yy.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(eh),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);Zy(u,f,c);let m=u.itemSize;for(let x=u.count,b=l;x<b;x++){let g=c+x;for(let p=0;p<m;p++)f.setComponent(g,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*m,l*m)}if(s){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,m=u;f<m;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,m=r.index,x=m.array,b=e-u;for(let g=h;g<h+f;g++)x[g]=x[g]+b;m.array.copyWithin(t,h,h+f),m.addUpdateRange(t,f),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let m in f){let x=f[m],{array:b,itemSize:g}=x;b.copyWithin(e*g,h*g,(h+u)*g),x.addUpdateRange(e*g,u*g)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new ot,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(co.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Nt;this.getBoundingBoxAt(e,Fa),Fa.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let u=l;o&&(u=o.getX(u)),co.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(co))}r.radius=Math.sqrt(c),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){let n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){let n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(eh);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);As(this._multiDrawCounts,s),As(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),As(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),As(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),As(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ft,this._initializeGeometry(r));let o=this.geometry;r.index&&As(r.index.array,o.index.array);for(let a in r.attributes)As(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;fn.material=this.material,fn.geometry.index=o.index,fn.geometry.attributes=o.attributes,fn.geometry.boundingBox===null&&(fn.geometry.boundingBox=new ot),fn.geometry.boundingSphere===null&&(fn.geometry.boundingSphere=new Nt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=s[l];fn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,fn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,fn.geometry.boundingBox),this.getBoundingSphereAt(l,fn.geometry.boundingSphere),fn.raycast(e,Oa);for(let u=0,f=Oa.length;u<f;u++){let m=Oa[u];m.object=this,m.batchId=a,t.push(m)}Oa.length=0}fn.material=null,fn.geometry.index=null,fn.geometry.attributes={},fn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,m=this._indirectTexture,x=m.image.data;f&&(wn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),th.setFromProjectionMatrix(wn,e.coordinateSystem));let b=0;if(this.sortObjects){wn.copy(this.matrixWorld).invert(),co.setFromMatrixPosition(n.matrixWorld).applyMatrix4(wn),pp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(wn);for(let y=0,M=c.length;y<M;y++)if(c[y].visible&&c[y].active){let v=c[y].geometryIndex;this.getMatrixAt(y,wn),this.getBoundingSphereAt(v,Ts).applyMatrix4(wn);let R=!1;if(f&&(R=!th.intersectsSphere(Ts)),!R){let E=u[v],C=jy.subVectors(Ts.center,co).dot(pp);nh.push(E.start,E.count,C,y)}}let g=nh.list,p=this.customSort;p===null?g.sort(r.transparent?qy:Xy):p.call(this,g,n);for(let y=0,M=g.length;y<M;y++){let v=g[y];l[b]=v.start*a,h[b]=v.count,x[b]=v.index,b++}nh.reset()}else for(let g=0,p=c.length;g<p;g++)if(c[g].visible&&c[g].active){let y=c[g].geometryIndex,M=!1;if(f&&(this.getMatrixAt(g,wn),this.getBoundingSphereAt(y,Ts).applyMatrix4(wn),M=!th.intersectsSphere(Ts)),!M){let v=u[y];l[b]=v.start*a,h[b]=v.count,x[b]=g,b++}}m.needsUpdate=!0,this._multiDrawCount=b,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}},Ro=class extends Fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lc=new D,hc=new D,mp=new we,lo=new ei,Ba=new Nt,ih=new D,gp=new D,Ar=class extends Dt{constructor(e=new Ft,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lc.fromBufferAttribute(t,s-1),hc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lc.distanceTo(hc);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;mp.copy(s).invert(),lo.copy(e.ray).applyMatrix4(mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let b=m,g=x-1;b<g;b+=l){let p=h.getX(b),y=h.getX(b+1),M=za(this,e,lo,c,p,y);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(x-1),g=h.getX(m),p=za(this,e,lo,c,b,g);p&&t.push(p)}}else{let m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let b=m,g=x-1;b<g;b+=l){let p=za(this,e,lo,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){let b=za(this,e,lo,c,x-1,m);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(lc.fromBufferAttribute(o,s),hc.fromBufferAttribute(o,r),t.distanceSqToSegment(lc,hc,ih,gp)>n)return;ih.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ih);if(!(c<e.near||c>e.far))return{distance:c,point:gp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var xp=new D,bp=new D,uc=class extends Ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xp.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xp.distanceTo(bp);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fc=class extends Ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Co=class extends Fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_p=new we,ru=new ei,ka=new Nt,Ha=new D,Ds=class extends Dt{constructor(e=new Ft,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;_p.copy(s).invert(),ru.copy(e.ray).applyMatrix4(_p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let x=f,b=m;x<b;x++){let g=l.getX(x);Ha.fromBufferAttribute(u,g),vp(Ha,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,b=m;x<b;x++)Ha.fromBufferAttribute(u,x),vp(Ha,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vp(i,e,t,n,s,r,o){let a=ru.distanceSqToPoint(i);if(a<t){let c=new D;ru.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Er=class extends en{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dc=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,m=[],x=[],b=[],g=[];for(let p=0;p<=n;p++){let y=[],M=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),g.push(E+v,1-M),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let M=h[p][y+1],v=h[p][y],R=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&m.push(M,v,E),(p!==n-1||c<Math.PI)&&m.push(v,R,E)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pc=class extends xt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},xi=class extends Fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends xi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ky(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function yp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Qp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ou=class extends os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hd,endingEnd:hd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ud:r=e,a=2*t-n;break;case fd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ud:o=e,c=2*n-t;break;case fd:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),b=x*x,g=b*x,p=-f*g+2*f*b-f*x,y=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*x+1,M=(-1-m)*g+(1.5+m)*b+.5*x,v=m*g-m*b;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+M*o[c+R]+v*o[u+R];return r}},au=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},cu=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ou(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ky(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let x=0;x!==n;++x){let b=t[u+x];if(b!==t[f+x]||b!==t[m+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=yr;var as=class extends kn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=vr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends kn{};mc.prototype.ValueTypeName="color";var Oi=class extends kn{};Oi.prototype.ValueTypeName="number";var lu=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)An.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bi=class extends kn{InterpolantFactoryMethodLinear(e){return new lu(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends kn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=vr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends kn{};zi.prototype.ValueTypeName="vector";var gc=class{constructor(e="",t=-1,n=[],s=g0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($y(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Jy(c);c=yp(c,1,h),l=yp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Oi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,m,x,b){if(m.length!==0){let g=[],p=[];Qp(m,g,p,x),g.length!==0&&b.push(new u(f,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let b=0;b<f[x].morphTargets.length;b++)m[f[x].morphTargets[b]]=-1;for(let b in m){let g=[],p=[];for(let y=0;y!==f[x].morphTargets.length;++y){let M=f[x];g.push(M.time),p.push(M.morphTarget===b?1:0)}s.push(new Oi(".morphTargetInfluence["+b+"]",g,p))}c=m.length*o}else{let m=".bones["+t[u].name+"]";n(zi,m+".position",f,"pos",s),n(Bi,m+".quaternion",f,"rot",s),n(zi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Qy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return mc;case"quaternion":return Bi;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $y(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qy(i.type);if(i.times===void 0){let t=[],n=[];Qp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},hu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},eM=new hu,bi=class{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},uu=class extends Error{constructor(e,t){super(e),this.response=t}},Rr=class extends bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ii[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,x=m!==0,b=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{b+=v.byteLength;let R=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:m});for(let E=0,C=h.length;E<C;E++){let U=h[E];U.onProgress&&U.onProgress(R)}p.enqueue(v),y()}},M=>{p.error(M)})}}});return new Response(g)}else throw new uu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{ts.add(e,l);let h=Ii[e];delete Ii[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var fu=class extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=yo("img");function c(){h(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var xc=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new is,a=new Rr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Kn,o.wrapT=l.wrapT!==void 0?l.wrapT:Kn,o.magFilter=l.magFilter!==void 0?l.magFilter:It,o.minFilter=l.minFilter!==void 0?l.minFilter:It,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Jn),l.mipmapCount===1&&(o.minFilter=It),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},bc=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=new en,o=new fu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Po=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var sh=new we,Mp=new D,Sp=new D,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},du=class extends Io{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_c=class extends Po{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wp=new we,ho=new D,rh=new D,pu=class extends Io{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),rh.copy(n.position),rh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rh),n.updateMatrixWorld(),s.makeTranslation(-ho.x,-ho.y,-ho.z),wp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wp)}},vc=class extends Po{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},mu=class extends Io{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yc=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new mu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ls=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Mc=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ts.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(e,c),r.manager.itemStart(e)}};var Cr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tp(){return performance.now()}var Du="\\[\\]\\.:\\/",tM=new RegExp("["+Du+"]","g"),Lu="[^"+Du+"]",nM="[^"+Du.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",Lu),sM=/(WCOD+)?/.source.replace("WCOD",nM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),aM=new RegExp("^"+iM+sM+rM+oM+"$"),cM=["material","materials","bones","map"],gu=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){let t=aM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=gu;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iw=new Float32Array(1);var Ap=new we,Sc=class{constructor(e,t,n=0,s=1/0){this.ray=new ei(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(e,t=!0,n=[]){return xu(e,this,n,t),n.sort(Ep),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xu(e[s],this,n,t);return n.sort(Ep),n}};function Ep(i,e){return i.distance-e.distance}function xu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)xu(r[o],e,t,!0)}}var ki=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Rp=new D,Ga=new D,En=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rp.subVectors(e,this.start),Ga.subVectors(this.end,this.start);let n=Ga.dot(Ga),r=Ga.dot(Rp)/n;return t&&(r=Gt(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var wc=class extends Fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Nu(i,e){if(e===Hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Lo||e===Ec){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Lo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Pc=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ls.extractUrlBase(e);o=ls.resolveURL(l,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Rr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===im){try{o[$e.KHR_BINARY_GLTF]=new sf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new uf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new ku;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new rf(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new of;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new af;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zu=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vc(h),l.distance=u;break;case"spot":l=new _c(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ku=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return kt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}},Hu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Qu=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$u=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ef=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tf=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,f,s.mode,s.filter),m})})}else return null}},nf=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,m=[];for(let x of u){let b=new we,g=new D,p=new An,y=new D(1,1,1),M=new ac(x.geometry,x.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,b.compose(g,p,y));for(let v in c)if(v==="_COLOR_0"){let R=c[v];M.instanceColor=new Is(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&x.geometry.setAttribute(v,c[v]);Dt.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),m.push(M)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},im="glTF",Uo=12,$p={JSON:1313821514,BIN:5130562},sf=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===$p.JSON){let l=new Uint8Array(e,Uo+o,a);this.content=n.decode(l)}else if(c===$p.BIN){let l=Uo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=lf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=lf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],m=Ir[f.componentType];l[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(m){for(let x in m.attributes){let b=m.attributes[x],g=c[x];g!==void 0&&(b.normalized=g)}u(m)},a,l,jt,f)})})}},of=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},af=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Ic=class extends os{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,m=f*u,x=e*l,b=x-l,g=-2*m+3*f,p=m-f,y=1-g,M=p-f+u;for(let v=0;v!==a;v++){let R=o[b+v+a],E=o[b+v+c]*h,C=o[x+v+a],U=o[x+v]*h;r[v]=y*R+M*E+g*C+p*U}return r}},hM=new An,cf=class extends Ic{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hM.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},em={9728:mn,9729:It,9984:Su,9985:po,9986:lr,9987:Jn},tm={33071:Kn,33648:_o,10497:pi},Fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uM={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},Ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function Fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function pM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mM(i){let e,t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bu(t.attributes):e=i.indices+":"+Bu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bu(i.targets[n]);return e}function Bu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xM=new we,uf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new bc(this.options.manager):this.textureLoader=new Mc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Fs(r,a,s),Hi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ls.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fu[s.type],a=Ir[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ut(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fu[s.type],l=Ir[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,b,g;if(m&&m!==u){let p=Math.floor(f/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(y);M||(b=new l(a,p*m,s.count*m/h),M=new To(b,m/h),t.cache.add(y,M)),g=new Ao(M,c,f%m/h,x)}else a===null?b=new l(s.count*c):b=new l(a,f,s.count*c),g=new ut(b,c,x);if(s.sparse!==void 0){let p=Fu.SCALAR,y=Ir[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,R=new y(o[1],M,s.sparse.count*p),E=new l(o[2],v,s.sparse.count*c);a!==null&&(g=new ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,U=R.length;C<U;C++){let T=R[C];if(g.setX(T,E[C*c]),c>=2&&g.setY(T,E[C*c+1]),c>=3&&g.setZ(T,E[C*c+2]),c>=4&&g.setW(T,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=em[f.magFilter]||It,h.minFilter=em[f.minFilter]||Jn,h.wrapS=tm[f.wrapS]||pi,h.wrapT=tm[f.wrapT]||pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==mn&&h.minFilter!==It,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(b){let g=new en(b);g.needsUpdate=!0,f(g)}),t.load(ls.resolveURL(u,r.path),x,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Hi(u,o),u.userData.mimeType=o.mimeType||gM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Co,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ro,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=s[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);let h=r.alphaMode||Ou.OPAQUE;if(h===Ou.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ou.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kt){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&o!==kt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Fs(s,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return nm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=mM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=nm(new Ft,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?fM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,x=h.length;m<x;m++){let b=h[m],g=o[m],p,y=l[m];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new rc(b,y):new Qe(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Hn.TRIANGLE_STRIP?p.geometry=Nu(p.geometry,Ec):g.mode===Hn.TRIANGLE_FAN&&(p.geometry=Nu(p.geometry,Lo));else if(g.mode===Hn.LINES)p=new uc(b,y);else if(g.mode===Hn.LINE_STRIP)p=new Ar(b,y);else if(g.mode===Hn.LINE_LOOP)p=new fc(b,y);else if(g.mode===Hn.POINTS)p=new Ds(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&pM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),g.extensions&&Fs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let m=0,x=u.length;m<x;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&Fs(s,u[0],r),u[0];let f=new Tn;r.extensions&&Fs(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,x=u.length;m<x;m++)f.add(u[m]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Ot.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new we;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oc(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let m=s.channels[u],x=s.samplers[m.sampler],b=m.target,g=b.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,y=s.parameters!==void 0?s.parameters[x.output]:x.output;b.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(x),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],m=u[1],x=u[2],b=u[3],g=u[4],p=[];for(let y=0,M=f.length;y<M;y++){let v=f[y],R=m[y],E=x[y],C=b[y],U=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let T=n._createAnimationTracks(v,R,E,C,U);if(T)for(let S=0;S<T.length;S++)p.push(T[S])}return new gc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,xM)});for(let m=0,x=u.length;m<x;m++)h.add(u[m]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Eo:l.length>1?h=new Tn:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hi(h,r),r.extensions&&Fs(n,h,r),r.matrix!==void 0){let u=new we;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Tn;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&Fs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,m]of s.associations)(f instanceof Fn||f instanceof en)&&u.set(f,m);return h.traverse(f=>{let m=s.associations.get(f);m!=null&&u.set(f,m)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];hs[r.path]===hs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(hs[r.path]){case hs.weights:l=Oi;break;case hs.rotation:l=Bi;break;case hs.position:case hs.scale:l=zi;break;default:n.itemSize===1?l=Oi:l=zi;break}let h=s.interpolation!==void 0?uM[s.interpolation]:yr,u=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let x=new l(c[f]+"."+hs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Bi?cf:Ic;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bM(i,e,t){let n=e.attributes,s=new ot;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=hf(Ir[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){let b=hf(Ir[f.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Nt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function nm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=lf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ye.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Hi(i,e),bM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(i,e.targets,t):i})}var Vn=Uint8Array,Dr=Uint16Array,_M=Int32Array,sm=new Vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rm=new Vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vM=new Vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),om=function(i,e){for(var t=new Dr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new _M(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},am=om(sm,2),cm=am.b,yM=am.r;cm[28]=258,yM[258]=28;var lm=om(rm,0),MM=lm.b,lw=lm.r,pf=new Dr(32768);for(ft=0;ft<32768;++ft)Vi=(ft&43690)>>1|(ft&21845)<<1,Vi=(Vi&52428)>>2|(Vi&13107)<<2,Vi=(Vi&61680)>>4|(Vi&3855)<<4,pf[ft]=((Vi&65280)>>8|(Vi&255)<<8)>>1;var Vi,ft,No=(function(i,e,t){for(var n=i.length,s=0,r=new Dr(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Dr(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Dr(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[pf[u]>>c]=l}else for(a=new Dr(n),s=0;s<n;++s)i[s]&&(a[s]=pf[o[i[s]-1]++]>>15-i[s]);return a}),Fo=new Vn(288);for(ft=0;ft<144;++ft)Fo[ft]=8;var ft;for(ft=144;ft<256;++ft)Fo[ft]=9;var ft;for(ft=256;ft<280;++ft)Fo[ft]=7;var ft;for(ft=280;ft<288;++ft)Fo[ft]=8;var ft,hm=new Vn(32);for(ft=0;ft<32;++ft)hm[ft]=5;var ft;var SM=No(Fo,9,1);var wM=No(hm,5,1),ff=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},ni=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},df=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},TM=function(i){return(i+7)/8|0},AM=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Vn(i.subarray(e,t))};var EM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ii=function(i,e,t){var n=new Error(e||EM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ii),!t)throw n;return n},RM=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Vn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Vn(s*3));var l=function(pt){var Ze=t.length;if(pt>Ze){var _t=new Vn(Math.max(Ze*2,pt));_t.set(t),t=_t}},h=e.f||0,u=e.p||0,f=e.b||0,m=e.l,x=e.d,b=e.m,g=e.n,p=s*8;do{if(!m){h=ni(i,u,1);var y=ni(i,u+1,3);if(u+=3,y)if(y==1)m=SM,x=wM,b=9,g=5;else if(y==2){var E=ni(i,u,31)+257,C=ni(i,u+10,15)+4,U=E+ni(i,u+5,31)+1;u+=14;for(var T=new Vn(U),S=new Vn(19),L=0;L<C;++L)S[vM[L]]=ni(i,u+L*3,7);u+=C*3;for(var O=ff(S),B=(1<<O)-1,V=No(S,O,1),L=0;L<U;){var J=V[ni(i,u,B)];u+=J&15;var M=J>>4;if(M<16)T[L++]=M;else{var Y=0,re=0;for(M==16?(re=3+ni(i,u,3),u+=2,Y=T[L-1]):M==17?(re=3+ni(i,u,7),u+=3):M==18&&(re=11+ni(i,u,127),u+=7);re--;)T[L++]=Y}}var K=T.subarray(0,E),ue=T.subarray(E);b=ff(K),g=ff(ue),m=No(K,b,1),x=No(ue,g,1)}else ii(1);else{var M=TM(u)+4,v=i[M-4]|i[M-3]<<8,R=M+v;if(R>s){c&&ii(0);break}a&&l(f+v),t.set(i.subarray(M,R),f),e.b=f+=v,e.p=u=R*8,e.f=h;continue}if(u>p){c&&ii(0);break}}a&&l(f+131072);for(var xe=(1<<b)-1,Ce=(1<<g)-1,Oe=u;;Oe=u){var Y=m[df(i,u)&xe],je=Y>>4;if(u+=Y&15,u>p){c&&ii(0);break}if(Y||ii(2),je<256)t[f++]=je;else if(je==256){Oe=u,m=null;break}else{var ee=je-254;if(je>264){var L=je-257,le=sm[L];ee=ni(i,u,(1<<le)-1)+cm[L],u+=le}var de=x[df(i,u)&Ce],pe=de>>4;de||ii(3),u+=de&15;var ue=MM[pe];if(pe>3){var le=rm[pe];ue+=df(i,u)&(1<<le)-1,u+=le}if(u>p){c&&ii(0);break}a&&l(f+131072);var De=f+ee;if(f<ue){var Be=r-ue,Xe=Math.min(ue,De);for(Be+f<0&&ii(3);f<Xe;++f)t[f]=n[Be+f]}for(;f<De;++f)t[f]=t[f-ue]}}e.l=m,e.p=Oe,e.b=f,e.f=h,m&&(h=1,e.m=b,e.d=x,e.n=g)}while(!h);return f!=t.length&&o?AM(t,0,f):t.subarray(0,f)};var CM=new Vn(0);var PM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&ii(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&ii(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Oo(i,e){return RM(i.subarray(PM(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var IM=typeof TextDecoder<"u"&&new TextDecoder,DM=0;try{IM.decode(CM,{stream:!0}),DM=1}catch{}var Dc=class extends xc{constructor(e){super(e),this.type=Ht}parse(e){let T=Math.pow(2.7182818,2.2);function S(d,_){let w=0;for(let I=0;I<65536;++I)(I==0||d[I>>3]&1<<(I&7))&&(_[w++]=I);let P=w-1;for(;w<65536;)_[w++]=0;return P}function L(d){for(let _=0;_<16384;_++)d[_]={},d[_].len=0,d[_].lit=0,d[_].p=null}let O={l:0,c:0,lc:0};function B(d,_,w,P,I){for(;w<d;)_=_<<8|Ae(P,I),w+=8;w-=d,O.l=_>>w&(1<<d)-1,O.c=_,O.lc=w}let V=new Array(59);function J(d){for(let w=0;w<=58;++w)V[w]=0;for(let w=0;w<65537;++w)V[d[w]]+=1;let _=0;for(let w=58;w>0;--w){let P=_+V[w]>>1;V[w]=_,_=P}for(let w=0;w<65537;++w){let P=d[w];P>0&&(d[w]=P|V[P]++<<6)}}function Y(d,_,w,P,I,F){let H=_,j=0,G=0;for(;P<=I;P++){if(H.value-_.value>w)return!1;B(6,j,G,d,H);let X=O.l;if(j=O.c,G=O.lc,F[P]=X,X==63){if(H.value-_.value>w)throw new Error("Something wrong with hufUnpackEncTable");B(8,j,G,d,H);let q=O.l+6;if(j=O.c,G=O.lc,P+q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)F[P++]=0;P--}else if(X>=59){let q=X-59+2;if(P+q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)F[P++]=0;P--}}J(F)}function re(d){return d&63}function K(d){return d>>6}function ue(d,_,w,P){for(;_<=w;_++){let I=K(d[_]),F=re(d[_]);if(I>>F)throw new Error("Invalid table entry");if(F>14){let H=P[I>>F-14];if(H.len)throw new Error("Invalid table entry");if(H.lit++,H.p){let j=H.p;H.p=new Array(H.lit);for(let G=0;G<H.lit-1;++G)H.p[G]=j[G]}else H.p=new Array(1);H.p[H.lit-1]=_}else if(F){let H=0;for(let j=1<<14-F;j>0;j--){let G=P[(I<<14-F)+H];if(G.len||G.p)throw new Error("Invalid table entry");G.len=F,G.lit=_,H++}}}return!0}let xe={c:0,lc:0};function Ce(d,_,w,P){d=d<<8|Ae(w,P),_+=8,xe.c=d,xe.lc=_}let Oe={c:0,lc:0};function je(d,_,w,P,I,F,H,j,G){if(d==_){P<8&&(Ce(w,P,I,F),w=xe.c,P=xe.lc),P-=8;let X=w>>P;if(X=new Uint8Array([X])[0],j.value+X>G)return!1;let q=H[j.value-1];for(;X-- >0;)H[j.value++]=q}else if(j.value<G)H[j.value++]=d;else return!1;Oe.c=w,Oe.lc=P}function ee(d){return d&65535}function le(d){let _=ee(d);return _>32767?_-65536:_}let de={a:0,b:0};function pe(d,_){let w=le(d),I=le(_),F=w+(I&1)+(I>>1),H=F,j=F-I;de.a=H,de.b=j}function De(d,_){let w=ee(d),P=ee(_),I=w-(P>>1)&65535,F=P+I-32768&65535;de.a=F,de.b=I}function Be(d,_,w,P,I,F,H){let j=H<16384,G=w>I?I:w,X=1,q,$;for(;X<=G;)X<<=1;for(X>>=1,q=X,X>>=1;X>=1;){$=0;let ae=$+F*(I-q),ce=F*X,ge=F*q,me=P*X,he=P*q,oe,Ke,Ue,Tt;for(;$<=ae;$+=ge){let lt=$,ze=$+P*(w-q);for(;lt<=ze;lt+=he){let At=lt+me,Je=lt+ce,mt=Je+me;j?(pe(d[lt+_],d[Je+_]),oe=de.a,Ue=de.b,pe(d[At+_],d[mt+_]),Ke=de.a,Tt=de.b,pe(oe,Ke),d[lt+_]=de.a,d[At+_]=de.b,pe(Ue,Tt),d[Je+_]=de.a,d[mt+_]=de.b):(De(d[lt+_],d[Je+_]),oe=de.a,Ue=de.b,De(d[At+_],d[mt+_]),Ke=de.a,Tt=de.b,De(oe,Ke),d[lt+_]=de.a,d[At+_]=de.b,De(Ue,Tt),d[Je+_]=de.a,d[mt+_]=de.b)}if(w&X){let At=lt+ce;j?pe(d[lt+_],d[At+_]):De(d[lt+_],d[At+_]),oe=de.a,d[At+_]=de.b,d[lt+_]=oe}}if(I&X){let lt=$,ze=$+P*(w-q);for(;lt<=ze;lt+=he){let At=lt+me;j?pe(d[lt+_],d[At+_]):De(d[lt+_],d[At+_]),oe=de.a,d[At+_]=de.b,d[lt+_]=oe}}q=X,X>>=1}return $}function Xe(d,_,w,P,I,F,H,j,G){let X=0,q=0,$=H,ae=Math.trunc(P.value+(I+7)/8);for(;P.value<ae;)for(Ce(X,q,w,P),X=xe.c,q=xe.lc;q>=14;){let ge=X>>q-14&16383,me=_[ge];if(me.len)q-=me.len,je(me.lit,F,X,q,w,P,j,G,$),X=Oe.c,q=Oe.lc;else{if(!me.p)throw new Error("hufDecode issues");let he;for(he=0;he<me.lit;he++){let oe=re(d[me.p[he]]);for(;q<oe&&P.value<ae;)Ce(X,q,w,P),X=xe.c,q=xe.lc;if(q>=oe&&K(d[me.p[he]])==(X>>q-oe&(1<<oe)-1)){q-=oe,je(me.p[he],F,X,q,w,P,j,G,$),X=Oe.c,q=Oe.lc;break}}if(he==me.lit)throw new Error("hufDecode issues")}}let ce=8-I&7;for(X>>=ce,q-=ce;q>0;){let ge=_[X<<14-q&16383];if(ge.len)q-=ge.len,je(ge.lit,F,X,q,w,P,j,G,$),X=Oe.c,q=Oe.lc;else throw new Error("hufDecode issues")}return!0}function pt(d,_,w,P,I,F){let H={value:0},j=w.value,G=Ie(_,w),X=Ie(_,w);w.value+=4;let q=Ie(_,w);if(w.value+=4,G<0||G>=65537||X<0||X>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let $=new Array(65537),ae=new Array(16384);L(ae);let ce=P-(w.value-j);if(Y(d,w,ce,G,X,$),q>8*(P-(w.value-j)))throw new Error("Something wrong with hufUncompress");ue($,G,X,ae),Xe($,ae,d,w,q,X,F,I,H)}function Ze(d,_,w){for(let P=0;P<w;++P)_[P]=d[_[P]]}function _t(d){for(let _=1;_<d.length;_++){let w=d[_-1]+d[_]-128;d[_]=w}}function k(d,_){let w=0,P=Math.floor((d.length+1)/2),I=0,F=d.length-1;for(;!(I>F||(_[I++]=d[w++],I>F));)_[I++]=d[P++]}function gn(d){let _=d.byteLength,w=new Array,P=0,I=new DataView(d);for(;_>0;){let F=I.getInt8(P++);if(F<0){let H=-F;_-=H+1;for(let j=0;j<H;j++)w.push(I.getUint8(P++))}else{let H=F;_-=2;let j=I.getUint8(P++);for(let G=0;G<H+1;G++)w.push(j)}}return w}function et(d,_,w,P,I,F){let H=new DataView(F.buffer),j=w[d.idx[0]].width,G=w[d.idx[0]].height,X=3,q=Math.floor(j/8),$=Math.ceil(j/8),ae=Math.ceil(G/8),ce=j-($-1)*8,ge=G-(ae-1)*8,me={value:0},he=new Array(X),oe=new Array(X),Ke=new Array(X),Ue=new Array(X),Tt=new Array(X);for(let ze=0;ze<X;++ze)Tt[ze]=_[d.idx[ze]],he[ze]=ze<1?0:he[ze-1]+$*ae,oe[ze]=new Float32Array(64),Ke[ze]=new Uint16Array(64),Ue[ze]=new Uint16Array($*64);for(let ze=0;ze<ae;++ze){let At=8;ze==ae-1&&(At=ge);let Je=8;for(let rt=0;rt<$;++rt){rt==$-1&&(Je=ce);for(let qe=0;qe<X;++qe)Ke[qe].fill(0),Ke[qe][0]=I[he[qe]++],tt(me,P,Ke[qe]),Fe(Ke[qe],oe[qe]),vt(oe[qe]);X==3&&Ne(oe);for(let qe=0;qe<X;++qe)N(oe[qe],Ue[qe],rt*64)}let mt=0;for(let rt=0;rt<X;++rt){let qe=w[d.idx[rt]].type;for(let Jt=8*ze;Jt<8*ze+At;++Jt){mt=Tt[rt][Jt];for(let Sn=0;Sn<q;++Sn){let Dn=Sn*64+(Jt&7)*8;H.setUint16(mt+0*qe,Ue[rt][Dn+0],!0),H.setUint16(mt+2*qe,Ue[rt][Dn+1],!0),H.setUint16(mt+4*qe,Ue[rt][Dn+2],!0),H.setUint16(mt+6*qe,Ue[rt][Dn+3],!0),H.setUint16(mt+8*qe,Ue[rt][Dn+4],!0),H.setUint16(mt+10*qe,Ue[rt][Dn+5],!0),H.setUint16(mt+12*qe,Ue[rt][Dn+6],!0),H.setUint16(mt+14*qe,Ue[rt][Dn+7],!0),mt+=16*qe}}if(q!=$)for(let Jt=8*ze;Jt<8*ze+At;++Jt){let Sn=Tt[rt][Jt]+8*q*2*qe,Dn=q*64+(Jt&7)*8;for(let da=0;da<Je;++da)H.setUint16(Sn+da*2*qe,Ue[rt][Dn+da],!0)}}}let lt=new Uint16Array(j);H=new DataView(F.buffer);for(let ze=0;ze<X;++ze){w[d.idx[ze]].decoded=!0;let At=w[d.idx[ze]].type;if(w[ze].type==2)for(let Je=0;Je<G;++Je){let mt=Tt[ze][Je];for(let rt=0;rt<j;++rt)lt[rt]=H.getUint16(mt+rt*2*At,!0);for(let rt=0;rt<j;++rt)H.setFloat32(mt+rt*2*At,Z(lt[rt]),!0)}}}function tt(d,_,w){let P,I=1;for(;I<64;)P=_[d.value],P==65280?I=64:P>>8==255?I+=P&255:(w[I]=P,I++),d.value++}function Fe(d,_){_[0]=Z(d[0]),_[1]=Z(d[1]),_[2]=Z(d[5]),_[3]=Z(d[6]),_[4]=Z(d[14]),_[5]=Z(d[15]),_[6]=Z(d[27]),_[7]=Z(d[28]),_[8]=Z(d[2]),_[9]=Z(d[4]),_[10]=Z(d[7]),_[11]=Z(d[13]),_[12]=Z(d[16]),_[13]=Z(d[26]),_[14]=Z(d[29]),_[15]=Z(d[42]),_[16]=Z(d[3]),_[17]=Z(d[8]),_[18]=Z(d[12]),_[19]=Z(d[17]),_[20]=Z(d[25]),_[21]=Z(d[30]),_[22]=Z(d[41]),_[23]=Z(d[43]),_[24]=Z(d[9]),_[25]=Z(d[11]),_[26]=Z(d[18]),_[27]=Z(d[24]),_[28]=Z(d[31]),_[29]=Z(d[40]),_[30]=Z(d[44]),_[31]=Z(d[53]),_[32]=Z(d[10]),_[33]=Z(d[19]),_[34]=Z(d[23]),_[35]=Z(d[32]),_[36]=Z(d[39]),_[37]=Z(d[45]),_[38]=Z(d[52]),_[39]=Z(d[54]),_[40]=Z(d[20]),_[41]=Z(d[22]),_[42]=Z(d[33]),_[43]=Z(d[38]),_[44]=Z(d[46]),_[45]=Z(d[51]),_[46]=Z(d[55]),_[47]=Z(d[60]),_[48]=Z(d[21]),_[49]=Z(d[34]),_[50]=Z(d[37]),_[51]=Z(d[47]),_[52]=Z(d[50]),_[53]=Z(d[56]),_[54]=Z(d[59]),_[55]=Z(d[61]),_[56]=Z(d[35]),_[57]=Z(d[36]),_[58]=Z(d[48]),_[59]=Z(d[49]),_[60]=Z(d[57]),_[61]=Z(d[58]),_[62]=Z(d[62]),_[63]=Z(d[63])}function vt(d){let _=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),P=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),H=.5*Math.cos(3*3.14159/8),j=.5*Math.cos(7*3.14159/16),G=new Array(4),X=new Array(4),q=new Array(4),$=new Array(4);for(let ae=0;ae<8;++ae){let ce=ae*8;G[0]=P*d[ce+2],G[1]=H*d[ce+2],G[2]=P*d[ce+6],G[3]=H*d[ce+6],X[0]=w*d[ce+1]+I*d[ce+3]+F*d[ce+5]+j*d[ce+7],X[1]=I*d[ce+1]-j*d[ce+3]-w*d[ce+5]-F*d[ce+7],X[2]=F*d[ce+1]-w*d[ce+3]+j*d[ce+5]+I*d[ce+7],X[3]=j*d[ce+1]-F*d[ce+3]+I*d[ce+5]-w*d[ce+7],q[0]=_*(d[ce+0]+d[ce+4]),q[3]=_*(d[ce+0]-d[ce+4]),q[1]=G[0]+G[3],q[2]=G[1]-G[2],$[0]=q[0]+q[1],$[1]=q[3]+q[2],$[2]=q[3]-q[2],$[3]=q[0]-q[1],d[ce+0]=$[0]+X[0],d[ce+1]=$[1]+X[1],d[ce+2]=$[2]+X[2],d[ce+3]=$[3]+X[3],d[ce+4]=$[3]-X[3],d[ce+5]=$[2]-X[2],d[ce+6]=$[1]-X[1],d[ce+7]=$[0]-X[0]}for(let ae=0;ae<8;++ae)G[0]=P*d[16+ae],G[1]=H*d[16+ae],G[2]=P*d[48+ae],G[3]=H*d[48+ae],X[0]=w*d[8+ae]+I*d[24+ae]+F*d[40+ae]+j*d[56+ae],X[1]=I*d[8+ae]-j*d[24+ae]-w*d[40+ae]-F*d[56+ae],X[2]=F*d[8+ae]-w*d[24+ae]+j*d[40+ae]+I*d[56+ae],X[3]=j*d[8+ae]-F*d[24+ae]+I*d[40+ae]-w*d[56+ae],q[0]=_*(d[ae]+d[32+ae]),q[3]=_*(d[ae]-d[32+ae]),q[1]=G[0]+G[3],q[2]=G[1]-G[2],$[0]=q[0]+q[1],$[1]=q[3]+q[2],$[2]=q[3]-q[2],$[3]=q[0]-q[1],d[0+ae]=$[0]+X[0],d[8+ae]=$[1]+X[1],d[16+ae]=$[2]+X[2],d[24+ae]=$[3]+X[3],d[32+ae]=$[3]-X[3],d[40+ae]=$[2]-X[2],d[48+ae]=$[1]-X[1],d[56+ae]=$[0]-X[0]}function Ne(d){for(let _=0;_<64;++_){let w=d[0][_],P=d[1][_],I=d[2][_];d[0][_]=w+1.5747*I,d[1][_]=w-.1873*P-.4682*I,d[2][_]=w+1.8556*P}}function N(d,_,w){for(let P=0;P<64;++P)_[w+P]=Pu.toHalfFloat(A(d[P]))}function A(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(T,Math.abs(d)-1)}function W(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ne(d){let _=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),w=new Uint8Array(gn(_)),P=new Uint8Array(w.length);return _t(w),k(w,P),new DataView(P.buffer)}function se(d){let _=d.array.slice(d.offset.value,d.offset.value+d.size),w=Oo(_),P=new Uint8Array(w.length);return _t(w),k(w,P),new DataView(P.buffer)}function te(d){let _=d.viewer,w={value:d.offset.value},P=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),I=new Uint8Array(8192),F=0,H=new Array(d.inputChannels.length);for(let ge=0,me=d.inputChannels.length;ge<me;ge++)H[ge]={},H[ge].start=F,H[ge].end=H[ge].start,H[ge].nx=d.columns,H[ge].ny=d.lines,H[ge].size=d.type,F+=H[ge].nx*H[ge].ny*H[ge].size;let j=Q(_,w),G=Q(_,w);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(j<=G)for(let ge=0;ge<G-j+1;ge++)I[ge+j]=He(_,w);let X=new Uint16Array(65536),q=S(I,X),$=Ie(_,w);pt(d.array,_,w,$,P,F);for(let ge=0;ge<d.inputChannels.length;++ge){let me=H[ge];for(let he=0;he<H[ge].size;++he)Be(P,me.start+he,me.nx,me.size,me.ny,me.nx*me.size,q)}Ze(X,P,F);let ae=0,ce=new Uint8Array(P.buffer.byteLength);for(let ge=0;ge<d.lines;ge++)for(let me=0;me<d.inputChannels.length;me++){let he=H[me],oe=he.nx*he.size,Ke=new Uint8Array(P.buffer,he.end*2,oe*2);ce.set(Ke,ae),ae+=oe*2,he.end+=oe}return new DataView(ce.buffer)}function Pe(d){let _=d.array.slice(d.offset.value,d.offset.value+d.size),w=Oo(_),P=d.inputChannels.length*d.lines*d.columns*d.totalBytes,I=new ArrayBuffer(P),F=new DataView(I),H=0,j=0,G=new Array(4);for(let X=0;X<d.lines;X++)for(let q=0;q<d.inputChannels.length;q++){let $=0;switch(d.inputChannels[q].pixelType){case 1:G[0]=H,G[1]=G[0]+d.columns,H=G[1]+d.columns;for(let ce=0;ce<d.columns;++ce){let ge=w[G[0]++]<<8|w[G[1]++];$+=ge,F.setUint16(j,$,!0),j+=2}break;case 2:G[0]=H,G[1]=G[0]+d.columns,G[2]=G[1]+d.columns,H=G[2]+d.columns;for(let ce=0;ce<d.columns;++ce){let ge=w[G[0]++]<<24|w[G[1]++]<<16|w[G[2]++]<<8;$+=ge,F.setUint32(j,$,!0),j+=4}break}}return F}function _e(d){let _=d.viewer,w={value:d.offset.value},P=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),I={version:Le(_,w),unknownUncompressedSize:Le(_,w),unknownCompressedSize:Le(_,w),acCompressedSize:Le(_,w),dcCompressedSize:Le(_,w),rleCompressedSize:Le(_,w),rleUncompressedSize:Le(_,w),rleRawSize:Le(_,w),totalAcUncompressedCount:Le(_,w),totalDcUncompressedCount:Le(_,w),acCompression:Le(_,w)};if(I.version<2)throw new Error("EXRLoader.parse: "+Ti.compression+" version "+I.version+" is unsupported");let F=new Array,H=Q(_,w)-2;for(;H>0;){let me=Se(_.buffer,w),he=He(_,w),oe=he>>2&3,Ke=(he>>4)-1,Ue=new Int8Array([Ke])[0],Tt=He(_,w);F.push({name:me,index:Ue,type:Tt,compression:oe}),H-=me.length+3}let j=Ti.channels,G=new Array(d.inputChannels.length);for(let me=0;me<d.inputChannels.length;++me){let he=G[me]={},oe=j[me];he.name=oe.name,he.compression=0,he.decoded=!1,he.type=oe.pixelType,he.pLinear=oe.pLinear,he.width=d.columns,he.height=d.lines}let X={idx:new Array(3)};for(let me=0;me<d.inputChannels.length;++me){let he=G[me];for(let oe=0;oe<F.length;++oe){let Ke=F[oe];he.name==Ke.name&&(he.compression=Ke.compression,Ke.index>=0&&(X.idx[Ke.index]=me),he.offset=me)}}let q,$,ae;if(I.acCompressedSize>0)switch(I.acCompression){case 0:q=new Uint16Array(I.totalAcUncompressedCount),pt(d.array,_,w,I.acCompressedSize,q,I.totalAcUncompressedCount);break;case 1:let me=d.array.slice(w.value,w.value+I.totalAcUncompressedCount),he=Oo(me);q=new Uint16Array(he.buffer),w.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){let me={array:d.array,offset:w,size:I.dcCompressedSize};$=new Uint16Array(se(me).buffer),w.value+=I.dcCompressedSize}if(I.rleRawSize>0){let me=d.array.slice(w.value,w.value+I.rleCompressedSize),he=Oo(me);ae=gn(he.buffer),w.value+=I.rleCompressedSize}let ce=0,ge=new Array(G.length);for(let me=0;me<ge.length;++me)ge[me]=new Array;for(let me=0;me<d.lines;++me)for(let he=0;he<G.length;++he)ge[he].push(ce),ce+=G[he].width*d.type*2;et(X,ge,G,q,$,P);for(let me=0;me<G.length;++me){let he=G[me];if(!he.decoded)switch(he.compression){case 2:let oe=0,Ke=0;for(let Ue=0;Ue<d.lines;++Ue){let Tt=ge[me][oe];for(let lt=0;lt<he.width;++lt){for(let ze=0;ze<2*he.type;++ze)P[Tt++]=ae[Ke+ze*he.width*he.height];Ke++}oe++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(P.buffer)}function Se(d,_){let w=new Uint8Array(d),P=0;for(;w[_.value+P]!=0;)P+=1;let I=new TextDecoder().decode(w.slice(_.value,_.value+P));return _.value=_.value+P+1,I}function st(d,_,w){let P=new TextDecoder().decode(new Uint8Array(d).slice(_.value,_.value+w));return _.value=_.value+w,P}function fe(d,_){let w=Re(d,_),P=Ie(d,_);return[w,P]}function Ee(d,_){let w=Ie(d,_),P=Ie(d,_);return[w,P]}function Re(d,_){let w=d.getInt32(_.value,!0);return _.value=_.value+4,w}function Ie(d,_){let w=d.getUint32(_.value,!0);return _.value=_.value+4,w}function Ae(d,_){let w=d[_.value];return _.value=_.value+1,w}function He(d,_){let w=d.getUint8(_.value);return _.value=_.value+1,w}let Le=function(d,_){let w;return"getBigInt64"in DataView.prototype?w=Number(d.getBigInt64(_.value,!0)):w=d.getUint32(_.value+4,!0)+Number(d.getUint32(_.value,!0)<<32),_.value+=8,w};function Ve(d,_){let w=d.getFloat32(_.value,!0);return _.value+=4,w}function z(d,_){return Pu.toHalfFloat(Ve(d,_))}function Z(d){let _=(d&31744)>>10,w=d&1023;return(d>>15?-1:1)*(_?_===31?w?NaN:1/0:Math.pow(2,_-15)*(1+w/1024):6103515625e-14*(w/1024))}function Q(d,_){let w=d.getUint16(_.value,!0);return _.value+=2,w}function ie(d,_){return Z(Q(d,_))}function ye(d,_,w,P){let I=w.value,F=[];for(;w.value<I+P-1;){let H=Se(_,w),j=Re(d,w),G=He(d,w);w.value+=3;let X=Re(d,w),q=Re(d,w);F.push({name:H,pixelType:j,pLinear:G,xSampling:X,ySampling:q})}return w.value+=1,F}function ve(d,_){let w=Ve(d,_),P=Ve(d,_),I=Ve(d,_),F=Ve(d,_),H=Ve(d,_),j=Ve(d,_),G=Ve(d,_),X=Ve(d,_);return{redX:w,redY:P,greenX:I,greenY:F,blueX:H,blueY:j,whiteX:G,whiteY:X}}function Ge(d,_){let w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],P=He(d,_);return w[P]}function Et(d,_){let w=Re(d,_),P=Re(d,_),I=Re(d,_),F=Re(d,_);return{xMin:w,yMin:P,xMax:I,yMax:F}}function Kt(d,_){let w=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],P=He(d,_);return w[P]}function ht(d,_){let w=["ENVMAP_LATLONG","ENVMAP_CUBE"],P=He(d,_);return w[P]}function In(d,_){let w=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],P=["ROUND_DOWN","ROUND_UP"],I=Ie(d,_),F=Ie(d,_),H=He(d,_);return{xSize:I,ySize:F,levelMode:w[H&15],roundingMode:P[H>>4]}}function Xn(d,_){let w=Ve(d,_),P=Ve(d,_);return[w,P]}function la(d,_){let w=Ve(d,_),P=Ve(d,_),I=Ve(d,_);return[w,P,I]}function ha(d,_,w,P,I){if(P==="string"||P==="stringvector"||P==="iccProfile")return st(_,w,I);if(P==="chlist")return ye(d,_,w,I);if(P==="chromaticities")return ve(d,w);if(P==="compression")return Ge(d,w);if(P==="box2i")return Et(d,w);if(P==="envmap")return ht(d,w);if(P==="tiledesc")return In(d,w);if(P==="lineOrder")return Kt(d,w);if(P==="float")return Ve(d,w);if(P==="v2f")return Xn(d,w);if(P==="v3f")return la(d,w);if(P==="int")return Re(d,w);if(P==="rational")return fe(d,w);if(P==="timecode")return Ee(d,w);if(P==="preview")return w.value+=I,"skipped";w.value+=I}function wi(d,_){let w=Math.log2(d);return _=="ROUND_DOWN"?Math.floor(w):Math.ceil(w)}function Qr(d,_,w){let P=0;switch(d.levelMode){case"ONE_LEVEL":P=1;break;case"MIPMAP_LEVELS":P=wi(Math.max(_,w),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return P}function $r(d,_,w,P){let I=new Array(d);for(let F=0;F<d;F++){let H=1<<F,j=_/H|0;P=="ROUND_UP"&&j*H<_&&(j+=1);let G=Math.max(j,1);I[F]=(G+w-1)/w|0}return I}function ua(){let d=this,_=d.offset,w={value:0};for(let P=0;P<d.tileCount;P++){let I=Re(d.viewer,_),F=Re(d.viewer,_);_.value+=8,d.size=Ie(d.viewer,_);let H=I*d.blockWidth,j=F*d.blockHeight;d.columns=H+d.blockWidth>d.width?d.width-H:d.blockWidth,d.lines=j+d.blockHeight>d.height?d.height-j:d.blockHeight;let G=d.columns*d.totalBytes,q=d.size<d.lines*G?d.uncompress(d):W(d);_.value+=d.size;for(let $=0;$<d.lines;$++){let ae=$*d.columns*d.totalBytes;for(let ce=0;ce<d.inputChannels.length;ce++){let ge=Ti.channels[ce].name,me=d.channelByteOffsets[ge]*d.columns,he=d.decodeChannels[ge];if(he===void 0)continue;w.value=ae+me;let oe=(d.height-(1+j+$))*d.outLineWidth;for(let Ke=0;Ke<d.columns;Ke++){let Ue=oe+(Ke+H)*d.outputChannels+he;d.byteArray[Ue]=d.getter(q,w)}}}}}function qs(){let d=this,_=d.offset,w={value:0};for(let P=0;P<d.height/d.blockHeight;P++){let I=Re(d.viewer,_)-Ti.dataWindow.yMin;d.size=Ie(d.viewer,_),d.lines=I+d.blockHeight>d.height?d.height-I:d.blockHeight;let F=d.columns*d.totalBytes,j=d.size<d.lines*F?d.uncompress(d):W(d);_.value+=d.size;for(let G=0;G<d.blockHeight;G++){let X=P*d.blockHeight,q=G+d.scanOrder(X);if(q>=d.height)continue;let $=G*F,ae=(d.height-1-q)*d.outLineWidth;for(let ce=0;ce<d.inputChannels.length;ce++){let ge=Ti.channels[ce].name,me=d.channelByteOffsets[ge]*d.columns,he=d.decodeChannels[ge];if(he!==void 0){w.value=$+me;for(let oe=0;oe<d.columns;oe++){let Ke=ae+oe*d.outputChannels+he;d.byteArray[Ke]=d.getter(j,w)}}}}}}function fa(d,_,w){let P={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");P.version=d.getUint8(4);let I=d.getUint8(5);P.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},w.value=8;let F=!0;for(;F;){let H=Se(_,w);if(H==0)F=!1;else{let j=Se(_,w),G=Ie(d,w),X=ha(d,_,w,j,G);X===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${j}'.`):P[H]=X}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",P),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return P}function Ys(d,_,w,P,I){let F={size:0,viewer:_,array:w,offset:P,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:jt};switch(d.compression){case"NO_COMPRESSION":F.blockHeight=1,F.uncompress=W;break;case"RLE_COMPRESSION":F.blockHeight=1,F.uncompress=ne;break;case"ZIPS_COMPRESSION":F.blockHeight=1,F.uncompress=se;break;case"ZIP_COMPRESSION":F.blockHeight=16,F.uncompress=se;break;case"PIZ_COMPRESSION":F.blockHeight=32,F.uncompress=te;break;case"PXR24_COMPRESSION":F.blockHeight=16,F.uncompress=Pe;break;case"DWAA_COMPRESSION":F.blockHeight=32,F.uncompress=_e;break;case"DWAB_COMPRESSION":F.blockHeight=256,F.uncompress=_e;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}let H={};for(let q of d.channels)switch(q.name){case"Y":case"R":case"G":case"B":case"A":H[q.name]=!0,F.type=q.pixelType}let j=!1;if(H.R&&H.G&&H.B)j=!H.A,F.outputChannels=4,F.decodeChannels={R:0,G:1,B:2,A:3};else if(H.Y)F.outputChannels=1,F.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(F.type==1)switch(I){case rn:F.getter=ie;break;case Ht:F.getter=Q;break}else if(F.type==2)switch(I){case rn:F.getter=Ve;break;case Ht:F.getter=z}else throw new Error("EXRLoader.parse: unsupported pixelType "+F.type+" for "+d.compression+".");F.columns=F.width;let G=F.width*F.height*F.outputChannels;switch(I){case rn:F.byteArray=new Float32Array(G),j&&F.byteArray.fill(1,0,G);break;case Ht:F.byteArray=new Uint16Array(G),j&&F.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let X=0;for(let q of d.channels)F.decodeChannels[q.name]!==void 0&&(F.channelByteOffsets[q.name]=X),X+=q.pixelType*2;if(F.totalBytes=X,F.outLineWidth=F.width*F.outputChannels,d.lineOrder==="INCREASING_Y"?F.scanOrder=q=>q:F.scanOrder=q=>F.height-1-q,F.outputChannels==4?(F.format=pn,F.colorSpace=jt):(F.format=Ns,F.colorSpace=fi),d.spec.singleTile){F.blockHeight=d.tiles.ySize,F.blockWidth=d.tiles.xSize;let q=Qr(d.tiles,F.width,F.height),$=$r(q,F.width,d.tiles.xSize,d.tiles.roundingMode),ae=$r(q,F.height,d.tiles.ySize,d.tiles.roundingMode);F.tileCount=$[0]*ae[0];for(let ce=0;ce<q;ce++)for(let ge=0;ge<ae[ce];ge++)for(let me=0;me<$[ce];me++)Le(_,P);F.decode=ua.bind(F)}else{F.blockWidth=F.width;let q=Math.ceil(F.height/F.blockHeight);for(let $=0;$<q;$++)Le(_,P);F.decode=qs.bind(F)}return F}let eo={value:0},to=new DataView(e),wl=new Uint8Array(e),Ti=fa(to,e,eo),ji=Ys(Ti,to,wl,eo,this.type);return ji.decode(),{header:Ti,width:ji.width,height:ji.height,data:ji.byteArray,format:ji.format,colorSpace:ji.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=It,o.magFilter=It,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}};var um=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function a(p){for(var y=new Uint8Array(p.length),M=0;M<p.length;++M){var v=p.charCodeAt(M);y[M]=v>96?v-97:v>64?v-39:v+4}for(var R=0,M=0;M<p.length;++M)y[R++]=y[M]<60?n[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,R)}function c(p,y,M,v,R,E){var C=r.exports.sbrk,U=M+3&-4,T=C(U*v),S=C(R.length),L=new Uint8Array(r.exports.memory.buffer);L.set(R,S);var O=p(T,M,v,S,R.length);if(O==0&&E&&E(T,U,v),y.set(L.subarray(T,T+M*v)),C(T-C(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function m(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(M){var v=M.data;y.pending-=v.count,y.requests[v.id][v.action](v.value),delete y.requests[v.id]},y}function x(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),M=new Blob([y],{type:"text/javascript"}),v=URL.createObjectURL(M),R=0;R<p;++R)u[R]=m(v);URL.revokeObjectURL(v)}function b(p,y,M,v,R){for(var E=u[0],C=1;C<u.length;++C)u[C].pending<E.pending&&(E=u[C]);return new Promise(function(U,T){var S=new Uint8Array(M),L=f++;E.pending+=p,E.requests[L]={resolve:U,reject:T},E.object.postMessage({id:L,count:p,size:y,source:S,mode:v,filter:R},[S.buffer])})}function g(p){o.then(function(){var y=p.data;try{var M=new Uint8Array(y.count*y.size);c(r.exports[y.mode],M,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:M},[M.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:o,supported:!0,useWorkers:function(p){x(p)},decodeVertexBuffer:function(p,y,M,v,R){c(r.exports.meshopt_decodeVertexBuffer,p,y,M,v,r.exports[l[R]])},decodeIndexBuffer:function(p,y,M,v){c(r.exports.meshopt_decodeIndexBuffer,p,y,M,v)},decodeIndexSequence:function(p,y,M,v){c(r.exports.meshopt_decodeIndexSequence,p,y,M,v)},decodeGltfBuffer:function(p,y,M,v,R,E){c(r.exports[h[R]],p,y,M,v,r.exports[l[E]])},decodeGltfBufferAsync:function(p,y,M,v,R){return u.length>0?b(p,y,M,h[v],l[R]):o.then(function(){var E=new Uint8Array(p*y);return c(r.exports[h[v]],E,p,y,M,r.exports[l[R]]),E})}}})();var fm={type:"change"},gf={type:"start"},pm={type:"end"},Lc=new ei,dm=new sn,UM=Math.cos(70*Ot.DEG2RAD),Zt=new D,Rn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mf=1e-6,Uc=class extends wc{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new An,this._lastTargetPosition=new D,this._quat=new An().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ki,this._sphericalDelta=new ki,this._scale=1,this._panOffset=new D,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new D,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FM.bind(this),this._onPointerDown=NM.bind(this),this._onPointerUp=OM.bind(this),this._onContextMenu=WM.bind(this),this._onMouseWheel=kM.bind(this),this._onKeyDown=HM.bind(this),this._onTouchStart=VM.bind(this),this._onTouchMove=GM.bind(this),this._onMouseDown=BM.bind(this),this._onMouseMove=zM.bind(this),this._interceptControlDown=XM.bind(this),this._interceptControlUp=qM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fm),this.update(),this.state=bt.NONE}update(e=null){let t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Zt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<UM?this.object.lookAt(this.target):(dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(dm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>mf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mf||this._lastTargetPosition.distanceToSquared(this.target)>mf?(this.dispatchEvent(fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Zt.copy(s).sub(this.target);let r=Zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function NM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function FM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function OM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pm),this.state=bt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function BM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(gf)}function zM(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kM(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pm))}function HM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function VM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(gf)}function GM(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function WM(i){this.enabled!==!1&&i.preventDefault()}function XM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bo=class i extends Qe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Ut;let n=this,s=t.color!==void 0?new Te(t.color):new Te(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new sn,u=new D,f=new D,m=new D,x=new we,b=new D(0,0,-1),g=new nt,p=new D,y=new D,M=new nt,v=new we,R=this.camera,E=new Xt(r,o,{samples:l,type:Ht}),C=new xt({name:c.name!==void 0?c.name:"unspecified",uniforms:_i.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});C.uniforms.tDiffuse.value=E.texture,C.uniforms.color.value=s,C.uniforms.textureMatrix.value=v,this.material=C,this.onBeforeRender=function(U,T,S){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(S.matrixWorld),x.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(x),p.subVectors(f,m),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),x.extractRotation(S.matrixWorld),b.set(0,0,-1),b.applyMatrix4(x),b.add(m),y.subVectors(f,b),y.reflect(u).negate(),y.add(f),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(x),R.up.reflect(u),R.lookAt(y),R.far=S.far,R.updateMatrixWorld(),R.projectionMatrix.copy(S.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(R.projectionMatrix),v.multiply(R.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(R.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=R.projectionMatrix;M.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],M.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],M.z=-1,M.w=(1+L.elements[10])/L.elements[14],g.multiplyScalar(2/g.dot(M)),L.elements[2]=g.x,L.elements[6]=g.y,L.elements[10]=g.z+1-a,L.elements[14]=g.w,n.visible=!1;let O=U.getRenderTarget(),B=U.xr.enabled,V=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(E),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(T,R),U.xr.enabled=B,U.shadowMap.autoUpdate=V,U.setRenderTarget(O);let J=S.viewport;J!==void 0&&U.state.viewport(J),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};Bo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YM=new rs(-1,1,1,-1,0,1),xf=class extends Ft{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},jM=new xf,si=class{constructor(e){this._mesh=new Qe(jM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fc=class extends yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new si(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oc=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fc(Nc),this.copyPass.material.blending=di,this.clock=new Cr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(o instanceof zo?n=!0:o instanceof Oc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zc=class extends yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var mm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Lr=class i extends yn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:Ht}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Xt(r,o,{type:Ht});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Xt(r,o,{type:Ht});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=mm;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Nc;this.copyUniforms=_i.clone(h.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ps,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new kt,this.fsQuad=new si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Lr.BlurDirectionX=new Me(1,0);Lr.BlurDirectionY=new Me(0,1);var gm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kc=class extends yn{constructor(){super();let e=gm;this.uniforms=_i.clone(e.uniforms),this.material=new pc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xm=Math.pow(2,-24),Hc=Symbol("SKIP_GENERATION");function ZM(i){return i.index?i.index.count:i.attributes.position.count}function vi(i){return ZM(i)/3}function KM(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function bm(i,e){if(!i.index){let t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=KM(t,n);i.setIndex(new ut(s,1));for(let r=0;r<t;r++)s[r]=r}}function bf(i,e){let t=vi(i),n=e||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(t,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function _f(i,e){if(!i.groups||!i.groups.length)return bf(i,e);let t=[],n=new Set,s=e||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(let c of i.groups){let l=c.start/3,h=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,h))}let a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){let l=a[c],h=a[c+1];t.push({offset:Math.floor(l),count:Math.floor(h-l)})}return t}function _m(i,e){let t=vi(i),n=_f(i,e).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(t-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),t!==r}function Vc(i,e,t,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,f=1/0,m=1/0,x=-1/0,b=-1/0,g=-1/0;for(let p=e*6,y=(e+t)*6;p<y;p+=6){let M=i[p+0],v=i[p+1],R=M-v,E=M+v;R<r&&(r=R),E>c&&(c=E),M<u&&(u=M),M>x&&(x=M);let C=i[p+2],U=i[p+3],T=C-U,S=C+U;T<o&&(o=T),S>l&&(l=S),C<f&&(f=C),C>b&&(b=C);let L=i[p+4],O=i[p+5],B=L-O,V=L+O;B<a&&(a=B),V>h&&(h=V),L<m&&(m=L),L>g&&(g=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=h,s[0]=u,s[1]=f,s[2]=m,s[3]=x,s[4]=b,s[5]=g}function vm(i,e=null,t=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,o=vi(i),a=s.normalized,c;e===null?(c=new Float32Array(o*6),t=0,n=o):(c=e,t=t||0,n=n||o);let l=s.array,h=s.offset||0,u=3;s.isInterleavedBufferAttribute&&(u=s.data.stride);let f=["getX","getY","getZ"];for(let m=t;m<t+n;m++){let x=m*3,b=m*6,g=x+0,p=x+1,y=x+2;r&&(g=r[g],p=r[p],y=r[y]),a||(g=g*u+h,p=p*u+h,y=y*u+h);for(let M=0;M<3;M++){let v,R,E;a?(v=s[f[M]](g),R=s[f[M]](p),E=s[f[M]](y)):(v=l[g+M],R=l[p+M],E=l[y+M]);let C=v;R<C&&(C=R),E<C&&(C=E);let U=v;R>U&&(U=R),E>U&&(U=E);let T=(U-C)/2,S=M*2;c[b+S+0]=C+T,c[b+S+1]=T+(Math.abs(C)+T)*xm}}return c}function yt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function vf(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function yf(i,e){e.set(i)}function Mf(i,e,t){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[o],s=e[o],t[o]=n>s?n:s}}function ko(i,e,t){for(let n=0;n<3;n++){let s=e[i+2*n],r=e[i+2*n+1],o=s-r,a=s+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Ur(i){let e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}var Gi=32,QM=(i,e)=>i.candidate-e.candidate,us=new Array(Gi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Gc=new Float32Array(6);function Sm(i,e,t,n,s,r){let o=-1,a=0;if(r===0)o=vf(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=vf(i),o!==-1&&(a=$M(t,n,s,o));else if(r===2){let c=Ur(i),l=1.25*s,h=n*6,u=(n+s)*6;for(let f=0;f<3;f++){let m=e[f],g=(e[f+3]-m)/Gi;if(s<Gi/4){let p=[...us];p.length=s;let y=0;for(let v=h;v<u;v+=6,y++){let R=p[y];R.candidate=t[v+2*f],R.count=0;let{bounds:E,leftCacheBounds:C,rightCacheBounds:U}=R;for(let T=0;T<3;T++)U[T]=1/0,U[T+3]=-1/0,C[T]=1/0,C[T+3]=-1/0,E[T]=1/0,E[T+3]=-1/0;ko(v,t,E)}p.sort(QM);let M=s;for(let v=0;v<M;v++){let R=p[v];for(;v+1<M&&p[v+1].candidate===R.candidate;)p.splice(v+1,1),M--}for(let v=h;v<u;v+=6){let R=t[v+2*f];for(let E=0;E<M;E++){let C=p[E];R>=C.candidate?ko(v,t,C.rightCacheBounds):(ko(v,t,C.leftCacheBounds),C.count++)}}for(let v=0;v<M;v++){let R=p[v],E=R.count,C=s-R.count,U=R.leftCacheBounds,T=R.rightCacheBounds,S=0;E!==0&&(S=Ur(U)/c);let L=0;C!==0&&(L=Ur(T)/c);let O=1+1.25*(S*E+L*C);O<l&&(o=f,l=O,a=R.candidate)}}else{for(let M=0;M<Gi;M++){let v=us[M];v.count=0,v.candidate=m+g+M*g;let R=v.bounds;for(let E=0;E<3;E++)R[E]=1/0,R[E+3]=-1/0}for(let M=h;M<u;M+=6){let E=~~((t[M+2*f]-m)/g);E>=Gi&&(E=Gi-1);let C=us[E];C.count++,ko(M,t,C.bounds)}let p=us[Gi-1];yf(p.bounds,p.rightCacheBounds);for(let M=Gi-2;M>=0;M--){let v=us[M],R=us[M+1];Mf(v.bounds,R.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let M=0;M<Gi-1;M++){let v=us[M],R=v.count,E=v.bounds,U=us[M+1].rightCacheBounds;R!==0&&(y===0?yf(E,Gc):Mf(E,Gc,Gc)),y+=R;let T=0,S=0;y!==0&&(T=Ur(Gc)/c);let L=s-y;L!==0&&(S=Ur(U)/c);let O=1+1.25*(T*y+S*L);O<l&&(o=f,l=O,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function $M(i,e,t,n){let s=0;for(let r=e,o=e+t;r<o;r++)s+=i[r*6+n*2];return s/t}var Nr=class{constructor(){this.boundingData=new Float32Array(6)}};function wm(i,e,t,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){for(let h=0;h<3;h++){let u=e[o*3+h];e[o*3+h]=e[a*3+h],e[a*3+h]=u}for(let h=0;h<6;h++){let u=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=u}o++,a--}else return o}}function Tm(i,e,t,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){let h=i[o];i[o]=i[a],i[a]=h;for(let u=0;u<6;u++){let f=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=f}o++,a--}else return o}}function Ct(i,e){return e[i+15]===65535}function Bt(i,e){return e[i+6]}function Vt(i,e){return e[i+14]}function tn(i){return i+8}function nn(i,e){return e[i+6]}function Wc(i,e){return e[i+7]}var Am,Ho,Xc,Em,eS=Math.pow(2,32);function qc(i){return"count"in i?1:1+qc(i.left)+qc(i.right)}function Rm(i,e,t){return Am=new Float32Array(t),Ho=new Uint32Array(t),Xc=new Uint16Array(t),Em=new Uint8Array(t),Sf(i,e)}function Sf(i,e){let t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Am[t+o]=r[o];if(s)if(e.buffer){let o=e.buffer;Em.set(new Uint8Array(o),i);for(let a=i,c=i+o.byteLength;a<c;a+=32){let l=a/2;Ct(l,Xc)||(Ho[a/4+6]+=t)}return i+o.byteLength}else{let o=e.offset,a=e.count;return Ho[t+6]=o,Xc[n+14]=a,Xc[n+15]=65535,i+32}else{let o=e.left,a=e.right,c=e.splitAxis,l;if(l=Sf(i+32,o),l/4>eS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ho[t+6]=l/4,l=Sf(l,a),Ho[t+7]=c,l}}function tS(i,e){let t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,s=n?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function nS(i,e,t,n,s){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:h}=s,u=i._indirectBuffer,f=i.geometry,m=f.index?f.index.array:null,x=h?Tm:wm,b=vi(f),g=new Float32Array(6),p=!1,y=new Nr;return Vc(e,t,n,y.boundingData,g),v(y,t,n,g),y;function M(R){l&&l(R/b)}function v(R,E,C,U=null,T=0){if(!p&&T>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),C<=a||T>=r)return M(E+C),R.offset=E,R.count=C,R;let S=Sm(R.boundingData,U,e,E,C,c);if(S.axis===-1)return M(E+C),R.offset=E,R.count=C,R;let L=x(u,m,e,E,C,S);if(L===E||L===E+C)M(E+C),R.offset=E,R.count=C;else{R.splitAxis=S.axis;let O=new Nr,B=E,V=L-E;R.left=O,Vc(e,B,V,O.boundingData,g),v(O,B,V,g,T+1);let J=new Nr,Y=L,re=C-V;R.right=J,Vc(e,Y,re,J.boundingData,g),v(J,Y,re,g,T+1)}return R}}function Cm(i,e){let t=i.geometry;e.indirect&&(i._indirectBuffer=tS(t,e.useSharedArrayBuffer),_m(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||bm(t,e);let n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=vm(t),r=e.indirect?bf(t,e.range):_f(t,e.range);i._roots=r.map(o=>{let a=nS(i,s,o.offset,o.count,e),c=qc(a),l=new n(32*c);return Rm(0,a,l),l})}var Cn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let c=e[r][t];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],c=e.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};Cn.prototype.setFromBox=(function(){let i=new D;return function(t,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*h+r.z*(1-h);let u=t.dot(i);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();var bT=(function(){let i=new Cn;return function(t,n){let s=t.points,r=t.satAxes,o=t.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let h=0;h<3;h++){let u=o[h],f=r[h];if(i.setFromPoints(f,a),u.isSeparated(i))return!1}for(let h=0;h<3;h++){let u=l[h],f=c[h];if(i.setFromPoints(f,s),u.isSeparated(i))return!1}}})();var iS=(function(){let i=new D,e=new D,t=new D;return function(s,r,o){let a=s.start,c=i,l=r.start,h=e;t.subVectors(a,l),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);let u=t.dot(h),f=h.dot(c),m=h.dot(h),x=t.dot(c),g=c.dot(c)*m-f*f,p,y;g!==0?p=(u*f-x*m)/g:p=0,y=(u+p*f)/m,o.x=p,o.y=y}})(),Go=(function(){let i=new Me,e=new D,t=new D;return function(s,r,o,a){iS(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;c<0?h=s.start:h=s.end;let u;l<0?u=r.start:u=r.end;let f=e,m=t;if(s.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),f.distanceToSquared(u)<=m.distanceToSquared(h)){o.copy(f),a.copy(u);return}else{o.copy(h),a.copy(m);return}}}})(),Pm=(function(){let i=new D,e=new D,t=new sn,n=new En;return function(r,o){let{radius:a,center:c}=r,{a:l,b:h,c:u}=o;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;let b=o.getPlane(t);if(Math.abs(b.distanceToPoint(c))<=a){let p=b.projectPoint(c,e);if(o.containsPoint(p))return!0}return!1}})();var sS=1e-15;function wf(i){return Math.abs(i)<sS}var on=class extends _n{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Cn),this.points=[this.a,this.b,this.c],this.sphere=new Nt,this.plane=new sn,this.needsUpdate=!0}intersectsSphere(e){return Pm(e,this)}update(){let e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);let l=r[1],h=o[1];l.subVectors(e,t),h.setFromPoints(l,s);let u=r[2],f=o[2];u.subVectors(t,n),f.setFromPoints(u,s);let m=r[3],x=o[3];m.subVectors(n,e),x.setFromPoints(m,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};on.prototype.closestPointToSegment=(function(){let i=new D,e=new D,t=new En;return function(s,r=null,o=null){let{start:a,end:c}=s,l=this.points,h,u=1/0;for(let f=0;f<3;f++){let m=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[m]),Go(t,s,i,e),h=i.distanceToSquared(e),h<u&&(u=h,r&&r.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),h=c.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(u)}})();on.prototype.intersectsTriangle=(function(){let i=new on,e=new Array(3),t=new Array(3),n=new Cn,s=new Cn,r=new D,o=new D,a=new D,c=new D,l=new D,h=new En,u=new En,f=new En,m=new D;function x(b,g,p){let y=b.points,M=0,v=-1;for(let R=0;R<3;R++){let{start:E,end:C}=h;E.copy(y[R]),C.copy(y[(R+1)%3]),h.delta(o);let U=wf(g.distanceToPoint(E));if(wf(g.normal.dot(o))&&U){p.copy(h),M=2;break}let T=g.intersectLine(h,m);if(!T&&U&&m.copy(E),(T||U)&&!wf(m.distanceTo(C))){if(M<=1)(M===1?p.start:p.end).copy(m),U&&(v=M);else if(M>=2){(v===1?p.start:p.end).copy(m),M=2;break}if(M++,M===2&&v===-1)break}}return M}return function(g,p=null,y=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(i.copy(g),i.update(),g=i);let M=this.plane,v=g.plane;if(Math.abs(M.normal.dot(v.normal))>1-1e-10){let R=this.satBounds,E=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let T=0;T<4;T++){let S=R[T],L=E[T];if(n.setFromPoints(L,t),S.isSeparated(n))return!1}let C=g.satBounds,U=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let T=0;T<4;T++){let S=C[T],L=U[T];if(n.setFromPoints(L,e),S.isSeparated(n))return!1}for(let T=0;T<4;T++){let S=E[T];for(let L=0;L<4;L++){let O=U[L];if(r.crossVectors(S,O),n.setFromPoints(r,e),s.setFromPoints(r,t),n.isSeparated(s))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let R=x(this,v,u);if(R===1&&g.containsPoint(u.end))return p&&(p.start.copy(u.end),p.end.copy(u.end)),!0;if(R!==2)return!1;let E=x(g,M,f);if(E===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(E!==2)return!1;if(u.delta(a),f.delta(c),a.dot(c)<0){let B=f.start;f.start=f.end,f.end=B}let C=u.start.dot(a),U=u.end.dot(a),T=f.start.dot(a),S=f.end.dot(a),L=U<T,O=C<S;return C!==S&&T!==U&&L===O?!1:(p&&(l.subVectors(u.start,f.start),l.dot(a)>0?p.start.copy(u.start):p.start.copy(f.start),l.subVectors(u.end,f.end),l.dot(a)<0?p.end.copy(u.end):p.end.copy(f.end)),!0)}}})();on.prototype.distanceToPoint=(function(){let i=new D;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();on.prototype.distanceToTriangle=(function(){let i=new D,e=new D,t=["a","b","c"],n=new En,s=new En;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let h=1/0;for(let u=0;u<3;u++){let f,m=t[u],x=o[m];this.closestPointToPoint(x,i),f=x.distanceToSquared(i),f<h&&(h=f,a&&a.copy(i),c&&c.copy(x));let b=this[m];o.closestPointToPoint(b,i),f=b.distanceToSquared(i),f<h&&(h=f,a&&a.copy(b),c&&c.copy(i))}for(let u=0;u<3;u++){let f=t[u],m=t[(u+1)%3];n.set(this[f],this[m]);for(let x=0;x<3;x++){let b=t[x],g=t[(x+1)%3];s.set(o[b],o[g]),Go(n,s,i,e);let p=i.distanceToSquared(e);p<h&&(h=p,a&&a.copy(i),c&&c.copy(e))}}return Math.sqrt(h)}})();var Lt=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new we,this.invMatrix=new we,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Cn),this.alignedSatBounds=new Array(3).fill().map(()=>new Cn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Lt.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let f=1*l|2*h|4*u,m=s[f];m.x=l?n.x:t.x,m.y=h?n.y:t.y,m.z=u?n.z:t.z,m.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){let h=o[l],u=r[l],f=1<<l,m=s[f];h.subVectors(a,m),u.setFromPoints(h,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Lt.prototype.intersectsBox=(function(){let i=new Cn;return function(t){this.needsUpdate&&this.update();let n=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=o[c],h=r[c];if(i.setFromBox(l,t),h.isSeparated(i))return!1}return!0}})();Lt.prototype.intersectsTriangle=(function(){let i=new on,e=new Array(3),t=new Cn,n=new Cn,s=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){let m=a[f],x=c[f];if(t.setFromPoints(x,e),m.isSeparated(t))return!1}let l=o.satBounds,h=o.satAxes,u=this.points;for(let f=0;f<3;f++){let m=l[f],x=h[f];if(t.setFromPoints(x,u),m.isSeparated(t))return!1}for(let f=0;f<3;f++){let m=c[f];for(let x=0;x<4;x++){let b=h[x];if(s.crossVectors(m,b),t.setFromPoints(s,e),n.setFromPoints(s,u),t.isSeparated(n))return!1}}return!0}})();Lt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Lt.prototype.distanceToPoint=(function(){let i=new D;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Lt.prototype.distanceToBox=(function(){let i=["x","y","z"],e=new Array(12).fill().map(()=>new En),t=new Array(12).fill().map(()=>new En),n=new D,s=new D;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let h=a*a,u=o.min,f=o.max,m=this.points,x=1/0;for(let g=0;g<8;g++){let p=m[g];s.copy(p).clamp(u,f);let y=p.distanceToSquared(s);if(y<x&&(x=y,c&&c.copy(p),l&&l.copy(s),y<h))return Math.sqrt(y)}let b=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){let M=(g+1)%3,v=(g+2)%3,R=p<<M|y<<v,E=1<<g|p<<M|y<<v,C=m[R],U=m[E];e[b].set(C,U);let S=i[g],L=i[M],O=i[v],B=t[b],V=B.start,J=B.end;V[S]=u[S],V[L]=p?u[L]:f[L],V[O]=y?u[O]:f[L],J[S]=f[S],J[L]=p?u[L]:f[L],J[O]=y?u[O]:f[L],b++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=g?f.x:u.x,s.y=p?f.y:u.y,s.z=y?f.z:u.z,this.closestPointToPoint(s,n);let M=s.distanceToSquared(n);if(M<x&&(x=M,c&&c.copy(n),l&&l.copy(s),M<h))return Math.sqrt(M)}for(let g=0;g<12;g++){let p=e[g];for(let y=0;y<12;y++){let M=t[y];Go(p,M,n,s);let v=n.distanceToSquared(s);if(v<x&&(x=v,c&&c.copy(n),l&&l.copy(s),v<h))return Math.sqrt(v)}}return Math.sqrt(x)}})();var fs=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var Tf=class extends fs{constructor(){super(()=>new on)}},Mn=new Tf;var Af=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},at=new Af;var ds,Or,Fr=[],jc=new fs(()=>new ot);function Im(i,e,t,n,s,r){ds=jc.getPrimitive(),Or=jc.getPrimitive(),Fr.push(ds,Or),at.setBuffer(i._roots[e]);let o=Ef(0,i.geometry,t,n,s,r);at.clearBuffer(),jc.releasePrimitive(ds),jc.releasePrimitive(Or),Fr.pop(),Fr.pop();let a=Fr.length;return a>0&&(Or=Fr[a-1],ds=Fr[a-2]),o}function Ef(i,e,t,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=at,h=i*2;if(Ct(h,c)){let f=Bt(i,l),m=Vt(h,c);return yt(i,a,ds),n(f,m,!1,o,r+i,ds)}else{let S=function(O){let{uint16Array:B,uint32Array:V}=at,J=O*2;for(;!Ct(J,B);)O=tn(O),J=O*2;return Bt(O,V)},L=function(O){let{uint16Array:B,uint32Array:V}=at,J=O*2;for(;!Ct(J,B);)O=nn(O,V),J=O*2;return Bt(O,V)+Vt(J,B)},f=tn(i),m=nn(i,l),x=f,b=m,g,p,y,M;if(s&&(y=ds,M=Or,yt(x,a,y),yt(b,a,M),g=s(y),p=s(M),p<g)){x=m,b=f;let O=g;g=p,p=O,y=M}y||(y=ds,yt(x,a,y));let v=Ct(x*2,c),R=t(y,v,g,o+1,r+x),E;if(R===2){let O=S(x),V=L(x)-O;E=n(O,V,!0,o+1,r+x,y)}else E=R&&Ef(x,e,t,n,s,r,o+1);if(E)return!0;M=Or,yt(b,a,M);let C=Ct(b*2,c),U=t(M,C,p,o+1,r+b),T;if(U===2){let O=S(b),V=L(b)-O;T=n(O,V,!0,o+1,r+b,M)}else T=U&&Ef(b,e,t,n,s,r,o+1);return!!T}}var Wo=new D,Cf=new D;function Dm(i,e,t={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:h=>(Wo.copy(e).clamp(h.min,h.max),Wo.distanceToSquared(e)),intersectsBounds:(h,u,f)=>f<a&&f<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Wo);let f=e.distanceToSquared(Wo);return f<a&&(Cf.copy(Wo),a=f,c=u),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return t.point?t.point.copy(Cf):t.point=Cf.clone(),t.distance=l,t.faceIndex=c,t}var oS=parseInt("170")>=169,Os=new D,Bs=new D,zs=new D,Zc=new Me,Kc=new Me,Jc=new Me,Lm=new D,Um=new D,Nm=new D,Xo=new D;function aS(i,e,t,n,s,r,o,a){let c;if(r===Wt?c=i.intersectTriangle(n,t,e,!0,s):c=i.intersectTriangle(e,t,n,r!==dn,s),c===null)return null;let l=i.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function cS(i,e,t,n,s,r,o,a,c,l,h){Os.fromBufferAttribute(e,r),Bs.fromBufferAttribute(e,o),zs.fromBufferAttribute(e,a);let u=aS(i,Os,Bs,zs,Xo,c,l,h);if(u){let f=new D;_n.getBarycoord(Xo,Os,Bs,zs,f),n&&(Zc.fromBufferAttribute(n,r),Kc.fromBufferAttribute(n,o),Jc.fromBufferAttribute(n,a),u.uv=_n.getInterpolation(Xo,Os,Bs,zs,Zc,Kc,Jc,new Me)),s&&(Zc.fromBufferAttribute(s,r),Kc.fromBufferAttribute(s,o),Jc.fromBufferAttribute(s,a),u.uv1=_n.getInterpolation(Xo,Os,Bs,zs,Zc,Kc,Jc,new Me)),t&&(Lm.fromBufferAttribute(t,r),Um.fromBufferAttribute(t,o),Nm.fromBufferAttribute(t,a),u.normal=_n.getInterpolation(Xo,Os,Bs,zs,Lm,Um,Nm,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let m={a:r,b:o,c:a,normal:new D,materialIndex:0};_n.getNormal(Os,Bs,zs,m.normal),u.face=m,u.faceIndex=r,oS&&(u.barycoord=f)}return u}function Br(i,e,t,n,s,r,o){let a=n*3,c=a+0,l=a+1,h=a+2,u=i.index;i.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));let{position:f,normal:m,uv:x,uv1:b}=i.attributes,g=cS(t,f,m,x,b,c,l,h,e,r,o);return g?(g.faceIndex=n,s&&s.push(g),g):null}function Mt(i,e,t,n){let s=i.a,r=i.b,o=i.c,a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Fm(i,e,t,n,s,r,o,a){let{geometry:c,_indirectBuffer:l}=i;for(let h=n,u=n+s;h<u;h++)Br(c,e,t,h,r,o,a)}function Om(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:c}=i,l=1/0,h=null;for(let u=n,f=n+s;u<f;u++){let m;m=Br(a,e,t,u,null,r,o),m&&m.distance<l&&(h=m,l=m.distance)}return h}function Bm(i,e,t,n,s,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let h=i,u=e+i;h<u;h++){let f;if(f=h,Mt(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function zm(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,c,l=0,h=i._roots;for(let f=0,m=h.length;f<m;f++)r=h[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,m,x=!1){let b=f*2;if(a[b+15]===65535){let p=o[f+6],y=a[b+14],M=1/0,v=1/0,R=1/0,E=-1/0,C=-1/0,U=-1/0;for(let T=3*p,S=3*(p+y);T<S;T++){let L=n[T],O=s.getX(L),B=s.getY(L),V=s.getZ(L);O<M&&(M=O),O>E&&(E=O),B<v&&(v=B),B>C&&(C=B),V<R&&(R=V),V>U&&(U=V)}return c[f+0]!==M||c[f+1]!==v||c[f+2]!==R||c[f+3]!==E||c[f+4]!==C||c[f+5]!==U?(c[f+0]=M,c[f+1]=v,c[f+2]=R,c[f+3]=E,c[f+4]=C,c[f+5]=U,!0):!1}else{let p=f+8,y=o[f+6],M=p+m,v=y+m,R=x,E=!1,C=!1;e?R||(E=e.has(M),C=e.has(v),R=!E&&!C):(E=!0,C=!0);let U=R||E,T=R||C,S=!1;U&&(S=u(p,m,R));let L=!1;T&&(L=u(y,m,R));let O=S||L;if(O)for(let B=0;B<3;B++){let V=p+B,J=y+B,Y=c[V],re=c[V+3],K=c[J],ue=c[J+3];c[f+B]=Y<K?Y:K,c[f+B+3]=re>ue?re:ue}return O}}}function Gn(i,e,t,n,s){let r,o,a,c,l,h,u=1/t.direction.x,f=1/t.direction.y,m=1/t.direction.z,x=t.origin.x,b=t.origin.y,g=t.origin.z,p=e[i],y=e[i+3],M=e[i+1],v=e[i+3+1],R=e[i+2],E=e[i+3+2];return u>=0?(r=(p-x)*u,o=(y-x)*u):(r=(y-x)*u,o=(p-x)*u),f>=0?(a=(M-b)*f,c=(v-b)*f):(a=(v-b)*f,c=(M-b)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),m>=0?(l=(R-g)*m,h=(E-g)*m):(l=(E-g)*m,h=(R-g)*m),r>h||l>o)?!1:((l>r||r!==r)&&(r=l),(h<o||o!==o)&&(o=h),r<=s&&o>=n)}function km(i,e,t,n,s,r,o,a){let{geometry:c,_indirectBuffer:l}=i;for(let h=n,u=n+s;h<u;h++){let f=l?l[h]:h;Br(c,e,t,f,r,o,a)}}function Hm(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:c}=i,l=1/0,h=null;for(let u=n,f=n+s;u<f;u++){let m;m=Br(a,e,t,c?c[u]:u,null,r,o),m&&m.distance<l&&(h=m,l=m.distance)}return h}function Vm(i,e,t,n,s,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let h=i,u=e+i;h<u;h++){let f;if(f=t.resolveTriangleIndex(h),Mt(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function Gm(i,e,t,n,s,r,o){at.setBuffer(i._roots[e]),If(0,i,t,n,s,r,o),at.clearBuffer()}function If(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=at,h=i*2;if(Ct(h,c)){let f=Bt(i,l),m=Vt(h,c);Fm(e,t,n,f,m,s,r,o)}else{let f=tn(i);Gn(f,a,n,r,o)&&If(f,e,t,n,s,r,o);let m=nn(i,l);Gn(m,a,n,r,o)&&If(m,e,t,n,s,r,o)}}var lS=["x","y","z"];function Wm(i,e,t,n,s,r){at.setBuffer(i._roots[e]);let o=Df(0,i,t,n,s,r);return at.clearBuffer(),o}function Df(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:c}=at,l=i*2;if(Ct(l,a)){let u=Bt(i,c),f=Vt(l,a);return Om(e,t,n,u,f,s,r)}else{let u=Wc(i,c),f=lS[u],x=n.direction[f]>=0,b,g;x?(b=tn(i),g=nn(i,c)):(b=nn(i,c),g=tn(i));let y=Gn(b,o,n,s,r)?Df(b,e,t,n,s,r):null;if(y){let R=y.point[f];if(x?R<=o[g+u]:R>=o[g+u+3])return y}let v=Gn(g,o,n,s,r)?Df(g,e,t,n,s,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}var Qc=new ot,zr=new on,kr=new on,qo=new we,Xm=new Lt,$c=new Lt;function qm(i,e,t,n){at.setBuffer(i._roots[e]);let s=Lf(0,i,t,n);return at.clearBuffer(),s}function Lf(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=at,c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Xm.set(t.boundingBox.min,t.boundingBox.max,n),s=Xm),Ct(c,o)){let h=e.geometry,u=h.index,f=h.attributes.position,m=t.index,x=t.attributes.position,b=Bt(i,a),g=Vt(c,o);if(qo.copy(n).invert(),t.boundsTree)return yt(i,r,$c),$c.matrix.copy(qo),$c.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>$c.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let M=b*3,v=(g+b)*3;M<v;M+=3)if(Mt(kr,M,u,f),kr.needsUpdate=!0,y.intersectsTriangle(kr))return!0;return!1}});for(let p=b*3,y=(g+b)*3;p<y;p+=3){Mt(zr,p,u,f),zr.a.applyMatrix4(qo),zr.b.applyMatrix4(qo),zr.c.applyMatrix4(qo),zr.needsUpdate=!0;for(let M=0,v=m.count;M<v;M+=3)if(Mt(kr,M,m,x),kr.needsUpdate=!0,zr.intersectsTriangle(kr))return!0}}else{let h=i+8,u=a[i+6];return yt(h,r,Qc),!!(s.intersectsBox(Qc)&&Lf(h,e,t,n,s)||(yt(u,r,Qc),s.intersectsBox(Qc)&&Lf(u,e,t,n,s)))}}var el=new we,Uf=new Lt,Yo=new Lt,hS=new D,uS=new D,fS=new D,dS=new D;function Ym(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Uf.set(e.boundingBox.min,e.boundingBox.max,t),Uf.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,h=e.attributes.position,u=e.index,f=Mn.getPrimitive(),m=Mn.getPrimitive(),x=hS,b=uS,g=null,p=null;s&&(g=fS,p=dS);let y=1/0,M=null,v=null;return el.copy(t).invert(),Yo.matrix.copy(el),i.shapecast({boundsTraverseOrder:R=>Uf.distanceToBox(R),intersectsBounds:(R,E,C)=>C<y&&C<o?(E&&(Yo.min.copy(R.min),Yo.max.copy(R.max),Yo.needsUpdate=!0),!0):!1,intersectsRange:(R,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:U=>Yo.distanceToBox(U),intersectsBounds:(U,T,S)=>S<y&&S<o,intersectsRange:(U,T)=>{for(let S=U,L=U+T;S<L;S++){Mt(m,3*S,u,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let O=R,B=R+E;O<B;O++){Mt(f,3*O,l,c),f.needsUpdate=!0;let V=f.distanceToTriangle(m,x,g);if(V<y&&(b.copy(x),p&&p.copy(g),y=V,M=O,v=S),V<r)return!0}}}});{let C=vi(e);for(let U=0,T=C;U<T;U++){Mt(m,3*U,u,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=R,L=R+E;S<L;S++){Mt(f,3*S,l,c),f.needsUpdate=!0;let O=f.distanceToTriangle(m,x,g);if(O<y&&(b.copy(x),p&&p.copy(g),y=O,M=S,v=U),O<r)return!0}}}}}),Mn.releasePrimitive(f),Mn.releasePrimitive(m),y===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=y,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(el),b.applyMatrix4(el),s.distance=b.sub(s.point).length(),s.faceIndex=v),n)}function jm(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,c,l=0,h=i._roots;for(let f=0,m=h.length;f<m;f++)r=h[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,m,x=!1){let b=f*2;if(a[b+15]===65535){let p=o[f+6],y=a[b+14],M=1/0,v=1/0,R=1/0,E=-1/0,C=-1/0,U=-1/0;for(let T=p,S=p+y;T<S;T++){let L=3*i.resolveTriangleIndex(T);for(let O=0;O<3;O++){let B=L+O;B=n?n[B]:B;let V=s.getX(B),J=s.getY(B),Y=s.getZ(B);V<M&&(M=V),V>E&&(E=V),J<v&&(v=J),J>C&&(C=J),Y<R&&(R=Y),Y>U&&(U=Y)}}return c[f+0]!==M||c[f+1]!==v||c[f+2]!==R||c[f+3]!==E||c[f+4]!==C||c[f+5]!==U?(c[f+0]=M,c[f+1]=v,c[f+2]=R,c[f+3]=E,c[f+4]=C,c[f+5]=U,!0):!1}else{let p=f+8,y=o[f+6],M=p+m,v=y+m,R=x,E=!1,C=!1;e?R||(E=e.has(M),C=e.has(v),R=!E&&!C):(E=!0,C=!0);let U=R||E,T=R||C,S=!1;U&&(S=u(p,m,R));let L=!1;T&&(L=u(y,m,R));let O=S||L;if(O)for(let B=0;B<3;B++){let V=p+B,J=y+B,Y=c[V],re=c[V+3],K=c[J],ue=c[J+3];c[f+B]=Y<K?Y:K,c[f+B+3]=re>ue?re:ue}return O}}}function Zm(i,e,t,n,s,r,o){at.setBuffer(i._roots[e]),Nf(0,i,t,n,s,r,o),at.clearBuffer()}function Nf(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=at,h=i*2;if(Ct(h,c)){let f=Bt(i,l),m=Vt(h,c);km(e,t,n,f,m,s,r,o)}else{let f=tn(i);Gn(f,a,n,r,o)&&Nf(f,e,t,n,s,r,o);let m=nn(i,l);Gn(m,a,n,r,o)&&Nf(m,e,t,n,s,r,o)}}var pS=["x","y","z"];function Km(i,e,t,n,s,r){at.setBuffer(i._roots[e]);let o=Ff(0,i,t,n,s,r);return at.clearBuffer(),o}function Ff(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:c}=at,l=i*2;if(Ct(l,a)){let u=Bt(i,c),f=Vt(l,a);return Hm(e,t,n,u,f,s,r)}else{let u=Wc(i,c),f=pS[u],x=n.direction[f]>=0,b,g;x?(b=tn(i),g=nn(i,c)):(b=nn(i,c),g=tn(i));let y=Gn(b,o,n,s,r)?Ff(b,e,t,n,s,r):null;if(y){let R=y.point[f];if(x?R<=o[g+u]:R>=o[g+u+3])return y}let v=Gn(g,o,n,s,r)?Ff(g,e,t,n,s,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}var tl=new ot,Hr=new on,Vr=new on,jo=new we,Jm=new Lt,nl=new Lt;function Qm(i,e,t,n){at.setBuffer(i._roots[e]);let s=Of(0,i,t,n);return at.clearBuffer(),s}function Of(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=at,c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Jm.set(t.boundingBox.min,t.boundingBox.max,n),s=Jm),Ct(c,o)){let h=e.geometry,u=h.index,f=h.attributes.position,m=t.index,x=t.attributes.position,b=Bt(i,a),g=Vt(c,o);if(jo.copy(n).invert(),t.boundsTree)return yt(i,r,nl),nl.matrix.copy(jo),nl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>nl.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let M=b,v=g+b;M<v;M++)if(Mt(Vr,3*e.resolveTriangleIndex(M),u,f),Vr.needsUpdate=!0,y.intersectsTriangle(Vr))return!0;return!1}});for(let p=b,y=g+b;p<y;p++){let M=e.resolveTriangleIndex(p);Mt(Hr,3*M,u,f),Hr.a.applyMatrix4(jo),Hr.b.applyMatrix4(jo),Hr.c.applyMatrix4(jo),Hr.needsUpdate=!0;for(let v=0,R=m.count;v<R;v+=3)if(Mt(Vr,v,m,x),Vr.needsUpdate=!0,Hr.intersectsTriangle(Vr))return!0}}else{let h=i+8,u=a[i+6];return yt(h,r,tl),!!(s.intersectsBox(tl)&&Of(h,e,t,n,s)||(yt(u,r,tl),s.intersectsBox(tl)&&Of(u,e,t,n,s)))}}var il=new we,Bf=new Lt,Zo=new Lt,mS=new D,gS=new D,xS=new D,bS=new D;function $m(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Bf.set(e.boundingBox.min,e.boundingBox.max,t),Bf.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,h=e.attributes.position,u=e.index,f=Mn.getPrimitive(),m=Mn.getPrimitive(),x=mS,b=gS,g=null,p=null;s&&(g=xS,p=bS);let y=1/0,M=null,v=null;return il.copy(t).invert(),Zo.matrix.copy(il),i.shapecast({boundsTraverseOrder:R=>Bf.distanceToBox(R),intersectsBounds:(R,E,C)=>C<y&&C<o?(E&&(Zo.min.copy(R.min),Zo.max.copy(R.max),Zo.needsUpdate=!0),!0):!1,intersectsRange:(R,E)=>{if(e.boundsTree){let C=e.boundsTree;return C.shapecast({boundsTraverseOrder:U=>Zo.distanceToBox(U),intersectsBounds:(U,T,S)=>S<y&&S<o,intersectsRange:(U,T)=>{for(let S=U,L=U+T;S<L;S++){let O=C.resolveTriangleIndex(S);Mt(m,3*O,u,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let B=R,V=R+E;B<V;B++){let J=i.resolveTriangleIndex(B);Mt(f,3*J,l,c),f.needsUpdate=!0;let Y=f.distanceToTriangle(m,x,g);if(Y<y&&(b.copy(x),p&&p.copy(g),y=Y,M=B,v=S),Y<r)return!0}}}})}else{let C=vi(e);for(let U=0,T=C;U<T;U++){Mt(m,3*U,u,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=R,L=R+E;S<L;S++){let O=i.resolveTriangleIndex(S);Mt(f,3*O,l,c),f.needsUpdate=!0;let B=f.distanceToTriangle(m,x,g);if(B<y&&(b.copy(x),p&&p.copy(g),y=B,M=S,v=U),B<r)return!0}}}}}),Mn.releasePrimitive(f),Mn.releasePrimitive(m),y===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=y,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(il),b.applyMatrix4(il),s.distance=b.sub(s.point).length(),s.faceIndex=v),n)}function eg(){return typeof SharedArrayBuffer<"u"}var Ko=new at.constructor,sl=new at.constructor,ps=new fs(()=>new ot),Gr=new ot,Wr=new ot,zf=new ot,kf=new ot,Hf=!1;function tg(i,e,t,n){if(Hf)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Hf=!0;let s=i._roots,r=e._roots,o,a=0,c=0,l=new we().copy(t).invert();for(let h=0,u=s.length;h<u;h++){Ko.setBuffer(s[h]),c=0;let f=ps.getPrimitive();yt(0,Ko.float32Array,f),f.applyMatrix4(l);for(let m=0,x=r.length;m<x&&(sl.setBuffer(r[m]),o=ri(0,0,t,l,n,a,c,0,0,f),sl.clearBuffer(),c+=r[m].length,!o);m++);if(ps.releasePrimitive(f),Ko.clearBuffer(),a+=s[h].length,o)break}return Hf=!1,o}function ri(i,e,t,n,s,r=0,o=0,a=0,c=0,l=null,h=!1){let u,f;h?(u=sl,f=Ko):(u=Ko,f=sl);let m=u.float32Array,x=u.uint32Array,b=u.uint16Array,g=f.float32Array,p=f.uint32Array,y=f.uint16Array,M=i*2,v=e*2,R=Ct(M,b),E=Ct(v,y),C=!1;if(E&&R)h?C=s(Bt(e,p),Vt(e*2,y),Bt(i,x),Vt(i*2,b),c,o+e,a,r+i):C=s(Bt(i,x),Vt(i*2,b),Bt(e,p),Vt(e*2,y),a,r+i,c,o+e);else if(E){let U=ps.getPrimitive();yt(e,g,U),U.applyMatrix4(t);let T=tn(i),S=nn(i,x);yt(T,m,Gr),yt(S,m,Wr);let L=U.intersectsBox(Gr),O=U.intersectsBox(Wr);C=L&&ri(e,T,n,t,s,o,r,c,a+1,U,!h)||O&&ri(e,S,n,t,s,o,r,c,a+1,U,!h),ps.releasePrimitive(U)}else{let U=tn(e),T=nn(e,p);yt(U,g,zf),yt(T,g,kf);let S=l.intersectsBox(zf),L=l.intersectsBox(kf);if(S&&L)C=ri(i,U,t,n,s,r,o,a,c+1,l,h)||ri(i,T,t,n,s,r,o,a,c+1,l,h);else if(S)if(R)C=ri(i,U,t,n,s,r,o,a,c+1,l,h);else{let O=ps.getPrimitive();O.copy(zf).applyMatrix4(t);let B=tn(i),V=nn(i,x);yt(B,m,Gr),yt(V,m,Wr);let J=O.intersectsBox(Gr),Y=O.intersectsBox(Wr);C=J&&ri(U,B,n,t,s,o,r,c,a+1,O,!h)||Y&&ri(U,V,n,t,s,o,r,c,a+1,O,!h),ps.releasePrimitive(O)}else if(L)if(R)C=ri(i,T,t,n,s,r,o,a,c+1,l,h);else{let O=ps.getPrimitive();O.copy(kf).applyMatrix4(t);let B=tn(i),V=nn(i,x);yt(B,m,Gr),yt(V,m,Wr);let J=O.intersectsBox(Gr),Y=O.intersectsBox(Wr);C=J&&ri(T,B,n,t,s,o,r,c,a+1,O,!h)||Y&&ri(T,V,n,t,s,o,r,c,a+1,O,!h),ps.releasePrimitive(O)}}return C}var rl=new Lt,ng=new ot,_S={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},ol=class i{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,s=e._roots,r=e._indirectBuffer,o=n.getIndex(),a;return t.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=e,a=new i(t,{...n,[Hc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=t.getIndex();if(c===null){let l=new ut(e.index,1,!1);t.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({..._S,[Hc]:!1},t),t.useSharedArrayBuffer&&!eg())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Hc]||(Cm(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ot))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?jm:zm)(this,e)}traverse(e,t=0){let n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,h=r[l+15]===65535;if(h){let u=s[a+6],f=r[l+14];e(c,h,new Float32Array(n,a*4,6),u,f)}else{let u=a+32/4,f=s[a+6],m=s[a+7];e(c,h,new Float32Array(n,a*4,6),m)||(o(u,c+1),o(f,c+1))}}}raycast(e,t=Nn,n=0,s=1/0){let r=this._roots,o=this.geometry,a=[],c=t.isMaterial,l=Array.isArray(t),h=o.groups,u=c?t.side:t,f=this.indirect?Zm:Gm;for(let m=0,x=r.length;m<x;m++){let b=l?t[h[m].materialIndex].side:u,g=a.length;if(f(this,m,b,e,a,n,s),l){let p=h[m].materialIndex;for(let y=g,M=a.length;y<M;y++)a[y].face.materialIndex=p}}return a}raycastFirst(e,t=Nn,n=0,s=1/0){let r=this._roots,o=this.geometry,a=t.isMaterial,c=Array.isArray(t),l=null,h=o.groups,u=a?t.side:t,f=this.indirect?Km:Wm;for(let m=0,x=r.length;m<x;m++){let b=c?t[h[m].materialIndex].side:u,g=f(this,m,b,e,n,s);g!=null&&(l==null||g.distance<l.distance)&&(l=g,c&&(g.face.materialIndex=h[m].materialIndex))}return l}intersectsGeometry(e,t){let n=!1,s=this._roots,r=this.indirect?Qm:qm;for(let o=0,a=s.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){let t=Mn.getPrimitive(),n=this.indirect?Vm:Bm,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){let u=o;o=(f,m,x,b,g)=>u(f,m,x,b,g)?!0:n(f,m,this,a,x,b,t)}else o||(a?o=(u,f,m,x)=>n(u,f,this,a,m,x,t):o=(u,f,m)=>m);let c=!1,l=0,h=this._roots;for(let u=0,f=h.length;u<f;u++){let m=h[u];if(c=Im(this,u,r,o,s,l),c)break;l+=m.byteLength}return Mn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=Mn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?x=>{let b=this.resolveTriangleIndex(x);Mt(o,b*3,a,c)}:x=>{Mt(o,x*3,a,c)},h=Mn.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,m=e.indirect?x=>{let b=e.resolveTriangleIndex(x);Mt(h,b*3,u,f)}:x=>{Mt(h,x*3,u,f)};if(r){let x=(b,g,p,y,M,v,R,E)=>{for(let C=p,U=p+y;C<U;C++){m(C),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let T=b,S=b+g;T<S;T++)if(l(T),o.needsUpdate=!0,r(o,h,T,C,M,v,R,E))return!0}return!1};if(s){let b=s;s=function(g,p,y,M,v,R,E,C){return b(g,p,y,M,v,R,E,C)?!0:x(g,p,y,M,v,R,E,C)}}else s=x}return tg(this,e,t,s)}intersectsBox(e,t){return rl.set(e.min,e.max,t),rl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>rl.intersectsBox(n),intersectsTriangle:n=>rl.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,o=1/0){return(this.indirect?$m:Ym)(this,e,t,n,s,r,o)}closestPointToPoint(e,t={},n=0,s=1/0){return Dm(this,e,t,n,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{yt(0,new Float32Array(n),ng),e.union(ng)}),e}};function Vf(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}var IE=parseInt("170")>=166,al=new ei,ig=new D,sg=new we,vS=Qe.prototype.raycast,yS=cc.prototype.raycast,rg=new D,an=new Qe,cl=[];function og(i,e){this.isBatchedMesh?MS.call(this,i,e):SS.call(this,i,e)}function MS(i,e){if(this.boundsTrees){let t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;an.material=this.material,an.geometry=this.geometry;let o=an.geometry.boundsTree,a=an.geometry.drawRange;an.geometry.boundingSphere===null&&(an.geometry.boundingSphere=new Nt);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;let h=n[c].geometryIndex;if(an.geometry.boundsTree=t[h],this.getMatrixAt(c,an.matrixWorld).premultiply(r),!an.geometry.boundsTree){this.getBoundingBoxAt(h,an.geometry.boundingBox),this.getBoundingSphereAt(h,an.geometry.boundingSphere);let u=s[h];an.geometry.setDrawRange(u.start,u.count)}an.raycast(i,cl);for(let u=0,f=cl.length;u<f;u++){let m=cl[u];m.object=this,m.batchId=c,e.push(m)}cl.length=0}an.geometry.boundsTree=o,an.geometry.drawRange=a,an.material=null,an.geometry=null}else yS.call(this,i,e)}function SS(i,e){if(this.geometry.boundsTree){if(this.material===void 0)return;sg.copy(this.matrixWorld).invert(),al.copy(i.ray).applyMatrix4(sg),rg.setFromMatrixScale(this.matrixWorld),ig.copy(al.direction).multiply(rg);let t=ig.length(),n=i.near/t,s=i.far/t,r=this.geometry.boundsTree;if(i.firstHitOnly===!0){let o=Vf(r.raycastFirst(al,this.material,n,s),this,i);o&&e.push(o)}else{let o=r.raycast(al,this.material,n,s);for(let a=0,c=o.length;a<c;a++){let l=Vf(o[a],this,i);l&&e.push(l)}}}else vS.call(this,i,e)}function ag(i={}){return this.boundsTree=new ol(this,i),this.boundsTree}var wt={uSweep:{value:-100},uSweepDir:{value:new D(0,0,-1)},uMask:{value:null},uBoxMin:{value:new D(-1,0,-2.5)},uBoxSize:{value:new D(2,1.8,5)},uTime:{value:0},uDirt:{value:1},uWiperA:{value:new D},uWiperB:{value:new D},uWiperR:{value:new nt},uWiperOn:{value:0}},wS=`
float dHash(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float dNoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(dHash(i+vec3(0,0,0)),dHash(i+vec3(1,0,0)),f.x),
                 mix(dHash(i+vec3(0,1,0)),dHash(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(dHash(i+vec3(0,0,1)),dHash(i+vec3(1,0,1)),f.x),
                 mix(dHash(i+vec3(0,1,1)),dHash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
// \u042F\u0447\u0435\u0438\u0441\u0442\u044B\u0439 \u0448\u0443\u043C: \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043E \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \xAB\u043A\u0430\u043F\u043B\u0438\xBB
float dCell(vec3 p){
  vec3 i = floor(p), f = fract(p); float md = 1.0;
  for (int z=-1; z<=1; z++) for (int y=-1; y<=1; y++) for (int x=-1; x<=1; x++){
    vec3 g = vec3(float(x),float(y),float(z));
    vec3 o = vec3(dHash(i+g), dHash(i+g+19.1), dHash(i+g+47.7));
    md = min(md, length(g + o - f));
  }
  return md;
}
float dFbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*dNoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
`,TS=`
uniform float uSweep; uniform vec3 uSweepDir; uniform highp sampler3D uMask;
uniform vec3 uBoxMin; uniform vec3 uBoxSize; uniform float uTime; uniform float uDirt;
uniform vec3 uWiperA; uniform vec3 uWiperB; uniform vec4 uWiperR; uniform float uWiperOn;
varying vec3 vDW; varying vec3 vDN; varying float vExt;
float gDirt; float gDirtH; float gMudWet; float gWet; float gFoam; vec3 gMud;
${wS}
void computeDirt(){
  vec3 p = vDW;
  vec3 b = (p - uBoxMin) / uBoxSize;
  // \u0413\u0440\u044F\u0437\u044C \xAB\u043F\u043E\u0441\u043B\u0435 \u0434\u043E\u0440\u043E\u0433\u0438\xBB, \u0441\u043B\u043E\u044F\u043C\u0438:
  //  1) \u0442\u043E\u043D\u043A\u0430\u044F \u043F\u044B\u043B\u044C \u043D\u0430 \u0432\u0441\u0451\u043C \u043A\u0443\u0437\u043E\u0432\u0435 (\u0433\u0443\u0449\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0430\u043D\u0435\u043B\u044F\u0445), \u0441\u043A\u0432\u043E\u0437\u044C \u043D\u0435\u0451 \u0432\u0438\u0434\u0435\u043D \u043B\u0430\u043A;
  //  2) \u0434\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u0433\u0440\u044F\u0437\u044C \u0441\u043D\u0438\u0437\u0443 \u2014 \u043F\u043E\u0440\u043E\u0433\u0438, \u043D\u0438\u0437 \u0434\u0432\u0435\u0440\u0435\u0439, \u0431\u0430\u043C\u043F\u0435\u0440\u044B, \u0441 \u0440\u0432\u0430\u043D\u043E\u0439 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0433\u0440\u0430\u043D\u0438\u0446\u0435\u0439;
  //  3) \u0432\u0435\u0435\u0440 \u0431\u0440\u044B\u0437\u0433 \u0437\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438 \u0438 \u0433\u0440\u044F\u0437\u043D\u044B\u0435 \u0430\u0440\u043A\u0438;
  //  4) \xAB\u043F\u044B\u043B\u0435\u0432\u043E\u0439 \u043C\u0435\u0448\u043E\u043A\xBB \u043D\u0430 \u0437\u0430\u0434\u043D\u0435\u0439 \u0434\u0432\u0435\u0440\u0438 \u0438 \u0431\u0430\u043C\u043F\u0435\u0440\u0435;
  //  5) \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0435 \u043A\u0430\u043F\u043B\u0438 \u0438 \u0434\u043E\u0440\u043E\u0436\u043A\u0438 \u043E\u0442 \u0434\u043E\u0436\u0434\u044F.
  vec3 n = normalize(vDN);
  float up = clamp(n.y, 0.0, 1.0);
  float side = 1.0 - abs(n.y);
  float L = uBoxSize.z, H = uBoxSize.y;
  float hy = p.y - uBoxMin.y;                       // \u0432\u044B\u0441\u043E\u0442\u0430 \u043D\u0430\u0434 \u0437\u0435\u043C\u043B\u0451\u0439, \u043C
  float fz = (p.z - uBoxMin.z) / L;                 // 0 \u2014 \u0437\u0430\u0434, 1 \u2014 \u043F\u0435\u0440\u0435\u0434

  float nA = dFbm(p*1.3);
  float nB = dFbm(p*4.0 + 3.1);
  float nC = dNoise(p*45.0);

  // 1) \u043F\u044B\u043B\u044C
  float dustA = 0.42 + 0.33*up + 0.12*(nA - 0.5)*2.0;
  dustA *= 0.8 + 0.35*nB;
  // \u0434\u043E\u0440\u043E\u0436\u043A\u0438 \u0434\u043E\u0436\u0434\u044F \u043F\u043E \u043F\u044B\u043B\u0438 \u043D\u0430 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0430\u043D\u0435\u043B\u044F\u0445
  float rain = smoothstep(0.74, 0.9, dNoise(vec3(p.x*24.0 + p.z*24.0, p.y*0.7 + nA*1.5, p.z*24.0 - p.x*24.0)))
             * smoothstep(0.35, 0.65, dNoise(p*2.2 + 5.0));
  dustA *= 1.0 - 0.55*rain*side;
  dustA = clamp(dustA, 0.0, 0.88);

  // 2) \u0433\u0440\u044F\u0437\u044C \u0441\u043D\u0438\u0437\u0443
  float line = 0.38 + 0.10*(nA - 0.5)*2.0 + 0.06*(nB - 0.5)*2.0;   // \u043C \u043D\u0430\u0434 \u0437\u0435\u043C\u043B\u0451\u0439 (\u043D\u043E\u0440\u043C. \u043A H \u043D\u0438\u0436\u0435)
  line *= H / 1.65;
  // \u043A\u043E\u043B\u0451\u0441\u0430: \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0430\u043C
  float zf = uBoxMin.z + L*0.81, zr = uBoxMin.z + L*0.20, wy = H*0.21;
  float wr = H*0.27;
  float dF = length(vec2(p.y - uBoxMin.y - wy, p.z - zf));
  float dR = length(vec2(p.y - uBoxMin.y - wy, p.z - zr));
  float arch = max(smoothstep(wr*1.55, wr*1.05, dF), smoothstep(wr*1.55, wr*1.05, dR));
  // \u0432\u0435\u0435\u0440 \u0431\u0440\u044B\u0437\u0433 \u0437\u0430 \u043A\u043E\u043B\u0435\u0441\u043E\u043C (\u0435\u0434\u0435\u043C \u0432 +Z, \u0433\u0440\u044F\u0437\u044C \u043B\u0435\u0442\u0438\u0442 \u043D\u0430\u0437\u0430\u0434)
  float behF = zf - p.z, behR = zr - p.z;
  float fan = max(smoothstep(0.0, 0.25, behF) * smoothstep(1.3, 0.2, behF),
                  smoothstep(0.0, 0.25, behR) * smoothstep(1.0, 0.15, behR));
  fan *= smoothstep(H*0.62, H*0.15, hy);
  line += fan * H * 0.12 + arch * H * 0.15;
  // \u0437\u0430\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C \u0438 \u0431\u0430\u043C\u043F\u0435\u0440 \u2014 \xAB\u043F\u044B\u043B\u0435\u0432\u043E\u0439 \u043C\u0435\u0448\u043E\u043A\xBB
  float rear = smoothstep(0.10, 0.0, fz) * smoothstep(-0.1, -0.6, n.z);
  line += rear * H * 0.35;
  float grimeA = 1.0 - smoothstep(line - H*0.10, line + H*0.03, hy);
  grimeA *= 0.7 + 0.3*nB;
  grimeA = max(grimeA, arch * (0.6 + 0.3*nB));
  grimeA = clamp(grimeA + rear*0.35*nA, 0.0, 1.0);

  // 3) \u0431\u0440\u044B\u0437\u0433\u0438-\u043A\u0430\u043F\u043B\u0438: \u043D\u0438\u0436\u0435 \u2014 \u0433\u0443\u0449\u0435
  float lowZone = 1.0 - smoothstep(line, line + H*0.30, hy);
  float c1 = dCell(p*22.0), c2 = dCell(p*55.0 + 7.0);
  float ds = 0.45 + 0.8*dNoise(p*9.0 + 2.0);              // \u0440\u0430\u0437\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u0430\u043F\u0435\u043B\u044C
  float drops = smoothstep(0.30*ds, 0.16*ds, c1) * lowZone * (0.2 + fan*0.7 + arch*0.4) * smoothstep(0.25, 0.6, nB);
  drops = max(drops, smoothstep(0.22, 0.08, c2) * lowZone * 0.6 * smoothstep(0.3, 0.7, nA));
  float ring = smoothstep(0.30*ds, 0.25*ds, c1) * smoothstep(0.13*ds, 0.2*ds, c1) * lowZone * smoothstep(0.25, 0.6, nB);   // \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0439 \u043E\u0431\u043E\u0434\u043E\u043A

  // \u0446\u0432\u0435\u0442\u0430 (\u043B\u0438\u043D\u0435\u0439\u043D\u044B\u0435)
  vec3 dustC  = vec3(0.34, 0.31, 0.27) * (0.85 + 0.3*nC);   // \u0441\u0435\u0440\u043E-\u0431\u0435\u0436\u0435\u0432\u0430\u044F \u043F\u044B\u043B\u044C
  vec3 grimeC = mix(vec3(0.13, 0.10, 0.07), vec3(0.26, 0.20, 0.14), smoothstep(0.3, 0.7, nB)) * (0.8 + 0.35*nC);
  vec3 dropC  = vec3(0.22, 0.18, 0.13);

  vec3 col = dustC; float a = dustA;
  col = mix(col, grimeC, grimeA); a = a + grimeA*(1.0 - a);
  col = mix(col, dropC*0.7, drops*0.85); a = a + drops*0.85*(1.0 - a);
  col = mix(col, dropC*1.25, ring*0.5);
  // \u0448\u0438\u043D\u044B \u0438 \u0434\u0438\u0441\u043A\u0438 \u2014 \u0442\u0451\u043C\u043D\u0430\u044F \u043F\u044B\u043B\u044C, \u0431\u0435\u0437 \xAB\u043F\u0443\u0434\u0440\u044B\xBB
  gMud = col;
  float d = clamp(a, 0.0, 1.0);
  #ifdef DIRT_GLASS
  // \u0441\u043B\u0435\u0434\u044B \u0434\u0432\u043E\u0440\u043D\u0438\u043A\u043E\u0432 \u043D\u0430 \u043B\u043E\u0431\u043E\u0432\u043E\u043C \u0441\u0442\u0435\u043A\u043B\u0435: \u0432\u043D\u0443\u0442\u0440\u0438 \u0434\u0443\u0433 \u0433\u0440\u044F\u0437\u0438 \u043C\u0430\u043B\u043E, \u043F\u043E \u043A\u0440\u0430\u044E \u0434\u0443\u0433\u0438 \u2014 \u0432\u0430\u043B\u0438\u043A
  if (uWiperOn > 0.5 && abs(n.z) > 0.2 && abs(n.y) > 0.3 && p.y > uWiperA.y - 0.03 && p.z < uWiperA.z + 0.08) {
    float r1 = length(p - uWiperA), r2 = length(p - uWiperB);
    float soft = 0.015;
    float w1 = smoothstep(uWiperR.x, uWiperR.x + soft, r1) * (1.0 - smoothstep(uWiperR.y - soft, uWiperR.y, r1));
    float w2 = smoothstep(uWiperR.z, uWiperR.z + soft, r2) * (1.0 - smoothstep(uWiperR.w - soft, uWiperR.w, r2));
    float wiped = max(w1, w2);
    // \u0442\u043E\u043D\u043A\u0438\u0435 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0437\u0432\u043E\u0434\u044B \u043E\u0442 \u0440\u0435\u0437\u0438\u043D\u043A\u0438
    float streak = 0.55 + 0.45 * dNoise(vec3(r1*140.0, r2*140.0, 0.0));
    d *= mix(1.0, 0.12 * streak, wiped);
    // \u0432\u0430\u043B\u0438\u043A \u0433\u0440\u044F\u0437\u0438 \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E \u0434\u0443\u0433
    float ridge = max(smoothstep(0.03, 0.0, abs(r1 - uWiperR.y - 0.012)), smoothstep(0.03, 0.0, abs(r2 - uWiperR.w - 0.012)));
    ridge *= 1.0 - wiped;
    d = max(d, ridge * (0.75 + 0.25*nB));
    col = mix(col, col*0.8, ridge);
    gMud = col;
  }
  #endif
  gMudWet = smoothstep(0.6, 1.0, grimeA) * smoothstep(H*0.18, 0.0, hy) * 0.6;
  gDirtH = grimeA*(0.6*nB + 0.4*nC) + drops*0.15;

  // \u0447\u0438\u0441\u0442\u043E\u0442\u0430: \u0437\u0430\u0432\u0435\u0441\u0430 + \u0440\u0443\u0447\u043D\u0430\u044F \u043C\u043E\u0439\u043A\u0430
  float s = dot(p, uSweepDir);
  float sweepClean = 1.0 - smoothstep(uSweep - 0.025, uSweep + 0.025, s);
  float m = texture(uMask, clamp(b, 0.0, 1.0)).r;
  float clean = max(sweepClean, smoothstep(0.15, 0.85, m));
  // \u0441\u0430\u043B\u043E\u043D \u0438 \u0432\u0441\u0451 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u0435 \u043A\u0443\u0437\u043E\u0432\u043E\u043C \u2014 \u0432\u0441\u0435\u0433\u0434\u0430 \u0447\u0438\u0441\u0442\u043E\u0435
  float ext = smoothstep(0.3, 0.9, vExt);
  gDirt = d * (1.0 - clean) * uDirt * ext;

  float behind = uSweep - s;   // >0 \u2014 \u0443\u0436\u0435 \u0432\u044B\u043C\u044B\u0442\u043E
  gWet = sweepClean * (1.0 - smoothstep(0.0, 0.9, behind));
  gWet = max(gWet, smoothstep(0.2, 0.6, m) * (1.0 - smoothstep(0.6, 1.0, m)) );
  float edge = 1.0 - smoothstep(0.0, 0.12, abs(s - uSweep));
  float bub = smoothstep(0.35, 0.8, dNoise(p*60.0 + vec3(0.0, -uTime*2.0, 0.0)));
  gFoam = edge * (0.35 + 0.65*bub) * ext;
  gWet *= ext;
}
vec3 dirtBump(vec3 surf_pos, vec3 surf_norm, float hgt){
  vec3 sx = dFdx(surf_pos), sy = dFdy(surf_pos);
  vec3 r1 = cross(sy, surf_norm), r2 = cross(surf_norm, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(hgt)*r1 + dFdy(hgt)*r2);
  return normalize(abs(det)*surf_norm - grad);
}
`;function cg(i){if(!i||i.userData.dirtPatched||!i.isMeshStandardMaterial)return;i.userData.dirtPatched=!0;let e=i.transparent||(i.transmission||0)>0;e&&(i.defines=Object.assign({},i.defines,{DIRT_GLASS:""})),i.onBeforeCompile=t=>{Object.assign(t.uniforms,wt),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDW; varying vec3 vDN; varying float vExt; attribute float _exterior;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 dwp = vec4(transformed, 1.0);
        vec3 dwn = objectNormal;
        #ifdef USE_INSTANCING
          dwp = instanceMatrix * dwp;
          dwn = mat3(instanceMatrix) * dwn;
        #endif
        vExt = _exterior;
        vDW = (modelMatrix * dwp).xyz;
        vDN = normalize(mat3(modelMatrix) * dwn);`);let n=We.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission * (1.0 - gDirt);");t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+TS).replace("#include <color_fragment>",`#include <color_fragment>
        computeDirt();
        diffuseColor.rgb = mix(diffuseColor.rgb, gMud, gDirt);
        diffuseColor.a = mix(diffuseColor.a, 1.0, gDirt*0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92,0.95,1.0), gFoam*0.85);
        diffuseColor.a = max(diffuseColor.a, gFoam*0.8);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mix(0.92, 0.5, gMudWet), smoothstep(0.0, 0.55, gDirt));
        roughnessFactor = mix(roughnessFactor, 0.6, gFoam);
        roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.06), gWet*0.9);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.0, max(gDirt, gFoam));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (gDirt > 0.001) normal = dirtBump(-vViewPosition, normal, gDirtH * 0.008 * gDirt);
        if (gWet > 0.001) {
          float drops = dNoise(vDW*55.0 + vec3(0.0, uTime*0.6, 0.0));
          normal = dirtBump(-vViewPosition, normal, smoothstep(0.55,0.9,drops) * 0.004 * gWet);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance *= 1.0 - gDirt*0.9;`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= 1.0 - smoothstep(0.0, 0.45, gDirt);
        #endif`).replace("#include <transmission_fragment>",n)},i.customProgramCacheKey=()=>"dirt-v2"+(e?"-glass":""),i.needsUpdate=!0}var lg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",AS=`
uniform sampler2D tDiffuse; uniform sampler2D tSnap;
uniform float uP; uniform int uMode; uniform float uAspect;
varying vec2 vUv;
float h1(float n){ return fract(sin(n)*43758.5453); }
float n1(float x){ float i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f); return mix(h1(i), h1(i+1.0), f); }
float fbm1(float x){ float s = 0.0, a = 0.5; for(int i=0;i<5;i++){ s += a*n1(x); x = x*2.07 + 13.1; a *= 0.5; } return s; }
float easeIO(float t){ return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t + 2.0, 3.0)/2.0; }

void main(){
  vec2 uv = vUv;
  if (uMode == 1) {
    // ---- \u0448\u0442\u043E\u0440\u043A\u0430: \u0433\u0440\u0430\u043D\u0438\u0446\u0430 x = edge(y), \u0440\u0432\u0430\u043D\u0430\u044F, \u0441 \u0442\u043E\u043D\u043A\u0438\u043C\u0438 \xAB\u0432\u043E\u043B\u043E\u043A\u043D\u0430\u043C\u0438\xBB
    float p = 1.0 - (1.0 - uP)*(1.0 - uP);      // \u0441\u0440\u0430\u0437\u0443 \u0432 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u043C\u044F\u0433\u043A\u043E \u043A \u043A\u043E\u043D\u0446\u0443
    float edge = mix(-0.1, 1.12, p);
    float y = uv.y * 2.4;
    edge += (fbm1(y*3.0) - 0.5) * 0.16 + (n1(y*40.0) - 0.5) * 0.025;
    float d = uv.x - edge;                       // <0 \u2014 \u0443\u0436\u0435 \u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u0434\u0440
    float m = smoothstep(-0.004, 0.004, d);      // 1 \u2014 \u0435\u0449\u0451 \u0441\u0442\u0430\u0440\u044B\u0439 \u043A\u0430\u0434\u0440
    // \u0443 \u043A\u0440\u043E\u043C\u043A\u0438 \u043A\u0430\u0434\u0440 \u0441\u043B\u0435\u0433\u043A\u0430 \xAB\u0442\u044F\u043D\u0435\u0442\u0441\u044F\xBB \u0438 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044F
    float glow = exp(-abs(d) * 55.0);
    vec2 duv = uv + vec2(-glow * 0.012, 0.0);
    vec4 live = texture2D(tDiffuse, duv);
    vec4 snap = texture2D(tSnap, duv);
    vec4 col = mix(live, snap, m);
    col.rgb += vec3(0.75, 0.88, 1.0) * glow * 0.45 + vec3(1.0) * exp(-abs(d) * 260.0) * 0.6;
    gl_FragColor = col;
  } else {
    // ---- whip pan: \u0441\u043C\u0430\u0437 \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438; \u0434\u043E \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u044B \u0443\u0435\u0437\u0436\u0430\u0435\u0442 \u0441\u0442\u0430\u0440\u044B\u0439 \u043A\u0430\u0434\u0440, \u043F\u043E\u0441\u043B\u0435 \u2014 \u0432\u044A\u0435\u0437\u0436\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439
    float p = clamp(uP, 0.0, 1.0);
    bool first = p < 0.5;
    float q = first ? p / 0.5 : (p - 0.5) / 0.5;
    float off = first ? easeIO(q) * 0.85 : -(1.0 - easeIO(q)) * 0.85;   // \u0441\u0434\u0432\u0438\u0433 \u043A\u0430\u0434\u0440\u0430
    float speed = first ? sin(q * 1.5708) : cos(q * 1.5708);           // \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u2192 \u0434\u043B\u0438\u043D\u0430 \u0441\u043C\u0430\u0437\u0430
    float blur = 0.02 + 0.22 * speed * speed;
    vec3 acc = vec3(0.0); float wsum = 0.0;
    for (int i = 0; i < 32; i++) {
      float t = float(i) / 31.0 - 0.5;
      vec2 s = vec2(uv.x - off + t * blur, uv.y);
      s.x = abs(s.x); s.x = 1.0 - abs(1.0 - s.x);   // \u0437\u0435\u0440\u043A\u0430\u043B\u0438\u043C \u043A\u0440\u0430\u044F, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0431\u044B\u043B\u043E \u043F\u0443\u0441\u0442\u043E\u0442\u044B
      float w = 1.0 - abs(t) * 1.2;
      acc += (first ? texture2D(tSnap, s).rgb : texture2D(tDiffuse, s).rgb) * w; wsum += w;
    }
    vec3 col = acc / wsum;
    col *= 1.0 + 0.35 * speed;                                          // \u043B\u0451\u0433\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0441\u0432\u0435\u0442 \u043D\u0430 \u043F\u0438\u043A\u0435
    gl_FragColor = vec4(col, 1.0);
  }
}`,ll=class extends yn{constructor(){super(),this.enabled=!1,this.needsSwap=!0,this.capture=!1,this.snapRT=new Xt(4,4,{type:Ht}),this.copy=new si(new xt({uniforms:{tDiffuse:{value:null}},vertexShader:lg,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1})),this.material=new xt({uniforms:{tDiffuse:{value:null},tSnap:{value:this.snapRT.texture},uP:{value:0},uMode:{value:1},uAspect:{value:1}},vertexShader:lg,fragmentShader:AS,depthTest:!1,depthWrite:!1}),this.quad=new si(this.material)}setSize(e,t){this.snapRT.setSize(e,t),this.material.uniforms.uAspect.value=e/t}render(e,t,n){this.capture&&(this.copy.material.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.snapRT),this.copy.render(e),this.capture=!1),this.material.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}};Ft.prototype.computeBoundsTree=ag;Qe.prototype.raycast=og;var ES=[{id:"haval",name:"Haval H6",url:"models/haval.glb",front:-1,paint:"mat1"},{id:"omoda",name:"Omoda 5",url:"models/omoda.glb",front:1,paint:"CarPaint"},{id:"jetour",name:"Jetour Dashing",url:"models/jetour.glb",front:1,paint:"CarPaint_UV0"}],RS=[{id:"compass",name:"Jeep Compass",url:"models/en/compass.glb",front:1,paint:"Jeep_Compass_mat_13_1"},{id:"blazer",name:"Chevrolet Blazer",url:"models/en/blazer.glb",front:1,paint:"B4W_carpaint"},{id:"traverse",name:"Chevrolet Traverse",url:"models/en/traverse-rs.glb",front:1,paint:"CarPaint"},{id:"tesla-m3",name:"Tesla Model 3",url:"models/en/tesla-m3.glb",front:1,paint:"carpaint"},{id:"m4-adro",name:"BMW M4 ADRO",url:"models/en/m4-adro.glb",front:1,paint:"untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008"}],Wf=window.CAR_MODELS||(window.LOCALE==="en"?RS:ES),CS=4.6,bg=window.CAR_PAINT===void 0?"#060708":window.CAR_PAINT,ul=null;function PS(){return ul||(ul=new vn({color:new Te(bg),metalness:.15,roughness:.12,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.25,side:dn})),ul}var Rt=i=>document.querySelector(i),na=i=>window.__t?window.__t(i):i,ln=Rt("#scene"),Xs=Rt(".stage"),IS=matchMedia("(pointer: coarse)").matches,ea=IS||(navigator.hardwareConcurrency||8)<=4||location.search.includes("lite"),hi=new ic({canvas:ln,antialias:!0,powerPreference:"high-performance"});hi.setPixelRatio(Math.min(devicePixelRatio,ea?1.5:1.75));hi.toneMapping=Do;hi.toneMappingExposure=1;hi.outputColorSpace=Pt;var Bn=new wo;Bn.background=new Te(460810);Bn.fog=new sc(460810,12,26);var ct=new Ut(36,1,.3,60),it=new Uc(ct,ln);it.enablePan=!1;it.enableZoom=!1;it.enableDamping=!0;it.dampingFactor=.07;it.rotateSpeed=.7;it.minPolarAngle=.12;it.maxPolarAngle=1.5;it.minDistance=3.4;it.maxDistance=12;var Xf=3.1,DS=3.4,LS=2.3,_g=12,qf=36,Vs=new D;function US(){Vs.copy(ct.position).sub(it.target);let i=Math.max(Vs.length(),1e-4),e=Ot.clamp(Vs.y/i,-1,1),t=Ot.smoothstep(e,.55,.9);it.minDistance=Ot.lerp(DS,LS,t);let n=Xf-it.target.y,s=e>.01?n/e:1/0;it.maxDistance=Math.max(it.minDistance,Math.min(_g,s)),qi!==null&&(qi=Ot.clamp(qi,it.minDistance,it.maxDistance));let r=qf+28*Ot.smoothstep(e,.6,.97);Math.abs(ct.fov-r)>.01&&(ct.fov+=(r-ct.fov)*.25,ct.updateProjectionMatrix())}it.target.set(0,.72,0);ct.position.set(-4.6,1.55,5.6);ln.style.touchAction="pan-y";var NS=new Tr(hi);function vg(i,e=.07){return new ti(e,.03,i)}function Yf(i){let e=new wo;if(i){let a=new Qe(new dc(30,32,16),new kt({map:i,side:Wt,color:new Te(.1,.1,.11)}));e.add(a)}let t=new kt({color:new Te(4.5,4.5,4.8)});for(let a=-3;a<=3;a++){let c=new Qe(vg(16,.18),t);c.position.set(a*1.5,4,0),c.rotation.y=.32,e.add(c)}let n=new kt({color:new Te(1.6,1.6,1.75)}),s=new Qe(new gi(8,1.2),n);s.position.set(-9,2,0),s.rotation.y=Math.PI/2,e.add(s);let r=s.clone();r.position.x=9,r.rotation.y=-Math.PI/2,e.add(r);let o=NS.fromScene(e,.02).texture;Bn.environment=o,Bn.environmentIntensity=1}var ks=new Tn;Bn.add(ks);{if(!ea){let c=new Bo(new gi(40,40),{textureWidth:1024,textureHeight:1024,color:9080210});c.rotation.x=-Math.PI/2,c.position.y=-.03,ks.add(c)}let e=QS();e.wrapS=e.wrapT=pi,e.repeat.set(6,6);let t=new Qe(new gi(40,40),new xi({color:1447706,map:e,roughness:.55,metalness:0,transparent:!ea,opacity:ea?1:.8}));t.rotation.x=-Math.PI/2,ks.add(t);let n=new kt({color:new Te(5,5,5.3),toneMapped:!1,fog:!0});for(let c=-4;c<=4;c++){let l=new Qe(vg(22,.07),n);l.position.set(c*1.45,3.45,0),l.rotation.y=.32,ks.add(l)}let s=$S(),r=new xi({color:723982,map:s,roughness:.75,metalness:.1,side:Wt,envMapIntensity:.15}),o=new Qe(new ti(26,3.9,26),r);o.position.y=1.7,ks.add(o);let a=new kt({color:new Te(1.8,1.9,2.2),toneMapped:!1});for(let c of[-7,-2.5,2.5,7]){let l=new Qe(new ti(.05,2.8,.02),a);l.position.set(c,1.7,-12.95),ks.add(l);let h=l.clone();h.position.z=12.95,ks.add(h)}}var oa=new Qe(new gi(1,1),new kt({map:ew(),transparent:!0,depthWrite:!1,color:0,opacity:.92,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));oa.rotation.x=-Math.PI/2;oa.position.y=.01;oa.renderOrder=1;Bn.add(oa);var li=48,Si=36,Yi=112,bs=new Uint8Array(li*Si*Yi),Wn=new Mo(bs,li,Si,Yi);Wn.format=Ns;Wn.type=$n;Wn.minFilter=Wn.magFilter=It;Wn.unpackAlignment=1;Wn.needsUpdate=!0;wt.uMask.value=Wn;var Xi=new Tn;Bn.add(Xi);var jf=new xt({transparent:!0,depthWrite:!1,blending:Ps,side:dn,uniforms:{uTime:{value:0},uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
    varying vec2 vUv; uniform float uTime; uniform float uFade;
    float h(float n){ return fract(sin(n)*43758.5453); }
    float n1(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      float a=h(i.x+i.y*57.), b=h(i.x+1.+i.y*57.), c=h(i.x+(i.y+1.)*57.), d=h(i.x+1.+(i.y+1.)*57.);
      return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
    void main(){
      float s1 = n1(vec2(vUv.x*140., vUv.y*4. + uTime*9.));
      float s2 = n1(vec2(vUv.x*60. + 3., vUv.y*2. + uTime*6.));
      float streak = smoothstep(.55, 1., s1)*.8 + smoothstep(.6, 1., s2)*.5;
      float edge = smoothstep(0., .06, vUv.x) * smoothstep(1., .94, vUv.x);
      float top = smoothstep(1., .9, vUv.y);
      float bottomMist = smoothstep(.12, 0., vUv.y)*.15;
      float a = (streak*.55 + .05 + bottomMist) * edge * uFade;
      gl_FragColor = vec4(vec3(.72,.86,1.)*a*(.7+top*.6), a);
    }`}),Zf=new Qe(new gi(1,1),jf);Xi.add(Zf);var yg=new kt({color:new Te(1.2,2.6,4),toneMapped:!1,transparent:!0}),Kf=new Qe(new ti(1,.05,.06),yg);Xi.add(Kf);var xl=new Qe(new ti(1,.12,.16),new xi({color:2237480,metalness:.8,roughness:.35,transparent:!0}));Xi.add(xl);var vl=ea?900:2e3,ia=new Ft,ai=new Float32Array(vl*3),oi=new Float32Array(vl*3),$o=new Float32Array(vl);ia.setAttribute("position",new ut(ai,3));ia.setAttribute("aLife",new ut($o,1));var nd=new xt({transparent:!0,depthWrite:!1,blending:Ps,uniforms:{uFade:{value:0},uPx:{value:hi.getPixelRatio()}},vertexShader:`attribute float aLife; varying float vL; uniform float uPx;
    void main(){ vL = aLife; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv;
      gl_PointSize = max(1.5, uPx * (0.012 + 0.02*aLife) / -mv.z); }`,fragmentShader:`varying float vL; uniform float uFade;
    void main(){ vec2 c = gl_PointCoord-.5; float d = length(c); if(d>.5) discard;
      float a = smoothstep(.5,.0,d) * .55 * uFade * clamp(vL*3.,0.,1.);
      gl_FragColor = vec4(vec3(.8,.9,1.)*a, a); }`}),Mg=new Ds(ia,nd);Mg.frustumCulled=!1;Bn.add(Mg);var aa=1400,sa=new Ft,xs=new Float32Array(aa*3),ta=new Float32Array(aa),Yr=new Float32Array(aa*3);sa.setAttribute("position",new ut(xs,3));sa.setAttribute("aLife",new ut(ta,1));var Sg=new xt({transparent:!0,depthWrite:!1,uniforms:{uPx:{value:hi.getPixelRatio()}},vertexShader:`attribute float aLife; varying float vL; uniform float uPx;
    void main(){ vL=aLife; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv;
      gl_PointSize = uPx*(0.014+0.022*(1.0-aLife))/-mv.z; }`,fragmentShader:`varying float vL; void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
      float ring = smoothstep(.5,.38,d) * (0.55 + 0.45*smoothstep(.15,.42,d));
      float a = ring * clamp(vL*1.5,0.,1.) * .85; gl_FragColor = vec4(vec3(.96,.98,1.), a); }`}),wg=new Ds(sa,Sg);wg.frustumCulled=!1;Bn.add(wg);var FS=0,Kr=new Bc(hi);Kr.addPass(new zc(Bn,ct));var Tg=new Lr(new Me(256,256),.45,.25,1.1);Kr.addPass(Tg);var On=new ll;Kr.addPass(On);Kr.addPass(new kc);var Ag=new Pc;Ag.setMeshoptDecoder(um);var gs=null,jr=[],Pn=new ot,Eg=-3,Rg=3,Xr=null,id=!1,Gf=0,hg=Rt("#loader"),ug=Rt("#loader-txt"),OS=Rt("#loader-needle"),BS=Rt("#loader-arc"),zS=Rt("#loader-speed"),Gs=0,Wi=0,Jf=null;function fg(i){Gs=Math.max(Gs,Math.min(1,i)),Jf||(Jf=requestAnimationFrame(Pg))}function kS(){Gs=Wi=0,Cg(0)}function Cg(i){OS.style.transform=`rotate(${-120+240*i}deg)`,BS.style.strokeDashoffset=String(100-100*i),zS.textContent=Math.round(240*i)}function Pg(){Wi+=(Gs-Wi)*.12,Math.abs(Gs-Wi)<.001&&(Wi=Gs);let i=Wi>.02&&Wi<.999?Math.sin(performance.now()/45)*.004:0;Cg(Math.max(0,Wi+i)),Jf=Wi!==Gs||i?requestAnimationFrame(Pg):null}async function Ig(i){let e=++Gf;hg.classList.remove("hidden"),kS(),ug.textContent=na("\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C")+" "+i.name+"\u2026";let t;try{t=await Ag.loadAsync(i.url,x=>{fg(x.total?x.loaded/x.total*.92:.92*(1-Math.exp(-x.loaded/3e6)))})}catch(x){ug.textContent=na("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0430\u0439\u0442 \u0447\u0435\u0440\u0435\u0437 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 (\u0441\u043C. README)."),console.error(x);return}if(e!==Gf)return;gs&&(Bn.remove(gs),HS(gs));let n=t.scene,s=new Tn;s.add(n);let r=hl(n),o=r.getSize(new D);o.x>o.z&&(n.rotation.y=Math.PI/2),(i.front||1)<0&&(n.rotation.y+=Math.PI),r=hl(n),o=r.getSize(new D);let a=CS/Math.max(o.x,o.z);n.scale.multiplyScalar(a),r=hl(n);let c=r.getCenter(new D);n.position.sub(new D(c.x,r.min.y,c.z)),s.updateMatrixWorld(!0),jr=[];let l=!1;s.traverse(x=>{if(x.isMesh){jr.push(x);let b=x.geometry;!b.attributes._exterior&&b.attributes.position&&(b.setAttribute("_exterior",new ut(new Float32Array(b.attributes.position.count).fill(1),1)),l=!0),bg&&i.paint&&!Array.isArray(x.material)&&[].concat(i.paint).includes(x.material.name)&&(x.material=PS()),(Array.isArray(x.material)?x.material:[x.material]).forEach(p=>{cg(p),p.isMeshPhysicalMaterial&&p.transmission>0&&(p.envMapIntensity=1.2),p.transparent&&p.opacity<.55&&p.color&&p.color.getHSL({}).l<.2&&!p.map&&(p.opacity=.62)})}}),l&&console.warn("\u0412 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0435\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 _EXTERIOR \u2014 \u0441\u0430\u043B\u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u043F\u0430\u0447\u043A\u0430\u0442\u044C\u0441\u044F. \u041F\u0440\u043E\u0433\u043E\u043D\u0438\u0442\u0435 \u0435\u0451 \u0447\u0435\u0440\u0435\u0437 tools/bake-exterior.mjs"),gs=s,Bn.add(gs),Pn.copy(hl(gs));let h=Pn.getSize(new D),u=new D(.12,.12,.12);wt.uBoxMin.value.copy(Pn.min).sub(u),wt.uBoxSize.value.copy(h).add(u.multiplyScalar(2)),wt.uSweepDir.value.set(0,0,-1),Eg=-Pn.max.z-.15,Rg=-Pn.min.z+.15,oa.scale.set(h.x*1.55,h.z*1.22,1);let f=h.x+1.1,m=h.y+.55;Zf.scale.set(f,m,1),Zf.position.y=m/2,Kf.scale.x=xl.scale.x=f,Kf.position.y=m-.02,xl.position.y=m+.06,Xi.userData={w:f,h:m},it.target.set(0,h.y*.45,0),bs.fill(0),Wn.needsUpdate=!0,ra=!1,fl=0,VS(),GS(),id=!1,fg(1),hi.compile(Bn,ct),setTimeout(()=>{hg.classList.add("hidden"),Bg||YS()},700),document.querySelectorAll(".car-chip").forEach(x=>x.classList.toggle("active",x.dataset.id===i.id)),setTimeout(()=>{e===Gf&&Dg()},600)}function hl(i){let e=new ot,t=new D,n=new we,s=new we;return i.updateMatrixWorld(!0),i.traverse(r=>{if(!r.isMesh||!r.geometry.attributes.position)return;let o=r.geometry.attributes.position,a=Math.max(1,Math.floor(o.count/2e4)),c=r.isInstancedMesh?r.count:1;for(let l=0;l<c;l++){s.copy(r.matrixWorld),r.isInstancedMesh&&(r.getMatrixAt(l,n),s.multiply(n));for(let h=0;h<o.count;h+=a)e.expandByPoint(t.fromBufferAttribute(o,h).applyMatrix4(s))}}),e}function Dg(){for(let i of jr)if(!i.geometry.boundsTree)try{i.geometry.computeBoundsTree()}catch(e){console.warn(e)}id=!0}function HS(i){i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(n!==ul){for(let s in n)n[s]&&n[s].isTexture&&n[s].dispose();n.dispose()}}))})}function VS(){let i=new D,e=new D,t=new we,n=new ke,s=new we,r=Pn.max.y-Pn.min.y,o=(Pn.max.z+Pn.min.z)/2,a=new ot,c=0;for(let m of jr){let x=m.material;if(Array.isArray(x)||!(x.transparent||(x.transmission||0)>0))continue;let b=m.geometry.attributes.position,g=m.geometry.attributes.normal;if(!b||!g)continue;let p=m.isInstancedMesh?m.count:1;for(let y=0;y<p;y++){t.copy(m.matrixWorld),m.isInstancedMesh&&(m.getMatrixAt(y,s),t.multiply(s)),n.getNormalMatrix(t);let M=Math.max(1,Math.floor(b.count/2e4));for(let v=0;v<b.count;v+=M)i.fromBufferAttribute(b,v).applyMatrix4(t),!(i.y<Pn.min.y+r*.55||i.z<o||i.z>Pn.max.z-(Pn.max.z-Pn.min.z)*.15)&&(e.fromBufferAttribute(g,v).applyMatrix3(n).normalize(),!(Math.abs(e.z)<.3||Math.abs(e.y)<.4||Math.abs(e.x)>.6)&&(a.expandByPoint(i),c++))}}if(c<20){wt.uWiperOn.value=0;return}let l=a.max.x-a.min.x,h=(a.min.x+a.max.x)/2,u=a.min.y-.03,f=a.max.z+.02;wt.uWiperA.value.set(h+.3*l,u,f),wt.uWiperB.value.set(h-.18*l,u,f),wt.uWiperR.value.set(.08*l,.54*l,.08*l,.45*l),wt.uWiperOn.value=1}function Lg(i,e,t){return i+e*li+t*li*Si}function GS(){let i=new Uint8Array(li*Si*Yi),e=new D,t=new D,n=new we,s=new we,r=new ke,o=wt.uBoxMin.value,a=wt.uBoxSize.value,c=Pn.min.y+.06;for(let h of jr){let u=h.geometry.attributes.position;if(!u)continue;let f=h.geometry.attributes._exterior,m=h.geometry.attributes.normal,x=Math.max(1,Math.floor(u.count/6e3)),b=h.isInstancedMesh?h.count:1;for(let g=0;g<b;g++){s.copy(h.matrixWorld),h.isInstancedMesh&&(h.getMatrixAt(g,n),s.multiply(n)),r.getNormalMatrix(s);for(let p=0;p<u.count;p+=x){if(f&&f.getX(p)<.5||(e.fromBufferAttribute(u,p).applyMatrix4(s),e.y<c)||m&&(t.fromBufferAttribute(m,p).applyMatrix3(r).normalize(),t.y<-.35))continue;let y=Math.floor((e.x-o.x)/a.x*li),M=Math.floor((e.y-o.y)/a.y*Si),v=Math.floor((e.z-o.z)/a.z*Yi);y>=0&&M>=0&&v>=0&&y<li&&M<Si&&v<Yi&&(i[Lg(y,M,v)]=1)}}}let l=[];for(let h=0;h<i.length;h++)i[h]&&l.push(h);Xr=Int32Array.from(l)}function Ug(){if(!Xr||!Xr.length)return 0;let i=wt.uBoxMin.value,e=wt.uBoxSize.value,t=wt.uSweep.value,n=0;for(let s=0;s<Xr.length;s++){let r=Xr[s];if(bs[r]>120){n++;continue}let o=Math.floor(r/(li*Si));-(i.z+(o+.5)/Yi*e.z)<t&&n++}return n/Xr.length}var Jr=!1,sd=!1,Qf=new Sc;Qf.firstHitOnly=!0;var dg=new Me,yl=Rt("#sponge-cursor"),Ng=0,ra=!1,fl=0,$f=!1;function bl(i){Ng=performance.now(),$f=!0;let e=wt.uBoxMin.value,t=wt.uBoxSize.value,n=.24,s=(i.x-e.x)/t.x*li,r=(i.y-e.y)/t.y*Si,o=(i.z-e.z)/t.z*Yi,a=n/t.x*li,c=n/t.y*Si,l=n/t.z*Yi;for(let h=Math.max(0,Math.floor(o-l));h<=Math.min(Yi-1,Math.ceil(o+l));h++)for(let u=Math.max(0,Math.floor(r-c));u<=Math.min(Si-1,Math.ceil(r+c));u++)for(let f=Math.max(0,Math.floor(s-a));f<=Math.min(li-1,Math.ceil(s+a));f++){let m=(f+.5-s)/a,x=(u+.5-r)/c,b=(h+.5-o)/l,g=Math.sqrt(m*m+x*x+b*b);if(g>1)continue;let p=Math.min(255,(1-g)*420),y=Lg(f,u,h);bs[y]=Math.min(255,Math.max(bs[y],p)+18*(1-g))}Wn.needsUpdate=!0;for(let h=0;h<10;h++){let u=FS++%aa,f=Math.random()*Math.PI*2,m=Math.sqrt(Math.random())*.16;xs[u*3]=i.x+Math.cos(f)*m,xs[u*3+1]=i.y+(Math.random()-.5)*.18,xs[u*3+2]=i.z+Math.sin(f)*m,Yr[u*3]=(Math.random()-.5)*.05,Yr[u*3+1]=-.05-Math.random()*.1,Yr[u*3+2]=(Math.random()-.5)*.05,ta[u]=1}}function Fg(i){if(!gs)return null;id||Dg();let e=ln.getBoundingClientRect();dg.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Qf.setFromCamera(dg,ct);let t=Qf.intersectObjects(jr,!1)[0];return t?t.point:null}var Hs=null;ln.addEventListener("pointerdown",i=>{if(!Jr)return;sd=!0,ln.setPointerCapture(i.pointerId);let e=Fg(i);e&&(bl(e),Hs=e.clone())});ln.addEventListener("pointermove",i=>{if(Jr){if(yl.style.transform=`translate(${i.clientX}px, ${i.clientY}px)`,!sd)return;let e=Fg(i);if(!e){Hs=null;return}if(Hs){let t=e.distanceTo(Hs),n=Math.min(8,Math.ceil(t/.08));for(let s=1;s<=n;s++)bl(Hs.clone().lerp(e,s/n))}else bl(e);Hs=e.clone()}});var Og=()=>{sd=!1,Hs=null};ln.addEventListener("pointerup",Og);ln.addEventListener("pointercancel",Og);ln.addEventListener("pointerleave",()=>yl.classList.remove("show"));ln.addEventListener("pointerenter",()=>{Jr&&yl.classList.add("show")});function rd(i){Jr=i,it.enabled=!i,Xs.classList.toggle("sponge",i),Rt("#btn-sponge").classList.toggle("active",i),Rt("#btn-rotate").classList.toggle("active",!i),yl.classList.toggle("show",i),ln.style.touchAction=i?"none":"pan-y"}Rt("#btn-sponge").addEventListener("click",()=>rd(!0));Rt("#btn-rotate").addEventListener("click",()=>rd(!1));Rt("#btn-reset").addEventListener("click",()=>{bs.fill(0),Wn.needsUpdate=!0;let i=_l.getBoundingClientRect().top+scrollY;scrollY>i+1&&window.scrollTo({top:i,behavior:"instant"}),ca=0,ci=0,yi=0,ra=!1});var Ws=null;function WS(i,e){Ws&&cancelAnimationFrame(Ws);let t=scrollY,n=performance.now(),s=o=>o<.5?2*o*o:1-Math.pow(-2*o+2,2)/2,r=o=>{let a=Math.min(1,(o-n)/e);window.scrollTo({top:t+(i-t)*s(a),behavior:"instant"}),Ws=a<1?requestAnimationFrame(r):null};Ws=requestAnimationFrame(r)}["wheel","touchstart","keydown"].forEach(i=>addEventListener(i,()=>{Ws&&(cancelAnimationFrame(Ws),Ws=null)},{passive:!0}));Rt("#btn-wash").addEventListener("click",()=>{let i=_l.getBoundingClientRect().top+scrollY,e=i+_l.offsetHeight-innerHeight;yi>.95&&(bs.fill(0),Wn.needsUpdate=!0,window.scrollTo({top:i,behavior:"instant"}),ca=0,ci=0,yi=0,ra=!1),WS(e,4200)});var ed=window.BG_TRACKS||["assets/music/track-0.m4a","assets/music/track-1.m4a"],Mi=Rt("#bgm"),Jo=Rt("#btn-sound"),dl=0,ms=!1,Qo=null;Mi.volume=0;function pg(i,e,t){Qo&&cancelAnimationFrame(Qo);let n=Mi.volume,s=performance.now(),r=o=>{let a=Math.min(1,(o-s)/e);Mi.volume=Math.min(1,Math.max(0,n+(i-n)*a)),a<1?Qo=requestAnimationFrame(r):(Qo=null,t&&t())};Qo=requestAnimationFrame(r)}Mi.addEventListener("ended",()=>{dl=(dl+1)%ed.length,Mi.src=ed[dl],ms&&Mi.play().catch(()=>{})});Jo.addEventListener("click",()=>{ms=!ms,Jo.classList.toggle("active",ms),Jo.setAttribute("aria-pressed",String(ms)),Jo.dataset.tip=na(ms?"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0443":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0443"),ms?(Mi.src||(Mi.src=ed[dl]),Mi.play().then(()=>pg(.55,800)).catch(()=>{ms=!1,Jo.classList.remove("active")})):pg(0,400,()=>Mi.pause())});function XS(){let i=document.createElement("div");i.className="bonus",i.setAttribute("role","status"),i.innerHTML="<b>"+na("\u0427\u0438\u0441\u0442\u043E!")+"</b>";for(let e=0;e<26;e++){let t=document.createElement("i"),n=Math.random()*Math.PI*2,s=50+Math.random()*90;t.style.setProperty("--dx",Math.cos(n)*s+"px"),t.style.setProperty("--dy",Math.sin(n)*s*.65+"px"),t.style.setProperty("--s",(.5+Math.random()*1.1).toFixed(2)),t.style.setProperty("--d",(Math.random()*.35).toFixed(2)+"s"),i.appendChild(t)}Xs.appendChild(i),setTimeout(()=>i.remove(),2400)}var td=new URLSearchParams(location.search).get("intro")||"wipe",pl={fly:1.5,hold:.1,wipe:1.2,whip:.75},Bg=!1,cn=null;function qS(){return td!=="off"&&scrollY<5&&!matchMedia("(prefers-reduced-motion: reduce)").matches}function YS(){if(Bg=!0,!qS())return;Sl();let i=new D(.78,.06,.62).normalize().multiplyScalar(3.8).add(it.target);ct.position.copy(i),wt.uDirt.value=0,it.enabled=!1,Xs.classList.add("intro"),cn={t:-pl.hold,from:i,to:Zr.clone(),stage:"fly"},["wheel","pointerdown","keydown","touchstart","scroll"].forEach(e=>addEventListener(e,zg,{once:!0,passive:!0}))}function zg(){cn&&(cn=null,wt.uDirt.value=1,On.enabled=!1,Sl(),ct.position.copy(Zr),it.enabled=!Jr,Xs.classList.remove("intro"))}function jS(i){if(cn){if(cn.t+=i,cn.stage==="fly"){let e=Ot.clamp(cn.t/pl.fly,0,1),t=e*e*e*(e*(e*6-15)+10),n=cn.from.clone().sub(it.target),s=cn.to.clone().sub(it.target),r=new ki().setFromVector3(n),o=new ki().setFromVector3(s),a=o.theta-r.theta;a>Math.PI&&(a-=2*Math.PI),a<-Math.PI&&(a+=2*Math.PI);let c=new ki(Ot.lerp(r.radius,o.radius,t),Ot.lerp(r.phi,o.phi,t),r.theta+a*t);ct.position.setFromSpherical(c).add(it.target),e>=1&&(cn.stage="cut",cn.t=0,On.material.uniforms.uMode.value=td==="whip"?2:1,On.material.uniforms.uP.value=0,On.capture=!0,On.enabled=!0)}else if(cn.stage==="cut"){wt.uDirt.value=1;let e=td==="whip"?pl.whip:pl.wipe,t=Math.min(1,cn.t/e);On.material.uniforms.uP.value=t,t>=1&&zg()}}}var qi=null;function Ml(i){let e=ct.position.distanceTo(it.target);qi=Ot.clamp((qi??e)*i,it.minDistance,it.maxDistance)}Rt("#btn-zoom-in").addEventListener("click",()=>Ml(.8));Rt("#btn-zoom-out").addEventListener("click",()=>Ml(1.25));ln.addEventListener("wheel",i=>{!i.ctrlKey&&!i.metaKey||(i.preventDefault(),Ml(Math.exp(i.deltaY*.006)))},{passive:!1});var qr=new Map,ml=0;ln.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&qr.set(i.pointerId,i)});ln.addEventListener("pointermove",i=>{if(qr.has(i.pointerId)&&(qr.set(i.pointerId,i),qr.size===2)){let[e,t]=[...qr.values()],n=Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);ml&&Ml(ml/n),ml=n}});var kg=i=>{qr.delete(i.pointerId),ml=0};ln.addEventListener("pointerup",kg);ln.addEventListener("pointercancel",kg);Rt("#btn-view").addEventListener("click",()=>{gl=1});var gl=0,Zr=new D;function Sl(){let i=ct.aspect,e=i<1?7.4/Math.max(i,.45)*.78:6.9;Zr.set(-.66,.12,.74).normalize().multiplyScalar(e).add(it.target)}var _l=Rt("#hero"),ZS=[...document.querySelectorAll(".phase")],ca=0,ci=0,yi=0;function Hg(){let i=_l.getBoundingClientRect(),e=i.height-innerHeight;ca=Ot.clamp(-i.top/Math.max(1,e),0,1)}addEventListener("scroll",Hg,{passive:!0});var KS=Rt("#meter-val"),JS=Rt("#meter-fill"),mg=Rt("#step-label");function Vg(){let i=Xs.clientWidth,e=Xs.clientHeight;hi.setSize(i,e,!1),Kr.setSize(i,e),Tg.resolution.set(i/2,e/2),ct.aspect=i/e,qf=ct.aspect<.8?46:36,ct.fov=qf,ct.aspect>1.25?ct.setViewOffset(i,e,-i*.12,0,i,e):ct.clearViewOffset(),ct.updateProjectionMatrix(),_g=ct.aspect<1?17:12,nd.uniforms.uPx.value=Sg.uniforms.uPx.value=hi.getPixelRatio()*e/(2*Math.tan(Ot.degToRad(ct.fov)/2))}addEventListener("resize",Vg);var gg=new Cr,xg=0,Gg=!0;new IntersectionObserver(([i])=>{Gg=i.isIntersecting},{threshold:0}).observe(Xs);function Wg(){if(requestAnimationFrame(Wg),!Gg)return;let i=Math.min(gg.getDelta(),.05),e=gg.elapsedTime;wt.uTime.value=e,jf.uniforms.uTime.value=e;let t=Ot.clamp((ca-.14)/.7,0,1);yi=Math.max(yi,t),ci+=(yi-ci)*Math.min(1,i*5);let n=Ot.lerp(Eg,Rg,ci);wt.uSweep.value=n;let s=ci>.002&&ci<.998,r=Ot.clamp(Math.min(ci,1-ci)*12,0,1);Xi.visible=r>.01,Xi.position.z=-n,jf.uniforms.uFade.value=r,nd.uniforms.uFade.value=r,yg.opacity=xl.material.opacity=r;let o=Xi.userData.w||3,a=Xi.userData.h||2;for(let c=0;c<vl;c++){let l=c*3;if($o[c]<=0||ai[l+1]<0){if(!s){$o[c]=0,ai[l+1]=-10;continue}ai[l]=(Math.random()-.5)*o,ai[l+1]=a-Math.random()*.1,ai[l+2]=-n+(Math.random()-.5)*.06,oi[l]=(Math.random()-.5)*.3,oi[l+1]=-2-Math.random()*2,oi[l+2]=(Math.random()-.5)*.9,$o[c]=.5+Math.random()*.8}oi[l+1]-=9.8*i,ai[l]+=oi[l]*i,ai[l+1]+=oi[l+1]*i,ai[l+2]+=oi[l+2]*i,$o[c]-=i,ai[l+1]<.02&&oi[l+1]<0&&Math.random()<.3&&(oi[l+1]*=-.25,oi[l]*=2,oi[l+2]*=2,ai[l+1]=.03)}ia.attributes.position.needsUpdate=!0,ia.attributes.aLife.needsUpdate=!0;for(let c=0;c<aa;c++)ta[c]<=0||(ta[c]-=i*.7,xs[c*3]+=Yr[c*3]*i,xs[c*3+1]+=Yr[c*3+1]*i,xs[c*3+2]+=Yr[c*3+2]*i,ta[c]<=0&&(xs[c*3+1]=-10));if(sa.attributes.position.needsUpdate=!0,sa.attributes.aLife.needsUpdate=!0,qi!==null){let c=ct.position.clone().sub(it.target),l=c.length(),h=Ot.lerp(l,qi,Math.min(1,i*8));ct.position.copy(it.target).add(c.setLength(h)),Math.abs(h-qi)<.01&&(qi=null)}if(jS(i),gl>0&&(Sl(),ct.position.lerp(Zr,Math.min(1,i*4)),gl-=i*.8,ct.position.distanceTo(Zr)<.02&&(gl=0)),US(),it.update(),ct.position.y>Xf&&(Vs.copy(ct.position).sub(it.target),Vs.multiplyScalar((Xf-it.target.y)/Math.max(Vs.y,1e-4)),ct.position.copy(it.target).add(Vs)),ZS.forEach((c,l)=>{let h=yi>=.98||fl>=.98?2:yi>0||fl>.03?1:0,u=l===h;c.classList.toggle("on",u)}),xg%12===0){let c=Ug(),l=$f||performance.now()-Ng<3e3;$f=!1,!ra&&Jr&&l&&c>=.98&&yi<.98&&(ra=!0,bs.fill(255),Wn.needsUpdate=!0,c=1,XS()),fl=c;let h=Math.round(c*100);KS.textContent=h+"%",JS.style.transform=`scaleX(${h/100})`,mg&&(mg.textContent=h>=98?"\u0413\u043E\u0442\u043E\u0432\u043E \xB7 \u0411\u043B\u0435\u0441\u043A":s?"\u0428\u0430\u0433 2 \xB7 \u041C\u043E\u0439\u043A\u0430":ci>.99?"\u0428\u0430\u0433 3 \xB7 \u0411\u043B\u0435\u0441\u043A":"\u0428\u0430\u0433 1 \xB7 \u041F\u0440\u0438\u0451\u043C\u043A\u0430")}xg++,Kr.render()}function QS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createImageData(64,64);for(let o=0;o<t.data.length;o+=4){let a=125+Math.random()*30;t.data[o]=t.data[o+1]=t.data[o+2]=a,t.data[o+3]=255}e.putImageData(t,0,0);let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d");s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(i,0,0,512,512),s.globalAlpha=.06;for(let o=0;o<40;o++)s.fillStyle=Math.random()>.5?"#000":"#fff",s.beginPath(),s.arc(Math.random()*512,Math.random()*512,30+Math.random()*100,0,Math.PI*2),s.fill();let r=new Er(n);return r.colorSpace=Pt,r.anisotropy=8,r}function $S(){let i=document.createElement("canvas");i.width=1024,i.height=256;let e=i.getContext("2d");e.fillStyle="#9a9a9a",e.fillRect(0,0,1024,256),e.fillStyle="#4a4a4a";for(let n=0;n<1024;n+=128)e.fillRect(n,0,3,256);e.fillRect(0,120,1024,2);let t=new Er(i);return t.colorSpace=Pt,t.wrapS=t.wrapT=pi,t.repeat.set(3,1),t}function ew(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,10,128,128,128);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Er(i)}var tw=Rt("#car-chips");Wf.forEach(i=>{let e=document.createElement("button");e.className="car-chip",e.dataset.id=i.id,e.textContent=i.name,e.addEventListener("click",()=>Ig(i)),tw.appendChild(e)});Vg();Sl();ct.position.copy(Zr);Hg();new Dc().load("assets/studio.exr",i=>{i.mapping=bo,Yf(i)},void 0,()=>Yf(null));Yf(null);var nw=Wf.find(i=>i.id===new URLSearchParams(location.search).get("car"))||Wf[0];Ig(nw);Wg();window.__wash={get car(){return gs},debugTransition:(i,e)=>{cn=null,wt.uDirt.value=0,On.material.uniforms.uMode.value=i,On.material.uniforms.uP.value=0,On.capture=!0,On.enabled=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{wt.uDirt.value=1,On.material.uniforms.uP.value=e}))},get intro(){return cn?cn.stage+":"+cn.t.toFixed(2)+":"+On.material.uniforms.uP.value.toFixed(2):"done"},setProgress:i=>{ca=i,ci=yi=Ot.clamp((i-.14)/.7,0,1)},setSponge:rd,paintAt:bl,camera:ct,controls:it,DirtUniforms:wt,cleanliness:Ug};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
