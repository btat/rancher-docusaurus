"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[9840],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=i,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5063:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={title:"Configuring a Global Default Private Registry",position:40},l=void 0,u={unversionedId:"admin-settings/config-private-registry",id:"admin-settings/config-private-registry",isDocsHomePage:!1,title:"Configuring a Global Default Private Registry",description:"You might want to use a private Docker registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters.",source:"@site/docs/admin-settings/config-private-registry.md",sourceDirName:"admin-settings",slug:"/admin-settings/config-private-registry",permalink:"/rancher-docusaurus/admin-settings/config-private-registry",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/config-private-registry.md",tags:[],version:"current",frontMatter:{title:"Configuring a Global Default Private Registry",position:40},sidebar:"tutorialSidebar",previous:{title:"Cluster Templates",permalink:"/rancher-docusaurus/admin-settings/cluster-templates"},next:{title:"Cluster Drivers",permalink:"/rancher-docusaurus/admin-settings/drivers/cluster-drivers"}},c=[],p={toc:c};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You might want to use a private Docker registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters."),(0,a.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the global default registry through the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,a.kt)("p",null,"This section is about configuring the global default private registry, and focuses on how to configure the registry from the Rancher UI after Rancher is installed."),(0,a.kt)("p",null,"For instructions on setting up a private registry with command line options during the installation of Rancher, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap"},"air gapped installation guide"),"."),(0,a.kt)("p",null,"If your private registry requires credentials, it cannot be used as the default registry. There is no global way to set up a private registry with authorization for every Rancher-provisioned cluster. Therefore, if you want a Rancher-provisioned cluster to pull images from a private registry with credentials, you will have to ",(0,a.kt)("a",{parentName:"p",href:"#setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"pass in the registry credentials through the advanced cluster options")," every time you create a new cluster."),(0,a.kt)("h1",{id:"setting-a-private-registry-with-no-credentials-as-the-default-registry"},"Setting a Private Registry with No Credentials as the Default Registry"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into Rancher and configure the default administrator password."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Global Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the setting called ",(0,a.kt)("inlineCode",{parentName:"li"},"system-default-registry")," and choose ",(0,a.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Setting"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the value to your registry (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"registry.yourdomain.com:port"),"). Do not prefix the registry with ",(0,a.kt)("inlineCode",{parentName:"li"},"http://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher will use your private registry to pull system images."),(0,a.kt)("h1",{id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"Setting a Private Registry with Credentials when Deploying a Cluster"),(0,a.kt)("p",null,"You can follow these steps to configure a private registry when you create a cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose a cluster type."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Configuration")," go to the ",(0,a.kt)("strong",{parentName:"li"},"Registries")," tab and click ",(0,a.kt)("strong",{parentName:"li"},"Pull images for Rancher from a private registry"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the registry hostname and credentials."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The new cluster will be able to pull images from the private registry."),(0,a.kt)("p",null,"The private registry cannot be configured after the cluster is created."))}g.isMDXComponent=!0}}]);