"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[1304],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7947:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Tips for Setting Up Containers",position:100},c=void 0,u={unversionedId:"best-practices/rancher-managed/containers",id:"best-practices/rancher-managed/containers",isDocsHomePage:!1,title:"Tips for Setting Up Containers",description:"Running well-built containers can greatly impact the overall performance and security of your environment.",source:"@site/docs/best-practices/rancher-managed/containers.md",sourceDirName:"best-practices/rancher-managed",slug:"/best-practices/rancher-managed/containers",permalink:"/rancher-docusaurus/best-practices/rancher-managed/containers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/best-practices/rancher-managed/containers.md",tags:[],version:"current",frontMatter:{title:"Tips for Setting Up Containers",position:100},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/rancher-docusaurus/best-practices/index"},next:{title:"Best Practices for Rancher Managed Clusters",permalink:"/rancher-docusaurus/best-practices/rancher-managed/index"}},l=[{value:"Use a Common Container OS",id:"use-a-common-container-os",children:[]},{value:"Start with a FROM scratch container",id:"start-with-a-from-scratch-container",children:[]},{value:"Run Container Processes as Unprivileged",id:"run-container-processes-as-unprivileged",children:[]},{value:"Define Resource Limits",id:"define-resource-limits",children:[]},{value:"Define Resource Requirements",id:"define-resource-requirements",children:[]},{value:"Liveness and Readiness Probes",id:"liveness-and-readiness-probes",children:[]}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Running well-built containers can greatly impact the overall performance and security of your environment."),(0,a.kt)("p",null,"Below are a few tips for setting up your containers."),(0,a.kt)("p",null,"For a more detailed discussion of security for containers, you can also refer to Rancher's ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/complete-guide-container-security"},"Guide to Container Security.")),(0,a.kt)("h3",{id:"use-a-common-container-os"},"Use a Common Container OS"),(0,a.kt)("p",null,"When possible, you should try to standardize on a common container base OS. "),(0,a.kt)("p",null,"Smaller distributions such as Alpine and BusyBox reduce container image size and generally have a smaller attack/vulnerability surface."),(0,a.kt)("p",null,"Popular distributions such as Ubuntu, Fedora, and CentOS are more field-tested and offer more functionality."),(0,a.kt)("h3",{id:"start-with-a-from-scratch-container"},"Start with a FROM scratch container"),(0,a.kt)("p",null,"If your microservice is a standalone static binary, you should use a FROM scratch container. "),(0,a.kt)("p",null,"The FROM scratch container is an ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"official Docker image")," that is empty so that you can use it to design minimal images."),(0,a.kt)("p",null,"This will have the smallest attack surface and smallest image size."),(0,a.kt)("h3",{id:"run-container-processes-as-unprivileged"},"Run Container Processes as Unprivileged"),(0,a.kt)("p",null,"When possible, use a non-privileged user when running processes within your container. While container runtimes provide isolation, vulnerabilities and attacks are still possible. Inadvertent or accidental host mounts can also be impacted if the container is running as root. For details on configuring a security context for a pod or container, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"Kubernetes docs"),"."),(0,a.kt)("h3",{id:"define-resource-limits"},"Define Resource Limits"),(0,a.kt)("p",null,"Apply CPU and memory limits to your pods. This can help manage the resources on your worker nodes and avoid a malfunctioning microservice from impacting other microservices."),(0,a.kt)("p",null,"In standard Kubernetes, you can set resource limits on the namespace level. In Rancher, you can set resource limits on the project level and they will propagate to all the namespaces within the project. For details, refer to the Rancher docs."),(0,a.kt)("p",null,"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project or namespace, all containers will require a respective CPU or Memory field set during creation. To avoid setting these limits on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,a.kt)("p",null,"The Kubernetes docs have more information on how resource limits can be set at the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"container level")," and the namespace level."),(0,a.kt)("h3",{id:"define-resource-requirements"},"Define Resource Requirements"),(0,a.kt)("p",null,"You should apply CPU and memory requirements to your pods. This is crucial for informing the scheduler which type of compute node your pod needs to be placed on, and ensuring it does not over-provision that node. In Kubernetes, you can set a resource requirement by defining ",(0,a.kt)("inlineCode",{parentName:"p"},"resources.requests")," in the resource requests field in a pod's container spec. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"Kubernetes docs"),"."),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Note:")," If you set a resource limit for the namespace that the pod is deployed in, and the container doesn't have a specific resource request, the pod will not be allowed to start. To avoid setting these fields on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,a.kt)("p",null,"It is recommended to define resource requirements on the container level because otherwise, the scheduler makes assumptions that will likely not be helpful to your application when the cluster experiences load."),(0,a.kt)("h3",{id:"liveness-and-readiness-probes"},"Liveness and Readiness Probes"),(0,a.kt)("p",null,"Set up liveness and readiness probes for your container. Unless your container completely crashes, Kubernetes will not know it's unhealthy unless you create an endpoint or mechanism that can report container status. Alternatively, make sure your container halts and crashes if unhealthy."),(0,a.kt)("p",null,"The Kubernetes docs show how to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"},"configure liveness and readiness probes for containers.")))}d.isMDXComponent=!0}}]);