import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Index, {loader as customerLoader} from './pages/Index'
import NewCustomer from './pages/NewCustomer'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customerLoader,
      },
      {
        path: '/customers/new',
        element: <NewCustomer />,
      }
    ] // poner todos los elementos hijos primero el layout despues los hijos
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
