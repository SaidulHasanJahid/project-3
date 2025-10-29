"use client";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineCompareArrows } from "react-icons/md";

export default function ProductInfo() {
  return (
    <aside className="w-full lg:w-[32%] px-3">
      <div className="border border-gray-200 bg-white p-8 shadow-sm">
        {/* Title */}
        <h1 className="text-[26px] md:text-[28px] leading-[1.3] font-semibold text-[#111]">
          TASA Gear Waist Belt Series 2
        </h1>

        {/* Price Section */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-[15px] text-gray-400 line-through">৳ 1,850.00</span>
          <span className="text-[21px] font-semibold text-[#111]">৳ 1,590.00</span>
        </div>

        {/* Out of Stock */}
        <p className="text-[14px] text-red-600 font-medium mt-[6px]">
          Out of stock
        </p>

        {/* Info Section */}
        <div className="mt-5 border-t border-gray-200 pt-5 text-[15px] text-[#333] space-y-3">
          <div className="flex justify-between border-b border-gray-100 pb-[6px]">
            <span className="text-gray-600">Leather Type</span>
            <span className="text-[#111]">Full grain leather</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-[6px]">
            <span className="text-gray-600">Leather Hide</span>
            <span className="text-[#111]">Cow</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-[6px]">
            <span className="text-gray-600">Size</span>
            <span className="text-[#111] leading-[1.5]">
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
        <div className="mt-6 text-[15px] text-[#333]">
          <p className="font-medium mb-[6px]">Specifications:</p>
          <p className="leading-[1.7]">Width: 3.3 cm</p>
          <p className="leading-[1.7]">Length: Up to 52 inches</p>
        </div>

        {/* Description */}
        <div className="mt-6 text-[15px] text-[#444] leading-[1.8]">
          <p>
            Made from premium Vegetable tanned full-grain cow leather, this
            classic black belt features a durable gunmetal-finish buckle and
            sleek gear-lock closure—offering both function and finesse. Whether
            it’s your daily denim or a special occasion outfit, this belt brings
            refined sophistication to every look.
          </p>
        </div>

        {/* Wishlist & Compare */}
        <div className="mt-7 flex items-center gap-8 text-[15px]">
          <button className="flex items-center gap-2 text-[#333] hover:text-black transition">
            <FiHeart size={16} />
            Add to wishlist
          </button>
          <button className="flex items-center gap-2 text-[#333] hover:text-black transition">
            <MdOutlineCompareArrows size={18} />
            Add to compare
          </button>
        </div>
      </div>
    </aside>
  );
}
