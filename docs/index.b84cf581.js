import{i as w,n as O,a as g,r as Q,b as T,t as C}from"./index.03596c51.js";import{x as N,y as L}from"./index.7cfd2803.js";function p(e){var t;const n=Q(e);return(t=n==null?void 0:n.$el)!=null?t:n}const b=T?window:void 0;function d(...e){let t,n,a,r;if(w(e[0])?([n,a,r]=e,t=b):[t,n,a,r]=e,!t)return O;let u=O;const f=L(()=>p(t),i=>{u(),i&&(i.addEventListener(n,a,r),u=()=>{i.removeEventListener(n,a,r),u=O})},{immediate:!0,flush:"post"}),c=()=>{f(),u()};return C(c),c}function j(e,t,n={}){const{window:a=b,ignore:r,capture:u=!0,detectIframe:f=!1}=n;if(!a)return;const c=N(!0);let i;const I=s=>{a.clearTimeout(i);const o=p(e);!o||o===s.target||s.composedPath().includes(o)||!c.value||t(s)},P=s=>r&&r.some(o=>{const l=p(o);return l&&(s.target===l||s.composedPath().includes(l))}),y=[d(a,"click",I,{passive:!0,capture:u}),d(a,"pointerdown",s=>{const o=p(e);c.value=!!o&&!s.composedPath().includes(o)&&!P(s)},{passive:!0}),d(a,"pointerup",s=>{if(s.button===0){const o=s.composedPath();s.composedPath=()=>o,i=a.setTimeout(()=>I(s),50)}},{passive:!0}),f&&d(a,"blur",s=>{var o;const l=p(e);((o=document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(l!=null&&l.contains(document.activeElement))&&t(s)})].filter(Boolean);return()=>y.forEach(s=>s())}const m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v="__vueuse_ssr_handlers__";m[v]=m[v]||{};m[v];var _;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_||(_={}));var x=Object.defineProperty,E=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(E)for(var n of E(t))B.call(t,n)&&h(e,n,t[n]);return e};const W={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};S({linear:g},W);export{j as o,p as u};
