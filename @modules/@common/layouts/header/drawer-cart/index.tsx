"use client";

import React from "react";
import { Drawer } from "antd";
import { FiX } from "react-icons/fi";
import Image from "next/image";

interface DrawerCartProps {
  open: boolean;
  onClose: () => void;
}

const DrawerCart: React.FC<DrawerCartProps> = ({ open, onClose }) => {
  return (
    <Drawer
      title={null}
      placement="right"
      onClose={onClose}
      open={open}
      width={350}
      closeIcon={false}
      className="cart-drawer"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-3 mb-3">
        <h2 className="text-[18px] font-semibold text-gray-800">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
          <FiX size={22} />
        </button>
      </div>

      {/* Static Product List */}
      <div className="space-y-4">
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <Image
                src="https://via.placeholder.com/60"
                alt="Product"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">Product Name</p>
                <p className="text-sm text-gray-500">1 × $25.00</p>
              </div>
            </div>
            <p className="font-semibold text-gray-800">$25.00</p>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-5 border-t pt-3 flex justify-between text-[15px] font-medium text-gray-800">
        <span>Subtotal:</span>
        <span>$50.00</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3">
        <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
          View Cart
        </button>
        <button className="w-full py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition">
          Checkout
        </button>
      </div>
    </Drawer>
  );
};

export default DrawerCart;
