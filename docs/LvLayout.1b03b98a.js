import{_ as e,c as a,a as t,r as s,i,o as r,u as d}from"./index.7cfd2803.js";const l={props:{mainMaxWidth:{type:String,default:"700px"},sidebarWidth:{type:String,default:"auto"}},data:()=>({headerHeight:null}),mounted(){this.createHeaderResizeObserver()},updated(){this.getHeaderHeight()},methods:{createHeaderResizeObserver(){new ResizeObserver(this.getHeaderHeight).observe(this.$el)},getHeaderHeight(){var e;const a=null==(e=this.$el)?void 0:e.querySelector(".lv-layout__header");this.headerHeight=a?window.getComputedStyle(a).height:"0px"}}},o=()=>{d((e=>({ebd2dabe:e.headerHeight,"2f64fc57":e.sidebarWidth,"4a9defb0":e.mainMaxWidth})))},n=l.setup;l.setup=n?(e,a)=>(o(),n(e,a)):o;const h={class:"lv-layout"},u={key:0,role:"banner",class:"lv-layout__header"},c={class:"lv-layout__header-container"},v={class:"lv-layout__container"},_={key:0,class:"lv-layout__sidebar"},y={class:"lv-layout__sidebar-container"},b={key:1,role:"main",class:"lv-layout__main"},g={class:"lv-layout__main-container"};const m=e(l,[["render",function(e,d,l,o,n,m){return r(),a("div",h,[e.$slots.header?(r(),a("header",u,[t("div",c,[s(e.$slots,"header")])])):i("",!0),t("div",v,[e.$slots.sidebar?(r(),a("div",_,[t("div",y,[s(e.$slots,"sidebar")])])):i("",!0),e.$slots.main?(r(),a("main",b,[t("div",g,[s(e.$slots,"main")])])):i("",!0)])])}]]);export{m as default};
