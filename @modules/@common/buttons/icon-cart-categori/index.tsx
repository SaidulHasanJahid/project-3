"use client";

import React from "react";
import { FaHeart, FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";

interface CartIconActionsProps {
  isHovered: boolean;
}

const CartIconActions: React.FC<CartIconActionsProps> = ({ isHovered }) => {
  const icons = [
    { id: 1, icon: <FaShoppingCart size={16} />, label: "Add to cart" },
    { id: 2, icon: <FaSearch size={16} />, label: "Quick view" },
    { id: 3, icon: <FaExchangeAlt size={16} />, label: "Compare" },
    { id: 4, icon: <FaHeart size={16} />, label: "Add wishlist" },
  ];

  return (
    <div
      className={`absolute top-5 right-2 flex flex-col transition-all duration-500 ${
        isHovered
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6 pointer-events-none"
      }`}
    >
      {icons.map((item) => (
        <div key={item.id} className="relative group/item">
          <button
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFFFFF] text-[#333] 
            hover:bg-[#333] hover:text-white transition-all duration-300 cursor-pointer "
          >
            {item.icon}
          </button>

          {/* Tooltip Text */}
          <span
            className="absolute left-[-115px] top-1/2 -translate-y-1/2 bg-[#000000] text-white text-[15px] px-3 py-[3px] 
            whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-x-3 group-hover/item:translate-x-0 
            transition-all duration-300 "
          >
            {item.label}
          </span>

          {/* Tooltip Arrow */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-black opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
        </div>
      ))}
    </div>
  );
};

export default CartIconActions;
