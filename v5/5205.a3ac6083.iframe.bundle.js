"use strict";(self.webpackChunk_osuresearch_ui=self.webpackChunk_osuresearch_ui||[]).push([[5205],{"./node_modules/@react-stately/data/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SH:()=>$0d86e9c8f07f9a7b$export$762f73dccccd255d,TY:()=>$f86e6c1ec7da6ebb$export$bc3384a35de93d66});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $0d86e9c8f07f9a7b$export$762f73dccccd255d(options){let{initialItems=[],initialSelectedKeys,getKey=item=>item.id||item.key,filter,initialFilterText=""}=options,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({items:initialItems,selectedKeys:"all"===initialSelectedKeys?"all":new Set(initialSelectedKeys||[]),filterText:initialFilterText}),filteredItems=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>filter?state.items.filter((item=>filter(item,state.filterText))):state.items),[state.items,state.filterText,filter]);return{...state,items:filteredItems,...$0d86e9c8f07f9a7b$export$79c0c687a5963b0a({getKey},setState),getItem:key=>state.items.find((item=>getKey(item)===key))}}function $0d86e9c8f07f9a7b$export$79c0c687a5963b0a(opts,dispatch){let{cursor,getKey}=opts;return{setSelectedKeys(selectedKeys){dispatch((state=>({...state,selectedKeys})))},setFilterText(filterText){dispatch((state=>({...state,filterText})))},insert(index,...values){dispatch((state=>$0d86e9c8f07f9a7b$var$insert(state,index,...values)))},insertBefore(key,...values){dispatch((state=>{let index=state.items.findIndex((item=>getKey(item)===key));if(-1===index){if(0!==state.items.length)return state;index=0}return $0d86e9c8f07f9a7b$var$insert(state,index,...values)}))},insertAfter(key,...values){dispatch((state=>{let index=state.items.findIndex((item=>getKey(item)===key));if(-1===index){if(0!==state.items.length)return state;index=0}return $0d86e9c8f07f9a7b$var$insert(state,index+1,...values)}))},prepend(...values){dispatch((state=>$0d86e9c8f07f9a7b$var$insert(state,0,...values)))},append(...values){dispatch((state=>$0d86e9c8f07f9a7b$var$insert(state,state.items.length,...values)))},remove(...keys){dispatch((state=>{let keySet=new Set(keys),items=state.items.filter((item=>!keySet.has(getKey(item)))),selection="all";if("all"!==state.selectedKeys){selection=new Set(state.selectedKeys);for(let key of keys)selection.delete(key)}return null==cursor&&0===items.length&&(selection=new Set),{...state,items,selectedKeys:selection}}))},removeSelectedItems(){dispatch((state=>{if("all"===state.selectedKeys)return{...state,items:[],selectedKeys:new Set};let selectedKeys=state.selectedKeys,items=state.items.filter((item=>!selectedKeys.has(getKey(item))));return{...state,items,selectedKeys:new Set}}))},move(key,toIndex){dispatch((state=>{let index=state.items.findIndex((item=>getKey(item)===key));if(-1===index)return state;let copy=state.items.slice(),[item]=copy.splice(index,1);return copy.splice(toIndex,0,item),{...state,items:copy}}))},moveBefore(key,keys){dispatch((state=>{let toIndex=state.items.findIndex((item=>getKey(item)===key));if(-1===toIndex)return state;let indices=(Array.isArray(keys)?keys:[...keys]).map((key=>state.items.findIndex((item=>getKey(item)===key)))).sort();return $0d86e9c8f07f9a7b$var$move(state,indices,toIndex)}))},moveAfter(key,keys){dispatch((state=>{let toIndex=state.items.findIndex((item=>getKey(item)===key));if(-1===toIndex)return state;let indices=(Array.isArray(keys)?keys:[...keys]).map((key=>state.items.findIndex((item=>getKey(item)===key)))).sort();return $0d86e9c8f07f9a7b$var$move(state,indices,toIndex+1)}))},update(key,newValue){dispatch((state=>{let index=state.items.findIndex((item=>getKey(item)===key));return-1===index?state:{...state,items:[...state.items.slice(0,index),newValue,...state.items.slice(index+1)]}}))}}}function $0d86e9c8f07f9a7b$var$insert(state,index,...values){return{...state,items:[...state.items.slice(0,index),...values,...state.items.slice(index)]}}function $0d86e9c8f07f9a7b$var$move(state,indices,toIndex){toIndex-=indices.filter((index=>index<toIndex)).length;let moves=indices.map((from=>({from,to:toIndex++})));for(let i=0;i<moves.length;i++){let a=moves[i].from;for(let j=i;j<moves.length;j++){moves[j].from>a&&moves[j].from--}}for(let i1=0;i1<moves.length;i1++){let a1=moves[i1];for(let j1=moves.length-1;j1>i1;j1--){let b1=moves[j1];b1.from<a1.to?a1.to++:b1.from++}}let copy=state.items.slice();for(let move of moves){let[item]=copy.splice(move.from,1);copy.splice(move.to,0,item)}return{...state,items:copy}}function $f86e6c1ec7da6ebb$var$reducer(data,action){let selectedKeys;switch(data.state){case"idle":case"error":switch(action.type){case"loading":case"loadingMore":case"sorting":case"filtering":var _action_filterText,_action_sortDescriptor;return{...data,filterText:null!==(_action_filterText=action.filterText)&&void 0!==_action_filterText?_action_filterText:data.filterText,state:action.type,items:"loading"===action.type?[]:data.items,sortDescriptor:null!==(_action_sortDescriptor=action.sortDescriptor)&&void 0!==_action_sortDescriptor?_action_sortDescriptor:data.sortDescriptor,abortController:action.abortController};case"update":return{...data,...action.updater(data)};case"success":case"error":return data;default:throw new Error(`Invalid action "${action.type}" in state "${data.state}"`)}case"loading":case"sorting":case"filtering":switch(action.type){case"success":return action.abortController!==data.abortController?data:(selectedKeys=null!==(_action_selectedKeys=action.selectedKeys)&&void 0!==_action_selectedKeys?_action_selectedKeys:data.selectedKeys,{...data,filterText:null!==(_action_filterText1=action.filterText)&&void 0!==_action_filterText1?_action_filterText1:data.filterText,state:"idle",items:[...action.items],selectedKeys:"all"===selectedKeys?"all":new Set(selectedKeys),sortDescriptor:null!==(_action_sortDescriptor1=action.sortDescriptor)&&void 0!==_action_sortDescriptor1?_action_sortDescriptor1:data.sortDescriptor,abortController:null,cursor:action.cursor});var _action_selectedKeys,_action_filterText1,_action_sortDescriptor1;case"error":return action.abortController!==data.abortController?data:{...data,state:"error",error:action.error,abortController:null};case"loading":case"loadingMore":case"sorting":case"filtering":var _action_filterText2;return data.abortController.abort(),{...data,filterText:null!==(_action_filterText2=action.filterText)&&void 0!==_action_filterText2?_action_filterText2:data.filterText,state:action.type,items:"loading"===action.type?[]:data.items,abortController:action.abortController};case"update":return{...data,...action.updater(data)};default:throw new Error(`Invalid action "${action.type}" in state "${data.state}"`)}case"loadingMore":switch(action.type){case"success":var _action_selectedKeys1,_action_sortDescriptor2;return selectedKeys="all"===data.selectedKeys||"all"===action.selectedKeys?"all":new Set([...data.selectedKeys,...null!==(_action_selectedKeys1=action.selectedKeys)&&void 0!==_action_selectedKeys1?_action_selectedKeys1:[]]),{...data,state:"idle",items:[...data.items,...action.items],selectedKeys,sortDescriptor:null!==(_action_sortDescriptor2=action.sortDescriptor)&&void 0!==_action_sortDescriptor2?_action_sortDescriptor2:data.sortDescriptor,abortController:null,cursor:action.cursor};case"error":return action.abortController!==data.abortController?data:{...data,state:"error",error:action.error};case"loading":case"sorting":case"filtering":var _action_filterText3;return data.abortController.abort(),{...data,filterText:null!==(_action_filterText3=action.filterText)&&void 0!==_action_filterText3?_action_filterText3:data.filterText,state:action.type,items:"loading"===action.type?[]:data.items,abortController:action.abortController};case"loadingMore":return action.abortController.abort(),data;case"update":return{...data,...action.updater(data)};default:throw new Error(`Invalid action "${action.type}" in state "${data.state}"`)}default:throw new Error(`Invalid state "${data.state}"`)}}function $f86e6c1ec7da6ebb$export$bc3384a35de93d66(options){const{load,sort,initialSelectedKeys,initialSortDescriptor,getKey=item=>item.id||item.key,initialFilterText=""}=options;let[data,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)($f86e6c1ec7da6ebb$var$reducer,{state:"idle",error:null,items:[],selectedKeys:"all"===initialSelectedKeys?"all":new Set(initialSelectedKeys),sortDescriptor:initialSortDescriptor,filterText:initialFilterText});const dispatchFetch=async(action,fn)=>{let abortController=new AbortController;try{var _action_filterText;dispatch({...action,abortController});let previousFilterText=null!==(_action_filterText=action.filterText)&&void 0!==_action_filterText?_action_filterText:data.filterText;var _action_sortDescriptor;let response=await fn({items:data.items.slice(),selectedKeys:data.selectedKeys,sortDescriptor:null!==(_action_sortDescriptor=action.sortDescriptor)&&void 0!==_action_sortDescriptor?_action_sortDescriptor:data.sortDescriptor,signal:abortController.signal,cursor:"loadingMore"===action.type?data.cursor:null,filterText:previousFilterText});var _response_filterText;let filterText=null!==(_response_filterText=response.filterText)&&void 0!==_response_filterText?_response_filterText:previousFilterText;dispatch({type:"success",...response,abortController}),filterText&&filterText!==previousFilterText&&!abortController.signal.aborted&&dispatchFetch({type:"filtering",filterText},load)}catch(e){dispatch({type:"error",error:e,abortController})}};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{dispatchFetch({type:"loading"},load)}),[]),{items:data.items,selectedKeys:data.selectedKeys,sortDescriptor:data.sortDescriptor,isLoading:"loading"===data.state||"loadingMore"===data.state||"sorting"===data.state||"filtering"===data.state,loadingState:data.state,error:data.error,filterText:data.filterText,getItem:key=>data.items.find((item=>getKey(item)===key)),reload(){dispatchFetch({type:"loading"},load)},loadMore(){"loadingMore"!==data.state&&"filtering"!==data.state&&null!=data.cursor&&dispatchFetch({type:"loadingMore"},load)},sort(sortDescriptor){dispatchFetch({type:"sorting",sortDescriptor},sort||load)},...$0d86e9c8f07f9a7b$export$79c0c687a5963b0a({...options,getKey,cursor:data.cursor},(fn=>{dispatch({type:"update",updater:fn})})),setFilterText(filterText){dispatchFetch({type:"filtering",filterText},load)}}}}}]);