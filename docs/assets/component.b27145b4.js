import{u as ae}from"./index.b2d65e4d.js";import{d as re,r as ne,M as ie,h as ue,E as oe}from"./index.a2db1067.js";/*!
* tabbable 6.0.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var W=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],k=W.join(","),Z=typeof Element>"u",T=Z?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,O=!Z&&Element.prototype.getRootNode?function(u){return u.getRootNode()}:function(u){return u.ownerDocument},z=function(e,t,a){var r=Array.prototype.slice.apply(e.querySelectorAll(k));return t&&T.call(e,k)&&r.unshift(e),r=r.filter(a),r},Q=function u(e,t,a){for(var r=[],n=Array.from(e);n.length;){var c=n.shift();if(c.tagName==="SLOT"){var b=c.assignedElements(),v=b.length?b:c.children,h=u(v,!0,a);a.flatten?r.push.apply(r,h):r.push({scope:c,candidates:h})}else{var S=T.call(c,k);S&&a.filter(c)&&(t||!e.includes(c))&&r.push(c);var g=c.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(c),w=!a.shadowRootFilter||a.shadowRootFilter(c);if(g&&w){var F=u(g===!0?c.children:g.children,!0,a);a.flatten?r.push.apply(r,F):r.push({scope:c,candidates:F})}else n.unshift.apply(n,c.children)}}return r},X=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},ce=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},J=function(e){return e.tagName==="INPUT"},se=function(e){return J(e)&&e.type==="hidden"},le=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},fe=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},de=function(e){if(!e.name)return!0;var t=e.form||O(e),a=function(b){return t.querySelectorAll('input[type="radio"][name="'+b+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=a(window.CSS.escape(e.name));else try{r=a(e.name)}catch(c){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",c.message),!1}var n=fe(r,e.form);return!n||n===e},be=function(e){return J(e)&&e.type==="radio"},ve=function(e){return be(e)&&!de(e)},pe=function(e){for(var t,a=O(e).host,r=!!((t=a)!==null&&t!==void 0&&t.ownerDocument.contains(a)||e.ownerDocument.contains(e));!r&&a;){var n;a=O(a).host,r=!!((n=a)!==null&&n!==void 0&&n.ownerDocument.contains(a))}return r},q=function(e){var t=e.getBoundingClientRect(),a=t.width,r=t.height;return a===0&&r===0},he=function(e,t){var a=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var n=T.call(e,"details>summary:first-of-type"),c=n?e.parentElement:e;if(T.call(c,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof r=="function"){for(var b=e;e;){var v=e.parentElement,h=O(e);if(v&&!v.shadowRoot&&r(v)===!0)return q(e);e.assignedSlot?e=e.assignedSlot:!v&&h!==e.ownerDocument?e=h.host:e=v}e=b}if(pe(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return q(e);return!1},ge=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var r=t.children.item(a);if(r.tagName==="LEGEND")return T.call(t,"fieldset[disabled] *")?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},I=function(e,t){return!(t.disabled||se(t)||he(t,e)||le(t)||ge(t))},x=function(e,t){return!(ve(t)||X(t)<0||!I(e,t))},ye=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},me=function u(e){var t=[],a=[];return e.forEach(function(r,n){var c=!!r.scope,b=c?r.scope:r,v=X(b,c),h=c?u(r.candidates):b;v===0?c?t.push.apply(t,h):t.push(b):a.push({documentOrder:n,tabIndex:v,item:r,isScope:c,content:h})}),a.sort(ce).reduce(function(r,n){return n.isScope?r.push.apply(r,n.content):r.push(n.content),r},[]).concat(t)},we=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Q([e],t.includeContainer,{filter:x.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:ye}):a=z(e,t.includeContainer,x.bind(null,t)),me(a)},Te=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Q([e],t.includeContainer,{filter:I.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=z(e,t.includeContainer,I.bind(null,t)),a},R=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return T.call(e,k)===!1?!1:x(t,e)},Se=W.concat("iframe").join(","),L=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return T.call(e,Se)===!1?!1:I(t,e)};/*!
* focus-trap 7.0.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function H(u,e){var t=Object.keys(u);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(u);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(u,r).enumerable})),t.push.apply(t,a)}return t}function K(u){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?H(Object(t),!0).forEach(function(a){Fe(u,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach(function(a){Object.defineProperty(u,a,Object.getOwnPropertyDescriptor(t,a))})}return u}function Fe(u,e,t){return e in u?Object.defineProperty(u,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[e]=t,u}var V=function(){var u=[];return{activateTrap:function(t){if(u.length>0){var a=u[u.length-1];a!==t&&a.pause()}var r=u.indexOf(t);r===-1||u.splice(r,1),u.push(t)},deactivateTrap:function(t){var a=u.indexOf(t);a!==-1&&u.splice(a,1),u.length>0&&u[u.length-1].unpause()}}}(),Ne=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Ee=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},De=function(e){return e.key==="Tab"||e.keyCode===9},Y=function(e){return setTimeout(e,0)},$=function(e,t){var a=-1;return e.every(function(r,n){return t(r)?(a=n,!1):!0}),a},E=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,a):e},C=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Re=function(e,t){var a=(t==null?void 0:t.document)||document,r=K({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},c,b=function(i,o,s){return i&&i[o]!==void 0?i[o]:r[s||o]},v=function(i){return n.containerGroups.findIndex(function(o){var s=o.container,d=o.tabbableNodes;return s.contains(i)||d.find(function(l){return l===i})})},h=function(i){var o=r[i];if(typeof o=="function"){for(var s=arguments.length,d=new Array(s>1?s-1:0),l=1;l<s;l++)d[l-1]=arguments[l];o=o.apply(void 0,d)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var p=o;if(typeof o=="string"&&(p=a.querySelector(o),!p))throw new Error("`".concat(i,"` as selector refers to no known node"));return p},S=function(){var i=h("initialFocus");if(i===!1)return!1;if(i===void 0)if(v(a.activeElement)>=0)i=a.activeElement;else{var o=n.tabbableGroups[0],s=o&&o.firstTabbableNode;i=s||h("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},g=function(){if(n.containerGroups=n.containers.map(function(i){var o=we(i,r.tabbableOptions),s=Te(i,r.tabbableOptions);return{container:i,tabbableNodes:o,focusableNodes:s,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=s.findIndex(function(m){return m===l});if(!(y<0))return p?s.slice(y+1).find(function(m){return R(m,r.tabbableOptions)}):s.slice(0,y).reverse().find(function(m){return R(m,r.tabbableOptions)})}}}),n.tabbableGroups=n.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!h("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},w=function f(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){f(S());return}i.focus({preventScroll:!!r.preventScroll}),n.mostRecentlyFocusedNode=i,Ne(i)&&i.select()}},F=function(i){var o=h("setReturnFocus",i);return o||(o===!1?!1:i)},D=function(i){var o=C(i);if(!(v(o)>=0)){if(E(r.clickOutsideDeactivates,i)){c.deactivate({returnFocus:r.returnFocusOnDeactivate&&!L(o,r.tabbableOptions)});return}E(r.allowOutsideClick,i)||i.preventDefault()}},j=function(i){var o=C(i),s=v(o)>=0;s||o instanceof Document?s&&(n.mostRecentlyFocusedNode=o):(i.stopImmediatePropagation(),w(n.mostRecentlyFocusedNode||S()))},_=function(i){var o=C(i);g();var s=null;if(n.tabbableGroups.length>0){var d=v(o),l=d>=0?n.containerGroups[d]:void 0;if(d<0)i.shiftKey?s=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:s=n.tabbableGroups[0].firstTabbableNode;else if(i.shiftKey){var p=$(n.tabbableGroups,function(A){var P=A.firstTabbableNode;return o===P});if(p<0&&(l.container===o||L(o,r.tabbableOptions)&&!R(o,r.tabbableOptions)&&!l.nextTabbableNode(o,!1))&&(p=d),p>=0){var y=p===0?n.tabbableGroups.length-1:p-1,m=n.tabbableGroups[y];s=m.lastTabbableNode}}else{var N=$(n.tabbableGroups,function(A){var P=A.lastTabbableNode;return o===P});if(N<0&&(l.container===o||L(o,r.tabbableOptions)&&!R(o,r.tabbableOptions)&&!l.nextTabbableNode(o))&&(N=d),N>=0){var ee=N===n.tabbableGroups.length-1?0:N+1,te=n.tabbableGroups[ee];s=te.firstTabbableNode}}}else s=h("fallbackFocus");s&&(i.preventDefault(),w(s))},B=function(i){if(Ee(i)&&E(r.escapeDeactivates,i)!==!1){i.preventDefault(),c.deactivate();return}if(De(i)){_(i);return}},M=function(i){var o=C(i);v(o)>=0||E(r.clickOutsideDeactivates,i)||E(r.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},U=function(){if(!!n.active)return V.activateTrap(c),n.delayInitialFocusTimer=r.delayInitialFocus?Y(function(){w(S())}):w(S()),a.addEventListener("focusin",j,!0),a.addEventListener("mousedown",D,{capture:!0,passive:!1}),a.addEventListener("touchstart",D,{capture:!0,passive:!1}),a.addEventListener("click",M,{capture:!0,passive:!1}),a.addEventListener("keydown",B,{capture:!0,passive:!1}),c},G=function(){if(!!n.active)return a.removeEventListener("focusin",j,!0),a.removeEventListener("mousedown",D,!0),a.removeEventListener("touchstart",D,!0),a.removeEventListener("click",M,!0),a.removeEventListener("keydown",B,!0),c};return c={get active(){return n.active},get paused(){return n.paused},activate:function(i){if(n.active)return this;var o=b(i,"onActivate"),s=b(i,"onPostActivate"),d=b(i,"checkCanFocusTrap");d||g(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=a.activeElement,o&&o();var l=function(){d&&g(),U(),s&&s()};return d?(d(n.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(i){if(!n.active)return this;var o=K({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},i);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,G(),n.active=!1,n.paused=!1,V.deactivateTrap(c);var s=b(o,"onDeactivate"),d=b(o,"onPostDeactivate"),l=b(o,"checkCanReturnFocus"),p=b(o,"returnFocus","returnFocusOnDeactivate");s&&s();var y=function(){Y(function(){p&&w(F(n.nodeFocusedBeforeActivation)),d&&d()})};return p&&l?(l(F(n.nodeFocusedBeforeActivation)).then(y,y),this):(y(),this)},pause:function(){return n.paused||!n.active?this:(n.paused=!0,G(),this)},unpause:function(){return!n.paused||!n.active?this:(n.paused=!1,g(),U(),this)},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return n.containers=o.map(function(s){return typeof s=="string"?a.querySelector(s):s}),n.active&&g(),this}},c.updateContainerElements(e),c};const Oe=re({name:"UseFocusTrap",props:["as","options"],setup(u,{slots:e}){let t;const a=ne(),r=()=>t&&t.activate(),n=()=>t&&t.deactivate();return ie(()=>ae(a),c=>{!c||(t=Re(c,u.options||{}),r())},{flush:"post"}),oe(()=>n()),()=>{if(e.default)return ue(u.as||"div",{ref:a},e.default())}}});export{Oe as U};
