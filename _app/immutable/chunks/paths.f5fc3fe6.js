import{H as b,_ as y,O as m,$ as q,a0 as k}from"./index.a9aa9141.js";const c=[];function w(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=b){let u;const n=new Set;function a(t){if(q(e,t)&&(e=t,u)){const r=!c.length;for(const s of n)s[1](),c.push(s,e);if(r){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(u=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(u(),u=null)}}return{set:a,update:f,subscribe:l}}function j(e,i,u){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return w(u,l=>{let t=!1;const r=[];let s=0,p=b;const d=()=>{if(s)return;p();const o=i(n?r[0]:r,l);f?l(o):p=k(o)?o:b},g=a.map((o,_)=>y(o,h=>{r[_]=h,s&=~(1<<_),t&&d()},()=>{s|=1<<_}));return t=!0,d(),function(){m(g),p()}})}const A=globalThis.__sveltekit_1b3yp9u?.base??"/jumping-peter",x=globalThis.__sveltekit_1b3yp9u?.assets??A;export{x as a,A as b,j as d,z as w};