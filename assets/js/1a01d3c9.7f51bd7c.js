"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8096],{87132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(17624),r=n(4552);const s={title:"Encryption"},i=void 0,c={id:"pro/encryption",title:"Encryption",description:"SSL encryption is used for communicating dkron pro and the embedded store, and between storage nodes itself. Also if client auth is enabled, only dkron pro clients can talk to the embedded store. This means that no other software running on your local network will be able to talk to dkron's etcd server.",source:"@site/versioned_docs/version-v1/pro/encryption.md",sourceDirName:"pro",slug:"/pro/encryption",permalink:"/docs/v1/pro/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/encryption.md",tags:[],version:"v1",frontMatter:{title:"Encryption"},sidebar:"tutorialSidebar",previous:{title:"configuration",permalink:"/docs/v1/pro/configuration"},next:{title:"Docker executor",permalink:"/docs/v1/pro/executors/docker"}},a={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"SSL encryption is used for communicating dkron pro and the embedded store, and between storage nodes itself. Also if client auth is enabled, only dkron pro clients can talk to the embedded store. This means that no other software running on your local network will be able to talk to dkron's etcd server."}),"\n",(0,o.jsx)(t.p,{children:"This ensures that no unexpected usage of the Dkron's store will happen, unless it is another Dkron pro instance."}),"\n",(0,o.jsx)(t.p,{children:"SSL encryption is enabled by default in Dkron Pro and can not be disabled, you don't need to do nothing to use it."}),"\n",(0,o.jsx)(t.p,{children:"By default Dkron Pro runs with automatically generated SSL certificates, this is enough for using it in a trusted environment but to have a better grade of confidence, it is recommended to run Dkron Pro with custom SSL certificates."}),"\n",(0,o.jsxs)(t.p,{children:["Follow ",(0,o.jsx)(t.a,{href:"https://coreos.com/os/docs/latest/generate-self-signed-certificates.html",children:"this tutorial"})," to generate autosigned SSL certificates for your instances."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:'You don\'t need a client certificate for Dkron server, just add "client auth" usage to your server cert.'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# dkron.yaml\nauto-tls: false # Set to false to use custom certs\nkey-file: server-key.pem\ncert-file: server.pem\ntrusted-ca-file: ca.pem\nclient-cert-auth: true # Enable it to only allow certs signed by the same CA\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>i});var o=n(11504);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);