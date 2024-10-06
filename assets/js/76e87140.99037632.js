"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8004],{63845:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(17624),t=r(4552);const i={title:"Clustering"},d=void 0,l={id:"usage/clustering",title:"Clustering",description:"Configure a cluster",source:"@site/docs/usage/clustering.md",sourceDirName:"usage",slug:"/usage/clustering",permalink:"/docs/usage/clustering",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/clustering.md",tags:[],version:"current",frontMatter:{title:"Clustering"},sidebar:"tutorialSidebar",previous:{title:"Cloud Auto-join",permalink:"/docs/usage/cloud-auto-join"},next:{title:"Concurrency",permalink:"/docs/usage/concurrency"}},o={},c=[{value:"Configure a cluster",id:"configure-a-cluster",level:2},{value:"Deployment Table",id:"deployment-table",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"configure-a-cluster",children:"Configure a cluster"}),"\n",(0,s.jsx)(n.p,{children:"Dkron can run in HA mode, avoiding SPOFs, this mode provides better scalability and better reliability for users that wants a high level of confidence in the cron jobs they need to run."}),"\n",(0,s.jsx)(n.p,{children:"Manually bootstrapping a Dkron cluster does not rely on additional tooling, but does require operator participation in the cluster formation process. When bootstrapping, Dkron servers and clients must be started and informed with the address of at least one Dkron server."}),"\n",(0,s.jsx)(n.p,{children:"As you can tell, this creates a chicken-and-egg problem where one server must first be fully bootstrapped and configured before the remaining servers and clients can join the cluster. This requirement can add additional provisioning time as well as ordered dependencies during provisioning."}),"\n",(0,s.jsx)(n.p,{children:"First, we bootstrap a single Dkron server and capture its IP address. After we have that nodes IP address, we place this address in the configuration."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"First bootstrap a node with a configuration like this:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# dkron.yml\nserver: true\nbootstrap-expect: 1\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Then stop the bootstrapped server and capture the server IP address."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To form a cluster, configure server nodes (including the bootstrapped server) with the address of its peers as in the following example:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# dkron.yml\nserver: true\nbootstrap-expect: 3\nretry-join:\n- 10.19.3.9\n- 10.19.4.64\n- 10.19.7.215\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deployment-table",children:"Deployment Table"}),"\n",(0,s.jsxs)(n.p,{children:["Below is a table that shows quorum size and failure tolerance for various\ncluster sizes. The recommended deployment is either 3 or 5 servers. A single\nserver deployment is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"highly"})})," discouraged as data loss is inevitable in a\nfailure scenario."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Servers"}),(0,s.jsx)("th",{children:"Quorum Size"}),(0,s.jsx)("th",{children:"Failure Tolerance"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"0"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"0"})]}),(0,s.jsxs)("tr",{class:"warning",children:[(0,s.jsx)("td",{children:"3"}),(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"1"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"3"}),(0,s.jsx)("td",{children:"1"})]}),(0,s.jsxs)("tr",{class:"warning",children:[(0,s.jsx)("td",{children:"5"}),(0,s.jsx)("td",{children:"3"}),(0,s.jsx)("td",{children:"2"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"6"}),(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"2"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"7"}),(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"3"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>d});var s=r(11504);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);