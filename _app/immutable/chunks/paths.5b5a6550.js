import{H as l,W as q,X as k,Y as w,Z as z}from"./index.b30f5e97.js";const u=[];function A(t,i){return{subscribe:T(t,i).subscribe}}function T(t,i=l){let o;const n=new Set;function a(e){if(w(t,e)&&(t=e,o)){const r=!u.length;for(const s of n)s[1](),u.push(s,t);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(e){a(e(t))}function b(e,r=l){const s=[e,r];return n.add(s),n.size===1&&(o=i(a)||l),e(t),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:b}}function H(t,i,o){const n=!Array.isArray(t),a=n?[t]:t,f=i.length<2;return A(o,b=>{let e=!1;const r=[];let s=0,p=l;const d=()=>{if(s)return;p();const c=i(n?r[0]:r,b);f?b(c):p=z(c)?c:l},m=a.map((c,_)=>q(c,y=>{r[_]=y,s&=~(1<<_),e&&d()},()=>{s|=1<<_}));return e=!0,d(),function(){k(m),p()}})}var g;const j=((g=globalThis.__sveltekit_5ltoc4)==null?void 0:g.base)??"/jumping-peter";var h;const S=((h=globalThis.__sveltekit_5ltoc4)==null?void 0:h.assets)??j;export{S as a,j as b,H as d,T as w};
