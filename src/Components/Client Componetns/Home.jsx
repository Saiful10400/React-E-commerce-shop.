import MessengerCustomerChat from "react-messenger-customer-chat";
import ReactWhatsapp from 'react-whatsapp';

const Home = () => {
  return (
    <div>
      <a href="tel:2039023900349304">call me</a>
      <MessengerCustomerChat
        pageId="119223044454029"
        appId="1039113217436871"
        
      />
      <ReactWhatsapp number="+8801626434154" message="Hello World!!!" className="btn  btn-primary"> contuct whats app</ReactWhatsapp>
    </div>
  );
};

export default Home;
