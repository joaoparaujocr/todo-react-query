CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
DOCKER_NAME_BACKEND=backend_todo
DOCKER_NAME_FRONTEND=frontend_todo
DOCKER_COMPOSE?=docker-compose
DOCKER_EXEC_TOOLS_APP=docker exec -it $(DOCKER_NAME) sh
NODE_INSTALL="pnpm i"
SERVER_RUN="pnpm dev"


.PHONY: build install dev up start first stop restart clear


start:
	$(DOCKER_COMPOSE) up


install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)


dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)


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
	docker exec -it backend_todo /bin/bash -c "pnpm migration:run"