"use client";

import { ProductType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRandom, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PropsType {
  relatedProducts: ProductType[];
}

export default function RelatedProductsSlider({ relatedProducts }: PropsType) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="container">
      <div className="w-full bg-white mt-14">
        {/* Header with custom border color */}
        <div className="flex items-center justify-between border-b border-b-[#767678] pb-3 mb-6">
          <h2 className="text-xl font-bold text-[#141926]">Related Products</h2>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer text-gray-400 hover:text-black transition"
            >
              Prev
            </span>
            <span
              ref={(node) => setNextEl(node)}
              className="cursor-pointer text-[#141926] hover:text-black transition"
            >
              Next
            </span>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 5 },
          }}
          modules={[Navigation, Pagination]}
        >
          {relatedProducts?.length > 0 &&
            relatedProducts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  className={`group relative p-4 transition-all duration-300 hover:shadow-xl bg-white rounded-md ${
                    index === 0 ? "col-span-5 w-full" : ""
                  }`}
                >
                  {/* Discount badge */}
                  <div className="absolute top-2 right-2 z-20 bg-black text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </div>

                  {/* Product image */}
                  <div
                    className={`${
                      index === 0 ? "w-full h-[235px]" : "w-[235px] h-[235px]"
                    } mx-auto relative`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill={index === 0}
                      width={index !== 0 ? 235 : undefined}
                      height={index !== 0 ? 235 : undefined}
                      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                        index === 0 ? "rounded-md" : ""
                      }`}
                    />
                  </div>

                  {/* Hover icons - 5 buttons */}
                  {index !== 0 && (
                    <div className="absolute top-10 right-[-50px] opacity-0 group-hover:right-3 group-hover:opacity-100 flex flex-col gap-2 transition-all duration-300 z-10">
                      {[
                        FaHeart,
                        FaRandom,
                        FaShoppingCart,
                        FaBagShopping,
                        FaEye,
                      ].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 flex items-center justify-center bg-white rounded shadow hover:bg-gray-100"
                        >
                          <Icon className="text-gray-700 text-[12px]" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="mt-4 text-center text-[#141926]">
                    <h3 className="text-sm font-medium line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className="font-semibold">${product.price}</span>
                      <span className="line-through text-gray-400 text-sm">
                        ${product.oldPrice}
                      </span>
                    </div>
                    <div className="text-sm text-yellow-500 mt-1">
                      ★ 0.0 (0)
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>

        {/* Optional Bottom Spacing */}
        <div className="mt-8"></div>
      </div>
    </div>
  );
}
