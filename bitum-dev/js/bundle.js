!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./#src/js/script.js")}({"./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no static exports found */function(e,t){document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".menu");e&&t&&(e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active"),t.classList.contains("active")&&e.classList.contains("active")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),t.addEventListener("click",n=>{n.target&&n.target.classList.contains("menu")&&(e.classList.remove("active"),t.classList.remove("active")),t.classList.contains("active")&&e.classList.contains("active")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}))}()})}});
//# sourceMappingURL=bundle.js.map