import{_ as a,o as i,c as o,y as u,z as c,A as p}from"./index.608cace3.js";const e={props:{direction:{type:String,default:"row",validator:t=>["row","column"].includes(t)},justifyContent:{type:String,default:"start",validator(t){return["start","center","end"].includes(t)}},alignItems:{type:String,default:null,validator(t){return["start","center","end"].includes(t)}},gap:{type:[String,Number],default:"10px"},fill:{type:Boolean,default:!1}},computed:{classObject(){return{[`lv-group--justify-content-${this.justifyContent}`]:!!this.justifyContent,[`lv-group--align-items-${this.alignItems}`]:!!this.alignItems,[`lv-group--direction-${this.direction}`]:!!this.direction,"lv-group--fill":this.fill}}}},n=()=>{p(t=>({"206d4b78":t.gap}))},r=e.setup;e.setup=r?(t,s)=>(n(),r(t,s)):n;const d=e;function _(t,s,f,g,v,l){return i(),o("div",{class:c(["lv-group",l.classObject])},[u(t.$slots,"default")],2)}const y=a(d,[["render",_]]);export{y as default};
