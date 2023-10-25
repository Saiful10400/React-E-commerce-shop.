import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    // data fetch from api.
    const[allpoducts,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://rifinalshop-lw5sl7gf8-saifuls-projects-92f6e13c.vercel.app/admin/products")
        .then(res=>res.json())
        .then(responce=>setProducts(responce))
    },[])

    return (
        <div>
            <h1 className="text-center text text-gray-800 font-bold text-2xl py-11">Our All Products.</h1>
            
            <div className="flex flex-col gap-5">
                {
                    allpoducts?.map(item=><Product key={item._id} item={item}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;