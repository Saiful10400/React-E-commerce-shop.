 

const Product = ({item}) => {
    const {name,price,quantity ,catagory,discount,details,available,preorder,img,_id} =item
    return (
        <div className="border-2 border-gray-200 mx-4 py-3">
            <div className="w-ful">
            <img className="w-full h-80 object-contain" src={img} alt={name} />
            </div>
            <div className="flex mt-5 w-4/5 mx-auto flex-col justify-center items-center gap">
                <h1 className="text-xl font-bold">{name}</h1>
                <h1>{catagory}</h1>
                <h1>{new Intl.NumberFormat("bn-BD").format(price)}</h1>
                <button className="btn w-full text-white bg-green-600">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;



