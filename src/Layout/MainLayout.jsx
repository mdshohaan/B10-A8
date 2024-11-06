import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div>
        <Toaster/>
        <Navbar/>
      </div>
      <div >
        {/* Dynamic */}
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;