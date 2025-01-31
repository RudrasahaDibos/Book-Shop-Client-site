import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Route from './Component/Routes/Route';
import Books from './Component/Books/Books';
import SignIn from './Component/Sign/SignIn';
import About from './Component/About/About';
import Addbooks from './Component/Addbooks/Addbooks';
import UpdateBook from './Component/UpdateBook/UpdateBook';
import Authprovider from './Component/Sign/Authprovider';
import SignUp from './Component/Sign/SignUp';
import Users from './Component/Users/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books',
        element:<Books></Books>,
        loader:()=>fetch('http://localhost:5000/books')
      
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
      {
           path:'/signup',
           element:<SignUp></SignUp>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/addbook',
        element:<Addbooks></Addbooks>
      },
      {
            path:'/updatebook/:id',
            element:<UpdateBook></UpdateBook>,
            loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/users')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
   
  </StrictMode>,
)
