 
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Dashbord = () => {
    return (
        <div>
           <div className='sticky top-0 z-10'><Header></Header></div>
           <div className='relative z-0'><Outlet></Outlet></div>
        </div>
    );
};

export default Dashbord;