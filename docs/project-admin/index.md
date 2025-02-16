---
title: Intro
position: 1
---

_Projects_ are objects introduced in Rancher that help organize namespaces in your Kubernetes cluster. You can use projects to create multi-tenant clusters, which allows a group of users to share the same underlying resources without interacting with each other's applications.

In terms of hierarchy:

- Clusters contain projects
- Projects contain namespaces

Within Rancher, projects allow you to manage multiple namespaces as a single entity. In native Kubernetes, which does not include projects, features like role-based access rights or cluster resources are assigned to individual namespaces. In clusters where multiple namespaces require the same set of access rights, assigning these rights to each individual namespace can become tedious. Even though all namespaces require the same rights, there's no way to apply those rights to all of your namespaces in a single action. You'd have to repetitively assign these rights to each namespace!

Rancher projects resolve this issue by allowing you to apply resources and access rights at the project level. Each namespace in the project then inherits these resources and policies, so you only have to assign them to the project once, rather than assigning them to each individual namespace.

You can use projects to perform actions like:

- [Assign users access to a group of namespaces](https://rancher.com/docs/rancher/v2.6/en/project-admin/project-members)
- Assign users [specific roles in a project](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#project-roles). A role can be owner, member, read-only, or [custom](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/default-custom-roles/)
- [Set resource quotas](https://rancher.com/docs/rancher/v2.6/en/project-admin/resource-quotas/)
- [Manage namespaces](https://rancher.com/docs/rancher/v2.6/en/project-admin/namespaces/)
- [Configure tools](https://rancher.com/docs/rancher/v2.6/en/project-admin/tools/)
- [Set up pipelines for continuous integration and deployment](https://rancher.com/docs/rancher/v2.6/en/project-admin/pipelines)
- [Configure pod security policies](https://rancher.com/docs/rancher/v2.6/en/project-admin/pod-security-policies)

### Authorization

Non-administrative users are only authorized for project access after an [administrator](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/), [cluster owner or member](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#cluster-roles), or [project owner](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#project-roles) adds them to the project's **Members** tab.

Whoever creates the project automatically becomes a [project owner](https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/#project-roles).

## Switching between Projects

To switch between projects, use the drop-down available in the navigation bar. Alternatively, you can switch between projects directly in the navigation bar.

1. In the upper left corner, click **☰ \> Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to switch projects and click **Explore**.
1. In the top navigation bar, select the project that you want to open.
