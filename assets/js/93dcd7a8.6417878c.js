"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[58913],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Rancher Agents",position:2400},s=void 0,c={unversionedId:"cluster-provisioning/rke-clusters/rancher-agents",id:"cluster-provisioning/rke-clusters/rancher-agents",isDocsHomePage:!1,title:"Rancher Agents",description:"There are two different agent resources deployed on Rancher managed clusters:",source:"@site/docs/cluster-provisioning/rke-clusters/rancher-agents.md",sourceDirName:"cluster-provisioning/rke-clusters",slug:"/cluster-provisioning/rke-clusters/rancher-agents",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/rancher-agents",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cluster-provisioning/rke-clusters/rancher-agents.md",tags:[],version:"current",frontMatter:{title:"Rancher Agents",position:2400},sidebar:"tutorialSidebar",previous:{title:"RKE Cluster Configuration",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/options"},next:{title:"Configuration for Storage Classes in Azure",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/windows-clusters/azure-storageclass"}},u=[{value:"cattle-cluster-agent",id:"cattle-cluster-agent",children:[]},{value:"cattle-node-agent",id:"cattle-node-agent",children:[]},{value:"Scheduling rules",id:"scheduling-rules",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two different agent resources deployed on Rancher managed clusters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cattle-cluster-agent"},"cattle-cluster-agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cattle-node-agent"},"cattle-node-agent"))),(0,o.kt)("p",null,"For a conceptual overview of how the Rancher server provisions clusters and communicates with them, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"architecture")),(0,o.kt)("h3",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is used to connect to the Kubernetes API of ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"Rancher Launched Kubernetes")," clusters. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is deployed using a Deployment resource."),(0,o.kt)("h3",{id:"cattle-node-agent"},"cattle-node-agent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used to interact with nodes in a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"Rancher Launched Kubernetes")," cluster when performing cluster operations. Examples of cluster operations are upgrading Kubernetes version and creating/restoring etcd snapshots. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is deployed using a DaemonSet resource to make sure it runs on every node. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used as fallback option to connect to the Kubernetes API of ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"Rancher Launched Kubernetes")," clusters when ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is unavailable."),(0,o.kt)("h3",{id:"scheduling-rules"},"Scheduling rules"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," uses a fixed fixed set of tolerations (listed below, if no controlplane nodes are visible in the cluster) or dynamically added tolerations based on taints applied to the controlplane nodes. This structure allows for ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions"},"Taint based Evictions")," to work properly for ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),". The default tolerations are described below. If controlplane nodes are present the cluster, the tolerations will be replaced with tolerations matching the taints on the controlplane nodes."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,o.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cattle-cluster-agent")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Note:")," These are the default tolerations, and will be replaced by tolerations matching taints applied to controlplane nodes.",(0,o.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule``key:node-role.kubernetes.io/controlplane``value:true``effect:NoSchedule``key:node-role.kubernetes.io/control-plane``operator:Exists``effect:NoSchedule``key:node-role.kubernetes.io/master``operator:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cattle-node-agent")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," Deployment has preferred scheduling rules using ",(0,o.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution"),", favoring to be scheduled on nodes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"controlplane")," node. When there are no controlplane nodes visible in the cluster (this is usually the case when using ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/hosted-kubernetes-clusters/"},"Clusters from Hosted Kubernetes Providers"),"), you can add the label ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle.io/cluster-agent=true")," on a node to prefer scheduling the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," pod to that node."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"Kubernetes: Assigning Pods to Nodes")," to find more information about scheduling rules."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," configuration is shown in the table below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Weight"),(0,o.kt)("th",{parentName:"tr",align:null},"Expression"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/control-plane:In:"true"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/master:In:"true"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'cattle.io/cluster-agent:In:"true"'))))))}d.isMDXComponent=!0}}]);