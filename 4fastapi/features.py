FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.


Fast: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic).

# Dependencies¶

    FastAPI depends on Pydantic and Starlette.

    standard Dependencies¶
    When you install FastAPI with pip install "fastapi[standard]" it comes with the standard group of optional dependencies:

    Used by Pydantic:

        email-validator - for email validation.
    
    Used by Starlette:

        httpx - Required if you want to use the TestClient.
        jinja2 - Required if you want to use the default template configuration.
        python-multipart - Required if you want to support form "parsing", with request.form().
    
    Used by FastAPI:

        uvicorn - for the server that loads and serves your application. This includes uvicorn[standard], which includes some dependencies (e.g. uvloop) needed for high performance serving.
        fastapi-cli[standard] - to provide the fastapi command.
        This includes fastapi-cloud-cli, which allows you to deploy your FastAPI application to FastAPI Cloud.
    
# ----------- installation ---------

pip install "fastapi[standard]"   or pip install fastapi or pip install "fastapi[standard-no-fastapi-cloud-cli]



from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


# FastAPI is a class that inherits directly from Starlette.

# You can use all the Starlette functionality with FastAPI too.

# ============ Starlette is a lightweight ASGI framework/toolkit, which is ideal for building async web services in Python.

# It is production-ready, and gives you the following:

# A lightweight, low-complexity HTTP web framework.
# WebSocket support.
# In-process background tasks.
# Startup and shutdown events.
# Test client built on httpx.
# CORS, GZip, Static Files, Streaming responses.
# Session and Cookie support.
# 100% test coverage.
# 100% type annotated codebase.
# Few hard dependencies.
# Compatible with asyncio and trio backends.
# Great overall performance against independent benchmarks.

pip install starlette

# Dependencies

# Starlette only requires anyio, and the following dependencies are optional:

# httpx - Required if you want to use the TestClient.
# jinja2 - Required if you want to use Jinja2Templates.
# python-multipart - Required if you want to support form parsing, with request.form().
# itsdangerous - Required for SessionMiddleware support.
# pyyaml - Required for SchemaGenerator support.
# You can install all of these with pip install starlette[full]

# You'll also want to install an ASGI server, such as uvicorn, daphne, or hypercorn.

pip install uvicorn


c
from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route


async def homepage(request):
    return JSONResponse({'hello': 'world'})


app = Starlette(debug=True, routes=[
    Route('/', homepage),
])

# ---------------------

# Then run the application...


uvicorn main:app


Framework or Toolkit
Starlette is designed to be used either as a complete framework, or as an ASGI toolkit. You can use any of its components independently.

# -----------
from starlette.responses import PlainTextResponse


async def app(scope, receive, send):
    assert scope['type'] == 'http'
    response = PlainTextResponse('Hello, world!')
    await response(scope, receive, send)



# --------------

Run the app application in main.py:

$ uvicorn main:app
INFO: Started server process [11509]
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)


# Modularity
# The modularity that Starlette is designed on promotes building re-usable components that can be shared between any ASGI framework. This should enable an ecosystem of shared middleware and mountable applications.

# The clean API separation also means it's easier to understand each component in isolation.


# =========== uvicorn ============== 
Starlette and Uvicorn in a FastAPI application are foundational, They handle different layers of the web request process

# ------------ Uvicorn: The ASGI Server
Uvicorn is a lightning-fast ASGI server implementation. An ASGI server is necessary to run any ASGI application (like Starlette or FastAPI).

Uvicorn's Key Roles:
Serving the Application: Uvicorn is the actual server that runs and hosts your FastAPI application, making it accessible over a network (like on http://127.0.0.1:8000).

Protocol Handling: It listens for incoming HTTP requests, handles the low-level network protocol (HTTP/1.1 or HTTP/2), and translates these network events into the standard ASGI format.

Interface Bridge: It acts as the bridge between the client (web browser, API consumer) and your ASGI application (FastAPI, which uses Starlette). 
When a request comes in, Uvicorn receives it and passes it to the Starlette/FastAPI application. When the application generates a response, Uvicorn takes it and sends it back to the client.


Concurrency Management: It often uses the asyncio event loop to efficiently manage a large number of concurrent connections, which contributes significantly to FastAPI's speed.

In short, Uvicorn is the server that receives and sends network traffic, and Starlette (used by FastAPI) is the framework that decides what to do with that traffic (routing, middleware, etc.).


# -----------Starlette: The Framework Core
Starlette is a lightweight ASGI (Asynchronous Server Gateway Interface) web framework/toolkit. FastAPI uses Starlette as its core foundation for handling asynchronous web operations.


Starlette's Key Roles:
# Core HTTP Operations: Handles the basics of an incoming HTTP request, managing requests, responses, and sessions.

# Routing: Provides the underlying system that matches an incoming URL path to the correct function (the path operation function) in your FastAPI code.

# Middleware: Manages the ability to run logic before or after a request is processed (e.g., for CORS, logging, or authentication).

# WebSockets: Offers native support for WebSocket communication.

# Asynchronous Support: Being an ASGI framework, it enables the non-blocking, asynchronous (using async and await) nature of FastAPI, which is key to its high performance.

# FastAPI builds its high-level features (like automatic data validation, dependency injection, and automatic OpenAPI documentation) on top of Starlette's basic web toolkit.

# ========= pydantic ==============

FastAPI builds its high-level features (like automatic data validation, dependency injection, and automatic OpenAPI documentation) on top of Starlette's basic web toolkit.

💾 1. Data Validation and Error Handling (Input)
Pydantic models are used to define the schema (expected structure and types) for the incoming data, typically from the request body (e.g., a JSON payload).

Automatic Validation: When a request is received, FastAPI automatically takes the JSON data and tries to convert it into the corresponding Pydantic model. Pydantic then checks if the data:

Has all the required fields.

Matches the declared data types (e.g., ensuring a field defined as int is a number).

Error Generation: If the data fails validation, Pydantic automatically generates detailed, standardized JSON error messages that FastAPI returns to the client with a 422 Unprocessable Entity status code. This saves you from writing manual validation code.

📝 2. Data Serialization and Documentation (Output)
Pydantic models are also used to define the structure of the data you return from your API functions.

Serialization: When you return a Python object (like a dictionary or a SQLAlchemy model instance), FastAPI uses Pydantic to serialize (convert) that object into a consistent JSON format that matches the defined output schema.

Documentation: FastAPI uses the Pydantic model definitions to automatically generate the OpenAPI schema. This is what powers the interactive documentation (Swagger UI/Redoc) that clearly shows clients what data fields and types they should expect in a response.

⚙️ 3. Type Hinting Integration
FastAPI's syntax is almost entirely based on Python type hints, and Pydantic is built to work seamlessly with them.

Clarity and Autocompletion: By using Pydantic models as the type hint for function parameters, you get excellent code autocompletion in your editor and clear code that indicates exactly what data is being passed around.

📚 4. Settings Management
Pydantic's BaseSettings class is often used in FastAPI projects to handle application configuration.

Environment Variables: It allows you to define your application settings (like database URLs, API keys, etc.) in a class, and Pydantic automatically reads and validates these values from environment variables or a .env file, ensuring your application starts with valid configurations.

In essence, Pydantic is the schema definition layer that provides the strong, automatic data contract necessary for building reliable and well-documented APIs with FastAPI.
    
 # ================== Dependencies (Dependency Injection) 💉
Dependency Injection (DI) is a powerful pattern for sharing logic, database connections, security, and other components across your application.

Depends(): You use fastapi.Depends() to declare a function (the "dependency") that needs to run before your path operation function.

Key Uses:

Authentication/Authorization: Ensuring a user is logged in and has the necessary permissions.

Database Sessions: Creating a database session and closing it after the request is processed.

Reusing Logic: Sharing common validation or data fetching logic between different endpoints.

# ============ Asynchronous Code (async and await) 🔄
FastAPI is designed to be highly performant using asynchronous Python.

ASGI Compatibility: FastAPI, built on Starlette and running on Uvicorn, is an ASGI framework.

I/O Bound Operations: When your code needs to wait for something (like a database query, file reading, or an external API call)—an I/O-bound task—you should use async and await with asynchronous libraries (e.g., asyncpg, httpx). This allows the server to handle other requests while waiting, significantly improving concurrency.

CPU Bound Operations: For operations that use a lot of CPU, FastAPI will automatically run synchronous functions (those without async) in a separate thread pool to prevent blocking the main event loop.
# 

# ============ Asynchronous Code (async and await) 🔄
FastAPI is designed to be highly performant using asynchronous Python.

ASGI Compatibility: FastAPI, built on Starlette and running on Uvicorn, is an ASGI framework.

I/O Bound Operations: When your code needs to wait for something (like a database query, file reading, or an external API call)—an I/O-bound task—you should use async and await with asynchronous libraries (e.g., asyncpg, httpx). This allows the server to handle other requests while waiting, significantly improving concurrency.

CPU Bound Operations: For operations that use a lot of CPU, FastAPI will automatically run synchronous functions (those without async) in a separate thread pool to prevent blocking the main event loop.


# ============ Configuration and Environments ⚙️

While not strictly part of FastAPI, a good backend needs solid configuration management.

Pydantic BaseSettings: This feature from Pydantic allows you to automatically read and validate application settings (like API keys, database URLs) from environment variables or a .env file, keeping sensitive data out of your codebase.



# ============ database and env variables ==============

FastAPI itself is intentionally database-agnostic and does not provide a built-in way to handle database connections. 
Similarly, while it doesn't have a dedicated mechanism for environment variables, it heavily relies on Pydantic for managing both.

Here's how these concepts are typically handled in a production-ready FastAPI application:

# -------------- 1. Database Connections 🗄️
Since FastAPI doesn't enforce a database library, it integrates with modern Python ORM (Object-Relational Mappers) and database drivers.

# ----------- A. Using Dependency Injection
The most critical and idiomatic way to handle database connections is through FastAPI's Dependency Injection system (Depends). This ensures:

Connection Reusability: A fresh database session (or connection) is created for each request and properly closed afterward.

Decoupling: Your path operation functions don't need to worry about opening or closing the connection; they just receive a ready-to-use session.

A common pattern involves a Python generator or asynccontextmanager function that provides the session:

Python

# Example of a dependency function (using a hypothetical ORM)
def get_db():
    db = SessionLocal() # Open the connection/session
    try:
        yield db # Provide the session to the route function
    finally:
        db.close() # Close the session after the request is done
You then inject this into your route:

Python

@app.get("/items/")
def read_items(db: Session = Depends(get_db)):
    # use db here
    pass


# ------------- B. Asynchronous Libraries (Recommended)
To avoid blocking the asynchronous event loop and maximize performance, FastAPI backends typically use asynchronous database libraries, such as:

SQLAlchemy with asyncio drivers (like asyncpg for PostgreSQL).

Alembic for managing database migrations.

Tortoise ORM or SQLModel (built on Pydantic and SQLAlchemy).

# ------------- 2. Environment Variables ⚙️
FastAPI utilizes Pydantic's BaseSettings class to manage configuration and environment variables reliably.

A. Pydantic BaseSettings
You define a configuration class that inherits from pydantic.BaseSettings. Pydantic automatically attempts to read the corresponding values from the environment variables (and optionally, a .env file).

Automatic Loading: If you define a field like database_url: str, Pydantic will look for an environment variable named DATABASE_URL.

Validation: Pydantic ensures the loaded variable is of the correct type (e.g., that port is an int), providing a safe configuration layer before the application starts.

Python

# settings.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str = "default-fallback"
    api_port: int = 8000

    class Config:
        # Pydantic configuration to load variables from a .env file
        env_file = ".env"
        env_file_encoding = 'utf-8'

# app.py
settings = Settings()
# settings.database_url is now safely loaded and validated
B. Accessing Settings
The loaded Settings object (settings in the example above) is then often injected into application components using—you guessed it—Dependency Injection, allowing your routes or services to easily access configuration values without directly reading global environment variables.


# ============ connection to postgres or mongo ==============

Connecting a database like PostgreSQL (relational) or MongoDB (NoSQL) to a FastAPI application involves three main patterns:

Choosing an Asynchronous Driver/ORM

Initializing the Connection (using FastAPI's event handlers)

Managing the Session/Client (using Dependency Injection)

🐘 PostgreSQL Connection (SQLAlchemy/SQLModel)
For PostgreSQL (or any relational database), the standard approach is to use SQLAlchemy (the popular Python ORM) with an asynchronous driver like asyncpg. 
A newer, integrated option is SQLModel, which combines SQLAlchemy and Pydantic.

1. 🛠️ Install Dependencies
Install FastAPI, an ASGI server, the ORM, and the async driver:

Bash

pip install fastapi "uvicorn[standard]" sqlalchemy asyncpg
# OR use SQLModel: pip install sqlmodel "uvicorn[standard]" asyncpg
2. ⚙️ Initialize Engine and Session
You create an async engine and a session maker (typically in a separate database.py file) using your database connection string, which should be loaded from an environment variable (using Pydantic's BaseSettings).

Python

# Example setup
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql+asyncpg://user:password@host/dbname"

engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)
3. 💉 Use Dependency Injection (Depends)
Create a dependency function that yields a database session for each request. The yield keyword ensures the session is properly closed after the request is finished, regardless of whether it succeeded or failed.

Python

from fastapi import Depends
from typing import AsyncGenerator

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency function to get an async database session."""
    async with AsyncSessionLocal() as session:
        yield session

# Inject into a route
from sqlalchemy.ext.asyncio import AsyncSession

@app.get("/items/")
async def read_items(db: AsyncSession = Depends(get_db)):
    # Your database query logic goes here
    # Example: result = await db.execute(select(Item))
    return {"message": "Items fetched"}
🍃 MongoDB Connection (Motor)
For MongoDB, the standard choice is Motor, which is the official asynchronous driver built on top of the synchronous PyMongo driver.

1. 🛠️ Install Dependencies
You'll need motor to handle the asynchronous MongoDB connection:

Bash

pip install fastapi "uvicorn[standard]" motor
2. ⚙️ Initialize and Manage Client Lifecycle
Since MongoDB uses a client connection that stays open, the best practice is to initialize the client when the application starts up and close it when the application shuts down. 
You use FastAPI's lifespan events (or the older @app.on_event) for this.

Python

# database.py
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_DETAILS = "mongodb://localhost:27017"

def get_mongo_client(app):
    app.mongodb_client = AsyncIOMotorClient(MONGO_DETAILS)
    app.mongodb_db = app.mongodb_client.get_database("mydatabase")

def close_mongo_client(app):
    app.mongodb_client.close()

# main.py
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup event
    get_mongo_client(app)
    print("MongoDB connected!")
    yield # Application runs
    # Shutdown event
    close_mongo_client(app)
    print("MongoDB closed!")

app = FastAPI(lifespan=lifespan)
3. 💉 Use Dependency Injection (Depends)
You create a simple dependency to inject the database collection object directly into your route functions.

Python

from fastapi import Request

def get_collection(collection_name: str):
    def _get_collection(request: Request):
        return request.app.mongodb_db[collection_name]
    return Depends(_get_collection)

# Inject into a route
@app.get("/users/")
async def read_users(
    user_collection = get_collection("users")
):
    # user_collection is the Motor collection object
    users = await user_collection.find().to_list(100)
    return users

# =================================

