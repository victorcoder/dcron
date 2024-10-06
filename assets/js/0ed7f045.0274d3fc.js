"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[820],{84292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(17624),i=n(4552);const o={title:"Use with AWS ECS"},r=void 0,c={id:"usage/ecs",title:"Use with AWS ECS",description:"Dkron Pro comes with a native ECS executor out of the box.",source:"@site/versioned_docs/version-v2/usage/ecs.md",sourceDirName:"usage",slug:"/usage/ecs",permalink:"/docs/v2/usage/ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/ecs.md",tags:[],version:"v2",frontMatter:{title:"Use with AWS ECS"},sidebar:"tutorialSidebar",previous:{title:"Cron spec",permalink:"/docs/v2/usage/cron-spec"},next:{title:"HTTP Executor",permalink:"/docs/v2/usage/executors/http"}},a={},l=[{value:"Use with Amazon ECS",id:"use-with-amazon-ecs",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/pro",children:"Dkron Pro"})," comes with a ",(0,s.jsx)(t.a,{href:"/docs/v2/pro/executors/ecs",children:"native ECS executor"})," out of the box."]})}),"\n",(0,s.jsx)(t.h2,{id:"use-with-amazon-ecs",children:"Use with Amazon ECS"}),"\n",(0,s.jsx)(t.p,{children:"To use Dkron to schedule jobs that run in containers, a wrapper ECS script is needed."}),"\n",(0,s.jsx)(t.p,{children:"Install the following snippet in the node that will run the call to ECS"}),"\n",(0,s.jsx)("script",{src:"https://gist.github.com/distribworks/3ac4aae9279d7c68c486fecccc2546cc.js"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"The node that will run the call to ECS will need to have installed"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AWS cli"}),"\n",(0,s.jsx)(t.li,{children:"jq"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'ecs-run --cluster cron --task-definition cron-taskdef --container-name cron --region us-east-1 --command "rake foo"'})})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);