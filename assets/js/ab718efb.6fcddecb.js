"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[5930],{3905:function(t,e,n){n.d(e,{Zo:function(){return _},kt:function(){return S}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},_=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,_=o(t,["components","mdxType","originalType","parentName"]),p=u(n),S=a,d=p["".concat(s,".").concat(S)]||p[S]||c[S]||i;return n?r.createElement(d,l(l({ref:e},_),{},{components:n})):r.createElement(d,l({ref:e},_))}));function S(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4217:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return _},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"TLS Settings",position:3},s=void 0,u={unversionedId:"installation/resources/tls-settings",id:"installation/resources/tls-settings",isDocsHomePage:!1,title:"TLS Settings",description:"The default TLS configuration only accepts TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported.",source:"@site/docs/installation/resources/tls-settings.md",sourceDirName:"installation/resources",slug:"/installation/resources/tls-settings",permalink:"/rancher-docusaurus/installation/resources/tls-settings",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/installation/resources/tls-settings.md",tags:[],version:"current",frontMatter:{title:"TLS Settings",position:3},sidebar:"tutorialSidebar",previous:{title:"Adding TLS Secrets",permalink:"/rancher-docusaurus/installation/resources/tls-secrets"},next:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",permalink:"/rancher-docusaurus/installation/resources/troubleshooting"}},_=[],c={toc:_};function p(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default TLS configuration only accepts TLS 1.2 and secure TLS cipher suites. TLS 1.3 and TLS 1.3 exclusive cipher suites are not supported."),(0,i.kt)("h1",{id:"configuring-tls-settings"},"Configuring TLS settings"),(0,i.kt)("p",null,"The Audit Log is enabled and configured by passing environment variables to the Rancher server container. See the following to enable on your installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/advanced/#tls-settings"},"TLS settings in Docker options"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/chart-options/#tls-settings"},"TLS settings in Helm chart options")))),(0,i.kt)("h1",{id:"tls-environment-variables"},"TLS Environment Variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Available options"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Minimum TLS version"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,i.kt)("td",{parentName:"tr",align:null},"Allowed TLS cipher suites"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,``TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,``TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,``TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,``TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,``TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/tls/#pkg-constants"},"Golang tls constants"))))),(0,i.kt)("h1",{id:"legacy-configuration"},"Legacy configuration"),(0,i.kt)("p",null,"If you need to configure TLS the same way as it was before Rancher v2.1.7, please use the following settings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Legacy value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,``TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,``TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,``TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,``TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,``TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,``TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,``TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,``TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,``TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,``TLS_RSA_WITH_AES_128_GCM_SHA256,``TLS_RSA_WITH_AES_256_GCM_SHA384,``TLS_RSA_WITH_AES_128_CBC_SHA,``TLS_RSA_WITH_AES_256_CBC_SHA,``TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,``TLS_RSA_WITH_3DES_EDE_CBC_SHA"))))))}p.isMDXComponent=!0}}]);