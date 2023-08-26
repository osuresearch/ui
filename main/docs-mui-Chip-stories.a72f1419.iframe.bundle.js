"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[7754],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js");const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.Z)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.Z)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.Z)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.Z)({alt,src,srcSet,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other,{children}))}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./docs/mui/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accents:()=>Accents,Chip:()=>Chip,Filled:()=>Filled,Outlined:()=>Outlined,OutlinedAccents:()=>OutlinedAccents,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Chip=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{label:"Basic",...args});Chip.displayName="Chip";const __WEBPACK_DEFAULT_EXPORT__={title:"MUI Components/Chip",component:Chip},Filled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{direction:"row",gap:1,alignItems:"center",flexWrap:"wrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"Basic",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"Disabled",disabled:!0,...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"M"}),label:"Clickable",onClick:()=>alert("clicked"),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{alt:"Natacha",src:"https://material-ui.com/static/images/avatar/1.jpg"}),label:"Deletable",onDelete:()=>alert("deleted"),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"userCircle"}),label:"Clickable deletable",onClick:()=>alert("clicked"),onDelete:()=>alert("deleted"),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"Custom delete icon",onClick:()=>alert("clicked"),onDelete:()=>alert("deleted"),deleteIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"check"}),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{component:"a",label:"Clickable Link",href:"#chip-outlined",clickable:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:"M"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:()=>alert("deleted"),deleteIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"check"}),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"userCircle"}),label:"Primary clickable",clickable:!0,color:"primary",onDelete:()=>alert("deleted"),deleteIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"check"}),...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"Deletable primary",onDelete:()=>alert("deleted"),color:"primary",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.J,{name:"userCircle"}),label:"Deletable secondary",onDelete:()=>alert("deleted"),color:"secondary",...args})]}),args:{}},Outlined={...Filled,args:{...Filled.args,variant:"outlined"}},Small={...Filled,args:{...Filled.args,variant:"outlined",size:"small"}},Accents={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{direction:"row",gap:1,alignItems:"center",flexWrap:"wrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"blue",color:"blue",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"orange",color:"orange",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"green",color:"green",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"brown",color:"brown",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"pink",color:"pink",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"violet",color:"violet",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"aqua",color:"aqua",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"teal",color:"teal",...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Chip,{label:"gold",color:"gold",...args})]})},OutlinedAccents={...Accents,args:{variant:"outlined",size:"small",onDelete:()=>alert("deleted")}};Chip.parameters={...Chip.parameters,docs:{...Chip.parameters?.docs,source:{originalSource:'(args: ChipProps) => <MuiChip label="Basic" {...args} />',...Chip.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">\n      <Chip label="Basic" {...args} />\n      <Chip label="Disabled" disabled {...args} />\n      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={() => alert(\'clicked\')} {...args} />\n      <Chip avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/avatar/1.jpg" />} label="Deletable" onDelete={() => alert(\'deleted\')} {...args} />\n      <Chip icon={<Icon name="userCircle" />} label="Clickable deletable" onClick={() => alert(\'clicked\')} onDelete={() => alert(\'deleted\')} {...args} />\n      <Chip label="Custom delete icon" onClick={() => alert(\'clicked\')} onDelete={() => alert(\'deleted\')} deleteIcon={<Icon name="check" />} {...args} />\n      <Chip component="a" label="Clickable Link" href="#chip-outlined" clickable />\n      <Chip avatar={<Avatar>M</Avatar>} label="Primary clickable" clickable color="primary" onDelete={() => alert(\'deleted\')} deleteIcon={<Icon name="check" />} {...args} />\n      <Chip icon={<Icon name="userCircle" />} label="Primary clickable" clickable color="primary" onDelete={() => alert(\'deleted\')} deleteIcon={<Icon name="check" />} {...args} />\n      <Chip label="Deletable primary" onDelete={() => alert(\'deleted\')} color="primary" {...args} />\n      <Chip icon={<Icon name="userCircle" />} label="Deletable secondary" onDelete={() => alert(\'deleted\')} color="secondary" {...args} />\n    </Stack>,\n  args: {}\n} satisfies Story',...Filled.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  ...Filled,\n  args: {\n    ...Filled.args,\n    variant: 'outlined'\n  }\n} satisfies Story",...Outlined.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  ...Filled,\n  args: {\n    ...Filled.args,\n    variant: 'outlined',\n    size: 'small'\n  }\n} satisfies Story",...Small.parameters?.docs?.source}}},Accents.parameters={...Accents.parameters,docs:{...Accents.parameters?.docs,source:{originalSource:'{\n  render: args => <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">\n      <Chip label="blue" color="blue" {...args} />\n      <Chip label="orange" color="orange" {...args} />\n      <Chip label="green" color="green" {...args} />\n      <Chip label="brown" color="brown" {...args} />\n      <Chip label="pink" color="pink" {...args} />\n      <Chip label="violet" color="violet" {...args} />\n      <Chip label="aqua" color="aqua" {...args} />\n      <Chip label="teal" color="teal" {...args} />\n      <Chip label="gold" color="gold" {...args} />\n    </Stack>\n} satisfies Story',...Accents.parameters?.docs?.source}}},OutlinedAccents.parameters={...OutlinedAccents.parameters,docs:{...OutlinedAccents.parameters?.docs,source:{originalSource:"{\n  ...Accents,\n  args: {\n    variant: 'outlined',\n    size: 'small',\n    onDelete: () => alert('deleted')\n  }\n} satisfies Story",...OutlinedAccents.parameters?.docs?.source}}};const __namedExportsOrder=["Chip","Filled","Outlined","Small","Accents","OutlinedAccents"];try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.",name:"children",required:!1,type:{name:"null"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ChipClasses> & Partial<ClassNameMap<never>>)"}},clickable:{defaultValue:null,description:"If `true`, the chip will appear clickable, and will raise when pressed,\neven if the onClick prop is not defined.\nIf `false`, the chip will not appear clickable, even if onClick prop is defined.\nThis can be used, for example,\nalong with the component prop to indicate an anchor Chip is clickable.\nNote: this controls the UI and does not affect the onClick event.",name:"clickable",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'default'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"gray"'},{value:'"blue"'},{value:'"orange"'},{value:'"green"'},{value:'"brown"'},{value:'"pink"'},{value:'"violet"'},{value:'"aqua"'},{value:'"teal"'},{value:'"gold"'},{value:'"default"'}]}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon element.",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},onDelete:{defaultValue:null,description:"Callback fired when the delete icon is clicked.\nIf set, the delete icon will be shown.",name:"onDelete",required:!1,type:{name:"((event: any) => void)"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},skipFocusWhenDisabled:{defaultValue:{value:"false"},description:"If `true`, allows the disabled chip to escape focus.\nIf `false`, allows the disabled chip to receive focus.",name:"skipFocusWhenDisabled",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'filled'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/mui/Chip.stories.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"docs/mui/Chip.stories.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}}}]);