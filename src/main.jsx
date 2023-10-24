import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import MyProfile from "./Components/Dashbord/MyProfile";
import Mysite from "./Components/Dashbord/Mysite";
import Products from './Components/Dashbord/Products';
import Order from './Components/Dashbord/Order';

const router=createBrowserRouter([
  {
    path:"/",
    element:<h1>this is home</h1>
  },
  {
    path:"/admin",
    element:<Dashbord></Dashbord>,
    children:[
      {
        path:"my_profile",
        element:<MyProfile></MyProfile>
      },
      {
        path:"My_site",
        element:<Mysite></Mysite>
      
      },
      {
        path:"Products",
        element:<Products></Products>
      
      },
      {
        path:"Order",
        element:<Order></Order>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>

  </RouterProvider>
);
