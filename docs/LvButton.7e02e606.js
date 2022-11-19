import{p as d}from"./propColorMixin.97c667c1.js";import{p as r}from"./propSizeMixin.5f872152.js";import{n as c}from"./navigationMixin.372bbaf4.js";import u from"./LvIcon.e53f0244.js";import{_ as b,o as n,f as o,s as f,A as l,d as i,a as _,z as m,I as v,K as h,e as g,v as p,y}from"./index.6cba6d7e.js";const C={components:{LvIcon:u},mixins:[d("solid-default"),c,r()],props:{label:{type:String,default:""},disabled:{type:Boolean,default:null},loading:{type:Boolean,default:!1},icon:{type:String,default:""},align:{type:String,default:"center",validator:t=>["center","left","right"].includes(t)}},computed:{classObject(){return{[`lv-button--color-${this.color}`]:!!this.color,[`lv-button--size-${this.size}`]:!0,[`lv-button--align-${this.align}`]:!!this.align,"lv-button--disabled":this.disabled||this.loading,"lv-button--loading":this.loading,"lv-button--has-label":this.label||!!this.$slots.default}}}};function k(t,B,e,x,S,s){const a=g("lv-icon");return n(),o(h(t.href?"a":"button"),{href:t.href,tabindex:"0",class:l(["lv-button",s.classObject]),disabled:e.disabled,role:"button",onClick:t.onClick,onKeydown:v(t.onClick,["enter","space"])},{default:f(()=>[e.icon?(n(),o(a,{key:0,class:l(["lv-button__icon",{"lv-button__icon--hidden":e.loading}]),name:e.icon},null,8,["class","name"])):i("",!0),e.loading?(n(),o(a,{key:1,class:"lv-button__loading",name:"loader-2"})):i("",!0),_("span",{class:l(["lv-button__content",{"lv-button__content--hidden":e.loading}])},[m(t.$slots,"default",{},()=>[p(y(e.label),1)])],2)]),_:3},40,["href","class","disabled","onClick","onKeydown"])}const N=b(C,[["render",k]]);export{N as default};
