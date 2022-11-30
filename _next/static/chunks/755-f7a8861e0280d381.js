(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{748:function(module,exports,__webpack_require__){"use strict";var _slicedToArray=__webpack_require__(5696),_toConsumableArray=__webpack_require__(7980);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(_param){var src,sizerSvgUrl,src1=_param.src,sizes=_param.sizes,_param$unoptimized=_param.unoptimized,unoptimized=void 0!==_param$unoptimized&&_param$unoptimized,_param$priority=_param.priority,priority=void 0!==_param$priority&&_param$priority,loading=_param.loading,_param$lazyRoot=_param.lazyRoot,lazyBoundary=_param.lazyBoundary,className=_param.className,quality=_param.quality,width=_param.width,height=_param.height,style=_param.style,objectFit=_param.objectFit,objectPosition=_param.objectPosition,onLoadingComplete=_param.onLoadingComplete,_param$placeholder=_param.placeholder,placeholder=void 0===_param$placeholder?"empty":_param$placeholder,blurDataURL=_param.blurDataURL,all=_object_without_properties_loose(_param,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),configContext=_react.useContext(_imageConfigContext.ImageConfigContext),config=_react.useMemo(function(){var c=configEnv||configContext||_imageConfig.imageConfigDefault,allSizes=[].concat(_toConsumableArray(c.deviceSizes),_toConsumableArray(c.imageSizes)).sort(function(a,b){return a-b}),deviceSizes=c.deviceSizes.sort(function(a,b){return a-b});return _extends({},c,{allSizes:allSizes,deviceSizes:deviceSizes})},[configContext]),rest=all,layout=sizes?"responsive":"intrinsic";"layout"in rest&&(rest.layout&&(layout=rest.layout),delete rest.layout);var loader=defaultImageLoader;if("loader"in rest){if(rest.loader){var customImageLoader=rest.loader;loader=function(obj){return obj.config,customImageLoader(_object_without_properties_loose(obj,["config"]))}}delete rest.loader}var staticSrc="";if("object"==typeof(src=src1)&&(isStaticRequire(src)||void 0!==src.src)){var staticImageData=isStaticRequire(src1)?src1.default:src1;if(!staticImageData.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));if(blurDataURL=blurDataURL||staticImageData.blurDataURL,staticSrc=staticImageData.src,(!layout||"fill"!==layout)&&(height=height||staticImageData.height,width=width||staticImageData.width,!staticImageData.height||!staticImageData.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)))}var isLazy=!priority&&("lazy"===loading||void 0===loading);((src1="string"==typeof src1?src1:staticSrc).startsWith("data:")||src1.startsWith("blob:"))&&(unoptimized=!0,isLazy=!1),loadedImageURLs.has(src1)&&(isLazy=!1),config.unoptimized&&(unoptimized=!0);var _useState2=_slicedToArray(_react.useState(!1),2),blurComplete=_useState2[0],setBlurComplete=_useState2[1],_useIntersection3=_slicedToArray(_useIntersection.useIntersection({rootRef:void 0===_param$lazyRoot?null:_param$lazyRoot,rootMargin:lazyBoundary||"200px",disabled:!isLazy}),3),setIntersection=_useIntersection3[0],isIntersected=_useIntersection3[1],resetIntersected=_useIntersection3[2],isVisible=!isLazy||isIntersected,wrapperStyle={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},sizerStyle={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},hasSizer=!1,widthInt=getInt(width),heightInt=getInt(height),qualityInt=getInt(quality),imgStyle=Object.assign({},style,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:objectFit,objectPosition:objectPosition}),blurStyle="blur"!==placeholder||blurComplete?{}:{backgroundSize:objectFit||"cover",backgroundPosition:objectPosition||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(blurDataURL,'")')};if("fill"===layout)wrapperStyle.display="block",wrapperStyle.position="absolute",wrapperStyle.top=0,wrapperStyle.left=0,wrapperStyle.bottom=0,wrapperStyle.right=0;else if(void 0!==widthInt&&void 0!==heightInt){var quotient=heightInt/widthInt,paddingTop=isNaN(quotient)?"100%":"".concat(100*quotient,"%");"responsive"===layout?(wrapperStyle.display="block",wrapperStyle.position="relative",hasSizer=!0,sizerStyle.paddingTop=paddingTop):"intrinsic"===layout?(wrapperStyle.display="inline-block",wrapperStyle.position="relative",wrapperStyle.maxWidth="100%",hasSizer=!0,sizerStyle.maxWidth="100%",sizerSvgUrl="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(widthInt,"%27%20height=%27").concat(heightInt,"%27/%3e")):"fixed"===layout&&(wrapperStyle.display="inline-block",wrapperStyle.position="relative",wrapperStyle.width=widthInt,wrapperStyle.height=heightInt)}var imgAttributes={src:emptyDataURL,srcSet:void 0,sizes:void 0};isVisible&&(imgAttributes=generateImgAttrs({config:config,src:src1,unoptimized:unoptimized,layout:layout,width:widthInt,quality:qualityInt,sizes:sizes,loader:loader}));var srcString=src1,linkProps={imageSrcSet:imgAttributes.srcSet,imageSizes:imgAttributes.sizes,crossOrigin:rest.crossOrigin},useLayoutEffect=_react.default.useLayoutEffect,onLoadingCompleteRef=_react.useRef(onLoadingComplete),previousImageSrc=_react.useRef(src1);_react.useEffect(function(){onLoadingCompleteRef.current=onLoadingComplete},[onLoadingComplete]),useLayoutEffect(function(){previousImageSrc.current!==src1&&(resetIntersected(),previousImageSrc.current=src1)},[resetIntersected,src1]);var imgElementArgs=_extends({isLazy:isLazy,imgAttributes:imgAttributes,heightInt:heightInt,widthInt:widthInt,qualityInt:qualityInt,layout:layout,className:className,imgStyle:imgStyle,blurStyle:blurStyle,loading:loading,config:config,unoptimized:unoptimized,placeholder:placeholder,loader:loader,srcString:srcString,onLoadingCompleteRef:onLoadingCompleteRef,setBlurComplete:setBlurComplete,setIntersection:setIntersection,isVisible:isVisible,noscriptSizes:sizes},rest);return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement("span",{style:wrapperStyle},hasSizer?_react.default.createElement("span",{style:sizerStyle},sizerSvgUrl?_react.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:sizerSvgUrl}):null):null,_react.default.createElement(ImageElement,Object.assign({},imgElementArgs))),priority?_react.default.createElement(_head.default,null,_react.default.createElement("link",Object.assign({key:"__nimg-"+imgAttributes.src+imgAttributes.srcSet+imgAttributes.sizes,rel:"preload",as:"image",href:imgAttributes.srcSet?void 0:imgAttributes.src},linkProps))):null)};var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_interop_require_wildcard=__webpack_require__(1598).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_wildcard(__webpack_require__(7294)),_head=_interop_require_default(__webpack_require__(6505)),_imageConfig=__webpack_require__(5980),_useIntersection=__webpack_require__(7215),_imageConfigContext=__webpack_require__(1059);__webpack_require__(2783);var _normalizeTrailingSlash=__webpack_require__(4979);function normalizeSrc(src){return"/"===src[0]?src.slice(1):src}var configEnv={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},loadedImageURLs=new Set,emptyDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loaders=new Map([["default",function(_ref5){var config=_ref5.config,src=_ref5.src,width=_ref5.width,quality=_ref5.quality;return src.endsWith(".svg")&&!config.dangerouslyAllowSVG?src:"".concat(_normalizeTrailingSlash.normalizePathTrailingSlash(config.path),"?url=").concat(encodeURIComponent(src),"&w=").concat(width,"&q=").concat(quality||75)}],["imgix",function(_ref){var config=_ref.config,src=_ref.src,width=_ref.width,quality=_ref.quality,url=new URL("".concat(config.path).concat(normalizeSrc(src))),params=url.searchParams;return params.set("auto",params.getAll("auto").join(",")||"format"),params.set("fit",params.get("fit")||"max"),params.set("w",params.get("w")||width.toString()),quality&&params.set("q",quality.toString()),url.href}],["cloudinary",function(_ref3){var config=_ref3.config,src=_ref3.src,paramsString=["f_auto","c_limit","w_"+_ref3.width,"q_"+(_ref3.quality||"auto")].join(",")+"/";return"".concat(config.path).concat(paramsString).concat(normalizeSrc(src))}],["akamai",function(_ref2){var config=_ref2.config,src=_ref2.src,width=_ref2.width;return"".concat(config.path).concat(normalizeSrc(src),"?imwidth=").concat(width)}],["custom",function(_ref4){var src=_ref4.src;throw Error('Image with src "'.concat(src,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function isStaticRequire(src){return void 0!==src.default}function generateImgAttrs(_ref7){var config=_ref7.config,src=_ref7.src,unoptimized=_ref7.unoptimized,layout=_ref7.layout,width=_ref7.width,quality=_ref7.quality,sizes=_ref7.sizes,loader=_ref7.loader;if(unoptimized)return{src:src,srcSet:void 0,sizes:void 0};var _getWidths=function(_ref6,width,layout,sizes){var deviceSizes=_ref6.deviceSizes,allSizes=_ref6.allSizes;if(sizes&&("fill"===layout||"responsive"===layout)){for(var match,viewportWidthRe=/(^|\s)(1?\d?\d)vw/g,percentSizes=[];match=viewportWidthRe.exec(sizes);match)percentSizes.push(parseInt(match[2]));if(percentSizes.length){var smallestRatio=.01*Math.min.apply(Math,percentSizes);return{widths:allSizes.filter(function(s){return s>=deviceSizes[0]*smallestRatio}),kind:"w"}}return{widths:allSizes,kind:"w"}}return"number"!=typeof width||"fill"===layout||"responsive"===layout?{widths:deviceSizes,kind:"w"}:{widths:_toConsumableArray(new Set([width,2*width].map(function(w){return allSizes.find(function(p){return p>=w})||allSizes[allSizes.length-1]}))),kind:"x"}}(config,width,layout,sizes),widths=_getWidths.widths,kind=_getWidths.kind,last=widths.length-1;return{sizes:sizes||"w"!==kind?sizes:"100vw",srcSet:widths.map(function(w,i){return"".concat(loader({config:config,src:src,quality:quality,width:w})," ").concat("w"===kind?w:i+1).concat(kind)}).join(", "),src:loader({config:config,src:src,quality:quality,width:widths[last]})}}function getInt(x){return"number"==typeof x?x:"string"==typeof x?parseInt(x,10):void 0}function defaultImageLoader(loaderProps){var ref,loaderKey=(null==(ref=loaderProps.config)?void 0:ref.loader)||"default",load=loaders.get(loaderKey);if(load)return load(loaderProps);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(_imageConfig.VALID_LOADERS.join(", "),". Received: ").concat(loaderKey))}function handleLoading(img,src,layout,placeholder,onLoadingCompleteRef,setBlurComplete){img&&img.src!==emptyDataURL&&img["data-loaded-src"]!==src&&(img["data-loaded-src"]=src,("decode"in img?img.decode():Promise.resolve()).catch(function(){}).then(function(){if(img.parentNode&&(loadedImageURLs.add(src),"blur"===placeholder&&setBlurComplete(!0),null==onLoadingCompleteRef?void 0:onLoadingCompleteRef.current)){var naturalWidth=img.naturalWidth,naturalHeight=img.naturalHeight;onLoadingCompleteRef.current({naturalWidth:naturalWidth,naturalHeight:naturalHeight})}}))}var ImageElement=function(_param){var imgAttributes=_param.imgAttributes,widthInt=(_param.heightInt,_param.widthInt),qualityInt=_param.qualityInt,layout=_param.layout,className=_param.className,imgStyle=_param.imgStyle,blurStyle=_param.blurStyle,isLazy=_param.isLazy,placeholder=_param.placeholder,loading=_param.loading,srcString=_param.srcString,config=_param.config,unoptimized=_param.unoptimized,loader=_param.loader,onLoadingCompleteRef=_param.onLoadingCompleteRef,setBlurComplete=_param.setBlurComplete,setIntersection=_param.setIntersection,_onLoad=_param.onLoad,_onError=_param.onError,noscriptSizes=(_param.isVisible,_param.noscriptSizes),rest=_object_without_properties_loose(_param,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return loading=isLazy?"lazy":loading,_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("img",Object.assign({},rest,imgAttributes,{decoding:"async","data-nimg":layout,className:className,style:_extends({},imgStyle,blurStyle),ref:_react.useCallback(function(img){setIntersection(img),(null==img?void 0:img.complete)&&handleLoading(img,srcString,layout,placeholder,onLoadingCompleteRef,setBlurComplete)},[setIntersection,srcString,layout,placeholder,onLoadingCompleteRef,setBlurComplete]),onLoad:function(event){handleLoading(event.currentTarget,srcString,layout,placeholder,onLoadingCompleteRef,setBlurComplete),_onLoad&&_onLoad(event)},onError:function(event){"blur"===placeholder&&setBlurComplete(!0),_onError&&_onError(event)}})),(isLazy||"blur"===placeholder)&&_react.default.createElement("noscript",null,_react.default.createElement("img",Object.assign({},rest,generateImgAttrs({config:config,src:srcString,unoptimized:unoptimized,layout:layout,width:widthInt,quality:qualityInt,sizes:noscriptSizes,loader:loader}),{decoding:"async","data-nimg":layout,style:imgStyle,className:className,loading:loading}))))};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},9755:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(748)}}]);