(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),c=n(645),a=n.n(c),i=n(667),s=n.n(i),u=new URL(n(575),n.b),d=a()(o()),l=s()(u);d.push([e.id,"h1{\n    color :rgba(17, 7, 7, 0.966);\n    font-size:70px;\n}\np \n{\n    font-size: 25px;\n}\nbutton{\n    background-color: rgba(0, 0, 0, 0.918);\n    \n    border-style: outset;\n    border-radius: 10px;\n    width: 120px;\n    height: 30px;\n    font-size: 20px;\n    -webkit-text-fill-color: rgb(160, 153, 153);\n}\nbody{\n    \n    gap: 10px;\n    background:url("+l+") no-repeat center center fixed;;\n    -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n    \n}\n",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=r(e,o),u=0;u<c.length;u++){var d=n(c[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},575:(e,t,n)=>{e.exports=n.p+"a04988dfaef39a5e855c.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),a=n.n(c),i=n(565),s=n.n(i),u=n(216),d=n.n(u),l=n(589),p=n.n(l),f=n(426),m={};function h(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("img");e.appendChild(t);const n=document.createElement("h1");n.textContent="Welcome to our Restaurant!",e.appendChild(n);const r=document.createElement("p");r.textContent="We are a world-class restaurant with an extensive menu and exceptional service. Our chefs use only the freshest and highest-quality ingredients to create delicious and innovative dishes that will delight your taste buds. Come dine with us and experience the magic of our restaurant.",e.appendChild(r)}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,console.log("testasd "),document.addEventListener("DOMContentLoaded",(()=>{h()})),document.addEventListener("click",(function(e){e.target.closest("#home")&&h()})),document.addEventListener("click",(function(e){e.target.closest("#menu")&&function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Our Menu",e.appendChild(t);const n=document.createElement("ul"),r=document.createElement("li");r.textContent="Appetizer: Shrimp Cocktail",n.appendChild(r);const o=document.createElement("li");o.textContent="Entree: Grilled Filet Mignon",n.appendChild(o);const c=document.createElement("li");c.textContent="Dessert: Chocolate Lava Cake",n.appendChild(c),e.appendChild(n)}()})),document.addEventListener("click",(function(e){e.target.closest("#contact")&&function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("p");n.textContent="123 Main St, Anytown, USA",e.appendChild(n);const r=document.createElement("p");r.textContent="Phone: 555-555-5555",e.appendChild(r);const o=document.createElement("p");o.textContent="Email: info@restaurant.com",e.appendChild(o)}()}))})()})();