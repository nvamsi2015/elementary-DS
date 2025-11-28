// Details of Lifecycle Methods

// Mounting Phase
constructor(props): Called first when the component is initialized. Used for initializing state and binding event handlers.
static getDerivedStateFromProps(props, state): Invoked right before calling the render method, both on initial mount and subsequent updates. It allows the component to update its internal state based on changes in props.
render(): The only required method in a class component, it generates the React elements (JSX) to be displayed in the DOM. It must be a pure function (no side effects, no state changes).
componentDidMount(): Invoked immediately after the component is mounted (inserted into the DOM). This is the ideal place to perform side effects like fetching data from an API, setting up subscriptions, or directly interacting with the DOM. 
Updating Phase
static getDerivedStateFromProps(props, state): Called again at the beginning of the update phase, as described above.
shouldComponentUpdate(nextProps, nextState): Used for performance optimization to control whether a component should re-render or not. It returns a boolean value (true by default).
render(): Called again to determine the updated Virtual DOM representation.
getSnapshotBeforeUpdate(prevProps, prevState): Invoked right before the changes are committed to the DOM. It can capture information from the DOM (e.g., scroll position) immediately before it is updated, and the return value is passed as the third argument to componentDidUpdate.
componentDidUpdate(prevProps, prevState, snapshot): Invoked immediately after the updating occurs. This is the place for performing side effects after a state or prop change, such as making network requests (with a conditional check to avoid infinite loops). 
Unmounting Phase
componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed. This is used for essential cleanup tasks, such as invalidating timers, canceling network requests, or removing event listeners to prevent memory leaks. 
Error Handling
static getDerivedStateFromError(error): Renders a fallback UI if an error is thrown by a child component.
componentDidCatch(error, info): Logs error information. 