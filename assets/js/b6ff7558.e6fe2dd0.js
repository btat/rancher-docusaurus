"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[4415],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9147:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"2. Configuring Rancher for Microsoft AD FS",position:1205},c=void 0,l={unversionedId:"admin-settings/authentication/microsoft-adfs/rancher-adfs-setup",id:"admin-settings/authentication/microsoft-adfs/rancher-adfs-setup",isDocsHomePage:!1,title:"2. Configuring Rancher for Microsoft AD FS",description:"After you complete Configuring Microsoft AD FS for Rancher, enter your AD FS information into Rancher to allow AD FS users to authenticate with Rancher.",source:"@site/docs/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup.md",sourceDirName:"admin-settings/authentication/microsoft-adfs",slug:"/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup",permalink:"/rancher-docusaurus/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup.md",tags:[],version:"current",frontMatter:{title:"2. Configuring Rancher for Microsoft AD FS",position:1205},sidebar:"tutorialSidebar",previous:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/rancher-docusaurus/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup"},next:{title:"Configuring Okta (SAML)",permalink:"/rancher-docusaurus/admin-settings/authentication/okta"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you complete ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup/"},"Configuring Microsoft AD FS for Rancher"),", enter your AD FS information into Rancher to allow AD FS users to authenticate with Rancher."),(0,o.kt)("p",null,">",(0,o.kt)("strong",{parentName:"p"},"Important Notes For Configuring Your ADFS Server:"),"\n",">","\n",">","- The SAML 2.0 WebSSO Protocol Service URL is: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://\\<RANCHER_SERVER\\>/v1-saml/adfs/saml/acs"),"\n",">","- The Relying Party Trust identifier URL is: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://\\<RANCHER_SERVER\\>/v1-saml/adfs/saml/metadata"),"\n",">","- You must export the ",(0,o.kt)("inlineCode",{parentName:"p"},"federationmetadata.xml")," file from your AD FS server. This can be found at: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://\\<AD_SERVER\\>/federationmetadata/2007-06/federationmetadata.xml")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"ADFS"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form. Microsoft AD FS lets you specify an existing Active Directory (AD) server. The ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration section below")," describe how you can map AD attributes to fields within Rancher.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form, click ",(0,o.kt)("strong",{parentName:"p"},"Enable"),"."),(0,o.kt)("p",{parentName:"li"},"Rancher redirects you to the AD FS login page. Enter credentials that authenticate with Microsoft AD FS to validate your Rancher AD FS configuration."),(0,o.kt)("p",{parentName:"li"},">",(0,o.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the AD FS login page."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with MS FS. Your users can now sign into Rancher using their MS FS logins."),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the display name of users. Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the user name/given name. Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,o.kt)("td",{parentName:"tr",align:null},"An AD attribute that is unique to every user. Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,o.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/claims/Group"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,o.kt)("td",{parentName:"tr",align:null},"This is a key-certificate pair to create a secure shell between Rancher and your AD FS. Ensure you set the Common Name (CN) to your Rancher Server URL.",(0,o.kt)("a",{parentName:"td",href:"#cert-command"},"Certificate creation command"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"federationmetadata.xml")," file exported from your AD FS server. You can find this file at ",(0,o.kt)("inlineCode",{parentName:"td"},"https://\\<AD_SERVER\\>/federationmetadata/2007-06/federationmetadata.xml"),".")))),(0,o.kt)("p",null,'\\<a id="cert-command"',">","\\</a",">"," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," You can generate a certificate using an openssl command. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n')))}m.isMDXComponent=!0}}]);