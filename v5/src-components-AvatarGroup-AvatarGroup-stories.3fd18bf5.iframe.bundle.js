"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[5427],{"./src/components/AvatarGroup/AvatarGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Polymorphic:()=>Polymorphic,WithLimit:()=>WithLimit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarGroup_stories});var utils=__webpack_require__("./src/storybook/utils.ts"),react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),useScreenSize=__webpack_require__("./src/hooks/useScreenSize.ts"),src_utils=__webpack_require__("./src/utils/index.ts"),Group=__webpack_require__("./src/components/Group/Group.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AvatarGroup=(0,react.forwardRef)((({className,size=38,children,...props},ref)=>{const{resolve}=(0,useScreenSize.e)(),limit=resolve(props.limit)??100,overflow=react.Children.count(children)-limit;return(0,jsx_runtime.jsxs)(Group.Z,{ref,gap:0,className:(0,src_utils.cx)("[&>*]:-m-xxs",className),...props,children:[react.Children.map(children,((child,idx)=>(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"absolute -inset-[2px] bg-surface rounded-full"}),idx<limit&&child]},idx))),overflow>0&&(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"absolute -inset-[2px] bg-surface rounded-full"}),(0,jsx_runtime.jsx)(Avatar.q,{size,alt:`and ${overflow} more`,label:`+${overflow}`})]})]})}));try{AvatarGroup.displayName="AvatarGroup",AvatarGroup.__docgenInfo={description:"Grouping of avatars with logic to handle overflow",displayName:"AvatarGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},children:{defaultValue:null,description:"`<Avatar>` components to group together",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"38"},description:"Size for the placeholder to aggregate other avatars",name:"size",required:!1,type:{name:"number"}},limit:{defaultValue:null,description:"Maximum number of avatars to display",name:"limit",required:!1,type:{name:"ResponsiveProp<number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarGroup/AvatarGroup.tsx#AvatarGroup"]={docgenInfo:AvatarGroup.__docgenInfo,name:"AvatarGroup",path:"src/components/AvatarGroup/AvatarGroup.tsx#AvatarGroup"})}catch(__react_docgen_typescript_loader_error){}const AvatarGroup_stories={title:"Components / AvatarGroup",...(0,utils._v)(AvatarGroup).withStyleSystemProps()},Overview=(0,utils.no)((args=>(0,jsx_runtime.jsxs)(AvatarGroup,{...args,children:[(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Chase",opicUsername:"mcmanning.1"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Neil",opicUsername:"coplin.7"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Corey",opicUsername:"moore.4521"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"John",opicUsername:"ray.30"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Lily",opicUsername:"xing.216"})]}))),WithLimit=(0,utils.no)((args=>(0,jsx_runtime.jsxs)(AvatarGroup,{...args,children:[(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Chase",opicUsername:"mcmanning.1"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Neil",opicUsername:"coplin.7"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Corey",opicUsername:"moore.4521"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"John",opicUsername:"ray.30"}),(0,jsx_runtime.jsx)(Avatar.q,{alt:"",name:"Lily",opicUsername:"xing.216"})]})),{limit:2}),Polymorphic=(0,utils.no)((args=>(0,jsx_runtime.jsx)(AvatarGroup,{...args,children:[["Chase","mcmanning.1"],["Neil","coplin.7"],["Corey","moore.4521"],["John","ray.30"],["Lily","xing.216"]].map((person=>(0,jsx_runtime.jsx)(Avatar.q,{as:"a",alt:person[0],name:person[0],opicUsername:person[1],href:`https://code.osu.edu/${person[1]}`,target:"_blank"},person[0])))})));Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'RUIComponentStory<AvatarGroupProps>(args => <Component {...args}>\n    <Avatar alt="" name="Chase" opicUsername="mcmanning.1" />\n    <Avatar alt="" name="Neil" opicUsername="coplin.7" />\n    <Avatar alt="" name="Corey" opicUsername="moore.4521" />\n    <Avatar alt="" name="John" opicUsername="ray.30" />\n    <Avatar alt="" name="Lily" opicUsername="xing.216" />\n  </Component>)',...Overview.parameters?.docs?.source}}},WithLimit.parameters={...WithLimit.parameters,docs:{...WithLimit.parameters?.docs,source:{originalSource:'RUIComponentStory<AvatarGroupProps>(args => <Component {...args}>\n      <Avatar alt="" name="Chase" opicUsername="mcmanning.1" />\n      <Avatar alt="" name="Neil" opicUsername="coplin.7" />\n      <Avatar alt="" name="Corey" opicUsername="moore.4521" />\n      <Avatar alt="" name="John" opicUsername="ray.30" />\n      <Avatar alt="" name="Lily" opicUsername="xing.216" />\n    </Component>, {\n  limit: 2\n})',...WithLimit.parameters?.docs?.source}}},Polymorphic.parameters={...Polymorphic.parameters,docs:{...Polymorphic.parameters?.docs,source:{originalSource:"RUIComponentStory<AvatarGroupProps>(args => {\n  const people = [['Chase', 'mcmanning.1'], ['Neil', 'coplin.7'], ['Corey', 'moore.4521'], ['John', 'ray.30'], ['Lily', 'xing.216']];\n  return <Component {...args}>\n      {people.map(person => <Avatar as=\"a\" key={person[0]} alt={person[0]} name={person[0]} opicUsername={person[1]} href={`https://code.osu.edu/${person[1]}`} target=\"_blank\" />)}\n    </Component>;\n})",...Polymorphic.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","WithLimit","Polymorphic"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});__webpack_require__("./node_modules/react/index.js");var _utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/polymorphics.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_Image__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Image/Image.tsx"),_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.K)((({as,className,label,name,opicUsername,src,size=38,alt,...props},ref)=>(!src&&opicUsername&&(src=`https://opic.osu.edu/${opicUsername}?width=${size}&default=https://orapps.osu.edu/assets/img/pixel.gif`),!label&&name&&(label=name[0].toUpperCase(),opicUsername&&(label+=opicUsername[0].toUpperCase())),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__.x,{ref,as:as||"div",className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("not-prose block","relative",className),title:alt,style:{width:size,height:size},...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.x,{bgc:"surface-subtle",className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("absolute","top-0","rounded-full","overflow-hidden","text-center"),style:{fontSize:size/2.75+"px",lineHeight:size+"px",width:size+"px",height:size+"px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{fw:"bold",c:"neutral",children:label})}),src&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_6__.E,{width:size,height:size,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("rounded-full overflow-hidden"),src,alt:""})]}))));try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:'Avatar / profile picture automatically integrated with https://opic.osu.edu.\n\n## Accessibility\n- Image alt text is a required property. For purely cosmetic images, use `alt=""`.\n\n\x3c!-- @ruiPolymorphic --\x3e',displayName:"Avatar",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},size:{defaultValue:null,description:"Avatar width and height in pixels",name:"size",required:!1,type:{name:"number"}},src:{defaultValue:null,description:"Image source URL",name:"src",required:!1,type:{name:"string"}},opicUsername:{defaultValue:null,description:"Attempt to use OPIC to resolve the avatar.\n\nOnly enable if the avatar is for someone at Ohio State.\nProvide the user's name.# to retrieve their OPIC.",name:"opicUsername",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Image alt text",name:"alt",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"Users preferred name, starting with their first name.",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Fallback text to display when the image cannot be loaded.\n\nIf omitted, this will attempt to fallback to using the user's initials\nas determined by combining the `name` and `opicUsername` props.",name:"label",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"Change the root element of this component to either\nan intrinsic element or React component.",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Image/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_aria__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useTheme.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_Text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Image=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({style,className,width="100%",height="auto",fit="cover",src,alt,caption,imageProps={},placeholder,...props},ref)=>{const{resolve}=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.F)(),imgSrc=resolve(src),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!imgSrc);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setError(!1)}),[imgSrc]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__.x,{as:caption?"figure":"div",...props,className:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("relative",className),style:{width,height,...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{ref,src:imgSrc,alt,...(0,react_aria__WEBPACK_IMPORTED_MODULE_5__.dG)(imageProps,{style:{objectFit:fit,width,height,display:error?"none":void 0}}),onError:()=>setError(!0)}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:placeholder??(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.x,{children:alt})}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.x,{ta:"center",as:"figcaption",fs:"sm",c:"neutral-subtle",children:caption})]})}));try{Image.displayName="Image",Image.__docgenInfo={description:'Image documentation\n\nImage supports the full list of\n\n## Accessibility\n- The `alt` property is required to enforce screen reader support, unless a developer explicitly declares an image as cosmetic via `alt=""`.\n- Images are wrapped with `figure` and contain a `figcaption` when `caption` is provided.',displayName:"Image",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},src:{defaultValue:null,description:"Image source",name:"src",required:!1,type:{name:"ThemeProp<string>"}},alt:{defaultValue:null,description:'Image alt text, used as title for placeholder if image was not loaded.\n\nIf the image is only for decoration, use `alt=""`',name:"alt",required:!0,type:{name:"string"}},width:{defaultValue:{value:"100%"},description:"Image width",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"auto"},description:"Image height",name:"height",required:!1,type:{name:"string | number"}},fit:{defaultValue:{value:"cover"},description:"Image object-fit property",name:"fit",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"none"'},{value:'"fill"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},caption:{defaultValue:null,description:"Image caption",name:"caption",required:!1,type:{name:"ReactNode"}},imageProps:{defaultValue:{value:"{}"},description:"[Image element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) to spread into the `img` element",name:"imageProps",required:!1,type:{name:'Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref">'}},placeholder:{defaultValue:null,description:"Content to render while the image is loading or has failed to load.",name:"placeholder",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/Image/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_v:()=>RUIComponentMeta,no:()=>RUIComponentStory});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.ts");function RUIComponentMeta(component){return{...{component,argTypes:{},excludeStories:/(_.*)/,parameters:{badges:[]}},withStyleSystemProps:function(){return this.argTypes={...styleSystemArgTypes(),...this.argTypes},this},withArgTypes(argTypes){return this.argTypes={...this.argTypes,...argTypes},this}}}function RUIComponentStory(template,args={}){const instance=template.bind({});return instance.args=args,instance.parameters={docs:{}},instance.withDescription=markdown=>(instance.parameters={...instance.parameters,docs:{description:{story:markdown}}},instance),instance}function styleSystemArgTypes(){const margin={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Margin"}},padding={options:_types__WEBPACK_IMPORTED_MODULE_0__.spacing,table:{category:"Style System",subcategory:"Padding"}},size={table:{category:"Style System",subcategory:"Size"}},color={options:_theme__WEBPACK_IMPORTED_MODULE_1__.O9,control:"select",table:{category:"Style System",subcategory:"Color"}},font=options=>({options,table:{category:"Style System",subcategory:"Font"}}),layout={table:{category:"Style System",subcategory:"Layout"}};return{p:padding,px:padding,py:padding,pt:padding,pb:padding,pl:padding,pr:padding,m:margin,mx:margin,my:margin,mt:margin,mb:margin,ml:margin,mr:margin,w:size,h:size,miw:size,maw:size,mih:size,mah:size,c:color,bgc:color,ff:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontFamily),fw:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontWeight),fs:font(_types__WEBPACK_IMPORTED_MODULE_0__.fontSize),gridArea:layout,gridSpan:layout}}}}]);