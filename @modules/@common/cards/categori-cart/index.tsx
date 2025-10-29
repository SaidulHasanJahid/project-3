"use client";

import { useState } from "react";
import Image from "next/image";
import CartIconActions from "@/@modules/@common/buttons/cart-icon-actions";

type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

export default function ProductCart({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-[350px] bg-white shadow-md overflow-hidden transition-all duration-300 cursor-pointer
      w-[45vw] max-w-[200px] sm:w-[200px] sm:max-w-[200px] md:w-[220px] md:max-w-[210px] lg:w-[280px] lg:max-w-[280px]`}
      style={{ minHeight: "260px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ---------- Product Image ---------- */}
      <div
        className="relative w-full h-[250px]"
        style={{ aspectRatio: "1/1", minHeight: "140px" }}
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className={`object-cover w-full h-full transition-transform duration-500 ${
            isHovered ? "scale-105" : ""
          }`}
        />
        {product.discount && (
          <span className="absolute top-1 left-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#333] text-white text-[10px] sm:text-xs flex items-center justify-center rounded-full">
            {product.discount}
          </span>
        )}
      </div>

      {/* ---------- Product Info ---------- */}
      <div className="p-1 sm:p-2 text-left flex flex-col justify-between h-[70px]">
        <div>
          <h3 className="text-[11px] sm:text-[13px] font-medium text-[#777] mb-1 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <p className="text-[11px] sm:text-[13px] text-[#777]">
              {product.price}
            </p>
            {product.discount_price && (
              <p className="text-[9px] sm:text-[11px] text-[#999] line-through">
                {product.discount_price}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Hover Cart Icon ---------- */}
      <div
        className={`absolute top-2 right-2 transform -translate-y-1/2 transition-all duration-300
        ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
      >
        <CartIconActions />
      </div>
    </div>
  );
}
