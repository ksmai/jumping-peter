import{H as b,W as p}from"./index.adf49e6c.js";const e=[];function d(i,a=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=a(r)||b),t(i),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var u;const g=((u=globalThis.__sveltekit_1115nci)==null?void 0:u.base)??"/jumping-peter";var f;const m=((f=globalThis.__sveltekit_1115nci)==null?void 0:f.assets)??g;export{m as a,g as b,d as w};
