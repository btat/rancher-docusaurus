"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[3337],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return r?t.createElement(m,s(s({ref:n},l),{},{components:r})):t.createElement(m,s({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},40304:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={title:"Launching Kubernetes with Rancher",position:4},u=void 0,c={unversionedId:"cluster-provisioning/rke-clusters/index",id:"version-2.4.15/cluster-provisioning/rke-clusters/index",isDocsHomePage:!1,title:"Launching Kubernetes with Rancher",description:"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses Rancher Kubernetes Engine (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:",source:"@site/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/index.md",sourceDirName:"cluster-provisioning/rke-clusters",slug:"/cluster-provisioning/rke-clusters/index",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Launching Kubernetes with Rancher",position:4},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Launching Kubernetes on Existing Custom Nodes",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/custom-nodes/index"},next:{title:"Azure Node Template Configuration",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/node-pools/azure/azure-node-template-config"}},l=[{value:"Changes in Rancher v2.6",id:"changes-in-rancher-v26",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Launching Kubernetes on New Nodes in an Infrastructure Provider",id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider",children:[]},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",children:[]}],p={toc:l};function h(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bare-metal servers"),(0,i.kt)("li",{parentName:"ul"},"On-premise virtual machines"),(0,i.kt)("li",{parentName:"ul"},"Virtual machines hosted by an infrastructure provider")),(0,i.kt)("p",null,"Rancher can install Kubernetes on existing nodes, or it can dynamically provision nodes in an infrastructure provider and install Kubernetes on them."),(0,i.kt)("p",null,"RKE clusters include clusters that Rancher launched on Windows nodes or other existing custom nodes, as well as clusters that Rancher launched with new nodes on Azure, Digital Ocean, EC2, or vSphere."),(0,i.kt)("h3",{id:"changes-in-rancher-v26"},"Changes in Rancher v2.6"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Tech Preview")),(0,i.kt)("p",null,"Rancher v2.6 introduces provisioning for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," clusters directly from the Rancher UI. RKE2, also known as RKE Government, is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector."),(0,i.kt)("p",null,"RKE2 provisioning is built on top of a new provisioning framework that leverages the upstream ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api"},"Cluster API")," project. With this new provisioning framework, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provision RKE2 clusters on Digital Ocean, AWS EC2, Azure, and vSphere"),(0,i.kt)("li",{parentName:"ul"},"Fully configure RKE2 clusters within Rancher"),(0,i.kt)("li",{parentName:"ul"},"Choose CNI options Calico, Cilium, and Multus in addition to Canal"),(0,i.kt)("li",{parentName:"ul"},"Install custom RKE2 clusters on pre-provisioned VMs or bare-metal nodes")),(0,i.kt)("p",null,"The RKE2 provisioning tech preview also includes installing RKE2 on Windows clusters. Windows features for RKE2 include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Containers with RKE2 powered by containerd"),(0,i.kt)("li",{parentName:"ul"},"Added provisioning of Windows RKE2 custom clusters directly from the Rancher UI"),(0,i.kt)("li",{parentName:"ul"},"Calico CNI for Windows RKE2 custom clusters. "),(0,i.kt)("li",{parentName:"ul"},"SAC releases of Windows Server (2004 and 20H2) are included in the technical preview.")),(0,i.kt)("p",null,"Windows Support for RKE2 Custom Clusters requires choosing Calico as the CNI."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"If you use RKE to set up a cluster, your nodes must meet the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/node-requirements"},"requirements")," for nodes in downstream user clusters."),(0,i.kt)("h3",{id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider"},"Launching Kubernetes on New Nodes in an Infrastructure Provider"),(0,i.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your cloud providers."),(0,i.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,i.kt)("p",null,"For more information, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/"},"launching Kubernetes on new nodes.")),(0,i.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,i.kt)("p",null,"In this scenario, you want to install Kubernetes on bare-metal servers, on-prem virtual machines, or virtual machines that already exist in a cloud provider. With this option, you will run a Rancher agent Docker container on the machine."),(0,i.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cleaning-cluster-nodes/"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,i.kt)("p",null,"For more information, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/custom-nodes/"},"custom nodes.")))}h.isMDXComponent=!0}}]);