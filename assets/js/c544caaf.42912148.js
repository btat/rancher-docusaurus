"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[38630],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13386:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Creating an Azure Cluster",shortTitle:"Azure",position:2220},s=void 0,c={unversionedId:"cluster-provisioning/rke-clusters/node-pools/azure/index",id:"version-2.4.15/cluster-provisioning/rke-clusters/node-pools/azure/index",isDocsHomePage:!1,title:"Creating an Azure Cluster",description:"In this section, you'll learn how to install an RKE Kubernetes cluster in Azure through Rancher.",source:"@site/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/node-pools/azure/index.md",sourceDirName:"cluster-provisioning/rke-clusters/node-pools/azure",slug:"/cluster-provisioning/rke-clusters/node-pools/azure/index",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/node-pools/azure/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-provisioning/rke-clusters/node-pools/azure/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Creating an Azure Cluster",shortTitle:"Azure",position:2220},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Azure Node Template Configuration",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/node-pools/azure/azure-node-template-config"},next:{title:"DigitalOcean Node Template Configuration",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config"}},u=[{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",children:[]},{value:"2. Create a node template with your cloud credentials",id:"2-create-a-node-template-with-your-cloud-credentials",children:[]},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",children:[]},{value:"Optional Next Steps",id:"optional-next-steps",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you'll learn how to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Azure through Rancher."),(0,a.kt)("p",null,"First, you will set up your Azure cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in Azure. "),(0,a.kt)("p",null,"Then you will create an Azure cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,a.kt)("p",null,"For more information on configuring the Kubernetes cluster that Rancher will install on the Azure nodes, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/options"},"RKE cluster configuration reference.")),(0,a.kt)("p",null,"For more information on configuring Azure node templates, refer to the ",(0,a.kt)("a",{parentName:"p",href:"./azure-node-template-config"},"Azure node template configuration reference.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparation-in-azure"},"Preparation in Azure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-an-azure-cluster"},"Creating an Azure Cluster"))),(0,a.kt)("h1",{id:"preparation-in-azure"},"Preparation in Azure"),(0,a.kt)("p",null,"Before creating a node template in Rancher using a cloud infrastructure such as Azure, we must configure Rancher to allow the manipulation of resources in an Azure subscription."),(0,a.kt)("p",null,"To do this, we will first create a new Azure ",(0,a.kt)("strong",{parentName:"p"},"service principal (SP)")," in Azure ",(0,a.kt)("strong",{parentName:"p"},"Active Directory (AD)"),", which, in Azure, is an application user who has permission to manage Azure resources."),(0,a.kt)("p",null,"The following is a template ",(0,a.kt)("inlineCode",{parentName:"p"},"az cli")," script that you have to run for creating an service principal, where you have to enter your SP name, role, and scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'az ad sp create-for-rbac \\\n  --name="\\<Rancher ServicePrincipal name\\>" \\\n  --role="Contributor" \\\n  --scopes="/subscriptions/\\<subscription Id\\>"\n')),(0,a.kt)("p",null,"The creation of this service principal returns three pieces of identification information, ",(0,a.kt)("em",{parentName:"p"},"The application ID, also called the client ID"),", ",(0,a.kt)("em",{parentName:"p"},"The client secret"),", and ",(0,a.kt)("em",{parentName:"p"},"The tenant ID"),". This information will be used when you create a node template for Azure."),(0,a.kt)("h1",{id:"creating-an-azure-cluster"},"Creating an Azure Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials"},"Create a node template with your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,a.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your Azure credentials."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters. "),(0,a.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials"},"2. Create a node template with your cloud credentials"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"node template")," for Azure will allow Rancher to provision new nodes in Azure. Node templates can be reused for other clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"RKE1 Configuration ",">"," Node Templates"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Fill out a node template for Azure. For help filling out the form, refer to ",(0,a.kt)("a",{parentName:"li",href:"./azure-node-template-config"},"Azure Node Template Configuration."))),(0,a.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,a.kt)("p",null,"Use Rancher to create a Kubernetes cluster in Azure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices, see ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Configuration")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options"),". For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/options"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," "),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/kubectl/#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/kubectl/#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")))}d.isMDXComponent=!0}}]);