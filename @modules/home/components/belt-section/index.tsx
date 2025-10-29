"use client";

import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
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
    id: 18,
    name: "Bag Series 6",
    price: "৳2,890.00",
    discount_price: "৳3,150.00",
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/IMG_20231216_202814-800x800.jpg"
  },
  {
    id: 19,
    name: "Special Edition Belt 1",
    price: "৳1,590.00",
    discount_price: "৳1,850.00",
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/05/DSC03126-800x800.jpg"
  },
  {
    id: 20,
    name: "Special Edition Belt 2",
    price: "৳1,490.00",
    discount_price: "৳1,750.00",
    discount: "-15%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg"
  },
  {
    id: 21,
    name: "Special Edition Belt 3",
    price: "৳1,390.00",
    discount_price: "৳1,650.00",
    discount: "-16%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/DSC03988-800x800.jpg"
  },
  {
    id: 22,
    name: "Special Edition Belt 4",
    price: "৳1,090.00",
    discount_price: "৳1,190.00",
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2025/01/DSC00093-800x800.jpg"
  },
  {
    id: 23,
    name: "Special Edition Belt 5",
    price: "৳1,590.00",
    discount_price: "৳1,850.00",
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg"
  },
  {
    id: 24,
    name: "Special Edition Belt 6",
    price: "৳1,590.00",
    discount_price: "৳1,850.00",
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg"
  }
];


export default function BagSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-3 py-6 bg-white w-full">
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          Belt
        </h2>
      </div>

      <div className="relative max-w-7xl bg-[#F0F0F0] px-3 py-4 mx-auto group rounded-lg">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 md:-left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
          >
            <AiOutlineLeft size={20} />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 md:-right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={nextRef}
            aria-label="Next"
            className="swiper-button-next w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
          >
            <AiOutlineRight size={20} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={500}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-gray-400 !opacity-50 !mx-1 !w-3 !h-3 rounded-full",
            bulletActiveClass: "!bg-gray-900 !opacity-100",
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }}
          className="!pb-8"
        >
          {bagProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="w-full flex justify-center">
                <CartCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
