import{_ as u,b as o,d as v,o as t,c as f,w as c,e as s,f as a,g as _,F as k,h as i}from"./index.fff357f5.js";const h={data(){return{color:"#000000"}}},x=i("Color Picker"),g=i("Used for picking a hex color");function C(V,r,w,B,l,P){const n=o("lv-heading"),p=o("lv-color-picker",!0),d=o("component-details"),e=v("space-after");return t(),f(k,null,[c((t(),s(n,{level:3},{default:a(()=>[x]),_:1})),[[e,.5]]),c((t(),s(n,{sub:"",level:6},{default:a(()=>[g]),_:1})),[[e,2]]),c(_(p,{modelValue:l.color,"onUpdate:modelValue":r[0]||(r[0]=m=>l.color=m)},null,8,["modelValue"]),[[e,1]]),_(d,{component:"LvColorPicker"})],64)}const D=u(h,[["render",C]]);export{D as default};