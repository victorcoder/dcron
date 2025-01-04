"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6213],{32611:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=o(85893),s=o(11151);const a={title:"Target nodes spec",weight:10},r=void 0,d={id:"usage/target-nodes-spec",title:"Target nodes spec",description:"Target nodes spec",source:"@site/versioned_docs/version-v1/usage/target-nodes-spec.md",sourceDirName:"usage",slug:"/usage/target-nodes-spec",permalink:"/docs/v1/usage/target-nodes-spec",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/target-nodes-spec.md",tags:[],version:"v1",frontMatter:{title:"Target nodes spec",weight:10},sidebar:"tutorialSidebar",previous:{title:"Job retries",permalink:"/docs/v1/usage/retries"}},u={},i=[{value:"Target nodes spec",id:"target-nodes-spec",level:2},{value:"Examples:",id:"examples",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"target-nodes-spec",children:"Target nodes spec"}),"\n",(0,n.jsx)(t.p,{children:"You can choose whether a job is run on a node or nodes by specifying tags and a count of target nodes having this tag do you want a job to run."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The target node syntax: ",(0,n.jsx)(t.code,{children:"[tag-value]:[count]"})]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples:"}),"\n",(0,n.jsx)(t.p,{children:"Target all nodes with a tag:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "tags": {\n        "role": "web"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.mermaid,{value:'graph LR;\n    J("Job tags: #quot;role#quot;: #quot;web#quot;") --\x3e|Run Job|N1["Node1 tags: #quot;role#quot;: #quot;web#quot;"]\n    J --\x3e|Run Job|N2["Node2 tags: #quot;role#quot;: #quot;web#quot;"]\n    J --\x3e|Run Job|N3["Node2 tags: #quot;role#quot;: #quot;web#quot;"]'}),"\n",(0,n.jsx)(t.p,{children:"Target only one nodes of a group of nodes with a tag:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "tags": {\n        "role": "web:1"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.mermaid,{value:'graph LR;\n    J("Job tags: #quot;role#quot;: #quot;web:1#quot;") --\x3e|Run Job|N1["Node1 tags: #quot;role#quot;: #quot;web#quot;"]\n    J -.- N2["Node2 tags: #quot;role#quot;: #quot;web#quot;"]\n    J -.- N3["Node2 tags: #quot;role#quot;: #quot;web#quot;"]'}),"\n",(0,n.jsx)(t.p,{children:"Dkron will try to run the job in the amount of nodes indicated by that count having that tag."})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>r});var n=o(67294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);