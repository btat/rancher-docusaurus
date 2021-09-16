"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[96191],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(r),g=o,d=h["".concat(u,".").concat(g)]||h[g]||p[g]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3362:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Route Configuration",shortTitle:"Routes",position:5},u=void 0,s={unversionedId:"monitoring-alerting/configuration/route",id:"version-2.4.15/monitoring-alerting/configuration/route",isDocsHomePage:!1,title:"Route Configuration",description:"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver.",source:"@site/versioned_docs/version-2.4.15/monitoring-alerting/configuration/route.md",sourceDirName:"monitoring-alerting/configuration",slug:"/monitoring-alerting/configuration/route",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/route",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/monitoring-alerting/configuration/route.md",tags:[],version:"2.4.15",frontMatter:{title:"Route Configuration",shortTitle:"Routes",position:5},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Receiver Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/receiver"},next:{title:"ServiceMonitor and PodMonitor Configuration",permalink:"/rancher-docusaurus/monitoring-alerting/configuration/servicemonitor-podmonitor"}},c=[{value:"Note on Labels and Annotations",id:"note-on-labels-and-annotations",children:[]},{value:"Receiver",id:"receiver",children:[]},{value:"Grouping",id:"grouping",children:[]},{value:"Matching",id:"matching",children:[]}],p={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver."),(0,a.kt)("p",null,"When a Route is changed, the Prometheus Operator regenerates the Alertmanager custom resource to reflect the changes."),(0,a.kt)("p",null,"For more information about configuring routes, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.prometheus.io/docs/alerting/latest/configuration/#route"},"official Alertmanager documentation.")),(0,a.kt)("p",null,">"," This section assumes familiarity with how monitoring components work together. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/how-monitoring-works"},"this section.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#route-restrictions"},"Route Restrictions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#route-configuration"},"Route Configuration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#receiver"},"Receiver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#grouping"},"Grouping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#matching"},"Matching"))))),(0,a.kt)("h1",{id:"route-restrictions"},"Route Restrictions"),(0,a.kt)("p",null,"Alertmanager proxies alerts for Prometheus based on its receivers and a routing tree that filters alerts to certain receivers based on labels."),(0,a.kt)("p",null,"Alerting drivers proxy alerts for Alertmanager to non-native receivers, such as Microsoft Teams and SMS."),(0,a.kt)("p",null,"In the Rancher UI for configuring routes and receivers, you can configure routing trees with one root and then a depth of one more level, for a tree with a depth of two. But if you use a ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," route when configuring Alertmanager directly, you can make the tree deeper."),(0,a.kt)("p",null,"Each receiver is for one or more notification providers. So if you know that every alert for Slack should also go to PagerDuty, you can configure both in the same receiver."),(0,a.kt)("h1",{id:"route-configuration"},"Route Configuration"),(0,a.kt)("h3",{id:"note-on-labels-and-annotations"},"Note on Labels and Annotations"),(0,a.kt)("p",null,"Labels should be used for identifying information that can affect the routing of notifications. Identifying information about the alert could consist of a container name, or the name of the team that should be notified."),(0,a.kt)("p",null,"Annotations should be used for information that does not affect who receives the alert, such as a runbook url or error message."),(0,a.kt)("h3",{id:"receiver"},"Receiver"),(0,a.kt)("p",null,"The route needs to refer to a ",(0,a.kt)("a",{parentName:"p",href:"#receiver-configuration"},"receiver")," that has already been configured."),(0,a.kt)("h3",{id:"grouping"},"Grouping"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group By"),(0,a.kt)("td",{parentName:"tr",align:null},"N/a"),(0,a.kt)("td",{parentName:"tr",align:null},"The labels by which incoming alerts are grouped together. For example, ",(0,a.kt)("inlineCode",{parentName:"td"},"[ group_by: '[' \\<labelname\\>, ... ']' ]")," Multiple alerts coming in for labels such as ",(0,a.kt)("inlineCode",{parentName:"td"},"cluster=A")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"alertname=LatencyHigh")," can be batched into a single group. To aggregate by all possible labels, use the special value ",(0,a.kt)("inlineCode",{parentName:"td"},"'...'")," as the sole label name, for example: ",(0,a.kt)("inlineCode",{parentName:"td"},"group_by: ['...']"),"  Grouping by ",(0,a.kt)("inlineCode",{parentName:"td"},"...")," effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group Wait"),(0,a.kt)("td",{parentName:"tr",align:null},"30s"),(0,a.kt)("td",{parentName:"tr",align:null},"How long to wait to buffer alerts of the same group before sending initially.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"5m"),(0,a.kt)("td",{parentName:"tr",align:null},"How long to wait before sending an alert that has been added to a group of alerts for which an initial notification has already been sent.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Repeat Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"4h"),(0,a.kt)("td",{parentName:"tr",align:null},"How long to wait before re-sending a given alert that has already been sent.")))),(0,a.kt)("h3",{id:"matching"},"Matching"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Match")," field refers to a set of equality matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs to the Rancher UI, they correspond to the YAML in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"match:\n  [ \\<labelname\\>: \\<labelvalue\\>, ... ]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Match Regex")," field refers to a set of regex-matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs in the Rancher UI, they correspond to the YAML in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"match_re:\n  [ \\<labelname\\>: \\<regex\\>, ... ]\n")))}h.isMDXComponent=!0}}]);