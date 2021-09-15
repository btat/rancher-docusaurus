"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[5741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Restore Configuration",shortTitle:"Restore",position:2},c=void 0,p={unversionedId:"backups/configuration/restore-config",id:"backups/configuration/restore-config",isDocsHomePage:!1,title:"Restore Configuration",description:"The Restore Create page lets you provide details of the backup to restore from",source:"@site/docs/backups/configuration/restore-config.md",sourceDirName:"backups/configuration",slug:"/backups/configuration/restore-config",permalink:"/rancher-docusaurus/backups/configuration/restore-config",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backups/configuration/restore-config.md",tags:[],version:"current",frontMatter:{title:"Restore Configuration",shortTitle:"Restore",position:2},sidebar:"tutorialSidebar",previous:{title:"Rancher Backup Configuration Reference",permalink:"/rancher-docusaurus/backups/configuration/index"},next:{title:"Backup Storage Location Configuration",permalink:"/rancher-docusaurus/backups/configuration/storage-config"}},u=[{value:"An existing backup config",id:"an-existing-backup-config",children:[]},{value:"The default storage target",id:"the-default-storage-target",children:[]},{value:"An S3-compatible object store",id:"an-s3-compatible-object-store",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Restore Create page lets you provide details of the backup to restore from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'{{ img "/img/rancher/backup_restore/restore/restore.png" ""}}\n')),(0,o.kt)("h1",{id:"backup-source"},"Backup Source"),(0,o.kt)("p",null,"Provide details of the backup file and its storage location, which the operator will then use to perform the restore. Select from the following options to provide these details"),(0,o.kt)("h3",{id:"an-existing-backup-config"},"An existing backup config"),(0,o.kt)("p",null,"Selecting this option will populate the ",(0,o.kt)("strong",{parentName:"p"},"Target Backup")," dropdown with the Backups available in this cluster. Select the Backup from the dropdown, and that will fill out the ",(0,o.kt)("strong",{parentName:"p"},"Backup Filename")," field for you, and will also pass the backup source information from the selected Backup to the operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'{{ img "/img/rancher/backup_restore/restore/existing.png" ""}}\n')),(0,o.kt)("p",null,"If the Backup custom resource does not exist in the cluster, you need to get the exact filename and provide the backup source details with the default storage target or an S3-compatible object store."),(0,o.kt)("h3",{id:"the-default-storage-target"},"The default storage target"),(0,o.kt)("p",null,"Select this option if you are restoring from a backup file that exists in the default storage location configured at the operator-level. The operator-level configuration is the storage location that was configured when the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator was installed or upgraded. Provide the exact filename in the ",(0,o.kt)("strong",{parentName:"p"},"Backup Filename")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'{{ img "/img/rancher/backup_restore/restore/default.png" ""}}\n')),(0,o.kt)("h3",{id:"an-s3-compatible-object-store"},"An S3-compatible object store"),(0,o.kt)("p",null,"Select this option if no default storage location is configured at the operator-level, OR if the backup file exists in a different S3 bucket than the one configured as the default storage location. Provide the exact filename in the ",(0,o.kt)("strong",{parentName:"p"},"Backup Filename")," field. Refer to ",(0,o.kt)("a",{parentName:"p",href:"#getting-the-backup-filename-from-s3"},"this section")," for exact steps on getting the backup filename from s3. Fill in all the details for the S3 compatible object store. Its fields are exactly same as ones for the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.StorageLocation")," configuration in the ",(0,o.kt)("a",{parentName:"p",href:"../../configuration/backup-config/#storage-location"},"Backup custom resource.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'{{ img "/img/rancher/backup_restore/restore/s3store.png" ""}} \n')),(0,o.kt)("h1",{id:"encryption"},"Encryption"),(0,o.kt)("p",null,"If the backup was created with encryption enabled, its file will have ",(0,o.kt)("inlineCode",{parentName:"p"},".enc")," suffix. Choosing such a Backup, or providing a backup filename with ",(0,o.kt)("inlineCode",{parentName:"p"},".enc")," suffix will display another dropdown named ",(0,o.kt)("strong",{parentName:"p"},"Encryption Config Secret"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'{{ img "/img/rancher/backup_restore/restore/encryption.png" ""}} \n')),(0,o.kt)("p",null,"The Secret selected from this dropdown must have the same contents as the one used for the Backup custom resource while performing the backup. If the encryption configuration doesn't match, the restore will fail"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," dropdown will filter out and list only those Secrets that have this exact key"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,o.kt)("td",{parentName:"tr",align:null},"Provide the name of the Secret from ",(0,o.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," namespace, that contains the encryption config file.")))),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Important"),"\nThis field should only be set if the backup was created with encryption enabled. Providing the incorrect encryption config will cause the restore to fail."),(0,o.kt)("h1",{id:"prune-during-restore"},"Prune During Restore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prune"),":  In order to fully restore Rancher from a backup, and to go back to the exact state it was at when the backup was performed, we need to delete any additional resources that were created by Rancher after the backup was taken. The operator does so if the ",(0,o.kt)("strong",{parentName:"li"},"Prune")," flag is enabled. Prune is enabled by default and it is recommended to keep it enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete Timeout"),": This is the amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"prune")),(0,o.kt)("td",{parentName:"tr",align:null},"Delete the resources managed by Rancher that are not present in the backup (Recommended).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deleteTimeoutSeconds")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")))),(0,o.kt)("h1",{id:"getting-the-backup-filename-from-s3"},"Getting the Backup Filename from S3"),(0,o.kt)("p",null,"This is the name of the backup file that the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator will use to perform the restore."),(0,o.kt)("p",null,"To obtain this file name from S3, go to your S3 bucket (and folder if it was specified while performing backup)."),(0,o.kt)("p",null,"Copy the filename and store it in your Restore custom resource. So assuming the name of your backup file is ",(0,o.kt)("inlineCode",{parentName:"p"},"backupfile"),","),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,o.kt)("inlineCode",{parentName:"li"},"s3bucket")," and no folder was specified, then the ",(0,o.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use will be ",(0,o.kt)("inlineCode",{parentName:"li"},"backupfile"),"."),(0,o.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,o.kt)("inlineCode",{parentName:"li"},"s3bucket")," and the base folder is",(0,o.kt)("inlineCode",{parentName:"li"},"s3folder"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is only ",(0,o.kt)("inlineCode",{parentName:"li"},"backupfile")," ."),(0,o.kt)("li",{parentName:"ul"},"If there is a subfolder inside ",(0,o.kt)("inlineCode",{parentName:"li"},"s3Folder")," called ",(0,o.kt)("inlineCode",{parentName:"li"},"s3sub"),", and that has your backup file, then the ",(0,o.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is ",(0,o.kt)("inlineCode",{parentName:"li"},"s3sub/backupfile"),".")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backupFilename")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the name of the backup file that the ",(0,o.kt)("inlineCode",{parentName:"td"},"rancher-backup")," operator will use to perform the restore.")))))}d.isMDXComponent=!0}}]);