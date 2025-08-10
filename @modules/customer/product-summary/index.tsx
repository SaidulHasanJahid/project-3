"use client";

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const router = useRouter();

  const [shipping, setShipping] = useState(0);
  const [packaging, setPackaging] = useState(0);

  const subtotal = useMemo(
    () => cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const finalPrice = subtotal + shipping + packaging;

  return (
    <div className="">
 {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">orderchackout</h1>
        <p className="text-sm mt-1   ">
          <Link  href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / orderchackout
        </p>
      </div>
    <div className="container">
      <div className="w-full max-w-4xl mx-auto p-8">
              <div className="flex items-center gap-5">
                {/* Step 1 - Address (Active) */}
                <div className="relative flex items-center">
                  <div className="flex items-center bg-slate-600 text-white px-6 py-4 pr-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-white text-slate-600 rounded-full text-sm font-semibold mr-3">
                      1
                    </div>
                    <FaUser className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Address</span>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="w-0 h-0 border-l-[20px] border-l-slate-600 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
                </div>
      
                {/* Step 2 - Orders (Inactive) */}
                <div className="relative flex items-center -ml-1">
                  <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pr-8 pl-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                      2
                    </div>
                    <FaShoppingCart className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Orders</span>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="w-0 h-0 border-l-[20px] border-l-gray-200 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
                </div>
      
                {/* Step 3 - Payment (Inactive) */}
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



        {/* Layout */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Box col-span-2 */}
      <div className="md:col-span-2 border border-[#BDCCDB] rounded-md">
        <div className="p-4 space-y-4">
          {cart.map((item:any, index:any) => (
            <div
              key={index}
              className="flex gap-4 pb-4 border-b border-[#BDCCDB] last:border-b-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="border "
              />
              <div className="leading-relaxed">
                <h3 className="font-semibold text-sm text-[#142350]">{item.title}</h3>
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

      {/* Right Box col-span-1 */}
     <div className="w-full md:w-[350px] border border-[#BDCCDB] py-10 px-6 shadow-sm transition-all duration-300 ease-in-out">
  <h2 className="font-bold text-lg text-[#142350] mb-4">PRICE DETAILS</h2>

  <div className="flex justify-between text-[#767678] text-lg mb-2 border-b border-[#BDCCDB] h-11">
    <span>Total MRP</span>
    <span>{subtotal}$</span>
  </div>

  <div className="flex justify-between text-[#767678] font-bold mb-4 text-lg h-11">
    <span>Total</span>
    <span>{subtotal.toFixed(2)}$</span>
  </div>

  <a
    href="#"
    className="text-[#767678] text-sm underline mb-5 mt-4 font-bold block text-center"
  >
    Have a promotion code?
  </a>

  {/* Shipping */}
  <div className="mt-4">
    <h3 className="font-bold text-[#142350] text-lg mb-2">Shipping Method</h3>
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="shipping"
          checked={shipping === 0}
          onChange={() => setShipping(0)}
          className="w-5 h-5"
        />
        <span className="text-lg font-bold text-[#767678]">
          Free Shipping (10 - 12 days)
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="shipping"
          checked={shipping === 10}
          onChange={() => setShipping(10)}
          className="w-5 h-5"
        />
        <span className="text-lg font-bold text-[#767678]">
          Express Shipping + $10 (5 - 6 days)
        </span>
      </label>
    </div>
  </div>

  {/* Packaging */}
  <div className="mt-4 mb-4">
    <h3 className="font-bold text-[#142350] text-lg mb-3 mt-3">Packaging</h3>
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="packaging"
          checked={packaging === 0}
          onChange={() => setPackaging(0)}
          className="w-5 h-5"
        />
        <span className="text-lg font-bold text-[#767678]">
          Default Packaging
          <br />
          <span className="text-sm font-normal">
            Default packaging by store
          </span>
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="packaging"
          checked={packaging === 15}
          onChange={() => setPackaging(15)}
          className="w-5 h-5"
        />
        <span className="text-lg font-bold text-[#767678]">
          Gift Packaging + $15
          <br />
          <span className="text-sm font-normal">
            Exclusive Gift packaging
          </span>
        </span>
      </label>
    </div>
  </div>

  {/* Final Price */}
  <div className="flex justify-between font-semibold mt-6 h-11 border-t border-[#BDCCDB]">
    <span className="text-lg font-bold pt-2 text-[#767678]">Final Price :</span>
    <span className="text-lg font-bold pt-2 text-[#767678]">
      {finalPrice.toFixed(2)}$
    </span>
  </div>
    </div>

    </div>
    </div>
    </div>
  );
}
