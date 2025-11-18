# https://projects.100xdevs.com/tracks/hor-ver-scaling/Horizontal-and-vertical-scaling--Indexes-in-DBs-6

# ----------- to run postgres locally using docker --------------
docker ps
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecredpassword -d postgres   # -d => detached mode, -p => port mapping, -e => env variable
docker exec -it container_id /bin/bash  # -it => interactively 

docker exec -it 14469b50bb47 /bin/bash

root@14469b50bb47:/# ls
bin  boot  dev	docker-entrypoint-initdb.d  etc  home  lib  lib64  media  mnt  opt  proc  root	run  sbin  srv	sys  tmp  usr  var

root@14469b50bb47:/# psql                                                                                                       #just running psql gives error as it tries to connect with default user 'root'
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "root" does not exist

root@14469b50bb47:/# psql -U postgres
psql (18.0 (Debian 18.0-1.pgdg13+3))
Type "help" for help.

postgres=#                                                  # connected to default db 'postgres' with default user 'postgres', now we can create new dbs, users, tables etc 


postgres=# CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255)
);
CREATE TABLE

or 

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);

INSERT INTO users (name, email, password, phone)
VALUES ('vamsi', 'nvamsi2015@gmail.com', 'hashed_password_here', '7207422372');

postgres-# \dt
          List of tables
 Schema | Name  | Type  |  Owner   
--------+-------+-------+----------
 public | users | table | postgres
(1 row)


postgres=# CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE
postgres=# 
postgres=# 
postgres=# \dt
          List of tables
 Schema | Name  | Type  |  Owner   
--------+-------+-------+----------
 public | posts | table | postgres
 public | users | table | postgres
(2 rows)


# inserting some dummy data, adding 5 users and each user has 500000 posts with random titles and descriptions

DO $$
DECLARE
    returned_user_id INT;
BEGIN
    -- Insert 5 users
    FOR i IN 1..5 LOOP
        INSERT INTO users (email, password, name) VALUES
        ('user'||i||'@example.com', 'pass'||i, 'User '||i)
        RETURNING user_id INTO returned_user_id;

        FOR j IN 1..500000 LOOP
            INSERT INTO posts (user_id, title, description)
            VALUES (returned_user_id, 'Title '||j, 'Description for post '||j);
        END LOOP;
    END LOOP;
END $$;

postgres=# select * from users;
 user_id |       email       | password |  name  
---------+-------------------+----------+--------
       1 | user1@example.com | pass1    | User 1
       2 | user2@example.com | pass2    | User 2
       3 | user3@example.com | pass3    | User 3
       4 | user4@example.com | pass4    | User 4
       5 | user5@example.com | pass5    | User 5
(5 rows)

postgres=# select * from posts limit 5;
 post_id | user_id |  title  |      description       | image 
---------+---------+---------+------------------------+-------
       1 |       1 | Title 1 | Description for post 1 | 
       2 |       1 | Title 2 | Description for post 2 | 
       3 |       1 | Title 3 | Description for post 3 | 
       4 |       1 | Title 4 | Description for post 4 | 
       5 |       1 | Title 5 | Description for post 5 | 
(5 rows)

#Try running a query to get all the posts of a user and log the time it took

postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=1 LIMIT 5;

                                                    QUERY PLAN                                                     
-------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.00..0.56 rows=5 width=563) (actual time=0.287..0.295 rows=5.00 loops=1)
   Buffers: shared read=3
   ->  Seq Scan on posts  (cost=0.00..56542.00 rows=502083 width=563) (actual time=0.284..0.288 rows=5.00 loops=1)
         Filter: (user_id = 1)
         Buffers: shared read=3
 Planning:
   Buffers: shared hit=26
 Planning Time: 0.409 ms
 Execution Time: 0.334 ms
(9 rows)


# press q to exit the explain analyse output

postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=2 LIMIT 5;
                                                       QUERY PLAN                                                        
-------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.00..0.56 rows=5 width=563) (actual time=1149.177..1149.181 rows=5.00 loops=1)
   Buffers: shared hit=3 read=5135
   ->  Seq Scan on posts  (cost=0.00..56542.00 rows=503000 width=563) (actual time=1149.173..1149.174 rows=5.00 loops=1)
         Filter: (user_id = 2)
         Rows Removed by Filter: 500000
         Buffers: shared hit=3 read=5135
 Planning Time: 0.206 ms
 Execution Time: 1149.373 ms
(8 rows)




postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=3 LIMIT 5;
                                                      QUERY PLAN                                                       
-----------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.00..0.58 rows=5 width=563) (actual time=218.428..218.430 rows=5.00 loops=1)
   Buffers: shared hit=1 read=5055
   ->  Seq Scan on posts  (cost=0.00..56542.00 rows=488500 width=563) (actual time=218.424..218.425 rows=5.00 loops=1)
         Filter: (user_id = 3)
         Rows Removed by Filter: 489972
         Buffers: shared hit=1 read=5055
 Planning Time: 0.243 ms
 Execution Time: 243.548 ms
(8 rows)


postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=7 LIMIT 5;
                                                           QUERY PLAN                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=1000.00..39312.93 rows=1 width=563) (actual time=489.828..494.212 rows=0.00 loops=1)
   Buffers: shared hit=13090 read=12202
   ->  Gather  (cost=1000.00..39312.93 rows=1 width=563) (actual time=489.825..494.207 rows=0.00 loops=1)
         Workers Planned: 2
         Workers Launched: 2
         Buffers: shared hit=13090 read=12202
         ->  Parallel Seq Scan on posts  (cost=0.00..38312.83 rows=1 width=563) (actual time=208.444..208.445 rows=0.00 loops=3)
               Filter: (user_id = 7)
               Rows Removed by Filter: 833333
               Buffers: shared hit=13090 read=12202
 Planning Time: 0.215 ms
 Execution Time: 494.252 ms
(12 rows)

postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=8 LIMIT 5;
                                                           QUERY PLAN                                                            
---------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=1000.00..39312.93 rows=1 width=563) (actual time=145.904..148.803 rows=0.00 loops=1)
   Buffers: shared hit=13372 read=11920
   ->  Gather  (cost=1000.00..39312.93 rows=1 width=563) (actual time=145.901..148.799 rows=0.00 loops=1)
         Workers Planned: 2
         Workers Launched: 2
         Buffers: shared hit=13372 read=11920
         ->  Parallel Seq Scan on posts  (cost=0.00..38312.83 rows=1 width=563) (actual time=140.736..140.736 rows=0.00 loops=3)
               Filter: (user_id = 8)
               Rows Removed by Filter: 833333
               Buffers: shared hit=13372 read=11920
 Planning Time: 0.175 ms
 Execution Time: 148.853 ms
(12 rows)

user_id 8 and 9 are not there but still taking time to scan entire table


# how can we optimize the above query to reduce the time taken to fetch posts of a user?

# Solution: Create an index on user_id column of posts table    


postgres=# CREATE INDEX idx_user_id ON posts (user_id);

CREATE INDEX

postgres=#  EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=9 LIMIT 5;
                                                          QUERY PLAN                                                          
------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.43..4.45 rows=1 width=563) (actual time=0.081..0.082 rows=0.00 loops=1)
   Buffers: shared read=3
   ->  Index Scan using idx_user_id on posts  (cost=0.43..4.45 rows=1 width=563) (actual time=0.077..0.078 rows=0.00 loops=1)
         Index Cond: (user_id = 9)
         Index Searches: 1
         Buffers: shared read=3
 Planning:
   Buffers: shared hit=19 read=1
 Planning Time: 0.601 ms
 Execution Time: 0.120 ms
(10 rows)


# see the difference in time taken before and after creating index on user_id column of posts table

# When you create an index on a field, a new data structure (usually B-tree) is created that stores the mapping from the index column to the location of the record in the original table. 
# # Search on the index is usually log(n) 

# The data pointer (in case of postgres) is the page and offset at which this record can be found. 
# Think of the index as the appendix of a book and the location as the page + offset of where this data can be found


#complex indexes: 

# You can have index on more than one column for more complex queries
# For example, 
# Give me all the posts of a user with given id with title “Class 1”.
# The index needs to have two keys now



postgres=# CREATE INDEX idx_posts_user_id_title ON posts (description, title);
CREATE INDEX


postgres=# EXPLAIN ANALYSE  SELECT * FROM posts WHERE title='title' AND description='my title';
                                                             QUERY PLAN                                                             
------------------------------------------------------------------------------------------------------------------------------------
 Index Scan using idx_posts_user_id_title on posts  (cost=0.43..8.45 rows=1 width=563) (actual time=0.020..0.021 rows=0.00 loops=1)
   Index Cond: ((description = 'my title'::text) AND ((title)::text = 'title'::text))
   Index Searches: 1
   Buffers: shared hit=3
 Planning Time: 0.086 ms
 Execution Time: 0.038 ms
(6 rows)



#query ran faster than without using index

#-------------- creating indexes in prisma ----------------
https://projects.100xdevs.com/tracks/hor-ver-scaling/088ff3f4-ba25-4f72-b4e9-23b75097760c


Ref - https://www.prisma.io/docs/orm/prisma-schema/data-model/indexes
You can add an index to a model in prisma by doing the following -


model User {
  id        String   @id @default(uuid())
  username  String   @unique
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id          String   @id @default(uuid())
  title       String
  content     String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      String
  user        User     @relation(fields: [userId], references: [id])

  @@index([userId])
}

# ----------------- Normalization ------------------------


Normalization is the process of removing redundancy in your database. 

if you are stroring user data and posts data, you making some columns redundant, for every new post you are creating a new row with user data like user_id, password, email etc. which is redundant. bc we already had it in the initial ResourceWarning


normalization is breaking down a table into smaller tables and linking them using foreign keys.

normalization is converting user_table with posts into two tables users and posts tables

Normalization in databases is a systematic approach of decomposing tables to eliminate data redundancy and imporve data integrity.

