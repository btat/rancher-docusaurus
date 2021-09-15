"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[2024],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6663:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={title:"Configuration",position:5},c=void 0,s={unversionedId:"monitoring-alerting/configuration/index",id:"monitoring-alerting/configuration/index",isDocsHomePage:!1,title:"Configuration",description:"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI.",source:"@site/docs/monitoring-alerting/configuration/index.md",sourceDirName:"monitoring-alerting/configuration",slug:"/monitoring-alerting/configuration/index",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/monitoring-alerting/configuration/index.md",tags:[],version:"current",frontMatter:{title:"Configuration",position:5},sidebar:"tutorialSidebar",previous:{title:"Helm Chart Options",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/helm-chart-options"},next:{title:"Receiver Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/receiver"}},l=[{value:"ServiceMonitor and PodMonitor Configuration",id:"servicemonitor-and-podmonitor-configuration",children:[]},{value:"Advanced Prometheus Configuration",id:"advanced-prometheus-configuration",children:[]},{value:"Receivers",id:"receivers",children:[]},{value:"Routes",id:"routes",children:[]},{value:"Advanced",id:"advanced",children:[]}],m={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI."),(0,i.kt)("p",null,"For information on configuring custom scrape targets and rules for Prometheus, please refer to the upstream documentation for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator.")," Some of the most important custom resources are explained in the Prometheus Operator ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md"},"design documentation.")," The Prometheus Operator documentation can help also you set up RBAC, Thanos, or custom configuration. "),(0,i.kt)("h1",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits for the monitoring application can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". For more information about the default limits, see ",(0,i.kt)("a",{parentName:"p",href:"./helm-chart-options/#configuring-resource-limits-and-requests"},"this page.")),(0,i.kt)("h1",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,i.kt)("p",null,"It is usually not necessary to directly edit the Prometheus custom resource."),(0,i.kt)("p",null,"Instead, to configure Prometheus to scrape custom metrics, you will only need to create a new ServiceMonitor or PodMonitor to configure Prometheus to scrape additional metrics."),(0,i.kt)("h3",{id:"servicemonitor-and-podmonitor-configuration"},"ServiceMonitor and PodMonitor Configuration"),(0,i.kt)("p",null,"For details, see ",(0,i.kt)("a",{parentName:"p",href:"./servicemonitor-podmonitor"},"this page.")),(0,i.kt)("h3",{id:"advanced-prometheus-configuration"},"Advanced Prometheus Configuration"),(0,i.kt)("p",null,"For more information about directly editing the Prometheus custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"./advanced/prometheus"},"this page.")),(0,i.kt)("h1",{id:"alertmanager-configuration"},"Alertmanager Configuration"),(0,i.kt)("p",null,"The Alertmanager custom resource usually doesn't need to be edited directly. For most common use cases, you can manage alerts by updating Routes and Receivers."),(0,i.kt)("p",null,"Routes and receivers are part of the configuration of the alertmanager custom resource. In the Rancher UI, Routes and Receivers are not true custom resources, but pseudo-custom resources that the Prometheus Operator uses to synchronize your configuration with the Alertmanager custom resource. When routes and receivers are updated, the monitoring application will automatically update Alertmanager to reflect those changes."),(0,i.kt)("p",null,"For some advanced use cases, you may want to configure alertmanager directly. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"./advanced/alertmanager"},"this page.")),(0,i.kt)("h3",{id:"receivers"},"Receivers"),(0,i.kt)("p",null,"Receivers are used to set up notifications. For details on how to configure receivers, see ",(0,i.kt)("a",{parentName:"p",href:"./receiver"},"this page.")),(0,i.kt)("h3",{id:"routes"},"Routes"),(0,i.kt)("p",null,"Routes filter notifications before they reach receivers. Each route needs to refer to a receiver that has already been configured. For details on how to configure routes, see ",(0,i.kt)("a",{parentName:"p",href:"./route"},"this page.")),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"For more information about directly editing the Alertmanager custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"./advanced/alertmanager"},"this page.")))}p.isMDXComponent=!0}}]);