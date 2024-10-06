"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1032],{52876:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var r=o(17624),n=o(4552);const t={title:"Syslog Processor"},c=void 0,i={id:"usage/processors/syslog",title:"Syslog Processor",description:"Syslog processor writes the execution output to the system syslog daemon",source:"@site/versioned_docs/version-v1/usage/processors/syslog.md",sourceDirName:"usage/processors",slug:"/usage/processors/syslog",permalink:"/docs/v1/usage/processors/syslog",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/processors/syslog.md",tags:[],version:"v1",frontMatter:{title:"Syslog Processor"},sidebar:"tutorialSidebar",previous:{title:"Log Processor",permalink:"/docs/v1/usage/processors/log"},next:{title:"Job retries",permalink:"/docs/v1/usage/retries"}},l={},a=[{value:"Configuration",id:"configuration",level:2}];function u(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Syslog processor writes the execution output to the system syslog daemon"}),"\n",(0,r.jsx)(s.p,{children:"Note: Only work on linux systems"}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(s.p,{children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"forward: Forward the output to the next processor"})}),"\n",(0,r.jsx)(s.p,{children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "echo \'Hello syslog\'",\n    "schedule": "@every 2m",\n    "tags": {\n        "role": "web"\n    },\n    "processors": {\n        "syslog": {\n            "forward": true\n        }\n    }\n}\n'})})]})}function d(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4552:(e,s,o)=>{o.d(s,{I:()=>i,M:()=>c});var r=o(11504);const n={},t=r.createContext(n);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);