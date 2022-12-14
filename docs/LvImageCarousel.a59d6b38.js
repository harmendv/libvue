import we from"./LvImageCarouselItem.197b346e.js";import{_ as Ie,c as _e,a as Le,r as Me,o as Te,u as Be}from"./index.7cfd2803.js";function De(e,r,t,a,i){return a+(i-a)*((e-r)/(t-r))}function se(e){return typeof e=="number"}function ue(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ce(e){return Array.isArray(e)}function ve(e){return ue(e)||Ce(e)}function T(e){return Math.abs(e)}function ce(e){return e?e/T(e):0}function ne(e,r){return T(e-r)}function Pe(e,r){if(e===0||r===0||T(e)<=T(r))return 0;var t=ne(T(e),T(r));return T(t/e)}function Oe(e){var r=Math.pow(10,e);return function(t){return Math.round(t*r)/r}}function te(e){return X(e).map(Number)}function K(e){return e[ie(e)]}function ie(e){return Math.max(0,e.length-1)}function X(e){return Object.keys(e)}function ge(e,r){return[e,r].reduce(function(t,a){return X(a).forEach(function(i){var u=t[i],o=a[i],f=ue(u)&&ue(o);t[i]=f?ge(u,o):o}),t},{})}function he(e,r){var t=X(e),a=X(r);return t.length!==a.length?!1:t.every(function(i){var u=e[i],o=r[i];return typeof u=="function"?"".concat(u)==="".concat(o):!ve(u)||!ve(o)?u===o:he(u,o)})}function Ne(e,r){var t={start:a,center:i,end:u};function a(){return 0}function i(c){return u(c)/2}function u(c){return r-c}function o(){return r*Number(e)}function f(c){return se(e)?o():t[e](c)}var v={measure:f};return v}function ke(e){var r=0;function t(o,f){return function(){o===!!r&&f()}}function a(){r=window.requestAnimationFrame(e)}function i(){window.cancelAnimationFrame(r),r=0}var u={proceed:t(!0,a),start:t(!1,a),stop:t(!0,i)};return u}function Ve(e,r){var t=e==="y"?"y":"x",a=e==="y"?"x":"y",i=f(),u=v();function o(s){var n=s.width,d=s.height;return t==="x"?n:d}function f(){return t==="y"?"top":r==="rtl"?"right":"left"}function v(){return t==="y"?"bottom":r==="rtl"?"left":"right"}var c={scroll:t,cross:a,startEdge:i,endEdge:u,measureSize:o};return c}function re(e,r){var t=T(e-r);function a(c){return c<e}function i(c){return c>r}function u(c){return a(c)||i(c)}function o(c){return u(c)?a(c)?e:r:c}function f(c){return t?c-t*Math.ceil((c-r)/t):c}var v={length:t,max:r,min:e,constrain:o,reachedAny:u,reachedMax:i,reachedMin:a,removeOffset:f};return v}function Se(e,r,t){var a=re(0,e),i=a.min,u=a.constrain,o=e+1,f=v(r);function v(p){return t?T((o+p)%o):u(p)}function c(){return f}function s(p){return f=v(p),m}function n(p){return s(c()+p)}function d(){return Se(e,c(),t)}var m={add:n,clone:d,get:c,set:s,min:i,max:e};return m}function ze(e){var r=e==="rtl"?-1:1;function t(i){return i*r}var a={apply:t};return a}function ae(){var e=[];function r(i,u,o,f){return f===void 0&&(f=!1),i.addEventListener(u,o,f),e.push(function(){return i.removeEventListener(u,o,f)}),a}function t(){return e=e.filter(function(i){return i()}),a}var a={add:r,removeAll:t};return a}function W(e){var r=e;function t(){return r}function a(n){return r=c(n),s}function i(n){return r+=c(n),s}function u(n){return r-=c(n),s}function o(n){return r*=n,s}function f(n){return r/=n,s}function v(){return r!==0&&f(r),s}function c(n){return se(n)?n:n.get()}var s={add:i,divide:f,get:t,multiply:o,normalize:v,set:a,subtract:u};return s}function Fe(e,r,t,a,i,u,o,f,v,c,s,n,d,m,p,b){var h=e.cross,g=["INPUT","SELECT","TEXTAREA"],S=W(0),y=ae(),E=ae(),x=d.measure(20),A={mouse:300,touch:400},w={mouse:500,touch:600},L=p?5:16,B=1,N=0,j=0,z=!1,$=!1,O=!1,D=!1;function F(){var l=t;y.add(l,"touchmove",function(){}).add(l,"touchend",function(){}).add(l,"touchstart",Q).add(l,"mousedown",Q).add(l,"touchcancel",G).add(l,"contextmenu",G).add(l,"click",ee)}function J(){var l=D?document:t;E.add(l,"touchmove",Z).add(l,"touchend",G).add(l,"mousemove",Z).add(l,"mouseup",G)}function H(){y.removeAll(),E.removeAll()}function C(l){var _=l.nodeName||"";return g.indexOf(_)>-1}function U(){var l=p?w:A,_=D?"mouse":"touch";return l[_]}function Y(l,_){var P=s.clone().add(ce(l)*-1),V=P.get()===s.min||P.get()===s.max,M=c.byDistance(l,!p).distance;return p||T(l)<x?M:!m&&V?M*.4:b&&_?M*.5:c.byIndex(P.get(),0).distance}function Q(l){if(D=l.type==="mousedown",!(D&&l.button!==0)){var _=ne(a.get(),u.get())>=2,P=D||!_,V=!C(l.target),M=_||D&&V;z=!0,i.pointerDown(l),S.set(a),a.set(u),v.useBaseMass().useSpeed(80),J(),N=i.readPoint(l),j=i.readPoint(l,h),n.emit("pointerDown"),P&&(O=!1),M&&l.preventDefault()}}function Z(l){if(!$&&!D){if(!l.cancelable)return G(l);var _=i.readPoint(l),P=i.readPoint(l,h),V=ne(_,N),M=ne(P,j);if($=V>M,!$&&!O)return G(l)}var q=i.pointerMove(l);!O&&q&&(O=!0),o.start(),a.add(r.apply(q)),l.preventDefault()}function G(l){var _=c.byDistance(0,!1),P=_.index!==s.get(),V=i.pointerUp(l)*U(),M=Y(r.apply(V),P),q=Pe(V,M),ye=ne(a.get(),S.get())>=.5,de=P&&q>.75,Ee=T(V)<x,be=de?10:L,Ae=de?B+2.5*q:B;ye&&!D&&(O=!0),$=!1,z=!1,E.removeAll(),v.useSpeed(Ee?9:be).useMass(Ae),f.distance(M,!p),D=!1,n.emit("pointerUp")}function ee(l){O&&l.preventDefault()}function R(){return!O}function k(){return z}var I={addActivationEvents:F,clickAllowed:R,pointerDown:k,removeAllEvents:H};return I}function He(e){var r=170,t,a;function i(n){return typeof TouchEvent<"u"&&n instanceof TouchEvent}function u(n){return n.timeStamp}function o(n,d){var m=d||e.scroll,p="client".concat(m==="x"?"X":"Y");return(i(n)?n.touches[0]:n)[p]}function f(n){return t=n,a=n,o(n)}function v(n){var d=o(n)-o(a),m=u(n)-u(t)>r;return a=n,m&&(t=n),d}function c(n){if(!t||!a)return 0;var d=o(a)-o(t),m=u(n)-u(t),p=u(n)-u(a)>r,b=d/m,h=m&&!p&&T(b)>.1;return h?b:0}var s={isTouchEvent:i,pointerDown:f,pointerMove:v,pointerUp:c,readPoint:o};return s}function Ge(e){function r(a){return e*(a/100)}var t={measure:r};return t}function Re(e,r,t){var a=Oe(2),i=W(0),u=W(0),o=W(0),f=0,v=r,c=t;function s(){i.add(u),e.add(i),u.multiply(0)}function n(E){E.divide(c),u.add(E)}function d(E){o.set(E).subtract(e);var x=De(o.get(),0,100,0,v);return f=ce(o.get()),o.normalize().multiply(x).subtract(i),n(o),y}function m(E){var x=E.get()-e.get(),A=!a(x);return A&&e.set(E),A}function p(){return f}function b(){return g(r)}function h(){return S(t)}function g(E){return v=E,y}function S(E){return c=E,y}var y={direction:p,seek:d,settle:m,update:s,useBaseMass:h,useBaseSpeed:b,useMass:S,useSpeed:g};return y}function je(e,r,t,a,i){var u=i.measure(10),o=i.measure(50),f=.85,v=!1;function c(){return!(v||!e.reachedAny(t.get())||!e.reachedAny(r.get()))}function s(m){if(!!c()){var p=e.reachedMin(r.get())?"min":"max",b=T(e[p]-r.get()),h=t.get()-r.get(),g=Math.min(b/o,f);t.subtract(h*g),!m&&T(h)<u&&(t.set(e.constrain(t.get())),a.useSpeed(10).useMass(3))}}function n(m){v=!m}var d={constrain:s,toggleActive:n};return d}function $e(e,r,t,a){var i=re(-r+e,t[0]),u=t.map(i.constrain),o=v();function f(){var s=u[0],n=K(u),d=u.lastIndexOf(s),m=u.indexOf(n)+1;return re(d,m)}function v(){if(r<=e)return[i.max];if(a==="keepSnaps")return u;var s=f(),n=s.min,d=s.max;return u.slice(n,d)}var c={snapsContained:o};return c}function qe(e,r,t){var a=i();function i(){var o=r[0],f=K(r),v=t?o-e:f,c=o;return re(v,c)}var u={limit:a};return u}function Ue(e,r,t,a){var i=.1,u=r.min+i,o=r.max+i,f=re(u,o),v=f.reachedMin,c=f.reachedMax;function s(m){return m===1?c(t.get()):m===-1?v(t.get()):!1}function n(m){if(!!s(m)){var p=e*(m*-1);a.forEach(function(b){return b.add(p)})}}var d={loop:n};return d}function Ke(e){var r=e.max,t=e.length;function a(u){var o=u-r;return o/-t}var i={get:a};return i}function We(e,r,t,a,i,u,o){var f=e.startEdge,v=e.endEdge,c=u.groupSlides,s=m().map(r.measure),n=p(),d=b();function m(){return c(a).map(function(g){return K(g)[v]-g[0][f]}).map(T)}function p(){return a.map(function(g){return t[f]-g[f]}).map(function(g){return-T(g)})}function b(){var g=0,S=K(n)-K(i);return c(n).map(function(y){return y[0]}).map(function(y,E,x){var A=!E,w=E===ie(x);return o&&A?g:o&&w?S:y+s[E]})}var h={snaps:n,snapsAligned:d};return h}function Je(e,r,t,a,i){var u=a.reachedAny,o=a.removeOffset,f=a.constrain;function v(p){return p.concat().sort(function(b,h){return T(b)-T(h)})[0]}function c(p){var b=e?o(p):f(p),h=r.map(function(S){return S-b}).map(function(S){return s(S,0)}).map(function(S,y){return{diff:S,index:y}}).sort(function(S,y){return T(S.diff)-T(y.diff)}),g=h[0].index;return{index:g,distance:b}}function s(p,b){var h=[p,p+t,p-t];if(!e)return h[0];if(!b)return v(h);var g=h.filter(function(S){return ce(S)===b});return v(g)}function n(p,b){var h=r[p]-i.get(),g=s(h,b);return{index:p,distance:g}}function d(p,b){var h=i.get()+p,g=c(h),S=g.index,y=g.distance,E=!e&&u(h);if(!b||E)return{index:S,distance:p};var x=r[S]-y,A=p+s(x,0);return{index:S,distance:A}}var m={byDistance:d,byIndex:n,shortcut:s};return m}function Xe(e,r,t,a,i,u){function o(s){var n=s.distance,d=s.index!==r.get();n&&(e.start(),i.add(n)),d&&(t.set(r.get()),r.set(s.index),u.emit("select"))}function f(s,n){var d=a.byDistance(s,n);o(d)}function v(s,n){var d=r.clone().set(s),m=a.byIndex(d.get(),n);o(m)}var c={distance:f,index:v};return c}function xe(e,r,t){var a=e.scroll==="x"?o:f,i=t.style,u=!1;function o(d){return"translate3d(".concat(d,"px,0px,0px)")}function f(d){return"translate3d(0px,".concat(d,"px,0px)")}function v(d){u||(i.transform=a(r.apply(d.get())))}function c(d){u=!d}function s(){u||(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var n={clear:s,to:v,toggleActive:c};return n}function Ye(e,r,t,a,i,u,o,f,v){var c=te(i),s=te(i).reverse(),n=b().concat(h());function d(x,A){return x.reduce(function(w,L){return w-i[L]},A)}function m(x,A){return x.reduce(function(w,L){var B=d(w,A);return B>0?w.concat([L]):w},[])}function p(x,A){var w=A==="start",L=w?-a:a,B=o.findSlideBounds([L]);return x.map(function(N){var j=w?0:-a,z=w?a:0,$=B.filter(function(C){return C.index===N})[0],O=$[w?"end":"start"],D=W(-1),F=W(-1),J=xe(e,r,v[N]),H=function(){return D.set(f.get()>O?j:z)};return{index:N,location:F,translate:J,target:H}})}function b(){var x=u[0]-1,A=m(s,x);return p(A,"end")}function h(){var x=t-u[0]-1,A=m(c,x);return p(A,"start")}function g(){return n.every(function(x){var A=x.index,w=c.filter(function(L){return L!==A});return d(w,t)<=.1})}function S(){n.forEach(function(x){var A=x.target,w=x.translate,L=x.location,B=A();B.get()!==L.get()&&(B.get()===0?w.clear():w.to(B),L.set(B))})}function y(){n.forEach(function(x){return x.translate.clear()})}var E={canLoop:g,clear:y,loop:S,loopPoints:n};return E}function Qe(e,r,t,a,i,u,o){var f=i.removeOffset,v=i.constrain,c=.5,s=u?[0,r,-r]:[0],n=m(s,o);function d(h){var g=h||0;return t.map(function(S){var y=re(c,S-c);return y.constrain(S*g)})}function m(h,g){var S=h||s,y=d(g);return S.reduce(function(E,x){var A=a.map(function(w,L){return{start:w-t[L]+y[L]+x,end:w+e-y[L]+x,index:L}});return E.concat(A)},[])}function p(h,g){var S=u?f(h):v(h),y=g||n;return y.reduce(function(E,x){var A=x.index,w=x.start,L=x.end,B=E.indexOf(A)!==-1,N=w<S&&L>S;return!B&&N?E.concat([A]):E},[])}var b={check:p,findSlideBounds:m};return b}function Ze(e,r,t,a,i){var u=e.measureSize,o=e.startEdge,f=e.endEdge,v=d(),c=m(),s=t.map(u),n=p();function d(){if(!i)return 0;var h=t[0];return T(r[o]-h[o])}function m(){if(!i)return 0;var h=window.getComputedStyle(K(a));return parseFloat(h.getPropertyValue("margin-".concat(f)))}function p(){return t.map(function(h,g,S){var y=!g,E=g===ie(S);return y?s[g]+v:E?s[g]+c:S[g+1][o]-h[o]}).map(T)}var b={slideSizes:s,slideSizesWithGaps:n};return b}function er(e,r,t){var a=se(t);function i(v,c){return te(v).filter(function(s){return s%c===0}).map(function(s){return v.slice(s,s+c)})}function u(v){return te(v).reduce(function(c,s){var n=r.slice(K(c),s+1),d=n.reduce(function(m,p){return m+p},0);return!s||d>e?c.concat(s):c},[]).map(function(c,s,n){return v.slice(c,n[s+1])})}function o(v){return a?i(v,t):u(v)}var f={groupSlides:o};return f}function rr(e,r,t,a,i){var u=a.align,o=a.axis,f=a.direction,v=a.startIndex,c=a.inViewThreshold,s=a.loop,n=a.speed,d=a.dragFree,m=a.slidesToScroll,p=a.skipSnaps,b=a.containScroll,h=r.getBoundingClientRect(),g=t.map(function(q){return q.getBoundingClientRect()}),S=ze(f),y=Ve(o,f),E=y.measureSize(h),x=Ge(E),A=Ne(u,E),w=!s&&b!=="",L=s||b!=="",B=Ze(y,h,g,t,L),N=B.slideSizes,j=B.slideSizesWithGaps,z=er(E,j,m),$=We(y,A,h,g,j,z,w),O=$.snaps,D=$.snapsAligned,F=-K(O)+K(j),J=$e(E,F,D,b).snapsContained,H=w?J:D,C=qe(F,H,s).limit,U=Se(ie(H),v,s),Y=U.clone(),Q=te(t),Z=function(){s||M.scrollBounds.constrain(M.dragHandler.pointerDown()),M.scrollBody.seek(k).update();var q=M.scrollBody.settle(k);q&&!M.dragHandler.pointerDown()&&(M.animation.stop(),i.emit("settle")),q||i.emit("scroll"),s&&(M.scrollLooper.loop(M.scrollBody.direction()),M.slideLooper.loop()),M.translate.to(R),M.animation.proceed()},G=ke(Z),ee=H[U.get()],R=W(ee),k=W(ee),I=Re(R,n,1),l=Je(s,H,F,C,k),_=Xe(G,U,Y,l,k,i),P=Qe(E,F,N,O,C,s,c),V=Fe(y,S,e,k,He(y),R,G,_,I,l,U,i,x,s,d,p),M={containerRect:h,slideRects:g,animation:G,axis:y,direction:S,dragHandler:V,eventStore:ae(),percentOfView:x,index:U,indexPrevious:Y,limit:C,location:R,options:a,scrollBody:I,scrollBounds:je(C,R,k,I,x),scrollLooper:Ue(F,C,R,[R,k]),scrollProgress:Ke(C),scrollSnaps:H,scrollTarget:l,scrollTo:_,slideLooper:Ye(y,S,E,F,j,H,P,R,t),slidesToScroll:z,slidesInView:P,slideIndexes:Q,target:k,translate:xe(y,S,r)};return M}function nr(){var e={};function r(o){return e[o]||[]}function t(o){return r(o).forEach(function(f){return f(o)}),u}function a(o,f){return e[o]=r(o).concat([f]),u}function i(o,f){return e[o]=r(o).filter(function(v){return v!==f}),u}var u={emit:t,off:i,on:a};return u}var tr={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function fe(){function e(i,u){return ge(i,u||{})}function r(i,u){var o=JSON.stringify(X(i.breakpoints||{})),f=JSON.stringify(X(u.breakpoints||{}));return o!==f?!1:he(i,u)}function t(i){var u=i.breakpoints||{},o=X(u).filter(function(f){return window.matchMedia(f).matches}).map(function(f){return u[f]}).reduce(function(f,v){return e(f,v)},{});return e(i,o)}var a={merge:e,areEqual:r,atMedia:t};return a}function ar(){var e=fe(),r=e.atMedia,t=e.areEqual,a=[],i=[];function u(){return i.some(function(s){return s()})}function o(s){var n=r(s.options);return function(){return!t(n,r(s.options))}}function f(s,n){return i=s.map(o),a=s.filter(function(d){return r(d.options).active}),a.forEach(function(d){return d.init(n)}),s.reduce(function(d,m){var p;return Object.assign(d,(p={},p[m.name]=m,p))},{})}function v(){a=a.filter(function(s){return s.destroy()})}var c={init:f,destroy:v,haveChanged:u};return c}function oe(e,r,t){var a=ae(),i=fe(),u=ar(),o=nr(),f=o.on,v=o.off,c=A,s=!1,n,d=i.merge(tr,oe.globalOptions),m=i.merge(d),p=[],b,h=0,g,S,y;function E(){var I="container"in e&&e.container,l="slides"in e&&e.slides;g="root"in e?e.root:e,S=I||g.children[0],y=l||[].slice.call(S.children)}function x(I,l){if(!s){if(E(),d=i.merge(d,I),m=i.atMedia(d),n=rr(g,S,y,m,o),h=n.axis.measureSize(g.getBoundingClientRect()),!m.active)return w();if(n.translate.to(n.location),p=l||p,b=u.init(p,k),m.loop){if(!n.slideLooper.canLoop())return w(),x({loop:!1},l);n.slideLooper.loop()}m.draggable&&S.offsetParent&&y.length&&n.dragHandler.addActivationEvents()}}function A(I,l){var _=C();w(),x(i.merge({startIndex:_},I),l),o.emit("reInit")}function w(){n.dragHandler.removeAllEvents(),n.animation.stop(),n.eventStore.removeAll(),n.translate.clear(),n.slideLooper.clear(),u.destroy()}function L(){s||(s=!0,a.removeAll(),w(),o.emit("destroy"))}function B(){var I=i.atMedia(d),l=!i.areEqual(I,m),_=n.axis.measureSize(g.getBoundingClientRect()),P=h!==_,V=u.haveChanged();(P||l||V)&&A(),o.emit("resize")}function N(I){var l=n[I?"target":"location"].get(),_=m.loop?"removeOffset":"constrain";return n.slidesInView.check(n.limit[_](l))}function j(I){var l=N(I);return n.slideIndexes.filter(function(_){return l.indexOf(_)===-1})}function z(I,l,_){!m.active||s||(n.scrollBody.useBaseMass().useSpeed(l?100:m.speed),n.scrollTo.index(I,_||0))}function $(I){var l=n.index.clone().add(1);z(l.get(),I===!0,-1)}function O(I){var l=n.index.clone().add(-1);z(l.get(),I===!0,1)}function D(){var I=n.index.clone().add(1);return I.get()!==C()}function F(){var I=n.index.clone().add(-1);return I.get()!==C()}function J(){return n.scrollSnaps.map(n.scrollProgress.get)}function H(){return n.scrollProgress.get(n.location.get())}function C(){return n.index.get()}function U(){return n.indexPrevious.get()}function Y(){return n.dragHandler.clickAllowed()}function Q(){return b}function Z(){return n}function G(){return g}function ee(){return S}function R(){return y}var k={canScrollNext:D,canScrollPrev:F,clickAllowed:Y,containerNode:ee,internalEngine:Z,destroy:L,off:v,on:f,plugins:Q,previousScrollSnap:U,reInit:c,rootNode:G,scrollNext:$,scrollPrev:O,scrollProgress:H,scrollSnapList:J,scrollTo:z,selectedScrollSnap:C,slideNodes:R,slidesInView:N,slidesNotInView:j};return x(r,t),a.add(window,"resize",B),setTimeout(function(){return o.emit("init")},0),k}oe.globalOptions=void 0;oe.optionsHandler=fe;const le={components:{LvImageCarouselItem:we},props:{loop:{type:Boolean,default:!0},axis:{type:String,default:"x",validator:e=>["x","y"].includes(e)},gap:{type:String,default:".25rem"}},data(){return{instance:null}},watch:{"$slots.default":{handler(e){e().length>0&&this.createInstance()},immediate:!0}},methods:{createInstance(){if(!this.instance){let e=0;const r=setInterval(()=>{this.$refs.carousel?(this.instance=oe(this.$refs.carousel,{loop:this.loop,axis:this.axis}),clearInterval(r)):e<30?e+=1:clearInterval(r)},100)}}}},pe=()=>{Be(e=>({c7fcef28:e.gap}))},me=le.setup;le.setup=me?(e,r)=>(pe(),me(e,r)):pe;const ir=le,or={class:"lv-image-carousel",ref:"carousel"},ur={class:"lv-image-carousel__container"};function sr(e,r,t,a,i,u){return Te(),_e("div",or,[Le("div",ur,[Me(e.$slots,"default")])],512)}const lr=Ie(ir,[["render",sr]]);export{lr as default};
