import{S as s,i as t,s as e,b as l,t as a,c as n,d as c,f as o,g as i,l as r,k as u,o as $,p as h,r as p,j as v,u as f,v as x,w as d,x as m,y as w,z as g,A as B,B as E,C as H,D as y,E as V}from"./client.98c5a11e.js";function j(s){let t,e;return{c(){t=l("title"),e=a(s[0])},l(l){t=n(l,"title",{},1);var a=c(t);e=o(a,s[0]),a.forEach(i)},m(s,l){r(s,t,l),u(t,e)},p(s,t){1&t&&$(e,s[0])},d(s){s&&i(t)}}}function z(s){let t,e,a,o=s[0]&&j(s);const $=s[3].default,m=h($,s,s[2],null);return{c(){t=l("svg"),o&&o.c(),e=p(),m&&m.c(),this.h()},l(s){t=n(s,"svg",{xmlns:!0,viewBox:!0,class:!0},1);var l=c(t);o&&o.l(l),e=p(),m&&m.l(l),l.forEach(i),this.h()},h(){v(t,"xmlns","http://www.w3.org/2000/svg"),v(t,"viewBox",s[1]),v(t,"class","svelte-c8tyih")},m(s,l){r(s,t,l),o&&o.m(t,null),u(t,e),m&&m.m(t,null),a=!0},p(s,[l]){s[0]?o?o.p(s,l):(o=j(s),o.c(),o.m(t,e)):o&&(o.d(1),o=null),m&&m.p&&4&l&&f(m,$,s,s[2],l,null,null),(!a||2&l)&&v(t,"viewBox",s[1])},i(s){a||(x(m,s),a=!0)},o(s){d(m,s),a=!1},d(s){s&&i(t),o&&o.d(),m&&m.d(s)}}}function C(s,t,e){let{title:l=null}=t,{viewBox:a}=t,{$$slots:n={},$$scope:c}=t;return s.$set=s=>{"title"in s&&e(0,l=s.title),"viewBox"in s&&e(1,a=s.viewBox),"$$scope"in s&&e(2,c=s.$$scope)},[l,a,c,n]}class b extends s{constructor(s){super(),t(this,s,C,z,e,{title:0,viewBox:1})}}function k(s){let t;return{c(){t=l("path"),this.h()},l(s){t=n(s,"path",{d:!0},1),c(t).forEach(i),this.h()},h(){v(t,"d","M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z")},m(s,e){r(s,t,e)},d(s){s&&i(t)}}}function A(s){let t,e;const l=[{viewBox:"0 0 512 512"},s[0]];let a={$$slots:{default:[k]},$$scope:{ctx:s}};for(let s=0;s<l.length;s+=1)a=m(a,l[s]);return t=new b({props:a}),{c(){w(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,l){B(t,s,l),e=!0},p(s,[e]){const a=1&e?E(l,[l[0],H(s[0])]):{};2&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){e||(x(t.$$.fragment,s),e=!0)},o(s){d(t.$$.fragment,s),e=!1},d(s){y(t,s)}}}function D(s,t,e){return s.$set=s=>{e(0,t=m(m({},t),V(s)))},[t=V(t)]}class F extends s{constructor(s){super(),t(this,s,D,A,e,{})}}export{F,b as I};