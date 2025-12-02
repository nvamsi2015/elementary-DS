// Accessing the browser's window object in a React component is the same as in any standard JavaScript environment, as it is a globally available object. 
// However, the primary challenge in React (especially with server-side rendering frameworks like Next.js) is ensuring the code runs only in the client-side browser environment where the window object is defined, and not during the server-side rendering process. 


// Basic Access
// You can directly reference window in your component code.



import React from 'react';

function WindowSizeComponent() {
  // Directly access window properties
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return (
    <div>
      <p>Window Inner Width: {viewportWidth}px</p>
      <p>Window Inner Height: {viewportHeight}px</p>
    </div>
  );
}

export default WindowSizeComponent;


// Accessing window Safely (Server-Side Rendering Compatible)
// For applications that use server-side rendering (SSR), accessing window directly during the initial render will cause a "window is not defined" error. The solution is to access it within a lifecycle method (like useEffect) that only runs on the client after the component has mounted. 


import React, { useState, useEffect } from 'react';

function SafeWindowAccessComponent() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // This code only runs in the browser environment after mounting
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Add event listener for dynamic updates
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div>
      <p>Current Window Width: {windowWidth}px</p>
      <button onClick={() => window.open('
// ------------------

// https://react.dev/




https://react.dev/</div>


// ----------------------

', '_blank')}>
        Open React Docs in new window
      </button>
    </div>
  );
}

export default SafeWindowAccessComponent;

// ------------------------

This example uses useEffect to safely interact with window functionalities like window.addEventListener and window.open. 
A Type-Safe Approach (TypeScript)
To prevent linting errors and ensure type safety in TypeScript, you can check for the existence of window before use, which is a robust way to handle both client-side and server-side contexts. 



const getWindowLocation = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return 'Not available on server side';
};


// ----------------------------