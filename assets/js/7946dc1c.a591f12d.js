"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[66844],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||s;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84454:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={title:"Template Creator Permissions",position:10},l=void 0,p={unversionedId:"admin-settings/rke-templates/creator-permissions",id:"admin-settings/rke-templates/creator-permissions",isDocsHomePage:!1,title:"Template Creator Permissions",description:"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users.",source:"@site/docs/admin-settings/rke-templates/creator-permissions.md",sourceDirName:"admin-settings/rke-templates",slug:"/admin-settings/rke-templates/creator-permissions",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/creator-permissions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/rke-templates/creator-permissions.md",tags:[],version:"current",frontMatter:{title:"Template Creator Permissions",position:10},sidebar:"tutorialSidebar",previous:{title:"Creating and Revising RKE Templates",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/creating-and-revising"},next:{title:"Template Enforcement",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/enforcement"}},m=[{value:"Allowing a User to Create Templates",id:"allowing-a-user-to-create-templates",children:[]},{value:"Allowing New Users to Create Templates by Default",id:"allowing-new-users-to-create-templates-by-default",children:[]},{value:"Revoking Permission to Create Templates",id:"revoking-permission-to-create-templates",children:[]}],c={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users."),(0,s.kt)("p",null,"For more information on administrator permissions, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"documentation on global permissions"),"."),(0,s.kt)("h1",{id:"giving-users-permission-to-create-templates"},"Giving Users Permission to Create Templates"),(0,s.kt)("p",null,"Templates can only be created by users who have the global permission ",(0,s.kt)("strong",{parentName:"p"},"Create RKE Templates"),"."),(0,s.kt)("p",null,"Administrators have the global permission to create templates, and only administrators can give that permission to other users."),(0,s.kt)("p",null,"For information on allowing users to modify existing templates, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/template-access-and-sharing"},"Sharing Templates.")),(0,s.kt)("p",null,"Administrators can give users permission to create RKE templates in two ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By editing the permissions of an ",(0,s.kt)("a",{parentName:"li",href:"#allowing-a-user-to-create-templates"},"individual user")),(0,s.kt)("li",{parentName:"ul"},"By changing the ",(0,s.kt)("a",{parentName:"li",href:"#allowing-new-users-to-create-templates-by-default"},"default permissions of new users"))),(0,s.kt)("h3",{id:"allowing-a-user-to-create-templates"},"Allowing a User to Create Templates"),(0,s.kt)("p",null,"An administrator can individually grant the role ",(0,s.kt)("strong",{parentName:"p"},"Create RKE Templates")," to any existing user by following these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Users"),"."),(0,s.kt)("li",{parentName:"ol"},"Choose the user you want to edit and click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),"."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Built-in")," section, check the box for ",(0,s.kt)("strong",{parentName:"li"},"Create new RKE Cluster Templates")," role along with any other roles the user should have. You may want to also check the box for ",(0,s.kt)("strong",{parentName:"li"},"Create RKE Template Revisions"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The user has permission to create RKE templates."),(0,s.kt)("h3",{id:"allowing-new-users-to-create-templates-by-default"},"Allowing New Users to Create Templates by Default"),(0,s.kt)("p",null,"Alternatively, the administrator can give all new users the default permission to create RKE templates by following the following steps. This will not affect the permissions of existing users."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Roles"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the role named ",(0,s.kt)("strong",{parentName:"li"},"Create new RKE Cluster Templates and click "),"\u22ee ",">"," Edit Config**."),(0,s.kt)("li",{parentName:"ol"},"Select the option ",(0,s.kt)("strong",{parentName:"li"},"Yes: Default role for new users"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),"."),(0,s.kt)("li",{parentName:"ol"},"If you would like new users to also be able to create RKE template revisions, enable that role as default as well.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Any new user created in this Rancher installation will be able to create RKE templates. Existing users will not get this permission."),(0,s.kt)("h3",{id:"revoking-permission-to-create-templates"},"Revoking Permission to Create Templates"),(0,s.kt)("p",null,"Administrators can remove a user's permission to create templates with the following steps. Note: Administrators have full control over all resources regardless of whether fine-grained permissions are selected."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Users"),"."),(0,s.kt)("li",{parentName:"ol"},"Choose the user you want to edit permissions for and click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Config"),"."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Built-in")," section, un-check the box for ",(0,s.kt)("strong",{parentName:"li"},"Create RKE Templates")," and ",(0,s.kt)("strong",{parentName:"li"},"Create RKE Template Revisions,")," if applicable. In this section, you can change the user back to a standard user, or give the user a different set of permissions."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The user cannot create RKE templates."))}u.isMDXComponent=!0}}]);