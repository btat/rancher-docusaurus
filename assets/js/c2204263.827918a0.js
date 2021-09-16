"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[95009],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57874:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={title:"Rollbacks",position:3},s=void 0,i={unversionedId:"installation/install-rancher-on-k8s/rollbacks",id:"version-2.4.15/installation/install-rancher-on-k8s/rollbacks",isDocsHomePage:!1,title:"Rollbacks",description:"- Rolling Back to Rancher v2.5.0+",source:"@site/versioned_docs/version-2.4.15/installation/install-rancher-on-k8s/rollbacks.md",sourceDirName:"installation/install-rancher-on-k8s",slug:"/installation/install-rancher-on-k8s/rollbacks",permalink:"/rancher-docusaurus/installation/install-rancher-on-k8s/rollbacks",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/installation/install-rancher-on-k8s/rollbacks.md",tags:[],version:"2.4.15",frontMatter:{title:"Rollbacks",position:3},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Install/Upgrade Rancher on a Kubernetes Cluster",permalink:"/rancher-docusaurus/installation/install-rancher-on-k8s/index"},next:{title:"Rendering the Helm Template in an Air Gapped Environment",permalink:"/rancher-docusaurus/installation/install-rancher-on-k8s/upgrades/air-gap-upgrade"}},p=[{value:"Scale the Rancher Deployment to 0",id:"scale-the-rancher-deployment-to-0",children:[]},{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",children:[]},{value:"Roll back to a previous Rancher version",id:"roll-back-to-a-previous-rancher-version",children:[]}],h={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-5-0"},"Rolling Back to Rancher v2.5.0+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-2-v2-4"},"Rolling Back to Rancher v2.2-v2.4+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-0-v2-1"},"Rolling Back to Rancher v2.0-v2.1"))),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v250"},"Rolling Back to Rancher v2.5.0+"),(0,o.kt)("p",null,"To roll back to Rancher v2.5.0+, use the ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups")," application and restore Rancher from backup."),(0,o.kt)("p",null,"Rancher has to be started with the lower/previous version after a rollback."),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Important"),"\n",">","\n",">"," ",(0,o.kt)("em",{parentName:"p"}," Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to ",(0,o.kt)("a",{parentName:"em",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher"},"migrate rancher."),">"," ")," While restoring Rancher on the same setup, the Rancher deployment is manually scaled down before the restore starts, then the operator will scale it back up once the restore completes. So Rancher will be unavailable during the restore."),(0,o.kt)("h3",{id:"scale-the-rancher-deployment-to-0"},"Scale the Rancher Deployment to 0"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," local"),"."),(0,o.kt)("li",{parentName:"ol"},"From the menu on the left, click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Workload"),", click on ",(0,o.kt)("strong",{parentName:"li"},"Deployments"),"."),(0,o.kt)("li",{parentName:"ol"},"At the top, click on the dropdown to adjust the filter. Select ",(0,o.kt)("strong",{parentName:"li"},"cattle-system")," as the filter."),(0,o.kt)("li",{parentName:"ol"},"Find the row for the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher")," deployment and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("strong",{parentName:"li"},"Replicas")," to 0."),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom and click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups ",">"," Restore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Restore with the form, or with YAML.  For creating the Restore resource using form, refer to the  ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/configuration/restore-config"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/examples"},"examples.")," The following is an example Restore custom resource:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"  For help configuring the Restore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/configuration/restore-config/"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/examples/"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The backup file is created and updated to the target storage location. The resources are restored in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,o.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,o.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,o.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Follow these steps to get the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl get pods -n cattle-resources-system\nkubectl logs -n cattle-resources-system -f\n")),(0,o.kt)("h3",{id:"roll-back-to-a-previous-rancher-version"},"Roll back to a previous Rancher version"),(0,o.kt)("p",null,"Rancher can be rolled back using the Helm CLI. To roll back to the previous version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher -n cattle-system\n")),(0,o.kt)("p",null,"If the previous revision is not the intended target, you can specify a revision to roll back to. To see the deployment history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm history rancher -n cattle-system\n")),(0,o.kt)("p",null,"When the target revision is determined, perform the rollback. This example will roll back to revision ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher 3 -n cattle-system\n")),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v22-v24"},"Rolling Back to Rancher v2.2-v2.4+"),(0,o.kt)("p",null,"To roll back to Rancher before v2.5, follow the procedure detailed here: ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/backups/restore/rke-restore/"},"Restoring Backups \u2014 Kubernetes installs")," Restoring a snapshot of the Rancher server cluster will revert Rancher to the version and state at the time of the snapshot."),(0,o.kt)("p",null,"For information on how to roll back Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/single-node-rollbacks"},"this page.")),(0,o.kt)("p",null,">"," Managed clusters are authoritative for their state. This means restoring the rancher server will not revert workload deployments or changes made on managed clusters after the snapshot was taken."),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v20-v21"},"Rolling Back to Rancher v2.0-v2.1"),(0,o.kt)("p",null,"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/backups/restore/rke-restore/v2.0-v2.1"},"here")," and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible."))}u.isMDXComponent=!0}}]);