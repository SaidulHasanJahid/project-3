"use client";

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import PriceDetails from "@/@modules/@common/price-deatile";
import { baseUrl } from "@/utils/url";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const router = useRouter();

  // 🔹 State for shipping & packaging
  const [shippingCost, setShippingCost] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);

  const [packaging, setPackaging] = useState("free"); 
  const [packagingType, setPackagingType] = useState("default"); 

  // 🔹 Subtotal calculation
  const cartTotal = useMemo(
    () => cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    [cart]
  );

  // 🔹 Final price
  const finalPrice = cartTotal + shippingCost + packagingCost;

  return (
    <div>
      {/* ✅ Top Banner Section */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Order Checkout</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / order checkout
        </p>
      </div>

      <div className="container">
        {/* ✅ Steps */}
        <div className="w-full max-w-4xl mx-auto p-8">
          <div className="flex items-center gap-5">
            {/* Step 1 */}
            <div className="relative flex items-center">
              <div className="flex items-center bg-slate-600 text-white px-6 py-4 pr-8">
                <div className="flex items-center justify-center w-8 h-8 bg-white text-slate-600 rounded-full text-sm font-semibold mr-3">
                  1
                </div>
                <FaUser className="w-5 h-5 mr-2" />
                <span className="font-medium text-lg">Address</span>
              </div>
              <div className="w-0 h-0 border-l-[20px] border-l-slate-600 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center -ml-1">
              <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pr-8 pl-8">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                  2
                </div>
                <FaShoppingCart className="w-5 h-5 mr-2" />
                <span className="font-medium text-lg">Orders</span>
              </div>
              <div className="w-0 h-0 border-l-[20px] border-l-gray-200 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center -ml-1">
              <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pl-8">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                  3
                </div>
                <FaCreditCard className="w-5 h-5 mr-2" />
                <span className="font-medium text-lg">Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left - Cart Items */}
          <div className="md:col-span-2 border border-[#BDCCDB] rounded-md">
            <div className="p-4 space-y-4">
              {cart.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-4 pb-4 border-b border-[#BDCCDB] last:border-b-0"
                >
                  <Image
                    src={`${baseUrl}/${item?.thumbnail}`}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="border"
                  />
                  <div className="leading-relaxed">
                    <h3 className="font-semibold text-sm text-[#142350]">{item.name}</h3>
                    <p className="text-sm text-[#767678]">Price : {item.price}$</p>
                    <p className="text-sm text-[#767678]">Quantity : {item.quantity}</p>
                    <p className="text-sm font-semibold text-[#142350]">
                      Total Price : {item.price * item.quantity}$
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-[#BDCCDB]" />

            <div className="p-4 flex gap-3">
              <button
                onClick={() => router.push("/")}
                className="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => router.push("/customer/orderchackout")}
                className="bg-[#424A4D] text-white px-4 py-2 rounded cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>

          {/* Right - Price Details */}
          <PriceDetails
            cartTotal={cartTotal}
            shippingCost={shippingCost}
            packagingCost={packagingCost}
            finalPrice={finalPrice}
            showShippingOptions={true}
            packaging={packaging}
            setPackaging={setPackaging}
            packagingType={packagingType}
            setPackagingType={setPackagingType}
          />
        </div>
      </div>
    </div>
  );
}
