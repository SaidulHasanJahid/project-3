"use client";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./index.css";
import CartIconActions from "@/@modules/@common/buttons/cart-icon-actions";
import { useGetBestSellingProductsQuery } from "@/appstore/home/home-api";
import { baseUrl } from "@/utils/url";

export default function Best_Selling_Product() {
  const { data: best_product_selling } = useGetBestSellingProductsQuery();

  return (
    <section className="relative px-4 py-16 bg-white w-full">
      <div className="text-center mb-12">
        <p className="uppercase text-gray-500 text-sm">Featured Products</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Best Selling Products
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto group">
        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-30px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            aria-label="Previous"
            className="swiper-button-prev p-8 w-16 h-16 cursor-pointer bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition"
          >
            <AiOutlineLeft size={20} className="text-white" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[-30px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            aria-label="Next"
            className="swiper-button-next p-8 w-16 h-16 cursor-pointer bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition"
          >
            <AiOutlineRight size={20} className="text-white" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={false}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          speed={500}
        >
          {best_product_selling?.data?.map((product: any) => {
            return (
              <SwiperSlide key={product.id}>
                <Link href={`/product/${product.slug}`} className="block relative cursor-pointer">
                  <div className="bg-white p-4 relative group/card border-none shadow-none">
                    {/* Discount Badge */}
                    {product.discount && (
                      <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-sm z-10">
                        {product.discount}%
                      </span>
                    )}

                    {/* Hover Icons */}
                    <div className="absolute -translate-y-1/2 right-3 z-20 opacity-0 group-hover/card:opacity-100 translate-x-5 group-hover/card:translate-x-0 transition-all duration-500 ease-in-out flex flex-col gap-2">
                      <CartIconActions />
                    </div>

                    {/* Product Image */}
                    <div className="overflow-hidden rounded-md flex justify-center items-center w-[300px] h-[300px] mx-auto">
                      <Image
                        src={`${baseUrl}/${product?.thumbnail}`}
                        alt={product.name}
                        width={450}
                        height={450}
                        className="object-cover w-[300px] h-[300px] transition-transform duration-300 group-hover/card:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center mt-4 space-y-1">
                      <h3 className="text-sm text-gray-800">{product.name}</h3>
                      <div className="font-bold text-gray-900 text-md">
                        {product.discount_price || product.price}$
                        {product.discount_price && (
                          <span className="text-gray-500 font-normal line-through text-sm ml-2">
                            {product.price}$
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-yellow-500 flex justify-center items-center gap-1">
                        <span>★</span>
                        <span className="text-gray-600">0.0 (0)</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
