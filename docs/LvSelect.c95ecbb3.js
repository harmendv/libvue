import{o as y}from"./index.c99a790d.js";import{_ as k,O as c,o as l,c as t,i as v,y as d,l as u,P as p,v as r,F as V,G as w,x as _,p as b,I as x,j as g,k as O,J as C,N as S,z as B,s as N,q as f,C as z}from"./index.24228458.js";import{p as j}from"./propSizeMixin.5f872152.js";import"./index.dad334ba.js";const T={provide(){return{value:c(()=>this.value),multiple:c(()=>this.multiple),searchable:c(()=>this.searchable),searchValue:c(()=>this.search),visibleOptions:c(()=>this.visibleOptions)}},mixins:[j()],props:{value:{type:[Object,Array],default:null},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:"Choose an option"},searchable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data(){return{dropdownVisible:!1,focusedOptionIndex:null,search:null,visibleOptions:null}},computed:{hasValue(){return!!(this.multiple&&this.value.length>0||!this.multiple&&this.value)},classObject(){return{[`lv-select--size-${this.size}`]:!0,"lv-select--disabled":!!this.disabled||!!this.loading,"lv-select--loading":!!this.loading}}},watch:{search(a){!this.dropdownVisible&&a&&(this.dropdownVisible=!0)},value(a){!this.multiple&&this.dropdownVisible&&(this.dropdownVisible=!1),a&&this.search&&(this.search=null)}},mounted(){this.visibleOptions=this.getVisibleOptions(),y(this.$refs.select,()=>{this.dropdownVisible=!1})},updated(){this.$nextTick(()=>{this.visibleOptions=this.getVisibleOptions()})},methods:{getVisibleOptions(){return this.$el.querySelectorAll(".lv-select-option").length},onClickSelection(){this.dropdownVisible=!this.dropdownVisible}}},L=["aria-expanded"],M={key:0,class:"lv-select__value"},q=["placeholder"],A={key:2,class:"lv-select__placeholder"},D={key:1,class:"lv-select__value"},F=["placeholder"],I={key:2,class:"lv-select__placeholder"},K={class:"lv-select__dropdown",role:"listbox"},U={key:0,class:"lv-select__no-options"};function E(a,i,e,G,o,n){const h=N("lv-icon");return l(),t("div",{ref:"select",class:B(["lv-select",n.classObject]),role:"combobox","aria-expanded":o.dropdownVisible,"aria-haspopup":"listbox"},[v("div",{ref:"combobox",class:"lv-select__input",tabindex:"0",onClick:i[2]||(i[2]=(...s)=>n.onClickSelection&&n.onClickSelection(...s)),onKeydown:i[3]||(i[3]=x(z((...s)=>n.onClickSelection&&n.onClickSelection(...s),["prevent"]),["enter","space"]))},[e.multiple?e.multiple?(l(),t("div",D,[n.hasValue?(l(!0),t(V,{key:0},w(e.value,(s,m)=>(l(),t("span",{key:m,class:"lv-select__value-item"},[d(a.$slots,"value",{values:e.value,value:s},()=>[f(r(s.label),1)])]))),128)):e.searchable?u((l(),t("input",{key:1,"onUpdate:modelValue":i[1]||(i[1]=s=>o.search=s),class:"lv-select__search",type:"text",placeholder:e.placeholder},null,8,F)),[[p,o.search]]):(l(),t("div",I,r(e.placeholder),1))])):_("",!0):(l(),t("div",M,[n.hasValue?d(a.$slots,"value",{key:0,value:e.value},()=>[f(r(e.value.label),1)]):e.searchable?u((l(),t("input",{key:1,"onUpdate:modelValue":i[0]||(i[0]=s=>o.search=s),class:"lv-select__search",type:"text",placeholder:e.placeholder},null,8,q)),[[p,o.search]]):(l(),t("div",A,r(e.placeholder),1))])),e.loading?(l(),b(h,{key:2,class:"lv-select__loading",name:"loader-2"})):(l(),b(h,{key:3,class:"lv-select__icon",name:"chevron-down"}))],544),g(S,{name:"dropdown"},{default:O(()=>[u(v("div",K,[d(a.$slots,"default"),o.visibleOptions?_("",!0):(l(),t("div",U,"No options found"))],512),[[C,o.dropdownVisible]])]),_:3})],10,L)}const R=k(T,[["render",E]]);export{R as default};
