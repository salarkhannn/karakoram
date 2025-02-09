import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './data/routes'
import { CartProvider } from './components/CartContext'
import { SearchProvider } from './components/SearchContext'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </SearchProvider>
)
