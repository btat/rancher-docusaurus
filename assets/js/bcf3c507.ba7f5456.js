"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[21113],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Installing and Configuring kubectl",position:100},l=void 0,u={unversionedId:"faq/kubectl",id:"faq/kubectl",isDocsHomePage:!1,title:"Installing and Configuring kubectl",description:"kubectl is a CLI utility for running commands against Kubernetes clusters. It's required for many maintenance and administrative tasks in Rancher 2.x.",source:"@site/docs/faq/kubectl.md",sourceDirName:"faq",slug:"/faq/kubectl",permalink:"/rancher-docusaurus/next/faq/kubectl",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/faq/kubectl.md",tags:[],version:"current",frontMatter:{title:"Installing and Configuring kubectl",position:100},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/rancher-docusaurus/next/faq/index"},next:{title:"Container Network Interface (CNI) Providers",permalink:"/rancher-docusaurus/next/faq/networking/cni-providers"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," is a CLI utility for running commands against Kubernetes clusters. It's required for many maintenance and administrative tasks in Rancher 2.x."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl Installation")," for installation on your operating system."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"When you create a Kubernetes cluster with RKE, RKE creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml")," in the local directory that contains credentials to connect to your new cluster with tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,a.kt)("p",null,"You can copy this file to ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," or if you are working with multiple Kubernetes clusters, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to the path of ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_rancher-cluster.yml\n")),(0,a.kt)("p",null,"Test your connectivity with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," and see if you can get the list of nodes back."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get nodes\n NAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1\n")))}f.isMDXComponent=!0}}]);