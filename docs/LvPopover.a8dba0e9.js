import{t,c as e}from"./tippy.esm.9bd8cd13.js";import{C as i,D as n,x as s,G as o,H as r,I as a,y as l,_ as p,c as d,r as u,d as h,l as g,g as c,o as v,a as f,h as m}from"./index.7cfd2803.js";const y={mount:t=>!0,show:t=>!0,shown:t=>!0,hidden:t=>!0,hide:t=>!0,trigger:(t,e)=>!0,untrigger:(t,e)=>!0};function b(t,e,i){return{props:{[t]:{type:e||null,required:!1,default:i}},build(e,i){void 0!==e[t].value&&(i[t]=e[t].value)}}}function w(t,e,i,n,s){const o=i;let p=r(t);const d=a((()=>{const t={};for(const i of e){let e=i.build;e&&e(p,t)}return t.onShow=S((t=>o.emit("show",t)),s&&s.onShow,t.onShow),t.onShown=S((t=>o.emit("shown",t)),s&&s.onShown,t.onShown),t.onHidden=S((t=>o.emit("hidden",t)),s&&s.onHidden,t.onHidden),t.onHide=S((t=>o.emit("hide",t)),s&&s.onHide,t.onHide),t.onMount=S((t=>o.emit("mount",t)),s&&s.onMount,t.onMount),t.onTrigger=S(((t,e)=>o.emit("trigger",t,e)),s&&s.onTrigger,t.onTrigger),t.onUntrigger=S(((t,e)=>o.emit("untrigger",t,e)),s&&s.onUntrigger,t.onUntrigger),t}));for(const r of e){let t=r.setup;t&&t(p,n)}return l(d,(t=>{n.value&&n.value.setProps(t)}),{deep:!0}),{tippyOptions:d}}function S(...t){return(...e)=>{let i;for(let n of t)n&&(i=n(...e));return i}}const $={props:{extra:{type:Object,required:!1}},build(t,e){Object.assign(e,t.extra.value||{})}},O={props:{enabled:{type:Boolean,required:!1,default:!0}},setup(t,e){l(t.enabled,(t=>{e.value&&(t?e.value.enable():(e.value.hide(),e.value.disable()))}))}},q=b("placement",String,"top"),B=b("interactive",Boolean),T=b("hideOnClick",Boolean),I={props:{onBody:{type:Boolean,required:!1}},build(t,e){!0===t.onBody.value&&(e.appendTo=()=>document.body)}},_={props:{trigger:{type:String,required:!1}},build(t,e){t.trigger.value&&(e.trigger=t.trigger.value,"manual"===t.trigger.value&&void 0===e.hideOnClick&&(e.hideOnClick=!1))}},E=/^([0-9]+)$|^([0-9]+|-)\s*,\s*([0-9]+|-)$/;function x(t){if("string"==typeof t){let e=t.match(E);return e?e[1]?parseFloat(e[1]):["-"===e[2]?null:parseFloat(e[2]),"-"===e[3]?null:parseFloat(e[3])]:void 0}return t}const C={props:{delay:{type:[String,Number,Array],required:!1,validator:t=>void 0!==x(t)}},build(t,e){void 0!==t.delay.value&&(e.delay=x(t.delay.value))}},H={props:{visible:{type:Boolean,required:!1}},setup(t,e){l(t.visible,(i=>{!e.value||t.trigger&&"manual"!==t.trigger.value||(i?e.value.show():e.value.hide())}))}},M={props:{overrides:{type:Array,required:!1}},build(t,e){const i=e;i.overrides=(i.overrides||[]).concat(t.overrides.value||[])}},U=b("moveTransition",String),j={target:{type:String,required:!1,default:""},deepSearch:{type:Boolean,required:!1,default:!1},singleton:{type:String,required:!1,default:null},eager:{type:Boolean,required:!1,default:!1}};function A(t,e){let i=null,n=t;do{i=D(n,e.test,void 0!==e.selftest&&e.selftest),n=n.parentElement}while(e.recurse&&n&&!i);return i}function D(t,e,i){if(i&&e(t))return t;for(let n=t.previousElementSibling;n;n=n.previousElementSibling)if(e(n))return n;for(let n=t.nextElementSibling;n;n=n.nextElementSibling)if(e(n))return n;return null}const P=[M,U,O,q,I,B,_,T,C,$],k={name:{type:String,required:!1,default:""}};const F=function(...e){let r={};for(const t of e)Object.assign(r,t.props);return i({props:{...j,...r},emits:{attach:t=>!0,...y},render(){return n("div",{"tippy-missing-target":this.tippyTargetMissing?"":void 0},(this.$props.eager||this.singletonInstance||this.shouldRenderContent)&&this.$slots.default?this.$slots.default():[])},setup(t,i){const n=s(),o=s(),r=s(!1),a=s(!1),{tippyOptions:l}=w(t,e,i,n,{onShow(){a.value=!0},onHidden(){a.value=!1}});return{tip:n,tippyOptions:l,singletonInstance:o,tippyTargetMissing:r,shouldRenderContent:a}},methods:{attach(){if(this.tip){const t=this.tip;this.tip=void 0,this.singletonInstance&&(this.singletonInstance.remove(t),this.singletonInstance=void 0),t.destroy()}let e;if("_parent"===this.target)e=this.$el.parentElement;else if(this.deepSearch)e=this.$el.parentElement.querySelector(`[data-tippy-target="${this.target}"]`);else{const t=this.target;e=A(this.$el,{test(e){let i=e;return i&&i.dataset&&i.dataset.tippyTarget===t}})}if(this.tippyTargetMissing=!e,!e)throw new Error(`Unable to find tippy target named '${this.target}'`);if(null!=this.singleton){const t=this.singleton,e=A(this.$el,{test(e){let i=e;return i&&i.dataset&&i.dataset.tippySingleton===t},recurse:!0});this.singletonInstance=e?e._tippySingleton:void 0}else this.singletonInstance=void 0;if(this.tip=t(e,this.tippyOptions),!this.tip)throw new Error("Unable to create tippy instance");this.tip.setContent(this.$el),this.singletonInstance&&this.singletonInstance.add(this.tip),!1===this.enabled&&this.tip.disable(),"manual"===this.trigger&&!0===this.visible&&this.tip.show(),this.$emit("attach",this.tip)}},async mounted(){await o(),this.attach()},beforeUnmount(){this.tip&&this.tip.destroy()}})}(...[H,O,q,I,B,_,T,C,$]);!function(...t){let o={};for(const e of t)Object.assign(o,e.props);i({props:{...k,...o},emits:{add:t=>!0,remove:t=>!0,...y},render(){return n("div",{style:"display: none;","data-tippy-singleton":this.name},[])},setup(e,i){const n=s(),{tippyOptions:o}=w(e,t,i,n);return{tippyOptions:o,instances:s([]),singleton:n}},mounted(){this.$el._tippySingleton=this,this.singleton=e(this.instances,this.tippyOptions),!1===this.enabled&&this.singleton.disable()},beforeUnmount(){this.singleton&&this.singleton.destroy()},methods:{remove(t){const e=this.instances.indexOf(t);-1!==e&&(this.instances.splice(e,1),this.$emit("remove",t),this.singleton&&this.singleton.setInstances(this.instances))},add(t){-1===this.instances.indexOf(t)&&(this.instances.push(t),this.$emit("add",t),this.singleton&&this.singleton.setInstances(this.instances))}}})}(...P);const z='\n<svg width="16" height="6">\n    <path class="lv-popover__arrow-border" d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"/>\n    <path class="lv-popover__arrow-fill" d="m0 7s2 0 5-4c1-1 2-2 3-2 1 0 2 1 3 2 3 4 5 4 5 4h-16z"/>\n</svg>\n'.trim(),R={components:{Tippy:F},props:{trigger:{type:String,default:"mouseenter"},placement:{type:String,default:"auto",validator:t=>["bottom","left","right","top","auto"].includes(t)},appendTo:{type:[String,Element],default:document.body},showArrow:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},padding:{type:String,default:"1rem"},show:{type:Boolean,default:!1},interactive:{type:Boolean,default:!1}},mounted(){this.setDefaultProps()},methods:{setDefaultProps(){t.setDefaultProps({arrow:!!this.showArrow&&z,theme:"libvue",animation:"shift-toward-subtle",duration:100,appendTo:this.appendTo})}}},G={class:"lv-popover"};const N=p(R,[["render",function(t,e,i,n,s,o){const r=c("tippy");return v(),d("div",G,[u(t.$slots,"reference"),h(r,{target:"_parent",interactive:i.interactive,placement:i.placement,trigger:i.trigger,visible:i.visible},{default:g((()=>[f("div",{class:"lv-popover__content",style:m(`padding: ${i.padding}`)},[u(t.$slots,"content")],4)])),_:3},8,["interactive","placement","trigger","visible"])])}]]);export{N as default};
