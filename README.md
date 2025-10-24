# MySQL High Availability InnoDB Cluster

An example mysql high availability innodb cluster with 3 nodes

## Instruction

1. In all of the nodes
  ```sh
  cp .env.example .env # (change the ip's accordingly)
  docker compose up -d mysql
  ```

2. Then in any of the node (this will be primary node for now):
  ```sh
  docker compose up script
  ```

3. Then in all of the nodes (including primary)
  ```sh
  docker compose up -d router
  ```

Then you can use localhost:6446 or <any_node_ip>:6446 as DB_HOST
