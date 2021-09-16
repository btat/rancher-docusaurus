"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[10333],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=h(r),u=n,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=r[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24255:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Choosing a Rancher Version",position:1},l=void 0,h={unversionedId:"installation/resources/choosing-version",id:"version-2.4.15/installation/resources/choosing-version",isDocsHomePage:!1,title:"Choosing a Rancher Version",description:"This section describes how to choose a Rancher version.",source:"@site/versioned_docs/version-2.4.15/installation/resources/choosing-version.md",sourceDirName:"installation/resources",slug:"/installation/resources/choosing-version",permalink:"/rancher-docusaurus/installation/resources/choosing-version",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/installation/resources/choosing-version.md",tags:[],version:"2.4.15",frontMatter:{title:"Choosing a Rancher Version",position:1},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Rancher Helm Chart Options",permalink:"/rancher-docusaurus/installation/resources/chart-options"},next:{title:"About Custom CA Root Certificates",permalink:"/rancher-docusaurus/installation/resources/custom-ca-root-certificate"}},c=[{value:"Helm Chart Repositories",id:"helm-chart-repositories",children:[]},{value:"Helm Chart Versions",id:"helm-chart-versions",children:[]},{value:"Switching to a Different Helm Chart Repository",id:"switching-to-a-different-helm-chart-repository",children:[]},{value:"Server Tags",id:"server-tags",children:[]}],p={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to choose a Rancher version."),(0,o.kt)("p",null,"For a high-availability installation of Rancher, which is recommended for production, the Rancher server is installed using a ",(0,o.kt)("strong",{parentName:"p"},"Helm chart")," on a Kubernetes cluster. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/helm-version"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("p",null,"For Docker installations of Rancher, which is used for development and testing, you will install Rancher as a ",(0,o.kt)("strong",{parentName:"p"},"Docker image"),"."),(0,o.kt)("p",null,'{{% tabs %}}\n{{% tab "Helm Charts" %}}'),(0,o.kt)("p",null,"When installing, upgrading, or rolling back Rancher Server when it is ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/"},"installed on a Kubernetes cluster"),", Rancher server is installed using a Helm chart on a Kubernetes cluster. Therefore, as you prepare to install or upgrade a high availability Rancher configuration, you must add a Helm chart repository that contains the charts for installing Rancher."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/helm-version"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("h3",{id:"helm-chart-repositories"},"Helm Chart Repositories"),(0,o.kt)("p",null,"Rancher provides several different Helm chart repositories to choose from. We align our latest and stable Helm chart repositories with the Docker tags that are used for a Docker installation. Therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," repository will contain charts for all the Rancher versions that have been tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),". When a Rancher version has been promoted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable"),", it will get added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Command to Add the Repo"),(0,o.kt)("th",{parentName:"tr",align:null},"Description of the Repo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-latest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for the latest versions of Rancher. We recommend using this repo for testing out new Rancher builds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-stable"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for older, stable versions of Rancher. We recommend using this repo for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-alpha"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for alpha versions of Rancher for previewing upcoming releases. These releases are discouraged in production environments. Upgrades ",(0,o.kt)("em",{parentName:"td"},"to")," or ",(0,o.kt)("em",{parentName:"td"},"from")," charts in the rancher-alpha repository to any other chart, regardless or repository, aren't supported.")))),(0,o.kt)("p",null,"Instructions on when to select these repos are available below in ",(0,o.kt)("a",{parentName:"p",href:"#switching-to-a-different-helm-chart-repository"},"Switching to a Different Helm Chart Repository"),"."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," All charts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository will correspond with any Rancher version tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"."),(0,o.kt)("h3",{id:"helm-chart-versions"},"Helm Chart Versions"),(0,o.kt)("p",null,"Rancher Helm chart versions match the Rancher version (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"appVersion"),").  Once you've added the repo you can search it to show available versions with the following command:\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo --versions")),(0,o.kt)("p",null,"If you have several repos you can specify the repo name, ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo rancher-stable/rancher --versions"),"\nFor more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_search_repo/"},"https://helm.sh/docs/helm/helm_search_repo/")),(0,o.kt)("p",null,"To fetch a specific version of your chosen repo, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," parameter like in the following example:\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm fetch rancher-stable/rancher --version=2.4.8")),(0,o.kt)("h3",{id:"switching-to-a-different-helm-chart-repository"},"Switching to a Different Helm Chart Repository"),(0,o.kt)("p",null,"After installing Rancher, if you want to change which Helm chart repository to install Rancher from, you will need to follow these steps."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," Because the rancher-alpha repository contains only alpha charts, switching between the rancher-alpha repository and the rancher-stable or rancher-latest repository for upgrades is not supported."),(0,o.kt)("p",null,"{{ release-channel }}"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"List the current Helm chart repositories."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo list\n\nNAME                  URL\nstable                https://charts.helm.sh/stable\nrancher-\\<CHART_REPO\\>      https://releases.rancher.com/server-charts/\\<CHART_REPO\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the existing Helm Chart repository that contains your charts to install Rancher, which will either be ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," depending on what you had initially added."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo remove rancher-\\<CHART_REPO\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Helm chart repository that you want to start installing Rancher from."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add rancher-\\<CHART_REPO\\> https://releases.rancher.com/server-charts/\\<CHART_REPO\\>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue to follow the steps to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/upgrades"},"upgrade Rancher"),' from the new Helm chart repository.\n{{% /tab %}}\n{{% tab "Docker Images" %}}\nWhen performing ',(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker"},"Docker installs"),", upgrades, or rollbacks, you can use ",(0,o.kt)("em",{parentName:"p"},"tags")," to install a specific version of Rancher."))),(0,o.kt)("h3",{id:"server-tags"},"Server Tags"),(0,o.kt)("p",null,"Rancher Server is distributed as a Docker image, which have tags attached to them. You can specify this tag when entering the command to deploy Rancher. Remember that if you use a tag without an explicit version (like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"), you must explicitly pull a new version of that image tag. Otherwise, any image cached on the host will be used."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tag"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Our latest development release. These builds are validated through our CI automation framework. These releases are not recommended for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Our newest stable release. This tag is recommended for production.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:\\<v2.X.X\\>")),(0,o.kt)("td",{parentName:"tr",align:null},"You can install specific versions of Rancher by using the tag from a previous release. See what's available at DockerHub.")))),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Notes:"),"\n",">","\n",">"," - The ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," tag or any tag with ",(0,o.kt)("inlineCode",{parentName:"p"},"-rc")," or another suffix is meant for the Rancher testing team to validate. You should not use these tags, as these builds are not officially supported.\n",">"," - Want to install an alpha review for preview? Install using one of the alpha tags listed on our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements"},"announcements page")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.2.0-alpha1"),"). Caveat: Alpha releases cannot be upgraded to or from any other release."),(0,o.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"))}m.isMDXComponent=!0}}]);