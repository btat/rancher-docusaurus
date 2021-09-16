"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[40484],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",position:1},o=void 0,u={unversionedId:"installation/requirements/index",id:"version-2.4.15/installation/requirements/index",isDocsHomePage:!1,title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",source:"@site/versioned_docs/version-2.4.15/installation/requirements/index.md",sourceDirName:"installation/requirements",slug:"/installation/requirements/index",permalink:"/rancher-docusaurus/installation/requirements/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/installation/requirements/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",position:1},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Certificate Troubleshooting",permalink:"/rancher-docusaurus/installation/other-installation-methods/single-node-docker/troubleshooting"},next:{title:"Installing Docker",permalink:"/rancher-docusaurus/installation/requirements/installing-docker"}},p=[{value:"RKE Specific Requirements",id:"rke-specific-requirements",children:[]},{value:"K3s Specific Requirements",id:"k3s-specific-requirements",children:[]},{value:"RKE2 Specific Requirements",id:"rke2-specific-requirements",children:[]},{value:"Installing Docker",id:"installing-docker",children:[]},{value:"RKE and Hosted Kubernetes",id:"rke-and-hosted-kubernetes",children:[]},{value:"K3s Kubernetes",id:"k3s-kubernetes",children:[]},{value:"RKE2 Kubernetes",id:"rke2-kubernetes",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Ingress for RKE2",id:"ingress-for-rke2",children:[]},{value:"Ingress for EKS",id:"ingress-for-eks",children:[]},{value:"Node IP Addresses",id:"node-ip-addresses",children:[]},{value:"Port Requirements",id:"port-requirements",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster."),(0,l.kt)("p",null,">"," It is important to note that if you install Rancher on a Kubernetes cluster, requirements are different from the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/node-requirements/"},"node requirements for downstream user clusters,")," which will run your apps and services."),(0,l.kt)("p",null,"Make sure the node(s) for the Rancher server fulfill the following requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-specific-requirements"},"RKE Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-specific-requirements"},"K3s Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-specific-requirements"},"RKE2 Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installing-docker"},"Installing Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hardware-requirements"},"Hardware Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cpu-and-memory"},"CPU and Memory"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-and-hosted-kubernetes"},"RKE and Hosted Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-kubernetes"},"K3s Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-kubernetes"},"RKE2 Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker"},"Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress"},"Ingress"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress-for-rke2"},"Ingress for RKE2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress-for-eks"},"Ingress for EKS")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disks"},"Disks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#networking-requirements"},"Networking Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#node-ip-addresses"},"Node IP Addresses")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#port-requirements"},"Port Requirements")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dockershim-support"},"Dockershim Support"))),(0,l.kt)("p",null,"For a list of best practices that we recommend for running the Rancher server in production, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/best-practices/rancher-server/deployment-types/"},"best practices section.")),(0,l.kt)("p",null,"The Rancher UI works best in Firefox or Chrome."),(0,l.kt)("h1",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,l.kt)("p",null,"Rancher should work with any modern Linux distribution."),(0,l.kt)("p",null,"Docker is required for nodes that will run RKE Kubernetes clusters. It is not required for Kubernetes installs."),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ntp")," (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server."),(0,l.kt)("p",null,"Some distributions of Linux may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes v1.19, v1.20 and v1.21, firewalld must be turned off."),(0,l.kt)("p",null,"If you don't feel comfortable doing so you might check suggestions in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840"},"respective issue"),". Some users were successful ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840#issuecomment-787404822"},"creating a separate firewalld zone with a policy of ACCEPT for the Pod CIDR"),"."),(0,l.kt)("p",null,"If you plan to run Rancher on ARM64, see ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/advanced/arm64-platform/"},"Running on ARM64 (Experimental).")),(0,l.kt)("h3",{id:"rke-specific-requirements"},"RKE Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, RKE should work with any modern Docker version."),(0,l.kt)("h3",{id:"k3s-specific-requirements"},"K3s Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, K3s should work with any modern version of Docker or containerd."),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script. "),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with ",(0,l.kt)("strong",{parentName:"p"},"Raspbian Buster"),", follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"these steps")," to switch to legacy iptables."),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with Alpine Linux, follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"these steps")," for additional setup."),(0,l.kt)("h3",{id:"rke2-specific-requirements"},"RKE2 Specific Requirements"),(0,l.kt)("p",null,"For details on which OS versions were tested with RKE2, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"Docker is not required for RKE2 installs."),(0,l.kt)("p",null,"The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes. Currently, RKE2 deploys nginx-ingress as a deployment by default, so you will need to deploy it as a DaemonSet by following ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/k8s-tutorials/ha-rke2/#5-configure-nginx-to-be-a-daemonset"},"these steps.")),(0,l.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,l.kt)("p",null,"Docker is required for Helm chart installs, and it can be installed by following the steps in the official ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")," Rancher also provides ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/installing-docker"},"scripts")," to install Docker with one command."),(0,l.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("p",null,"The following sections describe the CPU, memory, and disk requirements for the nodes where the Rancher server is installed."),(0,l.kt)("h1",{id:"cpu-and-memory"},"CPU and Memory"),(0,l.kt)("p",null,"Hardware requirements scale based on the size of your Rancher deployment. Provision each individual node according to the requirements. The requirements are different depending on if you are installing Rancher in a single container with Docker, or if you are installing Rancher on a Kubernetes cluster."),(0,l.kt)("h3",{id:"rke-and-hosted-kubernetes"},"RKE and Hosted Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each host in the Kubernetes cluster where the Rancher server is installed."),(0,l.kt)("p",null,"These requirements apply to RKE Kubernetes clusters, as well as to hosted Kubernetes clusters such as EKS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"Contact Rancher")," for more than 2000 clusters and/or 20,000 nodes."),(0,l.kt)("h3",{id:"k3s-kubernetes"},"K3s Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each host in a ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/"},"K3s Kubernetes cluster where the Rancher server is installed.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"),(0,l.kt)("th",{parentName:"tr",align:null},"Database Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"Contact Rancher")," for more than 2000 clusters and/or 20,000 nodes."),(0,l.kt)("h3",{id:"rke2-kubernetes"},"RKE2 Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each instance with RKE2 installed. Minimum recommendations are outlined here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9 GB")))),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,"These CPU and memory requirements apply to a host with a ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker"},"single-node")," installation of Rancher."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")))),(0,l.kt)("h1",{id:"ingress"},"Ingress"),(0,l.kt)("p",null,"Each node in the Kubernetes cluster that Rancher is installed on should run an Ingress."),(0,l.kt)("p",null,"The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes."),(0,l.kt)("p",null,"For RKE and K3s installations, you don't have to install the Ingress manually because is is installed by default."),(0,l.kt)("p",null,"For hosted Kubernetes clusters (EKS, GKE, AKS) and RKE2 Kubernetes installations, you will need to set up the ingress."),(0,l.kt)("h3",{id:"ingress-for-rke2"},"Ingress for RKE2"),(0,l.kt)("p",null,"Currently, RKE2 deploys nginx-ingress as a deployment by default, so you will need to deploy it as a DaemonSet by following ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/k8s-tutorials/ha-rke2/#5-configure-nginx-to-be-a-daemonset"},"these steps.")),(0,l.kt)("h3",{id:"ingress-for-eks"},"Ingress for EKS"),(0,l.kt)("p",null,"For an example of how to deploy an nginx-ingress-controller with a LoadBalancer service, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/amazon-eks/#5-install-an-ingress"},"this section.")),(0,l.kt)("h1",{id:"disks"},"Disks"),(0,l.kt)("p",null,"Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories."),(0,l.kt)("h1",{id:"networking-requirements"},"Networking Requirements"),(0,l.kt)("p",null,"This section describes the networking requirements for the node(s) where the Rancher server is installed."),(0,l.kt)("h3",{id:"node-ip-addresses"},"Node IP Addresses"),(0,l.kt)("p",null,"Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,l.kt)("h3",{id:"port-requirements"},"Port Requirements"),(0,l.kt)("p",null,"To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/requirements/ports"},"Port Requirements")," lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types."),(0,l.kt)("h1",{id:"dockershim-support"},"Dockershim Support"),(0,l.kt)("p",null,"In Kubernetes v1.20, the dockershim became deprecated, and Docker became deprecated as a container runtime for Kubernetes. Dockershim was built into Kubernetes as a type of adapter that allowed Kubernetes to manage Docker containers. It was necessary because the Docker Daemon was not compliant with the CRI (Container Runtime Interface) that was created for Kubernetes. The dockershim is still included in the kubelet in Kubernetes v1.20. "),(0,l.kt)("p",null,"Rancher plans to implement the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"upstream open source community Dockershim announced by Mirantis and Docker")," to ensure RKE clusters can continue to leverage Docker as their container runtime. Users of RKE will be able to continue upgrading and building new RKE clusters leveraging Docker as the runtime and install method."),(0,l.kt)("p",null,"For users looking to use another container runtime, Rancher has the edge-focused K3s and datacenter-focused RKE2 Kubernetes distributions that use containerd as the default runtime. Imported RKE2 and K3s Kubernetes clusters can then be upgraded and managed through Rancher going forward."),(0,l.kt)("p",null,"For more information on the deprecation of Docker as a container runtime for Kubernetes, see the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"official Kubernetes blog post")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"official blog post from Mirantis.")),(0,l.kt)("p",null,"The dockershim deprecation schedule is tracked by the upstream Kubernetes community in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/1985-remove-dockershim"},"Kubernetes Enhancement Proposal (KEP) 1985.")))}d.isMDXComponent=!0}}]);