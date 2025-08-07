"use client";

import './index.css';
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  FaCreditCard,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
const CustomerCheckout = () => {
  const [shipTo, setShipTo] = useState("Home");
  const [country, setCountry] = useState("");
  const [shipping, setShipping] = useState("free");
  const [packaging, setPackaging] = useState("default");
  const [showShipping, setShowShipping] = useState(false);

  const basePrice = 200;
  const shippingPrice = shipping === "express" ? 10 : 0;
  const packagingPrice = packaging === "gift" ? 15 : 0;
  const finalPrice = useMemo(
    () => basePrice + shippingPrice + packagingPrice,
    [shipping, packaging]
  );
  return (
    <>
      
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="text-sm mt-1   ">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Cart
        </p>
      </div>
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

<div className="container">
    
      <div className="p-6 md:p-10 font-sans bg-white leftinput ">
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          {/* Left Column */}
          <div className="flex-1 border border-[#BDCCDB]  p-6 space-y-6 shadow-sm transition-all duration-300 ease-in-out">
            

            {/* Personal Info */}
            <div className="space-y-4 border-b border-[#BDCCDB] pb-6">
              <h2 className="font-bold text-[#141926] border-b border-[#BDCCDB] pb-2 text-[18px]">
                Personal Information :
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border border-[#BDCCDB] w-[348px] h-[45px] px-4 py-2 rounded-md focus:outline-none focus:ring-0 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px] focus:outline-none focus:ring-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="createAccount"
                  className="accent-gray-800 focus:outline-none focus:ring-0"
                />
                <label htmlFor="createAccount" className="text-sm">
                  Create an account ?
                </label>
              </div>
            </div>

            {/* Billing Info */}
            <div className="space-y-4 border-b border-[#BDCCDB] pb-6">
              <h2 className="font-bold text-[18px] text-[#141926] border-b border-[#BDCCDB] pb-2">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px] focus:outline-none focus:ring-0 transition-all  text-[#767678] duration-300"
                  value={shipTo}
                  onChange={(e) => setShipTo(e.target.value)}
                >
                  <option>Home</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                />
                <select
                  className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0 text-[#767678]"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>Select Country</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="diffAddress"
                  className="accent-gray-800 focus:outline-none focus:ring-0"
                  checked={showShipping}
                  onChange={(e) => setShowShipping(e.target.checked)}
                />
                <label htmlFor="diffAddress" className="text-[14px] font-bold text-[#767678]">
                  Ship to a Different Address?
                </label>
              </div>

              {showShipping && (
                <div className="space-y-4 border-t border-[#BDCCDB] pt-4 transition-all duration-300">
                  <h2 className="font-bold text-[18px] text-[#141926] ">Shipping Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0"
                    />
                    <select className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px]focus:outline-none focus:ring-0 text-[#767678]">
                      <option>Select Country</option>
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
              )}

              <input
                type="text"
                placeholder="Order Note (Optional)"
                className="border border-[#BDCCDB] px-4 py-2 rounded-md w-[348px] h-[45px] focus:outline-none focus:ring-0"
              /> <br />
              <Link href={'/orderchackout'}>
              <button className="bg-[#424A4D] cursor-pointer text-white px-6 py-2 rounded-md transition hover:bg-gray-700 w-fit">
                Continue
              </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[350px] border border-[#BDCCDB]  py-10 px-6 shadow-sm  transition-all duration-300 ease-in-out">
            <h2 className="font-bold text-[16px] text-[#142350] mb-4">PRICE DETAILS</h2>
            <div className="flex justify-between text-[#767678] text-[16px] mb-2 w-2xs h-11 border-b   border-[#BDCCDB]">
              <span>Total MRP</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between w-2xs h-11   text-[16px] text-[#767678] font-bold mb-4">
              <span>Total</span>
              <span>${basePrice}</span>
            </div>
            <a
              href="#"
              className="text-[#767678] text-[14px] underline mb-5 mt-4 ml-[60px] font-bold  "
            >
              Have a promotion code?
            </a>

            <div className="mt-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-2">Shipping Method</h3>
              <div className="space-y-2">
        <label className="flex items-start gap-2 mt-6">
                    <input
                    className=' w-[20px] h-[20px]'
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={packaging === "gift"}
                    onChange={() => setPackaging("gift")}
                  />
                  <span className="text-[16px] font-bold text-[#767678]">Free Shipping (10 - 12 days)</span>
                </label>
          <label className="flex items-start gap-2 mt-6">
                    <input
                    className=' w-[20px] h-[20px]'
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={packaging === "gift"}
                    onChange={() => setPackaging("gift")}
                  />
                  <span className=" text-[16px] font-bold text-[#767678]">
                    Express Shipping + $10 (5 - 6 days)
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-3 mt-3">Packaging</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2 mt-6">
                    <input
                    className='mt-4 w-[20px] h-[20px]'
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={packaging === "gift"}
                    onChange={() => setPackaging("gift")}
                  />
                  <span className=" text-[16px] font-bold text-[#767678]">
                    Default Packaging
                    <br />
                    <span className="text-[16px] font-bold text-[#767678]">
                      Default packaging by store
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-2 mt-6">
                  <input
                  className='mt-4 w-[20px] h-[20px]'
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={packaging === "gift"}
                    onChange={() => setPackaging("gift")}
                  />
                  <span className="text-[16px] font-bold text-[#767678] ">
                    Gift Packaging + $15
                    <br />
                    <span className="text-[16px] font-bold text-[#767678] mt-4">
                      Exclusive Gift packaging
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-between font-semibold mt-6 w-2xs h-11 border-t  border-[#BDCCDB] ">
              <span className=' text-[16px] font-bold pt-2 text-[#767678]'>Final Price :</span>
              <span className=' text-[16px] font-bold pt-2 text-[#767678]'> ${finalPrice}</span>
            </div>
          </div>
        </div>
      </div>
</div>
    </>
  );
};

export default CustomerCheckout;
