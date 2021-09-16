"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[5673],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23940:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Customizing Grafana Dashboards",position:5},s=void 0,c={unversionedId:"monitoring-alerting/guides/customize-grafana",id:"monitoring-alerting/guides/customize-grafana",isDocsHomePage:!1,title:"Customizing Grafana Dashboards",description:"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container.",source:"@site/docs/monitoring-alerting/guides/customize-grafana.md",sourceDirName:"monitoring-alerting/guides",slug:"/monitoring-alerting/guides/customize-grafana",permalink:"/rancher-docusaurus/next/monitoring-alerting/guides/customize-grafana",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/monitoring-alerting/guides/customize-grafana.md",tags:[],version:"current",frontMatter:{title:"Customizing Grafana Dashboards",position:5},sidebar:"tutorialSidebar",previous:{title:"PromQL Expression Reference",permalink:"/rancher-docusaurus/next/monitoring-alerting/expression"},next:{title:"Enable Monitoring",permalink:"/rancher-docusaurus/next/monitoring-alerting/guides/enable-monitoring"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Signing in to Grafana",id:"signing-in-to-grafana",children:[]},{value:"Getting the PromQL Query Powering a Grafana Panel",id:"getting-the-promql-query-powering-a-grafana-panel",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can customize a Grafana dashboard, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application must be installed."),(0,o.kt)("p",null,"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/rbac/#users-with-rancher-cluster-manager-based-permissions"},"project-member role.")),(0,o.kt)("h3",{id:"signing-in-to-grafana"},"Signing in to Grafana"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster that has the dashboard you want to customize."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"li"},"Monitoring.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Grafana.")," The Grafana dashboard should open in a new tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the log in icon in the lower left corner and click ",(0,o.kt)("strong",{parentName:"li"},"Sign In.")),(0,o.kt)("li",{parentName:"ol"},"Log in to Grafana. The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"li"},"admin/prom-operator"),". (Regardless of who has the password, cluster administrator permission in Rancher is still required access the Grafana instance.) Alternative credentials can also be supplied on deploying or upgrading the chart.")),(0,o.kt)("h3",{id:"getting-the-promql-query-powering-a-grafana-panel"},"Getting the PromQL Query Powering a Grafana Panel"),(0,o.kt)("p",null,"For any panel, you can click the title and click ",(0,o.kt)("strong",{parentName:"p"},"Explore")," to get the PromQL queries powering the graphic."),(0,o.kt)("p",null,"For this example, we would like to get the CPU usage for the Alertmanager container, so we click ",(0,o.kt)("strong",{parentName:"p"},"CPU Utilization ",">"," Inspect.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Data")," tab shows the underlying data as a time series, with the time in first column and the PromQL query result in the second column. Copy the PromQL query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\n(1 - (avg(irate({__name__=~"node_cpu_seconds_total|windows_cpu_time_total",mode="idle"}[5m])))) * 100\n\n```\n')),(0,o.kt)("p",null,"You can then modify the query in the Grafana panel or create a new Grafana panel using the query. "),(0,o.kt)("p",null,"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/panel-editor/"},"Grafana docs on editing a panel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/add-a-panel/"},"Grafana docs on adding a panel to a dashboard"))))}m.isMDXComponent=!0}}]);