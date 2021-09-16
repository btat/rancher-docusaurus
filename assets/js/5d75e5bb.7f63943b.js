"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[50307],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"GlusterFS Volumes",position:5e3},u=void 0,l={unversionedId:"cluster-admin/volumes-and-storage/glusterfs-volumes",id:"version-2.5.9/cluster-admin/volumes-and-storage/glusterfs-volumes",isDocsHomePage:!1,title:"GlusterFS Volumes",description:"\\> This section only applies to RKE clusters.",source:"@site/versioned_docs/version-2.5.9/cluster-admin/volumes-and-storage/glusterfs-volumes.md",sourceDirName:"cluster-admin/volumes-and-storage",slug:"/cluster-admin/volumes-and-storage/glusterfs-volumes",permalink:"/rancher-docusaurus/2.5.9/cluster-admin/volumes-and-storage/glusterfs-volumes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/cluster-admin/volumes-and-storage/glusterfs-volumes.md",tags:[],version:"2.5.9",frontMatter:{title:"GlusterFS Volumes",position:5e3},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"vSphere Storage",permalink:"/rancher-docusaurus/2.5.9/cluster-admin/volumes-and-storage/examples/vsphere"},next:{title:"How Persistent Storage Works",permalink:"/rancher-docusaurus/2.5.9/cluster-admin/volumes-and-storage/how-storage-works"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,">"," This section only applies to ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"RKE clusters.")),(0,a.kt)("p",null,"In clusters that store data on GlusterFS volumes, you may experience an issue where pods fail to mount volumes after restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),". The logging of the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," will show: ",(0,a.kt)("inlineCode",{parentName:"p"},"transport endpoint is not connected"),". To prevent this from happening, you can configure your cluster to mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-run")," binary in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," container. There are two requirements before you can change the cluster configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The node needs to have the ",(0,a.kt)("inlineCode",{parentName:"li"},"systemd-run")," binary installed (this can be checked by using the command ",(0,a.kt)("inlineCode",{parentName:"li"},"which systemd-run")," on each cluster node)"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"systemd-run")," binary needs to be compatible with Debian OS on which the hyperkube image is based (this can be checked using the following command on each cluster node, replacing the image tag with the Kubernetes version you want to use)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v /usr/bin/systemd-run:/usr/bin/systemd-run --entrypoint /usr/bin/systemd-run rancher/hyperkube:v1.16.2-rancher1 --version\n")),(0,a.kt)("p",null,">",(0,a.kt)("strong",{parentName:"p"},"Note:"),"\n",">","\n",">","Before updating your Kubernetes YAML to mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-run")," binary, make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," package is installed on your cluster nodes. If this package isn't installed ",(0,a.kt)("em",{parentName:"p"},"before")," the bind mounts are created in your Kubernetes YAML, Docker will automatically create the directories and files on each node and will not allow the package install to succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/usr/bin/systemd-run:/usr/bin/systemd-run"\n')),(0,a.kt)("p",null,"After the cluster has finished provisioning, you can check the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," container logging to see if the functionality is activated by looking for the following logline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Detected OS with systemd\n")))}m.isMDXComponent=!0}}]);