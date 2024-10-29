import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Header from './components/Header/Header';
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home></Home>,
  //   children: [
  //     {
  //     path: '/About',
  //     element:<About></About>
  //     },
  //     {path:"/Contact",
  //       element:<Contact></Contact>
  //     },
  //   ]
  // },
  
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      }
    ]
  },
  // {
  //   path: '/about',
  //   element:<About></About>
    
  // }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
