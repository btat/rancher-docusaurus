"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[3380],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,f=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34342:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],s={title:"Restoring Rancher",position:2},i=void 0,p={unversionedId:"backups/restoring-rancher",id:"version-2.4.15/backups/restoring-rancher",isDocsHomePage:!1,title:"Restoring Rancher",description:"A restore is performed by creating a Restore custom resource.",source:"@site/versioned_docs/version-2.4.15/backups/restoring-rancher.md",sourceDirName:"backups",slug:"/backups/restoring-rancher",permalink:"/rancher-docusaurus/backups/restoring-rancher",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/backups/restoring-rancher.md",tags:[],version:"2.4.15",frontMatter:{title:"Restoring Rancher",position:2},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Migrating Rancher to a New Cluster",permalink:"/rancher-docusaurus/backups/migrating-rancher"},next:{title:"Configuring Active Directory (AD)",permalink:"/rancher-docusaurus/admin-settings/authentication/ad"}},l=[{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Cleanup",id:"cleanup",children:[]}],u={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource. "),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Important"),"\n",">","\n",">"," ",(0,o.kt)("em",{parentName:"p"}," Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to ",(0,o.kt)("a",{parentName:"em",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher"},"migrate rancher."),">"," ")," While restoring rancher on the same setup, the operator will scale down the rancher deployment when restore starts, and it will scale back up the deployment once restore completes. So Rancher will be unavailable during the restore."),(0,o.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster runs the Rancher server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups ",">"," Restores"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Restore with the form, or with YAML.  For creating the Restore resource using form, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/configuration/restore-config"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For using the YAML editor, we can click ",(0,o.kt)("strong",{parentName:"p"},"Create ",">"," Create from YAML"),". Enter the Restore YAML."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"  For help configuring the Restore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/configuration/restore-config"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The rancher-operator scales down the rancher deployment during restore, and scales it back up once the restore completes. The resources are restored in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,o.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,o.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Run this command to follow the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,o.kt)("h3",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"If you created the restore resource with kubectl, remove the resource to prevent a naming conflict with future restores."))}m.isMDXComponent=!0}}]);