import NavBar from "./NavBar";
import Products from "./Products";
import Slider from "./Slider";
import whlogo from "../../image/whatsapp.png"
import ReactWhatsapp from 'react-whatsapp';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from "./Footer";



const Home = () => {
  return (
    <div>

      <div className="sticky top-0 z-50"><NavBar></NavBar></div>
      <div>
        
<ReactWhatsapp number="+8801813728272" message="একটি প্রডাক্ট সম্পর্কে জানতে চাই।">
      <div className="fixed w-12 bg-white rounded-xl right-4 top-[67vh] flex flex-col justify-center items-center z-20">
      <img className="w-full" src={whlogo} alt="" />
      <span className="font-bold w-full text-center">Chat</span>
      </div>
      </ReactWhatsapp>
      
      <MessengerCustomerChat
    pageId="119223044454029"
    appId="3522270727991182"
    
  />
      </div>
     <div className="relative z-0">
       <Slider></Slider>
      <Products></Products>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
