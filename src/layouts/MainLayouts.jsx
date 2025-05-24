import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../components/Loader';

const MainLayouts = () => {
    const{state}=useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {state=="loading"? <Loader/>:<Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;