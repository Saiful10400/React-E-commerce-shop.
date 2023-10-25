import swal from "sweetalert";

 

const MyProfile = () => {
    const formHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const logo=form.logo.value
        const profile={name,logo}
        console.log(profile)

        fetch("https://rifinalshop-lw5sl7gf8-saifuls-projects-92f6e13c.vercel.app/profile/update",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(profile)
        })
        .then(res=>res.json())
        .then(responce=>{
            if(responce){
                swal("Success","Profile have updated.","success")
            }
        })
    }
    return (
        <div>
            <form onSubmit={formHandle} className="flex flex-col gap-3 px-1">
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-2/5" htmlFor="Site_name">Site Name:</label>
                    <input name="name" type="text" placeholder="Type here" className="input text-lg font-normal input-bordered  w-[60%] focus:outline-none" />
                    
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-2/5" htmlFor="Site_name">Site Logo:</label>
                    <input name="logo" type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered  w-[60%] focus:outline-none" />
                    
                </div>
                <button className="btn bg-red-300">Submit</button>
            </form>
        </div>
    );
};

export default MyProfile;