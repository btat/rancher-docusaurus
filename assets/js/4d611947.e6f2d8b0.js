"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[15642],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return h}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?t.createElement(b,a(a({ref:n},l),{},{components:r})):t.createElement(b,a({ref:n},l))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1852:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"Troubleshooting Worker Nodes and Generic Components",position:4},c=void 0,s={unversionedId:"troubleshooting/kubernetes-components/worker-and-generic",id:"version-2.4.15/troubleshooting/kubernetes-components/worker-and-generic",isDocsHomePage:!1,title:"Troubleshooting Worker Nodes and Generic Components",description:"This section applies to every node as it includes components that run on nodes with any role.",source:"@site/versioned_docs/version-2.4.15/troubleshooting/kubernetes-components/worker-and-generic.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/worker-and-generic",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-components/worker-and-generic",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/troubleshooting/kubernetes-components/worker-and-generic.md",tags:[],version:"2.4.15",frontMatter:{title:"Troubleshooting Worker Nodes and Generic Components",position:4},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Troubleshooting nginx-proxy",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-components/nginx-proxy"},next:{title:"Kubernetes resources",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-resources"}},l=[],p={toc:l};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section applies to every node as it includes components that run on nodes with any role."),(0,i.kt)("h1",{id:"check-if-the-containers-are-running"},"Check if the Containers are Running"),(0,i.kt)("p",null,"There are two specific containers launched on nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," role:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kubelet"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy")),(0,i.kt)("p",null,"The containers should have status ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),". The duration shown after ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is the time the container has been running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kubelet|kube-proxy'\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n158d0dcc33a5        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-proxy\na30717ecfb55        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kubelet\n')),(0,i.kt)("h1",{id:"container-logging"},"Container Logging"),(0,i.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker logs kubelet\ndocker logs kube-proxy\n")))}d.isMDXComponent=!0}}]);