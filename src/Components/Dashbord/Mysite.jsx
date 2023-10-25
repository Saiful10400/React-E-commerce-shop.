import swal from "sweetalert";

 

const Mysite = () => {
   const formhandle=(e)=>{
    e.preventDefault()
    const form=e.target
    const banner1=form.banner1.value
    const banner2=form.banner2.value
    const banner3=form.banner3.value
    console.log(banner1,banner2,banner3)
    const banner={banner1,banner2,banner3}

    fetch("http://localhost:5000/admin/My_site",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(banner)
    })
    .then(res=>res.json())
    .then(responce=>{
        if(responce){
            
            swal("success","Banner image Updated Successfully","success")
        }
    })


   }
    return (
        <div>
          <form onSubmit={formhandle} className="flex flex-col gap-3 px-1">
                
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 1:</label>
                    <input name="banner1" type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 2:</label>
                    <input name="banner2" type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 3:</label>
                    <input name="banner3" type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <button className="btn bg-red-300">Update</button>
            </form>
        </div>
    );
};

export default Mysite;