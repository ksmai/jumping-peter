import{H as c,W as p}from"./index.adf49e6c.js";const t=[];function j(n,a=c){let o;const i=new Set;function r(e){if(p(n,e)&&(n=e,o)){const b=!t.length;for(const s of i)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(n))}function _(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(o=a(r)||c),e(n),()=>{i.delete(s),i.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var u;const g=((u=globalThis.__sveltekit_2njwje)==null?void 0:u.base)??"/jumping-peter";var f;const d=((f=globalThis.__sveltekit_2njwje)==null?void 0:f.assets)??g;export{d as a,g as b,j as w};
