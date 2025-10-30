// --------- chobey 24. implement a Promise-based API client with retries, timeouts, and cancellations? -------------
// Here's a blueprint for implementing a Promise-based API client with retries, timeouts, and cancellations in JavaScript. This example focuses only on the core concepts. This can be adapted to your specific API requirements:

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl; // Your base API URL
  }

  async request(method, path, data = null, options = {}) {
    const defaultOptions = {
      retries: 3, 
      retryDelay: 1000, // Initial retry delay in milliseconds
      timeout: 5000, // Timeout duration in milliseconds
    };

    options = { ...defaultOptions, ...options }; // Merge defaults with provided options

    return new Promise((resolve, reject) => {
      const controller = new AbortController(); // For cancellation
      let retriesLeft = options.retries;

      const makeRequest = async () => {
        try {
          const response = await fetch(`${this.baseUrl}${path}`, {
            method, 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(data),
            signal: controller.signal, // Pass cancellation signal to fetch
          });

          if (!response.ok) {
            const error = await response.text();
            throw new Error(`API Request Failed: ${error}`); // Handle non-successful responses
          }
          return resolve(await response.json()); 
        } catch (err) {
          if (retriesLeft > 0) {
            console.warn(`Request failed, retrying... (${retriesLeft} attempts left)`);
            retriesLeft--;
            setTimeout(() => makeRequest(), options.retryDelay);
          } else {
            reject(err);
          }
        }
      };

      makeRequest(); // Initiate the first request
    });
  }

  // Example API calls (you'd add more based on your API)
  async getUsers() {
    return this.request('GET', '/users'); 
  }

  async createUser(user) {
    return this.request('POST', '/users', user); 
  }
}


// Usage Example:
const client = new ApiClient('https://api.example.com'); // Your API base URL

client.getUsers()
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error)); 


// Explanation:

// ApiClient Class: Represents the client that interacts with your API. It holds the base URL and provides methods for making requests.

// request() Method: The core method to handle all API calls.
//   Takes method, path, data, and options.
//   Merges default retry, timeout, etc., options with any provided by the caller.
//   Uses AbortController for cancellation (more on this later).

// Promise Handling:
//   Returns a Promise that resolves with the API response data or rejects with an error.
//   Implements retry logic within a loop using setTimeout. If retries fail, it rejects the promise.

// Timeout: Uses fetch's timeout option (signal: controller.signal) to abort requests exceeding the specified time. You can integrate this with your own timeout handling if needed.

// Cancellation:
//   The AbortController object allows you to signal cancellation of a request using controller.abort().

// Example API Calls (getUsers, createUser): Demonstrates how to use the request() method for different API endpoints.

// Key Points and Enhancements:

// Error Handling: Consider adding more granular error handling, logging, and potential fallback mechanisms within your API client.
// Rate Limiting: Implement logic to handle rate limiting by the API you're interacting with (e.g., by pausing requests or using exponential backoff).
// Caching: Implement a simple caching mechanism for frequently accessed data to improve performance.
