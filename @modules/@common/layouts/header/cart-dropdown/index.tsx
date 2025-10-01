
"use client";
import React, { useState } from "react";
import { FaHeart, FaRandom, FaShoppingCart } from "react-icons/fa";
import { removeFromCart } from "@/appstore/cart/cart-slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "@/utils/url";
import Link from "next/link";

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

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const [open, setOpen] = useState(false);

  // Calculate total price
  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  // Remove full item from cart
  const handleRemove = (id: any) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex gap-2 items-center relative">
      {/* Heart */}
      <div
        className={`relative ${sizeClass} rounded-full flex items-center justify-center cursor-pointer`}
      >
        <FaHeart className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          0
        </span>
      </div>

      {/* Random */}
      <div
        className={`relative ${sizeClass} rounded-full flex items-center justify-center cursor-pointer`}
      >
        <FaRandom className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          0
        </span>
      </div>

      {/* Cart with dropdown */}
      <div
        className={`relative ${sizeClass} rounded-full flex items-center justify-center cursor-pointer`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <FaShoppingCart className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
          {cart.length}
        </span>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-10 right-0 w-[400px] bg-white shadow-lg border border-gray-200 rounded-md z-50 p-4">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex gap-3 mb-3 items-center border-b border-gray-100 pb-2"
                  >
                    <Image
                      src={`${baseUrl}/${item?.thumbnail}`}
                      alt={item.name}
                      width={70}
                      height={70}
                    />
                    <div className="flex-1">
                      <p className="text-[15px] line-clamp-2 text-[#141629] ml-5">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 ml-5">
                        {item.quantity} × {item.price}$
                      </p>
                    </div>
                    <button
                      className="text-[15px] text-gray-400 hover:text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(item.id); // full remove
                      }}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div className="flex justify-between font-semibold mb-3 mt-2">
                  <span>Total:</span>
                  <span>{total}$</span>
                </div>
                <div className="flex justify-center gap-2 mt-5">
                  <Link href="/customer/cart">
                    <button className="bg-gray-200 hover:bg-transparent hover:border-2 hover:border-[#767678] cursor-pointer text-sm py-2 h-[50px] rounded px-6">
                      View cart
                    </button>
                  </Link>
                  <Link href="/customer/checkout">
                    <button className="bg-[#141926] text-white hover:text-[#141926] hover:bg-transparent hover:border-2 hover:border-[#767678] cursor-pointer text-sm py-2 h-[50px] rounded px-6">
                      Check out
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
