"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[79943],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Testing HPAs with kubectl",position:3031},i=void 0,c={unversionedId:"k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa",id:"k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa",isDocsHomePage:!1,title:"Testing HPAs with kubectl",description:"This document describes how to check the status of your HPAs after scaling them up or down with your load testing tool. For information on how to check the status from the Rancher UI (at least version 2.3.x), refer to Managing HPAs with the Rancher UI.",source:"@site/docs/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa.md",sourceDirName:"k8s-in-rancher/horitzontal-pod-autoscaler",slug:"/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa",permalink:"/rancher-docusaurus/next/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa.md",tags:[],version:"current",frontMatter:{title:"Testing HPAs with kubectl",position:3031},sidebar:"tutorialSidebar",previous:{title:"Managing HPAs with the Rancher UI",permalink:"/rancher-docusaurus/next/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui"},next:{title:"Intro",permalink:"/rancher-docusaurus/next/k8s-in-rancher/index"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to check the status of your HPAs after scaling them up or down with your load testing tool. For information on how to check the status from the Rancher UI (at least version 2.3.x), refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-kubectl/"},"Managing HPAs with the Rancher UI"),"."),(0,r.kt)("p",null,"For HPA to work correctly, service deployments should have resources request definitions for containers. Follow this hello-world example to test if HPA is working correctly."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your Kubernetes cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world"),' deployment manifest below.\n{{% accordion id="hello-world" label="Hello World Manifest" %}}'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  labels:\n    app: hello-world\n  name: hello-world\n  namespace: default\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - image: rancher/hello-world\n        imagePullPolicy: Always\n        name: hello-world\n        resources:\n          requests:\n            cpu: 500m\n            memory: 64Mi\n        ports:\n        - containerPort: 80\n          protocol: TCP\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: hello-world\n")),(0,r.kt)("p",null,"{{% /accordion %}}"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy it to your cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl create -f \\<HELLO_WORLD_MANIFEST\\>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Copy one of the HPAs below based on the metric type you\'re using:\n{{% accordion id="service-deployment-resource-metrics" label="Hello World HPA: Resource Metrics" %}}'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 1000Mi\n")),(0,r.kt)("p",null,'{{% /accordion %}}\n{{% accordion id="service-deployment-custom-metrics" label="Hello World HPA: Custom Metrics" %}}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 100Mi\n  - type: Pods\n    pods:\n      metricName: cpu_system\n      targetAverageValue: 20m\n")),(0,r.kt)("p",null,"{{% /accordion %}}"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'View the HPA info and description. Confirm that metric data is shown.\n{{% accordion id="hpa-info-resource-metrics" label="Resource Metrics" %}}'),(0,r.kt)("li",{parentName:"ol"},"Enter the following commands.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get hpa\nNAME          REFERENCE                TARGETS                     MINPODS   MAXPODS   REPLICAS   AGE\nhello-world   Deployment/hello-world   1253376 / 100Mi, 0% / 50%   1         10        1          6m\n# kubectl describe hpa\nName:                                                  hello-world\nNamespace:                                             default\nLabels:                                                \\<none\\>\nAnnotations:                                           \\<none\\>\nCreationTimestamp:                                     Mon, 23 Jul 2018 20:21:16 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             1253376 / 100Mi\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           \\<none\\>\n")),'{{% /accordion %}}\n{{% accordion id="hpa-info-custom-metrics" label="Custom Metrics" %}}'),(0,r.kt)("li",{parentName:"ol"},"Enter the following command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive the output that follows.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                \\<none\\>\nAnnotations:                                           \\<none\\>\nCreationTimestamp:                                     Tue, 24 Jul 2018 18:36:28 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             3514368 / 100Mi\n  "cpu_system" on pods:                                0 / 20m\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           \\<none\\>\n')),"{{% /accordion %}}")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a load for the service to test that your pods autoscale as intended. You can use any load-testing tool (Hey, Gatling, etc.), but we're using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"Hey"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test that pod autoscaling works as intended.\n",(0,r.kt)("strong",{parentName:"p"},"To Test Autoscaling Using Resource Metrics:"),'\n{{% accordion id="observe-upscale-2-pods-cpu" label="Upscale to 2 Pods: CPU Usage Up to Target" %}}\nUse your load testing tool to scale up to two pods based on CPU Usage.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View your HPA."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                \\<none\\>\nAnnotations:                                           \\<none\\>\nCreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             10928128 / 100Mi\n  resource cpu on pods  (as a percentage of request):  56% (280m) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:\n  Type    Reason             Age   From                       Message\n  ----    ------             ----  ----                       -------\n  Normal  SuccessfulRescale  13s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm you've scaled to two pods."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   # kubectl get pods\n")),(0,r.kt)("p",{parentName:"li"},"   You should receive output similar to what follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   NAME                                                     READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-k8ph2                             1/1       Running   0          1m\n   hello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n")),(0,r.kt)("p",{parentName:"li"},'  {{% /accordion %}}\n{{% accordion id="observe-upscale-3-pods-cpu-cooldown" label="Upscale to 3 pods: CPU Usage Up to Target" %}}\nUse your load testing tool to upscale to 3 pods based on CPU usage with ',(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-upscale-delay")," set to 3 minutes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                \\<none\\>\n   Annotations:                                           \\<none\\>\n   CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             9424896 / 100Mi\n     resource cpu on pods  (as a percentage of request):  66% (333m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  4m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm three pods are running."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"You should receive output similar to what follows.\n ```\n  NAME                                                     READY     STATUS    RESTARTS   AGE\n  hello-world-54764dfbf8-f46kh                             0/1       Running   0          1m\n  hello-world-54764dfbf8-k8ph2                             1/1       Running   0          5m\n  hello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n  ```\n")),(0,r.kt)("p",{parentName:"li"},'  {{% /accordion %}}\n{{% accordion id="observe-downscale-1-pod" label="Downscale to 1 Pod: All Metrics Below Target" %}}\nUse your load testing to scale down to 1 pod when all metrics are below target for ',(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay")," (5 minutes by default).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                \\<none\\>\n    Annotations:                                           \\<none\\>\n    CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             10070016 / 100Mi\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  6m    horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  1s    horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n")),(0,r.kt)("p",{parentName:"li"},"{{% /accordion %}}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To Test Autoscaling Using Custom Metrics:"),'\n{{% accordion id="custom-observe-upscale-2-pods-cpu" label="Upscale to 2 Pods: CPU Usage Up to Target" %}}\nUse your load testing tool to upscale two pods based on CPU usage.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  # kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  Name:                                                  hello-world\n  Namespace:                                             default\n  Labels:                                                \\<none\\>\n  Annotations:                                           \\<none\\>\n  CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n  Reference:                                             Deployment/hello-world\n  Metrics:                                               ( current / target )\n    resource memory on pods:                             8159232 / 100Mi\n    "cpu_system" on pods:                                7m / 20m\n    resource cpu on pods  (as a percentage of request):  64% (321m) / 50%\n  Min replicas:                                          1\n  Max replicas:                                          10\n  Conditions:\n    Type            Status  Reason              Message\n    ----            ------  ------              -------\n    AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n    ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n    ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n  Events:\n    Type    Reason             Age   From                       Message\n    ----    ------             ----  ----                       -------\n    Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm two pods are running."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  # kubectl get pods\n")),(0,r.kt)("p",{parentName:"li"},"  You should receive output similar to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      NAME                           READY     STATUS    RESTARTS   AGE\n      hello-world-54764dfbf8-5pfdr   1/1       Running   0          3s\n      hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n")),(0,r.kt)("p",{parentName:"li"},'  {{% /accordion %}}\n{{% accordion id="observe-upscale-3-pods-cpu-cooldown-2" label="Upscale to 3 Pods: CPU Usage Up to Target" %}}\nUse your load testing tool to scale up to three pods when the cpu_system usage limit is up to target.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                \\<none\\>\n   Annotations:                                           \\<none\\>\n   CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             8374272 / 100Mi\n     "cpu_system" on pods:                                27m / 20m\n     resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  3s    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm three pods are running."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),(0,r.kt)("p",{parentName:"li"},"   You should receive output similar to what follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   # kubectl get pods\n   NAME                           READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-5pfdr   1/1       Running   0          3m\n   hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n   hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n")),(0,r.kt)("p",{parentName:"li"},'{{% /accordion %}}\n{{% accordion id="observe-upscale-4-pods" label="Upscale to 4 Pods: CPU Usage Up to Target" %}}\nUse your load testing tool to upscale to four pods based on CPU usage. ',(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-upscale-delay")," is set to three minutes by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive output similar to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                \\<none\\>\n    Annotations:                                           \\<none\\>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8374272 / 100Mi\n      "cpu_system" on pods:                                27m / 20m\n      resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  4s    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm four pods are running."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\n# kubectl get pods\n```\nYou should receive output similar to what follows.\n```\n  NAME                           READY     STATUS    RESTARTS   AGE\n  hello-world-54764dfbf8-2p9xb   1/1       Running   0          5m\n  hello-world-54764dfbf8-5pfdr   1/1       Running   0          2m\n  hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n  hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n```\n")),(0,r.kt)("p",{parentName:"li"},'{{% /accordion %}}\n{{% accordion id="custom-metrics-observe-downscale-1-pod" label="Downscale to 1 Pod: All Metrics Below Target" %}}\nUse your load testing tool to scale down to one pod when all metrics below target for ',(0,r.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,r.kt)("p",{parentName:"li"},"You should receive similar output to what follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                \\<none\\>\n    Annotations:                                           \\<none\\>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8101888 / 100Mi\n      "cpu_system" on pods:                                8m / 20m\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  8m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n      Normal   SuccessfulRescale             13s               horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command to confirm a single pods is running."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\n    # kubectl get pods\n```\nYou should receive output similar to what follows.\n```\n    NAME                           READY     STATUS    RESTARTS   AGE\n    hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n```\n")),(0,r.kt)("p",{parentName:"li"},"{{% /accordion %}}"))))}d.isMDXComponent=!0}}]);