(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"2ef1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{myData:{coin:"0",userName:"",readTime:"0"}}},methods:{getUserName:function(){var t=this;e.getStorage({key:"userName",success:function(e){console.log(e.data),t.myData.userName=e.data},fail:function(e){t.myData.userName=""}})},exitLogin:function(){var t=this;e.removeStorage({key:"userId"}),e.removeStorage({key:"userName",success:function(e){t.getUserName()}}),e.removeStorage({key:"token"}),this.getUserName()}},onShow:function(){this.getUserName(),console.log("s")},mounted:function(){}};t.default=n}).call(this,n("543d")["default"])},6553:function(e,t,n){"use strict";(function(e){n("b9b0");a(n("66fd"));var t=a(n("f17c"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"82fa":function(e,t,n){"use strict";n.r(t);var a=n("2ef1"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=u.a},b077:function(e,t,n){},e109:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var u=function(){var e=this,t=e.$createElement;e._self._c},o=[]},e18f:function(e,t,n){"use strict";var a=n("b077"),u=n.n(a);u.a},f17c:function(e,t,n){"use strict";n.r(t);var a=n("e109"),u=n("82fa");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("e18f");var r,c=n("f0c5"),f=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"968567c2",null,!1,a["a"],r);t["default"]=f.exports}},[["6553","common/runtime","common/vendor"]]]);