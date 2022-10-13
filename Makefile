SHELL := /bin/bash

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$|(^#--)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m %-43s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m #-- /[33m/'

.PHONY: help
.DEFAULT_GOAL := help

#-- init
init: ## init node application
	docker-compose run --rm --service-ports node npm install


#-- build
build: ## build the NEXT application
	docker-compose run --rm --service-ports node npm run build
	docker-compose run --rm --service-ports node npm run start


#-- dev
dev: ## start the dev server
	docker-compose up -d
	docker-compose run --rm --service-ports node npm run dev

