import{_ as o,c as r,d as i,a as s,r as c,o as _,g as l}from"./index.555261bd.js";const d={props:{id:{type:String,required:!0}},computed:{fragmentLink(){return`${window.location.origin}${window.location.pathname}#${this.id}`}}},m=["id","href","name"],f={class:"lv-fragment-link__content"};function g(n,p,e,u,v,t){const a=l("lv-icon");return _(),r("a",{id:e.id,href:t.fragmentLink,class:"lv-fragment-link",name:e.id},[i(a,{class:"lv-fragment-link__anchor",name:"link"}),s("div",f,[c(n.$slots,"default")])],8,m)}const h=o(d,[["render",g]]);export{h as default};