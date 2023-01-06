(()=>{"use strict";var e,t,n,r,o,a,i,c,s,d,l,p,u,h,m={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    outline-style: dotted;\n    outline-color: black;\n    outline-width: 1px;\n}\n\n.main {\n    background-color: beige;\n}\n\n.title {\n    font-size: 50px;\n    background-color: red;\n}\n\n.instructions {\n    background-color: silver;\n    height: 30px;\n}\n\n.gameDisplay {\n    height: 525px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 250px auto;\n    gap: 20px;\n}\n\n.controlPanel {\n    width: 250px;\n    height: 400px;\n    display: grid;\n    grid-template-rows: 50px auto;\n    gap: 10px;\n}\n\n.orientationBtn {\n    justify-self: center;\n    height: 50px;\n    width: 200px;\n    background-color: blue;\n    color: white;\n}\n\n.shipHolder {\n    background-color: gray;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.carrier.horizontal {\n    height: 40px;\n    width: 200px;\n    display: grid;\n    grid-template-columns: repeat(5, 40px);\n}\n\n.carrier.vertical {\n    height: 200px;\n    width: 40px;\n    display: grid;\n    grid-template-rows: repeat(5, 40px);\n}\n\n.shipSq {\n    background-color: red;\n}\n\n.left {\n    background-color: rgb(171, 43, 171);\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: repeat(10, auto);\n    grid-template-rows: repeat(10, auto);\n}\n\n.right {\n    background-color: midnightblue;\n    width: auto;\n    height: auto;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=o(h,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},f={};function v(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,exports:{}};return m[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.nc=void 0,e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),p=v.n(l),u=v(28),(h={}).styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("main"),e.appendChild(t);const n=document.createElement("div");n.classList.add("title"),n.textContent="BATTLESHIP!",t.appendChild(n);const r=document.createElement("div");r.classList.add("instructions"),t.appendChild(r);const o=document.createElement("div");o.classList.add("gameDisplay"),t.appendChild(o);const a=document.createElement("div");a.classList.add("controlPanel"),o.appendChild(a);const i=document.createElement("div");i.classList.add("left"),o.appendChild(i)})(),(()=>{const e=document.querySelector(".controlPanel"),t=document.createElement("button");t.classList.add("orientationBtn"),t.textContent="Flip piece",e.appendChild(t);const n=document.createElement("div");n.classList.add("shipHolder"),e.appendChild(n);const r=document.createElement("div");r.classList.add("carrier"),r.classList.add("horizontal"),n.appendChild(r);for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("shipSq"),r.appendChild(e)}})(),(()=>{const e=document.querySelector(".left");for(let t=0;t<100;t++){let t=document.createElement("div");e.appendChild(t)}})(),document.querySelector(".orientationBtn").addEventListener("click",(()=>{let e=document.querySelector(".carrier");e.classList.contains("horizontal")?(e.classList.add("vertical"),e.classList.remove("horizontal")):(e.classList.add("horizontal"),e.classList.remove("vertical"))}))})();