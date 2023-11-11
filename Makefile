CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
DOCKER_NAME_BACKEND=backend_todo
DOCKER_NAME_FRONTEND=frontend_todo
DOCKER_COMPOSE?=docker-compose

.PHONY: build install dev up start first stop restart clear


start:
	$(DOCKER_COMPOSE) up


up:
	$(DOCKER_COMPOSE) up -d


stop: 
	$(DOCKER_COMPOSE) stop


restart: stop start


create-env:
	echo "POSTGRES_USER=todo" > .env
	echo "POSTGRES_PASSWORD=1234" >> .env
	echo "POSTGRES_DB=defaultdb" >> .env
	echo "SECRET_KEY=secret" >> .env


migration:
	docker exec -it $(DOCKER_NAME_FRONTEND) /bin/bash -c "pnpm migration:run"