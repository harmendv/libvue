import{_ as m,c as l,a as r,b as n,t as h,j as y,i as o,d as c,l as b,g as u,o as t,r as i}from"./index.7cfd2803.js";const k={props:{label:{type:String,default:null},labelFor:{type:String,default:null},resetButton:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["reset"],methods:{onClickResetButton(){this.$emit("reset")}}},B={class:"lv-fieldset"},p=["for"],C=n(" Reset "),g={class:"lv-fieldset__content"},F={key:0,class:"lv-fieldset__hint"},N=n("This is a hint"),R={key:1,class:"lv-fieldset__invalid"},S=n("Invalid");function V(e,a,s,$,q,d){const _=u("lv-icon"),f=u("lv-flex");return t(),l("fieldset",B,[r("label",{class:"lv-fieldset__label",for:s.labelFor},[n(h(s.label)+" ",1),s.required?(t(),y(_,{key:0,class:"lv-fieldset__required-symbol",name:"asterisk"})):o("",!0),s.resetButton?(t(),l("button",{key:1,class:"lv-fieldset__reset-button",type:"button",onClick:a[0]||(a[0]=(...v)=>d.onClickResetButton&&d.onClickResetButton(...v))},[c(_,{class:"lv-fieldset__reset-button-icon",name:"rotate-ccw"}),C])):o("",!0)],8,p),c(f,{direction:"column"},{default:b(()=>[r("div",g,[i(e.$slots,"default")]),e.$slots.hint?(t(),l("div",F,[i(e.$slots,"hint",{},()=>[N])])):o("",!0),e.$slots.invalid?(t(),l("div",R,[i(e.$slots,"invalid",{},()=>[S])])):o("",!0)]),_:3})])}const w=m(k,[["render",V]]);export{w as default};
