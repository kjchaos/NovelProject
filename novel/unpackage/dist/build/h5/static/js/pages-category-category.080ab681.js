(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"1f03":function(e,t,i){"use strict";i.r(t);var s=i("f301"),a=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=a.a},"2d5b":function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",[i("div",{staticClass:"article"},[i("s-tabs",{staticClass:"navFixed",attrs:{"slot-title":!0,"nav-per-view":5,lineHeight:7,lineScale:.2,lineColor:"#FFDE00",customClass:e.customClass},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeNav.apply(void 0,arguments)}},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.tabList,(function(t){return i("s-tab",{key:t},[e._v(e._s(t))])})),1)],1),i("v-uni-view",{staticClass:"nav-blank"})],1),i("v-uni-view",{staticClass:"win-swiper"},[i("v-uni-view",{ref:"swiper",class:["my-swiper",{swiperStyle1:e.swiperStyle1}]},[i("v-uni-view",{staticClass:"swiper-item"},[i("leftCategory",{ref:"item1",attrs:{listData:e.boyLeftCategoryList}})],1),i("v-uni-view",{staticClass:"swiper-item"},[i("leftCategory",{ref:"item2",attrs:{listData:e.girlLeftCategoryList}})],1)],1)],1)],1)},r=[]},"4b6f":function(e,t,i){"use strict";var s=i("99dc"),a=i.n(s);a.a},"99dc":function(e,t,i){var s=i("f23d");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("792f2528",s,!0,{sourceMap:!1,shadowMode:!1})},ce11:function(e,t,i){"use strict";i.r(t);var s=i("2d5b"),a=i("1f03");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("4b6f");var n,f=i("f0c5"),o=Object(f["a"])(a["default"],s["b"],s["c"],!1,null,"24c0f6f6",null,!1,s["a"],n);t["default"]=o.exports},f23d:function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,"uni-page-body[data-v-24c0f6f6]{margin-top:%?78?%}.test[data-v-24c0f6f6]{height:800px}[data-v-24c0f6f6] .customClass{width:%?750?%;position:fixed;background-color:#fff;top:0;z-index:888}.article[data-v-24c0f6f6]{text-align:center;background-color:#fff;position:fixed;top:0;z-index:999}.win-swiper[data-v-24c0f6f6]{position:relative}.win-swiper .my-swiper[data-v-24c0f6f6]{width:%?1500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;position:absolute;left:0;top:0;-webkit-transition:all .2s;transition:all .2s}.win-swiper .my-swiper .swiper-item[data-v-24c0f6f6]{width:%?750?%}.win-swiper .my-swiper.swiperStyle1[data-v-24c0f6f6]{left:%?-750?%}.uni-swiper-slides[data-v-24c0f6f6],\n.uni-swiper-wrapper[data-v-24c0f6f6],\n.uni-swiper-slide-frame[data-v-24c0f6f6],\n#swiperItem[data-v-24c0f6f6]{height:%?1150?%!important}",""]),e.exports=t},f301:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={components:{},data:function(){return{tabList:["男生","女生"],customClass:"customClass",swiperStyle1:!1,activeTab:0,duration:500,swiperCurrent:0,pageX:0,offsetLeft:0,offsetWidth:0,screenWidth:0,screenHeight:0,timer:null,swiper:null,boyLeftCategoryList:[{name:"东方玄幻",url:"/book",param:{categoryId:1,pageNum:1,pageSize:20},type:"listCard",tips1:"热门玄幻",tips2:"玄幻"},{name:"奇幻修真",url:"/book",param:{categoryId:4,pageNum:1,pageSize:20},type:"listCard",tips1:"热门修真",tips2:"修真"},{name:"全部分类",url:"/category",type:"",tips1:"热门分类",tips2:"分类"},{name:"热搜周榜",url:"/book",param:{categoryId:1,pageNum:2,pageSize:20},type:"listCard",tips1:"热搜周榜"},{name:"追更周榜",url:"/book",param:{categoryId:1,pageNum:3,pageSize:20},type:"listCard",tips1:"追更周榜"}],girlLeftCategoryList:[{name:"青春校园",url:"/book",param:{categoryId:6,pageNum:1,pageSize:20},type:"listCard",tips1:"热门青春校园",tips2:"推理悬念"},{name:"推理悬念",url:"/book",param:{categoryId:5,pageNum:1,pageSize:20},type:"listCard",tips1:"热门推理悬念",tips2:"推理悬念"},{name:"全部分类",url:"/category",type:"",tips1:"热门分类",tips2:"分类"},{name:"热搜周榜",url:"/book",param:{categoryId:6,pageNum:2,pageSize:20},type:"listCard",tips1:"热搜周榜"},{name:"追更周榜",url:"/book",param:{categoryId:5,pageNum:2,pageSize:20},type:"listCard",tips1:"追更周榜"}]}},methods:{changeNav:function(e){switch(this.swiperCurrent=e,e){case 0:this.swiperStyle1=!1;break;case 1:this.swiperStyle1=!0;break}},durationChange:function(e){this.duration=e.target.value},slideChange:function(e){this.activeTab=e.detail.current},slideStart:function(e){this.pageX=e.changedTouches[0].pageX,console.log(this.pageX),this.offsetLeft=this.swiper.offsetLeft,this.offsetWidth=this.swiper.offsetWidth-this.screenWidth},slideItem:function(e){var t=e.changedTouches[0].pageX-this.pageX;this.swiper.style.left=this.offsetLeft+t+"px"},slideEnd:function(e){var t=this,i=e.changedTouches[0].pageX-this.pageX;if(this.offsetLeft+i>0)this.swiper.style.left="0px";else{if(!(this.offsetLeft+i<-this.offsetWidth))return i<-120?(this.swiperCurrent++,this.activeTab=this.swiperCurrent,clearInterval(this.timer),void(this.timer=setInterval((function(e){if(console.log(e,"ss"),t.swiper.style.left=t.swiper.offsetLeft-e/30+"px",t.swiper.offsetLeft<=t.offsetLeft-e)return t.swiper.style.left=t.offsetLeft-e+"px",void clearInterval(t.timer)}),15,this.screenWidth))):i>120?(this.swiperCurrent--,this.activeTab=this.swiperCurrent,clearInterval(this.timer),void(this.timer=setInterval((function(e){if(t.swiper.style.left=t.swiper.offsetLeft+e/30+"px",t.swiper.offsetLeft>=t.offsetLeft+e)return t.swiper.style.left=t.offsetLeft+e+"px",void clearInterval(t.timer)}),15,this.screenWidth))):void(this.swiper.style.left=this.offsetLeft+"px");this.swiper.style.left=-this.offsetWidth+"px"}},selectSwiper:function(){var e=this;console.log("ss"),this.timer=setInterval((function(t){if(e.swiper.offsetLeft>t){if(e.swiper.style.left=e.swiper.offsetLeft-30+"px",e.swiper.offsetLeft<=t)return e.swiper.style.left=t+"px",void clearInterval(e.timer)}else if(e.swiper.offsetLeft<t&&(e.swiper.style.left=e.swiper.offsetLeft+30+"px",e.swiper.offsetLeft>=t))return e.swiper.style.left=t+"px",void clearInterval(e.timer)}),15,-this.swiperCurrent*this.screenWidth)}},onReady:function(){this.screenWidth=uni.getSystemInfoSync().screenWidth,this.screenHeight=uni.getSystemInfoSync().windowHeight-78,console.log(this.screenHeight)},mounted:function(){var e=this;this.$nextTick((function(){e.swiper=e.$refs.swiper.$el,e.swiper.style.height=e.screenHeight}))}};t.default=s}}]);