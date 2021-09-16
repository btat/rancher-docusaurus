"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[83500],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(a),k=n,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68653:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],c={title:"Backing up Rancher Installed with Docker",shortTitle:"Backups",position:3},i=void 0,p={unversionedId:"backups/docker-installs/docker-backups",id:"version-2.5.9/backups/docker-installs/docker-backups",isDocsHomePage:!1,title:"Backing up Rancher Installed with Docker",description:"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster.",source:"@site/versioned_docs/version-2.5.9/backups/docker-installs/docker-backups.md",sourceDirName:"backups/docker-installs",slug:"/backups/docker-installs/docker-backups",permalink:"/rancher-docusaurus/2.5.9/backups/docker-installs/docker-backups",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/backups/docker-installs/docker-backups.md",tags:[],version:"2.5.9",frontMatter:{title:"Backing up Rancher Installed with Docker",shortTitle:"Backups",position:3},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Backup Storage Location Configuration",permalink:"/rancher-docusaurus/2.5.9/backups/configuration/storage-config"},next:{title:"Restoring Backups\u2014Docker Installs",permalink:"/rancher-docusaurus/2.5.9/backups/docker-installs/docker-restores"}},u=[{value:"Before You Start",id:"before-you-start",children:[]},{value:"Creating a Backup",id:"creating-a-backup",children:[]}],s={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster."),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"During the creation of your backup, you'll enter a series of commands, replacing placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"\\<EXAMPLE\\>"),"). Here's an example of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-[DATE] -v $PWD:/backup busybox tar pzcvf /backup/rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz /var/lib/rancher\n")),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"[DATE]")," is a placeholder for the date that the data container and backup were created. ",(0,o.kt)("inlineCode",{parentName:"p"},"9-27-18")," for example."),(0,o.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-backup"},"procedure below"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},"\\<sup\\>Terminal `docker ps` Command, Displaying Where to Find `\\<RANCHER_CONTAINER_TAG\\>` and `\\<RANCHER_CONTAINER_NAME\\>`\\</sup\\>\n![Placeholder Reference](./assets/img/rancher/placeholder-ref.png)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_CONTAINER_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_CONTAINER_NAME\\>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[RANCHER_VERSION]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Rancher that you're creating a backup for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[DATE]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_TAG\\>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_NAME\\>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime while creating backups."),(0,o.kt)("h2",{id:"creating-a-backup"},"Creating a Backup"),(0,o.kt)("p",null,"This procedure creates a backup that you can restore if Rancher encounters a disaster scenario."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_NAME\\>")," with the name of your Rancher container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop \\<RANCHER_CONTAINER_NAME\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'\\<a id="backup"',">","\\</a",">","Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker create --volumes-from \\<RANCHER_CONTAINER_NAME\\> --name rancher-data-[DATE] rancher/rancher:\\<RANCHER_CONTAINER_TAG\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'\\<a id="tarball"',">","\\</a",">","From the data container that you just created (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-[DATE]"),"), create a backup tarball:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the following command, replacing each placeholder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-[DATE] -v $PWD:/backup:z busybox tar pzcvf /backup/rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz /var/lib/rancher\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"**Step Result:** A stream of commands runs on the screen.\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to confirm that the backup tarball was created. It will have a name similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move your backup tarball to a safe location external to your Rancher Server. Then delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-[DATE]")," container from your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"[RANCHER_CONTAINER_NAME]")," with the name of your Rancher container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker start \\<RANCHER_CONTAINER_NAME\\>\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A backup tarball of your Rancher Server data is created. See ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/docker-installs/docker-restores"},"Restoring Backups: Docker Installs")," if you need to restore backup data."))}d.isMDXComponent=!0}}]);