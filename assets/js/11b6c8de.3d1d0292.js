"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[60132],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return h}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},46250:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Node Requirements for Rancher Managed Clusters",position:1},l=void 0,u={unversionedId:"cluster-provisioning/node-requirements",id:"version-2.5.9/cluster-provisioning/node-requirements",isDocsHomePage:!1,title:"Node Requirements for Rancher Managed Clusters",description:"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher.",source:"@site/versioned_docs/version-2.5.9/cluster-provisioning/node-requirements.md",sourceDirName:"cluster-provisioning",slug:"/cluster-provisioning/node-requirements",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/node-requirements",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/cluster-provisioning/node-requirements.md",tags:[],version:"2.5.9",frontMatter:{title:"Node Requirements for Rancher Managed Clusters",position:1},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Intro",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/index"},next:{title:"Checklist for Production-Ready Clusters",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/production/index"}},c=[{value:"Oracle Linux and RHEL Derived Linux Nodes",id:"oracle-linux-and-rhel-derived-linux-nodes",children:[]},{value:"SUSE Linux Nodes",id:"suse-linux-nodes",children:[]},{value:"Flatcar Container Linux Nodes",id:"flatcar-container-linux-nodes",children:[]},{value:"Windows Nodes",id:"windows-nodes",children:[]}],d={toc:c};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher."),(0,i.kt)("p",null,">"," If Rancher is installed on a high-availability Kubernetes cluster, the Rancher server three-node cluster and downstream clusters have different requirements. For Rancher installation requirements, refer to the node requirements in the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/"},"installation section.")),(0,i.kt)("p",null,"Make sure the nodes for the Rancher server fulfill the following requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#operating-systems-and-container-runtime-requirements"},"Operating systems and container runtime requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hardware-requirements"},"Hardware Requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#networking-requirements"},"Networking Requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#optional-security-considerations"},"Optional: Security Considerations"))),(0,i.kt)("h1",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,i.kt)("p",null,"Rancher should work with any modern Linux distribution and any modern Docker version. Linux is required for the etcd and controlplane nodes of all downstream clusters. Worker nodes may run Linux or ",(0,i.kt)("a",{parentName:"p",href:"#windows-nodes"},"Windows Server.")),(0,i.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,i.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,i.kt)("p",null,"If you plan to use ARM64, see ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/advanced/arm64-platform/"},"Running on ARM64 (Experimental).")),(0,i.kt)("p",null,"For information on how to install Docker, refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")),(0,i.kt)("h3",{id:"oracle-linux-and-rhel-derived-linux-nodes"},"Oracle Linux and RHEL Derived Linux Nodes"),(0,i.kt)("p",null,"Some distributions of Linux derived from RHEL, including Oracle Linux, may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,i.kt)("h3",{id:"suse-linux-nodes"},"SUSE Linux Nodes"),(0,i.kt)("p",null,"SUSE Linux may have a firewall that blocks all ports by default. In that situation, follow ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/ports/#opening-suse-linux-ports"},"these steps")," to open the ports needed for adding a host to a custom cluster."),(0,i.kt)("h3",{id:"flatcar-container-linux-nodes"},"Flatcar Container Linux Nodes"),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"Launching Kubernetes with Rancher")," using Flatcar Container Linux nodes, it is required to use the following configuration in the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Cluster Config File")),(0,i.kt)("p",null,'{{% tabs %}}\n{{% tab "Canal"%}}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")),(0,i.kt)("p",null,"{{% /tab %}}"),(0,i.kt)("p",null,'{{% tab "Calico"%}}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")),(0,i.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"),(0,i.kt)("p",null,"It is also required to enable the Docker service, you can enable the Docker service using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,i.kt)("p",null,"The Docker service is enabled automatically when using ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/drivers/#node-drivers"},"Node Drivers"),"."),(0,i.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,i.kt)("p",null,"Nodes with Windows Server must run Docker Enterprise Edition."),(0,i.kt)("p",null,"Windows nodes can be used for worker nodes only. See ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/windows-clusters/"},"Configuring Custom Clusters for Windows")),(0,i.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The hardware requirements for nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," role mostly depend on your workloads. The minimum to run the Kubernetes node components is 1 CPU (core) and 1GB of memory."),(0,i.kt)("p",null,"Regarding CPU and memory, it is recommended that the different planes of Kubernetes clusters (etcd, controlplane, and workers) should be hosted on different nodes so that they can scale separately from each other."),(0,i.kt)("p",null,"For hardware recommendations for large Kubernetes clusters, refer to the official Kubernetes documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"building large clusters.")),(0,i.kt)("p",null,"For hardware recommendations for etcd clusters in production, refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd documentation.")),(0,i.kt)("h1",{id:"networking-requirements"},"Networking Requirements"),(0,i.kt)("p",null,"For a production cluster, we recommend that you restrict traffic by opening only the ports defined in the port requirements below."),(0,i.kt)("p",null,"The ports required to be open are different depending on how the user cluster is launched. Each of the sections below list the ports that need to be opened for different ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/"},"cluster creation options"),"."),(0,i.kt)("p",null,"For a breakdown of the port requirements for etcd nodes, controlplane nodes, and worker nodes in a Kubernetes cluster, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"port requirements for the Rancher Kubernetes Engine.")),(0,i.kt)("p",null,"Details on which ports are used in each situation are found under ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/ports#downstream-kubernetes-cluster-nodes"},"Downstream Cluster Port Requirements"),"."),(0,i.kt)("h1",{id:"optional-security-considerations"},"Optional: Security Considerations"),(0,i.kt)("p",null,"If you want to provision a Kubernetes cluster that is compliant with the CIS (Center for Internet Security) Kubernetes Benchmark, we recommend to following our hardening guide to configure your nodes before installing Kubernetes."),(0,i.kt)("p",null,"For more information on the hardening guide and details on which version of the guide corresponds to your Rancher and Kubernetes versions, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/security/#rancher-hardening-guide"},"security section.")))}p.isMDXComponent=!0}}]);