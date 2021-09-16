"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[97143],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Template Enforcement",position:32},l=void 0,c={unversionedId:"admin-settings/rke-templates/enforcement",id:"version-2.4.15/admin-settings/rke-templates/enforcement",isDocsHomePage:!1,title:"Template Enforcement",description:"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template.",source:"@site/versioned_docs/version-2.4.15/admin-settings/rke-templates/enforcement.md",sourceDirName:"admin-settings/rke-templates",slug:"/admin-settings/rke-templates/enforcement",permalink:"/rancher-docusaurus/admin-settings/rke-templates/enforcement",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/admin-settings/rke-templates/enforcement.md",tags:[],version:"2.4.15",frontMatter:{title:"Template Enforcement",position:32},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Template Creator Permissions",permalink:"/rancher-docusaurus/admin-settings/rke-templates/creator-permissions"},next:{title:"Example Scenarios",permalink:"/rancher-docusaurus/admin-settings/rke-templates/example-scenarios"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template."),(0,s.kt)("p",null,"By default, any standard user in Rancher can create clusters. But when RKE template enforcement is turned on,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only an administrator has the ability to create clusters without a template."),(0,s.kt)("li",{parentName:"ul"},"All standard users must use an RKE template to create a new cluster."),(0,s.kt)("li",{parentName:"ul"},"Standard users cannot create a cluster without using a template.")),(0,s.kt)("p",null,"Users can only create new templates if the administrator ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/creator-permissions/#allowing-a-user-to-create-templates"},"gives them permission.")),(0,s.kt)("p",null,"After a cluster is created with an RKE template, the cluster creator cannot edit settings that are defined in the template. The only way to change those settings after the cluster is created is to ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/applying-templates/#updating-a-cluster-created-with-an-rke-template"},"upgrade the cluster to a new revision")," of the same template. If cluster creators want to change template-defined settings, they would need to contact the template owner to get a new revision of the template. For details on how template revisions work, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/creating-and-revising/#updating-a-template"},"documentation on revising templates.")),(0,s.kt)("h1",{id:"requiring-new-clusters-to-use-an-rke-template"},"Requiring New Clusters to Use an RKE Template"),(0,s.kt)("p",null,"You might want to require new clusters to use a template to ensure that any cluster launched by a ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"standard user")," will use the Kubernetes and/or Rancher settings that are vetted by administrators."),(0,s.kt)("p",null,"To require new clusters to use an RKE template, administrators can turn on RKE template enforcement with the following steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Global Settings"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the ",(0,s.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Setting"),"."),(0,s.kt)("li",{parentName:"ol"},"Set the value to ",(0,s.kt)("strong",{parentName:"li"},"True")," and click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," All clusters provisioned by Rancher must use a template, unless the creator is an administrator."),(0,s.kt)("h1",{id:"disabling-rke-template-enforcement"},"Disabling RKE Template Enforcement"),(0,s.kt)("p",null,"To allow new clusters to be created without an RKE template, administrators can turn off RKE template enforcement with the following steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Global Settings"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the ",(0,s.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Setting"),"."),(0,s.kt)("li",{parentName:"ol"},"Set the value to ",(0,s.kt)("strong",{parentName:"li"},"False")," and click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," When clusters are provisioned by Rancher, they don't need to use a template."))}m.isMDXComponent=!0}}]);