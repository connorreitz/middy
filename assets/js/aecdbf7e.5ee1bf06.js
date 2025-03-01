"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1508],{405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"middlewares/cloudwatch-metrics","title":"cloudwatch-metrics","description":"This middleware hydrates lambda\'s context.metrics property with an instance of MetricLogger. This instance can be used to easily generate custom metrics from Lambda functions without requiring custom batching code, making blocking network requests or relying on 3rd party software.","source":"@site/docs/middlewares/cloudwatch-metrics.md","sourceDirName":"middlewares","slug":"/middlewares/cloudwatch-metrics","permalink":"/docs/middlewares/cloudwatch-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/cloudwatch-metrics.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"cloudwatch-metrics"},"sidebar":"tutorialSidebar","previous":{"title":"cloudformation-response","permalink":"/docs/middlewares/cloudformation-response"},"next":{"title":"do-not-wait-for-empty-event-loop","permalink":"/docs/middlewares/do-not-wait-for-empty-event-loop"}}');var a=n(4848),s=n(8453),l=n(1470),o=n(9365);const i={title:"cloudwatch-metrics"},c=void 0,d={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This middleware hydrates lambda's ",(0,a.jsx)(t.code,{children:"context.metrics"})," property with an instance of ",(0,a.jsx)(t.a,{href:"https://github.com/awslabs/aws-embedded-metrics-node#metriclogger",children:"MetricLogger"}),". This instance can be used to easily generate custom metrics from Lambda functions without requiring custom batching code, making blocking network requests or relying on 3rd party software."]}),"\n",(0,a.jsxs)(t.p,{children:["Metrics collected with this logger are then available for querying within ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",children:"AWS CloudWatch Log Insights"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can explore all the MetricLogger APIs following ",(0,a.jsx)(t.a,{href:"https://github.com/awslabs/aws-embedded-metrics-node",children:"aws-embedded-metrics"})," documentation."]}),"\n",(0,a.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(t.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,a.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save @middy/cloudwatch-metrics\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @middy/cloudwatch-metrics\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @middy/cloudwatch-metrics\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"namespace"})," (",(0,a.jsx)(t.code,{children:"string"}),") (optional): Defaults to ",(0,a.jsx)(t.code,{children:"aws-embedded-metrics"}),". Sets the CloudWatch ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace",children:"namespace"})," that extracted metrics should be published to."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"dimensions"})," (",(0,a.jsx)(t.code,{children:"Record<String, String> | Record<String, String>[]"}),") (optional): Explicitly overrides all dimensions. This will remove the default dimensions. You can provide an empty array to record all metrics without dimensions. For dimensions defaults and configuration see the ",(0,a.jsx)(t.a,{href:"https://github.com/awslabs/aws-embedded-metrics-node/tree/v4.1.0#configuration",children:"aws-embedded-metrics docs"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const middy = require('@middy/core')\nconst cloudwatchMetrics = require('@middy/cloudwatch-metrics')\n\nconst lambdaHandler = (event, context) => {\n  context.metrics.putMetric('ProcessingLatency', 100, 'Milliseconds')\n  context.metrics.setProperty(\n    'RequestId',\n    '422b1569-16f6-4a03-b8f0-fe3fd9b100f8'\n  )\n}\nexport const handler = middy()\n  .use(\n    cloudwatchMetrics({\n      namespace: 'myAppliction',\n      dimensions: [{ Action: 'Buy' }]\n    })\n  )\n  .handler(lambdaHandler)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),a=n(4164),s=n(3104),l=n(6347),o=n(205),i=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,w.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);