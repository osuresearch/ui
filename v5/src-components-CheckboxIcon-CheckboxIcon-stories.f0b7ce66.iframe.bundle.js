"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[5366],{"./src/components/CheckboxIcon/CheckboxIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxIcon:()=>CheckboxIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/utils.ts"),_CheckboxIcon__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/CheckboxIcon/CheckboxIcon.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Internal / CheckboxIcon",...(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__._v)(_CheckboxIcon__WEBPACK_IMPORTED_MODULE_3__.P).withStyleSystemProps()},CheckboxIcon=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CheckboxIcon__WEBPACK_IMPORTED_MODULE_3__.P,{...args})),{isSelected:!0});CheckboxIcon.parameters={...CheckboxIcon.parameters,docs:{...CheckboxIcon.parameters?.docs,source:{originalSource:"RUIComponentStory<CheckboxIconProps>(args => <Component {...args} />, {\n  isSelected: true\n})",...CheckboxIcon.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxIcon"]},"./src/components/CheckboxIcon/CheckboxIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CheckboxIcon});__webpack_require__("./node_modules/react/index.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Box.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxIcon=({isSelected,isIndeterminate,isFocusVisible,isDisabled,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.x,{miw:20,w:20,h:20,className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("border-2",{"bg-surface border-outline-active":!isSelected&&!isIndeterminate&&!isDisabled},{"bg-primary border-primary":(isSelected||isIndeterminate)&&!isDisabled},{"border-outline-disabled bg-input-disabled":isDisabled},{"ring focus-ring":isFocusVisible},className),...props,children:(isSelected||isIndeterminate)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{className:"[&>svg]:animate-pop",size:16,c:isDisabled?"outline-disabled":"white",name:isIndeterminate?"dash":"check",block:!0})});CheckboxIcon.displayName="CheckboxIcon";try{CheckboxIcon.displayName="CheckboxIcon",CheckboxIcon.__docgenInfo={description:"Controlled slot renderer for a checkbox.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"CheckboxIcon",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:null,description:"",name:"isIndeterminate",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isFocusVisible:{defaultValue:null,description:"",name:"isFocusVisible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxIcon/CheckboxIcon.tsx#CheckboxIcon"]={docgenInfo:CheckboxIcon.__docgenInfo,name:"CheckboxIcon",path:"src/components/CheckboxIcon/CheckboxIcon.tsx#CheckboxIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);