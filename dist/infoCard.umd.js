/*!
 * vue-custom-widget-template v1.0.1
 * author: fex
 * build tool: AKFun
 * build time: Tue Dec 28 2021 12:22:25 GMT+0800 (China Standard Time)
 * build tool info: https://github.com/wibetter/akfun
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.amisWidget=t():e.amisWidget=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("amis-widget")},function(e,t,n){var r=n(4);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("7be4adc6",r,!1,{sourceMap:!1})},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,d=function(){},l=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){c=n,l=i||{};var s=r(e,t);return v(s),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(u=o[a.id]).refs--,n.push(u)}t?v(s=r(e,t)):s=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(f){var i=u++;r=a||(a=m()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=m(),t=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var h,_=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function b(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t,n){"use strict";n(1)},function(e,t,n){},function(e,t,n){var r=n(6);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("9fc1811c",r,!1,{sourceMap:!1})},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.uuid,staticClass:"news-card"},[n("div",{staticClass:"news-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"item-imgbox"},[n("div",{staticClass:"news-img",style:{backgroundImage:"url("+e.backgroundImage+")"}}),e._v(" "),e.img_count>0?n("div",{staticClass:"img-count"},[e._v("\n      "+e._s(e.img_count)+"\n    ")]):e._e()]),e._v(" "),n("div",{staticClass:"news-info"},[n("div",{staticClass:"left media-mark"},[e._v("爱速搭 · 低代码平台")]),e._v(" "),e.comment_count&&0!=e.comment_count?n("div",{staticClass:"cmt-num right"},[e._v("\n      "+e._s(e.agreeDataFormat(e.comment_count))+"评\n    ")]):e._e()])])};r._withStripped=!0;var i={props:{title:{type:String,default:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"},backgroundImage:{type:String,default:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"},img_count:{type:Number,default:3},comment_count:{type:Number,default:2021}},data:function(){return{isAlive:!0,isFirstVisit:!0}},mounted:function(){this.isFirstVisit=!1},activated:function(){this.isAlive=!0},deactivated:function(){this.isAlive=!1},methods:{agreeDataFormat:function(e){return e&&e<=9999?e:e&&e>9999?Math.floor(e/1e3)/10+"w":void 0}}};n(3);var o=function(e,t,n,r,i,o,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}(i,r,[],!1,null,null,null);o.options.__file="src/widget/info-card.vue";var s=o.exports,a=n(0);n(5);Object(a.registerRendererByType)(s,{type:"vue-info-card",usage:"renderer",weight:99,framework:"vue"})}])}));