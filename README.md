# To-do App #

### Introduction ###

The classic To-Do application where a user can write down all the things he wants to accomplish. No database.

## User Stories

-   [ ] User can see an `input` field where he can type in a to-do item
-   [ ] By pressing send, the User can submit the to-do item and can see that being added to a list of to-do's
-   [ ] User can mark a to-do as `completed`
-   [ ] User can remove a to-do item by pressing on a button (or on the to-do item itself)
-   [ ] User can see a list with all completed to-do's
-   [ ] User can see a list with all active to-do's

### How to I setup my development environment? ###

* Install [Docker](https://www.docker.com)
* Create the necessary Docker Images and Containers by running the following command in the project's root folder:
```
docker-compose up --build
```
* *Note:* you can use the **-d** flag to run all the containers in background. If not used, all the containers will run attached to the same process.
* If the containers are running in the console, CTRL+C signal will stop all the containers. If they are running in background, you can use the following command:
```
docker-compose down
```
