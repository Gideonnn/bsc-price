(this["webpackJsonpbsc-price"]=this["webpackJsonpbsc-price"]||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(14),n(2)),i=n.n(o),d=n(3),j=n(5),u=n(0);function h(){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Symbol"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Price ($)"}),Object(u.jsx)("th",{children:"Price (\u20ac)"}),Object(u.jsx)("th",{children:"Poocoin"}),Object(u.jsx)("th",{children:"Pancakeswap"})]})})}function p(e){var t=e.address;return Object(u.jsx)("a",{href:"https://poocoin.app/tokens/".concat(t),target:"_blank",rel:"noreferrer noopener",children:"Chart"})}function b(e){var t=e.address,n=e.version,r="".concat(1===n?"https://v1exchange.pancakeswap.finance":"https://exchange.pancakeswap.finance","/#/swap?outputCurrency=").concat(t,"&inputCurrency=BNB");return Object(u.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer noopener",children:["V",n]})}function l(e){var t=e.token;e.onToggleFavorite;return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.symbol}),Object(u.jsx)("td",{children:t.name}),Object(u.jsxs)("td",{children:["$ ",Number(t.price).toFixed(8)]}),Object(u.jsxs)("td",{children:["\u20ac ",(.83*t.price).toFixed(8)]}),Object(u.jsx)("td",{children:Object(u.jsx)(p,{address:t.address})}),Object(u.jsxs)("td",{children:[Object(u.jsx)(b,{address:t.address,version:1}),"\xa0-\xa0",Object(u.jsx)(b,{address:t.address,version:2})]})]},t.address)})}function x(e){var t=e.tokens,n=void 0===t?[]:t,r=e.onToggleFavorite;return Object(u.jsxs)("table",{children:[Object(u.jsx)(h,{}),n.map((function(e){return Object(u.jsx)(l,{token:e,onToggleFavorite:r},e.address)}))]})}function f(e){var t=e.updatedAt;return Object(u.jsxs)("span",{children:["Last updated: ",new Date(t).toLocaleString()]})}function O(e){var t=e.placeholder,n=void 0===t?"":t,r=e.onChange;return Object(u.jsx)("input",{type:"text",placeholder:n,onChange:function(e){return r(e.target.value)}})}var v=n(9);function g(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pancakeswap.info/api/tokens").then((function(e){return e.json()}));case 2:return t=e.sent,n=t.data,r=t.updated_at,c=Object.keys(n).map((function(e){return Object(v.a)({address:e},n[e])})),e.abrupt("return",{updatedAt:r,tokens:c});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(8),w=n.n(m);n(20);var y=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(j.a)(a,2),o=s[0],h=s[1];function p(){return(p=Object(d.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n=t.updatedAt,r=t.tokens,c(r),h(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(f,{updatedAt:o}),Object(u.jsx)(O,{placeholder:"Search",onChange:function(e){var t,r;e&&(e.startsWith("0x")&&c(n[e]||[]),c((t=e,r=n,w.a.go(t,r,{key:"name",threshold:-99}).map((function(e){return e.obj})))))}}),Object(u.jsx)(x,{tokens:n,onToggleFavorite:function(e){console.log(e)}})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),F()}},[[21,1,2]]]);
//# sourceMappingURL=main.86fc986b.chunk.js.map