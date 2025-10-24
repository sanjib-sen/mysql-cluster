let dbPass = os.getenv("MYSQL_ROOT_PASSWORD");
let clusterName = "devCluster"
let mysqlHost = os.getenv('MYSQL_HOST')
let node2 = os.getenv('NODE_2_IP')
let node3 = os.getenv('NODE_3_IP')

try {
  print('Setting up InnoDB cluster...\n');

  // Create cluster on first instance
  print('Connecting to Node 1...\n');
  shell.connect(`root@${mysqlHost}`, dbPass)

  print('Creating cluster on Node 1...\n');
  var cluster = dba.createCluster(clusterName);

  // Add second instance
  print('Adding instance Node 2 to cluster...\n');
  cluster.addInstance({
    user: 'root',
    host: node2,
    port: 3306,
    password: dbPass
  }, {
    recoveryMethod: 'clone',
  })

  // Add third instance
  print('Adding instance node3 to cluster...\n');
  cluster.addInstance({
    user: 'root',
    host: node3,
    port: 3306,
    password: dbPass
  }, {
    recoveryMethod: 'clone',
  })

  print('\nInnoDB cluster deployed successfully.\n');

  // Show cluster status
  print('\nCluster Status:\n');
  print(cluster.status());

} catch (e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}

