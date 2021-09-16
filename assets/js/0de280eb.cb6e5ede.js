"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[36429],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(c,".").concat(u)]||h[u]||s[u]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52355:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Upgrading Rancher Installed with Docker",position:1010},c=void 0,d={unversionedId:"installation/other-installation-methods/single-node-docker/single-node-upgrades",id:"version-2.5.9/installation/other-installation-methods/single-node-docker/single-node-upgrades",isDocsHomePage:!1,title:"Upgrading Rancher Installed with Docker",description:"The following instructions will guide you through upgrading a Rancher server that was installed with Docker.",source:"@site/versioned_docs/version-2.5.9/installation/other-installation-methods/single-node-docker/single-node-upgrades.md",sourceDirName:"installation/other-installation-methods/single-node-docker",slug:"/installation/other-installation-methods/single-node-docker/single-node-upgrades",permalink:"/rancher-docusaurus/2.5.9/installation/other-installation-methods/single-node-docker/single-node-upgrades",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/installation/other-installation-methods/single-node-docker/single-node-upgrades.md",tags:[],version:"2.5.9",frontMatter:{title:"Upgrading Rancher Installed with Docker",position:1010},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Rolling Back Rancher Installed with Docker",permalink:"/rancher-docusaurus/2.5.9/installation/other-installation-methods/single-node-docker/single-node-rollbacks"},next:{title:"Certificate Troubleshooting",permalink:"/rancher-docusaurus/2.5.9/installation/other-installation-methods/single-node-docker/troubleshooting"}},p=[{value:"Option A: Default Self-Signed Certificate",id:"option-a-default-self-signed-certificate",children:[]},{value:"Option B: Bring Your Own Certificate: Self-Signed",id:"option-b-bring-your-own-certificate-self-signed",children:[]},{value:"Option C: Bring Your Own Certificate: Signed by Recognized CA",id:"option-c-bring-your-own-certificate-signed-by-recognized-ca",children:[]},{value:"Option D: Let&#39;s Encrypt Certificate",id:"option-d-lets-encrypt-certificate",children:[]},{value:"Option A: Default Self-Signed Certificate",id:"option-a-default-self-signed-certificate-1",children:[]},{value:"Option B: Bring Your Own Certificate: Self-Signed",id:"option-b-bring-your-own-certificate-self-signed-1",children:[]},{value:"Option C: Bring Your Own Certificate: Signed by Recognized CA",id:"option-c-bring-your-own-certificate-signed-by-recognized-ca-1",children:[]}],s={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following instructions will guide you through upgrading a Rancher server that was installed with Docker."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"**Review the ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/upgrades/#known-upgrade-issues"},"known upgrade issues")," in the Rancher documentation for the most noteworthy issues to consider when upgrading Rancher. A more complete list of known issues for each Rancher version can be found in the release notes on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,o.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")," Note that upgrades to or from any chart in the ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/chart-options/#helm-chart-repositories/"},"rancher-alpha repository")," aren\u2019t supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For ",(0,o.kt)("a",{parentName:"strong",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap"},"air gap installs only,")," collect and populate images for the new Rancher server version"),". Follow the guide to ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/populate-private-registry/"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to.")),(0,o.kt)("h1",{id:"placeholder-review"},"Placeholder Review"),(0,o.kt)("p",null,"During upgrade, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"\\<EXAMPLE\\>"),")."),(0,o.kt)("p",null,"Here's an ",(0,o.kt)("strong",{parentName:"p"},"example")," of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop \\<RANCHER_CONTAINER_NAME\\>\n")),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_NAME\\>")," is the name of your Rancher container."),(0,o.kt)("h1",{id:"get-data-for-upgrade-commands"},"Get Data for Upgrade Commands"),(0,o.kt)("p",null,"To obtain the data to replace the placeholders, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,"Write down or copy this information before starting the upgrade."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},"\\<sup\\>Terminal `docker ps` Command, Displaying Where to Find `\\<RANCHER_CONTAINER_TAG\\>` and `\\<RANCHER_CONTAINER_NAME\\>`\\</sup\\>\n![Placeholder Reference](./assets/img/rancher/placeholder-ref.png)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_CONTAINER_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.1.3")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_CONTAINER_NAME\\>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[RANCHER_VERSION]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.1.3")),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Rancher that you're creating a backup for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[DATE]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2018-12-19")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_TAG\\>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_NAME\\>")," by logging into your Rancher server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped using a different command: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime during while creating backups."),(0,o.kt)("h1",{id:"upgrade-outline"},"Upgrade Outline"),(0,o.kt)("p",null,"During upgrade, you create a copy of the data from your current Rancher container and a backup in case something goes wrong. Then you deploy the new version of Rancher in a new container using your existing data. Follow the steps to upgrade Rancher server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-create-a-copy-of-the-data-from-your-rancher-server-container"},"1. Create a copy of the data from your Rancher server container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-create-a-backup-tarball"},"2. Create a backup tarball")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-pull-the-new-docker-image"},"3. Pull the new Docker image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-start-the-new-rancher-server-container"},"4. Start the new Rancher server container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-verify-the-upgrade"},"5. Verify the Upgrade")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#6-clean-up-your-old-rancher-server-container"},"6. Clean up your old Rancher server container"))),(0,o.kt)("h1",{id:"1-create-a-copy-of-the-data-from-your-rancher-server-container"},"1. Create a copy of the data from your Rancher server container"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<RANCHER_CONTAINER_NAME\\>")," with the name of your Rancher container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop \\<RANCHER_CONTAINER_NAME\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'\\<a id="backup"',">","\\</a",">","Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker create --volumes-from \\<RANCHER_CONTAINER_NAME\\> --name rancher-data rancher/rancher:\\<RANCHER_CONTAINER_TAG\\>\n")))),(0,o.kt)("h1",{id:"2-create-a-backup-tarball"},"2. Create a backup tarball"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'\\<a id="tarball"',">","\\</a",">","From the data container that you just created (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data"),"), create a backup tarball (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz"),")."),(0,o.kt)("p",{parentName:"li"},"This tarball will serve as a rollback point if something goes wrong during upgrade. Use the following command, replacing each placeholder."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```\ndocker run --volumes-from rancher-data -v $PWD:/backup busybox tar zcvf /backup/rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz /var/lib/rancher\n```\n\n**Step Result:** When you enter this command, a series of commands should run.\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to confirm that the backup tarball was created. It will have a name similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-[RANCHER_VERSION]-[DATE].tar.gz"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[rancher@ip-10-0-0-50 ~]$ ls\nrancher-data-backup-v2.1.3-20181219.tar.gz\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move your backup tarball to a safe location external from your Rancher server."))),(0,o.kt)("h1",{id:"3-pull-the-new-docker-image"},"3. Pull the New Docker Image"),(0,o.kt)("p",null,"Pull the image of the Rancher version that you want to upgrade to."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("h1",{id:"4-start-the-new-rancher-server-container"},"4. Start the New Rancher Server Container"),(0,o.kt)("p",null,"Start a new Rancher server container using the data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data")," container. Remember to pass in all the environment variables that you had used when you started the original container."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Important:")," ",(0,o.kt)("em",{parentName:"p"},"Do not")," stop the upgrade after initiating it, even if the upgrade process seems longer than expected. Stopping the upgrade may result in database migration errors during future upgrades."),(0,o.kt)("p",null,"If you used a proxy, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/proxy/"},"HTTP Proxy Configuration.")),(0,o.kt)("p",null,"If you configured a custom CA root certificate to access your services, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/advanced/#custom-ca-certificate"},"Custom CA root certificate.")),(0,o.kt)("p",null,"If you are recording all transactions with the Rancher API, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/advanced/#api-audit-log"},"API Auditing")),(0,o.kt)("p",null,"To see the command to use when starting the new Rancher server container, choose from the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Upgrade"),(0,o.kt)("li",{parentName:"ul"},"Docker Upgrade for Air Gap Installs")),(0,o.kt)("p",null,'{{% tabs %}}\n{{% tab "Docker Upgrade" %}}'),(0,o.kt)("p",null,"Select which option you had installed Rancher server"),(0,o.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-Signed Certificate"),(0,o.kt)("p",null,'{{% accordion id="option-a" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to use the Rancher generated self-signed certificate, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n  --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required.")),(0,o.kt)("p",null,"{{% /accordion %}}"),(0,o.kt)("h3",{id:"option-b-bring-your-own-certificate-self-signed"},"Option B: Bring Your Own Certificate: Self-Signed"),(0,o.kt)("p",null,'{{% accordion id="option-b" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to bring your own self-signed certificate, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container and need to have access to the same certificate that you had originally installed with."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Reminder of the Cert Prerequisite:")," The certificate files must be in PEM format. In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CERT_DIRECTORY\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<FULL_CHAIN.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<PRIVATE_KEY.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CA_CERTS.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the certificate authority's certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n  --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /\\<CERT_DIRECTORY\\>/\\<FULL_CHAIN.pem\\>:/etc/rancher/ssl/cert.pem \\\n  -v /\\<CERT_DIRECTORY\\>/\\<PRIVATE_KEY.pem\\>:/etc/rancher/ssl/key.pem \\\n  -v /\\<CERT_DIRECTORY\\>/\\<CA_CERTS.pem\\>:/etc/rancher/ssl/cacerts.pem \\\n  --privileged \\\n  rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required.")),(0,o.kt)("p",null,"{{% /accordion %}}"),(0,o.kt)("h3",{id:"option-c-bring-your-own-certificate-signed-by-recognized-ca"},"Option C: Bring Your Own Certificate: Signed by Recognized CA"),(0,o.kt)("p",null,'{{% accordion id="option-c" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to use a certificate signed by a recognized CA, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container and need to have access to the same certificates that you had originally installed with. Remember to include ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," as an argument to the container to disable the default CA certificate generated by Rancher."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Reminder of the Cert Prerequisite:")," The certificate files must be in PEM format. In your certificate file, include all intermediate certificates provided by the recognized CA. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/troubleshooting"},"Certificate Troubleshooting.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CERT_DIRECTORY\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<FULL_CHAIN.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<PRIVATE_KEY.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n  --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /\\<CERT_DIRECTORY\\>/\\<FULL_CHAIN.pem\\>:/etc/rancher/ssl/cert.pem \\\n  -v /\\<CERT_DIRECTORY\\>/\\<PRIVATE_KEY.pem\\>:/etc/rancher/ssl/key.pem \\\n  --privileged \\\n  rancher/rancher:\\<RANCHER_VERSION_TAG\\> \\\n  --no-cacerts\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required."),"\n{{% /accordion %}}"),(0,o.kt)("h3",{id:"option-d-lets-encrypt-certificate"},"Option D: Let's Encrypt Certificate"),(0,o.kt)("p",null,'{{% accordion id="option-d" label="Click to expand" %}}'),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Remember:")," Let's Encrypt provides rate limits for requesting new certificates. Therefore, limit how often you create or destroy the container. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"Let's Encrypt documentation on rate limits"),"."),(0,o.kt)("p",null,"If you have selected to use ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container and need to provide the domain that you had used when you originally installed Rancher."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Reminder of the Cert Prerequisites:"),"\n",">","\n",">","- Create a record in your DNS that binds your Linux host IP address to the hostname that you want to use for Rancher access (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher.mydomain.com")," for example).\n",">","- Open port ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP/80")," on your Linux host. The Let's Encrypt http-01 challenge can come from any source IP address, so port ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP/80")," must be open to all IP addresses."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<YOUR.DNS.NAME\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The domain address that you had originally started with")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n  --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:\\<RANCHER_VERSION_TAG\\> \\\n  --acme-domain \\<YOUR.DNS.NAME\\>\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required.")),(0,o.kt)("p",null,"{{% /accordion %}}"),(0,o.kt)("p",null,'{{% /tab %}}\n{{% tab "Docker Air Gap Upgrade" %}}'),(0,o.kt)("p",null,"For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster."),(0,o.kt)("p",null,"When starting the new Rancher server container, choose from the following options:"),(0,o.kt)("h3",{id:"option-a-default-self-signed-certificate-1"},"Option A: Default Self-Signed Certificate"),(0,o.kt)("p",null,'{{% accordion id="option-a" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to use the Rancher generated self-signed certificate, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[REGISTRY.YOURDOMAIN.COM:PORT]")),(0,o.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  docker run -d --volumes-from rancher-data \\\n      --restart=unless-stopped \\\n      -p 80:80 -p 443:443 \\\n      -e CATTLE_SYSTEM_DEFAULT_REGISTRY=[REGISTRY.YOURDOMAIN.COM:PORT] \\ # Set a default private registry to be used in Rancher\n      -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n      --privileged \\\n      [REGISTRY.YOURDOMAIN.COM:PORT]/rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required."),"\n{{% /accordion %}}"),(0,o.kt)("h3",{id:"option-b-bring-your-own-certificate-self-signed-1"},"Option B: Bring Your Own Certificate: Self-Signed"),(0,o.kt)("p",null,'{{% accordion id="option-b" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to bring your own self-signed certificate, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container and need to have access to the same certificate that you had originally installed with."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Reminder of the Prerequisite:")," The certificate files must be in PEM format. In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/troubleshooting"},"Certificate Troubleshooting.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CERT_DIRECTORY\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<FULL_CHAIN.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<PRIVATE_KEY.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CA_CERTS.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the certificate authority's certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[REGISTRY.YOURDOMAIN.COM:PORT]")),(0,o.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -v /\\<CERT_DIRECTORY\\>/\\<FULL_CHAIN.pem\\>:/etc/rancher/ssl/cert.pem \\\n    -v /\\<CERT_DIRECTORY\\>/\\<PRIVATE_KEY.pem\\>:/etc/rancher/ssl/key.pem \\\n    -v /\\<CERT_DIRECTORY\\>/\\<CA_CERTS.pem\\>:/etc/rancher/ssl/cacerts.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=[REGISTRY.YOURDOMAIN.COM:PORT] \\ # Set a default private registry to be used in Rancher\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n    --privileged \\\n    [REGISTRY.YOURDOMAIN.COM:PORT]/rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required."),"\n{{% /accordion %}}"),(0,o.kt)("h3",{id:"option-c-bring-your-own-certificate-signed-by-recognized-ca-1"},"Option C: Bring Your Own Certificate: Signed by Recognized CA"),(0,o.kt)("p",null,'{{% accordion id="option-c" label="Click to expand" %}}'),(0,o.kt)("p",null,"If you have selected to use a certificate signed by a recognized CA, you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volumes-from rancher-data")," to the command that you had started your original Rancher server container and need to have access to the same certificates that you had originally installed with."),(0,o.kt)("p",null," ",">",(0,o.kt)("strong",{parentName:"p"},"Reminder of the Prerequisite:")," The certificate files must be in PEM format. In your certificate file, include all intermediate certificates provided by the recognized CA. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/troubleshooting"},"Certificate Troubleshooting.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<CERT_DIRECTORY\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<FULL_CHAIN.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<PRIVATE_KEY.pem\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[REGISTRY.YOURDOMAIN.COM:PORT]")),(0,o.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\\<RANCHER_VERSION_TAG\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,o.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/chart-options/"},"Rancher version")," that you want to upgrade to.")))),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," as argument to the container to disable the default CA certificate generated by Rancher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n    --restart=unless-stopped \\\n     -p 80:80 -p 443:443 \\\n     --no-cacerts \\\n     -v /\\<CERT_DIRECTORY\\>/\\<FULL_CHAIN.pem\\>:/etc/rancher/ssl/cert.pem \\\n     -v /\\<CERT_DIRECTORY\\>/\\<PRIVATE_KEY.pem\\>:/etc/rancher/ssl/key.pem \\\n     -e CATTLE_SYSTEM_DEFAULT_REGISTRY=[REGISTRY.YOURDOMAIN.COM:PORT] \\ # Set a default private registry to be used in Rancher\n     -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n     --privileged\n     [REGISTRY.YOURDOMAIN.COM:PORT]/rancher/rancher:\\<RANCHER_VERSION_TAG\\>\n")),(0,o.kt)("p",null,"privileged access is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/#privileged-access-for-rancher"},"required."),"\n{{% /accordion %}}\n{{% /tab %}}\n{{% /tabs %}}"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have upgraded Rancher. Data from your upgraded server is now saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data")," container for use in future upgrades."),(0,o.kt)("h1",{id:"5-verify-the-upgrade"},"5. Verify the Upgrade"),(0,o.kt)("p",null,"Log into Rancher. Confirm that the upgrade succeeded by checking the version displayed in the bottom-left corner of the browser window."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Having network issues in your user clusters following upgrade?"),"\n",">","\n",">"," See ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades/namespace-migration"},"Restoring Cluster Networking"),"."),(0,o.kt)("h1",{id:"6-clean-up-your-old-rancher-server-container"},"6. Clean up Your Old Rancher Server Container"),(0,o.kt)("p",null,"Remove the previous Rancher server container. If you only stop the previous Rancher server container (and don't remove it), the container may restart after the next server reboot."),(0,o.kt)("h1",{id:"rolling-back"},"Rolling Back"),(0,o.kt)("p",null,"If your upgrade does not complete successfully, you can roll back Rancher server and its data back to its last healthy state. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/single-node-rollbacks/"},"Docker Rollback"),"."))}h.isMDXComponent=!0}}]);