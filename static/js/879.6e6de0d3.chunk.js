"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{2639:function(n,e,t){t.d(e,{Z:function(){return o}});var r="Loader_gooey__33+Wh",a="Loader_dot__7Nm3P",c="Loader_dots__0UTNN",i=t(184),o=function(){return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("span",{className:a}),(0,i.jsxs)("div",{className:c,children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})]})}},4879:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r=t(9439),a=t(1087),c=t(8410),i=t(2715),o=t(184),s=[{href:"cast",text:" Cast"},{href:"reviews",text:"Reviews"}],l=function(){return(0,o.jsxs)(c.W,{maxW:"container.lg",children:[(0,o.jsx)(i.x,{bgGradient:"linear(to-br, brand.100, brand.200)",bgClip:"text",fontSize:["18","26","32"],fontWeight:"extrabold",marginBottom:"10px",marginTop:"10px",children:"Additional information"}),s.map((function(n){var e=n.text,t=n.href;return(0,o.jsx)(a.OL,{to:t,style:function(n){return{color:n.isActive?"#a497b4":"#7b2e8f"}},children:(0,o.jsx)(i.x,{fontSize:[16,23,26],fontWeight:[400,null,600],letterSpacing:[1.1,null,1.3],children:e})},t)}))]})},u=t(2791),d=t(7689),p=t(8183),f=t(9055),h=t(5090),x=t(6640),m=t(56),v=t(9696),g=t(824),b=t(556),j=function(n){var e=n.movie;return(0,o.jsx)(o.Fragment,{children:0!==e.length&&(0,o.jsxs)(c.W,{maxW:"container.lg",children:[(0,o.jsx)(f.z,{variant:"ghost",color:"brand.200",fontSize:[15,20,20],type:"button",mb:"2px",_hover:{shadow:"1px 1px 15px 1px ",bg:"#FFE4C4",color:"brand.100",border:"1px solid brand.100"},onClick:function(){window.history.back()},children:"Go back"}),(0,o.jsxs)(h.Z,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",mt:2,children:[e.poster_path&&(0,o.jsx)(x.E,{objectFit:"cover",maxW:{base:"100%",sm:"250px"},src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),(0,o.jsx)(m.K,{children:(0,o.jsxs)(v.e,{children:[(0,o.jsx)(i.x,{bgGradient:"linear(to-br, brand.100, brand.200)",bgClip:"text",fontSize:["18","26","32"],fontWeight:"extrabold",children:e.title}),(0,o.jsxs)(i.x,{py:"2",children:["User Score: ",10*Math.round(e.vote_average),"%"]}),(0,o.jsx)(i.x,{bgGradient:"linear(to-br, brand.100, brand.200)",bgClip:"text",fontSize:["18","26","32"],fontWeight:"extrabold",children:"Overview:"}),(0,o.jsx)(i.x,{py:"2",children:e.overview}),(0,o.jsxs)(g.xu,{children:[(0,o.jsxs)(i.x,{bgGradient:"linear(to-br, brand.100, brand.200)",bgClip:"text",fontSize:["18","26","32"],fontWeight:"extrabold",children:["Genres:"," "]}),(0,o.jsx)(b.M,{columns:[1,2,4,4],spacing:[4,null,6],py:"4",children:e.genres&&e.genres.map((function(n){return(0,o.jsx)(m.K,{children:(0,o.jsx)(i.x,{size:"ls",children:n.name})},n.id)}))})]})]})})]})]})})},Z=t(2639),_=function(){var n=(0,d.UO)().movieId,e=(0,u.useState)({}),t=(0,r.Z)(e,2),a=t[0],c=t[1];return console.log(a),(0,u.useEffect)((function(){(0,p.dR)(n).then(c).catch((function(n){return console.log(n)}))}),[n]),(0,o.jsxs)(o.Fragment,{children:[a&&(0,o.jsx)(j,{movie:a}),(0,o.jsx)(l,{}),(0,o.jsx)(u.Suspense,{fallback:(0,o.jsx)(Z.Z,{}),children:(0,o.jsx)(d.j3,{})})]})}},8183:function(n,e,t){t.d(e,{IQ:function(){return d},JS:function(){return l},Jh:function(){return p},dR:function(){return u},xL:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243),o="https://api.themoviedb.org/3/",s="de618762d41dca44888c41e4f72c3f8e",l=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"/trending/movie/week?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o,"search/movie"),{params:{api_key:s,query:e}}).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9055:function(n,e,t){t.d(e,{z:function(){return w}});var r=t(5987),a=t(1413),c=t(9439),i=t(2791);var o=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),s=(0,c.Z)(o,2),l=(s[0],s[1]),u=t(1665),d=t(6992),p=t(184),f=["children","className"];function h(n){var e=n.children,t=n.className,c=(0,r.Z)(n,f),o=(0,i.isValidElement)(e)?(0,i.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,s=(0,d.cx)("chakra-button__icon",t);return(0,p.jsx)(u.m.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},c),{},{className:s,children:o}))}h.displayName="ButtonIcon";var x=t(4942),m=t(2577),v=["label","placement","spacing","children","className","__css"];function g(n){var e=n.label,t=n.placement,c=n.spacing,o=void 0===c?"0.5rem":c,s=n.children,l=void 0===s?(0,p.jsx)(m.$,{color:"currentColor",width:"1em",height:"1em"}):s,f=n.className,h=n.__css,g=(0,r.Z)(n,v),b=(0,d.cx)("chakra-button__spinner",f),j="start"===t?"marginEnd":"marginStart",Z=(0,i.useMemo)((function(){var n;return(0,a.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,x.Z)(n,j,e?o:0),(0,x.Z)(n,"fontSize","1em"),(0,x.Z)(n,"lineHeight","normal"),n),h)}),[h,e,j,o]);return(0,p.jsx)(u.m.div,(0,a.Z)((0,a.Z)({className:b},g),{},{__css:Z,children:l}))}g.displayName="ButtonSpinner";var b=t(4591),j=t(5597),Z=t(2481),_=t(2996),y=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],w=(0,j.G)((function(n,e){var t=l(),o=(0,Z.mq)("Button",(0,a.Z)((0,a.Z)({},t),n)),s=(0,_.Lr)(n),f=s.isDisabled,h=void 0===f?null==t?void 0:t.isDisabled:f,x=s.isLoading,m=s.isActive,v=s.children,j=s.leftIcon,w=s.rightIcon,S=s.loadingText,N=s.iconSpacing,C=void 0===N?"0.5rem":N,I=s.type,W=s.spinner,z=s.spinnerPlacement,B=void 0===z?"start":z,E=s.className,G=s.as,L=(0,r.Z)(s,y),q=(0,i.useMemo)((function(){var n=(0,a.Z)((0,a.Z)({},null==o?void 0:o._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o),!!t&&{_focus:n})}),[o,t]),A=function(n){var e=(0,i.useState)(!n),t=(0,c.Z)(e,2),r=t[0],a=t[1];return{ref:(0,i.useCallback)((function(n){n&&a("BUTTON"===n.tagName)}),[]),type:r?"button":void 0}}(G),U=A.ref,F=A.type,T={rightIcon:w,leftIcon:j,iconSpacing:C,children:v};return(0,p.jsxs)(u.m.button,(0,a.Z)((0,a.Z)({ref:(0,b.qq)(e,U),as:G,type:null!=I?I:F,"data-active":(0,d.PB)(m),"data-loading":(0,d.PB)(x),__css:q,className:(0,d.cx)("chakra-button",E)},L),{},{disabled:h||x,children:[x&&"start"===B&&(0,p.jsx)(g,{className:"chakra-button__spinner--start",label:S,placement:"start",spacing:C,children:W}),x?S||(0,p.jsx)(u.m.span,{opacity:0,children:(0,p.jsx)(k,(0,a.Z)({},T))}):(0,p.jsx)(k,(0,a.Z)({},T)),x&&"end"===B&&(0,p.jsx)(g,{className:"chakra-button__spinner--end",label:S,placement:"end",spacing:C,children:W})]}))}));function k(n){var e=n.leftIcon,t=n.rightIcon,r=n.children,a=n.iconSpacing;return(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)(h,{marginEnd:a,children:e}),r,t&&(0,p.jsx)(h,{marginStart:a,children:t})]})}w.displayName="Button"},8410:function(n,e,t){t.d(e,{W:function(){return p}});var r=t(1413),a=t(5987),c=t(5597),i=t(2996),o=t(2481),s=t(1665),l=t(6992),u=t(184),d=["className","centerContent"],p=(0,c.G)((function(n,e){var t=(0,i.Lr)(n),c=t.className,p=t.centerContent,f=(0,a.Z)(t,d),h=(0,o.mq)("Container",n);return(0,u.jsx)(s.m.div,(0,r.Z)((0,r.Z)({ref:e,className:(0,l.cx)("chakra-container",c)},f),{},{__css:(0,r.Z)((0,r.Z)({},h),p&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));p.displayName="Container"},4591:function(n,e,t){t.d(e,{lq:function(){return c},qq:function(){return i}});var r=t(2791);function a(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(t){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}function c(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){e.forEach((function(e){a(e,n)}))}}function i(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,r.useMemo)((function(){return c.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=879.6e6de0d3.chunk.js.map