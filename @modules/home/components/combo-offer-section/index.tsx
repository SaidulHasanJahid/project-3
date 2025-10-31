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
  price: number; // number type for calculation
  discount_price?: number;
  discount?: string;
  thumbnail: string;
  quantity: number;
};

// Helper function for discount price
const calculateDiscountPrice = (price: number, discountPercent: number) =>
  Math.round(price - price * (discountPercent / 100));

const comboProducts: Product[] = [
  { id: 1, name: "Combo Offer 1", slug: "combo-offer-1", price: 1990, discount_price: calculateDiscountPrice(1990, 12), discount: "-12%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg", quantity: 1 },
  { id: 2, name: "Combo Offer 2", slug: "combo-offer-2", price: 1890, discount_price: calculateDiscountPrice(1890, 8), discount: "-8%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01734-800x800.jpg", quantity: 1 },
  { id: 3, name: "Combo Offer 3", slug: "combo-offer-3", price: 2150, discount_price: calculateDiscountPrice(2150, 12), discount: "-12%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/DSC01663-800x800.jpg", quantity: 1 },
  { id: 4, name: "Combo Offer 4", slug: "combo-offer-4", price: 1750, discount_price: calculateDiscountPrice(1750, 10), discount: "-10%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/DSC01694-800x800.jpg", quantity: 1 },
  { id: 5, name: "Combo Offer 5", slug: "combo-offer-5", price: 1950, discount_price: calculateDiscountPrice(1950, 13), discount: "-13%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/10/DSC01226-800x800.jpg", quantity: 1 },
  { id: 6, name: "Combo Offer 6", slug: "combo-offer-6", price: 2050, discount_price: calculateDiscountPrice(2050, 12), discount: "-12%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01773-800x800.jpg", quantity: 1 },
];

export default function ComboOfferSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 py-10 w-full mt-[-20px]">
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          COMBO OFFER
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {comboProducts.map((product) => (
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
