(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{80640:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup/[code]",function(){return n(61402)}])},72657:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(9008)),i=n.n(o);t.Z=function(e){var t=e.title,n=void 0===t?"Elements":t,o=e.description,a=void 0===o?"Renewable Energy for a better future.":o,s=e.author,c=e.image,u=void 0===c?"https://decensored.app/social/shareimage.webp":c;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:a}),s&&(0,r.jsx)("meta",{name:"author",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:n,name:"title"}),(0,r.jsx)("meta",{property:"og:description",content:a,name:"description"}),(0,r.jsx)("meta",{property:"og:image",content:u,name:"image"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:a}),(0,r.jsx)("meta",{property:"twitter:image",content:u}),(0,r.jsx)("link",{rel:"icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}},61402:function(e,t,n){"use strict";n.r(t);var r=n(34051),o=n.n(r),i=n(85893),a=n(67294),s=n(11163),c=n(30908),u=n(58529),l=n(44369),p=n(19600),f=n(72657);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,s,"next",e)}function s(e){d(i,r,o,a,s,"throw",e)}a(void 0)}))}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,s.useRouter)(),t=e.query.code,n=x(a.useState("Received your Key"),2),r=n[0],m=n[1],d=x(a.useState("This may take a few seconds, please dont close this page"),2),g=d[0],y=d[1],v=x(a.useState(!0),2),j=v[0],w=v[1],b=(0,u.ZP)((function(e){return{isSignedUp:e.isSignedUp,setIsSignedUp:e.setIsSignedUp,userName:e.userName,setUserName:e.setUserName,setUserId:e.setUserId,contract:e.contract}})),k=b.setIsSignedUp,N=b.setUserName,S=b.setUserId,U=b.contract;return a.useEffect((function(){function n(){return(n=h(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,(0,l.wR)(U,t.toString());case 3:(r=n.sent).success?(k(!0),N(r.username),S(parseInt(r.userId,10)),m("Hurrraaay!!"),y("You will be redirected soon.."),w(!1),e.push("/spaces")):(m("".concat(r.error)),w(!1));case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}U&&t&&function(){n.apply(this,arguments)}()})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{}),(0,i.jsxs)("div",{className:p.o.loadingWrapper,children:[(0,i.jsx)("img",{alt:"Decensored Logo",src:"/logo/logotype.svg",className:"fixed top-10 hidden xs:block",width:270}),j&&(0,i.jsx)(c.Z,{icon:"faSpinner",className:"ml-2 animate-spin text-5xl text-highlight-800"}),!j&&(0,i.jsx)(c.Z,{icon:"faCheck",className:"ml-2 text-5xl text-green-600"}),(0,i.jsx)("h2",{className:"mt-3 text-center text-2xl font-semibold text-highlight-800",children:r}),(0,i.jsx)("p",{className:"w-1/3 pt-2 text-center",children:g})]})]})}},9008:function(e,t,n){e.exports=n(83121)}},function(e){e.O(0,[774,888,179],(function(){return t=80640,e(e.s=t);var t}));var t=e.O();_N_E=t}]);