"use client";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./index.css";
import { useGetBestSellingProductsQuery } from "@/appstore/home/home-api";
import ProductCardFeatureProduct from "@/@modules/@common/cards/post-cart-f-p";

type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

export default function Best_Selling_Product() {
  const { data: best_product_selling, isLoading } = useGetBestSellingProductsQuery();

  if (isLoading) {
    return (
      <section className="px-4 py-16 w-full text-center">
        <p>Loading best selling products...</p>
      </section>
    );
  }

  if (!best_product_selling?.data || best_product_selling.data.length === 0) {
    return (
      <section className="px-4 py-16 w-full text-center">
        <p>No best selling products available.</p>
      </section>
    );
  }

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
          spaceBetween={20}
          slidesPerGroup={1}
          loop={false}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          speed={500}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, 
          }}
        >
          {best_product_selling?.data?.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCardFeatureProduct productsItem={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
