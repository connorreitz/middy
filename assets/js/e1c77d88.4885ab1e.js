"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7714],{6441:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"integrations/apollo-server","title":"Apollo Server","description":"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.","source":"@site/docs/integrations/apollo-server.md","sourceDirName":"integrations","slug":"/integrations/apollo-server","permalink":"/docs/integrations/apollo-server","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/integrations/apollo-server.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"frontMatter":{"title":"Apollo Server"},"sidebar":"tutorialSidebar","previous":{"title":"AWS Relational Database Service (RDS)","permalink":"/docs/integrations/RDS"},"next":{"title":"Powertools for AWS Lambda","permalink":"/docs/integrations/lambda-powertools"}}');var n=o(4848),i=o(8453);const s={title:"Apollo Server"},a=void 0,l={},d=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport { ApolloServer, gql } from 'apollo-server-lambda'\nimport { buildFederatedSchema } from '@apollo/federation'\nimport { resolvers } from './graphql/resolvers.js'\nimport { graphqlFileToStr } from './graphql/schema.js'\n\nconst graphQL = new ApolloServer({\n  schema: buildFederatedSchema({\n    typeDefs: gql(graphqlFileToStr),\n    resolvers\n  })\n})\n\n// Do not use: `@middy/http-json-body-parser` it is already handled within apollo\nexport const handler = middy().handler(graphQL.createHandler())\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var r=o(6540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);