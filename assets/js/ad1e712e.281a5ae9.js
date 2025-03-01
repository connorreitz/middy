"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[6013],{5869:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"middlewares/intro","title":"Official middlewares","description":"Middy comes with a series of additional (opt-in) plugins that are officially maintained by the core team and kept in sync with every release of the core package.","source":"@site/docs/middlewares/00-intro.md","sourceDirName":"middlewares","slug":"/middlewares/intro","permalink":"/docs/middlewares/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/00-intro.md","tags":[],"version":"current","lastUpdatedAt":1740862378000,"sidebarPosition":0,"frontMatter":{"title":"Official middlewares","sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Middlewares","permalink":"/docs/category/middlewares"},"next":{"title":"Third-party middlewares","permalink":"/docs/middlewares/third-party"}}');var i=r(4848),t=r(8453);const d={title:"Official middlewares",sidebar_position:0},o=void 0,a={},c=[{value:"Misc",id:"misc",level:2},{value:"Request Transformation",id:"request-transformation",level:2},{value:"Response Transformation",id:"response-transformation",level:2},{value:"Fetch Data",id:"fetch-data",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Middy comes with a series of additional (opt-in) plugins that are officially maintained by the core team and kept in sync with every release of the core package."}),"\n",(0,i.jsx)(s.p,{children:"These middleware focus on common use cases when using Lambda with other AWS services."}),"\n",(0,i.jsx)(s.p,{children:"Each middleware should do a single task. We try to balance each to be as performant as possible while meeting the majority of developer needs."}),"\n",(0,i.jsx)(s.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/cloudwatch-metrics",children:(0,i.jsx)(s.code,{children:"cloudwatch-metrics"})}),": Hydrates lambda's ",(0,i.jsx)(s.code,{children:"context.metrics"})," property with an instance of AWS MetricLogger"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/do-not-wait-for-empty-event-loop",children:(0,i.jsx)(s.code,{children:"do-not-wait-for-empty-event-loop"})}),": Sets callbackWaitsForEmptyEventLoop property to false"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/error-logger",children:(0,i.jsx)(s.code,{children:"error-logger"})}),": Logs errors"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/input-output-logger",children:(0,i.jsx)(s.code,{children:"input-output-logger"})}),": Logs request and response"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/warmup",children:(0,i.jsx)(s.code,{children:"warmup"})}),": Used to pre-warm a lambda function"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"request-transformation",children:"Request Transformation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/event-normalizer",children:(0,i.jsx)(s.code,{children:"event-normalizer"})}),": Middleware for iterating through an AWS event records, parsing and normalizing nested events."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-content-negotiation",children:(0,i.jsx)(s.code,{children:"http-content-negotiation"})}),": Parses ",(0,i.jsx)(s.code,{children:"Accept-*"})," headers and provides utilities for content negotiation (charset, encoding, language and media type) for HTTP requests"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-event-normalizer",children:(0,i.jsx)(s.code,{children:"http-event-normalizer"})}),": Normalizes HTTP events by adding an empty object for ",(0,i.jsx)(s.code,{children:"queryStringParameters"}),", ",(0,i.jsx)(s.code,{children:"multiValueQueryStringParameters"})," or ",(0,i.jsx)(s.code,{children:"pathParameters"})," if they are missing."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-header-normalizer",children:(0,i.jsx)(s.code,{children:"http-header-normalizer"})}),": Normalizes HTTP header names to their canonical format"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-json-body-parser",children:(0,i.jsx)(s.code,{children:"http-json-body-parser"})}),": Automatically parses HTTP requests with JSON body and converts the body into an object. Also handles gracefully broken JSON if used in combination of\n",(0,i.jsx)(s.code,{children:"httpErrorHandler"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-multipart-body-parser",children:(0,i.jsx)(s.code,{children:"http-multipart-body-parser"})}),": Automatically parses HTTP requests with content type ",(0,i.jsx)(s.code,{children:"multipart/form-data"})," and converts the body into an object."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-urlencode-body-parser",children:(0,i.jsx)(s.code,{children:"http-urlencode-body-parser"})}),": Automatically parses HTTP requests with URL encoded body (typically the result of a form submit)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-urlencode-path-parser",children:(0,i.jsx)(s.code,{children:"http-urlencode-path-parser"})}),": Automatically parses HTTP requests with URL encoded path."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/validator",children:(0,i.jsx)(s.code,{children:"validator"})}),": Automatically validates incoming events and outgoing responses against custom schemas."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/ws-json-body-parser",children:(0,i.jsx)(s.code,{children:"ws-json-body-parser"})}),": Automatically parses WebSocket requests with JSON message and converts the message into an object."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"response-transformation",children:"Response Transformation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-content-encoding",children:(0,i.jsx)(s.code,{children:"http-content-encoding"})}),": Sets HTTP Content-Encoding header on response and compresses response body"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-cors",children:(0,i.jsx)(s.code,{children:"http-cors"})}),": Sets HTTP CORS headers on response"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-error-handler",children:(0,i.jsx)(s.code,{children:"http-error-handler"})}),": Creates a proper HTTP response for errors that are created with the ",(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/http-errors",children:"http-errors"})," module and represents proper HTTP errors."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-security-headers",children:(0,i.jsx)(s.code,{children:"http-security-headers"})}),": Applies best practice security headers to responses. It's a simplified port of HelmetJS."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-partial-response",children:(0,i.jsx)(s.code,{children:"http-partial-response"})}),": Filter response objects attributes based on query string parameters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/http-response-serializer",children:(0,i.jsx)(s.code,{children:"http-response-serializer"})}),": HTTP response serializer."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/sqs-partial-batch-failure",children:(0,i.jsx)(s.code,{children:"sqs-partial-batch-failure"})}),": Handles partially failed SQS batches."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/ws-response",children:(0,i.jsx)(s.code,{children:"ws-response"})}),": Forwards response to WebSocket endpoint."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"fetch-data",children:"Fetch Data"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/appconfig",children:(0,i.jsx)(s.code,{children:"appconfig"})}),": Fetch JSON configurations from AppConfig."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/dynamodb",children:(0,i.jsx)(s.code,{children:"dynamodb"})}),": Fetch configurations from DynamoDB."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/rds-signer",children:(0,i.jsx)(s.code,{children:"rds-signer"})}),": Fetches token for connecting to RDS with IAM users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/s3",children:(0,i.jsx)(s.code,{children:"s3"})}),": Fetch JSON configurations from S3."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/s3-object-response",children:(0,i.jsx)(s.code,{children:"s3-object-response"})}),": Gets and write S3 object response."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/secrets-manager",children:(0,i.jsx)(s.code,{children:"secrets-manager"})}),": Fetches parameters from ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/service-discovery",children:(0,i.jsx)(s.code,{children:"service-discovery"})}),": Fetches Service Discovery instances to be used when connecting to other AWS services."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/ssm",children:(0,i.jsx)(s.code,{children:"ssm"})}),": Fetches parameters from ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html",children:"AWS Systems Manager Parameter Store"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/middlewares/sts",children:(0,i.jsx)(s.code,{children:"sts"})}),": Fetches credentials to assumes IAM roles for connection to other AWS services."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var n=r(6540);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);