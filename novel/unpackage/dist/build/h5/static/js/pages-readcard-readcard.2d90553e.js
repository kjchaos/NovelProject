(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-readcard-readcard"],{"120b":function(t,e,a){var o=a("f24b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("642de476",o,!0,{sourceMap:!1,shadowMode:!1})},1748:function(t,e,a){"use strict";var o=a("120b"),i=a.n(o);i.a},"2cdb":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("7f90")),n={data:function(){return{editStatus:!0,bookShelfData:[]}},methods:{bookStatus:function(t){switch(t){case 0:return"已完结";case 1:return"待更新";case 2:return"停更"}},editHandle:function(){this.editStatus=!1,console.log(this.editStatus)},successHandle:function(){this.editStatus=!0;for(var t=[],e=0;e<this.bookShelfData.length;e++)!0===this.bookShelfData[e].checkBox&&(console.log(e),t.push(this.bookShelfData[e].readCardId));this.delBookShelf(t)},checkBoxHandle:function(t){console.log(t),this.bookShelfData[t].checkBox=!this.bookShelfData[t].checkBox},reqBookShelf:function(){var t=this,e="";uni.getStorage({key:"userId",success:function(t){e=t.data}}),i.default.get("/readcard",{userId:e},(function(e){console.log(e.data),t.bookShelfData=e.data}))},delBookShelf:function(t){var e=this,a="",o="";uni.getStorage({key:"userId",success:function(t){a=t.data}}),uni.getStorage({key:"token",success:function(t){o=t.data}}),i.default.post("/readcard/delete",{userId:a,token:o,id:t},(function(t){t&&e.reqBookShelf()}))}},onLoad:function(){},onShow:function(){uni.getStorage({key:"token",fail:function(t){uni.navigateTo({url:"/pages/login/login"})}}),this.reqBookShelf()}};e.default=n},"48dc":function(t,e,a){"use strict";a.r(e);var o=a("2cdb"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=i.a},"4e49":function(t,e,a){"use strict";a.r(e);var o=a("b838"),i=a("48dc");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("1748");var s,c=a("f0c5"),d=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"275b7f6e",null,!1,o["a"],s);e["default"]=d.exports},b838:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"edit-nav"},[a("v-uni-view",[t.editStatus?a("v-uni-button",{staticClass:"btn-edit",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editHandle.apply(void 0,arguments)}}},[t._v("编辑")]):a("v-uni-button",{staticClass:"btn-success",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.successHandle.apply(void 0,arguments)}}},[t._v("完成")])],1)],1),t.bookShelfData.length>0?a("v-uni-view",{staticClass:"bookShelf"},[a("v-uni-checkbox-group",t._l(t.bookShelfData,(function(e,o){return a("v-uni-view",{key:e.readCardId,staticClass:"book"},[a("v-uni-navigator",{staticClass:"e-navigator",attrs:{url:"/pages/book/book?id="+e.bookId}},[a("v-uni-image",{staticClass:"img",attrs:{src:e.imgSrc}}),a("v-uni-view",{staticClass:"info"},[a("span",{staticClass:"name"},[t._v(t._s(e.name))]),a("span",{staticClass:"author"},[t._v(t._s(e.author))]),a("span",{staticClass:"status"},[t._v(t._s(t.bookStatus(e.status)))])])],1),t.editStatus?t._e():a("v-uni-view",{staticClass:"del-checkbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkBoxHandle(o)}}},[a("v-uni-checkbox",{staticClass:"del-btn",attrs:{checked:e.checkBox}})],1)],1)})),1)],1):a("v-uni-view",[t._v("暂无数据，请去阅读吧")])],1)},n=[]},f24b:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-275b7f6e]{background-color:#fff}.edit-nav[data-v-275b7f6e]{margin:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:fixed;top:%?0?%;right:%?20?%;z-index:1000}.bookShelf[data-v-275b7f6e]{padding:%?20?% %?30?%}.bookShelf .book[data-v-275b7f6e]{position:relative}.bookShelf .book .del-checkbox[data-v-275b7f6e]{width:%?750?%;height:100%;position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:56}.bookShelf .book .del-checkbox .del-btn[data-v-275b7f6e]{margin-right:%?100?%}.bookShelf .book .e-navigator[data-v-275b7f6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border-bottom:1px solid #f5f5f5;padding:%?30?% 0}.bookShelf .book .e-navigator .img[data-v-275b7f6e]{width:%?147?%;height:%?200?%;margin-right:%?20?%;border-radius:%?6?%}.bookShelf .book .e-navigator span[data-v-275b7f6e]{display:block;letter-spacing:%?1?%}.bookShelf .book .e-navigator .name[data-v-275b7f6e]{font-size:%?42?%}.bookShelf .book .e-navigator .author[data-v-275b7f6e]{font-size:%?27?%;color:grey;margin-top:%?20?%}.bookShelf .book .e-navigator .status[data-v-275b7f6e]{font-size:%?30?%;margin-top:%?50?%}body.?%PAGE?%[data-v-275b7f6e]{background-color:#fff}",""]),t.exports=e}}]);