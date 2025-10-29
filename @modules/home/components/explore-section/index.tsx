"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './index.css';

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: "https://tasa.com.bd/wp-content/uploads/2023/03/y-800x800.jpg",
    alt: "Explore the Fashion - Slide 1",
  },
  {
    id: 2,
    image: "https://tasa.com.bd/wp-content/uploads/2023/03/as-800x800.jpg",
    alt: "Explore the Fashion - Slide 2",
  },
  {
    id: 3,
    image: "https://tasa.com.bd/wp-content/uploads/2023/03/Your-paragraph-text-800x800.jpg",
    alt: "Explore the Fashion - Slide 3",
  },
];

export default function FashionSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container mt-10">
      <section className=" mb-4 w-full  relative  h-screen flex justify-center items-center">
      <div className="relative w-full h-full group">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={slide.id === 1}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30">
          <button
            ref={prevRef}
            className="w-14 h-14 flex cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            aria-label="Previous"
          >
            <AiOutlineLeft size={22} />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30">
          <button
            ref={nextRef}
            className="w-14 h-14 flex items-center cursor-pointer justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            aria-label="Next"
          >
            <AiOutlineRight size={22} />
          </button>
        </div> */}
      </div>
    </section>
    </div>
  );
}
