"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2643],{69467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(85893),o=t(11151);const s={},i="AWS ECS Executor",c={id:"pro/executors/ecs",title:"AWS ECS Executor",description:"The ECS exeutor is capable of launching tasks in ECS clusters, then listen to a stream of CloudWatch Logs and return the output.",source:"@site/versioned_docs/version-v3/pro/executors/ecs.md",sourceDirName:"pro/executors",slug:"/pro/executors/ecs",permalink:"/docs/v3/pro/executors/ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/pro/executors/ecs.md",tags:[],version:"v3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker executor",permalink:"/docs/v3/pro/executors/docker"},next:{title:"Cross region failover",permalink:"/docs/v3/pro/failover"}},a={},l=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aws-ecs-executor",children:"AWS ECS Executor"})}),"\n",(0,r.jsx)(n.p,{children:"The ECS exeutor is capable of launching tasks in ECS clusters, then listen to a stream of CloudWatch Logs and return the output."}),"\n",(0,r.jsx)(n.p,{children:"To configure a job to be run in ECS, the executor needs a JSON Task definition template or an already defined task in ECS."}),"\n",(0,r.jsx)(n.p,{children:"To allow the ECS Task runner to run tasks, the machine running Dkron needs to have the appropriate permissions configured in AWS IAM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Stmt1460720941000",\n            "Effect": "Allow",\n            "Action": [\n                "ecs:RunTask",\n                "ecs:DescribeTasks",\n                "ecs:DescribeTaskDefinition",\n                "logs:FilterLogEvents",\n                "logs:DescribeLogStreams",\n                "logs:PutLogEvents"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"To configure a job to be run with the ECS executor:"}),"\n",(0,r.jsx)(n.p,{children:"Example using an existing taskdef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "executor": "ecs",\n  "executor_config": {\n    "taskdefName": "mytaskdef-family",\n    "region": "eu-west-1",\n    "cluster": "default",\n    "env": "ENVIRONMENT=variable",\n    "service": "mycontainer",\n    "overrides": "echo,\\"Hello from dkron\\""\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example using a provided taskdef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "executor": "ecs",\n  "executor_config": {\n    "taskdefBody": "{\\"containerDefinitions\\": [{\\"essential\\": true,\\"image\\": \\"hello-world\\",\\"memory\\": 100,\\"name\\": \\"hello-world\\"}],\\"family\\": \\"helloworld\\"}",\n    "region": "eu-west-1",\n    "cluster": "default",\n    "fargate": "yes",\n    "env": "ENVIRONMENT=variable",\n    "maxAttempts": "5000"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is the complete list of configuration parameters of the plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"taskdefBody\ntaskdefName\nregion\ncluster\nlogGroup\nfargate\nsecurityGroup\nsubnet\nenv\nservice\noverrides\nmaxAttempts // Defaults to 2000, will perform a check every 6s * 2000 times waiting a total of 12000s or 3.3h\nenableExecuteCommand\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);