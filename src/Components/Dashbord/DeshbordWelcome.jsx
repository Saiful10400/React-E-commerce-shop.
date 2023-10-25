 import gif from "../../image/welcome.gif"
const DeshbordWelcome = () => {
    return (
        <div className="w-full h-[70vh] flex justify-center items-center flex-col">
            <img src={gif} alt="" />
            <h1 className="text-3xl text-center font-bold"> RI final shop Dashbord</h1>
        </div>
    );
};

export default DeshbordWelcome;