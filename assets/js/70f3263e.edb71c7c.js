"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[99138],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",position:1200},s=void 0,p={unversionedId:"admin-settings/authentication/keycloak-saml",id:"version-2.5.9/admin-settings/authentication/keycloak-saml",isDocsHomePage:!1,title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/versioned_docs/version-2.5.9/admin-settings/authentication/keycloak-saml.md",sourceDirName:"admin-settings/authentication",slug:"/admin-settings/authentication/keycloak-saml",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/keycloak-saml",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.5.9/admin-settings/authentication/keycloak-saml.md",tags:[],version:"2.5.9",frontMatter:{title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",position:1200},sidebar:"version-2.5.9/tutorialSidebar",previous:{title:"Configuring Keycloak (OIDC)",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/keycloak-oidc"},next:{title:"Local Authentication",permalink:"/rancher-docusaurus/2.5.9/admin-settings/authentication/local"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",children:[]},{value:"Configuration Reference",id:"configuration-reference",children:[]},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",children:[{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",children:[]},{value:"Forbidden message displayed after IdP login",id:"forbidden-message-displayed-after-idp-login",children:[]},{value:"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata",id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata",children:[]},{value:"Keycloak Error: &quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-error-were-sorry-failed-to-process-response",children:[]},{value:"Keycloak Error: &quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-error-were-sorry-invalid-requester",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses Keycloak Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"new SAML client"),", with the settings below. See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak documentation")," for help."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON")," \\<sup",">","1\\</sup",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ON")," \\<sup",">","1\\</sup",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"All other ",(0,i.kt)("inlineCode",{parentName:"td"},"ON/OFF")," Settings"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,i.kt)("td",{parentName:"tr",align:null},"Either ",(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata")," or the value configured in the ",(0,i.kt)("inlineCode",{parentName:"td"},"Entry ID Field")," of the Rancher Keycloak configuration\\<sup",">","2\\</sup",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,i.kt)("td",{parentName:"tr",align:null},"\\<CLIENT_NAME",">"," (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\\>\\<sup\\>1\\</sup\\>: Optionally, you can enable either one or both of these settings.\n\\>\\<sup\\>2\\</sup\\>: Rancher SAML metadata won't be generated until a SAML provider is configured and saved.\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-img"},'  {{ img "/img/rancher/keycloak/keycloak-saml-client-configuration.png" ""}}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the new SAML client, create Mappers to expose the users fields",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Add all "Builtin Protocol Mappers"')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/keycloak/keycloak-saml-client-builtin-mappers.png" ""}}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Create a new "Group list" mapper to map the member attribute to a user\'s groups')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-img"},'    {{ img "/img/rancher/keycloak/keycloak-saml-client-group-mapper.png" ""}}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Export a ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your Keycloak client:\nFrom the ",(0,i.kt)("inlineCode",{parentName:"p"},"Installation")," tab, choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," format option and download your file."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note"),"\n",">"," Keycloak versions 6.0.0 and up no longer provide the IDP metadata under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Installation")," tab.\n",">"," You can still get the XML from the following url:\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">"," ",(0,i.kt)("inlineCode",{parentName:"p"},"https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}/protocol/saml/descriptor"),"\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">"," The XML obtained from this URL contains ",(0,i.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," as the root element. Rancher expects the root element to be ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),". So before passing this XML to Rancher, follow these steps to adjust it:\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">","    ",(0,i.kt)("em",{parentName:"p"}," Copy all the attributes from ",(0,i.kt)("inlineCode",{parentName:"em"},"EntitiesDescriptor")," to the ",(0,i.kt)("inlineCode",{parentName:"em"},"EntityDescriptor")," that are not present.\n",">","    ")," Remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\<EntitiesDescriptor\\>")," tag from the beginning.\n",">","    * Remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\</EntitiesDescriptor\\>")," from the end of the xml.\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">"," You are left with something similar as the example below:\n",">",(0,i.kt)("br",{parentName:"p"}),"\n",">"," ",(0,i.kt)("inlineCode",{parentName:"p"},'\\> \\<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}"\\>\n\\>   .... \n\\> \\</EntityDescriptor\\>\n\\>')))),(0,i.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 ",">"," Users & Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Keycloak SAML"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form. For help with filling the form, see the ",(0,i.kt)("a",{parentName:"p",href:"#configuration-reference"},"configuration reference"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure a Keycloak Account")," form, click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),"."),(0,i.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,i.kt)("p",{parentName:"li"},">",(0,i.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak. Your users can now sign into Rancher using their Keycloak logins."),(0,i.kt)("p",null,"{{ saml_caveats }}"),(0,i.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute that contains the display name of users. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute that contains the user name/given name. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"email"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,i.kt)("td",{parentName:"tr",align:null},"An attribute that is unique to every user. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"email"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,i.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"member"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entity ID Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID that needs to be configured as a client ID in the Keycloak client. Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"A key/certificate pair to create a secure shell between Rancher and your IdP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IDP-metadata"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"metadata.xml")," file that you exported from your IdP server.")))),(0,i.kt)("p",null,">",(0,i.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:\n",">","\n",">","        openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert"),(0,i.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,i.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration option of your SAML client. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/faq/technical/#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,i.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,i.kt)("p",null,"When you click on ",(0,i.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", you are not redirected to your IdP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration."),(0,i.kt)("li",{parentName:"ul"},"Make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF"),".")),(0,i.kt)("h3",{id:"forbidden-message-displayed-after-idp-login"},"Forbidden message displayed after IdP login"),(0,i.kt)("p",null,"You are correctly redirected to your IdP login page and you are able to enter your credentials, however you get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbidden")," message afterwards."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the Rancher debug log."),(0,i.kt)("li",{parentName:"ul"},"If the log displays ",(0,i.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),", make sure either ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Documents")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign assertions")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"ON")," in your Keycloak client.")),(0,i.kt)("h3",{id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata"},"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata"),(0,i.kt)("p",null,"This is usually due to the metadata not being created until a SAML provider is configured.\nTry configuring and saving keycloak as your SAML provider and then accessing the metadata."),(0,i.kt)("h3",{id:"keycloak-error-were-sorry-failed-to-process-response"},'Keycloak Error: "We\'re sorry, failed to process response"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,i.kt)("li",{parentName:"ul"},"If the log displays ",(0,i.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),", set ",(0,i.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")),(0,i.kt)("h3",{id:"keycloak-error-were-sorry-invalid-requester"},'Keycloak Error: "We\'re sorry, invalid requester"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,i.kt)("li",{parentName:"ul"},"If the log displays ",(0,i.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),", set ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")))}d.isMDXComponent=!0}}]);