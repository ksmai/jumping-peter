import{S as V,i as Y,n as W,j as C,s as O,q as P,k as x,l as w,c as A,r as L,g as b,m as d,J as fe,K as Q,a as F,G as _,H as le,L as we,M as ln,N as re,u as ee,f as S,v as Ne,b as k,d as Ge,O as un,P as et,C as cn,D as fn,E as mn,F as dn,Q as gn,R as st,y as j,z as U,A as N,B as G,I as ie,T as se,e as de,U as jt,V as hn,W as pn,p as _n,o as vn,X as it,Y as bn,w as $n,Z as yn}from"../chunks/index.a9aa9141.js";import{b as Ee,w as He,d as Cn}from"../chunks/paths.83168e79.js";function xn(t){let e,n,r,a,o,s,l,i,u,f,c,g,h;return{c(){e=C("header"),n=C("img"),a=O(),o=C("h1"),s=P("Jumping Peter"),l=O(),i=C("p"),u=P("generate gif emojis"),f=O(),c=C("a"),g=P("Contribute"),this.h()},l(p){e=x(p,"HEADER",{class:!0});var m=w(e);n=x(m,"IMG",{class:!0,src:!0,alt:!0}),a=A(m),o=x(m,"H1",{class:!0});var $=w(o);s=L($,"Jumping Peter"),$.forEach(b),l=A(m),i=x(m,"P",{class:!0});var y=w(i);u=L(y,"generate gif emojis"),y.forEach(b),f=A(m),c=x(m,"A",{class:!0,href:!0,target:!0,rel:!0});var v=w(c);g=L(v,"Contribute"),v.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","logo svelte-bal6b7"),fe(n.src,r=`${Ee}/demo-jumping.gif`)||d(n,"src",r),d(n,"alt",""),d(o,"class","title svelte-bal6b7"),d(i,"class","subtitle svelte-bal6b7"),d(c,"class","contribute svelte-bal6b7"),d(c,"href","https://github.com/ksmai/jumping-peter"),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(e,"class",h=Q(`header ${t[0]}`)+" svelte-bal6b7")},m(p,m){F(p,e,m),_(e,n),_(e,a),_(e,o),_(o,s),_(e,l),_(e,i),_(i,u),_(e,f),_(e,c),_(c,g)},p(p,[m]){m&1&&h!==(h=Q(`header ${p[0]}`)+" svelte-bal6b7")&&d(e,"class",h)},i:le,o:le,d(p){p&&b(e)}}}function wn(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class Tn extends V{constructor(e){super(),Y(this,e,wn,xn,W,{class:0})}}function ge(t){return{...t,type:"slider",min:-360,max:360,step:1}}function ue(t){return{...t,type:"slider",min:-1,max:1,step:.01}}function Z(t){return{...t,type:"slider",min:0,max:1,step:.01}}function Se(t){return{...t,type:"slider",min:0,max:2,step:.01}}function Re(t){return{...t,type:"slider",min:-2,max:2,step:.01}}function Ie(t){return{...t,type:"slider",min:.01,max:10,step:.01}}function lt(t){return{...t,type:"slider",min:-1,max:1,step:1}}function Te(t){return{...t,type:"slider",min:1,max:100,step:1}}function En(t){return{...t,type:"slider",min:1,max:5,step:1}}function Oe(t){return{...t,type:"toggle"}}function Sn(t){return t.reduce((e,n)=>(Object.assign(e,{[n.name]:n.value}),e),{})}const M={image:{url:`${Ee}/favicon.png`},additionalImages:{urls:[]},output:{width:64,height:64,delayMs:50,totalFrames:20,quality:21}};function H(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function he(t,e,n){t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=n,t[5]*=n,t[9]*=n,t[13]*=n}function X(t,e,n){Ut(t,e,n,0)}function On(t,e,n){const r=t[0],a=t[4],o=t[8],s=t[12];t[0]+=e*t[1],t[4]+=e*t[5],t[8]+=e*t[9],t[12]+=e*t[13],t[1]+=n*r,t[5]+=n*a,t[9]+=n*o,t[13]+=n*s}function Ut(t,e,n,r){t[12]+=e,t[13]+=n,t[14]+=r}function pe(t,e){tt(t,e,[0,0,1])}function tt(t,e,n){const r=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(r===0)return;const a=n[0]/r,o=n[1]/r,s=n[2]/r,l=e/180*Math.PI,i=Math.cos(l),u=Math.sin(l),f=[(1-i)*a*a+i,(1-i)*a*o+u*s,(1-i)*a*s-u*o,0,(1-i)*a*o-u*s,(1-i)*o*o+i,(1-i)*o*s-u*a,0,(1-i)*a*s+u*o,(1-i)*o*s-u*a,(1-i)*s*s+i,0,0,0,0,1];nt(t,f)}function Nt(t,e,n,r){Ut(t,-e[0],-e[1],-e[2]);const a=[-n[0],-n[1],-n[2]];ut(a);const o=ct(r,a);ut(o);const s=ct(a,o),l=[o[0],s[0],a[0],0,o[1],s[1],a[1],0,o[2],s[2],a[2],0,0,0,0,1];nt(t,l)}function Gt(t,e,n,r,a,o,s){const l=[2*o/(n-e),0,0,0,0,2*o/(a-r),0,0,(n+e)/(n-e),(a+r)/(a-r),-(s+o)/(s-o),-1,0,0,-2*s*o/(s-o),0];nt(t,l)}function nt(t,e){const n=t.slice();for(let r=0;r<=3;++r)for(let a=0;a<=3;++a){const o=4*r+a;t[o]=0;for(let s=0;s<=3;++s)t[o]+=e[4*s+a]*n[4*r+s]}}function ut(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e===0?t:[t[0]/e,t[1]/e,t[2]/e]}function ct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function R(t,e,n){return t+(e-t)*n}function _e(t){return t*Math.PI/180}function ft(t){const e=new Float32Array([t]),[n]=new Int32Array(e.buffer);let r=Math.abs(n)|0;return r=(r>>16^r)*73244475,r=(r>>16^r)*73244475,r=r>>16^r,r/(Math.pow(2,31)-1)}function Me(t,e){return Math.sin(t*e)*43758.5453%1}function An(t){return Me(t,127.1)}function kn(t){return[Me(t,127.1),Me(t,269.5),Me(t,631.2)]}function Mn(t){return e=>1-Math.pow(1-e,t)}function Ht(t){const e=Math.pow(2,t-1);return n=>n<.5?e*Math.pow(n,t):1-Math.pow(2*(1-n),t)/2}const Fe=Ht(3),Fn=Mn(2);function mt(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)}const Rn="spinning",In={...M,output:{...M.output,delayMs:50,totalFrames:15}},Pn=[ge({name:"startAngle",value:0}),ge({name:"endAngle",value:360}),ue({name:"originX",value:0}),ue({name:"originY",value:0}),Oe({name:"alternates",value:!1})];function qt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{alternates:o,startAngle:s,endAngle:l,originX:i,originY:u}=n;return[{program:r,geometry:a,getUniforms:c=>{const g=o?Math.min(c,1-c)*2:c,h=R(s,l,g),p=H();return X(p,-i,-u),pe(p,h),X(p,i,u),{u_model:p}}}]}const Ln=Object.freeze(Object.defineProperty({__proto__:null,createSprites:qt,defaultOptions:In,editOptions:Pn,name:Rn},Symbol.toStringTag,{value:"Module"})),Dn="expanding",jn={...M,output:{...M.output,delayMs:50,totalFrames:20}},Un=[Ie({name:"minScale",value:1}),Ie({name:"maxScale",value:2}),Oe({name:"alternates",value:!1})];function Xt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{minScale:o,maxScale:s,alternates:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=l?Math.min(u,1-u)*2:u,c=R(o,s,f),g=H();return he(g,c,c),{u_model:g}}}]}const Nn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Xt,defaultOptions:jn,editOptions:Un,name:Dn},Symbol.toStringTag,{value:"Module"})),Gn="extreme-speed",Hn={...M,output:{...M.output,delayMs:20,totalFrames:10}},qn=[lt({name:"directionX",value:-1}),lt({name:"directionY",value:0})];function Bt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("sudoku"),{directionX:o,directionY:s}=n,l=o*2,i=s*2;return[{program:r,geometry:a,getUniforms:f=>{const c=H(),g=R(0,l,f),h=R(0,i,f);return X(c,g,h),{u_model:c}}}]}const Xn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Bt,defaultOptions:Hn,editOptions:qn,name:Gn},Symbol.toStringTag,{value:"Module"})),Bn="excited",zn={...M,output:{...M.output,delayMs:50,totalFrames:25}},Vn=[ge({name:"angle",value:15}),Re({name:"startOffset",value:-.2}),Re({name:"endOffset",value:.2}),Te({name:"cycles",value:3})];function zt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{angle:o,cycles:s,startOffset:l,endOffset:i}=n,u=_e(o),f=Math.cos(u),c=Math.sin(u);return[{program:r,geometry:a,getUniforms:h=>{const p=h*2*s%1,m=Math.min(p,1-p)*2,$=R(-l*c,-i*c,m),y=R(l*f,i*f,m),v=H();return pe(v,o),X(v,$,y),he(v,h>.5?-1:1,1),{u_model:v}}}]}const Yn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:zt,defaultOptions:zn,editOptions:Vn,name:Bn},Symbol.toStringTag,{value:"Module"})),Wn="jumping",Jn={...M,output:{...M.output,delayMs:50,totalFrames:20}},Kn=[Se({name:"maxOffset",value:1.2}),Z({name:"compressTime",value:.4}),Z({name:"maxCompress",value:.3})];function Vt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffset:o,compressTime:s,maxCompress:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=Math.min(u,1-u)*2,c=H(),g=f/(1-s);if(g<1){const h=(1-g*g)*o;X(c,0,h)}else{const h=(1-f)/s,m=1-(1-h*h)*l;X(c,0,1),he(c,1/m,m),X(c,0,-1)}return{u_model:c}}}]}const Zn=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Vt,defaultOptions:Jn,editOptions:Kn,name:Wn},Symbol.toStringTag,{value:"Module"})),Qn="tower",er={...M,output:{...M.output,delayMs:40,totalFrames:20}},tr=[ge({name:"startAngle",value:20}),ge({name:"endAngle",value:-45}),Z({name:"startTime",value:.5})];function Yt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("tower"),{startAngle:o,endAngle:s,startTime:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=H();if(u<l){const c=u/l,g=Math.min(c,1-c)*2,h=R(0,o,g);pe(f,h)}else{const c=(u-l)/(1-l),g=Math.min(c,1-c)*2,h=R(0,s,g);if(pe(f,h),c>.5){const p=_e(h),m=Math.cos(p),$=Math.sin(p),y=(c-.5)*2,v=R(0,-2*$,y),T=R(0,2*m,y);X(f,v,T)}}return{u_model:f}}}]}const nr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Yt,defaultOptions:er,editOptions:tr,name:Qn},Symbol.toStringTag,{value:"Module"})),rr="repeated",ar={...M,output:{...M.output,delayMs:60,totalFrames:15}},or=[Ie({name:"initialScale",value:.1}),Oe({name:"horizontal",value:!1})];function Wt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{initialScale:o,horizontal:s}=n,l=s?{geometry:e.createGeometry("leftHalf"),endX:-1,endY:0}:{geometry:e.createGeometry("topHalf"),endX:0,endY:1},i=s?{geometry:e.createGeometry("rightHalf"),endX:1,endY:0}:{geometry:e.createGeometry("bottomHalf"),endX:0,endY:-1},u=g=>{const h=H(),p=Fe(g),m=R(o,1,p);return he(h,m,m),{u_model:h}},f=g=>{const h=H(),p=Fe(g),m=R(0,l.endX,p),$=R(0,l.endY,p);return X(h,m,$),{u_model:h}},c=g=>{const h=H(),p=Fe(g),m=R(0,i.endX,p),$=R(0,i.endY,p);return X(h,m,$),{u_model:h}};return[{program:r,geometry:a,getUniforms:u},{program:r,geometry:l.geometry,getUniforms:f},{program:r,geometry:i.geometry,getUniforms:c}]}const sr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Wt,defaultOptions:ar,editOptions:or,name:rr},Symbol.toStringTag,{value:"Module"})),ir="mirror",lr={...M,output:{...M.output,delayMs:50,totalFrames:16}},ur=[Oe({name:"rightHalf",value:!1})];function Jt(t,e,n){const r=t.createProgram("default"),{rightHalf:a}=n,o=e.createGeometry(a?"rightHalf":"leftHalf");return[{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=H(),c=mt(u),g=R(-2,-1,c);return a||he(f,-1,1),X(f,g,0),{u_model:f}}},{program:r,geometry:o,getUniforms:i=>{const u=Math.min(i,1-i)*2,f=H(),c=mt(u),g=R(2,1,c);return a&&he(f,-1,1),X(f,g,0),{u_model:f}}}]}const cr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Jt,defaultOptions:lr,editOptions:ur,name:ir},Symbol.toStringTag,{value:"Module"})),fr="panic",mr={...M,output:{...M.output,delayMs:30,totalFrames:16}},dr=[Se({name:"maxOffsetX",value:.15}),Se({name:"maxOffsetY",value:.15})];function Kt(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{maxOffsetX:o,maxOffsetY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=ft(i+.123),f=ft(i*2+1),c=R(-o,o,u),g=R(-s,s,f),h=H();return X(h,c,g),{u_model:h}}}]}const gr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Kt,defaultOptions:mr,editOptions:dr,name:fr},Symbol.toStringTag,{value:"Module"})),hr="rotating",pr={...M,output:{...M.output,delayMs:40,totalFrames:25}},_r=[ue({name:"axisX",value:0}),ue({name:"axisY",value:1}),ue({name:"axisZ",value:0}),ue({name:"originX",value:0}),ue({name:"originY",value:0}),En({name:"easing",value:1}),Oe({name:"alternates",value:!1})];function Zt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{axisX:o,axisY:s,axisZ:l,originX:i,originY:u,easing:f,alternates:c}=n,g=[o,s,l],h=Ht(f);return[{program:r,geometry:a,getUniforms:m=>{const $=c?Math.min(m,1-m)*2:m,y=h($),v=R(0,360,y),T=H();X(T,-i,-u),tt(T,v,g),X(T,i,u);const E=H();Nt(E,[0,0,3],[0,0,-1],[0,1,0]);const I=H();return Gt(I,-.03,.03,-.03,.03,.1,6),{u_model:T,u_view:E,u_projection:I,"u_material.specular":[1,1,1],"u_material.shininess":100,"u_directionalLight.ambient":[.6,.6,.6],"u_directionalLight.diffuse":[1,1,1],"u_directionalLight.specular":[1,1,1],"u_directionalLight.direction":[-1,-1,-5],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(_e(5)),"u_spotLight.outerCos":Math.cos(_e(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const vr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Zt,defaultOptions:pr,editOptions:_r,name:hr},Symbol.toStringTag,{value:"Module"})),br="party",$r={...M,output:{...M.output,delayMs:40,totalFrames:15}},yr=[ge({name:"angle",value:10}),Re({name:"startOffset",value:-.3}),Re({name:"endOffset",value:.5})];function Qt(t,e,n){const r=t.createProgram("default3d"),a=e.createGeometry("full"),{angle:o,startOffset:s,endOffset:l}=n;return[{program:r,geometry:a,getUniforms:u=>{const f=2*u%1,c=Math.min(f,1-f)*2,g=Fe(f),h=Fn(c),p=u<.5?R(0,180,g):R(180,360,g),m=R(s,l,h),$=H();pe($,o),X($,0,m),tt($,p,[0,1,0]);const y=H();Nt(y,[0,0,3],[0,0,-1],[0,1,0]);const v=H();return Gt(v,-.03,.03,-.03,.03,.1,6),{u_model:$,u_view:y,u_projection:v,"u_material.specular":[0,0,0],"u_material.shininess":32,"u_directionalLight.ambient":[1,1,1],"u_directionalLight.diffuse":[0,0,0],"u_directionalLight.specular":[0,0,0],"u_directionalLight.direction":[0,-1,-1],"u_pointLight.ambient":[0,0,0],"u_pointLight.diffuse":[0,0,0],"u_pointLight.specular":[0,0,0],"u_pointLight.position":[0,0,0],"u_pointLight.attenuation1":.2,"u_pointLight.attenuation2":.1,"u_spotLight.ambient":[0,0,0],"u_spotLight.diffuse":[0,0,0],"u_spotLight.specular":[0,0,0],"u_spotLight.position":[0,0,0],"u_spotLight.direction":[0,0,-1],"u_spotLight.innerCos":Math.cos(_e(5)),"u_spotLight.outerCos":Math.cos(_e(15)),"u_spotLight.attenuation1":.2,"u_spotLight.attenuation2":.1}}}]}const Cr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:Qt,defaultOptions:$r,editOptions:yr,name:br},Symbol.toStringTag,{value:"Module"})),xr="parrot",wr={...M,output:{...M.output,delayMs:20,totalFrames:18}},Tr=[Ie({name:"amplitudeX",value:.6}),Se({name:"amplitudeY",value:.5})];function en(t,e,n){const r=t.createProgram("default"),a=e.createGeometry("full"),{amplitudeX:o,amplitudeY:s}=n;return[{program:r,geometry:a,getUniforms:i=>{const u=Math.cos(i*2*Math.PI)*.5+.5,f=R(-o,o,u),c=Math.sin(i*2*Math.PI)*.5+.5,g=R(-s,0,c),h=H();return X(h,0,1),On(h,f,0),X(h,0,-1+g),{u_model:h}}}]}const Er=Object.freeze(Object.defineProperty({__proto__:null,createSprites:en,defaultOptions:wr,editOptions:Tr,name:xr},Symbol.toStringTag,{value:"Module"})),Sr="wiggling",Or={...M,output:{...M.output,delayMs:50,totalFrames:15}},Ar=[Te({name:"frequency",value:3}),Se({name:"amplitude",value:.05})];function tn(t,e,n){const r=t.createProgram("wiggling"),a=e.createGeometry("full"),{frequency:o,amplitude:s}=n;return[{program:r,geometry:a,getUniforms:i=>({u_model:H(),u_time:i,u_amplitude:s,u_frequency:o})}]}const kr=Object.freeze(Object.defineProperty({__proto__:null,createSprites:tn,defaultOptions:Or,editOptions:Ar,name:Sr},Symbol.toStringTag,{value:"Module"})),Mr="petrified",Fr={...M,additionalImages:{urls:[`${Ee}/stone.jpg`]},output:{...M.output,delayMs:150,totalFrames:20}},Rr=[Z({name:"edgeThreshold",value:.2}),Z({name:"edgeDarkness",value:.3}),Z({name:"timeBeforeShatter",value:.5}),Te({name:"seed",value:26}),Z({name:"maxHorizontalVelocity",value:1}),Z({name:"maxVerticalVelocity",value:1}),Z({name:"maxAngularVelocity",value:1}),Z({name:"maxAcceleration",value:1}),Te({name:"shatterColumns",value:4}),Te({name:"shatterRows",value:4})];function nn(t,e,n){const r=t.createProgram("petrified"),a=e.createGeometry("full"),{edgeThreshold:o,edgeDarkness:s,timeBeforeShatter:l,seed:i,maxHorizontalVelocity:u,maxVerticalVelocity:f,maxAngularVelocity:c,maxAcceleration:g,shatterColumns:h,shatterRows:p}=n;return Array(h*p).fill(null).map((m,$)=>({program:r,geometry:a,getUniforms(y){const v=H();if(y>l){const I=(y-l)/(1-l);let[q,J,z]=kn($+i*.761+1),te=An(z);q=q*u*1,J=J*f*3,te=te*360*c*.2,z=-Math.abs(z*g*30),pe(v,te*I),X(v,q*I,J*I+.5*z*I*I)}const T=$%h,E=Math.floor($/h);return{u_model:v,u_edgeThreshold:o,u_edgeDarkness:s,u_time:y,u_timeBeforeShatter:l,u_shatterColumns:h,u_shatterRows:p,u_column:T,u_row:E}}}))}const Ir=Object.freeze(Object.defineProperty({__proto__:null,createSprites:nn,defaultOptions:Fr,editOptions:Rr,name:Mr},Symbol.toStringTag,{value:"Module"})),Ve=[Zn,Xn,Ln,Yn,Nn,nr,sr,cr,gr,vr,Cr,Er,kr,Ir];function dt(t,e,n){const r=Sn(n.editOptions);switch(n.name){case"spinning":return qt(t,e,r);case"expanding":return Xt(t,e,r);case"extreme-speed":return Bt(t,e,r);case"excited":return zt(t,e,r);case"jumping":return Vt(t,e,r);case"tower":return Yt(t,e,r);case"repeated":return Wt(t,e,r);case"mirror":return Jt(t,e,r);case"panic":return Kt(t,e,r);case"rotating":return Zt(t,e,r);case"party":return Qt(t,e,r);case"parrot":return en(t,e,r);case"wiggling":return tn(t,e,r);case"petrified":return nn(t,e,r);default:(a=>{throw new Error(`Unknown animation: ${JSON.stringify(a)}`)})(n)}}var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pr=typeof Ae=="object"&&Ae&&Ae.Object===Object&&Ae,Lr=Pr,Dr=Lr,jr=typeof self=="object"&&self&&self.Object===Object&&self,Ur=Dr||jr||Function("return this")(),qe=Ur,Nr=qe,Gr=Nr.Symbol,rn=Gr,gt=rn,an=Object.prototype,Hr=an.hasOwnProperty,qr=an.toString,ye=gt?gt.toStringTag:void 0;function Xr(t){var e=Hr.call(t,ye),n=t[ye];try{t[ye]=void 0;var r=!0}catch{}var a=qr.call(t);return r&&(e?t[ye]=n:delete t[ye]),a}var Br=Xr,zr=Object.prototype,Vr=zr.toString;function Yr(t){return Vr.call(t)}var Wr=Yr,ht=rn,Jr=Br,Kr=Wr,Zr="[object Null]",Qr="[object Undefined]",pt=ht?ht.toStringTag:void 0;function ea(t){return t==null?t===void 0?Qr:Zr:pt&&pt in Object(t)?Jr(t):Kr(t)}var ta=ea;function na(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var on=na,ra=ta,aa=on,oa="[object AsyncFunction]",sa="[object Function]",ia="[object GeneratorFunction]",la="[object Proxy]";function ua(t){if(!aa(t))return!1;var e=ra(t);return e==sa||e==ia||e==oa||e==la}var ca=ua,fa=qe,ma=fa["__core-js_shared__"],da=ma,Ye=da,_t=function(){var t=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ga(t){return!!_t&&_t in t}var ha=ga,pa=Function.prototype,_a=pa.toString;function va(t){if(t!=null){try{return _a.call(t)}catch{}try{return t+""}catch{}}return""}var ba=va,$a=ca,ya=ha,Ca=on,xa=ba,wa=/[\\^$.*+?()[\]{}|]/g,Ta=/^\[object .+?Constructor\]$/,Ea=Function.prototype,Sa=Object.prototype,Oa=Ea.toString,Aa=Sa.hasOwnProperty,ka=RegExp("^"+Oa.call(Aa).replace(wa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ma(t){if(!Ca(t)||ya(t))return!1;var e=$a(t)?ka:Ta;return e.test(xa(t))}var Fa=Ma;function Ra(t,e){return t?.[e]}var Ia=Ra,Pa=Fa,La=Ia;function Da(t,e){var n=La(t,e);return Pa(n)?n:void 0}var rt=Da,ja=rt,Ua=ja(Object,"create"),Xe=Ua,vt=Xe;function Na(){this.__data__=vt?vt(null):{},this.size=0}var Ga=Na;function Ha(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qa=Ha,Xa=Xe,Ba="__lodash_hash_undefined__",za=Object.prototype,Va=za.hasOwnProperty;function Ya(t){var e=this.__data__;if(Xa){var n=e[t];return n===Ba?void 0:n}return Va.call(e,t)?e[t]:void 0}var Wa=Ya,Ja=Xe,Ka=Object.prototype,Za=Ka.hasOwnProperty;function Qa(t){var e=this.__data__;return Ja?e[t]!==void 0:Za.call(e,t)}var eo=Qa,to=Xe,no="__lodash_hash_undefined__";function ro(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=to&&e===void 0?no:e,this}var ao=ro,oo=Ga,so=qa,io=Wa,lo=eo,uo=ao;function ve(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ve.prototype.clear=oo;ve.prototype.delete=so;ve.prototype.get=io;ve.prototype.has=lo;ve.prototype.set=uo;var co=ve;function fo(){this.__data__=[],this.size=0}var mo=fo;function go(t,e){return t===e||t!==t&&e!==e}var ho=go,po=ho;function _o(t,e){for(var n=t.length;n--;)if(po(t[n][0],e))return n;return-1}var Be=_o,vo=Be,bo=Array.prototype,$o=bo.splice;function yo(t){var e=this.__data__,n=vo(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():$o.call(e,n,1),--this.size,!0}var Co=yo,xo=Be;function wo(t){var e=this.__data__,n=xo(e,t);return n<0?void 0:e[n][1]}var To=wo,Eo=Be;function So(t){return Eo(this.__data__,t)>-1}var Oo=So,Ao=Be;function ko(t,e){var n=this.__data__,r=Ao(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Mo=ko,Fo=mo,Ro=Co,Io=To,Po=Oo,Lo=Mo;function be(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}be.prototype.clear=Fo;be.prototype.delete=Ro;be.prototype.get=Io;be.prototype.has=Po;be.prototype.set=Lo;var Do=be,jo=rt,Uo=qe,No=jo(Uo,"Map"),Go=No,bt=co,Ho=Do,qo=Go;function Xo(){this.size=0,this.__data__={hash:new bt,map:new(qo||Ho),string:new bt}}var Bo=Xo;function zo(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Vo=zo,Yo=Vo;function Wo(t,e){var n=t.__data__;return Yo(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ze=Wo,Jo=ze;function Ko(t){var e=Jo(this,t).delete(t);return this.size-=e?1:0,e}var Zo=Ko,Qo=ze;function es(t){return Qo(this,t).get(t)}var ts=es,ns=ze;function rs(t){return ns(this,t).has(t)}var as=rs,os=ze;function ss(t,e){var n=os(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var is=ss,ls=Bo,us=Zo,cs=ts,fs=as,ms=is;function $e(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$e.prototype.clear=ls;$e.prototype.delete=us;$e.prototype.get=cs;$e.prototype.has=fs;$e.prototype.set=ms;var ds=$e,gs="__lodash_hash_undefined__";function hs(t){return this.__data__.set(t,gs),this}var ps=hs;function _s(t){return this.__data__.has(t)}var vs=_s,bs=ds,$s=ps,ys=vs;function Pe(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new bs;++e<n;)this.add(t[e])}Pe.prototype.add=Pe.prototype.push=$s;Pe.prototype.has=ys;var Cs=Pe;function xs(t,e,n,r){for(var a=t.length,o=n+(r?1:-1);r?o--:++o<a;)if(e(t[o],o,t))return o;return-1}var ws=xs;function Ts(t){return t!==t}var Es=Ts;function Ss(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}var Os=Ss,As=ws,ks=Es,Ms=Os;function Fs(t,e,n){return e===e?Ms(t,e,n):As(t,ks,n)}var Rs=Fs,Is=Rs;function Ps(t,e){var n=t==null?0:t.length;return!!n&&Is(t,e,0)>-1}var Ls=Ps;function Ds(t,e,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(e,t[r]))return!0;return!1}var js=Ds;function Us(t,e){return t.has(e)}var Ns=Us,Gs=rt,Hs=qe,qs=Gs(Hs,"Set"),Xs=qs;function Bs(){}var zs=Bs;function Vs(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var sn=Vs,We=Xs,Ys=zs,Ws=sn,Js=1/0,Ks=We&&1/Ws(new We([,-0]))[1]==Js?function(t){return new We(t)}:Ys,Zs=Ks,Qs=Cs,ei=Ls,ti=js,ni=Ns,ri=Zs,ai=sn,oi=200;function si(t,e,n){var r=-1,a=ei,o=t.length,s=!0,l=[],i=l;if(n)s=!1,a=ti;else if(o>=oi){var u=e?null:ri(t);if(u)return ai(u);s=!1,a=ni,i=new Qs}else i=e?[]:l;e:for(;++r<o;){var f=t[r],c=e?e(f):f;if(f=n||f!==0?f:0,s&&c===c){for(var g=i.length;g--;)if(i[g]===c)continue e;e&&i.push(c),l.push(f)}else a(i,c,n)||(i!==l&&i.push(c),l.push(f))}return l}var ii=si,li=ii;function ui(t){return t&&t.length?li(t):[]}var ci=ui;class Je{constructor(e,n){this.gl=e,this.unit=n}loadingUrl=null;url=null;texture=null;async loadImage(e){if(e===this.url)return;this.loadingUrl=e;const r=await(await fetch(e)).blob(),a=await createImageBitmap(r);if(this.loadingUrl!==e)return;const{gl:o}=this;this.texture&&o.deleteTexture(this.texture);const s=o.createTexture();if(!s)throw new Error("Failed to create texture");o.activeTexture(o.TEXTURE0+this.unit),o.bindTexture(o.TEXTURE_2D,s),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),this.texture=s,this.url=e}destroy(){this.texture&&this.gl.deleteTexture(this.texture)}}class $t{constructor(e,n){this.gl=e,this.unit=n;const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");this.framebuffer=r}texture=null;framebuffer;width=null;height=null;bindAsInput(){return this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.unit}bindAsOutput(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)}setSize(e,n){if(e===this.width&&n===this.height)return;if(this.texture!==null&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),!this.texture)throw new Error("Failed to create texture");if(this.width=e,this.height=n,this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,n,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!==this.gl.FRAMEBUFFER_COMPLETE)throw new Error("Failed to attach to framebuffer");this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}destroy(){this.texture&&this.gl.deleteTexture(this.texture),this.gl.deleteFramebuffer(this.framebuffer)}}const oe=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`,Ke=`#version 300 es

layout(location = 0) in vec2 a_position;
layout(location = 1) in vec2 a_texCoords;

uniform mat4 u_model;

out vec2 v_texCoords;

void main() {
  gl_Position = u_model * vec4(a_position, 0.0, 1.0);
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
}
`,fi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    outColor = texture(u_image, v_texCoords);
}
`,mi=`#version 300 es

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
`,di=`#version 300 es
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
`,gi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = 1.0 - outColor.rgb;
}
`,hi=`#version 300 es
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
`,pi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  vec4 texel = texture(u_image, v_texCoords);
  outColor = vec4(u_weights * texel.rgb, texel.a);
}
`,_i=`#version 300 es
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
`,vi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
`,bi=`#version 300 es
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
`,$i=`#version 300 es
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
`,yi=`#version 300 es
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
`,Ci=`#version 300 es
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
`,xi=`#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additionalImages[2];
uniform float u_edgeThreshold;
uniform float u_edgeDarkness;
uniform float u_time;
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
    return 2.0;
  }
  vec2 point = random2(neighborInt);
  vec2 diff = neighbor + point - uvFract;
  return length(diff);

}

float getAlpha() {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);
  float currentDist = worleyDist(vec2(u_column, u_row) - uvInt);
  for (int c = -1; c < 1; ++c) {
    for (int r = -1; r < 1; ++r) {
      vec2 neighbor = vec2(float(c), float(r));
      float dist = worleyDist(neighbor);
      if (dist < currentDist) {
        return 0.0;
      }
    }
  }
  return 1.0;
}


void main() {
  float petrifiedPercent = u_time / u_timeBeforeShatter;
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
`,yt={default:{vertex:Ke,fragment:fi},default3d:{vertex:mi,fragment:di},wiggling:{vertex:Ke,fragment:hi},petrified:{vertex:Ke,fragment:xi},invert:{vertex:oe,fragment:gi},kernel:{vertex:oe,fragment:bi},gradient2:{vertex:oe,fragment:$i},gradient8:{vertex:oe,fragment:yi},contrast:{vertex:oe,fragment:vi},bloom:{vertex:oe,fragment:Ci},mix:{vertex:oe,fragment:pi},vignette:{vertex:oe,fragment:_i}};class wi{constructor(e){this.gl=e}programs={};createProgram(e){let n=this.programs[e];return n||(n=this.programs[e]={program:Ti(this.gl,yt[e].vertex,yt[e].fragment),uniformLocations:{}}),n}destroy(){for(const e of Object.values(this.programs))this.gl.deleteProgram(e.program)}}function Le(t,e,n){for(const[r,a]of Object.entries(n)){r in e.uniformLocations||(e.uniformLocations[r]=t.getUniformLocation(e.program,r));const o=e.uniformLocations[r];/image/i.test(r)&&typeof a=="number"?t.uniform1i(o,a):Array.isArray(a)?a.length===2?t.uniform2fv(o,a):a.length===3?t.uniform3fv(o,a):a.length===4?t.uniform4fv(o,a):a.length===9?t.uniformMatrix3fv(o,!1,a):a.length===16&&t.uniformMatrix4fv(o,!1,a):typeof a=="number"?t.uniform1f(o,a):typeof a=="boolean"&&t.uniform1i(o,a?1:0)}}function Ti(t,e,n){const r=Ct(t,t.VERTEX_SHADER,e);let a;try{a=Ct(t,t.FRAGMENT_SHADER,n)}catch(s){throw t.deleteShader(r),s}const o=t.createProgram();if(o===null)throw t.deleteShader(a),t.deleteShader(r),new Error("Failed to create program");if(t.attachShader(o,r),t.attachShader(o,a),t.linkProgram(o),t.detachShader(o,a),t.detachShader(o,r),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(o,t.LINK_STATUS)){const s=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`Failed to link program: ${s}`)}return o}function Ct(t,e,n){const r=t.createShader(e);if(r===null)throw new Error(`Failed to create shader: ${e}`);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`Failed to compile shader: ${a}`)}return r}function Ei(t,e,n,r){r.effects.length>0?r.renderTextures[0].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT);let a,o;for(const s of n){a!==s.program&&(t.useProgram(s.program.program),a=s.program),o!==s.geometry&&(t.bindVertexArray(s.geometry.vao),o=s.geometry);const l=s.getUniforms(e);Le(t,s.program,l),t.drawArrays(s.geometry.drawMode,0,s.geometry.drawCount)}if(r.effects.length!==0){t.bindVertexArray(r.quad.vao);for(let s=0;s<r.effects.length;++s){const{program:l,uniforms:i}=r.effects[s],u=s%2,f=1-u;s<r.effects.length-1?r.renderTextures[f].bindAsOutput():t.bindFramebuffer(t.FRAMEBUFFER,null),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(l.program);const c=r.renderTextures[u].bindAsInput();Le(t,l,{u_image:c,...i}),t.drawArrays(r.quad.drawMode,0,r.quad.drawCount)}}}const me={a_position:0,a_texCoords:1,a_normal:2};function Si(t,e){const n=t.createVertexArray();if(n===null)throw new Error("Failed to create vertex array");const r=t.createBuffer();if(!r)throw t.deleteVertexArray(n),new Error("Failed to create buffer");return t.bindVertexArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(me.a_position),t.vertexAttribPointer(me.a_position,3,t.FLOAT,!1,8*4,0),t.enableVertexAttribArray(me.a_texCoords),t.vertexAttribPointer(me.a_texCoords,2,t.FLOAT,!1,8*4,3*4),t.enableVertexAttribArray(me.a_normal),t.vertexAttribPointer(me.a_normal,3,t.FLOAT,!1,8*4,5*4),t.bindVertexArray(null),{vao:n,vbo:r,drawMode:t.TRIANGLE_STRIP,drawCount:4}}const Oi={full:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],sudoku:[-3,-3,0,-1,2,0,0,1,3,-3,0,2,2,0,0,1,-3,3,0,-1,-1,0,0,1,3,3,0,2,-1,0,0,1],tower:[-1,-3,0,0,2,0,0,1,1,-3,0,1,2,0,0,1,-1,3,0,0,-1,0,0,1,1,3,0,1,-1,0,0,1],topHalf:[-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1,-1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1],bottomHalf:[-1,-1,0,0,1,0,0,1,1,-1,0,1,1,0,0,1,-1,0,0,0,.5,0,0,1,1,0,0,1,.5,0,0,1],leftHalf:[-1,-1,0,0,1,0,0,1,0,-1,0,.5,1,0,0,1,-1,1,0,0,0,0,0,1,0,1,0,.5,0,0,0,1],rightHalf:[0,-1,0,.5,1,0,0,1,1,-1,0,1,1,0,0,1,0,1,0,.5,0,0,0,1,1,1,0,1,0,0,0,1],quad:[-1,-1,0,0,0,0,0,1,1,-1,0,1,0,0,0,1,-1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1]};class Ai{constructor(e){this.gl=e}geometries={};createGeometry(e){let n=this.geometries[e];return n||(n=this.geometries[e]=Si(this.gl,Oi[e])),n}destroy(){for(const e of Object.values(this.geometries))this.gl.deleteVertexArray(e.vao),this.gl.deleteBuffer(e.vbo)}}const ki=["grayscale","sepia","boxBlur","guassian","sharpen1","sharpen2","emboss","laplacian1","laplacian2","prewitt","sobel","kirsch","darken","lighten","highContrast","bloom","invert","grb","rbg","bgr","gbr","brg","0gb","r0b","rg0","vignette"],xt={grayscale:{program:"mix",uniforms:{u_weights:[.2126,.2126,.2126,.7152,.7152,.7152,.0722,.0722,.0722]}},sepia:{program:"mix",uniforms:{u_weights:[.393,.349,.272,.769,.686,.534,.189,.168,.131]}},boxBlur:{program:"kernel",uniforms:{u_kernel:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]}},guassian:{program:"kernel",uniforms:{u_kernel:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16]}},sharpen1:{program:"kernel",uniforms:{u_kernel:[-.0023,-.0432,-.0023,-.0432,1.182,-.0432,-.0023,-.0432,-.0023]}},sharpen2:{program:"kernel",uniforms:{u_kernel:[-1/9,-1/9,-1/9,-1/9,17/9,-1/9,-1/9,-1/9,-1/9]}},emboss:{program:"kernel",uniforms:{u_kernel:[-2,-1,0,-1,1,1,0,1,2]}},laplacian1:{program:"kernel",uniforms:{u_kernel:[0,-1,0,-1,4,-1,0,-1,0]}},laplacian2:{program:"kernel",uniforms:{u_kernel:[-1,-1,-1,-1,8,-1,-1,-1,-1]}},prewitt:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,1,0,-1,1,0,-1],u_kernel2:[1,1,1,0,0,0,-1,-1,-1]}},sobel:{program:"gradient2",uniforms:{u_kernel1:[1,0,-1,2,0,-2,1,0,-1],u_kernel2:[1,2,1,0,0,0,-1,-2,-1]}},kirsch:{program:"gradient8",uniforms:{"u_kernel[0]":[5,5,5,-3,0,-3,-3,-3,-3],"u_kernel[1]":[-3,5,5,-3,0,5,-3,-3,-3],"u_kernel[2]":[-3,-3,5,-3,0,5,-3,-3,5],"u_kernel[3]":[-3,-3,-3,-3,0,5,-3,5,5],"u_kernel[4]":[-3,-3,-3,-3,0,-3,5,5,5],"u_kernel[5]":[-3,-3,-3,5,0,-3,5,5,-3],"u_kernel[6]":[5,-3,-3,5,0,-3,5,-3,-3],"u_kernel[7]":[5,5,-3,5,0,-3,-3,-3,-3]}},darken:{program:"mix",uniforms:{u_weights:[.5,0,0,0,.5,0,0,0,.5]}},lighten:{program:"mix",uniforms:{u_weights:[2,0,0,0,2,0,0,0,2]}},highContrast:{program:"contrast",uniforms:{u_contrast:2}},bloom:{program:"bloom",uniforms:{u_luminance:.6}},invert:{program:"invert",uniforms:{}},grb:{program:"mix",uniforms:{u_weights:[0,1,0,1,0,0,0,0,1]}},rbg:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,1,0,1,0]}},bgr:{program:"mix",uniforms:{u_weights:[0,0,1,0,1,0,1,0,0]}},gbr:{program:"mix",uniforms:{u_weights:[0,0,1,1,0,0,0,1,0]}},brg:{program:"mix",uniforms:{u_weights:[0,1,0,0,0,1,1,0,0]}},"0gb":{program:"mix",uniforms:{u_weights:[0,0,0,0,1,0,0,0,1]}},r0b:{program:"mix",uniforms:{u_weights:[1,0,0,0,0,0,0,0,1]}},rg0:{program:"mix",uniforms:{u_weights:[1,0,0,0,1,0,0,0,0]}},vignette:{program:"vignette",uniforms:{u_inner:.4,u_outer:.6}}};function wt(t,e){return e.map(n=>({program:t.createProgram(xt[n].program),uniforms:xt[n].uniforms}))}class Mi{constructor(e){this.canvas=e;const n=e.getContext("webgl2");if(!n)throw new Error("webgl2 is not supported");this.gl=n,this.programFactory=new wi(this.gl),this.geometryFactory=new Ai(this.gl),this.texture=new Je(this.gl,0),this.additionalTextures=[new Je(this.gl,3),new Je(this.gl,4)],this.renderTextures=[new $t(this.gl,1),new $t(this.gl,2)],this.quad=this.geometryFactory.createGeometry("quad")}gl;programFactory;geometryFactory;texture;additionalTextures;renderTextures;quad;current=null;animationFrame=null;animate(e,n){return new Promise((r,a)=>{const o=new Worker(new URL(""+new URL("../../../assets/gif-encoder-worker-6a38d7a2.js",import.meta.url).href,self.location),{type:"module",name:"gif-encoder"}),s={type:"gif",request:e,resolve:r,reject:a,frame:0,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(c=>c.enabled).map(c=>c.type)),callback:n,worker:o,workerReady:!1},{width:l,height:i,delayMs:u,quality:f}=e.output;o.onmessage=c=>{const g=c.data;let h;switch(g.type){case"Ready":s.workerReady=!0,h={type:"Init",width:l,height:i,delayMs:u,quality:f},o.postMessage(h);break;case"FrameAdded":n();break;case"Success":this.resolve(g.dataUri);break;case"Failure":this.reject(g.error);break;default:(p=>{this.reject(`Cannot handle worker message: ${JSON.stringify(g)}`)})()}},o.onerror=c=>{this.reject(c.message)},this.setCurrent(s)})}renderFrame(e,n){return new Promise((r,a)=>{const o={type:"frame",request:e,resolve:r,reject:a,frame:n,sprites:dt(this.programFactory,this.geometryFactory,e.animation),effects:wt(this.programFactory,e.effects.filter(s=>s.enabled).map(s=>s.type))};this.setCurrent(o)})}setCurrent(e){this.reject("Request cancelled"),this.current=e,this.requestNextFrame()}resolve(e){if(this.current){if(this.current.resolve({dataUri:e}),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}reject(e){if(this.current){if(this.current.reject(new Error(e)),this.current.type==="gif"){const{worker:n}=this.current;n.onmessage=null,n.onerror=null,n.terminate()}this.current=null}}async processLoop(){if(this.animationFrame=null,!this.current)return;const e=this.current,{type:n,request:r,resolve:a,sprites:o,effects:s,frame:l}=e,{image:i,additionalImages:u,output:f}=r;if(!(l>=f.totalFrames)){if(n==="gif"&&!e.workerReady){this.requestNextFrame();return}if(n==="frame"||n==="gif"&&e.frame===0){if(await Promise.all([this.texture.loadImage(i.url),...this.additionalTextures.map((h,p)=>u.urls[p]?h.loadImage(u.urls[p]):Promise.resolve())]),e!==this.current)return;const{width:c,height:g}=f;this.renderTextures.forEach(h=>h.setSize(c,g)),this.canvas.width=c,this.canvas.height=g,this.gl.viewport(0,0,c,g),this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.additionalTextures.forEach(h=>{this.gl.activeTexture(this.gl.TEXTURE0+h.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,h.texture)});for(const h of ci(o.map(p=>p.program)))this.gl.useProgram(h.program),Le(this.gl,h,{u_image:this.texture.unit}),this.additionalTextures.forEach((p,m)=>{const $=`u_additionalImages[${m}]`;Le(this.gl,h,{[$]:p.unit})})}if(Ei(this.gl,l/r.output.totalFrames,o,{renderTextures:this.renderTextures,quad:this.quad,effects:s}),n==="frame")a();else{const c=new Uint8ClampedArray(this.gl.drawingBufferWidth*this.gl.drawingBufferHeight*4);this.gl.readPixels(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight,this.gl.RGBA,this.gl.UNSIGNED_BYTE,c);const{worker:g}=e,h={type:"AddFrame",buffer:c.buffer};if(g.postMessage(h,[c.buffer]),l===f.totalFrames-1){const p={type:"GetResult"};g.postMessage(p)}else this.requestNextFrame();e.frame+=1}}}requestNextFrame(){this.animationFrame||(this.animationFrame=requestAnimationFrame(()=>this.processLoop()))}destroy(){this.programFactory.destroy(),this.geometryFactory.destroy(),this.texture.destroy(),this.additionalTextures.forEach(e=>e.destroy()),this.renderTextures.forEach(e=>e.destroy()),this.reject("Destroyed"),this.animationFrame!==null&&window.cancelAnimationFrame(this.animationFrame)}}const ae=function(){const{subscribe:t,update:e}=He({animations:Ve,current:Ve[0]}),n=o=>{e(s=>s.current===o||!s.animations.find(i=>i===o)?s:{animations:s.animations,current:o})};function r(o,s){e(({animations:l,current:i})=>{const u={...i,editOptions:i.editOptions.map(f=>f===o?{...o,value:s}:f)};return{animations:l.map(f=>f===i?u:f),current:u}})}function a(){e(({animations:o,current:s})=>{const l=Ve.find(i=>i.name===s.name);return{animations:o.map(i=>i===s?l:i),current:l}})}return{subscribe:t,changeCurrentAnimation:n,changeEditOptions:r,resetEditOptions:a}}(),De=function(){const{subscribe:t,update:e}=He(ki.map(a=>({type:a,enabled:!1})));function n(a,o){e(s=>s.map(l=>l.type===a?{type:a,enabled:o}:l))}function r(){e(a=>a.map(o=>({...o,enabled:!1})))}return{subscribe:t,change:n,reset:r}}();function at(t){let e=!0;const{subscribe:n,update:r}=He(void 0,s=>ae.subscribe(({current:l})=>{e&&s(l.defaultOptions[t])}));function a(s){r(l=>(e=!1,{...l,...s}))}function o(){r(()=>(e=!0,we(ae).current.defaultOptions[t]))}return{subscribe:n,change:a,reset:o}}const je=at("image"),Fi=at("additionalImages"),ne=at("output"),Qe=Cn([je,Fi,ne,ae,De],([t,e,n,r,a])=>({image:t,additionalImages:e,output:n,animation:r.current,effects:a})),Ce=function(){const t=He({animator:null,running:!1,frame:0}),{subscribe:e,update:n}=t;function r(s){n(l=>(l.animator?.destroy(),{animator:new Mi(s),running:!1,frame:0}))}function a(){const{animator:s}=we(t);return s?(n(l=>({...l,running:!0,frame:0})),s.animate(we(Qe),()=>n(l=>({...l,frame:l.frame+1}))).finally(()=>{n(l=>({...l,running:!1}))})):Promise.reject("Animator has not been created")}function o(s){const{animator:l,frame:i}=we(t);if(!l)return Promise.reject("Animator has not been created");let u;typeof s>"u"?u=i:u=s;const f=we(Qe);return u>=f.output.totalFrames&&(u=f.output.totalFrames-1),n(c=>({...c,frame:u,running:!0})),l.renderFrame(f,u).finally(()=>{n(c=>({...c,running:!1}))})}return{subscribe:e,changeCanvas:r,animate:a,renderFrame:o}}();function Tt(t,{delay:e=0,duration:n=400,easing:r=ln}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*a}`}}function Et(t){let e,n,r;const a=t[5].default,o=cn(a,t,t[4],null);return{c(){e=C("div"),o&&o.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=w(e);o&&o.l(l),l.forEach(b),this.h()},h(){d(e,"class","section__content svelte-v2pn2e")},m(s,l){F(s,e,l),o&&o.m(e,null),r=!0},p(s,l){o&&o.p&&(!r||l&16)&&fn(o,a,s,s[4],r?dn(a,s[4],l,null):mn(s[4]),null)},i(s){r||(S(o,s),gn(()=>{n||(n=st(e,Tt,{duration:250},!0)),n.run(1)}),r=!0)},o(s){k(o,s),n||(n=st(e,Tt,{duration:250},!1)),n.run(0),r=!1},d(s){s&&b(e),o&&o.d(s),s&&n&&n.end()}}}function Ri(t){let e,n,r,a,o=t[0]?"-":"+",s,l,i,u,f,c,g,h,p,m,$,y,v=t[0]&&Et(t);return{c(){e=C("section"),n=C("header"),r=C("button"),a=P("["),s=P(o),l=P("]"),i=O(),u=C("h2"),f=P(t[1]),c=O(),g=C("button"),h=P("Reset"),p=O(),v&&v.c(),this.h()},l(T){e=x(T,"SECTION",{class:!0});var E=w(e);n=x(E,"HEADER",{class:!0});var I=w(n);r=x(I,"BUTTON",{class:!0,type:!0});var q=w(r);a=L(q,"["),s=L(q,o),l=L(q,"]"),q.forEach(b),i=A(I),u=x(I,"H2",{class:!0});var J=w(u);f=L(J,t[1]),J.forEach(b),c=A(I),g=x(I,"BUTTON",{class:!0,type:!0});var z=w(g);h=L(z,"Reset"),z.forEach(b),I.forEach(b),p=A(E),v&&v.l(E),E.forEach(b),this.h()},h(){d(r,"class","section__expand svelte-v2pn2e"),d(r,"type","button"),d(u,"class","section__heading svelte-v2pn2e"),d(g,"class","section__reset svelte-v2pn2e"),d(g,"type","button"),d(n,"class","section__header svelte-v2pn2e"),d(e,"class","section svelte-v2pn2e")},m(T,E){F(T,e,E),_(e,n),_(n,r),_(r,a),_(r,s),_(r,l),_(n,i),_(n,u),_(u,f),_(n,c),_(n,g),_(g,h),_(e,p),v&&v.m(e,null),m=!0,$||(y=[re(r,"click",t[3]),re(u,"click",t[3]),re(u,"keypress",t[3]),re(g,"click",t[6])],$=!0)},p(T,[E]){(!m||E&1)&&o!==(o=T[0]?"-":"+")&&ee(s,o),(!m||E&2)&&ee(f,T[1]),T[0]?v?(v.p(T,E),E&1&&S(v,1)):(v=Et(T),v.c(),S(v,1),v.m(e,null)):v&&(Ne(),k(v,1,1,()=>{v=null}),Ge())},i(T){m||(S(v),m=!0)},o(T){k(v),m=!1},d(T){T&&b(e),v&&v.d(),$=!1,un(y)}}}function Ii(t,e,n){let{$$slots:r={},$$scope:a}=e,{title:o=""}=e,{expanded:s=!0}=e;const l=et();function i(){n(0,s=!s)}const u=()=>l("reset");return t.$$set=f=>{"title"in f&&n(1,o=f.title),"expanded"in f&&n(0,s=f.expanded),"$$scope"in f&&n(4,a=f.$$scope)},[s,o,l,i,a,r,u]}class Ue extends V{constructor(e){super(),Y(this,e,Ii,Ri,W,{title:1,expanded:0})}}function Pi(t){let e,n,r,a,o,s,l,i;return{c(){e=C("label"),n=C("input"),r=O(),a=C("div"),o=C("img"),this.h()},l(u){e=x(u,"LABEL",{class:!0});var f=w(e);n=x(f,"INPUT",{class:!0,type:!0,accept:!0}),r=A(f),a=x(f,"DIV",{class:!0});var c=w(a);o=x(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(b),f.forEach(b),this.h()},h(){d(n,"class","image__input svelte-1me35do"),d(n,"type","file"),d(n,"accept","image/*"),d(o,"class","image__preview svelte-1me35do"),fe(o.src,s=t[0].url)||d(o,"src",s),d(o,"alt","source"),d(a,"class","image__container svelte-1me35do"),d(e,"class","image svelte-1me35do")},m(u,f){F(u,e,f),_(e,n),_(e,r),_(e,a),_(a,o),l||(i=re(n,"input",t[1]),l=!0)},p(u,f){f&1&&!fe(o.src,s=u[0].url)&&d(o,"src",s)},d(u){u&&b(e),l=!1,i()}}}function Li(t){let e,n;return e=new Ue({props:{title:"Image",expanded:!0,$$slots:{default:[Pi]},$$scope:{ctx:t}}}),e.$on("reset",je.reset),{c(){j(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){N(e,r,a),n=!0},p(r,[a]){const o={};a&5&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function Di(t,e,n){let r;ie(t,je,o=>n(0,r=o));function a(o){const l=o.target.files?.[0];l&&je.change({url:URL.createObjectURL(l)})}return[r,a]}class ji extends V{constructor(e){super(),Y(this,e,Di,Li,W,{})}}function St(t){let e,n,r,a,o,s;return{c(){e=C("label"),n=P(t[1]),r=O(),a=C("input"),this.h()},l(l){e=x(l,"LABEL",{class:!0});var i=w(e);n=L(i,t[1]),r=A(i),a=x(i,"INPUT",{class:!0,type:!0}),i.forEach(b),this.h()},h(){d(a,"class","slider__text-input svelte-1h0gcvd"),d(a,"type","text"),a.value=t[0],d(e,"class","slider__label svelte-1h0gcvd")},m(l,i){F(l,e,i),_(e,n),_(e,r),_(e,a),o||(s=re(a,"input",t[5]),o=!0)},p(l,i){i&2&&ee(n,l[1]),i&1&&a.value!==l[0]&&(a.value=l[0])},d(l){l&&b(e),o=!1,s()}}}function Ui(t){let e,n,r,a,o=ke(t[2])+"",s,l,i,u,f,c,g=ke(t[3])+"",h,p,m,$=t[1]&&St(t);return{c(){e=C("div"),$&&$.c(),n=O(),r=C("div"),a=C("span"),s=P(o),l=O(),i=C("div"),u=C("input"),f=O(),c=C("span"),h=P(g),this.h()},l(y){e=x(y,"DIV",{class:!0});var v=w(e);$&&$.l(v),n=A(v),r=x(v,"DIV",{class:!0});var T=w(r);a=x(T,"SPAN",{class:!0});var E=w(a);s=L(E,o),E.forEach(b),l=A(T),i=x(T,"DIV",{class:!0});var I=w(i);u=x(I,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),I.forEach(b),f=A(T),c=x(T,"SPAN",{class:!0});var q=w(c);h=L(q,g),q.forEach(b),T.forEach(b),v.forEach(b),this.h()},h(){d(a,"class","slider__range slider__range--min svelte-1h0gcvd"),d(u,"class","slider__input svelte-1h0gcvd"),d(u,"type","range"),d(u,"min",t[2]),d(u,"max",t[3]),d(u,"step",t[4]),u.value=t[0],d(i,"class","slider__input-container svelte-1h0gcvd"),d(c,"class","slider__range slider__range--max"),d(r,"class","slider__container svelte-1h0gcvd"),d(e,"class","slider")},m(y,v){F(y,e,v),$&&$.m(e,null),_(e,n),_(e,r),_(r,a),_(a,s),_(r,l),_(r,i),_(i,u),_(r,f),_(r,c),_(c,h),p||(m=re(u,"input",t[5]),p=!0)},p(y,[v]){y[1]?$?$.p(y,v):($=St(y),$.c(),$.m(e,n)):$&&($.d(1),$=null),v&4&&o!==(o=ke(y[2])+"")&&ee(s,o),v&4&&d(u,"min",y[2]),v&8&&d(u,"max",y[3]),v&16&&d(u,"step",y[4]),v&1&&(u.value=y[0]),v&8&&g!==(g=ke(y[3])+"")&&ee(h,g)},i:le,o:le,d(y){y&&b(e),$&&$.d(),p=!1,m()}}}function ke(t){return t.toFixed(2).replace(/\.?0+$/,"")}function Ni(t,e,n){const r=et();let{label:a=""}=e,{min:o=0}=e,{max:s=100}=e,{step:l=1}=e,{value:i=s<o?o:(s-o)/2}=e;function u(f){const c=f.target,g=parseFloat(c.value);Number.isNaN(g)||(n(0,i=g),r("input",{value:i}))}return t.$$set=f=>{"label"in f&&n(1,a=f.label),"min"in f&&n(2,o=f.min),"max"in f&&n(3,s=f.max),"step"in f&&n(4,l=f.step),"value"in f&&n(0,i=f.value)},[i,a,o,s,l,u]}class ce extends V{constructor(e){super(),Y(this,e,Ni,Ui,W,{label:1,min:2,max:3,step:4,value:0})}}function Gi(t){let e,n,r,a,o,s,l,i,u,f;return e=new ce({props:{label:"width",min:1,max:1024,step:1,value:t[0].width}}),e.$on("input",t[1]),r=new ce({props:{label:"height",min:1,max:1024,step:1,value:t[0].height}}),r.$on("input",t[2]),o=new ce({props:{label:"delayMs",min:20,max:1e3,step:10,value:t[0].delayMs}}),o.$on("input",t[3]),l=new ce({props:{label:"totalFrames",min:1,max:1e3,step:1,value:t[0].totalFrames}}),l.$on("input",t[4]),u=new ce({props:{label:"quality",min:1,max:30,step:1,value:t[0].quality}}),u.$on("input",t[5]),{c(){j(e.$$.fragment),n=O(),j(r.$$.fragment),a=O(),j(o.$$.fragment),s=O(),j(l.$$.fragment),i=O(),j(u.$$.fragment)},l(c){U(e.$$.fragment,c),n=A(c),U(r.$$.fragment,c),a=A(c),U(o.$$.fragment,c),s=A(c),U(l.$$.fragment,c),i=A(c),U(u.$$.fragment,c)},m(c,g){N(e,c,g),F(c,n,g),N(r,c,g),F(c,a,g),N(o,c,g),F(c,s,g),N(l,c,g),F(c,i,g),N(u,c,g),f=!0},p(c,g){const h={};g&1&&(h.value=c[0].width),e.$set(h);const p={};g&1&&(p.value=c[0].height),r.$set(p);const m={};g&1&&(m.value=c[0].delayMs),o.$set(m);const $={};g&1&&($.value=c[0].totalFrames),l.$set($);const y={};g&1&&(y.value=c[0].quality),u.$set(y)},i(c){f||(S(e.$$.fragment,c),S(r.$$.fragment,c),S(o.$$.fragment,c),S(l.$$.fragment,c),S(u.$$.fragment,c),f=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),k(o.$$.fragment,c),k(l.$$.fragment,c),k(u.$$.fragment,c),f=!1},d(c){G(e,c),c&&b(n),G(r,c),c&&b(a),G(o,c),c&&b(s),G(l,c),c&&b(i),G(u,c)}}}function Hi(t){let e,n;return e=new Ue({props:{title:"Output",expanded:!0,$$slots:{default:[Gi]},$$scope:{ctx:t}}}),e.$on("reset",ne.reset),{c(){j(e.$$.fragment)},l(r){U(e.$$.fragment,r)},m(r,a){N(e,r,a),n=!0},p(r,[a]){const o={};a&65&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){G(e,r)}}}function qi(t,e,n){let r;return ie(t,ne,u=>n(0,r=u)),[r,u=>ne.change({width:u.detail.value}),u=>ne.change({height:u.detail.value}),u=>ne.change({delayMs:u.detail.value}),u=>ne.change({totalFrames:u.detail.value}),u=>ne.change({quality:u.detail.value})]}class Xi extends V{constructor(e){super(),Y(this,e,qi,Hi,W,{})}}function Bi(t){let e,n,r,a,o,s;return n=new ji({}),a=new Xi({}),{c(){e=C("aside"),j(n.$$.fragment),r=O(),j(a.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);U(n.$$.fragment,i),r=A(i),U(a.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",o=Q(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){F(l,e,i),N(n,e,null),_(e,r),N(a,e,null),s=!0},p(l,[i]){(!s||i&1&&o!==(o=Q(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",o)},i(l){s||(S(n.$$.fragment,l),S(a.$$.fragment,l),s=!0)},o(l){k(n.$$.fragment,l),k(a.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(a)}}}function zi(t,e,n){let{class:r=""}=e;return t.$$set=a=>{"class"in a&&n(0,r=a.class)},[r]}class Vi extends V{constructor(e){super(),Y(this,e,zi,Bi,W,{class:0})}}function Yi(t){let e,n,r,a,o,s,l;return{c(){e=C("div"),n=P(t[1]),r=O(),a=C("label"),o=C("input"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=L(u,t[1]),r=A(u),a=x(u,"LABEL",{class:!0});var f=w(a);o=x(f,"INPUT",{class:!0,type:!0}),f.forEach(b),u.forEach(b),this.h()},h(){d(o,"class","toggle__checkbox svelte-1j9rfin"),d(o,"type","checkbox"),o.checked=t[0],d(a,"class","toggle__label svelte-1j9rfin"),se(a,"toggle__label--active",t[0]),d(e,"class","toggle svelte-1j9rfin")},m(i,u){F(i,e,u),_(e,n),_(e,r),_(e,a),_(a,o),s||(l=re(o,"change",t[2]),s=!0)},p(i,[u]){u&2&&ee(n,i[1]),u&1&&(o.checked=i[0]),u&1&&se(a,"toggle__label--active",i[0])},i:le,o:le,d(i){i&&b(e),s=!1,l()}}}function Wi(t,e,n){const r=et();let{label:a=""}=e,{value:o=!1}=e;function s(l){const i=l.target;n(0,o=Boolean(i.checked)),r("change",{value:o})}return t.$$set=l=>{"label"in l&&n(1,a=l.label),"value"in l&&n(0,o=l.value)},[o,a,s]}class ot extends V{constructor(e){super(),Y(this,e,Wi,Yi,W,{label:1,value:0})}}function Ot(t,e,n){const r=t.slice();return r[6]=e[n],r}function At(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ji(t){let e,n;function r(...a){return t[4](t[9],...a)}return e=new ot({props:{label:t[9].name,value:t[9].value}}),e.$on("change",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){N(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(S(e.$$.fragment,a),n=!0)},o(a){k(e.$$.fragment,a),n=!1},d(a){G(e,a)}}}function Ki(t){let e,n;function r(...a){return t[3](t[9],...a)}return e=new ce({props:{label:t[9].name,min:t[9].min,max:t[9].max,step:t[9].step,value:t[9].value}}),e.$on("input",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){N(e,a,o),n=!0},p(a,o){t=a;const s={};o&2&&(s.label=t[9].name),o&2&&(s.min=t[9].min),o&2&&(s.max=t[9].max),o&2&&(s.step=t[9].step),o&2&&(s.value=t[9].value),e.$set(s)},i(a){n||(S(e.$$.fragment,a),n=!0)},o(a){k(e.$$.fragment,a),n=!1},d(a){G(e,a)}}}function kt(t){let e,n,r,a;const o=[Ki,Ji],s=[];function l(i,u){return i[9].type==="slider"?0:i[9].type==="toggle"?1:-1}return~(e=l(t))&&(n=s[e]=o[e](t)),{c(){n&&n.c(),r=de()},l(i){n&&n.l(i),r=de()},m(i,u){~e&&s[e].m(i,u),F(i,r,u),a=!0},p(i,u){let f=e;e=l(i),e===f?~e&&s[e].p(i,u):(n&&(Ne(),k(s[f],1,1,()=>{s[f]=null}),Ge()),~e?(n=s[e],n?n.p(i,u):(n=s[e]=o[e](i),n.c()),S(n,1),n.m(r.parentNode,r)):n=null)},i(i){a||(S(n),a=!0)},o(i){k(n),a=!1},d(i){~e&&s[e].d(i),i&&b(r)}}}function Zi(t){let e,n,r=t[1].current.editOptions,a=[];for(let s=0;s<r.length;s+=1)a[s]=kt(At(t,r,s));const o=s=>k(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=de()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=de()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);F(s,e,l),n=!0},p(s,l){if(l&2){r=s[1].current.editOptions;let i;for(i=0;i<r.length;i+=1){const u=At(s,r,i);a[i]?(a[i].p(u,l),S(a[i],1)):(a[i]=kt(u),a[i].c(),S(a[i],1),a[i].m(e.parentNode,e))}for(Ne(),i=r.length;i<a.length;i+=1)o(i);Ge()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)S(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)k(a[l]);n=!1},d(s){jt(a,s),s&&b(e)}}}function Mt(t){let e,n;function r(...a){return t[5](t[6],...a)}return e=new ot({props:{label:t[6].type,value:t[6].enabled}}),e.$on("change",r),{c(){j(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,o){N(e,a,o),n=!0},p(a,o){t=a;const s={};o&4&&(s.label=t[6].type),o&4&&(s.value=t[6].enabled),e.$set(s)},i(a){n||(S(e.$$.fragment,a),n=!0)},o(a){k(e.$$.fragment,a),n=!1},d(a){G(e,a)}}}function Qi(t){let e,n,r=t[2],a=[];for(let s=0;s<r.length;s+=1)a[s]=Mt(Ot(t,r,s));const o=s=>k(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=de()},l(s){for(let l=0;l<a.length;l+=1)a[l].l(s);e=de()},m(s,l){for(let i=0;i<a.length;i+=1)a[i].m(s,l);F(s,e,l),n=!0},p(s,l){if(l&4){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=Ot(s,r,i);a[i]?(a[i].p(u,l),S(a[i],1)):(a[i]=Mt(u),a[i].c(),S(a[i],1),a[i].m(e.parentNode,e))}for(Ne(),i=r.length;i<a.length;i+=1)o(i);Ge()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)S(a[l]);n=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)k(a[l]);n=!1},d(s){jt(a,s),s&&b(e)}}}function el(t){let e,n,r,a,o,s;return n=new Ue({props:{title:t[1].current.name,expanded:!0,$$slots:{default:[Zi]},$$scope:{ctx:t}}}),n.$on("reset",ae.resetEditOptions),a=new Ue({props:{title:"Effects",expanded:!0,$$slots:{default:[Qi]},$$scope:{ctx:t}}}),a.$on("reset",De.reset),{c(){e=C("aside"),j(n.$$.fragment),r=O(),j(a.$$.fragment),this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);U(n.$$.fragment,i),r=A(i),U(a.$$.fragment,i),i.forEach(b),this.h()},h(){d(e,"class",o=Q(`container ${t[0]}`)+" svelte-7v3svs")},m(l,i){F(l,e,i),N(n,e,null),_(e,r),N(a,e,null),s=!0},p(l,[i]){const u={};i&2&&(u.title=l[1].current.name),i&4098&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const f={};i&4100&&(f.$$scope={dirty:i,ctx:l}),a.$set(f),(!s||i&1&&o!==(o=Q(`container ${l[0]}`)+" svelte-7v3svs"))&&d(e,"class",o)},i(l){s||(S(n.$$.fragment,l),S(a.$$.fragment,l),s=!0)},o(l){k(n.$$.fragment,l),k(a.$$.fragment,l),s=!1},d(l){l&&b(e),G(n),G(a)}}}function tl(t,e,n){let r,a;ie(t,ae,u=>n(1,r=u)),ie(t,De,u=>n(2,a=u));let{class:o=""}=e;const s=(u,f)=>ae.changeEditOptions(u,f.detail.value),l=(u,f)=>ae.changeEditOptions(u,f.detail.value),i=(u,f)=>De.change(u.type,f.detail.value);return t.$$set=u=>{"class"in u&&n(0,o=u.class)},[o,r,a,s,l,i]}class nl extends V{constructor(e){super(),Y(this,e,tl,el,W,{class:0})}}function Ft(t,e,n){const r=t.slice();return r[3]=e[n],r}function Rt(t,e){let n,r,a,o,s,l,i=e[3].name+"",u,f,c,g;function h(){return e[2](e[3])}return{key:t,first:null,c(){n=C("button"),r=C("img"),s=O(),l=C("span"),u=P(i),f=O(),this.h()},l(p){n=x(p,"BUTTON",{type:!0,class:!0});var m=w(n);r=x(m,"IMG",{class:!0,src:!0,alt:!0}),s=A(m),l=x(m,"SPAN",{});var $=w(l);u=L($,i),$.forEach(b),f=A(m),m.forEach(b),this.h()},h(){d(r,"class","image svelte-1l1v01j"),fe(r.src,a=`${Ee}/demo-${e[3].name}.gif`)||d(r,"src",a),d(r,"alt",o=e[3].name),d(n,"type","button"),d(n,"class","option svelte-1l1v01j"),se(n,"option--selected",e[3]===e[1].current),this.first=n},m(p,m){F(p,n,m),_(n,r),_(n,s),_(n,l),_(l,u),_(n,f),c||(g=re(n,"click",h),c=!0)},p(p,m){e=p,m&2&&!fe(r.src,a=`${Ee}/demo-${e[3].name}.gif`)&&d(r,"src",a),m&2&&o!==(o=e[3].name)&&d(r,"alt",o),m&2&&i!==(i=e[3].name+"")&&ee(u,i),m&2&&se(n,"option--selected",e[3]===e[1].current)},d(p){p&&b(n),c=!1,g()}}}function rl(t){let e,n=[],r=new Map,a,o=t[1].animations;const s=l=>l[3].name;for(let l=0;l<o.length;l+=1){let i=Ft(t,o,l),u=s(i);r.set(u,n[l]=Rt(u,i))}return{c(){e=C("aside");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=x(l,"ASIDE",{class:!0});var i=w(e);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(b),this.h()},h(){d(e,"class",a=Q(`container ${t[0]}`)+" svelte-1l1v01j")},m(l,i){F(l,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(l,[i]){i&2&&(o=l[1].animations,n=hn(n,i,s,1,l,o,r,e,pn,Rt,null,Ft)),i&1&&a!==(a=Q(`container ${l[0]}`)+" svelte-1l1v01j")&&d(e,"class",a)},i:le,o:le,d(l){l&&b(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function al(t,e,n){let r;ie(t,ae,s=>n(1,r=s));let{class:a=""}=e;const o=s=>ae.changeCurrentAnimation(s);return t.$$set=s=>{"class"in s&&n(0,a=s.class)},[a,r,o]}class ol extends V{constructor(e){super(),Y(this,e,al,rl,W,{class:0})}}function It(t){t[12]=t[13].dataUri}function Pt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:ll,then:il,catch:sl,value:13,error:14};return it(n=t[3],r),{c(){e=C("div"),r.block.c(),this.h()},l(a){e=x(a,"DIV",{class:!0});var o=w(e);r.block.l(o),o.forEach(b),this.h()},h(){d(e,"class","preview__container preview__container--no-debug svelte-13qbjon")},m(a,o){F(a,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(a,o){t=a,r.ctx=t,o&8&&n!==(n=t[3])&&it(n,r)||bn(r,t,o)},d(a){a&&b(e),r.block.d(),r.token=null,r=null}}}function sl(t){let e,n,r=t[14]+"",a;return{c(){e=C("p"),n=P("An error has occurred: "),a=P(r),this.h()},l(o){e=x(o,"P",{class:!0});var s=w(e);n=L(s,"An error has occurred: "),a=L(s,r),s.forEach(b),this.h()},h(){d(e,"class","preview__error svelte-13qbjon")},m(o,s){F(o,e,s),_(e,n),_(e,a)},p(o,s){s&8&&r!==(r=o[14]+"")&&ee(a,r)},d(o){o&&b(e)}}}function il(t){It(t);let e,n,r,a,o,s,l;return{c(){e=C("div"),n=C("img"),a=O(),o=C("a"),s=P("Download"),this.h()},l(i){e=x(i,"DIV",{class:!0});var u=w(e);n=x(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(b),a=A(i),o=x(i,"A",{class:!0,download:!0,href:!0});var f=w(o);s=L(f,"Download"),f.forEach(b),this.h()},h(){d(n,"class","preview__image svelte-13qbjon"),fe(n.src,r=t[12])||d(n,"src",r),d(n,"alt","generated gif"),d(e,"class","preview__image-container svelte-13qbjon"),d(o,"class","preview__download-button svelte-13qbjon"),d(o,"download","jumping_peter.gif"),d(o,"href",l=t[12])},m(i,u){F(i,e,u),_(e,n),F(i,a,u),F(i,o,u),_(o,s)},p(i,u){It(i),u&8&&!fe(n.src,r=i[12])&&d(n,"src",r),u&8&&l!==(l=i[12])&&d(o,"href",l)},d(i){i&&b(e),i&&b(a),i&&b(o)}}}function ll(t){let e,n,r,a,o,s,l=t[4].frame+"",i,u,f=t[5].totalFrames+"",c,g,h,p,m,$;return{c(){e=C("div"),n=C("p"),r=P("Generating..."),a=O(),o=C("p"),s=P("["),i=P(l),u=P(" / "),c=P(f),g=P("]"),h=O(),p=C("progress"),this.h()},l(y){e=x(y,"DIV",{class:!0});var v=w(e);n=x(v,"P",{});var T=w(n);r=L(T,"Generating..."),T.forEach(b),a=A(v),o=x(v,"P",{});var E=w(o);s=L(E,"["),i=L(E,l),u=L(E," / "),c=L(E,f),g=L(E,"]"),E.forEach(b),h=A(v),p=x(v,"PROGRESS",{class:!0,max:!0}),w(p).forEach(b),v.forEach(b),this.h()},h(){d(p,"class","preview__progress svelte-13qbjon"),d(p,"max",m=t[5].totalFrames),p.value=$=t[4].frame,d(e,"class","preview__loading svelte-13qbjon")},m(y,v){F(y,e,v),_(e,n),_(n,r),_(e,a),_(e,o),_(o,s),_(o,i),_(o,u),_(o,c),_(o,g),_(e,h),_(e,p)},p(y,v){v&16&&l!==(l=y[4].frame+"")&&ee(i,l),v&32&&f!==(f=y[5].totalFrames+"")&&ee(c,f),v&32&&m!==(m=y[5].totalFrames)&&d(p,"max",m),v&16&&$!==($=y[4].frame)&&(p.value=$)},d(y){y&&b(e)}}}function ul(t){let e,n,r,a,o,s,l,i,u,f,c,g;r=new ot({props:{label:"Debug Mode",value:t[1]}}),r.$on("change",t[7]);let h=!t[1]&&t[3]&&Pt(t);return f=new ce({props:{min:0,max:t[5].totalFrames-1,step:1,value:t[4].frame}}),f.$on("input",t[6]),{c(){e=C("main"),n=C("div"),j(r.$$.fragment),a=O(),h&&h.c(),o=O(),s=C("div"),l=C("div"),i=C("canvas"),u=O(),j(f.$$.fragment),this.h()},l(p){e=x(p,"MAIN",{class:!0});var m=w(e);n=x(m,"DIV",{class:!0});var $=w(n);U(r.$$.fragment,$),$.forEach(b),a=A(m),h&&h.l(m),o=A(m),s=x(m,"DIV",{class:!0});var y=w(s);l=x(y,"DIV",{class:!0});var v=w(l);i=x(v,"CANVAS",{class:!0,style:!0}),w(i).forEach(b),v.forEach(b),u=A(y),U(f.$$.fragment,y),y.forEach(b),m.forEach(b),this.h()},h(){d(n,"class","preview__debug-input svelte-13qbjon"),d(i,"class","preview__image svelte-13qbjon"),_n(i,"transform","scaleY(-1)"),d(l,"class","preview__image-container svelte-13qbjon"),d(s,"class","preview__container preview__container--debug svelte-13qbjon"),d(e,"class",c=Q(`preview ${t[0]}`)+" svelte-13qbjon"),se(e,"preview--debug",t[1]),se(e,"preview--no-debug",!t[1])},m(p,m){F(p,e,m),_(e,n),N(r,n,null),_(e,a),h&&h.m(e,null),_(e,o),_(e,s),_(s,l),_(l,i),t[9](i),_(s,u),N(f,s,null),g=!0},p(p,[m]){const $={};m&2&&($.value=p[1]),r.$set($),!p[1]&&p[3]?h?h.p(p,m):(h=Pt(p),h.c(),h.m(e,o)):h&&(h.d(1),h=null);const y={};m&32&&(y.max=p[5].totalFrames-1),m&16&&(y.value=p[4].frame),f.$set(y),(!g||m&1&&c!==(c=Q(`preview ${p[0]}`)+" svelte-13qbjon"))&&d(e,"class",c),(!g||m&3)&&se(e,"preview--debug",p[1]),(!g||m&3)&&se(e,"preview--no-debug",!p[1])},i(p){g||(S(r.$$.fragment,p),S(f.$$.fragment,p),g=!0)},o(p){k(r.$$.fragment,p),k(f.$$.fragment,p),g=!1},d(p){p&&b(e),G(r),h&&h.d(),t[9](null),G(f)}}}function cl(t,e,n){let r,a,o;ie(t,Qe,m=>n(8,r=m)),ie(t,Ce,m=>n(4,a=m)),ie(t,ne,m=>n(5,o=m));let s,{class:l=""}=e,i=!1,u=null;function f(){Ce.renderFrame().catch(m=>{throw console.error(`renderFrame failed: ${m}`),m})}function c(){n(3,u=Ce.animate().catch(m=>{throw console.error(`animate failed: ${m}`),m}))}vn(()=>{Ce.changeCanvas(s),c()});function g(m){Ce.renderFrame(m.detail.value).catch($=>console.error(`Animation failed: ${$}`))}function h(m){n(1,i=m.detail.value)}function p(m){$n[m?"unshift":"push"](()=>{s=m,n(2,s)})}return t.$$set=m=>{"class"in m&&n(0,l=m.class)},t.$$.update=()=>{t.$$.dirty&258&&(i?f():c())},[l,i,s,u,a,o,g,h,r,p]}class fl extends V{constructor(e){super(),Y(this,e,cl,ul,W,{class:0})}}function ml(t){let e,n,r,a,o,s,l,i,u,f,c,g,h,p,m,$,y,v,T,E,I,q,J,z,te;return document.title=e=xe,$=new Tn({props:{class:"header"}}),v=new ol({props:{class:"animations"}}),E=new Vi({props:{class:"common-options"}}),q=new nl({props:{class:"animation-options"}}),z=new fl({props:{class:"preview"}}),{c(){n=C("meta"),r=C("meta"),a=C("meta"),o=C("meta"),s=C("meta"),l=C("meta"),i=C("meta"),u=C("meta"),f=C("meta"),c=C("meta"),g=C("meta"),h=C("meta"),p=O(),m=C("div"),j($.$$.fragment),y=O(),j(v.$$.fragment),T=O(),j(E.$$.fragment),I=O(),j(q.$$.fragment),J=O(),j(z.$$.fragment),this.h()},l(D){const B=yn("svelte-2dqrj",document.head);n=x(B,"META",{name:!0,content:!0,class:!0}),r=x(B,"META",{name:!0,content:!0,class:!0}),a=x(B,"META",{property:!0,content:!0,class:!0}),o=x(B,"META",{property:!0,content:!0,class:!0}),s=x(B,"META",{property:!0,content:!0,class:!0}),l=x(B,"META",{property:!0,content:!0,class:!0}),i=x(B,"META",{property:!0,content:!0,class:!0}),u=x(B,"META",{property:!0,content:!0,class:!0}),f=x(B,"META",{property:!0,content:!0,class:!0}),c=x(B,"META",{property:!0,content:!0,class:!0}),g=x(B,"META",{property:!0,content:!0,class:!0}),h=x(B,"META",{property:!0,content:!0,class:!0}),B.forEach(b),p=A(D),m=x(D,"DIV",{class:!0});var K=w(m);U($.$$.fragment,K),y=A(K),U(v.$$.fragment,K),T=A(K),U(E.$$.fragment,K),I=A(K),U(q.$$.fragment,K),J=A(K),U(z.$$.fragment,K),K.forEach(b),this.h()},h(){d(n,"name","title"),d(n,"content",xe),d(n,"class","svelte-14fuh2n"),d(r,"name","description"),d(r,"content",Ze),d(r,"class","svelte-14fuh2n"),d(a,"property","og:type"),d(a,"content","website"),d(a,"class","svelte-14fuh2n"),d(o,"property","og:url"),d(o,"content",Lt),d(o,"class","svelte-14fuh2n"),d(s,"property","og:title"),d(s,"content",xe),d(s,"class","svelte-14fuh2n"),d(l,"property","og:description"),d(l,"content",Ze),d(l,"class","svelte-14fuh2n"),d(i,"property","og:image"),d(i,"content",Dt),d(i,"class","svelte-14fuh2n"),d(u,"property","twitter:card"),d(u,"content","summary_large_image"),d(u,"class","svelte-14fuh2n"),d(f,"property","twitter:url"),d(f,"content",Lt),d(f,"class","svelte-14fuh2n"),d(c,"property","twitter:title"),d(c,"content",xe),d(c,"class","svelte-14fuh2n"),d(g,"property","twitter:description"),d(g,"content",Ze),d(g,"class","svelte-14fuh2n"),d(h,"property","twitter:image"),d(h,"content",Dt),d(h,"class","svelte-14fuh2n"),d(m,"class","grid svelte-14fuh2n")},m(D,B){_(document.head,n),_(document.head,r),_(document.head,a),_(document.head,o),_(document.head,s),_(document.head,l),_(document.head,i),_(document.head,u),_(document.head,f),_(document.head,c),_(document.head,g),_(document.head,h),F(D,p,B),F(D,m,B),N($,m,null),_(m,y),N(v,m,null),_(m,T),N(E,m,null),_(m,I),N(q,m,null),_(m,J),N(z,m,null),te=!0},p(D,[B]){(!te||B&0)&&e!==(e=xe)&&(document.title=e)},i(D){te||(S($.$$.fragment,D),S(v.$$.fragment,D),S(E.$$.fragment,D),S(q.$$.fragment,D),S(z.$$.fragment,D),te=!0)},o(D){k($.$$.fragment,D),k(v.$$.fragment,D),k(E.$$.fragment,D),k(q.$$.fragment,D),k(z.$$.fragment,D),te=!1},d(D){b(n),b(r),b(a),b(o),b(s),b(l),b(i),b(u),b(f),b(c),b(g),b(h),D&&b(p),D&&b(m),G($),G(v),G(E),G(q),G(z)}}}const xe="Jumping Peter",Ze="With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects",Lt="https://ksmai.github.io/jumping-peter",Dt="https://ksmai.github.io/jumping-peter/favicon.png";class hl extends V{constructor(e){super(),Y(this,e,null,ml,W,{})}}export{hl as default};
