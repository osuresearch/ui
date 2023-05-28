"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[8173],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lo:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Lo,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,_R:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._R,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/tokens/iconography.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>iconography_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),index_module=__webpack_require__("./node_modules/@osuresearch/iconography/dist/index.module.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function IconLibrary({name}){let names=[];return names="osu"===name?["rui:osu-buckeyelink","rui:osu-findpeople","rui:osu-search","rui:osu-webmail"]:Object.keys(index_module.Xx[name]),(0,jsx_runtime.jsx)(addon_docs_dist.Lo,{children:names.map((name=>(0,jsx_runtime.jsx)(addon_docs_dist._R,{name,children:(0,jsx_runtime.jsx)(Text.x,{children:(0,jsx_runtime.jsx)(Icon.J,{size:32,name})})},name)))})}IconLibrary.displayName="IconLibrary";try{IconLibrary.displayName="IconLibrary",IconLibrary.__docgenInfo={description:"Custom icon gallery component for Storybook to\nautomatically render a batch of icons from our library\n\nNote that this *must* be in JavaScript because\nStorybook's components don't fully support React 18.",displayName:"IconLibrary",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/IconLibrary.tsx#IconLibrary"]={docgenInfo:IconLibrary.__docgenInfo,name:"IconLibrary",path:"src/storybook/IconLibrary.tsx#IconLibrary"})}catch(__react_docgen_typescript_loader_error){}var Stack=__webpack_require__("./src/components/Stack/Stack.tsx"),Group=__webpack_require__("./src/components/Group/Group.tsx");function IllustrationLibrary({group}){const config={brand:{c:"neutral"},osu:{},system:{c:"clear",svgProps:{stroke:"var(--rui-neutral)",strokeWidth:1.5}}};return(0,jsx_runtime.jsx)(Stack.K,{align:"stretch",children:{brand:["rui-logo"],osu:["office-of-research-wordmark","osu-blocko"],system:["error","no-search-results","not-found","timeout","unauthorized","unavailable"]}[group].map((name=>(0,jsx_runtime.jsxs)(Group.Z,{children:[(0,jsx_runtime.jsx)(Icon.J,{name:"rui-illustration:"+name,size:200,...config[group]}),(0,jsx_runtime.jsxs)(Text.x,{children:["rui-illustration:",name]})]},name)))})}IllustrationLibrary.displayName="IllustrationLibrary";try{IllustrationLibrary.displayName="IllustrationLibrary",IllustrationLibrary.__docgenInfo={description:"Custom icon gallery component for Storybook to\nautomatically render a batch of icons from our library\n\nNote that this *must* be in JavaScript because\nStorybook's components don't fully support React 18.",displayName:"IllustrationLibrary",props:{group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"enum",value:[{value:'"brand"'},{value:'"osu"'},{value:'"system"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/IllustrationLibrary.tsx#IllustrationLibrary"]={docgenInfo:IllustrationLibrary.__docgenInfo,name:"IllustrationLibrary",path:"src/storybook/IllustrationLibrary.tsx#IllustrationLibrary"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",h2:"h2",em:"em",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design Tokens / Iconography"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"iconography",children:"Iconography"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is a collection of icons from https://github.com/osuresearch/iconography that are common across Office of Research applications."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"For additional icons to be added to the collection, open a feature request at https://github.com/osuresearch/iconography/issues"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All icons are SVG and can be rotated, scaled, and recolored."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"system-icons",children:"System Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Generic icons that are typically found in our web applications"}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"system"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigation-icons",children:"Navigation Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons used to guide clients around within an application"}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"navigation"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"data-icons",children:"Data Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons used to work with data sets. For example, sorting tabular data, filtering through search results, etc."}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"data"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"social-icons",children:"Social Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons to social media platforms and for interactions outside the application."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For more information on usage of social media, see https://bux.osu.edu/page-elements/social-media-links"}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"social"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"miscellaneous-icons",children:"Miscellaneous Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons that may be useful, but have not found a purpose yet. Some icons were added to create feature parity with BUX icon set."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Warning: Some of these may be removed. This is a ",(0,jsx_runtime.jsx)(_components.em,{children:"proposed"})," icon set."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"misc"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"duotone-icons",children:"Duotone Icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"TODO"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"illustrations",children:"Illustrations"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Illustrated elements that can be used as content placeholders."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Current illustrations are from ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.npmjs.com/package/@spectrum-icons/illustrations",target:"_blank",rel:"nofollow noopener noreferrer",children:"Adobe's React Spectrum (Apache 2.0)"}),"."]}),"\n",(0,jsx_runtime.jsx)(IllustrationLibrary,{group:"system"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"ohio-state-brand",children:"Ohio State Brand"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Brand illustrations for Ohio State must follow the guidelines specified at https://brand.osu.edu."}),"\n",(0,jsx_runtime.jsx)(IconLibrary,{name:"osu"}),"\n",(0,jsx_runtime.jsx)(IllustrationLibrary,{group:"osu"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Design Tokens / Iconography",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const iconography_stories=componentMeta}}]);