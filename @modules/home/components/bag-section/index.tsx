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

const bagProducts: Product[] = [
  {
    id: 1,
    name: "Bag Series 1",
    price: "৳2,990.00",
    discount_price: "৳3,250.00",
    discount: "-8%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2023/01/edited-akbar-473-800x800.jpg",
  },
  {
    id: 2,
    name: "Bag Series 2",
    price: "৳2,490.00",
    discount_price: "৳2,750.00",
    discount: "-10%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2023/12/IMG_20231101_200306-800x800.jpg",
  },
  {
    id: 3,
    name: "Bag Series 3",
    price: "৳2,690.00",
    discount_price: "৳2,950.00",
    discount: "-9%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2024/03/IMG_20240108_142914-800x800.jpg",
  },
  {
    id: 4,
    name: "Bag Series 4",
    price: "৳2,790.00",
    discount_price: "৳3,050.00",
    discount: "-8%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2025/01/DSC09931-800x800.jpg",
  },
  {
    id: 5,
    name: "Bag Series 5",
    price: "৳2,590.00",
    discount_price: "৳2,850.00",
    discount: "-9%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2023/01/DSC02857-784x800.jpg",
  },
  {
    id: 6,
    name: "Bag Series 6",
    price: "৳2,890.00",
    discount_price: "৳3,150.00",
    discount: "-8%",
    thumbnail:
      "https://tasa.com.bd/wp-content/uploads/2023/01/IMG_20231216_202814-800x800.jpg",
  },
];

export default function BagSwiper() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 py-10  w-full mt-[-20px]">
      {/* ---------- Section Title ---------- */}
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          BAG
        </h2>
      </div>

      {/* ---------- Swiper Wrapper ---------- */}
      <div className="relative max-w-[96%] sm:max-w-7xl  px-2 sm:px-4 py-4 mx-auto group rounded-lg">
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="swiper-button-prev w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center arrow"
          >
            <AiOutlineLeft size={22} />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={nextRef}
            aria-label="Next"
            className="swiper-button-next w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center arrow"
          >
            <AiOutlineRight size={22} />
          </button>
        </div>

        {/* ---------- Swiper ---------- */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={500}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 2, spaceBetween: 14 },
            640: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {bagProducts.map((product) => (
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
