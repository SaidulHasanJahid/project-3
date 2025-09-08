"use client";

import ProductCardFeatureProduct from "@/@modules/@common/cards/post-cart-f-p";
import { useFeatureProductDataQuery } from "@/appstore/home/home-api";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Changed icons
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

export default function FeaturedProducts() {
  const { data: featureProducts } = useFeatureProductDataQuery();

  if (!featureProducts?.data || featureProducts.data.length === 0) return null;

  return (
    <section className="relative px-4 py-16 bg-white w-full">
      <div className="text-center mb-12">
        <p className="uppercase text-gray-500 text-sm">Featured Products</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Featured Products
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto group">
        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-30px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            aria-label="Previous"
            className="featured-swiper-button-prev p-8 w-16 h-16 cursor-pointer bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition"
          >
            <FaArrowLeft size={20} className="text-white" />{" "}
            {/* Changed icon */}
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[-30px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            aria-label="Next"
            className="featured-swiper-button-next p-8 w-16 h-16 cursor-pointer bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition"
          >
            <FaArrowRight size={20} className="text-white" />{" "}
            {/* Changed icon */}
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
            prevEl: ".featured-swiper-button-prev",
            nextEl: ".featured-swiper-button-next",
          }}
          speed={500}
        >
          {featureProducts.data.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCardFeatureProduct productsItem={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}