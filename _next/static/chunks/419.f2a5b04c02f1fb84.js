(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{9419:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MovieParallaxComponent}});var _templateObject,MovieParallaxComponent_templateObject,taggedTemplateLiteral=__webpack_require__(4660),react=__webpack_require__(7294),lib=__webpack_require__(1752),styled_components_browser_esm=__webpack_require__(9521),jsx_runtime=__webpack_require__(5893);function MovieDescription(){var data3={"data--600-top":"opacity: 0; transform: translateX(-5%);","data--1000-top":"opacity: 1; transform: translateX(0%);","data--1700-top":"opacity: 1; transform: translateX(0%);","data--1900-top":"opacity: 0; transform: translateX(10%);"};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Fixed,{children:(0,jsx_runtime.jsxs)(lib.VS,{data:{"data-bottom-top":"opacity: 1; background-color: rgb(0,0,0); width: 100%; visiblity: visible; height: 100%;","data-center-center":"opacity: 1; background-color: rgb(0,0,0); height: 100%;","data-top-bottom":"opacity: 0; background-color: rgb(255,255,255); z-index: -1; visiblity: hidden; height: 0;"},children:[(0,jsx_runtime.jsx)(lib.VS,{data:{"data-top":"transform: scale(1); height: 100vh;","data--300-top":"transform: scale(10); opacity: 1; height: 100vh;","data--500-top":"opacity: 0; height: 0"},children:(0,jsx_runtime.jsx)(FixedSecond,{children:(0,jsx_runtime.jsx)(MovieSecTitle,{children:"일별 박스오피스 API"})})}),(0,jsx_runtime.jsx)(MovieFirstContentsWrap,{children:(0,jsx_runtime.jsxs)(AbsolutCenter,{children:[(0,jsx_runtime.jsx)(lib.VS,{data:data3,children:(0,jsx_runtime.jsx)(MovieSecDesc,{children:"해당 페이지는 영화진흥원의 Open API를 활용한 영화 일일 박스 오피스 검색 페이지 이며,"})}),(0,jsx_runtime.jsx)(lib.VS,{data:data3,children:(0,jsx_runtime.jsx)(MovieSecDesc,{children:"검색 일자에 따른 일일 박스오피스 순위를 나타내는 application 입니다."})}),(0,jsx_runtime.jsx)(lib.VS,{data:data3,children:(0,jsx_runtime.jsx)(MovieSecDesc,{children:"효율적인 전역상태관리를 위하여 Redux-Toolkit과 Redux-Saga를 활용하여 API 통신을 진행하였고,"})}),(0,jsx_runtime.jsx)(lib.VS,{data:data3,children:(0,jsx_runtime.jsxs)(MovieSecDesc,{children:["react-skrollr 라이브러리를 활용하여 스크롤에 따른 효과를 주었습니다.",(0,jsx_runtime.jsx)("strong",{children:"(*mobile에서 동작하지 않은 오류가 있어 방법을 찾는 중입니다.)"})]})}),(0,jsx_runtime.jsx)(lib.VS,{data:data3,children:(0,jsx_runtime.jsx)(MovieSecDesc,{children:"검색 창엔 takeLatest를 통한 여러번의 클릭 방지와 정규표현식을 통한 validation체크 작업을 진행하였습니다."})})]})})]})})})}var MovieSecTitle=styled_components_browser_esm.ZP.h2.withConfig({displayName:"MovieDescription__MovieSecTitle",componentId:"sc-hj5qi3-0"})(["font-size:3rem;color:#fff;"]),MovieSecDesc=styled_components_browser_esm.ZP.p.withConfig({displayName:"MovieDescription__MovieSecDesc",componentId:"sc-hj5qi3-1"})(["line-height:2;font-size:1.8rem;color:#fff;> strong{font-size:1.4rem;color:#f05650;display:block;}"]),MovieFirstContentsWrap=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieDescription__MovieFirstContentsWrap",componentId:"sc-hj5qi3-2"})(["height:200vh;position:relative;"]),Fixed=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieDescription__Fixed",componentId:"sc-hj5qi3-3"})(["position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:400vh;text-align:center;display:flex;justify-content:center;"]),FixedSecond=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieDescription__FixedSecond",componentId:"sc-hj5qi3-4"})(["position:fixed;top:50%;left:0;transform:translateY(-50%);width:100%;text-align:center;display:inline-block;"]),AbsolutCenter=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieDescription__AbsolutCenter",componentId:"sc-hj5qi3-5"})(["position:relative;top:25%;left:0;width:100%;text-align:center;transform:translateY(-50%);",""],function(_ref){return _ref.theme.media.tabletL(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n        padding: 0 20px;\n    "])))}),reducer=__webpack_require__(2441),es=__webpack_require__(9473),free_solid_svg_icons=__webpack_require__(9417),index_es=__webpack_require__(9603),legacy_image=__webpack_require__(9755),image_default=__webpack_require__.n(legacy_image);function MovieResultComponent(_ref){var _data$data,_data$data$faultInfo,_success$boxOfficeRes,data=_ref.data,success=_ref.success,loading=_ref.loading;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(MovieListContainer,{children:(0,jsx_runtime.jsx)(MovieListWrapper,{children:loading?(0,jsx_runtime.jsx)(MovieListItems,{children:(0,jsx_runtime.jsx)(ListTitle,{children:(0,jsx_runtime.jsx)(ImagesWrapper,{children:(0,jsx_runtime.jsx)(image_default(),{src:"/".concat("/nextjs-pages","/images/loading.gif"),width:"40",height:"40",layout:"fixed",blurDataURL:"/".concat("/nextjs-pages","/images/loading.gif"),alt:"로딩 중",priority:!0})})})}):null!==(_data$data=data.data)&&void 0!==_data$data&&null!==(_data$data$faultInfo=_data$data.faultInfo)&&void 0!==_data$data$faultInfo&&_data$data$faultInfo.errorCode?(0,jsx_runtime.jsx)(MovieListItems,{children:(0,jsx_runtime.jsxs)(ListTitle,{children:["올바른 형식으로 다시 시도해주세요.",(0,jsx_runtime.jsx)("strong",{children:"(ex. 20221220)"})]})}):success&&(null===(_success$boxOfficeRes=success.boxOfficeResult)||void 0===_success$boxOfficeRes?void 0:_success$boxOfficeRes.dailyBoxOfficeList.map(function(val,idx){return(0,jsx_runtime.jsxs)(MovieListItems,{children:[(0,jsx_runtime.jsx)(MovieTitle,{children:val.movieNm}),(0,jsx_runtime.jsxs)(ListFlex,{children:[(0,jsx_runtime.jsx)(ListTitle,{children:"누적관객수 : "}),(0,jsx_runtime.jsxs)(ListDesc,{children:[val.audiAcc," ",(0,jsx_runtime.jsx)("em",{children:"명"})]})]}),(0,jsx_runtime.jsxs)(ListFlex,{children:[(0,jsx_runtime.jsx)(ListTitle,{children:"영화개봉일 : "}),(0,jsx_runtime.jsx)(ListDesc,{children:val.openDt})]}),(0,jsx_runtime.jsx)(RankWrapper,{rank:val.rank,children:(0,jsx_runtime.jsxs)(Rank,{children:[val.rank,"위"]})})]},idx)}))})})})}var MovieListContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieResultComponent__MovieListContainer",componentId:"sc-1d607at-0"})([""]),MovieListWrapper=styled_components_browser_esm.ZP.ul.withConfig({displayName:"MovieResultComponent__MovieListWrapper",componentId:"sc-1d607at-1"})([""]),MovieListItems=styled_components_browser_esm.ZP.li.withConfig({displayName:"MovieResultComponent__MovieListItems",componentId:"sc-1d607at-2"})(["padding:3rem 2rem;position:relative;&:not(:last-child){border-bottom:1px solid #ddd;}"]),MovieTitle=styled_components_browser_esm.ZP.h2.withConfig({displayName:"MovieResultComponent__MovieTitle",componentId:"sc-1d607at-3"})(["font-size:2.6rem;margin-bottom:2rem;max-width:80%;word-break:keep-all;"]),ListFlex=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieResultComponent__ListFlex",componentId:"sc-1d607at-4"})(["display:flex;align-items:center;flex-wrap:wrap;&:not(:last-child){margin-bottom:1rem;}"]),ListTitle=styled_components_browser_esm.ZP.h3.withConfig({displayName:"MovieResultComponent__ListTitle",componentId:"sc-1d607at-5"})(["font-size:1.8rem;> strong{font-size:1.4rem;color:#999;display:block;}"]),ListDesc=styled_components_browser_esm.ZP.p.withConfig({displayName:"MovieResultComponent__ListDesc",componentId:"sc-1d607at-6"})(["font-size:1.8rem;padding-left:1rem;> em{font-size:1.4rem;font-style:normal;}"]),ImagesWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieResultComponent__ImagesWrapper",componentId:"sc-1d607at-7"})(["text-align:center;padding-top:3rem;"]),RankWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieResultComponent__RankWrapper",componentId:"sc-1d607at-8"})(["position:absolute;top:2rem;right:20px;width:3.3rem;height:4.2rem;background-image:url( "," );background-repeat:no-repeat;background-size:cover;background-position:center;text-align:center;padding-top:3px;"],function(_ref2){switch(_ref2.rank){case"1":return"\n                        ".concat("/nextjs-pages","/images/rank_icon1.png\n                    ");case"2":return"\n                        ".concat("/nextjs-pages","/images/rank_icon2.png\n                    ");case"3":return"\n                        ".concat("/nextjs-pages","/images/rank_icon3.png\n                    ");default:return"\n                        ".concat("/nextjs-pages","/images/rank_icon.png\n                    ")}}),Rank=styled_components_browser_esm.ZP.h6.withConfig({displayName:"MovieResultComponent__Rank",componentId:"sc-1d607at-9"})(["font-size:1.2rem;color:#fff;"]),SearchInputMemo=react.memo(function(){var dispatch=(0,es.I0)(),today=new Date,year=today.getFullYear(),month=today.getMonth()+1,day=today.getDate()-1,todayDate=year+("00"+month.toString()).slice(-2)+("00"+day.toString()).slice(-2),_useState=(0,react.useState)(todayDate),searchVal=_useState[0],setSearchVal=_useState[1];return(0,jsx_runtime.jsxs)(SearchFlex,{children:[(0,jsx_runtime.jsx)(SearchInput,{onChange:function(e){setSearchVal(e.target.value.replace(/\D/g,""))},value:searchVal,maxLength:8}),(0,jsx_runtime.jsx)(SearchButton,{onClick:function(){dispatch(reducer.s.request(searchVal))},children:(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons.Y$T})})]})});function MovieSearchForm(){var movies_data=(0,es.v9)(function(state){return state.movies}),movies_success=(0,es.v9)(function(state){return state.movies.data}),movies_loading=(0,es.v9)(function(state){return state.movies.loading}),movies_failure=(0,es.v9)(function(state){return state.movies.error});return(0,jsx_runtime.jsxs)(SearchContents,{children:[(0,jsx_runtime.jsx)(SearchFormContaniner,{children:(0,jsx_runtime.jsx)(SearchInputMemo,{})}),(0,jsx_runtime.jsx)(SearchResultContainer,{children:(0,jsx_runtime.jsx)(MovieResultComponent,{data:movies_data,success:movies_success,loading:movies_loading,failure:movies_failure})})]})}var SearchContents=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieSearchForm__SearchContents",componentId:"sc-k7m78s-0"})(["max-width:700px;margin:0 auto;background-color:#fff;min-height:50vh;border-radius:5rem;padding:4rem;box-shadow:-20px 30px 50px 0 rgb(0 0 0 / 10%);}"]),SearchFormContaniner=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieSearchForm__SearchFormContaniner",componentId:"sc-k7m78s-1"})(["padding-bottom:5rem;text-align:center;"]),SearchFlex=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieSearchForm__SearchFlex",componentId:"sc-k7m78s-2"})(["display:inline-block;align-items:center;justify-content:center;position:relative;text-align:center;width:80%;"]),SearchInput=styled_components_browser_esm.ZP.input.withConfig({displayName:"MovieSearchForm__SearchInput",componentId:"sc-k7m78s-3"})(["display:inline-block;width:100%;height:6rem;padding:0 3rem;border-radius:5rem;border:1px solid #ccc;font-size:2rem;color:#777;"]),SearchButton=styled_components_browser_esm.ZP.button.withConfig({displayName:"MovieSearchForm__SearchButton",componentId:"sc-k7m78s-4"})(["display:inline-block;height:60px;width:60px;text-align:center;background-color:transparent;border:none;cursor:pointer;position:absolute;top:50%;right:0;transform:translateY(-50%);> svg{width:20px;height:20px;}"]),SearchResultContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieSearchForm__SearchResultContainer",componentId:"sc-k7m78s-5"})(["position:relative;"]);function MovieParallaxComponent(){return(0,jsx_runtime.jsx)(MovieSectionContainer,{children:(0,jsx_runtime.jsxs)(lib.Xu,{init:{smoothScrollingDuration:500,smoothScrolling:!0,forceHeight:!1},children:[(0,jsx_runtime.jsx)(MovieSection,{section:1,children:(0,jsx_runtime.jsx)(MovieDescription,{})}),(0,jsx_runtime.jsx)(MovieSection,{section:2,children:(0,jsx_runtime.jsx)(MovieSearchForm,{})})]})})}var MovieSectionContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"MovieParallaxComponent__MovieSectionContainer",componentId:"sc-trm1dp-0"})(["max-width:960px;margin:0 auto;"]),MovieSection=styled_components_browser_esm.ZP.section.withConfig({displayName:"MovieParallaxComponent__MovieSection",componentId:"sc-trm1dp-1"})([""," ",""],function(_ref){switch(_ref.section){case 1:return"\n                    position: relative;\n                    height: 400vh;\n                ";case 2:return"\n                    position: relative;\n                    z-index: 2;\n                    padding-bottom: 14rem;\n                "}},function(_ref2){return _ref2.theme.media.tabletL(MovieParallaxComponent_templateObject||(MovieParallaxComponent_templateObject=(0,taggedTemplateLiteral.Z)(["\n        padding-right: 20px;\n        padding-left: 20px;\n    "])))})},170:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(7294)),_propTypes2=_interopRequireDefault(__webpack_require__(5697));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Parallax=function(_React$Component){function Parallax(){return!function(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}(this,Parallax),function(self1,call){if(!self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self1}(this,(Parallax.__proto__||Object.getPrototypeOf(Parallax)).apply(this,arguments))}return!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Parallax,_React$Component),_createClass(Parallax,[{key:"componentDidMount",value:function(){"function"==typeof this.context.refresh&&this.context.refresh()}},{key:"componentWillReceiveProps",value:function(){"function"==typeof this.context.refresh&&this.context.refresh()}},{key:"render",value:function(){var _props=this.props,data=_props.data,children=_props.children;return _react2.default.createElement("div",data,children)}}]),Parallax}(_react2.default.Component);Parallax.contextTypes={refresh:_propTypes2.default.func},exports.default=Parallax},1982:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(7294)),_propTypes2=_interopRequireDefault(__webpack_require__(5697)),_skrollr2=_interopRequireDefault(__webpack_require__(1840));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _possibleConstructorReturn(self1,call){if(!self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self1}var ParallaxProvider=function(_React$Component){function ParallaxProvider(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}(this,ParallaxProvider);for(var _ref,_temp,_this,_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=ParallaxProvider.__proto__||Object.getPrototypeOf(ParallaxProvider)).call.apply(_ref,[this].concat(args))),_this.refresh=function(){_this.skrollr&&_this.skrollr.refresh()},_this.isMobile=function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||window.opera)},_this.shouldInitOrDestroy=function(){var disableOnMobile=_this.props.disableOnMobile;if(!disableOnMobile){_this.initSkrollr();return}disableOnMobile&&_this.isMobile()&&void 0!==_this.skrollr&&(_this.skrollr.destroy(),_this.skrollr=void 0),disableOnMobile&&!_this.isMobile()&&void 0===_this.skrollr&&_this.initSkrollr()},_possibleConstructorReturn(_this,_temp)}return!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(ParallaxProvider,_React$Component),_createClass(ParallaxProvider,[{key:"initSkrollr",value:function(){this.skrollr=_skrollr2.default.init(this.props.init)}},{key:"componentDidMount",value:function(){this.shouldInitOrDestroy(),window.addEventListener("resize",this.shouldInitOrDestroy)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.shouldInitOrDestroy),this.skrollr&&this.skrollr.destroy()}},{key:"getChildContext",value:function(){return{refresh:this.refresh}}},{key:"render",value:function(){var children=this.props.children;return _react2.default.createElement("div",{id:"skrollr-body"},children)}}]),ParallaxProvider}(_react2.default.Component);ParallaxProvider.propTypes={init:_propTypes2.default.object,disableOnMobile:_propTypes2.default.bool},ParallaxProvider.defaultProps={init:{},disableOnMobile:!0},ParallaxProvider.childContextTypes={refresh:_propTypes2.default.func},exports.default=ParallaxProvider},1752:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _ParallaxProvider=__webpack_require__(1982);Object.defineProperty(exports,"Xu",{enumerable:!0,get:function(){return _interopRequireDefault(_ParallaxProvider).default}});var _Parallax=__webpack_require__(170);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"VS",{enumerable:!0,get:function(){return _interopRequireDefault(_Parallax).default}})},1840:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__; /*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */ !function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,ut=(r=r||{}).constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},(ft=!1!==r.forceHeight)&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=!1!==r.smoothScrolling,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},(Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})())?((st=t.getElementById("skrollr-body"))&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",x=.004,E=200,C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;"-"===(B=B[0]).slice(0,1)?(G=B,B=({"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"})[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var k,w,x,m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name){if("data-smooth-scrolling"!==g.name){if("data-edge-strategy"!==g.name){if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&"start"!==b&&"end"!==b?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute","end"===b?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0}else f=g.value}else c="off"!==g.value}else if(null===(l=t.querySelector(g.value)))throw'Unable to find anchor target "'+g.value+'"'}s.length&&(!a&&H in i?(k=lt[x=i[H]].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[]))}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),0|(i+=it.getScrollTop())+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return(pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||1e3,startTime:n,endTime:n+(t.duration||1e3),easing:U[t.easing||k],done:t.done}).topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=!0===r,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){R()(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,T,b,S;St(o,[f,u,"touchcancel","touchend"].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:var a=i-d,k=l-g;if(49>k*k+a*a){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(t=(e=lt[c]).element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)u=(l=n[a]).offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(n=(e=lt[c]).keyFrames,a=0,i=n.length;i>a;a++)m=d[(l=n[a]).constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=nt(a=rt(A.props[o].value,F.props[o].value,C)),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt?(o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0)):!ht&&(vt.targetTop-n&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)),Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt};!1!==(ct.beforerender&&ct.beforerender.call(it,l))&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],null!==(n=a.match(V))?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)(r=lt[(n=e[o])[H]])&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform");t&&"none"!==t||r&&"none"!==r||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if("zIndex"===(t=t.replace(z,q).replace("-","")))n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return(t=t||e.event).target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)kt((e=Yt[t]).element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)"function"==typeof(t=ut[e])?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0;return s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight)-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return i}).call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(window,document)}}]);