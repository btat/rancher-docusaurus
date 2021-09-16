"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[62225],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,h=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87968:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Configuring FreeIPA",position:1114},u=void 0,c={unversionedId:"admin-settings/authentication/freeipa",id:"version-2.5.9/admin-settings/authentication/freeipa",isDocsHomePage:!1,title:"Configuring FreeIPA",description:"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials.",source:"@site/versioned_docs/version-2.5.9/admin-settings/authentication/freeipa.md",sourceDirName:"admin-settings/authentication",slug:"/admin-settings/authentication/freeipa",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/freeipa",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/admin-settings/authentication/freeipa.md",tags:[],version:"2.5.9",frontMatter:{title:"Configuring FreeIPA",position:1114},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Configuring Azure AD",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/azure-ad"},next:{title:"Configuring GitHub",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/github"}},p=[],l={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Prerequisites:"),"\n",">","\n",">","- You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.freeipa.org/"},"FreeIPA Server")," configured.\n",">","- Create a service account in FreeIPA with ",(0,i.kt)("inlineCode",{parentName:"p"},"read-only")," access. Rancher uses this account to verify group membership when a user makes a request using an API key.\n",">","- Read ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,i.kt)("em",{parentName:"p"},"local principal"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"FreeIPA"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure an FreeIPA server")," form."),(0,i.kt)("p",{parentName:"li"},"You may need to log in to your domain controller to find the information requested in the form."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Using TLS?"),"\n",">","If the certificate is self-signed or not from a recognized certificate authority, make sure you provide the complete chain. That chain is needed to verify the server's certificate."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"User Search Base vs. Group Search Base"),"\n",">","\n",">","Search base allows Rancher to search for users and groups that are in your FreeIPA.  These fields are only for search bases and not for search filters.\n",">","\n",">",(0,i.kt)("em",{parentName:"p"}," If your users and groups are in the same search base, complete only the User Search Base.\n",">")," If your groups are in a different search base, you can optionally complete the Group Search Base. This field is dedicated to searching groups, but is not required.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If your FreeIPA deviates from the standard AD schema, complete the ",(0,i.kt)("strong",{parentName:"p"},"Customize Schema")," form to match it. Otherwise, skip this step."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Search Attribute")," The Search Attribute field defaults with three specific values: ",(0,i.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),". After FreeIPA is configured, when a user enters text to add users or groups, Rancher automatically queries the FreeIPA server and attempts to match fields by user id, last name, or first name. Rancher specifically searches for users/groups that begin with the text entered in the search field.\n",">","\n",">","The default field value ",(0,i.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),", but you can configure this field to a subset of these fields. The pipe (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") between the fields separates these fields.\n",">","\n",">"," ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"uid"),": User ID\n",">"," ")," ",(0,i.kt)("inlineCode",{parentName:"p"},"sn"),": Last Name\n",">"," ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"givenName"),": First Name\n",">",">"," With this search attribute, Rancher creates search filters for users and groups, but you "),"cannot* add your own search filters in this field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your FreeIPA username and password in ",(0,i.kt)("strong",{parentName:"p"},"Authenticate with FreeIPA")," to confirm that Rancher is configured to use FreeIPA authentication.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FreeIPA authentication is configured."),(0,i.kt)("li",{parentName:"ul"},"You are signed into Rancher with your FreeIPA account (i.e., the ",(0,i.kt)("em",{parentName:"li"},"external principal"),").")))}m.isMDXComponent=!0}}]);