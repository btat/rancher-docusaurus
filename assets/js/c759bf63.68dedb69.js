"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[4192],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,h=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4128:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Troubleshooting nginx-proxy",position:3},p=void 0,l={unversionedId:"troubleshooting/kubernetes-components/nginx-proxy",id:"troubleshooting/kubernetes-components/nginx-proxy",isDocsHomePage:!1,title:"Troubleshooting nginx-proxy",description:"The nginx-proxy container is deployed on every node that does not have the controlplane role. It provides access to all the nodes with the controlplane role by dynamically generating the NGINX configuration based on available nodes with the controlplane role.",source:"@site/docs/troubleshooting/kubernetes-components/nginx-proxy.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/nginx-proxy",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-components/nginx-proxy",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/troubleshooting/kubernetes-components/nginx-proxy.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting nginx-proxy",position:3},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Components",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-components/index"},next:{title:"Troubleshooting Worker Nodes and Generic Components",permalink:"/rancher-docusaurus/troubleshooting/kubernetes-components/worker-and-generic"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," container is deployed on every node that does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role. It provides access to all the nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role by dynamically generating the NGINX configuration based on available nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,i.kt)("h1",{id:"check-if-the-container-is-running"},"Check if the Container is Running"),(0,i.kt)("p",null,"The container is called ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," and should have status ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),". The duration shown after ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is the time the container has been running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps -a -f=name=nginx-proxy\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker ps -a -f=name=nginx-proxy\nCONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS               NAMES\nc3e933687c0e        rancher/rke-tools:v0.1.15   "nginx-proxy CP_HO..."   3 hours ago         Up 3 hours                              nginx-proxy\n')),(0,i.kt)("h1",{id:"check-generated-nginx-configuration"},"Check Generated NGINX Configuration"),(0,i.kt)("p",null,"The generated configuration should include the IP addresses of the nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role. The configuration can be checked using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec nginx-proxy cat /etc/nginx/nginx.conf\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"error_log stderr notice;\n\nworker_processes auto;\nevents {\n  multi_accept on;\n  use epoll;\n  worker_connections 1024;\n}\n\nstream {\n        upstream kube_apiserver {\n            \n            server ip_of_controlplane_node1:6443;\n            \n            server ip_of_controlplane_node2:6443;\n            \n        }\n\n        server {\n            listen        6443;\n            proxy_pass    kube_apiserver;\n            proxy_timeout 30;\n            proxy_connect_timeout 2s;\n\n        }\n\n}\n")),(0,i.kt)("h1",{id:"nginx-proxy-container-logging"},"nginx-proxy Container Logging"),(0,i.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker logs nginx-proxy\n")))}d.isMDXComponent=!0}}]);