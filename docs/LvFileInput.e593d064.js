import{_ as d,c as o,a as n,d as m,F as p,k as f,i as v,g as u,o as s,j as h}from"./index.46f5ce64.js";const g={props:{modelValue:{type:FileList,default:null},multiple:{type:Boolean,default:!1},buttonText:{type:String,default:e=>e.multiple?"Select files":"Select a file"}},computed:{hasFiles(){var e;return((e=this.modelValue)==null?void 0:e.length)>0}},methods:{onClickSelectFile(){this.$refs.input.click()},onFileChange(e){e.target.files&&this.$emit("update:modelValue",e.target.files)}}},F={class:"lv-file-input"},k={class:"lv-file-input__container"},y={class:"lv-file-input__files"},C=["multiple"];function b(e,a,t,x,V,l){const c=u("lv-button"),_=u("lv-badge");return s(),o("div",F,[n("div",k,[m(c,{class:"lv-file-input__button",color:"solid-primary",label:t.buttonText,size:"small",onClick:l.onClickSelectFile},null,8,["label","onClick"]),n("div",y,[l.hasFiles?(s(!0),o(p,{key:0},f(t.modelValue,(i,r)=>(s(),h(_,{key:r,class:"lv-file-input__file",text:i.name,color:"solid-dimmed-primary"},null,8,["text"]))),128)):v("",!0)])]),n("input",{ref:"input",type:"file",class:"lv-file-input__real",multiple:t.multiple,onChange:a[0]||(a[0]=(...i)=>l.onFileChange&&l.onFileChange(...i))},null,40,C)])}const S=d(g,[["render",b]]);export{S as default};