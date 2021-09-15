"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[2269],{3905:function(e,o,t){t.d(o,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),u=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},p=function(e){var o=u(e.components);return r.createElement(c.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},l=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=n,h=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return t?r.createElement(h,a(a({ref:o},p),{},{components:t})):r.createElement(h,a({ref:o},p))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4769:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"ServiceMonitor and PodMonitor Configuration",shortTitle:"ServiceMonitors and PodMonitors",position:7},c=void 0,u={unversionedId:"monitoring-alerting/configuration/servicemonitor-podmonitor",id:"monitoring-alerting/configuration/servicemonitor-podmonitor",isDocsHomePage:!1,title:"ServiceMonitor and PodMonitor Configuration",description:"ServiceMonitors and PodMonitors are both pseudo-CRDs that map the scrape configuration of the Prometheus custom resource.",source:"@site/docs/monitoring-alerting/configuration/servicemonitor-podmonitor.md",sourceDirName:"monitoring-alerting/configuration",slug:"/monitoring-alerting/configuration/servicemonitor-podmonitor",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/servicemonitor-podmonitor",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/monitoring-alerting/configuration/servicemonitor-podmonitor.md",tags:[],version:"current",frontMatter:{title:"ServiceMonitor and PodMonitor Configuration",shortTitle:"ServiceMonitors and PodMonitors",position:7},sidebar:"tutorialSidebar",previous:{title:"Route Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/route"},next:{title:"Built-in Dashboards",permalink:"/rancher-docusaurus/monitoring-alerting/dashboards"}},p=[{value:"ServiceMonitors",id:"servicemonitors",children:[]},{value:"PodMonitors",id:"podmonitors",children:[]}],m={toc:p};function l(e){var o=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ServiceMonitors and PodMonitors are both pseudo-CRDs that map the scrape configuration of the Prometheus custom resource."),(0,i.kt)("p",null,"These configuration objects declaratively specify the endpoints that Prometheus will scrape metrics from."),(0,i.kt)("p",null,"ServiceMonitors are more commonly used than PodMonitors, and we recommend them for most use cases."),(0,i.kt)("p",null,">"," This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,i.kt)("a",{parentName:"p",href:"../../how-monitoring-works/"},"this section.")),(0,i.kt)("h3",{id:"servicemonitors"},"ServiceMonitors"),(0,i.kt)("p",null,"This pseudo-CRD maps to a section of the Prometheus custom resource configuration. It declaratively specifies how groups of Kubernetes services should be monitored. "),(0,i.kt)("p",null,"When a ServiceMonitor is created, the Prometheus Operator updates the Prometheus scrape configuration to include the ServiceMonitor configuration. Then Prometheus begins scraping metrics from the endpoint defined in the ServiceMonitor."),(0,i.kt)("p",null,"Any Services in your cluster that match the labels located within the ServiceMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," field will be monitored based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," specified on the ServiceMonitor. For more information on what fields can be specified, please look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#servicemonitor"},"spec")," provided by Prometheus Operator."),(0,i.kt)("p",null,"For more information about how ServiceMonitors work, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/running-exporters.md"},"Prometheus Operator documentation.")),(0,i.kt)("h3",{id:"podmonitors"},"PodMonitors"),(0,i.kt)("p",null,"This pseudo-CRD maps to a section of the Prometheus custom resource configuration. It declaratively specifies how group of pods should be monitored. "),(0,i.kt)("p",null,"When a PodMonitor is created, the Prometheus Operator updates the Prometheus scrape configuration to include the PodMonitor configuration. Then Prometheus begins scraping metrics from the endpoint defined in the ServiceMonitor."),(0,i.kt)("p",null,"Any Pods in your cluster that match the labels located within the PodMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," field will be monitored based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"podMetricsEndpoints")," specified on the PodMonitor. For more information on what fields can be specified, please look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#podmonitorspec"},"spec")," provided by Prometheus Operator."))}l.isMDXComponent=!0}}]);