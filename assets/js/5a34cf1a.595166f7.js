"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[17704],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7366:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"RKE2 Cluster Configuration Reference (Tech Preview)",shortTitle:"RKE2 Cluster Configuration",position:5},c=void 0,l={unversionedId:"cluster-admin/editing-clusters/rke2-config-reference",id:"version-2.4.15/cluster-admin/editing-clusters/rke2-config-reference",isDocsHomePage:!1,title:"RKE2 Cluster Configuration Reference (Tech Preview)",description:"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster.",source:"@site/versioned_docs/version-2.4.15/cluster-admin/editing-clusters/rke2-config-reference.md",sourceDirName:"cluster-admin/editing-clusters",slug:"/cluster-admin/editing-clusters/rke2-config-reference",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/rke2-config-reference",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-admin/editing-clusters/rke2-config-reference.md",tags:[],version:"2.4.15",frontMatter:{title:"RKE2 Cluster Configuration Reference (Tech Preview)",shortTitle:"RKE2 Cluster Configuration",position:5},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"RKE Cluster Configuration Reference",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/rke-config-reference"},next:{title:"Syncing",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/syncing"}},u=[{value:"Basics",id:"basics",children:[]},{value:"Add-On Config",id:"add-on-config",children:[]},{value:"Agent Environment Vars",id:"agent-environment-vars",children:[]},{value:"etcd",id:"etcd",children:[]},{value:"Networking",id:"networking",children:[]},{value:"Registries",id:"registries",children:[]},{value:"Upgrade Strategy",id:"upgrade-strategy",children:[]},{value:"Advanced",id:"advanced",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster."),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set any of the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/install_options/install_options"},"options")," available in an RKE2 installation.")),(0,i.kt)("h1",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,i.kt)("p",null,">"," Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE2 cluster configuration file in YAML. For the complete reference of configurable options for RKE2 Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/install_options/"},"RKE2 documentation.")),(0,i.kt)("h3",{id:"basics"},"Basics"),(0,i.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,i.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,i.kt)("p",null,"For more detail, see ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/upgrading-kubernetes"},"Upgrading Kubernetes"),"."),(0,i.kt)("h4",{id:"container-network-provider"},"Container Network Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses."),(0,i.kt)("p",null,">"," After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications."),(0,i.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cilium.io/"},"Cilium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus"))),(0,i.kt)("p",null,"For more details on the different networking providers and how to configure them, please view our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/network_options/"},"RKE2 documentation"),"."),(0,i.kt)("h4",{id:"cloud-provider"},"Cloud Provider"),(0,i.kt)("p",null,"You can configure a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/cloud-providers"},"Kubernetes cloud provider"),". If you want to use dynamically provisioned ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/volumes-and-storage/"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Note:")," If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,i.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"this documentation")," on how to configure the cloud provider."),(0,i.kt)("h4",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,i.kt)("p",null,"Choose the default ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/"},"pod security policy")," for the cluster. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/policies/"},"RKE2 documentation")," on the specifications of each available policy."),(0,i.kt)("h4",{id:"worker-cis-profile"},"Worker CIS Profile"),(0,i.kt)("p",null,"Select a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cis-scans/"},"CIS benchmark")," to validate the system configuration against."),(0,i.kt)("h4",{id:"project-network-isolation"},"Project Network Isolation"),(0,i.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication."),(0,i.kt)("p",null,"Project network isolation is available if you are using any RKE2 network plugin that supports the enforcement of Kubernetes network policies, such as Canal."),(0,i.kt)("h4",{id:"selinux"},"SELinux"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/selinux"},"SELinux")," support."),(0,i.kt)("h4",{id:"coredns"},"CoreDNS"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("a",{parentName:"p",href:"https://coredns.io/"},"CoreDNS")," is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#coredns"},"RKE2 documentation")," for additional CoreDNS configurations."),(0,i.kt)("h4",{id:"nginx-ingress"},"NGINX Ingress"),(0,i.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/networking/#nginx-ingress-controller"},"RKE2 documentation")," for additional configuration options."),(0,i.kt)("h4",{id:"metrics-server"},"Metrics Server"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,i.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE2 can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,i.kt)("h3",{id:"add-on-config"},"Add-On Config"),(0,i.kt)("p",null,"Additional Kubernetes manifests, managed as a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/addons/"},"Add-on"),", to apply to the cluster on startup. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm/#automatically-deploying-manifests-and-helm-charts"},"RKE2 documentation")," for details."),(0,i.kt)("h3",{id:"agent-environment-vars"},"Agent Environment Vars"),(0,i.kt)("p",null,"Option to set environment variables for ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/rancher-agents/"},"Rancher agents"),". The environment variables can be set using key value pairs. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/linux_agent_config/"},"RKE2 documentation")," for more details."),(0,i.kt)("h3",{id:"etcd"},"etcd"),(0,i.kt)("h4",{id:"automatic-snapshots"},"Automatic Snapshots"),(0,i.kt)("p",null,"Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/backup_restore/#creating-snapshots"},"RKE2 documentation"),"."),(0,i.kt)("h4",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Option to choose whether to expose etcd metrics to the public or only within the cluster."),(0,i.kt)("h3",{id:"networking"},"Networking"),(0,i.kt)("h4",{id:"cluster-cidr"},"Cluster CIDR"),(0,i.kt)("p",null,"IPv4/IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)."),(0,i.kt)("h4",{id:"service-cidr"},"Service CIDR"),(0,i.kt)("p",null,"IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)."),(0,i.kt)("h4",{id:"cluster-dns"},"Cluster DNS"),(0,i.kt)("p",null,"IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)."),(0,i.kt)("h4",{id:"cluster-domain"},"Cluster Domain"),(0,i.kt)("p",null,"Select the domain for the cluster. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.local"),"."),(0,i.kt)("h4",{id:"nodeport-service-port-range"},"NodePort Service Port Range"),(0,i.kt)("p",null,"Option to change the range of ports that can be used for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,i.kt)("h4",{id:"tls-alternate-names"},"TLS Alternate Names"),(0,i.kt)("p",null,"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert."),(0,i.kt)("h4",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,i.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,i.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,i.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/#4-authorized-cluster-endpoint"},"architecture section.")),(0,i.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture-recommendations/#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,i.kt)("h3",{id:"registries"},"Registries"),(0,i.kt)("p",null,"Select the image repository to pull Rancher images from. For more details and configuration options, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration/"},"RKE2 documentation"),"."),(0,i.kt)("h3",{id:"upgrade-strategy"},"Upgrade Strategy"),(0,i.kt)("h4",{id:"controle-plane-concurrency"},"Controle Plane Concurrency"),(0,i.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,i.kt)("h4",{id:"worker-concurrency"},"Worker Concurrency"),(0,i.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,i.kt)("h4",{id:"drain-nodes-control-plane"},"Drain Nodes (Control Plane)"),(0,i.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,i.kt)("h4",{id:"drain-nodes-worker-nodes"},"Drain Nodes (Worker Nodes)"),(0,i.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"Option to set kubelet options for different nodes. For available options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes documentation"),"."),(0,i.kt)("h1",{id:"cluster-config-file"},"Cluster Config File"),(0,i.kt)("p",null,"Instead of using the Rancher UI forms to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set any of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/install_options/install_options"},"options")," available in an RKE2 installation."),(0,i.kt)("p",null,"To edit an RKE2 config file directly from the Rancher UI, click ",(0,i.kt)("strong",{parentName:"p"},"Edit as YAML"),"."))}p.isMDXComponent=!0}}]);