"use client";

import { removeFromCart } from "@/appstore/cart/cart-slice";
import { baseUrl } from "@/utils/url";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const CustomerCart = () => {
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const qtys: { [key: string]: number } = {};
    cart.forEach((item: any) => {
      qtys[item.id] = quantities[item.id] || 1;
    });
    setQuantities(qtys);
  }, [cart]);

  const handleQuantityChange = (id: string | number, delta: number) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 1;
      let newQty = currentQty + delta;
      if (newQty < 1) newQty = 1;
      return { ...prev, [id]: newQty };
    });
  };

  const getSubtotal = (price: string | number, id: string | number) => {
    const qty = quantities[id] || 1;
    return Number(price) * qty;
  };

  const total = cart.reduce((acc: number, item: any) => {
    const qty = quantities[item.id] || 1;
    return acc + Number(item.price) * qty;
  }, 0);

  const handleRemove = (id: string | number) => {
    dispatch(removeFromCart(Number(id)));
  };


  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px] cursor-pointer">Home</span>
          </Link>{" "}
          / Cart
        </p>
      </div>

      {/* Cart Body */}
      <div className="py-10 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Cart Table */}
          <div className="lg:col-span-2 w-full overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center p-4 text-gray-500">
                      Your cart is empty
                    </td>
                  </tr>
                )}
                {cart.map((item: any) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="p-4 flex items-center gap-4 max-w-[250px]">
                      <div className="min-w-[64px] min-h-[64px]">
                        <img
                          src={`${baseUrl}/${item?.thumbnail}`}
                          alt={item.name || "Product"}
                          width={64}
                          height={64}
                          className="object-cover rounded"
                        />
                      </div>
                      <span className="truncate font-medium text-gray-800 text-sm">
                        {item.slug || "Product Title"}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-[#767678]">${Number(item.price).toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center border-[#767678] border rounded w-[100px]">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 text-lg font-semibold flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{quantities[item.id] || 1}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 text-lg font-semibold flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-semibold text-[#767678]">
                      ${getSubtotal(item.price, item.id).toFixed(2)}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        aria-label={`Remove ${item.name}`}
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right - Cart Totals */}
          <div className="border border-gray-200 rounded p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">CART TOTALS</h2>
            <div className="flex justify-between py-2 border-b text-sm text-gray-700">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b text-sm text-gray-700">
              <span>Discount</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-base text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href={"/customer/checkout"}>
              <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-black transition-all duration-300 cursor-pointer">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCart;
