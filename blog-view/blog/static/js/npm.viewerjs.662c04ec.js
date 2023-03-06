(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.viewerjs"],{"0808":function(t,i,e){},c82c:function(t,i,e){
/*!
 * Viewer.js v1.6.2
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-08-30T02:33:40.250Z
 */
t.exports=function(){"use strict";function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(i)}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var a={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,zoom:null,zoomed:null},r="undefined"!=typeof window&&void 0!==window.document,h=r?window:{},l=!(!r||!h.document.documentElement)&&"ontouchstart"in h.document.documentElement,c=!!r&&"PointerEvent"in h,u="".concat("viewer","-active"),d="".concat("viewer","-close"),m="".concat("viewer","-fade"),v="".concat("viewer","-fixed"),g="".concat("viewer","-fullscreen"),f="".concat("viewer","-fullscreen-exit"),p="".concat("viewer","-hide"),w="".concat("viewer","-hide-md-down"),b="".concat("viewer","-hide-sm-down"),y="".concat("viewer","-hide-xs-down"),k="".concat("viewer","-in"),z="".concat("viewer","-invisible"),x="".concat("viewer","-loading"),D="".concat("viewer","-move"),T="".concat("viewer","-open"),I="".concat("viewer","-show"),E="".concat("viewer","-transition"),O=l?"touchstart":"mousedown",S=l?"touchmove":"mousemove",C=l?"touchend touchcancel":"mouseup",L=c?"pointerdown":O,R=c?"pointermove":S,A=c?"pointerup pointercancel":C,N="".concat("viewer","Action"),M=/\s\s*/,P=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function Y(t){return"string"==typeof t}var q=Number.isNaN||h.isNaN;function X(t){return"number"==typeof t&&!q(t)}function F(t){return void 0===t}function W(i){return"object"===t(i)&&null!==i}var j=Object.prototype.hasOwnProperty;function H(t){if(!W(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&j.call(e,"isPrototypeOf")}catch(t){return!1}}function B(t){return"function"==typeof t}function V(t,i){if(t&&B(i))if(Array.isArray(t)||X(t.length)){var e,n=t.length;for(e=0;e<n&&!1!==i.call(t,t[e],e,t);e+=1);}else W(t)&&Object.keys(t).forEach((function(e){i.call(t,t[e],e,t)}));return t}var U=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return W(t)&&e.length>0&&e.forEach((function(i){W(i)&&Object.keys(i).forEach((function(e){t[e]=i[e]}))})),t},K=/^(?:width|height|left|top|marginLeft|marginTop)$/;function Z(t,i){var e=t.style;V(i,(function(t,i){K.test(i)&&X(t)&&(t+="px"),e[i]=t}))}function $(t){return Y(t)?t.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):t}function J(t,i){return!(!t||!i)&&(t.classList?t.classList.contains(i):t.className.indexOf(i)>-1)}function _(t,i){if(t&&i)if(X(t.length))V(t,(function(t){_(t,i)}));else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function G(t,i){t&&i&&(X(t.length)?V(t,(function(t){G(t,i)})):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function Q(t,i,e){i&&(X(t.length)?V(t,(function(t){Q(t,i,e)})):e?_(t,i):G(t,i))}var tt=/([a-z\d])([A-Z])/g;function it(t){return t.replace(tt,"$1-$2").toLowerCase()}function et(t,i){return W(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(it(i)))}function nt(t,i,e){W(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(it(i)),e)}var ot=function(){var t=!1;if(r){var i=!1,e=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});h.addEventListener("test",e,n),h.removeEventListener("test",e,n)}return t}();function st(t,i,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;i.trim().split(M).forEach((function(i){if(!ot){var s=t.listeners;s&&s[i]&&s[i][e]&&(o=s[i][e],delete s[i][e],0===Object.keys(s[i]).length&&delete s[i],0===Object.keys(s).length&&delete t.listeners)}t.removeEventListener(i,o,n)}))}function at(t,i,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;i.trim().split(M).forEach((function(i){if(n.once&&!ot){var s=t.listeners,a=void 0===s?{}:s;o=function(){delete a[i][e],t.removeEventListener(i,o,n);for(var s=arguments.length,r=new Array(s),h=0;h<s;h++)r[h]=arguments[h];e.apply(t,r)},a[i]||(a[i]={}),a[i][e]&&t.removeEventListener(i,a[i][e],n),a[i][e]=o,t.listeners=a}t.addEventListener(i,o,n)}))}function rt(t,i,e){var n;return B(Event)&&B(CustomEvent)?n=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(n)}function ht(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function lt(t){var i=t.rotate,e=t.scaleX,n=t.scaleY,o=t.translateX,s=t.translateY,a=[];X(o)&&0!==o&&a.push("translateX(".concat(o,"px)")),X(s)&&0!==s&&a.push("translateY(".concat(s,"px)")),X(i)&&0!==i&&a.push("rotate(".concat(i,"deg)")),X(e)&&1!==e&&a.push("scaleX(".concat(e,")")),X(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var r=a.length?a.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}var ct=h.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(h.navigator.userAgent);function ut(t,i,e){var n=document.createElement("img");if(t.naturalWidth&&!ct)return e(t.naturalWidth,t.naturalHeight),n;var o=document.body||document.documentElement;return n.onload=function(){e(n.width,n.height),ct||o.removeChild(n)},V(i.inheritedAttributes,(function(i){var e=t.getAttribute(i);null!==e&&n.setAttribute(i,e)})),n.src=t.src,ct||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n)),n}function dt(t){switch(t){case 2:return y;case 3:return b;case 4:return w;default:return""}}function mt(t,i){var e=t.pageX,n=t.pageY,o={endX:e,endY:n};return i?o:s({timeStamp:Date.now(),startX:e,startY:n},o)}function vt(t){var i=0,e=0,n=0;return V(t,(function(t){var o=t.startX,s=t.startY;i+=o,e+=s,n+=1})),{pageX:i/=n,pageY:e/=n}}var gt={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,i=t.body||t.documentElement;this.body=i,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=i.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(i).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t,i=this.options,e=this.parent;i.inline&&(t={width:Math.max(e.offsetWidth,i.minWidth),height:Math.max(e.offsetHeight,i.minHeight)},this.parentData=t),!this.fulled&&t||(t=this.containerData),this.viewerData=U({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&Z(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,n=this.list,o=[];n.innerHTML="",V(this.images,(function(i,s){var a=i.src,r=i.alt||function(t){return Y(t)?decodeURIComponent(t.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}(a),h=t.getImageURL(i);if(a||h){var l=document.createElement("li"),c=document.createElement("img");V(e.inheritedAttributes,(function(t){var e=i.getAttribute(t);null!==e&&c.setAttribute(t,e)})),c.src=a||h,c.alt=r,c.setAttribute("data-index",s),c.setAttribute("data-original-url",h||a),c.setAttribute("data-viewer-action","view"),c.setAttribute("role","button"),l.appendChild(c),n.appendChild(l),o.push(l)}})),this.items=o,V(o,(function(i){var n=i.firstElementChild;nt(n,"filled",!0),e.loading&&_(i,x),at(n,"load",(function(n){e.loading&&G(i,x),t.loadImage(n)}),{once:!0})})),e.transition&&at(i,"viewed",(function(){_(n,E)}),{once:!0})},renderList:function(t){var i=t||this.index,e=this.items[i].offsetWidth||30,n=e+1;Z(this.list,U({width:n*this.length},lt({translateX:(this.viewerData.width-e)/2-n*i})))},resetList:function(){var t=this.list;t.innerHTML="",G(t,E),Z(t,lt({translateX:0}))},initImage:function(t){var i,e=this,n=this.options,o=this.image,s=this.viewerData,a=this.footer.offsetHeight,r=s.width,h=Math.max(s.height-a,a),l=this.imageData||{};this.imageInitializing={abort:function(){i.onload=null}},i=ut(o,n,(function(i,o){var s=i/o,a=r,c=h;e.imageInitializing=!1,h*s>r?c=r/s:a=h*s;var u={naturalWidth:i,naturalHeight:o,aspectRatio:s,ratio:(a=Math.min(.9*a,i))/i,width:a,height:c=Math.min(.9*c,o),left:(r-a)/2,top:(h-c)/2},d=U({},u);n.rotatable&&(u.rotate=l.rotate||0,d.rotate=0),n.scalable&&(u.scaleX=l.scaleX||1,u.scaleY=l.scaleY||1,d.scaleX=1,d.scaleY=1),e.imageData=u,e.initialImageData=d,t&&t()}))},renderImage:function(t){var i=this,e=this.image,n=this.imageData;if(Z(e,U({width:n.width,height:n.height,marginLeft:n.left,marginTop:n.top},lt(n))),t)if((this.viewing||this.zooming)&&this.options.transition){var o=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){st(e,"transitionend",o)}},at(e,"transitionend",o,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},ft={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;at(i,"click",this.onClick=this.click.bind(this)),at(i,"dragstart",this.onDragStart=this.dragstart.bind(this)),at(e,L,this.onPointerDown=this.pointerdown.bind(this)),at(n,R,this.onPointerMove=this.pointermove.bind(this)),at(n,A,this.onPointerUp=this.pointerup.bind(this)),at(n,"keydown",this.onKeyDown=this.keydown.bind(this)),at(window,"resize",this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&at(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&at(e,"dblclick",this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;st(i,"click",this.onClick),st(i,"dragstart",this.onDragStart),st(e,L,this.onPointerDown),st(n,R,this.onPointerMove),st(n,A,this.onPointerUp),st(n,"keydown",this.onKeyDown),st(window,"resize",this.onResize),t.zoomable&&t.zoomOnWheel&&st(i,"wheel",this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&st(e,"dblclick",this.onDblclick)}},pt={click:function(t){var i=t.target,e=this.options,n=this.imageData,o=et(i,N);switch(l&&t.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),o){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(et(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-n.scaleX||-1);break;case"flip-vertical":this.scaleY(-n.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(l&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle())},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,n=this.image,o=this.index,s=this.viewerData;G(n,z),e.loading&&G(this.canvas,x),n.style.cssText="height:0;"+"margin-left:".concat(s.width/2,"px;")+"margin-top:".concat(s.height/2,"px;")+"max-width:none!important;position:absolute;width:0;",this.initImage((function(){Q(n,D,e.movable),Q(n,E,e.transition),t.renderImage((function(){t.viewed=!0,t.viewing=!1,B(e.viewed)&&at(i,"viewed",e.viewed,{once:!0}),rt(i,"viewed",{originalImage:t.images[o],index:o,image:n})}))}))},loadImage:function(t){var i=t.target,e=i.parentNode,n=e.offsetWidth||30,o=e.offsetHeight||50,s=!!et(i,"filled");ut(i,this.options,(function(t,e){var a=t/e,r=n,h=o;o*a>n?s?r=o*a:h=n/a:s?h=n/a:r=o*a,Z(i,U({width:r,height:h},lt({translateX:(n-r)/2,translateY:(o-h)/2})))}))},keydown:function(t){var i=this.options;if(this.fulled&&i.keyboard)switch(t.keyCode||t.which||t.charCode){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}},dragstart:function(t){"img"===t.target.tagName.toLowerCase()&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers,n=t.buttons,o=t.button;if(!(!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(X(n)&&1!==n||X(o)&&0!==o||t.ctrlKey))){t.preventDefault(),t.changedTouches?V(t.changedTouches,(function(t){e[t.identifier]=mt(t)})):e[t.pointerId||0]=mt(t);var s=!!i.movable&&"move";i.zoomOnTouch&&i.zoomable&&Object.keys(e).length>1?s="zoom":i.slideOnTouch&&("touch"===t.pointerType||"touchstart"===t.type)&&this.isSwitchable()&&(s="switch"),!i.transition||"move"!==s&&"zoom"!==s||G(this.image,E),this.action=s}},pointermove:function(t){var i=this.pointers,e=this.action;this.viewed&&e&&(t.preventDefault(),t.changedTouches?V(t.changedTouches,(function(t){U(i[t.identifier]||{},mt(t,!0))})):U(i[t.pointerId||0]||{},mt(t,!0)),this.change(t))},pointerup:function(t){var i,e=this,n=this.options,o=this.action,s=this.pointers;t.changedTouches?V(t.changedTouches,(function(t){i=s[t.identifier],delete s[t.identifier]})):(i=s[t.pointerId||0],delete s[t.pointerId||0]),o&&(t.preventDefault(),!n.transition||"move"!==o&&"zoom"!==o||_(this.image,E),this.action=!1,l&&"zoom"!==o&&i&&Date.now()-i.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),n.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout((function(){rt(e.image,"dblclick")}),50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout((function(){e.imageClicked=!1}),500)):(this.imageClicked=!1,n.backdrop&&"static"!==n.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout((function(){rt(e.canvas,"click")}),50)))))},resize:function(){var t=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage()})),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();V(this.player.getElementsByTagName("img"),(function(i){at(i,"load",t.loadImage.bind(t),{once:!0}),rt(i,"load")}))}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout((function(){i.wheeling=!1}),50);var e=Number(this.options.zoomRatio)||.1,n=1;t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,!0,t)}}},wt={show:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(B(e.show)&&at(i,"show",e.show,{once:!0}),!1===rt(i,"show")||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var n=this.viewer;if(G(n,p),e.transition&&!t){var o=this.shown.bind(this);this.transitioning={abort:function(){st(n,"transitionend",o),G(n,k)}},_(n,E),n.initialOffsetWidth=n.offsetWidth,at(n,"transitionend",o,{once:!0}),_(n,k)}else _(n,k),this.shown();return this},hide:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.element,n=this.options;if(n.inline||this.hiding||!this.isShown&&!this.showing)return this;if(B(n.hide)&&at(e,"hide",n.hide,{once:!0}),!1===rt(e,"hide"))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var o=this.viewer,s=this.image,a=function(){G(o,k),t.hidden()};if(n.transition&&!i){var r=function i(e){e&&e.target===o&&(st(o,"transitionend",i),t.hidden())},h=function(){J(o,E)?(at(o,"transitionend",r),G(o,k)):a()};this.transitioning={abort:function(){t.viewed&&J(s,E)?st(s,"transitionend",h):J(o,E)&&st(o,"transitionend",r)}},this.viewed&&J(s,E)?(at(s,"transitionend",h,{once:!0}),this.zoomTo(0,!1,!1,!0)):h()}else a();return this},view:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;if(i=Number(i)||0,this.hiding||this.played||i<0||i>=this.length||this.viewed&&i===this.index)return this;if(!this.isShown)return this.index=i,this.show();this.viewing&&this.viewing.abort();var e=this.element,n=this.options,o=this.title,s=this.canvas,a=this.items[i],r=a.querySelector("img"),h=et(r,"originalUrl"),l=r.getAttribute("alt"),c=document.createElement("img");if(V(n.inheritedAttributes,(function(t){var i=r.getAttribute(t);null!==i&&c.setAttribute(t,i)})),c.src=h,c.alt=l,B(n.view)&&at(e,"view",n.view,{once:!0}),!1===rt(e,"view",{originalImage:this.images[i],index:i,image:c})||!this.isShown||this.hiding||this.played)return this;this.image=c,G(this.items[this.index],u),_(a,u),this.viewed=!1,this.index=i,this.imageData={},_(c,z),n.loading&&_(s,x),s.innerHTML="",s.appendChild(c),this.renderList(),o.innerHTML="";var d,m=function(){var i=t.imageData,e=Array.isArray(n.title)?n.title[1]:n.title;o.innerHTML=$(B(e)?e.call(t,c,i):"".concat(l," (").concat(i.naturalWidth," × ").concat(i.naturalHeight,")"))};return at(e,"viewed",m,{once:!0}),this.viewing={abort:function(){st(e,"viewed",m),c.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(c.src="",st(c,"load",d),t.timeout&&clearTimeout(t.timeout))}},c.complete?this.load():(at(c,"load",d=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){G(c,z),t.timeout=!1}),1e3)),this},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.length-1,e=this.index+1;return e>i&&(e=t?0:i),this.view(e),this},move:function(t,i){var e=this.imageData;return this.moveTo(F(t)?t:e.left+Number(t),F(i)?i:e.top+Number(i)),this},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.movable){var n=!1;X(t)&&(e.left=t,n=!0),X(i)&&(e.top=i,n=!0),n&&this.renderImage()}return this},zoom:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=this.imageData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,i,e),this},zoomTo:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.element,a=this.options,r=this.pointers,h=this.imageData,l=h.width,c=h.height,u=h.left,d=h.top,m=h.naturalWidth,v=h.naturalHeight;if(X(t=Math.max(0,t))&&this.viewed&&!this.played&&(o||a.zoomable)){if(!o){var g=Math.max(.01,a.minZoomRatio),f=Math.min(100,a.maxZoomRatio);t=Math.min(Math.max(t,g),f)}n&&a.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);var p=m*t,w=v*t,b=p-l,y=w-c,k=l/m;if(B(a.zoom)&&at(s,"zoom",a.zoom,{once:!0}),!1===rt(s,"zoom",{ratio:t,oldRatio:k,originalEvent:n}))return this;if(this.zooming=!0,n){var z=ht(this.viewer),x=r&&Object.keys(r).length?vt(r):{pageX:n.pageX,pageY:n.pageY};h.left-=b*((x.pageX-z.left-u)/l),h.top-=y*((x.pageY-z.top-d)/c)}else h.left-=b/2,h.top-=y/2;h.width=p,h.height=w,h.ratio=t,this.renderImage((function(){i.zooming=!1,B(a.zoomed)&&at(s,"zoomed",a.zoomed,{once:!0}),rt(s,"zoomed",{ratio:t,oldRatio:k,originalEvent:n})})),e&&this.tooltip()}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this.imageData;return X(t=Number(t))&&this.viewed&&!this.played&&this.options.rotatable&&(i.rotate=t,this.renderImage()),this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.scalable){var n=!1;X(t)&&(e.scaleX=t,n=!0),X(i)&&(e.scaleY=i,n=!0),n&&this.renderImage()}return this},play:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isShown||this.played)return this;var e=this.options,n=this.player,o=this.loadImage.bind(this),s=[],a=0,r=0;if(this.played=!0,this.onLoadWhenPlay=o,i&&this.requestFullscreen(),_(n,I),V(this.items,(function(t,i){var h=t.querySelector("img"),l=document.createElement("img");l.src=et(h,"originalUrl"),l.alt=h.getAttribute("alt"),l.referrerPolicy=h.referrerPolicy,a+=1,_(l,m),Q(l,E,e.transition),J(t,u)&&(_(l,k),r=i),s.push(l),at(l,"load",o,{once:!0}),n.appendChild(l)})),X(e.interval)&&e.interval>0){var h=function i(){t.playing=setTimeout((function(){G(s[r],k),_(s[r=(r+=1)<a?r:0],k),i()}),e.interval)};a>1&&h()}return this},stop:function(){var t=this;if(!this.played)return this;var i=this.player;return this.played=!1,clearTimeout(this.playing),V(i.getElementsByTagName("img"),(function(i){st(i,"load",t.onLoadWhenPlay)})),G(i,I),i.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,n=this.image,o=this.list;return!this.isShown||this.played||this.fulled||!i.inline||(this.fulled=!0,this.open(),_(this.button,f),i.transition&&(G(o,E),this.viewed&&G(n,E)),_(e,v),e.setAttribute("style",""),Z(e,{zIndex:i.zIndex}),this.initContainer(),this.viewerData=U({},this.containerData),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage((function(){i.transition&&setTimeout((function(){_(n,E),_(o,E)}),0)}))}))),this},exit:function(){var t=this,i=this.options,e=this.viewer,n=this.image,o=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline?(this.fulled=!1,this.close(),G(this.button,f),i.transition&&(G(o,E),this.viewed&&G(n,E)),G(e,v),Z(e,{zIndex:i.zIndexInline}),this.viewerData=U({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage((function(){i.transition&&setTimeout((function(){_(n,E),_(o,E)}),0)}))})),this):this},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox,n=this.imageData;return this.viewed&&!this.played&&i.tooltip?(e.textContent="".concat(Math.round(100*n.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&rt(e,"transitionend"),_(e,I),_(e,m),_(e,E),e.initialOffsetWidth=e.offsetWidth,_(e,k)):_(e,I),this.tooltipping=setTimeout((function(){i.transition?(at(e,"transitionend",(function(){G(e,I),G(e,m),G(e,E),t.fading=!1}),{once:!0}),G(e,k),t.fading=!0):G(e,I),t.tooltipping=!1}),1e3),this):this},toggle:function(){return 1===this.imageData.ratio?this.zoomTo(this.initialImageData.ratio,!0):this.zoomTo(1,!0),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=U({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,i=this.element,e=this.options,n=this.isImg;if(n&&!i.parentNode)return this.destroy();var o=[];if(V(n?[i]:i.querySelectorAll("img"),(function(i){B(e.filter)?e.filter.call(t,i)&&o.push(i):t.getImageURL(i)&&o.push(i)})),!o.length)return this;if(this.images=o,this.length=o.length,this.ready){var s=[];if(V(this.items,(function(t,i){var e=t.querySelector("img"),n=o[i];n&&e?n.src!==e.src&&s.push(i):s.push(i)})),Z(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var a=s.indexOf(this.index);a>=0?(this.viewed=!1,this.view(Math.max(this.index-(a+1),0))):_(this.items[this.index],u)}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return t.viewer?(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||st(t,"click",this.onStart),t.viewer=void 0,this):this}},bt={getImageURL:function(t){var i=this.options.url;return i=Y(i)?t.getAttribute(i):B(i)?i.call(this,t):""},open:function(){var t=this.body;_(t,T),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px")},close:function(){var t=this.body;G(t,T),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,i=this.options;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,B(i.shown)&&at(t,"shown",i.shown,{once:!0}),!1!==rt(t,"shown")&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options;this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),_(this.viewer,p),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(B(i.hidden)&&at(t,"hidden",i.hidden,{once:!0}),rt(t,"hidden"))},requestFullscreen:function(){var t=this.element.ownerDocument;if(this.fulled&&!(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)){var i=t.documentElement;i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,e=this.pointers,n=e[Object.keys(e)[0]],o=n.endX-n.startX,a=n.endY-n.startY;switch(this.action){case"move":this.move(o,a);break;case"zoom":this.zoom(function(t){var i=s({},t),e=[];return V(t,(function(t,n){delete i[n],V(i,(function(i){var n=Math.abs(t.startX-i.startX),o=Math.abs(t.startY-i.startY),s=Math.abs(t.endX-i.endX),a=Math.abs(t.endY-i.endY),r=Math.sqrt(n*n+o*o),h=(Math.sqrt(s*s+a*a)-r)/r;e.push(h)}))})),e.sort((function(t,i){return Math.abs(t)<Math.abs(i)})),e[0]}(e),!1,t);break;case"switch":this.action="switched";var r=Math.abs(o);r>1&&r>Math.abs(a)&&(this.pointers={},o>1?this.prev(i.loop):o<-1&&this.next(i.loop))}V(e,(function(t){t.startX=t.endX,t.startY=t.endY}))},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.left>=0&&t.top>=0&&t.width<=i.width&&t.height<=i.height}},yt=h.Viewer,kt=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),!e||1!==e.nodeType)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=U({},a,H(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.init()}var n,o,s;return n=t,s=[{key:"noConflict",value:function(){return window.Viewer=yt,t}},{key:"setDefaults",value:function(t){U(a,H(t)&&t)}}],(o=[{key:"init",value:function(){var t=this,i=this.element,e=this.options;if(!i.viewer){i.viewer=this;var n="img"===i.tagName.toLowerCase(),o=[];if(V(n?[i]:i.querySelectorAll("img"),(function(i){B(e.filter)?e.filter.call(t,i)&&o.push(i):t.getImageURL(i)&&o.push(i)})),this.isImg=n,this.length=o.length,this.images=o,this.initBody(),F(document.createElement("viewer").style.transition)&&(e.transition=!1),e.inline){var s=0,a=function(){var i;(s+=1)===t.length&&(t.initializing=!1,t.delaying={abort:function(){clearTimeout(i)}},i=setTimeout((function(){t.delaying=!1,t.build()}),0))};this.initializing={abort:function(){V(o,(function(t){t.complete||st(t,"load",a)}))}},V(o,(function(t){t.complete?a():at(t,"load",a,{once:!0})}))}else at(i,"click",this.onStart=function(i){var n=i.target;"img"!==n.tagName.toLowerCase()||B(e.filter)&&!e.filter.call(t,n)||t.view(t.images.indexOf(n))})}}},{key:"build",value:function(){if(!this.ready){var t=this.element,i=this.options,e=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="viewer-container" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div role="button" class="viewer-button" data-viewer-action="mix"></div><div class="viewer-player"></div></div>';var o=n.querySelector(".".concat("viewer","-container")),s=o.querySelector(".".concat("viewer","-title")),a=o.querySelector(".".concat("viewer","-toolbar")),r=o.querySelector(".".concat("viewer","-navbar")),h=o.querySelector(".".concat("viewer","-button")),l=o.querySelector(".".concat("viewer","-canvas"));if(this.parent=e,this.viewer=o,this.title=s,this.toolbar=a,this.navbar=r,this.button=h,this.canvas=l,this.footer=o.querySelector(".".concat("viewer","-footer")),this.tooltipBox=o.querySelector(".".concat("viewer","-tooltip")),this.player=o.querySelector(".".concat("viewer","-player")),this.list=o.querySelector(".".concat("viewer","-list")),_(s,i.title?dt(Array.isArray(i.title)?i.title[0]:i.title):p),_(r,i.navbar?dt(i.navbar):p),Q(h,p,!i.button),i.backdrop&&(_(o,"".concat("viewer","-backdrop")),i.inline||"static"===i.backdrop||nt(l,N,"hide")),Y(i.className)&&i.className&&i.className.split(M).forEach((function(t){_(o,t)})),i.toolbar){var c=document.createElement("ul"),u=H(i.toolbar),f=P.slice(0,3),w=P.slice(7,9),b=P.slice(9);u||_(a,dt(i.toolbar)),V(u?i.toolbar:P,(function(t,e){var n=u&&H(t),o=u?it(e):t,s=n&&!F(t.show)?t.show:t;if(s&&(i.zoomable||-1===f.indexOf(o))&&(i.rotatable||-1===w.indexOf(o))&&(i.scalable||-1===b.indexOf(o))){var a=n&&!F(t.size)?t.size:t,r=n&&!F(t.click)?t.click:t,h=document.createElement("li");h.setAttribute("role","button"),_(h,"".concat("viewer","-").concat(o)),B(r)||nt(h,N,o),X(s)&&_(h,dt(s)),-1!==["small","large"].indexOf(a)?_(h,"".concat("viewer","-").concat(a)):"play"===o&&_(h,"".concat("viewer","-large")),B(r)&&at(h,"click",r),c.appendChild(h)}})),a.appendChild(c)}else _(a,p);if(!i.rotatable){var y=a.querySelectorAll('li[class*="rotate"]');_(y,z),V(y,(function(t){a.appendChild(t)}))}if(i.inline)_(h,g),Z(o,{zIndex:i.zIndexInline}),"static"===window.getComputedStyle(e).position&&Z(e,{position:"relative"}),e.insertBefore(o,t.nextSibling);else{_(h,d),_(o,v),_(o,m),_(o,p),Z(o,{zIndex:i.zIndex});var k=i.container;Y(k)&&(k=t.ownerDocument.querySelector(k)),k||(k=this.body),k.appendChild(o)}i.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,B(i.ready)&&at(t,"ready",i.ready,{once:!0}),!1!==rt(t,"ready")?this.ready&&i.inline&&this.view(this.index):this.ready=!1}}}])&&e(n.prototype,o),s&&e(n,s),t}();return U(kt.prototype,gt,ft,pt,wt,bt),kt}()}}]);
//# sourceMappingURL=npm.viewerjs.662c04ec.js.map