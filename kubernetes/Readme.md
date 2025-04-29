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
