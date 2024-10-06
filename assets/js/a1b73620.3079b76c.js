"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6208],{50796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var s=t(17624),r=t(4552);const o={},c=void 0,i={id:"usage/executors/shell",title:"shell",description:"---",source:"@site/versioned_docs/version-v1/usage/executors/shell.md",sourceDirName:"usage/executors",slug:"/usage/executors/shell",permalink:"/docs/v1/usage/executors/shell",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/executors/shell.md",tags:[],version:"v1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Executor",permalink:"/docs/v1/usage/executors/http"},next:{title:"Internals",permalink:"/docs/v1/usage/internals"}},l={},a=[{value:"title: Shell Executor",id:"title-shell-executor",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"title-shell-executor",children:"title: Shell Executor"}),"\n",(0,s.jsx)(n.p,{children:"Shell executor runs a system command"}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Params"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"shell: Run this command using a shell environment\ncommand: The command to run\nenv: Env vars separated by comma\ncwd: Chdir before command run\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "executor": "shell",\n  "executor_config": {\n      "shell": "true",\n      "command": "my_command",\n      "env": "ENV_VAR=va1,ANOTHER_ENV_VAR=var2",\n      "cwd": "/app"\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var s=t(11504);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);