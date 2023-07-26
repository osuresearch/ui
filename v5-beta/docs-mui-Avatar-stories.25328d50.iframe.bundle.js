"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[5318],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js");const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.Z)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.Z)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.Z)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.Z)({alt,src,srcSet,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className),ref},other,{children}))}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./docs/mui/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grouped:()=>Grouped,IconAvatars:()=>IconAvatars,ImageAvatars:()=>ImageAvatars,LetterAvatars:()=>LetterAvatars,WithFallback:()=>WithFallback,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarGroupUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiAvatarGroup",slot)}const AvatarGroup_avatarGroupClasses=(0,generateUtilityClasses.Z)("MuiAvatarGroup",["root","avatar"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],SPACINGS={small:-16,medium:null},AvatarGroupRoot=(0,styled.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(props,styles)=>(0,esm_extends.Z)({[`& .${AvatarGroup_avatarGroupClasses.avatar}`]:styles.avatar},styles.root)})((({theme})=>({[`& .${avatarClasses.Z.root}`]:{border:`2px solid ${(theme.vars||theme).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}))),AvatarGroupAvatar=(0,styled.ZP)(Avatar.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(props,styles)=>styles.avatar})((({theme})=>({border:`2px solid ${(theme.vars||theme).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}))),AvatarGroup_AvatarGroup=react.forwardRef((function AvatarGroup(inProps,ref){var _slotProps$additional;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatarGroup"}),{children:childrenProp,className,component="div",componentsProps={},max=5,slotProps={},spacing="medium",total,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let clampedMax=max<2?2:max;const ownerState=(0,esm_extends.Z)({},props,{max,spacing,component,variant}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],avatar:["avatar"]},getAvatarGroupUtilityClass,classes)})(ownerState),children=react.Children.toArray(childrenProp).filter((child=>react.isValidElement(child))),totalAvatars=total||children.length;totalAvatars===clampedMax&&(clampedMax+=1),clampedMax=Math.min(totalAvatars+1,clampedMax);const maxAvatars=Math.min(children.length,clampedMax-1),extraAvatars=Math.max(totalAvatars-clampedMax,totalAvatars-maxAvatars,0),marginLeft=spacing&&void 0!==SPACINGS[spacing]?SPACINGS[spacing]:-spacing,additionalAvatarSlotProps=null!=(_slotProps$additional=slotProps.additionalAvatar)?_slotProps$additional:componentsProps.additionalAvatar;return(0,jsx_runtime.jsxs)(AvatarGroupRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className),ref},other,{children:[extraAvatars?(0,jsx_runtime.jsxs)(AvatarGroupAvatar,(0,esm_extends.Z)({ownerState,variant},additionalAvatarSlotProps,{className:(0,clsx_m.Z)(classes.avatar,null==additionalAvatarSlotProps?void 0:additionalAvatarSlotProps.className),style:(0,esm_extends.Z)({marginLeft},null==additionalAvatarSlotProps?void 0:additionalAvatarSlotProps.style),children:["+",extraAvatars]})):null,children.slice(0,maxAvatars).reverse().map(((child,index)=>react.cloneElement(child,{className:(0,clsx_m.Z)(child.props.className,classes.avatar),style:(0,esm_extends.Z)({marginLeft:index===maxAvatars-1?void 0:marginLeft},child.props.style),variant:child.props.variant||variant})))]}))}));var Icon=__webpack_require__("./src/components/Icon/Icon.tsx");const Avatar_stories={title:"MUI Components/Avatar",component:Avatar.Z,argTypes:{}},ImageAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",src:"https://opic.osu.edu/mcmanning.1"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Neil Coplin",src:"https://opic.osu.edu/coplin.7"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",src:"https://material-ui.com/static/images/avatar/3.jpg"})]}),args:{}},LetterAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",children:"CM"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Neil Coplin",children:"NC"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",children:"CB"})]}),args:{}},IconAvatars={render:args=>(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",gap:1,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Home",sx:{bgcolor:"#41b6e6"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"homeFill"})}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Code",sx:{bgcolor:"#FF6A39"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"code"})}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Heart",sx:{bgcolor:"pink"},children:(0,jsx_runtime.jsx)(Icon.J,{size:24,name:"heartFill"})})]}),args:{}},WithFallback={render:args=>(0,jsx_runtime.jsx)(Stack.Z,{direction:"row",gap:1,children:(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Chase McManning",src:"/broken-image.jpg",children:"CM"})}),args:{}},Grouped={render:args=>(0,jsx_runtime.jsx)(Stack.Z,{alignItems:"center",children:(0,jsx_runtime.jsxs)(AvatarGroup_AvatarGroup,{max:3,children:[(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/1.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Travis Howard",src:"https://material-ui.com/static/images/avatar/2.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Cindy Baker",src:"https://material-ui.com/static/images/avatar/3.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Agnes Walker",src:"https://material-ui.com/static/images/avatar/4.jpg"}),(0,jsx_runtime.jsx)(Avatar.Z,{...args,alt:"Trevor Henderson",src:"https://material-ui.com/static/images/avatar/5.jpg"})]})}),args:{}};ImageAvatars.parameters={...ImageAvatars.parameters,docs:{...ImageAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning" src="https://opic.osu.edu/mcmanning.1" />\n      <Avatar {...args} alt="Neil Coplin" src="https://opic.osu.edu/coplin.7" />\n      <Avatar {...args} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />\n    </Stack>,\n  args: {}\n} satisfies Story',...ImageAvatars.parameters?.docs?.source}}},LetterAvatars.parameters={...LetterAvatars.parameters,docs:{...LetterAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning">\n        CM\n      </Avatar>\n      <Avatar {...args} alt="Neil Coplin">\n        NC\n      </Avatar>\n      <Avatar {...args} alt="Cindy Baker">\n        CB\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...LetterAvatars.parameters?.docs?.source}}},IconAvatars.parameters={...IconAvatars.parameters,docs:{...IconAvatars.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Home" sx={{\n      bgcolor: \'#41b6e6\'\n    }}>\n        <Icon size={24} name="homeFill" />\n      </Avatar>\n      <Avatar {...args} alt="Code" sx={{\n      bgcolor: \'#FF6A39\'\n    }}>\n        <Icon size={24} name="code" />\n      </Avatar>\n      <Avatar {...args} alt="Heart" sx={{\n      bgcolor: \'pink\'\n    }}>\n        <Icon size={24} name="heartFill" />\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...IconAvatars.parameters?.docs?.source}}},WithFallback.parameters={...WithFallback.parameters,docs:{...WithFallback.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1}>\n      <Avatar {...args} alt="Chase McManning" src="/broken-image.jpg">\n        CM\n      </Avatar>\n    </Stack>,\n  args: {}\n} satisfies Story',...WithFallback.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack alignItems="center">\n      <AvatarGroup max={3}>\n        <Avatar {...args} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />\n        <Avatar {...args} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />\n        <Avatar {...args} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />\n        <Avatar {...args} alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />\n        <Avatar {...args} alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />\n      </AvatarGroup>\n    </Stack>,\n  args: {}\n} satisfies Story',...Grouped.parameters?.docs?.source}}};const __namedExportsOrder=["ImageAvatars","LetterAvatars","IconAvatars","WithFallback","Grouped"]},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var _osuresearch_iconography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@osuresearch/iconography/dist/index.module.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/material/Box/Box.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Icon(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{component:_osuresearch_iconography__WEBPACK_IMPORTED_MODULE_3__.JO,sx:{verticalAlign:"middle"},...props})}Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Wrapper around `@osuresearch/iconography` icons to support MaterialUI style system props.",displayName:"Icon",props:{border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | (string & {}) | "inset" | "hidden" | "inherit" | "medium" | "none" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "thick" | "thin" | "dashed" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},component:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"component",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ClassNameMap<never>>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!1,type:{name:"enum",value:[{value:"0"},{value:"90"},{value:"180"},{value:"270"}]}},flip:{defaultValue:null,description:"",name:"flip",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:null,description:"Size of the icon in either pixels or CSS units.",name:"size",required:!1,type:{name:"FontSize<string | number>"}},block:{defaultValue:null,description:"Use `display: block` for the icon container.",name:"block",required:!1,type:{name:"boolean"}},svgProps:{defaultValue:null,description:"Props to pass down to the icon SVG",name:"svgProps",required:!1,type:{name:'Omit<SVGAttributes<any>, "onLoad">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);