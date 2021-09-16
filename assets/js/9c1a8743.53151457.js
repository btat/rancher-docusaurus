"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[41863],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,g=m["".concat(i,".").concat(h)]||m[h]||u[h]||s;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13929:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),l=["components"],o={title:"Access and Sharing",position:31},i=void 0,p={unversionedId:"admin-settings/rke-templates/template-access-and-sharing",id:"admin-settings/rke-templates/template-access-and-sharing",isDocsHomePage:!1,title:"Access and Sharing",description:"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters.",source:"@site/docs/admin-settings/rke-templates/template-access-and-sharing.md",sourceDirName:"admin-settings/rke-templates",slug:"/admin-settings/rke-templates/template-access-and-sharing",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/template-access-and-sharing",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/rke-templates/template-access-and-sharing.md",tags:[],version:"current",frontMatter:{title:"Access and Sharing",position:31},sidebar:"tutorialSidebar",previous:{title:"RKE Templates and Infrastructure",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/rke-templates-and-hardware"},next:{title:"cluster-capabilities-table",permalink:"/rancher-docusaurus/next/cluster-provisioning/cluster-capabilities-table"}},c=[{value:"Sharing Templates with Specific Users or Groups",id:"sharing-templates-with-specific-users-or-groups",children:[]},{value:"Sharing Templates with All Users",id:"sharing-templates-with-all-users",children:[]},{value:"Sharing Ownership of Templates",id:"sharing-ownership-of-templates",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters."),(0,s.kt)("p",null,"Since RKE templates are specifically shared with users and groups, owners can share different RKE templates with different sets of users."),(0,s.kt)("p",null,"When you share a template, each user can have one of two access levels:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Owner:")," This user can update, delete, and share the templates that they own. The owner can also share the template with other users."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"User:")," These users can create clusters using the template. They can also upgrade those clusters to new revisions of the same template. When you share a template as ",(0,s.kt)("strong",{parentName:"li"},"Make Public (read-only),")," all users in your Rancher setup have the User access level for the template.")),(0,s.kt)("p",null,"If you create a template, you automatically become an owner of that template. "),(0,s.kt)("p",null,"If you want to delegate responsibility for updating the template, you can share ownership of the template. For details on how owners can modify templates, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/creating-and-revising"},"documentation about revising templates.")),(0,s.kt)("p",null,"There are several ways to share templates:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add users to a new RKE template during template creation"),(0,s.kt)("li",{parentName:"ul"},"Add users to an existing RKE template"),(0,s.kt)("li",{parentName:"ul"},"Make the RKE template public, sharing it with all users in the Rancher setup"),(0,s.kt)("li",{parentName:"ul"},"Share template ownership with users who are trusted to modify the template")),(0,s.kt)("h3",{id:"sharing-templates-with-specific-users-or-groups"},"Sharing Templates with Specific Users or Groups"),(0,s.kt)("p",null,"To allow users or groups to create clusters using your template, you can give them the basic ",(0,s.kt)("strong",{parentName:"p"},"User")," access level for the template."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,s.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit"),"."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Share Template")," section, click on ",(0,s.kt)("strong",{parentName:"li"},"Add Member"),"."),(0,s.kt)("li",{parentName:"ol"},"Search in the ",(0,s.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,s.kt)("li",{parentName:"ol"},"Choose the ",(0,s.kt)("strong",{parentName:"li"},"User")," access type."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The user or group can create clusters using the template."),(0,s.kt)("h3",{id:"sharing-templates-with-all-users"},"Sharing Templates with All Users"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,s.kt)("strong",{parentName:"li"},"RKE1 Configuration ",">"," RKE Templates"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"Share Template,")," check the box for ",(0,s.kt)("strong",{parentName:"li"},"Make Public (read-only)"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," All users in the Rancher setup can create clusters using the template."),(0,s.kt)("h3",{id:"sharing-ownership-of-templates"},"Sharing Ownership of Templates"),(0,s.kt)("p",null,"If you are the creator of a template, you might want to delegate responsibility for maintaining and updating a template to another user or group."),(0,s.kt)("p",null,"In that case, you can give users the Owner access type, which allows another user to update your template, delete it, or share access to it with other users."),(0,s.kt)("p",null,"To give Owner access to a user or group,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,s.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the RKE template that you want to share and click the ",(0,s.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"Share Template"),", click on ",(0,s.kt)("strong",{parentName:"li"},"Add Member")," and search in the ",(0,s.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Access Type")," field, click ",(0,s.kt)("strong",{parentName:"li"},"Owner"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The user or group has the Owner access type, and can modify, share, or delete the template."))}m.isMDXComponent=!0}}]);