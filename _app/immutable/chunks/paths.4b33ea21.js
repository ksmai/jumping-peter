import{H as b,W as y,X as z,Y as q,Z as x}from"./index.b30f5e97.js";const c=[];function w(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=b){let o;const n=new Set;function a(t){if(q(e,t)&&(e=t,o)){const r=!c.length;for(const s of n)s[1](),c.push(s,e);if(r){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:l}}function H(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return w(o,l=>{let t=!1;const r=[];let s=0,p=b;const d=()=>{if(s)return;p();const u=i(n?r[0]:r,l);f?l(u):p=x(u)?u:b},k=a.map((u,_)=>y(u,m=>{r[_]=m,s&=~(1<<_),t&&d()},()=>{s|=1<<_}));return t=!0,d(),function(){z(k),p()}})}var g;const T=((g=globalThis.__sveltekit_lk1zxb)==null?void 0:g.base)??"/jumping-peter";var h;const S=((h=globalThis.__sveltekit_lk1zxb)==null?void 0:h.assets)??T;export{S as a,T as b,H as d,A as w};