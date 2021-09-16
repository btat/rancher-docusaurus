"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[28757],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6854:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",position:3060},s=void 0,l={unversionedId:"k8s-in-rancher/certificates",id:"version-2.4.15/k8s-in-rancher/certificates",isDocsHomePage:!1,title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",source:"@site/versioned_docs/version-2.4.15/k8s-in-rancher/certificates.md",sourceDirName:"k8s-in-rancher",slug:"/k8s-in-rancher/certificates",permalink:"/rancher-docusaurus/k8s-in-rancher/certificates",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/k8s-in-rancher/certificates.md",tags:[],version:"2.4.15",frontMatter:{title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",position:3060},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Skipped and Not Applicable Tests",permalink:"/rancher-docusaurus/cis-scans/skipped-tests"},next:{title:"ConfigMaps",permalink:"/rancher-docusaurus/k8s-in-rancher/configmaps"}},u=[{value:"1. Create a Secret",id:"1-create-a-secret",children:[]},{value:"2. Add the Secret to an Ingress",id:"2-add-the-secret-to-an-ingress",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you create an ingress within Rancher/Kubernetes, you must provide it with a secret that includes a TLS private key and certificate, which are used to encrypt and decrypt communications that come through the ingress. You can make certificates available for ingress use by adding the certificate to the ingress deployment."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," You must have a TLS private key and certificate available to upload."),(0,i.kt)("h3",{id:"1-create-a-secret"},"1. Create a Secret"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy your ingress and click ",(0,i.kt)("strong",{parentName:"li"},"More Resources ",">"," Core ",">"," Secrets"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"TLS Certificate"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the secret. Note: Your secret must have a unique name among the other certificates, registries, and secrets within your project/workspace."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Private Key")," field, either copy and paste your certificate's private key into the text box (include the header and footer), or click ",(0,i.kt)("strong",{parentName:"li"},"Read from a file")," to browse to the private key on your file system. If possible, we recommend using ",(0,i.kt)("strong",{parentName:"li"},"Read from a file")," to reduce likelihood of error. Note: Private key files end with an extension of ",(0,i.kt)("inlineCode",{parentName:"li"},".key"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Certificate")," field, either copy and paste your certificate into the text box (include the header and footer), or click ",(0,i.kt)("strong",{parentName:"li"},"Read from a file")," to browse to the certificate on your file system. If possible, we recommend using ",(0,i.kt)("strong",{parentName:"li"},"Read from a file")," to reduce likelihood of error. Note: Certificate files end with an extension of ",(0,i.kt)("inlineCode",{parentName:"li"},".crt"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("h3",{id:"2-add-the-secret-to-an-ingress"},"2. Add the Secret to an Ingress"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy your ingress and click ",(0,i.kt)("strong",{parentName:"li"},"Service Discovery ",">"," Ingresses"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Namespace")," of the ingress."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Name")," for the ingress."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Certificates")," tab, select the secret containing your certificate and private key."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Now you can add the certificate when launching an ingress within the current project or namespace. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/load-balancers-and-ingress/ingress/"},"Adding Ingress"),"."))}d.isMDXComponent=!0}}]);