import{_ as A,o as e,c as t,i as y,F as r,G as d,x as f,j as T,q as b,v as h,z as v,s as j,C,y as k}from"./index.a2db1067.js";function p(l,s=2,o="floor"){const u=Number.parseInt(`1${new Array(s).fill(0).join().replace(",","")}`,10);return(Math[o](l*u)/u).toFixed(s)}const O={props:{rows:{type:Array,default:()=>[]},columns:{type:Object,default:()=>({})},footerRows:{type:Array,default:()=>[]},footerColumns:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},rowHoverEffect:{type:Boolean,default:!0},hideHead:{type:Boolean,default:!1},hideRowLines:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},noDataText:{type:String,default:"Geen data beschikbaar"},groupRowsBy:{type:String,default:null},horizontalScroll:{type:Boolean,default:!0},rowAction:{type:Function,default:null}},computed:{parsedRows(){const l=[];return this.rows.forEach(s=>{const o={};Object.keys(this.columns).forEach(u=>{typeof s[u]<"u"?o[u]=s[u]:o[u]=null}),this.groupRowsBy&&s[this.groupRowsBy]&&(o[this.groupRowsBy]=s[this.groupRowsBy]),l.push(o)}),l},groupedParsedRows(){if(this.groupRowsBy){const l={};return this.parsedRows.forEach(s=>{l[s[this.groupRowsBy]]||(l[s[this.groupRowsBy]]=[]),l[s[this.groupRowsBy]].push(s)}),l}return!1},hasRows(){return this.rows.length>0},visibleColumnCount(){return Object.keys(this.columns).length},showFoot(){let l=!1;return Object.entries(this.columns).forEach(([,s])=>{(s.totals||s.averages)&&(l=!0)}),l},showTotalsRow(){let l=!1;return Object.entries(this.columns).forEach(([,s])=>{s.totals&&(l=!0)}),l},showAverageRow(){let l=!1;return Object.entries(this.columns).forEach(([,s])=>{s.averages&&(l=!0)}),l},classObject(){return{"lv-table--condensed":!!this.condensed,"lv-table--hide-row-lines":!!this.hideRowLines,"lv-table--loading":!!this.loading,"lv-table--horizontal-scroll":!!this.horizontalScroll,"lv-table--row-hover-effect":!!this.rowHoverEffect,"lv-table--has-row-action":typeof this.rowAction=="function"}}},methods:{getTotal(l,s){let o=0;return this.rows.forEach(u=>{o+=Number.parseFloat(u[l],10)}),typeof s=="function"?s(o):p(o)},getAverage(l,s){const u=this.getTotal(l)/this.rows.length;return typeof s=="function"?s(u):p(u)},getCellModifiers(l){const s=[];return l.align&&l.align==="right"&&s.push("lv-table__cell--align-right"),l.align&&l.align==="center"&&s.push("lv-table__cell--align-center"),l.fitContent&&s.push("lv-table__cell--fit-content"),l.bold&&s.push("lv-table__cell--bold"),l.italic&&s.push("lv-table__cell--italic"),s},onClickRow(l){if(typeof this.rowAction=="function"){const s=JSON.parse(JSON.stringify(this.rows[l]));this.rowAction({row:s,index:l})}}}},m={class:"lv-table__table"},E={key:0,class:"lv-table__table-head"},M={class:"lv-table__row"},N=["colspan"],F=["onClick"],S={key:2,class:"lv-table__table-body"},z={key:0,class:"lv-table__row"},L={class:"lv-table__cell lv-table__cell--no-data"},H=["onClick"],V={key:3,class:"lv-table__table-foot"},G={key:0,class:"lv-table__row lv-table__row--totals"},J=b(" Total "),P={key:1,class:"lv-table__row lv-table__row--average"},q=b(" Average ");function Q(l,s,o,u,U,n){const B=j("lv-icon");return e(),t("div",{class:v(["lv-table",n.classObject]),role:"table"},[y("table",m,[o.hideHead?f("",!0):(e(),t("thead",E,[y("tr",M,[(e(!0),t(r,null,d(o.columns,(a,c)=>(e(),t("th",{key:c,class:v(["lv-table__cell",n.getCellModifiers(a)])},h(typeof a.title<"u"?a.title:c),3))),128))])])),o.groupRowsBy?(e(!0),t(r,{key:1},d(n.groupedParsedRows,(a,c,i)=>(e(),t("tbody",{key:i,class:"lv-table__table-body"},[(e(),t("tr",{key:i},[y("td",{colspan:n.visibleColumnCount,class:"lv-table__cell lv-table__cell--bold lv-table__cell--group-title"},h(c),9,N)])),(e(!0),t(r,null,d(a,(_,R)=>(e(),t("tr",{key:`${i}${R}`,class:"lv-table__row",onClick:C(w=>n.onClickRow(R),["stop"])},[(e(!0),t(r,null,d(_,(w,g)=>(e(),t(r,null,[typeof o.columns[g]<"u"?(e(),t("td",{key:`${i}${g}`,class:v(["lv-table__cell",n.getCellModifiers(o.columns[g])])},[k(l.$slots,g,{value:w,row:_},()=>[b(h(w),1)])],2)):f("",!0)],64))),256))],8,F))),128))]))),128)):(e(),t("tbody",S,[n.hasRows?f("",!0):(e(),t("tr",z,[y("td",L,[T(B,{name:"ban"}),b(" "+h(o.noDataText),1)])])),(e(!0),t(r,null,d(n.parsedRows,(a,c)=>(e(),t("tr",{key:c,class:"lv-table__row",onClick:C(i=>n.onClickRow(c),["stop"])},[(e(!0),t(r,null,d(a,(i,_)=>(e(),t(r,null,[typeof o.columns[_]<"u"?(e(),t("td",{key:_,class:v(["lv-table__cell",n.getCellModifiers(o.columns[_])])},[k(l.$slots,_,{value:i,row:a},()=>[b(h(i),1)])],2)):f("",!0)],64))),256))],8,H))),128))])),n.showFoot?(e(),t("tfoot",V,[n.showTotalsRow?(e(),t("tr",G,[(e(!0),t(r,null,d(o.columns,(a,c,i)=>(e(),t("td",{key:i,class:v(["lv-table__cell",n.getCellModifiers(a)])},[i===0?(e(),t(r,{key:0},[a.totals?(e(),t(r,{key:0},[b(h(n.getTotal(c,a.totals)),1)],64)):(e(),t(r,{key:1},[J],64))],64)):a.totals?(e(),t(r,{key:1},[b(h(n.getTotal(c,a.totals)),1)],64)):f("",!0)],2))),128))])):f("",!0),n.showAverageRow?(e(),t("tr",P,[(e(!0),t(r,null,d(o.columns,(a,c,i)=>(e(),t("td",{key:i,class:v(["lv-table__cell",n.getCellModifiers(a)])},[i===0?(e(),t(r,{key:0},[a.averages?(e(),t(r,{key:0},[b(h(n.getAverage(c,a.averages)),1)],64)):(e(),t(r,{key:1},[q],64))],64)):a.averages?(e(),t(r,{key:1},[b(h(n.getAverage(c,a.averages)),1)],64)):f("",!0)],2))),128))])):f("",!0),(e(!0),t(r,null,d(o.footerRows,(a,c)=>(e(),t("tr",{key:c,class:"lv-table__row"},[(e(!0),t(r,null,d(a,(i,_)=>(e(),t(r,null,[typeof o.columns[_]<"u"?(e(),t("td",{key:_,class:v(["lv-table__cell",n.getCellModifiers(o.columns[_])])},[k(l.$slots,_,{value:i,row:a},()=>[b(h(i),1)])],2)):f("",!0)],64))),256))]))),128))])):f("",!0)])],2)}const X=A(O,[["render",Q]]);export{X as default};
