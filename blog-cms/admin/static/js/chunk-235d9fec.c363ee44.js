(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-235d9fec"],{"323e":function(t,e,r){var n,o;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(o="function"==typeof(n=function(){var t,e,r={version:"0.2.0"},n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(t,e,r){return t<e?e:t>r?r:t}function i(t){return 100*(-1+t)}r.configure=function(t){var e,r;for(e in t)void 0!==(r=t[e])&&t.hasOwnProperty(e)&&(n[e]=r);return this},r.status=null,r.set=function(t){var e=r.isStarted();t=o(t,n.minimum,1),r.status=1===t?null:t;var l=r.render(!e),c=l.querySelector(n.barSelector),u=n.speed,m=n.easing;return l.offsetWidth,a((function(e){""===n.positionUsing&&(n.positionUsing=r.getPositioningCSS()),s(c,function(t,e,r){var o;return(o="translate3d"===n.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+e+"ms "+r,o}(t,u,m)),1===t?(s(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout((function(){s(l,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){r.remove(),e()}),u)}),u)):setTimeout(e,u)})),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var t=function(){setTimeout((function(){r.status&&(r.trickle(),t())}),n.trickleSpeed)};return n.trickle&&t(),this},r.done=function(t){return t||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(t){var e=r.status;return e?("number"!=typeof t&&(t=(1-e)*o(Math.random()*e,.1,.95)),e=o(e+t,0,.994),r.set(e)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},t=0,e=0,r.promise=function(n){return n&&"resolved"!==n.state()?(0===e&&r.start(),t++,e++,n.always((function(){0==--e?(t=0,r.done()):r.set((t-e)/t)})),this):this},r.render=function(t){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=n.template;var o,a=e.querySelector(n.barSelector),l=t?"-100":i(r.status||0),u=document.querySelector(n.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),n.showSpinner||(o=e.querySelector(n.spinnerSelector))&&d(o),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(e),e},r.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(n.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var r=t.shift();r&&r(e)}return function(r){t.push(r),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function r(r){return r=r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[r]||(e[r]=function(e){var r=document.body.style;if(e in r)return e;for(var n,o=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((n=t[o]+i)in r)return n;return e}(r))}function n(t,e,n){e=r(e),t.style[e]=n}return function(t,e){var r,o,i=arguments;if(2==i.length)for(r in e)void 0!==(o=e[r])&&e.hasOwnProperty(r)&&n(t,r,o);else n(t,i[1],i[2])}}();function l(t,e){return("string"==typeof t?t:m(t)).indexOf(" "+e+" ")>=0}function c(t,e){var r=m(t),n=r+e;l(r,e)||(t.className=n.substring(1))}function u(t,e){var r,n=m(t);l(t,e)&&(r=n.replace(" "+e+" "," "),t.className=r.substring(1,r.length-1))}function m(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return r})?n.call(e,r,e,t):n)||(t.exports=o)},4020:function(t,e,r){"use strict";r("d3b7");var n=r("bc3a"),o=r.n(n),i=r("323e"),a=r.n(i),s=(r("a5d8"),r("5c96")),l=o.a.create({baseURL:"http://47.113.193.25:8090/admin/",timeout:5e3}),c=o.a.CancelToken;l.interceptors.request.use((function(t){var e=window.localStorage.getItem("user")||"{}",r=JSON.parse(e);if("{}"!==e&&"ROLE_admin"!==r.role&&"get"!==t.method)return t.cancelToken=new c((function(t){t("演示模式，不允许操作")})),t;a.a.start();var n=window.localStorage.getItem("token");return n&&(t.headers.Authorization=n),t}),(function(t){return console.info(t),Promise.reject(t)})),l.interceptors.response.use((function(t){a.a.done();var e=t.data;if(200!==e.code){var r=e.msg||"Error";return s.Message.error(r),Promise.reject(new Error(r))}return e}),(function(t){return console.info(t),s.Message.error(t.message),Promise.reject(t)})),e.a=l},"864d":function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"e",(function(){return l})),r.d(e,"h",(function(){return c})),r.d(e,"g",(function(){return u})),r.d(e,"i",(function(){return m})),r.d(e,"b",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"j",(function(){return p}));var n=r("5530"),o=r("4020");function i(t){return Object(o.a)({url:"blogs",method:"GET",params:Object(n.a)({},t)})}function a(t){return Object(o.a)({url:"blog",method:"DELETE",params:{id:t}})}function s(){return Object(o.a)({url:"categoryAndTag",method:"GET"})}function l(t){return Object(o.a)({url:"blog",method:"POST",data:Object(n.a)({},t)})}function c(t,e){return Object(o.a)({url:"blog/top",method:"PUT",params:{id:t,top:e}})}function u(t,e){return Object(o.a)({url:"blog/recommend",method:"PUT",params:{id:t,recommend:e}})}function m(t,e){return Object(o.a)({url:"blog/".concat(t,"/visibility"),method:"PUT",data:Object(n.a)({},e)})}function d(t){return Object(o.a)({url:"blog",method:"GET",params:{id:t}})}function f(t){return Object(o.a)({url:"blog",method:"PUT",data:Object(n.a)({},t)})}function p(t){return Object(o.a)({url:"upload",method:"POST",data:t,headers:{"Content-Type":"multipart/form-data"}})}},"956d":function(t,e,r){"use strict";r.r(e);r("d3b7"),r("159b");var n=r("6350"),o=r("864d"),i={name:"WriteBlog",components:{Breadcrumb:n.a},data:function(){return{categoryList:[],tagList:[],dialogVisible:!1,radio:1,form:{title:"",firstPicture:"",description:"",content:"",cate:null,tagList:[],words:null,readTime:null,views:0,appreciation:!1,recommend:!1,commentEnabled:!1,top:!1,published:!1,password:""},formRules:{title:[{required:!0,message:"请输入标题",trigger:"change"}],firstPicture:[{required:!0,message:"请输入首图链接",trigger:"change"}],cate:[{required:!0,message:"请选择分类",trigger:"change"}],tagList:[{required:!0,message:"请选择标签",trigger:"change"}],words:[{required:!0,message:"请输入文章字数",trigger:"change"}]}}},watch:{"form.words":function(t){this.form.readTime=t?Math.round(t/200):null},"form.content":function(t){this.form.words=t?this.form.content.length:null}},created:function(){this.getData(),this.$route.params.id&&this.getBlog(this.$route.params.id)},methods:{getData:function(){var t=this;Object(o.c)().then((function(e){t.categoryList=e.data.categories,t.tagList=e.data.tags}))},getBlog:function(t){var e=this;Object(o.b)(t).then((function(t){e.computeCategoryAndTag(t.data),e.form=t.data,e.radio=e.form.published?""!==e.form.password?3:1:2}))},computeCategoryAndTag:function(t){t.cate=t.category.id,t.tagList=[],t.tags.forEach((function(e){t.tagList.push(e.id)}))},submit:function(){var t=this;if(3===this.radio&&(""===this.form.password||null===this.form.password))return this.msgError("密码保护模式必须填写密码！");this.$refs.formRef.validate((function(e){if(!e)return t.dialogVisible=!1,t.msgError("请填写必要的表单项");2===t.radio?(t.form.appreciation=!1,t.form.recommend=!1,t.form.commentEnabled=!1,t.form.top=!1,t.form.published=!1):t.form.published=!0,3!==t.radio&&(t.form.password=""),t.$route.params.id?(t.form.category=null,t.form.tags=null,Object(o.f)(t.form).then((function(e){t.msgSuccess(e.msg),t.$router.push("/blog/list")}))):Object(o.e)(t.form).then((function(e){t.msgSuccess(e.msg),t.$router.push("/blog/list")}))}))},$imgAdd:function(t,e){var r=this,n=new FormData;n.append("image",e),Object(o.j)(n).then((function(e){r.$refs.mdEditor.$img2Url(t,e.msg)}))}}},a=r("2877"),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.formRules,"label-position":"top"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"文章首图URL",prop:"firstPicture"}},[r("el-input",{attrs:{placeholder:"文章首图，用于随机文章展示"},model:{value:t.form.firstPicture,callback:function(e){t.$set(t.form,"firstPicture",e)},expression:"form.firstPicture"}})],1)],1)],1),r("el-form-item",{attrs:{label:"文章描述",prop:"description"}},[r("mavon-editor",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"文章正文",prop:"content"}},[r("mavon-editor",{ref:"mdEditor",on:{imgAdd:t.$imgAdd},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"分类",prop:"cate"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择分类（输入可添加新分类）","allow-create":!0,filterable:!0},model:{value:t.form.cate,callback:function(e){t.$set(t.form,"cate",e)},expression:"form.cate"}},t._l(t.categoryList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"标签",prop:"tagList"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择标签（输入可添加新标签）","allow-create":!0,filterable:!0,multiple:!0},model:{value:t.form.tagList,callback:function(e){t.$set(t.form,"tagList",e)},expression:"form.tagList"}},t._l(t.tagList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"字数",prop:"words"}},[r("el-input",{attrs:{placeholder:"请输入文章字数（自动计算阅读时长）",type:"number"},model:{value:t.form.words,callback:function(e){t.$set(t.form,"words",e)},expression:"form.words"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"阅读时长(分钟)",prop:"readTime"}},[r("el-input",{attrs:{placeholder:"请输入阅读时长（可选）默认 Math.round(字数 / 200)",type:"number"},model:{value:t.form.readTime,callback:function(e){t.$set(t.form,"readTime",e)},expression:"form.readTime"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"浏览次数",prop:"views"}},[r("el-input",{attrs:{placeholder:"请输入文章字数（可选）默认为 0",type:"number"},model:{value:t.form.views,callback:function(e){t.$set(t.form,"views",e)},expression:"form.views"}})],1)],1)],1),r("el-form-item",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("保存")])],1)],1),r("el-dialog",{attrs:{title:"博客可见性",width:"30%",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{attrs:{"label-width":"50px"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",[r("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[r("el-radio",{attrs:{label:1}},[t._v("公开")]),r("el-radio",{attrs:{label:2}},[t._v("私密")]),r("el-radio",{attrs:{label:3}},[t._v("密码保护")])],1)],1),3===t.radio?r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),2!==t.radio?r("el-form-item",[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-switch",{attrs:{"active-text":"赞赏"},model:{value:t.form.appreciation,callback:function(e){t.$set(t.form,"appreciation",e)},expression:"form.appreciation"}})],1),r("el-col",{attrs:{span:6}},[r("el-switch",{attrs:{"active-text":"推荐"},model:{value:t.form.recommend,callback:function(e){t.$set(t.form,"recommend",e)},expression:"form.recommend"}})],1),r("el-col",{attrs:{span:6}},[r("el-switch",{attrs:{"active-text":"评论"},model:{value:t.form.commentEnabled,callback:function(e){t.$set(t.form,"commentEnabled",e)},expression:"form.commentEnabled"}})],1),r("el-col",{attrs:{span:6}},[r("el-switch",{attrs:{"active-text":"置顶"},model:{value:t.form.top,callback:function(e){t.$set(t.form,"top",e)},expression:"form.top"}})],1)],1)],1):t._e()],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")])],1)],1)],1)}),[],!1,null,"43d10772",null);e.default=s.exports},a5d8:function(t,e,r){}}]);