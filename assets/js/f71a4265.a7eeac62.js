"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[65431],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),h=a,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32917:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Fleet - GitOps at Scale",position:1},s=void 0,c={unversionedId:"deploy-across-clusters/fleet/index",id:"deploy-across-clusters/fleet/index",isDocsHomePage:!1,title:"Fleet - GitOps at Scale",description:"Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It's also lightweight enough that it works great for a single cluster too, but it really shines when you get to a large scale. By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization.",source:"@site/docs/deploy-across-clusters/fleet/index.md",sourceDirName:"deploy-across-clusters/fleet",slug:"/deploy-across-clusters/fleet/index",permalink:"/rancher-docusaurus/next/deploy-across-clusters/fleet/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/deploy-across-clusters/fleet/index.md",tags:[],version:"current",frontMatter:{title:"Fleet - GitOps at Scale",position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/rancher-docusaurus/next/deploy-across-clusters/fleet/architecture"},next:{title:"Using Fleet Behind a Proxy",permalink:"/rancher-docusaurus/next/deploy-across-clusters/fleet/proxy"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It's also lightweight enough that it works great for a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/single-cluster-install/"},"single cluster")," too, but it really shines when you get to a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/multi-cluster-install/"},"large scale.")," By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization."),(0,o.kt)("p",null,"Fleet is a separate project from Rancher, and can be installed on any Kubernetes cluster with Helm."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#windows-support"},"Windows Support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#github-repository"},"GitHub Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation"},"Documentation"))),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"For information about how Fleet works, see ",(0,o.kt)("a",{parentName:"p",href:"./architecture"},"this page.")),(0,o.kt)("h1",{id:"accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI"),(0,o.kt)("p",null,"Fleet comes preinstalled in Rancher. To access it, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Continuous Delivery"),"."),(0,o.kt)("h1",{id:"windows-support"},"Windows Support"),(0,o.kt)("p",null,"For details on support for clusters with Windows nodes, see ",(0,o.kt)("a",{parentName:"p",href:"./windows"},"this page.")),(0,o.kt)("h1",{id:"github-repository"},"GitHub Repository"),(0,o.kt)("p",null,"The Fleet Helm charts are available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/latest"},"here.")),(0,o.kt)("h1",{id:"using-fleet-behind-a-proxy"},"Using Fleet Behind a Proxy"),(0,o.kt)("p",null,"For details on using Fleet behind a proxy, see ",(0,o.kt)("a",{parentName:"p",href:"./proxy"},"this page.")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The Fleet documentation is at ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"https://fleet.rancher.io/.")))}f.isMDXComponent=!0}}]);