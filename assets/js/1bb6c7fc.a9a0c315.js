"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[80196],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?t.createElement(f,a(a({ref:r},l),{},{components:n})):t.createElement(f,a({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22165:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={title:"Advanced Configuration",position:500},c=void 0,s={unversionedId:"monitoring-alerting/configuration/advanced/index",id:"version-2.4.15/monitoring-alerting/configuration/advanced/index",isDocsHomePage:!1,title:"Advanced Configuration",description:"Alertmanager",source:"@site/versioned_docs/version-2.4.15/monitoring-alerting/configuration/advanced/index.md",sourceDirName:"monitoring-alerting/configuration/advanced",slug:"/monitoring-alerting/configuration/advanced/index",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/advanced/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/monitoring-alerting/configuration/advanced/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Advanced Configuration",position:500},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Alertmanager Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/advanced/alertmanager"},next:{title:"Prometheus Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/advanced/prometheus"}},l=[{value:"Alertmanager",id:"alertmanager",children:[]},{value:"Prometheus",id:"prometheus",children:[]},{value:"PrometheusRules",id:"prometheusrules",children:[]}],p={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"alertmanager"},"Alertmanager"),(0,i.kt)("p",null,"For information on configuring the Alertmanager custom resource, see ",(0,i.kt)("a",{parentName:"p",href:"./alertmanager"},"this page.")),(0,i.kt)("h3",{id:"prometheus"},"Prometheus"),(0,i.kt)("p",null,"For information on configuring the Prometheus custom resource, see ",(0,i.kt)("a",{parentName:"p",href:"./prometheus"},"this page.")),(0,i.kt)("h3",{id:"prometheusrules"},"PrometheusRules"),(0,i.kt)("p",null,"For information on configuring the Prometheus custom resource, see ",(0,i.kt)("a",{parentName:"p",href:"./prometheusrules"},"this page.")))}m.isMDXComponent=!0}}]);