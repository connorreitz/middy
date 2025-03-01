"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1954],{3225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"middlewares/input-output-logger","title":"input-output-logger","description":"Logs the incoming request (input) and the response (output).","source":"@site/docs/middlewares/input-output-logger.md","sourceDirName":"middlewares","slug":"/middlewares/input-output-logger","permalink":"/docs/middlewares/input-output-logger","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/input-output-logger.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"input-output-logger"},"sidebar":"tutorialSidebar","previous":{"title":"http-urlencode-path-parser","permalink":"/docs/middlewares/http-urlencode-path-parser"},"next":{"title":"rds-signer","permalink":"/docs/middlewares/rds-signer"}}');var a=n(4848),s=n(8453),l=n(1470),o=n(9365);const i={title:"input-output-logger"},u=void 0,c={},d=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Logs the incoming request (input) and the response (output)."}),"\n",(0,a.jsxs)(t.p,{children:["By default, the logging operate by using the ",(0,a.jsx)(t.code,{children:"console.log"})," function. You can pass as a parameter a custom logger with additional logic if you need. It can be useful if you want to process the log by doing a http call or anything else."]}),"\n",(0,a.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(t.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,a.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save @middy/input-output-logger\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @middy/input-output-logger\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @middy/input-output-logger\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"logger"})," function (default ",(0,a.jsx)(t.code,{children:"console.log"}),"): logging function that accepts an object"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"awsContext"})," boolean (default ",(0,a.jsx)(t.code,{children:"false"}),"): Include ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html",children:"AWS Lambda context object"})," to the logger"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"omitPaths"})," string[] (default ",(0,a.jsx)(t.code,{children:"[]"}),"): property accepts an array of paths that will be used to remove particular fields import the logged objects. This could serve as a simple way to redact sensitive data from logs (default []). Examples: ",(0,a.jsx)(t.code,{children:"name"}),", ",(0,a.jsx)(t.code,{children:"user.name"}),", ",(0,a.jsx)(t.code,{children:"users.[].name"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"mask"})," string: String to replace omitted values with. Example: ",(0,a.jsx)(t.code,{children:"***omitted***"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Note: If using with ",(0,a.jsx)(t.code,{children:"{ streamifyResponse: true }"}),", your ReadableStream must be of type ",(0,a.jsx)(t.code,{children:"string"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\n\nconst lambdaHandler = (event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  }\n  return response\n}\n\nexport const handler = middy().use(inputOutputLogger()).handler(lambdaHandler)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\nimport pino from 'pino'\n\nconst logger = pino()\n\nconst lambdaHandler = (event, context) => {\n  // ...\n  return response\n}\n\nexport const handler = middy()\n  .use(\n    inputOutputLogger({\n      logger: (request) => {\n        const child = logger.child(request.context)\n        child.info(request.event ?? request.response)\n      },\n      awsContext: true\n    })\n  )\n  .handler(lambdaHandler)\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),l=n(6347),o=n(205),i=n(7485),u=n(1682),c=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=u??g;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);