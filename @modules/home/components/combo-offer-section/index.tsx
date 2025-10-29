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

const comboProducts: Product[] = [
  {
    id: 1,
    name: "Combo Offer 1",
    price: "৳1,990.00",
    discount_price: "৳2,250.00",
    discount: "-12%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg",
  },
  {
    id: 2,
    name: "Combo Offer 2",
    price: "৳1,890.00",
    discount_price: "৳2,050.00",
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01734-800x800.jpg",
  },
  {
    id: 3,
    name: "Combo Offer 3",
    price: "৳2,150.00",
    discount_price: "৳2,450.00",
    discount: "-12%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/DSC01663-800x800.jpg",
  },
  {
    id: 4,
    name: "Combo Offer 4",
    price: "৳1,750.00",
    discount_price: "৳1,950.00",
    discount: "-10%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/04/DSC01694-800x800.jpg",
  },
  {
    id: 5,
    name: "Combo Offer 5",
    price: "৳1,950.00",
    discount_price: "৳2,250.00",
    discount: "-13%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/10/DSC01226-800x800.jpg",
  },
  {
    id: 6,
    name: "Combo Offer 6",
    price: "৳2,050.00",
    discount_price: "৳2,350.00",
    discount: "-12%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01773-800x800.jpg",
  },
];

export default function ComboOfferSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 py-10 mt-[-20px] bg-white w-full overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">Combo Offer</h2>
      </div>

      <div className="relative max-w-[96%] sm:max-w-7xl bg-[#f7f7f7]   px-2 sm:px-4 py-4 mx-auto group rounded-lg">
        {/* Navigation Buttons */}
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {comboProducts.map((product) => (
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
