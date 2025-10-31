"use client";

import { useRef, useState } from "react";
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
  slug: string;
  price: number; // number type
  discount_price?: number;
  discount?: string;
  thumbnail: string;
  quantity: number;
};

// Helper for discount calculation
const calculateDiscountPrice = (price: number, discountPercent: number) =>
  Math.round(price - price * (discountPercent / 100));

const walletProducts: Product[] = [
  { id: 1, name: "Bifold Wallet 1", slug: "bifold-wallet-1", price: 1250, discount_price: calculateDiscountPrice(1250, 17), discount: "-17%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/4-800x800.png", quantity: 1 },
  { id: 2, name: "Bifold Wallet 2", slug: "bifold-wallet-2", price: 1350, discount_price: calculateDiscountPrice(1350, 13), discount: "-13%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/5-800x800.png", quantity: 1 },
  { id: 3, name: "Bifold Wallet 3", slug: "bifold-wallet-3", price: 1450, discount_price: calculateDiscountPrice(1450, 12), discount: "-12%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/4-800x800.png", quantity: 1 },
  { id: 4, name: "Bifold Wallet 4", slug: "bifold-wallet-4", price: 1150, discount_price: calculateDiscountPrice(1150, 8), discount: "-8%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/IMG_20240909_165612-800x800.jpg", quantity: 1 },
  { id: 5, name: "Bifold Wallet 5", slug: "bifold-wallet-5", price: 1290, discount_price: calculateDiscountPrice(1290, 11), discount: "-11%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/17-800x800.jpg", quantity: 1 },
  { id: 6, name: "Bifold Wallet 6", slug: "bifold-wallet-6", price: 1350, discount_price: calculateDiscountPrice(1350, 13), discount: "-13%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/02/IMG_3026-1-800x800.jpg", quantity: 1 },
];

export default function BifoldWalletSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 py-10 w-full mt-[-70px]">
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          BIFOLD WALLET
        </h2>
      </div>

      <div className="relative max-w-[96%] sm:max-w-7xl px-2 sm:px-4 py-4 mx-auto group rounded-lg ">
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 z-30 left-0 sm:-left-6 md:-left-10">
          <button ref={prevRef} aria-label="Previous" className="swiper-button-prev w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow">
            <AiOutlineLeft size={14} className="sm:text-[20px]" />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 z-30 right-0 sm:-right-6 md:-right-10">
          <button ref={nextRef} aria-label="Next" className="swiper-button-next w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow">
            <AiOutlineRight size={14} className="sm:text-[20px]" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={12}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={500}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            640: { slidesPerView: 4, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {walletProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="w-[90%] sm:w-[95%] md:w-full flex justify-center">
                <CartCard product={product} openDrawer={() => setDrawerOpen(true)} />
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination hidden lg:flex justify-center mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
}
