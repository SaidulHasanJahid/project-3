import React, { useState } from "react";
import { FaChevronDown, FaGlobe, FaUser } from "react-icons/fa";
const TopBar = () => {
  const currencies = ['USD', 'BDT', 'INR', 'EURO'];
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
const languages = ['English', 'Spanish', 'French', 'Bangla'];
  const [selectedLang, setSelectedLang] = useState('English');
  return (
    <div className="flex justify-between items-center text-[15px] text-[#767678] max-[1000px]:hidden">
      {/* Left side */}
      <div>Contact & Support : 00 000 000 000</div>

      {/* Right side */}
      <div className="flex gap-4 sm:gap-6 items-center relative z-50">
        {/* Language dropdown */}


     <div className="relative group cursor-pointer">
      {/* Selected Currency */}
      <div className="flex items-center gap-2 sm:gap-4  pr-4 border-r border-[#767678d2] h-[25px]">
       <FaGlobe /> {selectedLang} <FaChevronDown className="text-xs" />
      </div>

      {/* Dropdown List */}
      <ul className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] text-center rounded-md 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 ease-in-out z-50">
        {languages.map((cur, i) => (
          <li
            key={i}
            onClick={() => setSelectedLang(cur)}
            className="py-1 hover:text-black cursor-pointer"
          >
            {cur}
          </li>
        ))}
      </ul>
    </div>




     <div className="relative group cursor-pointer">
      {/* Selected Currency */}
      <div className="flex items-center gap-2 sm:gap-4 pr-4 border-r border-[#767678d2] h-[25px]">
        $ {selectedCurrency} <FaChevronDown className="text-xs" />
      </div>

      {/* Dropdown List */}
      <ul className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] text-center rounded-md 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 ease-in-out z-50">
        {currencies.map((cur, i) => (
          <li
            key={i}
            onClick={() => setSelectedCurrency(cur)}
            className="py-1 hover:text-black cursor-pointer"
          >
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
