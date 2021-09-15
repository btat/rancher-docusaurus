"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[2403],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Additional Steps for Installing Istio on an RKE2 Cluster",position:3},l=void 0,s={unversionedId:"istio/configuration-reference/rke2",id:"istio/configuration-reference/rke2",isDocsHomePage:!1,title:"Additional Steps for Installing Istio on an RKE2 Cluster",description:"When installing or upgrading the Istio Helm chart through Apps & Marketplace,",source:"@site/docs/istio/configuration-reference/rke2.md",sourceDirName:"istio/configuration-reference",slug:"/istio/configuration-reference/rke2",permalink:"/rancher-docusaurus/istio/configuration-reference/rke2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/istio/configuration-reference/rke2.md",tags:[],version:"current",frontMatter:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/rancher-docusaurus/istio/configuration-reference/index"},next:{title:"Selectors and Scrape Configs",permalink:"/rancher-docusaurus/istio/configuration-reference/selectors-and-scrape"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When installing or upgrading the Istio Helm chart through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are installing the chart, click ",(0,o.kt)("strong",{parentName:"p"},"Customize Helm options before install")," and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will see options for configuring the Istio Helm chart. On the ",(0,o.kt)("strong",{parentName:"p"},"Components")," tab, check the box next to ",(0,o.kt)("strong",{parentName:"p"},"Enabled CNI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a custom overlay file specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"cniBinDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cniConfDir"),". For more information on these options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio documentation.")," An example is below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n  values:\n    cni:\n      image: rancher/istio-install-cni:1.7.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After installing or upgrading Istio, you'll notice the cni-node pods in the istio-system namespace in a CrashLoopBackoff error. Manually edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-cni-node")," daemonset to include the following on the ",(0,o.kt)("inlineCode",{parentName:"p"},"install-cni")," container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"securityContext:\n    privileged: true\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Now you should be able to utilize Istio as desired, including sidecar injection and monitoring via Kiali."))}f.isMDXComponent=!0}}]);