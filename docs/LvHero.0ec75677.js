import{_ as c,c as s,a as t,t as i,r as n,i as a,n as _,o}from"./index.cc13a826.js";const d={props:{title:{type:String,default:""},description:{type:String,default:""}},computed:{hasSide(){return!!this.$slots.side},classObject(){return{"lv-hero--no-side":!this.hasSide}}}},h={class:"lv-hero__content"},u={class:"lv-hero__title"},v={class:"lv-hero__description"},p={key:0,class:"lv-hero__buttons"},f={key:0,class:"lv-hero__side"};function m(e,y,r,S,$,l){return o(),s("div",{class:_(["lv-hero",l.classObject])},[t("div",h,[t("h1",u,i(r.title),1),t("p",v,i(r.description),1),e.$slots.buttons?(o(),s("div",p,[n(e.$slots,"buttons")])):a("",!0)]),e.$slots.side?(o(),s("div",f,[n(e.$slots,"side")])):a("",!0)],2)}const g=c(d,[["render",m]]);export{g as default};
