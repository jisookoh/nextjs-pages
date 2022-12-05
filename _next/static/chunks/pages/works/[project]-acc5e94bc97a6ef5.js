(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{2530:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return WorkProject}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_project_templateObject,_project_templateObject2,_project_templateObject3,taggedTemplateLiteral=__webpack_require__(4660),react=__webpack_require__(7294),styled_components_browser_esm=__webpack_require__(9521),next_router=__webpack_require__(1163),legacy_image=__webpack_require__(9755),image_default=__webpack_require__.n(legacy_image),defineProperty=__webpack_require__(9499),unsupportedIterableToArray=__webpack_require__(2937),VIEW_BOX="0 0 ".concat(200," ").concat(200),VIEW_BOX_SMALL="0 0 ".concat(140," ").concat(140),scoreColorSet={safe:"#d74522",low:"#ff8845",moderate:"#ffbc1d",dangerous:"#5cb85d",critical:"#4085f1"};scoreColorSet.safe,scoreColorSet.low,scoreColorSet.moderate,scoreColorSet.dangerous,scoreColorSet.critical;var summary_getScoreTextFromPercent=function(percent){var score=100*percent;return score<=30?"safe":score<=50?"low":score<=70?"moderate":score<=90?"dangerous":"critical"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty.Z)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var getCoordsOnCircle=function(_ref){var x=_ref.x,y=_ref.y,radius=_ref.radius,radian=_ref.degree/180*Math.PI;return{x:x+radius*Math.cos(radian),y:y+radius*Math.sin(radian)}},summary_getArc=function(props){var startCoord=getCoordsOnCircle(_objectSpread(_objectSpread({},props),{},{degree:0})),finishCoord=getCoordsOnCircle(_objectSpread({},props)),x=props.x,y=props.y,radius=props.radius,degree=props.degree;return"M ".concat(startCoord.x," ").concat(startCoord.y," A ").concat(radius," ").concat(radius," 0 ").concat(degree>180?1:0," 1 ").concat(finishCoord.x," ").concat(finishCoord.y," L ").concat(x," ").concat(y," ").concat(359.9===degree?"z":"")},hooks_useBrowserSize=function(){var _useState=(0,react.useState)([]),windowSize=_useState[0],setWindowSize=_useState[1],handleResize=function(){setWindowSize([window.innerWidth,window.innerHeight])};return(0,react.useEffect)(function(){return window.addEventListener("resize",handleResize),handleResize(),function(){return window.removeEventListener("resize",handleResize)}},[]),windowSize},global_theme=__webpack_require__(8721),jsx_runtime=__webpack_require__(5893),loadingAnimation=(0,styled_components_browser_esm.F4)(["0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke-dasharray:60,2000;stroke-dashoffset:0;}50%{stroke-dasharray:160,4000;}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);stroke-dasharray:60,2000;stroke-dashoffset:0;}"]),colorAnimation=(0,styled_components_browser_esm.F4)(["0%{stroke:",";}25%{stroke:",";}50%{stroke:",";}75%{stroke:",";}100%{stroke:",";}"],scoreColorSet.safe,scoreColorSet.low,scoreColorSet.moderate,scoreColorSet.dangerous,scoreColorSet.critical),fadeOut=(0,styled_components_browser_esm.F4)(["0%{opacity:1;}100%{opacity:0;}"]),FadeDot=styled_components_browser_esm.ZP.circle.withConfig({displayName:"chartStyle__FadeDot",componentId:"sc-1m6nk2k-1"})(["transform:translateY(-2px);-webkit-animation:"," 2s infinite ease-in-out;animation:"," 2s infinite ease-in-out;animation-delay:",";"],fadeOut,fadeOut,function(_ref2){return _ref2.delay}),FadeDots=react.memo(function(_ref4){var pos=_ref4.pos;return(0,jsx_runtime.jsxs)("g",{transform:"translate(".concat(pos-10," ").concat(pos,")"),children:[(0,jsx_runtime.jsx)(FadeDot,{cx:"4",cy:"0",r:"2",fill:"#bbb",delay:"0"}),(0,jsx_runtime.jsx)(FadeDot,{cx:"12",cy:"0",r:"2",fill:"#bbb",delay:"0.3s"}),(0,jsx_runtime.jsx)(FadeDot,{cx:"20",cy:"0",r:"2",fill:"#bbb",delay:"0.6s"})]})}),Path=styled_components_browser_esm.ZP.path.withConfig({displayName:"chartStyle__Path",componentId:"sc-1m6nk2k-2"})(["",";animation:"," 1s 1 cubic-bezier(0.1,0,0.3,0.8) alternate;"],function(_ref5){var boxShadowColor=_ref5.boxShadowColor;return boxShadowColor&&"\n    -webkit-filter: drop-shadow(0 0 5px ".concat(boxShadowColor,");\n    filter: drop-shadow(0 0 5px ").concat(boxShadowColor,");\n  ")},function(_ref6){return _ref6.animation}),LoadingPath=styled_components_browser_esm.ZP.path.withConfig({displayName:"chartStyle__LoadingPath",componentId:"sc-1m6nk2k-3"})(["-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;animation:"," 0.9s ease-in-out infinite,"," 2.4s infinite;"],function(_ref7){return _ref7.loadingAnimation},function(_ref8){return _ref8.colorAnimation});function ScoreChart_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ScoreChart_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ScoreChart_ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty.Z)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ScoreChart_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var PercentLabel=react.memo(function(_ref){var percent=_ref.percent,pos=_ref.pos,fontSize=_ref.fontSize,textPos=pos+3,textTranslate="translate(".concat(textPos," ").concat(textPos,")");return(0,jsx_runtime.jsx)("g",{transform:textTranslate,children:(0,jsx_runtime.jsxs)("text",{textAnchor:"middle",fontFamily:"Inter",dominantBaseline:"middle",children:[(0,jsx_runtime.jsx)("tspan",{fill:"#ffffff",fontSize:fontSize[0],fontWeight:600,alignmentBaseline:"baseline",children:(100*percent).toFixed(1)}),(0,jsx_runtime.jsx)("tspan",{fill:"#ffffff",fontSize:fontSize[1],fontWeight:400,alignmentBaseline:"baseline",children:"%"})]})})});function ScoreChart(_ref2){var arr,percent=_ref2.percent,windowWidth=(function(arr){if(Array.isArray(arr))return arr}(arr=hooks_useBrowserSize())||function(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,1)||(0,unsupportedIterableToArray.Z)(arr,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],_useState=(0,react.useState)(!1),isTablet=_useState[0],setIsTablet=_useState[1];(0,react.useEffect)(function(){windowWidth<=global_theme.Uh.tabletL?setIsTablet(!0):setIsTablet(!1)},[windowWidth]);var radius=isTablet?50:80,chartSize=isTablet?140:200,circlePos=isTablet?70:100,strokeWidth=isTablet?12:18,rotateG="rotate(-90 ".concat(circlePos," ").concat(circlePos,")"),pathColor=scoreColorSet[summary_getScoreTextFromPercent(percent)],data={x:circlePos,y:circlePos,radius:radius,degree:359.9*percent},strokeDasharray="".concat(2*Math.PI*radius*percent+1-(percent>=.95&&percent<1?15:3)," ").concat(1e3),loadingData=ScoreChart_objectSpread(ScoreChart_objectSpread({},data),{},{degree:7198}),rotateAnimation=(0,styled_components_browser_esm.F4)(["0%{stroke-dasharray:0 1000px;}100%{stroke-dasharray:",";}"],strokeDasharray);return(0,jsx_runtime.jsxs)("svg",{width:chartSize,height:chartSize,viewBox:isTablet?VIEW_BOX_SMALL:VIEW_BOX,children:[(0,jsx_runtime.jsxs)("g",{transform:rotateG,children:[(0,jsx_runtime.jsx)("circle",{cx:circlePos,cy:circlePos,r:radius,stroke:"#ACC0C7",strokeOpacity:.3,fill:"none",strokeWidth:strokeWidth}),percent<0&&(0,jsx_runtime.jsx)(LoadingPath,{d:summary_getArc(loadingData),stroke:"#bbb",fill:"none",strokeWidth:strokeWidth,strokeLinecap:"round",loadingAnimation:loadingAnimation,colorAnimation:colorAnimation}),percent>0&&(0,jsx_runtime.jsx)(Path,{d:summary_getArc(data),stroke:pathColor,fill:"none",strokeWidth:strokeWidth,strokeLinecap:"round",strokeDasharray:strokeDasharray,animation:rotateAnimation,boxShadowColor:pathColor})]}),percent<0?(0,jsx_runtime.jsx)(FadeDots,{pos:circlePos}):(0,jsx_runtime.jsx)(PercentLabel,{percent:percent,pos:circlePos,fontSize:isTablet?[22,13]:[26,16]})]})}var index_es=__webpack_require__(9603),free_solid_svg_icons=__webpack_require__(9417);function ContentsDescription(_ref){var qProject=_ref.qProject,queryProject=(0,next_router.useRouter)().query.project,roundBoxRef=(0,react.useRef)(null),_useState=(0,react.useState)(""),resultImgBool=_useState[0],setResultImgBool=_useState[1];return(0,react.useEffect)(function(){var ScrollBool=!1;window.addEventListener("scroll",function(){var _roundBoxRef$current;null!=roundBoxRef&&roundBoxRef.current&&(null===(_roundBoxRef$current=roundBoxRef.current)||void 0===_roundBoxRef$current?void 0:_roundBoxRef$current.getBoundingClientRect().top)<window.innerHeight/1.5?!1===ScrollBool&&(ScrollBool=!0,setResultImgBool("is_active")):!0===ScrollBool&&(ScrollBool=!1,setResultImgBool(""))})},[roundBoxRef]),(0,jsx_runtime.jsx)(ContributeWrapper,{children:(null==qProject?void 0:qProject.project)!==queryProject?(0,jsx_runtime.jsx)(MissingPage,{children:"404 존재하지 않는 페이지 입니다."}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(TitleBox,{children:(0,jsx_runtime.jsx)(Descrition,{align:"center",children:null==qProject?void 0:qProject.desc})}),(0,jsx_runtime.jsx)(DescriptionBox,{position:"center",className:resultImgBool,ref:roundBoxRef,children:(0,jsx_runtime.jsxs)(Flex,{children:[(0,jsx_runtime.jsxs)("div",{className:"workLoad",children:[(0,jsx_runtime.jsx)(SubTitle,{children:"기여도"}),"is_active"===resultImgBool&&(0,jsx_runtime.jsx)(ScoreChart,{percent:null==qProject?void 0:qProject.contribute})]}),(0,jsx_runtime.jsx)(FlexCol,{children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(SubTitle,{children:"Technologies"}),(0,jsx_runtime.jsx)(TechList,{children:null==qProject?void 0:qProject.tech.map(function(val,idx){return(0,jsx_runtime.jsxs)(TechListItem,{children:[(0,jsx_runtime.jsx)(image_default(),{src:"/".concat("/nextjs-pages").concat(val.icon),width:"20",height:"20",alt:"".concat(val.techName," icon")}),(0,jsx_runtime.jsx)("span",{children:val.techName})]},idx)})})]})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(SubTitle,{children:"작업기간"}),(0,jsx_runtime.jsx)(Descrition,{children:null==qProject?void 0:qProject.during})]})]})}),(0,jsx_runtime.jsxs)(DescriptionBox,{position:"center",children:[(0,jsx_runtime.jsx)(ImageWrapper,{children:(null==qProject?void 0:qProject.image)&&(0,jsx_runtime.jsx)(image_default(),{src:"/".concat("/nextjs-pages").concat(null==qProject?void 0:qProject.image),alt:"".concat(null==qProject?void 0:qProject.title," 목업 이미지"),layout:"fill"})}),(0,jsx_runtime.jsx)(HomePageLink,{children:(0,jsx_runtime.jsxs)("a",{href:null==qProject?void 0:qProject.link,target:"_blank",rel:"noreferrer noopener",children:[(0,jsx_runtime.jsx)("span",{children:"홈페이지 이동"}),(0,jsx_runtime.jsx)("span",{className:"Icon",children:(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons._tD})})]})})]})]})})}var ContributeWrapper=styled_components_browser_esm.ZP.article.withConfig({displayName:"ContentsDescription__ContributeWrapper",componentId:"sc-1bm67ys-0"})(["padding-bottom:10rem;"]),TitleBox=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__TitleBox",componentId:"sc-1bm67ys-1"})(['padding-bottom:50px;margin-bottom:50px;position:relative;&::after{content:"";display:inline-block;position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:10%;height:3px;background-color:#fff;opacity:0.2;}']),SubTitle=styled_components_browser_esm.ZP.h5.withConfig({displayName:"ContentsDescription__SubTitle",componentId:"sc-1bm67ys-2"})(["display:block;margin-right:0px;margin-left:0px;padding-left:0px;font-family:Poppins,sans-serif;font-weight:600;font-size:2rem;margin:10px 0;"]),Descrition=styled_components_browser_esm.ZP.p.withConfig({displayName:"ContentsDescription__Descrition",componentId:"sc-1bm67ys-3"})(["margin-bottom:15px;padding-right:0px;font-size:1.6rem;line-height:1.8;-o-object-fit:fill;object-fit:fill;text-align:",";white-space:pre-line;word-break:keep-all;"],function(_ref2){return"center"==_ref2.align?"center":"left"}),DescriptionBox=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__DescriptionBox",componentId:"sc-1bm67ys-4"})(["",""],function(_ref3){if("center"===_ref3.position)return"\n                    margin-bottom: 50px;\n                "}),Flex=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__Flex",componentId:"sc-1bm67ys-5"})(["display:flex;margin-bottom:30px;min-height:300px;> div{padding-left:10%;flex:1 0 0;}",";",""],function(_ref4){return _ref4.theme.media.tabletL(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n        flex-wrap: wrap;\n        margin-bottom: 50px;\n\n        > div {\n            &:not(:last-child) {\n                width: 50%;\n                margin-bottom: 5rem;\n            }\n\n            width: auto;\n            flex: none;\n            padding-left: 5rem;\n        }\n    "])))},function(_ref5){return _ref5.theme.media.mobileL(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n        > div {\n            padding-left: 0;\n            &:nth-child(2) {\n                padding-left: 3rem;\n            }\n        }\n    "])))}),FlexCol=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__FlexCol",componentId:"sc-1bm67ys-6"})(["display:flex;flex-direction:column;width:70%;"]),TechList=styled_components_browser_esm.ZP.ul.withConfig({displayName:"ContentsDescription__TechList",componentId:"sc-1bm67ys-7"})(["list-style:none;padding:0;margin:0;"]),TechListItem=styled_components_browser_esm.ZP.li.withConfig({displayName:"ContentsDescription__TechListItem",componentId:"sc-1bm67ys-8"})(["display:flex;align-items:center;font-size:1.6rem;> span{width:calc(100% - 30px);}> span:not(:last-child){margin-right:15px !important;}&:not(:last-child){margin-bottom:10px;}",""],function(_ref6){return _ref6.theme.media.mobileL(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n        > span {\n            width: calc(100% - 10px);\n            \n            &:not(:last-child) {\n                margin-right: 10px !important;\n            }\n        }\n    "])))}),HomePageLink=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__HomePageLink",componentId:"sc-1bm67ys-9"})(["text-align:center;& > a{display:inline-block;max-width:200px;width:100%;border:3px solid #3399ff;text-align:center;color:#3399ff;padding:20px 0;text-transform:capitalize;position:relative;overflow:hidden!important;transition:all .3s ease-in-out;background:transparent!important;z-index:10;font-weight:500;border-radius:5px;font-size:1.6rem;::after{content:'';width:0%;height:100%;display:block;background:#3399ff;position:absolute;transform:skewX(-20deg);left:-10%;opacity:0;top:0;z-index:-15;transition:all .4s cubic-bezier(.2,.95,.57,.99);box-shadow:2px 0px 14px rgb(0 0 0 / 60%);}:hover{color:#fff !important;border:3px solid #3399ff;box-shadow:0 10px 20px 0 rgba(0,0,0,0.15);}:hover::after{opacity:1;width:120%;}> span{display:inline-block;vertical-align:middle;margin-right:10px;}> span.Icon{display:inline-block;vertical-align:middle;width:12px;margin-right:0;font-size:0;}}",""],function(_ref7){return _ref7.theme.media.tabletL(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n        > a {\n            max-width: 150px;\n            padding: 15px 0;\n\n            > span.Icon {\n                width: 10px;\n            }\n        }\n    "])))}),MissingPage=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__MissingPage",componentId:"sc-1bm67ys-10"})(["height:300px;text-align:center;font-size:3rem;font-weight:bold;"]),ImageWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"ContentsDescription__ImageWrapper",componentId:"sc-1bm67ys-11"})(["position:relative;height:453px;margin-bottom:30px;",""],function(_ref8){return _ref8.theme.media.tabletL(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n        height: auto;\n\n        > span {\n            position: relative !important;\n\n            > img {\n                width: 100% !important;\n                height: 100% !important;\n                position: relative !important;\n            }\n        }\n    "])))}),ChartContent={data:[{id:1,project:"hoban",banner:"/images/hobanBanner.png",title:"호반문화재단",desc:"호반문화재단은 복합문화예술의 플랫폼을 통하여 지속가능한 예술의 가치를 창출하는 재단입니다. \n 해당 작업은 php기반의 라이브러리인 Laravel로 퍼블리싱을 진행하였습니다. \n 풀 반응형이라 어떤 디바이스에서 접속하더라도 사용자가 동일한 정보를 얻도록 작업하였습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"Slick",icon:"/images/slickIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"},{techName:"Jquery UI",icon:"/images/jqueryUiIcon.png"}],during:"2주",link:"http://www.hobancf.or.kr/",image:"/images/mokup/hobanMokup.png"},{id:2,project:"hanshin",banner:"/images/hanshinBanner.jpg",title:"한신메디피아",desc:"한신메디피아는 건강검진 빅데이터를 활용한 건강검진 기업입니다. \n 해당 작업은 php기반의 라이브러리인 Laravel로 퍼블리싱을 진행하였습니다. \n fullPage.js를 활용하여 메인페이지와 일부 서브페이지에 적용하였으며, 다국어(영어, 중국어)가 적용되었습니다. \n 자주 사용하는 스트립트와 css를 모듈화/컴포넌트화 하여 재사용성을 높인 사이트 중 하나 입니다. \n 웹과 모바일에 특화된 반응형 페이지 입니다. 모바일에서 동일한 정보를 제공하기 위하여 fullPage.js가 적용되지 않습니다.",contribute:.9,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"fullPage",icon:"/images/fullpageIcon.png"},{techName:"Jquery UI",icon:"/images/jqueryUiIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"}],during:"3주",link:"https://hsmedipia.co.kr/",image:"/images/mokup/hsMokup.png"},{id:3,project:"foodbank",banner:"/images/foodbankBanner.png",title:"푸드뱅크",desc:"푸드뱅크는 저소득층/생활이 어려운자에게 기부식품과 생활용품을 제공하는 기업입니다. \n 해당 작업은 php기반의 라이브러리인 Laravel로 퍼블리싱을 진행하였습니다. \n 메인페이지에 skrollr.js 라이브러리를 사용하여 parallax scrolling을 적용하여 생동감을 더하였으머, \n 후원 / 기부 / 교육에 관련한 컨텐츠가 많아 input form에 신경써서 작업하였습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"Slick",icon:"/images/slickIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"},{techName:"Jquery UI",icon:"/images/jqueryUiIcon.png"},{techName:"skrollr",icon:"/images/skrollrIcon.png"}],during:"6주",link:"http://www.s-foodbank.or.kr/",image:"/images/mokup/foodbankMokup.png"},{id:4,project:"wfwp",banner:"/images/wfwpBanner.jpg",title:"세계평화여성연합",desc:"세계여성평화협회는 UN 경제사회 이사회 포괄적 협의지위 기관 국제사회의 지속가능발전목표(UN SDGs)를 달성을 목표로 하는 단체입니다. \n 헤당 페이지는 적응형 페이지로 웹에만 특화되어 있는 페이지 입니다. \n 메인페이지와 소개페이지는 타 작업자가 진행하였으며, php 순수언어에서 Laravel로 변환 작업을 하였습니다. \n 특징으론 SDGs 페이지에서 각 국가 페이지들은 동적 라우팅으로 작업하였고, 국가별로 컴포넌트화 하였습니다.",contribute:.8,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"}],during:"3주",link:"http://truewomen.gabia.io/",image:"/images/mokup/wfwpMokup.png"},{id:5,project:"kyunghee",banner:"/images/kyungheeBanner.jpg",title:"경희대학교 중앙기기센터",desc:"경희대학교 중앙기기센터는 연구과제 수행에 필요한 \n 연구 장비를 공동 활용과 우수한 연구성과 창출을 위한 시험분석 등을 지원하는 목적을 위한 센터입니다. \n 해당 프로젝트는 메인(반응형)만 작업을 하였으며 \n초기 Laravel로 작업 되었으나 현재는 Laravel을 제외한 php 기본언어로 변경 되었습니다.",contribute:.2,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"}],during:"1주",link:"http://clia.khu.ac.kr/clia/",image:"/images/mokup/kyungheeMokup.png"},{id:6,project:"s-win",banner:"/images/s-winBanner.jpg",title:"서울특별시사회복지협의회",desc:"서울사회복지협의회는 서울시민의 복지증진과 발전에 기여하고 있는 법정단체입니다. \n 이 프로젝트는 php 순수언어로 작업하였으며, 풀반응형 사이트입니다.\n 작업량은 메인페이지만 4/2가량 작업하였으며, 웹 접근성에 중점을 두고 작업을 진행하였습니다.",contribute:.06,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"}],during:"1주",link:"https://s-win.or.kr/",image:"/images/mokup/s-winMokup.png"},{id:7,project:"antz",banner:"/images/antzBanner.jpg",title:"앙츠",desc:"앙츠는 디지털기기 A/S와 Apple의 최우수 공인서비스 제공 업체입니다. \n 앙츠는 php 순수언어로 작업하였고 풀반응형 사이트 입니다. \n 특징으론 센터리스트 각 지역 클릭 시 이미지 교체 스크립트이며 map태그와 이미지 좌표를 이용하여 작업하였습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"Slick",icon:"/images/slickIcon.png"}],during:"3주",link:"http://www.iantz.co.kr/",image:"/images/mokup/antzMokup.png"},{id:8,project:"ibg",banner:"/images/ibgBanner.jpg",title:"IBG",desc:"IBG INC는 다양한 포장기계 및 포장 부자재를 공급하는 업체입니다. \n 해당 사이트는 php 기반의 라이브러리인 Laravel로 작업을 진행하였으며, 웹에 최적화되어 있는 적응형 사이트이고, \n 기존에 짜여진 소스코드를 토대로 공동 개발 작업을 하였던 프로젝트입니다. \n 개발 작업은 메인 슬라이드, 팝업, 상품페이지들과 Q/A게시판, 글쓰기 페이지, 고객상담에 대한 개발작업을 진행하였습니다..  \n 특징으론 gallery형식의 상품페이지는 세분화된 페이지가 많아서 하나의 컴포넌트에서 router만 조작해주었고, 파라미터에 category를 추가하여 그룹화된 상품들을 분리해주었습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"Jquery UI",icon:"/images/jqueryUiIcon.png"}],during:"3주",link:"http://www.ibginc.co.kr/",image:"/images/mokup/ibgMokup.png"},{id:9,project:"kwebtoon",banner:"/images/kwebBanner.jpg",title:"만화진흥원 (International)",desc:"이 프로젝트는 k-webtoon을 일본과 말레이시아에 홍보를 위한 페이지 입니다. \n Laravel 프레임 워크로 개발 작업 없이 퍼블리싱으로만 작업 되었으며, 풀반응형으로 작업 하였습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"}],during:"2주",link:"http://kwebtoon.net/",image:"/images/mokup/kwebMokup.png"},{id:10,project:"citimatrials",banner:"/images/cmsBanner.jpg",title:"CMS",desc:"CMS는 FRP 원료 및 복합재 제조 생산 자재를 전문 공급하는 업체입니다. \n Laravel 프레임 워크로 개발 작업 없이 퍼블리싱으로만 작업 되었으며, 풀반응형으로 작업 하였습니다. \n 서브페이지의 css의 재사용성을 높인 작업물 중 하나이며, 특징으로 CONTACT페이지의 각 국가에 호버 시 해당 국가의 정보를 표기하는 작업을 진행하였습니다.",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"}],during:"2주",link:"http://www.citimaterials.com/",image:"/images/mokup/cmsMokup.png"},{id:11,project:"hoan",banner:"/images/hoanBanner.jpg",title:"태원D&C",desc:"태원D&C는 예술과 문화가 담긴 건축 기업입니다. \n 이 프로젝트는 Laravel로 진행하였으며, 풀반응형으로 작업하였습니다. \n 버튼에 progressbar.js를 활용하여 svg효과를 주었고, cursor 효과를 커스터마이징하여 직관적인 느낌을 살렸습니다. ",contribute:1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"AOS",icon:"/images/aosIcon.png"},{techName:"progressbar",icon:"/images/progressIcon.png"}],during:"2주",link:"http://hoan20.co.kr/",image:"/images/mokup/hoanMokup.png"},{id:12,project:"sparkle",banner:"/images/sparkleBanner.jpg",title:"스파클몰",desc:"스파크몰은 생수/음료/부자재 등 스파클에서 판매하는 상품을 구매할 수 있는 이커먼스 사이트입니다. \n 이 프로젝트는 웹과 모바일에 특화된 사이트이며, php 순수코딩으로 작업한 퍼블리싱을 Laravel로 변환작업을 한 사이트입니다. \n 해당 프로젝트는 Git Lab으로 코드관리/협업 하였으며, \n 기존 운영하던 스파클몰 소스에서 컨트롤러와 Route를 연결하는 작업을 진행하였습니다. \n 또한 Hammer.js를 사용하여 모바일일 때 상품 카테고리들을 손가락 슬라이딩으로 넘길 수 있도록 하였습니다.",contribute:.1,tech:[{techName:"Jquery",icon:"/images/jqueryIcon.png"},{techName:"PHP",icon:"/images/phpIcon.png"},{techName:"Laravel",icon:"/images/laravelIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"},{techName:"Hammer.js",icon:"/images/hammerIcon.jpg"}],during:"2주",link:"https://www.sparklemall.co.kr/main",image:"/images/mokup/sparkleMokup.png"},{id:13,project:"ip-detector",banner:"/images/ipBanner.jpg",title:"IP-DETECTOR",desc:"",contribute:.3,tech:[{techName:"React",icon:"/images/reactIcon.png"},{techName:"Next.js",icon:"/images/nextIcon.png"},{techName:"TypeScript",icon:"/images/tsIcon.png"},{techName:"Swiper Slide",icon:"/images/swiperIcon.png"}],during:"2주",link:"https://ip-detector.com/",image:"/images/mokup/ipMokup.png"},{id:14,project:"noscam",banner:"/images/noscamBanner.jpg",title:"NOSCAM",desc:"노스캠은 전화번호, 계좌번호를 통해 사기정보를 확인할 수 있는 사이트 입니다. \n 해당 프로젝트는 검색결과 리뉴얼에 따른 API통신 작업과 통신에 따른 분기처리, 결과 데이터 송출 및 퍼블리싱 작업을 진행하였습니다. \n 소스코드는 svn으로 관리하였습니다. ",contribute:.2,tech:[{techName:"Python",icon:"/images/pythonIcon.png"},{techName:"Flask",icon:"/images/flaskIcon.png"}],during:"유지보수",link:"https://noscam.co.kr/",image:"/images/mokup/noscamMokup.png"}]};function WorkProject(){var queryProject=(0,next_router.useRouter)().query.project,project=ChartContent.data.find(function(x){return x.project===queryProject});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SubSection,{number:1,children:(0,jsx_runtime.jsxs)(BannerWrapper,{children:[null!=project&&project.banner?(0,jsx_runtime.jsx)(image_default(),{src:"/".concat("/nextjs-pages").concat(project.banner),layout:"fill",objectFit:"cover",alt:"프로젝트 배너",priority:!0}):(0,jsx_runtime.jsx)(image_default(),{src:"/".concat("/nextjs-pages","/images/exImg.jpg"),layout:"fill",objectFit:"cover",alt:"프로젝트 배너",priority:!0}),(0,jsx_runtime.jsx)(BannerTitle,{children:null==project?void 0:project.title})]})}),(0,jsx_runtime.jsx)(SubSection,{number:2,children:(0,jsx_runtime.jsx)(ContentsDescription,{qProject:project})})]})}var SubSection=styled_components_browser_esm.ZP.section.withConfig({displayName:"project__SubSection",componentId:"sc-wuuzyw-0"})(["position:relative;"," ",";"],function(_ref){switch(_ref.number){case 1:return"\n                    margin-bottom: 70px;\n                ";case 2:return"\n                    max-width: 960px;\n                    margin: 0 auto;\n\n                    ".concat(function(_ref2){return _ref2.theme.media.tabletL(_project_templateObject||(_project_templateObject=(0,taggedTemplateLiteral.Z)(["\n                        padding: 0 20px;\n                    "])))},";\n                ")}},function(_ref3){return _ref3.theme.media.tabletL(_project_templateObject2||(_project_templateObject2=(0,taggedTemplateLiteral.Z)(["\n        ","\n    "])),function(_ref4){switch(_ref4.number){case 1:return"\n                        margin-bottom: 50px;\n                    ";case 2:return"\n                        padding: 0 20px;\n                    "}})}),BannerWrapper=styled_components_browser_esm.ZP.figure.withConfig({displayName:"project__BannerWrapper",componentId:"sc-wuuzyw-1"})(["height:300px;background-color:#333;margin:auto 0;position:relative;overflow:hidden;&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);}",";"],function(_ref5){return _ref5.theme.media.tabletL(_project_templateObject3||(_project_templateObject3=(0,taggedTemplateLiteral.Z)(["\n        height: 200px;\n    "])))}),BannerTitle=styled_components_browser_esm.ZP.h2.withConfig({displayName:"project__BannerTitle",componentId:"sc-wuuzyw-2"})(["font-size:3.0rem;font-weight:500;color:#fff;position:absolute;top:50%;left:0;width:100%;text-align:center;transform:translateY(-50%);z-index:2;margin:0;padding:0;"])},2511:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[project]",function(){return __webpack_require__(2530)}])}},function(__webpack_require__){__webpack_require__.O(0,[976,755,527,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2511)}),_N_E=__webpack_require__.O()}]);