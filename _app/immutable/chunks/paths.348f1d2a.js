import{H as c,s as p}from"./index.718a9335.js";const e=[];function h(i,a=c){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r)||c),t(i),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_zbdt4i)==null?void 0:u.base)??"/jumping-peter";var f;const z=((f=globalThis.__sveltekit_zbdt4i)==null?void 0:f.assets)??d;export{z as a,d as b,h as w};
