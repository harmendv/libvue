import{n as f}from"./navigationMixin.2ac3ad41.js";import{_ as u,j as s,l as c,c as k,i as v,a as r,t as d,n as m,g as _,o as n,d as z,r as C}from"./index.0b0776f9.js";const b={mixins:[f],inheritAttrs:!1,props:{label:{type:String,default:""},icon:{type:String,default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{hasChildren(){return!!this.$slots.default},classObject(){return{"lv-horizontal-nav-item--disabled":this.disabled||this.loading,"lv-horizontal-nav-item--loading":this.loading,"lv-horizontal-nav-item--active":this.toEqualsCurrentRoute}}}},g=["href"],p={class:"lv-horizontal-nav-item__label"},y=["href"],B={class:"lv-horizontal-nav-item__label"};function N(e,t,a,j,S,o){const l=_("lv-icon"),h=_("lv-popover");return o.hasChildren?(n(),s(h,{key:0,trigger:"mouseenter",placement:"bottom",interactive:""},{reference:c(()=>[r("a",{class:m(["lv-horizontal-nav-item",o.classObject]),href:e.href,onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i))},[a.icon?(n(),s(l,{key:0,name:a.icon,class:"lv-horizontal-nav-item__icon"},null,8,["name"])):v("",!0),r("div",p,d(a.label),1),z(l,{class:"lv-horizontal-nav-item__arrow",name:"chevron-down"})],10,g)]),content:c(()=>[C(e.$slots,"default")]),_:3})):(n(),k("a",{key:1,class:m(["lv-horizontal-nav-item",o.classObject]),href:e.href,onClick:t[1]||(t[1]=(...i)=>e.onClick&&e.onClick(...i))},[a.icon?(n(),s(l,{key:0,name:a.icon,class:"lv-horizontal-nav-item__icon"},null,8,["name"])):v("",!0),r("div",B,d(a.label),1)],10,y))}const V=u(b,[["render",N]]);export{V as default};