"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaShoppingCart, FaCreditCard } from "react-icons/fa";

const borderColor = "#76767678";

const OrderChackOutPage = () => {
  const [payment, setPayment] = useState("Cash On Delivery");

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
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
      
            <div className=" md:w-[934px] lg:w-[934px]  w-full   mx-auto leading-7 ">
              <div
                className="border rounded-md p-5 space-y-6"
                style={{ borderColor, borderWidth: 1 }}
              >
                  {/* Shipping Info */}
                <div className="space-y-4">
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
                <div className="space-y-4">
                  <h2
                    className="font-bold text-[18px] text-[#141926] border-b pb-2"
                    style={{ borderColor, borderBottomWidth: 1 }}
                  >
                    Payment Info
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Cash On Delivery"
                        checked={payment === "Cash On Delivery"}
                        onChange={() => setPayment("Cash On Delivery")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Cash On Delivery</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">
                          Pay with cash upon delivery.
                        </div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Mobile Money"
                        checked={payment === "Mobile Money"}
                        onChange={() => setPayment("Mobile Money")}
                        className="mt-1"
                      />
                      <div>
                        <div className=" font-bold text-[16px]  text-[#767678] ml-1 ">Mobile Money</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">(5 - 6 days)</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Flutter Wave"
                        checked={payment === "Flutter Wave"}
                        onChange={() => setPayment("Flutter Wave")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Flutter Wave</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">
                          Pay via your Flutter Wave account.
                        </div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Mercadopago"
                        checked={payment === "Mercadopago"}
                        onChange={() => setPayment("Mercadopago")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Mercadopago</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">Pay Via MercadoPago</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Authorize.Net"
                        checked={payment === "Authorize.Net"}
                        onChange={() => setPayment("Authorize.Net")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Authorize.Net</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">Pay Via Authorize.Net</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Mollie Payment"
                        checked={payment === "Mollie Payment"}
                        onChange={() => setPayment("Mollie Payment")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Mollie Payment</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">Pay with Mollie Payment.</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Stripe"
                        checked={payment === "Stripe"}
                        onChange={() => setPayment("Stripe")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Stripe</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">Pay via your Credit Card.</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="Paypal"
                        checked={payment === "Paypal"}
                        onChange={() => setPayment("Paypal")}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-bold text-[16px]  text-[#767678] ml-1">Paypal</div>
                        <div className="text-[14px] font-bold text-[#767678] mt-1">
                          Pay via your PayPal account.
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                   <Link href={'/customer/checkout'}>
                  <button className="bg-[#424A4D] w-[74px] h-[40px] text-white cursor-pointer rounded">
                    Back
                  </button>
                  </Link>
                 <Link href={'/orderchackout'}>
                  <button className="bg-[#424A4D] w-[104px] h-[40px] text-white cursor-pointer  rounded">
                    Continue
                  </button>
                 </Link>
                </div>
              </div>
            </div>
         

          {/* Right Column */}
          <div className="md:w-[456px] lg:w-[456px] w-full border border-[#BDCCDB]  mx-auto  py-6 px-[70px] shadow-sm  transition-all duration-300 ease-in-out">
            <h2 className="font-bold text-[16px] text-[#142350] mb-4">
              PRICE DETAILS
            </h2>
            <div className="flex justify-between text-[#767678] text-[16px] mb-2 w-2xs h-11 border-b   border-[#BDCCDB]">
              <span>Total MRP</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between w-2xs h-11   text-[16px] text-[#767678] font-bold mb-4">
              <span>Total</span>
              <span>${}</span>
            </div>
            <a
              href="#"
              className="text-[#767678] text-[14px] underline mb-5 mt-4 ml-[60px] font-bold  "
            >
              Have a promotion code?
            </a>

            <div className="mt-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-2">
                Shipping Method
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className=" w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className="text-[16px] font-bold text-[#767678]">
                    Free Shipping (10 - 12 days)
                  </span>
                </label>
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className=" w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
                  />
                  <span className=" text-[16px] font-bold text-[#767678]">
                    Express Shipping + $10 (5 - 6 days)
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h3 className="font-bold text-[#142350] text-[16px] mb-3 mt-3">
                Packaging
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-2 mt-6">
                  <input
                    className="mt-4 w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
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
                    className="mt-4 w-[20px] h-[20px]"
                    type="radio"
                    name="packaging"
                    value="gift"
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
              <span className=" text-[16px] font-bold pt-2 text-[#767678]">
                Final Price :
              </span>
              <span className=" text-[16px] font-bold pt-2 text-[#767678]">
                {" "}
                ${}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderChackOutPage;
