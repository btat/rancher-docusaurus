"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[68742],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return d}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(i),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},64786:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={title:"Intro",position:1},l=void 0,c={unversionedId:"istio/index",id:"version-2.4.15/istio/index",isDocsHomePage:!1,title:"Intro",description:"Istio is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices.",source:"@site/versioned_docs/version-2.4.15/istio/index.md",sourceDirName:"istio",slug:"/istio/index",permalink:"/rancher-docusaurus/istio/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/istio/index.md",tags:[],version:"2.4.15",frontMatter:{title:"Intro",position:1},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Disabling Istio",permalink:"/rancher-docusaurus/istio/disabling-istio"},next:{title:"Role-based Access Control",permalink:"/rancher-docusaurus/istio/rbac"}},u=[{value:"Kiali",id:"kiali",children:[]},{value:"Jaeger",id:"jaeger",children:[]},{value:"Multiple Ingresses",id:"multiple-ingresses",children:[]},{value:"Egress Support",id:"egress-support",children:[]}],p={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices."),(0,r.kt)("p",null,"As a network of microservices changes and grows, the interactions between them can become increasingly difficult to manage and understand. In such a situation, it is useful to have a service mesh as a separate infrastructure layer. Istio's service mesh lets you manipulate traffic between microservices without changing the microservices directly."),(0,r.kt)("p",null,"Our integration of Istio is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to a team of developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing."),(0,r.kt)("p",null,"This core service mesh provides features that include but are not limited to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Traffic Management")," such as ingress and egress routing, circuit breaking, mirroring."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security")," with resources to authenticate and authorize traffic and users, mTLS included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Observability")," of logs, metrics, and distributed traffic flows.")),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/setup"},"setting up istio")," you can leverage Istio's control plane functionality through the Rancher UI, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"istioctl"),"."),(0,r.kt)("p",null,"Istio needs to be set up by a ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," before it can be used in a project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-s-new-in-rancher-v2-5"},"What's New in Rancher v2.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tools-bundled-with-istio"},"Tools Bundled with Istio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-guide"},"Setup Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#remove-istio"},"Remove Istio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#migrate-from-previous-istio-version"},"Migrate from Previous Istio Version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accessing-visualizations"},"Accessing Visualizations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-steps-for-installing-istio-on-an-rke2-cluster"},"Additional steps for installing Istio on an RKE2 cluster"))),(0,r.kt)("h1",{id:"whats-new-in-rancher-v25"},"What's New in Rancher v2.5"),(0,r.kt)("p",null,"The overall architecture of Istio has been simplified. A single component, Istiod, has been created by combining Pilot, Citadel, Galley and the sidecar injector. Node Agent functionality has also been merged into istio-agent."),(0,r.kt)("p",null,"Addons that were previously installed by Istio (cert-manager, Grafana, Jaeger, Kiali, Prometheus, Zipkin) will now need to be installed separately. Istio will support installation of integrations that are from the Istio Project and will maintain compatibility with those that are not."),(0,r.kt)("p",null,"A Prometheus integration will still be available through an installation of ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/"},"Rancher Monitoring"),", or by installing your own Prometheus operator. Rancher's Istio chart will also install Kiali by default to ensure you can get a full picture of your microservices out of the box."),(0,r.kt)("p",null,"Istio has migrated away from Helm as a way to install Istio and now provides installation through the istioctl binary or Istio Operator. To ensure the easiest interaction with Istio, Rancher's Istio will maintain a Helm chart that utilizes the istioctl binary to manage your Istio installation."),(0,r.kt)("p",null,"This Helm chart will be available via the Apps and Marketplace in the UI. A user that has access to the Rancher Chart's catalog will need to set up Istio before it can be used in the project."),(0,r.kt)("h1",{id:"tools-bundled-with-istio"},"Tools Bundled with Istio"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," installer wraps the istioctl binary commands in a handy Helm chart, including an overlay file option to allow complex customization. "),(0,r.kt)("p",null,"It also includes the following:"),(0,r.kt)("h3",{id:"kiali"},"Kiali"),(0,r.kt)("p",null,"Kiali is a comprehensive visualization aid used for graphing traffic flow throughout the service mesh. It allows you to see how they are connected, including the traffic rates and latencies between them. "),(0,r.kt)("p",null,"You can check the health of the service mesh, or drill down to see the incoming and outgoing requests to a single component."),(0,r.kt)("h3",{id:"jaeger"},"Jaeger"),(0,r.kt)("p",null,"Our Istio installer includes a quick-start, all-in-one installation of ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger,")," a tool used for tracing distributed systems."),(0,r.kt)("p",null,"Note that this is not a production-qualified deployment of Jaeger. This deployment uses an in-memory storage component, while a persistent storage component is recommended for production. For more information on which deployment strategy you may need, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/operator/#production-strategy"},"Jaeger documentation.")),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/resources"},"CPU and memory")," to run all of the components of Istio."),(0,r.kt)("p",null,"If you are installing Istio on RKE2 cluster, some additional steps are required. For details, see ",(0,r.kt)("a",{parentName:"p",href:"#additional-steps-for-installing-istio-on-an-rke2-cluster"},"this section.")),(0,r.kt)("p",null,"Note that Istio v2 (upstream Istio v1.7+) cannot be upgraded in an air gapped environment."),(0,r.kt)("h1",{id:"setup-guide"},"Setup Guide"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/setup"},"setup guide")," for instructions on how to set up Istio and use it in a project."),(0,r.kt)("h1",{id:"remove-istio"},"Remove Istio"),(0,r.kt)("p",null,"To remove Istio components from a cluster, namespace, or workload, refer to the section on ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/disabling-istio/"},"uninstalling Istio.")),(0,r.kt)("h1",{id:"migrate-from-previous-istio-version"},"Migrate From Previous Istio Version"),(0,r.kt)("p",null,"There is no upgrade path for Istio versions less than 1.7.x. To successfully install Istio through ",(0,r.kt)("strong",{parentName:"p"},"Apps & Marketplace,")," you will need to disable your existing Istio from the global view in the legacy Rancher UI."),(0,r.kt)("p",null,"If you have a significant amount of additional Istio CRDs you might consider manually migrating CRDs that are supported in both versions of Istio. You can do this by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get \\<resource\\> -n istio-system -o yaml"),", save the output yaml and re-apply in the new version. "),(0,r.kt)("p",null,"Another option is to manually uninstall istio resources one at a time, but leave the resources that are supported in both versions of Istio and that will not be installed by the newest version. This method is more likely to result in issues installing the new version, but could be a good option depending on your situation."),(0,r.kt)("h1",{id:"accessing-visualizations"},"Accessing Visualizations"),(0,r.kt)("p",null,">"," By default, only cluster-admins have access to Kiali. For instructions on how to allow admin, edit or views roles to access them, see ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/rbac/"},"this section.")),(0,r.kt)("p",null,"After Istio is set up in a cluster, Grafana, Prometheus, and Kiali are available in the Rancher UI. "),(0,r.kt)("p",null,"To access the Grafana and Prometheus visualizations,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Grafana")," or any of the other dashboards.")),(0,r.kt)("p",null,"To access the Kiali visualization,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see Kiali and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Istio"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Kiali"),". From here you can access the ",(0,r.kt)("strong",{parentName:"li"},"Traffic Graph")," tab or the ",(0,r.kt)("strong",{parentName:"li"},"Traffic Metrics")," tab to see network visualizations and metrics. ")),(0,r.kt)("p",null,"By default, all namespace will picked up by prometheus and make data available for Kiali graphs. Refer to ",(0,r.kt)("a",{parentName:"p",href:"./configuration-reference/selectors-and-scrape"},"selector/scrape config setup")," if you would like to use a different configuration for prometheus data scraping. "),(0,r.kt)("p",null,"Your access to the visualizations depend on your role. Grafana and Prometheus are only available for ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," roles. The Kiali UI is available only to ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," by default, but ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," can allow other roles to access them by editing the Istio values.yaml."),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Istio installs a service mesh that uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/learn/service-mesh"},"Envoy")," sidecar proxies to intercept traffic to each workload. These sidecars intercept and manage service-to-service communication, allowing fine-grained observation and control over traffic within the cluster."),(0,r.kt)("p",null,"Only workloads that have the Istio sidecar injected can be tracked and controlled by Istio."),(0,r.kt)("p",null,"When a namespace has Istio enabled, new workloads deployed in the namespace will automatically have the Istio sidecar. You need to manually enable Istio in preexisting workloads."),(0,r.kt)("p",null,"For more information on the Istio sidecar, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"Istio sidecare-injection docs")," and for more information on Istio's architecture, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/ops/deployment/architecture/"},"Istio Architecture docs")),(0,r.kt)("h3",{id:"multiple-ingresses"},"Multiple Ingresses"),(0,r.kt)("p",null,"By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. Istio also installs an ingress gateway by default into the ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace.  The result is that your cluster will have two ingresses in your cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-img"},"![In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.](./assets/img/rancher/istio-ingress.svg)\n")),(0,r.kt)("p",null," Additional Istio Ingress gateways can be enabled via the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/configuration-reference/#overlay-file"},"overlay file"),"."),(0,r.kt)("h3",{id:"egress-support"},"Egress Support"),(0,r.kt)("p",null,"By default the Egress gateway is disabled, but can be enabled on install or upgrade through the values.yaml or via the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/configuration-reference/#overlay-file"},"overlay file"),"."),(0,r.kt)("h1",{id:"additional-steps-for-installing-istio-on-an-rke2-cluster"},"Additional Steps for Installing Istio on an RKE2 Cluster"),(0,r.kt)("p",null,"To install Istio on an RKE2 cluster, follow the steps in ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/configuration-reference/rke2/"},"this section.")))}h.isMDXComponent=!0}}]);