"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[99487],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,g=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79061:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={title:"User ID Tracking in Audit Logs",position:110},s=void 0,l={unversionedId:"troubleshooting/userid-tracking-in-audit-logs",id:"troubleshooting/userid-tracking-in-audit-logs",isDocsHomePage:!1,title:"User ID Tracking in Audit Logs",description:"The following audit logs are used in Rancher to track events occuring on the local and downstream clusters:",source:"@site/docs/troubleshooting/userid-tracking-in-audit-logs.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/userid-tracking-in-audit-logs",permalink:"/rancher-docusaurus/next/troubleshooting/userid-tracking-in-audit-logs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/troubleshooting/userid-tracking-in-audit-logs.md",tags:[],version:"current",frontMatter:{title:"User ID Tracking in Audit Logs",position:110},sidebar:"tutorialSidebar",previous:{title:"Rancher HA",permalink:"/rancher-docusaurus/next/troubleshooting/rancherha"},next:{title:"Using the Rancher Command Line Interface",permalink:"/rancher-docusaurus/next/cli"}},c=[{value:"Feature Description",id:"feature-description",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following audit logs are used in Rancher to track events occuring on the local and downstream clusters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/audit-log/"},"Kubernetes Audit Logs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/advanced/api-audit-log/"},"Rancher API Audit Logs"))),(0,a.kt)("p",null,"Audit logs in Rancher v2.6 have been enhanced to include the external Identity Provider name (common name of the user in the external Auth provider) in both the Rancher and downstream Kubernetes audit logs."),(0,a.kt)("p",null,"Before v2.6, a Rancher Admin could not trace an event from the Rancher audit logs and into the Kubernetes audit logs without knowing the mapping of the external Identity Provider username to the userId (",(0,a.kt)("inlineCode",{parentName:"p"},"u-xXXX"),") used in Rancher.\nTo know this mapping, the cluster admins needed to have access to Rancher API, UI, and the local management cluster."),(0,a.kt)("p",null,"Now with this feature, a downstream cluster admin should be able to look at the Kubernetes audit logs and know which specific external Identity Provider (IDP) user performed an action without needing to view anything in Rancher.\nIf the audit logs are shipped off of the cluster, a user of the logging system should be able to identify the user in the external Identity Provider system.",(0,a.kt)("br",{parentName:"p"}),"\n","A Rancher Admin should now be able to view Rancher audit logs and follow through to the Kubernetes audit log by using the external Identity Provider username."),(0,a.kt)("h3",{id:"feature-description"},"Feature Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'When Kubernetes Audit logs are enabled on the downstream cluster, in each event that is logged, the external Identity Provider\'s username is now logged for each request, at the "metadata" level.'),(0,a.kt)("li",{parentName:"ul"},"When Rancher API Audit logs are enabled on the Rancher installation, the external Identity Provider's username is also logged now at the ",(0,a.kt)("inlineCode",{parentName:"li"},"auditLog.level=1")," for each request that hits the Rancher API server, including the login requests.")))}h.isMDXComponent=!0}}]);