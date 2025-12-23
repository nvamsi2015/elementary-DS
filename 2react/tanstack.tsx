npm i @tanstack/react-query
npm i @tanstack/react-query-devtools


// ========= In the example below, you can see TanStack Query in its most basic and simple form being used to fetch the GitHub stats for the TanStack Query GitHub project itself:

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(<App />)



// ============ tanstack =======

TanStack Query (formerly known as React Query) is often described as the missing data-fetching library for web applications,
but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze.

  While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different. For starters, server state:

Is persisted remotely in a location you may not control or own
Requires asynchronous APIs for fetching and updating
Implies shared ownership and can be changed by other people without your knowledge
Can potentially become "out of date" in your applications if you're not careful
Once you grasp the nature of server state in your application, even more challenges will arise as you go, for example:

Caching... (possibly the hardest thing to do in programming)
Deduping multiple requests for the same data into a single request
Updating "out of date" data in the background
Knowing when data is "out of date"
Reflecting updates to data as quickly as possible
Performance optimizations like pagination and lazy loading data
Managing memory and garbage collection of server state
Memoizing query results with structural sharing

TanStack Query is hands down one of the best libraries for managing server state. It works amazingly well out-of-the-box, with zero-config, and can be customized to your liking as your application grows.

TanStack Query allows you to defeat and overcome the tricky challenges and hurdles of server state and control your app data before it starts to control you.

  
// ------------- This code snippet very briefly illustrates the 3 core concepts of React Query:

// Queries
// Mutations
// Query Invalidation

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(<App />)




  
