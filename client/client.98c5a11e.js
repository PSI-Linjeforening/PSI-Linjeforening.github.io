function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function i(e,t,n,r,s,o,a){const c=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(c){const s=l(t,n,r,a);e.p(s,c)}}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function $(){return g(" ")}function v(){return g("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function E(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const e=s.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)s.removeAttribute(o[e]);return e.splice(r,1)[0]}}return r?m(t):h(t)}function x(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return g(t)}function S(e){return x(e," ")}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,n){e.classList[n?"add":"remove"](t)}function L(e,t=document.body){return Array.from(t.querySelectorAll(e))}let P;function R(e){P=e}function j(){if(!P)throw new Error("Function called outside component initialization");return P}const C=[],N=[],O=[],q=[],k=Promise.resolve();let U=!1;function D(e){O.push(e)}let I=!1;const H=new Set;function T(){if(!I){I=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];R(t),B(t.$$)}for(C.length=0;N.length;)N.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];H.has(t)||(H.add(t),t())}O.length=0}while(C.length);for(;q.length;)q.pop()();U=!1,I=!1,H.clear()}}function B(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const J=new Set;let V;function K(){V={r:0,c:[],p:V}}function M(){V.r||s(V.c),V=V.p}function z(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),V.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function F(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function G(e){return"object"==typeof e&&null!==e?e:{}}function W(e){e&&e.c()}function X(e,t){e&&e.l(t)}function Q(e,t,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=e.$$;a&&a.m(t,r),D(()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(D)}function Z(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(C.push(e),U||(U=!0,k.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,n,o,a,c,l,i=[-1]){const u=P;R(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;if(p.ctx=o?o(t,f,(e,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=s)&&(p.bound[e]&&p.bound[e](s),h&&ee(t,e)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const e=b(n.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&z(t.$$.fragment),Q(t,n.target,n.anchor),T()}R(u)}class ne{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const re=[];function se(t,n=e){let r;const s=[];function o(e){if(a(t,e)&&(t=e,r)){const e=!re.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),re.push(n,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}const oe={},ae=()=>({});function ce(t){let n,r,s,o,a,c,l,i,u,m,v,y,w,L,P,R,j;return{c(){n=h("nav"),r=h("ul"),s=h("li"),o=h("a"),a=g("hjem"),c=$(),l=h("li"),i=h("a"),u=g("om"),m=$(),v=h("li"),y=h("a"),w=g("grupper"),L=$(),P=h("li"),R=h("a"),j=g("andre"),this.h()},l(e){n=E(e,"NAV",{class:!0});var t=b(n);r=E(t,"UL",{class:!0});var f=b(r);s=E(f,"LI",{class:!0});var p=b(s);o=E(p,"A",{rel:!0,href:!0,class:!0});var h=b(o);a=x(h,"hjem"),h.forEach(d),p.forEach(d),c=S(f),l=E(f,"LI",{class:!0});var g=b(l);i=E(g,"A",{rel:!0,href:!0,class:!0});var $=b(i);u=x($,"om"),$.forEach(d),g.forEach(d),m=S(f),v=E(f,"LI",{class:!0});var _=b(v);y=E(_,"A",{rel:!0,href:!0,class:!0});var A=b(y);w=x(A,"grupper"),A.forEach(d),_.forEach(d),L=S(f),P=E(f,"LI",{class:!0});var C=b(P);R=E(C,"A",{rel:!0,href:!0,class:!0});var N=b(R);j=x(N,"andre"),N.forEach(d),C.forEach(d),f.forEach(d),t.forEach(d),this.h()},h(){_(o,"rel","prefetch"),_(o,"href","."),_(o,"class","svelte-4ex5rn"),A(o,"selected",void 0===t[0]),_(s,"class","svelte-4ex5rn"),_(i,"rel","prefetch"),_(i,"href","om"),_(i,"class","svelte-4ex5rn"),A(i,"selected","om"===t[0]),_(l,"class","svelte-4ex5rn"),_(y,"rel","prefetch"),_(y,"href","grupper"),_(y,"class","svelte-4ex5rn"),A(y,"selected","grupper"===t[0]),_(v,"class","svelte-4ex5rn"),_(R,"rel","prefetch"),_(R,"href","andre"),_(R,"class","svelte-4ex5rn"),A(R,"selected","andre"===t[0]),_(P,"class","svelte-4ex5rn"),_(r,"class","svelte-4ex5rn"),_(n,"class","svelte-4ex5rn")},m(e,t){p(e,n,t),f(n,r),f(r,s),f(s,o),f(o,a),f(r,c),f(r,l),f(l,i),f(i,u),f(r,m),f(r,v),f(v,y),f(y,w),f(r,L),f(r,P),f(P,R),f(R,j)},p(e,[t]){1&t&&A(o,"selected",void 0===e[0]),1&t&&A(i,"selected","om"===e[0]),1&t&&A(y,"selected","grupper"===e[0]),1&t&&A(R,"selected","andre"===e[0])},i:e,o:e,d(e){e&&d(n)}}}function le(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ie extends ne{constructor(e){super(),te(this,e,le,ce,a,{segment:0})}}function ue(e){let t,n,r,s;t=new ie({props:{segment:e[0]}});const o=e[2].default,a=c(o,e,e[1],null);return{c(){W(t.$$.fragment),n=$(),r=h("main"),a&&a.c(),this.h()},l(e){X(t.$$.fragment,e),n=S(e),r=E(e,"MAIN",{class:!0});var s=b(r);a&&a.l(s),s.forEach(d),this.h()},h(){_(r,"class","svelte-1v6nfb3")},m(e,o){Q(t,e,o),p(e,n,o),p(e,r,o),a&&a.m(r,null),s=!0},p(e,[n]){const r={};1&n&&(r.segment=e[0]),t.$set(r),a&&a.p&&2&n&&i(a,o,e,e[1],n,null,null)},i(e){s||(z(t.$$.fragment,e),z(a,e),s=!0)},o(e){Y(t.$$.fragment,e),Y(a,e),s=!1},d(e){Z(t,e),e&&d(n),e&&d(r),a&&a.d(e)}}}function fe(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n(0,r=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[r,o,s]}class pe extends ne{constructor(e){super(),te(this,e,fe,ue,a,{segment:0})}}function de(e){let t,n,r=e[1].stack+"";return{c(){t=h("pre"),n=g(r)},l(e){t=E(e,"PRE",{});var s=b(t);n=x(s,r),s.forEach(d)},m(e,r){p(e,t,r),f(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&w(n,r)},d(e){e&&d(t)}}}function he(t){let n,r,s,o,a,c,l,i,u,m=t[1].message+"";document.title=n=t[0];let y=t[2]&&t[1].stack&&de(t);return{c(){r=$(),s=h("h1"),o=g(t[0]),a=$(),c=h("p"),l=g(m),i=$(),y&&y.c(),u=v(),this.h()},l(e){L('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=S(e),s=E(e,"H1",{class:!0});var n=b(s);o=x(n,t[0]),n.forEach(d),a=S(e),c=E(e,"P",{class:!0});var f=b(c);l=x(f,m),f.forEach(d),i=S(e),y&&y.l(e),u=v(),this.h()},h(){_(s,"class","svelte-11ldx7j"),_(c,"class","svelte-11ldx7j")},m(e,t){p(e,r,t),p(e,s,t),f(s,o),p(e,a,t),p(e,c,t),f(c,l),p(e,i,t),y&&y.m(e,t),p(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&w(o,e[0]),2&t&&m!==(m=e[1].message+"")&&w(l,m),e[2]&&e[1].stack?y?y.p(e,t):(y=de(e),y.c(),y.m(u.parentNode,u)):y&&(y.d(1),y=null)},i:e,o:e,d(e){e&&d(r),e&&d(s),e&&d(a),e&&d(c),e&&d(i),y&&y.d(e),e&&d(u)}}}function me(e,t,n){let{status:r}=t,{error:s}=t;return e.$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,!1]}class ge extends ne{constructor(e){super(),te(this,e,me,he,a,{status:0,error:1})}}function $e(e){let n,r,s;const o=[e[4].props];var a=e[4].component;function c(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(c())),{c(){n&&W(n.$$.fragment),r=v()},l(e){n&&X(n.$$.fragment,e),r=v()},m(e,t){n&&Q(n,e,t),p(e,r,t),s=!0},p(e,t){const s=16&t?F(o,[G(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){K();const e=n;Y(e.$$.fragment,1,0,()=>{Z(e,1)}),M()}a?(n=new a(c()),W(n.$$.fragment),z(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(e){s||(n&&z(n.$$.fragment,e),s=!0)},o(e){n&&Y(n.$$.fragment,e),s=!1},d(e){e&&d(r),n&&Z(n,e)}}}function ve(e){let t,n;return t=new ge({props:{error:e[0],status:e[1]}}),{c(){W(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function ye(e){let t,n,r,s;const o=[ve,$e],a=[];function c(e,t){return e[0]?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=v()},l(e){n.l(e),r=v()},m(e,n){a[t].m(e,n),p(e,r,n),s=!0},p(e,s){let l=t;t=c(e),t===l?a[t].p(e,s):(K(),Y(a[l],1,1,()=>{a[l]=null}),M(),n=a[t],n||(n=a[t]=o[t](e),n.c()),z(n,1),n.m(r.parentNode,r))},i(e){s||(z(n),s=!0)},o(e){Y(n),s=!1},d(e){a[t].d(e),e&&d(r)}}}function _e(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[ye]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new pe({props:o}),{c(){W(n.$$.fragment)},l(e){X(n.$$.fragment,e)},m(e,t){Q(n,e,t),r=!0},p(e,[t]){const r=12&t?F(s,[4&t&&{segment:e[2][0]},8&t&&G(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){Y(n.$$.fragment,e),r=!1},d(e){Z(n,e)}}}function be(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:a}=t,{level0:c}=t,{level1:l=null}=t,{notify:i}=t;var u,f,p;return u=i,j().$$.after_update.push(u),f=oe,p=r,j().$$.context.set(f,p),e.$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,c=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,i=e.notify)},[s,o,a,c,l,r,i]}class Ee extends ne{constructor(e){super(),te(this,e,be,_e,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const xe=[],Se=[{js:()=>import("./index.93321ba0.js"),css:["client.98c5a11e.css"]},{js:()=>import("./index.de764804.js"),css:["client.98c5a11e.css","IoLogoFacebook.7660a512.css"]},{js:()=>import("./psykopatur.f203780f.js"),css:["client.98c5a11e.css","IoLogoFacebook.7660a512.css"]},{js:()=>import("./psing.63fca7f9.js"),css:["client.98c5a11e.css","IoLogoFacebook.7660a512.css"]},{js:()=>import("./pr.af180233.js"),css:["client.98c5a11e.css","IoLogoFacebook.7660a512.css"]},{js:()=>import("./andre.82bd910f.js"),css:["andre.82bd910f.css","client.98c5a11e.css"]},{js:()=>import("./om.2ab0b9c8.js"),css:["om.2ab0b9c8.css","client.98c5a11e.css","IoLogoFacebook.7660a512.css"]}],we=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/grupper\/?$/,parts:[{i:1}]},{pattern:/^\/grupper\/psykopatur\/?$/,parts:[null,{i:2}]},{pattern:/^\/grupper\/psing\/?$/,parts:[null,{i:3}]},{pattern:/^\/grupper\/pr\/?$/,parts:[null,{i:4}]},{pattern:/^\/andre\/?$/,parts:[{i:5}]},{pattern:/^\/om\/?$/,parts:[{i:6}]}];const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,Pe,Re,je=!1,Ce=[],Ne="{}";const Oe={page:function(e){const t=se(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:se(null),session:se(Ae&&Ae.session)};let qe,ke;Oe.session.subscribe(async e=>{if(qe=e,!je)return;ke=!0;const t=Ve(new URL(location.href)),n=Pe={},{redirect:r,props:s,branch:o}=await Ye(t);n===Pe&&await ze(r,o,s,t.page)});let Ue,De=null;let Ie,He=1;const Te="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},Be={};function Je(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function Ve(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ae.baseUrl))return null;let t=e.pathname.slice(Ae.baseUrl.length);if(""===t&&(t="/"),!xe.some(e=>e.test(t)))for(let n=0;n<we.length;n+=1){const r=we[n],s=r.pattern.exec(t);if(s){const n=Je(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function Ke(){return{x:pageXOffset,y:pageYOffset}}async function Me(e,t,n,r){if(t)Ie=t;else{const e=Ke();Be[Ie]=e,t=Ie=++He,Be[Ie]=n?e:{x:0,y:0}}Ie=t,Le&&Oe.preloading.set(!0);const s=De&&De.href===e.href?De.promise:Ye(e);De=null;const o=Pe={},{redirect:a,props:c,branch:l}=await s;if(o===Pe&&(await ze(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=Be[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}Be[Ie]=e,e&&scrollTo(e.x,e.y)}}async function ze(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=Ve(new URL(e,document.baseURI));return n?(Te[t.replaceState?"replaceState":"pushState"]({id:Ie},"",e),Me(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Oe.page.set(r),Oe.preloading.set(!1),Le)Le.$set(n);else{n.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},n.level0={props:await Re},n.notify=Oe.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ge(e.nextSibling);Ge(e),Ge(t)}Le=new Ee({target:Ue,props:n,hydrate:!0})}Ce=t,Ne=JSON.stringify(r.query),je=!0,ke=!1}async function Ye(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;Re||(Re=Ae.preloaded[0]||ae.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qe));let l=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==Ne)return!0;const s=Ce[e];return!!s&&(t!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!ke&&!u&&Ce[c]&&Ce[c].part===t.i)return Ce[c];u=!1;const{default:d,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Fe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Se[t.i]);let m;return m=je||!Ae.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},qe):{}:Ae.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Fe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function Ge(e){e.parentNode.removeChild(e)}function We(e){const t=Ve(new URL(e,document.baseURI));if(t)return De&&e===De.href||function(e,t){De={href:e,promise:t}}(e,Ye(t)),De.promise}let Xe;function Qe(e){clearTimeout(Xe),Xe=setTimeout(()=>{Ze(e)},20)}function Ze(e){const t=tt(e.target);t&&"prefetch"===t.rel&&We(t.href)}function et(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=tt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ve(s);if(o){Me(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Te.pushState({id:Ie},"",s.href)}}function tt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function nt(e){if(Be[Ie]=Ke(),e.state){const t=Ve(new URL(location.href));t?Me(t,e.state.id):location.href=location.href}else He=He+1,function(e){Ie=e}(He),Te.replaceState({id:Ie},"",location.href)}var rt;rt={target:document.querySelector("#sapper")},"scrollRestoration"in Te&&(Te.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Te.scrollRestoration="auto"}),addEventListener("load",()=>{Te.scrollRestoration="manual"}),function(e){Ue=e}(rt.target),addEventListener("click",et),addEventListener("popstate",nt),addEventListener("touchstart",Ze),addEventListener("mousemove",Qe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Te.replaceState({id:He},"",t);const n=new URL(location.href);if(Ae.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Ae;Re||(Re=o&&o[0]),ze(null,[],{error:c,status:a,session:s,level0:{props:Re},level1:{props:{status:a,error:c},component:ge},segments:o},{host:t,path:n,query:Je(r),params:{}})}();const r=Ve(n);return r?Me(r,He,!0,e):void 0});export{Q as A,F as B,G as C,Z as D,u as E,ne as S,$ as a,m as b,E as c,b as d,h as e,x as f,d as g,S as h,te as i,_ as j,f as k,p as l,y as m,e as n,w as o,c as p,L as q,v as r,a as s,g as t,i as u,z as v,Y as w,t as x,W as y,X as z};