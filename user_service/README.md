# e-MARC Analytics Project #

### Introduction ###

microservice task manager

### How to I setup my development environment? ###

* Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* Create the necessary Docker Images and Containers by running the following command in the project's root folder:
```
docker-compose up --build
```
* *Note:* you can use the **-d** flag to run all the containers in background. If not used, all the containers will run attached to the same process.
* If the containers are running in the console, CTRL+C signal will stop all the containers. If they are running in background, you can use the following command:
```
docker-compose down
```
