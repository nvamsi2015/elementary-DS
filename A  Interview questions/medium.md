---

Javascript: 
JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. 
While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.



JavaScript is a 
        - prototype-based, 
        - multi-paradigm, 
        - single-threaded, 
        - dynamic language, 
        - supporting object-oriented, 
        - imperative, and 
        - declarative (e.g. functional programming) styles


JavaScript's dynamic capabilities include runtime 
        - object construction, 
        - variable parameter lists, 
        - function variables, 
        - dynamic script creation (via eval), 
        - object introspection (via for...in and Object utilities), 
        - source-code recovery (JavaScript functions store their source text and can be retrieved through toString()). 

Interpreted vs Compiled Language:

Interpreted Language: Code is executed line-by-line by an interpreter at runtime.
Examples: Python, JavaScript, Ruby.

No separate compilation step.
Easier to debug, more flexible.
Slower execution compared to compiled languages.

Compiled Language: Code is translated into machine code by a compiler before execution.
Examples: C, C++, Go, Rust.

Requires a compilation step to generate an executable.
Faster execution since the code is already in machine language.
Harder to debug, but more efficient for performance-critical applications.
Summary:
Interpreted languages run code directly, line by line, while compiled languages translate code to machine code before running, resulting in faster execution.

Interpreted languages like Python or JavaScript do not convert the entire program to machine code ahead of time. Instead, they use an interpreter program that:

Reads your source code line by line.
Translates each line or statement into machine code or bytecode on the fly.
Executes it immediately.
So, the code is still converted to machine code, but this happens at runtime, one piece at a time, rather than all at once before execution (as in compiled languages).

How does it work?

The interpreter itself is a compiled program written in a low-level language (like C).
When you run a Python or JavaScript program, the interpreter parses your code, translates it to an intermediate form (sometimes bytecode), and then executes it by converting to machine code as needed.

Summary:
Interpreted languages do not skip machine code conversion—they just do it dynamically, as the program runs, rather than ahead of time.


JavaScript is typically interpreted (and JIT-compiled) by engines such as:

V8 (used in Google Chrome and Node.js)
SpiderMonkey (used in Mozilla Firefox)
JavaScriptCore (used in Safari)

Python is interpreted by:

CPython (the standard and most widely used Python interpreter)
Others include PyPy (with JIT compilation), Jython (for Java), and IronPython (for .NET)

Prototype-based

JavaScript uses prototypes instead of classical inheritance (like Java or C++).
Objects can inherit properties and methods directly from other objects (their prototype).
Every object has an internal link to another object called its prototype. When you access a property, JavaScript looks up the prototype chain if it’s not found on the object itself.

Example:

const animal = { eats: true };
const rabbit = Object.create(animal);
console.log(rabbit.eats); // true (inherited from animal)

Multi-paradigm
JavaScript supports multiple programming paradigms:
Object-oriented (using objects and prototypes)
Imperative (step-by-step instructions)
Declarative (describing what to do, not how, e.g., functional programming)
This flexibility allows developers to choose the style that best fits their problem.


Single-threaded
JavaScript code runs in a single thread (one command at a time).
This means only one operation can be performed at a time in the main execution context.
However, JavaScript uses an event loop and asynchronous callbacks (like setTimeout, Promises, async/await) to handle tasks like I/O without blocking the main thread.

Dynamic language
JavaScript is dynamically typed: variable types are determined at runtime, not in advance.
You can assign any type of value to a variable, and change it later.

let x = 5;      // x is a number
x = "hello";    // now x is a string


Supporting object-oriented
JavaScript supports object-oriented programming:
You can create objects, use inheritance (via prototypes), and encapsulate data and behavior.
ES6 introduced class syntax, but it’s still prototype-based under the hood.

Imperative
Imperative programming means giving the computer a sequence of instructions to perform.
JavaScript allows you to write code that tells the computer exactly how to do things, step by step.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

Declarative (e.g., functional programming)
Declarative programming focuses on what you want to do, not how to do it.
JavaScript supports functional programming features:
First-class functions (functions are values)
Higher-order functions (functions that take or return other functions)
Methods like .map(), .filter(), .reduce()

const nums = [1, 2, 3, 4];
const squares = nums.map(x => x * x); // declarative style



Node:
Node.js is an open-source and cross-platform JavaScript runtime environment. 
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. 
A Node.js app runs in a single process, without creating a new thread for every request.
Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, 
like reading from the network, 
accessing a database or the filesystem, 
instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.





This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
- node documentation (https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries. 
- mdn docs (https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)

Expresss: 

Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.
- express documentation (https://expressjs.com/)
Express is the most popular Node.js web framework, and is the underlying library for a number of other popular Node.js frameworks
- mdn docs ( https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)

React:
React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. - react docs
React was developed by Facebook and was used to build Instagram. It's also used by Airbnb, Microsoft, Slack, and others.
ReactJS is an open source JS library for building UI and used for SPA, and it manages the views of web apps. Reactjs can help you to modify your data without reloading of a page. It is a popular library in the market trend because of its scalability & fast performance.
Single Page applications are different from multiple page apps that we see everywhere because the SPA doesn't move into new pages; instead, it will load the pages inline within the same page.

React component Life cycle:
Mounting: constructor(), render(), componentDidMount() 
updating: shouldComponentUpdate(), componentDidUpdate(), and ComponentWillUncomput() 
to fetch data use componentDidUpdate() in class components or useEffect hook in functional component to perform side effects. including data fetching after initial render

React Hooks:
React Hooks are functions that let you access React features like state and lifecycle methods in functional components. Hooks were added to React in version 16.8. They eliminate the need for class components, making code cleaner and easier to maintain.
Redux:

Diff bw useState and useReducer:
useState is suitable for simple state logic, providing a variable and function to update it.
useReducer is better for complex state logic that involves multiple sub-values or when the next state depends of the previous one, as it lets you manage local state of complex components with a reducer function.
state management in SPA's:
can be handled with global state management libraries like Redux or Context API in React applications. These tools help maintain consistency across the applications, making it easier to share state across components and manage changes reactively.

Virtual DOM (VDOM):
The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.
This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.
Since "virtual DOM" is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term "virtual DOM" is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called "fibers" to hold additional information about the component tree. They may also be considered a part of "virtual DOM" implementation in React. - react docs (https://legacy.reactjs.org/docs/faq-internals.html)
- https://refine.dev/blog/react-virtual-dom/#introduction
What is "React Fiber"?
Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM i.e, the ability to split rendering work into chunks and spread it out over multiple frames. Read more.

Is the Shadow DOM the same as the Virtual DOM?
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.
Babel /Traceur: 
es6 is not well supported by most browsers. That's why we need babel/traceur which is javascript compiler that converts the modern javascript to the supported javascript. - learnersbucket 2018
True shaping in webpack:
is a process used in modern build tools like webpack to eliminate unused code from the final bundle. it improves performance by reducing the size for the js files that browsers need to load, parse and execute, leading to faster page load times.

---

Closure:
a feature where an inner function has access to the outer(enclosing) function's variables
Diff bw .then() and async-await in handling async operations in js:
.then() is used with promises for async operations, chaining multiple calls for sequential execution.
async await makes async code look synchronous and is syntactic sugar over promises, improving readability and error handling

Responsive Design: 
to implement RD across various devices utilize css media queries to apply different styles based on device characteristics like width, height, or orientation.
employ a fluid grid layout and use relative units (em, rem, %) instead of pixels to ensure element scale proportionally
Frontend performance Optimizations:
optimization strategies include 
- minimizing and compressing assets (CSS, javascript, images)
- implementing lazy loading for images and components
- using CDN for static assets
- optimizing css selectors
-leveraging browser caching.

Web Accessibility(a11y):
To ensure web accessibility, follow WCAG guidelines and 
use semantic HTML elements for structure, 
ARIA roles for enhanced semantics, 
ensure keyboard navigability, 
provide alt text for images, 
and ensure contrast rations are sufficient for readability.
Testing with screen readers and using accessibility audit tools can help identify and address issues.
Progessive Web Apps(pwa):
what makes a web application pwa is using modern web technologies to provide a fast, reliable and engaging user experience. key features include
- ability to work offline
- receive push notifications
- access to hardware features which can improve engagement and performance in mobile devices
Web Performance Metrics:
First contentful paint(FCP) 
Largest contentful paint(LCP)
Time to interactive(TTI)
Speed index
Cumulative layout shift(CLS)
First input delay(FID)

these metrics help understand the loading experience, interactivity and visual stability of a page.

Security in Frontend Applications:
implement content security policy(CSP)
sanitize user input to prevent XSS attacks
use HTTPS for secure communication
store sensitive data securely
keep dependencies up to date to avoid vulnerabilities.

Fronend Testing Strategies:
Effective frontend testing strategies include 
- unit testing with jest
- integration testing with React Testing library
- end to end testing with cypress or selenium
Each testing type targets different aspects of the application, from individual functions and components to integrated workflows and full user experiance.

Implementing Dark Mode:
To implement dark mode, use CSS custom properties(variables) for color schemes and media queries(prefers-color scheme) to detect system theme preferences.
provide toggle option for users to switch manually, storing their preference locally to persists across sessions.

SPA SEO challenges:
 - struggle with SEO as content is dynamically loaded, making it hard for search crawlers to index.
- solution include SSR, using history API to update URL''s for different views, and leveraging pre-rendering services or static site generators.

SSR vs CSR:
CSR renders pages directly in the browser using js, leading to faster subsequent page loads and a smoother user experience.
SSR generates HTML on the server and sends it to the client, improving initial load times and SEO. 
use CSR for dynamic, app like experiences and SSR for static sites or when SEO is a priority
Event delegation in Js:
ED is a technique where instead of adding an event listener to all the child elements, you add a single event listener to a parent element. it leverages the event bubbling phase to catch events from child elements. 
Advantages include reduced memory usage ( fewer event listeners) and dynamically handling events from elements added after the initial page load

CSS box model and its properties effects on layout:
css box model consits of 4 areas:
1. content
2.padding
3. border
4.margin
these layers affect the total size and spacing of the element on the page.
understanding this model is crucial for precise layout control, and it determines how elements are sized and how they interact with each other in the document flow.
css flexbox vs Grid:
Flexbox is one dimensional layout method ideal for arranging items in a single row or column, offering control over alignment and spacing. 
Grid is 2d layout system, perfect for creating complex layouts and aligning content within rows and columns. 
use Flexbox for simpler, linear layouts and Grid for more complex, multi-dimensional layouts.
CORS - cross origin resouse sharing:
cors is a security feature that restricts web applications from making requests to a domain different from the one which served the web pages. To handle it, configure the server to include CORS headers like Access-Contorl-Allow_Origin in the response, specifying which domains are allowed to access the resources.