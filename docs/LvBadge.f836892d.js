import{p as r}from"./propColorMixin.97c667c1.js";import{p as d}from"./propSizeMixin.5f872152.js";import{_ as c,o as t,c as a,y as i,x as n,i as _,v as p,z as o}from"./index.9cebe41f.js";const g={mixins:[r("solid-danger"),d("small")],props:{text:{type:String,default:""}},computed:{classObject(){return{"lv-badge--slotted":!!this.$slots.default}},badgeClassObject(){return{[`lv-badge__badge--color-${this.color}`]:!!this.color,[`lv-badge__badge--size-${this.size}`]:!0}}}},b={key:0,class:"lv-badge__slot"};function u(e,m,l,v,f,s){return t(),a("div",{class:o(["lv-badge",s.classObject])},[e.$slots.default?(t(),a("div",b,[i(e.$slots,"default")])):n("",!0),_("div",{class:o(["lv-badge__badge",s.badgeClassObject])},p(l.text),3)],2)}const $=c(g,[["render",u]]);export{$ as default};
