"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[6682],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Enable Monitoring",position:1},s=void 0,c={unversionedId:"monitoring-alerting/guides/enable-monitoring",id:"monitoring-alerting/guides/enable-monitoring",isDocsHomePage:!1,title:"Enable Monitoring",description:"As an administrator or cluster owner, you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.",source:"@site/docs/monitoring-alerting/guides/enable-monitoring.md",sourceDirName:"monitoring-alerting/guides",slug:"/monitoring-alerting/guides/enable-monitoring",permalink:"/rancher-docusaurus/monitoring-alerting/guides/enable-monitoring",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/monitoring-alerting/guides/enable-monitoring.md",tags:[],version:"current",frontMatter:{title:"Enable Monitoring",position:1},sidebar:"tutorialSidebar",previous:{title:"Customizing Grafana Dashboards",permalink:"/rancher-docusaurus/monitoring-alerting/guides/customize-grafana"},next:{title:"Monitoring Guides",permalink:"/rancher-docusaurus/monitoring-alerting/guides/index"}},p=[{value:"Enable Monitoring for use without SSL",id:"enable-monitoring-for-use-without-ssl",children:[]},{value:"Enable Monitoring for use with SSL",id:"enable-monitoring-for-use-with-ssl",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As an ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},"administrator")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,o.kt)("p",null,"This page describes how to enable monitoring and alerting within a cluster using the new monitoring application."),(0,o.kt)("p",null,"You can enable monitoring with or without SSL."),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that you are allowing traffic on port 9796 for each of your nodes because Prometheus will scrape metrics from here."),(0,o.kt)("li",{parentName:"ul"},"Make sure your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. A breakdown of the resource limits and requests is ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/configuration/helm-chart-options/#configuring-resource-limits-and-requests"},"here.")),(0,o.kt)("li",{parentName:"ul"},"When installing monitoring on an RKE cluster using RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),".")),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment."),(0,o.kt)("h1",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,o.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),".  To configure Prometheus resources from the Rancher UI, click ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace ",">"," Monitoring")," in the upper left corner."),(0,o.kt)("p",null,"For more information about the default limits, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/configuration/helm-chart-options/#configuring-resource-limits-and-requests"},"this page.")),(0,o.kt)("h1",{id:"install-the-monitoring-application"},"Install the Monitoring Application"),(0,o.kt)("h3",{id:"enable-monitoring-for-use-without-ssl"},"Enable Monitoring for use without SSL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Monitoring")," app."),(0,o.kt)("li",{parentName:"ol"},"Optional: Click ",(0,o.kt)("strong",{parentName:"li"},"Chart Options")," and configure alerting, Prometheus and Grafana. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/configuration/helm-chart-options/"},"configuration reference.")),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,o.kt)("h3",{id:"enable-monitoring-for-use-with-ssl"},"Enable Monitoring for use with SSL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/secrets/"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to enable monitoring for use with SSL and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace ",">"," Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install")," or ",(0,o.kt)("strong",{parentName:"li"},"Update"),", depending on whether you have already installed Monitoring."),(0,o.kt)("li",{parentName:"ol"},"Check the box for ",(0,o.kt)("strong",{parentName:"li"},"Customize Helm options before install")," and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Additional Secrets")," field, add the secrets created earlier.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/configuration/advanced/alertmanager/#creating-receivers-in-the-rancher-ui"},"creating a receiver,")," SSL-enabled receivers such as email or webhook will have a ",(0,o.kt)("strong",{parentName:"p"},"SSL")," section with fields for ",(0,o.kt)("strong",{parentName:"p"},"CA File Path"),", ",(0,o.kt)("strong",{parentName:"p"},"Cert File Path"),", and ",(0,o.kt)("strong",{parentName:"p"},"Key File Path"),". Fill in these fields with the paths to each of ",(0,o.kt)("inlineCode",{parentName:"p"},"ca"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cert"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),". The path will be of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"."),(0,o.kt)("p",null,"For example, if you created a secret with these key-value pairs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,o.kt)("p",null,"Then ",(0,o.kt)("strong",{parentName:"p"},"Cert File Path")," would be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),"."))}m.isMDXComponent=!0}}]);