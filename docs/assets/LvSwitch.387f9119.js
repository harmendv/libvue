import{_ as r,o as a,c as o,i as c,L as h,p as u,x as i,v as _,z as m,s as g}from"./index.a2db1067.js";const v={inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["update:modelValue"],computed:{classObject(){return{"lv-switch--checked":!!this.modelValue,"lv-switch--disabled":this.disabled||this.loading,"lv-switch--loading":this.loading}}},methods:{toggleCheckbox(){!this.loading&&!this.disabled&&this.$emit("update:modelValue",!this.modelValue)}}},b={class:"lv-switch__checkbox"},f=["checked"];function k(d,l,t,p,w,e){const n=g("lv-icon");return a(),o("div",{class:m(["lv-switch",e.classObject]),role:"switch"},[c("div",b,[c("input",h({class:"lv-switch__input",type:"checkbox",checked:t.modelValue},d.$attrs,{onInput:l[0]||(l[0]=(...s)=>e.toggleCheckbox&&e.toggleCheckbox(...s))}),null,16,f),t.loading?(a(),u(n,{key:0,class:"lv-switch__loader",size:12,name:"loader-2"})):i("",!0)]),t.label?(a(),o("div",{key:0,class:"lv-switch__label",onClick:l[1]||(l[1]=(...s)=>e.toggleCheckbox&&e.toggleCheckbox(...s))},_(t.label),1)):i("",!0)],2)}const y=r(v,[["render",k]]);export{y as default};
