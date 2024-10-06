"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[256],{50196:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=n(17624),r=n(4552);const c={title:"Docker executor"},s=void 0,i={id:"pro/executors/docker",title:"Docker executor",description:"Docker executor can launch docker based cron jobs using the docker command of the target node.",source:"@site/versioned_docs/version-v1/pro/executors/docker.md",sourceDirName:"pro/executors",slug:"/pro/executors/docker",permalink:"/docs/v1/pro/executors/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/executors/docker.md",tags:[],version:"v1",frontMatter:{title:"Docker executor"},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/docs/v1/pro/encryption"},next:{title:"AWS ECS Executor",permalink:"/docs/v1/pro/executors/ecs"}},a={},d=[{value:"Configuration",id:"configuration",level:2}];function u(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Docker executor can launch docker based cron jobs using the docker command of the target node."}),"\n",(0,t.jsx)(o.p,{children:"This executor needs a recent version of docker to be available and configured in the target node."}),"\n",(0,t.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(o.p,{children:"To run a docker job create a job config with the docker executor as in this example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "executor": "docker",\n  "executor_config": {\n    "image": "alpine", //docker image to use\n    "volumes": "/logs:/var/log/", //comma separated list of volume mappings\n    "command": "echo \\"Hello from dkron\\"", //command to pass to run on container\n    "env": "ENVIRONMENT=variable" //environment variables to pass to the container\n  }\n}\n'})})]})}function l(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>i,M:()=>s});var t=n(11504);const r={},c=t.createContext(r);function s(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);