'use client';

import React, { useState, useEffect } from 'react';
import ListContent from './leftsidelist';
import CartProduct from './cartproduct';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const ProductAllContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1300);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Product</h1>
        <p className="text-sm mt-1">
          <Link href="/">
            <span className="text-[16px]">Home</span>
          </Link>{' '}
          / Product
        </p>
      </div>

      {/* Main Content */}
      <div className="container  mx-auto">
        {/* Show sidebar toggle on small screens */}
        {isMobile && (
          <button
            className="flex items-center gap-2 text-black border px-4 py-2 rounded mt-4"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars /> Filter Products
          </button>
        )}

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          {/* Sidebar (only visible on large screens) */}
          {!isMobile && (
            <div className="col-span-1">
              <ListContent />
            </div>
          )}

          {/* Main Product Grid */}
          <div className={`w-full ${isMobile ? 'col-span-1' : 'col-span-2'}`}>
            <CartProduct />
          </div>
        </div>
      </div>

      {/* Drawer for ListContent on small devices */}
      {isMobile && drawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full  bg-opacity-40 z-50 flex">
          <div className="w-[80%] sm:w-[60%] md:w-[40%] bg-white p-4 shadow h-full overflow-y-auto relative">
            <button
              className="absolute top-3 right-4 text-xl text-[#767678]"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            <ListContent />
          </div>
          {/* Clicking outside closes drawer */}
          <div
            className="flex-1"
            onClick={() => setDrawerOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default ProductAllContent;
