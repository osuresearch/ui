"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[4379],{"./src/components/FormField/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _FormField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormField/FormField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/FormField",component:_FormField__WEBPACK_IMPORTED_MODULE_2__.W,argTypes:{}},Example={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormField__WEBPACK_IMPORTED_MODULE_2__.W,{...args}),args:{id:"demo",label:"Field label",description:"Field description",error:"Field error",renderInput:inputProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:["Element that receives input props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:JSON.stringify(inputProps)})]})}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: args => <FormField {...args} />,\n  args: {\n    id: 'demo',\n    label: 'Field label',\n    description: 'Field description',\n    error: 'Field error',\n    renderInput: inputProps => <div>\n        Element that receives input props <code>{JSON.stringify(inputProps)}</code>\n      </div>\n  }\n}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./src/components/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/FormHelperText/FormHelperText.js"),_FormFieldError__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/FormFieldError/FormFieldError.tsx"),_NecessityIndicator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/NecessityIndicator/NecessityIndicator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormField(props){const{id,name,label,description,error,layout,noLabel}=props,{isFieldset,necessityIndicator,renderInput,fullWidth}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{fullWidth,component:isFieldset?"fieldset":"div",variant:"standard",error:!!error,disabled:props.disabled||props.readOnly,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{"data-field":name,gap:1,children:[!noLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{component:isFieldset?"legend":"label",id:`${id}-label`,htmlFor:id,children:[label,necessityIndicator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NecessityIndicator__WEBPACK_IMPORTED_MODULE_5__.t,{})]}),renderInput({id,"aria-describedby":(error?`${id}-error`:"")+(description?` ${id}-help`:""),"data-testid":id,disabled:props.disabled,readOnly:props.readOnly}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{id:`${id}-help`,children:description}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormFieldError__WEBPACK_IMPORTED_MODULE_7__.b,{id:`${id}-error`,children:error})]})})}FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"Base component for rendering an interactive form field.\n\nThis ensures an accessible mapping between label, input, description, and error messages.\n\nThis component is typically used by RUI maintainers. You should instead use one of the\nconcrete form components that wrap this component for a specific data type.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"FormField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},labelAs:{defaultValue:null,description:"Primitive to use for the content label.\n\nIn some scenarios, a `label` element is not appropriate,\nfor example radio and checkbox sets.",name:"labelAs",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"label"'}]}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},isFieldset:{defaultValue:null,description:"",name:"isFieldset",required:!1,type:{name:"boolean"}},renderInput:{defaultValue:null,description:"",name:"renderInput",required:!0,type:{name:"(inputProps: InputBaseComponentProps) => ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).",name:"name",required:!0,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"default"'}]}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"A description for the field. Provides a hint such as specific requirements for what to choose.",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"An error message for the field.",name:"error",required:!1,type:{name:"ReactNode"}},necessityIndicator:{defaultValue:null,description:"Whether the required state should be shown within the label",name:"necessityIndicator",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.\nOften paired with the `necessityIndicator` prop to add a visual indicator to the input.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"T"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"T"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormFieldError/FormFieldError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>FormFieldError});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormFieldError({id,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{id,fontSize:"0.88em",color:"error",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{role:"presentation",name:"xmarkCircle",sx:{verticalAlign:"text-top"}})," ",children]})}FormFieldError.displayName="FormFieldError";try{FormFieldError.displayName="FormFieldError",FormFieldError.__docgenInfo={description:"Render an error message. Used within `FormField`.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"FormFieldError",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormFieldError/FormFieldError.tsx#FormFieldError"]={docgenInfo:FormFieldError.__docgenInfo,name:"FormFieldError",path:"src/components/FormFieldError/FormFieldError.tsx#FormFieldError"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NecessityIndicator/NecessityIndicator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>NecessityIndicator});__webpack_require__("./node_modules/react/index.js");var _theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/light.ts"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function NecessityIndicator(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{size:10,ml:1,"aria-label":"This field is required",name:"asterisk",svgProps:{color:_theme__WEBPACK_IMPORTED_MODULE_3__.r.palette.primary.main}})}NecessityIndicator.displayName="NecessityIndicator";try{NecessityIndicator.displayName="NecessityIndicator",NecessityIndicator.__docgenInfo={description:"Icon attached to form field labels to indicate that the field is required.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"NecessityIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"]={docgenInfo:NecessityIndicator.__docgenInfo,name:"NecessityIndicator",path:"src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"})}catch(__react_docgen_typescript_loader_error){}}}]);