import{_ as g,b as e,d as x,o as l,c as h,w as n,e as r,f as t,g as c,F as V,h as _}from"./index-fe684972.js";const b=`
<lv-range-slider :min="100" :max="200" :step="5" v-model="model"></lv-range-slider>
`.trim(),k={data(){return{code:b,model:{from:120,to:150}}}};function w(B,s,R,S,a,C){const d=e("lv-heading"),m=e("lv-range-slider",!0),i=e("lv-flex"),p=e("lv-card"),v=e("lv-code"),u=e("component-details"),o=x("space-after");return l(),h(V,null,[n((l(),r(d,{level:3},{default:t(()=>[_("Range Slider")]),_:1})),[[o,.5]]),n((l(),r(d,{sub:"",level:6},{default:t(()=>[_("An double slider input")]),_:1})),[[o,2]]),n((l(),r(p,null,{default:t(()=>[c(i,{direction:"column"},{default:t(()=>[c(m,{min:100,max:200,step:5,modelValue:a.model,"onUpdate:modelValue":s[0]||(s[0]=f=>a.model=f)},null,8,["modelValue"])]),_:1})]),_:1})),[[o,1]]),n(c(v,{code:a.code,lang:"html"},null,8,["code"]),[[o,1]]),c(u,{component:"LvRangeSlider"})],64)}const F=g(k,[["render",w]]);export{F as default};
