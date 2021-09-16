"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[44044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"Release Notes",position:100},l="Istio 1.5.9 release notes",c={unversionedId:"istio/release-notes",id:"version-2.5.9/istio/release-notes",isDocsHomePage:!1,title:"Release Notes",description:"Bug fixes",source:"@site/versioned_docs/version-2.5.9/istio/release-notes.md",sourceDirName:"istio",slug:"/istio/release-notes",permalink:"/rancher-docusaurus/2.5.9/istio/release-notes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/istio/release-notes.md",tags:[],version:"2.5.9",frontMatter:{title:"Release Notes",position:100},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/rancher-docusaurus/2.5.9/istio/rbac"},next:{title:"CPU and Memory Allocations",permalink:"/rancher-docusaurus/2.5.9/istio/resources"}},u=[{value:"Important note on 1.5.x versions",id:"important-note-on-15x-versions",children:[]},{value:"Known Issues",id:"known-issues",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"istio-159-release-notes"},"Istio 1.5.9 release notes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bug fixes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Kiali traffic graph is now working ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/28109"},"#28109"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Known Issues")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Kiali traffic graph is offset in the UI ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/28207"},"#28207"))),(0,i.kt)("h1",{id:"istio-158"},"Istio 1.5.8"),(0,i.kt)("h3",{id:"important-note-on-15x-versions"},"Important note on 1.5.x versions"),(0,i.kt)("p",null,"When upgrading from any 1.4 version of Istio to any 1.5 version, the Rancher installer will delete several resources in order to complete the upgrade, at which point they will be immediately re-installed. This includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-reader-service-account"),". If your Istio installation is using this service account be aware that any secrets tied to the service account will be deleted. Most notably this will ",(0,i.kt)("strong",{parentName:"p"},"break specific ",(0,i.kt)("a",{parentName:"strong",href:"https://archive.istio.io/v1.4/docs/setup/install/multicluster/"},"multi-cluster deployments")),". Downgrades back to 1.4 are not possible."),(0,i.kt)("p",null,"See the official upgrade notes for additional information on the 1.5 release and upgrading from 1.4: ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/news/releases/1.5.x/announcing-1.5/upgrade-notes/"},"https://istio.io/latest/news/releases/1.5.x/announcing-1.5/upgrade-notes/")),(0,i.kt)("p",null,">"," ",(0,i.kt)("strong",{parentName:"p"},"Note:")," Rancher continues to use the Helm installation method, which produces a different architecture from an istioctl installation."),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Kiali traffic graph is currently not working ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/istio/istio/issues/24924"},"#24924"))))}f.isMDXComponent=!0}}]);