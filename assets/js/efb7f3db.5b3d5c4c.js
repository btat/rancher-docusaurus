"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[36002],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Cluster Templates",position:100},s=void 0,p={unversionedId:"admin-settings/cluster-templates",id:"admin-settings/cluster-templates",isDocsHomePage:!1,title:"Cluster Templates",description:"Cluster templates encompass both Kubernetes configuration and node pool configuration, allowing a single template to contain all the information Rancher needs to provision new nodes in a cloud provider and install Kubernetes on those nodes.",source:"@site/docs/admin-settings/cluster-templates.md",sourceDirName:"admin-settings",slug:"/admin-settings/cluster-templates",permalink:"/rancher-docusaurus/next/admin-settings/cluster-templates",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/cluster-templates.md",tags:[],version:"current",frontMatter:{title:"Cluster Templates",position:100},sidebar:"tutorialSidebar",previous:{title:"Custom Branding",permalink:"/rancher-docusaurus/next/admin-settings/branding"},next:{title:"Configuring a Global Default Private Registry",permalink:"/rancher-docusaurus/next/admin-settings/config-private-registry"}},u=[{value:"Kubernetes Distribution",id:"kubernetes-distribution",children:[]},{value:"Versioning",id:"versioning",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cluster templates encompass both Kubernetes configuration and node pool configuration, allowing a single template to contain all the information Rancher needs to provision new nodes in a cloud provider and install Kubernetes on those nodes."),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Cluster templates are provided as Helm charts. To use them, you will need to clone and fork the templates, change them according to your use case, and then install the Helm charts on the Rancher management cluster. When the Helm chart is installed on the Rancher management cluster, a new cluster resource is created, which Rancher uses to provision the new cluster."),(0,l.kt)("p",null,"After the cluster is provisioned using the template, no changes to the template will affect the cluster. After the cluster is created from the cluster template, its configuration and infrastructure can change, because no restrictions are enforced by cluster templates."),(0,l.kt)("h3",{id:"kubernetes-distribution"},"Kubernetes Distribution"),(0,l.kt)("p",null,"Cluster templates can use any Kubernetes distribution. For now, we provide an example with an RKE2 Kubernetes cluster. We may provide more examples in the future using other Kubernetes distributions."),(0,l.kt)("h3",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,"Rancher doesn't manage version control for cluster templates. Version control is handled in the repository containing the template's Helm chart."),(0,l.kt)("h1",{id:"rke2-cluster-template"},"RKE2 Cluster Template"),(0,l.kt)("p",null,"The example repository for an RKE2 cluster template is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/cluster-template-examples"},"here"),". As of Rancher v2.6.0, we provide an RKE2 cluster template and may add more in the future."),(0,l.kt)("h1",{id:"adding-a-cluster-template-to-rancher"},"Adding a Cluster Template to Rancher"),(0,l.kt)("p",null,"In this section, you'll learn how to add the cluster template to the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster's chart repo list. The result is that Rancher will include the cluster template as an option when users install new Kubernetes clusters."),(0,l.kt)("p",null,">"," ",(0,l.kt)("strong",{parentName:"p"},"Prerequisites:"),"\n",">","\n",">"," - You will need permission to install Helm charts on the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," Kubernetes cluster that Rancher is installed on.\n",">"," - In order for the chart to appear in the form for creating new clusters, the chart must have the annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io/type: cluster-template"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to a cluster template example repository. Rancher's examples are in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/cluster-template-examples"},"this GitHub repository.")," As of Rancher v2.6.0, we provide an RKE2 cluster template and add to more in the future."),(0,l.kt)("li",{parentName:"ol"},"Fork the repository."),(0,l.kt)("li",{parentName:"ol"},"Optional: Edit the cluster options by editing the ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," file. For help editing the file, see the cluster template's Helm chart README."),(0,l.kt)("li",{parentName:"ol"},"Add the chart repository to Rancher. Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,l.kt)("strong",{parentName:"li"},"Explore.")),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace ",">"," Chart Repositories.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Enter a name for the cluster template repository."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Git Repository containing Helm chart definitions.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Git Repo URL")," field, enter the URL for the repository. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/rancher/cluster-template-examples.git"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Git Branch")," field, enter the branch to use as the source for the template. Rancher's example repository uses ",(0,l.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The cluster template available from the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace")," in Rancher's ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster. It can now be used to deploy clusters."),(0,l.kt)("h1",{id:"creating-a-cluster-from-a-cluster-template"},"Creating a Cluster from a Cluster Template"),(0,l.kt)("p",null,">"," ",(0,l.kt)("strong",{parentName:"p"},"Prerequisites:"),"\n",">","\n",">"," - You will need permission to provision new Kubernetes clusters.\n",">"," - You will need cloud credentials for provisioning infrastructure using the template.\n",">"," - In order to show in the form for creating new clusters, the cluster template's Helm chart must have the ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io/type: cluster-template")," annotation."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Click the name of your cluster template."),(0,l.kt)("li",{parentName:"ol"},"Finish installing the Helm chart.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," After Rancher provisions the new cluster, it is managed in the same way as any other Rancher-launched Kubernetes cluster. You can configure any options through the UI if the cluster template has options for the user to choose from."),(0,l.kt)("h1",{id:"updating-a-cluster-created-from-a-cluster-template"},"Updating a Cluster Created from a Cluster Template"),(0,l.kt)("p",null,"You can update any clusters using a template from the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace ",">"," Installed Apps")," page, given there is a new version of a template being used by those clusters."),(0,l.kt)("h1",{id:"deploying-clusters-from-a-template-with-fleet"},"Deploying Clusters from a Template with Fleet"),(0,l.kt)("p",null,">"," ",(0,l.kt)("strong",{parentName:"p"},"Prerequisites:"),"\n",">","\n",">"," - You will need permission to provision new Kubernetes clusters.\n",">"," - You will need cloud credentials for provisioning infrastructure using the template.\n",">"," - In order to show in the form for creating new clusters, the cluster template's Helm chart must have the ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io/type:cluster-template")," annotation.\n",">"," - In order to use a template as part of continuous delivery/GitOps, the cluster template needs to be deployed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace of the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster.\n",">"," - All values must be set in the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," of the template.\n",">"," - Fleet repositories must follow the guidelines on ",(0,l.kt)("a",{parentName:"p",href:"http://fleet.rancher.io/gitrepo-structure/"},"this page.")," For RKE2 cluster templates, that means a ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file must be added to the repository."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,l.kt)("strong",{parentName:"li"},"Create.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create Cluster from Template."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," After Rancher provisions the new cluster, it is managed by Fleet."),(0,l.kt)("h1",{id:"uninstalling-cluster-templates"},"Uninstalling Cluster Templates"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace ",">"," Chart Repositories.")),(0,l.kt)("li",{parentName:"ol"},"Go to the chart repository for your cluster template and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee ",">"," Delete.")),(0,l.kt)("li",{parentName:"ol"},"Confirm the deletion.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The cluster template is uninstalled. This action does not affect clusters created with the cluster template."),(0,l.kt)("p",null,"An admin with access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster can also remove a cluster deployed via cluster templates through the ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace ",">"," Installed Apps")," page."),(0,l.kt)("h1",{id:"configuration-options"},"Configuration Options"),(0,l.kt)("p",null,"Cluster templates are flexible enough that they can be used to configure all of the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node configuration"),(0,l.kt)("li",{parentName:"ul"},"Node pools"),(0,l.kt)("li",{parentName:"ul"},"Pre-specified cloud credentials"),(0,l.kt)("li",{parentName:"ul"},"Enable/configure an authorized cluster endpoint to get kubectl access to the cluster without using Rancher as a proxy"),(0,l.kt)("li",{parentName:"ul"},"Install Rancher V2 monitoring"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes version"),(0,l.kt)("li",{parentName:"ul"},"Assign cluster members"),(0,l.kt)("li",{parentName:"ul"},"Infrastructure configuration such as AWS VPC/subnets or vSphere data center"),(0,l.kt)("li",{parentName:"ul"},"Cloud provider options"),(0,l.kt)("li",{parentName:"ul"},"Pod security options"),(0,l.kt)("li",{parentName:"ul"},"Network providers"),(0,l.kt)("li",{parentName:"ul"},"Ingress controllers"),(0,l.kt)("li",{parentName:"ul"},"Network security configuration"),(0,l.kt)("li",{parentName:"ul"},"Network plugins"),(0,l.kt)("li",{parentName:"ul"},"Private registry URL and credentials"),(0,l.kt)("li",{parentName:"ul"},"Add-ons"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes options, including configurations for Kubernetes components such as kube-api, kube-controller, kubelet, and services")),(0,l.kt)("p",null,"For details on how to configure the template, refer to the cluster template's Helm chart README."))}m.isMDXComponent=!0}}]);