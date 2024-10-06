"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9248],{95340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(17624),i=t(4552);const o={sidebar_position:1},r="Getting started",a={id:"basics/getting-started",title:"Getting started",description:"Introduction",source:"@site/docs/basics/getting-started.md",sourceDirName:"basics",slug:"/basics/getting-started",permalink:"/docs/basics/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/basics/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/docs/basics/configuration"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"State storage",id:"state-storage",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Starting a single node",id:"starting-a-single-node",level:3},{value:"Create a Job",id:"create-a-job",level:3},{value:"To start configuring an HA installation of Dkron follow the clustering guide",id:"to-start-configuring-an-ha-installation-of-dkron-follow-the-clustering-guide",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Dkron nodes can work in two modes, agents or servers."}),"\n",(0,s.jsx)(n.p,{children:"A Dkron agent is a cluster member that can handle job executions, run your scripts and return the resulting output to the server."}),"\n",(0,s.jsx)(n.p,{children:"A Dkron server is also a cluster member that send job execution queries to agents or other servers, so servers can execute jobs too."}),"\n",(0,s.jsx)(n.p,{children:"The main distinction is that servers order job executions, can be used to schedule jobs, handles data storage and participate on leader election."}),"\n",(0,s.jsx)(n.p,{children:"Dkron clusters have a leader, the leader is responsible of starting job execution queries in the cluster."}),"\n",(0,s.jsx)(n.p,{children:"Any Dkron agent or server acts as a cluster member and it's available to run scheduled jobs."}),"\n",(0,s.jsx)(n.p,{children:"Default is for all nodes to execute each job. You can control what nodes run a job by specifying tags and a count of target nodes having this tag. This gives an unprecedented level of flexibility in runnig jobs across a cluster of any size and with any combination of machines you need."}),"\n",(0,s.jsx)(n.p,{children:"All the execution responses will be gathered by the scheduler and stored in the database."}),"\n",(0,s.jsx)(n.h2,{id:"state-storage",children:"State storage"}),"\n",(0,s.jsx)(n.p,{children:"Dkron deployment is just a single binary, it stores the state in an internal BuntDB instance and replicate all changes between all server nodes using the Raft protocol, it doesn't need any other storage system outside itself."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/basics/installation",children:"installation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/basics/configuration",children:"configuration"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"By default Dkron uses the following ports:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"8946"})," for serf layer between agents"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"8080"})," for HTTP for the API and Dashboard"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"6868"})," for gRPC and raft layer comunication between agents."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Be sure you have opened this ports (or the ones that you configured) in your firewall or AWS security groups."})}),"\n",(0,s.jsx)(n.h3,{id:"starting-a-single-node",children:"Starting a single node"}),"\n",(0,s.jsx)(n.p,{children:"Works out of the box, good for non HA installations."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"System service: If no changes are done to the default config files, dkron will start as a service in single mode."}),"\n",(0,s.jsx)(n.li,{children:"Command line: Running a single node with default config can be done by running:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dkron agent --server --bootstrap-expect=1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check your server is working: ",(0,s.jsx)(n.code,{children:"curl localhost:8080/v1"})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For a full list of configuration parameters and its description, see the ",(0,s.jsx)(n.a,{href:"/docs/cli/dkron_agent",children:"CLI docs"})]})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-job",children:"Create a Job"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This job will only run in just one ",(0,s.jsx)(n.code,{children:"server"})," node due to the node count in the tag. Refer to the ",(0,s.jsx)(n.a,{href:"/docs/usage/target-nodes-spec",children:"target node spec"})," for details."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl localhost:8080/v1/jobs -XPOST -d \'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "timezone": "Europe/Berlin",\n  "owner": "Platform Team",\n  "owner_email": "platform@example.com",\n  "disabled": false,\n  "tags": {\n    "server": "true:1"\n  },\n  "metadata": {\n    "user": "12345"\n  },\n  "concurrency": "allow",\n  "executor": "shell",\n  "executor_config": {\n    "command": "date"\n  }\n}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For full Job params description refer to the Job model in the ",(0,s.jsx)(n.a,{href:"/api",children:"API guide"})]}),"\n",(0,s.jsx)(n.p,{children:"That's it!"}),"\n",(0,s.jsxs)(n.h4,{id:"to-start-configuring-an-ha-installation-of-dkron-follow-the-clustering-guide",children:["To start configuring an HA installation of Dkron follow the ",(0,s.jsx)(n.a,{href:"/docs/usage/clustering",children:"clustering guide"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);