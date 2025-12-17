Client Requests
       |
       v
+-------------------+
|  Load Balancer    |  (Node Cluster)
+-------------------+
     |        |
     v        v
+---------+ +---------+
| Node.js | | Node.js |
| Worker  | | Worker  |
+---------+ +---------+
       |
       v
   MongoDB
