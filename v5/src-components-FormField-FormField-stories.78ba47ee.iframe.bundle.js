"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[4379],{"./src/components/FormField/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormField:()=>FormField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/utils.ts"),_Text__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/Text.tsx")),_FormField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormField/FormField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Internal / FormField",...(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__._v)(_FormField__WEBPACK_IMPORTED_MODULE_3__.W).withStyleSystemProps()},FormField=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormField__WEBPACK_IMPORTED_MODULE_3__.W,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__.x,{children:"No example available"})})));FormField.parameters={...FormField.parameters,docs:{...FormField.parameters?.docs,source:{originalSource:"RUIComponentStory<FormFieldProps<string>>(args => <Component {...args}>\n    <Text>No example available</Text>\n  </Component>)",...FormField.parameters?.docs?.source}}};const __namedExportsOrder=["FormField"]},"./src/components/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_aria__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_hooks_useStyleSystemProps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useStyleSystemProps.ts"),_Icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/Icon.tsx"),_NecessityIndicator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/NecessityIndicator/NecessityIndicator.tsx"),_Stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Stack/Stack.tsx"),_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function OuterLayout({layout,children}){return"horizontal"===layout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex w-full",children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children})}function LabelLayout({layout,children}){return"horizontal"===layout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex-1",children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children})}function ContentLayout({layout,children}){return"horizontal"===layout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Stack__WEBPACK_IMPORTED_MODULE_2__.K,{className:"flex-1",children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children})}function FormField(props){const{className,label,description,errorMessage,layout,children}=props,{labelAs,labelProps,wrapperProps,descriptionProps,errorMessageProps}=props,[styleSystemProps]=(0,_hooks_useStyleSystemProps__WEBPACK_IMPORTED_MODULE_3__.z)(props),{focusProps}=(0,react_aria__WEBPACK_IMPORTED_MODULE_4__.Fx)(),inputContent=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Stack__WEBPACK_IMPORTED_MODULE_2__.K,{className,...wrapperProps,...styleSystemProps,"data-field":props.name,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(OuterLayout,{layout,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LabelLayout,{layout,children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{as:labelAs??"label",...labelProps,"data-label-for":props.name,children:[label,props.necessityIndicator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NecessityIndicator__WEBPACK_IMPORTED_MODULE_6__.t,{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ContentLayout,{layout,children:[react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(inputContent,focusProps),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{c:"neutral-subtle",fs:"sm",...descriptionProps,children:description}),errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{c:"critical",fs:"sm",...errorMessageProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_7__.J,{name:"xmarkCircle"})," ",errorMessage]})]})]})})}FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"Base for all specialized form field components. Handles labeling,\ndescription, focus rings and error rendering without layout variants.\n\nIDs and Aria associations are the responsibility of each\nspecialized form field component.\n\n## Accessibility\n\n- ARIA labeling and state are handled by\n [React Aria](https://react-spectrum.adobe.com/react-aria/useTextField.html).\n- If `label` is omitted, an `aria-label` or `aria-labeledby` prop must\n be passed instead to identify the element for screen readers.\n- `data-field` and `data-label-for` are set to the component`name` prop to support\n targeting and focusing elements from an external  e.g. `FormErrors`.\n\n### Children\n- Slot for the underlying input element\n- Receives all necessary attributes for data binding and a11y\n- The generic type of `FormField` determines which ref type is allowed\nto be passed through the slot. This does not require an `InputHTMLAttributes`\nconcrete, but it is recommended.",displayName:"FormField",props:{name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).",name:"name",required:!0,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"horizontal"'}]}},isReadOnly:{defaultValue:null,description:"All form elements support a full read-only state",name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},necessityIndicator:{defaultValue:null,description:"Whether the required state should be shown within the label",name:"necessityIndicator",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},validationState:{defaultValue:null,description:'Whether the input should display its "valid" or "invalid" visual styling.',name:"validationState",required:!1,type:{name:"enum",value:[{value:'"valid"'},{value:'"invalid"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.\nOften paired with the `necessityIndicator` prop to add a visual indicator to the input.",name:"isRequired",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"A description for the field. Provides a hint such as specific requirements for what to choose.",name:"description",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"An error message for the field.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"T"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"T"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},wrapperProps:{defaultValue:null,description:"Props to spread into the wrapping element (excluding style system props)",name:"wrapperProps",required:!1,type:{name:"DOMAttributes<FocusableElement>"}},labelAs:{defaultValue:null,description:"Primitive to use for the content label.\n\nIn some scenarios, a `label` element is not appropriate,\nfor example radio and checkbox sets.",name:"labelAs",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"span"'}]}},labelProps:{defaultValue:null,description:"Props for the text field's visible label element",name:"labelProps",required:!0,type:{name:"LabelHTMLAttributes<HTMLLabelElement> | DOMAttributes<FocusableElement>"}},descriptionProps:{defaultValue:null,description:"Props for the text field's description element",name:"descriptionProps",required:!0,type:{name:"DOMAttributes<FocusableElement>"}},errorMessageProps:{defaultValue:null,description:"Props for the text field's error message element",name:"errorMessageProps",required:!0,type:{name:"DOMAttributes<FocusableElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NecessityIndicator/NecessityIndicator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>NecessityIndicator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NecessityIndicator=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{"aria-label":"(required)",ref,size:10,ml:"xs",mb:"xs",name:"asterisk",c:{light:"critical",dark:"white"},...props})));try{NecessityIndicator.displayName="NecessityIndicator",NecessityIndicator.__docgenInfo={description:"Icon attached to form field labels to indicate that the field is required.\n\nThis may be used in form fields that are logically required but cannot\nbe flagged as such using native form attributes e.g. those that are\nrequired but validated serverside.\n\nThe name comes from [React Aria](https://react-spectrum.adobe.com/react-spectrum/Form.html#required-and-necessity-indicator)\nwhich universally uses the `necessityIndicator` prop on field components.\n\n## Accessibility\n- The `aria-label` on the icon is automatically set to `(required)`",displayName:"NecessityIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"]={docgenInfo:NecessityIndicator.__docgenInfo,name:"NecessityIndicator",path:"src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);