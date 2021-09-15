"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[7446],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Uninstall Monitoring",position:2},s=void 0,c={unversionedId:"monitoring-alerting/guides/uninstall",id:"monitoring-alerting/guides/uninstall",isDocsHomePage:!1,title:"Uninstall Monitoring",description:"1.  Click \u2630 \\> Cluster Management.",source:"@site/docs/monitoring-alerting/guides/uninstall.md",sourceDirName:"monitoring-alerting/guides",slug:"/monitoring-alerting/guides/uninstall",permalink:"/rancher-docusaurus/monitoring-alerting/guides/uninstall",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/monitoring-alerting/guides/uninstall.md",tags:[],version:"current",frontMatter:{title:"Uninstall Monitoring",position:2},sidebar:"tutorialSidebar",previous:{title:"Persistent Grafana Dashboards",permalink:"/rancher-docusaurus/monitoring-alerting/guides/persist-grafana"},next:{title:"How Monitoring Works",permalink:"/rancher-docusaurus/monitoring-alerting/how-monitoring-works"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace and check the boxes for ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring-crd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm ",(0,o.kt)("strong",{parentName:"li"},"Delete"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," is uninstalled."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note on Persistent Grafana Dashboards:")," For users who are using Monitoring V2 v9.4.203 or below, uninstalling the Monitoring chart will delete the cattle-dashboards namespace, which will delete all persisted dashboards, unless the namespace is marked with the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),". This annotation is added by default in Monitoring V2 v14.5.100+ but can be manually applied on the cattle-dashboards namespace before an uninstall if an older version of the Monitoring chart is currently installed onto your cluster."))}m.isMDXComponent=!0}}]);