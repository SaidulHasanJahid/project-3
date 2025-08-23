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
    <div className="absolute top-25 cursor-pointer right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
      <button className="bg-white p-2 hover:bg-gray-100 cursor-pointer  ">
        <FaShoppingBag />
      </button>
      <button className="bg-white p-2 shadow hover:bg-gray-100 cursor-pointer ">
        <FaShoppingCart />
      </button>
      <button className="bg-white p-2 shadow hover:bg-gray-100 cursor-pointer ">
        <FaHeart />
      </button>
      <button className="bg-white p-2 shadow hover:bg-gray-100 cursor-pointer ">
        <FaRegSmile />
      </button>
    </div>
  );
};

export default CartIconActions;
