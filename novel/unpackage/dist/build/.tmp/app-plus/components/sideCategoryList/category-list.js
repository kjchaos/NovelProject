(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sideCategoryList/category-list"],{"054b":function(t,e,n){"use strict";n.r(e);var i=n("bb43"),o=n("868e");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("201b");var r=n("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"ddfb091a",null);e["default"]=a.exports},"201b":function(t,e,n){"use strict";var i=n("ed67"),o=n.n(i);o.a},2310:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/sideCategoryList/index-list").then(n.bind(null,"27f5"))},o=function(){return n.e("components/sideCategoryList/index-anchor").then(n.bind(null,"1941"))},c={name:"category",data:function(){return{scrollTop:0,scrollLeftTop:0,scrollRightTop:0,scrollHeight:0,activeStyle:{color:this.activeTextColor,backgroundColor:this.activeBackgroundColor},activeIndex:-1,sideBarAnchorsRect:[]}},props:{height:{type:Number,default:0},sticky:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},zIndex:{type:Number,default:965},defaultActive:{type:Number,default:0},categoryList:{type:Array,default:function(){return null}},activeTextColor:{type:String,default:"#2979ff"},activeBackgroundColor:{type:String,default:"#eee"},label:{type:String,default:"name"},imgSrc:{type:String,default:"logo"},categoryMainClick:{}},computed:{indexList:function(){return this.categoryList.map(function(t){return t.name})},stickyOffsetTop:function(){var t=this.offsetTop||0;return t}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},scrollRight:function(t){this.scrollRightTop=t.detail.scrollTop},handleClickCate:function(t,e){this.$emit("categoryMainClick",t),this.activeIndex=e,this.$refs.indexListRef.scrollToAnchor(e)},handleClickSub:function(t){this.$emit("categorySubClick",t)},handleChangeScrollTop:function(t){this.scrollTop=t},handleActiveIndexChange:function(t){this.activeIndex!=t&&(this.activeIndex=t)},setSideBarAnchorsRect:function(){var t=this;this.$getRect(".nav-left-item",!0).then(function(e){t.sideBarAnchorsRect=e.map(function(t){return{height:t.height,top:t.top}})})},scrollToLeftAnchor:function(t){var e=this.height,n=e/2,i=0;i=this.offsetTop;var o=this.sideBarAnchorsRect[t]&&this.sideBarAnchorsRect[t].top-i;this.scrollLeftTop=o>n?o-n:0}},mounted:function(){var e=this;this.activeIndex=this.defaultActive,t.getSystemInfo({success:function(t){e.height=e.height||t.screenHeight}}),this.setSideBarAnchorsRect()},watch:{activeIndex:function(t,e){t!=e&&this.scrollToLeftAnchor(t)}},components:{IndexAnchor:o,IndexListComponent:i}};e.default=c}).call(this,n("6e42")["default"])},"868e":function(t,e,n){"use strict";n.r(e);var i=n("2310"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a},bb43:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,{right:"auto",left:"auto"});t.$mp.data=Object.assign({},{$root:{a0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},ed67:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sideCategoryList/category-list-create-component',
    {
        'components/sideCategoryList/category-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("054b"))
        })
    },
    [['components/sideCategoryList/category-list-create-component']]
]);                