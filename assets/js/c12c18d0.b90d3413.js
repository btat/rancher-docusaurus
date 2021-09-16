"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[18927],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42767:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Services",position:3045},c=void 0,l={unversionedId:"k8s-in-rancher/service-discovery",id:"version-2.4.15/k8s-in-rancher/service-discovery",isDocsHomePage:!1,title:"Services",description:"Pod configuration is managed by Deployments, StatefulSets and Daemonsets, whereas services direct traffic to pods using selectors.",source:"@site/versioned_docs/version-2.4.15/k8s-in-rancher/service-discovery.md",sourceDirName:"k8s-in-rancher",slug:"/k8s-in-rancher/service-discovery",permalink:"/rancher-docusaurus/k8s-in-rancher/service-discovery",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/k8s-in-rancher/service-discovery.md",tags:[],version:"2.4.15",frontMatter:{title:"Services",position:3045},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Secrets",permalink:"/rancher-docusaurus/k8s-in-rancher/secrets"},next:{title:"Adding a Sidecar",permalink:"/rancher-docusaurus/k8s-in-rancher/workloads/add-a-sidecar"}},u=[{value:"Related Links",id:"related-links",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pod configuration is managed by Deployments, StatefulSets and Daemonsets, whereas services direct traffic to pods using selectors."),(0,a.kt)("p",null,"For every workload created, a complementing Service Discovery entry is created. This Service Discovery entry enables DNS resolution for the workload's pods using the following naming convention:\n",(0,a.kt)("inlineCode",{parentName:"p"},"\\<workload\\>.\\<namespace\\>.svc.cluster.local"),"."),(0,a.kt)("p",null,"You can create additional services so that a given namespace resolves with one or more external IP addresses, an external hostname, an alias to another DNS record, other workloads, or a set of pods that match a selector that you create."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster where you want to add a service and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Service Discovery ",">"," Services"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose the type of service you want to create."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," from the drop-down list. "),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Name")," for the service. This name is used for DNS resolution."),(0,a.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the upstream Kubernetes documentation about ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"services.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," A new service is created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can view the record by from the project's ",(0,a.kt)("strong",{parentName:"li"},"Service Discovery")," tab."),(0,a.kt)("li",{parentName:"ul"},"When you visit the new DNS name for the new record that you created (",(0,a.kt)("inlineCode",{parentName:"li"},"\\<recordname\\>.\\<namespace\\>.svc.cluster.local"),"), it resolves the chosen namespace.")),(0,a.kt)("h2",{id:"related-links"},"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/"},"Adding entries to Pod /etc/hosts with HostAliases"))))}d.isMDXComponent=!0}}]);