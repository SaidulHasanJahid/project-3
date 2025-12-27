"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/appstore/cart/cart-slice";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart?.items || []);

  const subtotal = cartItems.reduce(
    (sum: number, item: any) =>
      sum + (item.discount_price || item.price) * item.quantity,
    0
  );

  const shippingCost = 60;
  const total = subtotal + shippingCost;

  const formatBDT = (n: number) =>
    "৳ " + n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const handleIncrease = (item: any) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {/* Top Banner */}
      <div
        className="w-full h-[260px] flex flex-col justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://tasa.com.bd/wp-content/uploads/2023/02/h9ip.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-[48px] md:text-[60px] font-semibold text-[#fff]">
            Cart
          </h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / Cart
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-8 flex items-center gap-3">
            <AiOutlineShoppingCart className="text-xl" />
            <h1 className="text-2xl font-semibold text-[#111]">Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
              <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* LEFT SIDE - Cart Items Table */}
              <div className="lg:col-span-8">
                <div className="border border-gray-200 rounded-sm overflow-hidden">
                  {/* Desktop Header */}
                  <div className="hidden md:grid md:grid-cols-12 items-center text-[13px] font-medium uppercase text-gray-600 border-b bg-gray-50 px-6 py-3">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Subtotal</div>
                  </div>

                  {/* Cart Items */}
                  {cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="border-b last:border-b-0 px-4 py-5 md:px-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Product */}
                        <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                          <div className="relative w-16 h-16 md:w-[70px] md:h-[70px] rounded-sm border overflow-hidden flex-shrink-0">
                            <Image
                              src={item.thumbnail || "/placeholder.jpg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="font-medium text-sm md:text-base">
                            {item.name}
                          </div>
                        </div>

                        {/* Price - Mobile Label + Desktop */}
                        <div className="col-span-1 md:col-span-2 text-right md:text-right">
                          <p className="md:hidden text-xs text-gray-600 mb-1">
                            Price
                          </p>
                          <p className="text-sm font-medium">
                            {formatBDT(item.discount_price || item.price)}
                          </p>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-1 md:col-span-3 flex items-center justify-start md:justify-center gap-3">
                          <p className="md:hidden text-xs text-gray-600">
                            Quantity
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDecrease(item.id)}
                              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrease(item)}
                              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="col-span-1 md:col-span-2 text-right">
                          <p className="md:hidden text-xs text-gray-600 mb-1">
                            Subtotal
                          </p>
                          <p className="text-sm font-medium">
                            {formatBDT(
                              (item.discount_price || item.price) * item.quantity
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE - Cart Totals */}
              <aside className="lg:col-span-4">
                <div className="border border-gray-200 rounded-sm p-6 shadow-sm bg-white">
                  <h2 className="text-[16px] font-semibold mb-4">CART TOTALS</h2>

                  <div className="flex justify-between border-b pb-3 mb-3 text-sm">
                    <span>Subtotal</span>
                    <span>{formatBDT(subtotal)}</span>
                  </div>

                  <div className="text-sm border-b pb-3 mb-3">
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{formatBDT(shippingCost)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Home Delivery – Chattogram City
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-b">
                    <span className="text-sm font-medium">Total</span>
                    <span className="text-lg font-semibold">
                      {formatBDT(total)}
                    </span>
                  </div>

                  <Link href="/customer/checkout">
                    <button className="w-full mt-4 bg-black text-white text-sm font-semibold py-3 hover:bg-gray-800 transition cursor-pointer">
                      PROCEED TO CHECKOUT
                    </button>
                  </Link>

                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Shipping to Chattogram.{" "}
                    <button className="underline hover:text-black cursor-pointer">
                      Change address
                    </button>
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  );
}