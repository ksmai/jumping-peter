import{H as b,_ as m,O as y,$ as z,a0 as j}from"./index.a9aa9141.js";const c=[];function q(e,i){return{subscribe:k(e,i).subscribe}}function k(e,i=b){let o;const n=new Set;function a(t){if(z(e,t)&&(e=t,o)){const r=!c.length;for(const s of n)s[1](),c.push(s,e);if(r){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:l}}function T(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return q(o,l=>{let t=!1;const r=[];let s=0,p=b;const d=()=>{if(s)return;p();const u=i(n?r[0]:r,l);f?l(u):p=j(u)?u:b},g=a.map((u,_)=>m(u,h=>{r[_]=h,s&=~(1<<_),t&&d()},()=>{s|=1<<_}));return t=!0,d(),function(){y(g),p()}})}const w=globalThis.__sveltekit_vpzjf7?.base??"/jumping-peter",v=globalThis.__sveltekit_vpzjf7?.assets??w;export{v as a,w as b,T as d,k as w};
