"use client";

import React, { useState } from "react";
import QuantityCartButtons from "@/@modules/@common/add-to-cart";
import { FiHeart } from "react-icons/fi";
import { MdOutlineCompareArrows } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

export default function ProductInfo() {
  const basePrice = 1590; // discounted price
  const discountPrice = 1850; // original price

  const [quantity, setQuantity] = useState(1);

  return (
    <aside className="w-full lg:w-[32%] px-3 mt-4 lg:mt-0">
      <div className="border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
        {/* Product Title */}
        <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-semibold text-[#111]">
          TASA Gear Waist Belt Series 2
        </h1>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-3 mt-2 md:mt-3">
          <span className="text-[16px] md:text-[15px] text-gray-400 line-through flex items-center gap-1">
            <TbCurrencyTaka size={16} /> {discountPrice.toLocaleString()}
          </span>
          <span className="text-[25px] md:text-[21px] font-semibold text-[#111] flex items-center gap-1">
            <TbCurrencyTaka size={18} /> {(basePrice * quantity).toLocaleString()}
          </span>
        </div>

        {/* Quantity Buttons */}
        <QuantityCartButtons
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        {/* Product Details */}
        <div className="mt-4 md:mt-5 border-t border-gray-200 pt-4 md:pt-5 text-[13px] md:text-[15px] text-[#333] space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="text-gray-600">Leather Type</span>
            <span className="text-[#111]">Full grain leather</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="text-gray-600">Leather Hide</span>
            <span className="text-[#111]">Cow</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="text-gray-600">Size</span>
            <span className="text-[#111] leading-[1.4]">
              Width: 3.3 cm
              <br />
              Length: Up to 52 inches
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Warranty</span>
            <span className="text-[#111]">12 months</span>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-4 md:mt-6 text-[13px] md:text-[15px] text-[#333]">
          <p className="font-medium mb-1">Specifications:</p>
          <p className="leading-[1.6]">Width: 3.3 cm</p>
          <p className="leading-[1.6]">Length: Up to 52 inches</p>
        </div>

        {/* Description */}
        <div className="mt-4 md:mt-6 text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
          Made from premium Vegetable tanned full-grain cow leather, this
          classic black belt features a durable gunmetal-finish buckle and
          sleek gear-lock closure—offering both function and finesse.
        </div>

        {/* Wishlist & Compare */}
        <div className="mt-5 md:mt-7 flex items-center gap-6 text-[14px] md:text-[15px]">
          <button className="flex items-center gap-2 text-[#333] hover:text-black transition">
            <FiHeart size={16} /> Add to wishlist
          </button>
          <button className="flex items-center gap-2 text-[#333] hover:text-black transition">
            <MdOutlineCompareArrows size={18} /> Add to compare
          </button>
        </div>
      </div>
    </aside>
  );
}
