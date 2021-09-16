"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[51639],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62728:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",metaDescription:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",position:2225},c=void 0,u={unversionedId:"cluster-provisioning/rke-clusters/custom-nodes/index",id:"version-2.4.15/cluster-provisioning/rke-clusters/custom-nodes/index",isDocsHomePage:!1,title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",source:"@site/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/custom-nodes/index.md",sourceDirName:"cluster-provisioning/rke-clusters/custom-nodes",slug:"/cluster-provisioning/rke-clusters/custom-nodes/index",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/custom-nodes/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/custom-nodes/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",metaDescription:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",position:2225},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Rancher Agent Options",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/custom-nodes/agent-options"},next:{title:"Launching Kubernetes with Rancher",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/index"}},l=[{value:"1. Provision a Linux Host",id:"1-provision-a-linux-host",children:[]},{value:"2. Create the Custom Cluster",id:"2-create-the-custom-cluster",children:[]},{value:"3. Amazon Only: Tag Resources",id:"3-amazon-only-tag-resources",children:[]}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you create a custom cluster, Rancher uses RKE (the Rancher Kubernetes Engine) to create a Kubernetes cluster in on-prem bare-metal servers, on-prem virtual machines, or in any node hosted by an infrastructure provider."),(0,a.kt)("p",null,"To use this option you'll need access to servers you intend to use in your Kubernetes cluster. Provision each server according to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/node-requirements"},"requirements"),", which includes some hardware specifications and Docker. After you install Docker on each server, you willl also run the command provided in the Rancher UI on each server to turn each one into a Kubernetes node."),(0,a.kt)("p",null,"This section describes how to set up a custom cluster."),(0,a.kt)("h1",{id:"creating-a-cluster-with-custom-nodes"},"Creating a Cluster with Custom Nodes"),(0,a.kt)("p",null,">",(0,a.kt)("strong",{parentName:"p"},"Want to use Windows hosts as Kubernetes workers?"),"\n",">","\n",">","See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/windows-clusters/"},"Configuring Custom Clusters for Windows")," before you start."),(0,a.kt)("p",null,"\\\x3c!-- TOC --",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-provision-a-linux-host"},"1. Provision a Linux Host")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-create-the-custom-cluster"},"2. Create the Custom Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-amazon-only-tag-resources"},"3. Amazon Only: Tag Resources"))),(0,a.kt)("p",null,"\\\x3c!-- /TOC --",">"),(0,a.kt)("h3",{id:"1-provision-a-linux-host"},"1. Provision a Linux Host"),(0,a.kt)("p",null,"Begin creation of a custom cluster by provisioning a Linux host. Your host can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A cloud-host virtual machine (VM)"),(0,a.kt)("li",{parentName:"ul"},"An on-prem VM"),(0,a.kt)("li",{parentName:"ul"},"A bare-metal server")),(0,a.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cleaning-cluster-nodes/"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,a.kt)("p",null,"Provision the host according to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/node-requirements"},"installation requirements")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/production"},"checklist for production-ready clusters.")),(0,a.kt)("p",null,"If you're using Amazon EC2 as your host and want to use the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"dual-stack")," feature, there are additional ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"requirements")," when provisioning the host."),(0,a.kt)("h3",{id:"2-create-the-custom-cluster"},"2. Create the Custom Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Custom"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"Cluster Configuration")," section to choose the version of Kubernetes, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"p"},"Show advanced options"),"."),(0,a.kt)("p",{parentName:"li"},">",(0,a.kt)("strong",{parentName:"p"},"Using Windows nodes as Kubernetes workers?"),"\n",">","\n",">","- See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/windows-clusters/"},"Enable the Windows Support Option"),".\n",">","- The only Network Provider available for clusters with Windows support is Flannel.\n",">","\n",">",(0,a.kt)("strong",{parentName:"p"},"Dual-stack on Amazon EC2:")," If you're using Amazon EC2 as your host and want to use the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"dual-stack")," feature, there are additional ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"requirements")," when configuring RKE.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\\<a id="step-6"',">","\\</a",">","Click ",(0,a.kt)("strong",{parentName:"p"},"Next"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"Node Role"),", choose the roles that you want filled by a cluster node. You must provision at least one node for each role: ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"control plane"),". All three roles are required for a custom cluster to finish provisioning. For more information on roles, see ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/concepts/#roles-for-nodes-in-kubernetes-clusters"},"this section.")),(0,a.kt)("p",{parentName:"li"},">",(0,a.kt)("strong",{parentName:"p"},"Notes:"),"\n",">","\n",">","- Using Windows nodes as Kubernetes workers? See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/windows-clusters/"},"this section"),".\n",">","- Bare-Metal Server Reminder: If you plan on dedicating bare-metal servers to each role, you must provision a bare-metal server for each role (i.e. provision multiple bare-metal servers).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\\<a id="step-8"',">","\\</a",">",(0,a.kt)("strong",{parentName:"p"},"Optional"),": Click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/rancher-agents/"},"Show advanced options"))," to specify IP address(es) to use when registering the node, override the hostname of the node, or to add ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," or ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," to the node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard."),(0,a.kt)("p",{parentName:"li"},">",(0,a.kt)("strong",{parentName:"p"},"Note:")," Repeat steps 7-10 if you want to dedicate specific hosts to specific node roles. Repeat the steps as many times as needed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you finish running the command(s) on your Linux host(s), click ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," "),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h3",{id:"3-amazon-only-tag-resources"},"3. Amazon Only: Tag Resources"),(0,a.kt)("p",null,"If you have configured your cluster to use Amazon as ",(0,a.kt)("strong",{parentName:"p"},"Cloud Provider"),", tag your AWS resources with a cluster ID."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"},"Amazon Documentation: Tagging Your Amazon EC2 Resources")),(0,a.kt)("p",null,">",(0,a.kt)("strong",{parentName:"p"},"Note:")," You can use Amazon EC2 instances without configuring a cloud provider in Kubernetes. You only have to configure the cloud provider if you want to use specific Kubernetes cloud provider functionality. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/"},"Kubernetes Cloud Providers")),(0,a.kt)("p",null,"The following resources need to be tagged with a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterID"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Nodes"),": All hosts added in Rancher.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Subnet"),": The subnet used for your cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Security Group"),": The security group used for your cluster."),(0,a.kt)("p",{parentName:"li"},">",(0,a.kt)("strong",{parentName:"p"},"Note:")," Do not tag multiple security groups. Tagging multiple groups generates an error when creating Elastic Load Balancer."))),(0,a.kt)("p",null,"The tag that should be used is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Key=kubernetes.io/cluster/\\<CLUSTERID\\>, Value=owned\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\\<CLUSTERID\\>")," can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to ",(0,a.kt)("inlineCode",{parentName:"p"},"owned")," informs the cluster that all resources tagged with the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<CLUSTERID\\>")," are owned and managed by this cluster."),(0,a.kt)("p",null,"If you share resources between clusters, you can change the tag to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Key=kubernetes.io/cluster/CLUSTERID, Value=shared\n")),(0,a.kt)("h1",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/kubectl/#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/kubectl/#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")))}m.isMDXComponent=!0}}]);