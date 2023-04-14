import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Owner from './Owner';
import Navbar from './Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
      </div>
  },
  {
    path: '/owner',
    element: <div>
      <Navbar />
      <Owner />
    </div>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
