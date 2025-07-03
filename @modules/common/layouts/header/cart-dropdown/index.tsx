"use client";
import React from "react";
import { FaHeart, FaRandom, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartDropdown = ({
  iconSize = "md",
}: {
  iconSize?: "md" | "lg" | "xl";
}) => {
  const sizeClassMap: any = {
    md: "w-6 h-6 text-[12px]",
    lg: "w-10 h-10 text-[16px]",
    xl: "w-12 h-12 text-[20px]",
  };
  const sizeClass = sizeClassMap[iconSize];

  const cart = useSelector((state: any) => state?.cart?.items);

  console.log(cart);

  console.log(cart?.length);

  return (
    <div className="flex gap-2 items-center">
      <div
        className={`relative ${sizeClass} rounded-full  flex items-center justify-center cursor-pointer`}
      >
        <FaHeart className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          0
        </span>
      </div>
      <div
        className={`relative ${sizeClass} rounded-full  flex items-center justify-center cursor-pointer`}
      >
        <FaRandom className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          0
        </span>
      </div>
      <div
        className={`relative ${sizeClass} rounded-full  flex items-center justify-center cursor-pointer`}
      >
        <FaShoppingCart className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          {cart?.length || 0}
        </span>
      </div>
    </div>
  );
};

export default CartDropdown;
