"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[66803],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84283:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Pod Security Policies",position:5600},l=void 0,s={unversionedId:"project-admin/pod-security-policies",id:"version-2.4.15/project-admin/pod-security-policies",isDocsHomePage:!1,title:"Pod Security Policies",description:"\\> These cluster options are only available for clusters in which Rancher has launched Kubernetes.",source:"@site/versioned_docs/version-2.4.15/project-admin/pod-security-policies.md",sourceDirName:"project-admin",slug:"/project-admin/pod-security-policies",permalink:"/rancher-docusaurus/project-admin/pod-security-policies",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/project-admin/pod-security-policies.md",tags:[],version:"2.4.15",frontMatter:{title:"Pod Security Policies",position:5600},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Rancher's CI/CD Pipelines",permalink:"/rancher-docusaurus/project-admin/pipelines"},next:{title:"Adding Users to Projects",permalink:"/rancher-docusaurus/project-admin/project-members"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Applying a Pod Security Policy",id:"applying-a-pod-security-policy",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,">"," These cluster options are only available for ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"clusters in which Rancher has launched Kubernetes"),".  "),(0,i.kt)("p",null,"You can always assign a pod security policy (PSP) to an existing project if you didn't assign one during creation."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to an existing project, you must have a PSP available for assignment. For instruction, see ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/"},"Creating Pod Security Policies"),"."),(0,i.kt)("li",{parentName:"ul"},"Assign a default Pod Security Policy to the project's cluster. You can't assign a PSP to a project until one is already applied to the cluster. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/pod-security-policy"},"the documentation about adding a pod security policy to a cluster"),". ")),(0,i.kt)("h3",{id:"applying-a-pod-security-policy"},"Applying a Pod Security Policy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to move a namespace and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Cluster ",">"," Projects/Namespaces"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the project that you want to add a PSP to. From that project, select ",(0,i.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Pod Security Policy")," drop-down, select the PSP you want to apply to the project.\nAssigning a PSP to a project will:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,i.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,i.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The PSP is applied to the project and any namespaces added to the project."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Note:")," Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked to determine if they comply with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP."))}d.isMDXComponent=!0}}]);