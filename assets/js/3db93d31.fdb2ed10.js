"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5556],{1016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"middlewares/http-multipart-body-parser","title":"http-multipart-body-parser","description":"Automatically parses HTTP requests with content type multipart/form-data and converts the body into an","source":"@site/docs/middlewares/http-multipart-body-parser.md","sourceDirName":"middlewares","slug":"/middlewares/http-multipart-body-parser","permalink":"/docs/middlewares/http-multipart-body-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-multipart-body-parser.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"http-multipart-body-parser"},"sidebar":"tutorialSidebar","previous":{"title":"http-json-body-parser","permalink":"/docs/middlewares/http-json-body-parser"},"next":{"title":"http-partial-response","permalink":"/docs/middlewares/http-partial-response"}}');var r=n(4848),s=n(8453),l=n(1470),o=n(9365);const i={title:"http-multipart-body-parser"},d=void 0,u={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Automatically parses HTTP requests with content type ",(0,r.jsx)(t.code,{children:"multipart/form-data"})," and converts the body into an\nobject. Also handles gracefully broken JSON as ",(0,r.jsx)(t.em,{children:"Unsupported Media Type"})," (415 errors)\nif used in combination with ",(0,r.jsx)(t.code,{children:"httpErrorHandler"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"It can also be used in combination with validator so that the content can be validated."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": by default this is going to parse only events that contain the header ",(0,r.jsx)(t.code,{children:"Content-Type"})," (or ",(0,r.jsx)(t.code,{children:"content-type"}),") set to ",(0,r.jsx)(t.code,{children:"multipart/form-data"}),". If you want to support different casing for the header name (e.g. ",(0,r.jsx)(t.code,{children:"Content-type"}),") then you should use the ",(0,r.jsx)(t.a,{href:"#httpheadernormalizer",children:(0,r.jsx)(t.code,{children:"httpHeaderNormalizer"})})," middleware before this middleware."]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,r.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @middy/http-multipart-body-parser\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @middy/http-multipart-body-parser\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @middy/http-multipart-body-parser\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"busboy"})," (",(0,r.jsx)(t.code,{children:"object"}),") (optional): defaults to ",(0,r.jsx)(t.code,{children:"{}"})," and it can be used to pass extraparameters to the internal ",(0,r.jsx)(t.code,{children:"busboy"})," instance at creation time. Checkout ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/busboy#busboy-methods",children:"the official documentation"})," for more information on the supported options."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"charset"})," (string) (default ",(0,r.jsx)(t.code,{children:"utf8"}),"): it can be used to change default charset. Set to ",(0,r.jsx)(t.code,{children:"binary"})," when recieving images."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"disableContentTypeError"})," (",(0,r.jsx)(t.code,{children:"boolean"}),") (optional): Skip throwing 415 when ",(0,r.jsx)(t.code,{children:"Content-Type"})," is invalid. Default: ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": this middleware will buffer all the data as it is processed internally by ",(0,r.jsx)(t.code,{children:"busboy"}),", so, if you are using this approach to parse significantly big volumes of data, keep in mind that all the data will be allocated in memory. This is somewhat inevitable with Lambdas (as the data is already encoded into the JSON in memory as Base64), but it's good to keep this in mind and evaluate the impact on you application.\nIf you really have to deal with big files, then you might also want to consider to allowing your users to ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html",children:"directly upload files to S3"})]}),"\n",(0,r.jsx)(t.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpMultipartBodyParser from '@middy/http-multipart-body-parser'\n\nconst lambdaHandler = (event, context) => {\n  return {}\n}\n\nexport const handler = middy()\n  .use(httpHeaderNormalizer())\n  .use(httpMultipartBodyParser())\n  .handler(lambdaHandler)\n\n// invokes the handler\nconst event = {\n  headers: {\n    'Content-Type':\n      'multipart/form-data; boundary=----WebKitFormBoundaryppsQEwf2BVJeCe0M'\n  },\n  body: 'LS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTQ0KQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSJmb28iDQoNCmJhcg0KLS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTS0t',\n  isBase64Encoded: true\n}\nhandler(event, {}, (_, body) => {\n  equal(body, { foo: 'bar' })\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),s=n(3104),l=n(6347),o=n(205),i=n(7485),d=n(1682),u=n(679);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,c]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),y=(()=>{const e=d??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var f=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(d(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:c,onClick:u,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(g,{...e,children:c(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);