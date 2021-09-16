"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[91595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Managing Node Templates",position:7010},s=void 0,p={unversionedId:"user-settings/node-templates",id:"user-settings/node-templates",isDocsHomePage:!1,title:"Managing Node Templates",description:"When you provision a cluster hosted by an infrastructure provider, node templates are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:",source:"@site/docs/user-settings/node-templates.md",sourceDirName:"user-settings",slug:"/user-settings/node-templates",permalink:"/rancher-docusaurus/next/user-settings/node-templates",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/user-settings/node-templates.md",tags:[],version:"current",frontMatter:{title:"Managing Node Templates",position:7010},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/rancher-docusaurus/next/user-settings/index"},next:{title:"User Preferences",permalink:"/rancher-docusaurus/next/user-settings/preferences"}},c=[{value:"Creating a Node Template",id:"creating-a-node-template",children:[]},{value:"Updating a Node Template",id:"updating-a-node-template",children:[]},{value:"Cloning Node Templates",id:"cloning-node-templates",children:[]},{value:"Deleting a Node Template",id:"deleting-a-node-template",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you provision a cluster ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"hosted by an infrastructure provider"),", ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"provisioning a node pool cluster"),"."),(0,o.kt)("li",{parentName:"ul"},"At any time, from your ",(0,o.kt)("a",{parentName:"li",href:"#creating-a-node-template-from-user-settings"},"user settings"),".")),(0,o.kt)("p",null,"When you create a node template, it is bound to your user profile. Node templates cannot be shared among users. You can delete stale node templates that you no longer user from your user settings."),(0,o.kt)("h2",{id:"creating-a-node-template"},"Creating a Node Template"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration ",">"," Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one of the cloud providers available. Then follow the instructions on screen to configure the template.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"updating-a-node-template"},"Updating a Node Template"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"RKE1 Configuration ",">"," Node Templates"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the node template that you want to edit and click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee ",">"," Edit"),"."),(0,o.kt)("p",{parentName:"li"},"   ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," The default ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/drivers/node-drivers/"},"node drivers")," and any node driver, that has fields marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", are required to use ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#cloud-credentials"},"cloud credentials"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the required information and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The node template is updated. All node pools using this node template will automatically use the updated information when new nodes are added."),(0,o.kt)("h2",{id:"cloning-node-templates"},"Cloning Node Templates"),(0,o.kt)("p",null,"When creating new node templates from your user settings, you can clone an existing template and quickly update its settings rather than creating a new one from scratch. Cloning templates saves you the hassle of re-entering access keys for the cloud provider."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration ",">"," Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the template you want to clone. Then select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee ",">"," Clone"),"."),(0,o.kt)("li",{parentName:"ol"},"Complete the rest of the form.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is cloned and configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"deleting-a-node-template"},"Deleting a Node Template"),(0,o.kt)("p",null,"When you no longer use a node template, you can delete it from your user settings."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration ",">"," Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one or more template from the list. Then click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),". Confirm the delete when prompted.")))}d.isMDXComponent=!0}}]);