"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[1e4],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93511:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"DigitalOcean Node Template Configuration",position:1},l=void 0,s={unversionedId:"cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config",id:"cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config",isDocsHomePage:!1,title:"DigitalOcean Node Template Configuration",description:"-",source:"@site/docs/cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config.md",sourceDirName:"cluster-provisioning/rke-clusters/node-pools/digital-ocean",slug:"/cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cluster-provisioning/rke-clusters/node-pools/digital-ocean/do-node-template-config.md",tags:[],version:"current",frontMatter:{title:"DigitalOcean Node Template Configuration",position:1},sidebar:"tutorialSidebar",previous:{title:"Creating an Azure Cluster",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/node-pools/azure/index"},next:{title:"Creating a DigitalOcean Cluster",permalink:"/rancher-docusaurus/next/cluster-provisioning/rke-clusters/node-pools/digital-ocean/index"}},u=[{value:"Droplet Options",id:"droplet-options",children:[]},{value:"Docker Daemon",id:"docker-daemon",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("p",null,"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one."),(0,i.kt)("h3",{id:"droplet-options"},"Droplet Options"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Droplet Options")," provision your cluster's geographical region and specifications."),(0,i.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))}d.isMDXComponent=!0}}]);