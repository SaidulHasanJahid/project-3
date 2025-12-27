"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIconActions from "../../buttons/cart-icon-actions";

interface CartCardProps {
  product: {
    id: number;
    name: string;
    slug?: string;
    price: number;
    discount_price?: number;
    thumbnail: string;
    discount?: number; 
    quantity?: number;
  };
  openDrawer: () => void;
}

export default function CartCard({ product, openDrawer }: CartCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[350px] bg-white shadow-md overflow-hidden transition-all duration-300 cursor-pointer
      w-[45vw]  sm:w-[200px] md:w-[220px] lg:w-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image + Info */}
      {/* <Link href={`/products/${product.slug ?? ""}`}> */}
        <div>
          <div className="relative w-full h-[250px]">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-500 ${
                isHovered ? "scale-105" : ""
              }`}
            />

            {/* Discount Badge */}
            {product.discount !== undefined && (
              <span className="absolute top-2 left-2 w-[45px] h-[45px] bg-[#333] text-white text-xs flex items-center justify-center rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium text-[#333] line-clamp-1">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mt-2">
              {product.discount_price && (
                <p className="text-sm text-gray-400 line-through">
                  ৳{product.discount_price.toLocaleString()}
                </p>
              )}
              <p className="text-sm font-semibold text-black">
                ৳{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      {/* </Link> */}

      {/* Hover Icons */}
      <div
        className={`absolute top-3 right-3 transition-all duration-300
        ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
      >
        <CartIconActions
          product={product}
          openDrawer={openDrawer}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
}
