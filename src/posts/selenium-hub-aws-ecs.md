---
path: "/posts/deploying-selenium-grid-on-aws-ecs-with-fargate"
date: "2019-05-04"
title: "Deploying Selenium Grid on AWS ECS and Fargate"
summary: "If you've used Docker, ECS is a breeze."
---

Selenium's Docker images make it really easy to setup a nice swarm of browser instances to run your tests against (in parallel even!). Paired with ECS, it's possible to have a cluster up in a few minutes.

If you're not familiar with ECS, it's basically Amazon's answer to Google's Kubernetes. A dashboard where you can manage and monitor container clusters. What's really cool is their Fargate service, which removes the need for you to manage the nodes that the cluster is deployed on. Instead you just set the container's CPU and RAM requirements, and Fargate handles provisioning the appropriate EC2 instances to run your containers on.

## Setup (Optional)
Before we get started we'll need to setup some permissions and roles to allow our cluster's containers to do their thing.



## Create an ECS cluster
```bash
aws ecs create-cluster --cluster-name selenium-grid
```

## Create tasks
Tasks are similar to a service that you'd define in a `docker-compose.yml` -- it's just a description of your container's requirements and configuration. Unlike a compose file though, you can re-use tasks across multiple clusters.

### Hub Task

Create a json file for the hub task definition:

```javascript
{
    "family": "selenium-grid", 
    "networkMode": "awsvpc",
    "taskRoleArn": "<TASK ROLE ARN>",
    "executionRoleArn": "<EXECUTION ROLE ARN>",
    "containerDefinitions": [
        {
            "name": "hub", 
            "image": "selenium/hub:latest", 
            "portMappings": [
                {
                "hostPort": 4444,
                "protocol": "tcp",
                "containerPort": 4444
                }
            ], 
            "essential": true, 
            "entryPoint": [], 
            "command": []
        }
    ], 
    "requiresCompatibilities": [
        "FARGATE"
    ], 
    "cpu": "1024", 
    "memoryReservation": "2048"
}
```

Create the task definition, referencing the file we just created:

```bash
aws ecs create-task-set --service selenium-hub --cluster selenium-grid --cli-input-json ./hub.json
```

### Worker Task (Chrome)

```javascript
{
    "family": "selenium-grid", 
    "networkMode": "awsvpc",
    "taskRoleArn": "<TASK ROLE ARN>",
    "executionRoleArn": "<EXECUTION ROLE ARN>",
    "containerDefinitions": [
        {
            "name": "hub", 
            "image": "selenium/node-chrome:latest", 
            "portMappings": [
                {
                "hostPort": 5555,
                "protocol": "tcp",
                "containerPort": 5555
                }
            ],
            "essential": true, 
            "entryPoint": [], 
            "command": []
        }
    ], 
    "environment": [
        {
          "name": "HUB_HOST",
          "value": "hub.local"
        },
        {
          "name": "HUB_PORT",
          "value": "4444"
        }
    ],
    "mountPoints": [
        {
          "readOnly": null,
          "containerPath": "/dev/shm",
          "sourceVolume": "selenium-hub-vol"
        }
    ],
    "requiresCompatibilities": [
        "FARGATE"
    ], 
    "cpu": "2048", 
    "memory": "4096",
    "memoryReservation": "800"
}
```
Create the task definition, referencing the file we just created:

```bash
aws ecs create-task-set --service selenium-hub --cluster selenium-grid --cli-input-json ./worker-chrome.json
```

