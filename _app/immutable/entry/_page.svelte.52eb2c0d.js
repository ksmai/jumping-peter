import{S as W,i as J,n as K,j as y,s as O,q as L,k as x,l as w,c as M,r as j,g as b,m as g,J as me,K as ee,a as P,G as p,H as ce,L as Oe,M as dn,N as ae,u as te,f as k,v as Be,b as A,d as Ne,O as gn,P as et,C as hn,D as _n,E as pn,F as vn,Q as bn,R as st,y as U,z as B,A as N,B as G,I as ue,T as le,e as _e,U as jt,V as $n,W as Cn,p as yn,o as xn,X as it,Y as wn,w as Sn,Z as Tn}from"../chunks/index.a9aa9141.js";import{b as pe,w as Ge,d as En}from"../chunks/paths.712bd029.js";function kn(t){let e,n,r,o,a,s,l,i,u,f,c,d,_;return{c(){e=y("header"),n=y("img"),o=O(),a=y("h1"),s=L("Jumping Peter"),l=O(),i=y("p"),u=L("generate gif emojis"),f=O(),c=y("a"),d=L("Contribute"),this.h()},l(h){e=x(h,"HEADER",{class:!0});var m=w(e);n=x(m,"IMG",{class:!0,src:!0,alt:!0}),o=M(m),a=x(m,"H1",{class:!0});var $=w(a);s=j($,"Jumping Peter"),$.forEach(b),l=M(m),i=x(m,"P",{class:!0});var C=w(i);u=j(C,"generate gif emojis"),C.forEach(b),f=M(m),c=x(m,"A",{class:!0,href:!0,target:!0,rel:!0});var v=w(c);d=j(v,"Contribute"),v.forEach(b),m.forEach(b),this.h()},h(){g(n,"class","logo svelte-bal6b7"),me(n.src,r=`${pe}/demo-jumping.gif`)||g(n,"src",r),g(n,"alt",""),g(a,"class","title svelte-bal6b7"),g(i,"class","subtitle svelte-bal6b7"),g(c,"class","contribute svelte-bal6b7"),g(c,"href","https://github.com/ksmai/jumping-peter"),g(c,"target","_blank"),g(c,"rel","noreferrer"),g(e,"class",_=ee(`header ${t[0]}`)+" svelte-bal6b7")},m(h,m){P(h,e,m),p(e,n),p(e,o),p(e,a),p(a,s),p(e,l),p(e,i),p(i,u),p(e,f),p(e,c),p(c,d)},p(h,[m]){m&1&&_!==(_=ee(`header ${h[0]}`)+" svelte-bal6b7")&&g(e,"class",_)},i:ce,o:ce,d(h){h&&b(e)}}}function On(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class Mn extends W{constructor(e){super(),J(this,e,On,kn,K,{class:0})}}function ve(t){return{...t,type:"slider",min:-360,max:360,step:1}}function oe(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function X(t){return{...t,type:"slider",min:0,max:1,step:.01}}function An(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function be(t){return{...t,type:"slider",min:0,max:2,step:.01}}function $e(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Fe(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function lt(t){return{...t,type:"slider",min:-1,max:1,step:1}}function Q(t){return{...t,type:"slider",min:1,max:100,step:1}}function Pn(t){return{...t,type:"slider",min:1,max:5,step:1}}function Me(t){return{...t,type:"toggle"}}function Dn(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const E={image:{url:`${pe}/favicon.png`},additionalImages:{urls:[]},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function F(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Ce(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function z(t,e,n){Ut(t,e,n,0)}function Rn(t,e,n){const r=t[0],o=t[4],a=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*o,t[9]+=n*a,t[13]+=n*s}function Ut(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function de(t,e){tt(t,e,[0,0,1])}function tt(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const o=n[0]/r,a=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*o*o+i,(1-i)*o*a+u*s,(1-i)*o*s-u*a,0,(1-i)*o*a-u*s,(1-i)*a*a+i,(1-i)*a*s-u*o,0,(1-i)*o*s+u*a,(1-i)*a*s-u*o,(1-i)*s*s+i,0,0,0,0,1];nt(t,f)}function Bt(t,e,n,r){Ut(t,-e[0],-e[1],-e[2]);const o=[-n[0],-n[1],-n[2]];ut(o);const a=ct(r,o);ut(a);const s=ct(o,a),l=[a[0],s[0],o[0],0,a[1],s[1],o[1],0,a[2],s[2],o[2],0,0,0,0,1];nt(t,l)}function Nt(t,e,n,r,o,a,s){const l=[2*a/(n-e),0,0,0,0,2*a/(o-r),0,0,(n+e)/(n-e),(o+r)/(o-r),-(s+a)/(s-a),-1,0,0,-2*s*a/(s-a),0];nt(t,l)}function nt(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let o=0;o<=3;++o){const a=4*r+o;t[a]=0;for(let s=0;s<=3;++s)t[a]+=e[4*s+o]*n[4*r+s]}}function ut(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function R(t,e,n){return t+(e-t)*n}function ye(t){return t*Math.PI/180}function ft(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function De(t,e){return Math.sin(t*e)*43758.5453%1}function Gt(t){return De(t,127.1)}function Fn(t){return[De(t,127.1),De(t,269.5),De(t,631.2)]}function In(t){return e=>1-Math.pow(1-e,t)}function zt(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const Re=zt(3),Xt=In(2);function mt(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const Ln="spinning",jn={...E,output:{...E.output,delayMs:50,totalFrames:15}},Un=[ve({name:"startAngle",value:0}),ve({name:"endAngle",value:360}),oe({name:"originX",value:0}),oe({name:"originY",value:0}),Me({name:"alternates",value:!1})];function Ht(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{alternates:a,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:o,getUniforms:c=>{const d=a?Math.min(c,1-c)*2:c,_=R(s,l,d),h=F();return z(h,-i,-u),de(h,_),z(h,i,u),{u_model:h}}}]}const Bn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Ht,defaultOptions:jn,editOptions:Un,name:Ln},Symbol.toStringTag,{value:"Module"})),Nn="expanding",Gn={...E,output:{...E.output,delayMs:50,totalFrames:20}},zn=[Fe({name:"minScale",value:1}),Fe({name:"maxScale",value:2}),Me({name:"alternates",value:!1})];function qt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{minScale:a,maxScale:s,alternates:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=R(a,s,f),d=F();return Ce(d,c,c),{u_model:d}}}]}const Xn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:qt,defaultOptions:Gn,editOptions:zn,name:Nn},Symbol.toStringTag,{value:"Module"})),Hn="extreme-speed",qn={...E,output:{...E.output,delayMs:20,totalFrames:10}},Vn=[lt({name:"directionX",value:-1}),lt({name:"directionY",value:0})];function Vt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("sudoku"),{directionX:a,directionY:s}=n,l=a*2,i=s*2;return[{program:r,geometry:o,getUniforms:f=>{const c=F(),d=R(0,l,f),_=R(0,i,f);return z(c,d,_),{u_model:c}}}]}const Yn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:qn,editOptions:Vn,name:Hn},Symbol.toStringTag,{value:"Module"})),Wn="excited",Jn={...E,output:{...E.output,delayMs:50,totalFrames:25}},Kn=[ve({name:"angle",value:15}),$e({name:"startOffset",value:-.2}),$e({name:"endOffset",value:.2}),Q({name:"cycles",value:3})];function Yt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{angle:a,cycles:s,startOffset:l,endOffset:i}=n,u=ye(a),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:o,getUniforms:_=>{const h=_*2*s%1,m=Math.min(h,1-h)*2,$=R(-l*c,-i*c,m),C=R(l*f,i*f,m),v=F();return de(v,a),z(v,$,C),Ce(v,_>.5?-1:1,1),{u_model:v}}}]}const Zn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:Jn,editOptions:Kn,name:Wn},Symbol.toStringTag,{value:"Module"})),Qn="jumping",er={...E,output:{...E.output,delayMs:50,totalFrames:20}},tr=[be({name:"maxOffset",value:1.2}),X({name:"compressTime",value:.4}),X({name:"maxCompress",value:.3})];function Wt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffset:a,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=F(),d=f/(1-s);if(d<1){const _=(1-d*d)*a;z(c,0,_)}else{const _=(1-f)/s,m=1-(1-_*_)*l;z(c,0,1),Ce(c,1/m,m),z(c,0,-1)}return{u_model:c}}}]}const nr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:er,editOptions:tr,name:Qn},Symbol.toStringTag,{value:"Module"})),rr="tower",or={...E,output:{...E.output,delayMs:40,totalFrames:20}},ar=[ve({name:"startAngle",value:20}),ve({name:"endAngle",value:-45}),X({name:"startTime",value:.5})];function Jt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("tower"),{startAngle:a,endAngle:s,startTime:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=F();if(u<l){const c=u/l,d=Math.min(c,1-c)*2,_=R(0,a,d);de(f,_)}else{const c=(u-l)/(1-l),d=Math.min(c,1-c)*2,_=R(0,s,d);if(de(f,_),c>.5){const h=ye(_),m=Math.cos(h),$=Math.sin(h),C=(c-.5)*2,v=R(0,-2*$,C),S=R(0,2*m,C);z(f,v,S)}}return{u_model:f}}}]}const sr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:or,editOptions:ar,name:rr},Symbol.toStringTag,{value:"Module"})),ir="repeated",lr={...E,output:{...E.output,delayMs:60,totalFrames:15}},ur=[Fe({name:"initialScale",value:.1}),Me({name:"horizontal",value:!1})];function Kt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{initialScale:a,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=d=>{const _=F(),h=Re(d),m=R(a,1,h);return Ce(_,m,m),{u_model:_}},f=d=>{const _=F(),h=Re(d),m=R(0,l.endX,h),$=R(0,l.endY,h);return z(_,m,$),{u_model:_}},c=d=>{const _=F(),h=Re(d),m=R(0,i.endX,h),$=R(0,i.endY,h);return z(_,m,$),{u_model:_}};return[{program:r,geometry:o,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const cr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:lr,editOptions:ur,name:ir},Symbol.toStringTag,{value:"Module"})),fr="mirror",mr={...E,output:{...E.output,delayMs:50,totalFrames:16}},dr=[Me({name:"rightHalf",value:!1})];function Zt(t,e,n){const r=t.createProgram("default"),{rightHalf:o}=n,a=e.createGeometry(o?"rightHalf":"leftHalf");return[{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=F(),c=mt(u),d=R(-2,-1,c);return o||Ce(f,-1,1),z(f,d,0),{u_model:f}}},{program:r,geometry:a,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=F(),c=mt(u),d=R(2,1,c);return o&&Ce(f,-1,1),z(f,d,0),{u_model:f}}}]}const gr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:mr,editOptions:dr,name:fr},Symbol.toStringTag,{value:"Module"})),hr="panic",_r={...E,output:{...E.output,delayMs:30,totalFrames:16}},pr=[be({name:"maxOffsetX",value:.15}),be({name:"maxOffsetY",value:.15})];function Qt(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{maxOffsetX:a,maxOffsetY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=ft(i+.123),f=ft(i*2+1),c=R(-a,a,u),d=R(-s,s,f),_=F();return z(_,c,d),{u_model:_}}}]}const vr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Qt,defaultOptions:_r,editOptions:pr,name:hr},Symbol.toStringTag,{value:"Module"})),br="rotating",$r={...E,output:{...E.output,delayMs:40,totalFrames:25}},Cr=[oe({name:"axisX",value:0}),oe({name:"axisY",value:1}),oe({name:"axisZ",value:0}),oe({name:"originX",value:0}),oe({name:"originY",value:0}),Pn({name:"easing",value:1}),Me({name:"alternates",value:!1})];function en(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{axisX:a,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,d=[a,s,l],_=zt(f);return[{program:r,geometry:o,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,C=_($),v=R(0,360,C),S=F();z(S,-i,-u),tt(S,v,d),z(S,i,u);const T=F();Bt(T,[0,0,3],[0,0,-1],[0,1,0]);const H=F();return Nt(H,-.03,.03,-.03,.03,.1,6),{u_model:S,u_view:T,u_projection:H,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(ye(5)),"u_spotLight.outerCos":Math.cos(ye(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const yr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:en,defaultOptions:$r,editOptions:Cr,name:br},Symbol.toStringTag,{value:"Module"})),xr="party",wr={...E,output:{...E.output,delayMs:40,totalFrames:15}},Sr=[ve({name:"angle",value:10}),$e({name:"startOffset",value:-.3}),$e({name:"endOffset",value:.5})];function tn(t,e,n){const r=t.createProgram("default3d"),o=e.createGeometry("full"),{angle:a,startOffset:s,endOffset:l}=n;return[{program:r,geometry:o,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,d=Re(f),_=Xt(c),h=u<.5?R(0,180,d):R(180,360,d),m=R(s,l,_),$=F();de($,a),z($,0,m),tt($,h,[0,1,0]);const C=F();Bt(C,[0,0,3],[0,0,-1],[0,1,0]);const v=F();return Nt(v,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:C,u_projection:v,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(ye(5)),"u_spotLight.outerCos":Math.cos(ye(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const Tr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:tn,defaultOptions:wr,editOptions:Sr,name:xr},Symbol.toStringTag,{value:"Module"})),Er="parrot",kr={...E,output:{...E.output,delayMs:20,totalFrames:18}},Or=[Fe({name:"amplitudeX",value:.6}),be({name:"amplitudeY",value:.5})];function nn(t,e,n){const r=t.createProgram("default"),o=e.createGeometry("full"),{amplitudeX:a,amplitudeY:s}=n;return[{program:r,geometry:o,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=R(-a,a,u),c=Math.sin(i*2*Math.PI)*.5+.5,d=R(-s,0,c),_=F();return z(_,0,1),Rn(_,f,0),z(_,0,-1+d),{u_model:_}}}]}const Mr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:nn,defaultOptions:kr,editOptions:Or,name:Er},Symbol.toStringTag,{value:"Module"})),Ar="wiggling",Pr={...E,output:{...E.output,delayMs:50,totalFrames:15}},Dr=[Q({name:"frequency",value:3}),be({name:"amplitude",value:.05})];function rn(t,e,n){const r=t.createProgram("wiggling"),o=e.createGeometry("full"),{frequency:a,amplitude:s}=n;return[{program:r,geometry:o,getUniforms:i=>({u_model:F(),u_time:i,u_amplitude:s,u_frequency:a})}]}const Rr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:rn,defaultOptions:Pr,editOptions:Dr,name:Ar},Symbol.toStringTag,{value:"Module"})),Fr="petrified-shattered",Ir={...E,additionalImages:{urls:[`${pe}/stone.jpg`]},output:{...E.output,delayMs:150,totalFrames:20}},Lr=[X({name:"edgeThreshold",value:.2}),X({name:"edgeDarkness",value:.3}),X({name:"timeBeforeCrack",value:.4}),X({name:"timeBeforeShatter",value:.5}),Q({name:"seed",value:26}),X({name:"maxHorizontalVelocity",value:1}),X({name:"maxVerticalVelocity",value:1}),X({name:"maxAngularVelocity",value:1}),X({name:"maxAcceleration",value:1}),X({name:"crackWidth",value:.07}),Q({name:"shatterColumns",value:4}),Q({name:"shatterRows",value:4})];function on(t,e,n){const r=t.createProgram("petrifiedShattered"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeShatter:i,seed:u,maxHorizontalVelocity:f,maxVerticalVelocity:c,maxAngularVelocity:d,maxAcceleration:_,crackWidth:h,shatterColumns:m,shatterRows:$}=n;return Array(m*$).fill(null).map((C,v)=>({program:r,geometry:o,getUniforms(S){const T=F();if(S>i){const Y=(S-i)/(1-i);let[V,ne,D]=Fn(v+u*.761+1),I=Gt(D);V=V*f*1,ne=ne*c*3,I=I*360*d*.2,D=-Math.abs(D*_*30),de(T,I*Y),z(T,V*Y,ne*Y+.5*D*Y*Y)}const H=v%m,q=Math.floor(v/m);return{u_model:T,u_edgeThreshold:a,u_edgeDarkness:s,u_time:S,u_seed:u,u_timeBeforeCrack:l,u_timeBeforeShatter:i,u_crackWidth:h,u_shatterColumns:m,u_shatterRows:$,u_column:H,u_row:q}}}))}const jr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:on,defaultOptions:Ir,editOptions:Lr,name:Fr},Symbol.toStringTag,{value:"Module"})),Ur="petrified-broken",Br={...E,additionalImages:{urls:[`${pe}/stone.jpg`]},output:{...E.output,delayMs:150,totalFrames:20}},Nr=[X({name:"edgeThreshold",value:.2}),X({name:"edgeDarkness",value:.3}),X({name:"timeBeforeCrack",value:.4}),X({name:"timeBeforeBreak",value:.6}),Q({name:"crackSegments",value:4}),An({name:"maxCrackMovement",value:.2}),X({name:"crackWidth",value:.1}),Q({name:"seed",value:26})];function an(t,e,n){const r=t.createProgram("petrifiedBroken"),o=e.createGeometry("full"),{edgeThreshold:a,edgeDarkness:s,timeBeforeCrack:l,timeBeforeBreak:i,crackSegments:u,maxCrackMovement:f,crackWidth:c,seed:d}=n;return Array(2).fill(null).map((_,h)=>({program:r,geometry:o,getUniforms(m){const $=F();if(m>i){const C=Gt(h+d*.761+1)*10+80,v=(m-i)/(1-i);z($,0,1),de($,Xt(v)*C*(1-h*2)),z($,0,-1)}return{u_model:$,u_edgeThreshold:a,u_edgeDarkness:s,u_seed:d,u_time:m,u_timeBeforeCrack:l,u_timeBeforeBreak:i,u_crackSegments:u,u_maxCrackMovement:f,u_crackWidth:c,u_i:h}}}))}const Gr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:an,defaultOptions:Br,editOptions:Nr,name:Ur},Symbol.toStringTag,{value:"Module"})),zr="firework",Xr={...E,output:{...E.output,delayMs:50,totalFrames:30}},Hr=[Q({name:"seed",value:10}),X({name:"darkness",value:.3}),Q({name:"cycles",value:2}),Q({name:"speedModifier",value:13})];function sn(t,e,n){const r=t.createProgram("firework"),o=e.createGeometry("full"),{seed:a,darkness:s,cycles:l,speedModifier:i}=n;return[{program:r,geometry:o,getUniforms(u){return{u_model:F(),u_seed:a,u_time:u,u_darkness:s,u_cycles:l,u_speedModifier:i}}}]}const qr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:sn,defaultOptions:Xr,editOptions:Hr,name:zr},Symbol.toStringTag,{value:"Module"})),Vr="bravo",Yr={...E,output:{...E.output,delayMs:45,totalFrames:20}},Wr=[oe({name:"normalX",value:1}),oe({name:"normalY",value:1}),$e({name:"startDist",value:-1.6}),$e({name:"endDist",value:1.6}),be({name:"blur",value:.7}),X({name:"lightness",value:.7})];function ln(t,e,n){const r=t.createProgram("bravo"),o=e.createGeometry("full"),{normalX:a,normalY:s,startDist:l,endDist:i,blur:u,lightness:f}=n;return[{program:r,geometry:o,getUniforms(c){return{u_model:F(),u_time:c,u_normal:[a,s],u_startDist:l,u_endDist:i,u_blur:u,u_lightness:f}}}]}const Jr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:ln,defaultOptions:Yr,editOptions:Wr,name:Vr},Symbol.toStringTag,{value:"Module"})),Ve=[nr,Yn,Bn,Zn,Xn,sr,cr,gr,vr,yr,Tr,Mr,Rr,jr,Gr,qr,Jr];function dt(t,e,n){const r=Dn(n.editOptions);switch(n.name){case"spinning":return Ht(t,e,r);case"expanding":return qt(t,e,r);case"extreme-speed":return Vt(t,e,r);case"excited":return Yt(t,e,r);case"jumping":return Wt(t,e,r);case"tower":return Jt(t,e,r);case"repeated":return Kt(t,e,r);case"mirror":return Zt(t,e,r);case"panic":return Qt(t,e,r);case"rotating":return en(t,e,r);case"party":return tn(t,e,r);case"parrot":return nn(t,e,r);case"wiggling":return rn(t,e,r);case"petrified-shattered":return on(t,e,r);case"petrified-broken":return an(t,e,r);case"firework":return sn(t,e,r);case"bravo":return ln(t,e,r);default:(o=>{throw new Error(`Unknown animation: ${JSON.stringify(o)}`)})(n)}}var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kr=typeof Ae=="object"&&Ae&&Ae.Object===Object&&Ae,Zr=Kr,Qr=Zr,eo=typeof self=="object"&&self&&self.Object===Object&&self,to=Qr||eo||Function("return this")(),ze=to,no=ze,ro=no.Symbol,un=ro,gt=un,cn=Object.prototype,oo=cn.hasOwnProperty,ao=cn.toString,Te=gt?gt.toStringTag:void 0;function so(t){var e=oo.call(t,Te),n=t[Te];try{t[Te]=void 0;var r=!0}catch{}var o=ao.call(t);return r&&(e?t[Te]=n:delete t[Te]),o}var io=so,lo=Object.prototype,uo=lo.toString;function co(t){return uo.call(t)}var fo=co,ht=un,mo=io,go=fo,ho="[object Null]",_o="[object Undefined]",_t=ht?ht.toStringTag:void 0;function po(t){return t==null?t===void 0?_o:ho:_t&&_t in Object(t)?mo(t):go(t)}var vo=po;function bo(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var fn=bo,$o=vo,Co=fn,yo="[object AsyncFunction]",xo="[object Function]",wo="[object GeneratorFunction]",So="[object Proxy]";function To(t){if(!Co(t))return!1;var e=$o(t);return e==xo||e==wo||e==yo||e==So}var Eo=To,ko=ze,Oo=ko["__core-js_shared__"],Mo=Oo,Ye=Mo,pt=function(){var t=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ao(t){return!!pt&&pt in t}var Po=Ao,Do=Function.prototype,Ro=Do.toString;function Fo(t){if(t!=null){try{return Ro.call(t)}catch{}try{return t+""}catch{}}return""}var Io=Fo,Lo=Eo,jo=Po,Uo=fn,Bo=Io,No=/[\\^$.*+?()[\]{}|]/g,Go=/^\[object .+?Constructor\]$/,zo=Function.prototype,Xo=Object.prototype,Ho=zo.toString,qo=Xo.hasOwnProperty,Vo=RegExp("^"+Ho.call(qo).replace(No,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yo(t){if(!Uo(t)||jo(t))return!1;var e=Lo(t)?Vo:Go;return e.test(Bo(t))}var Wo=Yo;function Jo(t,e){return t?.[e]}var Ko=Jo,Zo=Wo,Qo=Ko;function ea(t,e){var n=Qo(t,e);return Zo(n)?n:void 0}var rt=ea,ta=rt,na=ta(Object,"create"),Xe=na,vt=Xe;function ra(){this.__data__=vt?vt(null):{},this.size=0}var oa=ra;function aa(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var sa=aa,ia=Xe,la="__lodash_hash_undefined__",ua=Object.prototype,ca=ua.hasOwnProperty;function fa(t){var e=this.__data__;if(ia){var n=e[t];return n===la?void 0:n}return ca.call(e,t)?e[t]:void 0}var ma=fa,da=Xe,ga=Object.prototype,ha=ga.hasOwnProperty;function _a(t){var e=this.__data__;return da?e[t]!==void 0:ha.call(e,t)}var pa=_a,va=Xe,ba="__lodash_hash_undefined__";function $a(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=va&&e===void 0?ba:e,this}var Ca=$a,ya=oa,xa=sa,wa=ma,Sa=pa,Ta=Ca;function xe(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xe.prototype.clear=ya;xe.prototype.delete=xa;xe.prototype.get=wa;xe.prototype.has=Sa;xe.prototype.set=Ta;var Ea=xe;function ka(){this.__data__=[],this.size=0}var Oa=ka;function Ma(t,e){return t===e||t!==t&&e!==e}var Aa=Ma,Pa=Aa;function Da(t,e){for(var n=t.length;n--;)if(Pa(t[n][0],e))return n;return-1}var He=Da,Ra=He,Fa=Array.prototype,Ia=Fa.splice;function La(t){var e=this.__data__,n=Ra(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ia.call(e,n,1),--this.size,!0}var ja=La,Ua=He;function Ba(t){var e=this.__data__,n=Ua(e,t);return n<0?void 0:e[n][1]}var Na=Ba,Ga=He;function za(t){return Ga(this.__data__,t)>-1}var Xa=za,Ha=He;function qa(t,e){var n=this.__data__,r=Ha(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Va=qa,Ya=Oa,Wa=ja,Ja=Na,Ka=Xa,Za=Va;function we(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}we.prototype.clear=Ya;we.prototype.delete=Wa;we.prototype.get=Ja;we.prototype.has=Ka;we.prototype.set=Za;var Qa=we,es=rt,ts=ze,ns=es(ts,"Map"),rs=ns,bt=Ea,os=Qa,as=rs;function ss(){this.size=0,this.__data__={hash:new bt,map:new(as||os),string:new bt}}var is=ss;function ls(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var us=ls,cs=us;function fs(t,e){var n=t.__data__;return cs(e)?n[typeof e=="string"?"string":"hash"]:n.map}var qe=fs,ms=qe;function ds(t){var e=ms(this,t).delete(t);return this.size-=e?1:0,e}var gs=ds,hs=qe;function _s(t){return hs(this,t).get(t)}var ps=_s,vs=qe;function bs(t){return vs(this,t).has(t)}var $s=bs,Cs=qe;function ys(t,e){var n=Cs(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var xs=ys,ws=is,Ss=gs,Ts=ps,Es=$s,ks=xs;function Se(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Se.prototype.clear=ws;Se.prototype.delete=Ss;Se.prototype.get=Ts;Se.prototype.has=Es;Se.prototype.set=ks;var Os=Se,Ms="__lodash_hash_undefined__";function As(t){return this.__data__.set(t,Ms),this}var Ps=As;function Ds(t){return this.__data__.has(t)}var Rs=Ds,Fs=Os,Is=Ps,Ls=Rs;function Ie(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Fs;++e<n;)this.add(t[e])}Ie.prototype.add=Ie.prototype.push=Is;Ie.prototype.has=Ls;var js=Ie;function Us(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var Bs=Us;function Ns(t){return t!==t}var Gs=Ns;function zs(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}var Xs=zs,Hs=Bs,qs=Gs,Vs=Xs;function Ys(t,e,n){return e===e?Vs(t,e,n):Hs(t,qs,n)}var Ws=Ys,Js=Ws;function Ks(t,e){var n=t==null?0:t.length;return!!n&&Js(t,e,0)>-1}var Zs=Ks;function Qs(t,e,n){for(var r=-1,o=t==null?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}var ei=Qs;function ti(t,e){return t.has(e)}var ni=ti,ri=rt,oi=ze,ai=ri(oi,"Set"),si=ai;function ii(){}var li=ii;function ui(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var mn=ui,We=si,ci=li,fi=mn,mi=1/0,di=We&&1/fi(new We([,-0]))[1]==mi?function(t){return new We(t)}:ci,gi=di,hi=js,_i=Zs,pi=ei,vi=ni,bi=gi,$i=mn,Ci=200;function yi(t,e,n){var r=-1,o=_i,a=t.length,s=!0,l=[],i=l;if(n)s=!1,o=pi;else if(a>=Ci){var u=e?null:bi(t);if(u)return $i(u);s=!1,o=vi,i=new hi}else i=e?[]:l;e:for(;++r<a;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var d=i.length;d--;)if(i[d]===c)continue e;e&&i.push(c),l.push(f)}else o(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var xi=yi,wi=xi;function Si(t){return t&&t.length?wi(t):[]}var Ti=Si;class Je{constructor(e,n){this.gl=e,this.unit=n}loadingUrl=null;url=null;texture=null;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),o=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:a}=this;this.texture&&a.deleteTexture(this.texture);const s=a.createTexture();if(!s)throw new Error("Failed to create texture");a.activeTexture(a.TEXTURE0+this.unit),a.bindTexture(a.TEXTURE_2D,s),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,o),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class $t{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const ie=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,ge=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,Ei=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    outColor = texture(u_image, v_texCoords);
}
`,ki=`#version 300 es

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
`,Oi=`#version 300 es
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
`,Mi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = 1.0 - outColor.rgb;
}
`,Ai=`#version 300 es
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
`,Pi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  vec4 texel = texture(u_image, v_texCoords);
  outColor = vec4(u_weights * texel.rgb, texel.a);
}
`,Di=`#version 300 es
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
`,Ri=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,Fi=`#version 300 es
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
`,Ii=`#version 300 es
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
`,Li=`#version 300 es
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
`,ji=`#version 300 es
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
`,Ui=`#version 300 es
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
`,Bi=`#version 300 es
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
`,Ni=`#version 300 es
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
`,Gi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_time;
uniform vec2 u_normal;
uniform float u_startDist;
uniform float u_endDist;
uniform float u_blur;
uniform float u_lightness;

out vec4 outColor;

void main() {
  vec2 uv = (v_texCoords * 2.0 - 1.0) * vec2(1.0, -1.0);
  vec2 n = normalize(u_normal);
  float d = dot(uv, n);

  float t = smoothstep(0.0, 1.0, u_time);
  float dist = mix(u_startDist, u_endDist, t);
  float mask = smoothstep(dist - u_blur, dist, d) - smoothstep(dist, dist + u_blur, d);

  outColor = texture(u_image, v_texCoords);
  outColor.rgb *= mix(1.0, 1.0 + u_lightness, mask);
}
`,Ct={default:{vertex:ge,fragment:Ei},default3d:{vertex:ki,fragment:Oi},wiggling:{vertex:ge,fragment:Ai},petrifiedShattered:{vertex:ge,fragment:Ui},petrifiedBroken:{vertex:ge,fragment:Bi},firework:{vertex:ge,fragment:Ni},bravo:{vertex:ge,fragment:Gi},invert:{vertex:ie,fragment:Mi},kernel:{vertex:ie,fragment:Fi},gradient2:{vertex:ie,fragment:Ii},gradient8:{vertex:ie,fragment:Li},contrast:{vertex:ie,fragment:Ri},bloom:{vertex:ie,fragment:ji},mix:{vertex:ie,fragment:Pi},vignette:{vertex:ie,fragment:Di}};class zi{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:Xi(this.gl,Ct[e].vertex,Ct[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Ze(t,e,n){for(const[r,o]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const a=e.uniformLocations[r];/image/i.test(r)&&typeof o=="number"?t.uniform1i(a,o):Array.isArray(o)?o.length===2?t.uniform2fv(a,o):o.length===3?t.uniform3fv(a,o):o.length===4?t.uniform4fv(a,o):o.length===9?t.uniformMatrix3fv(a,!1,o):o.length===16&&t.uniformMatrix4fv(a,!1,o):typeof o=="number"?t.uniform1f(a,o):typeof o=="boolean"&&t.uniform1i(a,o?1:0)}}function Xi(t,e,n){const r=yt(t,t.VERTEX_SHADER,e);let o;try{o=yt(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const a=t.createProgram();if(a===null)throw t.deleteShader(o),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),t.detachShader(a,o),t.detachShader(a,r),t.deleteShader(o),t.deleteShader(r),!t.getProgramParameter(a,t.LINK_STATUS)){const s=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`Failed to link program: ${s}`)}return a}function yt(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${o}`)}return r}function Hi(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let o,a;for(const s of n){o!==s.program&&(t.useProgram(s.program.program),o=s.program),a!==s.geometry&&(t.bindVertexArray(s.geometry.vao),a=s.geometry);const l=s.getUniforms(e);Ze(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Ze(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const he={a_position:0,a_texCoords:1,a_normal:2};function qi(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(he.a_position),t.vertexAttribPointer(he.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(he.a_texCoords),t.vertexAttribPointer(he.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(he.a_normal),t.vertexAttribPointer(he.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const Vi={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class Yi{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=qi(this.gl,Vi[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const Wi=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],xt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_weights:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"mix",uniforms:{u_weights:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function wt(t,e){return e.map(n=>({program:t.createProgram(xt[n].program),uniforms:xt[n].uniforms}))}class Ji{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new zi(this.gl),this.geometryFactory=new Yi(this.gl),this.texture=new Je(this.gl,0),this.additionalTextures=[new Je(this.gl,3),new Je(this.gl,4)],this.renderTextures=[new $t(this.gl,1),new $t(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;additionalTextures;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,o)=>{const a=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:o,frame:0,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:a,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;a.onmessage=c=>{const d=c.data;let _;switch(d.type){case"Ready":s.workerReady=!0,_={type:"Init",width:l,height:i,delayMs:u,quality:f},a.postMessage(_);break;case"FrameAdded":n();break;case"Success":this.resolve(d.dataUri);break;case"Failure":this.reject(d.error);break;default:(h=>{this.reject(`Cannot handle worker message: ${JSON.stringify(d)}`)})()}},a.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,o)=>{const a={type:"frame",request:e,resolve:r,reject:o,frame:n,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(a)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:o,sprites:a,effects:s,frame:l}=e,{image:i,additionalImages:u,output:f}=r;if(!(l>=f.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await Promise.all([this.texture.loadImage(i.url),...this.additionalTextures.map((h,m)=>u.urls[m]?h.loadImage(u.urls[m]):Promise.resolve())]),e!==this.current)return;const{width:c,height:d}=f;this.renderTextures.forEach(h=>h.setSize(c,d)),this.canvas.width=c,this.canvas.height=d,this.gl.viewport(0,0,c,d),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.additionalTextures.forEach(h=>{this.gl.activeTexture(this.gl.TEXTURE0+h.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,h.texture)});const _={u_image:this.texture.unit,u_screenSize:[c,d]};this.additionalTextures.forEach((h,m)=>{const $=`u_additionalImages[${m}]`;_[$]=h.unit});for(const h of Ti(a.map(m=>m.program)))this.gl.useProgram(h.program),Ze(this.gl,h,_)}if(Hi(this.gl,l/r.output.totalFrames,a,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")o();else{const c=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,c);const{worker:d}=e,_={type:"AddFrame",buffer:c.buffer};if(d.postMessage(_,[c.buffer]),l===f.totalFrames-1){const h={type:"GetResult"};d.postMessage(h)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.additionalTextures.forEach(e=>e.destroy()),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const se=function(){const{subscribe:t,update:e}=Ge({animations:Ve,current:Ve[0]}),n=a=>{e(s=>s.current===a||!s.animations.find(i=>i===a)?s:{animations:s.animations,current:a})};function r(a,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===a?{...a,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function o(){e(({animations:a,current:s})=>{const l=Ve.find(i=>i.name===s.name);return{animations:a.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:o}}(),Le=function(){const{subscribe:t,update:e}=Ge(Wi.map(o=>({type:o,enabled:!1})));function n(o,a){e(s=>s.map(l=>l.type===o?{type:o,enabled:a}:l))}function r(){e(o=>o.map(a=>({...a,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function ot(t){let e=!0;const{subscribe:n,update:r}=Ge(void 0,s=>se.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function o(s){r(l=>(e=!1,{...l,...s}))}function a(){r(()=>(e=!0,Oe(se).current.defaultOptions[t]))}return{subscribe:n,change:o,reset:a}}const je=ot("image"),Ki=ot("additionalImages"),re=ot("output"),Qe=En([je,Ki,re,se,Le],([t,e,n,r,o])=>({image:t,additionalImages:e,output:n,animation:r.current,effects:o})),Ee=function(){const t=Ge({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new Ji(s),running:!1,frame:0}))}function o(){const{animator:s}=Oe(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(Oe(Qe),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function a(s){const{animator:l,frame:i}=Oe(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=Oe(Qe);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:o,renderFrame:a}}();function St(t,{delay:e=0,duration:n=400,easing:r=dn}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*o}`}}function Tt(t){let e,n,r;const o=t[5].default,a=hn(o,t,t[4],null);return{c(){e=y("div"),a&&a.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=w(e);a&&a.l(l),l.forEach(b),this.h()},h(){g(e,"class","section__content svelte-v2pn2e")},m(s,l){P(s,e,l),a&&a.m(e,null),r=!0},p(s,l){a&&a.p&&(!r||l&16)&&_n(a,o,s,s[4],r?vn(o,s[4],l,null):pn(s[4]),null)},i(s){r||(k(a,s),bn(()=>{n||(n=st(e,St,{duration:250},!0)),n.run(1)}),r=!0)},o(s){A(a,s),n||(n=st(e,St,{duration:250},!1)),n.run(0),r=!1},d(s){s&&b(e),a&&a.d(s),s&&n&&n.end()}}}function Zi(t){let e,n,r,o,a=t[0]?"-":"+",s,l,i,u,f,c,d,_,h,m,$,C,v=t[0]&&Tt(t);return{c(){e=y("section"),n=y("header"),r=y("button"),o=L("["),s=L(a),l=L("]"),i=O(),u=y("h2"),f=L(t[1]),c=O(),d=y("button"),_=L("Reset"),h=O(),v&&v.c(),this.h()},l(S){e=x(S,"SECTION",{class:!0});var T=w(e);n=x(T,"HEADER",{class:!0});var H=w(n);r=x(H,"BUTTON",{class:!0,type:!0});var q=w(r);o=j(q,"["),s=j(q,a),l=j(q,"]"),q.forEach(b),i=M(H),u=x(H,"H2",{class:!0});var Y=w(u);f=j(Y,t[1]),Y.forEach(b),c=M(H),d=x(H,"BUTTON",{class:!0,type:!0});var V=w(d);_=j(V,"Reset"),V.forEach(b),H.forEach(b),h=M(T),v&&v.l(T),T.forEach(b),this.h()},h(){g(r,"class","section__expand svelte-v2pn2e"),g(r,"type","button"),g(u,"class","section__heading svelte-v2pn2e"),g(d,"class","section__reset svelte-v2pn2e"),g(d,"type","button"),g(n,"class","section__header svelte-v2pn2e"),g(e,"class","section svelte-v2pn2e")},m(S,T){P(S,e,T),p(e,n),p(n,r),p(r,o),p(r,s),p(r,l),p(n,i),p(n,u),p(u,f),p(n,c),p(n,d),p(d,_),p(e,h),v&&v.m(e,null),m=!0,$||(C=[ae(r,"click",t[3]),ae(u,"click",t[3]),ae(u,"keypress",t[3]),ae(d,"click",t[6])],$=!0)},p(S,[T]){(!m||T&1)&&a!==(a=S[0]?"-":"+")&&te(s,a),(!m||T&2)&&te(f,S[1]),S[0]?v?(v.p(S,T),T&1&&k(v,1)):(v=Tt(S),v.c(),k(v,1),v.m(e,null)):v&&(Be(),A(v,1,1,()=>{v=null}),Ne())},i(S){m||(k(v),m=!0)},o(S){A(v),m=!1},d(S){S&&b(e),v&&v.d(),$=!1,gn(C)}}}function Qi(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:a=""}=e,{expanded:s=!0}=e;const l=et();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,a=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,o=f.$$scope)},[s,a,l,i,o,r,u]}class Ue extends W{constructor(e){super(),J(this,e,Qi,Zi,K,{title:1,expanded:0})}}function el(t){let e,n,r,o,a,s,l,i;return{c(){e=y("label"),n=y("input"),r=O(),o=y("div"),a=y("img"),this.h()},l(u){e=x(u,"LABEL",{class:!0});var f=w(e);n=x(f,"INPUT",{class:!0,type:!0,accept:!0}),r=M(f),o=x(f,"DIV",{class:!0});var c=w(o);a=x(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(b),f.forEach(b),this.h()},h(){g(n,"class","image__input svelte-1me35do"),g(n,"type","file"),g(n,"accept","image/*"),g(a,"class","image__preview svelte-1me35do"),me(a.src,s=t[0].url)||g(a,"src",s),g(a,"alt","source"),g(o,"class","image__container svelte-1me35do"),g(e,"class","image svelte-1me35do")},m(u,f){P(u,e,f),p(e,n),p(e,r),p(e,o),p(o,a),l||(i=ae(n,"input",t[1]),l=!0)},p(u,f){f&1&&!me(a.src,s=u[0].url)&&g(a,"src",s)},d(u){u&&b(e),l=!1,i()}}}function tl(t){let e,n;return e=new Ue({props:{title:"Image",expanded:!0,$$slots:{default:[el]},$$scope:{ctx:t}}}),e.$on("reset",je.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&5&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function nl(t,e,n){let r;ue(t,je,a=>n(0,r=a));function o(a){const l=a.target.files?.[0];l&&je.change({url:URL.createObjectURL(l)})}return[r,o]}class rl extends W{constructor(e){super(),J(this,e,nl,tl,K,{})}}function Et(t){let e,n,r,o,a,s;return{c(){e=y("label"),n=L(t[1]),r=O(),o=y("input"),this.h()},l(l){e=x(l,"LABEL",{class:!0});var i=w(e);n=j(i,t[1]),r=M(i),o=x(i,"INPUT",{class:!0,type:!0}),i.forEach(b),this.h()},h(){g(o,"class","slider__text-input svelte-1h0gcvd"),g(o,"type","text"),o.value=t[0],g(e,"class","slider__label svelte-1h0gcvd")},m(l,i){P(l,e,i),p(e,n),p(e,r),p(e,o),a||(s=ae(o,"input",t[5]),a=!0)},p(l,i){i&2&&te(n,l[1]),i&1&&o.value!==l[0]&&(o.value=l[0])},d(l){l&&b(e),a=!1,s()}}}function ol(t){let e,n,r,o,a=Pe(t[2])+"",s,l,i,u,f,c,d=Pe(t[3])+"",_,h,m,$=t[1]&&Et(t);return{c(){e=y("div"),$&&$.c(),n=O(),r=y("div"),o=y("span"),s=L(a),l=O(),i=y("div"),u=y("input"),f=O(),c=y("span"),_=L(d),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);$&&$.l(v),n=M(v),r=x(v,"DIV",{class:!0});var S=w(r);o=x(S,"SPAN",{class:!0});var T=w(o);s=j(T,a),T.forEach(b),l=M(S),i=x(S,"DIV",{class:!0});var H=w(i);u=x(H,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),H.forEach(b),f=M(S),c=x(S,"SPAN",{class:!0});var q=w(c);_=j(q,d),q.forEach(b),S.forEach(b),v.forEach(b),this.h()},h(){g(o,"class","slider__range slider__range--min svelte-1h0gcvd"),g(u,"class","slider__input svelte-1h0gcvd"),g(u,"type","range"),g(u,"min",t[2]),g(u,"max",t[3]),g(u,"step",t[4]),u.value=t[0],g(i,"class","slider__input-container svelte-1h0gcvd"),g(c,"class","slider__range slider__range--max"),g(r,"class","slider__container svelte-1h0gcvd"),g(e,"class","slider")},m(C,v){P(C,e,v),$&&$.m(e,null),p(e,n),p(e,r),p(r,o),p(o,s),p(r,l),p(r,i),p(i,u),p(r,f),p(r,c),p(c,_),h||(m=ae(u,"input",t[5]),h=!0)},p(C,[v]){C[1]?$?$.p(C,v):($=Et(C),$.c(),$.m(e,n)):$&&($.d(1),$=null),v&4&&a!==(a=Pe(C[2])+"")&&te(s,a),v&4&&g(u,"min",C[2]),v&8&&g(u,"max",C[3]),v&16&&g(u,"step",C[4]),v&1&&(u.value=C[0]),v&8&&d!==(d=Pe(C[3])+"")&&te(_,d)},i:ce,o:ce,d(C){C&&b(e),$&&$.d(),h=!1,m()}}}function Pe(t){return t.toFixed(2).replace(/\.?0+$/,"")}function al(t,e,n){const r=et();let{label:o=""}=e,{min:a=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<a?a:(s-a)/2}=e;function u(f){const c=f.target,d=parseFloat(c.value);Number.isNaN(d)||(n(0,i=d),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,o=f.label),"min"in f&&n(2,a=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,o,a,s,l,u]}class fe extends W{constructor(e){super(),J(this,e,al,ol,K,{label:1,min:2,max:3,step:4,value:0})}}function sl(t){let e,n,r,o,a,s,l,i,u,f;return e=new fe({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new fe({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),a=new fe({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),a.$on("input",t[3]),l=new fe({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new fe({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){U(e.$$.fragment),n=O(),U(r.$$.fragment),o=O(),U(a.$$.fragment),s=O(),U(l.$$.fragment),i=O(),U(u.$$.fragment)},l(c){B(e.$$.fragment,c),n=M(c),B(r.$$.fragment,c),o=M(c),B(a.$$.fragment,c),s=M(c),B(l.$$.fragment,c),i=M(c),B(u.$$.fragment,c)},m(c,d){N(e,c,d),P(c,n,d),N(r,c,d),P(c,o,d),N(a,c,d),P(c,s,d),N(l,c,d),P(c,i,d),N(u,c,d),f=!0},p(c,d){const _={};d&1&&(_.value=c[0].width),e.$set(_);const h={};d&1&&(h.value=c[0].height),r.$set(h);const m={};d&1&&(m.value=c[0].delayMs),a.$set(m);const $={};d&1&&($.value=c[0].totalFrames),l.$set($);const C={};d&1&&(C.value=c[0].quality),u.$set(C)},i(c){f||(k(e.$$.fragment,c),k(r.$$.fragment,c),k(a.$$.fragment,c),k(l.$$.fragment,c),k(u.$$.fragment,c),f=!0)},o(c){A(e.$$.fragment,c),A(r.$$.fragment,c),A(a.$$.fragment,c),A(l.$$.fragment,c),A(u.$$.fragment,c),f=!1},d(c){G(e,c),c&&b(n),G(r,c),c&&b(o),G(a,c),c&&b(s),G(l,c),c&&b(i),G(u,c)}}}function il(t){let e,n;return e=new Ue({props:{title:"Output",expanded:!0,$$slots:{default:[sl]},$$scope:{ctx:t}}}),e.$on("reset",re.reset),{c(){U(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,o){N(e,r,o),n=!0},p(r,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function ll(t,e,n){let r;return ue(t,re,u=>n(0,r=u)),[r,u=>re.change({width:u.detail.value}),u=>re.change({height:u.detail.value}),u=>re.change({delayMs:u.detail.value}),u=>re.change({totalFrames:u.detail.value}),u=>re.change({quality:u.detail.value})]}class ul extends W{constructor(e){super(),J(this,e,ll,il,K,{})}}function cl(t){let e,n,r,o,a,s;return n=new rl({}),o=new ul({}),{c(){e=y("aside"),U(n.$$.fragment),r=O(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=M(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){g(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),p(e,r),N(o,e,null),s=!0},p(l,[i]){(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&g(e,"class",a)},i(l){s||(k(n.$$.fragment,l),k(o.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function fl(t,e,n){let{class:r=""}=e;return t.$$set=o=>{"class"in o&&n(0,r=o.class)},[r]}class ml extends W{constructor(e){super(),J(this,e,fl,cl,K,{class:0})}}function dl(t){let e,n,r,o,a,s,l;return{c(){e=y("div"),n=L(t[1]),r=O(),o=y("label"),a=y("input"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=j(u,t[1]),r=M(u),o=x(u,"LABEL",{class:!0});var f=w(o);a=x(f,"INPUT",{class:!0,type:!0}),f.forEach(b),u.forEach(b),this.h()},h(){g(a,"class","toggle__checkbox svelte-1j9rfin"),g(a,"type","checkbox"),a.checked=t[0],g(o,"class","toggle__label svelte-1j9rfin"),le(o,"toggle__label--active",t[0]),g(e,"class","toggle svelte-1j9rfin")},m(i,u){P(i,e,u),p(e,n),p(e,r),p(e,o),p(o,a),s||(l=ae(a,"change",t[2]),s=!0)},p(i,[u]){u&2&&te(n,i[1]),u&1&&(a.checked=i[0]),u&1&&le(o,"toggle__label--active",i[0])},i:ce,o:ce,d(i){i&&b(e),s=!1,l()}}}function gl(t,e,n){const r=et();let{label:o=""}=e,{value:a=!1}=e;function s(l){const i=l.target;n(0,a=Boolean(i.checked)),r("change",{value:a})}return t.$$set=l=>{"label"in l&&n(1,o=l.label),"value"in l&&n(0,a=l.value)},[a,o,s]}class at extends W{constructor(e){super(),J(this,e,gl,dl,K,{label:1,value:0})}}function kt(t,e,n){const r=t.slice();return r[6]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[9]=e[n],r}function hl(t){let e,n;function r(...o){return t[4](t[9],...o)}return e=new at({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function _l(t){let e,n;function r(...o){return t[3](t[9],...o)}return e=new fe({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&2&&(s.label=t[9].name),a&2&&(s.min=t[9].min),a&2&&(s.max=t[9].max),a&2&&(s.step=t[9].step),a&2&&(s.value=t[9].value),e.$set(s)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function Mt(t){let e,n,r,o;const a=[_l,hl],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=a[e](t)),{c(){n&&n.c(),r=_e()},l(i){n&&n.l(i),r=_e()},m(i,u){~e&&s[e].m(i,u),P(i,r,u),o=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(Be(),A(s[f],1,1,()=>{s[f]=null}),Ne()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=a[e](i),n.c()),k(n,1),n.m(r.parentNode,r)):n=null)},i(i){o||(k(n),o=!0)},o(i){A(n),o=!1},d(i){~e&&s[e].d(i),i&&b(r)}}}function pl(t){let e,n,r=t[1].current.editOptions,o=[];for(let s=0;s<r.length;s+=1)o[s]=Mt(Ot(t,r,s));const a=s=>A(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=_e()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=_e()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=Ot(s,r,i);o[i]?(o[i].p(u,l),k(o[i],1)):(o[i]=Mt(u),o[i].c(),k(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)k(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)A(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function At(t){let e,n;function r(...o){return t[5](t[6],...o)}return e=new at({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){U(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,a){N(e,o,a),n=!0},p(o,a){t=o;const s={};a&4&&(s.label=t[6].type),a&4&&(s.value=t[6].enabled),e.$set(s)},i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function vl(t){let e,n,r=t[2],o=[];for(let s=0;s<r.length;s+=1)o[s]=At(kt(t,r,s));const a=s=>A(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=_e()},l(s){for(let l=0;l<o.length;l+=1)o[l].l(s);e=_e()},m(s,l){for(let i=0;i<o.length;i+=1)o[i].m(s,l);P(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=kt(s,r,i);o[i]?(o[i].p(u,l),k(o[i],1)):(o[i]=At(u),o[i].c(),k(o[i],1),o[i].m(e.parentNode,e))}for(Be(),i=r.length;i<o.length;i+=1)a(i);Ne()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)k(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)A(o[l]);n=!1},d(s){jt(o,s),s&&b(e)}}}function bl(t){let e,n,r,o,a,s;return n=new Ue({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[pl]},$$scope:{ctx:t}}}),n.$on("reset",se.resetEditOptions),o=new Ue({props:{title:"Effects",expanded:!0,$$slots:{default:[vl]},$$scope:{ctx:t}}}),o.$on("reset",Le.reset),{c(){e=y("aside"),U(n.$$.fragment),r=O(),U(o.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);B(n.$$.fragment,i),r=M(i),B(o.$$.fragment,i),i.forEach(b),this.h()},h(){g(e,"class",a=ee(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){P(l,e,i),N(n,e,null),p(e,r),N(o,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),o.$set(f),(!s||i&1&&a!==(a=ee(`container ${l[0]}`)+" svelte-7v3svs"))&&g(e,"class",a)},i(l){s||(k(n.$$.fragment,l),k(o.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),A(o.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(o)}}}function $l(t,e,n){let r,o;ue(t,se,u=>n(1,r=u)),ue(t,Le,u=>n(2,o=u));let{class:a=""}=e;const s=(u,f)=>se.changeEditOptions(u,f.detail.value),l=(u,f)=>se.changeEditOptions(u,f.detail.value),i=(u,f)=>Le.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,a=u.class)},[a,r,o,s,l,i]}class Cl extends W{constructor(e){super(),J(this,e,$l,bl,K,{class:0})}}function Pt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Dt(t,e){let n,r,o,a,s,l,i=e[3].name+"",u,f,c,d;function _(){return e[2](e[3])}return{key:t,first:null,c(){n=y("button"),r=y("img"),s=O(),l=y("span"),u=L(i),f=O(),this.h()},l(h){n=x(h,"BUTTON",{type:!0,class:!0});var m=w(n);r=x(m,"IMG",{class:!0,src:!0,alt:!0}),s=M(m),l=x(m,"SPAN",{});var $=w(l);u=j($,i),$.forEach(b),f=M(m),m.forEach(b),this.h()},h(){g(r,"class","image svelte-1l1v01j"),me(r.src,o=`${pe}/demo-${e[3].name}.gif`)||g(r,"src",o),g(r,"alt",a=e[3].name),g(n,"type","button"),g(n,"class","option svelte-1l1v01j"),le(n,"option--selected",e[3]===e[1].current),this.first=n},m(h,m){P(h,n,m),p(n,r),p(n,s),p(n,l),p(l,u),p(n,f),c||(d=ae(n,"click",_),c=!0)},p(h,m){e=h,m&2&&!me(r.src,o=`${pe}/demo-${e[3].name}.gif`)&&g(r,"src",o),m&2&&a!==(a=e[3].name)&&g(r,"alt",a),m&2&&i!==(i=e[3].name+"")&&te(u,i),m&2&&le(n,"option--selected",e[3]===e[1].current)},d(h){h&&b(n),c=!1,d()}}}function yl(t){let e,n=[],r=new Map,o,a=t[1].animations;const s=l=>l[3].name;for(let l=0;l<a.length;l+=1){let i=Pt(t,a,l),u=s(i);r.set(u,n[l]=Dt(u,i))}return{c(){e=y("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(b),this.h()},h(){g(e,"class",o=ee(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){P(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(a=l[1].animations,n=$n(n,i,s,1,l,a,r,e,Cn,Dt,null,Pt)),i&1&&o!==(o=ee(`container ${l[0]}`)+" svelte-1l1v01j")&&g(e,"class",o)},i:ce,o:ce,d(l){l&&b(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function xl(t,e,n){let r;ue(t,se,s=>n(1,r=s));let{class:o=""}=e;const a=s=>se.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,o=s.class)},[o,r,a]}class wl extends W{constructor(e){super(),J(this,e,xl,yl,K,{class:0})}}function Rt(t){t[12]=t[13].dataUri}function Ft(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:El,then:Tl,catch:Sl,value:13,error:14};return it(n=t[3],r),{c(){e=y("div"),r.block.c(),this.h()},l(o){e=x(o,"DIV",{class:!0});var a=w(e);r.block.l(a),a.forEach(b),this.h()},h(){g(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(o,a){P(o,e,a),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(o,a){t=o,r.ctx=t,a&8&&n!==(n=t[3])&&it(n,r)||wn(r,t,a)},d(o){o&&b(e),r.block.d(),r.token=null,r=null}}}function Sl(t){let e,n,r=t[14]+"",o;return{c(){e=y("p"),n=L("An error has occurred: "),o=L(r),this.h()},l(a){e=x(a,"P",{class:!0});var s=w(e);n=j(s,"An error has occurred: "),o=j(s,r),s.forEach(b),this.h()},h(){g(e,"class","preview__error svelte-13qbjon")},m(a,s){P(a,e,s),p(e,n),p(e,o)},p(a,s){s&8&&r!==(r=a[14]+"")&&te(o,r)},d(a){a&&b(e)}}}function Tl(t){Rt(t);let e,n,r,o,a,s,l;return{c(){e=y("div"),n=y("img"),o=O(),a=y("a"),s=L("Download"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=x(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(b),o=M(i),a=x(i,"A",{class:!0,download:!0,href:!0});var f=w(a);s=j(f,"Download"),f.forEach(b),this.h()},h(){g(n,"class","preview__image svelte-13qbjon"),me(n.src,r=t[12])||g(n,"src",r),g(n,"alt","generated gif"),g(e,"class","preview__image-container svelte-13qbjon"),g(a,"class","preview__download-button svelte-13qbjon"),g(a,"download","jumping_peter.gif"),g(a,"href",l=t[12])},m(i,u){P(i,e,u),p(e,n),P(i,o,u),P(i,a,u),p(a,s)},p(i,u){Rt(i),u&8&&!me(n.src,r=i[12])&&g(n,"src",r),u&8&&l!==(l=i[12])&&g(a,"href",l)},d(i){i&&b(e),i&&b(o),i&&b(a)}}}function El(t){let e,n,r,o,a,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,d,_,h,m,$;return{c(){e=y("div"),n=y("p"),r=L("Generating..."),o=O(),a=y("p"),s=L("["),i=L(l),u=L(" / "),c=L(f),d=L("]"),_=O(),h=y("progress"),this.h()},l(C){e=x(C,"DIV",{class:!0});var v=w(e);n=x(v,"P",{});var S=w(n);r=j(S,"Generating..."),S.forEach(b),o=M(v),a=x(v,"P",{});var T=w(a);s=j(T,"["),i=j(T,l),u=j(T," / "),c=j(T,f),d=j(T,"]"),T.forEach(b),_=M(v),h=x(v,"PROGRESS",{class:!0,max:!0}),w(h).forEach(b),v.forEach(b),this.h()},h(){g(h,"class","preview__progress svelte-13qbjon"),g(h,"max",m=t[5].totalFrames),h.value=$=t[4].frame,g(e,"class","preview__loading svelte-13qbjon")},m(C,v){P(C,e,v),p(e,n),p(n,r),p(e,o),p(e,a),p(a,s),p(a,i),p(a,u),p(a,c),p(a,d),p(e,_),p(e,h)},p(C,v){v&16&&l!==(l=C[4].frame+"")&&te(i,l),v&32&&f!==(f=C[5].totalFrames+"")&&te(c,f),v&32&&m!==(m=C[5].totalFrames)&&g(h,"max",m),v&16&&$!==($=C[4].frame)&&(h.value=$)},d(C){C&&b(e)}}}function kl(t){let e,n,r,o,a,s,l,i,u,f,c,d;r=new at({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let _=!t[1]&&t[3]&&Ft(t);return f=new fe({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=y("main"),n=y("div"),U(r.$$.fragment),o=O(),_&&_.c(),a=O(),s=y("div"),l=y("div"),i=y("canvas"),u=O(),U(f.$$.fragment),this.h()},l(h){e=x(h,"MAIN",{class:!0});var m=w(e);n=x(m,"DIV",{class:!0});var $=w(n);B(r.$$.fragment,$),$.forEach(b),o=M(m),_&&_.l(m),a=M(m),s=x(m,"DIV",{class:!0});var C=w(s);l=x(C,"DIV",{class:!0});var v=w(l);i=x(v,"CANVAS",{class:!0,style:!0}),w(i).forEach(b),v.forEach(b),u=M(C),B(f.$$.fragment,C),C.forEach(b),m.forEach(b),this.h()},h(){g(n,"class","preview__debug-input svelte-13qbjon"),g(i,"class","preview__image svelte-13qbjon"),yn(i,"transform","scaleY(-1)"),g(l,"class","preview__image-container svelte-13qbjon"),g(s,"class","preview__container preview__container--debug svelte-13qbjon"),g(e,"class",c=ee(`preview ${t[0]}`)+" svelte-13qbjon"),le(e,"preview--debug",t[1]),le(e,"preview--no-debug",!t[1])},m(h,m){P(h,e,m),p(e,n),N(r,n,null),p(e,o),_&&_.m(e,null),p(e,a),p(e,s),p(s,l),p(l,i),t[9](i),p(s,u),N(f,s,null),d=!0},p(h,[m]){const $={};m&2&&($.value=h[1]),r.$set($),!h[1]&&h[3]?_?_.p(h,m):(_=Ft(h),_.c(),_.m(e,a)):_&&(_.d(1),_=null);const C={};m&32&&(C.max=h[5].totalFrames-1),m&16&&(C.value=h[4].frame),f.$set(C),(!d||m&1&&c!==(c=ee(`preview ${h[0]}`)+" svelte-13qbjon"))&&g(e,"class",c),(!d||m&3)&&le(e,"preview--debug",h[1]),(!d||m&3)&&le(e,"preview--no-debug",!h[1])},i(h){d||(k(r.$$.fragment,h),k(f.$$.fragment,h),d=!0)},o(h){A(r.$$.fragment,h),A(f.$$.fragment,h),d=!1},d(h){h&&b(e),G(r),_&&_.d(),t[9](null),G(f)}}}function Ol(t,e,n){let r,o,a;ue(t,Qe,m=>n(8,r=m)),ue(t,Ee,m=>n(4,o=m)),ue(t,re,m=>n(5,a=m));let s,{class:l=""}=e,i=!1,u=null;function f(){Ee.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=Ee.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}xn(()=>{Ee.changeCanvas(s),c()});function d(m){Ee.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function _(m){n(1,i=m.detail.value)}function h(m){Sn[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,o,a,d,_,r,h]}class Ml extends W{constructor(e){super(),J(this,e,Ol,kl,K,{class:0})}}function Al(t){let e,n,r,o,a,s,l,i,u,f,c,d,_,h,m,$,C,v,S,T,H,q,Y,V,ne;return document.title=e=ke,$=new Mn({props:{class:"header"}}),v=new wl({props:{class:"animations"}}),T=new ml({props:{class:"common-options"}}),q=new Cl({props:{class:"animation-options"}}),V=new Ml({props:{class:"preview"}}),{c(){n=y("meta"),r=y("meta"),o=y("meta"),a=y("meta"),s=y("meta"),l=y("meta"),i=y("meta"),u=y("meta"),f=y("meta"),c=y("meta"),d=y("meta"),_=y("meta"),h=O(),m=y("div"),U($.$$.fragment),C=O(),U(v.$$.fragment),S=O(),U(T.$$.fragment),H=O(),U(q.$$.fragment),Y=O(),U(V.$$.fragment),this.h()},l(D){const I=Tn("svelte-2dqrj",document.head);n=x(I,"META",{name:!0,content:!0,class:!0}),r=x(I,"META",{name:!0,content:!0,class:!0}),o=x(I,"META",{property:!0,content:!0,class:!0}),a=x(I,"META",{property:!0,content:!0,class:!0}),s=x(I,"META",{property:!0,content:!0,class:!0}),l=x(I,"META",{property:!0,content:!0,class:!0}),i=x(I,"META",{property:!0,content:!0,class:!0}),u=x(I,"META",{property:!0,content:!0,class:!0}),f=x(I,"META",{property:!0,content:!0,class:!0}),c=x(I,"META",{property:!0,content:!0,class:!0}),d=x(I,"META",{property:!0,content:!0,class:!0}),_=x(I,"META",{property:!0,content:!0,class:!0}),I.forEach(b),h=M(D),m=x(D,"DIV",{class:!0});var Z=w(m);B($.$$.fragment,Z),C=M(Z),B(v.$$.fragment,Z),S=M(Z),B(T.$$.fragment,Z),H=M(Z),B(q.$$.fragment,Z),Y=M(Z),B(V.$$.fragment,Z),Z.forEach(b),this.h()},h(){g(n,"name","title"),g(n,"content",ke),g(n,"class","svelte-14fuh2n"),g(r,"name","description"),g(r,"content",Ke),g(r,"class","svelte-14fuh2n"),g(o,"property","og:type"),g(o,"content","website"),g(o,"class","svelte-14fuh2n"),g(a,"property","og:url"),g(a,"content",It),g(a,"class","svelte-14fuh2n"),g(s,"property","og:title"),g(s,"content",ke),g(s,"class","svelte-14fuh2n"),g(l,"property","og:description"),g(l,"content",Ke),g(l,"class","svelte-14fuh2n"),g(i,"property","og:image"),g(i,"content",Lt),g(i,"class","svelte-14fuh2n"),g(u,"property","twitter:card"),g(u,"content","summary_large_image"),g(u,"class","svelte-14fuh2n"),g(f,"property","twitter:url"),g(f,"content",It),g(f,"class","svelte-14fuh2n"),g(c,"property","twitter:title"),g(c,"content",ke),g(c,"class","svelte-14fuh2n"),g(d,"property","twitter:description"),g(d,"content",Ke),g(d,"class","svelte-14fuh2n"),g(_,"property","twitter:image"),g(_,"content",Lt),g(_,"class","svelte-14fuh2n"),g(m,"class","grid svelte-14fuh2n")},m(D,I){p(document.head,n),p(document.head,r),p(document.head,o),p(document.head,a),p(document.head,s),p(document.head,l),p(document.head,i),p(document.head,u),p(document.head,f),p(document.head,c),p(document.head,d),p(document.head,_),P(D,h,I),P(D,m,I),N($,m,null),p(m,C),N(v,m,null),p(m,S),N(T,m,null),p(m,H),N(q,m,null),p(m,Y),N(V,m,null),ne=!0},p(D,[I]){(!ne||I&0)&&e!==(e=ke)&&(document.title=e)},i(D){ne||(k($.$$.fragment,D),k(v.$$.fragment,D),k(T.$$.fragment,D),k(q.$$.fragment,D),k(V.$$.fragment,D),ne=!0)},o(D){A($.$$.fragment,D),A(v.$$.fragment,D),A(T.$$.fragment,D),A(q.$$.fragment,D),A(V.$$.fragment,D),ne=!1},d(D){b(n),b(r),b(o),b(a),b(s),b(l),b(i),b(u),b(f),b(c),b(d),b(_),D&&b(h),D&&b(m),G($),G(v),G(T),G(q),G(V)}}}const ke="Jumping Peter",Ke="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",It="https://ksmai.github.io/jumping-peter",Lt="https://ksmai.github.io/jumping-peter/favicon.png";class Rl extends W{constructor(e){super(),J(this,e,null,Al,K,{})}}export{Rl as default};
