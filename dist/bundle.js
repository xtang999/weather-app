/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={772:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,":root {\n    --white: rgb(244, 244, 244);\n    --black: rgb(21, 21, 21);\n    --lightgrey: rgb(217, 217, 217);\n    --darkgrey: rgb(175, 175, 175);\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n*:hover {\n    cursor:default ;\n}\n\n*::selection {\n    background-color: transparent;\n}\n\nhtml {\n    position: relative;\n    min-height: 100%;\n    font-size: 18px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody {\n    background-color: var(--white);\n    color: var(--black);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n    padding: 280px 0 0 0;\n    color: var(--darkgrey);\n    text-align: center;\n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 0 200px 40px 200px;\n}\n\nmain>div {\n    padding: 50px 80px;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter a {\n    text-decoration: underline;\n    color: var(--black);\n}\n\n.weather-card {\n    text-align: center;\n    max-width: 600px;\n}\n\n.weather-location {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n    transition: all 0.3s ease-in-out;\n}\n\n.weather-location:hover,\n.weather-location:focus {\n    cursor: text;\n    outline: none; \n    border: none; \n    background-color: transparent;\n    transform: translateY(-4px);\n    font-size: 3rem;\n}\n\n.weather-location::selection {\n    background-color: var(--lightgrey);\n}\n\n\n.weather-condition {\n    font-size: 2rem;\n    margin-bottom: 5px;\n}\n\n.weather-temperature {\n    font-size: 6rem;\n    font-weight: bold;\n}\n\n.weather-forecast {\n    max-width: 1000px;\n}\n\n.weekday {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    align-items: center; \n    padding: 5px 0; \n}\n\n.weekday div {\n    padding: 0 20px;\n}\n\n.param-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.param-grid .row {\n    display: flex;\n    width: 100%;\n    justify-content: space-around; \n    margin-bottom: 20px;\n}\n\n.param-pair {\n    display: flex;\n    flex-direction: column; \n    align-items: center; \n    flex: 1; \n    padding: 0 40px 0 40px; \n    text-align: center; \n    width: 240px;\n}\n\nfooter {\n    padding: 100px 0 0 0;\n}\n\na:hover {\n    cursor: pointer;\n}\n\n@media (max-width: 1450px) {\n    main {\n        padding: 0 0 40px 0;\n    }\n\n    .weather-location {\n        font-size: 2rem;\n    }\n\n    .weather-condition {\n        font-size: 2rem;\n    }\n\n    .weather-temperature {\n        font-size: 6rem;\n    }\n\n}\n\n\n\n@media (max-width: 1150px) {\n\n    header {\n        padding: 100px 0 0 0;\n    }\n\n    main {\n        flex-direction: column;\n        padding: 0;\n    }\n\n    main > div {\n        padding: 20px 0px 10px 0;\n    }\n\n    .weather-location {\n        font-size: 2rem;\n    }\n\n    .weather-temperature {\n        font-size: 6rem;\n    }\n\n    .weather-forecast {\n        padding: 40px 0 40px 0;\n    }\n\n    .param-grid .row {\n        flex-direction: wrap;\n        align-items: center;\n    }\n\n    footer {\n        padding: 20px 0 0 0;\n    }\n\n    .param-pair {\n        width: 100%;\n        padding: 20px 40px;\n    }\n}\n\n@media (max-width: 800px) {\n\n    .weather-location {\n        font-size: 1.8rem;\n    }\n\n    .weather-condition {\n        font-size: 1.8rem;\n    }\n\n    .weather-temperature {\n        font-size: 5rem;\n    }\n\n    .param-grid .row {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    footer {\n        padding: 80px 0 120px 0;\n    }\n}\n\n\n@media (max-width: 480px) {\n    html {\n        font-size: 16px; \n    }\n\n    header {\n        padding: 80px 30px 10px 30px;\n    }\n\n    .weather-location {\n        font-size: 1.5rem;\n    }\n\n    .weather-condition {\n        font-size: 1.5rem;\n    }\n\n    .weather-temperature {\n        font-size: 5rem;\n    }\n\n    .param-grid .row {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    footer {\n        padding: 80px 0 100px 0;\n    }\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],l=r.base?u[0]+r.base:u[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var h=n(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var d=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),l=0;l<a.length;l++){var s=n(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),u=n.n(c),l=n(216),s=n.n(l),f=n(589),h=n.n(f),p=n(772),d={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof w?e:w,i=Object.create(a.prototype),c=new T(r||[]);return o(i,"_invoke",{value:S(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",g={};function w(){}function x(){}function b(){}var E={};l(E,i,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(G([])));_&&_!==n&&r.call(_,i)&&(E=_);var j=b.prototype=w.prototype=Object.create(E);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==v(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,n,r){var o=h;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=N(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?m:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function N(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(v(e)+" is not iterable")}return x.prototype=b,o(j,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new O(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(j),l(j,u,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:G(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function m(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function g(t){return w.apply(this,arguments)}function w(){var t;return t=y().mark((function t(e){var n,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.weatherapi.com/v1/forecast.json?key=8a3ba5487b77443dbaa44807231211&q=".concat(e,"&days=7"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,console.log(r),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})),w=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){m(a,r,o,i,c,"next",t)}function c(t){m(a,r,o,i,c,"throw",t)}i(void 0)}))},w.apply(this,arguments)}function x(){return document.querySelector("main")||(console.error("Main element not found"),null)}function b(t){var e=x();if(e){var n=document.createElement("div");n.className="weather-forecast",t.forecast.forecastday.forEach((function(t){var e=document.createElement("div");e.className="weekday";var r,o=document.createElement("div");o.textContent=(r=t.date,new Date(r).toLocaleDateString("en-US",{weekday:"short"}));var a=document.createElement("div");a.textContent=t.day.condition.text;var i=document.createElement("div");i.textContent="".concat(t.day.avgtemp_c," °C"),e.appendChild(o),e.appendChild(a),e.appendChild(i),n.appendChild(e)})),e.appendChild(n)}}function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function L(){L=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new T(r||[]);return o(i,"_invoke",{value:S(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function w(){}var x={};l(x,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(G([])));_&&_!==n&&r.call(_,i)&&(x=_);var j=w.prototype=m.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==E(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,n,r){var o=h;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=N(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?v:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function N(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(E(e)+" is not iterable")}return g.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new O(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(j),l(j,u,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:G(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function _(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function j(t){return k.apply(this,arguments)}function k(){var t;return t=L().mark((function t(e){var n;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:(n=t.sent)&&n.location&&n.current&&n.forecast?(x().innerHTML="",P(n),b(n),N(n)):"Melbourne"!==e&&j("Melbourne"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching weather data:",t.t0),"Melbourne"!==e&&j("Melbourne");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),k=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){_(a,r,o,i,c,"next",t)}function c(t){_(a,r,o,i,c,"throw",t)}i(void 0)}))},k.apply(this,arguments)}function O(t){var e=t.textContent.trim();e||(e="Melbourne"),j(e)}function S(t){return[[{name:"Sunrise",value:t.forecast.forecastday[0].astro.sunrise},{name:"Sunset",value:t.forecast.forecastday[0].astro.sunset},{name:"Chance of Rain",value:"".concat(t.forecast.forecastday[0].day.daily_chance_of_rain," %")},{name:"Humidity",value:"".concat(t.current.humidity," %")},{name:"Wind",value:"".concat(t.current.wind_kph," km/h")}],[{name:"Feels Like",value:"".concat(t.current.feelslike_c," °C")},{name:"Visibility",value:"".concat(t.current.vis_km," km")},{name:"Pressure",value:"".concat(t.current.pressure_mb," hPa")},{name:"UV Index",value:t.current.uv},{name:"Precipitation",value:"".concat(t.current.precip_mm," mm")}]]}function N(t){S(t).forEach((function(t,e){t.forEach((function(t,n){var r=document.getElementById("param-value-".concat(e,"-").concat(n));r&&(r.textContent=t.value)}))}))}function P(t){var e=x();if(e){var n,r='\n        <div class="weather-card">\n            <div class="weather-location" contenteditable="true">'.concat(t.location.name,'</div>\n            <div class="weather-condition">').concat(t.current.condition.text,'</div>\n            <div class="weather-temperature">').concat(t.current.temp_c,' °C</div>\n            <div class="weather-temp-lh">L: ').concat(t.forecast.forecastday[0].day.mintemp_c," °C / H: ").concat(t.forecast.forecastday[0].day.maxtemp_c," °C</div>\n        </div>\n    ");e.insertAdjacentHTML("afterbegin",r),(n=document.querySelector(".weather-location")).addEventListener("blur",(function(){O(n)})),n.addEventListener("keydown",(function(t){"Enter"===t.key&&(t.preventDefault(),O(n))}))}}function C(t){var e=x();if(e){var n=document.getElementById("param-grid");n?n.innerHTML="":((n=document.createElement("div")).id="param-grid",n.className="param-grid"),S(t).forEach((function(t,e){var r=document.createElement("div");r.className="row",t.forEach((function(t,n){var o=document.createElement("div");o.className="param-pair";var a=document.createElement("p");a.textContent=t.name;var i=document.createElement("p");i.id="param-value-".concat(e,"-").concat(n),i.textContent=t.value,o.appendChild(a),o.appendChild(i),r.appendChild(o)})),n.appendChild(r)})),n.parentElement||e.insertAdjacentElement("afterend",n)}}function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function G(){G=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new P(r||[]);return o(i,"_invoke",{value:k(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function w(){}var x={};l(x,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(C([])));E&&E!==n&&r.call(E,i)&&(x=E);var L=w.prototype=m.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==T(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,n,r){var o=h;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?v:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(T(e)+" is not iterable")}return g.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new j(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),l(L,u,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function F(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function z(){var t;return t=G().mark((function t(){var e;return G().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,g("niigata");case 3:P(e=t.sent),b(e),C(e);case 7:case"end":return t.stop()}}),t)})),z=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){F(a,r,o,i,c,"next",t)}function c(t){F(a,r,o,i,c,"throw",t)}i(void 0)}))},z.apply(this,arguments)}d.styleTagTransform=h(),d.setAttributes=u(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=s(),e()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals,function(){z.apply(this,arguments)}()})()})();