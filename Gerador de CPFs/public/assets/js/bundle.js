!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){"use strict";var t=e(2),o=e.n(t),i=e(3),a=e.n(i)()(o.a);a.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\nhtml{\n  font-size: 62.5%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3rem;\n  line-height: 1.5rem;\n   \n}\n\n.container {\n  max-width: 64rem;\n  margin: 5rem auto;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 1rem;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\nform input {\n  font-size: 2.4rem;\n  height: 5rem;\n  padding: 0 2rem;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: 700;\n  height: 5rem;\n  cursor: pointer;\n  margin-top: 3rem;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n.container{\n  text-align: center;\n  margin-bottom: 40px;\n}\n.cpf-gerado{\n  font-size: 2rem;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 5px;  \n}\n\n\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,iBAAiB;EACjB,mBAAmB;;AAErB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\nhtml{\n  font-size: 62.5%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3rem;\n  line-height: 1.5rem;\n   \n}\n\n.container {\n  max-width: 64rem;\n  margin: 5rem auto;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 1rem;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\nform input {\n  font-size: 2.4rem;\n  height: 5rem;\n  padding: 0 2rem;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: 700;\n  height: 5rem;\n  cursor: pointer;\n  margin-top: 3rem;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n.container{\n  text-align: center;\n  margin-bottom: 40px;\n}\n.cpf-gerado{\n  font-size: 2rem;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 5px;  \n}\n\n\n"],sourceRoot:""}]),r.a=a},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function c(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function u(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],u=r.base?i[0]+r.base:i[0],f=e[u]||0,l="".concat(u," ").concat(f);e[u]=f+1;var s=c(l),A={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(A)):a.push({identifier:l,updater:g(A,r),references:1}),t.push(l)}return t}function f(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,s=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function A(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function m(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,d=0;function g(n,r){var e,t,o;if(r.singleton){var i=d++;e=p||(p=f(r)),t=A.bind(null,e,i,!1),o=A.bind(null,e,i,!0)}else e=f(r),t=m.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=u(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=c(e[t]);a[o].references--}for(var i=u(n,r),f=0;f<e.length;f++){var l=c(e[f]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,r,e){"use strict";function t(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null==e)return;var t,o,i=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(t=e.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return o(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var r=t(n,4),e=r[1],o=r[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),u=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(u).concat([c]).join("\n")}return[e].join("\n")}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),r.push(u))}},r}},function(n,r,e){"use strict";function t(n,r){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,r){if(!n)return;if("string"==typeof n)return o(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,r)}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function i(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}e.r(r);var a=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}var r,e,o;return r=n,o=[{key:"geraDigito",value:function(n){var r,e=0,o=n.length+1,i=t(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;e+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-e%11;return c<=9?String(c):"0"}}],(e=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),e=n.geraDigito(r),t=n.geraDigito(r+e);this.novoCPF=r+e+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&i(r.prototype,e),o&&i(r,o),n}();function c(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var u,f=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,t;return r=n,(e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=a.geraDigito(n),e=n+r+a.geraDigito(n+r);return this.formatado(e)}}])&&c(r.prototype,e),t&&c(r,t),n}(),l=e(1),s=e.n(l),A=e(0),m={insert:"head",singleton:!1};s()(A.a,m),A.a.locals;u=new f,document.querySelector(".cpf-gerado").innerHTML=u.geraNovoCpf()}]);
//# sourceMappingURL=bundle.js.map