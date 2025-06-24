"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  FaCreditCard,
  FaListAlt,
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
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center"
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
      <div className="p-4 md:p-10 font-sans bg-white text-gray-800 text-[14px]">
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          {/* Left Column */}
          <div className="flex-1 border border-[#767678] rounded-xl p-6 space-y-6 shadow-sm transition-all duration-300 ease-in-out">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-white bg-gray-700 px-4 py-1 rounded-full">
                <span>1</span> <span>Address</span> <FaUser />
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>2</span> <span>Orders</span> <FaListAlt />
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>3</span> <span>Payment</span> <FaCreditCard />
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4 border-b border-[#767678] pb-6">
              <h2 className="font-semibold text-lg border-b border-[#767678] pb-2">
                Personal Information :
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0 transition-all duration-300"
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
            <div className="space-y-4 border-b border-[#767678] pb-6">
              <h2 className="font-semibold text-lg border-b border-[#767678] pb-2">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0 transition-all duration-300"
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
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                />
                <select
                  className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
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
                <label htmlFor="diffAddress" className="text-sm">
                  Ship to a Different Address?
                </label>
              </div>

              {showShipping && (
                <div className="space-y-4 border-t border-[#767678] pt-4 transition-all duration-300">
                  <h2 className="font-semibold">Shipping Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
                    />
                    <select className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0">
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
                className="border border-[#767678] px-4 py-2 rounded-md w-full focus:outline-none focus:ring-0"
              />
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md transition hover:bg-gray-700 w-fit">
                Continue
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[350px] border border-[#767678] rounded-xl p-6 shadow-sm text-[14px] transition-all duration-300 ease-in-out">
            <h2 className="font-semibold mb-4">PRICE DETAILS</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>Total MRP</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
              <span>Total</span>
              <span>${basePrice}</span>
            </div>
            <a
              href="#"
              className="text-sm text-blue-600 underline mb-4 inline-block"
            >
              Have a promotion code?
            </a>

            <div className="mt-4">
              <h3 className="font-medium text-sm mb-2">Shipping Method</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    checked={shipping === "free"}
                    onChange={() => setShipping("free")}
                  />
                  <span className="text-sm">Free Shipping (10 - 12 days)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shipping === "express"}
                    onChange={() => setShipping("express")}
                  />
                  <span className="text-sm">
                    Express Shipping + $10 (5 - 6 days)
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-sm mb-2">Packaging</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2">
                  <input
                    type="radio"
                    name="packaging"
                    value="default"
                    checked={packaging === "default"}
                    onChange={() => setPackaging("default")}
                  />
                  <span className="text-sm">
                    Default Packaging
                    <br />
                    <span className="text-xs text-gray-500">
                      Default packaging by store
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={packaging === "gift"}
                    onChange={() => setPackaging("gift")}
                  />
                  <span className="text-sm">
                    Gift Packaging + $15
                    <br />
                    <span className="text-xs text-gray-500">
                      Exclusive Gift packaging
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-between font-semibold mt-6">
              <span>Final Price :</span>
              <span>${finalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCheckout;
