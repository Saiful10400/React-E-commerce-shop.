 
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Dashbord = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Dashbord;