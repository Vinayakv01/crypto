import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../home/header';

const Layout = () => {
  return (
    <div className="relative font-Montserrat min-h-screen">
      <div className="absolute w-full z-50">
        {/* Navbar Component */}
        <Header />
      </div>
      <div className="">
        {/* Main Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

