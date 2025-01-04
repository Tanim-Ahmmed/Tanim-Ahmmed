import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './pages/home/Home';
import Details from './pages/details/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <h2>error 404</h2>,
    children: [
     {
      path: "/",
      element:<Home></Home>,
      
     },
     {
      path: "/project",
      element:<Details></Details>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
