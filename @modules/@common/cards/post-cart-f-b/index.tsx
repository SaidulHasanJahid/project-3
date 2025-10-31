"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIconActions from "@/@modules/@common/buttons/cart-icon-actions";

interface CartCardProps {
  product: {
    id: number;
    name: string;
    slug?: string;
    price: number;
    discount_price?: number;
    thumbnail: string;
    discount?: string | number; // <-- string | number fix
    quantity?: number;
  };
  openDrawer: () => void; // Function to open the cart drawer
}

export default function CartCard({ product, openDrawer }: CartCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-[350px] bg-white shadow-md overflow-hidden transition-all duration-300 cursor-pointer
      w-[45vw] max-w-[200px] sm:w-[200px] sm:max-w-[200px] md:w-[220px] md:max-w-[210px] lg:w-[280px] lg:max-w-[280px]`}
      style={{ minHeight: "260px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image + Info */}
      <Link href={`/products/${product.slug ?? ""}`}>
        <div>
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
              <span className="absolute top-1 left-1 w-[50px] h-[50px] bg-[#333] text-white text-[10px] sm:text-xs flex items-center justify-center rounded-full">
                {product.discount}
              </span>
            )}
          </div>

          <div className="p-1 sm:p-2 text-left flex px-5 flex-col justify-between h-[70px] mt-3">
            <div>
              <h3 className="text-[14px] sm:text-[14px] font-medium text-[#333] hover:text-[#777] mb-1 mt-2 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                {product.discount_price && (
                  <p className="text-[14px] sm:text-[14px] text-[#999] line-through">
                    ৳{product.discount_price.toLocaleString()}
                  </p>
                )}
                <p className="text-[14px] sm:text-[14px] text-[#000] font-semibold">
                  ৳{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Hover Icons */}
      <div
        className={`absolute top-2 right-2 transform -translate-y-1/2 transition-all duration-300
        ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
      >
      <CartCard product={product} openDrawer={openDrawer} />
      </div>
    </div>
  );
}
