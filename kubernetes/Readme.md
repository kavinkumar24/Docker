# Kubernetes (K8S)

- Open Source container orchestration tool, which can automates `deployment`, `scaling`, `managing` containers.
- Manage containerized application in different deployment environments.

## Features

- High Availability or no downtime
- Scalability or high performance
- Disaster recovery - back up and restore

## Components

### Node and Pod

- Node is a `worker` machine in k8s, that helps to run an application.
- Pod is the `smallest deployable`unit in k8s that wraps one or more containers.

### Service

- `Persist` the `IP` address, even after Pod dies.
- Lifecycle of pod and service not connected.

### Ingress

- It exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.
- It is used for `route traffic` management into cluster.

### ConfigMap

- It is a external configuration of the application to store the unsensitive data like URL.

### Secret

- It is used to store data in a secret manner.
- Encoded data in base64.

### Volumes

- It ensure data is persisted
- allocate a physical memory or remote storage.

### Replicates

- Pod can be `replicated`, so if one fails other will be still `alive`.
- DB is not replicated directly because it contains stateful data for that `StatefulSet` is being used

## 3 Node Process in K8S

- Kubelet (CLI tool)
- Kube Proxy (Forward the requests)
- Container Runtime (make a app alive)

_Master node is responsible to schedule,  monitor, re-start._

## Components inside the Master Node

- `API server` - Used a cluster gateway and it ensures the authentication.
- `Scheduler` - Make a decision which pod should go next.
- `Controller Manager` - Detects the cluster internal state changes.
- `etcd` - Key Value Store (records info like when the pod dies or new pod added)

## Kubectl - Commands

### Crud

``` plaintext
kubectl create deployment [name]
```

``` plaintext
kubectl edit deployment [name]
```

``` plaintext
kubectl delete deployment [name]
```

### Status of K8S components

``` plaintext
kubectl get nodes | pod | services | replicaset | deployment
```

### Debugging pods

``` plaintext
kubectl log [pod name]
```

``` plaintext
kubectl exec -it [pod name] --bin/bash
```

Interactive Terminal.