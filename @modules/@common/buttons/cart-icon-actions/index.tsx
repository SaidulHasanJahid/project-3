"use client";

import React from "react";
import {
  FaHeart,
  FaRegSmile,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";

const CartIconActions = () => {
  return (
    <div className="absolute top-25 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
      {/* Shopping Bag */}
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#424A4D] text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-[#424A4D] hover:border-[#424A4D]">
        <FaShoppingBag size={14} />
      </button>

      {/* Cart */}
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#424A4D] text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-[#424A4D] hover:border-[#424A4D]">
        <FaShoppingCart size={14} />
      </button>

      {/* Heart */}
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#424A4D] text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-[#424A4D] hover:border-[#424A4D]">
        <FaHeart size={14} />
      </button>

      {/* Smile */}
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#424A4D] text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-[#424A4D] hover:border-[#424A4D]">
        <FaRegSmile size={14} />
      </button>
    </div>
  );
};

export default CartIconActions;
