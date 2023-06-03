import{S as B,i as V,n as Y,j as C,s as O,q as R,k as y,l as T,c as k,r as L,g as v,m as d,J as le,K,a as F,G as _,H as oe,L as ye,M as sn,N as ee,u as Z,f as E,v as Ue,b as A,d as De,O as ln,P as Ze,C as un,D as cn,E as fn,F as mn,Q as dn,R as ot,y as j,z as U,A as D,B as N,I as ae,T as re,e as fe,U as jt,V as gn,W as hn,p as pn,o as _n,X as st,Y as vn,w as bn,Z as $n}from"../chunks/index.a9aa9141.js";import{b as xe,w as Ne,d as Cn}from"../chunks/paths.5402fc4f.js";function yn(t){let e,n,r,a,o,s,l,i,u,f,c,g,h;return{c(){e=C("header"),n=C("img"),a=O(),o=C("h1"),s=R("Jumping Peter"),l=O(),i=C("p"),u=R("generate gif emojis"),f=O(),c=C("a"),g=R("Contribute"),this.h()},l(p){e=y(p,"HEADER",{class:!0});var m=T(e);n=y(m,"IMG",{class:!0,src:!0,alt:!0}),a=k(m),o=y(m,"H1",{class:!0});var $=T(o);s=L($,"Jumping Peter"),$.forEach(v),l=k(m),i=y(m,"P",{class:!0});var x=T(i);u=L(x,"generate gif emojis"),x.forEach(v),f=k(m),c=y(m,"A",{class:!0,href:!0,target:!0,rel:!0});var b=T(c);g=L(b,"Contribute"),b.forEach(v),m.forEach(v),this.h()},h(){d(n,"class","logo svelte-bal6b7"),le(n.src,r=`${xe}/demo-jumping.gif`)||d(n,"src",r),d(n,"alt",""),d(o,"class","title svelte-bal6b7"),d(i,"class","subtitle svelte-bal6b7"),d(c,"class","contribute svelte-bal6b7"),d(c,"href","https://github.com/ksmai/jumping-peter"),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(e,"class",h=K(`header ${t[0]}`)+" svelte-bal6b7")},m(p,m){F(p,e,m),_(e,n),_(e,a),_(e,o),_(o,s),_(e,l),_(e,i),_(i,u),_(e,f),_(e,c),_(c,g)},p(p,[m]){m&1&&h!==(h=K(`header ${p[0]}`)+" svelte-bal6b7")&&d(e,"class",h)},i:oe,o:oe,d(p){p&&v(e)}}}function xn(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class Tn extends B{constructor(e){super(),V(this,e,xn,yn,Y,{class:0})}}function me(t){return{...t,type:"slider",min:-360,max:360,step:1}}function se(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function Ae(t){return{...t,type:"slider",min:0,max:1,step:.01}}function Te(t){return{...t,type:"slider",min:0,max:2,step:.01}}function Me(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Fe(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function it(t){return{...t,type:"slider",min:-1,max:1,step:1}}function Qe(t){return{...t,type:"slider",min:1,max:100,step:1}}function wn(t){return{...t,type:"slider",min:1,max:5,step:1}}function Ee(t){return{...t,type:"toggle"}}function En(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const M={image:{url:`${xe}/favicon.png`},additionalImages:{urls:[]},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function G(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function de(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function X(t,e,n){Ut(t,e,n,0)}function Sn(t,e,n){const r=t[0],a=t[4],o=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*a,t[9]+=n*o,t[13]+=n*s}function Ut(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function we(t,e){et(t,e,[0,0,1])}function et(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const a=n[0]/r,o=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*a*a+i,(1-i)*a*o+u*s,(1-i)*a*s-u*o,0,(1-i)*a*o-u*s,(1-i)*o*o+i,(1-i)*o*s-u*a,0,(1-i)*a*s+u*o,(1-i)*o*s-u*a,(1-i)*s*s+i,0,0,0,0,1];tt(t,f)}function Dt(t,e,n,r){Ut(t,-e[0],-e[1],-e[2]);const a=[-n[0],-n[1],-n[2]];lt(a);const o=ut(r,a);lt(o);const s=ut(a,o),l=[o[0],s[0],a[0],0,o[1],s[1],a[1],0,o[2],s[2],a[2],0,0,0,0,1];tt(t,l)}function Nt(t,e,n,r,a,o,s){const l=[2*o/(n-e),0,0,0,0,2*o/(a-r),0,0,(n+e)/(n-e),(a+r)/(a-r),-(s+o)/(s-o),-1,0,0,-2*s*o/(s-o),0];tt(t,l)}function tt(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let a=0;a<=3;++a){const o=4*r+a;t[o]=0;for(let s=0;s<=3;++s)t[o]+=e[4*s+a]*n[4*r+s]}}function lt(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ut(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function P(t,e,n){return t+(e-t)*n}function ge(t){return t*Math.PI/180}function ct(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function On(t){return e=>1-Math.pow(1-e,t)}function Gt(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const ke=Gt(3),kn=On(2);function ft(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const An="spinning",Mn={...M,output:{...M.output,delayMs:50,totalFrames:15}},Fn=[me({name:"startAngle",value:0}),me({name:"endAngle",value:360}),se({name:"originX",value:0}),se({name:"originY",value:0}),Ee({name:"alternates",value:!1})];function qt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{alternates:o,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:a,getUniforms:c=>{const g=o?Math.min(c,1-c)*2:c,h=P(s,l,g),p=G();return X(p,-i,-u),we(p,h),X(p,i,u),{u_model:p}}}]}const Pn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:qt,defaultOptions:Mn,editOptions:Fn,name:An},Symbol.toStringTag,{value:"Module"})),Rn="expanding",Ln={...M,output:{...M.output,delayMs:50,totalFrames:20}},In=[Fe({name:"minScale",value:1}),Fe({name:"maxScale",value:2}),Ee({name:"alternates",value:!1})];function Xt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{minScale:o,maxScale:s,alternates:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=P(o,s,f),g=G();return de(g,c,c),{u_model:g}}}]}const jn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Xt,defaultOptions:Ln,editOptions:In,name:Rn},Symbol.toStringTag,{value:"Module"})),Un="extreme-speed",Dn={...M,output:{...M.output,delayMs:20,totalFrames:10}},Nn=[it({name:"directionX",value:-1}),it({name:"directionY",value:0})];function Ht(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("sudoku"),{directionX:o,directionY:s}=n,l=o*2,i=s*2;return[{program:r,geometry:a,getUniforms:f=>{const c=G(),g=P(0,l,f),h=P(0,i,f);return X(c,g,h),{u_model:c}}}]}const Gn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Ht,defaultOptions:Dn,editOptions:Nn,name:Un},Symbol.toStringTag,{value:"Module"})),qn="excited",Xn={...M,output:{...M.output,delayMs:50,totalFrames:25}},Hn=[me({name:"angle",value:15}),Me({name:"startOffset",value:-.2}),Me({name:"endOffset",value:.2}),Qe({name:"cycles",value:3})];function zt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{angle:o,cycles:s,startOffset:l,endOffset:i}=n,u=ge(o),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:a,getUniforms:h=>{const p=h*2*s%1,m=Math.min(p,1-p)*2,$=P(-l*c,-i*c,m),x=P(l*f,i*f,m),b=G();return we(b,o),X(b,$,x),de(b,h>.5?-1:1,1),{u_model:b}}}]}const zn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:zt,defaultOptions:Xn,editOptions:Hn,name:qn},Symbol.toStringTag,{value:"Module"})),Bn="jumping",Vn={...M,output:{...M.output,delayMs:50,totalFrames:20}},Yn=[Te({name:"maxOffset",value:1.2}),Ae({name:"compressTime",value:.4}),Ae({name:"maxCompress",value:.3})];function Bt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffset:o,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=G(),g=f/(1-s);if(g<1){const h=(1-g*g)*o;X(c,0,h)}else{const h=(1-f)/s,m=1-(1-h*h)*l;X(c,0,1),de(c,1/m,m),X(c,0,-1)}return{u_model:c}}}]}const Wn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Bt,defaultOptions:Vn,editOptions:Yn,name:Bn},Symbol.toStringTag,{value:"Module"})),Jn="tower",Kn={...M,output:{...M.output,delayMs:40,totalFrames:20}},Zn=[me({name:"startAngle",value:20}),me({name:"endAngle",value:-45}),Ae({name:"startTime",value:.5})];function Vt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("tower"),{startAngle:o,endAngle:s,startTime:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=G();if(u<l){const c=u/l,g=Math.min(c,1-c)*2,h=P(0,o,g);we(f,h)}else{const c=(u-l)/(1-l),g=Math.min(c,1-c)*2,h=P(0,s,g);if(we(f,h),c>.5){const p=ge(h),m=Math.cos(p),$=Math.sin(p),x=(c-.5)*2,b=P(0,-2*$,x),w=P(0,2*m,x);X(f,b,w)}}return{u_model:f}}}]}const Qn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:Kn,editOptions:Zn,name:Jn},Symbol.toStringTag,{value:"Module"})),er="repeated",tr={...M,output:{...M.output,delayMs:60,totalFrames:15}},nr=[Fe({name:"initialScale",value:.1}),Ee({name:"horizontal",value:!1})];function Yt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{initialScale:o,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=g=>{const h=G(),p=ke(g),m=P(o,1,p);return de(h,m,m),{u_model:h}},f=g=>{const h=G(),p=ke(g),m=P(0,l.endX,p),$=P(0,l.endY,p);return X(h,m,$),{u_model:h}},c=g=>{const h=G(),p=ke(g),m=P(0,i.endX,p),$=P(0,i.endY,p);return X(h,m,$),{u_model:h}};return[{program:r,geometry:a,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const rr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:tr,editOptions:nr,name:er},Symbol.toStringTag,{value:"Module"})),ar="mirror",or={...M,output:{...M.output,delayMs:50,totalFrames:16}},sr=[Ee({name:"rightHalf",value:!1})];function Wt(t,e,n){const r=t.createProgram("default"),{rightHalf:a}=n,o=e.createGeometry(a?"rightHalf":"leftHalf");return[{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=G(),c=ft(u),g=P(-2,-1,c);return a||de(f,-1,1),X(f,g,0),{u_model:f}}},{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=G(),c=ft(u),g=P(2,1,c);return a&&de(f,-1,1),X(f,g,0),{u_model:f}}}]}const ir=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:or,editOptions:sr,name:ar},Symbol.toStringTag,{value:"Module"})),lr="panic",ur={...M,output:{...M.output,delayMs:30,totalFrames:16}},cr=[Te({name:"maxOffsetX",value:.15}),Te({name:"maxOffsetY",value:.15})];function Jt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffsetX:o,maxOffsetY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=ct(i+.123),f=ct(i*2+1),c=P(-o,o,u),g=P(-s,s,f),h=G();return X(h,c,g),{u_model:h}}}]}const fr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:ur,editOptions:cr,name:lr},Symbol.toStringTag,{value:"Module"})),mr="rotating",dr={...M,output:{...M.output,delayMs:40,totalFrames:25}},gr=[se({name:"axisX",value:0}),se({name:"axisY",value:1}),se({name:"axisZ",value:0}),se({name:"originX",value:0}),se({name:"originY",value:0}),wn({name:"easing",value:1}),Ee({name:"alternates",value:!1})];function Kt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{axisX:o,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,g=[o,s,l],h=Gt(f);return[{program:r,geometry:a,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,x=h($),b=P(0,360,x),w=G();X(w,-i,-u),et(w,b,g),X(w,i,u);const S=G();Dt(S,[0,0,3],[0,0,-1],[0,1,0]);const H=G();return Nt(H,-.03,.03,-.03,.03,.1,6),{u_model:w,u_view:S,u_projection:H,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(ge(5)),"u_spotLight.outerCos":Math.cos(ge(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const hr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:dr,editOptions:gr,name:mr},Symbol.toStringTag,{value:"Module"})),pr="party",_r={...M,output:{...M.output,delayMs:40,totalFrames:15}},vr=[me({name:"angle",value:10}),Me({name:"startOffset",value:-.3}),Me({name:"endOffset",value:.5})];function Zt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{angle:o,startOffset:s,endOffset:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,g=ke(f),h=kn(c),p=u<.5?P(0,180,g):P(180,360,g),m=P(s,l,h),$=G();we($,o),X($,0,m),et($,p,[0,1,0]);const x=G();Dt(x,[0,0,3],[0,0,-1],[0,1,0]);const b=G();return Nt(b,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:x,u_projection:b,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(ge(5)),"u_spotLight.outerCos":Math.cos(ge(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const br=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:_r,editOptions:vr,name:pr},Symbol.toStringTag,{value:"Module"})),$r="parrot",Cr={...M,output:{...M.output,delayMs:20,totalFrames:18}},yr=[Fe({name:"amplitudeX",value:.6}),Te({name:"amplitudeY",value:.5})];function Qt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{amplitudeX:o,amplitudeY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=P(-o,o,u),c=Math.sin(i*2*Math.PI)*.5+.5,g=P(-s,0,c),h=G();return X(h,0,1),Sn(h,f,0),X(h,0,-1+g),{u_model:h}}}]}const xr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Qt,defaultOptions:Cr,editOptions:yr,name:$r},Symbol.toStringTag,{value:"Module"})),Tr="wiggling",wr={...M,output:{...M.output,delayMs:50,totalFrames:15}},Er=[Qe({name:"frequency",value:3}),Te({name:"amplitude",value:.05})];function en(t,e,n){const r=t.createProgram("wiggling"),a=e.createGeometry("full"),{frequency:o,amplitude:s}=n;return[{program:r,geometry:a,getUniforms:i=>({u_model:G(),u_time:i,u_amplitude:s,u_frequency:o})}]}const Sr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:en,defaultOptions:wr,editOptions:Er,name:Tr},Symbol.toStringTag,{value:"Module"})),Or="petrified",kr={...M,additionalImages:{urls:[`${xe}/stone.jpg`]},output:{...M.output,delayMs:50,totalFrames:15}},Ar=[Qe({name:"shatterPieces",value:10}),Ae({name:"timeBeforeShatter",value:.5})];function tn(t,e,n){const r=t.createProgram("petrified"),a=e.createGeometry("full"),{shatterPieces:o,timeBeforeShatter:s}=n;return[{program:r,geometry:a,getUniforms:i=>({u_model:G(),u_time:i,u_shatter_pieces:o,u_time_before_shatter:s,u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]})}]}const Mr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:tn,defaultOptions:kr,editOptions:Ar,name:Or},Symbol.toStringTag,{value:"Module"})),ze=[Mr,Wn,Gn,Pn,zn,jn,Qn,rr,ir,fr,hr,br,xr,Sr];function mt(t,e,n){const r=En(n.editOptions);switch(n.name){case"spinning":return qt(t,e,r);case"expanding":return Xt(t,e,r);case"extreme-speed":return Ht(t,e,r);case"excited":return zt(t,e,r);case"jumping":return Bt(t,e,r);case"tower":return Vt(t,e,r);case"repeated":return Yt(t,e,r);case"mirror":return Wt(t,e,r);case"panic":return Jt(t,e,r);case"rotating":return Kt(t,e,r);case"party":return Zt(t,e,r);case"parrot":return Qt(t,e,r);case"wiggling":return en(t,e,r);case"petrified":return tn(t,e,r);default:(a=>{throw new Error(`Unknown animation: ${JSON.stringify(a)}`)})(n)}}var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fr=typeof Se=="object"&&Se&&Se.Object===Object&&Se,Pr=Fr,Rr=Pr,Lr=typeof self=="object"&&self&&self.Object===Object&&self,Ir=Rr||Lr||Function("return this")(),Ge=Ir,jr=Ge,Ur=jr.Symbol,nn=Ur,dt=nn,rn=Object.prototype,Dr=rn.hasOwnProperty,Nr=rn.toString,be=dt?dt.toStringTag:void 0;function Gr(t){var e=Dr.call(t,be),n=t[be];try{t[be]=void 0;var r=!0}catch{}var a=Nr.call(t);return r&&(e?t[be]=n:delete t[be]),a}var qr=Gr,Xr=Object.prototype,Hr=Xr.toString;function zr(t){return Hr.call(t)}var Br=zr,gt=nn,Vr=qr,Yr=Br,Wr="[object Null]",Jr="[object Undefined]",ht=gt?gt.toStringTag:void 0;function Kr(t){return t==null?t===void 0?Jr:Wr:ht&&ht in Object(t)?Vr(t):Yr(t)}var Zr=Kr;function Qr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var an=Qr,ea=Zr,ta=an,na="[object AsyncFunction]",ra="[object Function]",aa="[object GeneratorFunction]",oa="[object Proxy]";function sa(t){if(!ta(t))return!1;var e=ea(t);return e==ra||e==aa||e==na||e==oa}var ia=sa,la=Ge,ua=la["__core-js_shared__"],ca=ua,Be=ca,pt=function(){var t=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fa(t){return!!pt&&pt in t}var ma=fa,da=Function.prototype,ga=da.toString;function ha(t){if(t!=null){try{return ga.call(t)}catch{}try{return t+""}catch{}}return""}var pa=ha,_a=ia,va=ma,ba=an,$a=pa,Ca=/[\\^$.*+?()[\]{}|]/g,ya=/^\[object .+?Constructor\]$/,xa=Function.prototype,Ta=Object.prototype,wa=xa.toString,Ea=Ta.hasOwnProperty,Sa=RegExp("^"+wa.call(Ea).replace(Ca,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Oa(t){if(!ba(t)||va(t))return!1;var e=_a(t)?Sa:ya;return e.test($a(t))}var ka=Oa;function Aa(t,e){return t?.[e]}var Ma=Aa,Fa=ka,Pa=Ma;function Ra(t,e){var n=Pa(t,e);return Fa(n)?n:void 0}var nt=Ra,La=nt,Ia=La(Object,"create"),qe=Ia,_t=qe;function ja(){this.__data__=_t?_t(null):{},this.size=0}var Ua=ja;function Da(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Na=Da,Ga=qe,qa="__lodash_hash_undefined__",Xa=Object.prototype,Ha=Xa.hasOwnProperty;function za(t){var e=this.__data__;if(Ga){var n=e[t];return n===qa?void 0:n}return Ha.call(e,t)?e[t]:void 0}var Ba=za,Va=qe,Ya=Object.prototype,Wa=Ya.hasOwnProperty;function Ja(t){var e=this.__data__;return Va?e[t]!==void 0:Wa.call(e,t)}var Ka=Ja,Za=qe,Qa="__lodash_hash_undefined__";function eo(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Za&&e===void 0?Qa:e,this}var to=eo,no=Ua,ro=Na,ao=Ba,oo=Ka,so=to;function he(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}he.prototype.clear=no;he.prototype.delete=ro;he.prototype.get=ao;he.prototype.has=oo;he.prototype.set=so;var io=he;function lo(){this.__data__=[],this.size=0}var uo=lo;function co(t,e){return t===e||t!==t&&e!==e}var fo=co,mo=fo;function go(t,e){for(var n=t.length;n--;)if(mo(t[n][0],e))return n;return-1}var Xe=go,ho=Xe,po=Array.prototype,_o=po.splice;function vo(t){var e=this.__data__,n=ho(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():_o.call(e,n,1),--this.size,!0}var bo=vo,$o=Xe;function Co(t){var e=this.__data__,n=$o(e,t);return n<0?void 0:e[n][1]}var yo=Co,xo=Xe;function To(t){return xo(this.__data__,t)>-1}var wo=To,Eo=Xe;function So(t,e){var n=this.__data__,r=Eo(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Oo=So,ko=uo,Ao=bo,Mo=yo,Fo=wo,Po=Oo;function pe(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pe.prototype.clear=ko;pe.prototype.delete=Ao;pe.prototype.get=Mo;pe.prototype.has=Fo;pe.prototype.set=Po;var Ro=pe,Lo=nt,Io=Ge,jo=Lo(Io,"Map"),Uo=jo,vt=io,Do=Ro,No=Uo;function Go(){this.size=0,this.__data__={hash:new vt,map:new(No||Do),string:new vt}}var qo=Go;function Xo(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Ho=Xo,zo=Ho;function Bo(t,e){var n=t.__data__;return zo(e)?n[typeof e=="string"?"string":"hash"]:n.map}var He=Bo,Vo=He;function Yo(t){var e=Vo(this,t).delete(t);return this.size-=e?1:0,e}var Wo=Yo,Jo=He;function Ko(t){return Jo(this,t).get(t)}var Zo=Ko,Qo=He;function es(t){return Qo(this,t).has(t)}var ts=es,ns=He;function rs(t,e){var n=ns(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var as=rs,os=qo,ss=Wo,is=Zo,ls=ts,us=as;function _e(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_e.prototype.clear=os;_e.prototype.delete=ss;_e.prototype.get=is;_e.prototype.has=ls;_e.prototype.set=us;var cs=_e,fs="__lodash_hash_undefined__";function ms(t){return this.__data__.set(t,fs),this}var ds=ms;function gs(t){return this.__data__.has(t)}var hs=gs,ps=cs,_s=ds,vs=hs;function Pe(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new ps;++e<n;)this.add(t[e])}Pe.prototype.add=Pe.prototype.push=_s;Pe.prototype.has=vs;var bs=Pe;function $s(t,e,n,r){for(var a=t.length,o=n+(r?1:-1);r?o--:++o<a;)if(e(t[o],o,t))return o;return-1}var Cs=$s;function ys(t){return t!==t}var xs=ys;function Ts(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}var ws=Ts,Es=Cs,Ss=xs,Os=ws;function ks(t,e,n){return e===e?Os(t,e,n):Es(t,Ss,n)}var As=ks,Ms=As;function Fs(t,e){var n=t==null?0:t.length;return!!n&&Ms(t,e,0)>-1}var Ps=Fs;function Rs(t,e,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(e,t[r]))return!0;return!1}var Ls=Rs;function Is(t,e){return t.has(e)}var js=Is,Us=nt,Ds=Ge,Ns=Us(Ds,"Set"),Gs=Ns;function qs(){}var Xs=qs;function Hs(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var on=Hs,Ve=Gs,zs=Xs,Bs=on,Vs=1/0,Ys=Ve&&1/Bs(new Ve([,-0]))[1]==Vs?function(t){return new Ve(t)}:zs,Ws=Ys,Js=bs,Ks=Ps,Zs=Ls,Qs=js,ei=Ws,ti=on,ni=200;function ri(t,e,n){var r=-1,a=Ks,o=t.length,s=!0,l=[],i=l;if(n)s=!1,a=Zs;else if(o>=ni){var u=e?null:ei(t);if(u)return ti(u);s=!1,a=Qs,i=new Js}else i=e?[]:l;e:for(;++r<o;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var g=i.length;g--;)if(i[g]===c)continue e;e&&i.push(c),l.push(f)}else a(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var ai=ri,oi=ai;function si(t){return t&&t.length?oi(t):[]}var ii=si;class Ye{constructor(e,n){this.gl=e,this.unit=n}loadingUrl=null;url=null;texture=null;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),a=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:o}=this;this.texture&&o.deleteTexture(this.texture);const s=o.createTexture();if(!s)throw new Error("Failed to create texture");o.activeTexture(o.TEXTURE0+this.unit),o.bindTexture(o.TEXTURE_2D,s),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class bt{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const ne=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,We=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,li=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    vec3 texel = texture(u_image, v_texCoords).rgb;
    outColor = vec4(texel, 1.0);
}
`,ui=`#version 300 es

layout(location = 0) in vec3 a_position;
layout(location = 1) in vec2 a_texCoords;
layout(location = 2) in vec3 a_normal;

uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;

out vec2 v_texCoords;
out vec3 v_normal;
out vec3 v_position;

void main() {
  mat4 modelView = u_view * u_model;
  v_position = vec3(modelView * vec4(a_position, 1.0));
  gl_Position = u_projection * vec4(v_position, 1.0);
  // flip y coordinate because readPixels() will invert the image again
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
  v_normal = (transpose(inverse(modelView)) * vec4(a_normal, 0)).xyz;
}
`,ci=`#version 300 es
precision highp float;

in vec2 v_texCoords;
in vec3 v_normal;
in vec3 v_position;

struct Material {
  vec3 specular;
  float shininess;
};

struct DirectionalLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 direction;
};

struct PointLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  float attenuation1;
  float attenuation2;
};

struct SpotLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  vec3 direction;
  float innerCos;
  float outerCos;
  float attenuation1;
  float attenuation2;
};

uniform sampler2D u_image;
uniform Material u_material;
uniform DirectionalLight u_directionalLight;
uniform PointLight u_pointLight;
uniform SpotLight u_spotLight;

vec3 computeSpotLight(SpotLight light, vec3 normal, vec3 fragToCamera, vec3 texel) {
  float dist = length(light.position - v_position);
  float attenuation = 1.0 / (1.0 + light.attenuation1 * dist + light.attenuation2 * dist * dist);
  vec3 dir = normalize(light.position - v_position);
  float angle = dot(normalize(-light.direction), dir);
  float intensity = smoothstep(light.outerCos, light.innerCos, angle);

  float diff = max(dot(dir, normal), 0.0);

  vec3 halfVec = normalize(dir + fragToCamera);
  float spec = pow(max(dot(halfVec, normal), 0.0), u_material.shininess);

  vec3 ambient = light.ambient * texel * attenuation * intensity;
  vec3 diffuse = light.diffuse * texel * diff * attenuation * intensity;
  vec3 specular = light.specular * u_material.specular * spec * attenuation * intensity;

  return ambient + diffuse + specular;
}

vec3 computeDirectionalLight(DirectionalLight directionalLight, vec3 normal, vec3 fragToCamera, vec3 texel) {
  return computeSpotLight(SpotLight(
    directionalLight.ambient,
    directionalLight.diffuse,
    directionalLight.specular,
    -directionalLight.direction + v_position,
    directionalLight.direction,
    // disable intensity
    -2.0, -3.0,
    // disable attenuation
    0.0, 0.0
  ), normal, fragToCamera, texel);
}

vec3 computePointLight(PointLight pointLight, vec3 normal, vec3 fragToCamera, vec3 texel) {
  return computeSpotLight(SpotLight(
    pointLight.ambient,
    pointLight.diffuse,
    pointLight.specular,
    pointLight.position,
    -pointLight.position + v_position,
    // disable intensity
    -2.0, -3.0,
    pointLight.attenuation1,
    pointLight.attenuation2
  ), normal, fragToCamera, texel);
}

out vec4 outColor;

void main() {
  vec3 texel = texture(u_image, v_texCoords).xyz;
  // front facing is actually the back face since we flipped y-axis in the vertex shader
  vec3 normal = normalize(v_normal) * (1.0 - 2.0 * float(gl_FrontFacing));
  vec3 fragToCamera = normalize(-v_position);

  vec3 color = vec3(0.0);
  color += computeDirectionalLight(u_directionalLight, normal, fragToCamera, texel);
  color += computePointLight(u_pointLight, normal, fragToCamera, texel);
  color += computeSpotLight(u_spotLight, normal, fragToCamera, texel);

  outColor = vec4(color, 1.0);
}
`,fi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = vec4(1.0 - texture(u_image, v_texCoords).rgb, 1.0);
}
`,mi=`#version 300 es
precision highp float;

in vec2 v_texCoords;

uniform float u_time;
uniform float u_amplitude;
uniform float u_frequency;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  vec2 texCoords = v_texCoords + vec2(sin((v_texCoords.y * u_frequency + u_time) * radians(360.0)) * u_amplitude, 0.0);
  vec3 texel = texture(u_image, texCoords).xyz;
  outColor = vec4(texel, float(texCoords.x >= 0.0 && texCoords.x <= 1.0));
}
`,di=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  outColor = vec4(u_weights * texture(u_image, v_texCoords).rgb, 1.0);
}
`,gi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_inner;
uniform float u_outer;

out vec4 outColor;

void main() {
  float dist = length(v_texCoords - vec2(0.5, 0.5));
  float factor = 1.0 - smoothstep(u_inner, u_outer, dist);
  outColor = vec4(factor * texture(u_image, v_texCoords).rgb, 1.0);
}
`,hi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = vec4(texture(u_image, v_texCoords).rgb, 1.0);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,pi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_kernel;

out vec4 outColor;

vec3 getColor(vec2 offset, sampler2D image, vec2 texCoords) {
  vec2 coords = texCoords + offset / vec2(textureSize(image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(image, coords).rgb * inRange;
}

vec3 kernalMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
  vec3 result = vec3(0.0, 0.0, 0.0);

  result += kernel[0][0] * getColor(vec2(-1.0,  1.0), image, texCoords);
  result += kernel[0][1] * getColor(vec2(-1.0,  0.0), image, texCoords);
  result += kernel[0][2] * getColor(vec2(-1.0, -1.0), image, texCoords);
  result += kernel[1][0] * getColor(vec2( 0.0,  1.0), image, texCoords);
  result += kernel[1][1] * getColor(vec2( 0.0,  0.0), image, texCoords);
  result += kernel[1][2] * getColor(vec2( 0.0, -1.0), image, texCoords);
  result += kernel[2][0] * getColor(vec2( 1.0,  1.0), image, texCoords);
  result += kernel[2][1] * getColor(vec2( 1.0,  0.0), image, texCoords);
  result += kernel[2][2] * getColor(vec2( 1.0, -1.0), image, texCoords);

  return result;
}

void main() {
  vec3 color = kernalMultiply(u_kernel, u_image, v_texCoords);
  outColor = vec4(color, 1.0);
}
`,_i=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_kernel1;
uniform mat3 u_kernel2;

out vec4 outColor;

vec3 getColor(vec2 offset, sampler2D image, vec2 texCoords) {
  vec2 coords = texCoords + offset / vec2(textureSize(image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(image, coords).rgb * inRange;
}

vec3 kernalMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
  vec3 result = vec3(0.0, 0.0, 0.0);

  result += kernel[0][0] * getColor(vec2(-1.0,  1.0), image, texCoords);
  result += kernel[0][1] * getColor(vec2(-1.0,  0.0), image, texCoords);
  result += kernel[0][2] * getColor(vec2(-1.0, -1.0), image, texCoords);
  result += kernel[1][0] * getColor(vec2( 0.0,  1.0), image, texCoords);
  result += kernel[1][1] * getColor(vec2( 0.0,  0.0), image, texCoords);
  result += kernel[1][2] * getColor(vec2( 0.0, -1.0), image, texCoords);
  result += kernel[2][0] * getColor(vec2( 1.0,  1.0), image, texCoords);
  result += kernel[2][1] * getColor(vec2( 1.0,  0.0), image, texCoords);
  result += kernel[2][2] * getColor(vec2( 1.0, -1.0), image, texCoords);

  return result;
}

void main() {
  vec3 color1 = kernalMultiply(u_kernel1, u_image, v_texCoords);
  vec3 color2 = kernalMultiply(u_kernel2, u_image, v_texCoords);
  outColor = vec4(
    length(vec2(color1.r, color2.r)),
    length(vec2(color1.g, color2.g)),
    length(vec2(color1.b, color2.b)),
    1.0);
}
`,vi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_kernel[8];

out vec4 outColor;

vec3 getColor(vec2 offset, sampler2D image, vec2 texCoords) {
  vec2 coords = texCoords + offset / vec2(textureSize(image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(image, coords).rgb * inRange;
}

vec3 kernalMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
  vec3 result = vec3(0.0, 0.0, 0.0);

  result += kernel[0][0] * getColor(vec2(-1.0,  1.0), image, texCoords);
  result += kernel[0][1] * getColor(vec2(-1.0,  0.0), image, texCoords);
  result += kernel[0][2] * getColor(vec2(-1.0, -1.0), image, texCoords);
  result += kernel[1][0] * getColor(vec2( 0.0,  1.0), image, texCoords);
  result += kernel[1][1] * getColor(vec2( 0.0,  0.0), image, texCoords);
  result += kernel[1][2] * getColor(vec2( 0.0, -1.0), image, texCoords);
  result += kernel[2][0] * getColor(vec2( 1.0,  1.0), image, texCoords);
  result += kernel[2][1] * getColor(vec2( 1.0,  0.0), image, texCoords);
  result += kernel[2][2] * getColor(vec2( 1.0, -1.0), image, texCoords);

  return result;
}

void main() {
  vec3 result = vec3(0.0);
  for (int i = 0; i < 8; ++i) {
    result = max(result, kernalMultiply(u_kernel[i], u_image, v_texCoords));
  }
  outColor = vec4(result, 1.0);
}
`,bi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_luminance;

out vec4 outColor;

vec3 getColor(vec2 offset, sampler2D image, vec2 texCoords) {
  vec2 coords = texCoords + offset / vec2(textureSize(image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(image, coords).rgb * inRange;
}

vec3 kernalMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
  vec3 result = vec3(0.0, 0.0, 0.0);

  result += kernel[0][0] * getColor(vec2(-1.0,  1.0), image, texCoords);
  result += kernel[0][1] * getColor(vec2(-1.0,  0.0), image, texCoords);
  result += kernel[0][2] * getColor(vec2(-1.0, -1.0), image, texCoords);
  result += kernel[1][0] * getColor(vec2( 0.0,  1.0), image, texCoords);
  result += kernel[1][1] * getColor(vec2( 0.0,  0.0), image, texCoords);
  result += kernel[1][2] * getColor(vec2( 0.0, -1.0), image, texCoords);
  result += kernel[2][0] * getColor(vec2( 1.0,  1.0), image, texCoords);
  result += kernel[2][1] * getColor(vec2( 1.0,  0.0), image, texCoords);
  result += kernel[2][2] * getColor(vec2( 1.0, -1.0), image, texCoords);

  return result;
}

void main() {
  vec3 sum = vec3(0.0);

  vec2 offsets[8] = vec2[](
    vec2(-1, -1),
    vec2(-1,  0),
    vec2(-1,  1),
    vec2( 0, -1),
    vec2( 0,  1),
    vec2( 1, -1),
    vec2( 1,  0),
    vec2( 1,  1)
  );

  for (int i = 0; i < 8; ++i) {
    vec3 color = getColor(offsets[i], u_image, v_texCoords);
    float luminance = dot(color, vec3(1.0/3.0));
    if (luminance >= u_luminance) {
      sum += color;
    }
  }

  vec3 result = texture(u_image, v_texCoords).rgb + sum / 8.0;
  outColor = vec4(result, 1.0);
}
`,$i=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additional_images[2];

out vec4 outColor;

float getColor(vec2 offset) {
  vec2 coords = v_texCoords + offset / vec2(textureSize(u_image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  vec4 texel = texture(u_image, coords);
  float average = dot(texel.rgb, vec3(1.0 / 3.0));
  return average * inRange;
}

void main() {
  vec2 offsets[8] = vec2[](
    vec2(-1.0, -1.0),
    vec2(-1.0,  0.0),
    vec2(-1.0,  1.0),
    vec2( 0.0, -1.0),
    vec2( 0.0,  1.0),
    vec2( 1.0, -1.0),
    vec2( 1.0,  0.0),
    vec2( 1.0,  1.0)
  );

  float colors[8];

  for (int i = 0; i < 8; ++i) {
    colors[i] = getColor(offsets[i]);
  }

  float color1 = colors[0] + 2.0 * colors[1] + colors[2] - colors[5] - 2.0 * colors[6] - colors[7];
  float color2 = colors[0] + 2.0 * colors[3] + colors[5] - colors[2] - 2.0 * colors[4] - colors[7];
  float result = length(vec2(color1, color2));

  outColor = texture(u_additional_images[0], v_texCoords);
  if (result > 0.2) {
    outColor = outColor * 0.75;
  }
}
`,$t={default:{vertex:We,fragment:li},default3d:{vertex:ui,fragment:ci},wiggling:{vertex:We,fragment:mi},petrified:{vertex:We,fragment:$i},invert:{vertex:ne,fragment:fi},kernel:{vertex:ne,fragment:pi},gradient2:{vertex:ne,fragment:_i},gradient8:{vertex:ne,fragment:vi},contrast:{vertex:ne,fragment:hi},bloom:{vertex:ne,fragment:bi},mix:{vertex:ne,fragment:di},vignette:{vertex:ne,fragment:gi}};class Ci{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:yi(this.gl,$t[e].vertex,$t[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Re(t,e,n){for(const[r,a]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const o=e.uniformLocations[r];r.includes("image")&&typeof a=="number"?t.uniform1i(o,a):Array.isArray(a)?a.length===2?t.uniform2fv(o,a):a.length===3?t.uniform3fv(o,a):a.length===4?t.uniform4fv(o,a):a.length===9?t.uniformMatrix3fv(o,!1,a):a.length===16&&t.uniformMatrix4fv(o,!1,a):typeof a=="number"?t.uniform1f(o,a):typeof a=="boolean"&&t.uniform1i(o,a?1:0)}}function yi(t,e,n){const r=Ct(t,t.VERTEX_SHADER,e);let a;try{a=Ct(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const o=t.createProgram();if(o===null)throw t.deleteShader(a),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(o,r),t.attachShader(o,a),t.linkProgram(o),t.detachShader(o,a),t.detachShader(o,r),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(o,t.LINK_STATUS)){const s=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`Failed to link program: ${s}`)}return o}function Ct(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${a}`)}return r}function xi(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let a,o;for(const s of n){a!==s.program&&(t.useProgram(s.program.program),a=s.program),o!==s.geometry&&(t.bindVertexArray(s.geometry.vao),o=s.geometry);const l=s.getUniforms(e);Re(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Re(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const ce={a_position:0,a_texCoords:1,a_normal:2};function Ti(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(ce.a_position),t.vertexAttribPointer(ce.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(ce.a_texCoords),t.vertexAttribPointer(ce.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(ce.a_normal),t.vertexAttribPointer(ce.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const wi={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class Ei{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=Ti(this.gl,wi[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const Si=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],yt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_kernel:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"kernel",uniforms:{u_kernel:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function xt(t,e){return e.map(n=>({program:t.createProgram(yt[n].program),uniforms:yt[n].uniforms}))}class Oi{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new Ci(this.gl),this.geometryFactory=new Ei(this.gl),this.texture=new Ye(this.gl,0),this.additionalTextures=[new Ye(this.gl,3),new Ye(this.gl,4)],this.renderTextures=[new bt(this.gl,1),new bt(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;additionalTextures;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,a)=>{const o=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:a,frame:0,sprites:mt(this.programFactory,this.geometryFactory,e.animation),effects:xt(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:o,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;o.onmessage=c=>{const g=c.data;let h;switch(g.type){case"Ready":s.workerReady=!0,h={type:"Init",width:l,height:i,delayMs:u,quality:f},o.postMessage(h);break;case"FrameAdded":n();break;case"Success":this.resolve(g.dataUri);break;case"Failure":this.reject(g.error);break;default:(p=>{this.reject(`Cannot handle worker message: ${JSON.stringify(g)}`)})()}},o.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,a)=>{const o={type:"frame",request:e,resolve:r,reject:a,frame:n,sprites:mt(this.programFactory,this.geometryFactory,e.animation),effects:xt(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(o)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:a,sprites:o,effects:s,frame:l}=e,{image:i,additionalImages:u,output:f}=r;if(!(l>=f.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await Promise.all([this.texture.loadImage(i.url),...this.additionalTextures.map((h,p)=>u.urls[p]?h.loadImage(u.urls[p]):Promise.resolve())]),e!==this.current)return;const{width:c,height:g}=f;this.renderTextures.forEach(h=>h.setSize(c,g)),this.canvas.width=c,this.canvas.height=g,this.gl.viewport(0,0,c,g),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.additionalTextures.forEach(h=>{this.gl.activeTexture(this.gl.TEXTURE0+h.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,h.texture)});for(const h of ii(o.map(p=>p.program)))this.gl.useProgram(h.program),Re(this.gl,h,{u_image:this.texture.unit}),this.additionalTextures.forEach((p,m)=>{const $=`u_additional_images[${m}]`;Re(this.gl,h,{[$]:p.unit})})}if(xi(this.gl,l/r.output.totalFrames,o,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")a();else{const c=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,c);const{worker:g}=e,h={type:"AddFrame",buffer:c.buffer};if(g.postMessage(h,[c.buffer]),l===f.totalFrames-1){const p={type:"GetResult"};g.postMessage(p)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.additionalTextures.forEach(e=>e.destroy()),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const te=function(){const{subscribe:t,update:e}=Ne({animations:ze,current:ze[0]}),n=o=>{e(s=>s.current===o||!s.animations.find(i=>i===o)?s:{animations:s.animations,current:o})};function r(o,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===o?{...o,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function a(){e(({animations:o,current:s})=>{const l=ze.find(i=>i.name===s.name);return{animations:o.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:a}}(),Le=function(){const{subscribe:t,update:e}=Ne(Si.map(a=>({type:a,enabled:!1})));function n(a,o){e(s=>s.map(l=>l.type===a?{type:a,enabled:o}:l))}function r(){e(a=>a.map(o=>({...o,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function rt(t){let e=!0;const{subscribe:n,update:r}=Ne(void 0,s=>te.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function a(s){r(l=>(e=!1,{...l,...s}))}function o(){r(()=>(e=!0,ye(te).current.defaultOptions[t]))}return{subscribe:n,change:a,reset:o}}const Ie=rt("image"),ki=rt("additionalImages"),Q=rt("output"),Ke=Cn([Ie,ki,Q,te,Le],([t,e,n,r,a])=>({image:t,additionalImages:e,output:n,animation:r.current,effects:a})),$e=function(){const t=Ne({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new Oi(s),running:!1,frame:0}))}function a(){const{animator:s}=ye(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(ye(Ke),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function o(s){const{animator:l,frame:i}=ye(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=ye(Ke);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:a,renderFrame:o}}();function Tt(t,{delay:e=0,duration:n=400,easing:r=sn}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*a}`}}function wt(t){let e,n,r;const a=t[5].default,o=un(a,t,t[4],null);return{c(){e=C("div"),o&&o.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var l=T(e);o&&o.l(l),l.forEach(v),this.h()},h(){d(e,"class","section__content svelte-v2pn2e")},m(s,l){F(s,e,l),o&&o.m(e,null),r=!0},p(s,l){o&&o.p&&(!r||l&16)&&cn(o,a,s,s[4],r?mn(a,s[4],l,null):fn(s[4]),null)},i(s){r||(E(o,s),dn(()=>{n||(n=ot(e,Tt,{duration:250},!0)),n.run(1)}),r=!0)},o(s){A(o,s),n||(n=ot(e,Tt,{duration:250},!1)),n.run(0),r=!1},d(s){s&&v(e),o&&o.d(s),s&&n&&n.end()}}}function Ai(t){let e,n,r,a,o=t[0]?"-":"+",s,l,i,u,f,c,g,h,p,m,$,x,b=t[0]&&wt(t);return{c(){e=C("section"),n=C("header"),r=C("button"),a=R("["),s=R(o),l=R("]"),i=O(),u=C("h2"),f=R(t[1]),c=O(),g=C("button"),h=R("Reset"),p=O(),b&&b.c(),this.h()},l(w){e=y(w,"SECTION",{class:!0});var S=T(e);n=y(S,"HEADER",{class:!0});var H=T(n);r=y(H,"BUTTON",{class:!0,type:!0});var z=T(r);a=L(z,"["),s=L(z,o),l=L(z,"]"),z.forEach(v),i=k(H),u=y(H,"H2",{class:!0});var ue=T(u);f=L(ue,t[1]),ue.forEach(v),c=k(H),g=y(H,"BUTTON",{class:!0,type:!0});var W=T(g);h=L(W,"Reset"),W.forEach(v),H.forEach(v),p=k(S),b&&b.l(S),S.forEach(v),this.h()},h(){d(r,"class","section__expand svelte-v2pn2e"),d(r,"type","button"),d(u,"class","section__heading svelte-v2pn2e"),d(g,"class","section__reset svelte-v2pn2e"),d(g,"type","button"),d(n,"class","section__header svelte-v2pn2e"),d(e,"class","section svelte-v2pn2e")},m(w,S){F(w,e,S),_(e,n),_(n,r),_(r,a),_(r,s),_(r,l),_(n,i),_(n,u),_(u,f),_(n,c),_(n,g),_(g,h),_(e,p),b&&b.m(e,null),m=!0,$||(x=[ee(r,"click",t[3]),ee(u,"click",t[3]),ee(u,"keypress",t[3]),ee(g,"click",t[6])],$=!0)},p(w,[S]){(!m||S&1)&&o!==(o=w[0]?"-":"+")&&Z(s,o),(!m||S&2)&&Z(f,w[1]),w[0]?b?(b.p(w,S),S&1&&E(b,1)):(b=wt(w),b.c(),E(b,1),b.m(e,null)):b&&(Ue(),A(b,1,1,()=>{b=null}),De())},i(w){m||(E(b),m=!0)},o(w){A(b),m=!1},d(w){w&&v(e),b&&b.d(),$=!1,ln(x)}}}function Mi(t,e,n){let{$$slots:r={},$$scope:a}=e,{title:o=""}=e,{expanded:s=!0}=e;const l=Ze();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,o=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,a=f.$$scope)},[s,o,l,i,a,r,u]}class je extends B{constructor(e){super(),V(this,e,Mi,Ai,Y,{title:1,expanded:0})}}function Fi(t){let e,n,r,a,o,s,l,i;return{c(){e=C("label"),n=C("input"),r=O(),a=C("div"),o=C("img"),this.h()},l(u){e=y(u,"LABEL",{class:!0});var f=T(e);n=y(f,"INPUT",{class:!0,type:!0,accept:!0}),r=k(f),a=y(f,"DIV",{class:!0});var c=T(a);o=y(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(v),f.forEach(v),this.h()},h(){d(n,"class","image__input svelte-1me35do"),d(n,"type","file"),d(n,"accept","image/*"),d(o,"class","image__preview svelte-1me35do"),le(o.src,s=t[0].url)||d(o,"src",s),d(o,"alt","source"),d(a,"class","image__container svelte-1me35do"),d(e,"class","image svelte-1me35do")},m(u,f){F(u,e,f),_(e,n),_(e,r),_(e,a),_(a,o),l||(i=ee(n,"input",t[1]),l=!0)},p(u,f){f&1&&!le(o.src,s=u[0].url)&&d(o,"src",s)},d(u){u&&v(e),l=!1,i()}}}function Pi(t){let e,n;return e=new je({props:{title:"Image",expanded:!0,$$slots:{default:[Fi]},$$scope:{ctx:t}}}),e.$on("reset",Ie.reset),{c(){j(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){D(e,r,a),n=!0},p(r,[a]){const o={};a&5&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Ri(t,e,n){let r;ae(t,Ie,o=>n(0,r=o));function a(o){const l=o.target.files?.[0];l&&Ie.change({url:URL.createObjectURL(l)})}return[r,a]}class Li extends B{constructor(e){super(),V(this,e,Ri,Pi,Y,{})}}function Et(t){let e,n,r,a,o,s;return{c(){e=C("label"),n=R(t[1]),r=O(),a=C("input"),this.h()},l(l){e=y(l,"LABEL",{class:!0});var i=T(e);n=L(i,t[1]),r=k(i),a=y(i,"INPUT",{class:!0,type:!0}),i.forEach(v),this.h()},h(){d(a,"class","slider__text-input svelte-1h0gcvd"),d(a,"type","text"),a.value=t[0],d(e,"class","slider__label svelte-1h0gcvd")},m(l,i){F(l,e,i),_(e,n),_(e,r),_(e,a),o||(s=ee(a,"input",t[5]),o=!0)},p(l,i){i&2&&Z(n,l[1]),i&1&&a.value!==l[0]&&(a.value=l[0])},d(l){l&&v(e),o=!1,s()}}}function Ii(t){let e,n,r,a,o=Oe(t[2])+"",s,l,i,u,f,c,g=Oe(t[3])+"",h,p,m,$=t[1]&&Et(t);return{c(){e=C("div"),$&&$.c(),n=O(),r=C("div"),a=C("span"),s=R(o),l=O(),i=C("div"),u=C("input"),f=O(),c=C("span"),h=R(g),this.h()},l(x){e=y(x,"DIV",{class:!0});var b=T(e);$&&$.l(b),n=k(b),r=y(b,"DIV",{class:!0});var w=T(r);a=y(w,"SPAN",{class:!0});var S=T(a);s=L(S,o),S.forEach(v),l=k(w),i=y(w,"DIV",{class:!0});var H=T(i);u=y(H,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),H.forEach(v),f=k(w),c=y(w,"SPAN",{class:!0});var z=T(c);h=L(z,g),z.forEach(v),w.forEach(v),b.forEach(v),this.h()},h(){d(a,"class","slider__range slider__range--min svelte-1h0gcvd"),d(u,"class","slider__input svelte-1h0gcvd"),d(u,"type","range"),d(u,"min",t[2]),d(u,"max",t[3]),d(u,"step",t[4]),u.value=t[0],d(i,"class","slider__input-container svelte-1h0gcvd"),d(c,"class","slider__range slider__range--max"),d(r,"class","slider__container svelte-1h0gcvd"),d(e,"class","slider")},m(x,b){F(x,e,b),$&&$.m(e,null),_(e,n),_(e,r),_(r,a),_(a,s),_(r,l),_(r,i),_(i,u),_(r,f),_(r,c),_(c,h),p||(m=ee(u,"input",t[5]),p=!0)},p(x,[b]){x[1]?$?$.p(x,b):($=Et(x),$.c(),$.m(e,n)):$&&($.d(1),$=null),b&4&&o!==(o=Oe(x[2])+"")&&Z(s,o),b&4&&d(u,"min",x[2]),b&8&&d(u,"max",x[3]),b&16&&d(u,"step",x[4]),b&1&&(u.value=x[0]),b&8&&g!==(g=Oe(x[3])+"")&&Z(h,g)},i:oe,o:oe,d(x){x&&v(e),$&&$.d(),p=!1,m()}}}function Oe(t){return t.toFixed(2).replace(/\.?0+$/,"")}function ji(t,e,n){const r=Ze();let{label:a=""}=e,{min:o=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<o?o:(s-o)/2}=e;function u(f){const c=f.target,g=parseFloat(c.value);Number.isNaN(g)||(n(0,i=g),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,a=f.label),"min"in f&&n(2,o=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,a,o,s,l,u]}class ie extends B{constructor(e){super(),V(this,e,ji,Ii,Y,{label:1,min:2,max:3,step:4,value:0})}}function Ui(t){let e,n,r,a,o,s,l,i,u,f;return e=new ie({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new ie({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),o=new ie({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),o.$on("input",t[3]),l=new ie({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new ie({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){j(e.$$.fragment),n=O(),j(r.$$.fragment),a=O(),j(o.$$.fragment),s=O(),j(l.$$.fragment),i=O(),j(u.$$.fragment)},l(c){U(e.$$.fragment,c),n=k(c),U(r.$$.fragment,c),a=k(c),U(o.$$.fragment,c),s=k(c),U(l.$$.fragment,c),i=k(c),U(u.$$.fragment,c)},m(c,g){D(e,c,g),F(c,n,g),D(r,c,g),F(c,a,g),D(o,c,g),F(c,s,g),D(l,c,g),F(c,i,g),D(u,c,g),f=!0},p(c,g){const h={};g&1&&(h.value=c[0].width),e.$set(h);const p={};g&1&&(p.value=c[0].height),r.$set(p);const m={};g&1&&(m.value=c[0].delayMs),o.$set(m);const $={};g&1&&($.value=c[0].totalFrames),l.$set($);const x={};g&1&&(x.value=c[0].quality),u.$set(x)},i(c){f||(E(e.$$.fragment,c),E(r.$$.fragment,c),E(o.$$.fragment,c),E(l.$$.fragment,c),E(u.$$.fragment,c),f=!0)},o(c){A(e.$$.fragment,c),A(r.$$.fragment,c),A(o.$$.fragment,c),A(l.$$.fragment,c),A(u.$$.fragment,c),f=!1},d(c){N(e,c),c&&v(n),N(r,c),c&&v(a),N(o,c),c&&v(s),N(l,c),c&&v(i),N(u,c)}}}function Di(t){let e,n;return e=new je({props:{title:"Output",expanded:!0,$$slots:{default:[Ui]},$$scope:{ctx:t}}}),e.$on("reset",Q.reset),{c(){j(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){D(e,r,a),n=!0},p(r,[a]){const o={};a&65&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Ni(t,e,n){let r;return ae(t,Q,u=>n(0,r=u)),[r,u=>Q.change({width:u.detail.value}),u=>Q.change({height:u.detail.value}),u=>Q.change({delayMs:u.detail.value}),u=>Q.change({totalFrames:u.detail.value}),u=>Q.change({quality:u.detail.value})]}class Gi extends B{constructor(e){super(),V(this,e,Ni,Di,Y,{})}}function qi(t){let e,n,r,a,o,s;return n=new Li({}),a=new Gi({}),{c(){e=C("aside"),j(n.$$.fragment),r=O(),j(a.$$.fragment),this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=T(e);U(n.$$.fragment,i),r=k(i),U(a.$$.fragment,i),i.forEach(v),this.h()},h(){d(e,"class",o=K(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){F(l,e,i),D(n,e,null),_(e,r),D(a,e,null),s=!0},p(l,[i]){(!s||i&1&&o!==(o=K(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",o)},i(l){s||(E(n.$$.fragment,l),E(a.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(a.$$.fragment,l),s=!1},d(l){l&&v(e),N(n),N(a)}}}function Xi(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class Hi extends B{constructor(e){super(),V(this,e,Xi,qi,Y,{class:0})}}function zi(t){let e,n,r,a,o,s,l;return{c(){e=C("div"),n=R(t[1]),r=O(),a=C("label"),o=C("input"),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=T(e);n=L(u,t[1]),r=k(u),a=y(u,"LABEL",{class:!0});var f=T(a);o=y(f,"INPUT",{class:!0,type:!0}),f.forEach(v),u.forEach(v),this.h()},h(){d(o,"class","toggle__checkbox svelte-1j9rfin"),d(o,"type","checkbox"),o.checked=t[0],d(a,"class","toggle__label svelte-1j9rfin"),re(a,"toggle__label--active",t[0]),d(e,"class","toggle svelte-1j9rfin")},m(i,u){F(i,e,u),_(e,n),_(e,r),_(e,a),_(a,o),s||(l=ee(o,"change",t[2]),s=!0)},p(i,[u]){u&2&&Z(n,i[1]),u&1&&(o.checked=i[0]),u&1&&re(a,"toggle__label--active",i[0])},i:oe,o:oe,d(i){i&&v(e),s=!1,l()}}}function Bi(t,e,n){const r=Ze();let{label:a=""}=e,{value:o=!1}=e;function s(l){const i=l.target;n(0,o=Boolean(i.checked)),r("change",{value:o})}return t.$$set=l=>{"label"in l&&n(1,a=l.label),"value"in l&&n(0,o=l.value)},[o,a,s]}class at extends B{constructor(e){super(),V(this,e,Bi,zi,Y,{label:1,value:0})}}function St(t,e,n){const r=t.slice();return r[6]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[9]=e[n],r}function Vi(t){let e,n;function r(...a){return t[4](t[9],...a)}return e=new at({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function Yi(t){let e,n;function r(...a){return t[3](t[9],...a)}return e=new ie({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.min=t[9].min),o&2&&(s.max=t[9].max),o&2&&(s.step=t[9].step),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function kt(t){let e,n,r,a;const o=[Yi,Vi],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=o[e](t)),{c(){n&&n.c(),r=fe()},l(i){n&&n.l(i),r=fe()},m(i,u){~e&&s[e].m(i,u),F(i,r,u),a=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(Ue(),A(s[f],1,1,()=>{s[f]=null}),De()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=o[e](i),n.c()),E(n,1),n.m(r.parentNode,r)):n=null)},i(i){a||(E(n),a=!0)},o(i){A(n),a=!1},d(i){~e&&s[e].d(i),i&&v(r)}}}function Wi(t){let e,n,r=t[1].current.editOptions,a=[];for(let s=0;s<r.length;s+=1)a[s]=kt(Ot(t,r,s));const o=s=>A(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=fe()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=fe()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);F(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=Ot(s,r,i);a[i]?(a[i].p(u,l),E(a[i],1)):(a[i]=kt(u),a[i].c(),E(a[i],1),a[i].m(e.parentNode,e))}for(Ue(),i=r.length;i<a.length;i+=1)o(i);De()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)A(a[l]);n=!1},d(s){jt(a,s),s&&v(e)}}}function At(t){let e,n;function r(...a){return t[5](t[6],...a)}return e=new at({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&4&&(s.label=t[6].type),o&4&&(s.value=t[6].enabled),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function Ji(t){let e,n,r=t[2],a=[];for(let s=0;s<r.length;s+=1)a[s]=At(St(t,r,s));const o=s=>A(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=fe()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=fe()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);F(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=St(s,r,i);a[i]?(a[i].p(u,l),E(a[i],1)):(a[i]=At(u),a[i].c(),E(a[i],1),a[i].m(e.parentNode,e))}for(Ue(),i=r.length;i<a.length;i+=1)o(i);De()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)A(a[l]);n=!1},d(s){jt(a,s),s&&v(e)}}}function Ki(t){let e,n,r,a,o,s;return n=new je({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[Wi]},$$scope:{ctx:t}}}),n.$on("reset",te.resetEditOptions),a=new je({props:{title:"Effects",expanded:!0,$$slots:{default:[Ji]},$$scope:{ctx:t}}}),a.$on("reset",Le.reset),{c(){e=C("aside"),j(n.$$.fragment),r=O(),j(a.$$.fragment),this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=T(e);U(n.$$.fragment,i),r=k(i),U(a.$$.fragment,i),i.forEach(v),this.h()},h(){d(e,"class",o=K(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){F(l,e,i),D(n,e,null),_(e,r),D(a,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),a.$set(f),(!s||i&1&&o!==(o=K(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",o)},i(l){s||(E(n.$$.fragment,l),E(a.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(a.$$.fragment,l),s=!1},d(l){l&&v(e),N(n),N(a)}}}function Zi(t,e,n){let r,a;ae(t,te,u=>n(1,r=u)),ae(t,Le,u=>n(2,a=u));let{class:o=""}=e;const s=(u,f)=>te.changeEditOptions(u,f.detail.value),l=(u,f)=>te.changeEditOptions(u,f.detail.value),i=(u,f)=>Le.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,o=u.class)},[o,r,a,s,l,i]}class Qi extends B{constructor(e){super(),V(this,e,Zi,Ki,Y,{class:0})}}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ft(t,e){let n,r,a,o,s,l,i=e[3].name+"",u,f,c,g;function h(){return e[2](e[3])}return{key:t,first:null,c(){n=C("button"),r=C("img"),s=O(),l=C("span"),u=R(i),f=O(),this.h()},l(p){n=y(p,"BUTTON",{type:!0,class:!0});var m=T(n);r=y(m,"IMG",{class:!0,src:!0,alt:!0}),s=k(m),l=y(m,"SPAN",{});var $=T(l);u=L($,i),$.forEach(v),f=k(m),m.forEach(v),this.h()},h(){d(r,"class","image svelte-1l1v01j"),le(r.src,a=`${xe}/demo-${e[3].name}.gif`)||d(r,"src",a),d(r,"alt",o=e[3].name),d(n,"type","button"),d(n,"class","option svelte-1l1v01j"),re(n,"option--selected",e[3]===e[1].current),this.first=n},m(p,m){F(p,n,m),_(n,r),_(n,s),_(n,l),_(l,u),_(n,f),c||(g=ee(n,"click",h),c=!0)},p(p,m){e=p,m&2&&!le(r.src,a=`${xe}/demo-${e[3].name}.gif`)&&d(r,"src",a),m&2&&o!==(o=e[3].name)&&d(r,"alt",o),m&2&&i!==(i=e[3].name+"")&&Z(u,i),m&2&&re(n,"option--selected",e[3]===e[1].current)},d(p){p&&v(n),c=!1,g()}}}function el(t){let e,n=[],r=new Map,a,o=t[1].animations;const s=l=>l[3].name;for(let l=0;l<o.length;l+=1){let i=Mt(t,o,l),u=s(i);r.set(u,n[l]=Ft(u,i))}return{c(){e=C("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=T(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(v),this.h()},h(){d(e,"class",a=K(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){F(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(o=l[1].animations,n=gn(n,i,s,1,l,o,r,e,hn,Ft,null,Mt)),i&1&&a!==(a=K(`container ${l[0]}`)+" svelte-1l1v01j")&&d(e,"class",a)},i:oe,o:oe,d(l){l&&v(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function tl(t,e,n){let r;ae(t,te,s=>n(1,r=s));let{class:a=""}=e;const o=s=>te.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,a=s.class)},[a,r,o]}class nl extends B{constructor(e){super(),V(this,e,tl,el,Y,{class:0})}}function Pt(t){t[12]=t[13].dataUri}function Rt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:ol,then:al,catch:rl,value:13,error:14};return st(n=t[3],r),{c(){e=C("div"),r.block.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var o=T(e);r.block.l(o),o.forEach(v),this.h()},h(){d(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(a,o){F(a,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(a,o){t=a,r.ctx=t,o&8&&n!==(n=t[3])&&st(n,r)||vn(r,t,o)},d(a){a&&v(e),r.block.d(),r.token=null,r=null}}}function rl(t){let e,n,r=t[14]+"",a;return{c(){e=C("p"),n=R("An error has occurred: "),a=R(r),this.h()},l(o){e=y(o,"P",{class:!0});var s=T(e);n=L(s,"An error has occurred: "),a=L(s,r),s.forEach(v),this.h()},h(){d(e,"class","preview__error svelte-13qbjon")},m(o,s){F(o,e,s),_(e,n),_(e,a)},p(o,s){s&8&&r!==(r=o[14]+"")&&Z(a,r)},d(o){o&&v(e)}}}function al(t){Pt(t);let e,n,r,a,o,s,l;return{c(){e=C("div"),n=C("img"),a=O(),o=C("a"),s=R("Download"),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=T(e);n=y(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(v),a=k(i),o=y(i,"A",{class:!0,download:!0,href:!0});var f=T(o);s=L(f,"Download"),f.forEach(v),this.h()},h(){d(n,"class","preview__image svelte-13qbjon"),le(n.src,r=t[12])||d(n,"src",r),d(n,"alt","generated gif"),d(e,"class","preview__image-container svelte-13qbjon"),d(o,"class","preview__download-button svelte-13qbjon"),d(o,"download","jumping_peter.gif"),d(o,"href",l=t[12])},m(i,u){F(i,e,u),_(e,n),F(i,a,u),F(i,o,u),_(o,s)},p(i,u){Pt(i),u&8&&!le(n.src,r=i[12])&&d(n,"src",r),u&8&&l!==(l=i[12])&&d(o,"href",l)},d(i){i&&v(e),i&&v(a),i&&v(o)}}}function ol(t){let e,n,r,a,o,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,g,h,p,m,$;return{c(){e=C("div"),n=C("p"),r=R("Generating..."),a=O(),o=C("p"),s=R("["),i=R(l),u=R(" / "),c=R(f),g=R("]"),h=O(),p=C("progress"),this.h()},l(x){e=y(x,"DIV",{class:!0});var b=T(e);n=y(b,"P",{});var w=T(n);r=L(w,"Generating..."),w.forEach(v),a=k(b),o=y(b,"P",{});var S=T(o);s=L(S,"["),i=L(S,l),u=L(S," / "),c=L(S,f),g=L(S,"]"),S.forEach(v),h=k(b),p=y(b,"PROGRESS",{class:!0,max:!0}),T(p).forEach(v),b.forEach(v),this.h()},h(){d(p,"class","preview__progress svelte-13qbjon"),d(p,"max",m=t[5].totalFrames),p.value=$=t[4].frame,d(e,"class","preview__loading svelte-13qbjon")},m(x,b){F(x,e,b),_(e,n),_(n,r),_(e,a),_(e,o),_(o,s),_(o,i),_(o,u),_(o,c),_(o,g),_(e,h),_(e,p)},p(x,b){b&16&&l!==(l=x[4].frame+"")&&Z(i,l),b&32&&f!==(f=x[5].totalFrames+"")&&Z(c,f),b&32&&m!==(m=x[5].totalFrames)&&d(p,"max",m),b&16&&$!==($=x[4].frame)&&(p.value=$)},d(x){x&&v(e)}}}function sl(t){let e,n,r,a,o,s,l,i,u,f,c,g;r=new at({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let h=!t[1]&&t[3]&&Rt(t);return f=new ie({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=C("main"),n=C("div"),j(r.$$.fragment),a=O(),h&&h.c(),o=O(),s=C("div"),l=C("div"),i=C("canvas"),u=O(),j(f.$$.fragment),this.h()},l(p){e=y(p,"MAIN",{class:!0});var m=T(e);n=y(m,"DIV",{class:!0});var $=T(n);U(r.$$.fragment,$),$.forEach(v),a=k(m),h&&h.l(m),o=k(m),s=y(m,"DIV",{class:!0});var x=T(s);l=y(x,"DIV",{class:!0});var b=T(l);i=y(b,"CANVAS",{class:!0,style:!0}),T(i).forEach(v),b.forEach(v),u=k(x),U(f.$$.fragment,x),x.forEach(v),m.forEach(v),this.h()},h(){d(n,"class","preview__debug-input svelte-13qbjon"),d(i,"class","preview__image svelte-13qbjon"),pn(i,"transform","scaleY(-1)"),d(l,"class","preview__image-container svelte-13qbjon"),d(s,"class","preview__container preview__container--debug svelte-13qbjon"),d(e,"class",c=K(`preview ${t[0]}`)+" svelte-13qbjon"),re(e,"preview--debug",t[1]),re(e,"preview--no-debug",!t[1])},m(p,m){F(p,e,m),_(e,n),D(r,n,null),_(e,a),h&&h.m(e,null),_(e,o),_(e,s),_(s,l),_(l,i),t[9](i),_(s,u),D(f,s,null),g=!0},p(p,[m]){const $={};m&2&&($.value=p[1]),r.$set($),!p[1]&&p[3]?h?h.p(p,m):(h=Rt(p),h.c(),h.m(e,o)):h&&(h.d(1),h=null);const x={};m&32&&(x.max=p[5].totalFrames-1),m&16&&(x.value=p[4].frame),f.$set(x),(!g||m&1&&c!==(c=K(`preview ${p[0]}`)+" svelte-13qbjon"))&&d(e,"class",c),(!g||m&3)&&re(e,"preview--debug",p[1]),(!g||m&3)&&re(e,"preview--no-debug",!p[1])},i(p){g||(E(r.$$.fragment,p),E(f.$$.fragment,p),g=!0)},o(p){A(r.$$.fragment,p),A(f.$$.fragment,p),g=!1},d(p){p&&v(e),N(r),h&&h.d(),t[9](null),N(f)}}}function il(t,e,n){let r,a,o;ae(t,Ke,m=>n(8,r=m)),ae(t,$e,m=>n(4,a=m)),ae(t,Q,m=>n(5,o=m));let s,{class:l=""}=e,i=!1,u=null;function f(){$e.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=$e.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}_n(()=>{$e.changeCanvas(s),c()});function g(m){$e.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function h(m){n(1,i=m.detail.value)}function p(m){bn[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,a,o,g,h,r,p]}class ll extends B{constructor(e){super(),V(this,e,il,sl,Y,{class:0})}}function ul(t){let e,n,r,a,o,s,l,i,u,f,c,g,h,p,m,$,x,b,w,S,H,z,ue,W,ve;return document.title=e=Ce,$=new Tn({props:{class:"header"}}),b=new nl({props:{class:"animations"}}),S=new Hi({props:{class:"common-options"}}),z=new Qi({props:{class:"animation-options"}}),W=new ll({props:{class:"preview"}}),{c(){n=C("meta"),r=C("meta"),a=C("meta"),o=C("meta"),s=C("meta"),l=C("meta"),i=C("meta"),u=C("meta"),f=C("meta"),c=C("meta"),g=C("meta"),h=C("meta"),p=O(),m=C("div"),j($.$$.fragment),x=O(),j(b.$$.fragment),w=O(),j(S.$$.fragment),H=O(),j(z.$$.fragment),ue=O(),j(W.$$.fragment),this.h()},l(I){const q=$n("svelte-2dqrj",document.head);n=y(q,"META",{name:!0,content:!0,class:!0}),r=y(q,"META",{name:!0,content:!0,class:!0}),a=y(q,"META",{property:!0,content:!0,class:!0}),o=y(q,"META",{property:!0,content:!0,class:!0}),s=y(q,"META",{property:!0,content:!0,class:!0}),l=y(q,"META",{property:!0,content:!0,class:!0}),i=y(q,"META",{property:!0,content:!0,class:!0}),u=y(q,"META",{property:!0,content:!0,class:!0}),f=y(q,"META",{property:!0,content:!0,class:!0}),c=y(q,"META",{property:!0,content:!0,class:!0}),g=y(q,"META",{property:!0,content:!0,class:!0}),h=y(q,"META",{property:!0,content:!0,class:!0}),q.forEach(v),p=k(I),m=y(I,"DIV",{class:!0});var J=T(m);U($.$$.fragment,J),x=k(J),U(b.$$.fragment,J),w=k(J),U(S.$$.fragment,J),H=k(J),U(z.$$.fragment,J),ue=k(J),U(W.$$.fragment,J),J.forEach(v),this.h()},h(){d(n,"name","title"),d(n,"content",Ce),d(n,"class","svelte-14fuh2n"),d(r,"name","description"),d(r,"content",Je),d(r,"class","svelte-14fuh2n"),d(a,"property","og:type"),d(a,"content","website"),d(a,"class","svelte-14fuh2n"),d(o,"property","og:url"),d(o,"content",Lt),d(o,"class","svelte-14fuh2n"),d(s,"property","og:title"),d(s,"content",Ce),d(s,"class","svelte-14fuh2n"),d(l,"property","og:description"),d(l,"content",Je),d(l,"class","svelte-14fuh2n"),d(i,"property","og:image"),d(i,"content",It),d(i,"class","svelte-14fuh2n"),d(u,"property","twitter:card"),d(u,"content","summary_large_image"),d(u,"class","svelte-14fuh2n"),d(f,"property","twitter:url"),d(f,"content",Lt),d(f,"class","svelte-14fuh2n"),d(c,"property","twitter:title"),d(c,"content",Ce),d(c,"class","svelte-14fuh2n"),d(g,"property","twitter:description"),d(g,"content",Je),d(g,"class","svelte-14fuh2n"),d(h,"property","twitter:image"),d(h,"content",It),d(h,"class","svelte-14fuh2n"),d(m,"class","grid svelte-14fuh2n")},m(I,q){_(document.head,n),_(document.head,r),_(document.head,a),_(document.head,o),_(document.head,s),_(document.head,l),_(document.head,i),_(document.head,u),_(document.head,f),_(document.head,c),_(document.head,g),_(document.head,h),F(I,p,q),F(I,m,q),D($,m,null),_(m,x),D(b,m,null),_(m,w),D(S,m,null),_(m,H),D(z,m,null),_(m,ue),D(W,m,null),ve=!0},p(I,[q]){(!ve||q&0)&&e!==(e=Ce)&&(document.title=e)},i(I){ve||(E($.$$.fragment,I),E(b.$$.fragment,I),E(S.$$.fragment,I),E(z.$$.fragment,I),E(W.$$.fragment,I),ve=!0)},o(I){A($.$$.fragment,I),A(b.$$.fragment,I),A(S.$$.fragment,I),A(z.$$.fragment,I),A(W.$$.fragment,I),ve=!1},d(I){v(n),v(r),v(a),v(o),v(s),v(l),v(i),v(u),v(f),v(c),v(g),v(h),I&&v(p),I&&v(m),N($),N(b),N(S),N(z),N(W)}}}const Ce="Jumping Peter",Je="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",Lt="https://ksmai.github.io/jumping-peter",It="https://ksmai.github.io/jumping-peter/favicon.png";class ml extends B{constructor(e){super(),V(this,e,null,ul,Y,{})}}export{ml as default};
