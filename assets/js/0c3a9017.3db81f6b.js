"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[82310],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Recommended Cluster Architecture",position:1},s=void 0,u={unversionedId:"cluster-provisioning/production/recommended-architecture",id:"version-2.4.15/cluster-provisioning/production/recommended-architecture",isDocsHomePage:!1,title:"Recommended Cluster Architecture",description:"There are three roles that can be assigned to nodes: etcd, controlplane and worker.",source:"@site/versioned_docs/version-2.4.15/cluster-provisioning/production/recommended-architecture.md",sourceDirName:"cluster-provisioning/production",slug:"/cluster-provisioning/production/recommended-architecture",permalink:"/rancher-docusaurus/cluster-provisioning/production/recommended-architecture",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-provisioning/production/recommended-architecture.md",tags:[],version:"2.4.15",frontMatter:{title:"Recommended Cluster Architecture",position:1},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Roles for Nodes in Kubernetes",permalink:"/rancher-docusaurus/cluster-provisioning/production/nodes-and-roles"},next:{title:"Registering Existing Clusters",permalink:"/rancher-docusaurus/cluster-provisioning/registered-clusters"}},d=[{value:"Number of Controlplane Nodes",id:"number-of-controlplane-nodes",children:[]},{value:"Number of etcd Nodes",id:"number-of-etcd-nodes",children:[]},{value:"Number of Worker Nodes",id:"number-of-worker-nodes",children:[]},{value:"Why Production Requirements are Different for the Rancher Cluster and the Clusters Running Your Applications",id:"why-production-requirements-are-different-for-the-rancher-cluster-and-the-clusters-running-your-applications",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three roles that can be assigned to nodes: ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),". "),(0,a.kt)("h1",{id:"separating-worker-nodes-from-nodes-with-other-roles"},"Separating Worker Nodes from Nodes with Other Roles"),(0,a.kt)("p",null,"When designing your cluster(s), you have two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use dedicated nodes for each role. This ensures resource availability for the components needed for the specified role. It also strictly isolates network traffic between each of the roles according to the ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/node-requirements/#networking-requirements"},"port requirements"),". "),(0,a.kt)("li",{parentName:"ul"},"Assign the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," roles to the same nodes. These nodes must meet the hardware requirements for both roles.")),(0,a.kt)("p",null,"In either case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role should not be used or added to nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,a.kt)("p",null,"Therefore, each node should have one of the following role configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},"Both ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker"))),(0,a.kt)("h1",{id:"recommended-number-of-nodes-with-each-role"},"Recommended Number of Nodes with Each Role"),(0,a.kt)("p",null,"The cluster should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least three nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," to survive losing one node. Increase this count for higher node fault toleration, and spread them across (availability) zones to provide even better fault tolerance."),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," for master component high availability."),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"worker")," for workload rescheduling upon node failure.")),(0,a.kt)("p",null,"For more information on what each role is used for, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/production/nodes-and-roles"},"section on roles for nodes in Kubernetes.")),(0,a.kt)("h3",{id:"number-of-controlplane-nodes"},"Number of Controlplane Nodes"),(0,a.kt)("p",null,"Adding more than one node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role makes every master component highly available."),(0,a.kt)("h3",{id:"number-of-etcd-nodes"},"Number of etcd Nodes"),(0,a.kt)("p",null,"The number of nodes that you can lose at once while maintaining cluster availability is determined by the number of nodes assigned the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. For a cluster with n members, the minimum is (n/2)+1. Therefore, we recommend creating an  ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node in 3 different availability zones within a region to survive the loss of one availability zone. If you use only two zones, you can only survive the loss of the zone where you don't lose the majority of nodes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nodes with ",(0,a.kt)("inlineCode",{parentName:"th"},"etcd")," role"),(0,a.kt)("th",{parentName:"tr",align:null},"Majority"),(0,a.kt)("th",{parentName:"tr",align:null},"Failure Tolerance"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"4"))))),(0,a.kt)("p",null,"References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/faq/#what-is-failure-tolerance"},"Official etcd documentation on optimal etcd cluster size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/"},"Official Kubernetes documentation on operating etcd clusters for Kubernetes"))),(0,a.kt)("h3",{id:"number-of-worker-nodes"},"Number of Worker Nodes"),(0,a.kt)("p",null,"Adding more than one node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role will make sure your workloads can be rescheduled if a node fails."),(0,a.kt)("h3",{id:"why-production-requirements-are-different-for-the-rancher-cluster-and-the-clusters-running-your-applications"},"Why Production Requirements are Different for the Rancher Cluster and the Clusters Running Your Applications"),(0,a.kt)("p",null,"You may have noticed that our ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/"},"Kubernetes Install")," instructions do not meet our definition of a production-ready cluster, as there are no dedicated nodes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role. However, for your Rancher installation, this three node cluster is valid, because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It allows one ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," node failure."),(0,a.kt)("li",{parentName:"ul"},"It maintains multiple instances of the master components by having multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes."),(0,a.kt)("li",{parentName:"ul"},"No other workloads than Rancher itself should be created on this cluster.")),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes: Master Components"))))}p.isMDXComponent=!0}}]);