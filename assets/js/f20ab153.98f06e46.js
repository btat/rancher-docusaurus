"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[12368],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(r),k=n,m=h["".concat(l,".").concat(k)]||h[k]||u[k]||o;return r?a.createElement(m,c(c({ref:t},p),{},{components:r})):a.createElement(m,c({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),c=["components"],i={title:"Intro",position:1},l=void 0,s={unversionedId:"backups/index",id:"backups/index",isDocsHomePage:!1,title:"Intro",description:"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster.",source:"@site/docs/backups/index.md",sourceDirName:"backups",slug:"/backups/index",permalink:"/rancher-docusaurus/next/backups/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backups/index.md",tags:[],version:"current",frontMatter:{title:"Intro",position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/rancher-docusaurus/next/backups/examples"},next:{title:"Migrating Rancher to a New Cluster",permalink:"/rancher-docusaurus/next/backups/migrating-rancher"}},p=[{value:"Installing rancher-backup with the Rancher UI",id:"installing-rancher-backup-with-the-rancher-ui",children:[]},{value:"RBAC",id:"rbac",children:[]},{value:"Example values.yaml for the rancher-backup Helm Chart",id:"example-valuesyaml-for-the-rancher-backup-helm-chart",children:[]}],u={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is used to backup and restore Rancher on any Kubernetes cluster. This application is a Helm chart, and it can be deployed through the Rancher ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace")," page, or by using the Helm CLI. The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/main/charts/rancher-backup"},"here.")),(0,o.kt)("p",null,"The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster."),(0,o.kt)("h1",{id:"backup-and-restore-for-rancher-installed-with-docker"},"Backup and Restore for Rancher installed with Docker"),(0,o.kt)("p",null,"For Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"./docker-installs/docker-backups"},"this page")," to perform backups and ",(0,o.kt)("a",{parentName:"p",href:"./docker-installs/docker-restores"},"this page")," to perform restores."),(0,o.kt)("h1",{id:"how-backups-and-restores-work"},"How Backups and Restores Work"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator introduces three custom resources: Backups, Restores, and ResourceSets. The following cluster-scoped custom resource definitions are added to the cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backups.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resourcesets.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"restores.resources.cattle.io"))),(0,o.kt)("p",null,"The ResourceSet defines which Kubernetes resources need to be backed up. The ResourceSet is not available to be configured in the Rancher UI because the values required to back up Rancher are predefined. This ResourceSet should not be modified."),(0,o.kt)("p",null,"When a Backup custom resource is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to get the resources in the ResourceSet (specifically, the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-resource-set"),") that the Backup custom resource refers to."),(0,o.kt)("p",null,"The operator then creates the backup file in the .tar.gz format and stores it in the location configured in the Backup resource."),(0,o.kt)("p",null,"When a Restore custom resource is created, the operator accesses the backup .tar.gz file specified by the Restore, and restores the application from that file."),(0,o.kt)("p",null,"The Backup and Restore custom resources can be created in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,o.kt)("h1",{id:"installing-the-rancher-backup-operator"},"Installing the rancher-backup Operator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator can be installed from the Rancher UI, or with the Helm CLI. In both cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is installed on the Kubernetes cluster running the Rancher server. It is a cluster-admin only feature and available only for the ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster.  (",(0,o.kt)("em",{parentName:"p"},"If you do not see ",(0,o.kt)("inlineCode",{parentName:"em"},"rancher-backup")," in the Rancher UI, you may have selected the wrong cluster."),")"),(0,o.kt)("h3",{id:"installing-rancher-backup-with-the-rancher-ui"},"Installing rancher-backup with the Rancher UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace ",">"," Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Rancher Backups"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),"."),(0,o.kt)("li",{parentName:"ol"},"Optional: Configure the default storage location. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"./configuration/storage-config"},"configuration section.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is installed."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Dashboard,")," you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator listed under ",(0,o.kt)("strong",{parentName:"p"},"Deployments"),"."),(0,o.kt)("p",null,"To configure the backup app in Rancher, go to the left navigation menu and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups"),"."),(0,o.kt)("h3",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"Only the rancher admins and the local cluster\u2019s cluster-owner can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Chart"),(0,o.kt)("li",{parentName:"ul"},"See the navigation links for Backup and Restore CRDs"),(0,o.kt)("li",{parentName:"ul"},"Perform a backup or restore by creating a Backup CR and Restore CR respectively"),(0,o.kt)("li",{parentName:"ul"},"List backups/restores performed so far")),(0,o.kt)("h1",{id:"backing-up-rancher"},"Backing up Rancher"),(0,o.kt)("p",null,"A backup is performed by creating a Backup custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"./back-up-rancher"},"this page.")),(0,o.kt)("h1",{id:"restoring-rancher"},"Restoring Rancher"),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"./restoring-rancher"},"this page.")),(0,o.kt)("h1",{id:"migrating-rancher-to-a-new-cluster"},"Migrating Rancher to a New Cluster"),(0,o.kt)("p",null,"A migration is performed by following ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher"},"these steps.")),(0,o.kt)("h1",{id:"default-storage-location-configuration"},"Default Storage Location Configuration"),(0,o.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible or Minio object store."),(0,o.kt)("p",null,"For information on configuring these options, refer to ",(0,o.kt)("a",{parentName:"p",href:"./configuration/storage-config"},"this page.")),(0,o.kt)("h3",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,o.kt)("p",null,"The example ",(0,o.kt)("a",{parentName:"p",href:"./configuration/storage-config/#example-values-yaml-for-the-rancher-backup-helm-chart"},"values.yaml file")," can be used to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used to install it."))}h.isMDXComponent=!0}}]);