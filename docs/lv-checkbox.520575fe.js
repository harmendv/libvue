import{_ as u,b as l,d as v,o as a,c as p,w as d,e as m,f as s,g as c,F as f,h as x}from"./index.f2b50de5.js";const V=`
<lv-checkbox v-model="checkbox" label="im a checkbox" />
<lv-checkbox v-model="checkbox" disabled label="im a disabled checkbox" />
<lv-checkbox v-model="checkbox" loading label="im a loading checkbox" />
`.trim(),g={data(){return{code:V,checkbox:!0}}},C=x("Checkbox"),w=x("A simple checkbox");function B(U,o,D,F,e,N){const i=l("lv-heading"),b=l("lv-checkbox",!0),_=l("lv-flex"),r=l("lv-card"),h=l("lv-code"),k=l("component-details"),t=v("space-after");return a(),p(f,null,[d((a(),m(i,{level:3},{default:s(()=>[C]),_:1})),[[t,.5]]),d((a(),m(i,{sub:"",level:6},{default:s(()=>[w]),_:1})),[[t,2]]),d((a(),m(r,null,{default:s(()=>[c(_,{direction:"column"},{default:s(()=>[c(b,{modelValue:e.checkbox,"onUpdate:modelValue":o[0]||(o[0]=n=>e.checkbox=n),label:"im a checkbox"},null,8,["modelValue"]),c(b,{modelValue:e.checkbox,"onUpdate:modelValue":o[1]||(o[1]=n=>e.checkbox=n),disabled:"",label:"im a disabled checkbox"},null,8,["modelValue"]),c(b,{modelValue:e.checkbox,"onUpdate:modelValue":o[2]||(o[2]=n=>e.checkbox=n),loading:"",label:"im a loading checkbox"},null,8,["modelValue"])]),_:1})]),_:1})),[[t,1]]),d(c(h,{lang:"html",code:e.code},null,8,["code"]),[[t,1]]),c(k,{component:"LvCheckbox"})],64)}const E=u(g,[["render",B]]);export{E as default};
