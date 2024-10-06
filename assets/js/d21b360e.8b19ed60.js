"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4364],{90852:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(17624),t=o(4552);const i={},a="Installation",s={id:"basics/installation",title:"Installation",description:"Running the binary",source:"@site/docs/basics/installation.md",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/basics/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/basics/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/basics/configuration"},next:{title:"Intro",permalink:"/docs/intro"}},d={},l=[{value:"Running the binary",id:"running-the-binary",level:2},{value:"Installing the package",id:"installing-the-package",level:2},{value:"Debian repo",id:"debian-repo",level:3},{value:"YUM repo",id:"yum-repo",level:3},{value:"Running in Docker",id:"running-in-docker",level:2},{value:"Launching Dkron as a new container",id:"launching-dkron-as-a-new-container",level:3},{value:"Mounting a mapped file storage volume",id:"mounting-a-mapped-file-storage-volume",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-binary",children:"Running the binary"}),"\n",(0,r.jsxs)(n.p,{children:["Download the packaged archive for your platform from the ",(0,r.jsx)(n.a,{href:"https://github.com/distribworks/dkron/releases",children:"downloads page"})," and extract the package to a shared location in your drive, like /opt/local/bin."]}),"\n",(0,r.jsxs)(n.p,{children:["Run Dkron with default setting: ",(0,r.jsx)(n.code,{children:"dkron agent --server --bootstrap-expect=1"})]}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.a,{href:"http://localhost:8080/ui",children:"http://localhost:8080/ui"})]}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-package",children:"Installing the package"}),"\n",(0,r.jsx)(n.h3,{id:"debian-repo",children:"Debian repo"}),"\n",(0,r.jsx)(n.p,{children:"APT repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"deb [trusted=yes] https://repo.distrib.works/apt/ /\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then install: ",(0,r.jsx)(n.code,{children:"sudo apt-get install dkron"})]}),"\n",(0,r.jsx)(n.h3,{id:"yum-repo",children:"YUM repo"}),"\n",(0,r.jsx)(n.p,{children:"YUM repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[dkron]\nname=Dkron Pro Private Repo\nbaseurl=https://repo.distrib.works/yum/\nenabled=1\ngpgcheck=0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then install: ",(0,r.jsx)(n.code,{children:"sudo yum install dkron"})]}),"\n",(0,r.jsxs)(n.p,{children:["This will start Dkron as a system service and the place example configuration file under ",(0,r.jsx)(n.code,{children:"/etc/dkron/dkron.yml"})]}),"\n",(0,r.jsx)(n.h2,{id:"running-in-docker",children:"Running in Docker"}),"\n",(0,r.jsx)(n.p,{children:"Dkron provides an official Docker image via Docker Hub that can be used for deployment on any system running Docker."}),"\n",(0,r.jsx)(n.h3,{id:"launching-dkron-as-a-new-container",children:"Launching Dkron as a new container"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s a quick one-liner to get you off the ground (please note, we recommend further configuration for production deployments below):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run -d -p 8080:8080 --name dkron dkron/dkron agent --server --bootstrap-expect=1 --node-name=node1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will launch a Dkron server on port 8080 by default. You can use ",(0,r.jsx)(n.code,{children:"docker logs -f dkron"})," to follow the rest of the initialization progress. Once the Dkron startup completes you can access the app at localhost:8080"]}),"\n",(0,r.jsx)(n.p,{children:"Since Docker containers have their own ports and we just map them to the system ports as needed it\u2019s easy to move Dkron onto a different system port if you wish. For example running Dkron on port 12345:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run -d -p 12345:8080 --name dkron dkron/dkron agent --server --bootstrap-expect=1 --node-name=node1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mounting-a-mapped-file-storage-volume",children:"Mounting a mapped file storage volume"}),"\n",(0,r.jsx)(n.p,{children:"Dkron uses the local filesystem for storing the embedded database to store its own application data and the Raft protocol log. The end result is that your Dkron data will be on disk inside your container and lost if you ever remove the container."}),"\n",(0,r.jsx)(n.p,{children:"To persist your data outside of the container and make it available for use between container launches we can mount a local path inside our container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run -d -p 8080:8080 -v ~/dkron.data:/dkron.data --name dkron dkron/dkron agent --server --bootstrap-expect=1 --data-dir=/dkron.data\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now when you launch your container we are mounting that folder from our local filesystem into the container."})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>a});var r=o(11504);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);