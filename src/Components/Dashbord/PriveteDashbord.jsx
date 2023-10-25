import { useState } from "react";


const PriveteDashbord = ({children}) => {
    const[auth,setauth]=useState({})
    const formControll=(e)=>{
        e.preventDefault()
        const form=e.target
       
        const uid=form.uid.value
        const password=form.password.value
        setauth({uid,password})
        
    }
    if(auth.uid==="Ri_shop" && auth.password==="final"){
        return children
    }
    return children
    // return (
    //     <div className="w-full h-screen flex justify-center items-center">
    //         <form onSubmit={formControll} className="bg-red-400 px-6 py-10 rounded-xl pt-16">
    //             <h1 className="text-center text-5xl font-bold mb-9">Login</h1>
    //             <div className="flex justify-between items-center flex-col">
    //                 <label className="text-2xl w-full" htmlFor="uid"> Your user id:</label>
    //                 <input name="uid" type="text" id="uid" placeholder="Type here" className="input input-bordered input-primary w-full " />
    //             </div>
    //             <div className="flex justify-between items-center mt-3 flex-col">
    //                 <label className="text-2xl w-full" htmlFor="upassword"> Your password :</label>
    //                 <input name="password" type="text" id="upassword" placeholder="Type here" className="input input-bordered input-primary w-full " />
    //             </div>
    //             <button className="btn btn-primary w-full mt-5">Login</button>
    //         </form>
    //     </div>
    // );
};

export default PriveteDashbord;