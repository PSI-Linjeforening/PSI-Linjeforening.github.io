import{n as e,s as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h as f,j as h,k as m,l as d,m as g,o as $,p as v,q as y,r as E,u as _,v as S,w as b,x as w,y as j,z as P,A as R,B as L,C as A,D as x,E as C,F as O}from"./index.e7032ff7.js";const U=[];function q(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!U.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),U.push(t,s)}if(e){for(let e=0;e<U.length;e+=2)U[e][0](U[e+1]);U.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,l=e){const c=[t,l];return a.push(c),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const N={},I=()=>({});function D(t){let s,r,g,$,v,y,E,_,S,b,w,j,P,R,L,A,x,C,O,U,q;return{c(){s=n("nav"),r=n("ul"),g=n("li"),$=n("a"),v=a("hjem"),y=o(),E=n("li"),_=n("a"),S=a("om"),b=o(),w=n("li"),j=n("a"),P=a("grupper"),R=o(),L=n("li"),A=n("a"),x=a("blog"),C=o(),O=n("li"),U=n("a"),q=a("andre"),this.h()},l(e){s=l(e,"NAV",{class:!0});var t=c(s);r=l(t,"UL",{class:!0});var n=c(r);g=l(n,"LI",{class:!0});var a=c(g);$=l(a,"A",{rel:!0,href:!0,class:!0});var o=c($);v=i(o,"hjem"),o.forEach(u),a.forEach(u),y=p(n),E=l(n,"LI",{class:!0});var f=c(E);_=l(f,"A",{rel:!0,href:!0,class:!0});var h=c(_);S=i(h,"om"),h.forEach(u),f.forEach(u),b=p(n),w=l(n,"LI",{class:!0});var m=c(w);j=l(m,"A",{rel:!0,href:!0,class:!0});var d=c(j);P=i(d,"grupper"),d.forEach(u),m.forEach(u),R=p(n),L=l(n,"LI",{class:!0});var N=c(L);A=l(N,"A",{rel:!0,href:!0,class:!0});var I=c(A);x=i(I,"blog"),I.forEach(u),N.forEach(u),C=p(n),O=l(n,"LI",{class:!0});var D=c(O);U=l(D,"A",{rel:!0,href:!0,class:!0});var k=c(U);q=i(k,"andre"),k.forEach(u),D.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){f($,"rel","prefetch"),f($,"href","."),f($,"class","svelte-188jy3w"),h($,"selected",void 0===t[0]),f(g,"class","svelte-188jy3w"),f(_,"rel","prefetch"),f(_,"href","om"),f(_,"class","svelte-188jy3w"),h(_,"selected","om"===t[0]),f(E,"class","svelte-188jy3w"),f(j,"rel","prefetch"),f(j,"href","grupper"),f(j,"class","svelte-188jy3w"),h(j,"selected","grupper"===t[0]),f(w,"class","svelte-188jy3w"),f(A,"rel","prefetch"),f(A,"href","blog"),f(A,"class","svelte-188jy3w"),h(A,"selected","blog"===t[0]),f(L,"class","svelte-188jy3w"),f(U,"rel","prefetch"),f(U,"href","andre"),f(U,"class","svelte-188jy3w"),h(U,"selected","andre"===t[0]),f(O,"class","svelte-188jy3w"),f(r,"class","svelte-188jy3w"),f(s,"class","svelte-188jy3w")},m(e,t){m(e,s,t),d(s,r),d(r,g),d(g,$),d($,v),d(r,y),d(r,E),d(E,_),d(_,S),d(r,b),d(r,w),d(w,j),d(j,P),d(r,R),d(r,L),d(L,A),d(A,x),d(r,C),d(r,O),d(O,U),d(U,q)},p(e,[t]){1&t&&h($,"selected",void 0===e[0]),1&t&&h(_,"selected","om"===e[0]),1&t&&h(j,"selected","grupper"===e[0]),1&t&&h(A,"selected","blog"===e[0]),1&t&&h(U,"selected","andre"===e[0])},i:e,o:e,d(e){e&&u(s)}}}function k(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),[r]}class H extends s{constructor(e){super(),r(this,e,k,D,t,{segment:0})}}function B(e){let t,s,r;const a=new H({props:{segment:e[0]}}),i=e[2].default,h=g(i,e,e[1],null);return{c(){$(a.$$.fragment),t=o(),s=n("main"),h&&h.c(),this.h()},l(e){v(a.$$.fragment,e),t=p(e),s=l(e,"MAIN",{class:!0});var r=c(s);h&&h.l(r),r.forEach(u),this.h()},h(){f(s,"class","svelte-1uhnsl8")},m(e,n){y(a,e,n),m(e,t,n),m(e,s,n),h&&h.m(s,null),r=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),a.$set(s),h&&h.p&&2&t&&h.p(E(i,e,e[1],null),_(i,e[1],t,null))},i(e){r||(S(a.$$.fragment,e),S(h,e),r=!0)},o(e){b(a.$$.fragment,e),b(h,e),r=!1},d(e){w(a,e),e&&u(t),e&&u(s),h&&h.d(e)}}}function J(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,a=e.$$scope)}),[r,a,n]}class V extends s{constructor(e){super(),r(this,e,J,B,t,{segment:0})}}function K(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{});var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){m(e,t,r),d(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&j(s,r)},d(e){e&&u(t)}}}function T(t){let s,r,h,g,$,v,y,E,_,S=t[1].message+"";document.title=s=t[0];let b=t[2]&&t[1].stack&&K(t);return{c(){r=o(),h=n("h1"),g=a(t[0]),$=o(),v=n("p"),y=a(S),E=o(),b&&b.c(),_=P(),this.h()},l(e){r=p(e),h=l(e,"H1",{class:!0});var s=c(h);g=i(s,t[0]),s.forEach(u),$=p(e),v=l(e,"P",{class:!0});var n=c(v);y=i(n,S),n.forEach(u),E=p(e),b&&b.l(e),_=P(),this.h()},h(){f(h,"class","svelte-8od9u6"),f(v,"class","svelte-8od9u6")},m(e,t){m(e,r,t),m(e,h,t),d(h,g),m(e,$,t),m(e,v,t),d(v,y),m(e,E,t),b&&b.m(e,t),m(e,_,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&j(g,e[0]),2&t&&S!==(S=e[1].message+"")&&j(y,S),e[2]&&e[1].stack?b?b.p(e,t):((b=K(e)).c(),b.m(_.parentNode,_)):b&&(b.d(1),b=null)},i:e,o:e,d(e){e&&u(r),e&&u(h),e&&u($),e&&u(v),e&&u(E),b&&b.d(e),e&&u(_)}}}function z(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class F extends s{constructor(e){super(),r(this,e,z,T,t,{status:0,error:1})}}function G(e){let t,s;const r=[e[4].props];var n=e[4].component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=R(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&$(o.$$.fragment),t=P()},l(e){o&&v(o.$$.fragment,e),t=P()},m(e,r){o&&y(o,e,r),m(e,t,r),s=!0},p(e,s){const l=16&s?L(r,[A(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){C();const e=o;b(e.$$.fragment,1,0,()=>{w(e,1)}),O()}n?(o=new n(a()),$(o.$$.fragment),S(o.$$.fragment,1),y(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&S(o.$$.fragment,e),s=!0)},o(e){o&&b(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&w(o,e)}}}function M(e){let t;const s=new F({props:{error:e[0],status:e[1]}});return{c(){$(s.$$.fragment)},l(e){v(s.$$.fragment,e)},m(e,r){y(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(S(s.$$.fragment,e),t=!0)},o(e){b(s.$$.fragment,e),t=!1},d(e){w(s,e)}}}function W(e){let t,s,r,n;const a=[M,G],o=[];function l(e,t){return e[0]?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=P()},l(e){s.l(e),r=P()},m(e,s){o[t].m(e,s),m(e,r,s),n=!0},p(e,n){let c=t;(t=l(e))===c?o[t].p(e,n):(C(),b(o[c],1,1,()=>{o[c]=null}),O(),(s=o[t])||(s=o[t]=a[t](e)).c(),S(s,1),s.m(r.parentNode,r))},i(e){n||(S(s),n=!0)},o(e){b(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function X(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[W]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=R(r,s[e]);const n=new V({props:r});return{c(){$(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,s){y(n,e,s),t=!0},p(e,[t]){const r=12&t?L(s,[4&t&&{segment:e[2][0]},8&t&&A(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(S(n.$$.fragment,e),t=!0)},o(e){b(n.$$.fragment,e),t=!1},d(e){w(n,e)}}}function Y(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:l}=t,{level1:c=null}=t;return x(N,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,l=e.level0),"level1"in e&&s(4,c=e.level1)}),[n,a,o,l,c,r]}class Q extends s{constructor(e){super(),r(this,e,Y,X,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Z=[/^\/grupper.json$/,/^\/grupper\/([^\/]+?).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],ee=[{js:()=>import("./index.666f9bdc.js"),css:["index.666f9bdc.css"]},{js:()=>import("./index.80e370a9.js"),css:["index.80e370a9.css"]},{js:()=>import("./[slug].991e68cb.js"),css:["[slug].991e68cb.css"]},{js:()=>import("./andre.028ea563.js"),css:[]},{js:()=>import("./index.0d1a2a94.js"),css:["index.0d1a2a94.css"]},{js:()=>import("./[slug].ed6160d6.js"),css:["[slug].ed6160d6.css"]},{js:()=>import("./om.a477ac60.js"),css:[]}],te=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/grupper\/?$/,parts:[{i:1}]},{pattern:/^\/grupper\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:e(t[1])})}]},{pattern:/^\/andre\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:e(t[1])})}]},{pattern:/^\/om\/?$/,parts:[{i:6}]}])(decodeURIComponent);const se="undefined"!=typeof __SAPPER__&&__SAPPER__;let re,ne,ae,oe=!1,le=[],ce="{}";const ie={page:q({}),preloading:q(null),session:q(se&&se.session)};let ue,pe;ie.session.subscribe(async e=>{if(ue=e,!oe)return;pe=!0;const t=ye(new URL(location.href)),s=ne={},{redirect:r,props:n,branch:a}=await be(t);s===ne&&await Se(r,a,n,t.page)});let fe,he=null;let me,de=1;const ge="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},$e={};function ve(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ye(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(se.baseUrl))return null;let t=e.pathname.slice(se.baseUrl.length);if(""===t&&(t="/"),!Z.some(e=>e.test(t)))for(let s=0;s<te.length;s+=1){const r=te[s],n=r.pattern.exec(t);if(n){const s=ve(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function Ee(){return{x:pageXOffset,y:pageYOffset}}async function _e(e,t,s,r){if(t)me=t;else{const e=Ee();$e[me]=e,t=me=++de,$e[me]=s?e:{x:0,y:0}}me=t,re&&ie.preloading.set(!0);const n=he&&he.href===e.href?he.promise:be(e);he=null;const a=ne={},{redirect:o,props:l,branch:c}=await n;if(a===ne&&(await Se(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=$e[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}$e[me]=e,e&&scrollTo(e.x,e.y)}}async function Se(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ye(new URL(e,document.baseURI));return s?(ge[t.replaceState?"replaceState":"pushState"]({id:me},"",e),_e(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ie.page.set(r),ie.preloading.set(!1),re)re.$set(s);else{s.stores={page:{subscribe:ie.page.subscribe},preloading:{subscribe:ie.preloading.subscribe},session:ie.session},s.level0={props:await ae};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)je(e.nextSibling);je(e),je(t)}re=new Q({target:fe,props:s,hydrate:!0})}le=t,ce=JSON.stringify(r.query),oe=!0,pe=!1}async function be(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;ae||(ae=se.preloaded[0]||I.call(o,{host:s.host,path:s.path,query:s.query,params:{}},ue));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==ce)return!0;const n=le[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!pe&&!u&&le[l]&&le[l].part===t.i)return le[l];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(we);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ee[t.i]);let d;return d=oe||!se.preloaded[l+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ue):{}:se.preloaded[l+1],a[`level${f}`]={component:h,props:d,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function we(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function je(e){e.parentNode.removeChild(e)}function Pe(e){const t=ye(new URL(e,document.baseURI));if(t)return he&&e===he.href||function(e,t){he={href:e,promise:t}}(e,be(t)),he.promise}let Re;function Le(e){clearTimeout(Re),Re=setTimeout(()=>{Ae(e)},20)}function Ae(e){const t=Ce(e.target);t&&"prefetch"===t.rel&&Pe(t.href)}function xe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ce(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ye(n);if(a){_e(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ge.pushState({id:me},"",n.href)}}function Ce(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Oe(e){if($e[me]=Ee(),e.state){const t=ye(new URL(location.href));t?_e(t,e.state.id):location.href=location.href}else(function(e){me=e})(de=de+1),ge.replaceState({id:me},"",location.href)}!function(e){var t;"scrollRestoration"in ge&&(ge.scrollRestoration="manual"),t=e.target,fe=t,addEventListener("click",xe),addEventListener("popstate",Oe),addEventListener("touchstart",Ae),addEventListener("mousemove",Le),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ge.replaceState({id:de},"",t);const s=new URL(location.href);if(se.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:l}=se;ae||(ae=a&&a[0]),Se(null,[],{error:l,status:o,session:n,level0:{props:ae},level1:{props:{status:o,error:l},component:F},segments:a},{host:t,path:s,query:ve(r),params:{}})}();const r=ye(s);return r?_e(r,de,!0,e):void 0})}({target:document.querySelector("#sapper")});
