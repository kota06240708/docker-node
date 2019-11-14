PROJECT = docker

# コンテナを起動
.PHONY: start
start:
	docker-compose -p $(PROJECT) up  -d --build

# コンテナを起動 (コンソールにデバックを表示させる)
.PHONY: start-d
start-d:
	docker-compose -p $(PROJECT) up  --build

# ログを表示
.PHONY: logs
logs:
	docker-compose -p $(PROJECT) logs

# 開発終了
.PHONY: kill
kill:
	docker-compose -p $(PROJECT) kill

# コンテナの状態を表示
.PHONY: ps
ps:
	docker-compose -p $(PROJECT) ps

# 全てのコンテナの状態を表示
.PHONY: ps-all
ps-all:
	docker ps -a

# mysqlのコンテナの中に入る
.PHONY: on-db
on-db:
	docker exec -it mysql57 bin/bash

# nodeのコンテナの中に入る
.PHONY: on-node
on-node:
	docker exec -i -t nn-app bash
