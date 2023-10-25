import {  Link, NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const NavBar = () => {
const[profile,setProfile]=useState({})
    // api data fetch.
    useEffect(()=>{
        fetch("http://localhost:5000/profile")
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[])
    let li=(
        <>
        <NavLink onClick={()=>setMenu(false)} to={"My_profile"}>My Profile</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"My_site"}>My site</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"Add_product"}>Add product</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"My_products"}>My products</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"order"}>Orders</NavLink>
        </>
    )
    const[menu ,setMenu]=useState(false)
    return (
      <>
        <div className="border-b-2 bg-white border-gray-300 mb-3">
          <div className="flex justify-between md:hidden text-2xl font-bold py-2 ">
            <button className="text-4xl flex gap-2 items-end" onClick={() => setMenu(!menu)}>
              {!menu ? <AiOutlineMenu></AiOutlineMenu> : <RxCross1></RxCross1>}
              <span className="text-xl">Menu</span>
            </button>
           <div className="flex justify-center items-center">
           <img className="w-14 h-9 object-contain" src={profile?.logo} alt="" />
           <span className="text-sm font-bold">{profile?.name}</span>
           </div>
            <h1 className="text-4xl mr-2"><Link to={"/"}><IoBagHandleSharp></IoBagHandleSharp></Link></h1>
          </div>
          <ul className="bg-red-500  text-2xl hidden md:flex justify-center items-center gap-4">
            {
                li
            }
          </ul>
        </div>
        <div className={`${menu ? "right-[0%]" : "right-full"} transition-all duration-500 flex top-[53px] z-30 absolute`}>
        <div
          className={`  bg-red-400 w-[50vw] h-[94vh] `}
        >
          <ul className="flex flex-col text-center font-bold gap-5 mt-3">
            {
                li
            }
          </ul>
        </div>
        <div onClick={()=>setMenu(false)} className="w-[50vw] h-[94vh]   "></div>
        </div>
      </>
    );
};

export default NavBar;