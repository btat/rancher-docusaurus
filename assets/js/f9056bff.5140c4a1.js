"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[73357],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(m,i(i({ref:t},h),{},{components:r})):a.createElement(m,i({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98258:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Upgrades",position:2},l=void 0,p={unversionedId:"installation/install-rancher-on-k8s/upgrades/index",id:"version-2.5.9/installation/install-rancher-on-k8s/upgrades/index",isDocsHomePage:!1,title:"Upgrades",description:"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm.",source:"@site/versioned_docs/version-2.5.9/installation/install-rancher-on-k8s/upgrades/index.md",sourceDirName:"installation/install-rancher-on-k8s/upgrades",slug:"/installation/install-rancher-on-k8s/upgrades/index",permalink:"/rancher-docusaurus/2.5.9/installation/install-rancher-on-k8s/upgrades/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/installation/install-rancher-on-k8s/upgrades/index.md",tags:[],version:"2.5.9",frontMatter:{title:"Upgrades",position:2},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Rendering the Helm Template in an Air Gapped Environment",permalink:"/rancher-docusaurus/2.5.9/installation/install-rancher-on-k8s/upgrades/air-gap-upgrade"},next:{title:"Air Gapped Helm CLI Install",permalink:"/rancher-docusaurus/2.5.9/installation/other-installation-methods/air-gap/index"}},h=[{value:"Access to kubeconfig",id:"access-to-kubeconfig",children:[]},{value:"Review Known Issues",id:"review-known-issues",children:[]},{value:"Helm Version",id:"helm-version",children:[]},{value:"For air gap installs: Populate private registry",id:"for-air-gap-installs-populate-private-registry",children:[]},{value:"For upgrades from a Rancher server with a hidden local cluster",id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster",children:[]},{value:"For upgrades with cert-manager older than 0.8.0",id:"for-upgrades-with-cert-manager-older-than-080",children:[]},{value:"Option A: Upgrading Rancher",id:"option-a-upgrading-rancher",children:[]},{value:"Option B: Reinstalling Rancher and cert-manager",id:"option-b-reinstalling-rancher-and-cert-manager",children:[]}],c={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm."),(0,o.kt)("p",null,"For the instructions to upgrade Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/single-node-upgrades"},"this page.")),(0,o.kt)("p",null,"To upgrade the components in your Kubernetes cluster, or the definition of the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-ons"),", refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"upgrade documentation for RKE"),", the Rancher Kubernetes Engine."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#upgrade-outline"},"Upgrade Outline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#known-upgrade-issues"},"Known Upgrade Issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rke-add-on-installs"},"RKE Add-on Installs"))),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"access-to-kubeconfig"},"Access to kubeconfig"),(0,o.kt)("p",null,"Helm should be run from the same location as your kubeconfig file, or the same location where you run your kubectl commands from."),(0,o.kt)("p",null,"If you installed Kubernetes with RKE, the config will have been created in the directory you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up")," in. "),(0,o.kt)("p",null,"The kubeconfig can also be manually targeted for the intended cluster with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," tag (see: ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"https://helm.sh/docs/helm/helm/"),")"),(0,o.kt)("h3",{id:"review-known-issues"},"Review Known Issues"),(0,o.kt)("p",null,"Review the list of known issues for each Rancher version, which can be found in the release notes on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,o.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,o.kt)("p",null,"Note that upgrades ",(0,o.kt)("em",{parentName:"p"},"to")," or ",(0,o.kt)("em",{parentName:"p"},"from")," any chart in the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/chart-options/#helm-chart-repositories/"},"rancher-alpha repository")," aren't supported."),(0,o.kt)("h3",{id:"helm-version"},"Helm Version"),(0,o.kt)("p",null,"The upgrade instructions assume you are using Helm 3."),(0,o.kt)("p",null,"For migration of installs started with Helm 2, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," The ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/ha/helm2"},"Helm 2 upgrade page here"),"provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible."),(0,o.kt)("h3",{id:"for-air-gap-installs-populate-private-registry"},"For air gap installs: Populate private registry"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap"},"air gap installs only,")," collect and populate images for the new Rancher server version. Follow the guide to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/populate-private-registry/"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to."),(0,o.kt)("h3",{id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster"},"For upgrades from a Rancher server with a hidden local cluster"),(0,o.kt)("p",null,"If you are upgrading to Rancher v2.5 from a Rancher server that was started with the Helm chart option ",(0,o.kt)("inlineCode",{parentName:"p"},"--add-local=false"),", you will need to drop that flag when upgrading. Otherwise, the Rancher server will not start. The ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted-admin")," role can be used to continue restricting access to the local cluster. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/#upgrading-from-rancher-with-a-hidden-local-cluster"},"this section.")),(0,o.kt)("h3",{id:"for-upgrades-with-cert-manager-older-than-080"},"For upgrades with cert-manager older than 0.8.0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")," Upgrade cert-manager to the latest version by following ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/upgrading-cert-manager"},"these instructions.")),(0,o.kt)("h1",{id:"upgrade-outline"},"Upgrade Outline"),(0,o.kt)("p",null,"Follow the steps to upgrade Rancher server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up your Kubernetes cluster that is running Rancher server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-update-the-helm-chart-repository"},"2. Update the Helm chart repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-upgrade-rancher"},"3. Upgrade Rancher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-verify-the-upgrade"},"4. Verify the Upgrade"))),(0,o.kt)("h1",{id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up Your Kubernetes Cluster that is Running Rancher Server"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/backups/back-up-rancher"},"backup application")," to back up Rancher."),(0,o.kt)("p",null,"You'll use the backup as a restore point if something goes wrong during upgrade."),(0,o.kt)("h1",{id:"2-update-the-helm-chart-repository"},"2. Update the Helm chart repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your local helm repo cache."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the repository name that you used to install Rancher."),(0,o.kt)("p",{parentName:"li"},"For information about the repos and their differences, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/chart-options/#helm-chart-repositories"},"Helm Chart Repositories"),"."),(0,o.kt)("p",{parentName:"li"},"{{ release-channel }}"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-\\<CHART_REPO\\>   https://releases.rancher.com/server-charts/\\<CHART_REPO\\>\n")),(0,o.kt)("p",{parentName:"li"},">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," If you want to switch to a different Helm chart repository, please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/choosing-version/#switching-to-a-different-helm-chart-repository"},"steps on how to switch repositories"),". If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fetch the latest chart to install Rancher from the Helm chart repository."),(0,o.kt)("p",{parentName:"li"},"This command will pull down the latest charts and save it in the current directory as a ",(0,o.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-\\<CHART_REPO\\>/rancher\n")),(0,o.kt)("p",{parentName:"li"},"You can fetch the chart for the specific version you are upgrading to by adding in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version=")," tag.  For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-\\<CHART_REPO\\>/rancher --version=v2.4.11\n")))),(0,o.kt)("h1",{id:"3-upgrade-rancher"},"3. Upgrade Rancher"),(0,o.kt)("p",null,"This section describes how to upgrade normal (Internet-connected) or air gap installations of Rancher with Helm."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Air Gap Instructions:")," If you are installing Rancher in an air gapped environment, skip the rest of this page and render the Helm template by following the instructions on ",(0,o.kt)("a",{parentName:"p",href:"./air-gap-upgrade"},"this page.")),(0,o.kt)("p",null,"Get the values, which were passed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--set"),", from the current Rancher Helm chart that is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system\n\nhostname: rancher.my.org\n")),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," There will be more values that are listed with this command. This is just an example of one of the values."),(0,o.kt)("p",null,"If you are also upgrading cert-manager to the latest version from a version older than 0.11.0, follow ",(0,o.kt)("a",{parentName:"p",href:"#option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager.")),(0,o.kt)("p",null,"Otherwise, follow ",(0,o.kt)("a",{parentName:"p",href:"#option-a-upgrading-rancher"},"Option A: Upgrading Rancher.")),(0,o.kt)("h3",{id:"option-a-upgrading-rancher"},"Option A: Upgrading Rancher"),(0,o.kt)("p",null,"Upgrade Rancher to the latest version with all your settings."),(0,o.kt)("p",null,"Take all the values from the previous step and append them to the command using ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-\\<CHART_REPO\\>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," The above is an example, there may be more values from the previous step that need to be appended."),(0,o.kt)("p",null,"Alternatively, it's possible to export the current values to a file and reference that file during upgrade. For example, to only change the Rancher version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system -o yaml \\> values.yaml\n\nhelm upgrade rancher rancher-\\<CHART_REPO\\>/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version=2.4.5\n")),(0,o.kt)("h3",{id:"option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager"),(0,o.kt)("p",null,"If you are currently running the cert-manger whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, then you need to reinstall both Rancher and cert-manger due to the API change in cert-manger v0.11. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uninstall Rancher"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm delete rancher -n cattle-system\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uninstall and reinstall ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager")," according to the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/upgrading-cert-manager"},"Upgrading Cert-Manager")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reinstall Rancher to the latest version with all your settings. Take all the values from the step 1 and append them to the command using ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value"),". Note: There will be many more options from the step 1 that need to be appended."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm install rancher rancher-\\<CHART_REPO\\>/rancher \\\n--namespace cattle-system \\\n--set hostname=rancher.my.org\n")))),(0,o.kt)("h1",{id:"4-verify-the-upgrade"},"4. Verify the Upgrade"),(0,o.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Having network issues following upgrade?"),"\n",">","\n",">"," See ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades/namespace-migration"},"Restoring Cluster Networking"),"."),(0,o.kt)("h1",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,o.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,o.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}u.isMDXComponent=!0}}]);