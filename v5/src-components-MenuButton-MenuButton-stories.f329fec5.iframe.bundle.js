"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[1924],{"./src/components/MenuButton/MenuButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,DynamicItems:()=>DynamicItems,Overview:()=>Overview,SelectingItems:()=>SelectingItems,WithCustomTrigger:()=>WithCustomTrigger,WithDisabledItems:()=>WithDisabledItems,WithSections:()=>WithSections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuButton_stories});var utils=__webpack_require__("./src/storybook/utils.ts"),react=__webpack_require__("./node_modules/react/index.js"),Item=__webpack_require__("./src/components/Item/Item.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/menu/dist/import.mjs"),menu_dist_import=__webpack_require__("./node_modules/@react-stately/menu/dist/import.mjs"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),useStyleSystemProps=__webpack_require__("./src/hooks/useStyleSystemProps.ts"),Menu=__webpack_require__("./src/components/Menu/Menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuButton({children,label,renderTrigger,placement="bottom left",...props}){const triggerRef=(0,react.useRef)(null),state=(0,menu_dist_import.W)(props),[styleSystemProps]=(0,useStyleSystemProps.z)(props),{menuTriggerProps,menuProps}=(0,dist_import.u4)(props,state,triggerRef);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[renderTrigger?react.cloneElement(renderTrigger,{...menuTriggerProps,ref:triggerRef}):(0,jsx_runtime.jsx)(Button.z,{ref:triggerRef,"aria-label":props["aria-label"],isDisabled:props.isDisabled,renderRight:(0,jsx_runtime.jsx)(Icon.J,{name:"chevron",rotate:90}),...menuTriggerProps,...styleSystemProps,children:label}),state.isOpen&&(0,jsx_runtime.jsx)(Popover.J,{state,triggerRef,placement,children:(0,jsx_runtime.jsx)(Menu.v2,{...menuProps,...props,children})})]})}try{MenuButton.displayName="MenuButton",MenuButton.__docgenInfo={description:"A menu button displays a list of actions or options that a user can choose.",displayName:"MenuButton",props:{id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<Spacing>"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<Spacing>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<Spacing>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<Spacing>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<Spacing>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<Spacing>"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"ResponsiveProp<Width<string | number>>"}},miw:{defaultValue:null,description:"",name:"miw",required:!1,type:{name:"ResponsiveProp<MinWidth<string | number>>"}},maw:{defaultValue:null,description:"",name:"maw",required:!1,type:{name:"ResponsiveProp<MaxWidth<string | number>>"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"ResponsiveProp<Height<string | number>>"}},mih:{defaultValue:null,description:"",name:"mih",required:!1,type:{name:"ResponsiveProp<MinHeight<string | number>>"}},mah:{defaultValue:null,description:"",name:"mah",required:!1,type:{name:"ResponsiveProp<MaxHeight<string | number>>"}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},bgc:{defaultValue:null,description:"",name:"bgc",required:!1,type:{name:'ThemeProp<"white" | "black" | "clear" | "focus" | "neutral" | "neutral-subtle" | "neutral-bold" | "surface" | "surface-inverse" | "surface-subtle" | "surface-subtle-inverse" | "surface-bold" | ... 60 more ... | "gray">'}},ff:{defaultValue:null,description:"",name:"ff",required:!1,type:{name:"enum",value:[{value:'"sans"'},{value:'"serif"'},{value:'"mono"'}]}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xs"'},{value:'"base"'}]}},fw:{defaultValue:null,description:"",name:"fw",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},gridArea:{defaultValue:null,description:"Where to place this component within a CSS Grid.\nMust be one of the `grid-template-area` values\nin the parent grid.",name:"gridArea",required:!1,type:{name:"ResponsiveProp<string>"}},gridSpan:{defaultValue:null,description:"Column span in a grid layout.\n\nEquivalent to CSS `grid-column: span N / span N;`",name:"gridSpan",required:!1,type:{name:'ResponsiveProp<number | "auto">'}},trigger:{defaultValue:{value:"'press'"},description:"How the menu is triggered.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"press"'},{value:'"longPress"'}]}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},autoFocus:{defaultValue:null,description:"Where the focus should be set.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Handler that is called when an item is selected.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},onClose:{defaultValue:null,description:"Handler that is called when the menu should close after selecting an item.",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The contents of the collection.\n`Item` components only",name:"children",required:!0,type:{name:"CollectionChildren<T>"}},items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"multiple"'},{value:'"single"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => any)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},renderTrigger:{defaultValue:null,description:"Custom trigger element.\n\nIf omitted, a button with the chevron icon will be used.",name:"renderTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},placement:{defaultValue:{value:"bottom left"},description:"Placement of the popover with respect to its anchor.\n\nDefaults to `bottom left`.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/MenuButton.tsx#MenuButton"]={docgenInfo:MenuButton.__docgenInfo,name:"MenuButton",path:"src/components/MenuButton/MenuButton.tsx#MenuButton"})}catch(__react_docgen_typescript_loader_error){}var Section=__webpack_require__("./src/components/Section/Section.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx");const MenuButton_stories={title:"Buttons / MenuButton",...(0,utils._v)(MenuButton)},Overview=(0,utils.no)((args=>(0,jsx_runtime.jsxs)(MenuButton,{...args,label:"Options",onAction:alert,children:[(0,jsx_runtime.jsx)(Item.c,{children:"Copy"},"copy"),(0,jsx_runtime.jsx)(Item.c,{children:"Cut"},"cut"),(0,jsx_runtime.jsx)(Item.c,{children:"Paste"},"paste")]}))),Disabled=(0,utils.no)(Overview,{isDisabled:!0}),WithDisabledItems=(0,utils.no)(Overview,{disabledKeys:["cut"]}),DynamicItems=(0,utils.no)((args=>(0,jsx_runtime.jsx)(MenuButton,{...args,label:"Options",items:[{id:"new",name:"New"},{id:"open",name:"Open"},{id:"close",name:"Close"},{id:"save",name:"Save"},{id:"duplicate",name:"Duplicate"},{id:"rename",name:"Rename"},{id:"move",name:"Move"}],onAction:alert,children:item=>(0,jsx_runtime.jsx)(Item.c,{children:item.name},item.id)}))),WithSections=(0,utils.no)((args=>(0,jsx_runtime.jsxs)(MenuButton,{...args,label:"Options",onAction:alert,children:[(0,jsx_runtime.jsxs)(Section.$,{title:"My Account",children:[(0,jsx_runtime.jsx)(Item.c,{children:"Billing"},"billing"),(0,jsx_runtime.jsx)(Item.c,{children:"Settings"},"settings")]}),(0,jsx_runtime.jsxs)(Section.$,{title:"My Team",children:[(0,jsx_runtime.jsx)(Item.c,{children:"Invite users"},"invite"),(0,jsx_runtime.jsx)(Item.c,{children:"New team"},"new"),(0,jsx_runtime.jsx)(Item.c,{children:"Permissions"},"permissions")]}),(0,jsx_runtime.jsx)(Section.$,{children:(0,jsx_runtime.jsx)(Item.c,{children:"Log out"},"logout")})]}))),WithCustomTrigger=(0,utils.no)((args=>(0,jsx_runtime.jsxs)(MenuButton,{...args,onAction:alert,renderTrigger:(0,jsx_runtime.jsx)(IconButton.h,{label:"More options",name:"dots",iconProps:{rotate:90}}),children:[(0,jsx_runtime.jsxs)(Section.$,{title:"My Account",children:[(0,jsx_runtime.jsx)(Item.c,{children:"Billing"},"billing"),(0,jsx_runtime.jsx)(Item.c,{children:"Settings"},"settings")]}),(0,jsx_runtime.jsxs)(Section.$,{title:"My Team",children:[(0,jsx_runtime.jsx)(Item.c,{children:"Invite users"},"invite"),(0,jsx_runtime.jsx)(Item.c,{children:"New team"},"new"),(0,jsx_runtime.jsx)(Item.c,{children:"Permissions"},"permissions")]}),(0,jsx_runtime.jsx)(Section.$,{children:(0,jsx_runtime.jsx)(Item.c,{children:"Log out"},"logout")})]}))),SelectingItems=(0,utils.no)((args=>{const[selection,setSelection]=(0,react.useState)(new Set(["dx12","metal"]));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(MenuButton,{...args,label:"Transpile target(s)",selectionMode:"multiple",selectedKeys:selection,onSelectionChange:setSelection,children:[(0,jsx_runtime.jsx)(Item.c,{children:"DirectX 12"},"dx12"),(0,jsx_runtime.jsx)(Item.c,{children:"Metal"},"metal"),(0,jsx_runtime.jsx)(Item.c,{children:"OpenGL ES"},"gles"),(0,jsx_runtime.jsx)(Item.c,{children:"OpenGL 3.0"},"gl3"),(0,jsx_runtime.jsx)(Item.c,{children:"Vulkan"},"vulkan"),(0,jsx_runtime.jsxs)(Section.$,{title:"Legacy APIs",children:[(0,jsx_runtime.jsx)(Item.c,{children:"DirectX 11"},"dx11"),(0,jsx_runtime.jsx)(Item.c,{children:"OpenGL 2.0"},"gl2")]})]}),(0,jsx_runtime.jsxs)(Text.x,{as:"p",children:["Selected: ",Array.from(selection).join(", ")]})]})})).withDescription('\n  Using `selectionMode="multiple"` will make each list item selectable.\n\n  Keyboard users can use `Space` to toggle items.\n');Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'RUIComponentStory<MenuButtonProps>(args => <MenuButton {...args} label="Options" onAction={alert}>\n    <Item key="copy">Copy</Item>\n    <Item key="cut">Cut</Item>\n    <Item key="paste">Paste</Item>\n  </MenuButton>)',...Overview.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"RUIComponentStory(Overview, {\n  isDisabled: true\n})",...Disabled.parameters?.docs?.source}}},WithDisabledItems.parameters={...WithDisabledItems.parameters,docs:{...WithDisabledItems.parameters?.docs,source:{originalSource:"RUIComponentStory(Overview, {\n  disabledKeys: ['cut']\n})",...WithDisabledItems.parameters?.docs?.source}}},DynamicItems.parameters={...DynamicItems.parameters,docs:{...DynamicItems.parameters?.docs,source:{originalSource:"RUIComponentStory<MenuButtonProps>(args => {\n  const items = [{\n    id: 'new',\n    name: 'New'\n  }, {\n    id: 'open',\n    name: 'Open'\n  }, {\n    id: 'close',\n    name: 'Close'\n  }, {\n    id: 'save',\n    name: 'Save'\n  }, {\n    id: 'duplicate',\n    name: 'Duplicate'\n  }, {\n    id: 'rename',\n    name: 'Rename'\n  }, {\n    id: 'move',\n    name: 'Move'\n  }];\n  return <MenuButton {...args} label=\"Options\" items={items} onAction={alert}>\n      {item => <Item key={item.id}>{item.name}</Item>}\n    </MenuButton>;\n})",...DynamicItems.parameters?.docs?.source}}},WithSections.parameters={...WithSections.parameters,docs:{...WithSections.parameters?.docs,source:{originalSource:'RUIComponentStory<MenuButtonProps>(args => <MenuButton {...args} label="Options" onAction={alert}>\n    <Section title="My Account">\n      <Item key="billing">Billing</Item>\n      <Item key="settings">Settings</Item>\n    </Section>\n    <Section title="My Team">\n      <Item key="invite">Invite users</Item>\n      <Item key="new">New team</Item>\n      <Item key="permissions">Permissions</Item>\n    </Section>\n    <Section>\n      <Item key="logout">Log out</Item>\n    </Section>\n  </MenuButton>)',...WithSections.parameters?.docs?.source}}},WithCustomTrigger.parameters={...WithCustomTrigger.parameters,docs:{...WithCustomTrigger.parameters?.docs,source:{originalSource:'RUIComponentStory<MenuButtonProps>(args => <MenuButton {...args} onAction={alert} renderTrigger={<IconButton label="More options" name="dots" iconProps={{\n  rotate: 90\n}} />}>\n    <Section title="My Account">\n      <Item key="billing">Billing</Item>\n      <Item key="settings">Settings</Item>\n    </Section>\n    <Section title="My Team">\n      <Item key="invite">Invite users</Item>\n      <Item key="new">New team</Item>\n      <Item key="permissions">Permissions</Item>\n    </Section>\n    <Section>\n      <Item key="logout">Log out</Item>\n    </Section>\n  </MenuButton>)',...WithCustomTrigger.parameters?.docs?.source}}},SelectingItems.parameters={...SelectingItems.parameters,docs:{...SelectingItems.parameters?.docs,source:{originalSource:'RUIComponentStory<MenuButtonProps>(args => {\n  const [selection, setSelection] = useState<Selection>(new Set([\'dx12\', \'metal\']));\n  return <>\n      <MenuButton {...args} label="Transpile target(s)" selectionMode="multiple" selectedKeys={selection} onSelectionChange={setSelection}>\n        <Item key="dx12">DirectX 12</Item>\n        <Item key="metal">Metal</Item>\n        <Item key="gles">OpenGL ES</Item>\n        <Item key="gl3">OpenGL 3.0</Item>\n        <Item key="vulkan">Vulkan</Item>\n        <Section title="Legacy APIs">\n          <Item key="dx11">DirectX 11</Item>\n          <Item key="gl2">OpenGL 2.0</Item>\n        </Section>\n      </MenuButton>\n      <Text as="p">Selected: {Array.from(selection).join(\', \')}</Text>\n    </>;\n}).withDescription(`\n  Using \\`selectionMode="multiple"\\` will make each list item selectable.\n\n  Keyboard users can use \\`Space\\` to toggle items.\n`)',...SelectingItems.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Disabled","WithDisabledItems","DynamicItems","WithSections","WithCustomTrigger","SelectingItems"]},"./src/components/Section/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Section});const Section=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs").$0;try{Section.displayName="Section",Section.__docgenInfo={description:"The Section component is shared between many collection components to ensure\nthey have a consistent interface that can be learned once and applied\neverywhere.\n\nItem only defines the data, not the rendering, visual appearance, or behaviour.\nThis is up to the individual collection component (e.g. Menu or TabPanel) to implement.\n\nThis is a simple wrapper over React Stately's Section component.\nFor detailed information, see [React Stately's collection docs](https://react-spectrum.adobe.com/react-stately/collections.html)",displayName:"Section",props:{title:{defaultValue:null,description:"Rendered contents of the section, e.g. a header.",name:"title",required:!1,type:{name:"ReactNode"}},"aria-label":{defaultValue:null,description:"An accessibility label for the section.",name:"aria-label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Static child items or a function to render children.",name:"children",required:!0,type:{name:"ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>"}},items:{defaultValue:null,description:"Item objects in the section.",name:"items",required:!1,type:{name:"Iterable<T>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Section/Section.tsx#Section"]={docgenInfo:Section.__docgenInfo,name:"Section",path:"src/components/Section/Section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}}}]);