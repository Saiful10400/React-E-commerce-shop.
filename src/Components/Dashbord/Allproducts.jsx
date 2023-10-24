import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct";

const Allproducts = () => {
  const data = useLoaderData();
 
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
         
          <tbody>
            <tr>
              {data?.map((item, idx) => (
                <AllProduct key={item._id} item={item} idx={idx}></AllProduct>
              ))}
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allproducts;
