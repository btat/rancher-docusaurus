"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[48422],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70968:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Users and Groups",position:1},l=void 0,u={unversionedId:"admin-settings/authentication/user-groups",id:"admin-settings/authentication/user-groups",isDocsHomePage:!1,title:"Users and Groups",description:"Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When you configure an external authentication provider, users from that provider will be able to log in to your Rancher server. When a user logs in, the authentication provider will supply your Rancher server with a list of groups to which the user belongs.",source:"@site/docs/admin-settings/authentication/user-groups.md",sourceDirName:"admin-settings/authentication",slug:"/admin-settings/authentication/user-groups",permalink:"/rancher-docusaurus/next/admin-settings/authentication/user-groups",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/authentication/user-groups.md",tags:[],version:"current",frontMatter:{title:"Users and Groups",position:1},sidebar:"tutorialSidebar",previous:{title:"Configuring Shibboleth (SAML)",permalink:"/rancher-docusaurus/next/admin-settings/authentication/shibboleth/index"},next:{title:"Custom Branding",permalink:"/rancher-docusaurus/next/admin-settings/branding"}},c=[{value:"Managing Members",id:"managing-members",children:[]},{value:"User Information",id:"user-information",children:[{value:"Automatically Refreshing User Information",id:"automatically-refreshing-user-information",children:[]},{value:"Manually Refreshing User Information",id:"manually-refreshing-user-information",children:[]}]},{value:"Session Length",id:"session-length",children:[]}],h={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When you configure an external authentication provider, users from that provider will be able to log in to your Rancher server. When a user logs in, the authentication provider will supply your Rancher server with a list of groups to which the user belongs."),(0,a.kt)("p",null,"Access to clusters, projects, multi-cluster apps, and global DNS providers and entries can be controlled by adding either individual users or groups to these resources. When you add a group to a resource, all users who are members of that group in the authentication provider, will be able to access the resource with the permissions that you've specified for the group. For more information on roles and permissions, see ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"Role Based Access Control"),"."),(0,a.kt)("h2",{id:"managing-members"},"Managing Members"),(0,a.kt)("p",null,"When adding a user or group to a resource, you can search for users or groups by beginning to type their name. The Rancher server will query the authentication provider to find users and groups that match what you've entered. Searching is limited to the authentication provider that you are currently logged in with. For example, if you've enabled GitHub authentication but are logged in using a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/local/"},"local")," user account, you will not be able to search for GitHub users or groups."),(0,a.kt)("p",null,"All users, whether they are local users or from an authentication provider, can be viewed and managed. In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),". In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"p"},"Users"),"."),(0,a.kt)("p",null,"{{ saml_caveats }}"),(0,a.kt)("h2",{id:"user-information"},"User Information"),(0,a.kt)("p",null,"Rancher maintains information about each user that logs in through an authentication provider. This information includes whether the user is allowed to access your Rancher server and the list of groups that the user belongs to. Rancher keeps this user information so that the CLI, API, and kubectl can accurately reflect the access that the user has based on their group membership in the authentication provider."),(0,a.kt)("p",null,"Whenever a user logs in to the UI using an authentication provider, Rancher automatically updates this user information."),(0,a.kt)("h3",{id:"automatically-refreshing-user-information"},"Automatically Refreshing User Information"),(0,a.kt)("p",null,"Rancher will periodically refresh the user information even before a user logs in through the UI. You can control how often Rancher performs this refresh. "),(0,a.kt)("p",null,"Two settings control this behavior:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"auth-user-info-max-age-seconds"))),(0,a.kt)("p",{parentName:"li"},"  This setting controls how old a user's information can be before Rancher refreshes it. If a user makes an API call (either directly or by using the Rancher CLI or kubectl) and the time since the user's last refresh is greater than this setting, then Rancher will trigger a refresh. This setting defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"3600")," seconds, i.e. 1 hour.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"auth-user-info-resync-cron"))),(0,a.kt)("p",{parentName:"li"},"  This setting controls a recurring schedule for resyncing authentication provider information for all users. Regardless of whether a user has logged in or used the API recently, this will cause the user to be refreshed at the specified interval. This setting defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"0 0 * * *"),", i.e. once a day at midnight. See the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Cron documentation")," for more information on valid values for this setting."))),(0,a.kt)("p",null,"To change these settings,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Global Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the setting you want to configure and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Setting"),".")),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Since SAML does not support user lookup, SAML-based authentication providers do not support periodically refreshing user information. User information will only be refreshed when the user logs into the Rancher UI."),(0,a.kt)("h3",{id:"manually-refreshing-user-information"},"Manually Refreshing User Information"),(0,a.kt)("p",null,"If you are not sure the last time Rancher performed an automatic refresh of user information, you can perform a manual refresh of all users."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Users")," page, click on ",(0,a.kt)("strong",{parentName:"li"},"Refresh Group Memberships"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")," Rancher refreshes the user information for all users. Requesting this refresh will update which users can access Rancher as well as all the groups that each user belongs to."),(0,a.kt)("p",null,">",(0,a.kt)("strong",{parentName:"p"},"Note:")," Since SAML does not support user lookup, SAML-based authentication providers do not support the ability to manually refresh user information. User information will only be refreshed when the user logs into the Rancher UI."),(0,a.kt)("h2",{id:"session-length"},"Session Length"),(0,a.kt)("p",null,"The default length (TTL) of each user session is adjustable. The default session length is 16 hours."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Global Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"auth-user-session-ttl-minutes"))," and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee ",">"," Edit Setting"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the amount of time in minutes a session length should last and click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Users are automatically logged out of Rancher after the set number of minutes."))}p.isMDXComponent=!0}}]);