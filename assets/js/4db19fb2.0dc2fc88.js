"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[47099],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"ConfigMaps",position:3061},c=void 0,p={unversionedId:"k8s-in-rancher/configmaps",id:"k8s-in-rancher/configmaps",isDocsHomePage:!1,title:"ConfigMaps",description:"While most types of Kubernetes secrets store sensitive information, ConfigMaps store general configuration information, such as a group of config files. Because ConfigMaps don't store sensitive information, they can be updated automatically, and therefore don't require their containers to be restarted following update (unlike most secret types, which require manual updates and a container restart to take effect).",source:"@site/docs/k8s-in-rancher/configmaps.md",sourceDirName:"k8s-in-rancher",slug:"/k8s-in-rancher/configmaps",permalink:"/rancher-docusaurus/next/k8s-in-rancher/configmaps",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/k8s-in-rancher/configmaps.md",tags:[],version:"current",frontMatter:{title:"ConfigMaps",position:3061},sidebar:"tutorialSidebar",previous:{title:"Encrypting HTTP Communication",permalink:"/rancher-docusaurus/next/k8s-in-rancher/certificates"},next:{title:"Background Information on HPAs",permalink:"/rancher-docusaurus/next/k8s-in-rancher/horitzontal-pod-autoscaler/hpa-background"}},u=[{value:"What&#39;s Next?",id:"whats-next",children:[]}],l={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While most types of Kubernetes secrets store sensitive information, ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"ConfigMaps")," store general configuration information, such as a group of config files. Because ConfigMaps don't store sensitive information, they can be updated automatically, and therefore don't require their containers to be restarted following update (unlike most secret types, which require manual updates and a container restart to take effect)."),(0,o.kt)("p",null,"ConfigMaps accept key value pairs in common string formats, like config files or JSON blobs. After you upload a config map, any workload can reference it as either an environment variable or a volume mount."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster that has the workload that should reference a ConfigMap and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"More Resources ",">"," Core ",">"," ConfigMaps"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the Config Map."),(0,o.kt)("p",{parentName:"li"},">",(0,o.kt)("strong",{parentName:"p"},"Note:")," Kubernetes classifies ConfigMaps as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your ConfigMaps must have a unique name among the other certificates, registries, and secrets within your workspace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," you want to add Config Map to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Data")," tab, add a key-value pair to your ConfigMap. Add as many values as you need.  You can add multiple key value pairs to the ConfigMap by copying and pasting. Alternatively, use ",(0,o.kt)("strong",{parentName:"p"},"Read from File")," to add the data. Note: If you need to store sensitive data, ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/secrets/"},"use a secret"),", not a ConfigMap.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your ConfigMap is added to the namespace. You can view it in the Rancher UI from the ",(0,o.kt)("strong",{parentName:"p"},"Resources ",">"," Config Maps")," view."),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Now that you have a ConfigMap added to a namespace, you can add it to a workload that you deploy from the namespace of origin. You can use the ConfigMap to specify information for you application to consume, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application environment variables."),(0,o.kt)("li",{parentName:"ul"},"Specifying parameters for a Volume mounted to the workload.")),(0,o.kt)("p",null,"For more information on adding ConfigMaps to a workload, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/workloads/deploy-workloads/"},"Deploying Workloads"),"."))}f.isMDXComponent=!0}}]);