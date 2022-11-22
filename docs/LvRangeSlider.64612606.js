import{_ as P,c as n,a as r,h as m,j as d,l,i as y,F as f,b as h,t as c,n as M,g as p,o as s}from"./index.c47e6032.js";import{u}from"./index.7b47c788.js";const T={props:{min:{type:Number,default:0},max:{type:Number,default:100},modelValue:{type:Object,default:()=>({})},decimals:{type:Number,default:0,validator(e){return e>=0}},step:{type:Number,default:1,validator(e){return e>0}},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showRange:{type:Boolean,default:!1},showPopover:{type:Boolean,default:!0}},emits:["update:modelValue"],data(){return{trackX:0,trackWidth:0,primaryPosition:0,secondaryPosition:0,draggingPrimary:!1,draggingSecondary:!1}},computed:{classNames(){return{"lv-range-slider--invalid":this.invalid,"lv-range-slider--disabled":this.disabled,"lv-range-slider--loading":this.loading}},primaryValue(){const e=(this.max-this.min)/100*this.primaryPosition+this.min;return parseFloat(e.toFixed(this.decimals))},secondaryValue(){const e=(this.max-this.min)/100*this.secondaryPosition+this.min;return parseFloat(e.toFixed(this.decimals))},indicatorLeft(){return this.primaryPosition<=this.secondaryPosition?this.primaryPosition:this.secondaryPosition},indicatorRight(){return this.primaryPosition>=this.secondaryPosition?this.primaryPosition:this.secondaryPosition},stepPercentage(){return 100/(this.max-this.min)*this.step},styleObjectIndicator(){return{left:`${this.indicatorLeft}%`,right:`${100-this.indicatorRight}%`}},styleObjectThumbPrimary(){return{left:`${this.primaryPosition}%`}},styleObjectThumbSecondary(){return{left:`${this.secondaryPosition}%`}}},watch:{modelValue:{handler(e){this.primaryPosition=e.from?this.getPositionFromValue(e.from):0,this.secondaryPosition=e.to?this.getPositionFromValue(e.to):100},deep:!0,immediate:!0}},mounted(){this.cacheDimensions()},created(){this.onPrimaryMouseMoveThrottled=u(this.onPrimaryMouseMove,24),this.onSecondaryMouseMoveThrottled=u(this.onSecondaryMouseMove,24),this.onPrimaryTouchMoveThrottled=u(this.onPrimaryTouchMove,24),this.onSecondaryTouchMoveThrottled=u(this.onSecondaryTouchMove,24)},methods:{onPrimaryMouseDown(e){this.draggingPrimary=!0,e.preventDefault(),!(this.disabled||this.loading)&&(this.cacheDimensions(),document.addEventListener("mousemove",this.onPrimaryMouseMoveThrottled,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onPrimaryMouseMove(e){this.primaryPosition=this.getRelativePosition(e.pageX)},onSecondaryMouseDown(e){this.draggingSecondary=!0,e.preventDefault(),!(this.disabled||this.loading)&&(this.cacheDimensions(),document.addEventListener("mousemove",this.onSecondaryMouseMoveThrottled,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onSecondaryMouseMove(e){this.secondaryPosition=this.getRelativePosition(e.pageX)},onMouseUp(){this.draggingPrimary=!1,this.draggingSecondary=!1,document.removeEventListener("mousemove",this.onPrimaryMouseMoveThrottled,!1),document.removeEventListener("mousemove",this.onSecondaryMouseMoveThrottled,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.emitInputEvent()},onPrimaryTouchStart(){this.disabled||(this.cacheDimensions(),document.addEventListener("touchmove",this.onPrimaryTouchMoveThrottled),document.addEventListener("touchend",this.onTouchEnd))},onPrimaryTouchMove(e){e.preventDefault(),this.primaryPosition=this.getRelativePosition(e.touches[0].clientX)},onSecondaryTouchStart(){this.disabled||(this.cacheDimensions(),document.addEventListener("touchmove",this.onSecondaryTouchMoveThrottled),document.addEventListener("touchend",this.onTouchEnd))},onSecondaryTouchMove(e){e.preventDefault(),this.secondaryPosition=this.getRelativePosition(e.touches[0].clientX)},onTouchEnd(){document.removeEventListener("touchmove",this.onPrimaryTouchMoveThrottled),document.removeEventListener("touchmove",this.onSecondaryTouchMoveThrottled),document.removeEventListener("touchend",this.onTouchEnd),this.emitInputEvent()},emitInputEvent(){const e=this.primaryValue<=this.secondaryValue?this.primaryValue:this.secondaryValue,i=this.primaryValue<=this.secondaryValue?this.secondaryValue:this.primaryValue;this.$emit("update:modelValue",{from:e,to:i})},cacheDimensions(){this.trackWidth=this.$refs.track.offsetWidth,this.trackX=this.$refs.track.getBoundingClientRect().left},getPositionFromValue(e){return 100/(this.max-this.min)*e-this.min/(this.max-this.min)*100},getRelativePosition(e){let o=(e-this.trackX)/this.trackWidth*100;return this.step&&(o=Math.round(o/this.stepPercentage)*this.stepPercentage),o=Math.min(Math.max(o,0),100),o}}},S={class:"lv-range-slider__track"},b={ref:"track",class:"lv-range-slider__track-boundaries"},V=r("div",{class:"lv-range-slider__thumb-hit-area"},null,-1),E=r("div",{class:"lv-range-slider__thumb-hit-area"},null,-1),k={key:0,class:"lv-range-slider__range"},w={class:"lv-range-slider__range-value lv-range-slider__range-value--primary"},L={class:"lv-range-slider__range-value lv-range-slider__range-value--secondary"};function x(e,i,o,D,v,t){const g=p("lv-popover"),_=p("lv-icon");return s(),n("div",{class:M(["lv-range-slider",t.classNames])},[r("div",S,[r("div",b,[r("div",{class:"lv-range-slider__indicator",style:m(t.styleObjectIndicator)},null,4),r("div",{ref:"primary",class:"lv-range-slider__thumb lv-range-slider__thumb--primary",style:m(t.styleObjectThumbPrimary),onMousedown:i[0]||(i[0]=(...a)=>t.onPrimaryMouseDown&&t.onPrimaryMouseDown(...a)),onTouchstart:i[1]||(i[1]=(...a)=>t.onPrimaryTouchStart&&t.onPrimaryTouchStart(...a))},[o.showPopover?(s(),d(g,{key:0,show:v.draggingPrimary,placement:"top",trigger:"manual",padding:".25rem"},{reference:l(()=>[V]),content:l(()=>[h(c(t.primaryValue),1)]),_:1},8,["show"])):y("",!0)],36),r("div",{ref:"secondary",class:"lv-range-slider__thumb lv-range-slider__thumb--secondary",style:m(t.styleObjectThumbSecondary),onMousedown:i[2]||(i[2]=(...a)=>t.onSecondaryMouseDown&&t.onSecondaryMouseDown(...a)),onTouchstart:i[3]||(i[3]=(...a)=>t.onSecondaryTouchStart&&t.onSecondaryTouchStart(...a))},[o.showPopover?(s(),d(g,{key:0,show:v.draggingSecondary,placement:"top",trigger:"manual",padding:".25rem"},{reference:l(()=>[E]),content:l(()=>[h(c(t.secondaryValue),1)]),_:1},8,["show"])):y("",!0)],36)],512)]),o.showRange?(s(),n("div",k,[r("div",w,[o.loading?(s(),d(_,{key:0,class:"lv-range-slider__loader",size:12,name:"loader-2"})):(s(),n(f,{key:1},[h(c(t.primaryValue.toFixed(o.decimals)),1)],64))]),r("div",L,[o.loading?(s(),d(_,{key:0,class:"lv-range-slider__loader",size:12,name:"loader-2"})):(s(),n(f,{key:1},[h(c(t.secondaryValue.toFixed(o.decimals)),1)],64))])])):y("",!0)],2)}const B=P(T,[["render",x]]);export{B as default};
