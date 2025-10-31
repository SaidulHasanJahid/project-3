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
  price: number; // number for calculations
  discount_price?: number;
  discount?: string;
  thumbnail: string;
  quantity: number;
};

// Helper to calculate discounted price
const calculateDiscountPrice = (price: number, discountPercent: number) =>
  Math.round(price - price * (discountPercent / 100));

// Bag products as numbers (like Special Edition style)
const bagProducts: Product[] = [
  {
    id: 1,
    name: "Bag Series 1",
    slug: "bag-series-1",
    price: 2990,
    discount_price: calculateDiscountPrice(2990, 8),
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/edited-akbar-473-800x800.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Bag Series 2",
    slug: "bag-series-2",
    price: 2490,
    discount_price: calculateDiscountPrice(2490, 10),
    discount: "-10%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/12/IMG_20231101_200306-800x800.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Bag Series 3",
    slug: "bag-series-3",
    price: 2690,
    discount_price: calculateDiscountPrice(2690, 9),
    discount: "-9%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/03/IMG_20240108_142914-800x800.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Bag Series 4",
    slug: "bag-series-4",
    price: 2790,
    discount_price: calculateDiscountPrice(2790, 8),
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2025/01/DSC09931-800x800.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Bag Series 5",
    slug: "bag-series-5",
    price: 2590,
    discount_price: calculateDiscountPrice(2590, 9),
    discount: "-9%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/DSC02857-784x800.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "Bag Series 6",
    slug: "bag-series-6",
    price: 2890,
    discount_price: calculateDiscountPrice(2890, 8),
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/IMG_20231216_202814-800x800.jpg",
    quantity: 1,
  },
];

export default function BagSwiper() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 py-10 w-full mt-[-20px]">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          BAG
        </h2>
      </div>

      <div className="relative max-w-[96%] sm:max-w-7xl px-2 sm:px-4 py-4 mx-auto group rounded-lg ]">
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 z-30 left-0 sm:-left-6 md:-left-10">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="swiper-button-prev w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
          >
            <AiOutlineLeft size={14} className="sm:text-[20px]" />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 z-30 right-0 sm:-right-6 md:-right-10">
          <button
            ref={nextRef}
            aria-label="Next"
            className="swiper-button-next w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
          >
            <AiOutlineRight size={14} className="sm:text-[20px]" />
          </button>
        </div>

        {/* Swiper */}
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
          {bagProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="w-[90%] sm:w-[95%] md:w-full flex justify-center">
                <CartCard
                  product={product}
                  openDrawer={() => setDrawerOpen(true)}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination only for large screens */}
          <div className="custom-pagination hidden lg:flex justify-center mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
}
