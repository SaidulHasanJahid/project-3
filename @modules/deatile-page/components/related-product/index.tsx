"use client";

import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
  { id: 1, name: "Special Edition Belt 1", price: "৳1,590.00", discount_price: "৳1,850.00", discount: "-14%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/05/DSC03126-800x800.jpg" },
  { id: 2, name: "Special Edition Belt 2", price: "৳1,490.00", discount_price: "৳1,750.00", discount: "-15%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg" },
  { id: 3, name: "Special Edition Belt 3", price: "৳1,390.00", discount_price: "৳1,650.00", discount: "-16%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/DSC03988-800x800.jpg" },
  { id: 4, name: "Special Edition Belt 4", price: "৳1,090.00", discount_price: "৳1,190.00", discount: "-8%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2025/01/DSC00093-800x800.jpg" },
  { id: 5, name: "Special Edition Belt 5", price: "৳1,590.00", discount_price: "৳1,850.00", discount: "-14%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg" },
  { id: 6, name: "Special Edition Belt 6", price: "৳1,590.00", discount_price: "৳1,850.00", discount: "-14%", thumbnail: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg" },
];

export default function RealatedProducts() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative px-4 bg-white w-full overflow-hidden mt-[-10px]">
      <div className=" mb-4">
        <h2 className="text-[24px] ml-5 sm:text-[28px] text-[#242424] ">
          RELATED PRODUCTS
        </h2>
      </div>
    <div className="w-[50px] rounded-full h-[2px]  bg-[#242424] mt-[-10px] ml-5"></div>
      <div className="relative max-w-[96%] sm:max-w-7xl px-2 sm:px-4 py-4 mx-auto group rounded-lg">
 {/* Left Arrow */}
<div className="absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-300
                left-0 sm:-left-6 md:-left-10 
                [@media(max-width:1000px)]:-left-2">
  <button
    ref={prevRef}
    aria-label="Previous"
    className="swiper-button-prev w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
  >
    <AiOutlineLeft size={14} className="sm:text-[20px]" />
  </button>
</div>

{/* Right Arrow */}
<div className="absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-300
                right-0 sm:-right-6 md:-right-10 
                [@media(max-width:1000px)]:-right-2">
  <button
    ref={nextRef}
    aria-label="Next"
    className="swiper-button-next w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full arrow"
  >
    <AiOutlineRight size={14} className="sm:text-[20px]" />
  </button>
</div>


        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            el: ".custom-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            640: { slidesPerView: 3, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {products.map((product :any) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="relative w-[90%] sm:w-[95%] md:w-full flex justify-center items-center">
                <CartCard product={product} />
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination visible only on large screens */}
          <div className="custom-pagination hidden lg:flex justify-center mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
}
