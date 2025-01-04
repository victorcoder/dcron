"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1465],{75408:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(85893),t=n(11151);const c={},s="Docker executor",i={id:"pro/executors/docker",title:"Docker executor",description:"Docker executor can launch docker based cron jobs using the docker command of the target node.",source:"@site/versioned_docs/version-v3/pro/executors/docker.md",sourceDirName:"pro/executors",slug:"/pro/executors/docker",permalink:"/docs/v3/pro/executors/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/pro/executors/docker.md",tags:[],version:"v3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/docs/v3/pro/encryption"},next:{title:"AWS ECS Executor",permalink:"/docs/v3/pro/executors/ecs"}},a={},d=[{value:"Configuration",id:"configuration",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"docker-executor",children:"Docker executor"})}),"\n",(0,r.jsx)(o.p,{children:"Docker executor can launch docker based cron jobs using the docker command of the target node."}),"\n",(0,r.jsx)(o.p,{children:"This executor needs a recent version of docker to be available and configured in the target node."}),"\n",(0,r.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(o.p,{children:"To run a docker job create a job config with the docker executor as in this example:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "executor": "docker",\n  "executor_config": {\n    "image": "alpine", //docker image to use\n    "volumes": "/logs:/var/log/", //comma separated list of volume mappings\n    "command": "echo \\"Hello from dkron\\"", //command to pass to run on container\n    "env": "ENVIRONMENT=variable" //environment variables to pass to the container\n  }\n}\n'})})]})}function l(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>s});var r=n(67294);const t={},c=r.createContext(t);function s(e){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(c.Provider,{value:o},e.children)}}}]);