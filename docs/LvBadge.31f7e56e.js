import{p as r}from"./propColorMixin.98c71d31.js";import{p as d}from"./propSizeMixin.c60c30ad.js";import{_ as c,c as t,r as i,i as n,a as _,t as p,n as a,o}from"./index.7cfd2803.js";const g={mixins:[r("solid-danger"),d("small")],props:{text:{type:String,default:""}},computed:{classObject(){return{"lv-badge--slotted":!!this.$slots.default}},badgeClassObject(){return{[`lv-badge__badge--color-${this.color}`]:!!this.color,[`lv-badge__badge--size-${this.size}`]:!0}}}},b={key:0,class:"lv-badge__slot"};function u(e,m,l,v,f,s){return o(),t("div",{class:a(["lv-badge",s.classObject])},[e.$slots.default?(o(),t("div",b,[i(e.$slots,"default")])):n("",!0),_("div",{class:a(["lv-badge__badge",s.badgeClassObject])},p(l.text),3)],2)}const y=c(g,[["render",u]]);export{y as default};
