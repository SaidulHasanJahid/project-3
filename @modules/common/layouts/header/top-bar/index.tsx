import React from 'react';
import { FaChevronDown, FaGlobe, FaUser } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div
      className="
        hidden 
        max-[1000px]:hidden  
        min-[1001px]:flex    
        justify-between items-center 
        text-[15px] text-[#767678] 
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 
        w-[90%] mx-auto mt-[-10px]"
    >
      {/* Left side */}
      <div>Contact & Support : 00 000 000 000</div>

      {/* Right side */}
      <div className="flex gap-4 sm:gap-6 items-center relative z-50">
        {/* Language dropdown */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-4 pr-4 border-r border-[#767678da] h-[25px]">
            <FaGlobe /> English <FaChevronDown className="text-xs" />
          </div>
          <ul className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md p-2 text-[13px] text-center rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
            {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
              <li key={i} className="py-1 hover:text-black cursor-pointer">
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Currency dropdown */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-4 pr-4 border-r border-[#767678d2] h-[25px]">
            $ USD <FaChevronDown className="text-xs" />
          </div>
          <ul className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] text-center rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
            {["USD", "BDT", "INR", "EURO"].map((cur, i) => (
              <li key={i} className="py-1 hover:text-black cursor-pointer">
                {cur}
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUser /> My Account
        </div>
      </div>
    </div>
  );
};

export default TopBar;
