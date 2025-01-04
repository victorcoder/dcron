"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5071],{81167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(85893),s=n(11151);const r={},i="HTTP Executor",c={id:"usage/executors/http",title:"HTTP Executor",description:"HTTP executor can send a request to an HTTP endpoint",source:"@site/versioned_docs/version-v3/usage/executors/http.md",sourceDirName:"usage/executors",slug:"/usage/executors/http",permalink:"/docs/v3/usage/executors/http",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/usage/executors/http.md",tags:[],version:"v3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GRPC Executor",permalink:"/docs/v3/usage/executors/grpc"},next:{title:"Kafka Executor",permalink:"/docs/v3/usage/executors/kafka"}},a={},u=[{value:"Configuration",id:"configuration",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"http-executor",children:"HTTP Executor"})}),"\n",(0,o.jsx)(t.p,{children:"HTTP executor can send a request to an HTTP endpoint"}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"Params:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'method:     Request method in uppercase\nurl:        Request url\nheaders:    Json string, such as "[\\"Content-Type: application/json\\"]"\nbody:       POST body\ntimeout:    Request timeout, unit seconds\nexpectCode: Expect response code, such as 200,206\nexpectBody: Expect response body, support regexp, such as /success/\ndebug:      Debug option, will log everything when this option is not empty\ntlsNoVerifyPeer:       false (default) or true. If true, disables verification of the remote SSL certificate\'s validity.\ntlsCertificateFile:    Path to the PEM file containing the client certificate. Optional.\ntlsCertificateKeyFile: Path to the PEM file containing the client certificate private key. Optional.\ntlsRootCAsFile:        Path to the PEM file containing certificates to use as root CAs. Optional.\n'})}),"\n",(0,o.jsx)(t.p,{children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "executor": "http",\n  "executor_config": {\n      "method": "GET",\n      "url": "http://example.com",\n      "headers": "[]",\n      "body": "",\n      "timeout": "30",\n      "expectCode": "200",\n      "expectBody": "",\n      "debug": "true"\n  }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(67294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);