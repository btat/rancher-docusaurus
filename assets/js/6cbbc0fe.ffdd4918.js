"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[8919],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Configuring Shibboleth (SAML)",position:1210},l=void 0,u={unversionedId:"admin-settings/authentication/shibboleth/index",id:"version-2.5.9/admin-settings/authentication/shibboleth/index",isDocsHomePage:!1,title:"Configuring Shibboleth (SAML)",description:"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials.",source:"@site/versioned_docs/version-2.5.9/admin-settings/authentication/shibboleth/index.md",sourceDirName:"admin-settings/authentication/shibboleth",slug:"/admin-settings/authentication/shibboleth/index",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/shibboleth/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/admin-settings/authentication/shibboleth/index.md",tags:[],version:"2.5.9",frontMatter:{title:"Configuring Shibboleth (SAML)",position:1210},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Group Permissions with Shibboleth and OpenLDAP",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/shibboleth/about"},next:{title:"Users and Groups",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/user-groups"}},h=[{value:"Shibboleth Prerequisites",id:"shibboleth-prerequisites",children:[]},{value:"Configure Shibboleth in Rancher",id:"configure-shibboleth-in-rancher",children:[]},{value:"SAML Provider Caveats",id:"saml-provider-caveats",children:[]},{value:"OpenLDAP Prerequisites",id:"openldap-prerequisites",children:[]},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",children:[]}],c={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials."),(0,i.kt)("p",null,"In this configuration, when Rancher users log in, they will be redirected to the Shibboleth IdP to enter their credentials. After authentication, they will be redirected back to the Rancher UI."),(0,i.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then the authenticated user will be able to access resources in Rancher that their groups have permissions for."),(0,i.kt)("p",null,">"," The instructions in this section assume that you understand how Rancher, Shibboleth, and OpenLDAP work together. For a more detailed explanation of how it works, refer to ",(0,i.kt)("a",{parentName:"p",href:"./about"},"this page.")),(0,i.kt)("h1",{id:"setting-up-shibboleth-in-rancher"},"Setting up Shibboleth in Rancher"),(0,i.kt)("h3",{id:"shibboleth-prerequisites"},"Shibboleth Prerequisites"),(0,i.kt)("p",null,">","\n",">","- You must have a Shibboleth IdP Server configured.\n",">","- Following are the Rancher Service Provider URLs needed for configuration:\nMetadata URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://\\<rancher-server\\>/v1-saml/shibboleth/saml/metadata"),"\nAssertion Consumer Service (ACS) URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://\\<rancher-server\\>/v1-saml/shibboleth/saml/acs"),"\n",">","- Export a ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your IdP Server. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.shibboleth.net/confluence/display/SP3/Home"},"Shibboleth documentation.")),(0,i.kt)("h3",{id:"configure-shibboleth-in-rancher"},"Configure Shibboleth in Rancher"),(0,i.kt)("p",null,"If your organization uses Shibboleth for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Shibboleth"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form. Shibboleth IdP lets you specify what data store you want to use. You can either add a database or use an existing ldap server. For example, if you select your Active Directory (AD) server, the examples below describe how you can map AD attributes to fields within Rancher."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display Name Field"),": Enter the AD attribute that contains the display name of users (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Name Field"),": Enter the AD attribute that contains the user name/given name (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"givenName"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"UID Field"),": Enter an AD attribute that is unique to every user (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distinguishedName"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Groups Field"),": Make entries for managing group memberships (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"memberOf"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rancher API Host"),": Enter the URL for your Rancher Server.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private Key")," and ",(0,i.kt)("strong",{parentName:"p"},"Certificate"),": This is a key-certificate pair to create a secure shell between Rancher and your IdP."),(0,i.kt)("p",{parentName:"li"},"You can generate one using an openssl command. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"IDP-metadata"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file that you exported from your IdP server."))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form, click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),"."),(0,i.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Shibboleth IdP to validate your Rancher Shibboleth configuration."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Shibboleth. Your users can now sign into Rancher using their Shibboleth logins."),(0,i.kt)("h3",{id:"saml-provider-caveats"},"SAML Provider Caveats"),(0,i.kt)("p",null,"If you configure Shibboleth without OpenLDAP, the following caveats apply due to the fact that SAML Protocol does not support search or lookup for users or groups."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is no validation on users or groups when assigning permissions to them in Rancher."),(0,i.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. UID Field) must be entered correctly. As you type the user ID, there will be no search for other user IDs that may match."),(0,i.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,i.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")),(0,i.kt)("p",null,"To enable searching for groups when assigning permissions in Rancher, you will need to configure a back end for the SAML provider that supports groups, such as OpenLDAP."),(0,i.kt)("h1",{id:"setting-up-openldap-in-rancher"},"Setting up OpenLDAP in Rancher"),(0,i.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then authenticated users will be able to access resources in Rancher that their groups have permissions for."),(0,i.kt)("h3",{id:"openldap-prerequisites"},"OpenLDAP Prerequisites"),(0,i.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,i.kt)("p",null,">"," ",(0,i.kt)("strong",{parentName:"p"},"Using TLS?"),"\n",">","\n",">"," If the certificate used by the OpenLDAP server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain."),(0,i.kt)("h3",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,i.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/openldap/openldap-config"},"configuration reference.")," Note that nested group membership is not available for Shibboleth."),(0,i.kt)("p",null,">"," Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into the Rancher UI using the initial local ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," account."),(0,i.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 ",">"," Users & Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OpenLDAP"),". The ",(0,i.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form will be displayed.")),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/faq/technical/#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}p.isMDXComponent=!0}}]);