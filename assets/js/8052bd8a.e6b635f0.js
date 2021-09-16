"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[767],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),v=i,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58875:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={title:"Cluster Drivers",position:1},l=void 0,c={unversionedId:"admin-settings/drivers/cluster-drivers",id:"admin-settings/drivers/cluster-drivers",isDocsHomePage:!1,title:"Cluster Drivers",description:"Cluster drivers are used to create clusters in a hosted Kubernetes provider, such as Google GKE. The availability of which cluster driver to display when creating clusters is defined by the cluster driver's status. Only active cluster drivers will be displayed as an option for creating clusters. By default, Rancher is packaged with several existing cloud provider cluster drivers, but you can also add custom cluster drivers to Rancher.",source:"@site/docs/admin-settings/drivers/cluster-drivers.md",sourceDirName:"admin-settings/drivers",slug:"/admin-settings/drivers/cluster-drivers",permalink:"/rancher-docusaurus/next/admin-settings/drivers/cluster-drivers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/drivers/cluster-drivers.md",tags:[],version:"current",frontMatter:{title:"Cluster Drivers",position:1},sidebar:"tutorialSidebar",previous:{title:"Configuring a Global Default Private Registry",permalink:"/rancher-docusaurus/next/admin-settings/config-private-registry"},next:{title:"Provisioning Drivers",permalink:"/rancher-docusaurus/next/admin-settings/drivers/index"}},u=[{value:"Managing Cluster Drivers",id:"managing-cluster-drivers",children:[]},{value:"Activating/Deactivating Cluster Drivers",id:"activatingdeactivating-cluster-drivers",children:[]},{value:"Adding Custom Cluster Drivers",id:"adding-custom-cluster-drivers",children:[{value:"Developing your own Cluster Driver",id:"developing-your-own-cluster-driver",children:[]}]}],d={toc:u};function p(e){var r=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cluster drivers are used to create clusters in a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/hosted-kubernetes-clusters/"},"hosted Kubernetes provider"),", such as Google GKE. The availability of which cluster driver to display when creating clusters is defined by the cluster driver's status. Only ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," cluster drivers will be displayed as an option for creating clusters. By default, Rancher is packaged with several existing cloud provider cluster drivers, but you can also add custom cluster drivers to Rancher."),(0,a.kt)("p",null,"If there are specific cluster drivers that you do not want to show your users, you may deactivate those cluster drivers within Rancher and they will not appear as an option for cluster creation."),(0,a.kt)("h3",{id:"managing-cluster-drivers"},"Managing Cluster Drivers"),(0,a.kt)("p",null,">",(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")," To create, edit, or delete cluster drivers, you need ",(0,a.kt)("em",{parentName:"p"},"one")," of the following permissions:\n",">","\n",">","- ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"Administrator Global Permissions"),"\n",">","- ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"Manage Cluster Drivers")," role assigned."),(0,a.kt)("h2",{id:"activatingdeactivating-cluster-drivers"},"Activating/Deactivating Cluster Drivers"),(0,a.kt)("p",null,"By default, Rancher only activates drivers for the most popular cloud providers, Google GKE, Amazon EKS and Azure AKS. If you want to show or hide any node driver, you can change its status."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"p"},"Drivers"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Drivers")," tab, select the driver that you wish to activate or deactivate and click ",(0,a.kt)("strong",{parentName:"p"},"\u22ee ",">"," Activate")," or ",(0,a.kt)("strong",{parentName:"p"},"\u22ee ",">"," Deactivate"),"."))),(0,a.kt)("h2",{id:"adding-custom-cluster-drivers"},"Adding Custom Cluster Drivers"),(0,a.kt)("p",null,"If you want to use a cluster driver that Rancher doesn't support out-of-the-box, you can add the provider's driver in order to start using them to create ",(0,a.kt)("em",{parentName:"p"},"hosted")," kubernetes clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"li"},"Drivers"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Drivers")," tab, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster Driver"),"."),(0,a.kt)("li",{parentName:"ol"},"Complete the ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster Driver")," form. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("h3",{id:"developing-your-own-cluster-driver"},"Developing your own Cluster Driver"),(0,a.kt)("p",null,"In order to develop cluster driver to add to Rancher, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-plugins/kontainer-engine-driver-example"},"example"),"."))}p.isMDXComponent=!0}}]);