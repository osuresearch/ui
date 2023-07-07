"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[596],{"./node_modules/@react-aria/menu/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H9:()=>$d5336fe17ce95402$export$38eaa17faae8f579,iX:()=>$a2e5df62f93c7633$export$9d32628fc2aea7da,u4:()=>$168583247155ddda$export$dc9c12ed27dd1b49,x7:()=>$3e5eb2498db5b506$export$73f7a44322579622});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/i18n/dist/real-module.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),_react_aria_selection__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@react-aria/selection/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_react_stately_collections__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $parcel$interopDefault(a){return a&&a.__esModule?a.default:a}var $2cbb7ca666678a14$exports={};function $168583247155ddda$export$dc9c12ed27dd1b49(props,state,ref){let{type="menu",isDisabled,trigger="press"}=props,menuTriggerId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.Me)(),{triggerProps,overlayProps}=(0,_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.IB)({type},state,ref),stringFormatter=(0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.qb)($parcel$interopDefault($2cbb7ca666678a14$exports)),{longPressProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.TA)({isDisabled:isDisabled||"longPress"!==trigger,accessibilityDescription:stringFormatter.format("longPressMessage"),onLongPressStart(){state.close()},onLongPress(){state.open("first")}}),pressProps={onPressStart(e){"touch"===e.pointerType||"keyboard"===e.pointerType||isDisabled||state.toggle("virtual"===e.pointerType?"first":null)},onPress(e){"touch"!==e.pointerType||isDisabled||state.toggle()}};return delete triggerProps.onPress,{menuTriggerProps:{...triggerProps,..."press"===trigger?pressProps:longPressProps,id:menuTriggerId,onKeyDown:e=>{if(!isDisabled&&("longPress"!==trigger||e.altKey)&&ref&&ref.current)switch(e.key){case"Enter":case" ":if("longPress"===trigger)return;case"ArrowDown":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),state.toggle("first");break;case"ArrowUp":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),state.toggle("last")}}},menuProps:{...overlayProps,"aria-labelledby":menuTriggerId,autoFocus:state.focusStrategy||!0,onClose:state.close}}}$2cbb7ca666678a14$exports={"ar-AE":{longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"},"bg-BG":{longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"},"cs-CZ":{longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"},"da-DK":{longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"},"de-DE":{longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"},"el-GR":{longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"},"en-US":{longPressMessage:"Long press or press Alt + ArrowDown to open menu"},"es-ES":{longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"},"et-EE":{longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"},"fi-FI":{longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"},"fr-FR":{longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."},"he-IL":{longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"},"hr-HR":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"},"hu-HU":{longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"},"it-IT":{longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"},"ja-JP":{longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"},"ko-KR":{longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"},"lt-LT":{longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."},"lv-LV":{longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"},"nb-NO":{longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"},"nl-NL":{longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"},"pl-PL":{longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"},"pt-BR":{longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"},"pt-PT":{longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"},"ro-RO":{longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"},"ru-RU":{longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"},"sk-SK":{longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"},"sl-SI":{longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"},"sr-SP":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"},"sv-SE":{longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"},"tr-TR":{longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"},"uk-UA":{longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"},"zh-CN":{longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"},"zh-TW":{longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"}};const $d5336fe17ce95402$export$6f49b4016bfc8d56=new WeakMap;function $d5336fe17ce95402$export$38eaa17faae8f579(props,state,ref){let{shouldFocusWrap=!0,...otherProps}=props;props["aria-label"]||props["aria-labelledby"]||console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.zL)(props,{labelable:!0}),{listProps}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_5__._t)({...otherProps,ref,selectionManager:state.selectionManager,collection:state.collection,disabledKeys:state.disabledKeys,shouldFocusWrap});return $d5336fe17ce95402$export$6f49b4016bfc8d56.set(state,{onClose:props.onClose,onAction:props.onAction}),{menuProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.dG)(domProps,{role:"menu","aria-hidden":state.expandedKeys.size>0||void 0,...listProps,onKeyDown:e=>{"Escape"!==e.key&&listProps.onKeyDown(e)}})}}function $a2e5df62f93c7633$export$9d32628fc2aea7da(props,state,ref){let{key,closeOnSelect,isVirtualized,"aria-haspopup":hasPopup}=props,{direction}=(0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.bU)(),isTrigger=!!hasPopup,isOpen=state.expandedKeys.has(key);var _props_isDisabled;let isDisabled=null!==(_props_isDisabled=props.isDisabled)&&void 0!==_props_isDisabled?_props_isDisabled:state.disabledKeys.has(key);var _props_isSelected;let isSelected=null!==(_props_isSelected=props.isSelected)&&void 0!==_props_isSelected?_props_isSelected:state.selectionManager.isSelected(key),openTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),cancelOpenTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{openTimeout.current&&(clearTimeout(openTimeout.current),openTimeout.current=void 0)}),[openTimeout]),onSubmenuOpen=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.iW)((()=>{cancelOpenTimeout(),state.setExpandedKeys(new Set([key]))}));(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.bt)((()=>()=>cancelOpenTimeout()),[cancelOpenTimeout]);let data=$d5336fe17ce95402$export$6f49b4016bfc8d56.get(state),onClose=props.onClose||data.onClose,onActionMenuDialogTrigger=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{onSubmenuOpen()}),[]),onAction=isTrigger?onActionMenuDialogTrigger:props.onAction||data.onAction,role="menuitem";"single"===state.selectionManager.selectionMode?role="menuitemradio":"multiple"===state.selectionManager.selectionMode&&(role="menuitemcheckbox");let labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mp)(),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mp)(),keyboardId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mp)(),ariaProps={"aria-disabled":isDisabled||void 0,role,"aria-label":props["aria-label"],"aria-labelledby":labelId,"aria-describedby":[descriptionId,keyboardId].filter(Boolean).join(" ")||void 0};"none"!==state.selectionManager.selectionMode&&(ariaProps["aria-checked"]=isSelected),isVirtualized&&(ariaProps["aria-posinset"]=state.collection.getItem(key).index,ariaProps["aria-setsize"]=(0,_react_stately_collections__WEBPACK_IMPORTED_MODULE_6__.is)(state.collection)),null!=hasPopup&&(ariaProps["aria-haspopup"]=hasPopup,ariaProps["aria-expanded"]=isOpen?"true":"false");let{itemProps,isFocused}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_5__.Cs)({selectionManager:state.selectionManager,key,ref,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0}),{pressProps,isPressed}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.r7)({onPressStart:e=>{"keyboard"===e.pointerType&&onAction&&onAction(key)},onPressUp:e=>{"keyboard"!==e.pointerType&&(onAction&&onAction(key),!isTrigger&&onClose&&(null!=closeOnSelect?closeOnSelect:"multiple"!==state.selectionManager.selectionMode)&&onClose())},isDisabled:isDisabled||isTrigger&&state.expandedKeys.has(key)}),{hoverProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.XI)({isDisabled,onHoverStart(){if(!((0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.E)()||isTrigger&&state.expandedKeys.has(key))){state.selectionManager.setFocused(!0),state.selectionManager.setFocusedKey(key),key===state.selectionManager.focusedKey&&state.selectionManager.isFocused&&document.activeElement!==ref.current&&(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_7__.ex)(ref.current)}},onHoverChange:isHovered=>{isHovered&&isTrigger&&!state.expandedKeys.has(key)?openTimeout.current||(openTimeout.current=setTimeout((()=>{onSubmenuOpen()}),200)):isHovered||cancelOpenTimeout()}}),{keyboardProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.v5)({onKeyDown:e=>{if(e.repeat)e.continuePropagation();else switch(e.key){case" ":isDisabled||"none"!==state.selectionManager.selectionMode||isTrigger||!1===closeOnSelect||!onClose||onClose();break;case"Enter":isDisabled||!1===closeOnSelect||isTrigger||!onClose||onClose();break;case"ArrowRight":isTrigger&&"ltr"===direction?onSubmenuOpen():e.continuePropagation();break;case"ArrowLeft":isTrigger&&"rtl"===direction?onSubmenuOpen():e.continuePropagation();break;default:e.continuePropagation()}}});return{menuItemProps:{...ariaProps,...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.dG)(itemProps,pressProps,hoverProps,keyboardProps)},labelProps:{id:labelId},descriptionProps:{id:descriptionId},keyboardShortcutProps:{id:keyboardId},isFocused,isSelected,isPressed,isDisabled}}function $3e5eb2498db5b506$export$73f7a44322579622(props){let{heading,"aria-label":ariaLabel}=props,headingId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.Me)();return{itemProps:{role:"presentation"},headingProps:heading?{id:headingId,role:"presentation"}:{},groupProps:{role:"group","aria-label":ariaLabel,"aria-labelledby":heading?headingId:void 0}}}}}]);