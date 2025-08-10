"use client";
import React, { useState } from "react";
import { FaHeart, FaRandom, FaShoppingCart } from "react-icons/fa";
import { removeFromCart, decreaseQuantity } from "@/appstore/cart/cart-slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

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

  // Handle remove / decrease
  const handleRemove = (id: number, quantity: number) => {
    console.log("Remove clicked for id:", id, "quantity:", quantity);
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      dispatch(removeFromCart(id));
    }
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
          <div className="absolute top-10 right-0 w-[260px] bg-white shadow-lg border border-gray-200 rounded-md z-50 p-4">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex gap-3 mb-3 items-center"
                    // optional: prevent hover from closing dropdown if needed
                    // onMouseEnter={() => setOpen(true)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="border"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × {item.price}$
                      </p>
                    </div>
                    <button
                      className="text-sm text-gray-400 hover:text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(item.id, item.quantity);
                      }}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div className="flex justify-between font-semibold mb-3">
                  <span>Total:</span>
                  <span>{total}$</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded">
                    View cart
                  </button>
                  <button className="flex-1 bg-black text-white hover:bg-gray-800 text-sm py-2 rounded">
                    Check out
                  </button>
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
