import{H as b,W as q,X as k,Y as w,Z as z}from"./index.b30f5e97.js";const c=[];function A(e,i){return{subscribe:T(e,i).subscribe}}function T(e,i=b){let o;const n=new Set;function a(t){if(w(e,t)&&(e=t,o)){const r=!c.length;for(const s of n)s[1](),c.push(s,e);if(r){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:l}}function x(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return A(o,l=>{let t=!1;const r=[];let s=0,p=b;const g=()=>{if(s)return;p();const u=i(n?r[0]:r,l);f?l(u):p=z(u)?u:b},m=a.map((u,_)=>q(u,y=>{r[_]=y,s&=~(1<<_),t&&g()},()=>{s|=1<<_}));return t=!0,g(),function(){k(m),p()}})}var d;const j=((d=globalThis.__sveltekit_vsabge)==null?void 0:d.base)??"/jumping-peter";var h;const H=((h=globalThis.__sveltekit_vsabge)==null?void 0:h.assets)??j;export{H as a,j as b,x as d,T as w};
