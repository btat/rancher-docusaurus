"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[22114],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74557:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Role-Based Access Control (RBAC)",position:20},c=void 0,l={unversionedId:"admin-settings/rbac/index",id:"admin-settings/rbac/index",isDocsHomePage:!1,title:"Role-Based Access Control (RBAC)",description:"Within Rancher, each person authenticates as a user, which is a login that grants you access to Rancher. As mentioned in Authentication, users can either be local or external.",source:"@site/docs/admin-settings/rbac/index.md",sourceDirName:"admin-settings/rbac",slug:"/admin-settings/rbac/index",permalink:"/rancher-docusaurus/next/admin-settings/rbac/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/rbac/index.md",tags:[],version:"current",frontMatter:{title:"Role-Based Access Control (RBAC)",position:20},sidebar:"tutorialSidebar",previous:{title:"Global Permissions",permalink:"/rancher-docusaurus/next/admin-settings/rbac/global-permissions"},next:{title:"Locked Roles",permalink:"/rancher-docusaurus/next/admin-settings/rbac/locked-roles"}},u=[{value:"Users and Roles",id:"users-and-roles",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, each person authenticates as a ",(0,o.kt)("em",{parentName:"p"},"user"),", which is a login that grants you access to Rancher. As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/"},"Authentication"),", users can either be local or external."),(0,o.kt)("p",null,"After you configure external authentication, the users that display on the ",(0,o.kt)("strong",{parentName:"p"},"Users")," page changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as a local user, only local users display.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as an external user, both external and local users display."))),(0,o.kt)("h2",{id:"users-and-roles"},"Users and Roles"),(0,o.kt)("p",null,"Once the user logs in to Rancher, their ",(0,o.kt)("em",{parentName:"p"},"authorization"),", or their access rights within the system, is determined by ",(0,o.kt)("em",{parentName:"p"},"global permissions"),", and ",(0,o.kt)("em",{parentName:"p"},"cluster and project roles"),".  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"Global Permissions"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization outside the scope of any particular cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/"},"Cluster and Project Roles"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization inside the specific cluster or project where they are assigned the role."))),(0,o.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."))}d.isMDXComponent=!0}}]);