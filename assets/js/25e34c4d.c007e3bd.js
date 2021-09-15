"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[9670],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4862:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={title:"Resource Quota Type Reference",position:4},c=void 0,s={unversionedId:"project-admin/resource-quotas/quota-type-reference",id:"project-admin/resource-quotas/quota-type-reference",isDocsHomePage:!1,title:"Resource Quota Type Reference",description:"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types.",source:"@site/docs/project-admin/resource-quotas/quota-type-reference.md",sourceDirName:"project-admin/resource-quotas",slug:"/project-admin/resource-quotas/quota-type-reference",permalink:"/rancher-docusaurus/project-admin/resource-quotas/quota-type-reference",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/project-admin/resource-quotas/quota-type-reference.md",tags:[],version:"current",frontMatter:{title:"Resource Quota Type Reference",position:4},sidebar:"tutorialSidebar",previous:{title:"Overriding the Default Limit for a Namespace",permalink:"/rancher-docusaurus/project-admin/resource-quotas/override-namespace-default"},next:{title:"How Resource Quotas Work in Rancher Projects",permalink:"/rancher-docusaurus/project-admin/resource-quotas/quotas-for-projects"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Limit*"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU (in ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"millicores"),") allocated to the project/namespace.\\<sup",">","1\\</sup",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Reservation*"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of CPU (in millicores) guaranteed to the project/namespace.\\<sup",">","1\\</sup",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Limit*"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory (in bytes) allocated to the project/namespace.\\<sup",">","1\\</sup",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Reservation*"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of memory (in bytes) guaranteed to the project/namespace.\\<sup",">","1\\</sup",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Reservation"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of storage (in gigabytes) guaranteed to the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services Load Balancers"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of load balancers services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services Node Ports"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of node port services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pods"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of pods that can exist in the project/namespace in a non-terminal state (i.e., pods with a state of ",(0,o.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," equal to true).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigMaps"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of ConfigMaps that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Persistent Volume Claims"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of persistent volume claims that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Replications Controllers"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of replication controllers that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Secrets"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of secrets that can exist in the project/namespace.")))),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"\\<sup",">","*\\</sup",">")," When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. A container default resource limit can be set at the same time to avoid the need to explicitly set these limits for every workload. See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes documentation")," for more details on why this is required."))}m.isMDXComponent=!0}}]);