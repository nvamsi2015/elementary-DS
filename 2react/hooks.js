


// ------------ useReducer:
// Use: An alternative to useState for more complex state logic, 
// especially when state transitions involve multiple sub-values or the next state depends on the previous one. 

// It takes a reducer function and an initial state, returning the current state and a dispatch function.

    import React, { useReducer } from 'react';

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
        }
    }

    function CounterWithReducer() {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
        );
    }
// ------------------------------

const[state,dispatch] = useReducer(reducer, initialState)

dispatch({type:'increment'})

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default:
            throw new Error()
    }
}

    // ----------- useCallback:
// Use: Memoizes a callback function, preventing unnecessary re-renders of child components that receive the callback as a prop. 
// It returns a memoized version of the callback that only changes if one of its dependencies has changed.

import React, { useState, useCallback } from 'react';

// ChildComponent is wrapped in React.memo to prevent re-renders unless its props change.

const ChildComponent = React.memo(({ onClick, text }) => {
  console.log('ChildComponent rendered');
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  // Without useCallback, 'handleClick' would be a new function on every render,
  // causing ChildComponent to re-render even if 'theme' changes.
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this function is created only once

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []); // Empty dependency array means this function is created only once

  return (
    <div style={{ backgroundColor: theme === 'light' ? 'white' : 'grey', color: theme === 'light' ? 'grey' : 'white' }}>
      <h1>useCallback Example</h1>
      <ChildComponent onClick={handleClick} text={`Count: ${count}`} />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ParentComponent;
// ---------------------------------------------
const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);



  const handleClick = useCallback(()=>{
    setCount(prevCount => prevCount + 1);
  }, [])


// --------- useMemo:
// Use: Memoizes a computed value, preventing expensive calculations on every render. 
// It returns a memoized value that only recomputes if one of its dependencies has changed.


import React, { useMemo } from 'react';

const memoizedValue = useMemo(() => {
  // Expensive calculation or computation
  return computeExpensiveValue(dependency1, dependency2);
}, [dependency1, dependency2]); // Dependency array

// When to Use useMemo
// You should use useMemo for:
// Computationally expensive calculations: Tasks like filtering or sorting large arrays, or complex math problems that can slow down performance on every render.
// Maintaining object/array reference equality: When passing non-primitive values (objects, arrays) as props to a memoized child component (using React.memo), useMemo ensures the reference remains the same, preventing unnecessary re-renders of the child.
// Dependencies of other hooks: To ensure a value used as a dependency in useEffect or useCallback remains stable, preventing those hooks from running unnecessarily. 


//---------------- useRef:
// Use: Provides a way to access the underlying DOM elements or to persist mutable values across renders without causing re-renders.

import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Initialize with null

  useEffect(() => {
    // Access the DOM element using .current after the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array ensures this runs once after initial mount

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I will be focused" />
      <button onClick={() => inputRef.current.focus()}>Focus Input Manually</button>
    </div>
  );
}

export default FocusInput;

// --------
const inputRef = useRef(null) 

<input ref = {inputRef} type = 'text' placeholder = 'i will be focused' />
<button onclick = {()=> inputRef.current.focus()}> focus input manually </button>

// --- persisiting a value without rerender -------------

import React, { useRef } from 'react';

function ClickCounter() {
  const clickCountRef = useRef(0); // Initialize with 0

  const handleClick = () => {
    clickCountRef.current += 1; // Mutate the value directly
    console.log(`Button clicked ${clickCountRef.current} times`); // Value is updated in console
    // The component does NOT re-render
  };

  console.log("Component rendered"); // This logs only once on initial render

  return (
    <button onClick={handleClick}>
      Click me (check console)
    </button>
  );
}

export default ClickCounter;


// ---------------------

// Key Uses of useRef
// The primary uses for useRef are:
// Accessing and manipulating DOM elements directly: This is useful for **************** imperative actions like focusing an input field, managing animations, or playing/pausing media.
// Storing mutable values that do not trigger a re-render: Unlike state, updating the .current value of a ref does not cause a component to re-render,
// making it suitable for storing values like timer IDs, previous state/props, or cached results of expensive computations. 



// ================== custome hooks =========================


