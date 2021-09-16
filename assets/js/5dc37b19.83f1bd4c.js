"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[1053],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18611:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere"},c=void 0,l={unversionedId:"best-practices/rancher-managed/managed-vsphere",id:"best-practices/rancher-managed/managed-vsphere",isDocsHomePage:!1,title:"Best Practices for Rancher Managed vSphere Clusters",description:"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware.",source:"@site/docs/best-practices/rancher-managed/managed-vsphere.md",sourceDirName:"best-practices/rancher-managed",slug:"/best-practices/rancher-managed/managed-vsphere",permalink:"/rancher-docusaurus/next/best-practices/rancher-managed/managed-vsphere",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/best-practices/rancher-managed/managed-vsphere.md",tags:[],version:"current",frontMatter:{title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere"},sidebar:"tutorialSidebar",previous:{title:"Logging Best Practices",permalink:"/rancher-docusaurus/next/best-practices/rancher-managed/logging"},next:{title:"Monitoring Best Practices",permalink:"/rancher-docusaurus/next/best-practices/rancher-managed/monitoring"}},d=[{value:"Leverage VM Templates to Construct the Environment",id:"leverage-vm-templates-to-construct-the-environment",children:[]},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts",children:[]},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores",children:[]},{value:"Configure VM&#39;s as Appropriate for Kubernetes",id:"configure-vms-as-appropriate-for-kubernetes",children:[]},{value:"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes",id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes",children:[]},{value:"Consistent IP Addressing for VM&#39;s",id:"consistent-ip-addressing-for-vms",children:[]},{value:"Leverage SSD Drives for ETCD Nodes",id:"leverage-ssd-drives-for-etcd-nodes",children:[]},{value:"Perform Regular Downstream Cluster Backups",id:"perform-regular-downstream-cluster-backups",children:[]},{value:"Back up Downstream Node VMs",id:"back-up-downstream-node-vms",children:[]}],u={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#1-vm-considerations"},"1. VM Considerations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#2-network-considerations"},"2. Network Considerations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#3-storage-considerations"},"3. Storage Considerations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-img"},"\\<figcaption\\>Solution Overview\\</figcaption\\>\n\n![Solution Overview](./assets/img/rancher/solution_overview.drawio.svg)\n")),(0,s.kt)("h1",{id:"1-vm-considerations"},"1. VM Considerations"),(0,s.kt)("h3",{id:"leverage-vm-templates-to-construct-the-environment"},"Leverage VM Templates to Construct the Environment"),(0,s.kt)("p",null,'To facilitate consistency across the deployed Virtual Machines across the environment, consider the use of "Golden Images" in the form of VM templates. Packer can be used to accomplish this, adding greater customisation options.'),(0,s.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts"),(0,s.kt)("p",null,"Doing so will ensure node VM's are spread across multiple ESXi hosts - preventing a single point of failure at the host level."),(0,s.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores"),(0,s.kt)("p",null,"Doing so will ensure node VM's are spread across multiple datastores - preventing a single point of failure at the datastore level."),(0,s.kt)("h3",{id:"configure-vms-as-appropriate-for-kubernetes"},"Configure VM's as Appropriate for Kubernetes"),(0,s.kt)("p",null,"It\u2019s important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double-checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node."),(0,s.kt)("h1",{id:"2-network-considerations"},"2. Network Considerations"),(0,s.kt)("h3",{id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes"},"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes"),(0,s.kt)("p",null,"Deploy etcd members within a single data center where possible to avoid latency overheads and reduce the likelihood of network partitioning. For most setups, 1Gb connections will suffice. For large clusters, 10Gb connections can reduce the time taken to restore from backup."),(0,s.kt)("h3",{id:"consistent-ip-addressing-for-vms"},"Consistent IP Addressing for VM's"),(0,s.kt)("p",null,"Each node used should have a static IP configured. In the case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,s.kt)("h1",{id:"3-storage-considerations"},"3. Storage Considerations"),(0,s.kt)("h3",{id:"leverage-ssd-drives-for-etcd-nodes"},"Leverage SSD Drives for ETCD Nodes"),(0,s.kt)("p",null,"ETCD is very sensitive to write latency. Therefore, leverage SSD disks where possible. "),(0,s.kt)("h1",{id:"4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"),(0,s.kt)("h3",{id:"perform-regular-downstream-cluster-backups"},"Perform Regular Downstream Cluster Backups"),(0,s.kt)("p",null,"Kubernetes uses etcd to store all its data - from configuration, state and metadata. Backing this up is crucial in the event of disaster recovery."),(0,s.kt)("h3",{id:"back-up-downstream-node-vms"},"Back up Downstream Node VMs"),(0,s.kt)("p",null,"Incorporate the Rancher downstream node VM's within a standard VM backup policy."))}p.isMDXComponent=!0}}]);