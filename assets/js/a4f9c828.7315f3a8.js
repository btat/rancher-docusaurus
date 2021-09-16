"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[90352],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?t.createElement(g,u(u({ref:r},l),{},{components:n})):t.createElement(g,u({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=n[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51726:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],a={title:"Setting up the Google Compute Engine Cloud Provider",position:3},c=void 0,s={unversionedId:"cluster-provisioning/rke-clusters/cloud-providers/gce",id:"version-2.5.9/cluster-provisioning/rke-clusters/cloud-providers/gce",isDocsHomePage:!1,title:"Setting up the Google Compute Engine Cloud Provider",description:"In this section, you'll learn how to enable the Google Compute Engine (GCE) cloud provider for custom clusters in Rancher. A custom cluster is one in which Rancher installs Kubernetes on existing nodes.",source:"@site/versioned_docs/version-2.5.9/cluster-provisioning/rke-clusters/cloud-providers/gce.md",sourceDirName:"cluster-provisioning/rke-clusters/cloud-providers",slug:"/cluster-provisioning/rke-clusters/cloud-providers/gce",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/rke-clusters/cloud-providers/gce",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/cluster-provisioning/rke-clusters/cloud-providers/gce.md",tags:[],version:"2.5.9",frontMatter:{title:"Setting up the Google Compute Engine Cloud Provider",position:3},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Setting up the Azure Cloud Provider",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/rke-clusters/cloud-providers/azure"},next:{title:"Setting up Cloud Providers",permalink:"/rancher-docusaurus/2.5.9/cluster-provisioning/rke-clusters/cloud-providers/index"}},l=[],p={toc:l};function d(e){var r=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, you'll learn how to enable the Google Compute Engine (GCE) cloud provider for custom clusters in Rancher. A custom cluster is one in which Rancher installs Kubernetes on existing nodes."),(0,i.kt)("p",null,"The official Kubernetes documentation for the GCE cloud provider is ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#gce"},"here.")),(0,i.kt)("p",null,">"," ",(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," The service account of ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity and API")," access on GCE needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"Computer Admin")," permission."),(0,i.kt)("p",null,"If you are using Calico,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, go to the custom cluster and click *",(0,i.kt)("em",{parentName:"p"},"\u22ee ",">"," Edit YAML.")," Enter the following configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |- \n      [Global]\n      project-id=\\<your project ID, optional\\>\n      network-name=\\<your network, optional if using default network\\>\n      subnetwork-name=\\<your subnetwork of the above network, optional if using default network\\>\n      node-instance-prefix=\\<your instance group name/your instance name specific prefix, required\\>\n      node-tags=\\<your network tags, must patch one or some tags, required\\>\n  network:\n    options: \n      calico_cloud_provider: "gce"\n    plugin: "calico"\n')))),(0,i.kt)("p",null,"If you are using Canal or Flannel,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, go to the custom cluster and click *",(0,i.kt)("em",{parentName:"p"},"\u22ee ",">"," Edit YAML.")," Enter the following configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"rancher_kubernetes_engine_config:\n  cloud_provider: \n    name: gce\n    customCloudProvider: |- \n      [Global]\n      project-id=\\<your project ID, optional\\>\n      network-name=\\<your network, optional if using default network\\>\n      subnetwork-name=\\<your subnetwork of the above network, optional if using default network\\>\n      node-instance-prefix=\\<your instance group name/your instance name specific prefix, required\\>\n      node-tags=\\<your network tags, must patch one or some tags, required\\>\n  services: \n    kube_controller: \n      extra_args:\n        configure-cloud-routes: true # we need to allow the cloud provider configure the routes for the hosts\n")))))}d.isMDXComponent=!0}}]);