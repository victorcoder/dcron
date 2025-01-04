"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4183],{11504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(85893),s=a(11151);const o={title:"Job metadata"},r=void 0,d={id:"usage/metatags",title:"Job metadata",description:"Job metadata",source:"@site/versioned_docs/version-v2/usage/metatags.md",sourceDirName:"usage",slug:"/usage/metatags",permalink:"/docs/v2/usage/metatags",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/metatags.md",tags:[],version:"v2",frontMatter:{title:"Job metadata"},sidebar:"tutorialSidebar",previous:{title:"shell",permalink:"/docs/v2/usage/executors/shell"},next:{title:"Metrics",permalink:"/docs/v2/usage/metrics"}},i={},c=[{value:"Job metadata",id:"job-metadata",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"job-metadata",children:"Job metadata"}),"\n",(0,n.jsxs)(t.p,{children:["Jobs can have an optional extra property field called ",(0,n.jsx)(t.code,{children:"metadata"})," that allows to set arbitrary tags to jobs and query the jobs using the API:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "metadata": {\n        "user_id": "12345"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"And then query the API to get only the results needed:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'$ curl http://localhost:8080/v1/jobs --data-urlencode "metadata[user_id]=12345"`\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var n=a(67294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);