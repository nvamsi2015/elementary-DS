// ------- interview asked questions ----------

1. difference between nosql and relational databases
2. how do you do joins in mongodb
3. how do you do indexing in mongodb


// --------- how to achive joins in mongodb -----------

// MongoDB, as a NoSQL document database, handles relationships between collections differently than traditional relational databases. While it doesn't have a direct equivalent to SQL's JOIN clause, you can achieve similar results 
// using the $lookup aggregation pipeline stage.
// The $lookup stage performs a left outer join operation, adding a new array field to the input documents. 
// This new field contains the matching documents from the "joined" collection. 

// Here's how to use $lookup:

db.collection1.aggregate([
  {
    $lookup: {
      from: "collection2",        // The collection to join with
      localField: "fieldInCollection1", // The field from the input documents (collection1)
      foreignField: "fieldInCollection2", // The field from the documents of the "from" collection (collection2)
      as: "joinedData"          // The name of the new array field added to the input documents
    }
  }
])

// Explanation of the parameters:

// from: Specifies the name of the collection in the same database to perform the join with.
// localField: The field from the input documents (the collection you are running the aggregate on) that acts as the join key.
// foreignField: The field from the documents in the from collection that acts as the join key.
// as: The name of the new array field that will be added to the input documents. This array will contain the matching documents from the from collection. If no matches are found, the array will be empty.


// Example:
// Suppose you have a users collection and an orders collection. You want to find all users and their associated orders.

// users collection:

{ "_id": 1, "name": "Alice", "email": "alice@example.com" }
{ "_id": 2, "name": "Bob", "email": "bob@example.com" }

// orders collection:


{ "_id": 101, "userId": 1, "product": "Laptop" }
{ "_id": 102, "userId": 1, "product": "Mouse" }
{ "_id": 103, "userId": 2, "product": "Keyboard" }

// To join these collections:

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  }
])

// This aggregation would return documents like:


{
  "_id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "userOrders": [
    { "_id": 101, "userId": 1, "product": "Laptop" },
    { "_id": 102, "userId": 1, "product": "Mouse" }
  ]
}
{
  "_id": 2,
  "name": "Bob",
  "email": "bob@example.com",
  "userOrders": [
    { "_id": 103, "userId": 2, "product": "Keyboard" }
  ]
}

// Important Considerations:

// Data Modeling: While $lookup allows for joins, MongoDB's strength lies in its document model. Often, embedding related data directly within documents (e.g., embedding orders within a user document if orders are always accessed with users) is more efficient and aligned with the database's design principles.
// Performance: Extensive use of $lookup can impact performance, especially on large collections or with complex join conditions. Consider indexing the localField and foreignField for better performance.
// Other Aggregation Stages: $lookup is typically used as part of a larger aggregation pipeline, often combined with stages like $match, $project, $unwind, etc., to further filter, shape, or process the joined data.

// ----------- how to achive indexing in mongodb --------

Indexing is crucial for optimizing query performance in both MongoDB and PostgreSQL. While the underlying mechanisms differ, the goal remains the same: to enable faster data retrieval.
MongoDB Indexing
MongoDB uses a dynamic indexing scheme, allowing indexes on any field. The _id field has a unique index created by default.
Creating Indexes:
Single Field Index.
JavaScript

    db.collection.createIndex({ fieldName: 1 }); // 1 for ascending, -1 for descending
Compound Index: For queries involving multiple fields.
JavaScript

    db.collection.createIndex({ field1: 1, field2: -1 });
Other Index Types: MongoDB supports various specialized indexes like multikey (for array fields), geospatial, text, hashed, and wildcard indexes.
Example:
To create an ascending index on the name field in a users collection:
JavaScript

db.users.createIndex({ name: 1 });
PostgreSQL Indexing
PostgreSQL utilizes a static indexing scheme, requiring indexes to be created on predefined fields within a table.
Creating Indexes:
B-tree Index (most common).
Code

    CREATE INDEX index_name ON table_name (column_name);
Compound Index.
Code

    CREATE INDEX index_name ON table_name (column1, column2);
Unique Index: Ensures all values in the indexed column(s) are unique.
Code

    CREATE UNIQUE INDEX index_name ON table_name (column_name);
Other Index Types: PostgreSQL offers specialized indexes like Hash, GiST, SP-GiST, GIN, and BRIN for specific use cases (e.g., full-text search, geospatial data).
Example:
To create an index on the email column of a customers table:
Code

CREATE INDEX idx_customer_email ON customers (email);
Considerations for both:
Selectivity: Index fields that have high selectivity (many distinct values).
Query Patterns: Create indexes that align with your most frequent query patterns (e.g., fields used in WHERE clauses, ORDER BY, JOIN conditions).
Index Size and Maintenance: Indexes consume storage space and require maintenance during data modifications (inserts, updates, deletes), which can impact write performance.
Analyze Query Plans: Use tools like explain() in MongoDB or EXPLAIN in PostgreSQL to understand how queries are executed and identify opportunities for index optimization.























