import{_ as v,c as a,d as u,l as b,a as m,F as l,k as i,g as c,o as s,n as f,H as h,w as p,j as y,i as k,b as w,t as x,f as g,v as C,r as B}from"./index.ea90cb57.js";const K={props:{tabs:{type:Array,default:()=>[]},active:{type:String,default:null}},emits:["change-tab"],methods:{onClickButton(t){t.disabled||this.$emit("change-tab",t.id)},onKeyDown(t){t.disabled||this.$emit("change-tab",t.id)}}},D={class:"lv-tabs",role:"tablist"},N=["tabindex","onClick","onKeydown"],S={class:"lv-tabs__panels"};function V(t,L,n,T,$,o){const d=c("lv-icon"),_=c("lv-flex");return s(),a("div",D,[u(_,{class:"lv-tabs__buttons",gap:"20px"},{default:b(()=>[(s(!0),a(l,null,i(n.tabs,e=>(s(),a("div",{key:e.id,class:f(["lv-tabs__button",{"lv-tabs__button--active":e.id===n.active,"lv-tabs__button--disabled":!!e.disabled}]),tabindex:e.disabled?"-1":"0",role:"tab",onClick:h(r=>o.onClickButton(e),["stop"]),onKeydown:p(r=>o.onKeyDown(e),["enter","space"])},[e.icon?(s(),y(d,{key:0,class:"lv-tabs__button-icon",name:e.icon},null,8,["name"])):k("",!0),w(" "+x(e.title),1)],42,N))),128))]),_:1}),m("div",S,[(s(!0),a(l,null,i(n.tabs,e=>g((s(),a("div",{key:e.id,class:"lv-tabs__panel",role:"tabpanel"},[B(t.$slots,e.id,{tab:e})])),[[C,e.id===n.active]])),128))])])}const j=v(K,[["render",V]]);export{j as default};
