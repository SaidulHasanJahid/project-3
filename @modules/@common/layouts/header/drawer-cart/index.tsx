"use client";

import React from "react";
import { Drawer } from "antd";
import { IoMdClose } from "react-icons/io";
import { FiMinus, FiPlus, FiTrash2, FiTag, FiGift, FiTruck } from "react-icons/fi";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "@/appstore/cart/cart-slice";
import { useRouter } from "next/navigation";
import "./index.css";

interface DrawerCartProps {
  open: boolean;
  onClose: () => void;
}

const DrawerCart: React.FC<DrawerCartProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: any) => state.cart.items || []);

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <Drawer
      title={null}
      placement="right"
      onClose={onClose}
      open={open}
      width={460}
      closeIcon={false}
      maskClosable
      className="custom-cart-drawer flex flex-col"
      rootClassName="z-[2000] fixed top-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-shrink-0">
        <h2 className="text-[20px] font-semibold text-black leading-snug">
          Shopping Cart
        </h2>
        <button
          onClick={onClose}
          className="text-black cursor-pointer hover:text-red-500 transition-transform hover:scale-110"
        >
          <IoMdClose size={22} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto pr-1">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item: any) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b border-gray-200 pb-4 mb-4 cursor-pointer transition-all hover:bg-gray-50 rounded-md"
            >
              <Image
                src={item.image || item.thumbnail}
                alt={item.name}
                width={100}
                height={100}
                className="object-contain rounded-md"
              />
              <div className="flex-1 flex flex-col">
                <p className="text-[16px] font-medium text-black">{item.name}</p>
                <p className="text-[#f2072f] font-semibold text-[16px] mt-1">${item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-700 hover:bg-gray-100 hover:scale-110 transition-all cursor-pointer"
                  >
                    <FiMinus size={16} />
                  </button>

                  <span className="w-[45px] text-center border border-gray-200 rounded text-sm text-gray-700 py-1">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-700 hover:bg-gray-100 hover:scale-110 transition-all cursor-pointer"
                  >
                    <FiPlus size={16} />
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Fixed Section */}
      <div className="flex-shrink-0 mt-4 border-t border-gray-200 pt-4 bg-white">
        {/* Action Icons */}
        <div className="flex justify-between text-black mb-4">
          <button className="flex flex-col items-center gap-1 text-[13px] cursor-pointer py-2 px-3 w-[100px] hover:text-[#f2072f] transition-all">
            <FiTag size={22} />
            <span>Add Coupon</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[13px] cursor-pointer py-2 px-3 w-[100px] hover:text-[#f2072f] transition-all">
            <FiGift size={22} />
            <span>Add Gift</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[13px] cursor-pointer py-2 px-3 w-[100px] hover:text-[#f2072f] transition-all">
            <FiTruck size={22} />
            <span>Shipping</span>
          </button>
        </div>

        {/* Subtotal + Buttons */}
        <div className="bg-[#f7f7f7] p-4 rounded">
          <div className="flex justify-between text-black font-semibold text-lg">
            <span>Subtotal</span>
            <span className="text-[#f2072f]">${subtotal}</span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            Taxes and Shipping Calculated at checkout
          </p>

          <label className="flex items-center gap-2 text-xs text-gray-600 mt-2">
            <input type="checkbox" className="w-4 h-4" />
            I agree with the Terms and Conditions
          </label>

          <div className="flex gap-5 justify-center mt-4">
            <button
              onClick={() => handleNavigate("/cart")}
              className="px-6 py-3 text-[14px] font-medium border w-[160px] h-[48px] rounded-[3px] text-black bg-white cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white"
            >
              View Cart
            </button>
            <button
              onClick={() => handleNavigate("/check-out")}
              className="px-6 py-3 w-[160px] h-[48px] text-[14px] font-medium rounded-[3px] bg-black text-white border border-transparent cursor-pointer transition-all duration-300 hover:bg-[#f2072f]"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerCart;
