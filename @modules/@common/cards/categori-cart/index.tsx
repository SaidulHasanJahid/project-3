"use client";

import Image from "next/image";
import { useState } from "react";
import CartIconActions from "../../buttons/icon-cart-categori";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

const CategoriCart = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <>
   <Link href={'/products'}>
    <div
      className="relative bg-white shadow-md overflow-hidden cursor-pointer w-full transition-all duration-300
        h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full" style={{ height: "80%" }}>
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

      {/* Product Info */}
      <div className="p-1 sm:p-2 ml-3 mt-1 text-left flex flex-col justify-between h-[70px]">
        <div>
          <h3 className="text-[11px] sm:text-[13px] font-medium text-[#333] hover:text-[#777] mb-1 line-clamp-1">
            {product.name}
          </h3>
      <div className="flex items-center gap-3 mt-2">
     
            {product.discount_price && (
              <p className="text-[14px] sm:text-[14px] text-[#999] line-through">
                {product.discount_price}
              </p>
            )}
                   <p className="text-[14px] sm:text-[14px] text-[#000] font-semibold">
              {product.price}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Cart Icons (dynamic) */}
      <CartIconActions isHovered={isHovered} />
    </div>
   </Link>
   </>
  );
};

export default CategoriCart;
