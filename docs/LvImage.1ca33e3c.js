import{_ as l,c as i,a as u,t as d,i as _,n as p,o as s,u as g}from"./index.7cfd2803.js";const a={props:{src:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"auto"},caption:{type:String,default:null},captionDistance:{type:String,default:".5rem"},captionAlign:{type:String,default:"center",validator:e=>["left","center","right"].includes(e)},objectFit:{type:String,default:"inherit"},objectPosition:{type:String,default:"center"},rounded:{type:Boolean,default:!1}},computed:{classObject(){return{"lv-image--rounded":!!this.rounded}}}},c=()=>{g(e=>({"0499e80a":e.width,c2410cdc:e.height,"3f76f007":e.objectFit,"3c69821a":e.objectPosition,"21c2b820":e.captionDistance,d9860e2c:e.captionAlign}))},o=a.setup;a.setup=o?(e,n)=>(c(),o(e,n)):c;const f=a,m=["src"],y={key:0,class:"lv-image__caption"};function h(e,n,t,S,v,r){return s(),i("figure",{class:p(["lv-image",r.classObject])},[u("img",{class:"lv-image__image",src:t.src},null,8,m),t.caption?(s(),i("figcaption",y,d(t.caption),1)):_("",!0)],2)}const j=l(f,[["render",h]]);export{j as default};
