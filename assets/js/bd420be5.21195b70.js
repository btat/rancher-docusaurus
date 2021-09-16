"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[71921],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10949:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",position:3063},l=void 0,c={unversionedId:"k8s-in-rancher/registries",id:"version-2.5.9/k8s-in-rancher/registries",isDocsHomePage:!1,title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",source:"@site/versioned_docs/version-2.5.9/k8s-in-rancher/registries.md",sourceDirName:"k8s-in-rancher",slug:"/k8s-in-rancher/registries",permalink:"/rancher-docusaurus/2.5.9/k8s-in-rancher/registries",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/k8s-in-rancher/registries.md",tags:[],version:"2.5.9",frontMatter:{title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",position:3063},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/rancher-docusaurus/2.5.9/k8s-in-rancher/load-balancers-and-ingress/load-balancers"},next:{title:"Secrets",permalink:"/rancher-docusaurus/2.5.9/k8s-in-rancher/secrets"}},p=[{value:"Using the Private Registry with the Rancher UI",id:"using-the-private-registry-with-the-rancher-ui",children:[]},{value:"Using the Private Registry with kubectl",id:"using-the-private-registry-with-kubectl",children:[]}],u={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Registries are Kubernetes secrets containing credentials used to authenticate with ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"private Docker registries"),". "),(0,i.kt)("p",null,'The word "registry" can mean two things, depending on whether it is used to refer to a Docker or Kubernetes registry:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Docker registry")," contains Docker images that you can pull in order to use them in your deployment. The registry is a stateless, scalable server side application that stores and lets you distribute Docker images."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes registry")," is an image pull secret that your deployment uses to authenticate with a Docker registry.")),(0,i.kt)("p",null,"Deployments use the Kubernetes registry secret to authenticate with a private Docker registry and then pull a Docker image hosted on it."),(0,i.kt)("p",null,"Currently, deployments pull the private registry credentials automatically only if the workload is created in the Rancher UI and not when it is created via kubectl."),(0,i.kt)("h1",{id:"creating-a-registry"},"Creating a Registry"),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"private registry")," available to use."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a registry and click ",(0,i.kt)("strong",{parentName:"p"},"Explore"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation lick ",(0,i.kt)("strong",{parentName:"p"},"More Resources ",">"," Core ",">"," Secrets"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Registry"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note:")," Kubernetes classifies secrets, certificates, and registries all as ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a namespace for the registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your secret is added to the project or namespace, depending on the scope you chose."),(0,i.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI from the ",(0,i.kt)("strong",{parentName:"li"},"Resources ",">"," Registries")," view."),(0,i.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,i.kt)("h1",{id:"using-a-private-registry"},"Using a Private Registry"),(0,i.kt)("p",null,"You can deploy a workload with an image from a private registry through the Rancher UI, or with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("h3",{id:"using-the-private-registry-with-the-rancher-ui"},"Using the Private Registry with the Rancher UI"),(0,i.kt)("p",null,"To deploy a workload with an image from your private registry,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy a workload and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Workload"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the type of workload you want to create."),(0,i.kt)("li",{parentName:"ol"},"Enter a unique name for the workload and choose a namespace."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Container Image")," field, enter the URL of the path to the image in your private registry. For example, if your private registry is on Quay.io, you could use ",(0,i.kt)("inlineCode",{parentName:"li"},"quay.io/\\<Quay profile name\\>/\\<Image name\\>"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your deployment should launch, authenticate using the private registry credentials you added in the Rancher UI, and pull the Docker image that you specified."),(0,i.kt)("h3",{id:"using-the-private-registry-with-kubectl"},"Using the Private Registry with kubectl"),(0,i.kt)("p",null,"When you create the workload using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to configure the pod so that its YAML has the path to the image in the private registry. You also have to create and reference the registry secret because the pod only automatically gets access to the private registry credentials if it is created in the Rancher UI."),(0,i.kt)("p",null,"The secret has to be created in the same namespace where the workload gets deployed."),(0,i.kt)("p",null,"Below is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"pod.yml")," for a workload that uses an image from a private registry. In this example, the pod uses an image from Quay.io, and the .yml specifies the path to the image. The pod authenticates with the registry using credentials stored in a Kubernetes secret called ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),", which is specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecrets")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n  - name: private-reg-container\n    image: quay.io/\\<Quay profile name\\>/\\<image name\\>\n  imagePullSecrets:\n  - name: testquay\n")),(0,i.kt)("p",null,"In this example, the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay")," is in the default namespace."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the secret with the private registry credentials. This command creates the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry testquay \\\n    --docker-server=quay.io \\\n    --docker-username=\\<Profile name\\> \\\n    --docker-password=\\<password\\>\n")),(0,i.kt)("p",null,"To see how the secret is stored in Kubernetes, you can use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl get secret testquay --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),(0,i.kt)("p",null,"The result looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"auths":{"quay.io":{"username":"\\<Profile name\\>","password":"\\<password\\>","auth":"c291bXlhbGo6dGVzdGFiYzEyMw=="}}}\n')),(0,i.kt)("p",null,"After the workload is deployed, you can check if the image was pulled successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get events\n")),(0,i.kt)("p",null,"The result should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'14s         Normal    Scheduled          Pod    Successfully assigned default/private-reg2 to minikube\n11s         Normal    Pulling            Pod    pulling image "quay.io/\\<Profile name\\>/\\<image name\\>"\n10s         Normal    Pulled             Pod    Successfully pulled image "quay.io/\\<Profile name\\>/\\<image name\\>"\n')),(0,i.kt)("p",null,"For more information, refer to the Kubernetes documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-pod-that-uses-your-secret"},"creating a pod that uses your secret.")))}h.isMDXComponent=!0}}]);