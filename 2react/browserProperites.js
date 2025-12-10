
// https://developer.mozilla.org/en-US/docs/Web/API/Window gives detailed list of properites and methods 

// window Key Methods

window.alert(), window.confirm(), window.prompt() // Display dialog boxes for user interaction. alert() shows a message, confirm() asks for confirmation (returns true or false), and prompt() asks for user input.
window.open()   // Opens a new browser window or tab with a specified URL.
window.close()  // Closes the current window.
window.setTimeout() , window.setInterval() // Execute a function or evaluate an expression after a specified time interval or repeatedly at specified intervals, respectively.
window.clearTimeout() , window.clearInterval() // Stop timers set by setTimeout() and setInterval().
window.scrollTo() , window.scrollBy() // Allow scrolling the document to a specific position or by a specified amount of pixels.
window.addEventListener() // Attaches an event handler to the window, allowing developers to react to events like resize, scroll, or load.
window.fetch() // While not strictly a BOM(browser object model) method (it's part of the global scope, which is the window in browsers), it's a critical method for making network requests (e.g., fetching data from a backend API) in modern full-stack applications. 
// These properties and methods are fundamental for creating dynamic, interactive, and responsive user experiences on the client side. 



window.open('www.example.com', '_blank' )
window.addEventListener('resize', handleResize);
window.removeEventListener('resize', handleResize);
typeof window !== 'undefined' // check existance of window before use 


// window Key Properties

window.document  // A property that refers to the Document object, which is the entry point to the HTML Document Object Model (DOM).
window.location  // Contains information about the current URL and handles navigation, allowing manipulation of the address bar.
window.history   // Provides an interface for manipulating browser history, allowing navigation backward and forward through previously visited pages without reloading the entire page.
window.innerHeight
window.innerWidth  // Return the height and width, respectively, of the browser window's content area (viewport) in pixels, essential for responsive design.
window.navigator // Contains information about the browser application, such as the browser name, version, and operating system.
window.screen // Provides information about the user's entire screen, not just the browser window. 

window.navigator.platform // 'Linux x86_64'





// ------------------------


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
// --------------------------------------

// Accessing window Safely (Server-Side Rendering Compatible)
// For applications that use server-side rendering (SSR), accessing window directly during the initial render will cause a "window is not defined" error. 
// The solution is to access it within a lifecycle method (like useEffect) that only runs on the client after the component has mounted. 


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
      <button onClick={() => window.open('example.dev', '_blank')}>
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