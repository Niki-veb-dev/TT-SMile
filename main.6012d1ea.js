parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=function(){document.querySelectorAll(".links__item").forEach(function(e){var t=function(){e.classList.remove("is-active"),e.classList.add("visited"),e.classList.add("border")};e.addEventListener("click",function(){e.classList.toggle("is-active"),e.onblur=t})})},t=function(){var e=document.querySelector(".select"),t=document.querySelector(".form__icon"),c=document.querySelector(".form__header"),n=document.querySelector(".select__icon"),i=document.querySelectorAll(".select__item"),r=document.querySelector(".form__selected"),s=document.querySelector(".select__current");n.addEventListener("click",function(){e.classList.toggle("is-active"),e.classList.contains("is-active")?s.innerText="Select":s.innerText="No selected element"}),t.addEventListener("click",function(){if("No selected element"!==s.innerText&&"Select"!==s.innerText){var e=document.createElement("div");e.className="select__current form__selected",e.innerText=s.innerText,c.after(e)}}),i.forEach(function(t){t.addEventListener("click",function(){var t=this.innerText;s.innerText=t,e.classList.remove("is-active"),r.innerText=t})})};e(),t();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6012d1ea.js.map