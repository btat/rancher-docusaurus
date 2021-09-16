"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[76036],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8419:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"Using an External Ceph Driver",position:10},l=void 0,c={unversionedId:"cluster-admin/volumes-and-storage/ceph",id:"version-2.4.15/cluster-admin/volumes-and-storage/ceph",isDocsHomePage:!1,title:"Using an External Ceph Driver",description:"These instructions are about using the external Ceph driver in an RKE2 cluster. If you are using RKE, additional steps are required. For details, refer to this section.",source:"@site/versioned_docs/version-2.4.15/cluster-admin/volumes-and-storage/ceph.md",sourceDirName:"cluster-admin/volumes-and-storage",slug:"/cluster-admin/volumes-and-storage/ceph",permalink:"/rancher-docusaurus/cluster-admin/volumes-and-storage/ceph",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-2.4.15/cluster-admin/volumes-and-storage/ceph.md",tags:[],version:"2.4.15",frontMatter:{title:"Using an External Ceph Driver",position:10},sidebar:"version-2.4.15/tutorialSidebar",previous:{title:"Setting up Existing Storage",permalink:"/rancher-docusaurus/cluster-admin/volumes-and-storage/attaching-existing-storage"},next:{title:"Creating Persistent Storage in Amazon's EBS",permalink:"/rancher-docusaurus/cluster-admin/volumes-and-storage/examples/ebs"}},p=[{value:"User Account",id:"user-account",children:[]},{value:"Admin Account",id:"admin-account",children:[]},{value:"Using RBD in Pods",id:"using-rbd-in-pods",children:[]},{value:"Using RBD in Persistent Volumes",id:"using-rbd-in-persistent-volumes",children:[]},{value:"Using RBD in Storage Classes",id:"using-rbd-in-storage-classes",children:[]},{value:"RKE2 Server/Master Provisioning",id:"rke2-servermaster-provisioning",children:[]},{value:"RKE2 Agent/Worker provisioning",id:"rke2-agentworker-provisioning",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These instructions are about using the external Ceph driver in an RKE2 cluster. If you are using RKE, additional steps are required. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"#using-the-ceph-driver-with-rke"},"this section.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-the-ceph-driver-with-rke"},"Using the Ceph Driver with RKE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-the-ceph-csi-driver-on-an-rke2-cluster"},"Installing the ceph-csi driver on an RKE2 cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-the-ceph-csi-driver-using-helm"},"Install the ceph-csi driver using Helm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-rbd-ceph-resources"},"Creating RBD Ceph Resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-rbd-ceph-access-secrets"},"Configure RBD Ceph Access Secrets"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#user-account"},"User Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#admin-account"},"Admin Account")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-rbd-testing-resources"},"Create RBD Testing Resources"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-rbd-in-pods"},"Using RBD in Pods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-rbd-in-persistent-volumes"},"Using RBD in Persistent Volumes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-rbd-in-storage-classes"},"Using RBD in Storage Classes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rke2-server-master-provisioning"},"RKE2 Server/Master Provisioning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rke2-agent-worker-provisioning"},"RKE2 Agent/Worker provisioning")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tested-versions"},"Tested Versions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"))),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Make sure ceph-common and xfsprogs packages are installed on SLE worker nodes."),(0,o.kt)("h1",{id:"using-the-ceph-driver-with-rke"},"Using the Ceph Driver with RKE"),(0,o.kt)("p",null,"The resources below are fully compatible with RKE based clusters, but there is a need to do an additional kubelet configuration for RKE."),(0,o.kt)("p",null,"On RKE clusters, the kubelet component is running in a Docker container and doesn't have access to the host's kernel modules as rbd and libceph by default."),(0,o.kt)("p",null,"To solve this limitation, you can either run ",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe rbd")," on worker nodes, or configure the kubelet containers to automatically mount the ",(0,o.kt)("inlineCode",{parentName:"p"},"/lib/modules")," directory from the host into the container."),(0,o.kt)("p",null,"For the kubelet configuration, put the following lines into the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file prior to RKE cluster provisioning. You can also modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," later in the Rancher UI by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Edit Cluster ",">"," Edit as YAML")," and restarting the worker nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kubelet:\n    extra_binds:\n      - '/lib/modules:/lib/modules:ro'\n")),(0,o.kt)("p",null,"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"extra_binds")," directive, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/#extra-binds"},"this section.")),(0,o.kt)("h1",{id:"installing-the-ceph-csi-driver-on-an-rke2-cluster"},"Installing the ceph-csi driver on an RKE2 cluster"),(0,o.kt)("p",null,">"," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," These steps are needed for dynamic RBD provisioning only."),(0,o.kt)("p",null,"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd")," chart, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ceph/ceph-csi/blob/devel/charts/ceph-csi-rbd/README.md"},"this page.")),(0,o.kt)("p",null,"To get details about your SES cluster, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph mon dump\n")),(0,o.kt)("p",null,"Read its output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dumped monmap epoch 3\nepoch 3\nfsid 79179d9d-98d8-4976-ab2e-58635caa7235\nlast_changed 2021-02-11T10:56:42.110184+0000\ncreated 2021-02-11T10:56:22.913321+0000\nmin_mon_release 15 (octopus)\n0: [v2:10.85.8.118:3300/0,v1:10.85.8.118:6789/0] mon.a\n1: [v2:10.85.8.123:3300/0,v1:10.85.8.123:6789/0] mon.b\n2: [v2:10.85.8.124:3300/0,v1:10.85.8.124:6789/0] mon.c\n")),(0,o.kt)("p",null,"Later you'll need the fsid and mon addresses values."),(0,o.kt)("h1",{id:"install-the-ceph-csi-driver-using-helm"},"Install the ceph-csi Driver Using Helm"),(0,o.kt)("p",null,"Run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add ceph-csi https://ceph.github.io/csi-charts\nhelm repo update\nhelm search repo ceph-csi -l\nhelm inspect values ceph-csi/ceph-csi-rbd \\> ceph-csi-rbd-values.yaml\n")),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," file and keep there only the required changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ceph-csi-rbd-values.yaml\ncsiConfig:\n  - clusterID: "79179d9d-98d8-4976-ab2e-58635caa7235"\n    monitors:\n      - "10.85.8.118:6789"\n      - "10.85.8.123:6789"\n      - "10.85.8.124:6789"\nprovisioner:\n  name: provisioner\n  replicaCount: 2\n')),(0,o.kt)("p",null,"Make sure the ceph monitors are reachable from the RKE2 cluster, for example, by ping."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create namespace ceph-csi-rbd\nhelm install --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\nkubectl rollout status deployment ceph-csi-rbd-provisioner -n ceph-csi-rbd\nhelm status ceph-csi-rbd -n ceph-csi-rbd\n")),(0,o.kt)("p",null,"in case you'd like to modify the configuration directly via Helm, you may adapt the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," file and call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade \\\n  --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\n")),(0,o.kt)("h1",{id:"creating-rbd-ceph-resources"},"Creating RBD Ceph Resources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Create a ceph pool:\nceph osd pool create myPool 64 64\n\n# Create a block device pool:\nrbd pool init myPool\n\n# Create a block device image:\nrbd create -s 2G myPool/image\n\n# Create a block device user and record the key:\nceph auth get-or-create-key client.myPoolUser mon \"allow r\" osd \"allow class-read object_prefix rbd_children, allow rwx pool=myPool\" | tr -d '\\n' | base64\nQVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\n\n# Encode the ceph user myPoolUser into a bash64 hash:\necho \"myPoolUser\" | tr -d '\\n' | base64\nbXlQb29sVXNlcg==\n\n# Create a block device admin user and record the key:\nceph auth get-or-create-key client.myPoolAdmin mds 'allow *' mgr 'allow *' mon 'allow *' osd 'allow * pool=myPool' | tr -d '\\n' | base64\nQVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\n\n# Encode the ceph user myPoolAdmin into a bash64 hash:\necho \"myPoolAdmin\" | tr -d '\\n' | base64\nbXlQb29sQWRtaW4=\n")),(0,o.kt)("h1",{id:"configure-rbd-ceph-access-secrets"},"Configure RBD Ceph Access Secrets"),(0,o.kt)("h3",{id:"user-account"},"User Account"),(0,o.kt)("p",null,"For static RBD provisioning (the image within the ceph pool must exist), run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat \\> ceph-user-secret.yaml \\<\\< EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-user\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sVXNlcg==\n  userKey: QVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\nEOF\n\nkubectl apply -f ceph-user-secret.yaml\n")),(0,o.kt)("h3",{id:"admin-account"},"Admin Account"),(0,o.kt)("p",null,"For dynamic RBD provisioning (used for automatic image creation within a given ceph pool), run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat \\> ceph-admin-secret.yaml \\<\\< EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-admin\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sQWRtaW4=\n  userKey: QVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\nEOF\n\nkubectl apply -f ceph-admin-secret.yaml\n")),(0,o.kt)("h1",{id:"create-rbd-testing-resources"},"Create RBD Testing Resources"),(0,o.kt)("h3",{id:"using-rbd-in-pods"},"Using RBD in Pods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# pod\ncat \\> ceph-rbd-pod-inline.yaml \\<\\< EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-inline\nspec:\n  containers:\n  - name: ceph-rbd-pod-inline\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    rbd:\n      monitors:\n      - 10.85.8.118:6789\n      - 10.85.8.123:6789\n      - 10.85.8.124:6789\n      pool: myPool\n      image: image\n      user: myPoolUser\n      secretRef:\n        name: ceph-user\n      fsType: ext4\n      readOnly: false\nEOF\n \nkubectl apply -f ceph-rbd-pod-inline.yaml\nkubectl get pod\nkubectl exec pod/ceph-rbd-pod-inline -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"using-rbd-in-persistent-volumes"},"Using RBD in Persistent Volumes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# pod-pvc-pv\ncat \\> ceph-rbd-pod-pvc-pv-allinone.yaml \\<\\< EOF\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: ceph-rbd-pv\nspec:\n  capacity:\n    storage: 2Gi\n  accessModes:\n    - ReadWriteOnce\n  rbd:\n    monitors:\n    - 10.85.8.118:6789\n    - 10.85.8.123:6789\n    - 10.85.8.124:6789\n    pool: myPool \n    image: image\n    user: myPoolUser \n    secretRef:\n      name: ceph-user\n    fsType: ext4\n    readOnly: false\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-pvc\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-pv\nspec:\n  containers:\n  - name: ceph-rbd-pod-pvc-pv\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-pvc\nEOF\n \nkubectl apply -f ceph-rbd-pod-pvc-pv-allinone.yaml\nkubectl get pv,pvc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-pv -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"using-rbd-in-storage-classes"},"Using RBD in Storage Classes"),(0,o.kt)("p",null,"This example is for dynamic provisioning. The ceph-csi driver is needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# pod-pvc-sc\ncat \\> ceph-rbd-pod-pvc-sc-allinone.yaml \\<\\<EOF\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ceph-rbd-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: rbd.csi.ceph.com\nparameters:\n   clusterID: 79179d9d-98d8-4976-ab2e-58635caa7235\n   pool: myPool\n   imageFeatures: layering\n   csi.storage.k8s.io/provisioner-secret-name: ceph-admin\n   csi.storage.k8s.io/provisioner-secret-namespace: default\n   csi.storage.k8s.io/controller-expand-secret-name: ceph-admin\n   csi.storage.k8s.io/controller-expand-secret-namespace: default\n   csi.storage.k8s.io/node-stage-secret-name: ceph-admin\n   csi.storage.k8s.io/node-stage-secret-namespace: default\nreclaimPolicy: Delete\nallowVolumeExpansion: true\nmountOptions:\n   - discard\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-sc-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: ceph-rbd-sc\n---    \napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-sc\nspec:\n  containers:\n  - name:  ceph-rbd-pod-pvc-sc\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-sc-pvc\nEOF\n \nkubectl apply -f ceph-rbd-pod-pvc-sc-allinone.yaml\nkubectl get pv,pvc,sc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-sc -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"rke2-servermaster-provisioning"},"RKE2 Server/Master Provisioning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo su\ncurl -sfL https://get.rke2.io | sh -\nsystemctl enable --now rke2-server\n\ncat \\> /root/.bashrc \\<\\< EOF\nexport PATH=$PATH:/var/lib/rancher/rke2/bin/\nexport KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nEOF\n\ncat /var/lib/rancher/rke2/server/node-token\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\n")),(0,o.kt)("h3",{id:"rke2-agentworker-provisioning"},"RKE2 Agent/Worker provisioning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mkdir -p /etc/rancher/rke2/\n\ncat \\> /etc/rancher/rke2/config.yaml \\<\\< EOF\nserver: https://10.100.103.23:9345\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\nEOF\n\ncurl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sh -\nsystemctl enable --now rke2-agent.service\n')),(0,o.kt)("p",null,"To import the cluster into Rancher, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 ",">"," Cluster Management"),". Then on the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Import Existing"),". Then run the provided kubectl command on the server/master node."),(0,o.kt)("h1",{id:"tested-versions"},"Tested Versions"),(0,o.kt)("p",null,"OS for running RKE2 nodes: JeOS SLE15-SP2 with installed kernel-default-5.3.18-24.49"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl version\nClient Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.4", GitCommit:"c96aede7b5205121079932896c4ad89bb93260af", GitTreeState:"clean", BuildDate:"2020-06-22T12:00:00Z", GoVersion:"go1.13.11", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.7+rke2r1", GitCommit:"1dd5338295409edcfff11505e7bb246f0d325d15", GitTreeState:"clean", BuildDate:"2021-01-20T01:50:52Z", GoVersion:"go1.15.5b5", Compiler:"gc", Platform:"linux/amd64"}\n\nhelm version\nversion.BuildInfo{Version:"3.4.1", GitCommit:"c4e74854886b2efe3321e185578e6db9be0a6e29", GitTreeState:"clean", GoVersion:"go1.14.12"}\n')),(0,o.kt)("p",null,"Kubernetes version on RKE2 cluster: v1.19.7+rke2r1"),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"In case you are using SUSE's ceph-rook based on SES7, it might be useful to expose the monitors on hostNetwork by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"rook-1.4.5/ceph/cluster.yaml")," and setting ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.network.hostNetwork=true"),"."),(0,o.kt)("p",null,"Also for operating the ceph-rook cluster, it is useful to deploy a toolbox on the Kubernetes cluster where ceph-rook is provisioned by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f rook-1.4.5/ceph/toolbox.yaml")," Then all the ceph related commands can be executed in the toolbox pod, for example, by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec -it -n rook-ceph rook-ceph-tools-686d8b8bfb-2nvqp -- bash")),(0,o.kt)("p",null,"Operating with the ceph - basic commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph osd pool stats\nceph osd pool delete myPool myPool --yes-i-really-really-mean-it\nrbd list -p myPool\n\\> csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38\n\\> image\n")),(0,o.kt)("p",null,"Delete the image: ",(0,o.kt)("inlineCode",{parentName:"p"},"rbd rm csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38 -p myPool")),(0,o.kt)("p",null,"CephFS commands in rook toolbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph -s\nceph fs ls\nceph fs fail cephfs\nceph fs rm cephfs --yes-i-really-mean-it\nceph osd pool delete cephfs_data cephfs_data --yes-i-really-really-mean-it\nceph osd pool delete cephfs_metadata cephfs_metadata --yes-i-really-really-mean-it\n")),(0,o.kt)("p",null,"To prepare a cephfs filesystem, you can run this command on a rook cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f rook-1.4.5/ceph/filesystem.yaml\n")))}u.isMDXComponent=!0}}]);