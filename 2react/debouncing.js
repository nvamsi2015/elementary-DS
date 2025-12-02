// ============== Debouncing ===============

Debouncing in React is a technique used to delay the execution of a function until a certain amount of time has passed since the last time the function was called. 
This is particularly useful for optimizing performance in scenarios like search inputs where you only want to make an API call after the user has stopped typing. 

The most effective way to implement debouncing in modern React is by using a custom useDebounce hook or leveraging existing libraries like Lodash with useCallback or useMemo. 

Custom useDebounce Hook Example
A reusable custom hook provides the cleanest implementation, separating the debouncing logic from your main component logic. 

// -------------- useDebounce.js-------------
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the value changes again
    // or if the component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
};

export default useDebounce;

// -------------Usage Example in App. ----------
// This example uses the useDebounce hook to perform a hypothetical search operation only after the user has paused typing for 500ms. 


import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  // Effect to perform the action (e.g., API call) when the debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      // This is where you would make your API call
      console.log('Performing search for:', debouncedSearchTerm);
      // fetchData(debouncedSearchTerm); // Example API call
    }
  }, [debouncedSearchTerm]); // Only runs when the debounced value changes

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Debounced Search Example</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <p>
        **Live Input:** {searchTerm}
      </p>
      <p>
        **Debounced Value (API triggered for this):** {debouncedSearchTerm}
      </p>
    </div>
  );
}

export default App;


// -------------- Alternative: Using Lodash Library

// For complex scenarios, you can use the reliable and feature-rich Lodash library. You wrap the debounced function in useCallback to ensure the function identity is stable across re-renders. 
// First, install Lodash: npm install lodash 
// Something went wrong with this response.