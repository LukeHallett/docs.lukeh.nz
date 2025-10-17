---
title: Alpine Linux Deployment
description: Basic commands needed to setup Alpine Linux.
---
Basic commands needed to setup Alpine Linux.

## Setup Repositories
First, nano must be installed:
```bash
apk add nano
```
Then, uncomment the `community` repository:
```bash
nano /etc/apk/repositories
```
Now, update Alpine Package Keeper to use the new repository:
```bash
apk update
```

## Install Docker and Docker Compose
First, add the docker packages:
```bash
apk add docker docker-compose
```
Now, add it to autostart on boot:
```bash
rc-update add docker default
```
Finally, start the service manually:
```bash
service docker start
```