webpackJsonp([1],{"/H/S":function(t,e){},"0V+S":function(t,e,i){t.exports=i.p+"static/img/6.f7bf89c.jpeg"},"2/CZ":function(t,e){},"3EWe":function(t,e){},"7hmz":function(t,e,i){t.exports=i.p+"static/img/zv.538e22d.jpeg"},"Fq+7":function(t,e,i){t.exports=i.p+"static/img/1.e7694d3.jpeg"},H5kh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{index:0,transition:"transform 0.2s ease"}},methods:{next:function(){console.log(this.index),-1500===this.index?this.index=0:this.index-=500},prev:function(){0===this.index?this.index=-1500:this.index+=500}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project"}},[n("article",{attrs:{id:"main_project"}},[n("div",{staticClass:"slider"},[n("button",{staticClass:"button button__slider",attrs:{type:"button"},on:{click:t.prev}},[n("i",{staticClass:"ri-arrow-left-s-line icone icone-left"})]),t._v(" "),n("div",{staticClass:"container-slides",style:{transform:"translateX("+t.index+"px)",transition:""+t.transition}},[n("img",{staticClass:"img-slider",attrs:{src:i("Fq+7"),alt:""}}),t._v(" "),n("img",{staticClass:"img-slider",attrs:{src:i("vi3F"),alt:""}}),t._v(" "),n("img",{staticClass:"img-slider",attrs:{src:i("Y9FZ"),alt:""}}),t._v(" "),n("img",{staticClass:"img-slider",attrs:{src:i("znh7"),alt:""}}),t._v(" "),n("img",{staticClass:"img-slider",attrs:{src:i("jrd2"),alt:""}}),t._v(" "),n("img",{staticClass:"img-slider",attrs:{src:i("0V+S"),alt:""}})]),t._v(" "),n("button",{staticClass:"button button__slider",attrs:{type:"button"},on:{click:t.next}},[n("i",{staticClass:"ri-arrow-right-s-line icone icone-right"})])])])])},staticRenderFns:[]};var a=i("VU/8")(n,r,!1,function(t){i("dOQO")},"data-v-731008b3",null);e.default=a.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"menuMain"}},[i("nav",[i("div",{staticClass:"navWrapper"},[i("div",{staticClass:"right"},[i("li",{staticClass:"entete"},[i("router-link",{attrs:{to:"/#heading-7"}},[i("a",{staticClass:"kayan"},[t._v("KAYAN")])])],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"overlay"},[i("div",{staticClass:"overlayContent"},[i("li",[i("router-link",{attrs:{to:"/#heading-1"}},[i("a",[t._v("ACCUEIL")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/#heading-2"}},[i("a",[t._v("PROJET 1")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/#heading-3"}},[i("a",[t._v("PROJET 2")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/#heading-4"}},[i("a",[t._v("PROJET 3")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/#heading-6"}},[i("a",[t._v("CONTACT")])])],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menuIcon",attrs:{id:"nav-icon"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])}]};var a={components:{menuMain:i("VU/8")({},r,!1,function(t){i("Wzpr")},null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("menu-main"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(a,s,!1,function(t){i("2/CZ")},null,null).exports,c=i("/ocq"),l=i("Dd8w"),d={src:{type:String,required:!0},muted:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},preload:{type:String,default:"auto"},objectFit:{type:String,default:"cover"},playsWhen:{type:String,default:"canplay",note:"Google HTML Video Events"},playbackRate:{type:Number,default:1},transition:{type:String,default:"fade"}},u=["src","res","autoplay"],p=function t(e,i){return 1===i.length?v(e,i[0]):v(e,i[0])*t(e,i.slice(1))},v=function(t,e){for(var i=t.length-1;i>-1;i-=1){var n=t[i];if(!h(n))return!1;if(f(n,e))return!0}return!1},h=function(t){return null!=t&&"Object"===t.constructor.name},f=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},m=i.n(l)()({sources:{type:Array,default:function(){return[]},validator:function(t){return!!Array.isArray(t)&&(0===t.length||p(t,u))}},autoplay:{type:Boolean,default:!0},poster:{type:String,default:""},overlay:{type:String,default:""}},d),_={props:d,emits:["playing","error","loading","ended","ready"],data:function(){return{showVideo:!1}},computed:{styleObject:function(){return this.objectFit?{objectFit:this.objectFit}:{}}},watch:{src:function(){this.load()}},methods:{pause:function(){this.$refs.video&&this.$refs.video.pause()},load:function(){var t=this;this.hide(),setTimeout(function(){t.$refs.video.load(),t.$emit("loading")},1e3)},play:function(){this.setPlaybackRate(),this.$refs.video.play(),this.show(),this.$emit("playing")},show:function(){this.showVideo=!0},hide:function(){this.showVideo=!1},getMediaType:function(t){return"video/"+t.split(".").pop().split(/[?#]/)[0]},videoCanPlay:function(){return!!this.$refs.video.canPlayType},videoReady:function(){this.pause(),this.$emit("ready")},videoError:function(){this.$emit("error")},videoEnded:function(){this.$emit("ended")},setPlaybackRate:function(){this.$refs.video.playbackRate=this.playbackRate,this.$refs.video.defaultPlaybackRate=this.playbackRate}},mounted:function(){this.videoCanPlay()&&(this.$refs.video["on"+this.playsWhen]=this.videoReady,this.$refs.video.onerror=this.videoError,this.$refs.video.onended=this.videoEnded)}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showVideo,expression:"showVideo"}],staticClass:"video-wrapper"},[i("video",{ref:"video",style:t.styleObject,attrs:{autoplay:"",playsinline:"",loop:t.loop,preload:t.preload},domProps:{muted:t.muted}},[i("source",{attrs:{src:t.src,type:t.getMediaType(t.src)}})])])])},staticRenderFns:[]};var y=i("VU/8")(_,g,!1,function(t){i("Oybg")},"data-v-46fccdac",null).exports,b={props:{poster:{type:String,required:!0}},computed:{image:function(){return{backgroundImage:"url("+this.poster+")"}}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"video-buffering",style:this.image})},staticRenderFns:[]};var $=i("VU/8")(b,C,!1,function(t){i("lYDW")},"data-v-b5717866",null).exports,w={props:{overlay:{type:String,required:!0}}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"video-overlay",style:{background:this.overlay}})},staticRenderFns:[]};var k=function(t,e){var i="null";return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];"null"===i&&(i=setTimeout(function(){t.apply(void 0,r),i="null"},e))}},E={props:m,mixins:[{data:function(){return{width:0}},computed:{current:function(){var t=this;if(0===this.sources.length)return this.default;var e=this.sources.sort(function(t,e){return t.res-e.res}).filter(function(e){return e.res>=t.width});return 0===e.length?this.default:e[0]},default:function(){return{src:this.src,poster:this.poster,autoplay:this.autoplay}}},methods:{$_change_video_resolution:function(){this.width=this.$_innerWidth()},$_innerWidth:function(){return window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth}},beforeMount:function(){this.$_change_video_resolution()},mounted:function(){window.addEventListener("resize",k(this.$_change_video_resolution,250))},beforeUnmount:function(){window.removeEventListener("resize",k(this.$_change_video_resolution,250))}}],emits:["playing","error","loading","ended","ready"],components:{VideoPlayer:y,VideoPoster:$,VideoOverlay:i("VU/8")(w,x,!1,function(t){i("n1iV")},"data-v-7bc9f2dd",null).exports},computed:{player:function(){return this.$refs.player}},methods:{playVideo:function(){this.$emit("ready"),this.current.autoplay&&this.player.play()}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{ref:"vidbg",staticClass:"vue-responsive-videobg"},[t.current.poster||t.poster?i("video-poster",{attrs:{poster:t.current.poster||t.poster}}):t._e(),t._v(" "),i("video-player",{ref:"player",attrs:{src:t.current.src,muted:t.muted,loop:t.loop,preload:t.preload,"plays-when":t.playsWhen,"playback-rate":t.playbackRate,transition:t.transition,"object-fit":t.objectFit},on:{ready:t.playVideo,playing:function(e){return t.$emit("playing")},error:function(e){return t.$emit("error")},loading:function(e){return t.$emit("loading")},ended:function(e){return t.$emit("ended")}}}),t._v(" "),t.overlay?i("video-overlay",{attrs:{overlay:t.overlay}}):t._e(),t._v(" "),i("div",{staticClass:"videobg-content"},[t._t("default")],2)],1)},staticRenderFns:[]};var V=i("VU/8")(E,j,!1,function(t){i("/H/S")},"data-v-189a8c5e",null).exports;n.a.component("video-background",V),n.a.use(c.a);var R=new c.a({mode:"hash",routes:[{path:"/",components:i("gHLv"),name:"home",meta:{requiresAuth:!0,reload:!0}},{path:"/1",components:i("H5kh"),name:"project_1",meta:{requiresAuth:!0}},{path:"*",redirect:"/"}],scrollBehavior:function(t){if(t.hash)return{selector:t.hash}}});new n.a({el:"#app",router:R,components:{App:o},template:"<App/>"}).$mount("#app")},Oybg:function(t,e){},Wzpr:function(t,e){},Y9FZ:function(t,e,i){t.exports=i.p+"static/img/3.e8f69c6.jpeg"},dOQO:function(t,e){},gHLv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{image:i("gh+9"),image2:i("7hmz"),video:i("olvn")}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"accueil"}},[i("div",{staticClass:"ghost__desktop",attrs:{id:"heading-1 "}}),t._v(" "),i("div",{staticClass:"ghost__mobile",attrs:{id:"heading-7"}}),t._v(" "),i("article",{attrs:{id:"main"}},[i("section",{staticClass:"realisation section",attrs:{id:"realisation"}},[i("div",{staticClass:"realisation__container container"},[i("div",{staticClass:"realisation__content realisation__fashion"},[i("router-link",{attrs:{to:"/1#heading-7"}},[i("video-background",{staticClass:"containervideo fashion__containervideo",staticStyle:{"max-height":"400px",height:"100vh"},attrs:{src:t.video}})],1),t._v(" "),i("div",{staticClass:"header__buttons"},[i("router-link",{attrs:{to:"/1#heading-7"}},[i("a",{staticClass:"button realisation__text"},[t._v("MJM Fashion Show 2017")])])],1)],1),t._v(" "),i("div",{staticClass:"realisation__content realisation__frank"},[i("div",{staticClass:"realisation__img",style:{backgroundImage:"url("+t.image+")"}}),t._v(" "),i("router-link",{attrs:{to:"/1#heading-7"}},[i("a",{staticClass:"button realisation__text"},[t._v("Architecture")])])],1)])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",{staticClass:"footer"},[this._v("© 2021 Kayan. All rights reserved.")])])}]};var a=i("VU/8")(n,r,!1,function(t){i("3EWe")},"data-v-fea82e6a",null);e.default=a.exports},"gh+9":function(t,e,i){t.exports=i.p+"static/img/trois.826bb79.jpeg"},jrd2:function(t,e,i){t.exports=i.p+"static/img/5.d2e7d37.jpeg"},lYDW:function(t,e){},n1iV:function(t,e){},olvn:function(t,e,i){t.exports=i.p+"static/media/test2.f424bae.mp4"},vi3F:function(t,e,i){t.exports=i.p+"static/img/2.dbf8e74.jpeg"},znh7:function(t,e,i){t.exports=i.p+"static/img/4.17a498f.jpeg"}},["NHnr"]);
//# sourceMappingURL=app.a7ef4bb9f04615462755.js.map