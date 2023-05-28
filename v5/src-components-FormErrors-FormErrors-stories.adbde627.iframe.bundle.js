"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[1435],{"./src/components/FormErrors/FormErrors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormErrors:()=>FormErrors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/utils.ts"),_FormErrors__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/FormErrors/FormErrors.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms / FormErrors",...(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__._v)(_FormErrors__WEBPACK_IMPORTED_MODULE_3__._).withStyleSystemProps()},FormErrors=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormErrors__WEBPACK_IMPORTED_MODULE_3__._,{...args})),{errorMessages:{foo:{message:"You must fill out the foo field"},bar:{message:"You must fill out the bar field"},date:{message:"The date you selected must be between January and December"}}});FormErrors.parameters={...FormErrors.parameters,docs:{...FormErrors.parameters?.docs,source:{originalSource:"RUIComponentStory<FormErrorsProps>(args => <Component {...args} />, {\n  errorMessages: {\n    foo: {\n      message: 'You must fill out the foo field'\n    },\n    bar: {\n      message: 'You must fill out the bar field'\n    },\n    date: {\n      message: 'The date you selected must be between January and December'\n    }\n  }\n})",...FormErrors.parameters?.docs?.source}}};const __namedExportsOrder=["FormErrors"]},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Alert});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CloseButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/CloseButton/CloseButton.tsx"),_Group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Group/Group.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Stack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Stack/Stack.tsx"),_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({variant,title,dismissible=!1,children},ref)=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),iconName={success:"checkCircle",info:"infoCircle",caution:"infoCircle",critical:"xmarkCircle"}[variant];if(!open)return null;const bold=`${variant}-bold`,inverse=`${variant}-inverse`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Group__WEBPACK_IMPORTED_MODULE_2__.Z,{justify:"apart",ref,role:"alert",bgc:bold,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Group__WEBPACK_IMPORTED_MODULE_2__.Z,{align:"stretch",p:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{c:inverse,name:iconName,size:24}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_4__.K,{c:inverse,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{fw:"bold",c:inverse,children:title}),children]})]}),dismissible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CloseButton__WEBPACK_IMPORTED_MODULE_6__.P,{c:inverse,label:"Dismiss this alert",onPress:()=>setOpen(!1)})]})}));try{Alert.displayName="Alert",Alert.__docgenInfo={description:'Attract user attention with dismissible messages.\n\n## When to use Alerts\n\nAlerts are meant to communicate time-sensitive messages\nto the user. When mounted, the browser will interrupt\nassistive technologies with the alert content.\n\nIf you simply need to display content on the page\nin a way that separates it from the rest of the page,\nuse `Admonition` instead.\n\nUse cases for alerts:\n- An invalid value was entered in a form field\n- The user\'s login session is about to expire\n- The connection to the server was lost so local changes will not be saved\n\n## Accessibility\n- Root element is `role="alert"`.\n- Dismiss button is labeled with "Dismiss this alert"\n- Only text content may be inside an alert. Links and buttons are not allowed.',displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"caution"'},{value:'"critical"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},dismissible:{defaultValue:{value:"false"},description:"",name:"dismissible",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Text content to display within the alert.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormErrors/FormErrors.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>FormErrors});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Alert/Alert.tsx"),_Link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Link/Link.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormErrors=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({className,errorMessages,children,...styleSystemProps},ref)=>{if(!errorMessages)return null;const keys=Object.keys(errorMessages);if(keys.length<1)return null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Alert__WEBPACK_IMPORTED_MODULE_2__.b,{variant:"critical",title:`There are ${keys.length} problems to fix in this form`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:keys.map((name=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:errorMessages[name].message},name)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{variant:"subtle",onClick:()=>(name=>{const el=document.querySelector(`[data-label-for="${name}"]`);el&&el.focus()})(keys[0]),children:"Go to the first field with an error to fix it"})]})}));try{FormErrors.displayName="FormErrors",FormErrors.__docgenInfo={description:"FormErrors documentation\n\n## Accessibility\n- a11y info (used aria tags, keyboard behaviour, etc)\n\n\x3c!-- @ruiStatus In Development --\x3e",displayName:"FormErrors",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"{ [field: string]: { message?: string; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormErrors/FormErrors.tsx#FormErrors"]={docgenInfo:FormErrors.__docgenInfo,name:"FormErrors",path:"src/components/FormErrors/FormErrors.tsx#FormErrors"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);