(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{10796:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return n(43614)}])},43614:function(r,e,n){"use strict";n.r(e);var t=n(85893),u=n(67294),a=n(11163),o=n(15638),s=n(58529),i=n(39642),c=n(19600),l=n(72657);function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function d(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,u,a=[],o=!0,s=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);o=!0);}catch(i){s=!0,u=i}finally{try{o||null==n.return||n.return()}finally{if(s)throw u}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return f(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){var r=(0,a.useRouter)().query.username,e=(0,s.ZP)((function(r){return{posts:r.posts,isSignedUp:r.isSignedUp,currentUserId:r.userId,contract:r.contract}})),n=e.posts,f=e.currentUserId,p=e.contract,h=d(u.useState([]),2),m=h[0],y=h[1];u.useEffect((function(){if((0,i.eI)(p)&&r){var e=(0,i.hs)(n,r);y(e)}}),[p,r,n,f]);var v=m.map((function(r){return 0!==r.mother_post?null:(0,t.jsx)(o.Z,{type:"feed",parent:!0,post:r},"post-".concat(r.id))}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{className:c.o.feedWrapper,children:[(0,t.jsx)("div",{className:c.o.userHeaderWrapper,children:(0,t.jsx)("div",{className:c.o.userHeaderInner,children:(0,t.jsx)("div",{className:c.o.userHeaderTitle,children:r?"@".concat(r):"#undefined"})})}),v]})]})}}},function(r){r.O(0,[240,60,774,888,179],(function(){return e=10796,r(r.s=e);var e}));var e=r.O();_N_E=e}]);