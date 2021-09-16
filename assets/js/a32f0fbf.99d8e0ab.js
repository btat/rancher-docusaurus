"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[80515],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),y=o,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29650:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Adding a Pod Security Policy",position:80},s=void 0,p={unversionedId:"cluster-admin/pod-security-policy",id:"cluster-admin/pod-security-policy",isDocsHomePage:!1,title:"Adding a Pod Security Policy",description:"\\> Prerequisite: The options below are available only for clusters that are launched using RKE.",source:"@site/docs/cluster-admin/pod-security-policy.md",sourceDirName:"cluster-admin",slug:"/cluster-admin/pod-security-policy",permalink:"/rancher-docusaurus/next/cluster-admin/pod-security-policy",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cluster-admin/pod-security-policy.md",tags:[],version:"current",frontMatter:{title:"Adding a Pod Security Policy",position:80},sidebar:"tutorialSidebar",previous:{title:"Assigning Pod Security Policies",permalink:"/rancher-docusaurus/next/cluster-admin/pod-security-policies"},next:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/rancher-docusaurus/next/cluster-admin/projects-and-namespaces"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,">"," ",(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," The options below are available only for clusters that are ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"launched using RKE.")," "),(0,i.kt)("p",null,"When your cluster is running pods with security-sensitive configurations, assign it a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/"},"pod security policy"),", which is a set of rules that monitors the conditions and settings in your pods. If a pod doesn't meet the rules specified in your policy, the policy stops it from running."),(0,i.kt)("p",null,"You can assign a pod security policy when you provision a cluster. However, if you need to relax or restrict security for your pods later, you can update the policy while editing your cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster to which you want to apply a pod security policy and click ",(0,i.kt)("strong",{parentName:"p"},"\u22ee ",">"," Edit Config"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From ",(0,i.kt)("strong",{parentName:"p"},"Pod Security Policy Support"),", select ",(0,i.kt)("strong",{parentName:"p"},"Enabled"),"."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note:")," This option is only available for clusters ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"provisioned by RKE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down, select the policy you want to apply to the cluster."),(0,i.kt)("p",{parentName:"li"},"Rancher ships with ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/#default-pod-security-policies"},"policies")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unrestricted"),", although you can ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/pod-security-policies/#default-pod-security-policies"},"create custom policies")," as well.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The pod security policy is applied to the cluster and any projects within the cluster."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Note:")," Workloads already running before assignment of a pod security policy are grandfathered in. Even if they don't meet your pod security policy, workloads running before assignment of the policy continue to run.\n",">","\n",">","To check if a running workload passes your pod security policy, clone or upgrade it."))}d.isMDXComponent=!0}}]);