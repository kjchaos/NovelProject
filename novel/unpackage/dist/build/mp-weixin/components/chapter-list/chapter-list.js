(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/chapter-list/chapter-list"],{"1d83":function(t,e,a){"use strict";a.r(e);var n=a("7f5e"),r=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a},"44de":function(t,e,a){},"5efe":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=(t._self._c,t.bookStatus());t.$mp.data=Object.assign({},{$root:{m0:a}})},c=[]},"7f5e":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{bookData:{type:Object,default:null},chapterListData:{type:Array,default:function(){return[]}},chapterShow:{type:Boolean,default:!1}},data:function(){return{scrollTop:0,orderDesc:!0,chapterDataTemp:[]}},methods:{bookStatus:function(){switch(this.bookData.status){case 0:return"连载中";case 1:return"完结";case 2:return"停更"}},shadowBoxClick:function(){t.$emit("clickShadow",{})},selectChapter:function(e){t.$emit("clickShadow",{}),t.$emit("selectChapter",{num:e})},orderChange:function(){this.orderDesc=!this.orderDesc,this.chapterDataTemp.length<=0?this.chapterDataTemp=this.chapterListData.reverse():this.chapterDataTemp=this.chapterDataTemp.reverse()}},mounted:function(){var e=this;t.getSystemInfo({success:function(t){e.$nextTick((function(){e.$refs.scrollView.$el.style.height=t.windowHeight+"px"}))}})}};e.default=a}).call(this,a("543d")["default"])},aac0:function(t,e,a){"use strict";var n=a("44de"),r=a.n(n);r.a},c887:function(t,e,a){"use strict";a.r(e);var n=a("5efe"),r=a("1d83");for(var c in r)"default"!==c&&function(t){a.d(e,t,(function(){return r[t]}))}(c);a("aac0");var o,u=a("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chapter-list/chapter-list-create-component',
    {
        'components/chapter-list/chapter-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c887"))
        })
    },
    [['components/chapter-list/chapter-list-create-component']]
]);