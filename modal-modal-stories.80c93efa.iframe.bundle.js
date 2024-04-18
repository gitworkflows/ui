"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[862],{"./src/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,EndAlignedFooter:()=>EndAlignedFooter,ExtraLarge:()=>ExtraLarge,Large:()=>Large,LeftAlignedBody:()=>LeftAlignedBody,StartAlignedBody:()=>StartAlignedBody,WithoutCloseButton:()=>WithoutCloseButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),src_button=__webpack_require__("./src/button/index.ts"),dialog=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0/node_modules/@headlessui/react/dist/components/dialog/dialog.js"),transition=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0/node_modules/@headlessui/react/dist/components/transitions/transition.js"),close_button=__webpack_require__("./src/close-button/close-button.tsx");const ModalContext=(0,react.createContext)({onClose:()=>{},variant:"default"}),Modal=_ref4=>{let{children,open,onClose,onKeyDown,size="medium",variant="default"}=_ref4,panelClasses="flex flex-col border-solid border-1 border-foreground-secondary bg-background-secondary";return"medium"===size?panelClasses=panelClasses.concat(" ","w-[600px]"):"large"===size?panelClasses=panelClasses.concat(" ","w-[900px]"):"xLarge"===size&&(panelClasses=panelClasses.concat(" ","w-[95vw] md:w-[90vw]")),"default"===variant?panelClasses=panelClasses.concat(" ","text-foreground-secondary"):"danger"===variant&&(panelClasses=panelClasses.concat(" ","text-background-danger")),react.createElement(ModalContext.Provider,{value:{onClose,variant}},react.createElement(transition.e.Root,{show:open,as:react.Fragment},react.createElement(dialog.l,{onClose,className:"relative z-1050 w-screen h-screen",onKeyDown},react.createElement("div",{"aria-hidden":!0,className:"fixed inset-0 bg-gray-900 opacity-50"}),react.createElement("div",{className:"fixed inset-0 flex items-start justify-center p-[10px] md:pt-[30px] md:pb-[30px] overflow-scroll"},react.createElement(transition.e.Child,{as:react.Fragment,enter:"transition-all duration-300 ease-out",enterFrom:"opacity-0 -translate-y-1/4",enterTo:"opacity-100 translate-y-0",leave:"transition-all duration-300 ease-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-1/4"},react.createElement(dialog.l.Panel,{className:panelClasses},children))))))};Modal.Header=_ref=>{let{children,showCloseButton=!0,closeButtonClassNames,borderless}=_ref;const{onClose,variant}=(0,react.useContext)(ModalContext);let classes="p-[15px]";return"danger"===variant&&(classes=classes.concat(" ","bg-foreground-danger")),borderless||(classes=classes.concat(" ","border-b-1 border-solid border-foreground-secondary")),showCloseButton?(classes=classes.concat(" ","flex items-center justify-between"),react.createElement("div",{className:classes},react.createElement(dialog.l.Title,{className:"m-0 pl-[".concat(24,"px] flex-1 text-md text-center")},children),react.createElement(close_button.J,{onClick:onClose,className:closeButtonClassNames}))):react.createElement("div",{className:classes},react.createElement(dialog.l.Title,{className:"m-0 text-md text-center"},children))},Modal.Body=_ref2=>{let{children,alignment="center",borderless,className}=_ref2;const borderClasses=borderless?"":"border-b-1 border-solid border-foreground-secondary";return react.createElement("div",{className:"p-[15px] text-".concat(alignment," ").concat(borderClasses," ").concat(className)},children)},Modal.Footer=_ref3=>{let{children,alignment="center"}=_ref3;return"end"===alignment?react.createElement("div",{className:"p-[15px] flex justify-end"},children):react.createElement("div",{className:"p-[15px] flex flex-col justify-center"},children)};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<Element> | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"default"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/modal/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Spacer=()=>react.createElement("div",{style:{height:"5px",width:"100%"}}),DefaultTemplate=_ref=>{let{showCloseButton,bodyAlignment,...modalProps}=_ref;const[open,setOpen]=(0,react.useState)(!1),handleClose=()=>setOpen(!1);return react.createElement("div",null,react.createElement(src_button.$,{onClick:()=>setOpen(!0)},"Open modal"),react.createElement(Modal,_extends({},modalProps,{open,onClose:handleClose}),react.createElement(Modal.Header,{showCloseButton},"Lorem ipsum"),react.createElement(Modal.Body,{alignment:bodyAlignment},react.createElement("p",null,"Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda amet aliquam corporis."),react.createElement("p",null,"Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas atque cumque incidunt quia. A praesentium neque quis odit totam praesentium illum est. Ut doloribus quisquam ut. Incidunt vel suscipit accusamus consequuntur repellendus dolor sunt. Vel accusamus nesciunt perspiciatis sunt est."),react.createElement("p",null,"Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut et vel dolores facilis dignissimos. Omnis facere quisquam recusandae accusantium. Sit ut consectetur non id velit est odio. Laboriosam soluta tenetur asperiores. Excepturi reprehenderit rerum sint tempore molestiae vitae aliquid. Ea est sunt at atque ducimus doloribus quas sit.")),react.createElement(Modal.Footer,null,react.createElement(src_button.$,{block:!0,size:"large"},"Submit"),react.createElement(Spacer,null),react.createElement(src_button.$,{block:!0,size:"large",onClick:handleClose},"Cancel"))))},Default={render:DefaultTemplate},Large={render:DefaultTemplate,args:{size:"large"}},ExtraLarge={render:DefaultTemplate,args:{size:"xLarge"}},Danger={render:args=>{const[open,setOpen]=(0,react.useState)(!1),handleClose=()=>setOpen(!1);return react.createElement("div",null,react.createElement(src_button.$,{onClick:()=>setOpen(!0)},"Open modal"),react.createElement(Modal,_extends({},args,{open,onClose:handleClose}),react.createElement(Modal.Header,null,"Lorem ipsum"),react.createElement(Modal.Body,null,react.createElement("p",null,"Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda amet aliquam corporis."),react.createElement("p",null,"Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas atque cumque incidunt quia. A praesentium neque quis odit totam praesentium illum est. Ut doloribus quisquam ut. Incidunt vel suscipit accusamus consequuntur repellendus dolor sunt. Vel accusamus nesciunt perspiciatis sunt est."),react.createElement("p",null,"Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut et vel dolores facilis dignissimos. Omnis facere quisquam recusandae accusantium. Sit ut consectetur non id velit est odio. Laboriosam soluta tenetur asperiores. Excepturi reprehenderit rerum sint tempore molestiae vitae aliquid. Ea est sunt at atque ducimus doloribus quas sit.")),react.createElement(Modal.Footer,null,react.createElement(src_button.$,{block:!0,size:"large",onClick:handleClose},"Cancel"),react.createElement(Spacer,null),react.createElement(src_button.$,{block:!0,variant:"danger",size:"large"},"Submit"))))},args:{variant:"danger"}},WithoutCloseButton={render:DefaultTemplate,args:{showCloseButton:!1}},LeftAlignedBody={render:DefaultTemplate,args:{bodyAlignment:"left"}},StartAlignedBody={render:DefaultTemplate,args:{bodyAlignment:"start"}},EndAlignedFooter={render:_ref2=>{let{footerAlignment}=_ref2;const[open,setOpen]=(0,react.useState)(!1);return react.createElement("div",null,react.createElement(src_button.$,{onClick:()=>setOpen(!0)},"Open modal"),react.createElement(Modal,{open,onClose:()=>setOpen(!1)},react.createElement(Modal.Header,null,"Lorem ipsum"),react.createElement(Modal.Body,null,react.createElement("p",null,"Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda amet aliquam corporis."),react.createElement("p",null,"Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas atque cumque incidunt quia. A praesentium neque quis odit totam praesentium illum est. Ut doloribus quisquam ut. Incidunt vel suscipit accusamus consequuntur repellendus dolor sunt. Vel accusamus nesciunt perspiciatis sunt est."),react.createElement("p",null,"Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut et vel dolores facilis dignissimos. Omnis facere quisquam recusandae accusantium. Sit ut consectetur non id velit est odio. Laboriosam soluta tenetur asperiores. Excepturi reprehenderit rerum sint tempore molestiae vitae aliquid. Ea est sunt at atque ducimus doloribus quas sit.")),react.createElement(Modal.Footer,{alignment:footerAlignment},react.createElement(src_button.$,null,"Close"))))},args:{footerAlignment:"end"}},modal_stories={title:"Components/Modal",component:Modal,args:{size:"medium",variant:"default"},argTypes:{open:{control:!1},onClose:{control:!1},size:{options:["medium","large","xLarge"]},variant:{options:["default","danger"]}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: DefaultTemplate\n}",...Default.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  render: DefaultTemplate,\n  args: {\n    size: "large"\n  }\n}',...Large.parameters?.docs?.source}}},ExtraLarge.parameters={...ExtraLarge.parameters,docs:{...ExtraLarge.parameters?.docs,source:{originalSource:'{\n  render: DefaultTemplate,\n  args: {\n    size: "xLarge"\n  }\n}',...ExtraLarge.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  render: DangerTemplate,\n  args: {\n    variant: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}},WithoutCloseButton.parameters={...WithoutCloseButton.parameters,docs:{...WithoutCloseButton.parameters?.docs,source:{originalSource:"{\n  render: DefaultTemplate,\n  args: {\n    showCloseButton: false\n  }\n}",...WithoutCloseButton.parameters?.docs?.source}}},LeftAlignedBody.parameters={...LeftAlignedBody.parameters,docs:{...LeftAlignedBody.parameters?.docs,source:{originalSource:'{\n  render: DefaultTemplate,\n  args: {\n    bodyAlignment: "left"\n  }\n}',...LeftAlignedBody.parameters?.docs?.source}}},StartAlignedBody.parameters={...StartAlignedBody.parameters,docs:{...StartAlignedBody.parameters?.docs,source:{originalSource:'{\n  render: DefaultTemplate,\n  args: {\n    bodyAlignment: "start"\n  }\n}',...StartAlignedBody.parameters?.docs?.source}}},EndAlignedFooter.parameters={...EndAlignedFooter.parameters,docs:{...EndAlignedFooter.parameters?.docs,source:{originalSource:'{\n  render: EndAlignedFooterTemplate,\n  args: {\n    footerAlignment: "end"\n  }\n}',...EndAlignedFooter.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Large","ExtraLarge","Danger","WithoutCloseButton","LeftAlignedBody","StartAlignedBody","EndAlignedFooter"]},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","aria-disabled:cursor-not-allowed","aria-disabled:opacity-50","focus:outline-none","focus-visible:ring","focus-visible:ring-focus-outline-color","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled||onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger",...disabled?["active:before:hidden"]:["hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger"]);break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info",...disabled?["active:before:hidden"]:["hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info"]);break;default:classNames.push("border-foreground-secondary","bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden"]:["hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/close-button/close-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>CloseButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function CloseButton(_ref){let{className,label,onClick}=_ref;const classes=["bg-transparent","border-none","text-lg","font-bold","text-foreground-primary","focus:opacity-100","focus:text-opacity-100","focus:outline-none","focus-visible:ring","focus-visible:ring-focus-outline-color","hover:opacity-100","hover:text-opacity-100","flex","justify-center","items-center","w-[24px]","h-[24px]","opacity-50",className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:classes,onClick,type:"button"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"sr-only"},label||"Close"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{"aria-hidden":!0},"×"))}try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"Basic UI component for closing modals, alerts, etc.",displayName:"CloseButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/close-button/close-button.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"src/close-button/close-button.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}}}]);