"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4567],{81:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"middlewares/http-response-serializer","title":"http-response-serializer","description":"The Http Serializer middleware lets you define serialization mechanisms based on the current content negotiation.","source":"@site/docs/middlewares/http-response-serializer.md","sourceDirName":"middlewares","slug":"/middlewares/http-response-serializer","permalink":"/docs/middlewares/http-response-serializer","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-response-serializer.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"http-response-serializer"},"sidebar":"tutorialSidebar","previous":{"title":"http-partial-response","permalink":"/docs/middlewares/http-partial-response"},"next":{"title":"http-security-headers","permalink":"/docs/middlewares/http-security-headers"}}');var a=t(4848),s=t(8453),i=t(1470),l=t(9365);const o={title:"http-response-serializer"},d=void 0,c={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Serializer Functions",id:"serializer-functions",level:2},{value:"Content Type Negotiation",id:"content-type-negotiation",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Http Serializer middleware lets you define serialization mechanisms based on the current content negotiation."}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @middy/http-response-serializer\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @middy/http-response-serializer\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @middy/http-response-serializer\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"defaultContentType"})," (optional): used if the request and handler don't specify what type is wanted."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"serializers"})," (array): Array for regex and serializer function."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"{\n  serializers: [\n    {\n      regex: /^application\\/xml$/,\n      serializer: ({ body }) => `<message>${body}</message>`,\n    },\n    {\n      regex: /^application\\/json$/,\n      serializer: ({ body }) => JSON.stringify(body)\n    },\n    {\n      regex: /^text\\/plain$/,\n      serializer: ({ body }) => body\n    }\n  ],\n  defaultContentType: 'application/json'\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"serializer-functions",children:"Serializer Functions"}),"\n",(0,a.jsxs)(n.p,{children:["When a matching serializer is found, the ",(0,a.jsx)(n.code,{children:"Content-Type"})," header is set and the serializer function is run."]}),"\n",(0,a.jsxs)(n.p,{children:["The function is passed the entire ",(0,a.jsx)(n.code,{children:"response"})," object, and should return either a string or an object."]}),"\n",(0,a.jsxs)(n.p,{children:["If a string is returned, the ",(0,a.jsx)(n.code,{children:"body"})," attribute of the response is updated."]}),"\n",(0,a.jsxs)(n.p,{children:["If an object with a ",(0,a.jsx)(n.code,{children:"body"})," attribute is returned, the entire response object is replaced. This is useful if you want to manipulate headers or add additional attributes in the Lambda response."]}),"\n",(0,a.jsx)(n.h2,{id:"content-type-negotiation",children:"Content Type Negotiation"}),"\n",(0,a.jsx)(n.p,{children:"The header is not the only way the middleware decides which serializer to execute."}),"\n",(0,a.jsx)(n.p,{children:"The content type is determined in the following order:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"event.requiredContentType"})," -- allows the handler to override everything else (legacy, will be deprecated in v6)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"context.preferredMediaTypes"})," -- allows the handler to override the default, but lets the request ask first"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"defaultContentType"})," middleware configuration"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["All options allow for multiple types to be specified in your order of preference, and the first matching serializer will be executed.\nWhen planning to use ",(0,a.jsx)(n.code,{children:"Accept"}),", an external input, it is recommended to validate that it is an expected value."]}),"\n",(0,a.jsx)(n.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpContentNegotiation from '@middy/http-content-negotiation'\nimport httpResponseSerializer from '@middy/http-response-serializer'\n\nconst lambdaHandler = (event, context) => {\n  const body = 'Hello World'\n\n  return {\n    statusCode: 200,\n    body\n  }\n}\n\nexport const handler = middy()\n  .use(httpContentNegotiation()) // Creates `context.preferredMediaTypes`\n  .use(\n    httpResponseSerializer({\n      serializers: [\n        {\n          regex: /^application\\/xml$/,\n          serializer: ({ body }) => `<message>${body}</message>`\n        },\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        },\n        {\n          regex: /^text\\/plain$/,\n          serializer: ({ body }) => body\n        }\n      ],\n      defaultContentType: 'application/json'\n    })\n  )\n  .handler(lambdaHandler)\n\nconst event = {\n  headers: {\n    Accept: 'application/xml;q=0.9, text/x-dvi; q=0.8, text/x-c'\n  }\n}\n\nhandler(event, {}, (_, response) => {\n  equal(response.body, '<message>Hello World</message>')\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),s=t(3104),i=t(6347),l=t(205),o=t(7485),d=t(1682),c=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(d(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,y.jsx)(g,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);