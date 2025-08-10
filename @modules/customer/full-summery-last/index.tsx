"use client";

import ProDuctDetileToChackOut from '@/@modules/customer/product-deatile-chackout';
import Link from 'next/link';
import { useState } from 'react';
import { FaCreditCard, FaEnvelope, FaMapMarkerAlt, FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';

const LastSummery = () => {
  const [payment, setPayment] = useState("Cash On Delivery");
  const borderColor = "#76767678"; // Declare borderColor here

  return (
    <div>
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">orderchackout</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Cart
        </p>
      </div>

      {/* ✅ Checkout Steps */}
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

      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">

          <div className="w-full max-w-3xl mx-auto border border-gray-300 rounded shadow-sm p-4">
            <div className="flex gap-4 items-start">
              {/* ✅ Regular <img> tag to avoid next/image issues */}
              <img
                src="https://eco.rafiinternational.com/assets/images/products/16480134488OmlUgJN.png"
                alt="Product"
                width={100}
                height={100}
                className="object-contain border border-gray-200"
              />

              <div className='leading-8'>
                <h2 className="text-[17px] font-bold text-[#333333]">
                  Top Rated product title will be here according to your wish 123
                </h2>
                <p className="text-[14px] text-[#666666] mt-1">
                  <span className="font-semibold">Price :</span> 100$
                </p>
                <p className="text-[14px] text-[#666666] mt-1">
                  <span className="font-semibold">Quantity :</span> 1
                </p>
                <p className="text-[14px] text-[#666666] mt-1">
                  <span className="font-semibold">Total Price :</span> 100$
                </p>
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex gap-2">
              <Link href={'/customer/checkout'}>
                <button className="bg-[#424A4D] hover:bg-[#555] text-white px-4 py-2 rounded transition-all">
                  Back
                </button>
              </Link>
              <Link href={'/customer/orderchackout'}>
                <button className="bg-[#424A4D] hover:bg-[#555] text-white px-4 py-2 rounded transition-all cursor-pointer">
                  Continue
                </button>
              </Link>
            </div>


 {/* Shipping Info */}
          <div className="space-y-4 mt-7">
            <h2
              className="font-bold text-[#141926] text-[18px] border-b pb-2"
              style={{ borderColor, borderBottomWidth: 1 }}
            >
              Shipping Info
            </h2>
            <ul className="space-y-2 ">
              <li className="flex items-center gap-2 text-[16px]  text-[#767678]">
                <FaUser className="text-black" /> 6o,yugoguh
              </li>
              <li className="flex items-center gap-2 text-[16px]  text-[#767678]">
                <FaMapMarkerAlt className="text-black" /> ikfgyt
              </li>
              <li className="flex items-center gap-2 text-[16px]  text-[#767678]">
                <FaPhone className="text-black" /> .80.70p
              </li>
              <li className="flex items-center gap-2 text-[16px]  text-[#767678]">
                <FaEnvelope className="text-black" /> 790.ouip9
              </li>
            </ul>
          </div>

          {/* Payment Info */}
          <div className="space-y-4 mt-7">
            <h2
              className="font-bold text-[18px] text-[#141926] border-b pb-2"
              style={{ borderColor, borderBottomWidth: 1 }}
            >
              Payment Info
            </h2>
            <div className="space-y-3">
              {[
                "Cash On Delivery",
                "Mobile Money",
                "Flutter Wave",
                "Mercadopago",
                "Authorize.Net",
                "Mollie Payment",
                "Stripe",
                "Paypal",
              ].map((method) => (
                <label key={method} className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={payment === method}
                    onChange={() => setPayment(method)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-bold text-[16px]  text-[#767678] ml-1">{method}</div>
                    <div className="text-[14px] font-bold text-[#767678] mt-1">
                      {method === "Cash On Delivery"
                        ? "Pay with cash upon delivery."
                        : method === "Mobile Money"
                        ? "(5 - 6 days)"
                        : method === "Flutter Wave"
                        ? "Pay via your Flutter Wave account."
                        : method === "Mercadopago"
                        ? "Pay Via MercadoPago"
                        : method === "Authorize.Net"
                        ? "Pay Via Authorize.Net"
                        : method === "Mollie Payment"
                        ? "Pay with Mollie Payment."
                        : method === "Stripe"
                        ? "Pay via your Credit Card."
                        : method === "Paypal"
                        ? "Pay via your PayPal account."
                        : ""}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

    {/* Buttons */}
                <div className="flex gap-4 pt-4 mt-4">
                   <Link href={'/customer/checkout'}>
                  <button className="bg-[#424A4D] w-[74px] h-[40px] text-white cursor-pointer rounded">
                    Back
                  </button>
                  </Link>
                 <Link href={'/customer/last-summeryall'}>
                  <button className="bg-[#424A4D] w-[104px] h-[40px] text-white cursor-pointer  rounded">
                    Continue
                  </button>
                 </Link>
                </div>

          </div>

         

          <ProDuctDetileToChackOut />
        </div>
      </div>
    </div>
  );
};

export default LastSummery;
