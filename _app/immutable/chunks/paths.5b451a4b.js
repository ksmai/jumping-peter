import{H as b,_ as j,O as q,$ as k,a0 as w}from"./index.a9aa9141.js";const c=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=b){let o;const n=new Set;function a(t){if(k(e,t)&&(e=t,o)){const r=!c.length;for(const s of n)s[1](),c.push(s,e);if(r){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:l}}function x(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return z(o,l=>{let t=!1;const r=[];let s=0,_=b;const d=()=>{if(s)return;_();const u=i(n?r[0]:r,l);f?l(u):_=w(u)?u:b},m=a.map((u,p)=>j(u,y=>{r[p]=y,s&=~(1<<p),t&&d()},()=>{s|=1<<p}));return t=!0,d(),function(){q(m),_()}})}var g;const T=((g=globalThis.__sveltekit_16j56ev)==null?void 0:g.base)??"/jumping-peter";var h;const H=((h=globalThis.__sveltekit_16j56ev)==null?void 0:h.assets)??T;export{H as a,T as b,x as d,A as w};
