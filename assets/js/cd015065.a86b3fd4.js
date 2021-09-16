"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[66640],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99363:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"Example YAML",position:60},l=void 0,c={unversionedId:"admin-settings/rke-templates/example-yaml",id:"admin-settings/rke-templates/example-yaml",isDocsHomePage:!1,title:"Example YAML",description:"Below is an example RKE template configuration file for reference.",source:"@site/docs/admin-settings/rke-templates/example-yaml.md",sourceDirName:"admin-settings/rke-templates",slug:"/admin-settings/rke-templates/example-yaml",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/example-yaml",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/admin-settings/rke-templates/example-yaml.md",tags:[],version:"current",frontMatter:{title:"Example YAML",position:60},sidebar:"tutorialSidebar",previous:{title:"Example Scenarios",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/example-scenarios"},next:{title:"RKE Templates",permalink:"/rancher-docusaurus/next/admin-settings/rke-templates/index"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below is an example RKE template configuration file for reference."),(0,a.kt)("p",null,"The YAML in the RKE template uses the same customization that is used when you create an RKE cluster. However, since the YAML is within the context of a Rancher provisioned RKE cluster, the customization from the RKE docs needs to be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine")," directive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \n# Cluster Config\n# \ndocker_root_dir: /var/lib/docker\n\nenable_cluster_alerting: false\n# This setting is not enforced. Clusters\n# created with this sample template\n# would have alerting turned off by default,\n# but end users could still turn alerting\n# on or off.\n\nenable_cluster_monitoring: true \n# This setting is not enforced. Clusters\n# created with this sample template\n# would have monitoring turned on\n# by default, but end users could still\n# turn monitoring on or off.\n\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n# \n# Rancher Config\n# \nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n# \n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n# \n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n# \n#   If you are using calico on AWS\n# \n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n# \n# # To specify flannel interface\n# \n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n# \n# # To specify flannel interface for canal plugin\n# \n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n# \n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n# \n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n# \n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n")))}d.isMDXComponent=!0}}]);