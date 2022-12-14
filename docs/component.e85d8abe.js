import{u as e}from"./index.b84cf581.js";import{C as t,x as n,y as o,D as r,B as a}from"./index.7cfd2803.js";var i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],u=i.join(","),c="undefined"==typeof Element,s=c?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!c&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},f=function(e,t,n){var o=Array.prototype.slice.apply(e.querySelectorAll(u));return t&&s.call(e,u)&&o.unshift(e),o=o.filter(n)},d=function e(t,n,o){for(var r=[],a=Array.from(t);a.length;){var i=a.shift();if("SLOT"===i.tagName){var c=i.assignedElements(),l=e(c.length?c:i.children,!0,o);o.flatten?r.push.apply(r,l):r.push({scope:i,candidates:l})}else{s.call(i,u)&&o.filter(i)&&(n||!t.includes(i))&&r.push(i);var f=i.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(i),d=!o.shadowRootFilter||o.shadowRootFilter(i);if(f&&d){var p=e(!0===f?i.children:f.children,!0,o);o.flatten?r.push.apply(r,p):r.push({scope:i,candidates:p})}else a.unshift.apply(a,i.children)}}return r},p=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},b=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},v=function(e){return"INPUT"===e.tagName},h=function(e){return function(e){return v(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||l(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},m=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},y=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=s.call(e,"details>summary:first-of-type")?e.parentElement:e;if(s.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof o){for(var a=e;e;){var i=e.parentElement,u=l(e);if(i&&!i.shadowRoot&&!0===o(i))return m(e);e=e.assignedSlot?e.assignedSlot:i||u===e.ownerDocument?i:u.host}e=a}if(function(e){for(var t,n=l(e).host,o=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!o&&n;){var r;o=!(null===(r=n=l(n).host)||void 0===r||!r.ownerDocument.contains(n))}return o}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},g=function(e,t){return!(t.disabled||function(e){return v(e)&&"hidden"===e.type}(t)||y(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!s.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},w=function(e,t){return!(h(t)||p(t)<0||!g(e,t))},E=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},O=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scope,i=a?t.scope:t,u=p(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:u,item:t,isScope:a,content:c})})),o.sort(b).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},N=function(e,t){var n;return n=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:w.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:E}):f(e,t.includeContainer,w.bind(null,t)),O(n)},S=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==s.call(e,u)&&w(t,e)},T=i.concat("iframe").join(","),D=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==s.call(e,T)&&g(t,e)};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C,I=(C=[],{activateTrap:function(e){if(C.length>0){var t=C[C.length-1];t!==e&&t.pause()}var n=C.indexOf(e);-1===n||C.splice(n,1),C.push(e)},deactivateTrap:function(e){var t=C.indexOf(e);-1!==t&&C.splice(t,1),C.length>0&&C[C.length-1].unpause()}}),x=function(e){return setTimeout(e,0)},A=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},G=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},P=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},L=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=R({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i=function(e,t,n){return e&&void 0!==e[t]?e[t]:r[n||t]},u=function(e){return a.containerGroups.findIndex((function(t){var n=t.container,o=t.tabbableNodes;return n.contains(e)||o.find((function(t){return t===e}))}))},c=function(e){var t=r[e];if("function"==typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return u},s=function(){var e=c("initialFocus");if(!1===e)return!1;if(void 0===e)if(u(o.activeElement)>=0)e=o.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},l=function(){if(a.containerGroups=a.containers.map((function(e){var t,n,o=N(e,r.tabbableOptions),a=(t=e,(n=(n=r.tabbableOptions)||{}).getShadowRoot?d([t],n.includeContainer,{filter:g.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):f(t,n.includeContainer,g.bind(null,n)));return{container:e,tabbableNodes:o,focusableNodes:a,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.findIndex((function(t){return t===e}));if(!(n<0))return t?a.slice(n+1).find((function(e){return S(e,r.tabbableOptions)})):a.slice(0,n).reverse().find((function(e){return S(e,r.tabbableOptions)}))}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function e(t){!1!==t&&t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!r.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(s()))},b=function(e){var t=c("setReturnFocus",e);return t||!1!==t&&e},v=function(e){var t=P(e);u(t)>=0||(G(r.clickOutsideDeactivates,e)?n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!D(t,r.tabbableOptions)}):G(r.allowOutsideClick,e)||e.preventDefault())},h=function(e){var t=P(e),n=u(t)>=0;n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),p(a.mostRecentlyFocusedNode||s()))},m=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==G(r.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=P(e);l();var n=null;if(a.tabbableGroups.length>0){var o=u(t),i=o>=0?a.containerGroups[o]:void 0;if(o<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var s=A(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(s<0&&(i.container===t||D(t,r.tabbableOptions)&&!S(t,r.tabbableOptions)&&!i.nextTabbableNode(t,!1))&&(s=o),s>=0){var f=0===s?a.tabbableGroups.length-1:s-1;n=a.tabbableGroups[f].lastTabbableNode}}else{var d=A(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(d<0&&(i.container===t||D(t,r.tabbableOptions)&&!S(t,r.tabbableOptions)&&!i.nextTabbableNode(t))&&(d=o),d>=0){var b=d===a.tabbableGroups.length-1?0:d+1;n=a.tabbableGroups[b].firstTabbableNode}}}else n=c("fallbackFocus");n&&(e.preventDefault(),p(n))}(e)},y=function(e){var t=P(e);u(t)>=0||G(r.clickOutsideDeactivates,e)||G(r.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},w=function(){if(a.active)return I.activateTrap(n),a.delayInitialFocusTimer=r.delayInitialFocus?x((function(){p(s())})):p(s()),o.addEventListener("focusin",h,!0),o.addEventListener("mousedown",v,{capture:!0,passive:!1}),o.addEventListener("touchstart",v,{capture:!0,passive:!1}),o.addEventListener("click",y,{capture:!0,passive:!1}),o.addEventListener("keydown",m,{capture:!0,passive:!1}),n},E=function(){if(a.active)return o.removeEventListener("focusin",h,!0),o.removeEventListener("mousedown",v,!0),o.removeEventListener("touchstart",v,!0),o.removeEventListener("click",y,!0),o.removeEventListener("keydown",m,!0),n};return(n={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=i(e,"onActivate"),n=i(e,"onPostActivate"),r=i(e,"checkCanFocusTrap");r||l(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=o.activeElement,t&&t();var u=function(){r&&l(),w(),n&&n()};return r?(r(a.containers.concat()).then(u,u),this):(u(),this)},deactivate:function(e){if(!a.active)return this;var t=R({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,E(),a.active=!1,a.paused=!1,I.deactivateTrap(n);var o=i(t,"onDeactivate"),u=i(t,"onPostDeactivate"),c=i(t,"checkCanReturnFocus"),s=i(t,"returnFocus","returnFocusOnDeactivate");o&&o();var l=function(){x((function(){s&&p(b(a.nodeFocusedBeforeActivation)),u&&u()}))};return s&&c?(c(b(a.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,E()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,l(),w(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),a.active&&l(),this}}).updateContainerElements(e),n};const j=t({name:"UseFocusTrap",props:["as","options"],setup(t,{slots:i}){let u;const c=n();return o((()=>e(c)),(e=>{e&&(u=L(e,t.options||{}),u&&u.activate())}),{flush:"post"}),a((()=>u&&u.deactivate())),()=>{if(i.default)return r(t.as||"div",{ref:c},i.default())}}});export{j as U};
