import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    // data fetch from api.
    const[allpoducts,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/admin/products")
        .then(res=>res.json())
        .then(responce=>setProducts(responce))
    },[])

    return (
        <div>
            <h1 className="text-center">Our All Products.</h1>
            
            <div className="flex flex-col gap-5">
                {
                    allpoducts?.map(item=><Product key={item._id} item={item}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;