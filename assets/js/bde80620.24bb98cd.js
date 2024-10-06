"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7843],{58988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(17624),r=t(4552);const s={},i="Job chaining",c={id:"usage/chaining",title:"Job chaining",description:"You can set some jobs to run after other job is executed. To setup a job that will be executed after any other given job, just set the parent_job property when saving the new job.",source:"@site/docs/usage/chaining.md",sourceDirName:"usage",slug:"/usage/chaining",permalink:"/docs/usage/chaining",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/chaining.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Cloud Auto-join",permalink:"/docs/usage/cloud-auto-join"}},a={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"job-chaining",children:"Job chaining"})}),"\n",(0,o.jsxs)(n.p,{children:["You can set some jobs to run after other job is executed. To setup a job that will be executed after any other given job, just set the ",(0,o.jsx)(n.code,{children:"parent_job"})," property when saving the new job."]}),"\n",(0,o.jsx)(n.p,{children:"The dependent job will be executed after the main job finished a successful execution."}),"\n",(0,o.jsx)(n.p,{children:"Child jobs schedule property will be ignored if it's present."}),"\n",(0,o.jsx)(n.p,{children:"Take into account that parent jobs must be created before any child job."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  }\n}\n\n{\n  "name": "child_job",\n  "parent_job": "job1",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from child\\""\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var o=t(11504);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);