import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const AllProduct = ({ item, idx }) => {
   
   
  const { name, price, quantity, discount,_id } = item;



  return (
    <tr >
      <th>{idx+=1}</th>
      <td>{name}</td>
      <td>{price}<span className={`${discount?"inline-block" : "hidden"}`}>(-{discount})</span></td>
      <td>{quantity}</td>
      <td><Link to={`/admin/update/${_id}`} className="btn bg-transparent border-none hover:bg-red-300"><MdOutlineModeEdit></MdOutlineModeEdit></Link></td>
    </tr>
  );
};

export default AllProduct;
