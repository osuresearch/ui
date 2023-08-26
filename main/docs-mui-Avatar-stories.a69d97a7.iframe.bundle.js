"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[5318],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js");const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.Z)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.Z)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.Z)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.Z)({alt,src,srcSet,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other,{children}))}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./docs/mui/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grouped:()=>Grouped,IconAvatars:()=>IconAvatars,ImageAvatars:()=>ImageAvatars,LetterAvatars:()=>LetterAvatars,WithFallback:()=>WithFallback,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.mjs")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarGroupUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiAvatarGroup",slot)}const AvatarGroup_avatarGroupClasses=(0,generateUtilityClasses.Z)("MuiAvatarGroup",["root","avatar"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],SPACINGS={small:-16,medium:null},AvatarGroupRoot=(0,styled.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(props,styles)=>(0,esm_extends.Z)({[`& .${AvatarGroup_avatarGroupClasses.avatar}`]:styles.avatar},styles.root)})((({theme})=>({[`& .${avatarClasses.Z.root}`]:{border:`2px solid ${(theme.vars||theme).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}))),AvatarGroupAvatar=(0,styled.ZP)(Avatar.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(props,styles)=>styles.avatar})((({theme})=>({border:`2px solid ${(theme.vars||theme).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}))),AvatarGroup_AvatarGroup=react.forwardRef((function AvatarGroup(inProps,ref){var _slotProps$additional;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatarGroup"}),{children:childrenProp,className,component="div",componentsProps={},max=5,slotProps={},spacing="medium",total,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let clampedMax=max<2?2:max;const ownerState=(0,esm_extends.Z)({},props,{max,spacing,component,variant}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],avatar:["avatar"]},getAvatarGroupUtilityClass,classes)})(ownerState),children=react.Children.toArray(childrenProp).filter((child=>react.isValidElement(child))),totalAvatars=total||children.length;totalAvatars===clampedMax&&(clampedMax+=1),clampedMax=Math.min(totalAvatars+1,clampedMax);const maxAvatars=Math.min(children.length,clampedMax-1),extraAvatars=Math.max(totalAvatars-clampedMax,totalAvatars-maxAvatars,0),marginLeft=spacing&&void 0!==SPACINGS[spacing]?SPACINGS[spacing]:-spacing,additionalAvatarSlotProps=null!=(_slotProps$additional=slotProps.additionalAvatar)?_slotProps$additional:componentsProps.additionalAvatar;return(0,jsx_runtime.jsxs)(AvatarGroupRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other,{children:[extraAvatars?(0,jsx_runtime.jsxs)(AvatarGroupAvatar,(0,esm_extends.Z)({ownerState,variant},additionalAvatarSlotProps,{className:(0,clsx.Z)(classes.avatar,null==additionalAvatarSlotProps?void 0:additionalAvatarSlotProps.className),style:(0,esm_extends.Z)({marginLeft},null==additionalAvatarSlotProps?void 0:additionalAvatarSlotProps.style),children:["+",extraAvatars]})):null,children.slice(0,maxAvatars).reverse().map(((child,index)=>react.cloneElement(child,{className:(0,clsx.Z)(child.props.className,classes.avatar),style:(0,esm_extends.Z)({marginLeft:index===maxAvatars-1?void 0:marginLeft},child.props.style),variant:child.props.variant||variant})))]}))}));var Icon=__webpack_require__("./src/components/Icon/Icon.tsx");const Avatar_stories={title:"MUI Components/Avatar",component:Avatar.Z,argTypes:{}},ImageAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",src:"https://opic.osu.edu/mcmanning.1"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Neil Coplin",src:"https://opic.osu.edu/coplin.7"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",src:"https://material-ui.com/static/images/avatar/3.jpg"})]}),args:{}},LetterAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",children:"CM"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Neil Coplin",children:"NC"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",children:"CB"})]}),args:{}},IconAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Home",sx:{bgcolor:"#41b6e6"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"homeFill"})}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Code",sx:{bgcolor:"#FF6A39"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"code"})}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Heart",sx:{bgcolor:"pink"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"heartFill"})})]}),args:{}},WithFallback={render:args=>(0,jsx_runtime.jsx)(Stack.Z,{direction:"row",gap:1,children:(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",src:"/broken-image.jpg",children:"CM"})}),args:{}},Grouped={render:args=>(0,jsx_runtime.jsx)(Stack.Z,{alignItems:"center",children:(0,jsx_runtime.jsxs)(AvatarGroup_AvatarGroup,{max:3,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/1.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Travis Howard",src:"https://material-ui.com/static/images/avatar/2.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",src:"https://material-ui.com/static/images/avatar/3.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Agnes Walker",src:"https://material-ui.com/static/images/avatar/4.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Trevor Henderson",src:"https://material-ui.com/static/images/avatar/5.jpg"})]})}),args:{}};ImageAvatars.parameters={...ImageAvatars.parameters,docs:{...ImageAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning" src="https://opic.osu.edu/mcmanning.1" />\n      <Avatar {...args} alt="Neil Coplin" src="https://opic.osu.edu/coplin.7" />\n      <Avatar {...args} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />\n    </Stack>,\n  args: {}\n} satisfies Story',...ImageAvatars.parameters?.docs?.source}}},LetterAvatars.parameters={...LetterAvatars.parameters,docs:{...LetterAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning">\n        CM\n      </Avatar>\n      <Avatar {...args} alt="Neil Coplin">\n        NC\n      </Avatar>\n      <Avatar {...args} alt="Cindy Baker">\n        CB\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...LetterAvatars.parameters?.docs?.source}}},IconAvatars.parameters={...IconAvatars.parameters,docs:{...IconAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Home" sx={{\n      bgcolor: \'#41b6e6\'\n    }}>\n        <Icon size={24} name="homeFill" />\n      </Avatar>\n      <Avatar {...args} alt="Code" sx={{\n      bgcolor: \'#FF6A39\'\n    }}>\n        <Icon size={24} name="code" />\n      </Avatar>\n      <Avatar {...args} alt="Heart" sx={{\n      bgcolor: \'pink\'\n    }}>\n        <Icon size={24} name="heartFill" />\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...IconAvatars.parameters?.docs?.source}}},WithFallback.parameters={...WithFallback.parameters,docs:{...WithFallback.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning" src="/broken-image.jpg">\n        CM\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...WithFallback.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack alignItems="center">\n      <AvatarGroup max={3}>\n        <Avatar {...args} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />\n        <Avatar {...args} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />\n        <Avatar {...args} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />\n        <Avatar {...args} alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />\n        <Avatar {...args} alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />\n      </AvatarGroup>\n    </Stack>,\n  args: {}\n} satisfies Story',...Grouped.parameters?.docs?.source}}};const __namedExportsOrder=["ImageAvatars","LetterAvatars","IconAvatars","WithFallback","Grouped"]}}]);