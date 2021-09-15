"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[8459],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,v=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4477:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],a={title:"How to Configure Out-of-tree vSphere Cloud Provider",shortTitle:"Out-of-tree Cloud Provider",position:10},s=void 0,p={unversionedId:"cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index",id:"cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index",isDocsHomePage:!1,title:"How to Configure Out-of-tree vSphere Cloud Provider",description:"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins.",source:"@site/docs/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index.md",sourceDirName:"cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree",slug:"/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/index.md",tags:[],version:"current",frontMatter:{title:"How to Configure Out-of-tree vSphere Cloud Provider",shortTitle:"Out-of-tree Cloud Provider",position:10},sidebar:"tutorialSidebar",previous:{title:"Setting up the vSphere Cloud Provider",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/cloud-providers/vsphere/index"},next:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/rancher-docusaurus/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/vsphere-volume-migration"}},u=[{value:"1. Create a vSphere cluster",id:"1-create-a-vsphere-cluster",children:[]},{value:"2. Install the CPI plugin",id:"2-install-the-cpi-plugin",children:[]},{value:"3. Installing the CSI plugin",id:"3-installing-the-csi-plugin",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,o.kt)("p",null,"This page covers how to install the Cloud Provider Interface (CPI) and Cloud Storage Interface (CSI) plugins after bringing up a cluster."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The vSphere version must be 7.0u1 or higher. "),(0,o.kt)("p",null,"The Kubernetes version must be 1.19 or higher."),(0,o.kt)("p",null,"Using the vSphere out-of-tree cloud provider requires Linux nodes and is not supported on Windows."),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The Cloud Provider Interface (CPI) should be installed first before installing the Cloud Storage Interface (CSI)."),(0,o.kt)("h3",{id:"1-create-a-vsphere-cluster"},"1. Create a vSphere cluster"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"VMware vSphere")," or ",(0,o.kt)("strong",{parentName:"li"},"Custom"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Basics")," tab in the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Configuration")," section, set the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Provider")," to ",(0,o.kt)("strong",{parentName:"li"},"vSphere"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Add-On Config")," tab, the vSphere Cloud Provider (CPI) and Storage Provider (CSI) options."),(0,o.kt)("li",{parentName:"ol"},"Finish creating your cluster.")),(0,o.kt)("h3",{id:"2-install-the-cpi-plugin"},"2. Install the CPI plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where the vSphere CPI plugin will be installed and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace ",">"," Charts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"vSphere CPI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required vCenter details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"vSphere CPI initializes all nodes with ProviderID which is needed by the vSphere CSI driver. Check if all nodes are initialized with the ProviderID before installing CSI driver with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')))),(0,o.kt)("h3",{id:"3-installing-the-csi-plugin"},"3. Installing the CSI plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster where the vSphere CSI plugin will be installed and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace ",">"," Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"vSphere CSI"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill out the required vCenter details. On the ",(0,o.kt)("strong",{parentName:"li"},"Features")," tab, set ",(0,o.kt)("strong",{parentName:"li"},"Enable CSI Migration")," to ",(0,o.kt)("strong",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab, fill out the details for the StorageClass. This chart creates a StorageClass with the ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," as the provisioner. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("h1",{id:"using-the-csi-driver-for-provisioning-volumes"},"Using the CSI driver for provisioning volumes"),(0,o.kt)("p",null,"The CSI chart by default creates a storageClass."),(0,o.kt)("p",null,"If that option was not selected while launching the chart, create a storageClass with the ",(0,o.kt)("inlineCode",{parentName:"p"},"csi.vsphere.vmware.com")," as the provisioner."),(0,o.kt)("p",null,"All volumes provisioned using this StorageClass will get provisioned by the CSI driver."))}d.isMDXComponent=!0}}]);