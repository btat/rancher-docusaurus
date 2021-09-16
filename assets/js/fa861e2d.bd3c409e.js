"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[23272],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Enable Istio with Pod Security Policies",position:1},s=void 0,c={unversionedId:"istio/configuration-reference/enable-istio-with-psp",id:"istio/configuration-reference/enable-istio-with-psp",isDocsHomePage:!1,title:"Enable Istio with Pod Security Policies",description:"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin.",source:"@site/docs/istio/configuration-reference/enable-istio-with-psp.md",sourceDirName:"istio/configuration-reference",slug:"/istio/configuration-reference/enable-istio-with-psp",permalink:"/rancher-docusaurus/next/istio/configuration-reference/enable-istio-with-psp",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/istio/configuration-reference/enable-istio-with-psp.md",tags:[],version:"current",frontMatter:{title:"Enable Istio with Pod Security Policies",position:1},sidebar:"tutorialSidebar",previous:{title:"Additional Steps for Project Network Isolation",permalink:"/rancher-docusaurus/next/istio/configuration-reference/canal-and-project-network"},next:{title:"Configuration Options",permalink:"/rancher-docusaurus/next/istio/configuration-reference/index"}},u=[{value:"1. Set the PodSecurityPolicy to unrestricted",id:"1-set-the-podsecuritypolicy-to-unrestricted",children:[]},{value:"2. Enable the CNI",id:"2-enable-the-cni",children:[]},{value:"3. Verify that the CNI is working",id:"3-verify-that-the-cni-is-working",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin. "),(0,o.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Prerequisites:"),"\n",">","\n",">"," - The cluster must be an RKE Kubernetes cluster.\n",">"," - The cluster must have been created with a default PodSecurityPolicy.\n",">","\n",">"," To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to \\<b",">","Advanced Options.\\</b",">"," In the \\<b",">","Pod Security Policy Support\\</b",">"," section, click \\<b",">","Enabled.\\</b",">"," Then select a default pod security policy."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-set-the-podsecuritypolicy-to-unrestricted"},"Set the PodSecurityPolicy to unrestricted")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-enable-the-cni"},"Enable the CNI")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-verify-that-the-cni-is-working"},"Verify that the CNI is working."))),(0,o.kt)("h3",{id:"1-set-the-podsecuritypolicy-to-unrestricted"},"1. Set the PodSecurityPolicy to unrestricted"),(0,o.kt)("p",null,"An unrestricted PSP allows Istio to be installed."),(0,o.kt)("p",null,"Set the PSP to ",(0,o.kt)("inlineCode",{parentName:"p"},"unrestricted")," in the project where is Istio is installed, or the project where you plan to install Istio."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Cluster ",">"," Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"2-enable-the-cni"},"2. Enable the CNI"),(0,o.kt)("p",null,"When installing or upgrading Istio through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Components"),"."),(0,o.kt)("li",{parentName:"ol"},"Check the box next to ",(0,o.kt)("strong",{parentName:"li"},"Enabled CNI"),"."),(0,o.kt)("li",{parentName:"ol"},"Finish installing or upgrading Istio.")),(0,o.kt)("p",null,"The CNI can also be enabled by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,o.kt)("p",null,"Istio should install successfully with the CNI enabled in the cluster."),(0,o.kt)("h3",{id:"3-verify-that-the-cni-is-working"},"3. Verify that the CNI is working"),(0,o.kt)("p",null,"Verify that the CNI is working by deploying a ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"sample application")," or deploying one of your own applications."))}d.isMDXComponent=!0}}]);