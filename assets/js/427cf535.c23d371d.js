"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9217],{39916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(17624),n=t(4552);const i={title:"Outage recovery"},o=void 0,a={id:"usage/recovery",title:"Outage recovery",description:"Outage Recovery",source:"@site/versioned_docs/version-v2/usage/recovery.md",sourceDirName:"usage",slug:"/usage/recovery",permalink:"/docs/v2/usage/recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/recovery.md",tags:[],version:"v2",frontMatter:{title:"Outage recovery"},sidebar:"tutorialSidebar",previous:{title:"Syslog Processor",permalink:"/docs/v2/usage/processors/syslog"},next:{title:"Job retries",permalink:"/docs/v2/usage/retries"}},l={},d=[{value:"Outage Recovery",id:"outage-recovery",level:2},{value:"Failure of a Single Server Cluster",id:"failure-of-a-single-server-cluster",level:2},{value:"Failure of a Server in a Multi-Server Cluster",id:"failure-of-a-server-in-a-multi-server-cluster",level:2},{value:"Failure of Multiple Servers in a Multi-Server Cluster",id:"failure-of-multiple-servers-in-a-multi-server-cluster",level:2},{value:"Manual Recovery Using peers.json",id:"manual-recovery-using-peersjson",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"outage-recovery",children:"Outage Recovery"}),"\n",(0,s.jsx)(r.p,{children:"Don't panic! This is a critical first step."}),"\n",(0,s.jsx)(r.p,{children:"Depending on your deployment configuration, it may take only a single server failure for cluster unavailability. Recovery requires an operator to intervene, but the process is straightforward."}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["This guide is for recovery from a Dkron outage due to a majority of server nodes in a datacenter being lost. If you are looking to add or remove servers, see the ",(0,s.jsx)(r.a,{href:"/docs/usage/clustering",children:"clustering"})," guide."]})}),"\n",(0,s.jsx)(r.h2,{id:"failure-of-a-single-server-cluster",children:"Failure of a Single Server Cluster"}),"\n",(0,s.jsxs)(r.p,{children:["If you had only a single server and it has failed, simply restart it. A single server configuration requires the -bootstrap-expect=1 flag. If the server cannot be recovered, you need to bring up a new server. See the ",(0,s.jsx)(r.a,{href:"/docs/usage/clustering",children:"clustering"})," guide for more detail."]}),"\n",(0,s.jsx)(r.p,{children:"In the case of an unrecoverable server failure in a single server cluster, data loss is inevitable since data was not replicated to any other servers. This is why a single server deploy is never recommended."}),"\n",(0,s.jsx)(r.h2,{id:"failure-of-a-server-in-a-multi-server-cluster",children:"Failure of a Server in a Multi-Server Cluster"}),"\n",(0,s.jsx)(r.p,{children:"If you think the failed server is recoverable, the easiest option is to bring it back online and have it rejoin the cluster with the same IP address, returning the cluster to a fully healthy state. Similarly, even if you need to rebuild a new Dkron server to replace the failed node, you may wish to do that immediately. Keep in mind that the rebuilt server needs to have the same IP address as the failed server. Again, once this server is online and has rejoined, the cluster will return to a fully healthy state."}),"\n",(0,s.jsxs)(r.p,{children:["Both of these strategies involve a potentially lengthy time to reboot or rebuild a failed server. If this is impractical or if building a new server with the same IP isn't an option, you need to remove the failed server. Usually, you can issue a ",(0,s.jsx)(r.code,{children:"dkron leave"})," command to remove the failed server if it's still a member of the cluster."]}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"dkron leave"})," isn't able to remove the server, you can use the ",(0,s.jsx)(r.code,{children:"dkron raft remove-peer"})," command to remove the stale peer server on the fly with no downtime."]}),"\n",(0,s.jsxs)(r.p,{children:["You can use the ",(0,s.jsx)(r.code,{children:"dkron raft list-peers"})," command to inspect the Raft configuration:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"$ dkron raft list-peers\nNode                   ID               Address          State     Voter\ndkron-server01.global  10.10.11.5:4647  10.10.11.5:4647  follower  true\ndkron-server02.global  10.10.11.6:4647  10.10.11.6:4647  leader    true\ndkron-server03.global  10.10.11.7:4647  10.10.11.7:4647  follower  true\n"})}),"\n",(0,s.jsx)(r.h2,{id:"failure-of-multiple-servers-in-a-multi-server-cluster",children:"Failure of Multiple Servers in a Multi-Server Cluster"}),"\n",(0,s.jsx)(r.p,{children:"In the event that multiple servers are lost, causing a loss of quorum and a complete outage, partial recovery is possible using data on the remaining servers in the cluster. There may be data loss in this situation because multiple servers were lost, so information about what's committed could be incomplete. The recovery process implicitly commits all outstanding Raft log entries, so it's also possible to commit data that was uncommitted before the failure."}),"\n",(0,s.jsx)(r.p,{children:"See the section below for details of the recovery procedure. You simply include just the remaining servers in the raft/peers.json recovery file. The cluster should be able to elect a leader once the remaining servers are all restarted with an identical raft/peers.json configuration."}),"\n",(0,s.jsx)(r.p,{children:"Any new servers you introduce later can be fresh with totally clean data directories."}),"\n",(0,s.jsx)(r.p,{children:"In extreme cases, it should be possible to recover with just a single remaining server by starting that single server with itself as the only peer in the raft/peers.json recovery file."}),"\n",(0,s.jsx)(r.p,{children:"The raft/peers.json recovery file is final, and a snapshot is taken after it is ingested, so you are guaranteed to start with your recovered configuration. This does implicitly commit all Raft log entries, so should only be used to recover from an outage, but it should allow recovery from any situation where there's some cluster data available."}),"\n",(0,s.jsx)(r.h2,{id:"manual-recovery-using-peersjson",children:"Manual Recovery Using peers.json"}),"\n",(0,s.jsx)(r.p,{children:"To begin, stop all remaining servers. You can attempt a graceful leave, but it will not work in most cases. Do not worry if the leave exits with an error. The cluster is in an unhealthy state, so this is expected."}),"\n",(0,s.jsx)(r.p,{children:"The peers.json file will be deleted after Dkron starts and ingests this file."}),"\n",(0,s.jsx)(r.p,{children:"Using raft/peers.json for recovery can cause uncommitted Raft log entries to be implicitly committed, so this should only be used after an outage where no other option is available to recover a lost server. Make sure you don't have any automated processes that will put the peers file in place on a periodic basis."}),"\n",(0,s.jsxs)(r.p,{children:["The next step is to go to the ",(0,s.jsx)(r.code,{children:"data-dir"})," of each Dkron server. Inside that directory, there will be a raft/ sub-directory. We need to create a raft/peers.json file. It should look something like:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'[\n  {\n    "id": "node1",\n    "address": "10.1.0.1:4647"\n  },\n  {\n    "id": "node2",\n    "address": "10.1.0.2:4647"\n  },\n  {\n    "id": "node3",\n    "address": "10.1.0.3:4647"\n  }\n]\n'})}),"\n",(0,s.jsx)(r.p,{children:"Simply create entries for all remaining servers. You must confirm that servers you do not include here have indeed failed and will not later rejoin the cluster. Ensure that this file is the same across all remaining server nodes."}),"\n",(0,s.jsx)(r.p,{children:"At this point, you can restart all the remaining servers. In Dkron 0.5.5 and later you will see them ingest recovery file:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Recovery log placeholder\n"})}),"\n",(0,s.jsx)(r.p,{children:"It should be noted that any existing member can be used to rejoin the cluster as the gossip protocol will take care of discovering the server nodes."}),"\n",(0,s.jsx)(r.p,{children:"At this point, the cluster should be in an operable state again. One of the nodes should claim leadership and emit a log like:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"[INFO] Dkron: cluster leadership acquired"})}),"\n",(0,s.jsxs)(r.p,{children:["You can use the ",(0,s.jsx)(r.code,{children:"dkron raft list-peers"})," command to inspect the Raft configuration:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"$ dkron raft list-peers\nNode   ID     Address          State     Voter\nnode1  node1  10.10.11.5:4647  follower  true\nnode2  node2  10.10.11.6:4647  leader    true\nnode3  node3  10.10.11.7:4647  follower  true\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["id (string: ",(0,s.jsx)("required",{}),") - Specifies the node ID of the server. This is the ",(0,s.jsx)(r.code,{children:"name"})," of the node."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["address (string: ",(0,s.jsx)("required",{}),") - Specifies the IP and port of the server in ip",":port"," format. The port is the server's gRPC port used for cluster communications, typically ",(0,s.jsx)(r.code,{children:"6868"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,r,t)=>{t.d(r,{I:()=>a,M:()=>o});var s=t(11504);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);