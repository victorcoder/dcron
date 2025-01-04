"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3246],{68445:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(85893),r=s(11151);const t={},a="Elasticsearch processor",i={id:"pro/processors/elasticsearch",title:"Elasticsearch processor",description:"The Elasticsearch processor can fordward execution logs to an ES cluster. It need an already available Elasticsearch installation that is visible in the same network of the target node.",source:"@site/versioned_docs/version-v3/pro/processors/elasticsearch.md",sourceDirName:"pro/processors",slug:"/pro/processors/elasticsearch",permalink:"/docs/v3/pro/processors/elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/pro/processors/elasticsearch.md",tags:[],version:"v3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cross region failover",permalink:"/docs/v3/pro/failover"},next:{title:"Email processor",permalink:"/docs/v3/pro/processors/email"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Configuration",id:"configuration-1",level:2}];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"elasticsearch-processor",children:"Elasticsearch processor"})}),"\n",(0,n.jsx)(o.p,{children:"The Elasticsearch processor can fordward execution logs to an ES cluster. It need an already available Elasticsearch installation that is visible in the same network of the target node."}),"\n",(0,n.jsx)(o.p,{children:"The output logs of the job execution will be stored in the indicated ES instace."}),"\n",(0,n.jsx)(o.admonition,{title:"For Dkron Pro < v3.2.3",type:"info"}),"\n",(0,n.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "processors": {\n    "elasticsearch": {\n      "url": "http://localhost:9200", //comma separated list of Elasticsearch hosts urls (default: http://localhost:9200)\n      "index": "dkron_logs", //desired index name (default: dkron_logs)\n      "forward": "false" //forward logs to the next processor (default: false)\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(o.admonition,{title:"For Dkron Pro > v3.2.3",type:"info"}),"\n",(0,n.jsx)(o.h2,{id:"configuration-1",children:"Configuration"}),"\n",(0,n.jsxs)(o.p,{children:["For increased security and flexibility, configuration of the ES processor is stored in a file named ",(0,n.jsx)(o.code,{children:"dkron-processor-elasticsearch.yml"})," in the same locations as ",(0,n.jsx)(o.code,{children:"dkron.yml"}),", and should include a list of configurations for Elasticsearch, it can include any number of configurations."]}),"\n",(0,n.jsx)(o.p,{children:"This is an example including all available parameters:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:"es1:\n  index: dkron-logs\n  index_date_format: '2006-01-02'\n  username: elastic\n  password: XXXXXXXXXXXXX\n  url: https://localhost:9200\n"})}),"\n",(0,n.jsxs)(o.p,{children:["And for each job you only need to configure the ",(0,n.jsx)(o.code,{children:"config"})," parameter in the processors configuration:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "processors": {\n    "elasticsearch": {\n      "config": "es1", // configuration to use from the config file\n      "forward": "false" // forward logs to the next processor (default: false)\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,s)=>{s.d(o,{Z:()=>i,a:()=>a});var n=s(67294);const r={},t=n.createContext(r);function a(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);