"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[6296],{"./src/components/Heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Levels:()=>Levels,Overview:()=>Overview,Polymorphic:()=>Polymorphic,SansVariant:()=>SansVariant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/utils.ts"),_Heading__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Heading/Heading.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components / Heading",...(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__._v)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X)},Overview=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{...args,children:"This is a heading example"})),{level:1}),Levels=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{level:1,children:"This is a Heading 1 example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{level:2,children:"This is a Heading 2 example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{level:3,children:"This is a Heading 3 example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{level:4,children:"This is a Heading 4 example"})]}))).withDescription("Header font sizes responsively adjust for smaller screens"),SansVariant=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{level:1,variant:"sans",children:"This is a Heading 1 sans example"}))),Polymorphic=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{as:"div",level:1,children:"This is a div styled as Heading 1"}))).withDescription("\n  Use polymorphics when you need to display content as a header, but without\n  using the semantic header elements that may cause problems for screen readers.\n");Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"RUIComponentStory<HeadingProps>(args => <Heading {...args}>This is a heading example</Heading>, {\n  level: 1\n})",...Overview.parameters?.docs?.source}}},Levels.parameters={...Levels.parameters,docs:{...Levels.parameters?.docs,source:{originalSource:"RUIComponentStory(() => <>\n    <Heading level={1}>This is a Heading 1 example</Heading>\n    <Heading level={2}>This is a Heading 2 example</Heading>\n    <Heading level={3}>This is a Heading 3 example</Heading>\n    <Heading level={4}>This is a Heading 4 example</Heading>\n  </>).withDescription('Header font sizes responsively adjust for smaller screens')",...Levels.parameters?.docs?.source}}},SansVariant.parameters={...SansVariant.parameters,docs:{...SansVariant.parameters?.docs,source:{originalSource:'RUIComponentStory(() => <Heading level={1} variant="sans">\n    This is a Heading 1 sans example\n  </Heading>)',...SansVariant.parameters?.docs?.source}}},Polymorphic.parameters={...Polymorphic.parameters,docs:{...Polymorphic.parameters?.docs,source:{originalSource:'RUIComponentStory(() => <Heading as="div" level={1}>\n    This is a div styled as Heading 1\n  </Heading>).withDescription(`\n  Use polymorphics when you need to display content as a header, but without\n  using the semantic header elements that may cause problems for screen readers.\n`)',...Polymorphic.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Levels","SansVariant","Polymorphic"]},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);