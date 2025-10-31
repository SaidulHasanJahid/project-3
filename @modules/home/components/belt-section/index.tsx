"use client";

import { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CartCard from "@/@modules/@common/cards/post-cart-f-b";

type Product = {
  id: number;
  name: string;
  slug?: string;
  price: number;
  discount_price?: number;
  discount?: string;
  thumbnail: string;
  quantity?: number;
};

// Helper function to generate discounted price
const calculateDiscountPrice = (price: number, discountPercent = 10) =>
  Math.round(price - price * (discountPercent / 100));

const bagProducts: Product[] = [
  {
    id: 18,
    name: "Bag Series 6",
    slug: "bag-series-6",
    price: 2890,
    discount_price: calculateDiscountPrice(2890, 15),
    discount: "-15%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2023/01/IMG_20231216_202814-800x800.jpg",
    quantity: 1,
  },
  {
    id: 19,
    name: "Special Edition Belt 1",
    slug: "special-edition-belt-1",
    price: 1590,
    discount_price: calculateDiscountPrice(1590, 14),
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/05/DSC03126-800x800.jpg",
    quantity: 1,
  },
  {
    id: 20,
    name: "Special Edition Belt 2",
    slug: "special-edition-belt-2",
    price: 1490,
    discount_price: calculateDiscountPrice(1490, 15),
    discount: "-15%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg",
    quantity: 1,
  },
  {
    id: 21,
    name: "Special Edition Belt 3",
    slug: "special-edition-belt-3",
    price: 1390,
    discount_price: calculateDiscountPrice(1390, 16),
    discount: "-16%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/DSC03988-800x800.jpg",
    quantity: 1,
  },
  {
    id: 22,
    name: "Special Edition Belt 4",
    slug: "special-edition-belt-4",
    price: 1090,
    discount_price: calculateDiscountPrice(1090, 8),
    discount: "-8%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2025/01/DSC00093-800x800.jpg",
    quantity: 1,
  },
  {
    id: 23,
    name: "Special Edition Belt 5",
    slug: "special-edition-belt-5",
    price: 1590,
    discount_price: calculateDiscountPrice(1590, 14),
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg",
    quantity: 1,
  },
  {
    id: 24,
    name: "Special Edition Belt 6",
    slug: "special-edition-belt-6",
    price: 1590,
    discount_price: calculateDiscountPrice(1590, 14),
    discount: "-14%",
    thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg",
    quantity: 1,
  },
];

export default function BagSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 bg-white w-full overflow-hidden py-6">
      <div className="text-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#242424]">
          Belt
        </h2>
      </div>

      <div className="relative max-w-[96%] sm:max-w-7xl bg-[#F0F0F0] px-2 sm:px-4 py-4 mx-auto group rounded-lg">
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

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={500}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet !bg-gray-400 !opacity-50 !mx-1 !w-3 !h-3 rounded-full",
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
                <CartCard
                  product={product}
                  openDrawer={() => setDrawerOpen(true)}
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination hidden lg:flex justify-center mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
}
