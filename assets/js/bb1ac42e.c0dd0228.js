"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[54755],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(h,a(a({ref:r},u),{},{components:t})):n.createElement(h,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34268:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Installing Docker",position:1},l=void 0,c={unversionedId:"installation/resources/installing-docker",id:"version-2.5.9/installation/resources/installing-docker",isDocsHomePage:!1,title:"Installing Docker",description:"Docker is required to be installed on nodes where the Rancher server will be installed with Helm or Docker.",source:"@site/versioned_docs/version-2.5.9/installation/resources/installing-docker.md",sourceDirName:"installation/resources",slug:"/installation/resources/installing-docker",permalink:"/rancher-docusaurus/2.5.9/installation/resources/installing-docker",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/installation/resources/installing-docker.md",tags:[],version:"2.5.9",frontMatter:{title:"Installing Docker",position:1},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Resources",permalink:"/rancher-docusaurus/2.5.9/installation/resources/index"},next:{title:"Setting up a High-availability RKE Kubernetes Cluster",permalink:"/rancher-docusaurus/2.5.9/installation/resources/k8s-tutorials/ha-RKE"}},u=[],p={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docker is required to be installed on nodes where the Rancher server will be installed with Helm or Docker."),(0,i.kt)("p",null,"There are a couple of options for installing Docker. One option is to refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"official Docker documentation")," about how to install Docker on Linux. The steps will vary based on the Linux distribution."),(0,i.kt)("p",null,"Another option is to use one of Rancher's Docker installation scripts, which are available for most recent versions of Docker."),(0,i.kt)("p",null,"For example, this command could be used to install Docker 19.03 on Ubuntu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,i.kt)("p",null,"Rancher has installation scripts for every version of upstream Docker that Kubernetes supports. To find out whether a script is available for installing a certain Docker version, refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub repository,")," which contains all of Rancher's Docker installation scripts."))}f.isMDXComponent=!0}}]);