docker ps 

//------------ postgres 

docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecredpassword -d postgres   # -d => detached mode, -p => port mapping, -e => env variable
docker exec -it container_id /bin/bash  # -it => interactively 

root@14469b50bb47:/# psql -U postgres
psql (18.0 (Debian 18.0-1.pgdg13+3))
Type "help" for help.

postgres=# 


// ---------- redis
docker run -d -p 6379:6379 redis/redis-stack   

// Breakdown of the Command
// docker run: Creates and starts a new container.
// -d: Runs the container in detached mode (in the background).
// -p 6379:6379: Maps port 6379 on your host machine to port 6379 in the container. This is the standard port used by the Redis server for database connections.
// redis/redis-stack: Specifies the Redis Stack image to use. 
// What is "Redis Stack"?
// Unlike the standard redis image, Redis Stack bundles the following together:
// Redis Core: The standard in-memory database.
// Advanced Modules: Built-in support for JSON, Search, Time Series, and Probabilistic data structures.
// Redis Insight: A visual GUI for managing your data.
// Note: By default, Redis Insight listens on port 8001. To use it, you should ideally add -p 8001:8001 to your command and then visit http://localhost:8001 in your browser.

docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest


// In the command docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest, the two port mappings serve distinct purposes for the Redis Stack environment:
// Port 6379: This is the default port for the Redis Database Server. It is used by applications, code libraries (like redis-py or Node.js redis), and the redis-cli to perform data operations such as storing and retrieving keys.
// Port 8001: This is the default port for Redis Insight, the built-in graphical user interface (GUI). Mapping this port allows you to open your web browser and navigate to http://localhost:8001 to visually manage your data, run queries, and monitor performance.






