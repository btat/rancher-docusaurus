"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[1152],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5813:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Overriding the Default Limit for a Namespace",position:2},s=void 0,u={unversionedId:"project-admin/resource-quotas/override-namespace-default",id:"project-admin/resource-quotas/override-namespace-default",isDocsHomePage:!1,title:"Overriding the Default Limit for a Namespace",description:"Although the Namespace Default Limit propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace.",source:"@site/docs/project-admin/resource-quotas/override-namespace-default.md",sourceDirName:"project-admin/resource-quotas",slug:"/project-admin/resource-quotas/override-namespace-default",permalink:"/rancher-docusaurus/project-admin/resource-quotas/override-namespace-default",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/project-admin/resource-quotas/override-namespace-default.md",tags:[],version:"current",frontMatter:{title:"Overriding the Default Limit for a Namespace",position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Container Default Resource Limits",permalink:"/rancher-docusaurus/project-admin/resource-quotas/override-container-default"},next:{title:"Resource Quota Type Reference",permalink:"/rancher-docusaurus/project-admin/resource-quotas/quota-type-reference"}},p=[{value:"Editing Namespace Resource Quotas",id:"editing-namespace-resource-quotas",children:[]}],m={toc:p};function l(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although the ",(0,o.kt)("strong",{parentName:"p"},"Namespace Default Limit")," propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace."),(0,o.kt)("p",null,"In the diagram below, the Rancher administrator has a resource quota in effect for their project. However, the administrator wants to override the namespace limits for ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that it has more resources available. Therefore, the administrator ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/projects-and-namespaces/"},"raises the namespace limits")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that the namespace can access more resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},"\\<sup\\>Namespace Default Limit Override\\</sup\\>\n![Namespace Default Limit Override](./assets/img/rancher/rancher-resource-quota-override.svg)\n")),(0,o.kt)("p",null,"How to: ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/projects-and-namespaces/"},"Editing Namespace Resource Quotas")),(0,o.kt)("h3",{id:"editing-namespace-resource-quotas"},"Editing Namespace Resource Quotas"),(0,o.kt)("p",null,"If there is a resource quota configured for a project, you can override the namespace default limit to provide a specific namespace with access to more (or less) project resources."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to edit a namespace resource quota and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Cluster ",">"," Projects/Namespaces"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the namespace for which you want to edit the resource quota. Click ",(0,o.kt)("strong",{parentName:"p"},"\u22ee ",">"," Edit Config"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the resource limits.  These limits determine the resources available to the namespace. The limits must be set within the configured project limits."),(0,o.kt)("p",{parentName:"li"},"For more information about each ",(0,o.kt)("strong",{parentName:"p"},"Resource Type"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/project-admin/resource-quotas/quota-type-reference/"},"the type reference"),"."),(0,o.kt)("p",{parentName:"li"},">",(0,o.kt)("strong",{parentName:"p"},"Note:"),"\n",">","\n",">","- If a resource quota is not configured for the project, these options will not be available.\n",">","- If you enter limits that exceed the configured project limits, Rancher will not let you save your edits."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your override is applied to the namespace's resource quota."))}l.isMDXComponent=!0}}]);