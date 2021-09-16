"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[85513],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={title:"2. Install Kubernetes",position:200},i=void 0,u={unversionedId:"installation/other-installation-methods/behind-proxy/launch-kubernetes",id:"installation/other-installation-methods/behind-proxy/launch-kubernetes",isDocsHomePage:!1,title:"2. Install Kubernetes",description:"Once the infrastructure is ready, you can continue with setting up an RKE cluster to install Rancher in.",source:"@site/docs/installation/other-installation-methods/behind-proxy/launch-kubernetes.md",sourceDirName:"installation/other-installation-methods/behind-proxy",slug:"/installation/other-installation-methods/behind-proxy/launch-kubernetes",permalink:"/rancher-docusaurus/next/installation/other-installation-methods/behind-proxy/launch-kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/installation/other-installation-methods/behind-proxy/launch-kubernetes.md",tags:[],version:"current",frontMatter:{title:"2. Install Kubernetes",position:200},sidebar:"tutorialSidebar",previous:{title:"3. Install Rancher",permalink:"/rancher-docusaurus/next/installation/other-installation-methods/behind-proxy/install-rancher"},next:{title:"1. Set up Infrastructure",permalink:"/rancher-docusaurus/next/installation/other-installation-methods/behind-proxy/prepare-nodes"}},c=[{value:"Installing Docker",id:"installing-docker",children:[]},{value:"Creating the RKE Cluster",id:"creating-the-rke-cluster",children:[]},{value:"Save Your Files",id:"save-your-files",children:[]},{value:"Issues or errors?",id:"issues-or-errors",children:[]},{value:"Next: Install Rancher",id:"next-install-rancher",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once the infrastructure is ready, you can continue with setting up an RKE cluster to install Rancher in."),(0,a.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,a.kt)("p",null,"First, you have to install Docker and setup the HTTP proxy on all three Linux nodes. For this perform the following steps on all three nodes."),(0,a.kt)("p",null,"For convenience export the IP address and port of your proxy into an environment variable and set up the HTTP_PROXY variables for your current shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export proxy_host="10.0.0.5:8888"\nexport HTTP_PROXY=http://${proxy_host}\nexport HTTPS_PROXY=http://${proxy_host}\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16\n')),(0,a.kt)("p",null,"Next configure apt to use this proxy when installing packages. If you are not using Ubuntu, you have to adapt this step accordingly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat \\<\\<\'EOF\' | sudo tee /etc/apt/apt.conf.d/proxy.conf \\> /dev/null\nAcquire::http::Proxy "http://${proxy_host}/";\nAcquire::https::Proxy "http://${proxy_host}/";\nEOF\n')),(0,a.kt)("p",null,"Now you can install Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,a.kt)("p",null,"Then ensure that your current user is able to access the Docker daemon without sudo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo usermod -aG docker YOUR_USERNAME\n")),(0,a.kt)("p",null,"And configure the Docker daemon to use the proxy to pull images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sudo mkdir -p /etc/systemd/system/docker.service.d\ncat \\<\\<\'EOF\' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf \\> /dev/null\n[Service]\nEnvironment="HTTP_PROXY=http://${proxy_host}"\nEnvironment="HTTPS_PROXY=http://${proxy_host}"\nEnvironment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"\nEOF\n')),(0,a.kt)("p",null,"To apply the configuration, restart the Docker daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl restart docker\n")),(0,a.kt)("h3",{id:"creating-the-rke-cluster"},"Creating the RKE Cluster"),(0,a.kt)("p",null,"You need several command line tools on the host where you have SSH access to the Linux nodes to create and interact with the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary"},"RKE CLI binary"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64\nsudo chmod +x /usr/local/bin/rke\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3\nchmod +x get_helm.sh\nsudo ./get_helm.sh\n")),(0,a.kt)("p",null,"Next, create a YAML file that describes the RKE cluster. Ensure that the IP addresses of the nodes and the SSH username are correct. For more information on the cluster YAML, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nodes:\n  - address: 10.0.1.200\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.201\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.202\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n")),(0,a.kt)("p",null,"After that, you can create the Kubernetes cluster by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yaml\n")),(0,a.kt)("p",null,"RKE creates a state file called ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate"),", this is needed if you want to perform updates, modify your cluster configuration or restore it from a backup. It also creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yaml")," file, that you can use to connect to the remote Kubernetes cluster locally with tools like kubectl or Helm. Make sure to save all of these files in a secure location, for example by putting them into a version control system."),(0,a.kt)("p",null,"To have a look at your cluster run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KUBECONFIG=kube_config_rancher-cluster.yaml\nkubectl cluster-info\nkubectl get pods --all-namespaces\n")),(0,a.kt)("p",null,"You can also verify that your external load balancer works, and the DNS entry is set up correctly. If you send a request to either, you should receive HTTP 404 response from the ingress controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl 10.0.1.100\ndefault backend - 404\n$ curl rancher.example.com\ndefault backend - 404\n")),(0,a.kt)("h3",{id:"save-your-files"},"Save Your Files"),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Important"),"\n",">"," The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster."),(0,a.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains the current state of the cluster including the RKE configuration and the certificates.")),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.'),(0,a.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/resources/troubleshooting/"},"Troubleshooting")," page."),(0,a.kt)("h3",{id:"next-install-rancher"},(0,a.kt)("a",{parentName:"h3",href:"../install-rancher"},"Next: Install Rancher")))}h.isMDXComponent=!0}}]);