 
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import MyProfile from "./Components/Dashbord/MyProfile";
import Mysite from "./Components/Dashbord/Mysite";
import Products from './Components/Dashbord/Products';
import Order from './Components/Dashbord/Order';
import Home from "./Components/Client Componetns/Home";
import Allproducts from "./Components/Dashbord/Allproducts";
import Update from "./Components/Dashbord/Update";
import PriveteDashbord from "./Components/Dashbord/PriveteDashbord";
import DeshbordWelcome from "./Components/Dashbord/DeshbordWelcome";


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    
  },
  {
    path:"/admin",
    element:<PriveteDashbord><Dashbord></Dashbord></PriveteDashbord>,
    children:[
      {
        path:"/admin",
        element:<DeshbordWelcome></DeshbordWelcome>
      },
      {
        path:"My_profile",
        element:<MyProfile></MyProfile>
      },
      {
        path:"My_site",
        element:<Mysite></Mysite>
      
      },
      {
        path:"Add_product",
        element:<Products></Products>
      
      },
      {
        path:"My_products",
        element:<Allproducts></Allproducts>,
        loader:()=>fetch("https://rifinalshop.vercel.app/admin/products")

      },
      {
        path:"Order",
        element:<Order></Order>
      },
      {
        path:"update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://rifinalshop.vercel.app/admin/products/${params.id}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>

  </RouterProvider>
);
