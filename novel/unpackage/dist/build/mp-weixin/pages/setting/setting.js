(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"0d33":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{backgroudColor:["#E6DFBD","#4EEE94","#FFF0F5","#40E0D0","#EED8AE"],fontSize:40,activeColor:0}},methods:{changeFontSize:function(e){this.fontSize+=e,this.fontSize<=28||this.fontSize>=70?this.fontSize-=e:(console.log(this.$refs.fontSize),this.$refs.fontSize.style.fontSize=this.fontSize/2+"px",t.setStorage({key:"fontSize",data:this.fontSize}))},colorActive:function(t){return this.activeColor===t?"":"active"},changeDayNight:function(){},changebackground:function(e){this.activeColor=e,t.setStorage({key:"backgroundColor",data:this.backgroudColor[e]})}},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.$nextTick((function(){this.$refs.setting.$el.style.height=t.screenHeight+"px"}))}}),t.getStorage({key:"fontSize",success:function(t){e.fontSize=parseInt(t.data),e.$nextTick((function(){this.$refs.fontSize.style.fontSize=this.fontSize/2+"px"}))},fail:function(){t.setStorage({key:"fontSize",data:"40"})}}),t.getStorage({key:"backgroundColor",success:function(t){for(var n=0;n<e.backgroudColor.length;n++)if(e.backgroudColor[n]===t.data){e.activeColor=n;break}},fail:function(){t.setStorage({key:"backgroundColor",data:e.backgroudColor[0]})}})}};e.default=n}).call(this,n("543d")["default"])},"10bf":function(t,e,n){"use strict";var o=n("80fd"),i=n.n(o);i.a},"30e9":function(t,e,n){"use strict";n.r(e);var o=n("0d33"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},6583:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"75cd":function(t,e,n){"use strict";n.r(e);var o=n("6583"),i=n("30e9");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("10bf");var c,r=n("f0c5"),f=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=f.exports},"80fd":function(t,e,n){},"8f33":function(t,e,n){"use strict";(function(t){n("b9b0");o(n("66fd"));var e=o(n("75cd"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["8f33","common/runtime","common/vendor"]]]);