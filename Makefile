SHELL := /bin/bash

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$|(^#--)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m %-43s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m #-- /[33m/'

.PHONY: help
.DEFAULT_GOAL := help

#-- dev
dev: ## start the dev server
	docker-compose run --rm --service-ports node npm run dev

#-- node
npm-clean: ## clean up the npm packages
	rm -rf app/_frontend/node_modules/*
	docker-compose run --rm node npm run download

