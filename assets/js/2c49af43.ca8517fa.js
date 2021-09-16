"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[37592],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62648:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={title:"Intro",position:1},c=void 0,u={unversionedId:"user-settings/index",id:"version-2.5.9/user-settings/index",isDocsHomePage:!1,title:"Intro",description:"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the User Settings menu. You can open this menu by clicking your avatar, located within the main menu.",source:"@site/versioned_docs/version-2.5.9/user-settings/index.md",sourceDirName:"user-settings",slug:"/user-settings/index",permalink:"/rancher-docusaurus/2.5.9/user-settings/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/user-settings/index.md",tags:[],version:"2.5.9",frontMatter:{title:"Intro",position:1},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Managing Cloud Credentials",permalink:"/rancher-docusaurus/2.5.9/user-settings/cloud-credentials"},next:{title:"Managing Node Templates",permalink:"/rancher-docusaurus/2.5.9/user-settings/node-templates"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the ",(0,o.kt)("strong",{parentName:"p"},"User Settings")," menu. You can open this menu by clicking your avatar, located within the main menu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},"![User Settings Menu](./assets/img/rancher/user-settings.png)\n")),(0,o.kt)("p",null,"The available user settings are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/user-settings/api-keys/"},"API & Keys"),": If you want to interact with Rancher programmatically, you need an API key. Follow the directions in this section to obtain a key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/user-settings/cloud-credentials/"},"Cloud Credentials"),": Manage cloud credentials ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"used by node templates")," to ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters"},"provision nodes for clusters"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/user-settings/node-templates"},"Node Templates"),": Manage templates ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters"},"used by Rancher to provision nodes for clusters"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/user-settings/preferences"},"Preferences"),": Sets superficial preferences for the Rancher UI."),(0,o.kt)("li",{parentName:"ul"},"Log Out: Ends your user session.")))}m.isMDXComponent=!0}}]);