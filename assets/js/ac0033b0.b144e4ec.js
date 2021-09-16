"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[98197],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70473:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Continuous Delivery",position:3},s=void 0,u={unversionedId:"installation/resources/feature-flags/continuous-delivery",id:"version-2.4.15/installation/resources/feature-flags/continuous-delivery",isDocsHomePage:!1,title:"Continuous Delivery",description:"As of Rancher v2.5, Fleet comes preinstalled in Rancher, and as of Rancher v2.6, Fleet can no longer be fully disabled. However, the Fleet feature for GitOps continuous delivery may be disabled using the continuous-delivery feature flag.",source:"@site/versioned_docs/version-2.4.15/installation/resources/feature-flags/continuous-delivery.md",sourceDirName:"installation/resources/feature-flags",slug:"/installation/resources/feature-flags/continuous-delivery",permalink:"/rancher-docusaurus/installation/resources/feature-flags/continuous-delivery",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/installation/resources/feature-flags/continuous-delivery.md",tags:[],version:"2.4.15",frontMatter:{title:"Continuous Delivery",position:3},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"About Custom CA Root Certificates",permalink:"/rancher-docusaurus/installation/resources/custom-ca-root-certificate"},next:{title:"Allow Unsupported Storage Drivers",permalink:"/rancher-docusaurus/installation/resources/feature-flags/enable-not-default-storage-drivers"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As of Rancher v2.5, ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet"},"Fleet")," comes preinstalled in Rancher, and as of Rancher v2.6, Fleet can no longer be fully disabled. However, the Fleet feature for GitOps continuous delivery may be disabled using the ",(0,o.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," feature flag."),(0,o.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/feature-flags/"},"the main page about enabling experimental features.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"continuous-delivery")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"This flag disables the GitOps continuous delivery feature of Fleet.")))),(0,o.kt)("p",null,"If Fleet was disabled in Rancher v2.5.x, it will become enabled if Rancher is upgraded to v2.6.x. Only the continuous delivery part of Fleet can be disabled. When ",(0,o.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," is disabled, the ",(0,o.kt)("inlineCode",{parentName:"p"},"gitjob")," deployment is no longer deployed into the Rancher server's local cluster, and ",(0,o.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," is not shown in the Rancher UI."))}d.isMDXComponent=!0}}]);