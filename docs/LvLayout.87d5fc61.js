import{_ as c,o as s,c as a,i as o,y as r,x as i,z as u,A as h}from"./index.608cace3.js";const d={props:{debug:{type:Boolean,default:!1},mainMaxWidth:{type:String,default:"700px"},sidebarWidth:{type:String,default:"auto"}},data(){return{headerHeight:null}},computed:{classObject(){return{["lv-layout--debug"]:!!this.debug}}},mounted(){this.createHeaderResizeObserver()},updated(){this.getHeaderHeight()},methods:{createHeaderResizeObserver(){new ResizeObserver(this.getHeaderHeight).observe(this.$el)},getHeaderHeight(){var t;const e=(t=this.$el)==null?void 0:t.querySelector(".lv-layout__header");e?this.headerHeight=window.getComputedStyle(e).height:this.headerHeight="0px"}}},l=()=>{h(e=>({"0e7736e9":e.headerHeight,"9874bec2":e.sidebarWidth,"5f11ac70":e.mainMaxWidth}))},n=d.setup;d.setup=n?(e,t)=>(l(),n(e,t)):l;const v=d,y={key:0,role:"banner",class:"lv-layout__header"},p={class:"lv-layout__header-container"},m={class:"lv-layout__container"},g={key:0,class:"lv-layout__sidebar"},b={class:"lv-layout__sidebar-container"},f={key:1,role:"main",class:"lv-layout__main"},H={class:"lv-layout__main-container"};function $(e,t,S,k,z,_){return s(),a("div",{class:u(["lv-layout",_.classObject])},[e.$slots.header?(s(),a("header",y,[o("div",p,[r(e.$slots,"header")])])):i("",!0),o("div",m,[e.$slots.sidebar?(s(),a("div",g,[o("div",b,[r(e.$slots,"sidebar")])])):i("",!0),e.$slots.main?(s(),a("main",f,[o("div",H,[r(e.$slots,"main")])])):i("",!0)])],2)}const O=c(v,[["render",$]]);export{O as default};
