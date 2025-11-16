#!/bin/bash
set -e

echo "Bootstrapping MySQL Router..."
mysqlrouter --bootstrap root:${MYSQL_ROOT_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT} \
  --directory=/var/lib/mysqlrouter \
  --user=root \
  --conf-use-sockets \
  --force

echo "Starting MySQL Router..."
exec mysqlrouter --config=/var/lib/mysqlrouter/mysqlrouter.conf
