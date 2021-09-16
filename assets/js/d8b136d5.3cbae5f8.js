"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[81193],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35654:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Restoring a Cluster from Backup",position:2050},c=void 0,l={unversionedId:"cluster-admin/restoring-etcd",id:"version-2.4.15/cluster-admin/restoring-etcd",isDocsHomePage:!1,title:"Restoring a Cluster from Backup",description:"etcd backup and recovery for Rancher launched Kubernetes clusters can be easily performed. Snapshots of the etcd database are taken and saved either locally onto the etcd nodes or to a S3 compatible target. The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster.",source:"@site/versioned_docs/version-2.4.15/cluster-admin/restoring-etcd.md",sourceDirName:"cluster-admin",slug:"/cluster-admin/restoring-etcd",permalink:"/rancher-docusaurus/cluster-admin/restoring-etcd",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-admin/restoring-etcd.md",tags:[],version:"2.4.15",frontMatter:{title:"Restoring a Cluster from Backup",position:2050},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/rancher-docusaurus/cluster-admin/projects-and-namespaces"},next:{title:"Tools for Logging, Monitoring, and Visibility",permalink:"/rancher-docusaurus/cluster-admin/tools"}},u=[{value:"Viewing Available Snapshots",id:"viewing-available-snapshots",children:[]},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",children:[]},{value:"Recovering etcd without a Snapshot",id:"recovering-etcd-without-a-snapshot",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"etcd backup and recovery for ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/"},"Rancher launched Kubernetes clusters")," can be easily performed. Snapshots of the etcd database are taken and saved either locally onto the etcd nodes or to a S3 compatible target. The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster."),(0,o.kt)("p",null,"Rancher recommends enabling the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/backing-up-etcd/#configuring-recurring-snapshots"},"ability to set up recurring snapshots of etcd"),", but ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/backing-up-etcd/#one-time-snapshots"},"one-time snapshots")," can easily be taken as well. Rancher allows restore from ",(0,o.kt)("a",{parentName:"p",href:"#restoring-a-cluster-from-a-snapshot"},"saved snapshots")," or if you don't have any snapshots, you can still ",(0,o.kt)("a",{parentName:"p",href:"#recovering-etcd-without-a-snapshot"},"restore etcd"),"."),(0,o.kt)("p",null,"Clusters can also be restored to a prior Kubernetes version and cluster configuration."),(0,o.kt)("h2",{id:"viewing-available-snapshots"},"Viewing Available Snapshots"),(0,o.kt)("p",null,"The list of all available snapshots for the cluster is available."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to view the snapshots and click the name of the cluster."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Snapshots")," tab. The listed snapshots include a timestamp of when they were created.")),(0,o.kt)("h2",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,o.kt)("p",null,"If your Kubernetes cluster is broken, you can restore the cluster from a snapshot."),(0,o.kt)("p",null,"Snapshots are composed of the cluster data in etcd, the Kubernetes version, and the cluster configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml.")," These components allow you to select from the following options when restoring a cluster from a snapshot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore just the etcd contents:")," This restore is similar to restoring to snapshots in Rancher before v2.4.0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version:")," This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore etcd, Kubernetes versions and cluster configuration:")," This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.")),(0,o.kt)("p",null,"When rolling back to a prior Kubernetes version, the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/upgrading-kubernetes/#configuring-the-upgrade-strategy"},"upgrade strategy options")," are ignored. Worker nodes are not cordoned or drained before being reverted to the older Kubernetes version, so that an unhealthy cluster can be more quickly restored to a healthy state."),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," To restore snapshots from S3, the cluster needs to be configured to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/backing-up-etcd/#configuring-recurring-snapshots"},"take recurring snapshots on S3.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 ",">"," Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to view the snapshots and click the name of the cluster."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Snapshots")," tab to view the list of saved snapshots. "),(0,o.kt)("li",{parentName:"ol"},"Go to the snapshot you want to restore and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee ",">"," Restore Snapshot"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Restore"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The cluster will go into ",(0,o.kt)("inlineCode",{parentName:"p"},"updating")," state and the process of restoring the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," nodes from the snapshot will start. The cluster is restored when it returns to an ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state."),(0,o.kt)("h2",{id:"recovering-etcd-without-a-snapshot"},"Recovering etcd without a Snapshot"),(0,o.kt)("p",null,"If the group of etcd nodes loses quorum, the Kubernetes cluster will report a failure because no operations, e.g. deploying workloads, can be executed in the Kubernetes cluster. The cluster should have three etcd nodes to prevent a loss of quorum. If you want to recover your set of etcd nodes, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Keep only one etcd node in the cluster by removing all other etcd nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the single remaining etcd node, run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd\n")),(0,o.kt)("p",{parentName:"li"},"This command outputs the running command for etcd, save this command to use later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the etcd container that you launched in the previous step and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd-old"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker stop etcd\n$ docker rename etcd etcd-old\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take the saved command from Step 2 and revise it:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you originally had more than 1 etcd node, then you need to change ",(0,o.kt)("inlineCode",{parentName:"li"},"--initial-cluster")," to only contain the node that remains."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--force-new-cluster")," to the end of the command."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the revised command.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the single nodes is up and running, Rancher recommends adding additional etcd nodes to your cluster. If you have a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/custom-nodes"},"custom cluster")," and you want to reuse an old node, you are required to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cleaning-cluster-nodes/"},"clean up the nodes")," before attempting to add them back into a cluster.  "))),(0,o.kt)("h1",{id:"enabling-snapshot-features-for-clusters-created-before-rancher-v220"},"Enabling Snapshot Features for Clusters Created Before Rancher v2.2.0"),(0,o.kt)("p",null,"If you have any Rancher launched Kubernetes clusters that were created before v2.2.0, after upgrading Rancher, you must ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/editing-clusters/"},"edit the cluster")," and ",(0,o.kt)("em",{parentName:"p"},"save")," it, in order to enable the updated snapshot features. Even if you were already creating snapshots before v2.2.0, you must do this step as the older snapshots will not be available to use to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/restoring-etcd/"},"back up and restore etcd through the UI"),"."))}d.isMDXComponent=!0}}]);