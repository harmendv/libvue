import{_ as c,c as t,F as u,b as o,t as m,n as g,h as d,o as s,u as v}from"./index.7cfd2803.js";const i={props:{image:{type:String,default:null},initials:{type:String,default:"?"},size:{type:String,default:"3rem"}},computed:{classObject(){return{"lv-avatar--has-image":!!this.image}}}},_=()=>{v(e=>({"17ea53a2":e.size}))},r=i.setup;i.setup=r?(e,n)=>(_(),r(e,n)):_;const f=i,y=["src"];function p(e,n,a,h,S,l){return s(),t("span",{class:g(["lv-avatar",l.classObject]),style:d(`width: ${a.size}; height: ${a.size};`)},[a.image?(s(),t("img",{key:0,src:a.image,class:"lv-avatar__image",alt:"avatar"},null,8,y)):(s(),t(u,{key:1},[o(m(a.initials),1)],64))],6)}const x=c(f,[["render",p]]);export{x as default};
