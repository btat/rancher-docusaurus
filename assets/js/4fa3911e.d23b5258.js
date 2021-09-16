"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[65572],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97591:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Configuring Okta (SAML)",position:1210},u=void 0,s={unversionedId:"admin-settings/authentication/okta",id:"version-2.4.15/admin-settings/authentication/okta",isDocsHomePage:!1,title:"Configuring Okta (SAML)",description:"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials.",source:"@site/versioned_docs/version-2.4.15/admin-settings/authentication/okta.md",sourceDirName:"admin-settings/authentication",slug:"/admin-settings/authentication/okta",permalink:"/rancher-docusaurus/admin-settings/authentication/okta",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/admin-settings/authentication/okta.md",tags:[],version:"2.4.15",frontMatter:{title:"Configuring Okta (SAML)",position:1210},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"2. Configuring Rancher for Microsoft AD FS",permalink:"/rancher-docusaurus/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup"},next:{title:"Configuring OpenLDAP",permalink:"/rancher-docusaurus/admin-settings/authentication/openldap/index"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuring Okta in Rancher",id:"configuring-okta-in-rancher",children:[]}],c={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Note:")," Okta integration only supports Service Provider initiated logins."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In Okta, create a SAML Application with the settings below. See the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta documentation")," for help."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,i.kt)("h2",{id:"configuring-okta-in-rancher"},"Configuring Okta in Rancher"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Okta"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Okta Account")," form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the display name of users.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the user name/given name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that is unique to every user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name in a group attribute statement that exposes your groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"A key/certificate pair used for Assertion Encryption.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," file that you find in the application ",(0,i.kt)("inlineCode",{parentName:"td"},"Sign On")," section.")))),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">","        openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Okta Account")," form, click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),"."),(0,i.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note:")," If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins."),(0,i.kt)("p",null,"{{ saml_caveats }}"))}m.isMDXComponent=!0}}]);