(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-647e20be"],{"41ae":function(t,e,n){"use strict";n.r(e);var a=n("be3b");var i={name:"Friends",components:{CommentList:n("1218").a},data:function(){return{friendList:[],bgColor:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#ee5a24","#9980fa","#8c7ae6","#f79f1f"],info:{content:"",commentEnabled:!1}}},created:function(){this.getData()},methods:{getData:function(){var t=this;Object(a.a)({url:"friends",method:"GET"}).then((function(e){200===e.code?(t.friendList=e.data.friendList,t.info=e.data.friendInfo):t.msgError(e.msg)})).catch((function(){t.msgError("请求失败")}))},addViews:function(t){!function(t){Object(a.a)({url:"friend",method:"POST",params:{nickname:t}})}(t)},randomRGB:function(){var t=Math.floor(Math.random()*this.bgColor.length);return{backgroundColor:this.bgColor[t]}}}},s=(n("f374"),n("2877")),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"ui attached segment"},[n("div",{staticClass:"ui link three doubling cards"},t._l(t.friendList,(function(e,a){return n("a",{key:a,staticClass:"card",style:t.randomRGB(),attrs:{href:e.website,target:"_blank",rel:"external nofollow noopener"},on:{click:function(n){return t.addViews(e.nickname)}}},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.avatar,onerror:"this.src = '/img/error.png'"}})]),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v(t._s(e.nickname))]),n("div",{staticClass:"description"},[t._v(t._s(e.description))])])])})),0)]),n("div",{staticClass:"ui teal attached segment"},[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"typo content",domProps:{innerHTML:t._s(t.info.content)}})]),n("div",{staticClass:"ui bottom teal attached segment threaded comments"},[t.info.commentEnabled?n("CommentList",{attrs:{page:2,blogId:null}}):n("h3",{staticClass:"ui header"},[t._v("评论已关闭")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui top attached segment",staticStyle:{"text-align":"center"}},[e("h2",{staticClass:"m-text-500"},[this._v("小伙伴们")])])}],!1,null,"38ac0e10",null);e.default=r.exports},f374:function(t,e,n){"use strict";n("ff55")},ff55:function(t,e,n){}}]);
//# sourceMappingURL=chunk-647e20be.82f35f5a.js.map