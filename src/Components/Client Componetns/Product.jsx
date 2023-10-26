import diskimg from "../../image/discount.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import {BsTelephoneOutboundFill} from "react-icons/bs"
const Product = ({ item }) => {
  const {
    name,
    price,
    quantity,
    catagory,
    discount,
    details,
    available,
    preorder,
    img,
    _id,instock
  } = item;
console.log(instock)
  return (
    <div data-aos="fade-up"
     className="border-2 border-gray-200 mx-4 py-3">
      <div className="w-ful overflow-hidden relative">
        <h1
          className={`${
            preorder === "true" ? "" : "hidden"
          } text-md flex font-bold text-white absolute top-2 z-10 right-2 bg-red-600 rounded-full  justify-center items-center w-20 h-20`}
        >
          Pre-order
        </h1>

        <h1 className={`${instock && available==="true" ? "block" :"hidden"} absolute bottom-0 left-4 py-2 rounded-lg px-1 z-20 text-xl bg-red-600 text-white font-bold`}>{`( ${instock} )`} In stock</h1>

        <h1
          className={`${
            available === "true" ? "hidden" : "block"
          } bg-red-500 absolute w-full text-center text-3xl text-white z-20 bottom-0`}
        >
          Sold out
        </h1>
        <span
          className={`${
            discount ? "inline-block" : "hidden"
          } bgred absolute text-2xl font-bold bg-red-700 text-white w-16 h-16 flex justify-center items-center rounded-full z-20`}
        >
          -{discount}৳
        </span>

        <img
          className="w-full h-80 hover:scale-125  transition-all duration-700 object-contain"
          src={img}
          alt={name}
        />
      </div>
      <div className="flex mt-5 w-4/5 mx-auto flex-col justify-center items-center gap-1">
        <h1 className="text-xl font-bold">{name} </h1>
        <h1 className="text-xl font-bold">{`(${quantity})`}</h1>
        <h1>{catagory}</h1>
        <div className="flex gap-4 text-3xl">
          {" "}
          <span className={discount ? "line-through text-red-500" : "hidden"}>
            {new Intl.NumberFormat("bn-BD").format(price) + "৳"}
          </span>
          <h1>
            {discount
              ? new Intl.NumberFormat("bn-BD").format(price - discount)
              : new Intl.NumberFormat("bn-BD").format(price)}
            ৳
          </h1>
        </div>
        <a href="tel:01813-728272" className="btn w-full text-white bg-green-600 text-xl"><BsTelephoneOutboundFill></BsTelephoneOutboundFill> <span>Call for order</span></a>
      </div>
    </div>
  );
};

export default Product;

// new Intl.NumberFormat("bn-BD").format()
// new Intl.NumberFormat("bn-BD").format()
// new Intl.NumberFormat("bn-BD").format()
// new Intl.NumberFormat("bn-BD").format()
// new Intl.NumberFormat("bn-BD").format()
