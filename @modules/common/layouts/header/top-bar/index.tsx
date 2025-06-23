import React from "react";
import { FaChevronDown, FaGlobe, FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className=" ">
      <div className=" lg:w-[90%] m-auto hidden sm:flex justify-between items-center px-4 lg:px-6 py-2 text-sm text-[#767678]">
        <div>Contact & Support : 00 000 000 000</div>
        <div className="flex gap-4 items-center relative z-50">
          {/* Language dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <FaGlobe /> English <FaChevronDown className="text-xs" />
            </div>
            <ul className="leading-12 w-28 text-center  absolute top-full left-0 mt-2 bg-white shadow-md p-2 text-[13px] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
              {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
          {/* Currency dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              $ USD <FaChevronDown className="text-xs" />
            </div>
            <ul className="absolute leading-12 w-28 text-center top-full left-0 mt-2 bg-white shadow-md p-2 text-[15px] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
              {["USD", "BDT", "INR", "EURO"].map((cur, i) => (
                <li key={i}>{cur}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaUser /> My Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
