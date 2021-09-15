"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[6416],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"RKE Cluster Configuration Reference",shortTitle:"RKE Cluster Configuration",position:1},s=void 0,c={unversionedId:"cluster-admin/editing-clusters/rke-config-reference",id:"cluster-admin/editing-clusters/rke-config-reference",isDocsHomePage:!1,title:"RKE Cluster Configuration Reference",description:"When Rancher installs Kubernetes, it uses RKE or RKE2 as the Kubernetes distribution.",source:"@site/docs/cluster-admin/editing-clusters/rke-config-reference.md",sourceDirName:"cluster-admin/editing-clusters",slug:"/cluster-admin/editing-clusters/rke-config-reference",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/rke-config-reference",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cluster-admin/editing-clusters/rke-config-reference.md",tags:[],version:"current",frontMatter:{title:"RKE Cluster Configuration Reference",shortTitle:"RKE Cluster Configuration",position:1},sidebar:"tutorialSidebar",previous:{title:"K3s Cluster Configuration Reference (Tech Preview)",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/k3s-config-reference"},next:{title:"RKE2 Cluster Configuration Reference (Tech Preview)",permalink:"/rancher-docusaurus/cluster-admin/editing-clusters/rke2-config-reference"}},u=[{value:"Kubernetes Version",id:"kubernetes-version",children:[]},{value:"Network Provider",id:"network-provider",children:[]},{value:"Project Network Isolation",id:"project-network-isolation",children:[]},{value:"Kubernetes Cloud Providers",id:"kubernetes-cloud-providers",children:[]},{value:"Private Registries",id:"private-registries",children:[]},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",children:[]},{value:"Node Pools",id:"node-pools",children:[]},{value:"NGINX Ingress",id:"nginx-ingress",children:[]},{value:"Metrics Server Monitoring",id:"metrics-server-monitoring",children:[]},{value:"Pod Security Policy Support",id:"pod-security-policy-support",children:[]},{value:"Docker Version on Nodes",id:"docker-version-on-nodes",children:[]},{value:"Docker Root Directory",id:"docker-root-directory",children:[]},{value:"Default Pod Security Policy",id:"default-pod-security-policy",children:[]},{value:"Node Port Range",id:"node-port-range",children:[]},{value:"Recurring etcd Snapshots",id:"recurring-etcd-snapshots",children:[]},{value:"Agent Environment Variables",id:"agent-environment-variables",children:[]},{value:"Updating ingress-nginx",id:"updating-ingress-nginx",children:[]},{value:"Config File Structure in Rancher",id:"config-file-structure-in-rancher",children:[]},{value:"Default DNS provider",id:"default-dns-provider",children:[]},{value:"docker_root_dir",id:"docker_root_dir",children:[]},{value:"enable_cluster_monitoring",id:"enable_cluster_monitoring",children:[]},{value:"enable_network_policy",id:"enable_network_policy",children:[]},{value:"local_cluster_auth_endpoint",id:"local_cluster_auth_endpoint",children:[]},{value:"Custom Network Plug-in",id:"custom-network-plug-in",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When Rancher installs Kubernetes, it uses ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"RKE")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," as the Kubernetes distribution."),(0,i.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE Kubernetes cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editing-clusters-with-a-form-in-the-rancher-ui"},"Editing Clusters with a Form in the Rancher UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editing-clusters-with-yaml"},"Editing Clusters with YAML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#kubernetes-version"},"Kubernetes Version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#network-provider"},"Network Provider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#project-network-isolation"},"Project Network Isolation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#kubernetes-cloud-providers"},"Kubernetes Cloud Providers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#private-registries"},"Private Registries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#node-pools"},"Node Pools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nginx-ingress"},"NGINX Ingress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metrics-server-monitoring"},"Metrics Server Monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pod-security-policy-support"},"Pod Security Policy Support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker-version-on-nodes"},"Docker Version on Nodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker-root-directory"},"Docker Root Directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-pod-security-policy"},"Default Pod Security Policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#node-port-range"},"Node Port Range")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recurring-etcd-snapshots"},"Recurring etcd Snapshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#agent-environment-variables"},"Agent Environment Variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-ingress-nginx"},"Updating ingress-nginx")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rke-cluster-config-file-reference"},"RKE Cluster Config File Reference"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config-file-structure-in-rancher"},"Config File Structure in Rancher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-dns-provider"},"Default DNS Provider")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rancher-specific-parameters-in-yaml"},"Rancher Specific Parameters in YAML"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker_root_dir"},"docker_root_dir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enable_cluster_monitoring"},"enable_cluster_monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enable_network_policy"},"enable_network_policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#local_cluster_auth_endpoint"},"local_cluster_auth_endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-network-plug-in"},"Custom Network Plug-in"))))),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rancher-ui-options"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.")),(0,i.kt)("p",null,"The RKE cluster config options are nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. For more information, see the section about the ",(0,i.kt)("a",{parentName:"p",href:"#cluster-config-file"},"cluster config file.")),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"clusters launched by RKE"),", you can edit any of the remaining options that follow."),(0,i.kt)("p",null,"For an example of RKE config file syntax, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,i.kt)("p",null,"The forms in the Rancher UI don't include all advanced options for configuring RKE. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h1",{id:"editing-clusters-with-a-form-in-the-rancher-ui"},"Editing Clusters with a Form in the Rancher UI"),(0,i.kt)("p",null,"To edit your cluster,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),".")),(0,i.kt)("h1",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML."),(0,i.kt)("p",null,"RKE clusters (also called RKE1 clusters) are edited differently than RKE2 and K3s clusters."),(0,i.kt)("p",null,"To edit an RKE config file directly from the Rancher UI,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the RKE cluster you want to configure. Click and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),". This take you to the RKE configuration form. Note: Because cluster provisioning changed in Rancher 2.6, the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit as YAML")," can be used for configuring RKE2 clusters, but it can't be used for editing RKE1 configuration."),(0,i.kt)("li",{parentName:"ol"},"In the configuration form, scroll down and click ",(0,i.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,i.kt)("li",{parentName:"ol"},"Edit the RKE options under the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher_kubernetes_engine_config")," directive.")),(0,i.kt)("h1",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,i.kt)("p",null,">"," Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE cluster configuration file in YAML. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,i.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,i.kt)("p",null,"For more detail, see ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/upgrading-kubernetes"},"Upgrading Kubernetes"),"."),(0,i.kt)("h3",{id:"network-provider"},"Network Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses. For more details on the different networking providers, please view our ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/faq/networking/cni-providers/"},"Networking FAQ"),"."),(0,i.kt)("p",null,">"," After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications."),(0,i.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel#flannel"},"Flannel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave"},"Weave"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes on Weave:")),(0,i.kt)("p",null,"When Weave is selected as network provider, Rancher will automatically enable encryption by generating a random password. If you want to specify the password manually, please see how to configure your cluster using a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Config File")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/#weave-network-plug-in-options"},"Weave Network Plug-in Options"),"."),(0,i.kt)("h3",{id:"project-network-isolation"},"Project Network Isolation"),(0,i.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication. "),(0,i.kt)("p",null,"Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,i.kt)("h3",{id:"kubernetes-cloud-providers"},"Kubernetes Cloud Providers"),(0,i.kt)("p",null,"You can configure a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/cloud-providers"},"Kubernetes cloud provider"),". If you want to use dynamically provisioned ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/volumes-and-storage/"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Note:")," If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,i.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE cloud provider documentation")," on how to configure the cloud provider."),(0,i.kt)("h3",{id:"private-registries"},"Private Registries"),(0,i.kt)("p",null,"The cluster-level private registry configuration is only used for provisioning clusters."),(0,i.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/config-private-registry"},"global default registry")," through the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,i.kt)("p",null,"If your private registry requires credentials, you need to pass the credentials to Rancher by editing the cluster options for each cluster that needs to pull images from the registry."),(0,i.kt)("p",null,"The private registry configuration option tells Rancher where to pull the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/system-images/"},"system images")," or ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"addon images")," that will be used in your cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System images")," are components needed to maintain the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add-ons")," are used to deploy several cluster components, including network plug-ins, the ingress controller, the DNS provider, or the metrics server.")),(0,i.kt)("p",null,"For more information on setting up a private registry for components applied during the provisioning of the cluster, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"RKE documentation on private registries"),". "),(0,i.kt)("p",null,"Rancher v2.6 introduced the ability to configure ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/#amazon-elastic-container-registry-ecr-private-registry-setup"},"ECR registries for RKE clusters"),"."),(0,i.kt)("h3",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,i.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,i.kt)("p",null,">"," The authorized cluster endpoint only works on Rancher-launched Kubernetes clusters. In other words, it only works in clusters where Rancher ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/#tools-for-provisioning-kubernetes-clusters"},"used RKE")," to provision the cluster. It is not available for clusters in a hosted Kubernetes provider, such as Amazon's EKS."),(0,i.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,i.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/#4-authorized-cluster-endpoint"},"architecture section.")),(0,i.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture-recommendations/#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,i.kt)("h3",{id:"node-pools"},"Node Pools"),(0,i.kt)("p",null,"For information on using the Rancher UI to set up node pools in an RKE cluster, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"this page.")),(0,i.kt)("h3",{id:"nginx-ingress"},"NGINX Ingress"),(0,i.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster."),(0,i.kt)("h3",{id:"metrics-server-monitoring"},"Metrics Server Monitoring"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,i.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,i.kt)("h3",{id:"pod-security-policy-support"},"Pod Security Policy Support"),(0,i.kt)("p",null,"Enables ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/"},"pod security policies")," for the cluster. After enabling this option, choose a policy using the ",(0,i.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,i.kt)("p",null,"You must have an existing Pod Security Policy configured before you can use this option."),(0,i.kt)("h3",{id:"docker-version-on-nodes"},"Docker Version on Nodes"),(0,i.kt)("p",null,"Configures whether nodes are allowed to run versions of Docker that Rancher doesn't officially support. "),(0,i.kt)("p",null,"If you choose to require a supported Docker version, Rancher will stop pods from running on nodes that don't have a supported Docker version installed."),(0,i.kt)("p",null,"For details on which Docker versions were tested with each Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,i.kt)("h3",{id:"docker-root-directory"},"Docker Root Directory"),(0,i.kt)("p",null,"If the nodes you are adding to the cluster have Docker configured with a non-default Docker Root Directory (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/docker"),"),  specify the correct Docker Root Directory in this option."),(0,i.kt)("h3",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,i.kt)("p",null,"If you enable ",(0,i.kt)("strong",{parentName:"p"},"Pod Security Policy Support"),", use this drop-down to choose the pod security policy that's applied to the cluster."),(0,i.kt)("h3",{id:"node-port-range"},"Node Port Range"),(0,i.kt)("p",null,"Option to change the range of ports that can be used for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,i.kt)("h3",{id:"recurring-etcd-snapshots"},"Recurring etcd Snapshots"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/#etcd-recurring-snapshots"},"recurring etcd snapshots"),"."),(0,i.kt)("h3",{id:"agent-environment-variables"},"Agent Environment Variables"),(0,i.kt)("p",null,"Option to set environment variables for ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/rancher-agents/"},"rancher agents"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variables can be set using agent environment variables."),(0,i.kt)("h3",{id:"updating-ingress-nginx"},"Updating ingress-nginx"),(0,i.kt)("p",null,"Clusters that were created before Kubernetes 1.16 will have an ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),". Clusters that were created with Kubernetes 1.16 or newer will have ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingUpdate"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),", you will need to delete these pods to get the correct version for your deployment."),(0,i.kt)("h1",{id:"rke-cluster-config-file-reference"},"RKE Cluster Config File Reference"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"options available")," in an RKE installation, except for ",(0,i.kt)("inlineCode",{parentName:"p"},"system_images")," configuration. The ",(0,i.kt)("inlineCode",{parentName:"p"},"system_images")," option is not supported when creating a cluster with the Rancher UI or API."),(0,i.kt)("p",null,"For the complete reference for configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h3",{id:"config-file-structure-in-rancher"},"Config File Structure in Rancher"),(0,i.kt)("p",null,"RKE (Rancher Kubernetes Engine) is the tool that Rancher uses to provision Kubernetes clusters. Rancher's cluster config files used to have the same structure as ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE config files,")," but the structure changed so that in Rancher, RKE cluster config items are separated from non-RKE config items. Therefore, configuration for your cluster needs to be nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in the cluster config file. Cluster config files created with earlier versions of Rancher will need to be updated for this format. An example cluster config file is included below."),(0,i.kt)("p",null,'{{% accordion id="v2.3.0-cluster-config-file" label="Example Cluster Config File" %}}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Cluster Config\n#\ndocker_root_dir: /var/lib/docker\nenable_cluster_alerting: false\nenable_cluster_monitoring: false\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n#\n# Rancher Config\n#\nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n#\n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n")),(0,i.kt)("p",null,"{{% /accordion %}}"),(0,i.kt)("h3",{id:"default-dns-provider"},"Default DNS provider"),(0,i.kt)("p",null,"The table below indicates what DNS provider is deployed by default. See ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/dns/"},"RKE documentation on DNS provider")," for more information how to configure a different DNS provider. CoreDNS can only be used on Kubernetes v1.12.0 and higher."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rancher version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,i.kt)("th",{parentName:"tr",align:null},"Default DNS provider"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.14.0 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"CoreDNS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.13.x and lower"),(0,i.kt)("td",{parentName:"tr",align:null},"kube-dns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.4 and lower"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"kube-dns")))),(0,i.kt)("h1",{id:"rancher-specific-parameters-in-yaml"},"Rancher Specific Parameters in YAML"),(0,i.kt)("p",null,"Besides the RKE config file options, there are also Rancher specific settings that can be configured in the Config File (YAML):"),(0,i.kt)("h3",{id:"docker_root_dir"},"docker_root_dir"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#docker-root-directory"},"Docker Root Directory"),"."),(0,i.kt)("h3",{id:"enable_cluster_monitoring"},"enable_cluster_monitoring"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/"},"Cluster Monitoring"),"."),(0,i.kt)("h3",{id:"enable_network_policy"},"enable_network_policy"),(0,i.kt)("p",null,"Option to enable or disable Project Network Isolation."),(0,i.kt)("p",null,"Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,i.kt)("h3",{id:"local_cluster_auth_endpoint"},"local_cluster_auth_endpoint"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'local_cluster_auth_endpoint:\n  enabled: true\n  fqdn: "FQDN"\n  ca_certs: "BASE64_CACERT"\n')),(0,i.kt)("h3",{id:"custom-network-plug-in"},"Custom Network Plug-in"),(0,i.kt)("p",null,"You can add a custom network plug-in by using the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/"},"user-defined add-on functionality")," of RKE. You define any add-on that you want deployed after the Kubernetes cluster is deployed."),(0,i.kt)("p",null,"There are two ways that you can specify an add-on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#in-line-add-ons"},"In-line Add-ons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#referencing-yaml-files-for-add-ons"},"Referencing YAML Files for Add-ons"))),(0,i.kt)("p",null,"For an example of how to configure a custom network plug-in by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/custom-network-plugin-example"},"RKE documentation.")))}d.isMDXComponent=!0}}]);