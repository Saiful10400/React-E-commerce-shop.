import {  Link, NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const NavBar = () => {
const[profile,setProfile]=useState({})
    // api data fetch.
    useEffect(()=>{
        fetch("https://rifinalshop.vercel.app/profile")
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[])
    let li=(
        <>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/Cooking (রান্না-বান্না)"}>Cooking (রান্না-বান্না)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Honey (মধু)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Mango (আম)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Nuts & Seeds (বাদাম এবং বীজ)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory"}>Dry Fruits</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Ghee (ঘি)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>সুন্দরবনের মধু</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Ghee And Sharisha OIL</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Grocery (বাজার)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Tea/Snacks (চা-নাশতা)</NavLink>
        <NavLink onClick={()=>setMenu(false)} to={"/catagory/"}>Uncategorized</NavLink>
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
           <div className="flex justify-center gap-2 items-center">
           <img className="w-14 h-14 object-contain" src={profile?.logo} alt="" />
           <span className="text-lg  font-bold">{profile?.name}</span>
           </div>
            <h1 className="text-4xl mr-2"><Link to={"/"}><IoBagHandleSharp></IoBagHandleSharp></Link></h1>
          </div>
          <ul className="bg-red-500   text-2xl hidden  justify-center items-center gap-4">
            {
                li
            }
          </ul>
        </div>
        <div className={`${menu ? "right-[0%]" : "right-full"} transition-all duration-500 flex top-[72px] z-30 absolute`}>
        <div
          className={`  bg-white w-[60vw] h-[94vh] `}
        >
          <ul className="flex flex-col text-start  font-bold gap-5 mt-3">
            <h1 className="bg-green-500 py-2 text-white rounded
            ">All product Catagory</h1>
            {
               li 
            }
          </ul>
        </div>
        <div onClick={()=>setMenu(false)} className="w-[40vw] h-[94vh]   "></div>
        </div>
      </>
    );
};

export default NavBar;