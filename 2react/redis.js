// Implementing Redis in a React project requires using a backend server (e.g., Node.js, Go) to handle the Redis interactions, as a client-side React application cannot securely connect directly to a Redis server. 
// The frontend communicates with the backend via API calls or WebSockets. 

// Below is an example using a Node.js backend with an Express server to connect to Redis, and a React frontend to interact with the backend. 

// Prerequisites

Node.js and npm: Make sure these are installed.
Redis Server: You need a running Redis instance. You can run it locally or use Docker.
To run with Docker: docker run -d -p 6379:6379 redis/redis-stack. 


// 1. Set Up the Backend (Node.js/Express) 
This server will expose API endpoints that the React app can call. 
Create a new directory for your project and initialize a Node.js project:

mkdir redis-react-example
cd redis-react-example
mkdir backend
cd backend
npm init -y
Install necessary packages:

npm install express redis cors

Create a file named server.js and add the following code to set up the server and Redis client:

//------------ backend/server.js
const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow React app to make requests

// Connect to the Redis server
const client = redis.createClient({
    url: 'redis://localhost:6379' // Default Redis URL
});

client.on('error', (err) => console.error('Redis Client Error', err));

// Connect the client
(async () => {
    await client.connect();
    console.log('Connected to Redis');
})();

// Route to set a value in Redis
app.post('/api/set-value', async (req, res) => {
    const { key, value } = req.body;
    try {
        await client.set(key, value);
        res.status(200).send(`Key "${key}" set to "${value}"`);
    } catch (error) {
        res.status(500).send('Error setting value in Redis');
    }
});

// Route to get a value from Redis
app.get('/api/get-value/:key', async (req, res) => {
    const { key } = req.params;
    try {
        const value = await client.get(key);
        if (value !== null) {
            res.status(200).json({ key, value });
        } else {
            res.status(404).send('Key not found');
        }
    } catch (error) {
        res.status(500).send('Error getting value from Redis');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Run the backend server:
// node server.js
 
// ------------------- 2. Set Up the Frontend (React) 
// In your main project directory (redis-react-example), create a React app using Create React App or Vite:

// npx create-react-app frontend
// cd frontend
// npm start
// Modify the src/App.js file to interact with the backend API:

//-------------------- frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [fetchedValue, setFetchedValue] = useState(null);
  const [message, setMessage] = useState('');

  const handleSetValue = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/set-value', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, value }),
      });
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage('Error connecting to backend API');
    }
  };

  const handleGetValue = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/get-value/${key}`);
      if (response.ok) {
        const data = await response.json();
        setFetchedValue(data.value);
        setMessage(`Value for key "${data.key}" retrieved`);
      } else {
        setFetchedValue(null);
        setMessage(await response.text());
      }
    } catch (error) {
      setMessage('Error connecting to backend API');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redis Integration Example</h1>
        <div>
          <input
            type="text"
            placeholder="Key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSetValue}>Set in Redis</button>
          <button onClick={handleGetValue}>Get from Redis</button>
        </div>
        <p>Status: {message}</p>
        {fetchedValue !== null && <p>Fetched Value: {fetchedValue}</p>}
      </header>
    </div>
  );
}

export default App;
 
// How it Works
// Backend Runs: The Node.js server connects to the Redis server and listens for HTTP requests on port 5000.
// Frontend Runs: The React app runs in the browser, rendering the UI.
// Interaction: When you type a key and value and click "Set in Redis", the React app makes a POST request to the backend's /api/set-value endpoint.
// Data Flow: The Node.js backend receives the request, uses the redis client library to execute the SET command to store the data in the Redis server, and sends a confirmation back to the frontend.
// Retrieval: Clicking "Get from Redis" sends a GET request to retrieve the value associated with the specified key, which is then displayed in the React UI. 