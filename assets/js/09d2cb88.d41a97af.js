"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[59091],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(r),m=n,g=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18150:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Managing HPAs with the Rancher UI",position:3028},l=void 0,s={unversionedId:"k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui",id:"version-2.4.15/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui",isDocsHomePage:!1,title:"Managing HPAs with the Rancher UI",description:"The Rancher UI supports creating, managing, and deleting HPAs. You can configure CPU or memory usage as the metric that the HPA uses to scale.",source:"@site/versioned_docs/version-2.4.15/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui.md",sourceDirName:"k8s-in-rancher/horitzontal-pod-autoscaler",slug:"/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui",permalink:"/rancher-docusaurus/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui.md",tags:[],version:"2.4.15",frontMatter:{title:"Managing HPAs with the Rancher UI",position:3028},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Managing HPAs with kubectl",permalink:"/rancher-docusaurus/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-kubectl"},next:{title:"Testing HPAs with kubectl",permalink:"/rancher-docusaurus/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa"}},p=[{value:"Creating an HPA",id:"creating-an-hpa",children:[]},{value:"Get HPA Metrics and Status",id:"get-hpa-metrics-and-status",children:[]},{value:"Deleting an HPA",id:"deleting-an-hpa",children:[]}],u={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Rancher UI supports creating, managing, and deleting HPAs. You can configure CPU or memory usage as the metric that the HPA uses to scale."),(0,o.kt)("p",null,"If you want to create HPAs that scale based on other metrics than CPU and memory, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-kubectl/#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"Configuring HPA to Scale Using Custom Metrics with Prometheus"),"."),(0,o.kt)("h2",{id:"creating-an-hpa"},"Creating an HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster you want to create an HPA in and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Service Discovery ",">"," HorizontalPodAutoscalers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Target Reference")," as scale target for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify the ",(0,o.kt)("strong",{parentName:"p"},"Minimum Replicas")," and ",(0,o.kt)("strong",{parentName:"p"},"Maximum Replicas")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the metrics for the HPA. You can choose memory or CPU usage as the metric that will cause the HPA to scale the service up or down. In the ",(0,o.kt)("strong",{parentName:"p"},"Quantity")," field, enter the percentage of the workload's memory or CPU usage that will cause the HPA to scale the service. To configure other HPA metrics, including metrics available from Prometheus, you need to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-kubectl/#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"manage HPAs using kubectl"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to create the HPA."))),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Result:")," The HPA is deployed to the chosen namespace. You can view the HPA's status from the project's Resources ",">"," HPA view."),(0,o.kt)("h2",{id:"get-hpa-metrics-and-status"},"Get HPA Metrics and Status"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that has the HPA and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery ",">"," HorizontalPodAutoscalers"),". The ",(0,o.kt)("strong",{parentName:"li"},"HorizontalPodAutoscalers")," page shows the number of current replicas.")),(0,o.kt)("p",null,"For more detailed metrics and status of a specific HPA, click the name of the HPA. This leads to the HPA detail page."),(0,o.kt)("h2",{id:"deleting-an-hpa"},"Deleting an HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that has the HPA you want to delete and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery ",">"," HorizontalPodAutoscalers"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Resources ",">"," HPA"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the HPA which you would like to delete and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee ",">"," Delete"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete")," to confirm.")),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Result:")," The HPA is deleted from the current cluster."))}h.isMDXComponent=!0}}]);