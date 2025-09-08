"use client";

import PriceDetails from "@/@modules/@common/price-deatile";
import { baseUrl } from "@/utils/url";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaCreditCard,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const LastSummery = () => {
  const [payment, setPayment] = useState("Cash On Delivery");
  const borderColor = "#76767678"; // Declare borderColor here

  const cart = useSelector((state: any) => state?.cart?.items || []);

  // Quantity state
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const qtys: { [key: string]: number } = {};
    cart.forEach((item: any) => {
      qtys[item.id] = quantities[item.id] || 1;
    });
    setQuantities(qtys);
  }, [cart]);

  // Packaging / shipping state
  const [packaging, setPackaging] = useState("free");
  const [packagingType, setPackagingType] = useState("default");

  // Price calculations
  const cartTotal = cart.reduce((acc: number, item: any) => {
    const qty = quantities[item.id] || 1;
    return acc + Number(item.price) * qty;
  }, 0);

  const shippingCost = packaging === "express" ? 10 : 0;
  const packagingCost = packagingType === "gift" ? 15 : 0;
  const finalPrice = cartTotal + shippingCost + packagingCost;


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
          <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded shadow-sm p-4">
            
            {/* ✅ Dynamic Cart Items Display */}
            {cart.map((item: any, index: number) => {
              const qty = quantities[item.id] || 1;
              const itemTotal = Number(item.price) * qty;

              return (
                <div key={item.id || index} className="flex gap-4 items-start mb-6">
                  {/* ✅ Dynamic Image */}
                  <img
                      src={`${baseUrl}/${item?.thumbnail}`}
                      alt={item.name || "Product"}
                      width={130}
                      height={130}  
                      className="object-cover rounded"
                    />

                  <div className="leading-8">
                    <h2 className="text-[17px] font-bold text-[#333333]">
                      {item?.name || "Product Name"}
                    </h2>
                    <p className="text-[14px] text-[#666666] mt-1">
                      <span className="font-semibold">Price :</span> ${item?.price || 0}
                    </p>
                    <p className="text-[14px] text-[#666666] mt-1">
                      <span className="font-semibold">Quantity :</span> {qty}
                    </p>
                    <p className="text-[14px] text-[#666666] mt-1">
                      <span className="font-semibold">Total Price :</span> ${itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}

            {cart.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No items in cart</p>
              </div>
            )}

            <hr className="my-4 border-gray-300" />

            <div className="flex gap-2">
              <Link href={"/customer/checkout"}>
                <button className="bg-[#424A4D] hover:bg-[#555] text-white px-4 py-2 rounded transition-all">
                  Back
                </button>
              </Link>
              <Link href={"/customer/orderchackout"}>
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
                  <label
                    key={method}
                    className="flex items-start gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={payment === method}
                      onChange={() => setPayment(method)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-bold text-[16px]  text-[#767678] ml-1">
                        {method}
                      </div>
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
              <Link href={"/customer/checkout"}>
                <button className="bg-[#424A4D] w-[74px] h-[40px] text-white cursor-pointer rounded">
                  Back
                </button>
              </Link>
              <Link href={"/customer/last-summeryall"}>
                <button className="bg-[#424A4D] w-[104px] h-[40px] text-white cursor-pointer  rounded">
                  Continue
                </button>
              </Link>
            </div>
          </div>

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
};

export default LastSummery;