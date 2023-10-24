 

const Mysite = () => {
    return (
        <div>
          <form className="flex flex-col gap-3 px-1">
                
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 1:</label>
                    <input type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 2:</label>
                    <input type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">Site banner 3:</label>
                    <input type="text" placeholder="Past logo link." className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none" />
                </div>
                <button className="btn bg-red-300">Post</button>
            </form>
        </div>
    );
};

export default Mysite;