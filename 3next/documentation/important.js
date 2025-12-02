// ------------ Creating a layout
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.
You can define a layout by default exporting a React component from a layout file. The component should accept a children prop which can be a page or another layout.



// ---------------- Rendering with search params
In a Server Component page, you can access search parameters using the searchParams prop:

app/page.tsx
TypeScript

TypeScript
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams).filters
}
Using searchParams opts your page into dynamic rendering because it requires an incoming request to read the search parameters from.

Client Components can read search params using the useSearchParams hook.

Learn more about useSearchParams in statically rendered and dynamically rendered routes.


What to use and when
Use the searchParams prop when you need search parameters to load data for the page (e.g. pagination, filtering from a database).
Use useSearchParams when search parameters are used only on the client (e.g. filtering a list already loaded via props).
As a small optimization, you can use new URLSearchParams(window.location.search) in callbacks or event handlers to read search params without triggering re-renders.

// ----------- Linking and Navigating
In Next.js, routes are rendered on the server by default. This often means the client has to wait for a server response before a new route can be shown.
Next.js comes with built-in prefetching, streaming, and client-side transitions ensuring navigation stays fast and responsive.




// ---------- Prefetching
Prefetching is the process of loading a route in the background before the user navigates to it. 
This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.

Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport.

// -----------











