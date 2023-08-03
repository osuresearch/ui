"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[6493],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js");const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.Z)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.Z)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.Z)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.Z)({alt,src,srcSet,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other,{children}))}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./node_modules/@mui/material/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiButton",slot)}const Button_buttonClasses=(0,generateUtilityClasses.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var ButtonGroupContext=__webpack_require__("./node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],commonIconStyles=ownerState=>(0,esm_extends.Z)({},"small"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),ButtonRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`${ownerState.variant}${(0,capitalize.Z)(ownerState.color)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`],styles[`${ownerState.variant}Size${(0,capitalize.Z)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,ownerState.disableElevation&&styles.disableElevation,ownerState.fullWidth&&styles.fullWidth]}})((({theme,ownerState})=>{var _theme$palette$getCon,_theme$palette;const inheritContainedBackgroundColor="light"===theme.palette.mode?theme.palette.grey[300]:theme.palette.grey[800],inheritContainedHoverBackgroundColor="light"===theme.palette.mode?theme.palette.grey.A100:theme.palette.grey[700];return(0,esm_extends.Z)({},theme.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short}),"&:hover":(0,esm_extends.Z)({textDecoration:"none",backgroundColor:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{border:`1px solid ${(theme.vars||theme).palette[ownerState.color].main}`,backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===ownerState.variant&&{backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedHoverBg:inheritContainedHoverBackgroundColor,boxShadow:(theme.vars||theme).shadows[4],"@media (hover: none)":{boxShadow:(theme.vars||theme).shadows[2],backgroundColor:(theme.vars||theme).palette.grey[300]}},"contained"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}),"&:active":(0,esm_extends.Z)({},"contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[8]}),[`&.${Button_buttonClasses.focusVisible}`]:(0,esm_extends.Z)({},"contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[6]}),[`&.${Button_buttonClasses.disabled}`]:(0,esm_extends.Z)({color:(theme.vars||theme).palette.action.disabled},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.action.disabledBackground}`},"contained"===ownerState.variant&&{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground})},"text"===ownerState.variant&&{padding:"6px 8px"},"text"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main},"outlined"===ownerState.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main,border:theme.vars?`1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)`:`1px solid ${(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.5)}`},"contained"===ownerState.variant&&{color:theme.vars?theme.vars.palette.text.primary:null==(_theme$palette$getCon=(_theme$palette=theme.palette).getContrastText)?void 0:_theme$palette$getCon.call(_theme$palette,theme.palette.grey[300]),backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedBg:inheritContainedBackgroundColor,boxShadow:(theme.vars||theme).shadows[2]},"contained"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].contrastText,backgroundColor:(theme.vars||theme).palette[ownerState.color].main},"inherit"===ownerState.color&&{color:"inherit",borderColor:"currentColor"},"small"===ownerState.size&&"text"===ownerState.variant&&{padding:"4px 5px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"text"===ownerState.variant&&{padding:"8px 11px",fontSize:theme.typography.pxToRem(15)},"small"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"3px 9px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"7px 21px",fontSize:theme.typography.pxToRem(15)},"small"===ownerState.size&&"contained"===ownerState.variant&&{padding:"4px 10px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"contained"===ownerState.variant&&{padding:"8px 22px",fontSize:theme.typography.pxToRem(15)},ownerState.fullWidth&&{width:"100%"})}),(({ownerState})=>ownerState.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Button_buttonClasses.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Button_buttonClasses.disabled}`]:{boxShadow:"none"}})),ButtonStartIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.startIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>(0,esm_extends.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===ownerState.size&&{marginLeft:-2},commonIconStyles(ownerState)))),ButtonEndIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.endIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>(0,esm_extends.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===ownerState.size&&{marginRight:-2},commonIconStyles(ownerState)))),Button_Button=react.forwardRef((function Button(inProps,ref){const contextProps=react.useContext(ButtonGroupContext.Z),resolvedProps=(0,resolveProps.Z)(contextProps,inProps),props=(0,useThemeProps.Z)({props:resolvedProps,name:"MuiButton"}),{children,color="primary",component="button",className,disabled=!1,disableElevation=!1,disableFocusRipple=!1,endIcon:endIconProp,focusVisibleClassName,fullWidth=!1,size="medium",startIcon:startIconProp,type,variant="text"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,disabled,disableElevation,disableFocusRipple,fullWidth,size,type,variant}),classes=(ownerState=>{const{color,disableElevation,fullWidth,size,variant,classes}=ownerState,slots={root:["root",variant,`${variant}${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`,`${variant}Size${(0,capitalize.Z)(size)}`,"inherit"===color&&"colorInherit",disableElevation&&"disableElevation",fullWidth&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,capitalize.Z)(size)}`],endIcon:["endIcon",`iconSize${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,getButtonUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),startIcon=startIconProp&&(0,jsx_runtime.jsx)(ButtonStartIcon,{className:classes.startIcon,ownerState,children:startIconProp}),endIcon=endIconProp&&(0,jsx_runtime.jsx)(ButtonEndIcon,{className:classes.endIcon,ownerState,children:endIconProp});return(0,jsx_runtime.jsxs)(ButtonRoot,(0,esm_extends.Z)({ownerState,className:(0,clsx.Z)(contextProps.className,classes.root,className),component,disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),ref,type},other,{classes,children:[startIcon,children,endIcon]}))}))},"./node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./node_modules/@mui/material/Skeleton/Skeleton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton_Skeleton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");function getUnit(input){return String(input).match(/[\d.\-+]*\s*(.*)/)[1]||""}function toUnitless(length){return parseFloat(length)}var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSkeletonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSkeleton",slot)}(0,generateUtilityClasses.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["animation","className","component","height","style","variant","width"];let _t,_t2,_t3,_t4,_=t=>t;const pulseKeyframe=(0,emotion_react_browser_esm.F4)(_t||(_t=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),waveKeyframe=(0,emotion_react_browser_esm.F4)(_t2||(_t2=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),SkeletonRoot=(0,styled.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!1!==ownerState.animation&&styles[ownerState.animation],ownerState.hasChildren&&styles.withChildren,ownerState.hasChildren&&!ownerState.width&&styles.fitContent,ownerState.hasChildren&&!ownerState.height&&styles.heightAuto]}})((({theme,ownerState})=>{const radiusUnit=getUnit(theme.shape.borderRadius)||"px",radiusValue=toUnitless(theme.shape.borderRadius);return(0,esm_extends.Z)({display:"block",backgroundColor:theme.vars?theme.vars.palette.Skeleton.bg:(0,colorManipulator.Fq)(theme.palette.text.primary,"light"===theme.palette.mode?.11:.13),height:"1.2em"},"text"===ownerState.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${radiusValue}${radiusUnit}/${Math.round(radiusValue/.6*10)/10}${radiusUnit}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===ownerState.variant&&{borderRadius:"50%"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},ownerState.hasChildren&&{"& > *":{visibility:"hidden"}},ownerState.hasChildren&&!ownerState.width&&{maxWidth:"fit-content"},ownerState.hasChildren&&!ownerState.height&&{height:"auto"})}),(({ownerState})=>"pulse"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t3||(_t3=_`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),pulseKeyframe)),(({ownerState,theme})=>"wave"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t4||(_t4=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),waveKeyframe,(theme.vars||theme).palette.action.hover))),Skeleton_Skeleton=react.forwardRef((function Skeleton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSkeleton"}),{animation="pulse",className,component="span",height,style,variant="text",width}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{animation,component,variant,hasChildren:Boolean(other.children)}),classes=(ownerState=>{const{classes,variant,animation,hasChildren,width,height}=ownerState,slots={root:["root",variant,animation,hasChildren&&"withChildren",hasChildren&&!width&&"fitContent",hasChildren&&!height&&"heightAuto"]};return(0,composeClasses.Z)(slots,getSkeletonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(SkeletonRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(classes.root,className),ownerState},other,{style:(0,esm_extends.Z)({width,height},style)}))}))},"./src/components/LazyLoaded/LazyLoaded.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LazyLoaded_stories});var react=__webpack_require__("./node_modules/react/index.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Skeleton=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LazyLoaded(props){const{loading,placeholder,loadingMessage="Content loading",loadedMessage="Content load complete",children}=props,message=loading?loadingMessage:loadedMessage,loader=(0,react.useRef)(null),[loaderActive,setLoaderActive]=(0,react.useState)(!0);(0,react.useEffect)((()=>{loading&&setLoaderActive(!0)}),[loading]),(0,react.useEffect)((()=>{let inactivateLoaderTimer=0;return loading||(inactivateLoaderTimer=window.setTimeout((()=>{setLoaderActive(!1)}),1e3)),()=>window.clearTimeout(inactivateLoaderTimer)}),[loading]);const[ariaLive,setAriaLive]=(0,react.useState)("off");return(0,react.useEffect)((()=>{loader.current&&(document.activeElement===loader.current?setAriaLive("polite"):setAriaLive("off"))}),[loading]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[loaderActive&&(0,jsx_runtime.jsxs)("div",{ref:loader,tabIndex:-1,className:"lazy-loader",role:"status","aria-live":ariaLive,"aria-label":message,children:[(0,jsx_runtime.jsx)(VisuallyHidden.T,{children:loading&&message}),loading&&placeholder]}),!loading&&children]})}try{LazyLoaded.displayName="LazyLoaded",LazyLoaded.__docgenInfo={description:"Wrapper component for lazy loaded content.\n\nHandles the conditional display of placeholder content and hooks into the\nARIA accessibility API for good screen reader UX.",displayName:"LazyLoaded",props:{loading:{defaultValue:null,description:"The loading state",name:"loading",required:!0,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Placeholder to display while content is loading.\nCommon patterns for this are spinners and skeletons.",name:"placeholder",required:!0,type:{name:"ReactNode"}},loadingMessage:{defaultValue:null,description:'Message announced to screen reader users if they navigate to this component. (optional)\n\nDefaults to `"Content loading"`',name:"loadingMessage",required:!1,type:{name:"string"}},loadedMessage:{defaultValue:null,description:'Message announced to users once the content is loaded if their screen\nreader is still focused on this component.\n\nOnly some screen readers will announce this text\n\nDefaults to `"Content load complete"`',name:"loadedMessage",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoaded/LazyLoaded.tsx#LazyLoaded"]={docgenInfo:LazyLoaded.__docgenInfo,name:"LazyLoaded",path:"src/components/LazyLoaded/LazyLoaded.tsx#LazyLoaded"})}catch(__react_docgen_typescript_loader_error){}const LazyLoaded_stories={title:"Layout/LazyLoaded",component:LazyLoaded,argTypes:{}},Example={render:args=>{const[loading,setLoading]=(0,react.useState)(!0),Loading=()=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Skeleton.Z,{variant:"circular",width:40,height:40}),(0,jsx_runtime.jsxs)(Stack.Z,{children:[(0,jsx_runtime.jsx)(Skeleton.Z,{width:100,className:"mb-2"}),(0,jsx_runtime.jsx)(Skeleton.Z,{width:75})]})]});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LazyLoaded,{...args,loading,placeholder:(0,jsx_runtime.jsx)(Loading,{}),children:(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{alt:"Chase McManning",src:"https://opic.osu.edu/mcmanning.1"}),(0,jsx_runtime.jsxs)(Stack.Z,{children:[(0,jsx_runtime.jsx)(Typography.Z,{children:"Chase McManning"}),(0,jsx_runtime.jsx)(Typography.Z,{fontSize:14,children:"Sr. Enterprise Applications Engineer"})]})]})}),(0,jsx_runtime.jsx)(Divider.Z,{sx:{my:2}}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setLoading(!loading),children:"Toggle Loading State"})]})},args:{}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [loading, setLoading] = useState(true);\n    const Loading = () => <Stack direction="row" gap={1}>\n        <Skeleton variant="circular" width={40} height={40} />\n        <Stack>\n          <Skeleton width={100} className="mb-2" />\n          <Skeleton width={75} />\n        </Stack>\n      </Stack>;\n    return <>\n        <LazyLoaded {...args} loading={loading} placeholder={<Loading />}>\n          <Stack direction="row" gap={1}>\n            <Avatar alt="Chase McManning" src="https://opic.osu.edu/mcmanning.1" />\n            <Stack>\n              <Typography>Chase McManning</Typography>\n              <Typography fontSize={14}>Sr. Enterprise Applications Engineer</Typography>\n            </Stack>\n          </Stack>\n        </LazyLoaded>\n\n        <Divider sx={{\n        my: 2\n      }} />\n        <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>\n      </>;\n  },\n  args: {}\n} satisfies Story',...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]}}]);
//# sourceMappingURL=src-components-LazyLoaded-LazyLoaded-stories.df7e0fdb.iframe.bundle.js.map