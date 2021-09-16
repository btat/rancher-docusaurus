"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[6900],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46696:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",position:3026},p=void 0,s={unversionedId:"k8s-in-rancher/workloads/deploy-workloads",id:"k8s-in-rancher/workloads/deploy-workloads",isDocsHomePage:!1,title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",source:"@site/docs/k8s-in-rancher/workloads/deploy-workloads.md",sourceDirName:"k8s-in-rancher/workloads",slug:"/k8s-in-rancher/workloads/deploy-workloads",permalink:"/rancher-docusaurus/next/k8s-in-rancher/workloads/deploy-workloads",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/k8s-in-rancher/workloads/deploy-workloads.md",tags:[],version:"current",frontMatter:{title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",position:3026},sidebar:"tutorialSidebar",previous:{title:"Adding a Sidecar",permalink:"/rancher-docusaurus/next/k8s-in-rancher/workloads/add-a-sidecar"},next:{title:"Kubernetes Workloads and Pods",permalink:"/rancher-docusaurus/next/k8s-in-rancher/workloads/index"}},c=[],m={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy a workload to run an application in one or more containers."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where you want to upgrade a workload and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Workload"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the type of workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the namespace where the workload will be deployed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Container Image")," field, enter the name of the Docker image that you want to deploy to the project, optionally prefacing it with the registry host (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"quay.io"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.gitlab.com"),", etc.). During deployment, Rancher pulls this image from the specified public or private registry. If no registry host is provided, Rancher will pull the image from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub"),". Enter the name exactly as it appears in the registry server, including any required path, and optionally including the desired tag (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.gitlab.com/user/path/image:tag"),"). If no tag is provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag will be automatically used.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Either select an existing namespace, or click ",(0,o.kt)("strong",{parentName:"p"},"Add to a new namespace")," and enter a new namespace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Port")," to enter a port mapping, which enables access to the application inside and outside of the cluster . For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/workloads/#services"},"Services"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the remaining options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Environment Variables")),(0,o.kt)("p",{parentName:"li"},"  Use this section to either specify environment variables for your workload to consume on the fly, or to pull them from another source, such as a secret or ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/configmaps/"},"ConfigMap"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node Scheduling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Health Check"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Volumes")),(0,o.kt)("p",{parentName:"li"},"  Use this section to add storage for your workload. You can manually specify the volume that you want to add, use a persistent volume claim to dynamically create a volume for the workload, or read data for a volume to use from a file such as a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/configmaps/"},"ConfigMap"),"."),(0,o.kt)("p",{parentName:"li"},"  When you are deploying a Stateful Set, you should use a Volume Claim Template when using Persistent Volumes. This will ensure that Persistent Volumes are created dynamically when you scale your Stateful Set.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scaling/Upgrade Policy")),(0,o.kt)("p",{parentName:"li"},"  ",">",(0,o.kt)("strong",{parentName:"p"},"Amazon Note for Volumes:"),"\n",">","\n",">"," To mount an Amazon EBS volume:\n",">","\n",">","- In ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"Amazon AWS"),", the nodes must be in the same Availability Zone and possess IAM permissions to attach/unattach volumes.\n",">","\n",">","- The cluster must be using the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#aws"},"AWS cloud provider")," option. For more information on enabling this option see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/ec2/"},"Creating an Amazon EC2 Cluster")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/custom-nodes"},"Creating a Custom Cluster"),"."))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Show Advanced Options")," and configure:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Networking")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels & Annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security and Host Config")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The workload is deployed to the chosen namespace. You can view the workload's status from the project's ",(0,o.kt)("strong",{parentName:"p"},"Workloads")," view."))}u.isMDXComponent=!0}}]);