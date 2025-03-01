"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5103],{3319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"events/kafka-self-managed","title":"Kafka, Self-Managed","description":"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.","source":"@site/docs/events/kafka-self-managed.md","sourceDirName":"events","slug":"/events/kafka-self-managed","permalink":"/docs/events/kafka-self-managed","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/events/kafka-self-managed.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"Kafka, Self-Managed"},"sidebar":"tutorialSidebar","previous":{"title":"Kafka, Managed Streaming (MSK)","permalink":"/docs/events/kafka-managed-streaming"},"next":{"title":"Kinesis Firehose","permalink":"/docs/events/kinesis-firehose"}}');var i=t(4848),s=t(8453);const o={title:"Kafka, Self-Managed"},r=void 0,d={},l=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,i.jsx)(n.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html",children:"Using Lambda with self-managed Apache Kafka"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport eventNormalizerMiddleware from '@middy/event-normalizer'\n\nexport const handler = middy()\n  .use(eventNormalizerMiddleware())\n  .handler((event, context, {signal}) => {\n    // ...\n  })\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);