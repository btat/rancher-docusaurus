"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[42483],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"2. Enable Istio in a Namespace",position:2},s=void 0,c={unversionedId:"istio/setup/enable-istio-in-namespace",id:"istio/setup/enable-istio-in-namespace",isDocsHomePage:!1,title:"2. Enable Istio in a Namespace",description:"You will need to manually enable Istio in each namespace that you want to be tracked or controlled by Istio. When Istio is enabled in a namespace, the Envoy sidecar proxy will be automatically injected into all new workloads that are deployed in the namespace.",source:"@site/docs/istio/setup/enable-istio-in-namespace.md",sourceDirName:"istio/setup",slug:"/istio/setup/enable-istio-in-namespace",permalink:"/rancher-docusaurus/next/istio/setup/enable-istio-in-namespace",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/istio/setup/enable-istio-in-namespace.md",tags:[],version:"current",frontMatter:{title:"2. Enable Istio in a Namespace",position:2},sidebar:"tutorialSidebar",previous:{title:"1. Enable Istio in the Cluster",permalink:"/rancher-docusaurus/next/istio/setup/enable-istio-in-cluster"},next:{title:"4. Set up the Istio Gateway",permalink:"/rancher-docusaurus/next/istio/setup/gateway"}},d=[{value:"Verifying that Automatic Istio Sidecar Injection is Enabled",id:"verifying-that-automatic-istio-sidecar-injection-is-enabled",children:[]},{value:"Excluding Workloads from Being Injected with the Istio Sidecar",id:"excluding-workloads-from-being-injected-with-the-istio-sidecar",children:[]},{value:"Next: Add Deployments with the Istio Sidecar ",id:"next-add-deployments-with-the-istio-sidecar-",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will need to manually enable Istio in each namespace that you want to be tracked or controlled by Istio. When Istio is enabled in a namespace, the Envoy sidecar proxy will be automatically injected into all new workloads that are deployed in the namespace."),(0,o.kt)("p",null,"This namespace setting will only affect new workloads in the namespace. Any preexisting workloads will need to be re-deployed to leverage the sidecar auto injection."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," To enable Istio in a namespace, the cluster must have Istio installed.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Cluster ",">"," Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the namespace where you want to enable Istio and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee  ",">"," Enable Istio Auto Injection"),". Alternately, click the namespace, and then on the namespace detail page, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee  ",">"," Enable Istio Auto Injection"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The namespace now has the label ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled"),". All new workloads deployed in this namespace will have the Istio sidecar injected by default."),(0,o.kt)("h3",{id:"verifying-that-automatic-istio-sidecar-injection-is-enabled"},"Verifying that Automatic Istio Sidecar Injection is Enabled"),(0,o.kt)("p",null,"To verify that Istio is enabled, deploy a hello-world workload in the namespace. Go to the workload and click the pod name. In the ",(0,o.kt)("strong",{parentName:"p"},"Containers")," section, you should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-proxy")," container."),(0,o.kt)("h3",{id:"excluding-workloads-from-being-injected-with-the-istio-sidecar"},"Excluding Workloads from Being Injected with the Istio Sidecar"),(0,o.kt)("p",null,"If you need to exclude a workload from getting injected with the Istio sidecar, use the following annotation on the workload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sidecar.istio.io/inject: \u201cfalse\u201d\n")),(0,o.kt)("p",null,"To add the annotation to a workload,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the workload that should not have the sidecar and edit as yaml"),(0,o.kt)("li",{parentName:"ol"},"Add the following key, value ",(0,o.kt)("inlineCode",{parentName:"li"},"sidecar.istio.io/inject: false")," as an annotation on the workload"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The Istio sidecar will not be injected into the workload."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"NOTE:")," If you are having issues with a Job you deployed not completing, you will need to add this annotation to your pod using the provided steps. Since Istio Sidecars run indefinitely, a Job cannot be considered complete even after its task has completed. "),(0,o.kt)("h3",{id:"next-add-deployments-with-the-istio-sidecar-"},(0,o.kt)("a",{parentName:"h3",href:"https://rancher.com/docs/rancher/v2.6/en/istio/setup/deploy-workloads"},"Next: Add Deployments with the Istio Sidecar ")))}u.isMDXComponent=!0}}]);