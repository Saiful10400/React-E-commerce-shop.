

const Products = () => {
    return (
      <div>
        <form className="flex flex-col gap-4 px-1">
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
              Product Name :
            </label>
            <input
              type="text"
              placeholder="type here."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
              Product Price :
            </label>
            <input
              type="number"
              placeholder="type here."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[48%] " htmlFor="Site_name">
              Product Quantity :
            </label>
            <input
              type="number"
              placeholder="Including units."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-between items-start">
            <label className="text-xl font-bold w-[45%] " htmlFor="Site_name">
              Price Discount : 
              <span className="text-sm font-light">(optional)</span>
            </label>
            <input
              type="number"
              placeholder="In percent."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
              Product Description :
            </label>
            <textarea
              name=""
              placeholder="type here."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] h-40 focus:outline-none"
            ></textarea>
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[45%] " htmlFor="Site_name">
              Select Catagory :
            </label>

            <select
              name=""
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            >
              <option value="" disabled selected>
                Select one.
              </option>
              <option value="">Cooking (রান্না-বান্না)</option>
              <option value="">Dry Fruits</option>
              <option value="">Ghee (ঘি)</option>
              <option value="">Ghee And Sharisha OIL</option>
              <option value="">Grocery (বাজার)</option>
              <option value="">Honey (মধু)</option>
              <option value="">Nuts & Seeds (বাদাম এবং বীজ)</option>
              <option value="">Mango (আম)</option>
              <option value="">সুন্দরবনের মধু</option>
              <option value="">Tea/Snacks (চা-নাশতা)</option>
              <option value="">Uncategorized</option>
            </select>
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
              Available :
            </label>

            <label className="cursor-pointer text-lg font-bold" htmlFor="bestYes">
              Yes
            </label>
            <input
              required
              id="bestYes"
              type="radio"
              name="bestdeal"
              defaultValue="true"
              className="radio radio-primary"
            />
            <label className="cursor-pointer text-lg font-bold" htmlFor="bestNo">
              No
            </label>
            <input
              required
              id="bestNo"
              type="radio"
              name="bestdeal"
              defaultValue="false"
              className="radio radio-primary"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
              Pre-Order :
            </label>

            <label className="cursor-pointer text-lg font-bold" htmlFor="preYes">
              Yes
            </label>
            <input
              required
              id="preYes"
              type="radio"
              name="bestdeal"
              defaultValue="true"
              className="radio radio-primary"
            />
            <label className="cursor-pointer text-lg font-bold" htmlFor="preNO">
              No
            </label>
            <input
              required
              id="preNO"
              type="radio"
              name="bestdeal"
              defaultValue="false"
              className="radio radio-primary"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="text-xl font-bold w-[45%] " htmlFor="Site_name">
              Product Image :
            </label>
            <input
              type="text"
              placeholder="Past imge link."
              className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
            />
          </div>
          <button className="btn bg-red-300 font-bold ">Post</button>
        </form>
      </div>
    );
};

export default Products;