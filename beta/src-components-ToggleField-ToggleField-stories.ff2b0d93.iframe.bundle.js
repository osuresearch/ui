"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[873],{"./src/components/ToggleField/ToggleField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,Error:()=>Error,Example:()=>Example,ReadOnly:()=>ReadOnly,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleField_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),FormField=__webpack_require__("./src/components/FormField/FormField.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BUXSwitch=(0,styled.ZP)((props=>(0,jsx_runtime.jsx)(Switch.Z,{focusVisibleClassName:".Mui-focusVisible",...props})))((({theme})=>({width:45,height:24,padding:0,margin:"8px 12px","& .MuiSwitch-switchBase":{padding:0,margin:2,"&.Mui-checked":{transform:"translateX(21px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:(theme.palette.mode,"#ba0c2f"),opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:(theme.palette.mode,"#fff")},"&.Mui-disabled + .MuiSwitch-track":{color:"#cfd4d8"}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:20,height:20},"& .MuiSwitch-track":{borderRadius:12,backgroundColor:"light"===theme.palette.mode?"#212325":"#39393D",opacity:1}})));function ToggleField(props){const{name,onChange,onBlur,value,defaultValue,label,disabled,readOnly}=props,id=(0,react.useId)();return(0,jsx_runtime.jsx)(FormField.W,{...props,id,noLabel:!0,disabled:disabled||readOnly,renderInput:inputProps=>(0,jsx_runtime.jsx)(FormControlLabel.Z,{label,htmlFor:id,disabled:disabled||readOnly,control:(0,jsx_runtime.jsx)(BUXSwitch,{id,name,defaultChecked:defaultValue,disabled,readOnly,checked:value,onChange:(e,checked)=>onChange&&onChange(checked),onBlur,inputProps})})})}ToggleField.displayName="ToggleField";try{ToggleField.displayName="ToggleField",ToggleField.__docgenInfo={description:"",displayName:"ToggleField",props:{name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).",name:"name",required:!0,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"default"'}]}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"A description for the field. Provides a hint such as specific requirements for what to choose.",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"An error message for the field.",name:"error",required:!1,type:{name:"ReactNode"}},necessityIndicator:{defaultValue:null,description:"Whether the required state should be shown within the label",name:"necessityIndicator",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.\nOften paired with the `necessityIndicator` prop to add a visual indicator to the input.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToggleField/ToggleField.tsx#ToggleField"]={docgenInfo:ToggleField.__docgenInfo,name:"ToggleField",path:"src/components/ToggleField/ToggleField.tsx#ToggleField"})}catch(__react_docgen_typescript_loader_error){}const ToggleField_stories={title:"Forms/ToggleField",component:ToggleField,argTypes:{}},Example={render:args=>(0,jsx_runtime.jsx)(ToggleField,{...args}),args:{name:"notify",label:"Notify me on changes",description:"Description content"}},DefaultValue={args:{...Example.args,defaultValue:!0}},Required={args:{...Example.args,required:!0,necessityIndicator:!0}},Disabled={args:{...Example.args,disabled:!0,defaultValue:!0}},ReadOnly={args:{...Example.args,readOnly:!0,defaultValue:!0}},Error={args:{...Example.args,error:"Your account is not configured for notifications"}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: args => <ToggleField {...args} />,\n  args: {\n    name: 'notify',\n    label: 'Notify me on changes',\n    description: 'Description content'\n  }\n}",...Example.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Example.args,\n    defaultValue: true\n  }\n}",...DefaultValue.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Example.args,\n    required: true,\n    necessityIndicator: true\n  }\n}",...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Example.args,\n    disabled: true,\n    defaultValue: true\n  }\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Example.args,\n    readOnly: true,\n    defaultValue: true\n  }\n}",...ReadOnly.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Example.args,\n    error: 'Your account is not configured for notifications'\n  }\n}",...Error.parameters?.docs?.source}}};const __namedExportsOrder=["Example","DefaultValue","Required","Disabled","ReadOnly","Error"]},"./src/components/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/FormHelperText/FormHelperText.js"),_FormFieldError__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/FormFieldError/FormFieldError.tsx"),_NecessityIndicator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/NecessityIndicator/NecessityIndicator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormField(props){const{id,name,label,description,error,layout,noLabel}=props,{isFieldset,necessityIndicator,renderInput,fullWidth}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{fullWidth,component:isFieldset?"fieldset":"div",variant:"standard",error:!!error,disabled:props.disabled||props.readOnly,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{"data-field":name,gap:1,children:[!noLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{component:isFieldset?"legend":"label",id:`${id}-label`,htmlFor:id,children:[label,necessityIndicator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NecessityIndicator__WEBPACK_IMPORTED_MODULE_5__.t,{})]}),renderInput({id,"aria-describedby":(error?`${id}-error`:"")+(description?` ${id}-help`:""),"data-testid":id,disabled:props.disabled,readOnly:props.readOnly}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{id:`${id}-help`,children:description}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormFieldError__WEBPACK_IMPORTED_MODULE_7__.b,{id:`${id}-error`,children:error})]})})}FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"Base component for rendering an interactive form field.\n\nThis ensures an accessible mapping between label, input, description, and error messages.\n\nThis component is typically used by RUI maintainers. You should instead use one of the\nconcrete form components that wrap this component for a specific data type.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"FormField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},labelAs:{defaultValue:null,description:"Primitive to use for the content label.\n\nIn some scenarios, a `label` element is not appropriate,\nfor example radio and checkbox sets.",name:"labelAs",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"label"'}]}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},isFieldset:{defaultValue:null,description:"",name:"isFieldset",required:!1,type:{name:"boolean"}},renderInput:{defaultValue:null,description:"",name:"renderInput",required:!0,type:{name:"(inputProps: InputBaseComponentProps) => ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).",name:"name",required:!0,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"default"'}]}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"A description for the field. Provides a hint such as specific requirements for what to choose.",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"An error message for the field.",name:"error",required:!1,type:{name:"ReactNode"}},necessityIndicator:{defaultValue:null,description:"Whether the required state should be shown within the label",name:"necessityIndicator",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.\nOften paired with the `necessityIndicator` prop to add a visual indicator to the input.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"T"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"T"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormFieldError/FormFieldError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>FormFieldError});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormFieldError({id,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{id,fontSize:"0.88em",color:"error",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{role:"presentation",name:"xmarkCircle",sx:{verticalAlign:"text-top"}})," ",children]})}FormFieldError.displayName="FormFieldError";try{FormFieldError.displayName="FormFieldError",FormFieldError.__docgenInfo={description:"Render an error message. Used within `FormField`.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"FormFieldError",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormFieldError/FormFieldError.tsx#FormFieldError"]={docgenInfo:FormFieldError.__docgenInfo,name:"FormFieldError",path:"src/components/FormFieldError/FormFieldError.tsx#FormFieldError"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NecessityIndicator/NecessityIndicator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>NecessityIndicator});__webpack_require__("./node_modules/react/index.js");var _theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/light.ts"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function NecessityIndicator(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{size:10,ml:1,"aria-label":"This field is required",name:"asterisk",svgProps:{color:_theme__WEBPACK_IMPORTED_MODULE_3__.r.palette.primary.main}})}NecessityIndicator.displayName="NecessityIndicator";try{NecessityIndicator.displayName="NecessityIndicator",NecessityIndicator.__docgenInfo={description:"Icon attached to form field labels to indicate that the field is required.\n\n\x3c!-- @ruiInternal --\x3e",displayName:"NecessityIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"]={docgenInfo:NecessityIndicator.__docgenInfo,name:"NecessityIndicator",path:"src/components/NecessityIndicator/NecessityIndicator.tsx#NecessityIndicator"})}catch(__react_docgen_typescript_loader_error){}}}]);