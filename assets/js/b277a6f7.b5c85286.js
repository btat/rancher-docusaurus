"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[64485],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||n;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60066:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Setting up Existing Storage",position:1},l=void 0,u={unversionedId:"cluster-admin/volumes-and-storage/attaching-existing-storage",id:"version-2.4.15/cluster-admin/volumes-and-storage/attaching-existing-storage",isDocsHomePage:!1,title:"Setting up Existing Storage",description:"This section describes how to set up existing persistent storage for workloads in Rancher.",source:"@site/versioned_docs/version-2.4.15/cluster-admin/volumes-and-storage/attaching-existing-storage.md",sourceDirName:"cluster-admin/volumes-and-storage",slug:"/cluster-admin/volumes-and-storage/attaching-existing-storage",permalink:"/rancher-docusaurus/cluster-admin/volumes-and-storage/attaching-existing-storage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-admin/volumes-and-storage/attaching-existing-storage.md",tags:[],version:"2.4.15",frontMatter:{title:"Setting up Existing Storage",position:1},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/rancher-docusaurus/cluster-admin/upgrading-kubernetes"},next:{title:"Using an External Ceph Driver",permalink:"/rancher-docusaurus/cluster-admin/volumes-and-storage/ceph"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Set up persistent storage",id:"1-set-up-persistent-storage",children:[]},{value:"2. Add a PersistentVolume that refers to the persistent storage",id:"2-add-a-persistentvolume-that-refers-to-the-persistent-storage",children:[]},{value:"3. Use the Storage Class for Pods Deployed with a StatefulSet",id:"3-use-the-storage-class-for-pods-deployed-with-a-statefulset",children:[]}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes how to set up existing persistent storage for workloads in Rancher."),(0,n.kt)("p",null,">"," This section assumes that you understand the Kubernetes concepts of persistent volumes and persistent volume claims. For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"../how-storage-works"},"how storage works.")),(0,n.kt)("p",null,"To set up storage, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-set-up-persistent-storage"},"Set up persistent storage.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-add-a-persistentvolume-that-refers-to-the-persistent-storage"},"Add a PersistentVolume that refers to the persistent storage.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-use-the-persistentvolume-for-pods-deployed-with-a-statefulset"},"Use the PersistentVolume for Pods Deployed with a StatefulSet."))),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To create a persistent volume as a Kubernetes resource, you must have the ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage Volumes")," ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#project-role-reference"},"role.")),(0,n.kt)("li",{parentName:"ul"},"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider.")),(0,n.kt)("h3",{id:"1-set-up-persistent-storage"},"1. Set up persistent storage"),(0,n.kt)("p",null,"Creating a persistent volume in Rancher will not create a storage volume. It only creates a Kubernetes resource that maps to an existing volume. Therefore, before you can create a persistent volume as a Kubernetes resource, you must have storage provisioned."),(0,n.kt)("p",null,"The steps to set up a persistent storage device will differ based on your infrastructure. We provide examples of how to set up storage using ",(0,n.kt)("a",{parentName:"p",href:"../examples/vsphere"},"vSphere,")," ",(0,n.kt)("a",{parentName:"p",href:"../examples/nfs"},"NFS,")," or Amazon's ",(0,n.kt)("a",{parentName:"p",href:"../examples/ebs"},"EBS.")," "),(0,n.kt)("p",null,"If you have a pool of block storage, and you don't want to use a cloud provider, Longhorn could help you provide persistent storage to your Kubernetes cluster. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/longhorn"},"this page.")),(0,n.kt)("h3",{id:"2-add-a-persistentvolume-that-refers-to-the-persistent-storage"},"2. Add a PersistentVolume that refers to the persistent storage"),(0,n.kt)("p",null,"These steps describe how to set up a PersistentVolume at the cluster level in Kubernetes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the cluster where you want to add a persistent volume and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Storage ",">"," Persistent Volumes"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for the persistent volume."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Volume Plugin")," for the disk type or service that you're using. When adding storage to a cluster that's hosted by a cloud provider, use the cloud provider's plug-in for cloud storage. For example, if you have a Amazon EC2 cluster and you want to use cloud storage for it, you must use the ",(0,n.kt)("inlineCode",{parentName:"li"},"Amazon EBS Disk")," volume plugin."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Capacity")," of your volume in gigabytes."),(0,n.kt)("li",{parentName:"ol"},"Complete the ",(0,n.kt)("strong",{parentName:"li"},"Plugin Configuration")," form. Each plugin type requires information specific to the vendor of disk type. For help regarding each plugin's form and the information that's required, refer to the plug-in's vendor documentation."),(0,n.kt)("li",{parentName:"ol"},"Optional: In the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," form, configure the ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"access modes.")," This options sets how many nodes can access the volume, along with the node read/write permissions. The ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Kubernetes Documentation")," includes a table that lists which access modes are supported by the plugins available."),(0,n.kt)("li",{parentName:"ol"},"Optional: In the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," form, configure the ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options"},"mount options.")," Each volume plugin allows you to specify additional command line options during the mounting process. Consult each plugin's vendor documentation for the mount options available."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your new persistent volume is created."),(0,n.kt)("h3",{id:"3-use-the-storage-class-for-pods-deployed-with-a-statefulset"},"3. Use the Storage Class for Pods Deployed with a StatefulSet"),(0,n.kt)("p",null,"StatefulSets manage the deployment and scaling of Pods while maintaining a sticky identity for each Pod. In this StatefulSet, we will configure a VolumeClaimTemplate. Each Pod managed by the StatefulSet will be deployed with a PersistentVolumeClaim based on this VolumeClaimTemplate. The PersistentVolumeClaim will refer to the PersistentVolume that we created. Therefore, when each Pod managed by the StatefulSet is deployed, it will be bound a PersistentVolume as defined in its PersistentVolumeClaim."),(0,n.kt)("p",null,"You can configure storage for the StatefulSet during or after workload creation."),(0,n.kt)("p",null,"The following steps describe how to assign existing storage to a new StatefulSet:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the cluster where you want to configure storage for the StatefulSet and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Workload ",">"," StatefulSets"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the namespace where the workload will be deployed."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for the StatefulSet."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Volume Claim Templates")," tab, click ",(0,n.kt)("strong",{parentName:"li"},"Add Claim Template"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Use an existing Persistent Volume"),"."),(0,n.kt)("li",{parentName:"ol"},"In the Persistent Volumes field, select the Persistent Volume that you created."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Launch"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," When the workload is deployed, it will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."),(0,n.kt)("p",null,"The following steps describe how to assign persistent storage to an existing workload:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the cluster where you want to configure storage for the StatefulSet and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Workload ",">"," StatefulSets"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the workload that you want to add the persistent storage to. Click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Volume Claim Templates")," tab, click ",(0,n.kt)("strong",{parentName:"li"},"Add Claim Template"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Use an existing Persistent Volume"),"."),(0,n.kt)("li",{parentName:"ol"},"In the Persistent Volumes field, select the Persistent Volume that you created."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Launch"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The workload will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."))}m.isMDXComponent=!0}}]);