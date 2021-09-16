"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[38173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Intro",position:1},s=void 0,u={unversionedId:"troubleshooting/index",id:"version-2.5.9/troubleshooting/index",isDocsHomePage:!1,title:"Intro",description:"This section contains information to help you troubleshoot issues when using Rancher.",source:"@site/versioned_docs/version-2.5.9/troubleshooting/index.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/index",permalink:"/rancher-docusaurus/2.5.9/troubleshooting/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/troubleshooting/index.md",tags:[],version:"2.5.9",frontMatter:{title:"Intro",position:1},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Registered clusters",permalink:"/rancher-docusaurus/2.5.9/troubleshooting/imported-clusters"},next:{title:"Troubleshooting Controlplane Nodes",permalink:"/rancher-docusaurus/2.5.9/troubleshooting/kubernetes-components/controlplane"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section contains information to help you troubleshoot issues when using Rancher."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/kubernetes-components/"},"Kubernetes components")),(0,a.kt)("p",{parentName:"li"},"  If you need help troubleshooting core Kubernetes cluster components like:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nginx-proxy")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/kubernetes-resources/"},"Kubernetes resources")),(0,a.kt)("p",{parentName:"li"},"  Options for troubleshooting Kubernetes resources like Nodes, Ingress Controller and Rancher Agents are described in this section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/networking/"},"Networking")),(0,a.kt)("p",{parentName:"li"},"  Steps to troubleshoot networking issues can be found here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/dns/"},"DNS")),(0,a.kt)("p",{parentName:"li"},"  When you experience name resolution issues in your cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/rancherha/"},"Troubleshooting Rancher installed on Kubernetes")),(0,a.kt)("p",{parentName:"li"},"  If you experience issues with your ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/"},"Rancher server installed on Kubernetes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/logging/"},"Logging")),(0,a.kt)("p",{parentName:"li"},"  Read more about what log levels can be configured and how to configure a log level.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/troubleshooting/userid-tracking-in-audit-logs/"},"User ID Tracking in Audit Logs")),(0,a.kt)("p",{parentName:"li"},"  Read more about how a Rancher Admin can trace an event from the Rancher audit logs and into the Kubernetes audit logs using the external Identity Provider username."))))}m.isMDXComponent=!0}}]);