import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const RightDrawer = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      const [activeTab, setActiveTab] = useState("nav");

    return (
        <div>
              <div className="md:hidden w-[100%]">
            <FaBars size={22} onClick={() => setShowDrawer(true)} className="cursor-pointer text-[rgb(27,27,30)]" />
          </div>
             <div className={clsx("fixed top-0 left-0 w-[280px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300", showDrawer ? "translate-x-0" : "-translate-x-full")}> 
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png" alt="Mobile Logo" width={120} height={40} />
          <button onClick={() => setShowDrawer(false)} className="text-lg font-bold">×</button>
        </div>
        <div className="flex text-sm font-semibold">
          <button onClick={() => setActiveTab("nav")} className={clsx("flex-1 p-2 text-center", activeTab === "nav" ? "bg-[#fcf9f8] text-[rgb(27,27,30)] border-b-2 border-[rgb(27,27,30)]" : "text-gray-500")}>
            Navigation
          </button>
          <button onClick={() => setActiveTab("category")} className={clsx("flex-1 p-2 text-center", activeTab === "category" ? "bg-[#fcf9f8] text-[rgb(27,27,30)] border-b-2 border-[rgb(27,27,30)]" : "text-gray-500")}>
            Category
          </button>
        </div>
        <div className="p-4 text-sm text-[rgb(27,27,30)]">
          {activeTab === "nav" && (
            <ul className="space-y-2">
              {["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"].map((item) => (
                <li key={item} className="cursor-pointer py-2 leading-6 hover:text-[#6b3d2e]" style={{ border: "none" }}>{item}</li>
              ))}
            </ul>
          )}
          {activeTab === "category" && (
            <ul className="space-y-2">
              {["ELECTRONIC", "FASHION & BEAUTY", "CAMERA & PHOTO", "SMART PHONE & TABLET"].map((cat, i) => (
                <li key={i} className="cursor-pointer py-2 leading-6 hover:text-[#6b3d2e]" style={{ border: "none" }}>{cat}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {showDrawer && (
        <div onClick={() => setShowDrawer(false)} className="fixed inset-0  bg-opacity-50 z-40" />
      )}
        </div>
        
    );
};

export default RightDrawer;