---
title: Setup Guide
position: 2
---

This section describes how to enable Istio and start using it in your projects.

If you use Istio for traffic management, you will need to allow external traffic to the cluster. In that case, you will need to follow all of the steps below.

# Prerequisites

This guide assumes you have already [installed Rancher,](https://rancher.com/docs/rancher/v2.6/en/installation) and you have already [provisioned a separate Kubernetes cluster](https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning) on which you will install Istio.

The nodes in your cluster must meet the [CPU and memory requirements.](https://rancher.com/docs/rancher/v2.6/en/istio/resources/)

The workloads and services that you want to be controlled by Istio must meet [Istio's requirements.](https://istio.io/docs/setup/additional-setup/requirements/)


# Install

\> **Quick Setup** If you don't need external traffic to reach Istio, and you just want to set up Istio for monitoring and tracing traffic within the cluster, skip the steps for [setting up the Istio gateway](https://rancher.com/docs/rancher/v2.6/en/istio/setup/gateway) and [setting up Istio's components for traffic management.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/set-up-traffic-management)

1. [Enable Istio in the cluster.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/enable-istio-in-cluster)
1. [Enable Istio in all the namespaces where you want to use it.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/enable-istio-in-namespace)
1. [Add deployments and services that have the Istio sidecar injected.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/deploy-workloads)
1. [Set up the Istio gateway. ](https://rancher.com/docs/rancher/v2.6/en/istio/setup/gateway)
1. [Set up Istio's components for traffic management.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/set-up-traffic-management)
1. [Generate traffic and see Istio in action.](https://rancher.com/docs/rancher/v2.6/en/istio/setup/view-traffic/ )
