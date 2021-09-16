"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[24572],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80628:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return h}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={title:"Configuring OpenLDAP",position:1113},s=void 0,u={unversionedId:"admin-settings/authentication/openldap/index",id:"version-2.4.15/admin-settings/authentication/openldap/index",isDocsHomePage:!1,title:"Configuring OpenLDAP",description:"If your organization uses LDAP for user authentication, you can configure Rancher to communicate with an OpenLDAP server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the organisation's central user repository, while allowing end-users to authenticate with their LDAP credentials when logging in to the Rancher UI.",source:"@site/versioned_docs/version-2.4.15/admin-settings/authentication/openldap/index.md",sourceDirName:"admin-settings/authentication/openldap",slug:"/admin-settings/authentication/openldap/index",permalink:"/rancher-docusaurus/admin-settings/authentication/openldap/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/admin-settings/authentication/openldap/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Configuring OpenLDAP",position:1113},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Configuring Okta (SAML)",permalink:"/rancher-docusaurus/admin-settings/authentication/okta"},next:{title:"OpenLDAP Configuration Reference",permalink:"/rancher-docusaurus/admin-settings/authentication/openldap/openldap-config"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",children:[{value:"Test Authentication",id:"test-authentication",children:[]}]},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",children:[]}],p={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses LDAP for user authentication, you can configure Rancher to communicate with an OpenLDAP server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the organisation's central user repository, while allowing end-users to authenticate with their LDAP credentials when logging in to the Rancher UI. "),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Using TLS?"),"\n",">","\n",">"," If the certificate used by the OpenLDAP server is self-signed or not from a recognised certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain."),(0,a.kt)("h2",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,a.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,a.kt)("a",{parentName:"p",href:"./openldap-config"},"configuration reference.")),(0,a.kt)("p",null,">"," Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OpenLDAP"),". Fill out the ",(0,a.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Enable"),".")),(0,a.kt)("h3",{id:"test-authentication"},"Test Authentication"),(0,a.kt)("p",null,"Once you have completed the configuration, proceed by testing  the connection to the OpenLDAP server. Authentication with OpenLDAP will be enabled implicitly if the test is successful."),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"\n",">","\n",">"," The OpenLDAP user pertaining to the credentials entered in this step will be mapped to the local principal account and assigned administrator privileges in Rancher. You should therefore make a conscious decision on which LDAP account you use to perform this step."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"username")," and ",(0,a.kt)("strong",{parentName:"li"},"password")," for the OpenLDAP account that should be mapped to the local principal account."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Authenticate With OpenLDAP")," to test the OpenLDAP connection and finalise the setup.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenLDAP authentication is configured."),(0,a.kt)("li",{parentName:"ul"},"The LDAP user pertaining to the entered credentials is mapped to the local principal (administrative) account.")),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"\n",">","\n",">"," You will still be able to login using the locally configured ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," account and password in case of a disruption of LDAP services."),(0,a.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,a.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/faq/technical/#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}h.isMDXComponent=!0}}]);