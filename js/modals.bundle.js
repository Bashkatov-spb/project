!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}({5:function(e,t){var o=document.querySelectorAll(".btn-call"),n=document.querySelectorAll(".btn-msg"),l=(document.querySelector(".menu"),document.querySelector(".modal-call")),r=document.querySelector(".modal-msg"),c=(document.querySelectorAll(".container"),document.querySelector(".modal-msg__wrapper"),function(e,t){document.addEventListener("keydown",(function(o){27==o.keyCode&&e.classList.remove(t)}))});r.addEventListener("click",(function(e){e.target==r&&r.classList.remove("modal-msg--show")})),l.addEventListener("click",(function(e){e.target==l&&l.classList.remove("modal-call--show")})),o.forEach((function(e){e.addEventListener("click",(function(){var e=document.querySelector(".modal-call__btn");c(l,"modal-call--show"),e.addEventListener("click",(function(){l.classList.remove("modal-call--show")})),l.classList.contains("modal-call--show")?l.classList.remove("modal-call--show"):l.classList.add("modal-call--show")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector(".modal-msg__btn");c(r,"modal-msg--show"),t.addEventListener("click",(function(){r.classList.remove("modal-msg--show")})),r.classList.contains("modal-msg--show")?r.classList.remove("modal-msg--show"):r.classList.add("modal-msg--show")}))})),console.log("modals")}});
//# sourceMappingURL=modals.bundle.js.map