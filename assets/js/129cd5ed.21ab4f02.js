"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[3915],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78153:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"1. Configuring Microsoft AD FS for Rancher",position:1205},s=void 0,c={unversionedId:"admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup",id:"admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup",isDocsHomePage:!1,title:"1. Configuring Microsoft AD FS for Rancher",description:"Before configuring Rancher to support AD FS users, you must add Rancher as a relying party trust in AD FS.",source:"@site/docs/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup.md",sourceDirName:"admin-settings/authentication/microsoft-adfs",slug:"/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup",permalink:"/rancher-docusaurus/next/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup.md",tags:[],version:"current",frontMatter:{title:"1. Configuring Microsoft AD FS for Rancher",position:1205},sidebar:"tutorialSidebar",previous:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/rancher-docusaurus/next/admin-settings/authentication/microsoft-adfs/index"},next:{title:"2. Configuring Rancher for Microsoft AD FS",permalink:"/rancher-docusaurus/next/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup"}},p=[{value:"Next: Configuring Rancher for Microsoft AD FS",id:"next-configuring-rancher-for-microsoft-ad-fs",children:[]}],m={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before configuring Rancher to support AD FS users, you must add Rancher as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/technical-reference/understanding-key-ad-fs-concepts"},"relying party trust")," in AD FS. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into your AD server as an administrative user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"AD FS Management")," console. Select ",(0,o.kt)("strong",{parentName:"p"},"Add Relying Party Trust.."),". from the ",(0,o.kt)("strong",{parentName:"p"},"Actions")," menu and click ",(0,o.kt)("strong",{parentName:"p"},"Start"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-overview.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Enter data about the relying party manually")," as the option for obtaining data about the relying party.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-2.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter your desired ",(0,o.kt)("strong",{parentName:"li"},"Display name")," for your Relying Party Trust. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"Rancher"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-3.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"AD FS profile")," as the configuration profile for your relying party trust.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-4.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"optional token encryption certificate")," empty, as Rancher AD FS will not be using one.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-5.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Enable support for the SAML 2.0 WebSSO protocol"),"\nand enter ",(0,o.kt)("inlineCode",{parentName:"li"},"https://\\<rancher-server\\>/v1-saml/adfs/saml/acs")," for the service URL.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-6.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"https://\\<rancher-server\\>/v1-saml/adfs/saml/metadata")," as the ",(0,o.kt)("strong",{parentName:"li"},"Relying party trust identifier"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-7.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"This tutorial will not cover multi-factor authentication; please refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-additional-authentication-methods-for-ad-fs"},"Microsoft documentation")," if you would like to configure multi-factor authentication.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-8.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("strong",{parentName:"li"},"Choose Issuance Authorization RUles"),", you may select either of the options available according to use case. However, for the purposes of this guide, select ",(0,o.kt)("strong",{parentName:"li"},"Permit all users to access this relying party"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-9.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After reviewing your settings, select ",(0,o.kt)("strong",{parentName:"li"},"Next")," to add the relying party trust.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-10.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Open the Edit Claim Rules.."),". and click ",(0,o.kt)("strong",{parentName:"li"},"Close"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-rpt-11.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Issuance Transform Rules")," tab, click ",(0,o.kt)("strong",{parentName:"li"},"Add Rule.."),"..")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-edit-cr.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Send LDAP Attributes as Claims")," as the ",(0,o.kt)("strong",{parentName:"li"},"Claim rule template"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-tcr-1.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("strong",{parentName:"p"},"Claim rule name")," to your desired name (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Rancher Attributes"),") and select ",(0,o.kt)("strong",{parentName:"p"},"Active Directory")," as the ",(0,o.kt)("strong",{parentName:"p"},"Attribute store"),". Create the following mapping to reflect the table below:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"LDAP Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Outgoing Claim Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Given-Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Given Name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User-Principal-Name"),(0,o.kt)("td",{parentName:"tr",align:null},"UPN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Token-Groups - Qualified by Long Domain Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Group")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SAM-Account-Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/adfs/adfs-add-tcr-2.png" ""}}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("inlineCode",{parentName:"li"},"federationmetadata.xml")," from your AD server at: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://\\<AD_SERVER\\>/federationmetadata/2007-06/federationmetadata.xml\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You've added Rancher as a relying trust party. Now you can configure Rancher to leverage AD."),(0,o.kt)("h3",{id:"next-configuring-rancher-for-microsoft-ad-fs"},(0,o.kt)("a",{parentName:"h3",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup/"},"Next: Configuring Rancher for Microsoft AD FS")))}u.isMDXComponent=!0}}]);