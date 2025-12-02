//-------- 2 ways vite vs npm  create next-app@latest --------//


// using npm create-next-app@latest 

// comes with app router where each route is a folder inside the app directory, vite provides page based routing by default 

// --------------------- diff bw app router and page router

// app router is more flexible and powerful, allows nested layouts, server components, and better data fetching strategies

// page router is simpler and easier to use for small projects, but lacks some advanced features of app router
// ------------- i created an app router and added pages folder as sibling to app folder and created page1.tsx inside pages folder it did not work -------------

// In the latest Next.js (App Router) projects, routing is handled by the app directory, not the pages directory. Files in the pages folder are ignored unless you specifically configure your project to use the old Pages Router.

// To make /page1 work, move page1.tsx to app/page1/page.tsx.
// The structure should be:

// app/
//   page1/
//     page.tsx


// And export the component as default.


//--------------------- what is the difference between creating a new project with npm create next-app@latest or with vite, give me the commands and benfits and cons of both methods
// Copilot said: Short answer: they target different scopes. "npm
// Short answer: they target different scopes. "npm create next-app@latest" scaffolds a full-featured React framework (Next.js) with built-in routing, SSR/SSG/ISR, API routes and production integrations. "Vite" scaffolds a fast, minimal frontend dev setup (bundler + dev server) you combine with whatever framework or backend you want. Below are exact commands, what each gives you, and pros/cons so you can pick the right tool for your project.

// Commands (examples)

// Next.js (interactive; uses latest create-next-app)

// Create a new Next.js app (interactive prompts): npm create next-app@latest
// Create a new Next.js app with a specific folder name: npm create next-app@latest my-next-app
// After creation: cd my-next-app npm run dev # start dev server npm run build # production build npm run start # start production server (after build)
// Vite (modern dev server + bundler) — React examples:

// Interactive (prompts for template): npm create vite@latest
// With a folder name + React template: npm create vite@latest my-vite-app -- --template react
// With React + TypeScript: npm create vite@latest my-vite-app -- --template react-ts
// After creation: cd my-vite-app npm install # or npm i npm run dev # start dev server (very fast HMR) npm run build # production build npm run preview # preview production build locally
// What you get out of the box

// Next.js (create-next-app)

// File-system based routing (pages/ or app/ directory)
// Server-side rendering (SSR), static generation (SSG), incremental static regeneration (ISR)
// Built-in API routes (serverless endpoints)
// Server Components (app router in recent Next releases)
// Image optimization, middleware, i18n support, analytics helpers
// Opinionated conventions and integrations (Vercel optimizations, presets for Tailwind/TypeScript/ESLint)
// Production-ready defaults for SSR hosting
// Vite

// Extremely fast dev server with near-instant HMR
// Small, minimal starter — just a frontend build pipeline
// Template flexibility (React/Preact/Svelte/Vue/Solid/etc)
// Modern ES module based dev experience
// You choose router, data fetching, server or separate backend — more control but more setup
// Pros and cons — Next.js (create-next-app)

// Pros
// Batteries included: routing, SSR/SSG/ISR, API routes, image optimization, auth patterns
// Great for full-stack React apps, marketing sites, e-commerce, multi-route apps
// Strong conventions speed up development on medium+ projects
// First-class deployment experience on Vercel and good support on other hosts
// Production optimizations and integrated caching strategies
// Cons
// Heavier and more opinionated — more “framework” to learn (app router, server components)
// Local dev can feel slower than Vite’s HMR (although Next is improving with Turbopack)
// More complexity if you only need a simple SPA or library
// Custom build configuration (next.config.js) can be tricky for advanced changes
// Pros and cons — Vite

// Pros
// Blazing-fast dev server and HMR — great for iteration, prototypes, component libraries
// Tiny scaffold: you only get what you need and can add packages incrementally
// Works with many frameworks; flexible and unopinionated
// Simpler mental model if you already have a backend or want a pure frontend SPA
// Cons
// Not full-stack by default: no filesystem routing, SSR, API routes, or image optimizations unless you add them
// You must pick and wire routing, data fetching, authentication, and backend separately
// For SSR or edge functions you need additional tooling/config (e.g., Vite + framework-specific SSR or adapter)
// More decisions to make for production readiness (caching, prerendering, deploy targets)
// When to choose which

// Choose Next.js (create-next-app) when:

// You want built-in SSR/SSG/ISR and API routes.
// You’re building a production web app with SEO needs, dynamic pages, or server-rendered content.
// You prefer convention over configuration and want many features out of the box.
// Choose Vite when:

// You want the fastest possible dev feedback loop (HMR) for SPAs or component libraries.
// You prefer minimal/opinion-free tooling and will connect to a separate backend or add specific tooling yourself.
// You’re prototyping, building UI libraries, or using non-React frameworks.
// Practical notes / tips

// TypeScript: Next.js prompts for TypeScript and can set it up automatically; Vite requires choosing a TS template (react-ts) or adding TypeScript manually.
// Routing: Next.js uses filesystem routing; with Vite you’ll usually add react-router or a framework-specific router.
// SSR: Next.js supports SSR out of the box. Vite supports SSR, but you’ll wire it up yourself (templates and docs exist for React SSR).
// Hosting: Next.js is optimized for Vercel (serverless and edge functions), while Vite-built static sites are trivial to host anywhere static files are served (Netlify, Cloudflare Pages). For SSR with Vite you need a compatible host or adapter.
// Adding a backend/API: With Next.js you can put APIs in the same repo. With Vite you typically run a separate backend or use serverless functions provided by your hosting provider.
// Quick decision checklist

// Need SSR, file-based routing, and server-side APIs in the same repo → Next.js.
// Need fastest dev iteration, small bundle for an SPA or library, or maximal flexibility → Vite.
// Unsure and want both worlds: you can start with Vite for prototyping and migrate to Next.js if/when you need SSR/full-stack features.
// If you want, I can:

// Show exact interactive examples (screenshot of prompts or a step-by-step run).
// Provide a starter command that includes TypeScript + Tailwind for either Next or Vite.
// Help pick templates or set up SSR or an API for a Vite app.



// ------------------  next.js with tailwind basic styling---------
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";


const Home = () =>{
    return (
        // <div className = "h-screen flex flex-col  justify-start border-3 border-red-500">
        //     <div className = 'flex justify-center border-3 border-blue-500' >
        //         <div className='border-3 border-yellow-500'>
        //             <div>
        //                 <Navbar/>
        //             </div>
        //             <div>
        //                 <Dashboard/>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div>
            <Navbar/>
            <Dashboard/>    
        </div>
    )
}

export default Home;



const Navbar = ()=>{
    return (
        <div className='border-2 border-red-300'>
            this is navbar

        </div>
    )
}


export default Navbar;

type Product = {
    id: number;
    title: string;
    price: number;
};

const Dashboard = async () => {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) {
        return <div className="border-2 border-red-200">Failed to load products.</div>;
    }
    const products: Product[] = await res.json();
    return (
        <div className="border-2 border-red-200">
            <h2 className="font-bold mb-2">Fake Store Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <span className="font-semibold">{product.title}</span> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;

// -------- typical server component with fecthing data happening in server and returnin gdata -----------

type Product = {
    id: number;
    title: string;
    price: number;
};

const Dashboard = async () => {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) {
        return <div className="border-2 border-red-200">Failed to load products.</div>;
    }
    const products: Product[] = await res.json();
    return (
        <div className="border-2 border-red-200">
            <h2 className="font-bold mb-2">Fake Store Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <span className="font-semibold">{product.title}</span> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;

// --------- calling fastapi which is getting products from fakestore ---------------
type Product = {
    id: number;
    title: string;
    price: number;
};

const Dashboard = async () => {
    // const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    const res = await fetch('http://localhost:8000/dashboard', { cache: 'no-store' });
    console.log(res)
    if (!res.ok) {
        return <div className="border-2 border-red-200">Failed to load products.</div>;
    }
    const products: Product[] = await res.json();
    return (
        <div className="border-2 border-red-200">
            <h2 className="font-bold mb-2">Fake Store Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <span className="font-semibold">{product.title}</span> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;

// --------main.py --------------
// from fastapi import FastAPI
// import httpx

// app = FastAPI()

// @app.get("/")
// def read_root():
//     return {"message": "Hello, FastAPI!"}

// @app.get('/dashboard')
// async def get_dashboard():
//     print('new request received')
//     async with httpx.AsyncClient() as client:
//         response = await client.get('https://fakestoreapi.com/products')
//         print(response.status_code)
//         data = response.json()
//     return data



// ========== how does next app handle server components and client components efficiently in parent children context, which will the default type of component?

// In Next.js, all components are Server Components by default. Next.js handles server and client components efficiently through a process of rendering orchestration, known as the React Server Component (RSC) Payload, and by using strategic component composition patterns. 
// Efficient Handling in Parent/Child Context
// The efficiency of handling server and client components in a parent-child relationship relies on two main principles:
// Separate Module Graphs and RSC Payload: Next.js maintains two separate module graphs: one for server components and one for client components.
// Server Side: Server components are rendered exclusively on the server into a special data format called the RSC Payload. This payload contains the rendered HTML for server components, plus placeholders and references to the JavaScript files required for client components.
// Client Side: The client receives the initial pre-rendered HTML (for a fast non-interactive view) and the RSC payload. It then uses the JavaScript references to "hydrate" the client components, making the application interactive. This approach minimizes the amount of JavaScript sent to the client, improving initial page load times and performance.
// Composition Pattern (Passing Server Components as Children): The key to efficiently combining both types is by passing server components as children (or other props) to a client component.
// Mechanism: When a server component is passed as a child to a client component, the server component is rendered on the server before the client component is processed on the client. The client component simply renders the static HTML output it receives through its children prop.
// Benefit: This allows large, non-interactive parts of the UI (which can fetch data and have heavy dependencies) to remain on the server, while only the small, interactive "leaf" components are marked as client components and sent to the browser for hydration. This prevents the entire parent tree from becoming a client component, preserving the performance benefits of server-side rendering. 
// Default Component Type
// The default type of component is a Server Component. 
// You must explicitly add the 'use client' directive at the very top of a file to mark it and its imported dependencies as client components when you need to use browser-specific APIs, state, or event handlers (e.g., useState, useEffect, onClick, window object). 
// By defaulting to server components, Next.js encourages developers to keep as much logic and rendering as possible on the server, leading to better performance and reduced client-side JavaScript bundles. More details on when to use each type can be found in the official Next.js documentation. 


// ----- network tab entry --------------

// Request URL:http://localhost:3000/home
// Request Method: GET
// Status Code: 200 OK
// Remote Address: [::1]:3000
// Referrer Policy: strict-origin-when-cross-origin

// --------- response ----------

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="/_next/static/chunks/%5Broot-of-the-server%5D__28bc9c2a._.css" data-precedence="next_static/chunks/[root-of-the-server]__28bc9c2a._.css"/>
        <link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/%5Bturbopack%5D_browser_dev_hmr-client_hmr-client_ts_bae88007._.js"/>
        <script src="/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_9212ccad._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_compiled_next-devtools_index_1dd7fb59.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_7a8122d0._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_%40swc_helpers_cjs_d80fb378._.js" async=""></script>
        <script src="/_next/static/chunks/_a0ff3932._.js" async=""></script>
        <script src="/_next/static/chunks/turbopack-_45210fd5._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_094231d7._.js" async=""></script>
        <script src="/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js" async=""></script>
        <script src="/_next/static/chunks/node_modules_next_dist_client_components_builtin_global-error_78cdd4a3.js" async=""></script>
        <script src="/_next/static/chunks/app_layout_tsx_78cdd4a3._.js" async=""></script>
        <meta name="next-size-adjust" content=""/>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico?favicon.0b3bf435.ico" sizes="256x256" type="image/x-icon"/>
        <script src="/_next/static/chunks/node_modules_next_dist_build_polyfills_polyfill-nomodule.js" noModule=""></script>
    </head>
    <body class="geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable antialiased">
        <div hidden="">
        <!--$-->
        <!--/$-->
        </div>
        <div>
            <div class="border-2 border-red-300">this is navbar</div>
            <div class="border-2 border-red-200">
                <h2 class="font-bold mb-2">Fake Store Products</h2>
                <ul>
                    <li class="mb-2">
                        <span class="font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
                        - $
                        <!-- -->
                        109.95
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Mens Casual Premium Slim Fit T-Shirts </span>
                        - $
                        <!-- -->
                        22.3
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Mens Cotton Jacket</span>
                        - $
                        <!-- -->
                        55.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Mens Casual Slim Fit</span>
                        - $
                        <!-- -->
                        15.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">John Hardy Women &#x27;s Legends Naga Gold &amp;Silver Dragon Station Chain Bracelet</span>
                        - $
                        <!-- -->
                        695
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Solid Gold Petite Micropave </span>
                        - $
                        <!-- -->
                        168
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">White Gold Plated Princess</span>
                        - $
                        <!-- -->
                        9.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Pierced Owl Rose Gold Plated Stainless Steel Double</span>
                        - $
                        <!-- -->
                        10.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">WD 2TB Elements Portable External Hard Drive - USB 3.0 </span>
                        - $
                        <!-- -->
                        64
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</span>
                        - $
                        <!-- -->
                        109
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</span>
                        - $
                        <!-- -->
                        109
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</span>
                        - $
                        <!-- -->
                        114
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</span>
                        - $
                        <!-- -->
                        599
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED </span>
                        - $
                        <!-- -->
                        999.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">BIYLACLESEN Women &#x27;s 3-in-1 Snowboard Jacket Winter Coats</span>
                        - $
                        <!-- -->
                        56.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Lock and Love Women &#x27;s Removable Hooded Faux Leather Moto Biker Jacket</span>
                        - $
                        <!-- -->
                        29.95
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Rain Jacket Women Windbreaker Striped Climbing Raincoats</span>
                        - $
                        <!-- -->
                        39.99
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">MBJ Women &#x27;s Solid Short Sleeve Boat Neck V </span>
                        - $
                        <!-- -->
                        9.85
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">Opna Women &#x27;s Short Sleeve Moisture</span>
                        - $
                        <!-- -->
                        7.95
                    </li>
                    <li class="mb-2">
                        <span class="font-semibold">DANVOUY Womens T Shirt Casual Cotton Short</span>
                        - $
                        <!-- -->
                        12.99
                    </li>
                </ul>
            </div>
        </div>
        <!--$-->
        <!--/$-->
        <script id="_R_">
            self.__next_r = "bCzM88z5CMoU-5gdOt3Ge"
        </script>
        <script src="/_next/static/chunks/%5Bturbopack%5D_browser_dev_hmr-client_hmr-client_ts_bae88007._.js" async=""></script>
        <script>
            (self.__next_f = self.__next_f || []).push([0])
        </script>
        <script>
            self.__next_f.push([1, "7:I[\"[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"SegmentViewNode\"]\n9:\"$Sreact.fragment\"\n19:I[\"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"default\"]\n1b:I[\"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"default\"]\n3b:I[\"[project]/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"OutletBoundary\"]\n3d:\"$Sreact.suspense\"\n46:I[\"[project]/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"ViewportBoundary\"]\n4c:I[\"[project]/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"MetadataBoundary\"]\n51:I[\"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_client_components_builtin_global-error_78cdd4a3.js\"],\"default\"]\n59:I[\"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"IconMark\"]\n:HL[\"/_next/static/chunks/%5Broot-of-the-server%5D__28bc9c2a._.css\",\"style\"]\n:HL[\"/_next/static/media/797e433ab948586e-s.p.dbea232f.woff2\",\"font\",{\"crossOrigin\":\"\",\"type\":\"font/woff2\"}]\n:HL[\"/_next/static/media/caa3a2e1cccd8315-s.p.853070df.woff2\",\"font\",{\"crossOrigin\":\"\",\"type\":\"font/woff2\"}]\n:N1764680859580.0994\n3:\"$EObject.defineProperty(()=\u003e{ctx.componentMod.preloadStyle(fullHref,ctx.renderOpts.crossOrigin,ctx.nonce)},\\\"name\\\",{value:\\\"\\\"})\"\n4:\"$EObject.defineProperty(()=\u003e{ctx.componentMod.preloadFont(href,type,ctx.renderOpts.crossOrigin,ctx.nonce)},\\\"name\\\",{value:\\\"\\\"})\"\n5:\"$EObject.defineProperty(()=\u003e{ctx.componentMod.preloadFont(href,type,ctx.renderOpts.crossOrigin,ctx.nonce)},\\\"name\\\",{value:\\\"\\\"})\"\n2:{\"name\":\"Preloads\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{\"preloadCallbacks\":[\"$3\",\"$4\",\"$5\"]}}\n6:[]\n8:[]\na:[[\"Array.map\",\"\",0,0,0,0,false]]\nb:[[\"Array.map\",\"\",0,0,0,0,false]]\ne:I[\"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"default\"]\n11:I[\"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)\",[\"/_next/static/chunks/node_modules_next_dist_094231d7._.js\",\"/_next/static/chunks/app_favicon_ico_mjs_756560dc._.js\"],\"default\"]\n12:{}\n13:[[\"Function.all\",\"\",0,0,0,0,true]]\n10:{\"children\":[\"$\",\"$L11\",null,\"$12\",null,\"$13\",1]}\n14:[[\"Function.all\",\"\",0,0,0,0,true]]\nf:{\"parallelRouterKey\":\"children\",\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$9\",null,\"$10\",null,\"$14\",0],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$Y\",\"forbidden\":\"$undefined\",\"unauthorized\":\"$undefined\",\"segmentViewBoundaries\":\"$Y\"}\n15:[[\"Function.all\",\"\",0,0,0,0,true]]\nd:{\"name\":\"RootLayout\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{\"children\":[\"$\",\"$Le\",null,\"$f\",null,\"$15\",1],\"params\":\"$Y\"}}\n16:[[\"RootLayout\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__31c4daa8._.js\",79,263,78,1,false]]\n17:[[\"RootLa"])
        </script>
        <script>
            self.__next_f.push([1, "yout\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__31c4daa8._.js\",81,270,78,1,false]]\n18:[[\"Function.all\",\"\",0,0,0,0,true]]\n1a:[[\"Function.all\",\"\",0,0,0,0,true]]\n1c:[]\n1e:{\"name\":\"NotFound\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{}}\n1f:{\"name\":\"HTTPAccessErrorFallback\",\"key\":null,\"env\":\"Server\",\"owner\":\"$1e\",\"stack\":[],\"props\":{\"status\":404,\"message\":\"This page could not be found.\"}}\n20:[]\n21:[]\n22:[]\n23:[]\n24:[]\n25:[]\n26:[]\n27:[[\"Function.all\",\"\",0,0,0,0,true]]\n28:[[\"Function.all\",\"\",0,0,0,0,true]]\n29:[[\"Function.all\",\"\",0,0,0,0,true]]\n2a:[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]]\n2b:[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]]\n2c:[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]]\n2d:[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]]\n2f:{\"name\":\"Home\",\"key\":null,\"env\":\"Server\",\"stack\":[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]],\"props\":{\"params\":\"$@30\",\"searchParams\":\"$@31\"}}\n32:[[\"Home\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",134,256,121,14,false]]\n34:{\"name\":\"Navbar\",\"key\":null,\"env\":\"Server\",\"owner\":\"$2f\",\"stack\":[[\"Home\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",136,264,121,14,false]],\"props\":{}}\n35:[[\"Navbar\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",97,263,96,16,false]]\n37:{\"name\":\"Dashboard\",\"key\":null,\"env\":\"Server\",\"owner\":\"$2f\",\"stack\":[[\"Home\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",141,264,121,14,false]],\"props\":{}}\n39:{\"name\":\"Next.MetadataOutlet\",\"key\":null,\"env\":\"Server\",\"stack\":[[\"Function.all\",\"\",0,0,0,0,true],[\"Function.all\",\"\",0,0,0,0,true]],\"props\":{}}\n3a:[]\n3c:[]\n3f:[]\n"])
        </script>
        <script>
            self.__next_f.push([1, "42:\"$EObject.defineProperty(function(type,config,children){for(var propName,i=2;i\u003carguments.length;i++)validateChildKeys(arguments[i]);i={};var key=null;if(null!=config)for(propName in didWarnAboutOldJSXRuntime||!(\\\"__self\\\"in config)||\\\"key\\\"in config||(didWarnAboutOldJSXRuntime=!0,console.warn(\\\"Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform\\\")),hasValidKey(config)\u0026\u0026(checkKeyStringCoercion(config.key),key=\\\"\\\"+config.key),config)hasOwnProperty.call(config,propName)\u0026\u0026\\\"key\\\"!==propName\u0026\u0026\\\"__self\\\"!==propName\u0026\u0026\\\"__source\\\"!==propName\u0026\u0026(i[propName]=config[propName]);var childrenLength=arguments.length-2;if(1===childrenLength)i.children=children;else if(1\u003cchildrenLength){for(var childArray=Array(childrenLength),_i=0;_i\u003cchildrenLength;_i++)childArray[_i]=arguments[_i+2];Object.freeze\u0026\u0026Object.freeze(childArray),i.children=childArray}if(type\u0026\u0026type.defaultProps)for(propName in childrenLength=type.defaultProps)void 0===i[propName]\u0026\u0026(i[propName]=childrenLength[propName]);return key\u0026\u0026function(props,displayName){function warnAboutAccessingKey(){specialPropKeyWarningShown||(specialPropKeyWarningShown=!0,console.error(\\\"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)\\\",displayName))}warnAboutAccessingKey.isReactWarning=!0,Object.defineProperty(props,\\\"key\\\",{get:warnAboutAccessingKey,configurable:!0})}(i,\\\"function\\\"==typeof type?type.displayName||type.name||\\\"Unknown\\\":type),(propName=1e4\u003eReactSharedInternals.recentlyCreatedOwnerStacks++)?(childArray=Error.stackTraceLimit,Error.stackTraceLimit=10,childrenLength=Error(\\\"react-stack-top-frame\\\"),Error.stackTraceLimit=childArray):childrenLength=unknownOwnerDebugStack,ReactElement(type,key,i,getOwner(),childrenLength,propName?createTask(getTaskName(type)):unknownOwnerDebugTask)},\\\"name\\\",{value:\\\"\\\"})\"\n"])
        </script>
        <script>
            self.__next_f.push([1, "41:{\"name\":\"NonIndex\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{\"createElement\":\"$42\",\"pagePath\":\"/home\",\"statusCode\":200,\"isPossibleServerAction\":false}}\n44:{\"name\":\"Next.Viewport\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{}}\n45:[]\n49:{\"name\":\"Next.Metadata\",\"key\":null,\"env\":\"Server\",\"stack\":[],\"props\":{}}\n4a:[]\n4b:[]\n4d:[]\n4f:[]\n52:[]\n30:{}\n31:\n53:[]\n54:[]\n55:[]\n56:[]\n57:[[\"Array.map\",\"\",0,0,0,0,false]]\n58:[]\n1:D{\"time\":0.2486680000438355}\n1:D\"$2\"\n1:D{\"time\":0.2930320000159554}\n1:null\nc:D{\"time\":0.8069310000282712}\nc:D\"$d\"\nc:D{\"time\":0.9447849999996834}\n1d:D{\"time\":1.1618510000407696}\n1d:D\"$1e\"\n1d:D{\"time\":1.2492420000489801}\n1d:D\"$1f\"\n1d:D{\"time\":1.424875000026077}\n1d:[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"},\"$1f\",\"$20\",1],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}},\"$1f\",\"$23\",1],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":404},\"$1f\",\"$24\",1],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page could not be found.\"},\"$1f\",\"$26\",1]},\"$1f\",\"$25\",1]]},\"$1f\",\"$22\",1]},\"$1f\",\"$21\",1]]\nc:[\"$\",\"html\",null,{\"lang\":\"en\",\"children\":[\"$\",\"body\",null,{\"className\":\"geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable antialiased\",\"children\":[\"$\",\"$L19\",null,{\"parallelRouterKey\":\"children\",\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L1b\",null,{},null,\"$1a\",1],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":[\"$\",\"$L7\",\"c-not-found\",{\"type\":\"not-found\",\"pagePath\":\"__next_builtin__not-found.js\",\"children\":[\"$1d\",[]]},null,\"$1c\",0],\"forbidden\":\"$undefined\",\"unauthorized\":\"$undefined\",\"segmentViewBoundaries\":[[\"$\",\"$L7\",null,{\"type\":\"boundary:not-found\",\"pagePath\":\"__next_builtin__not-found.js@boundary\"},null,\"$27\",1],\"$undefined\",\"$undefined\",[\"$\",\"$L7\",null,{\"type\":\"boundary:global-error\",\"pagePath\":\"__next_builtin__global-error.js\"},null,\"$28\",1]]},null,\"$18\",1]},\"$d\",\"$17\",1]},\"$d\",\"$16\",1]\n2e:D{\"time\":2.4508550000027753}\n2e:D\"$2f\"\n2e:D{\"time\":2.8415850000455976}\n33:D{\"time\":3.070071000023745}\n33:D\"$34\"\n33:D{\"time\":3.324615999998059}\n33:[\"$\",\"div\",null,{\"className\":\"border-2 border-red-300\",\"children\":\"this is navbar\"},\"$34\",\"$35\",1]\n36:D{\"time\":3.408633000042755}\n36:D\"$37\"\n2e:[\"$\",\"div\",null,{\"children\":[\"$33\",\"$L36\"]},\"$2f\",\"$32\",1]\n38:D{\"time\":5.4145060000009835}\n38:D\"$39\"\n38:D{\"time\":7.1069550000247546}\n38:[\"$\",\"$L3b\",null,{\"children\":[\"$\",\"$3d\",null,{\"name\":\"Next.MetadataOutlet\",\"children\":\"$@3e\"},\"$39\",\"$3c\",1]},\"$39\",\"$3a\",1]\n40:D{\"time\":7.531704000022728}\n40:D\"$41\"\n40:D{\"time\":7.550025000004098}\n40:null\n43:D{\"time\":7.625677000032738}\n43:D\"$44\"\n43:D{\"time\":7.784443000040483}\n43:[\"$\",\"$L46\",null,{\"children\":\"$@47\"},\"$44\",\"$45\",1]\n48:D{\"time\":8.062428000033833}\n48:D\"$49\"\n48:D{\"time\":8.227697000023909}\n48:[\"$\",\"div\",null,{\"hidden\":true,\"children\":[\"$\",\"$L4c\",null,{\"children\":[\"$\",\"$3d\",null,{\"name\":\"Next.Metadata\",\"children\":\"$@4e\"},\"$49\",\"$4d\",1]},\"$49\",\"$4b\",1]},\"$49\",\"$4a\",1]\n50:[]\n"])
        </script>
        <script>
            self.__next_f.push([1, "0:{\"P\":\"$1\",\"b\":\"development\",\"c\":[\"\",\"home\"],\"q\":\"\",\"i\":false,\"f\":[[[\"\",{\"children\":[\"home\",{\"children\":[\"__PAGE__\",{}]}]},\"$undefined\",\"$undefined\",true],[[\"$\",\"$L7\",\"layout\",{\"type\":\"layout\",\"pagePath\":\"layout.tsx\",\"children\":[\"$\",\"$9\",\"c\",{\"children\":[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/chunks/%5Broot-of-the-server%5D__28bc9c2a._.css\",\"precedence\":\"next_static/chunks/[root-of-the-server]__28bc9c2a._.css\",\"crossOrigin\":\"$undefined\",\"nonce\":\"$undefined\"},null,\"$a\",0],[\"$\",\"script\",\"script-0\",{\"src\":\"/_next/static/chunks/app_layout_tsx_78cdd4a3._.js\",\"async\":true,\"nonce\":\"$undefined\"},null,\"$b\",0]],\"$c\"]},null,\"$8\",1]},null,\"$6\",0],{\"children\":[[\"$\",\"$9\",\"c\",{\"children\":[null,[\"$\",\"$L19\",null,{\"parallelRouterKey\":\"children\",\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L1b\",null,{},null,\"$2b\",1],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"forbidden\":\"$undefined\",\"unauthorized\":\"$undefined\",\"segmentViewBoundaries\":[\"$undefined\",\"$undefined\",\"$undefined\",\"$undefined\"]},null,\"$2a\",1]]},null,\"$29\",0],{\"children\":[[\"$\",\"$9\",\"c\",{\"children\":[[\"$\",\"$L7\",\"c-page\",{\"type\":\"page\",\"pagePath\":\"home/page.tsx\",\"children\":\"$2e\"},null,\"$2d\",1],null,\"$38\"]},null,\"$2c\",0],{},null,false,false]},null,false,false]},null,false,false],[\"$\",\"$9\",\"h\",{\"children\":[\"$40\",\"$43\",\"$48\",[\"$\",\"meta\",null,{\"name\":\"next-size-adjust\",\"content\":\"\"},null,\"$4f\",1]]},null,\"$3f\",0],false]],\"m\":\"$W50\",\"G\":[\"$51\",[\"$\",\"$L7\",\"ge-svn\",{\"type\":\"global-error\",\"pagePath\":\"__next_builtin__global-error.js\",\"children\":[]},null,\"$52\",0]],\"S\":false}\n"])
        </script>
        <script>
            self.__next_f.push([1, "47:D{\"time\":12.986814000003505}\n47:[[\"$\",\"meta\",\"0\",{\"charSet\":\"utf-8\"},\"$39\",\"$53\",0],[\"$\",\"meta\",\"1\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},\"$39\",\"$54\",0]]\n4e:D{\"time\":13.864913000026718}\n4e:[[\"$\",\"title\",\"0\",{\"children\":\"Create Next App\"},\"$39\",\"$55\",0],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Generated by create next app\"},\"$39\",\"$56\",0],[\"$\",\"link\",\"2\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.0b3bf435.ico\",\"sizes\":\"256x256\",\"type\":\"image/x-icon\"},\"$39\",\"$57\",0],[\"$\",\"$L59\",\"3\",{},\"$39\",\"$58\",0]]\n3e:D{\"time\":13.998030000017025}\n3e:null\n"])
        </script>
        <script>
            self.__next_f.push([1, "5a:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",30,13,25,19,false]]\n5d:[\"content-length\",\"10640\"]\n5e:[\"content-type\",\"application/json\"]\n5f:[\"date\",\"Tue, 02 Dec 2025 13:07:39 GMT\"]\n60:[\"server\",\"uvicorn\"]\n5c:[\"$5d\",\"$5e\",\"$5f\",\"$60\"]\n"])
        </script>
        <script>
            self.__next_f.push([1, "62:\"$EObject.defineProperty(class ReadableStream {\\n  [kType] = 'ReadableStream';\\n\\n  /**\\n   * @param {UnderlyingSource} [source]\\n   * @param {QueuingStrategy} [strategy]\\n   */\\n  constructor(source = kEmptyObject, strategy = kEmptyObject) {\\n    markTransferMode(this, false, true);\\n    validateObject(source, 'source', kValidateObjectAllowObjects);\\n    validateObject(strategy, 'strategy', kValidateObjectAllowObjectsAndNull);\\n    this[kState] = createReadableStreamState();\\n\\n    this[kIsClosedPromise] = PromiseWithResolvers();\\n    this[kControllerErrorFunction] = () =\u003e {};\\n\\n    // The spec requires handling of the strategy first\\n    // here. Specifically, if getting the size and\\n    // highWaterMark from the strategy fail, that has\\n    // to trigger a throw before getting the details\\n    // from the source. So be sure to keep these in\\n    // this order.\\n    const size = strategy?.size;\\n    const highWaterMark = strategy?.highWaterMark;\\n    const type = source.type;\\n\\n    if (`${type}` === 'bytes') {\\n      if (size !== undefined)\\n        throw new ERR_INVALID_ARG_VALUE.RangeError('strategy.size', size);\\n      setupReadableByteStreamControllerFromSource(\\n        this,\\n        source,\\n        extractHighWaterMark(highWaterMark, 0));\\n    } else {\\n      if (type !== undefined)\\n        throw new ERR_INVALID_ARG_VALUE('source.type', type);\\n      setupReadableStreamDefaultControllerFromSource(\\n        this,\\n        source,\\n        extractHighWaterMark(highWaterMark, 1),\\n        extractSizeAlgorithm(size));\\n    }\\n  }\\n\\n  get [kIsDisturbed]() {\\n    return this[kState].disturbed;\\n  }\\n\\n  get [kIsErrored]() {\\n    return this[kState].state === 'errored';\\n  }\\n\\n  get [kIsReadable]() {\\n    return this[kState].state === 'readable';\\n  }\\n\\n  /**\\n   * @readonly\\n   * @type {boolean}\\n   */\\n  get locked() {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    return isReadableStreamLocked(this);\\n  }\\n\\n  static from(iterable) {\\n    return readableStreamFromIterable(iterable);\\n  }\\n\\n  /**\\n   * @param {any} [reason]\\n   * @returns { Promise\u003cvoid\u003e }\\n   */\\n  cancel(reason = undefined) {\\n    if (!isReadableStream(this))\\n      return PromiseReject(new ERR_INVALID_THIS('ReadableStream'));\\n    if (isReadableStreamLocked(this)) {\\n      return PromiseReject(\\n        new ERR_INVALID_STATE.TypeError('ReadableStream is locked'));\\n    }\\n    return readableStreamCancel(this, reason);\\n  }\\n\\n  /**\\n   * @param {{\\n   *   mode? : \\\"byob\\\"\\n   * }} [options]\\n   * @returns {ReadableStreamReader}\\n   */\\n  getReader(options = kEmptyObject) {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    validateObject(options, 'options', kValidateObjectAllowObjectsAndNull);\\n    const mode = options?.mode;\\n\\n    if (mode === undefined)\\n      // eslint-disable-next-line no-use-before-define\\n      return new ReadableStreamDefaultReader(this);\\n\\n    if (`${mode}` !== 'byob')\\n      throw new ERR_INVALID_ARG_VALUE('options.mode', mode);\\n    // eslint-disable-next-line no-use-before-define\\n    return new ReadableStreamBYOBReader(this);\\n  }\\n\\n  /**\\n   * @param {ReadableWritablePair} transform\\n   * @param {StreamPipeOptions} [options]\\n   * @returns {ReadableStream}\\n   */\\n  pipeThrough(transform, options = kEmptyObject) {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    const readable = transform?.readable;\\n    if (!isReadableStream(readable)) {\\n      throw new ERR_INVALID_ARG_TYPE(\\n        'transform.readable',\\n        'ReadableStream',\\n        readable);\\n    }\\n    const writable = transform?.writable;\\n    if (!isWritableStream(writable)) {\\n      throw new ERR_INVALID_ARG_TYPE(\\n        'transform.writable',\\n        'WritableStream',\\n        writable);\\n    }\\n\\n    // The web platform tests require that these be handled one at a\\n    // time and in a specific order. options can be null or undefined.\\n    validateObject(options, 'options', kValidateObjectAllowObjectsAndNull);\\n    const preventAbort = options?.preventAbort;\\n    const preventCancel = options?.preventCancel;\\n    const preventClose = options?.preventClose;\\n    const signal = options?.signal;\\n\\n    if (signal !== undefined) {\\n      validateAbortSignal(signal, 'options.signal');\\n    }\\n\\n    if (isReadableStreamLocked(this))\\n      throw new ERR_INVALID_STATE.TypeError('The ReadableStream is locked');\\n    if (isWritableStreamLocked(writable))\\n      throw new ERR_INVALID_STATE.TypeError('The WritableStream is locked');\\n\\n    const promise = readableStreamPipeTo(\\n      this,\\n      writable,\\n      !!preventClose,\\n      !!preventAbort,\\n      !!preventCancel,\\n      signal);\\n    setPromiseHandled(promise);\\n\\n    return readable;\\n  }\\n\\n  /**\\n   * @param {WritableStream} destination\\n   * @param {StreamPipeOptions} [options]\\n   * @returns {Promise\u003cvoid\u003e}\\n   */\\n  pipeTo(destination, options = kEmptyObject) {\\n    try {\\n      if (!isReadableStream(this))\\n        throw new ERR_INVALID_THIS('ReadableStream');\\n      if (!isWritableStream(destination)) {\\n        throw new ERR_INVALID_ARG_TYPE(\\n          'transform.writable',\\n          'WritableStream',\\n          destination);\\n      }\\n\\n      validateObject(options, 'options', kValidateObjectAllowObjectsAndNull);\\n      const preventAbort = options?.preventAbort;\\n      const preventCancel = options?.preventCancel;\\n      const preventClose = options?.preventClose;\\n      const signal = options?.signal;\\n\\n      if (signal !== undefined) {\\n        validateAbortSignal(signal, 'options.signal');\\n      }\\n\\n      if (isReadableStreamLocked(this))\\n        throw new ERR_INVALID_STATE.TypeError('The ReadableStream is locked');\\n      if (isWritableStreamLocked(destination))\\n        throw new ERR_INVALID_STATE.TypeError('The WritableStream is locked');\\n\\n      return readableStreamPipeTo(\\n        this,\\n        destination,\\n        !!preventClose,\\n        !!preventAbort,\\n        !!preventCancel,\\n        signal);\\n    } catch (error) {\\n      return PromiseReject(error);\\n    }\\n  }\\n\\n  /**\\n   * @returns {ReadableStream[]}\\n   */\\n  tee() {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    return readableStreamTee(this, false);\\n  }\\n\\n  /**\\n   * @param {{\\n   *   preventCancel? : boolean,\\n   * }} [options]\\n   * @returns {AsyncIterable}\\n   */\\n  values(options = kEmptyObject) {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    validateObject(options, 'options', kValidateObjectAllowObjectsAndNull);\\n    const preventCancel = !!(options?.preventCancel);\\n\\n    // eslint-disable-next-line no-use-before-define\\n    const reader = new ReadableStreamDefaultReader(this);\\n\\n    // No __proto__ here to avoid the performance hit.\\n    const state = {\\n      done: false,\\n      current: undefined,\\n    };\\n    let started = false;\\n\\n    // The nextSteps function is not an async function in order\\n    // to make it more efficient. Because nextSteps explicitly\\n    // creates a Promise and returns it in the common case,\\n    // making it an async function just causes two additional\\n    // unnecessary Promise allocations to occur, which just add\\n    // cost.\\n    function nextSteps() {\\n      if (state.done)\\n        return PromiseResolve({ done: true, value: undefined });\\n\\n      if (reader[kState].stream === undefined) {\\n        return PromiseReject(\\n          new ERR_INVALID_STATE.TypeError(\\n            'The reader is not bound to a ReadableStream'));\\n      }\\n      const promise = PromiseWithResolvers();\\n\\n      // eslint-disable-next-line no-use-before-define\\n      readableStreamDefaultReaderRead(reader, new ReadableStreamAsyncIteratorReadRequest(reader, state, promise));\\n      return promise.promise;\\n    }\\n\\n    async function returnSteps(value) {\\n      if (state.done)\\n        return { done: true, value }; // eslint-disable-line node-core/avoid-prototype-pollution\\n      state.done = true;\\n\\n      if (reader[kState].stream === undefined) {\\n        throw new ERR_INVALID_STATE.TypeError(\\n          'The reader is not bound to a ReadableStream');\\n      }\\n      assert(!reader[kState].readRequests.length);\\n      if (!preventCancel) {\\n        const result = readableStreamReaderGenericCancel(reader, value);\\n        readableStreamReaderGenericRelease(reader);\\n        await result;\\n        return { done: true, value }; // eslint-disable-line node-core/avoid-prototype-pollution\\n      }\\n\\n      readableStreamReaderGenericRelease(reader);\\n      return { done: true, value }; // eslint-disable-line node-core/avoid-prototype-pollution\\n    }\\n\\n    // TODO(@jasnell): Explore whether an async generator\\n    // can be used here instead of a custom iterator object.\\n    return ObjectSetPrototypeOf({\\n      // Changing either of these functions (next or return)\\n      // to async functions causes a failure in the streams\\n      // Web Platform Tests that check for use of a modified\\n      // Promise.prototype.then. Since the await keyword\\n      // uses Promise.prototype.then, it is open to prototype\\n      // pollution, which causes the test to fail. The other\\n      // await uses here do not trigger that failure because\\n      // the test that fails does not trigger those code paths.\\n      next() {\\n        // If this is the first read, delay by one microtask\\n        // to ensure that the controller has had an opportunity\\n        // to properly start and perform the initial pull.\\n        // TODO(@jasnell): The spec doesn't call this out so\\n        // need to investigate if it's a bug in our impl or\\n        // the spec.\\n        if (!started) {\\n          state.current = PromiseResolve();\\n          started = true;\\n        }\\n        state.current = state.current !== undefined ?\\n          PromisePrototypeThen(state.current, nextSteps, nextSteps) :\\n          nextSteps();\\n        return state.current;\\n      },\\n\\n      return(error) {\\n        started = true;\\n        state.current = state.current !== undefined ?\\n          PromisePrototypeThen(\\n            state.current,\\n            () =\u003e returnSteps(error),\\n            () =\u003e returnSteps(error)) :\\n          returnSteps(error);\\n        return state.current;\\n      },\\n\\n      [SymbolAsyncIterator]() { return this; },\\n    }, AsyncIterator);\\n  }\\n\\n  [kInspect](depth, options) {\\n    return customInspect(depth, options, this[kType], {\\n      locked: this.locked,\\n      state: this[kState].state,\\n      supportsBYOB:\\n        // eslint-disable-next-line no-use-before-define\\n        this[kState].controller instanceof ReadableByteStreamController,\\n    });\\n  }\\n\\n  [kTransfer]() {\\n    if (!isReadableStream(this))\\n      throw new ERR_INVALID_THIS('ReadableStream');\\n    if (this.locked) {\\n      this[kState].transfer.port1?.close();\\n      this[kState].transfer.port1 = undefined;\\n      this[kState].transfer.port2 = undefined;\\n      throw new DOMException(\\n        'Cannot transfer a locked ReadableStream',\\n        'DataCloneError');\\n    }\\n\\n    const {\\n      writable,\\n      promise,\\n    } = lazyTransfer().newCrossRealmWritableSink(\\n      this,\\n      this[kState].transfer.port1);\\n\\n    this[kState].transfer.writable = writable;\\n    this[kState].transfer.promise = promise;\\n\\n    return {\\n      data: { port: this[kState].transfer.port2 },\\n      deserializeInfo:\\n        'internal/webstreams/readablestream:TransferredReadableStream',\\n    };\\n  }\\n\\n  [kTransferList]() {\\n    const { port1, port2 } = new MessageChannel();\\n    this[kState].transfer.port1 = port1;\\n    this[kState].transfer.port2 = port2;\\n    return [ port2 ];\\n  }\\n\\n  [kDeserialize]({ port }) {\\n    const transfer = lazyTransfer();\\n    setupReadableStreamDefaultControllerFromSource(\\n      this,\\n      // The MessagePort is set to be referenced when reading.\\n      // After two MessagePorts are closed, there is a problem with\\n      // lingering promise not being properly resolved.\\n      // https://github.com/nodejs/node/issues/51486\\n      new transfer.CrossRealmTransformReadableSource(port, true),\\n      0, () =\u003e 1);\\n  }\\n},\\\"name\\\",{value:\\\"ReadableStream\\\"})\"\n"])
        </script>
        <script>
            self.__next_f.push([1, "61:{\"constructor\":\"$62\",\"locked\":false,\"\":\"$P62\"}\n"])
        </script>
        <script>
            self.__next_f.push([1, "64:\"$EObject.defineProperty(class _Response {\\n      static {\\n        __name(this, \\\"Response\\\");\\n      }\\n      // Creates network error Response.\\n      static error() {\\n        const responseObject = fromInnerResponse(makeNetworkError(), \\\"immutable\\\");\\n        return responseObject;\\n      }\\n      // https://fetch.spec.whatwg.org/#dom-response-json\\n      static json(data, init = {}) {\\n        webidl.argumentLengthCheck(arguments, 1, \\\"Response.json\\\");\\n        if (init !== null) {\\n          init = webidl.converters.ResponseInit(init);\\n        }\\n        const bytes = textEncoder.encode(\\n          serializeJavascriptValueToJSONString(data)\\n        );\\n        const body = extractBody(bytes);\\n        const responseObject = fromInnerResponse(makeResponse({}), \\\"response\\\");\\n        initializeResponse(responseObject, init, { body: body[0], type: \\\"application/json\\\" });\\n        return responseObject;\\n      }\\n      // Creates a redirect Response that redirects to url with status status.\\n      static redirect(url, status = 302) {\\n        webidl.argumentLengthCheck(arguments, 1, \\\"Response.redirect\\\");\\n        url = webidl.converters.USVString(url);\\n        status = webidl.converters[\\\"unsigned short\\\"](status);\\n        let parsedURL;\\n        try {\\n          parsedURL = new URL(url, relevantRealm.settingsObject.baseUrl);\\n        } catch (err) {\\n          throw new TypeError(`Failed to parse URL from ${url}`, { cause: err });\\n        }\\n        if (!redirectStatusSet.has(status)) {\\n          throw new RangeError(`Invalid status code ${status}`);\\n        }\\n        const responseObject = fromInnerResponse(makeResponse({}), \\\"immutable\\\");\\n        responseObject[kState].status = status;\\n        const value = isomorphicEncode(URLSerializer(parsedURL));\\n        responseObject[kState].headersList.append(\\\"location\\\", value, true);\\n        return responseObject;\\n      }\\n      // https://fetch.spec.whatwg.org/#dom-response\\n      constructor(body = null, init = {}) {\\n        webidl.util.markAsUncloneable(this);\\n        if (body === kConstruct) {\\n          return;\\n        }\\n        if (body !== null) {\\n          body = webidl.converters.BodyInit(body);\\n        }\\n        init = webidl.converters.ResponseInit(init);\\n        this[kState] = makeResponse({});\\n        this[kHeaders] = new Headers(kConstruct);\\n        setHeadersGuard(this[kHeaders], \\\"response\\\");\\n        setHeadersList(this[kHeaders], this[kState].headersList);\\n        let bodyWithType = null;\\n        if (body != null) {\\n          const [extractedBody, type] = extractBody(body);\\n          bodyWithType = { body: extractedBody, type };\\n        }\\n        initializeResponse(this, init, bodyWithType);\\n      }\\n      // Returns response?s type, e.g., \\\"cors\\\".\\n      get type() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].type;\\n      }\\n      // Returns response?s URL, if it has one; otherwise the empty string.\\n      get url() {\\n        webidl.brandCheck(this, _Response);\\n        const urlList = this[kState].urlList;\\n        const url = urlList[urlList.length - 1] ?? null;\\n        if (url === null) {\\n          return \\\"\\\";\\n        }\\n        return URLSerializer(url, true);\\n      }\\n      // Returns whether response was obtained through a redirect.\\n      get redirected() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].urlList.length \u003e 1;\\n      }\\n      // Returns response?s status.\\n      get status() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].status;\\n      }\\n      // Returns whether response?s status is an ok status.\\n      get ok() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].status \u003e= 200 \u0026\u0026 this[kState].status \u003c= 299;\\n      }\\n      // Returns response?s status message.\\n      get statusText() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].statusText;\\n      }\\n      // Returns response?s headers as Headers.\\n      get headers() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kHeaders];\\n      }\\n      get body() {\\n        webidl.brandCheck(this, _Response);\\n        return this[kState].body ? this[kState].body.stream : null;\\n      }\\n      get bodyUsed() {\\n        webidl.brandCheck(this, _Response);\\n        return !!this[kState].body \u0026\u0026 util.isDisturbed(this[kState].body.stream);\\n      }\\n      // Returns a clone of response.\\n      clone() {\\n        webidl.brandCheck(this, _Response);\\n        if (bodyUnusable(this)) {\\n          throw webidl.errors.exception({\\n            header: \\\"Response.clone\\\",\\n            message: \\\"Body has already been consumed.\\\"\\n          });\\n        }\\n        const clonedResponse = cloneResponse(this[kState]);\\n        return fromInnerResponse(clonedResponse, getHeadersGuard(this[kHeaders]));\\n      }\\n      [nodeUtil.inspect.custom](depth, options) {\\n        if (options.depth === null) {\\n          options.depth = 2;\\n        }\\n        options.colors ??= true;\\n        const properties = {\\n          status: this.status,\\n          statusText: this.statusText,\\n          headers: this.headers,\\n          body: this.body,\\n          bodyUsed: this.bodyUsed,\\n          ok: this.ok,\\n          redirected: this.redirected,\\n          type: this.type,\\n          url: this.url\\n        };\\n        return `Response ${nodeUtil.formatWithOptions(options, properties)}`;\\n      }\\n    },\\\"name\\\",{value:\\\"Response\\\"})\"\n"])
        </script>
        <script>
            self.__next_f.push([1, "63:\"$64\"\n5b:{\"url\":\"http://localhost:8000/dashboard\",\"type\":\"default\",\"redirected\":false,\"status\":200,\"ok\":true,\"statusText\":\"OK\",\"headers\":\"$5c\",\"body\":\"$61\",\"bodyUsed\":false,\"\":\"$P63\"}\n:W[\"log\",\"$5a\",\"$37\",\"Server\",\"$5b\"]\n66:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",27,23,25,19,false]]\n65:J{\"name\":\"fetch\",\"start\":3.781773000024259,\"end\":10.905109000043012,\"env\":\"Server\",\"stack\":\"$66\",\"owner\":\"$37\",\"value\":\"$@67\"}\n68:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",27,23,25,19,false]]\n6a:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",41,32,25,19,false]]\n69:J{\"name\":\"_Response.json\",\"start\":927.4409500000183,\"end\":927.9311239999952,\"env\":\"Server\",\"stack\":\"$6a\",\"owner\":\"$37\",\"value\":\"$@6b\"}\n6c:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",41,32,25,19,false]]\n67:{\"url\":\"http://localhost:8000/dashboard\",\"type\":\"default\",\"redirected\":false,\"status\":200,\"ok\":true,\"statusText\":\"OK\",\"headers\":\"$5c\",\"body\":\"$61\",\"bodyUsed\":true,\"\":\"$P64\"}\n"])
        </script>
        <script>
            self.__next_f.push([1, "6b:[{\"id\":1,\"title\":\"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\",\"price\":109.95,\"description\":\"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday\",\"category\":\"men's clothing\",\"image\":\"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png\",\"rating\":{\"rate\":3.9,\"count\":120}},{\"id\":2,\"title\":\"Mens Casual Premium Slim Fit T-Shirts \",\"price\":22.3,\"description\":\"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight \u0026 soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.\",\"category\":\"men's clothing\",\"image\":\"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png\",\"rating\":{\"rate\":4.1,\"count\":259}},{\"id\":3,\"title\":\"Mens Cotton Jacket\",\"price\":55.99,\"description\":\"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.\",\"category\":\"men's clothing\",\"image\":\"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png\",\"rating\":{\"rate\":4.7,\"count\":500}},{\"id\":4,\"title\":\"Mens Casual Slim Fit\",\"price\":15.99,\"description\":\"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.\",\"category\":\"men's clothing\",\"image\":\"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png\",\"rating\":\"$Y\"},\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\",\"$Y\"]\n"])
        </script>
        <script>
            self.__next_f.push([1, "6d:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",42,263,25,19,false]]\n6e:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",45,264,25,19,false]]\n6f:[[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",53,264,25,19,false]]\n70:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n71:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n72:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n73:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n74:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n75:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n76:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n77:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n78:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n79:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n7a:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n7b:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n7c:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca"])
        </script>
        <script>
            self.__next_f.push([1, "._.js\",54,36,25,19,false]]\n7d:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n7e:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n7f:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n80:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n81:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n82:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n83:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n84:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n85:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n86:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n87:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n88:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n89:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8a:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8b:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/s"])
        </script>
        <script>
            self.__next_f.push([1, "sr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8c:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8d:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8e:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n8f:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n90:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n91:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n92:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n93:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n94:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n95:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n96:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,302,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n97:[[\"\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",57,280,54,40,false],[\"Array.map\",\"\",0,0,0,0,false],[\"Dashboard\",\"/home/vamsi/vamsi/git/ai-tools/.next/dev/server/chunks/ssr/[root-of-the-server]__da85e9ca._.js\",54,36,25,19,false]]\n36:D{\"time\":4.791628000035416}\n36:D{\"awaited\":\"$65\",\"env\":\"Server\",\"owner\":\"$37\",\"stack\":\"$68\"}\n36:D{\"time\":926.696975000028}\n36:D{\"time\":927.6101350000245}\n36:D{\"awaited\":\"$69\",\"env\":\"Server\",\"owner\":\"$37\",\"stack\":\"$6c\"}\n36:D{\"time\":928.249896000023}\n36:D{\"time\":930.7670700000017}\n"])
        </script>
        <script>
            self.__next_f.push([1, "36:[\"$\",\"div\",null,{\"className\":\"border-2 border-red-200\",\"children\":[[\"$\",\"h2\",null,{\"className\":\"font-bold mb-2\",\"children\":\"Fake Store Products\"},\"$37\",\"$6e\",1],[\"$\",\"ul\",null,{\"children\":[[\"$\",\"li\",\"1\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\"},\"$37\",\"$71\",1],\" - $\",109.95]},\"$37\",\"$70\",0],[\"$\",\"li\",\"2\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Mens Casual Premium Slim Fit T-Shirts \"},\"$37\",\"$73\",1],\" - $\",22.3]},\"$37\",\"$72\",0],[\"$\",\"li\",\"3\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Mens Cotton Jacket\"},\"$37\",\"$75\",1],\" - $\",55.99]},\"$37\",\"$74\",0],[\"$\",\"li\",\"4\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Mens Casual Slim Fit\"},\"$37\",\"$77\",1],\" - $\",15.99]},\"$37\",\"$76\",0],[\"$\",\"li\",\"5\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"John Hardy Women's Legends Naga Gold \u0026 Silver Dragon Station Chain Bracelet\"},\"$37\",\"$79\",1],\" - $\",695]},\"$37\",\"$78\",0],[\"$\",\"li\",\"6\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Solid Gold Petite Micropave \"},\"$37\",\"$7b\",1],\" - $\",168]},\"$37\",\"$7a\",0],[\"$\",\"li\",\"7\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"White Gold Plated Princess\"},\"$37\",\"$7d\",1],\" - $\",9.99]},\"$37\",\"$7c\",0],[\"$\",\"li\",\"8\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Pierced Owl Rose Gold Plated Stainless Steel Double\"},\"$37\",\"$7f\",1],\" - $\",10.99]},\"$37\",\"$7e\",0],[\"$\",\"li\",\"9\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"WD 2TB Elements Portable External Hard Drive - USB 3.0 \"},\"$37\",\"$81\",1],\" - $\",64]},\"$37\",\"$80\",0],[\"$\",\"li\",\"10\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s\"},\"$37\",\"$83\",1],\" - $\",109]},\"$37\",\"$82\",0],[\"$\",\"li\",\"11\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5\"},\"$37\",\"$85\",1],\" - $\",109]},\"$37\",\"$84\",0],[\"$\",\"li\",\"12\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive\"},\"$37\",\"$87\",1],\" - $\",114]},\"$37\",\"$86\",0],[\"$\",\"li\",\"13\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin\"},\"$37\",\"$89\",1],\" - $\",599]},\"$37\",\"$88\",0],[\"$\",\"li\",\"14\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED \"},\"$37\",\"$8b\",1],\" - $\",999.99]},\"$37\",\"$8a\",0],[\"$\",\"li\",\"15\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats\"},\"$37\",\"$8d\",1],\" - $\",56.99]},\"$37\",\"$8c\",0],[\"$\",\"li\",\"16\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket\"},\"$37\",\"$8f\",1],\" - $\",29.95]},\"$37\",\"$8e\",0],[\"$\",\"li\",\"17\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Rain Jacket Women Windbreaker Striped Climbing Raincoats\"},\"$37\",\"$91\",1],\" - $\",39.99]},\"$37\",\"$90\",0],[\"$\",\"li\",\"18\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"MBJ Women's Solid Short Sleeve Boat Neck V \"},\"$37\",\"$93\",1],\" - $\",9.85]},\"$37\",\"$92\",0],[\"$\",\"li\",\"19\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"Opna Women's Short Sleeve Moisture\"},\"$37\",\"$95\",1],\" - $\",7.95]},\"$37\",\"$94\",0],[\"$\",\"li\",\"20\",{\"className\":\"mb-2\",\"children\":[[\"$\",\"span\",null,{\"className\":\"font-semibold\",\"children\":\"DANVOUY Womens T Shirt Casual Cotton Short\"},\"$37\",\"$97\",1],\" - $\",12.99]},\"$37\",\"$96\",0]]},\"$37\",\"$6f\",1]]},\"$37\",\"$6d\",1]\n"])
        </script>
    </body>
</html>
