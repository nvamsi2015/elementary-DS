// Caching in a React application can be implemented at multiple levels, including 
// 1.component-level memoization, 
// 2.data fetching libraries for API responses, 
// 3.browser storage. 
// The approach depends on whether you are working in client-side or server-side components. 


// =================  1. Component-Level Caching (Memoization)
// React provides built-in hooks to prevent unnecessary re-renders or expensive computations within components in the client: 
// React.memo(): A Higher Order Component (HOC) that memoizes a functional component, preventing it from re-rendering unless its props have changed.

import React from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  // Component rendering logic
  return <div>...</div>;
};
// The memoized component will only re-render if prop1 or prop2 change
export default React.memo(MyComponent);


//--------- useMemo(): Caches the result of an expensive computation, only recalculating the value when its dependencies change.

import React, { useMemo } from 'react';

function WeatherReport({ record }) {
  // calculateAvg is only called if 'record' changes
  const avgTemp = useMemo(() => calculateAvg(record), [record]);
  return <div>Average Temperature: {avgTemp}</div>;
}
 
//===========  2. Data Fetching and API Caching
// For fetching and caching asynchronous data (like API calls), dedicated libraries offer robust solutions, handling background refetching, stale data, and error handling automatically. 
// Libraries like TanStack Query (React Query) or SWR: These are the recommended approach for managing server state and caching API data in client-side React applications.
// swr is  lightweight React Hooks library for data fetching that uses the "stale-while-revalidate" caching strategy

// Example using TanStack Query:

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

const fetchData = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/books');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function BooksList() {
  // useQuery handles fetching, caching, and background updates
  const { data, isLoading, isError } = useQuery({
    queryKey: ['books'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

// Wrap your app with QueryClientProvider
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BooksList />
  </QueryClientProvider>
);
 
// ================== 3. Server Components Caching (cache function) 

// In React Server Components (common in frameworks like Next.js), 
// you can use the cache function to memoize data fetching or expensive functions that can be shared across multiple components during a single server request. 

// Example using cache (in a Server Component environment):

//------- utils/data.js (define the cached function here)
import { cache } from 'react';

const calculateProductStats = (product) => {
  // Expensive computation or database call
  console.log(`Calculating stats for ${product.name}`);
  return { ...product, stats: 'some stats' };
};

export const getProductStats = cache(calculateProductStats);

//------------ components/ProductDetails.js (Server Component)
import { getProductStats } from '../utils/data';

async function ProductDetails({ productId }) {
  // First call runs the function and caches the result
  const productStats = await getProductStats(productId); 
  // ... render details ...
}

// -------------components/SalesReport.js (Server Component)
import { getProductStats } from '../utils/data';

async function SalesReport({ productList }) {
  // Subsequent calls with the same productId use the cached result
  const stats = await Promise.all(productList.map(p => getProductStats(p.id))); 
  // ... render report ...
}
// ================== 4. Browser Storage
// For simple data persistence across sessions or page refreshes, you can use localStorage or sessionStorage. 
// Example using localStorage:

import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve from cache on mount
    const cachedName = localStorage.getItem('userName');
    if (cachedName) {
      setUserName(cachedName);
    }
  }, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    // Store in cache on change
    localStorage.setItem('userName', newName);
  };

  return (
    <div>
      <h1>Hello, {userName || 'Stranger'}!</h1>
      <input type="text" value={userName} onChange={handleNameChange} />
    </div>
  );
}

// ========== swr concept ========
// SWR is a lightweight React Hooks library for data fetching that uses the "stale-while-revalidate" caching strategy to ensure a fast, real-time user experience. Developed by Vercel, the company behind Next.js, it is a powerful alternative to manual data fetching with useEffect and useState. 
// 
// The SWR Strategy: "Stale-While-Revalidate"
// The name SWR is derived from an HTTP cache invalidation strategy. This approach works in three steps to balance speed and data freshness: 
// 1.Stale: First, the cached (stale) data is instantly returned to the user, so the UI is immediately responsive and doesn't show an empty loading state for long.
// 2.Revalidate: A fetch request is sent to the server in the background to get the latest data.
// 3.Up-to-date: Once the new data arrives, the cache is updated, and the component re-renders with the fresh information. 

// Key Features and Benefits
// SWR simplifies complex data fetching scenarios with features that are difficult to manage manually: 

// Automatic Revalidation:             SWR automatically refetches data in common scenarios, such as when the window is refocused or the network connection is restored.
// Built-in Caching and Deduplication: It includes an intelligent, global cache that automatically deduplicates multiple requests for the same data, sending only one network request.
// Optimistic UI (Local Mutation):      You can make UI updates instantly (optimistically) and then revalidate with the server in the background, providing a smoother user experience for actions like adding or deleting items.
// Pagination and Infinite Loading:     It offers dedicated hooks like useSWRInfinite to handle complex pagination and infinite scrolling UIs with ease.
// Error Handling and Smart Retries:    SWR provides graceful error handling and smart, exponential backoff retries to help the application recover from temporary network errors. 



// ---------------- 
import useSWR from 'swr';

// A fetcher function that handles the API call
const fetcher = url => fetch(url).then(res => res.json());

function UserProfile() {
  // useSWR accepts a unique key (e.g., the API URL) and the fetcher function
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading....</div>;

  return <div>Hello, {data.name}!</div>;
}












