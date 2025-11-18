// next features 


// Pre-rendering: Pages can be rendered on the server (SSR) or per-rendered at build time (SSG) for faster load and better SEO.
// Routing: File-based routing automatically maps pages to URLs.
// API Routes: Allows backend functionality within the application. Each file inside pages/api/ automatically becomes an API endpoint.
// Automatic Code Splitting: Loads only the necessary JavaScript for each page, improving performance.


// Optimized Builds: Bundling, minification, and image optimization happen out-of-the-box.
// Easy Deployment: Supports multiple deployment options like static site hosting and serverless functions, simplifying the release process.

// ========== what is hydration ============
 consistency between the server and client-side renders
 Attaching event handlers: to the DOM elements, making the page interactive and allowing for client-side state management and dynamic behavior.
hydration bridges the gap between the performance benefits of server-side rendering and the interactivity of a client-side React application. 
It transforms a static, viewable page into a fully functional and responsive web application.

// In Next.js, hydration is the process where client-side JavaScript, specifically React, takes over the static HTML that was initially sent from the server and makes it interactive.
// ======= what is diff b/w csr, ssr, ssg =============

ssr:
// on the fly html generation
// Server-Side Processing: The server executes the JavaScript code, fetches data if needed, and renders the complete HTML.
// Sending Rendered HTML to Client: The fully rendered HTML, along with necessary CSS and JavaScript, is sent to the browser.

// Client-Side Hydration: Once the HTML is received, JavaScript runs to enable interactive elements on the client.


// =========== what are server actions =============

// =========== next navigation ===============

// ============ what is the use of orm ============


// =========== diff between getStaticProps and getServerSideProps =============
// getServerSideProps

Use getServerSideProps to fetch data on the server and pass it as props to the page component. 
Returns an object with a props key.
Handles errors during each request.
Tends to be slower due to on-the-fly data fetching on each request.


// getStaticProps
Errors during data fetching result in a build-time error.
Returns an object with a props key, but may also include a revalidate key for incremental static regeneration.

// ========= How do you pass data between pages in a Next.js application?

// URL Query Parameters: Send data through the URL and access it via the useRouter hook.
// Router API: Use Next.js routing to programmatically navigate and pass state.
// State Management Libraries: Use tools like Redux or React Context to share data across pages.
// Server-Side Data Fetching: Use getServerSideProps to fetch data on the server and pass it as props to the page component.


// =========== getStaticPaths ==========
Runs at build time to create a list of possible dynamic values.
The generated paths are used to pre-render static pages for each dynamic value.
Commonly used with getStaticProps to fetch data for each dynamic route.

// ========== code splitting in Next.js
eatures provided by webpack. This functionality allows us to divide our code into multiple bundles, which can be loaded either on-demand or in parallel. Its primary purpose is to create smaller bundles and enables us to manage the prioritization of resource loading, ultimately contributing significantly to improved load times.



// ========= react vs next ==========
facebook vs vercel
library vs framework based on Node.js and babel 
csr vs ssr and ssg 
no out of box optimzations vs built in image optimzation, ssr, automatic static optimizations 
requries extra confi of seo optimization vs better seo and faster loads

// The public folder stores static assets that are served directly to the browser without processing. It’s ideal for images, fonts, icons, and other static files.


// ============ 15.How do you deploy a Next.js application?
Vercel : Native platform for Next.js, supporting SSR, SSG, and API routes out-of-the-box.
Static Export: Use next build and next export to generate static HTML for hosting on static site providers (Netlify, GitHub Pages).
Custom Node.js Server: Deploy with next start on servers like AWS, DigitalOcean, or Heroku.
Docker: Containerize the app for deployment on Kubernetes, AWS ECS, or other container platforms.
Environment Variables: Set proper environment variables for production (API keys, database URLs).
CDN & Caching: Use CDNs to improve global performance for static assets.








Encapsulation: Bundles data and methods within a class, hiding internal details from outside access.
Abstraction: Hides complex implementation details and exposes only necessary functionality.
Inheritance: Allows a new class to inherit properties and methods from an existing class.
Polymorphism: Enables a single interface to represent different behaviors.

abstraction : __account_number and __balance are "private" attributes (indicated by the double underscore). They cannot be directly accessed from outside the class, promoting data hiding. Access and modification are controlled through methods like deposit(), withdraw(), and get_balance().
