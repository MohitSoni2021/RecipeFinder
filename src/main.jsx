import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeDetailPage from './components/RecipeDetail.jsx'
import SearchPageComponents from './components/SearchPageComponents/SearchPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/recipes/detail/:id',
    element: <RecipeDetailPage />
  },
  {
    path : '/search/:query',
    element : <SearchPageComponents />
  },
  {
    path : '/search',
    element : <SearchPageComponents />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
