"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[6563],{"./src/components/Link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Polymorphic:()=>Polymorphic,Subtle:()=>Subtle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sb_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/utils.ts"),_Box__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Box/Box.tsx")),_Link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Link/Link.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation / Link",...(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__._v)(_Link__WEBPACK_IMPORTED_MODULE_3__.r).withStyleSystemProps()},Overview=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{href:"https://research.osu.edu",...args,children:"research.osu.edu"}))),Subtle=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__.x,{bgc:"primary",c:"primary-inverse",p:"lg",children:["Here is an example of an"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{href:"https://research.osu.edu",...args,children:"subtle link"})," ","within a paragraph on a primary background."]})),{variant:"subtle"}).withDescription("Use the subtle variant for links that will be against an accented background"),Polymorphic=(0,_sb_utils__WEBPACK_IMPORTED_MODULE_2__.no)((args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{as:"button",onClick:()=>alert("Clicked link button!"),...args,children:"button rendered as a link"})));Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'RUIComponentStory<LinkProps>(args => <Link href="https://research.osu.edu" {...args}>\n    research.osu.edu\n  </Link>)',...Overview.parameters?.docs?.source}}},Subtle.parameters={...Subtle.parameters,docs:{...Subtle.parameters?.docs,source:{originalSource:"RUIComponentStory<LinkProps>(args => <Box bgc=\"primary\" c=\"primary-inverse\" p=\"lg\">\n      Here is an example of an{' '}\n      <Link href=\"https://research.osu.edu\" {...args}>\n        subtle link\n      </Link>{' '}\n      within a paragraph on a primary background.\n    </Box>, {\n  variant: 'subtle'\n}).withDescription('Use the subtle variant for links that will be against an accented background')",...Subtle.parameters?.docs?.source}}},Polymorphic.parameters={...Polymorphic.parameters,docs:{...Polymorphic.parameters?.docs,source:{originalSource:"RUIComponentStory<LinkProps>(args => <Link as=\"button\" onClick={() => alert('Clicked link button!')} {...args}>\n    button rendered as a link\n  </Link>)",...Polymorphic.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Subtle","Polymorphic"]},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);