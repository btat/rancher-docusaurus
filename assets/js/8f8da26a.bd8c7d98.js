"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[51294],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Selectors and Scrape Configs",position:2},c=void 0,l={unversionedId:"istio/configuration-reference/selectors-and-scrape",id:"version-2.4.15/istio/configuration-reference/selectors-and-scrape",isDocsHomePage:!1,title:"Selectors and Scrape Configs",description:"The Monitoring app sets prometheus.prometheusSpec.ignoreNamespaceSelectors=false, which enables monitoring across all namespaces by default.",source:"@site/versioned_docs/version-2.4.15/istio/configuration-reference/selectors-and-scrape.md",sourceDirName:"istio/configuration-reference",slug:"/istio/configuration-reference/selectors-and-scrape",permalink:"/rancher-docusaurus/istio/configuration-reference/selectors-and-scrape",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/istio/configuration-reference/selectors-and-scrape.md",tags:[],version:"2.4.15",frontMatter:{title:"Selectors and Scrape Configs",position:2},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",permalink:"/rancher-docusaurus/istio/configuration-reference/rke2"},next:{title:"Disabling Istio",permalink:"/rancher-docusaurus/istio/disabling-istio"}},p=[{value:"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True",id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true",children:[]},{value:"Enabling Prometheus to Detect Resources in Other Namespaces",id:"enabling-prometheus-to-detect-resources-in-other-namespaces",children:[]},{value:"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor",id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor",children:[]},{value:"Monitoring across namespaces: Set ignoreNamespaceSelectors to False",id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Monitoring app sets ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false"),", which enables monitoring across all namespaces by default."),(0,a.kt)("p",null,"This ensures you can view traffic, metrics and graphs for resources deployed in a namespace with ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label. "),(0,a.kt)("p",null,"If you would like to limit Prometheus to specific namespaces, set ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),". Once you do this, you will need to add additional configuration to continue to monitor your resources."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true"},"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enabling-prometheus-to-detect-resources-in-other-namespaces"},"Enabling Prometheus to Detect Resources in Other Namespaces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor"},"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#monitoring-across-namespaces-set-ignorenamespaceselectors-to-false"},"Monitoring Across Namespaces: Set ignoreNamespaceSelectors to False"))),(0,a.kt)("h3",{id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true"},"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True"),(0,a.kt)("p",null,"To limit monitoring to specific namespaces, you will edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreNamespaceSelectors")," Helm chart option. You will configure this option when installing or upgrading the Monitoring Helm chart:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When installing or upgrading the Monitoring Helm chart, edit the values.yml and set",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"."),(0,a.kt)("li",{parentName:"ol"},"Complete the install or upgrade.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Prometheus will be limited to specific namespaces  which means one of the following configurations will need to be set up to continue to view data in various dashboards"),(0,a.kt)("h3",{id:"enabling-prometheus-to-detect-resources-in-other-namespaces"},"Enabling Prometheus to Detect Resources in Other Namespaces"),(0,a.kt)("p",null,"There are two different ways to enable Prometheus to detect resources in other namespaces when ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitoring specific namespaces:")," Add a Service Monitor or Pod Monitor in the namespace with the targets you want to scrape."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitoring across namespaces:")," Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"additionalScrapeConfig")," to your rancher-monitoring instance to scrape all targets in all namespaces.")),(0,a.kt)("h3",{id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor"},"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor"),(0,a.kt)("p",null,"This option allows you to define which specific services or pods you would like monitored in a specific namespace. "),(0,a.kt)("p",null,"The usability tradeoff is that you have to create the service monitor or pod monitor per namespace since you cannot monitor across namespaces."),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," Define a ServiceMonitor or PodMonitor for ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<your namespace\\>"),". An example ServiceMonitor is provided below. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the top navigation bar, open the kubectl shell."),(0,a.kt)("li",{parentName:"ol"},"If the ServiceMonitor or PodMonitor file is stored locally in your cluster, in ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl create -f \\<name of service/pod monitor file\\>.yaml"),"."),(0,a.kt)("li",{parentName:"ol"},"If the ServiceMonitor or PodMonitor is not stored locally, run ",(0,a.kt)("inlineCode",{parentName:"li"},"cat\\<\\< EOF | kubectl apply -f -"),", paste the file contents into the terminal, then run ",(0,a.kt)("inlineCode",{parentName:"li"},"EOF")," to complete the command. "),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl label namespace \\<your namespace\\> istio-injection=enabled")," to enable the envoy sidecar injection.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<your namespace\\>")," can be scraped by prometheus. "),(0,a.kt)("p",null,"\\<figcaption",">","Example Service Monitor for Istio Proxies\\</figcaption",">"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: envoy-stats-monitor\n  namespace: istio-system\n  labels:\n    monitoring: istio-proxies\nspec:\n  selector:\n    matchExpressions:\n    - {key: istio-prometheus-ignore, operator: DoesNotExist}\n  namespaceSelector:\n    any: true\n  jobLabel: envoy-stats\n  endpoints:\n  - path: /stats/prometheus\n    targetPort: 15090\n    interval: 15s\n    relabelings:\n    - sourceLabels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - action: labeldrop\n      regex: \"__meta_kubernetes_pod_label_(.+)\"\n    - sourceLabels: [__meta_kubernetes_namespace]\n      action: replace\n      targetLabel: namespace\n    - sourceLabels: [__meta_kubernetes_pod_name]\n      action: replace\n      targetLabel: pod_name\n")),(0,a.kt)("h3",{id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false"},"Monitoring across namespaces: Set ignoreNamespaceSelectors to False"),(0,a.kt)("p",null,"This enables monitoring across namespaces by giving Prometheus additional scrape configurations. "),(0,a.kt)("p",null,"The usability tradeoff is that  all of Prometheus' ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigs")," are maintained in a single Secret. This could make upgrading difficult if monitoring is already deployed with additionalScrapeConfigs before installing Istio. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When installing or upgrading the Monitoring Helm chart, edit the values.yml and set the ",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.additionalScrapeConfigs")," array to the ",(0,a.kt)("strong",{parentName:"li"},"Additional Scrape Config")," provided below. "),(0,a.kt)("li",{parentName:"ol"},"Complete the install or upgrade.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," All namespaces with the ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label will be scraped by prometheus."),(0,a.kt)("p",null,"\\<figcaption",">","Additional Scrape Config\\</figcaption",">"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'istio/envoy-stats'\n  scrape_interval: 15s\n  metrics_path: /stats/prometheus\n  kubernetes_sd_configs:\n    - role: pod\n  relabel_configs:\n    - source_labels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]\n      action: replace\n      regex: ([^:]+)(?::\\d+)?;(\\d+)\n      replacement: $1:15090\n      target_label: __address__\n    - action: labelmap\n      regex: __meta_kubernetes_pod_label_(.+)\n    - source_labels: [__meta_kubernetes_namespace]\n      action: replace\n      target_label: namespace\n    - source_labels: [__meta_kubernetes_pod_name]\n      action: replace\n      target_label: pod_name\n")))}u.isMDXComponent=!0}}]);