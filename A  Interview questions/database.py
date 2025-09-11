#-------------what is composite indexing

# https://stackoverflow.com/questions/795031/how-do-composite-indexes-work
# Composite indexes work just like regular indexes, except they have multi-values keys.
# If you define an index on the fields (a,b,c) , the records are sorted first on a, then b, then c.

# Example:

# | A | B | C |
# -------------
# | 1 | 2 | 3 |
# | 1 | 4 | 2 |
# | 1 | 4 | 4 |
# | 2 | 3 | 5 |
# | 2 | 4 | 4 |
# | 2 | 4 | 5 |

#-------- how mongodb handles replica set 

#---------- what is sharding --------------

# Sharding is a database architecture pattern related to horizontal partitioning — 
# the practice of separating one table's rows into multiple different tables, known as partitions, that all have the same schema. 
# Each partition is referred to as a shard. Each shard is held on a separate database server instance, to spread load.

#----- what is CAP theorem --------------

# The CAP theorem, also known as Brewer's theorem, states that in a distributed data store, you can only achieve two out of the following three guarantees simultaneously:
# Consistency: Every read receives the most recent write or an error.
# Availability: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
# Partition Tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. 
# In practice, distributed systems must choose between consistency and availability when a network partition occurs.


#--------- what is ACID properties in dbms --------------
# ACID is an acronym that stands for 
# Atomicity, Consistency, Isolation, and Durability. These are a set of properties that guarantee reliable processing of database transactions.  

# Atomicity: Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction is rolled back, leaving the database unchanged.    
# Consistency: Ensures that a transaction brings the database from one valid state to another, maintaining all predefined rules, such as integrity constraints.
# Isolation: Ensures that concurrent transactions do not interfere with each other. The intermediate state of a transaction is invisible to other transactions until it is committed.
# Durability: Ensures that once a transaction has been committed, it will remain so, even in the event of a system failure. This is typically achieved through the use of transaction logs and


# database backups.# These properties are crucial for maintaining the integrity and reliability of databases, especially in systems where multiple transactions may occur simultaneously.


# ----------3. what is diff of mongo and postgres --------------

# MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents and excels at handling unstructured data and horizontal scalability,

# while PostgreSQL is a powerful open-source object-relational database that uses tables with rows and columns, is known for its ACID compliance, 
# strong support for complex SQL queries, and reliability for structured data. 

# The core difference lies in their data models: 

# MongoDB uses a dynamic schema for flexibility, 
# whereas PostgreSQL requires a pre-defined, strict schema for data consistency.  