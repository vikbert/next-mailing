# NEXT.js Mailing Demo

![](https://miro.medium.com/max/966/1*OA9c8CovXaqjwbzi_qYKsA.jpeg)

## Prerequisite
We should have  `docker desktop` and `docker-compose` installed.

https://docs.docker.com/desktop/install/mac-install/

https://docs.docker.com/compose/install/


## Getting Started
By using `make` command, we are going to set up the docker develop environment with tow docker containers:

- container: node
- container: mailcatcher

> `node` container is the place where NEXT.js application is running on port 3000
> 
> `mailcatcher` container is the SMTP simulation for mailing in local dev environment (port for HTTP: 1080, port for 
> smtp: 1025)

Now start the dev environment via `docker-compose`

```bash
make init  ## install npm package in node container
make dev   ## start node dev server
```

## Test the contact form
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test the mailcatcher
Open [http://localhost:1080](http://localhost:1080) with your browser to see the result.

## Author
https://vikbert.github.io/
