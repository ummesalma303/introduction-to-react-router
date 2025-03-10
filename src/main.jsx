import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import User from './components/User/User';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        // path: '/user/:id',
        // loader:({params})=>console.log(params.id),
        // element: <UserDetails></UserDetails>
        path: '/user/:id',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      element:<UserDetails></UserDetails>
      }

      
    ],
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)