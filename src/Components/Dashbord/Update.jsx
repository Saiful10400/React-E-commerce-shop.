import { useLoaderData, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Update = () => {
    const move=useNavigate()
    const oldData=useLoaderData()
    const {name,price,quantity ,catagory,discount,details,available,preorder,img,_id} =oldData
    
    console.log(oldData)
  const formControll = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const discount = form.discount.value;
    const details=form.details.value
    const catagory=form.catagory.value
    const available=form.Available.value
    const preorder=form.preorder.value
    const img=form.img.value
    const product={name,price,quantity,_id ,catagory,discount,details,available,preorder,img}
 

    fetch("https://rifinalshop-lw5sl7gf8-saifuls-projects-92f6e13c.vercel.app/admin/update",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then((responce)=>{
      if(responce){
        swal("success","product has updated.","success")
        move(-1)
      }
    })
    
  }

  const deletehandle=(e)=>{
    e.preventDefault()
    
     fetch("https://rifinalshop-lw5sl7gf8-saifuls-projects-92f6e13c.vercel.app/admin/delete",{
      method:"delete",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({id:_id})
    })
    .then(res=>res.json())
    .then(responce=>{
        if(responce){
            move(-1)
            swal("success!","product has deleted.","success")
        }
    })

  };
  return (
    <div>
        <h1 className='text-center py-4 text-xl font-bold border-b-4 border-black mb-2 '>Update product.</h1>
      <form onSubmit={formControll} className="flex flex-col gap-4 px-1">
        <div className="w-full flex justify-between items-center">
          <label className="text-xl font-bold w-[40%] " htmlFor="Site_name">
            Product Name :
          </label>
          <input
          defaultValue={name}
            name="name"
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
          defaultValue={price}
            name="price"
            type="text"
            placeholder="type here."
            className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label className="text-xl font-bold w-[48%] " htmlFor="Site_name">
            Product Quantity :
          </label>
          <input
            name="quantity"
            defaultValue={quantity}
            type="text"
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
            name="discount"
            defaultValue={discount}
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
            name="details"
            defaultValue={details}
            placeholder="type here."
            className="input text-lg font-normal input-bordered input-secondary w-[50%] h-40 focus:outline-none"
          ></textarea>
        </div>
        <div className="w-full flex justify-between items-center">
          <label className="text-xl font-bold w-[45%] " htmlFor="Site_name">
            Select Catagory :
          </label>

          <select
            name="catagory"
            defaultValue={catagory}
            className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
          >
            <option value="" disabled selected>
              Select one.
            </option>
            <option value="Cooking (রান্না-বান্না)">Cooking (রান্না-বান্না)</option>
            <option value="Dry Fruits">Dry Fruits</option>
            <option value="Ghee (ঘি)">Ghee (ঘি)</option>
            <option value="Ghee And Sharisha OIL">Ghee And Sharisha OIL</option>
            <option value="Grocery (বাজার)">Grocery (বাজার)</option>
            <option value="Honey (মধু)">Honey (মধু)</option>
            <option value="Nuts & Seeds (বাদাম এবং বীজ)">Nuts & Seeds (বাদাম এবং বীজ)</option>
            <option value="Mango (আম)">Mango (আম)</option>
            <option value="সুন্দরবনের মধু">সুন্দরবনের মধু</option>
            <option value="Tea/Snacks (চা-নাশতা)">Tea/Snacks (চা-নাশতা)</option>
            <option value="Uncategorized">Uncategorized</option>
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
            name="Available"
            
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
            name="Available"
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
            name="preorder"
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
            name="preorder"
            defaultValue="false"
            className="radio radio-primary"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <label className="text-xl font-bold w-[45%] " htmlFor="Site_name">
            Product Image :
          </label>
          <input
          name="img"
            type="text"
            defaultValue={img}
            placeholder="Past imge link."
            className="input text-lg font-normal input-bordered input-secondary w-[50%] focus:outline-none"
          />
        </div>
        <button className="btn bg-red-300 font-bold ">update</button>
        <button onClick={deletehandle} className="btn bg-warning font-bold ">Delete</button>
      </form>
    </div>
  );
};

export default Update;