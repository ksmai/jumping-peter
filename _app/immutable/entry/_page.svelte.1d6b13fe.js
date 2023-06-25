import{S as W,i as J,n as K,j as y,s as O,q as L,k as x,l as w,c as A,r as j,g as b,m as d,J as me,K as ee,a as P,G as _,H as ue,L as Ee,M as mn,N as oe,u as te,f as E,v as Be,b as M,d as Ne,O as dn,P as et,C as gn,D as hn,E as pn,F as _n,Q as vn,R as st,y as U,z as B,A as N,B as G,I as le,T as ie,e as he,U as jt,V as bn,W as $n,p as Cn,o as yn,X as it,Y as xn,w as wn,Z as Tn}from"../chunks/index.a9aa9141.js";import{b as pe,w as Ge,d as Sn}from"../chunks/paths.a27e07e8.js";function En(t){let e,n,r,o,a,s,l,i,u,f,c,g,p;return{c(){e=y("header"),n=y("img"),o=O(),a=y("h1"),s=L("Jumping Peter"),l=O(),i=y("p"),u=L("generate gif emojis"),f=O(),c=y("a"),g=L("Contribute"),this.h()},l(h){e=x(h,"HEADER",{class:!0});var m=w(e);n=x(m,"IMG",{class:!0,src:!0,alt:!0}),o=A(m),a=x(m,"H1",{class:!0});var $=w(a);s=j($,"Jumping Peter"),$.forEach(b),l=A(m),i=x(m,"P",{class:!0});var C=w(i);u=j(C,"generate gif emojis"),C.forEach(b),f=A(m),c=x(m,"A",{class:!0,href:!0,target:!0,rel:!0});var v=w(c);g=j(v,"Contribute"),v.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","logo svelte-bal6b7"),me(n.src,r=`${pe}/demo-jumping.gif`)||d(n,"src",r),d(n,"alt",""),d(a,"class","title svelte-bal6b7"),d(i,"class","subtitle svelte-bal6b7"),d(c,"class","contribute svelte-bal6b7"),d(c,"href","https://github.com/ksmai/jumping-peter"),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(e,"class",p=ee(`header ${t[0]}`)+" svelte-bal6b7")},m(h,m){P(h,e,m),_(e,n),_(e,o),_(e,a),_(a,s),_(e,l),_(e,i),_(i,u),_(e,f),_(e,c),_(c,g)},p(h,[m]){m&1&&p!==(p=ee(`header ${h[0]}`)+" svelte-bal6b7")&&d(e,"class",p)},i:ue,o:ue,d(h){h&&b(e)}}}function kn(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class On extends W{constructor(e){super(),J(this,e,kn,En,K,{class:0})}}function _e(t){return{...t,type:"slider",min:-360,max:360,step:1}}function ce(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function z(t){return{...t,type:"slider",min:0,max:1,step:.01}}function An(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function ke(t){return{...t,type:"slider",min:0,max:2,step:.01}}function Fe(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Ie(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function lt(t){return{...t,type:"slider",min:-1,max:1,step:1}}function Q(t){return{...t,type:"slider",min:1,max:100,step:1}}function Mn(t){return{...t,type:"slider",min:1,max:5,step:1}}function Oe(t){return{...t,type:"toggle"}}function Pn(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const k={image:{url:`${pe}/favicon.png`},additionalImages:{urls:[]},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function I(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ve(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function H(t,e,n){Ut(t,e,n,0)}function Rn(t,e,n){const r=t[0],o=t[4],a=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*o,t[9]+=n*a,t[13]+=n*s}function Ut(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function de(t,e){tt(t,e,[0,0,1])}function tt(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const o=n[0]/r,a=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*o*o+i,(1-i)*o*a+u*s,(1-i)*o*s-u*a,0,(1-i)*o*a-u*s,(1-i)*a*a+i,(1-i)*a*s-u*o,0,(1-i)*o*s+u*a,(1-i)*a*s-u*o,(1-i)*s*s+i,0,0,0,0,1];nt(t,f)}function Bt(t,e,n,r){Ut(t,-e[0],-e[1],-e[2]);const o=[-n[0],-n[1],-n[2]];ut(o);const a=ct(r,o);ut(a);const s=ct(o,a),l=[a[0],s[0],o[0],0,a[1],s[1],o[1],0,a[2],s[2],o[2],0,0,0,0,1];nt(t,l)}function Nt(t,e,n,r,o,a,s){const l=[2*a/(n-e),0,0,0,0,2*a/(o-r),0,0,(n+e)/(n-e),(o+r)/(o-r),-(s+a)/(s-a),-1,0,0,-2*s*a/(s-a),0];nt(t,l)}function nt(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let o=0;o<=3;++o){const a=4*r+o;t[a]=0;for(let s=0;s<=3;++s)t[a]+=e[4*s+o]*n[4*r+s]}}function ut(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function F(t,e,n){return t+(e-t)*n}function be(t){return t*Math.PI/180}function ft(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function Pe(t,e){return Math.sin(t*e)*43758.5453%1}function Gt(t){return Pe(t,127.1)}function Fn(t){return[Pe(t,127.1),Pe(t,269.5),Pe(t,631.2)]}function In(t){return e=>1-Math.pow(1-e,t)}function Ht(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const Re=Ht(3),qt=In(2);function mt(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const Dn="spinning",Ln={...k,output:{...k.output,delayMs:50,totalFrames:15}},jn=[_e({name:"startAngle",value:0}),_e({name:"endAngle",value:360}),ce({name:"originX",value:0}),ce({name:"originY",value:0}),Oe({name:"alternates",value:!1})];function zt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{alternates:a,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:o,getUniforms:c=>{const g=a?Math.min(c,1-c)*2:c,p=F(s,l,g),h=I();return H(h,-i,-u),de(h,p),H(h,i,u),{u_model:h}}}]}const Un=Object.freeze(Object.defineProperty({__proto__:null,createSprites:zt,defaultOptions:Ln,editOptions:jn,name:Dn},Symbol.toStringTag,{value:"Module"})),Bn="expanding",Nn={...k,output:{...k.output,delayMs:50,totalFrames:20}},Gn=[Ie({name:"minScale",value:1}),Ie({name:"maxScale",value:2}),Oe({name:"alternates",value:!1})];function Xt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{minScale:a,maxScale:s,alternates:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=F(a,s,f),g=I();return ve(g,c,c),{u_model:g}}}]}const Hn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Xt,defaultOptions:Nn,editOptions:Gn,name:Bn},Symbol.toStringTag,{value:"Module"})),qn="extreme-speed",zn={...k,output:{...k.output,delayMs:20,totalFrames:10}},Xn=[lt({name:"directionX",value:-1}),lt({name:"directionY",value:0})];function Vt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("sudoku"),{directionX:a,directionY:s}=n,l=a*2,i=s*2;return[{program:r,geometry:o,getUniforms:f=>{const c=I(),g=F(0,l,f),p=F(0,i,f);return H(c,g,p),{u_model:c}}}]}const Vn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:zn,editOptions:Xn,name:qn},Symbol.toStringTag,{value:"Module"})),Yn="excited",Wn={...k,output:{...k.output,delayMs:50,totalFrames:25}},Jn=[_e({name:"angle",value:15}),Fe({name:"startOffset",value:-.2}),Fe({name:"endOffset",value:.2}),Q({name:"cycles",value:3})];function Yt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{angle:a,cycles:s,startOffset:l,endOffset:i}=n,u=be(a),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:o,getUniforms:p=>{const h=p*2*s%1,m=Math.min(h,1-h)*2,$=F(-l*c,-i*c,m),C=F(l*f,i*f,m),v=I();return de(v,a),H(v,$,C),ve(v,p>.5?-1:1,1),{u_model:v}}}]}const Kn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:Wn,editOptions:Jn,name:Yn},Symbol.toStringTag,{value:"Module"})),Zn="jumping",Qn={...k,output:{...k.output,delayMs:50,totalFrames:20}},er=[ke({name:"maxOffset",value:1.2}),z({name:"compressTime",value:.4}),z({name:"maxCompress",value:.3})];function Wt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffset:a,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=I(),g=f/(1-s);if(g<1){const p=(1-g*g)*a;H(c,0,p)}else{const p=(1-f)/s,m=1-(1-p*p)*l;H(c,0,1),ve(c,1/m,m),H(c,0,-1)}return{u_model:c}}}]}const tr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:Qn,editOptions:er,name:Zn},Symbol.toStringTag,{value:"Module"})),nr="tower",rr={...k,output:{...k.output,delayMs:40,totalFrames:20}},or=[_e({name:"startAngle",value:20}),_e({name:"endAngle",value:-45}),z({name:"startTime",value:.5})];function Jt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("tower"),{startAngle:a,endAngle:s,startTime:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=I();if(u<l){const c=u/l,g=Math.min(c,1-c)*2,p=F(0,a,g);de(f,p)}else{const c=(u-l)/(1-l),g=Math.min(c,1-c)*2,p=F(0,s,g);if(de(f,p),c>.5){const h=be(p),m=Math.cos(h),$=Math.sin(h),C=(c-.5)*2,v=F(0,-2*$,C),T=F(0,2*m,C);H(f,v,T)}}return{u_model:f}}}]}const ar=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:rr,editOptions:or,name:nr},Symbol.toStringTag,{value:"Module"})),sr="repeated",ir={...k,output:{...k.output,delayMs:60,totalFrames:15}},lr=[Ie({name:"initialScale",value:.1}),Oe({name:"horizontal",value:!1})];function Kt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{initialScale:a,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=g=>{const p=I(),h=Re(g),m=F(a,1,h);return ve(p,m,m),{u_model:p}},f=g=>{const p=I(),h=Re(g),m=F(0,l.endX,h),$=F(0,l.endY,h);return H(p,m,$),{u_model:p}},c=g=>{const p=I(),h=Re(g),m=F(0,i.endX,h),$=F(0,i.endY,h);return H(p,m,$),{u_model:p}};return[{program:r,geometry:o,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const ur=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:ir,editOptions:lr,name:sr},Symbol.toStringTag,{value:"Module"})),cr="mirror",fr={...k,output:{...k.output,delayMs:50,totalFrames:16}},mr=[Oe({name:"rightHalf",value:!1})];function Zt(t,e,n){const r=t.createProgram("default"),{rightHalf:o}=n,a=e.createGeometry(o?"rightHalf":"leftHalf");return[{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=I(),c=mt(u),g=F(-2,-1,c);return o||ve(f,-1,1),H(f,g,0),{u_model:f}}},{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=I(),c=mt(u),g=F(2,1,c);return o&&ve(f,-1,1),H(f,g,0),{u_model:f}}}]}const dr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:fr,editOptions:mr,name:cr},Symbol.toStringTag,{value:"Module"})),gr="panic",hr={...k,output:{...k.output,delayMs:30,totalFrames:16}},pr=[ke({name:"maxOffsetX",value:.15}),ke({name:"maxOffsetY",value:.15})];function Qt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffsetX:a,maxOffsetY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=ft(i+.123),f=ft(i*2+1),c=F(-a,a,u),g=F(-s,s,f),p=I();return H(p,c,g),{u_model:p}}}]}const _r=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Qt,defaultOptions:hr,editOptions:pr,name:gr},Symbol.toStringTag,{value:"Module"})),vr="rotating",br={...k,output:{...k.output,delayMs:40,totalFrames:25}},$r=[ce({name:"axisX",value:0}),ce({name:"axisY",value:1}),ce({name:"axisZ",value:0}),ce({name:"originX",value:0}),ce({name:"originY",value:0}),Mn({name:"easing",value:1}),Oe({name:"alternates",value:!1})];function en(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{axisX:a,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,g=[a,s,l],p=Ht(f);return[{program:r,geometry:o,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,C=p($),v=F(0,360,C),T=I();H(T,-i,-u),tt(T,v,g),H(T,i,u);const S=I();Bt(S,[0,0,3],[0,0,-1],[0,1,0]);const q=I();return Nt(q,-.03,.03,-.03,.03,.1,6),{u_model:T,u_view:S,u_projection:q,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(be(5)),"u_spotLight.outerCos":Math.cos(be(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const Cr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:en,defaultOptions:br,editOptions:$r,name:vr},Symbol.toStringTag,{value:"Module"})),yr="party",xr={...k,output:{...k.output,delayMs:40,totalFrames:15}},wr=[_e({name:"angle",value:10}),Fe({name:"startOffset",value:-.3}),Fe({name:"endOffset",value:.5})];function tn(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{angle:a,startOffset:s,endOffset:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,g=Re(f),p=qt(c),h=u<.5?F(0,180,g):F(180,360,g),m=F(s,l,p),$=I();de($,a),H($,0,m),tt($,h,[0,1,0]);const C=I();Bt(C,[0,0,3],[0,0,-1],[0,1,0]);const v=I();return Nt(v,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:C,u_projection:v,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(be(5)),"u_spotLight.outerCos":Math.cos(be(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const Tr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:tn,defaultOptions:xr,editOptions:wr,name:yr},Symbol.toStringTag,{value:"Module"})),Sr="parrot",Er={...k,output:{...k.output,delayMs:20,totalFrames:18}},kr=[Ie({name:"amplitudeX",value:.6}),ke({name:"amplitudeY",value:.5})];function nn(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{amplitudeX:a,amplitudeY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=F(-a,a,u),c=Math.sin(i*2*Math.PI)*.5+.5,g=F(-s,0,c),p=I();return H(p,0,1),Rn(p,f,0),H(p,0,-1+g),{u_model:p}}}]}const Or=Object.freeze(Object.defineProperty({__proto__:null,createSprites:nn,defaultOptions:Er,editOptions:kr,name:Sr},Symbol.toStringTag,{value:"Module"})),Ar="wiggling",Mr={...k,output:{...k.output,delayMs:50,totalFrames:15}},Pr=[Q({name:"frequency",value:3}),ke({name:"amplitude",value:.05})];function rn(t,e,n){const r=t.createProgram("wiggling"),o=e.createGeometry("full"),{frequency:a,amplitude:s}=n;return[{program:r,geometry:o,getUniforms:i=>({u_model:I(),u_time:i,u_amplitude:s,u_frequency:a})}]}const Rr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:rn,defaultOptions:Mr,editOptions:Pr,name:Ar},Symbol.toStringTag,{value:"Module"})),Fr="petrified-shattered",Ir={...k,additionalImages:{urls:[`${pe}/stone.jpg`]},output:{...k.output,delayMs:150,totalFrames:20}},Dr=[z({name:"edgeThreshold",value:.2}),z({name:"edgeDarkness",value:.3}),z({name:"timeBeforeCrack",value:.4}),z({name:"timeBeforeShatter",value:.5}),Q({name:"seed",value:26}),z({name:"maxHorizontalVelocity",value:1}),z({name:"maxVerticalVelocity",value:1}),z({name:"maxAngularVelocity",value:1}),z({name:"maxAcceleration",value:1}),z({name:"crackWidth",value:.07}),Q({name:"shatterColumns",value:4}),Q({name:"shatterRows",value:4})];function on(t,e,n){const r=t.createProgram("petrifiedShattered"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeShatter:i,seed:u,maxHorizontalVelocity:f,maxVerticalVelocity:c,maxAngularVelocity:g,maxAcceleration:p,crackWidth:h,shatterColumns:m,shatterRows:$}=n;return Array(m*$).fill(null).map((C,v)=>({program:r,geometry:o,getUniforms(T){const S=I();if(T>i){const Y=(T-i)/(1-i);let[V,ne,R]=Fn(v+u*.761+1),D=Gt(R);V=V*f*1,ne=ne*c*3,D=D*360*g*.2,R=-Math.abs(R*p*30),de(S,D*Y),H(S,V*Y,ne*Y+.5*R*Y*Y)}const q=v%m,X=Math.floor(v/m);return{u_model:S,u_edgeThreshold:a,u_edgeDarkness:s,u_time:T,u_seed:u,u_timeBeforeCrack:l,u_timeBeforeShatter:i,u_crackWidth:h,u_shatterColumns:m,u_shatterRows:$,u_column:q,u_row:X}}}))}const Lr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:on,defaultOptions:Ir,editOptions:Dr,name:Fr},Symbol.toStringTag,{value:"Module"})),jr="petrified-broken",Ur={...k,additionalImages:{urls:[`${pe}/stone.jpg`]},output:{...k.output,delayMs:150,totalFrames:20}},Br=[z({name:"edgeThreshold",value:.2}),z({name:"edgeDarkness",value:.3}),z({name:"timeBeforeCrack",value:.4}),z({name:"timeBeforeBreak",value:.6}),Q({name:"crackSegments",value:4}),An({name:"maxCrackMovement",value:.2}),z({name:"crackWidth",value:.1}),Q({name:"seed",value:26})];function an(t,e,n){const r=t.createProgram("petrifiedBroken"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeBreak:i,crackSegments:u,maxCrackMovement:f,crackWidth:c,seed:g}=n;return Array(2).fill(null).map((p,h)=>({program:r,geometry:o,getUniforms(m){const $=I();if(m>i){const C=Gt(h+g*.761+1)*10+80,v=(m-i)/(1-i);H($,0,1),de($,qt(v)*C*(1-h*2)),H($,0,-1)}return{u_model:$,u_edgeThreshold:a,u_edgeDarkness:s,u_seed:g,u_time:m,u_timeBeforeCrack:l,u_timeBeforeBreak:i,u_crackSegments:u,u_maxCrackMovement:f,u_crackWidth:c,u_i:h}}}))}const Nr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:an,defaultOptions:Ur,editOptions:Br,name:jr},Symbol.toStringTag,{value:"Module"})),Gr="firework",Hr={...k,output:{...k.output,delayMs:50,totalFrames:30}},qr=[Q({name:"seed",value:10}),z({name:"darkness",value:.3}),Q({name:"cycles",value:2}),Q({name:"speedModifier",value:13})];function sn(t,e,n){const r=t.createProgram("firework"),o=e.createGeometry("full"),{seed:a,darkness:s,cycles:l,speedModifier:i}=n;return[{program:r,geometry:o,getUniforms(u){return{u_model:I(),u_seed:a,u_time:u,u_darkness:s,u_cycles:l,u_speedModifier:i}}}]}const zr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:sn,defaultOptions:Hr,editOptions:qr,name:Gr},Symbol.toStringTag,{value:"Module"})),Ve=[tr,Vn,Un,Kn,Hn,ar,ur,dr,_r,Cr,Tr,Or,Rr,Lr,Nr,zr];function dt(t,e,n){const r=Pn(n.editOptions);switch(n.name){case"spinning":return zt(t,e,r);case"expanding":return Xt(t,e,r);case"extreme-speed":return Vt(t,e,r);case"excited":return Yt(t,e,r);case"jumping":return Wt(t,e,r);case"tower":return Jt(t,e,r);case"repeated":return Kt(t,e,r);case"mirror":return Zt(t,e,r);case"panic":return Qt(t,e,r);case"rotating":return en(t,e,r);case"party":return tn(t,e,r);case"parrot":return nn(t,e,r);case"wiggling":return rn(t,e,r);case"petrified-shattered":return on(t,e,r);case"petrified-broken":return an(t,e,r);case"firework":return sn(t,e,r);default:(o=>{throw new Error(`Unknown animation: ${JSON.stringify(o)}`)})(n)}}var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xr=typeof Ae=="object"&&Ae&&Ae.Object===Object&&Ae,Vr=Xr,Yr=Vr,Wr=typeof self=="object"&&self&&self.Object===Object&&self,Jr=Yr||Wr||Function("return this")(),He=Jr,Kr=He,Zr=Kr.Symbol,ln=Zr,gt=ln,un=Object.prototype,Qr=un.hasOwnProperty,eo=un.toString,xe=gt?gt.toStringTag:void 0;function to(t){var e=Qr.call(t,xe),n=t[xe];try{t[xe]=void 0;var r=!0}catch{}var o=eo.call(t);return r&&(e?t[xe]=n:delete t[xe]),o}var no=to,ro=Object.prototype,oo=ro.toString;function ao(t){return oo.call(t)}var so=ao,ht=ln,io=no,lo=so,uo="[object Null]",co="[object Undefined]",pt=ht?ht.toStringTag:void 0;function fo(t){return t==null?t===void 0?co:uo:pt&&pt in Object(t)?io(t):lo(t)}var mo=fo;function go(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var cn=go,ho=mo,po=cn,_o="[object AsyncFunction]",vo="[object Function]",bo="[object GeneratorFunction]",$o="[object Proxy]";function Co(t){if(!po(t))return!1;var e=ho(t);return e==vo||e==bo||e==_o||e==$o}var yo=Co,xo=He,wo=xo["__core-js_shared__"],To=wo,Ye=To,_t=function(){var t=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function So(t){return!!_t&&_t in t}var Eo=So,ko=Function.prototype,Oo=ko.toString;function Ao(t){if(t!=null){try{return Oo.call(t)}catch{}try{return t+""}catch{}}return""}var Mo=Ao,Po=yo,Ro=Eo,Fo=cn,Io=Mo,Do=/[\\^$.*+?()[\]{}|]/g,Lo=/^\[object .+?Constructor\]$/,jo=Function.prototype,Uo=Object.prototype,Bo=jo.toString,No=Uo.hasOwnProperty,Go=RegExp("^"+Bo.call(No).replace(Do,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ho(t){if(!Fo(t)||Ro(t))return!1;var e=Po(t)?Go:Lo;return e.test(Io(t))}var qo=Ho;function zo(t,e){return t?.[e]}var Xo=zo,Vo=qo,Yo=Xo;function Wo(t,e){var n=Yo(t,e);return Vo(n)?n:void 0}var rt=Wo,Jo=rt,Ko=Jo(Object,"create"),qe=Ko,vt=qe;function Zo(){this.__data__=vt?vt(null):{},this.size=0}var Qo=Zo;function ea(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var ta=ea,na=qe,ra="__lodash_hash_undefined__",oa=Object.prototype,aa=oa.hasOwnProperty;function sa(t){var e=this.__data__;if(na){var n=e[t];return n===ra?void 0:n}return aa.call(e,t)?e[t]:void 0}var ia=sa,la=qe,ua=Object.prototype,ca=ua.hasOwnProperty;function fa(t){var e=this.__data__;return la?e[t]!==void 0:ca.call(e,t)}var ma=fa,da=qe,ga="__lodash_hash_undefined__";function ha(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=da&&e===void 0?ga:e,this}var pa=ha,_a=Qo,va=ta,ba=ia,$a=ma,Ca=pa;function $e(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$e.prototype.clear=_a;$e.prototype.delete=va;$e.prototype.get=ba;$e.prototype.has=$a;$e.prototype.set=Ca;var ya=$e;function xa(){this.__data__=[],this.size=0}var wa=xa;function Ta(t,e){return t===e||t!==t&&e!==e}var Sa=Ta,Ea=Sa;function ka(t,e){for(var n=t.length;n--;)if(Ea(t[n][0],e))return n;return-1}var ze=ka,Oa=ze,Aa=Array.prototype,Ma=Aa.splice;function Pa(t){var e=this.__data__,n=Oa(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ma.call(e,n,1),--this.size,!0}var Ra=Pa,Fa=ze;function Ia(t){var e=this.__data__,n=Fa(e,t);return n<0?void 0:e[n][1]}var Da=Ia,La=ze;function ja(t){return La(this.__data__,t)>-1}var Ua=ja,Ba=ze;function Na(t,e){var n=this.__data__,r=Ba(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Ga=Na,Ha=wa,qa=Ra,za=Da,Xa=Ua,Va=Ga;function Ce(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ce.prototype.clear=Ha;Ce.prototype.delete=qa;Ce.prototype.get=za;Ce.prototype.has=Xa;Ce.prototype.set=Va;var Ya=Ce,Wa=rt,Ja=He,Ka=Wa(Ja,"Map"),Za=Ka,bt=ya,Qa=Ya,es=Za;function ts(){this.size=0,this.__data__={hash:new bt,map:new(es||Qa),string:new bt}}var ns=ts;function rs(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var os=rs,as=os;function ss(t,e){var n=t.__data__;return as(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Xe=ss,is=Xe;function ls(t){var e=is(this,t).delete(t);return this.size-=e?1:0,e}var us=ls,cs=Xe;function fs(t){return cs(this,t).get(t)}var ms=fs,ds=Xe;function gs(t){return ds(this,t).has(t)}var hs=gs,ps=Xe;function _s(t,e){var n=ps(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var vs=_s,bs=ns,$s=us,Cs=ms,ys=hs,xs=vs;function ye(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ye.prototype.clear=bs;ye.prototype.delete=$s;ye.prototype.get=Cs;ye.prototype.has=ys;ye.prototype.set=xs;var ws=ye,Ts="__lodash_hash_undefined__";function Ss(t){return this.__data__.set(t,Ts),this}var Es=Ss;function ks(t){return this.__data__.has(t)}var Os=ks,As=ws,Ms=Es,Ps=Os;function De(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new As;++e<n;)this.add(t[e])}De.prototype.add=De.prototype.push=Ms;De.prototype.has=Ps;var Rs=De;function Fs(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var Is=Fs;function Ds(t){return t!==t}var Ls=Ds;function js(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}var Us=js,Bs=Is,Ns=Ls,Gs=Us;function Hs(t,e,n){return e===e?Gs(t,e,n):Bs(t,Ns,n)}var qs=Hs,zs=qs;function Xs(t,e){var n=t==null?0:t.length;return!!n&&zs(t,e,0)>-1}var Vs=Xs;function Ys(t,e,n){for(var r=-1,o=t==null?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}var Ws=Ys;function Js(t,e){return t.has(e)}var Ks=Js,Zs=rt,Qs=He,ei=Zs(Qs,"Set"),ti=ei;function ni(){}var ri=ni;function oi(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var fn=oi,We=ti,ai=ri,si=fn,ii=1/0,li=We&&1/si(new We([,-0]))[1]==ii?function(t){return new We(t)}:ai,ui=li,ci=Rs,fi=Vs,mi=Ws,di=Ks,gi=ui,hi=fn,pi=200;function _i(t,e,n){var r=-1,o=fi,a=t.length,s=!0,l=[],i=l;if(n)s=!1,o=mi;else if(a>=pi){var u=e?null:gi(t);if(u)return hi(u);s=!1,o=di,i=new ci}else i=e?[]:l;e:for(;++r<a;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var g=i.length;g--;)if(i[g]===c)continue e;e&&i.push(c),l.push(f)}else o(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var vi=_i,bi=vi;function $i(t){return t&&t.length?bi(t):[]}var Ci=$i;class Je{constructor(e,n){this.gl=e,this.unit=n}loadingUrl=null;url=null;texture=null;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),o=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:a}=this;this.texture&&a.deleteTexture(this.texture);const s=a.createTexture();if(!s)throw new Error("Failed to create texture");a.activeTexture(a.TEXTURE0+this.unit),a.bindTexture(a.TEXTURE_2D,s),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,o),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class $t{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const se=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,we=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,yi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    outColor = texture(u_image, v_texCoords);
}
`,xi=`#version 300 es

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
`,wi=`#version 300 es
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
  vec4 texel = texture(u_image, v_texCoords);
  // front facing is actually the back face since we flipped y-axis in the vertex shader
  vec3 normal = normalize(v_normal) * (1.0 - 2.0 * float(gl_FrontFacing));
  vec3 fragToCamera = normalize(-v_position);

  vec3 color = vec3(0.0);
  color += computeDirectionalLight(u_directionalLight, normal, fragToCamera, texel.rgb);
  color += computePointLight(u_pointLight, normal, fragToCamera, texel.rgb);
  color += computeSpotLight(u_spotLight, normal, fragToCamera, texel.rgb);

  outColor = vec4(color, texel.a);
}
`,Ti=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = 1.0 - outColor.rgb;
}
`,Si=`#version 300 es
precision highp float;

in vec2 v_texCoords;

uniform float u_time;
uniform float u_amplitude;
uniform float u_frequency;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  vec2 texCoords = v_texCoords + vec2(sin((v_texCoords.y * u_frequency + u_time) * radians(360.0)) * u_amplitude, 0.0);
  outColor = texture(u_image, texCoords);
  outColor.a *= float(texCoords.x >= 0.0 && texCoords.x <= 1.0);
}
`,Ei=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  vec4 texel = texture(u_image, v_texCoords);
  outColor = vec4(u_weights * texel.rgb, texel.a);
}
`,ki=`#version 300 es
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
`,Oi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,Ai=`#version 300 es
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

vec3 kernelMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
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
  vec3 color = kernelMultiply(u_kernel, u_image, v_texCoords);
  float alpha = texture(u_image, v_texCoords).a;
  outColor = vec4(color, alpha);
}
`,Mi=`#version 300 es
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

vec3 kernelMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
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
  vec3 color1 = kernelMultiply(u_kernel1, u_image, v_texCoords);
  vec3 color2 = kernelMultiply(u_kernel2, u_image, v_texCoords);
  float alpha = texture(u_image, v_texCoords).a;
  outColor = vec4(
    length(vec2(color1.r, color2.r)),
    length(vec2(color1.g, color2.g)),
    length(vec2(color1.b, color2.b)),
    alpha);
}
`,Pi=`#version 300 es
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

vec3 kernelMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
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
    result = max(result, kernelMultiply(u_kernel[i], u_image, v_texCoords));
  }
  float alpha = texture(u_image, v_texCoords).a;
  outColor = vec4(result, alpha);
}
`,Ri=`#version 300 es
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

  outColor = texture(u_image, v_texCoords);
  outColor.rgb += sum / 8.0;
}
`,Fi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additionalImages[2];
uniform float u_edgeThreshold;
uniform float u_edgeDarkness;
uniform float u_time;
uniform float u_seed;
uniform float u_timeBeforeCrack;
uniform float u_timeBeforeShatter;
uniform float u_crackWidth;
uniform float u_shatterColumns;
uniform float u_shatterRows;
uniform float u_column;
uniform float u_row;

out vec4 outColor;

float getColor(vec2 offset) {
  vec2 coords = v_texCoords + offset / vec2(textureSize(u_image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  vec4 texel = texture(u_image, coords);
  float average = dot(texel.rgb, vec3(1.0 / 3.0));
  return average * inRange;
}

bool isEdge() {
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

  return result > u_edgeThreshold;
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3))))
                 * 43758.5453);
}

float worleyDist(vec2 neighbor) {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);
  vec2 uvFract = fract(uv);
  vec2 neighborInt = uvInt + neighbor;
  float outOfRange = float(neighborInt.x < 0.0 || neighborInt.x >= u_shatterColumns || neighborInt.y < 0.0 || neighborInt.y >= u_shatterRows) * (u_shatterColumns + u_shatterRows);
  vec2 point = random2(neighborInt + u_seed);
  vec2 diff = neighbor + point - uvFract;
  return length(diff) + outOfRange;
}

float getAlpha() {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);

  float currentDist = worleyDist(vec2(u_column, u_row) - uvInt);
  float minDist = u_shatterColumns + u_shatterRows;
  float isDisplayed = 1.0;
  for (int c = -1; c <= 1; ++c) {
    for (int r = -1; r <= 1; ++r) {
      vec2 neighbor = vec2(float(c), float(r));
      float isCurrent = float(uvInt + neighbor == vec2(u_column, u_row));
      float dist = isCurrent * minDist + (1.0 - isCurrent) * worleyDist(neighbor);
      isDisplayed *= 1.0 - float(dist < currentDist);
      minDist = min(minDist, dist);
    }
  }

  return isDisplayed * (1.0 - smoothstep(u_timeBeforeCrack, u_timeBeforeShatter, u_time) * float(minDist - currentDist < u_crackWidth) * float(u_time > u_timeBeforeCrack));
}


void main() {
  float petrifiedPercent = u_time / u_timeBeforeCrack;
  vec4 texel = texture(u_image, v_texCoords);
  float isPetrified = float(1.0 - v_texCoords.y < petrifiedPercent);
  outColor = mix(texel, texture(u_additionalImages[0], v_texCoords), isPetrified);
  outColor.rgb *= 1.0 - u_edgeDarkness * isPetrified * float(isEdge());
  outColor.a = texel.a * getAlpha();
}
`,Ii=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additionalImages[2];
uniform float u_edgeThreshold;
uniform float u_edgeDarkness;
uniform float u_seed;
uniform float u_time;
uniform float u_timeBeforeCrack;
uniform float u_timeBeforeBreak;
uniform float u_crackSegments;
uniform float u_maxCrackMovement;
uniform float u_crackWidth;
uniform float u_i;

out vec4 outColor;

float getColor(vec2 offset) {
  vec2 coords = v_texCoords + offset / vec2(textureSize(u_image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  vec4 texel = texture(u_image, coords);
  float average = dot(texel.rgb, vec3(1.0 / 3.0));
  return average * inRange;
}

bool isEdge() {
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

  return result > u_edgeThreshold;
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3))))
                 * 43758.5453);
}

float getAlpha() {
  float fy = fract(v_texCoords.y * u_crackSegments);
  float iy = floor(v_texCoords.y * u_crackSegments);
  float m = mod(iy, 2.0);
  float prev = random2(vec2(iy, u_seed)).x * (m * 2.0 - 1.0);
  float next = random2(vec2(iy + 1.0, u_seed)).x * (1.0 - m * 2.0);
  float curr = mix(prev, next, fy) * u_maxCrackMovement * 0.5 + 0.5;

  float t = (u_time - u_timeBeforeCrack) / (u_timeBeforeBreak - u_timeBeforeCrack);
  float isCrack = float(
    u_time > u_timeBeforeCrack &&
    v_texCoords.y < t &&
    abs(v_texCoords.x - curr) < u_crackWidth * 0.25
  );

  return (1.0 - isCrack) * float(
    (v_texCoords.x <= curr && u_i < 0.5) ||
    (v_texCoords.x > curr && u_i > 0.5)
  );
}

void main() {
  float petrifiedPercent = u_time / u_timeBeforeCrack;
  vec4 texel = texture(u_image, v_texCoords);
  float isPetrified = float(1.0 - v_texCoords.y < petrifiedPercent);
  outColor = mix(texel, texture(u_additionalImages[0], v_texCoords), isPetrified);
  outColor.rgb *= 1.0 - u_edgeDarkness * isPetrified * float(isEdge());
  outColor.a = texel.a * getAlpha();
}
`,Di=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_seed;
uniform float u_time;
uniform vec2 u_screenSize;
uniform float u_darkness;
uniform float u_cycles;
uniform float u_speedModifier;

out vec4 outColor;

float random1(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3))))
                 * 43758.5453);
}

vec3 random3(vec2 p) {
    return fract(sin(vec3(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3)),
                 dot(p, vec2(631.2, 448.7))))
                 * 43758.5453);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_screenSize) * vec2(1.0, -1.0) / u_screenSize.y; 
  outColor = texture(u_image, v_texCoords) * (1.0 - u_darkness);

  for (float explosion = 0.0; explosion < 3.0; ++explosion) {
    float speed = u_cycles;
    float t0 = u_time * speed + random1(vec2(explosion, speed));
    float t = fract(t0);
    float times = mod(floor(t0), speed);
    vec2 startPos = random2(vec2(explosion + 1.147 * u_seed, times + 2.2345 * u_seed)) * 2.0 - 1.0;
    vec3 color = random3(vec2(u_seed, explosion * 2.7 + times * 1.1));

    for (float particle = 0.0; particle < 100.0; ++particle) {
      vec2 r = random2(vec2(explosion + 23.3 * particle + 44.4 * u_seed, times + 3.667 * u_seed));
      vec2 v = random2(r) * vec2(u_speedModifier * 0.1 + sin(r.x) * 0.1 / speed, 6.28318530718);
      v = vec2(v.x * cos(v.y), v.x * sin(v.y));
      vec2 g = vec2(0.0, -0.5);
      vec2 p = startPos + v * t + 0.5 * g * t * t;
      float d = length(uv - p);
      float sparkle = cos((t + particle + r.y) * 200.0) * 0.5 + 0.5;
      float brightness = pow(0.01 / d, 1.5) * sparkle * (1.0 - t * t);
      outColor += vec4(brightness * color, step(0.1, brightness));
    }
  }
}
`,Ct={default:{vertex:we,fragment:yi},default3d:{vertex:xi,fragment:wi},wiggling:{vertex:we,fragment:Si},petrifiedShattered:{vertex:we,fragment:Fi},petrifiedBroken:{vertex:we,fragment:Ii},firework:{vertex:we,fragment:Di},invert:{vertex:se,fragment:Ti},kernel:{vertex:se,fragment:Ai},gradient2:{vertex:se,fragment:Mi},gradient8:{vertex:se,fragment:Pi},contrast:{vertex:se,fragment:Oi},bloom:{vertex:se,fragment:Ri},mix:{vertex:se,fragment:Ei},vignette:{vertex:se,fragment:ki}};class Li{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:ji(this.gl,Ct[e].vertex,Ct[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Ze(t,e,n){for(const[r,o]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const a=e.uniformLocations[r];/image/i.test(r)&&typeof o=="number"?t.uniform1i(a,o):Array.isArray(o)?o.length===2?t.uniform2fv(a,o):o.length===3?t.uniform3fv(a,o):o.length===4?t.uniform4fv(a,o):o.length===9?t.uniformMatrix3fv(a,!1,o):o.length===16&&t.uniformMatrix4fv(a,!1,o):typeof o=="number"?t.uniform1f(a,o):typeof o=="boolean"&&t.uniform1i(a,o?1:0)}}function ji(t,e,n){const r=yt(t,t.VERTEX_SHADER,e);let o;try{o=yt(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const a=t.createProgram();if(a===null)throw t.deleteShader(o),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),t.detachShader(a,o),t.detachShader(a,r),t.deleteShader(o),t.deleteShader(r),!t.getProgramParameter(a,t.LINK_STATUS)){const s=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`Failed to link program: ${s}`)}return a}function yt(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${o}`)}return r}function Ui(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let o,a;for(const s of n){o!==s.program&&(t.useProgram(s.program.program),o=s.program),a!==s.geometry&&(t.bindVertexArray(s.geometry.vao),a=s.geometry);const l=s.getUniforms(e);Ze(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Ze(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const ge={a_position:0,a_texCoords:1,a_normal:2};function Bi(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(ge.a_position),t.vertexAttribPointer(ge.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(ge.a_texCoords),t.vertexAttribPointer(ge.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(ge.a_normal),t.vertexAttribPointer(ge.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const Ni={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class Gi{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=Bi(this.gl,Ni[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const Hi=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],xt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_weights:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"mix",uniforms:{u_weights:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function wt(t,e){return e.map(n=>({program:t.createProgram(xt[n].program),uniforms:xt[n].uniforms}))}class qi{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new Li(this.gl),this.geometryFactory=new Gi(this.gl),this.texture=new Je(this.gl,0),this.additionalTextures=[new Je(this.gl,3),new Je(this.gl,4)],this.renderTextures=[new $t(this.gl,1),new $t(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;additionalTextures;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,o)=>{const a=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:o,frame:0,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:a,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;a.onmessage=c=>{const g=c.data;let p;switch(g.type){case"Ready":s.workerReady=!0,p={type:"Init",width:l,height:i,delayMs:u,quality:f},a.postMessage(p);break;case"FrameAdded":n();break;case"Success":this.resolve(g.dataUri);break;case"Failure":this.reject(g.error);break;default:(h=>{this.reject(`Cannot handle worker message: ${JSON.stringify(g)}`)})()}},a.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,o)=>{const a={type:"frame",request:e,resolve:r,reject:o,frame:n,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(a)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:o,sprites:a,effects:s,frame:l}=e,{image:i,additionalImages:u,output:f}=r;if(!(l>=f.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await Promise.all([this.texture.loadImage(i.url),...this.additionalTextures.map((h,m)=>u.urls[m]?h.loadImage(u.urls[m]):Promise.resolve())]),e!==this.current)return;const{width:c,height:g}=f;this.renderTextures.forEach(h=>h.setSize(c,g)),this.canvas.width=c,this.canvas.height=g,this.gl.viewport(0,0,c,g),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.additionalTextures.forEach(h=>{this.gl.activeTexture(this.gl.TEXTURE0+h.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,h.texture)});const p={u_image:this.texture.unit,u_screenSize:[c,g]};this.additionalTextures.forEach((h,m)=>{const $=`u_additionalImages[${m}]`;p[$]=h.unit});for(const h of Ci(a.map(m=>m.program)))this.gl.useProgram(h.program),Ze(this.gl,h,p)}if(Ui(this.gl,l/r.output.totalFrames,a,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")o();else{const c=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,c);const{worker:g}=e,p={type:"AddFrame",buffer:c.buffer};if(g.postMessage(p,[c.buffer]),l===f.totalFrames-1){const h={type:"GetResult"};g.postMessage(h)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.additionalTextures.forEach(e=>e.destroy()),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const ae=function(){const{subscribe:t,update:e}=Ge({animations:Ve,current:Ve[0]}),n=a=>{e(s=>s.current===a||!s.animations.find(i=>i===a)?s:{animations:s.animations,current:a})};function r(a,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===a?{...a,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function o(){e(({animations:a,current:s})=>{const l=Ve.find(i=>i.name===s.name);return{animations:a.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:o}}(),Le=function(){const{subscribe:t,update:e}=Ge(Hi.map(o=>({type:o,enabled:!1})));function n(o,a){e(s=>s.map(l=>l.type===o?{type:o,enabled:a}:l))}function r(){e(o=>o.map(a=>({...a,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function ot(t){let e=!0;const{subscribe:n,update:r}=Ge(void 0,s=>ae.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function o(s){r(l=>(e=!1,{...l,...s}))}function a(){r(()=>(e=!0,Ee(ae).current.defaultOptions[t]))}return{subscribe:n,change:o,reset:a}}const je=ot("image"),zi=ot("additionalImages"),re=ot("output"),Qe=Sn([je,zi,re,ae,Le],([t,e,n,r,o])=>({image:t,additionalImages:e,output:n,animation:r.current,effects:o})),Te=function(){const t=Ge({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new qi(s),running:!1,frame:0}))}function o(){const{animator:s}=Ee(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(Ee(Qe),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function a(s){const{animator:l,frame:i}=Ee(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=Ee(Qe);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:o,renderFrame:a}}();function Tt(t,{delay:e=0,duration:n=400,easing:r=mn}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*o}`}}function St(t){let e,n,r;const o=t[5].default,a=gn(o,t,t[4],null);return{c(){e=y("div"),a&&a.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=w(e);a&&a.l(l),l.forEach(b),this.h()},h(){d(e,"class","section__content svelte-v2pn2e")},m(s,l){P(s,e,l),a&&a.m(e,null),r=!0},p(s,l){a&&a.p&&(!r||l&16)&&hn(a,o,s,s[4],r?_n(o,s[4],l,null):pn(s[4]),null)},i(s){r||(E(a,s),vn(()=>{n||(n=st(e,Tt,{duration:250},!0)),n.run(1)}),r=!0)},o(s){M(a,s),n||(n=st(e,Tt,{duration:250},!1)),n.run(0),r=!1},d(s){s&&b(e),a&&a.d(s),s&&n&&n.end()}}}function Xi(t){let e,n,r,o,a=t[0]?"-":"+",s,l,i,u,f,c,g,p,h,m,$,C,v=t[0]&&St(t);return{c(){e=y("section"),n=y("header"),r=y("button"),o=L("["),s=L(a),l=L("]"),i=O(),u=y("h2"),f=L(t[1]),c=O(),g=y("button"),p=L("Reset"),h=O(),v&&v.c(),this.h()},l(T){e=x(T,"SECTION",{class:!0});var S=w(e);n=x(S,"HEADER",{class:!0});var q=w(n);r=x(q,"BUTTON",{class:!0,type:!0});var X=w(r);o=j(X,"["),s=j(X,a),l=j(X,"]"),X.forEach(b),i=A(q),u=x(q,"H2",{class:!0});var Y=w(u);f=j(Y,t[1]),Y.forEach(b),c=A(q),g=x(q,"BUTTON",{class:!0,type:!0});var V=w(g);p=j(V,"Reset"),V.forEach(b),q.forEach(b),h=A(S),v&&v.l(S),S.forEach(b),this.h()},h(){d(r,"class","section__expand svelte-v2pn2e"),d(r,"type","button"),d(u,"class","section__heading svelte-v2pn2e"),d(g,"class","section__reset svelte-v2pn2e"),d(g,"type","button"),d(n,"class","section__header svelte-v2pn2e"),d(e,"class","section svelte-v2pn2e")},m(T,S){P(T,e,S),_(e,n),_(n,r),_(r,o),_(r,s),_(r,l),_(n,i),_(n,u),_(u,f),_(n,c),_(n,g),_(g,p),_(e,h),v&&v.m(e,null),m=!0,$||(C=[oe(r,"click",t[3]),oe(u,"click",t[3]),oe(u,"keypress",t[3]),oe(g,"click",t[6])],$=!0)},p(T,[S]){(!m||S&1)&&a!==(a=T[0]?"-":"+")&&te(s,a),(!m||S&2)&&te(f,T[1]),T[0]?v?(v.p(T,S),S&1&&E(v,1)):(v=St(T),v.c(),E(v,1),v.m(e,null)):v&&(Be(),M(v,1,1,()=>{v=null}),Ne())},i(T){m||(E(v),m=!0)},o(T){M(v),m=!1},d(T){T&&b(e),v&&v.d(),$=!1,dn(C)}}}function Vi(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:a=""}=e,{expanded:s=!0}=e;const l=et();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,a=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,o=f.$$scope)},[s,a,l,i,o,r,u]}class Ue extends W{constructor(e){super(),J(this,e,Vi,Xi,K,{title:1,expanded:0})}}function Yi(t){let e,n,r,o,a,s,l,i;return{c(){e=y("label"),n=y("input"),r=O(),o=y("div"),a=y("img"),this.h()},l(u){e=x(u,"LABEL",{class:!0});var f=w(e);n=x(f,"INPUT",{class:!0,type:!0,accept:!0}),r=A(f),o=x(f,"DIV",{class:!0});var c=w(o);a=x(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(b),f.forEach(b),this.h()},h(){d(n,"class","image__input svelte-1me35do"),d(n,"type","file"),d(n,"accept","image/*"),d(a,"class","image__preview svelte-1me35do"),me(a.src,s=t[0].url)||d(a,"src",s),d(a,"alt","source"),d(o,"class","image__container svelte-1me35do"),d(e,"class","image svelte-1me35do")},m(u,f){P(u,e,f),_(e,n),_(e,r),_(e,o),_(o,a),l||(i=oe(n,"input",t[1]),l=!0)},p(u,f){f&1&&!me(a.src,s=u[0].url)&&d(a,"src",s)},d(u){u&&b(e),l=!1,i()}}}function Wi(t){let e,n;return e=new Ue({props:{title:"Image",expanded:!0,$$slots:{default:[Yi]},$$scope:{ctx:t}}}),e.$on("reset",je.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&5&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function Ji(t,e,n){let r;le(t,je,a=>n(0,r=a));function o(a){const l=a.target.files?.[0];l&&je.change({url:URL.createObjectURL(l)})}return[r,o]}class Ki extends W{constructor(e){super(),J(this,e,Ji,Wi,K,{})}}function Et(t){let e,n,r,o,a,s;return{c(){e=y("label"),n=L(t[1]),r=O(),o=y("input"),this.h()},l(l){e=x(l,"LABEL",{class:!0});var i=w(e);n=j(i,t[1]),r=A(i),o=x(i,"INPUT",{class:!0,type:!0}),i.forEach(b),this.h()},h(){d(o,"class","slider__text-input svelte-1h0gcvd"),d(o,"type","text"),o.value=t[0],d(e,"class","slider__label svelte-1h0gcvd")},m(l,i){P(l,e,i),_(e,n),_(e,r),_(e,o),a||(s=oe(o,"input",t[5]),a=!0)},p(l,i){i&2&&te(n,l[1]),i&1&&o.value!==l[0]&&(o.value=l[0])},d(l){l&&b(e),a=!1,s()}}}function Zi(t){let e,n,r,o,a=Me(t[2])+"",s,l,i,u,f,c,g=Me(t[3])+"",p,h,m,$=t[1]&&Et(t);return{c(){e=y("div"),$&&$.c(),n=O(),r=y("div"),o=y("span"),s=L(a),l=O(),i=y("div"),u=y("input"),f=O(),c=y("span"),p=L(g),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);$&&$.l(v),n=A(v),r=x(v,"DIV",{class:!0});var T=w(r);o=x(T,"SPAN",{class:!0});var S=w(o);s=j(S,a),S.forEach(b),l=A(T),i=x(T,"DIV",{class:!0});var q=w(i);u=x(q,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),q.forEach(b),f=A(T),c=x(T,"SPAN",{class:!0});var X=w(c);p=j(X,g),X.forEach(b),T.forEach(b),v.forEach(b),this.h()},h(){d(o,"class","slider__range slider__range--min svelte-1h0gcvd"),d(u,"class","slider__input svelte-1h0gcvd"),d(u,"type","range"),d(u,"min",t[2]),d(u,"max",t[3]),d(u,"step",t[4]),u.value=t[0],d(i,"class","slider__input-container svelte-1h0gcvd"),d(c,"class","slider__range slider__range--max"),d(r,"class","slider__container svelte-1h0gcvd"),d(e,"class","slider")},m(C,v){P(C,e,v),$&&$.m(e,null),_(e,n),_(e,r),_(r,o),_(o,s),_(r,l),_(r,i),_(i,u),_(r,f),_(r,c),_(c,p),h||(m=oe(u,"input",t[5]),h=!0)},p(C,[v]){C[1]?$?$.p(C,v):($=Et(C),$.c(),$.m(e,n)):$&&($.d(1),$=null),v&4&&a!==(a=Me(C[2])+"")&&te(s,a),v&4&&d(u,"min",C[2]),v&8&&d(u,"max",C[3]),v&16&&d(u,"step",C[4]),v&1&&(u.value=C[0]),v&8&&g!==(g=Me(C[3])+"")&&te(p,g)},i:ue,o:ue,d(C){C&&b(e),$&&$.d(),h=!1,m()}}}function Me(t){return t.toFixed(2).replace(/\.?0+$/,"")}function Qi(t,e,n){const r=et();let{label:o=""}=e,{min:a=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<a?a:(s-a)/2}=e;function u(f){const c=f.target,g=parseFloat(c.value);Number.isNaN(g)||(n(0,i=g),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,o=f.label),"min"in f&&n(2,a=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,o,a,s,l,u]}class fe extends W{constructor(e){super(),J(this,e,Qi,Zi,K,{label:1,min:2,max:3,step:4,value:0})}}function el(t){let e,n,r,o,a,s,l,i,u,f;return e=new fe({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new fe({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),a=new fe({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),a.$on("input",t[3]),l=new fe({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new fe({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){U(e.$$.fragment),n=O(),U(r.$$.fragment),o=O(),U(a.$$.fragment),s=O(),U(l.$$.fragment),i=O(),U(u.$$.fragment)},l(c){B(e.$$.fragment,c),n=A(c),B(r.$$.fragment,c),o=A(c),B(a.$$.fragment,c),s=A(c),B(l.$$.fragment,c),i=A(c),B(u.$$.fragment,c)},m(c,g){N(e,c,g),P(c,n,g),N(r,c,g),P(c,o,g),N(a,c,g),P(c,s,g),N(l,c,g),P(c,i,g),N(u,c,g),f=!0},p(c,g){const p={};g&1&&(p.value=c[0].width),e.$set(p);const h={};g&1&&(h.value=c[0].height),r.$set(h);const m={};g&1&&(m.value=c[0].delayMs),a.$set(m);const $={};g&1&&($.value=c[0].totalFrames),l.$set($);const C={};g&1&&(C.value=c[0].quality),u.$set(C)},i(c){f||(E(e.$$.fragment,c),E(r.$$.fragment,c),E(a.$$.fragment,c),E(l.$$.fragment,c),E(u.$$.fragment,c),f=!0)},o(c){M(e.$$.fragment,c),M(r.$$.fragment,c),M(a.$$.fragment,c),M(l.$$.fragment,c),M(u.$$.fragment,c),f=!1},d(c){G(e,c),c&&b(n),G(r,c),c&&b(o),G(a,c),c&&b(s),G(l,c),c&&b(i),G(u,c)}}}function tl(t){let e,n;return e=new Ue({props:{title:"Output",expanded:!0,$$slots:{default:[el]},$$scope:{ctx:t}}}),e.$on("reset",re.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function nl(t,e,n){let r;return le(t,re,u=>n(0,r=u)),[r,u=>re.change({width:u.detail.value}),u=>re.change({height:u.detail.value}),u=>re.change({delayMs:u.detail.value}),u=>re.change({totalFrames:u.detail.value}),u=>re.change({quality:u.detail.value})]}class rl extends W{constructor(e){super(),J(this,e,nl,tl,K,{})}}function ol(t){let e,n,r,o,a,s;return n=new Ki({}),o=new rl({}),{c(){e=y("aside"),U(n.$$.fragment),r=O(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=A(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),_(e,r),N(o,e,null),s=!0},p(l,[i]){(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",a)},i(l){s||(E(n.$$.fragment,l),E(o.$$.fragment,l),s=!0)},o(l){M(n.$$.fragment,l),M(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function al(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class sl extends W{constructor(e){super(),J(this,e,al,ol,K,{class:0})}}function il(t){let e,n,r,o,a,s,l;return{c(){e=y("div"),n=L(t[1]),r=O(),o=y("label"),a=y("input"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=j(u,t[1]),r=A(u),o=x(u,"LABEL",{class:!0});var f=w(o);a=x(f,"INPUT",{class:!0,type:!0}),f.forEach(b),u.forEach(b),this.h()},h(){d(a,"class","toggle__checkbox svelte-1j9rfin"),d(a,"type","checkbox"),a.checked=t[0],d(o,"class","toggle__label svelte-1j9rfin"),ie(o,"toggle__label--active",t[0]),d(e,"class","toggle svelte-1j9rfin")},m(i,u){P(i,e,u),_(e,n),_(e,r),_(e,o),_(o,a),s||(l=oe(a,"change",t[2]),s=!0)},p(i,[u]){u&2&&te(n,i[1]),u&1&&(a.checked=i[0]),u&1&&ie(o,"toggle__label--active",i[0])},i:ue,o:ue,d(i){i&&b(e),s=!1,l()}}}function ll(t,e,n){const r=et();let{label:o=""}=e,{value:a=!1}=e;function s(l){const i=l.target;n(0,a=Boolean(i.checked)),r("change",{value:a})}return t.$$set=l=>{"label"in l&&n(1,o=l.label),"value"in l&&n(0,a=l.value)},[a,o,s]}class at extends W{constructor(e){super(),J(this,e,ll,il,K,{label:1,value:0})}}function kt(t,e,n){const r=t.slice();return r[6]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[9]=e[n],r}function ul(t){let e,n;function r(...o){return t[4](t[9],...o)}return e=new at({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){M(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function cl(t){let e,n;function r(...o){return t[3](t[9],...o)}return e=new fe({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.min=t[9].min),a&2&&(s.max=t[9].max),a&2&&(s.step=t[9].step),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){M(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function At(t){let e,n,r,o;const a=[cl,ul],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=a[e](t)),{c(){n&&n.c(),r=he()},l(i){n&&n.l(i),r=he()},m(i,u){~e&&s[e].m(i,u),P(i,r,u),o=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(Be(),M(s[f],1,1,()=>{s[f]=null}),Ne()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=a[e](i),n.c()),E(n,1),n.m(r.parentNode,r)):n=null)},i(i){o||(E(n),o=!0)},o(i){M(n),o=!1},d(i){~e&&s[e].d(i),i&&b(r)}}}function fl(t){let e,n,r=t[1].current.editOptions,o=[];for(let s=0;s<r.length;s+=1)o[s]=At(Ot(t,r,s));const a=s=>M(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=he()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=he()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=Ot(s,r,i);o[i]?(o[i].p(u,l),E(o[i],1)):(o[i]=At(u),o[i].c(),E(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)M(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function Mt(t){let e,n;function r(...o){return t[5](t[6],...o)}return e=new at({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&4&&(s.label=t[6].type),a&4&&(s.value=t[6].enabled),e.$set(s)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){M(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function ml(t){let e,n,r=t[2],o=[];for(let s=0;s<r.length;s+=1)o[s]=Mt(kt(t,r,s));const a=s=>M(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=he()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=he()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=kt(s,r,i);o[i]?(o[i].p(u,l),E(o[i],1)):(o[i]=Mt(u),o[i].c(),E(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)E(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)M(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function dl(t){let e,n,r,o,a,s;return n=new Ue({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[fl]},$$scope:{ctx:t}}}),n.$on("reset",ae.resetEditOptions),o=new Ue({props:{title:"Effects",expanded:!0,$$slots:{default:[ml]},$$scope:{ctx:t}}}),o.$on("reset",Le.reset),{c(){e=y("aside"),U(n.$$.fragment),r=O(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=A(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),_(e,r),N(o,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),o.$set(f),(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",a)},i(l){s||(E(n.$$.fragment,l),E(o.$$.fragment,l),s=!0)},o(l){M(n.$$.fragment,l),M(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function gl(t,e,n){let r,o;le(t,ae,u=>n(1,r=u)),le(t,Le,u=>n(2,o=u));let{class:a=""}=e;const s=(u,f)=>ae.changeEditOptions(u,f.detail.value),l=(u,f)=>ae.changeEditOptions(u,f.detail.value),i=(u,f)=>Le.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,a=u.class)},[a,r,o,s,l,i]}class hl extends W{constructor(e){super(),J(this,e,gl,dl,K,{class:0})}}function Pt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Rt(t,e){let n,r,o,a,s,l,i=e[3].name+"",u,f,c,g;function p(){return e[2](e[3])}return{key:t,first:null,c(){n=y("button"),r=y("img"),s=O(),l=y("span"),u=L(i),f=O(),this.h()},l(h){n=x(h,"BUTTON",{type:!0,class:!0});var m=w(n);r=x(m,"IMG",{class:!0,src:!0,alt:!0}),s=A(m),l=x(m,"SPAN",{});var $=w(l);u=j($,i),$.forEach(b),f=A(m),m.forEach(b),this.h()},h(){d(r,"class","image svelte-1l1v01j"),me(r.src,o=`${pe}/demo-${e[3].name}.gif`)||d(r,"src",o),d(r,"alt",a=e[3].name),d(n,"type","button"),d(n,"class","option svelte-1l1v01j"),ie(n,"option--selected",e[3]===e[1].current),this.first=n},m(h,m){P(h,n,m),_(n,r),_(n,s),_(n,l),_(l,u),_(n,f),c||(g=oe(n,"click",p),c=!0)},p(h,m){e=h,m&2&&!me(r.src,o=`${pe}/demo-${e[3].name}.gif`)&&d(r,"src",o),m&2&&a!==(a=e[3].name)&&d(r,"alt",a),m&2&&i!==(i=e[3].name+"")&&te(u,i),m&2&&ie(n,"option--selected",e[3]===e[1].current)},d(h){h&&b(n),c=!1,g()}}}function pl(t){let e,n=[],r=new Map,o,a=t[1].animations;const s=l=>l[3].name;for(let l=0;l<a.length;l+=1){let i=Pt(t,a,l),u=s(i);r.set(u,n[l]=Rt(u,i))}return{c(){e=y("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(b),this.h()},h(){d(e,"class",o=ee(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){P(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(a=l[1].animations,n=bn(n,i,s,1,l,a,r,e,$n,Rt,null,Pt)),i&1&&o!==(o=ee(`container ${l[0]}`)+" svelte-1l1v01j")&&d(e,"class",o)},i:ue,o:ue,d(l){l&&b(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function _l(t,e,n){let r;le(t,ae,s=>n(1,r=s));let{class:o=""}=e;const a=s=>ae.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,o=s.class)},[o,r,a]}class vl extends W{constructor(e){super(),J(this,e,_l,pl,K,{class:0})}}function Ft(t){t[12]=t[13].dataUri}function It(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Cl,then:$l,catch:bl,value:13,error:14};return it(n=t[3],r),{c(){e=y("div"),r.block.c(),this.h()},l(o){e=x(o,"DIV",{class:!0});var a=w(e);r.block.l(a),a.forEach(b),this.h()},h(){d(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(o,a){P(o,e,a),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(o,a){t=o,r.ctx=t,a&8&&n!==(n=t[3])&&it(n,r)||xn(r,t,a)},d(o){o&&b(e),r.block.d(),r.token=null,r=null}}}function bl(t){let e,n,r=t[14]+"",o;return{c(){e=y("p"),n=L("An error has occurred: "),o=L(r),this.h()},l(a){e=x(a,"P",{class:!0});var s=w(e);n=j(s,"An error has occurred: "),o=j(s,r),s.forEach(b),this.h()},h(){d(e,"class","preview__error svelte-13qbjon")},m(a,s){P(a,e,s),_(e,n),_(e,o)},p(a,s){s&8&&r!==(r=a[14]+"")&&te(o,r)},d(a){a&&b(e)}}}function $l(t){Ft(t);let e,n,r,o,a,s,l;return{c(){e=y("div"),n=y("img"),o=O(),a=y("a"),s=L("Download"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=x(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(b),o=A(i),a=x(i,"A",{class:!0,download:!0,href:!0});var f=w(a);s=j(f,"Download"),f.forEach(b),this.h()},h(){d(n,"class","preview__image svelte-13qbjon"),me(n.src,r=t[12])||d(n,"src",r),d(n,"alt","generated gif"),d(e,"class","preview__image-container svelte-13qbjon"),d(a,"class","preview__download-button svelte-13qbjon"),d(a,"download","jumping_peter.gif"),d(a,"href",l=t[12])},m(i,u){P(i,e,u),_(e,n),P(i,o,u),P(i,a,u),_(a,s)},p(i,u){Ft(i),u&8&&!me(n.src,r=i[12])&&d(n,"src",r),u&8&&l!==(l=i[12])&&d(a,"href",l)},d(i){i&&b(e),i&&b(o),i&&b(a)}}}function Cl(t){let e,n,r,o,a,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,g,p,h,m,$;return{c(){e=y("div"),n=y("p"),r=L("Generating..."),o=O(),a=y("p"),s=L("["),i=L(l),u=L(" / "),c=L(f),g=L("]"),p=O(),h=y("progress"),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);n=x(v,"P",{});var T=w(n);r=j(T,"Generating..."),T.forEach(b),o=A(v),a=x(v,"P",{});var S=w(a);s=j(S,"["),i=j(S,l),u=j(S," / "),c=j(S,f),g=j(S,"]"),S.forEach(b),p=A(v),h=x(v,"PROGRESS",{class:!0,max:!0}),w(h).forEach(b),v.forEach(b),this.h()},h(){d(h,"class","preview__progress svelte-13qbjon"),d(h,"max",m=t[5].totalFrames),h.value=$=t[4].frame,d(e,"class","preview__loading svelte-13qbjon")},m(C,v){P(C,e,v),_(e,n),_(n,r),_(e,o),_(e,a),_(a,s),_(a,i),_(a,u),_(a,c),_(a,g),_(e,p),_(e,h)},p(C,v){v&16&&l!==(l=C[4].frame+"")&&te(i,l),v&32&&f!==(f=C[5].totalFrames+"")&&te(c,f),v&32&&m!==(m=C[5].totalFrames)&&d(h,"max",m),v&16&&$!==($=C[4].frame)&&(h.value=$)},d(C){C&&b(e)}}}function yl(t){let e,n,r,o,a,s,l,i,u,f,c,g;r=new at({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let p=!t[1]&&t[3]&&It(t);return f=new fe({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=y("main"),n=y("div"),U(r.$$.fragment),o=O(),p&&p.c(),a=O(),s=y("div"),l=y("div"),i=y("canvas"),u=O(),U(f.$$.fragment),this.h()},l(h){e=x(h,"MAIN",{class:!0});var m=w(e);n=x(m,"DIV",{class:!0});var $=w(n);B(r.$$.fragment,$),$.forEach(b),o=A(m),p&&p.l(m),a=A(m),s=x(m,"DIV",{class:!0});var C=w(s);l=x(C,"DIV",{class:!0});var v=w(l);i=x(v,"CANVAS",{class:!0,style:!0}),w(i).forEach(b),v.forEach(b),u=A(C),B(f.$$.fragment,C),C.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","preview__debug-input svelte-13qbjon"),d(i,"class","preview__image svelte-13qbjon"),Cn(i,"transform","scaleY(-1)"),d(l,"class","preview__image-container svelte-13qbjon"),d(s,"class","preview__container preview__container--debug svelte-13qbjon"),d(e,"class",c=ee(`preview ${t[0]}`)+" svelte-13qbjon"),ie(e,"preview--debug",t[1]),ie(e,"preview--no-debug",!t[1])},m(h,m){P(h,e,m),_(e,n),N(r,n,null),_(e,o),p&&p.m(e,null),_(e,a),_(e,s),_(s,l),_(l,i),t[9](i),_(s,u),N(f,s,null),g=!0},p(h,[m]){const $={};m&2&&($.value=h[1]),r.$set($),!h[1]&&h[3]?p?p.p(h,m):(p=It(h),p.c(),p.m(e,a)):p&&(p.d(1),p=null);const C={};m&32&&(C.max=h[5].totalFrames-1),m&16&&(C.value=h[4].frame),f.$set(C),(!g||m&1&&c!==(c=ee(`preview ${h[0]}`)+" svelte-13qbjon"))&&d(e,"class",c),(!g||m&3)&&ie(e,"preview--debug",h[1]),(!g||m&3)&&ie(e,"preview--no-debug",!h[1])},i(h){g||(E(r.$$.fragment,h),E(f.$$.fragment,h),g=!0)},o(h){M(r.$$.fragment,h),M(f.$$.fragment,h),g=!1},d(h){h&&b(e),G(r),p&&p.d(),t[9](null),G(f)}}}function xl(t,e,n){let r,o,a;le(t,Qe,m=>n(8,r=m)),le(t,Te,m=>n(4,o=m)),le(t,re,m=>n(5,a=m));let s,{class:l=""}=e,i=!1,u=null;function f(){Te.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=Te.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}yn(()=>{Te.changeCanvas(s),c()});function g(m){Te.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function p(m){n(1,i=m.detail.value)}function h(m){wn[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,o,a,g,p,r,h]}class wl extends W{constructor(e){super(),J(this,e,xl,yl,K,{class:0})}}function Tl(t){let e,n,r,o,a,s,l,i,u,f,c,g,p,h,m,$,C,v,T,S,q,X,Y,V,ne;return document.title=e=Se,$=new On({props:{class:"header"}}),v=new vl({props:{class:"animations"}}),S=new sl({props:{class:"common-options"}}),X=new hl({props:{class:"animation-options"}}),V=new wl({props:{class:"preview"}}),{c(){n=y("meta"),r=y("meta"),o=y("meta"),a=y("meta"),s=y("meta"),l=y("meta"),i=y("meta"),u=y("meta"),f=y("meta"),c=y("meta"),g=y("meta"),p=y("meta"),h=O(),m=y("div"),U($.$$.fragment),C=O(),U(v.$$.fragment),T=O(),U(S.$$.fragment),q=O(),U(X.$$.fragment),Y=O(),U(V.$$.fragment),this.h()},l(R){const D=Tn("svelte-2dqrj",document.head);n=x(D,"META",{name:!0,content:!0,class:!0}),r=x(D,"META",{name:!0,content:!0,class:!0}),o=x(D,"META",{property:!0,content:!0,class:!0}),a=x(D,"META",{property:!0,content:!0,class:!0}),s=x(D,"META",{property:!0,content:!0,class:!0}),l=x(D,"META",{property:!0,content:!0,class:!0}),i=x(D,"META",{property:!0,content:!0,class:!0}),u=x(D,"META",{property:!0,content:!0,class:!0}),f=x(D,"META",{property:!0,content:!0,class:!0}),c=x(D,"META",{property:!0,content:!0,class:!0}),g=x(D,"META",{property:!0,content:!0,class:!0}),p=x(D,"META",{property:!0,content:!0,class:!0}),D.forEach(b),h=A(R),m=x(R,"DIV",{class:!0});var Z=w(m);B($.$$.fragment,Z),C=A(Z),B(v.$$.fragment,Z),T=A(Z),B(S.$$.fragment,Z),q=A(Z),B(X.$$.fragment,Z),Y=A(Z),B(V.$$.fragment,Z),Z.forEach(b),this.h()},h(){d(n,"name","title"),d(n,"content",Se),d(n,"class","svelte-14fuh2n"),d(r,"name","description"),d(r,"content",Ke),d(r,"class","svelte-14fuh2n"),d(o,"property","og:type"),d(o,"content","website"),d(o,"class","svelte-14fuh2n"),d(a,"property","og:url"),d(a,"content",Dt),d(a,"class","svelte-14fuh2n"),d(s,"property","og:title"),d(s,"content",Se),d(s,"class","svelte-14fuh2n"),d(l,"property","og:description"),d(l,"content",Ke),d(l,"class","svelte-14fuh2n"),d(i,"property","og:image"),d(i,"content",Lt),d(i,"class","svelte-14fuh2n"),d(u,"property","twitter:card"),d(u,"content","summary_large_image"),d(u,"class","svelte-14fuh2n"),d(f,"property","twitter:url"),d(f,"content",Dt),d(f,"class","svelte-14fuh2n"),d(c,"property","twitter:title"),d(c,"content",Se),d(c,"class","svelte-14fuh2n"),d(g,"property","twitter:description"),d(g,"content",Ke),d(g,"class","svelte-14fuh2n"),d(p,"property","twitter:image"),d(p,"content",Lt),d(p,"class","svelte-14fuh2n"),d(m,"class","grid svelte-14fuh2n")},m(R,D){_(document.head,n),_(document.head,r),_(document.head,o),_(document.head,a),_(document.head,s),_(document.head,l),_(document.head,i),_(document.head,u),_(document.head,f),_(document.head,c),_(document.head,g),_(document.head,p),P(R,h,D),P(R,m,D),N($,m,null),_(m,C),N(v,m,null),_(m,T),N(S,m,null),_(m,q),N(X,m,null),_(m,Y),N(V,m,null),ne=!0},p(R,[D]){(!ne||D&0)&&e!==(e=Se)&&(document.title=e)},i(R){ne||(E($.$$.fragment,R),E(v.$$.fragment,R),E(S.$$.fragment,R),E(X.$$.fragment,R),E(V.$$.fragment,R),ne=!0)},o(R){M($.$$.fragment,R),M(v.$$.fragment,R),M(S.$$.fragment,R),M(X.$$.fragment,R),M(V.$$.fragment,R),ne=!1},d(R){b(n),b(r),b(o),b(a),b(s),b(l),b(i),b(u),b(f),b(c),b(g),b(p),R&&b(h),R&&b(m),G($),G(v),G(S),G(X),G(V)}}}const Se="Jumping Peter",Ke="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",Dt="https://ksmai.github.io/jumping-peter",Lt="https://ksmai.github.io/jumping-peter/favicon.png";class kl extends W{constructor(e){super(),J(this,e,null,Tl,K,{})}}export{kl as default};
