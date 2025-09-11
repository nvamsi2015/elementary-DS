# ------------ sqs queue, how you send messages and who process it? ----------------

# In AWS SQS, producers (your applications) send messages to the queue using the sendMessage API call. Consumers (other applications or services) process these messages by calling the receiveMessage API call. The SQS service holds messages in the queue until a consumer successfully processes and deletes them, ensuring reliable message delivery and decoupling between services. 
# How Messages Are Sent (Producers)
# Integrate AWS SDK: Your application needs to use an AWS SDK (like Java, Node.js, etc.) to interact with SQS. 
# Configure SQS Client: Initialize the SQS client with the correct AWS region and credentials. 
# Specify Queue URL: Provide the unique URL of your SQS queue. 
# Call sendMessage: Use the sendMessage method, passing the queue URL and the message content (the message body). 
# FIFO Queues: For FIFO (First-In-First-Out) queues, you also need to provide a message group ID and a message deduplication ID to ensure ordered delivery and prevent duplicates. 
# Process the Response: The sendMessage call returns a response containing details like the message ID upon successful sending. 

# Who Processes Messages (Consumers)
# 1. Integrate AWS SDK:
# Consumer applications also use the AWS SDK to communicate with SQS. 
# 2. Call receiveMessage:
# Consumers use the receiveMessage API call to request messages from the queue. 
# 3. Poll for Messages:
# By repeatedly calling receiveMessage, consumers "poll" the queue for available messages. 
# 4. Process the Message:
# Once a message is received, the consumer's application can read the message body and perform the necessary processing. 
# 5. Delete the Message:
# After successfully processing the message, the consumer must delete the message from the queue. This prevents the message from being received again and ensures exactly-once processing (in FIFO queues) or at-least-once processing (in standard queues). 

# How It Works Together
# Decoupling:
# SQS acts as a buffer, decoupling the sender (producer) from the receiver (consumer). The producer doesn't need to know about the consumer, and vice versa. 
# Reliable Delivery:
# Messages are stored in the queue until a consumer successfully deletes them, even if the consumer is temporarily unavailable. 
# Scalability:
# SQS automatically scales to handle large volumes of messages, making it suitable for large-scale applications. 

#------------- if message1,2,3,4 come in queue will everything go in same order in sqs

# Whether messages received from an Amazon SQS queue will be in the same order they were sent depends on the type of SQS queue utilized.
# Standard Queues:
# Standard SQS queues offer a "best-effort" approach to message ordering. While they generally attempt to preserve the order of messages, receiving messages in the exact order they were sent is not guaranteed. This is due to the highly distributed nature of standard queues, which prioritize high throughput and availability over strict ordering.
# FIFO (First-In-First-Out) Queues:
# FIFO queues are designed to ensure strict message ordering. If messages 1, 2, 3, and 4 are sent to a FIFO queue, they will be received and processed in that exact sequence. This guarantee applies within a specific Message Group ID. If multiple producers or threads send messages with the same Message Group ID, SQS ensures they are stored and processed in the order they arrive within that group. To maintain strict ordering across multiple producers, it is recommended to assign a unique Message Group ID for all messages from each producer. 

# ---------- what is wevent bridges and how it works? -----------------

# Amazon EventBridge is a serverless event bus that helps you build event-driven architectures by connecting applications and AWS services using events. It acts as a router, receiving events from various sources like other AWS services, your own applications, and SaaS applications. EventBridge then applies rules to route these events to specified targets, such as AWS Lambda or Amazon SNS, allowing different components of your system to react to data changes in real-time without direct coupling.  
# Key Concepts
# Event-Driven Architecture:
# A software design pattern where applications communicate by emitting and responding to events, promoting loose coupling and scalability. 
# Event Producers:
# The source that generates events, such as an AWS service like S3, or a custom application. 
# Event Bus:
# The central component that receives events from producers and routes them to appropriate consumers. 
# Event Consumers/Targets:
# Services that listen to events from the event bus and perform actions based on them, like AWS Lambda or Amazon SQS. 
# Rules:
# Define patterns to filter events and specify which targets should receive them. 
# How It Works
# 1. Event Source:
# An action happens in an AWS service, your application, or a third-party SaaS application. 
# 2. Event Production:
# The event source publishes an event, which is a JSON object detailing the action, to EventBridge. 
# 3. Event Bus:
# The event bus receives and processes the event. 
# 4. Rule-Based Routing:
# EventBridge applies rules to the incoming event, which use event patterns to match specific events of interest. 
# 5. Target Invocation:
# If a rule matches, EventBridge sends the event to the defined targets, triggering actions or services. 
# Key Features
# Serverless:
# EventBridge is a fully managed service, eliminating the need to provision or manage servers. 
# Real-time Data Streaming:
# Provides access to real-time data from various sources. 
# Event Filtering & Transformation:
# Rules allow you to filter events based on criteria and even transform the event data before sending it to targets. 
# EventBridge Pipes:
# A feature that simplifies point-to-point integrations between event producers and consumers without writing code. 
# EventBridge Scheduler:
# A serverless scheduler to create, run, and manage scheduled tasks that invoke AWS services. 
# Archive and Replay:
# You can archive events for debugging or replaying them later to recover from failures or build new application states

# --------- example of evernt bridges

# Amazon EventBridge is a serverless event bus that connects applications and services in an event-driven architecture, allowing them to communicate by sending and receiving events without direct integration. An example scenario is a user uploading a photo to an Amazon S3 bucket, which triggers an EventBridge event. EventBridge then routes this event to an AWS Lambda function that resizes the image, stores it in another S3 bucket, and sends a notification via Amazon SNS to the user about the processed image. 
# Key Components and How They Work
# Event Sources:
# These are the systems that generate events, such as AWS services (like S3), your own custom applications, or third-party SaaS applications. 
# Event Buses:
# The central routers that receive events and deliver them to zero or more targets based on rules. 
# Rules:
# Filters that determine which events are sent to which targets. You define event patterns in rules to match specific events. 
# Targets:
# The services that receive and process the events, such as AWS Lambda functions, Amazon SNS topics, or Amazon SQS queues. 
# Example Scenario: Image Processing
# Event Source: You upload an image file to an Amazon S3 bucket. 
# Event Production: S3 generates an "object created" event and sends it to the default EventBridge event bus. 
# Event Bridge Rule: A predefined EventBridge rule looks for "object created" events in that S3 bucket. 
# Event Target: The rule's target is an AWS Lambda function. 
# Target Action: The Lambda function receives the event, which includes details about the new image. It then resizes the image and stores it in a different S3 bucket. 
# Further Notifications: The Lambda function can then trigger another event or send a message to Amazon SNS to inform the user that their image has been successfully processed and is ready. 
# Benefits
# Decoupling:
# Components don't need to know about each other, making systems more modular and easier to maintain. 
# Scalability:
# Applications can scale independently as they only react to events they are interested in. 
# Real-time Processing:
# Events are processed in near real-time, enabling applications to react quickly to changes. 
# What Is Amazon EventBridge? - Amazon EventBridge
# EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build...

# ------------ what is the difference between sqs and event bridges

# -------------- what is difference between sqs and sns ----------

#----------- what is the use of secret manger, -------------


#-------------- how do you roll back from previous deployment in ci cd pipeline ------------