"use client";

import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import CartCard from "@/@modules/@common/cards/post-cart-f-b";

type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Bifold Wallet 1",
    price: "৳1,250.00",
    discount_price: "৳1,500.00",
    discount: "-17%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/4-800x800.png",
  },
  {
    id: 2,
    name: "Bifold Wallet 2",
    price: "৳1,350.00",
    discount_price: "৳1,550.00",
    discount: "-13%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/5-800x800.png",
  },
  {
    id: 3,
    name: "Bifold Wallet 3",
    price: "৳1,450.00",
    discount_price: "৳1,650.00",
    discount: "-12%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/4-800x800.png",
  },
  {
    id: 4,
    name: "Bifold Wallet 4",
    price: "৳1,150.00",
    discount_price: "৳1,250.00",
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/IMG_20240909_165612-800x800.jpg",
  },
  {
    id: 5,
    name: "Bifold Wallet 5",
    price: "৳1,290.00",
    discount_price: "৳1,450.00",
    discount: "-11%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/17-800x800.jpg",
  },
  {
    id: 6,
    name: "Bifold Wallet 6",
    price: "৳1,350.00",
    discount_price: "৳1,550.00",
    discount: "-13%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/02/IMG_3026-1-800x800.jpg",
  },
];

export default function BifoldWalletSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 mb-8 mt-[-30px] w-full">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">Bifold Wallet</h2>
      </div>

      {/* Swiper Container */}
      <div className="relative max-w-[96%] sm:max-w-7xl  px-2 sm:px-4 py-4 mx-auto group rounded-lg">
        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="swiper-button-prev w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center arrow"
          >
            <AiOutlineLeft size={22} />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={nextRef}
            aria-label="Next"
            className="swiper-button-next w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center arrow"
          >
            <AiOutlineRight size={22} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2} // ✅ mobile 2 cards
          spaceBetween={10}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={500}
          navigation={{
            // @ts-ignore
            prevEl: prevRef.current,
            // @ts-ignore
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            640: { slidesPerView: 4, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="w-[95%] md:w-full flex justify-center">
                <CartCard product={product} /> 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
