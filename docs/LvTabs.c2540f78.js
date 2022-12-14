import{_ as a,c as t,d as s,l as e,a as l,F as n,k as i,g as o,o as d,n as b,K as c,w as v,j as u,i as r,b as _,t as p,f,v as y,r as k}from"./index.7cfd2803.js";const m={class:"lv-tabs",role:"tablist"},g=["tabindex","onClick","onKeydown"],h={class:"lv-tabs__panels"};const x=a({props:{tabs:{type:Array,default:()=>[]},active:{type:String,default:null}},emits:["change-tab"],methods:{onClickButton(a){a.disabled||this.$emit("change-tab",a.id)},onKeyDown(a,t){t.preventDefault(),a.disabled||this.$emit("change-tab",a.id)}}},[["render",function(a,x,w,K,C,D){const $=o("lv-icon"),j=o("lv-flex");return d(),t("div",m,[s(j,{class:"lv-tabs__buttons",gap:"20px"},{default:e((()=>[(d(!0),t(n,null,i(w.tabs,(a=>(d(),t("div",{key:a.id,class:b(["lv-tabs__button",{"lv-tabs__button--active":a.id===w.active,"lv-tabs__button--disabled":!!a.disabled}]),tabindex:a.disabled?"-1":"0",role:"tab",onClick:c((t=>D.onClickButton(a)),["stop"]),onKeydown:v((t=>D.onKeyDown(a,t)),["enter","space"])},[a.icon?(d(),u($,{key:0,class:"lv-tabs__button-icon",name:a.icon},null,8,["name"])):r("",!0),_(" "+p(a.title),1)],42,g)))),128))])),_:1}),l("div",h,[(d(!0),t(n,null,i(w.tabs,(s=>f((d(),t("div",{key:s.id,class:"lv-tabs__panel",role:"tabpanel"},[k(a.$slots,s.id,{tab:s})])),[[y,s.id===w.active]]))),128))])])}]]);export{x as default};
