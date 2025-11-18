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

    // ----------- useCallback:
// Use: Memoizes a callback function, preventing unnecessary re-renders of child components that receive the callback as a prop. 
// It returns a memoized version of the callback that only changes if one of its dependencies has changed.


// --------- useMemo:
// Use: Memoizes a computed value, preventing expensive calculations on every render. 
// It returns a memoized value that only recomputes if one of its dependencies has changed.

// useRef:
// Use: Provides a way to access the underlying DOM elements or to persist mutable values across renders without causing re-renders.


