/*! For license information please see 640.82e80187.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{640:function(t,e,r){r.r(e),r.d(e,{default:function(){return S}});var n,o,i,a,c,s,u,l,h=r(861),f=r(439),p=r(689),d=r(87),v=r(791),y=r(493),g=r(430),x=r(168),m=r(867),w=m.ZP.div(n||(n=(0,x.Z)(["\ndisplay: flex;\ngap: 16px;\ntext-align: justify;\npadding-bottom: 24px;\nborder-bottom: 1px solid #6a857e;\n"]))),b=m.ZP.div(o||(o=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 24px;\n"]))),j=m.ZP.ul(i||(i=(0,x.Z)(["\ndisplay: flex;\ngap: 4px;\n"]))),L=m.ZP.h3(a||(a=(0,x.Z)(["\nmargin-bottom: 8px;\n"]))),E=r(184),_=function(t){var e=t.item,r=t.children;return(0,E.jsxs)("div",{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:250}),(0,E.jsxs)(b,{children:[(0,E.jsxs)("h2",{children:[e.title,"(",e.release_date.slice(0,4),")"]}),(0,E.jsxs)("p",{children:["User score: ",Math.round(10*e.vote_average),"%"]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(L,{children:"Overview"}),(0,E.jsx)("p",{children:e.overview})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(L,{children:"Genres"}),(0,E.jsx)(j,{children:e.genres.map((function(t){return(0,E.jsx)("li",{children:t.name},t.id)}))})]})]})]}),r]})},k=m.ZP.button(c||(c=(0,x.Z)(["\nmargin-top: 16px;\nmargin-bottom: 16px;\ntext-align: center;\npadding: 4px 24px;\nfont-size: 18px;\nbackground-color: #6a857e;\ncolor: #F5F5F5;\nborder: 1px solid #F5F5F5;\nborder-radius: 4px;\ncursor: pointer;\n&:hover {\n    box-shadow: 1px 1px 2px 2px rgba(194, 194, 214);\n}\n"]))),Z=m.ZP.p(s||(s=(0,x.Z)(["\nmargin-top: 24px;\nmargin-bottom: 8px;\nfont-size: 18px;\nfont-weight:500;\n"]))),O=(0,m.ZP)(d.Link)(u||(u=(0,x.Z)(["\n\nfont-weight:500;\n"]))),P=m.ZP.ul(l||(l=(0,x.Z)(["\nlist-style: inside;\npadding-left: 16px;\nmargin-bottom: 24px;\n"]))),F=r(777);function G(){G=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function x(){}var m={};u(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(F([])));b&&b!==r&&n.call(b,a)&&(m=b);var j=x.prototype=y.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),u(j,s,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var S=function(){var t,e,r=(0,v.useState)(!1),n=(0,f.Z)(r,2),o=n[0],i=n[1],a=(0,v.useState)(!1),c=(0,f.Z)(a,2),s=c[0],u=c[1],l=(0,v.useState)(null),x=(0,f.Z)(l,2),m=x[0],w=x[1],b=(0,p.UO)().movieId,j=(0,p.TH)(),L=(0,v.useRef)(null!==(t=null===(e=j.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,v.useEffect)((function(){var t=function(){var t=(0,h.Z)(G().mark((function t(){var e;return G().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,i(!0),u(!1),t.next=7,(0,y.Mc)(b);case 7:e=t.sent,w(e),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),u(!0);case 14:return t.prev=14,i(!1),t.finish(14);case 17:case 18:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[b]),(0,E.jsxs)("main",{children:[(0,E.jsx)(d.Link,{to:L.current,children:(0,E.jsx)(k,{children:"Go back"})}),o&&(0,E.jsx)(g.Fe,{width:"100%",color:"#6a857e"}),s&&!o&&(0,E.jsx)(F.j,{}),null!==m&&(0,E.jsxs)(_,{item:m,children:[(0,E.jsx)(Z,{children:"Additional information"}),(0,E.jsxs)(P,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(O,{to:"cast",children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(O,{to:"reviews",children:"Reviews"})})]}),(0,E.jsx)(p.j3,{})]})]})}}}]);
//# sourceMappingURL=640.82e80187.chunk.js.map