"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[39358],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95486:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Working with Taints and Tolerations",position:6},s=void 0,u={unversionedId:"logging/taints-tolerations",id:"version-2.4.15/logging/taints-tolerations",isDocsHomePage:!1,title:"Working with Taints and Tolerations",description:'"Tainting" a Kubernetes node causes pods to repel running on that node.',source:"@site/versioned_docs/version-2.4.15/logging/taints-tolerations.md",sourceDirName:"logging",slug:"/logging/taints-tolerations",permalink:"/rancher-docusaurus/logging/taints-tolerations",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/logging/taints-tolerations.md",tags:[],version:"2.4.15",frontMatter:{title:"Working with Taints and Tolerations",position:6},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Role-based Access Control for Logging",permalink:"/rancher-docusaurus/logging/rbac"},next:{title:"Configuration",permalink:"/rancher-docusaurus/cis-scans/configuration"}},c=[{value:"Default Implementation in Rancher&#39;s Logging Stack",id:"default-implementation-in-ranchers-logging-stack",children:[]},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",children:[]}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'"Tainting" a Kubernetes node causes pods to repel running on that node.'),(0,a.kt)("p",null,"Unless the pods have a ",(0,a.kt)("inlineCode",{parentName:"p"},"toleration")," for that node's taint, they will run on other nodes in the cluster."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"Taints and tolerations")," can work in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"field")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSpec"),", which enables the ",(0,a.kt)("em",{parentName:"p"},"opposite")," effect of a taint. "),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," gives pods an affinity towards certain nodes."),(0,a.kt)("p",null,"Both provide choice for the what node(s) the pod will run on."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-implementation-in-rancher-s-logging-stack"},"Default Implementation in Rancher's Logging Stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"))),(0,a.kt)("h3",{id:"default-implementation-in-ranchers-logging-stack"},"Default Implementation in Rancher's Logging Stack"),(0,a.kt)("p",null,"By default, Rancher taints all Linux nodes with ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux"),", and does not taint Windows nodes.\nThe logging stack pods have ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerations")," for this taint, which enables them to run on Linux nodes.\nMoreover, most logging stack pods run on Linux only and have a ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," added to ensure they run on Linux nodes."),(0,a.kt)("p",null,"This example Pod YAML file shows a nodeSelector being used with a toleration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n# metadata...\nspec:\n  # containers...\n  tolerations:\n    - key: cattle.io/os\n      operator: "Equal"\n      value: "linux"\n      effect: NoSchedule\n  nodeSelector:\n    kubernetes.io/os: linux\n')),(0,a.kt)("p",null,"In the above example, we ensure that our pod only runs on Linux nodes, and we add a ",(0,a.kt)("inlineCode",{parentName:"p"},"toleration")," for the taint we have on all of our Linux nodes."),(0,a.kt)("p",null,"You can do the same with Rancher's existing taints, or with your own custom ones."),(0,a.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,a.kt)("p",null,"If you would like to add your own ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings, or if you would like to add ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints, you can pass the following to the chart's values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n  # insert tolerations...\nnodeSelector:\n  # insert nodeSelector...\n")),(0,a.kt)("p",null,"These values will add both settings to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentbit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-operator")," containers.\nEssentially, these are global settings for all pods in the logging stack."),(0,a.kt)("p",null,"However, if you would like to add tolerations for ",(0,a.kt)("em",{parentName:"p"},"only")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentbit")," container, you can add the following to the chart's values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"fluentbit_tolerations:\n  # insert tolerations list for fluentbit containers only...\n")))}p.isMDXComponent=!0}}]);