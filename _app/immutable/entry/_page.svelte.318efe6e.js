import{S as B,i as V,n as Y,j as C,s as O,q as R,k as y,l as w,c as k,r as P,g as v,m as g,J as le,K,a as M,G as _,H as oe,L as ye,M as an,N as ee,u as Z,f as E,v as je,b as A,d as Ie,O as on,P as Je,C as sn,D as ln,E as un,F as cn,Q as fn,R as tt,y as I,z as U,A as D,B as N,I as ae,T as re,e as fe,U as Rt,V as mn,W as gn,p as dn,o as hn,X as nt,Y as pn,w as _n,Z as vn}from"../chunks/index.a9aa9141.js";import{b as ke,w as Ue,d as bn}from"../chunks/paths.91368463.js";function $n(t){let e,n,r,a,o,s,l,i,u,f,c,d,h;return{c(){e=C("header"),n=C("img"),a=O(),o=C("h1"),s=R("Jumping Peter"),l=O(),i=C("p"),u=R("generate gif emojis"),f=O(),c=C("a"),d=R("Contribute"),this.h()},l(p){e=y(p,"HEADER",{class:!0});var m=w(e);n=y(m,"IMG",{class:!0,src:!0,alt:!0}),a=k(m),o=y(m,"H1",{class:!0});var $=w(o);s=P($,"Jumping Peter"),$.forEach(v),l=k(m),i=y(m,"P",{class:!0});var x=w(i);u=P(x,"generate gif emojis"),x.forEach(v),f=k(m),c=y(m,"A",{class:!0,href:!0,target:!0,rel:!0});var b=w(c);d=P(b,"Contribute"),b.forEach(v),m.forEach(v),this.h()},h(){g(n,"class","logo svelte-bal6b7"),le(n.src,r=`${ke}/demo-jumping.gif`)||g(n,"src",r),g(n,"alt",""),g(o,"class","title svelte-bal6b7"),g(i,"class","subtitle svelte-bal6b7"),g(c,"class","contribute svelte-bal6b7"),g(c,"href","https://github.com/ksmai/jumping-peter"),g(c,"target","_blank"),g(c,"rel","noreferrer"),g(e,"class",h=K(`header ${t[0]}`)+" svelte-bal6b7")},m(p,m){M(p,e,m),_(e,n),_(e,a),_(e,o),_(o,s),_(e,l),_(e,i),_(i,u),_(e,f),_(e,c),_(c,d)},p(p,[m]){m&1&&h!==(h=K(`header ${p[0]}`)+" svelte-bal6b7")&&g(e,"class",h)},i:oe,o:oe,d(p){p&&v(e)}}}function Cn(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class yn extends B{constructor(e){super(),V(this,e,Cn,$n,Y,{class:0})}}function me(t){return{...t,type:"slider",min:-360,max:360,step:1}}function se(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function Ve(t){return{...t,type:"slider",min:0,max:1,step:.01}}function xe(t){return{...t,type:"slider",min:0,max:2,step:.01}}function Ae(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Me(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function rt(t){return{...t,type:"slider",min:-1,max:1,step:1}}function Pt(t){return{...t,type:"slider",min:1,max:100,step:1}}function xn(t){return{...t,type:"slider",min:1,max:5,step:1}}function Te(t){return{...t,type:"toggle"}}function wn(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const F={image:{url:`${ke}/favicon.png`},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function G(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ge(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function H(t,e,n){jt(t,e,n,0)}function Tn(t,e,n){const r=t[0],a=t[4],o=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*a,t[9]+=n*o,t[13]+=n*s}function jt(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function we(t,e){Ke(t,e,[0,0,1])}function Ke(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const a=n[0]/r,o=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*a*a+i,(1-i)*a*o+u*s,(1-i)*a*s-u*o,0,(1-i)*a*o-u*s,(1-i)*o*o+i,(1-i)*o*s-u*a,0,(1-i)*a*s+u*o,(1-i)*o*s-u*a,(1-i)*s*s+i,0,0,0,0,1];Ze(t,f)}function It(t,e,n,r){jt(t,-e[0],-e[1],-e[2]);const a=[-n[0],-n[1],-n[2]];at(a);const o=ot(r,a);at(o);const s=ot(a,o),l=[o[0],s[0],a[0],0,o[1],s[1],a[1],0,o[2],s[2],a[2],0,0,0,0,1];Ze(t,l)}function Ut(t,e,n,r,a,o,s){const l=[2*o/(n-e),0,0,0,0,2*o/(a-r),0,0,(n+e)/(n-e),(a+r)/(a-r),-(s+o)/(s-o),-1,0,0,-2*s*o/(s-o),0];Ze(t,l)}function Ze(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let a=0;a<=3;++a){const o=4*r+a;t[o]=0;for(let s=0;s<=3;++s)t[o]+=e[4*s+a]*n[4*r+s]}}function at(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ot(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function L(t,e,n){return t+(e-t)*n}function de(t){return t*Math.PI/180}function st(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function En(t){return e=>1-Math.pow(1-e,t)}function Dt(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const Oe=Dt(3),Sn=En(2);function it(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const On="spinning",kn={...F,output:{...F.output,delayMs:50,totalFrames:15}},An=[me({name:"startAngle",value:0}),me({name:"endAngle",value:360}),se({name:"originX",value:0}),se({name:"originY",value:0}),Te({name:"alternates",value:!1})];function Nt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{alternates:o,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:a,getUniforms:c=>{const d=o?Math.min(c,1-c)*2:c,h=L(s,l,d),p=G();return H(p,-i,-u),we(p,h),H(p,i,u),{u_model:p}}}]}const Mn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Nt,defaultOptions:kn,editOptions:An,name:On},Symbol.toStringTag,{value:"Module"})),Fn="expanding",Ln={...F,output:{...F.output,delayMs:50,totalFrames:20}},Rn=[Me({name:"minScale",value:1}),Me({name:"maxScale",value:2}),Te({name:"alternates",value:!1})];function Gt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{minScale:o,maxScale:s,alternates:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=L(o,s,f),d=G();return ge(d,c,c),{u_model:d}}}]}const Pn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Gt,defaultOptions:Ln,editOptions:Rn,name:Fn},Symbol.toStringTag,{value:"Module"})),jn="extreme-speed",In={...F,output:{...F.output,delayMs:20,totalFrames:10}},Un=[rt({name:"directionX",value:-1}),rt({name:"directionY",value:0})];function qt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("sudoku"),{directionX:o,directionY:s}=n,l=o*2,i=s*2;return[{program:r,geometry:a,getUniforms:f=>{const c=G(),d=L(0,l,f),h=L(0,i,f);return H(c,d,h),{u_model:c}}}]}const Dn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:qt,defaultOptions:In,editOptions:Un,name:jn},Symbol.toStringTag,{value:"Module"})),Nn="excited",Gn={...F,output:{...F.output,delayMs:50,totalFrames:25}},qn=[me({name:"angle",value:15}),Ae({name:"startOffset",value:-.2}),Ae({name:"endOffset",value:.2}),Pt({name:"cycles",value:3})];function Ht(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{angle:o,cycles:s,startOffset:l,endOffset:i}=n,u=de(o),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:a,getUniforms:h=>{const p=h*2*s%1,m=Math.min(p,1-p)*2,$=L(-l*c,-i*c,m),x=L(l*f,i*f,m),b=G();return we(b,o),H(b,$,x),ge(b,h>.5?-1:1,1),{u_model:b}}}]}const Hn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Ht,defaultOptions:Gn,editOptions:qn,name:Nn},Symbol.toStringTag,{value:"Module"})),Xn="jumping",zn={...F,output:{...F.output,delayMs:50,totalFrames:20}},Bn=[xe({name:"maxOffset",value:1.2}),Ve({name:"compressTime",value:.4}),Ve({name:"maxCompress",value:.3})];function Xt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffset:o,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=G(),d=f/(1-s);if(d<1){const h=(1-d*d)*o;H(c,0,h)}else{const h=(1-f)/s,m=1-(1-h*h)*l;H(c,0,1),ge(c,1/m,m),H(c,0,-1)}return{u_model:c}}}]}const Vn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Xt,defaultOptions:zn,editOptions:Bn,name:Xn},Symbol.toStringTag,{value:"Module"})),Yn="tower",Wn={...F,output:{...F.output,delayMs:40,totalFrames:20}},Jn=[me({name:"startAngle",value:20}),me({name:"endAngle",value:-45}),Ve({name:"startTime",value:.5})];function zt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("tower"),{startAngle:o,endAngle:s,startTime:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=G();if(u<l){const c=u/l,d=Math.min(c,1-c)*2,h=L(0,o,d);we(f,h)}else{const c=(u-l)/(1-l),d=Math.min(c,1-c)*2,h=L(0,s,d);if(we(f,h),c>.5){const p=de(h),m=Math.cos(p),$=Math.sin(p),x=(c-.5)*2,b=L(0,-2*$,x),T=L(0,2*m,x);H(f,b,T)}}return{u_model:f}}}]}const Kn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:zt,defaultOptions:Wn,editOptions:Jn,name:Yn},Symbol.toStringTag,{value:"Module"})),Zn="repeated",Qn={...F,output:{...F.output,delayMs:60,totalFrames:15}},er=[Me({name:"initialScale",value:.1}),Te({name:"horizontal",value:!1})];function Bt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{initialScale:o,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=d=>{const h=G(),p=Oe(d),m=L(o,1,p);return ge(h,m,m),{u_model:h}},f=d=>{const h=G(),p=Oe(d),m=L(0,l.endX,p),$=L(0,l.endY,p);return H(h,m,$),{u_model:h}},c=d=>{const h=G(),p=Oe(d),m=L(0,i.endX,p),$=L(0,i.endY,p);return H(h,m,$),{u_model:h}};return[{program:r,geometry:a,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const tr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Bt,defaultOptions:Qn,editOptions:er,name:Zn},Symbol.toStringTag,{value:"Module"})),nr="mirror",rr={...F,output:{...F.output,delayMs:50,totalFrames:16}},ar=[Te({name:"rightHalf",value:!1})];function Vt(t,e,n){const r=t.createProgram("default"),{rightHalf:a}=n,o=e.createGeometry(a?"rightHalf":"leftHalf");return[{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=G(),c=it(u),d=L(-2,-1,c);return a||ge(f,-1,1),H(f,d,0),{u_model:f}}},{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=G(),c=it(u),d=L(2,1,c);return a&&ge(f,-1,1),H(f,d,0),{u_model:f}}}]}const or=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:rr,editOptions:ar,name:nr},Symbol.toStringTag,{value:"Module"})),sr="panic",ir={...F,output:{...F.output,delayMs:30,totalFrames:16}},lr=[xe({name:"maxOffsetX",value:.15}),xe({name:"maxOffsetY",value:.15})];function Yt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffsetX:o,maxOffsetY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=st(i+.123),f=st(i*2+1),c=L(-o,o,u),d=L(-s,s,f),h=G();return H(h,c,d),{u_model:h}}}]}const ur=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:ir,editOptions:lr,name:sr},Symbol.toStringTag,{value:"Module"})),cr="rotating",fr={...F,output:{...F.output,delayMs:40,totalFrames:25}},mr=[se({name:"axisX",value:0}),se({name:"axisY",value:1}),se({name:"axisZ",value:0}),se({name:"originX",value:0}),se({name:"originY",value:0}),xn({name:"easing",value:1}),Te({name:"alternates",value:!1})];function Wt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{axisX:o,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,d=[o,s,l],h=Dt(f);return[{program:r,geometry:a,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,x=h($),b=L(0,360,x),T=G();H(T,-i,-u),Ke(T,b,d),H(T,i,u);const S=G();It(S,[0,0,3],[0,0,-1],[0,1,0]);const X=G();return Ut(X,-.03,.03,-.03,.03,.1,6),{u_model:T,u_view:S,u_projection:X,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(de(5)),"u_spotLight.outerCos":Math.cos(de(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const gr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:fr,editOptions:mr,name:cr},Symbol.toStringTag,{value:"Module"})),dr="party",hr={...F,output:{...F.output,delayMs:40,totalFrames:15}},pr=[me({name:"angle",value:10}),Ae({name:"startOffset",value:-.3}),Ae({name:"endOffset",value:.5})];function Jt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{angle:o,startOffset:s,endOffset:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,d=Oe(f),h=Sn(c),p=u<.5?L(0,180,d):L(180,360,d),m=L(s,l,h),$=G();we($,o),H($,0,m),Ke($,p,[0,1,0]);const x=G();It(x,[0,0,3],[0,0,-1],[0,1,0]);const b=G();return Ut(b,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:x,u_projection:b,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(de(5)),"u_spotLight.outerCos":Math.cos(de(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const _r=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:hr,editOptions:pr,name:dr},Symbol.toStringTag,{value:"Module"})),vr="parrot",br={...F,output:{...F.output,delayMs:20,totalFrames:18}},$r=[Me({name:"amplitudeX",value:.6}),xe({name:"amplitudeY",value:.5})];function Kt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{amplitudeX:o,amplitudeY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=L(-o,o,u),c=Math.sin(i*2*Math.PI)*.5+.5,d=L(-s,0,c),h=G();return H(h,0,1),Tn(h,f,0),H(h,0,-1+d),{u_model:h}}}]}const Cr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:br,editOptions:$r,name:vr},Symbol.toStringTag,{value:"Module"})),yr="wiggling",xr={...F,output:{...F.output,delayMs:50,totalFrames:15}},wr=[Pt({name:"frequency",value:3}),xe({name:"amplitude",value:.05})];function Zt(t,e,n){const r=t.createProgram("wiggling"),a=e.createGeometry("full"),{frequency:o,amplitude:s}=n;return[{program:r,geometry:a,getUniforms:i=>({u_model:G(),u_time:i,u_amplitude:s,u_frequency:o})}]}const Tr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:xr,editOptions:wr,name:yr},Symbol.toStringTag,{value:"Module"})),He=[Vn,Dn,Mn,Hn,Pn,Kn,tr,or,ur,gr,_r,Cr,Tr];function lt(t,e,n){const r=wn(n.editOptions);switch(n.name){case"spinning":return Nt(t,e,r);case"expanding":return Gt(t,e,r);case"extreme-speed":return qt(t,e,r);case"excited":return Ht(t,e,r);case"jumping":return Xt(t,e,r);case"tower":return zt(t,e,r);case"repeated":return Bt(t,e,r);case"mirror":return Vt(t,e,r);case"panic":return Yt(t,e,r);case"rotating":return Wt(t,e,r);case"party":return Jt(t,e,r);case"parrot":return Kt(t,e,r);case"wiggling":return Zt(t,e,r);default:(a=>{throw new Error(`Unknown animation: ${JSON.stringify(a)}`)})(n)}}var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Er=typeof Ee=="object"&&Ee&&Ee.Object===Object&&Ee,Sr=Er,Or=Sr,kr=typeof self=="object"&&self&&self.Object===Object&&self,Ar=Or||kr||Function("return this")(),De=Ar,Mr=De,Fr=Mr.Symbol,Qt=Fr,ut=Qt,en=Object.prototype,Lr=en.hasOwnProperty,Rr=en.toString,be=ut?ut.toStringTag:void 0;function Pr(t){var e=Lr.call(t,be),n=t[be];try{t[be]=void 0;var r=!0}catch{}var a=Rr.call(t);return r&&(e?t[be]=n:delete t[be]),a}var jr=Pr,Ir=Object.prototype,Ur=Ir.toString;function Dr(t){return Ur.call(t)}var Nr=Dr,ct=Qt,Gr=jr,qr=Nr,Hr="[object Null]",Xr="[object Undefined]",ft=ct?ct.toStringTag:void 0;function zr(t){return t==null?t===void 0?Xr:Hr:ft&&ft in Object(t)?Gr(t):qr(t)}var Br=zr;function Vr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var tn=Vr,Yr=Br,Wr=tn,Jr="[object AsyncFunction]",Kr="[object Function]",Zr="[object GeneratorFunction]",Qr="[object Proxy]";function ea(t){if(!Wr(t))return!1;var e=Yr(t);return e==Kr||e==Zr||e==Jr||e==Qr}var ta=ea,na=De,ra=na["__core-js_shared__"],aa=ra,Xe=aa,mt=function(){var t=/[^.]+$/.exec(Xe&&Xe.keys&&Xe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function oa(t){return!!mt&&mt in t}var sa=oa,ia=Function.prototype,la=ia.toString;function ua(t){if(t!=null){try{return la.call(t)}catch{}try{return t+""}catch{}}return""}var ca=ua,fa=ta,ma=sa,ga=tn,da=ca,ha=/[\\^$.*+?()[\]{}|]/g,pa=/^\[object .+?Constructor\]$/,_a=Function.prototype,va=Object.prototype,ba=_a.toString,$a=va.hasOwnProperty,Ca=RegExp("^"+ba.call($a).replace(ha,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ya(t){if(!ga(t)||ma(t))return!1;var e=fa(t)?Ca:pa;return e.test(da(t))}var xa=ya;function wa(t,e){return t?.[e]}var Ta=wa,Ea=xa,Sa=Ta;function Oa(t,e){var n=Sa(t,e);return Ea(n)?n:void 0}var Qe=Oa,ka=Qe,Aa=ka(Object,"create"),Ne=Aa,gt=Ne;function Ma(){this.__data__=gt?gt(null):{},this.size=0}var Fa=Ma;function La(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Ra=La,Pa=Ne,ja="__lodash_hash_undefined__",Ia=Object.prototype,Ua=Ia.hasOwnProperty;function Da(t){var e=this.__data__;if(Pa){var n=e[t];return n===ja?void 0:n}return Ua.call(e,t)?e[t]:void 0}var Na=Da,Ga=Ne,qa=Object.prototype,Ha=qa.hasOwnProperty;function Xa(t){var e=this.__data__;return Ga?e[t]!==void 0:Ha.call(e,t)}var za=Xa,Ba=Ne,Va="__lodash_hash_undefined__";function Ya(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ba&&e===void 0?Va:e,this}var Wa=Ya,Ja=Fa,Ka=Ra,Za=Na,Qa=za,eo=Wa;function he(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}he.prototype.clear=Ja;he.prototype.delete=Ka;he.prototype.get=Za;he.prototype.has=Qa;he.prototype.set=eo;var to=he;function no(){this.__data__=[],this.size=0}var ro=no;function ao(t,e){return t===e||t!==t&&e!==e}var oo=ao,so=oo;function io(t,e){for(var n=t.length;n--;)if(so(t[n][0],e))return n;return-1}var Ge=io,lo=Ge,uo=Array.prototype,co=uo.splice;function fo(t){var e=this.__data__,n=lo(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():co.call(e,n,1),--this.size,!0}var mo=fo,go=Ge;function ho(t){var e=this.__data__,n=go(e,t);return n<0?void 0:e[n][1]}var po=ho,_o=Ge;function vo(t){return _o(this.__data__,t)>-1}var bo=vo,$o=Ge;function Co(t,e){var n=this.__data__,r=$o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var yo=Co,xo=ro,wo=mo,To=po,Eo=bo,So=yo;function pe(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pe.prototype.clear=xo;pe.prototype.delete=wo;pe.prototype.get=To;pe.prototype.has=Eo;pe.prototype.set=So;var Oo=pe,ko=Qe,Ao=De,Mo=ko(Ao,"Map"),Fo=Mo,dt=to,Lo=Oo,Ro=Fo;function Po(){this.size=0,this.__data__={hash:new dt,map:new(Ro||Lo),string:new dt}}var jo=Po;function Io(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Uo=Io,Do=Uo;function No(t,e){var n=t.__data__;return Do(e)?n[typeof e=="string"?"string":"hash"]:n.map}var qe=No,Go=qe;function qo(t){var e=Go(this,t).delete(t);return this.size-=e?1:0,e}var Ho=qo,Xo=qe;function zo(t){return Xo(this,t).get(t)}var Bo=zo,Vo=qe;function Yo(t){return Vo(this,t).has(t)}var Wo=Yo,Jo=qe;function Ko(t,e){var n=Jo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Zo=Ko,Qo=jo,es=Ho,ts=Bo,ns=Wo,rs=Zo;function _e(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_e.prototype.clear=Qo;_e.prototype.delete=es;_e.prototype.get=ts;_e.prototype.has=ns;_e.prototype.set=rs;var as=_e,os="__lodash_hash_undefined__";function ss(t){return this.__data__.set(t,os),this}var is=ss;function ls(t){return this.__data__.has(t)}var us=ls,cs=as,fs=is,ms=us;function Fe(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new cs;++e<n;)this.add(t[e])}Fe.prototype.add=Fe.prototype.push=fs;Fe.prototype.has=ms;var gs=Fe;function ds(t,e,n,r){for(var a=t.length,o=n+(r?1:-1);r?o--:++o<a;)if(e(t[o],o,t))return o;return-1}var hs=ds;function ps(t){return t!==t}var _s=ps;function vs(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}var bs=vs,$s=hs,Cs=_s,ys=bs;function xs(t,e,n){return e===e?ys(t,e,n):$s(t,Cs,n)}var ws=xs,Ts=ws;function Es(t,e){var n=t==null?0:t.length;return!!n&&Ts(t,e,0)>-1}var Ss=Es;function Os(t,e,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(e,t[r]))return!0;return!1}var ks=Os;function As(t,e){return t.has(e)}var Ms=As,Fs=Qe,Ls=De,Rs=Fs(Ls,"Set"),Ps=Rs;function js(){}var Is=js;function Us(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var nn=Us,ze=Ps,Ds=Is,Ns=nn,Gs=1/0,qs=ze&&1/Ns(new ze([,-0]))[1]==Gs?function(t){return new ze(t)}:Ds,Hs=qs,Xs=gs,zs=Ss,Bs=ks,Vs=Ms,Ys=Hs,Ws=nn,Js=200;function Ks(t,e,n){var r=-1,a=zs,o=t.length,s=!0,l=[],i=l;if(n)s=!1,a=Bs;else if(o>=Js){var u=e?null:Ys(t);if(u)return Ws(u);s=!1,a=Vs,i=new Xs}else i=e?[]:l;e:for(;++r<o;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var d=i.length;d--;)if(i[d]===c)continue e;e&&i.push(c),l.push(f)}else a(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var Zs=Ks,Qs=Zs;function ei(t){return t&&t.length?Qs(t):[]}var ti=ei;class ni{constructor(e){this.gl=e}loadingUrl=null;url=null;texture=null;unit=0;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),a=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:o}=this;this.texture&&o.deleteTexture(this.texture);const s=o.createTexture();if(!s)throw new Error("Failed to create texture");o.activeTexture(o.TEXTURE0+this.unit),o.bindTexture(o.TEXTURE_2D,s),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class ht{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const ne=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,pt=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,ri=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    vec3 texel = texture(u_image, v_texCoords).rgb;
    outColor = vec4(texel, 1.0);
}
`,ai=`#version 300 es

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
`,oi=`#version 300 es
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
`,si=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = vec4(1.0 - texture(u_image, v_texCoords).rgb, 1.0);
}
`,ii=`#version 300 es
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
`,li=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  outColor = vec4(u_weights * texture(u_image, v_texCoords).rgb, 1.0);
}
`,ui=`#version 300 es
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
`,ci=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = vec4(texture(u_image, v_texCoords).rgb, 1.0);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,fi=`#version 300 es
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
`,mi=`#version 300 es
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
`,gi=`#version 300 es
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
`,di=`#version 300 es
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
`,_t={default:{vertex:pt,fragment:ri},default3d:{vertex:ai,fragment:oi},wiggling:{vertex:pt,fragment:ii},invert:{vertex:ne,fragment:si},kernel:{vertex:ne,fragment:fi},gradient2:{vertex:ne,fragment:mi},gradient8:{vertex:ne,fragment:gi},contrast:{vertex:ne,fragment:ci},bloom:{vertex:ne,fragment:di},mix:{vertex:ne,fragment:li},vignette:{vertex:ne,fragment:ui}};class hi{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:pi(this.gl,_t[e].vertex,_t[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Ye(t,e,n){for(const[r,a]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const o=e.uniformLocations[r];["u_image"].includes(r)&&typeof a=="number"?t.uniform1i(o,a):Array.isArray(a)?a.length===2?t.uniform2fv(o,a):a.length===3?t.uniform3fv(o,a):a.length===4?t.uniform4fv(o,a):a.length===9?t.uniformMatrix3fv(o,!1,a):a.length===16&&t.uniformMatrix4fv(o,!1,a):typeof a=="number"?t.uniform1f(o,a):typeof a=="boolean"&&t.uniform1i(o,a?1:0)}}function pi(t,e,n){const r=vt(t,t.VERTEX_SHADER,e);let a;try{a=vt(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const o=t.createProgram();if(o===null)throw t.deleteShader(a),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(o,r),t.attachShader(o,a),t.linkProgram(o),t.detachShader(o,a),t.detachShader(o,r),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(o,t.LINK_STATUS)){const s=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`Failed to link program: ${s}`)}return o}function vt(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${a}`)}return r}function _i(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let a,o;for(const s of n){a!==s.program&&(t.useProgram(s.program.program),a=s.program),o!==s.geometry&&(t.bindVertexArray(s.geometry.vao),o=s.geometry);const l=s.getUniforms(e);Ye(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Ye(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const ce={a_position:0,a_texCoords:1,a_normal:2};function vi(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(ce.a_position),t.vertexAttribPointer(ce.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(ce.a_texCoords),t.vertexAttribPointer(ce.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(ce.a_normal),t.vertexAttribPointer(ce.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const bi={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class $i{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=vi(this.gl,bi[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const Ci=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],bt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_kernel:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"kernel",uniforms:{u_kernel:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function $t(t,e){return e.map(n=>({program:t.createProgram(bt[n].program),uniforms:bt[n].uniforms}))}class yi{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new hi(this.gl),this.geometryFactory=new $i(this.gl),this.texture=new ni(this.gl),this.renderTextures=[new ht(this.gl,1),new ht(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,a)=>{const o=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:a,frame:0,sprites:lt(this.programFactory,this.geometryFactory,e.animation),effects:$t(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:o,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;o.onmessage=c=>{const d=c.data;let h;switch(d.type){case"Ready":s.workerReady=!0,h={type:"Init",width:l,height:i,delayMs:u,quality:f},o.postMessage(h);break;case"FrameAdded":n();break;case"Success":this.resolve(d.dataUri);break;case"Failure":this.reject(d.error);break;default:(p=>{this.reject(`Cannot handle worker message: ${JSON.stringify(d)}`)})()}},o.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,a)=>{const o={type:"frame",request:e,resolve:r,reject:a,frame:n,sprites:lt(this.programFactory,this.geometryFactory,e.animation),effects:$t(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(o)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:a,sprites:o,effects:s,frame:l}=e,{image:i,output:u}=r;if(!(l>=u.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await this.texture.loadImage(i.url),e!==this.current)return;const{width:f,height:c}=u;this.renderTextures.forEach(d=>d.setSize(f,c)),this.canvas.width=f,this.canvas.height=c,this.gl.viewport(0,0,f,c),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture);for(const d of ti(o.map(h=>h.program)))this.gl.useProgram(d.program),Ye(this.gl,d,{u_image:this.texture.unit})}if(_i(this.gl,l/r.output.totalFrames,o,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")a();else{const f=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,f);const{worker:c}=e,d={type:"AddFrame",buffer:f.buffer};if(c.postMessage(d,[f.buffer]),l===u.totalFrames-1){const h={type:"GetResult"};c.postMessage(h)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const te=function(){const{subscribe:t,update:e}=Ue({animations:He,current:He[0]}),n=o=>{e(s=>s.current===o||!s.animations.find(i=>i===o)?s:{animations:s.animations,current:o})};function r(o,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===o?{...o,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function a(){e(({animations:o,current:s})=>{const l=He.find(i=>i.name===s.name);return{animations:o.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:a}}(),Le=function(){const{subscribe:t,update:e}=Ue(Ci.map(a=>({type:a,enabled:!1})));function n(a,o){e(s=>s.map(l=>l.type===a?{type:a,enabled:o}:l))}function r(){e(a=>a.map(o=>({...o,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function rn(t){let e=!0;const{subscribe:n,update:r}=Ue(void 0,s=>te.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function a(s){r(l=>(e=!1,{...l,...s}))}function o(){r(()=>(e=!0,ye(te).current.defaultOptions[t]))}return{subscribe:n,change:a,reset:o}}const Re=rn("image"),Q=rn("output"),We=bn([Re,Q,te,Le],([t,e,n,r])=>({image:t,output:e,animation:n.current,effects:r})),$e=function(){const t=Ue({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new yi(s),running:!1,frame:0}))}function a(){const{animator:s}=ye(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(ye(We),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function o(s){const{animator:l,frame:i}=ye(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=ye(We);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:a,renderFrame:o}}();function Ct(t,{delay:e=0,duration:n=400,easing:r=an}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*a}`}}function yt(t){let e,n,r;const a=t[5].default,o=sn(a,t,t[4],null);return{c(){e=C("div"),o&&o.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var l=w(e);o&&o.l(l),l.forEach(v),this.h()},h(){g(e,"class","section__content svelte-v2pn2e")},m(s,l){M(s,e,l),o&&o.m(e,null),r=!0},p(s,l){o&&o.p&&(!r||l&16)&&ln(o,a,s,s[4],r?cn(a,s[4],l,null):un(s[4]),null)},i(s){r||(E(o,s),fn(()=>{n||(n=tt(e,Ct,{duration:250},!0)),n.run(1)}),r=!0)},o(s){A(o,s),n||(n=tt(e,Ct,{duration:250},!1)),n.run(0),r=!1},d(s){s&&v(e),o&&o.d(s),s&&n&&n.end()}}}function xi(t){let e,n,r,a,o=t[0]?"-":"+",s,l,i,u,f,c,d,h,p,m,$,x,b=t[0]&&yt(t);return{c(){e=C("section"),n=C("header"),r=C("button"),a=R("["),s=R(o),l=R("]"),i=O(),u=C("h2"),f=R(t[1]),c=O(),d=C("button"),h=R("Reset"),p=O(),b&&b.c(),this.h()},l(T){e=y(T,"SECTION",{class:!0});var S=w(e);n=y(S,"HEADER",{class:!0});var X=w(n);r=y(X,"BUTTON",{class:!0,type:!0});var z=w(r);a=P(z,"["),s=P(z,o),l=P(z,"]"),z.forEach(v),i=k(X),u=y(X,"H2",{class:!0});var ue=w(u);f=P(ue,t[1]),ue.forEach(v),c=k(X),d=y(X,"BUTTON",{class:!0,type:!0});var W=w(d);h=P(W,"Reset"),W.forEach(v),X.forEach(v),p=k(S),b&&b.l(S),S.forEach(v),this.h()},h(){g(r,"class","section__expand svelte-v2pn2e"),g(r,"type","button"),g(u,"class","section__heading svelte-v2pn2e"),g(d,"class","section__reset svelte-v2pn2e"),g(d,"type","button"),g(n,"class","section__header svelte-v2pn2e"),g(e,"class","section svelte-v2pn2e")},m(T,S){M(T,e,S),_(e,n),_(n,r),_(r,a),_(r,s),_(r,l),_(n,i),_(n,u),_(u,f),_(n,c),_(n,d),_(d,h),_(e,p),b&&b.m(e,null),m=!0,$||(x=[ee(r,"click",t[3]),ee(u,"click",t[3]),ee(u,"keypress",t[3]),ee(d,"click",t[6])],$=!0)},p(T,[S]){(!m||S&1)&&o!==(o=T[0]?"-":"+")&&Z(s,o),(!m||S&2)&&Z(f,T[1]),T[0]?b?(b.p(T,S),S&1&&E(b,1)):(b=yt(T),b.c(),E(b,1),b.m(e,null)):b&&(je(),A(b,1,1,()=>{b=null}),Ie())},i(T){m||(E(b),m=!0)},o(T){A(b),m=!1},d(T){T&&v(e),b&&b.d(),$=!1,on(x)}}}function wi(t,e,n){let{$$slots:r={},$$scope:a}=e,{title:o=""}=e,{expanded:s=!0}=e;const l=Je();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,o=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,a=f.$$scope)},[s,o,l,i,a,r,u]}class Pe extends B{constructor(e){super(),V(this,e,wi,xi,Y,{title:1,expanded:0})}}function Ti(t){let e,n,r,a,o,s,l,i;return{c(){e=C("label"),n=C("input"),r=O(),a=C("div"),o=C("img"),this.h()},l(u){e=y(u,"LABEL",{class:!0});var f=w(e);n=y(f,"INPUT",{class:!0,type:!0,accept:!0}),r=k(f),a=y(f,"DIV",{class:!0});var c=w(a);o=y(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(v),f.forEach(v),this.h()},h(){g(n,"class","image__input svelte-1me35do"),g(n,"type","file"),g(n,"accept","image/*"),g(o,"class","image__preview svelte-1me35do"),le(o.src,s=t[0].url)||g(o,"src",s),g(o,"alt","source"),g(a,"class","image__container svelte-1me35do"),g(e,"class","image svelte-1me35do")},m(u,f){M(u,e,f),_(e,n),_(e,r),_(e,a),_(a,o),l||(i=ee(n,"input",t[1]),l=!0)},p(u,f){f&1&&!le(o.src,s=u[0].url)&&g(o,"src",s)},d(u){u&&v(e),l=!1,i()}}}function Ei(t){let e,n;return e=new Pe({props:{title:"Image",expanded:!0,$$slots:{default:[Ti]},$$scope:{ctx:t}}}),e.$on("reset",Re.reset),{c(){I(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){D(e,r,a),n=!0},p(r,[a]){const o={};a&5&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Si(t,e,n){let r;ae(t,Re,o=>n(0,r=o));function a(o){const l=o.target.files?.[0];l&&Re.change({url:URL.createObjectURL(l)})}return[r,a]}class Oi extends B{constructor(e){super(),V(this,e,Si,Ei,Y,{})}}function xt(t){let e,n,r,a,o,s;return{c(){e=C("label"),n=R(t[1]),r=O(),a=C("input"),this.h()},l(l){e=y(l,"LABEL",{class:!0});var i=w(e);n=P(i,t[1]),r=k(i),a=y(i,"INPUT",{class:!0,type:!0}),i.forEach(v),this.h()},h(){g(a,"class","slider__text-input svelte-1h0gcvd"),g(a,"type","text"),a.value=t[0],g(e,"class","slider__label svelte-1h0gcvd")},m(l,i){M(l,e,i),_(e,n),_(e,r),_(e,a),o||(s=ee(a,"input",t[5]),o=!0)},p(l,i){i&2&&Z(n,l[1]),i&1&&a.value!==l[0]&&(a.value=l[0])},d(l){l&&v(e),o=!1,s()}}}function ki(t){let e,n,r,a,o=Se(t[2])+"",s,l,i,u,f,c,d=Se(t[3])+"",h,p,m,$=t[1]&&xt(t);return{c(){e=C("div"),$&&$.c(),n=O(),r=C("div"),a=C("span"),s=R(o),l=O(),i=C("div"),u=C("input"),f=O(),c=C("span"),h=R(d),this.h()},l(x){e=y(x,"DIV",{class:!0});var b=w(e);$&&$.l(b),n=k(b),r=y(b,"DIV",{class:!0});var T=w(r);a=y(T,"SPAN",{class:!0});var S=w(a);s=P(S,o),S.forEach(v),l=k(T),i=y(T,"DIV",{class:!0});var X=w(i);u=y(X,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),X.forEach(v),f=k(T),c=y(T,"SPAN",{class:!0});var z=w(c);h=P(z,d),z.forEach(v),T.forEach(v),b.forEach(v),this.h()},h(){g(a,"class","slider__range slider__range--min svelte-1h0gcvd"),g(u,"class","slider__input svelte-1h0gcvd"),g(u,"type","range"),g(u,"min",t[2]),g(u,"max",t[3]),g(u,"step",t[4]),u.value=t[0],g(i,"class","slider__input-container svelte-1h0gcvd"),g(c,"class","slider__range slider__range--max"),g(r,"class","slider__container svelte-1h0gcvd"),g(e,"class","slider")},m(x,b){M(x,e,b),$&&$.m(e,null),_(e,n),_(e,r),_(r,a),_(a,s),_(r,l),_(r,i),_(i,u),_(r,f),_(r,c),_(c,h),p||(m=ee(u,"input",t[5]),p=!0)},p(x,[b]){x[1]?$?$.p(x,b):($=xt(x),$.c(),$.m(e,n)):$&&($.d(1),$=null),b&4&&o!==(o=Se(x[2])+"")&&Z(s,o),b&4&&g(u,"min",x[2]),b&8&&g(u,"max",x[3]),b&16&&g(u,"step",x[4]),b&1&&(u.value=x[0]),b&8&&d!==(d=Se(x[3])+"")&&Z(h,d)},i:oe,o:oe,d(x){x&&v(e),$&&$.d(),p=!1,m()}}}function Se(t){return t.toFixed(2).replace(/\.?0+$/,"")}function Ai(t,e,n){const r=Je();let{label:a=""}=e,{min:o=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<o?o:(s-o)/2}=e;function u(f){const c=f.target,d=parseFloat(c.value);Number.isNaN(d)||(n(0,i=d),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,a=f.label),"min"in f&&n(2,o=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,a,o,s,l,u]}class ie extends B{constructor(e){super(),V(this,e,Ai,ki,Y,{label:1,min:2,max:3,step:4,value:0})}}function Mi(t){let e,n,r,a,o,s,l,i,u,f;return e=new ie({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new ie({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),o=new ie({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),o.$on("input",t[3]),l=new ie({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new ie({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){I(e.$$.fragment),n=O(),I(r.$$.fragment),a=O(),I(o.$$.fragment),s=O(),I(l.$$.fragment),i=O(),I(u.$$.fragment)},l(c){U(e.$$.fragment,c),n=k(c),U(r.$$.fragment,c),a=k(c),U(o.$$.fragment,c),s=k(c),U(l.$$.fragment,c),i=k(c),U(u.$$.fragment,c)},m(c,d){D(e,c,d),M(c,n,d),D(r,c,d),M(c,a,d),D(o,c,d),M(c,s,d),D(l,c,d),M(c,i,d),D(u,c,d),f=!0},p(c,d){const h={};d&1&&(h.value=c[0].width),e.$set(h);const p={};d&1&&(p.value=c[0].height),r.$set(p);const m={};d&1&&(m.value=c[0].delayMs),o.$set(m);const $={};d&1&&($.value=c[0].totalFrames),l.$set($);const x={};d&1&&(x.value=c[0].quality),u.$set(x)},i(c){f||(E(e.$$.fragment,c),E(r.$$.fragment,c),E(o.$$.fragment,c),E(l.$$.fragment,c),E(u.$$.fragment,c),f=!0)},o(c){A(e.$$.fragment,c),A(r.$$.fragment,c),A(o.$$.fragment,c),A(l.$$.fragment,c),A(u.$$.fragment,c),f=!1},d(c){N(e,c),c&&v(n),N(r,c),c&&v(a),N(o,c),c&&v(s),N(l,c),c&&v(i),N(u,c)}}}function Fi(t){let e,n;return e=new Pe({props:{title:"Output",expanded:!0,$$slots:{default:[Mi]},$$scope:{ctx:t}}}),e.$on("reset",Q.reset),{c(){I(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){D(e,r,a),n=!0},p(r,[a]){const o={};a&65&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Li(t,e,n){let r;return ae(t,Q,u=>n(0,r=u)),[r,u=>Q.change({width:u.detail.value}),u=>Q.change({height:u.detail.value}),u=>Q.change({delayMs:u.detail.value}),u=>Q.change({totalFrames:u.detail.value}),u=>Q.change({quality:u.detail.value})]}class Ri extends B{constructor(e){super(),V(this,e,Li,Fi,Y,{})}}function Pi(t){let e,n,r,a,o,s;return n=new Oi({}),a=new Ri({}),{c(){e=C("aside"),I(n.$$.fragment),r=O(),I(a.$$.fragment),this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=w(e);U(n.$$.fragment,i),r=k(i),U(a.$$.fragment,i),i.forEach(v),this.h()},h(){g(e,"class",o=K(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){M(l,e,i),D(n,e,null),_(e,r),D(a,e,null),s=!0},p(l,[i]){(!s||i&1&&o!==(o=K(`container ${l[0]}`)+" svelte-7v3svs"))&&g(e,"class",o)},i(l){s||(E(n.$$.fragment,l),E(a.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(a.$$.fragment,l),s=!1},d(l){l&&v(e),N(n),N(a)}}}function ji(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class Ii extends B{constructor(e){super(),V(this,e,ji,Pi,Y,{class:0})}}function Ui(t){let e,n,r,a,o,s,l;return{c(){e=C("div"),n=R(t[1]),r=O(),a=C("label"),o=C("input"),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=w(e);n=P(u,t[1]),r=k(u),a=y(u,"LABEL",{class:!0});var f=w(a);o=y(f,"INPUT",{class:!0,type:!0}),f.forEach(v),u.forEach(v),this.h()},h(){g(o,"class","toggle__checkbox svelte-1j9rfin"),g(o,"type","checkbox"),o.checked=t[0],g(a,"class","toggle__label svelte-1j9rfin"),re(a,"toggle__label--active",t[0]),g(e,"class","toggle svelte-1j9rfin")},m(i,u){M(i,e,u),_(e,n),_(e,r),_(e,a),_(a,o),s||(l=ee(o,"change",t[2]),s=!0)},p(i,[u]){u&2&&Z(n,i[1]),u&1&&(o.checked=i[0]),u&1&&re(a,"toggle__label--active",i[0])},i:oe,o:oe,d(i){i&&v(e),s=!1,l()}}}function Di(t,e,n){const r=Je();let{label:a=""}=e,{value:o=!1}=e;function s(l){const i=l.target;n(0,o=Boolean(i.checked)),r("change",{value:o})}return t.$$set=l=>{"label"in l&&n(1,a=l.label),"value"in l&&n(0,o=l.value)},[o,a,s]}class et extends B{constructor(e){super(),V(this,e,Di,Ui,Y,{label:1,value:0})}}function wt(t,e,n){const r=t.slice();return r[6]=e[n],r}function Tt(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ni(t){let e,n;function r(...a){return t[4](t[9],...a)}return e=new et({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){I(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function Gi(t){let e,n;function r(...a){return t[3](t[9],...a)}return e=new ie({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){I(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.min=t[9].min),o&2&&(s.max=t[9].max),o&2&&(s.step=t[9].step),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function Et(t){let e,n,r,a;const o=[Gi,Ni],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=o[e](t)),{c(){n&&n.c(),r=fe()},l(i){n&&n.l(i),r=fe()},m(i,u){~e&&s[e].m(i,u),M(i,r,u),a=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(je(),A(s[f],1,1,()=>{s[f]=null}),Ie()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=o[e](i),n.c()),E(n,1),n.m(r.parentNode,r)):n=null)},i(i){a||(E(n),a=!0)},o(i){A(n),a=!1},d(i){~e&&s[e].d(i),i&&v(r)}}}function qi(t){let e,n,r=t[1].current.editOptions,a=[];for(let s=0;s<r.length;s+=1)a[s]=Et(Tt(t,r,s));const o=s=>A(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=fe()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=fe()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);M(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=Tt(s,r,i);a[i]?(a[i].p(u,l),E(a[i],1)):(a[i]=Et(u),a[i].c(),E(a[i],1),a[i].m(e.parentNode,e))}for(je(),i=r.length;i<a.length;i+=1)o(i);Ie()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)A(a[l]);n=!1},d(s){Rt(a,s),s&&v(e)}}}function St(t){let e,n;function r(...a){return t[5](t[6],...a)}return e=new et({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){I(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){D(e,a,o),n=!0},p(a,o){t=a;const s={};o&4&&(s.label=t[6].type),o&4&&(s.value=t[6].enabled),e.$set(s)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){N(e,a)}}}function Hi(t){let e,n,r=t[2],a=[];for(let s=0;s<r.length;s+=1)a[s]=St(wt(t,r,s));const o=s=>A(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=fe()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=fe()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);M(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=wt(s,r,i);a[i]?(a[i].p(u,l),E(a[i],1)):(a[i]=St(u),a[i].c(),E(a[i],1),a[i].m(e.parentNode,e))}for(je(),i=r.length;i<a.length;i+=1)o(i);Ie()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)A(a[l]);n=!1},d(s){Rt(a,s),s&&v(e)}}}function Xi(t){let e,n,r,a,o,s;return n=new Pe({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[qi]},$$scope:{ctx:t}}}),n.$on("reset",te.resetEditOptions),a=new Pe({props:{title:"Effects",expanded:!0,$$slots:{default:[Hi]},$$scope:{ctx:t}}}),a.$on("reset",Le.reset),{c(){e=C("aside"),I(n.$$.fragment),r=O(),I(a.$$.fragment),this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=w(e);U(n.$$.fragment,i),r=k(i),U(a.$$.fragment,i),i.forEach(v),this.h()},h(){g(e,"class",o=K(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){M(l,e,i),D(n,e,null),_(e,r),D(a,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),a.$set(f),(!s||i&1&&o!==(o=K(`container ${l[0]}`)+" svelte-7v3svs"))&&g(e,"class",o)},i(l){s||(E(n.$$.fragment,l),E(a.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(a.$$.fragment,l),s=!1},d(l){l&&v(e),N(n),N(a)}}}function zi(t,e,n){let r,a;ae(t,te,u=>n(1,r=u)),ae(t,Le,u=>n(2,a=u));let{class:o=""}=e;const s=(u,f)=>te.changeEditOptions(u,f.detail.value),l=(u,f)=>te.changeEditOptions(u,f.detail.value),i=(u,f)=>Le.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,o=u.class)},[o,r,a,s,l,i]}class Bi extends B{constructor(e){super(),V(this,e,zi,Xi,Y,{class:0})}}function Ot(t,e,n){const r=t.slice();return r[3]=e[n],r}function kt(t,e){let n,r,a,o,s,l,i=e[3].name+"",u,f,c,d;function h(){return e[2](e[3])}return{key:t,first:null,c(){n=C("button"),r=C("img"),s=O(),l=C("span"),u=R(i),f=O(),this.h()},l(p){n=y(p,"BUTTON",{type:!0,class:!0});var m=w(n);r=y(m,"IMG",{class:!0,src:!0,alt:!0}),s=k(m),l=y(m,"SPAN",{});var $=w(l);u=P($,i),$.forEach(v),f=k(m),m.forEach(v),this.h()},h(){g(r,"class","image svelte-1l1v01j"),le(r.src,a=`${ke}/demo-${e[3].name}.gif`)||g(r,"src",a),g(r,"alt",o=e[3].name),g(n,"type","button"),g(n,"class","option svelte-1l1v01j"),re(n,"option--selected",e[3]===e[1].current),this.first=n},m(p,m){M(p,n,m),_(n,r),_(n,s),_(n,l),_(l,u),_(n,f),c||(d=ee(n,"click",h),c=!0)},p(p,m){e=p,m&2&&!le(r.src,a=`${ke}/demo-${e[3].name}.gif`)&&g(r,"src",a),m&2&&o!==(o=e[3].name)&&g(r,"alt",o),m&2&&i!==(i=e[3].name+"")&&Z(u,i),m&2&&re(n,"option--selected",e[3]===e[1].current)},d(p){p&&v(n),c=!1,d()}}}function Vi(t){let e,n=[],r=new Map,a,o=t[1].animations;const s=l=>l[3].name;for(let l=0;l<o.length;l+=1){let i=Ot(t,o,l),u=s(i);r.set(u,n[l]=kt(u,i))}return{c(){e=C("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=y(l,"ASIDE",{class:!0});var i=w(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(v),this.h()},h(){g(e,"class",a=K(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){M(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(o=l[1].animations,n=mn(n,i,s,1,l,o,r,e,gn,kt,null,Ot)),i&1&&a!==(a=K(`container ${l[0]}`)+" svelte-1l1v01j")&&g(e,"class",a)},i:oe,o:oe,d(l){l&&v(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function Yi(t,e,n){let r;ae(t,te,s=>n(1,r=s));let{class:a=""}=e;const o=s=>te.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,a=s.class)},[a,r,o]}class Wi extends B{constructor(e){super(),V(this,e,Yi,Vi,Y,{class:0})}}function At(t){t[12]=t[13].dataUri}function Mt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Zi,then:Ki,catch:Ji,value:13,error:14};return nt(n=t[3],r),{c(){e=C("div"),r.block.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var o=w(e);r.block.l(o),o.forEach(v),this.h()},h(){g(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(a,o){M(a,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(a,o){t=a,r.ctx=t,o&8&&n!==(n=t[3])&&nt(n,r)||pn(r,t,o)},d(a){a&&v(e),r.block.d(),r.token=null,r=null}}}function Ji(t){let e,n,r=t[14]+"",a;return{c(){e=C("p"),n=R("An error has occurred: "),a=R(r),this.h()},l(o){e=y(o,"P",{class:!0});var s=w(e);n=P(s,"An error has occurred: "),a=P(s,r),s.forEach(v),this.h()},h(){g(e,"class","preview__error svelte-13qbjon")},m(o,s){M(o,e,s),_(e,n),_(e,a)},p(o,s){s&8&&r!==(r=o[14]+"")&&Z(a,r)},d(o){o&&v(e)}}}function Ki(t){At(t);let e,n,r,a,o,s,l;return{c(){e=C("div"),n=C("img"),a=O(),o=C("a"),s=R("Download"),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=w(e);n=y(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(v),a=k(i),o=y(i,"A",{class:!0,download:!0,href:!0});var f=w(o);s=P(f,"Download"),f.forEach(v),this.h()},h(){g(n,"class","preview__image svelte-13qbjon"),le(n.src,r=t[12])||g(n,"src",r),g(n,"alt","generated gif"),g(e,"class","preview__image-container svelte-13qbjon"),g(o,"class","preview__download-button svelte-13qbjon"),g(o,"download","jumping_peter.gif"),g(o,"href",l=t[12])},m(i,u){M(i,e,u),_(e,n),M(i,a,u),M(i,o,u),_(o,s)},p(i,u){At(i),u&8&&!le(n.src,r=i[12])&&g(n,"src",r),u&8&&l!==(l=i[12])&&g(o,"href",l)},d(i){i&&v(e),i&&v(a),i&&v(o)}}}function Zi(t){let e,n,r,a,o,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,d,h,p,m,$;return{c(){e=C("div"),n=C("p"),r=R("Generating..."),a=O(),o=C("p"),s=R("["),i=R(l),u=R(" / "),c=R(f),d=R("]"),h=O(),p=C("progress"),this.h()},l(x){e=y(x,"DIV",{class:!0});var b=w(e);n=y(b,"P",{});var T=w(n);r=P(T,"Generating..."),T.forEach(v),a=k(b),o=y(b,"P",{});var S=w(o);s=P(S,"["),i=P(S,l),u=P(S," / "),c=P(S,f),d=P(S,"]"),S.forEach(v),h=k(b),p=y(b,"PROGRESS",{class:!0,max:!0}),w(p).forEach(v),b.forEach(v),this.h()},h(){g(p,"class","preview__progress svelte-13qbjon"),g(p,"max",m=t[5].totalFrames),p.value=$=t[4].frame,g(e,"class","preview__loading svelte-13qbjon")},m(x,b){M(x,e,b),_(e,n),_(n,r),_(e,a),_(e,o),_(o,s),_(o,i),_(o,u),_(o,c),_(o,d),_(e,h),_(e,p)},p(x,b){b&16&&l!==(l=x[4].frame+"")&&Z(i,l),b&32&&f!==(f=x[5].totalFrames+"")&&Z(c,f),b&32&&m!==(m=x[5].totalFrames)&&g(p,"max",m),b&16&&$!==($=x[4].frame)&&(p.value=$)},d(x){x&&v(e)}}}function Qi(t){let e,n,r,a,o,s,l,i,u,f,c,d;r=new et({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let h=!t[1]&&t[3]&&Mt(t);return f=new ie({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=C("main"),n=C("div"),I(r.$$.fragment),a=O(),h&&h.c(),o=O(),s=C("div"),l=C("div"),i=C("canvas"),u=O(),I(f.$$.fragment),this.h()},l(p){e=y(p,"MAIN",{class:!0});var m=w(e);n=y(m,"DIV",{class:!0});var $=w(n);U(r.$$.fragment,$),$.forEach(v),a=k(m),h&&h.l(m),o=k(m),s=y(m,"DIV",{class:!0});var x=w(s);l=y(x,"DIV",{class:!0});var b=w(l);i=y(b,"CANVAS",{class:!0,style:!0}),w(i).forEach(v),b.forEach(v),u=k(x),U(f.$$.fragment,x),x.forEach(v),m.forEach(v),this.h()},h(){g(n,"class","preview__debug-input svelte-13qbjon"),g(i,"class","preview__image svelte-13qbjon"),dn(i,"transform","scaleY(-1)"),g(l,"class","preview__image-container svelte-13qbjon"),g(s,"class","preview__container preview__container--debug svelte-13qbjon"),g(e,"class",c=K(`preview ${t[0]}`)+" svelte-13qbjon"),re(e,"preview--debug",t[1]),re(e,"preview--no-debug",!t[1])},m(p,m){M(p,e,m),_(e,n),D(r,n,null),_(e,a),h&&h.m(e,null),_(e,o),_(e,s),_(s,l),_(l,i),t[9](i),_(s,u),D(f,s,null),d=!0},p(p,[m]){const $={};m&2&&($.value=p[1]),r.$set($),!p[1]&&p[3]?h?h.p(p,m):(h=Mt(p),h.c(),h.m(e,o)):h&&(h.d(1),h=null);const x={};m&32&&(x.max=p[5].totalFrames-1),m&16&&(x.value=p[4].frame),f.$set(x),(!d||m&1&&c!==(c=K(`preview ${p[0]}`)+" svelte-13qbjon"))&&g(e,"class",c),(!d||m&3)&&re(e,"preview--debug",p[1]),(!d||m&3)&&re(e,"preview--no-debug",!p[1])},i(p){d||(E(r.$$.fragment,p),E(f.$$.fragment,p),d=!0)},o(p){A(r.$$.fragment,p),A(f.$$.fragment,p),d=!1},d(p){p&&v(e),N(r),h&&h.d(),t[9](null),N(f)}}}function el(t,e,n){let r,a,o;ae(t,We,m=>n(8,r=m)),ae(t,$e,m=>n(4,a=m)),ae(t,Q,m=>n(5,o=m));let s,{class:l=""}=e,i=!1,u=null;function f(){$e.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=$e.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}hn(()=>{$e.changeCanvas(s),c()});function d(m){$e.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function h(m){n(1,i=m.detail.value)}function p(m){_n[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,a,o,d,h,r,p]}class tl extends B{constructor(e){super(),V(this,e,el,Qi,Y,{class:0})}}function nl(t){let e,n,r,a,o,s,l,i,u,f,c,d,h,p,m,$,x,b,T,S,X,z,ue,W,ve;return document.title=e=Ce,$=new yn({props:{class:"header"}}),b=new Wi({props:{class:"animations"}}),S=new Ii({props:{class:"common-options"}}),z=new Bi({props:{class:"animation-options"}}),W=new tl({props:{class:"preview"}}),{c(){n=C("meta"),r=C("meta"),a=C("meta"),o=C("meta"),s=C("meta"),l=C("meta"),i=C("meta"),u=C("meta"),f=C("meta"),c=C("meta"),d=C("meta"),h=C("meta"),p=O(),m=C("div"),I($.$$.fragment),x=O(),I(b.$$.fragment),T=O(),I(S.$$.fragment),X=O(),I(z.$$.fragment),ue=O(),I(W.$$.fragment),this.h()},l(j){const q=vn("svelte-2dqrj",document.head);n=y(q,"META",{name:!0,content:!0,class:!0}),r=y(q,"META",{name:!0,content:!0,class:!0}),a=y(q,"META",{property:!0,content:!0,class:!0}),o=y(q,"META",{property:!0,content:!0,class:!0}),s=y(q,"META",{property:!0,content:!0,class:!0}),l=y(q,"META",{property:!0,content:!0,class:!0}),i=y(q,"META",{property:!0,content:!0,class:!0}),u=y(q,"META",{property:!0,content:!0,class:!0}),f=y(q,"META",{property:!0,content:!0,class:!0}),c=y(q,"META",{property:!0,content:!0,class:!0}),d=y(q,"META",{property:!0,content:!0,class:!0}),h=y(q,"META",{property:!0,content:!0,class:!0}),q.forEach(v),p=k(j),m=y(j,"DIV",{class:!0});var J=w(m);U($.$$.fragment,J),x=k(J),U(b.$$.fragment,J),T=k(J),U(S.$$.fragment,J),X=k(J),U(z.$$.fragment,J),ue=k(J),U(W.$$.fragment,J),J.forEach(v),this.h()},h(){g(n,"name","title"),g(n,"content",Ce),g(n,"class","svelte-14fuh2n"),g(r,"name","description"),g(r,"content",Be),g(r,"class","svelte-14fuh2n"),g(a,"property","og:type"),g(a,"content","website"),g(a,"class","svelte-14fuh2n"),g(o,"property","og:url"),g(o,"content",Ft),g(o,"class","svelte-14fuh2n"),g(s,"property","og:title"),g(s,"content",Ce),g(s,"class","svelte-14fuh2n"),g(l,"property","og:description"),g(l,"content",Be),g(l,"class","svelte-14fuh2n"),g(i,"property","og:image"),g(i,"content",Lt),g(i,"class","svelte-14fuh2n"),g(u,"property","twitter:card"),g(u,"content","summary_large_image"),g(u,"class","svelte-14fuh2n"),g(f,"property","twitter:url"),g(f,"content",Ft),g(f,"class","svelte-14fuh2n"),g(c,"property","twitter:title"),g(c,"content",Ce),g(c,"class","svelte-14fuh2n"),g(d,"property","twitter:description"),g(d,"content",Be),g(d,"class","svelte-14fuh2n"),g(h,"property","twitter:image"),g(h,"content",Lt),g(h,"class","svelte-14fuh2n"),g(m,"class","grid svelte-14fuh2n")},m(j,q){_(document.head,n),_(document.head,r),_(document.head,a),_(document.head,o),_(document.head,s),_(document.head,l),_(document.head,i),_(document.head,u),_(document.head,f),_(document.head,c),_(document.head,d),_(document.head,h),M(j,p,q),M(j,m,q),D($,m,null),_(m,x),D(b,m,null),_(m,T),D(S,m,null),_(m,X),D(z,m,null),_(m,ue),D(W,m,null),ve=!0},p(j,[q]){(!ve||q&0)&&e!==(e=Ce)&&(document.title=e)},i(j){ve||(E($.$$.fragment,j),E(b.$$.fragment,j),E(S.$$.fragment,j),E(z.$$.fragment,j),E(W.$$.fragment,j),ve=!0)},o(j){A($.$$.fragment,j),A(b.$$.fragment,j),A(S.$$.fragment,j),A(z.$$.fragment,j),A(W.$$.fragment,j),ve=!1},d(j){v(n),v(r),v(a),v(o),v(s),v(l),v(i),v(u),v(f),v(c),v(d),v(h),j&&v(p),j&&v(m),N($),N(b),N(S),N(z),N(W)}}}const Ce="Jumping Peter",Be="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",Ft="https://ksmai.github.io/jumping-peter",Lt="https://ksmai.github.io/jumping-peter/favicon.png";class ol extends B{constructor(e){super(),V(this,e,null,nl,Y,{})}}export{ol as default};
