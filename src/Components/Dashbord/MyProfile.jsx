 

const MyProfile = () => {
    return (
        <div>
            <form className="flex flex-col gap-3 px-1">
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-2/5" htmlFor="Site_name">Site Name:</label>
                    <input type="text" placeholder="Type here" className="input text-lg font-normal input-bordered  w-[60%] focus:outline-none" />
                    
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-2/5" htmlFor="Site_name">Site Logo:</label>
                    <input type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered  w-[60%] focus:outline-none" />
                    
                </div>
                <button className="btn bg-red-300">Submit</button>
            </form>
        </div>
    );
};

export default MyProfile;