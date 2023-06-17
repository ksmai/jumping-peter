import{S as Y,i as W,n as J,j as y,s as k,q as I,k as x,l as w,c as O,r as D,g as b,m as d,J as me,K as ee,a as P,G as p,H as le,L as Ee,M as fn,N as re,u as te,f as S,v as Be,b as A,d as Ne,O as mn,P as et,C as dn,D as gn,E as hn,F as _n,Q as pn,R as st,y as U,z as B,A as N,B as G,I as ie,T as se,e as he,U as jt,V as vn,W as bn,p as $n,o as Cn,X as it,Y as yn,w as xn,Z as wn}from"../chunks/index.a9aa9141.js";import{b as _e,w as Ge,d as Tn}from"../chunks/paths.4e251b9f.js";function En(t){let e,n,r,o,a,s,l,i,u,f,c,g,_;return{c(){e=y("header"),n=y("img"),o=k(),a=y("h1"),s=I("Jumping Peter"),l=k(),i=y("p"),u=I("generate gif emojis"),f=k(),c=y("a"),g=I("Contribute"),this.h()},l(h){e=x(h,"HEADER",{class:!0});var m=w(e);n=x(m,"IMG",{class:!0,src:!0,alt:!0}),o=O(m),a=x(m,"H1",{class:!0});var $=w(a);s=D($,"Jumping Peter"),$.forEach(b),l=O(m),i=x(m,"P",{class:!0});var C=w(i);u=D(C,"generate gif emojis"),C.forEach(b),f=O(m),c=x(m,"A",{class:!0,href:!0,target:!0,rel:!0});var v=w(c);g=D(v,"Contribute"),v.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","logo svelte-bal6b7"),me(n.src,r=`${_e}/demo-jumping.gif`)||d(n,"src",r),d(n,"alt",""),d(a,"class","title svelte-bal6b7"),d(i,"class","subtitle svelte-bal6b7"),d(c,"class","contribute svelte-bal6b7"),d(c,"href","https://github.com/ksmai/jumping-peter"),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(e,"class",_=ee(`header ${t[0]}`)+" svelte-bal6b7")},m(h,m){P(h,e,m),p(e,n),p(e,o),p(e,a),p(a,s),p(e,l),p(e,i),p(i,u),p(e,f),p(e,c),p(c,g)},p(h,[m]){m&1&&_!==(_=ee(`header ${h[0]}`)+" svelte-bal6b7")&&d(e,"class",_)},i:le,o:le,d(h){h&&b(e)}}}function Sn(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class kn extends Y{constructor(e){super(),W(this,e,Sn,En,J,{class:0})}}function pe(t){return{...t,type:"slider",min:-360,max:360,step:1}}function ue(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function z(t){return{...t,type:"slider",min:0,max:1,step:.01}}function On(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function Se(t){return{...t,type:"slider",min:0,max:2,step:.01}}function Fe(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Ie(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function lt(t){return{...t,type:"slider",min:-1,max:1,step:1}}function fe(t){return{...t,type:"slider",min:1,max:100,step:1}}function An(t){return{...t,type:"slider",min:1,max:5,step:1}}function ke(t){return{...t,type:"toggle"}}function Mn(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const M={image:{url:`${_e}/favicon.png`},additionalImages:{urls:[]},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function L(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ve(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function H(t,e,n){Ut(t,e,n,0)}function Pn(t,e,n){const r=t[0],o=t[4],a=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*o,t[9]+=n*a,t[13]+=n*s}function Ut(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function de(t,e){tt(t,e,[0,0,1])}function tt(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const o=n[0]/r,a=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*o*o+i,(1-i)*o*a+u*s,(1-i)*o*s-u*a,0,(1-i)*o*a-u*s,(1-i)*a*a+i,(1-i)*a*s-u*o,0,(1-i)*o*s+u*a,(1-i)*a*s-u*o,(1-i)*s*s+i,0,0,0,0,1];nt(t,f)}function Bt(t,e,n,r){Ut(t,-e[0],-e[1],-e[2]);const o=[-n[0],-n[1],-n[2]];ut(o);const a=ct(r,o);ut(a);const s=ct(o,a),l=[a[0],s[0],o[0],0,a[1],s[1],o[1],0,a[2],s[2],o[2],0,0,0,0,1];nt(t,l)}function Nt(t,e,n,r,o,a,s){const l=[2*a/(n-e),0,0,0,0,2*a/(o-r),0,0,(n+e)/(n-e),(o+r)/(o-r),-(s+a)/(s-a),-1,0,0,-2*s*a/(s-a),0];nt(t,l)}function nt(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let o=0;o<=3;++o){const a=4*r+o;t[a]=0;for(let s=0;s<=3;++s)t[a]+=e[4*s+o]*n[4*r+s]}}function ut(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function F(t,e,n){return t+(e-t)*n}function be(t){return t*Math.PI/180}function ft(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function Pe(t,e){return Math.sin(t*e)*43758.5453%1}function Gt(t){return Pe(t,127.1)}function Rn(t){return[Pe(t,127.1),Pe(t,269.5),Pe(t,631.2)]}function Fn(t){return e=>1-Math.pow(1-e,t)}function Ht(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const Re=Ht(3),qt=Fn(2);function mt(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const In="spinning",Dn={...M,output:{...M.output,delayMs:50,totalFrames:15}},Ln=[pe({name:"startAngle",value:0}),pe({name:"endAngle",value:360}),ue({name:"originX",value:0}),ue({name:"originY",value:0}),ke({name:"alternates",value:!1})];function Xt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{alternates:a,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:o,getUniforms:c=>{const g=a?Math.min(c,1-c)*2:c,_=F(s,l,g),h=L();return H(h,-i,-u),de(h,_),H(h,i,u),{u_model:h}}}]}const jn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Xt,defaultOptions:Dn,editOptions:Ln,name:In},Symbol.toStringTag,{value:"Module"})),Un="expanding",Bn={...M,output:{...M.output,delayMs:50,totalFrames:20}},Nn=[Ie({name:"minScale",value:1}),Ie({name:"maxScale",value:2}),ke({name:"alternates",value:!1})];function zt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{minScale:a,maxScale:s,alternates:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=F(a,s,f),g=L();return ve(g,c,c),{u_model:g}}}]}const Gn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:zt,defaultOptions:Bn,editOptions:Nn,name:Un},Symbol.toStringTag,{value:"Module"})),Hn="extreme-speed",qn={...M,output:{...M.output,delayMs:20,totalFrames:10}},Xn=[lt({name:"directionX",value:-1}),lt({name:"directionY",value:0})];function Vt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("sudoku"),{directionX:a,directionY:s}=n,l=a*2,i=s*2;return[{program:r,geometry:o,getUniforms:f=>{const c=L(),g=F(0,l,f),_=F(0,i,f);return H(c,g,_),{u_model:c}}}]}const zn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:qn,editOptions:Xn,name:Hn},Symbol.toStringTag,{value:"Module"})),Vn="excited",Yn={...M,output:{...M.output,delayMs:50,totalFrames:25}},Wn=[pe({name:"angle",value:15}),Fe({name:"startOffset",value:-.2}),Fe({name:"endOffset",value:.2}),fe({name:"cycles",value:3})];function Yt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{angle:a,cycles:s,startOffset:l,endOffset:i}=n,u=be(a),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:o,getUniforms:_=>{const h=_*2*s%1,m=Math.min(h,1-h)*2,$=F(-l*c,-i*c,m),C=F(l*f,i*f,m),v=L();return de(v,a),H(v,$,C),ve(v,_>.5?-1:1,1),{u_model:v}}}]}const Jn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:Yn,editOptions:Wn,name:Vn},Symbol.toStringTag,{value:"Module"})),Kn="jumping",Zn={...M,output:{...M.output,delayMs:50,totalFrames:20}},Qn=[Se({name:"maxOffset",value:1.2}),z({name:"compressTime",value:.4}),z({name:"maxCompress",value:.3})];function Wt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffset:a,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=L(),g=f/(1-s);if(g<1){const _=(1-g*g)*a;H(c,0,_)}else{const _=(1-f)/s,m=1-(1-_*_)*l;H(c,0,1),ve(c,1/m,m),H(c,0,-1)}return{u_model:c}}}]}const er=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:Zn,editOptions:Qn,name:Kn},Symbol.toStringTag,{value:"Module"})),tr="tower",nr={...M,output:{...M.output,delayMs:40,totalFrames:20}},rr=[pe({name:"startAngle",value:20}),pe({name:"endAngle",value:-45}),z({name:"startTime",value:.5})];function Jt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("tower"),{startAngle:a,endAngle:s,startTime:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=L();if(u<l){const c=u/l,g=Math.min(c,1-c)*2,_=F(0,a,g);de(f,_)}else{const c=(u-l)/(1-l),g=Math.min(c,1-c)*2,_=F(0,s,g);if(de(f,_),c>.5){const h=be(_),m=Math.cos(h),$=Math.sin(h),C=(c-.5)*2,v=F(0,-2*$,C),T=F(0,2*m,C);H(f,v,T)}}return{u_model:f}}}]}const or=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:nr,editOptions:rr,name:tr},Symbol.toStringTag,{value:"Module"})),ar="repeated",sr={...M,output:{...M.output,delayMs:60,totalFrames:15}},ir=[Ie({name:"initialScale",value:.1}),ke({name:"horizontal",value:!1})];function Kt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{initialScale:a,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=g=>{const _=L(),h=Re(g),m=F(a,1,h);return ve(_,m,m),{u_model:_}},f=g=>{const _=L(),h=Re(g),m=F(0,l.endX,h),$=F(0,l.endY,h);return H(_,m,$),{u_model:_}},c=g=>{const _=L(),h=Re(g),m=F(0,i.endX,h),$=F(0,i.endY,h);return H(_,m,$),{u_model:_}};return[{program:r,geometry:o,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const lr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:sr,editOptions:ir,name:ar},Symbol.toStringTag,{value:"Module"})),ur="mirror",cr={...M,output:{...M.output,delayMs:50,totalFrames:16}},fr=[ke({name:"rightHalf",value:!1})];function Zt(t,e,n){const r=t.createProgram("default"),{rightHalf:o}=n,a=e.createGeometry(o?"rightHalf":"leftHalf");return[{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=L(),c=mt(u),g=F(-2,-1,c);return o||ve(f,-1,1),H(f,g,0),{u_model:f}}},{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=L(),c=mt(u),g=F(2,1,c);return o&&ve(f,-1,1),H(f,g,0),{u_model:f}}}]}const mr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:cr,editOptions:fr,name:ur},Symbol.toStringTag,{value:"Module"})),dr="panic",gr={...M,output:{...M.output,delayMs:30,totalFrames:16}},hr=[Se({name:"maxOffsetX",value:.15}),Se({name:"maxOffsetY",value:.15})];function Qt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffsetX:a,maxOffsetY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=ft(i+.123),f=ft(i*2+1),c=F(-a,a,u),g=F(-s,s,f),_=L();return H(_,c,g),{u_model:_}}}]}const _r=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Qt,defaultOptions:gr,editOptions:hr,name:dr},Symbol.toStringTag,{value:"Module"})),pr="rotating",vr={...M,output:{...M.output,delayMs:40,totalFrames:25}},br=[ue({name:"axisX",value:0}),ue({name:"axisY",value:1}),ue({name:"axisZ",value:0}),ue({name:"originX",value:0}),ue({name:"originY",value:0}),An({name:"easing",value:1}),ke({name:"alternates",value:!1})];function en(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{axisX:a,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,g=[a,s,l],_=Ht(f);return[{program:r,geometry:o,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,C=_($),v=F(0,360,C),T=L();H(T,-i,-u),tt(T,v,g),H(T,i,u);const E=L();Bt(E,[0,0,3],[0,0,-1],[0,1,0]);const q=L();return Nt(q,-.03,.03,-.03,.03,.1,6),{u_model:T,u_view:E,u_projection:q,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(be(5)),"u_spotLight.outerCos":Math.cos(be(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const $r=Object.freeze(Object.defineProperty({__proto__:null,createSprites:en,defaultOptions:vr,editOptions:br,name:pr},Symbol.toStringTag,{value:"Module"})),Cr="party",yr={...M,output:{...M.output,delayMs:40,totalFrames:15}},xr=[pe({name:"angle",value:10}),Fe({name:"startOffset",value:-.3}),Fe({name:"endOffset",value:.5})];function tn(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{angle:a,startOffset:s,endOffset:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,g=Re(f),_=qt(c),h=u<.5?F(0,180,g):F(180,360,g),m=F(s,l,_),$=L();de($,a),H($,0,m),tt($,h,[0,1,0]);const C=L();Bt(C,[0,0,3],[0,0,-1],[0,1,0]);const v=L();return Nt(v,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:C,u_projection:v,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(be(5)),"u_spotLight.outerCos":Math.cos(be(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const wr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:tn,defaultOptions:yr,editOptions:xr,name:Cr},Symbol.toStringTag,{value:"Module"})),Tr="parrot",Er={...M,output:{...M.output,delayMs:20,totalFrames:18}},Sr=[Ie({name:"amplitudeX",value:.6}),Se({name:"amplitudeY",value:.5})];function nn(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{amplitudeX:a,amplitudeY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=F(-a,a,u),c=Math.sin(i*2*Math.PI)*.5+.5,g=F(-s,0,c),_=L();return H(_,0,1),Pn(_,f,0),H(_,0,-1+g),{u_model:_}}}]}const kr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:nn,defaultOptions:Er,editOptions:Sr,name:Tr},Symbol.toStringTag,{value:"Module"})),Or="wiggling",Ar={...M,output:{...M.output,delayMs:50,totalFrames:15}},Mr=[fe({name:"frequency",value:3}),Se({name:"amplitude",value:.05})];function rn(t,e,n){const r=t.createProgram("wiggling"),o=e.createGeometry("full"),{frequency:a,amplitude:s}=n;return[{program:r,geometry:o,getUniforms:i=>({u_model:L(),u_time:i,u_amplitude:s,u_frequency:a})}]}const Pr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:rn,defaultOptions:Ar,editOptions:Mr,name:Or},Symbol.toStringTag,{value:"Module"})),Rr="petrified",Fr={...M,additionalImages:{urls:[`${_e}/stone.jpg`]},output:{...M.output,delayMs:150,totalFrames:20}},Ir=[z({name:"edgeThreshold",value:.2}),z({name:"edgeDarkness",value:.3}),z({name:"timeBeforeCrack",value:.4}),z({name:"timeBeforeShatter",value:.1}),fe({name:"seed",value:26}),z({name:"maxHorizontalVelocity",value:1}),z({name:"maxVerticalVelocity",value:1}),z({name:"maxAngularVelocity",value:1}),z({name:"maxAcceleration",value:1}),fe({name:"shatterColumns",value:4}),fe({name:"shatterRows",value:4})];function on(t,e,n){const r=t.createProgram("petrified"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeShatter:i,seed:u,maxHorizontalVelocity:f,maxVerticalVelocity:c,maxAngularVelocity:g,maxAcceleration:_,shatterColumns:h,shatterRows:m}=n;return Array(h*m).fill(null).map(($,C)=>({program:r,geometry:o,getUniforms(v){const T=L();if(v>l+i){const j=(v-l-i)/(1-l-i);let[K,V,Z]=Rn(C+u*.761+1),R=Gt(Z);K=K*f*1,V=V*c*3,R=R*360*g*.2,Z=-Math.abs(Z*_*30),de(T,R*j),H(T,K*j,V*j+.5*Z*j*j)}const E=C%h,q=Math.floor(C/h);return{u_model:T,u_edgeThreshold:a,u_edgeDarkness:s,u_time:v,u_seed:u,u_timeBeforeCrack:l,u_timeBeforeShatter:i,u_shatterColumns:h,u_shatterRows:m,u_column:E,u_row:q}}}))}const Dr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:on,defaultOptions:Fr,editOptions:Ir,name:Rr},Symbol.toStringTag,{value:"Module"})),Lr="petrified-broken",jr={...M,additionalImages:{urls:[`${_e}/stone.jpg`]},output:{...M.output,delayMs:150,totalFrames:20}},Ur=[z({name:"edgeThreshold",value:.2}),z({name:"edgeDarkness",value:.3}),z({name:"timeBeforeCrack",value:.4}),z({name:"timeBeforeBreak",value:.6}),fe({name:"crackSegments",value:4}),On({name:"maxCrackMovement",value:.2}),z({name:"crackWidth",value:.1}),fe({name:"seed",value:26})];function an(t,e,n){const r=t.createProgram("petrifiedBroken"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeBreak:i,crackSegments:u,maxCrackMovement:f,crackWidth:c,seed:g}=n;return Array(2).fill(null).map((_,h)=>({program:r,geometry:o,getUniforms(m){const $=L();if(m>i){const C=Gt(h+g*.761+1)*10+80,v=(m-i)/(1-i);H($,0,1),de($,qt(v)*C*(1-h*2)),H($,0,-1)}return{u_model:$,u_edgeThreshold:a,u_edgeDarkness:s,u_seed:g,u_time:m,u_timeBeforeCrack:l,u_timeBeforeBreak:i,u_crackSegments:u,u_maxCrackMovement:f,u_crackWidth:c,u_i:h}}}))}const Br=Object.freeze(Object.defineProperty({__proto__:null,createSprites:an,defaultOptions:jr,editOptions:Ur,name:Lr},Symbol.toStringTag,{value:"Module"})),Ve=[er,zn,jn,Jn,Gn,or,lr,mr,_r,$r,wr,kr,Pr,Dr,Br];function dt(t,e,n){const r=Mn(n.editOptions);switch(n.name){case"spinning":return Xt(t,e,r);case"expanding":return zt(t,e,r);case"extreme-speed":return Vt(t,e,r);case"excited":return Yt(t,e,r);case"jumping":return Wt(t,e,r);case"tower":return Jt(t,e,r);case"repeated":return Kt(t,e,r);case"mirror":return Zt(t,e,r);case"panic":return Qt(t,e,r);case"rotating":return en(t,e,r);case"party":return tn(t,e,r);case"parrot":return nn(t,e,r);case"wiggling":return rn(t,e,r);case"petrified":return on(t,e,r);case"petrified-broken":return an(t,e,r);default:(o=>{throw new Error(`Unknown animation: ${JSON.stringify(o)}`)})(n)}}var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nr=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,Gr=Nr,Hr=Gr,qr=typeof self=="object"&&self&&self.Object===Object&&self,Xr=Hr||qr||Function("return this")(),He=Xr,zr=He,Vr=zr.Symbol,sn=Vr,gt=sn,ln=Object.prototype,Yr=ln.hasOwnProperty,Wr=ln.toString,xe=gt?gt.toStringTag:void 0;function Jr(t){var e=Yr.call(t,xe),n=t[xe];try{t[xe]=void 0;var r=!0}catch{}var o=Wr.call(t);return r&&(e?t[xe]=n:delete t[xe]),o}var Kr=Jr,Zr=Object.prototype,Qr=Zr.toString;function eo(t){return Qr.call(t)}var to=eo,ht=sn,no=Kr,ro=to,oo="[object Null]",ao="[object Undefined]",_t=ht?ht.toStringTag:void 0;function so(t){return t==null?t===void 0?ao:oo:_t&&_t in Object(t)?no(t):ro(t)}var io=so;function lo(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var un=lo,uo=io,co=un,fo="[object AsyncFunction]",mo="[object Function]",go="[object GeneratorFunction]",ho="[object Proxy]";function _o(t){if(!co(t))return!1;var e=uo(t);return e==mo||e==go||e==fo||e==ho}var po=_o,vo=He,bo=vo["__core-js_shared__"],$o=bo,Ye=$o,pt=function(){var t=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Co(t){return!!pt&&pt in t}var yo=Co,xo=Function.prototype,wo=xo.toString;function To(t){if(t!=null){try{return wo.call(t)}catch{}try{return t+""}catch{}}return""}var Eo=To,So=po,ko=yo,Oo=un,Ao=Eo,Mo=/[\\^$.*+?()[\]{}|]/g,Po=/^\[object .+?Constructor\]$/,Ro=Function.prototype,Fo=Object.prototype,Io=Ro.toString,Do=Fo.hasOwnProperty,Lo=RegExp("^"+Io.call(Do).replace(Mo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jo(t){if(!Oo(t)||ko(t))return!1;var e=So(t)?Lo:Po;return e.test(Ao(t))}var Uo=jo;function Bo(t,e){return t?.[e]}var No=Bo,Go=Uo,Ho=No;function qo(t,e){var n=Ho(t,e);return Go(n)?n:void 0}var rt=qo,Xo=rt,zo=Xo(Object,"create"),qe=zo,vt=qe;function Vo(){this.__data__=vt?vt(null):{},this.size=0}var Yo=Vo;function Wo(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Jo=Wo,Ko=qe,Zo="__lodash_hash_undefined__",Qo=Object.prototype,ea=Qo.hasOwnProperty;function ta(t){var e=this.__data__;if(Ko){var n=e[t];return n===Zo?void 0:n}return ea.call(e,t)?e[t]:void 0}var na=ta,ra=qe,oa=Object.prototype,aa=oa.hasOwnProperty;function sa(t){var e=this.__data__;return ra?e[t]!==void 0:aa.call(e,t)}var ia=sa,la=qe,ua="__lodash_hash_undefined__";function ca(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=la&&e===void 0?ua:e,this}var fa=ca,ma=Yo,da=Jo,ga=na,ha=ia,_a=fa;function $e(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$e.prototype.clear=ma;$e.prototype.delete=da;$e.prototype.get=ga;$e.prototype.has=ha;$e.prototype.set=_a;var pa=$e;function va(){this.__data__=[],this.size=0}var ba=va;function $a(t,e){return t===e||t!==t&&e!==e}var Ca=$a,ya=Ca;function xa(t,e){for(var n=t.length;n--;)if(ya(t[n][0],e))return n;return-1}var Xe=xa,wa=Xe,Ta=Array.prototype,Ea=Ta.splice;function Sa(t){var e=this.__data__,n=wa(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ea.call(e,n,1),--this.size,!0}var ka=Sa,Oa=Xe;function Aa(t){var e=this.__data__,n=Oa(e,t);return n<0?void 0:e[n][1]}var Ma=Aa,Pa=Xe;function Ra(t){return Pa(this.__data__,t)>-1}var Fa=Ra,Ia=Xe;function Da(t,e){var n=this.__data__,r=Ia(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var La=Da,ja=ba,Ua=ka,Ba=Ma,Na=Fa,Ga=La;function Ce(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ce.prototype.clear=ja;Ce.prototype.delete=Ua;Ce.prototype.get=Ba;Ce.prototype.has=Na;Ce.prototype.set=Ga;var Ha=Ce,qa=rt,Xa=He,za=qa(Xa,"Map"),Va=za,bt=pa,Ya=Ha,Wa=Va;function Ja(){this.size=0,this.__data__={hash:new bt,map:new(Wa||Ya),string:new bt}}var Ka=Ja;function Za(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Qa=Za,es=Qa;function ts(t,e){var n=t.__data__;return es(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ze=ts,ns=ze;function rs(t){var e=ns(this,t).delete(t);return this.size-=e?1:0,e}var os=rs,as=ze;function ss(t){return as(this,t).get(t)}var is=ss,ls=ze;function us(t){return ls(this,t).has(t)}var cs=us,fs=ze;function ms(t,e){var n=fs(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var ds=ms,gs=Ka,hs=os,_s=is,ps=cs,vs=ds;function ye(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ye.prototype.clear=gs;ye.prototype.delete=hs;ye.prototype.get=_s;ye.prototype.has=ps;ye.prototype.set=vs;var bs=ye,$s="__lodash_hash_undefined__";function Cs(t){return this.__data__.set(t,$s),this}var ys=Cs;function xs(t){return this.__data__.has(t)}var ws=xs,Ts=bs,Es=ys,Ss=ws;function De(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Ts;++e<n;)this.add(t[e])}De.prototype.add=De.prototype.push=Es;De.prototype.has=Ss;var ks=De;function Os(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var As=Os;function Ms(t){return t!==t}var Ps=Ms;function Rs(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}var Fs=Rs,Is=As,Ds=Ps,Ls=Fs;function js(t,e,n){return e===e?Ls(t,e,n):Is(t,Ds,n)}var Us=js,Bs=Us;function Ns(t,e){var n=t==null?0:t.length;return!!n&&Bs(t,e,0)>-1}var Gs=Ns;function Hs(t,e,n){for(var r=-1,o=t==null?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}var qs=Hs;function Xs(t,e){return t.has(e)}var zs=Xs,Vs=rt,Ys=He,Ws=Vs(Ys,"Set"),Js=Ws;function Ks(){}var Zs=Ks;function Qs(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var cn=Qs,We=Js,ei=Zs,ti=cn,ni=1/0,ri=We&&1/ti(new We([,-0]))[1]==ni?function(t){return new We(t)}:ei,oi=ri,ai=ks,si=Gs,ii=qs,li=zs,ui=oi,ci=cn,fi=200;function mi(t,e,n){var r=-1,o=si,a=t.length,s=!0,l=[],i=l;if(n)s=!1,o=ii;else if(a>=fi){var u=e?null:ui(t);if(u)return ci(u);s=!1,o=li,i=new ai}else i=e?[]:l;e:for(;++r<a;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var g=i.length;g--;)if(i[g]===c)continue e;e&&i.push(c),l.push(f)}else o(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var di=mi,gi=di;function hi(t){return t&&t.length?gi(t):[]}var _i=hi;class Je{constructor(e,n){this.gl=e,this.unit=n}loadingUrl=null;url=null;texture=null;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),o=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:a}=this;this.texture&&a.deleteTexture(this.texture);const s=a.createTexture();if(!s)throw new Error("Failed to create texture");a.activeTexture(a.TEXTURE0+this.unit),a.bindTexture(a.TEXTURE_2D,s),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,o),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class $t{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const ae=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,Ae=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,pi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    outColor = texture(u_image, v_texCoords);
}
`,vi=`#version 300 es

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
`,bi=`#version 300 es
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
`,$i=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = 1.0 - outColor.rgb;
}
`,Ci=`#version 300 es
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
`,yi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  vec4 texel = texture(u_image, v_texCoords);
  outColor = vec4(u_weights * texel.rgb, texel.a);
}
`,xi=`#version 300 es
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
`,wi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,Ti=`#version 300 es
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
`,Ei=`#version 300 es
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
`,Si=`#version 300 es
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
`,ki=`#version 300 es
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
`,Oi=`#version 300 es
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
  if (neighborInt.x < 0.0 || neighborInt.x >= u_shatterColumns || neighborInt.y < 0.0 || neighborInt.y >= u_shatterRows) {
    return 20.0;
  }
  vec2 point = random2(neighborInt + u_seed);
  vec2 diff = neighbor + point - uvFract;
  return length(diff);

}

float getAlpha() {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);

  float currentDist = worleyDist(vec2(u_column, u_row) - uvInt);
  float minDist = u_shatterColumns + u_shatterRows;
  for (int c = -1; c <= 1; ++c) {
    for (int r = -1; r <= 1; ++r) {
      vec2 neighbor = vec2(float(c), float(r));
      if (uvInt + neighbor == vec2(u_column, u_row)) {
        continue;
      }
      float dist = worleyDist(neighbor);
      if (dist < currentDist) {
        return 0.0;
      }
      minDist = min(minDist, dist);
    }
  }

  if (minDist - currentDist < 0.07) {
    if (u_time > u_timeBeforeCrack) {
      return 1.0 - smoothstep(u_timeBeforeCrack, u_timeBeforeCrack + u_timeBeforeShatter, u_time);
    }
  }

  return 1.0;
}


void main() {
  float petrifiedPercent = u_time / u_timeBeforeCrack;
  float alpha = getAlpha();
  if ((1.0 - v_texCoords.y) < petrifiedPercent) {
    outColor = texture(u_additionalImages[0], v_texCoords);
    if (isEdge()) {
      outColor.rgb *= 1.0 - u_edgeDarkness;
    }
    vec4 texel = texture(u_image, v_texCoords);
    outColor.a = texel.a * alpha;
  } else {
    outColor = texture(u_image, v_texCoords);
    outColor.a *= alpha;
  }
}
`,Ai=`#version 300 es
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
  float isPetrified = float((1.0 - v_texCoords.y) < petrifiedPercent);
  outColor = isPetrified * texture(u_additionalImages[0], v_texCoords) + (1.0 - isPetrified) * texel;
  outColor.rgb *= 1.0 - u_edgeDarkness * isPetrified * float(isEdge());
  outColor.a = texel.a * getAlpha();
}
`,Ct={default:{vertex:Ae,fragment:pi},default3d:{vertex:vi,fragment:bi},wiggling:{vertex:Ae,fragment:Ci},petrified:{vertex:Ae,fragment:Oi},petrifiedBroken:{vertex:Ae,fragment:Ai},invert:{vertex:ae,fragment:$i},kernel:{vertex:ae,fragment:Ti},gradient2:{vertex:ae,fragment:Ei},gradient8:{vertex:ae,fragment:Si},contrast:{vertex:ae,fragment:wi},bloom:{vertex:ae,fragment:ki},mix:{vertex:ae,fragment:yi},vignette:{vertex:ae,fragment:xi}};class Mi{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:Pi(this.gl,Ct[e].vertex,Ct[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Ze(t,e,n){for(const[r,o]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const a=e.uniformLocations[r];/image/i.test(r)&&typeof o=="number"?t.uniform1i(a,o):Array.isArray(o)?o.length===2?t.uniform2fv(a,o):o.length===3?t.uniform3fv(a,o):o.length===4?t.uniform4fv(a,o):o.length===9?t.uniformMatrix3fv(a,!1,o):o.length===16&&t.uniformMatrix4fv(a,!1,o):typeof o=="number"?t.uniform1f(a,o):typeof o=="boolean"&&t.uniform1i(a,o?1:0)}}function Pi(t,e,n){const r=yt(t,t.VERTEX_SHADER,e);let o;try{o=yt(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const a=t.createProgram();if(a===null)throw t.deleteShader(o),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),t.detachShader(a,o),t.detachShader(a,r),t.deleteShader(o),t.deleteShader(r),!t.getProgramParameter(a,t.LINK_STATUS)){const s=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`Failed to link program: ${s}`)}return a}function yt(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${o}`)}return r}function Ri(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let o,a;for(const s of n){o!==s.program&&(t.useProgram(s.program.program),o=s.program),a!==s.geometry&&(t.bindVertexArray(s.geometry.vao),a=s.geometry);const l=s.getUniforms(e);Ze(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Ze(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const ge={a_position:0,a_texCoords:1,a_normal:2};function Fi(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(ge.a_position),t.vertexAttribPointer(ge.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(ge.a_texCoords),t.vertexAttribPointer(ge.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(ge.a_normal),t.vertexAttribPointer(ge.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const Ii={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class Di{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=Fi(this.gl,Ii[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const Li=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],xt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_weights:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"mix",uniforms:{u_weights:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function wt(t,e){return e.map(n=>({program:t.createProgram(xt[n].program),uniforms:xt[n].uniforms}))}class ji{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new Mi(this.gl),this.geometryFactory=new Di(this.gl),this.texture=new Je(this.gl,0),this.additionalTextures=[new Je(this.gl,3),new Je(this.gl,4)],this.renderTextures=[new $t(this.gl,1),new $t(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;additionalTextures;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,o)=>{const a=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:o,frame:0,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:a,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;a.onmessage=c=>{const g=c.data;let _;switch(g.type){case"Ready":s.workerReady=!0,_={type:"Init",width:l,height:i,delayMs:u,quality:f},a.postMessage(_);break;case"FrameAdded":n();break;case"Success":this.resolve(g.dataUri);break;case"Failure":this.reject(g.error);break;default:(h=>{this.reject(`Cannot handle worker message: ${JSON.stringify(g)}`)})()}},a.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,o)=>{const a={type:"frame",request:e,resolve:r,reject:o,frame:n,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(a)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:o,sprites:a,effects:s,frame:l}=e,{image:i,additionalImages:u,output:f}=r;if(!(l>=f.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await Promise.all([this.texture.loadImage(i.url),...this.additionalTextures.map((h,m)=>u.urls[m]?h.loadImage(u.urls[m]):Promise.resolve())]),e!==this.current)return;const{width:c,height:g}=f;this.renderTextures.forEach(h=>h.setSize(c,g)),this.canvas.width=c,this.canvas.height=g,this.gl.viewport(0,0,c,g),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.additionalTextures.forEach(h=>{this.gl.activeTexture(this.gl.TEXTURE0+h.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,h.texture)});const _={u_image:this.texture.unit,u_screenSize:[c,g]};this.additionalTextures.forEach((h,m)=>{const $=`u_additionalImages[${m}]`;_[$]=h.unit});for(const h of _i(a.map(m=>m.program)))this.gl.useProgram(h.program),Ze(this.gl,h,_)}if(Ri(this.gl,l/r.output.totalFrames,a,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")o();else{const c=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,c);const{worker:g}=e,_={type:"AddFrame",buffer:c.buffer};if(g.postMessage(_,[c.buffer]),l===f.totalFrames-1){const h={type:"GetResult"};g.postMessage(h)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.additionalTextures.forEach(e=>e.destroy()),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const oe=function(){const{subscribe:t,update:e}=Ge({animations:Ve,current:Ve[0]}),n=a=>{e(s=>s.current===a||!s.animations.find(i=>i===a)?s:{animations:s.animations,current:a})};function r(a,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===a?{...a,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function o(){e(({animations:a,current:s})=>{const l=Ve.find(i=>i.name===s.name);return{animations:a.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:o}}(),Le=function(){const{subscribe:t,update:e}=Ge(Li.map(o=>({type:o,enabled:!1})));function n(o,a){e(s=>s.map(l=>l.type===o?{type:o,enabled:a}:l))}function r(){e(o=>o.map(a=>({...a,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function ot(t){let e=!0;const{subscribe:n,update:r}=Ge(void 0,s=>oe.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function o(s){r(l=>(e=!1,{...l,...s}))}function a(){r(()=>(e=!0,Ee(oe).current.defaultOptions[t]))}return{subscribe:n,change:o,reset:a}}const je=ot("image"),Ui=ot("additionalImages"),ne=ot("output"),Qe=Tn([je,Ui,ne,oe,Le],([t,e,n,r,o])=>({image:t,additionalImages:e,output:n,animation:r.current,effects:o})),we=function(){const t=Ge({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new ji(s),running:!1,frame:0}))}function o(){const{animator:s}=Ee(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(Ee(Qe),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function a(s){const{animator:l,frame:i}=Ee(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=Ee(Qe);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:o,renderFrame:a}}();function Tt(t,{delay:e=0,duration:n=400,easing:r=fn}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*o}`}}function Et(t){let e,n,r;const o=t[5].default,a=dn(o,t,t[4],null);return{c(){e=y("div"),a&&a.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=w(e);a&&a.l(l),l.forEach(b),this.h()},h(){d(e,"class","section__content svelte-v2pn2e")},m(s,l){P(s,e,l),a&&a.m(e,null),r=!0},p(s,l){a&&a.p&&(!r||l&16)&&gn(a,o,s,s[4],r?_n(o,s[4],l,null):hn(s[4]),null)},i(s){r||(S(a,s),pn(()=>{n||(n=st(e,Tt,{duration:250},!0)),n.run(1)}),r=!0)},o(s){A(a,s),n||(n=st(e,Tt,{duration:250},!1)),n.run(0),r=!1},d(s){s&&b(e),a&&a.d(s),s&&n&&n.end()}}}function Bi(t){let e,n,r,o,a=t[0]?"-":"+",s,l,i,u,f,c,g,_,h,m,$,C,v=t[0]&&Et(t);return{c(){e=y("section"),n=y("header"),r=y("button"),o=I("["),s=I(a),l=I("]"),i=k(),u=y("h2"),f=I(t[1]),c=k(),g=y("button"),_=I("Reset"),h=k(),v&&v.c(),this.h()},l(T){e=x(T,"SECTION",{class:!0});var E=w(e);n=x(E,"HEADER",{class:!0});var q=w(n);r=x(q,"BUTTON",{class:!0,type:!0});var j=w(r);o=D(j,"["),s=D(j,a),l=D(j,"]"),j.forEach(b),i=O(q),u=x(q,"H2",{class:!0});var K=w(u);f=D(K,t[1]),K.forEach(b),c=O(q),g=x(q,"BUTTON",{class:!0,type:!0});var V=w(g);_=D(V,"Reset"),V.forEach(b),q.forEach(b),h=O(E),v&&v.l(E),E.forEach(b),this.h()},h(){d(r,"class","section__expand svelte-v2pn2e"),d(r,"type","button"),d(u,"class","section__heading svelte-v2pn2e"),d(g,"class","section__reset svelte-v2pn2e"),d(g,"type","button"),d(n,"class","section__header svelte-v2pn2e"),d(e,"class","section svelte-v2pn2e")},m(T,E){P(T,e,E),p(e,n),p(n,r),p(r,o),p(r,s),p(r,l),p(n,i),p(n,u),p(u,f),p(n,c),p(n,g),p(g,_),p(e,h),v&&v.m(e,null),m=!0,$||(C=[re(r,"click",t[3]),re(u,"click",t[3]),re(u,"keypress",t[3]),re(g,"click",t[6])],$=!0)},p(T,[E]){(!m||E&1)&&a!==(a=T[0]?"-":"+")&&te(s,a),(!m||E&2)&&te(f,T[1]),T[0]?v?(v.p(T,E),E&1&&S(v,1)):(v=Et(T),v.c(),S(v,1),v.m(e,null)):v&&(Be(),A(v,1,1,()=>{v=null}),Ne())},i(T){m||(S(v),m=!0)},o(T){A(v),m=!1},d(T){T&&b(e),v&&v.d(),$=!1,mn(C)}}}function Ni(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:a=""}=e,{expanded:s=!0}=e;const l=et();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,a=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,o=f.$$scope)},[s,a,l,i,o,r,u]}class Ue extends Y{constructor(e){super(),W(this,e,Ni,Bi,J,{title:1,expanded:0})}}function Gi(t){let e,n,r,o,a,s,l,i;return{c(){e=y("label"),n=y("input"),r=k(),o=y("div"),a=y("img"),this.h()},l(u){e=x(u,"LABEL",{class:!0});var f=w(e);n=x(f,"INPUT",{class:!0,type:!0,accept:!0}),r=O(f),o=x(f,"DIV",{class:!0});var c=w(o);a=x(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(b),f.forEach(b),this.h()},h(){d(n,"class","image__input svelte-1me35do"),d(n,"type","file"),d(n,"accept","image/*"),d(a,"class","image__preview svelte-1me35do"),me(a.src,s=t[0].url)||d(a,"src",s),d(a,"alt","source"),d(o,"class","image__container svelte-1me35do"),d(e,"class","image svelte-1me35do")},m(u,f){P(u,e,f),p(e,n),p(e,r),p(e,o),p(o,a),l||(i=re(n,"input",t[1]),l=!0)},p(u,f){f&1&&!me(a.src,s=u[0].url)&&d(a,"src",s)},d(u){u&&b(e),l=!1,i()}}}function Hi(t){let e,n;return e=new Ue({props:{title:"Image",expanded:!0,$$slots:{default:[Gi]},$$scope:{ctx:t}}}),e.$on("reset",je.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&5&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function qi(t,e,n){let r;ie(t,je,a=>n(0,r=a));function o(a){const l=a.target.files?.[0];l&&je.change({url:URL.createObjectURL(l)})}return[r,o]}class Xi extends Y{constructor(e){super(),W(this,e,qi,Hi,J,{})}}function St(t){let e,n,r,o,a,s;return{c(){e=y("label"),n=I(t[1]),r=k(),o=y("input"),this.h()},l(l){e=x(l,"LABEL",{class:!0});var i=w(e);n=D(i,t[1]),r=O(i),o=x(i,"INPUT",{class:!0,type:!0}),i.forEach(b),this.h()},h(){d(o,"class","slider__text-input svelte-1h0gcvd"),d(o,"type","text"),o.value=t[0],d(e,"class","slider__label svelte-1h0gcvd")},m(l,i){P(l,e,i),p(e,n),p(e,r),p(e,o),a||(s=re(o,"input",t[5]),a=!0)},p(l,i){i&2&&te(n,l[1]),i&1&&o.value!==l[0]&&(o.value=l[0])},d(l){l&&b(e),a=!1,s()}}}function zi(t){let e,n,r,o,a=Me(t[2])+"",s,l,i,u,f,c,g=Me(t[3])+"",_,h,m,$=t[1]&&St(t);return{c(){e=y("div"),$&&$.c(),n=k(),r=y("div"),o=y("span"),s=I(a),l=k(),i=y("div"),u=y("input"),f=k(),c=y("span"),_=I(g),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);$&&$.l(v),n=O(v),r=x(v,"DIV",{class:!0});var T=w(r);o=x(T,"SPAN",{class:!0});var E=w(o);s=D(E,a),E.forEach(b),l=O(T),i=x(T,"DIV",{class:!0});var q=w(i);u=x(q,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),q.forEach(b),f=O(T),c=x(T,"SPAN",{class:!0});var j=w(c);_=D(j,g),j.forEach(b),T.forEach(b),v.forEach(b),this.h()},h(){d(o,"class","slider__range slider__range--min svelte-1h0gcvd"),d(u,"class","slider__input svelte-1h0gcvd"),d(u,"type","range"),d(u,"min",t[2]),d(u,"max",t[3]),d(u,"step",t[4]),u.value=t[0],d(i,"class","slider__input-container svelte-1h0gcvd"),d(c,"class","slider__range slider__range--max"),d(r,"class","slider__container svelte-1h0gcvd"),d(e,"class","slider")},m(C,v){P(C,e,v),$&&$.m(e,null),p(e,n),p(e,r),p(r,o),p(o,s),p(r,l),p(r,i),p(i,u),p(r,f),p(r,c),p(c,_),h||(m=re(u,"input",t[5]),h=!0)},p(C,[v]){C[1]?$?$.p(C,v):($=St(C),$.c(),$.m(e,n)):$&&($.d(1),$=null),v&4&&a!==(a=Me(C[2])+"")&&te(s,a),v&4&&d(u,"min",C[2]),v&8&&d(u,"max",C[3]),v&16&&d(u,"step",C[4]),v&1&&(u.value=C[0]),v&8&&g!==(g=Me(C[3])+"")&&te(_,g)},i:le,o:le,d(C){C&&b(e),$&&$.d(),h=!1,m()}}}function Me(t){return t.toFixed(2).replace(/\.?0+$/,"")}function Vi(t,e,n){const r=et();let{label:o=""}=e,{min:a=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<a?a:(s-a)/2}=e;function u(f){const c=f.target,g=parseFloat(c.value);Number.isNaN(g)||(n(0,i=g),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,o=f.label),"min"in f&&n(2,a=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,o,a,s,l,u]}class ce extends Y{constructor(e){super(),W(this,e,Vi,zi,J,{label:1,min:2,max:3,step:4,value:0})}}function Yi(t){let e,n,r,o,a,s,l,i,u,f;return e=new ce({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new ce({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),a=new ce({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),a.$on("input",t[3]),l=new ce({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new ce({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){U(e.$$.fragment),n=k(),U(r.$$.fragment),o=k(),U(a.$$.fragment),s=k(),U(l.$$.fragment),i=k(),U(u.$$.fragment)},l(c){B(e.$$.fragment,c),n=O(c),B(r.$$.fragment,c),o=O(c),B(a.$$.fragment,c),s=O(c),B(l.$$.fragment,c),i=O(c),B(u.$$.fragment,c)},m(c,g){N(e,c,g),P(c,n,g),N(r,c,g),P(c,o,g),N(a,c,g),P(c,s,g),N(l,c,g),P(c,i,g),N(u,c,g),f=!0},p(c,g){const _={};g&1&&(_.value=c[0].width),e.$set(_);const h={};g&1&&(h.value=c[0].height),r.$set(h);const m={};g&1&&(m.value=c[0].delayMs),a.$set(m);const $={};g&1&&($.value=c[0].totalFrames),l.$set($);const C={};g&1&&(C.value=c[0].quality),u.$set(C)},i(c){f||(S(e.$$.fragment,c),S(r.$$.fragment,c),S(a.$$.fragment,c),S(l.$$.fragment,c),S(u.$$.fragment,c),f=!0)},o(c){A(e.$$.fragment,c),A(r.$$.fragment,c),A(a.$$.fragment,c),A(l.$$.fragment,c),A(u.$$.fragment,c),f=!1},d(c){G(e,c),c&&b(n),G(r,c),c&&b(o),G(a,c),c&&b(s),G(l,c),c&&b(i),G(u,c)}}}function Wi(t){let e,n;return e=new Ue({props:{title:"Output",expanded:!0,$$slots:{default:[Yi]},$$scope:{ctx:t}}}),e.$on("reset",ne.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function Ji(t,e,n){let r;return ie(t,ne,u=>n(0,r=u)),[r,u=>ne.change({width:u.detail.value}),u=>ne.change({height:u.detail.value}),u=>ne.change({delayMs:u.detail.value}),u=>ne.change({totalFrames:u.detail.value}),u=>ne.change({quality:u.detail.value})]}class Ki extends Y{constructor(e){super(),W(this,e,Ji,Wi,J,{})}}function Zi(t){let e,n,r,o,a,s;return n=new Xi({}),o=new Ki({}),{c(){e=y("aside"),U(n.$$.fragment),r=k(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=O(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),p(e,r),N(o,e,null),s=!0},p(l,[i]){(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",a)},i(l){s||(S(n.$$.fragment,l),S(o.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function Qi(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class el extends Y{constructor(e){super(),W(this,e,Qi,Zi,J,{class:0})}}function tl(t){let e,n,r,o,a,s,l;return{c(){e=y("div"),n=I(t[1]),r=k(),o=y("label"),a=y("input"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=D(u,t[1]),r=O(u),o=x(u,"LABEL",{class:!0});var f=w(o);a=x(f,"INPUT",{class:!0,type:!0}),f.forEach(b),u.forEach(b),this.h()},h(){d(a,"class","toggle__checkbox svelte-1j9rfin"),d(a,"type","checkbox"),a.checked=t[0],d(o,"class","toggle__label svelte-1j9rfin"),se(o,"toggle__label--active",t[0]),d(e,"class","toggle svelte-1j9rfin")},m(i,u){P(i,e,u),p(e,n),p(e,r),p(e,o),p(o,a),s||(l=re(a,"change",t[2]),s=!0)},p(i,[u]){u&2&&te(n,i[1]),u&1&&(a.checked=i[0]),u&1&&se(o,"toggle__label--active",i[0])},i:le,o:le,d(i){i&&b(e),s=!1,l()}}}function nl(t,e,n){const r=et();let{label:o=""}=e,{value:a=!1}=e;function s(l){const i=l.target;n(0,a=Boolean(i.checked)),r("change",{value:a})}return t.$$set=l=>{"label"in l&&n(1,o=l.label),"value"in l&&n(0,a=l.value)},[a,o,s]}class at extends Y{constructor(e){super(),W(this,e,nl,tl,J,{label:1,value:0})}}function kt(t,e,n){const r=t.slice();return r[6]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[9]=e[n],r}function rl(t){let e,n;function r(...o){return t[4](t[9],...o)}return e=new at({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(S(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function ol(t){let e,n;function r(...o){return t[3](t[9],...o)}return e=new ce({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.min=t[9].min),a&2&&(s.max=t[9].max),a&2&&(s.step=t[9].step),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(S(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function At(t){let e,n,r,o;const a=[ol,rl],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=a[e](t)),{c(){n&&n.c(),r=he()},l(i){n&&n.l(i),r=he()},m(i,u){~e&&s[e].m(i,u),P(i,r,u),o=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(Be(),A(s[f],1,1,()=>{s[f]=null}),Ne()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=a[e](i),n.c()),S(n,1),n.m(r.parentNode,r)):n=null)},i(i){o||(S(n),o=!0)},o(i){A(n),o=!1},d(i){~e&&s[e].d(i),i&&b(r)}}}function al(t){let e,n,r=t[1].current.editOptions,o=[];for(let s=0;s<r.length;s+=1)o[s]=At(Ot(t,r,s));const a=s=>A(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=he()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=he()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=Ot(s,r,i);o[i]?(o[i].p(u,l),S(o[i],1)):(o[i]=At(u),o[i].c(),S(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)S(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)A(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function Mt(t){let e,n;function r(...o){return t[5](t[6],...o)}return e=new at({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&4&&(s.label=t[6].type),a&4&&(s.value=t[6].enabled),e.$set(s)},i(o){n||(S(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function sl(t){let e,n,r=t[2],o=[];for(let s=0;s<r.length;s+=1)o[s]=Mt(kt(t,r,s));const a=s=>A(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=he()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=he()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=kt(s,r,i);o[i]?(o[i].p(u,l),S(o[i],1)):(o[i]=Mt(u),o[i].c(),S(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)S(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)A(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function il(t){let e,n,r,o,a,s;return n=new Ue({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[al]},$$scope:{ctx:t}}}),n.$on("reset",oe.resetEditOptions),o=new Ue({props:{title:"Effects",expanded:!0,$$slots:{default:[sl]},$$scope:{ctx:t}}}),o.$on("reset",Le.reset),{c(){e=y("aside"),U(n.$$.fragment),r=k(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=O(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),p(e,r),N(o,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),o.$set(f),(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",a)},i(l){s||(S(n.$$.fragment,l),S(o.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function ll(t,e,n){let r,o;ie(t,oe,u=>n(1,r=u)),ie(t,Le,u=>n(2,o=u));let{class:a=""}=e;const s=(u,f)=>oe.changeEditOptions(u,f.detail.value),l=(u,f)=>oe.changeEditOptions(u,f.detail.value),i=(u,f)=>Le.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,a=u.class)},[a,r,o,s,l,i]}class ul extends Y{constructor(e){super(),W(this,e,ll,il,J,{class:0})}}function Pt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Rt(t,e){let n,r,o,a,s,l,i=e[3].name+"",u,f,c,g;function _(){return e[2](e[3])}return{key:t,first:null,c(){n=y("button"),r=y("img"),s=k(),l=y("span"),u=I(i),f=k(),this.h()},l(h){n=x(h,"BUTTON",{type:!0,class:!0});var m=w(n);r=x(m,"IMG",{class:!0,src:!0,alt:!0}),s=O(m),l=x(m,"SPAN",{});var $=w(l);u=D($,i),$.forEach(b),f=O(m),m.forEach(b),this.h()},h(){d(r,"class","image svelte-1l1v01j"),me(r.src,o=`${_e}/demo-${e[3].name}.gif`)||d(r,"src",o),d(r,"alt",a=e[3].name),d(n,"type","button"),d(n,"class","option svelte-1l1v01j"),se(n,"option--selected",e[3]===e[1].current),this.first=n},m(h,m){P(h,n,m),p(n,r),p(n,s),p(n,l),p(l,u),p(n,f),c||(g=re(n,"click",_),c=!0)},p(h,m){e=h,m&2&&!me(r.src,o=`${_e}/demo-${e[3].name}.gif`)&&d(r,"src",o),m&2&&a!==(a=e[3].name)&&d(r,"alt",a),m&2&&i!==(i=e[3].name+"")&&te(u,i),m&2&&se(n,"option--selected",e[3]===e[1].current)},d(h){h&&b(n),c=!1,g()}}}function cl(t){let e,n=[],r=new Map,o,a=t[1].animations;const s=l=>l[3].name;for(let l=0;l<a.length;l+=1){let i=Pt(t,a,l),u=s(i);r.set(u,n[l]=Rt(u,i))}return{c(){e=y("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(b),this.h()},h(){d(e,"class",o=ee(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){P(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(a=l[1].animations,n=vn(n,i,s,1,l,a,r,e,bn,Rt,null,Pt)),i&1&&o!==(o=ee(`container ${l[0]}`)+" svelte-1l1v01j")&&d(e,"class",o)},i:le,o:le,d(l){l&&b(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function fl(t,e,n){let r;ie(t,oe,s=>n(1,r=s));let{class:o=""}=e;const a=s=>oe.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,o=s.class)},[o,r,a]}class ml extends Y{constructor(e){super(),W(this,e,fl,cl,J,{class:0})}}function Ft(t){t[12]=t[13].dataUri}function It(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:hl,then:gl,catch:dl,value:13,error:14};return it(n=t[3],r),{c(){e=y("div"),r.block.c(),this.h()},l(o){e=x(o,"DIV",{class:!0});var a=w(e);r.block.l(a),a.forEach(b),this.h()},h(){d(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(o,a){P(o,e,a),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(o,a){t=o,r.ctx=t,a&8&&n!==(n=t[3])&&it(n,r)||yn(r,t,a)},d(o){o&&b(e),r.block.d(),r.token=null,r=null}}}function dl(t){let e,n,r=t[14]+"",o;return{c(){e=y("p"),n=I("An error has occurred: "),o=I(r),this.h()},l(a){e=x(a,"P",{class:!0});var s=w(e);n=D(s,"An error has occurred: "),o=D(s,r),s.forEach(b),this.h()},h(){d(e,"class","preview__error svelte-13qbjon")},m(a,s){P(a,e,s),p(e,n),p(e,o)},p(a,s){s&8&&r!==(r=a[14]+"")&&te(o,r)},d(a){a&&b(e)}}}function gl(t){Ft(t);let e,n,r,o,a,s,l;return{c(){e=y("div"),n=y("img"),o=k(),a=y("a"),s=I("Download"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=x(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(b),o=O(i),a=x(i,"A",{class:!0,download:!0,href:!0});var f=w(a);s=D(f,"Download"),f.forEach(b),this.h()},h(){d(n,"class","preview__image svelte-13qbjon"),me(n.src,r=t[12])||d(n,"src",r),d(n,"alt","generated gif"),d(e,"class","preview__image-container svelte-13qbjon"),d(a,"class","preview__download-button svelte-13qbjon"),d(a,"download","jumping_peter.gif"),d(a,"href",l=t[12])},m(i,u){P(i,e,u),p(e,n),P(i,o,u),P(i,a,u),p(a,s)},p(i,u){Ft(i),u&8&&!me(n.src,r=i[12])&&d(n,"src",r),u&8&&l!==(l=i[12])&&d(a,"href",l)},d(i){i&&b(e),i&&b(o),i&&b(a)}}}function hl(t){let e,n,r,o,a,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,g,_,h,m,$;return{c(){e=y("div"),n=y("p"),r=I("Generating..."),o=k(),a=y("p"),s=I("["),i=I(l),u=I(" / "),c=I(f),g=I("]"),_=k(),h=y("progress"),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);n=x(v,"P",{});var T=w(n);r=D(T,"Generating..."),T.forEach(b),o=O(v),a=x(v,"P",{});var E=w(a);s=D(E,"["),i=D(E,l),u=D(E," / "),c=D(E,f),g=D(E,"]"),E.forEach(b),_=O(v),h=x(v,"PROGRESS",{class:!0,max:!0}),w(h).forEach(b),v.forEach(b),this.h()},h(){d(h,"class","preview__progress svelte-13qbjon"),d(h,"max",m=t[5].totalFrames),h.value=$=t[4].frame,d(e,"class","preview__loading svelte-13qbjon")},m(C,v){P(C,e,v),p(e,n),p(n,r),p(e,o),p(e,a),p(a,s),p(a,i),p(a,u),p(a,c),p(a,g),p(e,_),p(e,h)},p(C,v){v&16&&l!==(l=C[4].frame+"")&&te(i,l),v&32&&f!==(f=C[5].totalFrames+"")&&te(c,f),v&32&&m!==(m=C[5].totalFrames)&&d(h,"max",m),v&16&&$!==($=C[4].frame)&&(h.value=$)},d(C){C&&b(e)}}}function _l(t){let e,n,r,o,a,s,l,i,u,f,c,g;r=new at({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let _=!t[1]&&t[3]&&It(t);return f=new ce({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=y("main"),n=y("div"),U(r.$$.fragment),o=k(),_&&_.c(),a=k(),s=y("div"),l=y("div"),i=y("canvas"),u=k(),U(f.$$.fragment),this.h()},l(h){e=x(h,"MAIN",{class:!0});var m=w(e);n=x(m,"DIV",{class:!0});var $=w(n);B(r.$$.fragment,$),$.forEach(b),o=O(m),_&&_.l(m),a=O(m),s=x(m,"DIV",{class:!0});var C=w(s);l=x(C,"DIV",{class:!0});var v=w(l);i=x(v,"CANVAS",{class:!0,style:!0}),w(i).forEach(b),v.forEach(b),u=O(C),B(f.$$.fragment,C),C.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","preview__debug-input svelte-13qbjon"),d(i,"class","preview__image svelte-13qbjon"),$n(i,"transform","scaleY(-1)"),d(l,"class","preview__image-container svelte-13qbjon"),d(s,"class","preview__container preview__container--debug svelte-13qbjon"),d(e,"class",c=ee(`preview ${t[0]}`)+" svelte-13qbjon"),se(e,"preview--debug",t[1]),se(e,"preview--no-debug",!t[1])},m(h,m){P(h,e,m),p(e,n),N(r,n,null),p(e,o),_&&_.m(e,null),p(e,a),p(e,s),p(s,l),p(l,i),t[9](i),p(s,u),N(f,s,null),g=!0},p(h,[m]){const $={};m&2&&($.value=h[1]),r.$set($),!h[1]&&h[3]?_?_.p(h,m):(_=It(h),_.c(),_.m(e,a)):_&&(_.d(1),_=null);const C={};m&32&&(C.max=h[5].totalFrames-1),m&16&&(C.value=h[4].frame),f.$set(C),(!g||m&1&&c!==(c=ee(`preview ${h[0]}`)+" svelte-13qbjon"))&&d(e,"class",c),(!g||m&3)&&se(e,"preview--debug",h[1]),(!g||m&3)&&se(e,"preview--no-debug",!h[1])},i(h){g||(S(r.$$.fragment,h),S(f.$$.fragment,h),g=!0)},o(h){A(r.$$.fragment,h),A(f.$$.fragment,h),g=!1},d(h){h&&b(e),G(r),_&&_.d(),t[9](null),G(f)}}}function pl(t,e,n){let r,o,a;ie(t,Qe,m=>n(8,r=m)),ie(t,we,m=>n(4,o=m)),ie(t,ne,m=>n(5,a=m));let s,{class:l=""}=e,i=!1,u=null;function f(){we.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=we.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}Cn(()=>{we.changeCanvas(s),c()});function g(m){we.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function _(m){n(1,i=m.detail.value)}function h(m){xn[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,o,a,g,_,r,h]}class vl extends Y{constructor(e){super(),W(this,e,pl,_l,J,{class:0})}}function bl(t){let e,n,r,o,a,s,l,i,u,f,c,g,_,h,m,$,C,v,T,E,q,j,K,V,Z;return document.title=e=Te,$=new kn({props:{class:"header"}}),v=new ml({props:{class:"animations"}}),E=new el({props:{class:"common-options"}}),j=new ul({props:{class:"animation-options"}}),V=new vl({props:{class:"preview"}}),{c(){n=y("meta"),r=y("meta"),o=y("meta"),a=y("meta"),s=y("meta"),l=y("meta"),i=y("meta"),u=y("meta"),f=y("meta"),c=y("meta"),g=y("meta"),_=y("meta"),h=k(),m=y("div"),U($.$$.fragment),C=k(),U(v.$$.fragment),T=k(),U(E.$$.fragment),q=k(),U(j.$$.fragment),K=k(),U(V.$$.fragment),this.h()},l(R){const X=wn("svelte-2dqrj",document.head);n=x(X,"META",{name:!0,content:!0,class:!0}),r=x(X,"META",{name:!0,content:!0,class:!0}),o=x(X,"META",{property:!0,content:!0,class:!0}),a=x(X,"META",{property:!0,content:!0,class:!0}),s=x(X,"META",{property:!0,content:!0,class:!0}),l=x(X,"META",{property:!0,content:!0,class:!0}),i=x(X,"META",{property:!0,content:!0,class:!0}),u=x(X,"META",{property:!0,content:!0,class:!0}),f=x(X,"META",{property:!0,content:!0,class:!0}),c=x(X,"META",{property:!0,content:!0,class:!0}),g=x(X,"META",{property:!0,content:!0,class:!0}),_=x(X,"META",{property:!0,content:!0,class:!0}),X.forEach(b),h=O(R),m=x(R,"DIV",{class:!0});var Q=w(m);B($.$$.fragment,Q),C=O(Q),B(v.$$.fragment,Q),T=O(Q),B(E.$$.fragment,Q),q=O(Q),B(j.$$.fragment,Q),K=O(Q),B(V.$$.fragment,Q),Q.forEach(b),this.h()},h(){d(n,"name","title"),d(n,"content",Te),d(n,"class","svelte-14fuh2n"),d(r,"name","description"),d(r,"content",Ke),d(r,"class","svelte-14fuh2n"),d(o,"property","og:type"),d(o,"content","website"),d(o,"class","svelte-14fuh2n"),d(a,"property","og:url"),d(a,"content",Dt),d(a,"class","svelte-14fuh2n"),d(s,"property","og:title"),d(s,"content",Te),d(s,"class","svelte-14fuh2n"),d(l,"property","og:description"),d(l,"content",Ke),d(l,"class","svelte-14fuh2n"),d(i,"property","og:image"),d(i,"content",Lt),d(i,"class","svelte-14fuh2n"),d(u,"property","twitter:card"),d(u,"content","summary_large_image"),d(u,"class","svelte-14fuh2n"),d(f,"property","twitter:url"),d(f,"content",Dt),d(f,"class","svelte-14fuh2n"),d(c,"property","twitter:title"),d(c,"content",Te),d(c,"class","svelte-14fuh2n"),d(g,"property","twitter:description"),d(g,"content",Ke),d(g,"class","svelte-14fuh2n"),d(_,"property","twitter:image"),d(_,"content",Lt),d(_,"class","svelte-14fuh2n"),d(m,"class","grid svelte-14fuh2n")},m(R,X){p(document.head,n),p(document.head,r),p(document.head,o),p(document.head,a),p(document.head,s),p(document.head,l),p(document.head,i),p(document.head,u),p(document.head,f),p(document.head,c),p(document.head,g),p(document.head,_),P(R,h,X),P(R,m,X),N($,m,null),p(m,C),N(v,m,null),p(m,T),N(E,m,null),p(m,q),N(j,m,null),p(m,K),N(V,m,null),Z=!0},p(R,[X]){(!Z||X&0)&&e!==(e=Te)&&(document.title=e)},i(R){Z||(S($.$$.fragment,R),S(v.$$.fragment,R),S(E.$$.fragment,R),S(j.$$.fragment,R),S(V.$$.fragment,R),Z=!0)},o(R){A($.$$.fragment,R),A(v.$$.fragment,R),A(E.$$.fragment,R),A(j.$$.fragment,R),A(V.$$.fragment,R),Z=!1},d(R){b(n),b(r),b(o),b(a),b(s),b(l),b(i),b(u),b(f),b(c),b(g),b(_),R&&b(h),R&&b(m),G($),G(v),G(E),G(j),G(V)}}}const Te="Jumping Peter",Ke="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",Dt="https://ksmai.github.io/jumping-peter",Lt="https://ksmai.github.io/jumping-peter/favicon.png";class yl extends Y{constructor(e){super(),W(this,e,null,bl,J,{})}}export{yl as default};
