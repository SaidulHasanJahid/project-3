// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "./ind.css";

// interface Banner {
//   id: number | string;
//   title: string;
//   image: string;
// }

// interface HeroCarouselProps {
//   bannerItem: Banner[];
// }

// export default function HeroCarousel({ bannerItem }: HeroCarouselProps) {
//   return (
//     <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         className="w-full h-full"
//       >
//         {bannerItem.map((slide) => {
//           console.log(slide);
//           return (
//             <SwiperSlide key={slide.id}>
//               <div className="relative w-full h-full">
//                 <Link href={"/productpage"}>
//                   <Image
//                     src={slide.image}
//                     alt={slide.title}
//                     fill
//                     className="object-cover"
//                     priority
//                     sizes="100vw"
//                   />
//                   <div className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-start px-5 sm:px-10 w-full">
//                     <div className="text-[#1B1B1E] max-w-xl md:max-w-3xl lg:max-w-4xl px-4 py-3 w-full md:ml-20">
//                       <h4 className="text-xl md:text-2xl font-semibold mb-2 leading-snug">
//                         {slide.title}
//                       </h4>
//                       <p className="text-4xl md:text-[70px] font-bold mb-4 leading-tight whitespace-nowrap text-[#1B1B1E]">
//                         Get Up to 40% Off
//                       </p>
//                       <p className="text-base md:text-lg font-bold mb-6 max-w-full leading-relaxed">
//                         Furniture must have personality, as well as be beautiful
//                         and make your home Gorgeous
//                       </p>

//                       <button className="bg-[#424a4d] hover:bg-transparent hover:transition-shadow hover:text-[#1B1B1E] hover:border hover:border-[#1B1B1E] text-white font-bold py-2 px-6 rounded cursor-pointer ">
//                         Shop NOW
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </SwiperSlide>
//           );
//         })}

//         {/* Prev Arrow */}
//         <div className="swiper-button-prev z-50 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white">
//           <FaChevronLeft size={40} color="#fff" />
//         </div>

//         {/* Next Arrow */}
//         <div className="swiper-button-next z-50 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white">
//           <FaChevronRight size={40} color="#fff" />
//         </div>
//       </Swiper>

//       {/* Custom styles for pagination bullets as lines */}
//       <style jsx>{`
//         /* Pagination bullets become horizontal white lines */
//         :global(.swiper-pagination-bullet) {
//           width: 30px !important;
//           height: 4px !important;
//           border-radius: 2px !important;
//           background-color: transparent !important;
//           border: 2px solid #fff !important;
//           opacity: 0.5 !important;
//           margin: 0 6px !important;
//           transition: background-color 0.3s, opacity 0.3s;
//           cursor: pointer;
//         }
//         :global(.swiper-pagination-bullet-active) {
//           background-color: #fff !important;
//           opacity: 1 !important;
//         }
//         :global(.swiper-pagination-bullet:hover) {
//           opacity: 1 !important;
//         }
//       `}</style>
//     </div>
//   );
//  }
"use client";

import './ind.css'
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

interface Banner {
  id: number | string;
  title: string;
  image: string;
  text: string;
}

interface HeroCarouselProps {
  bannerItem: Banner[];
}

export default function HeroCarousel({ bannerItem }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
console.log(bannerItem);

  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {bannerItem.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Link href={"/productpage"}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                {/* Animate only on active slide */}
                {activeIndex === index && (
                  <div className="absolute inset-0 max-w-7xl mx-auto flex items-center justify-start px-5 sm:px-10 w-full">
                    <motion.div
                      key={slide.id}
                      className="text-[#1B1B1E] max-w-xl md:max-w-3xl lg:max-w-4xl px-4 py-3 w-full md:ml-20"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <motion.h4
                        className="text-xl md:text-2xl font-semibold mb-2 leading-snug"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        {slide.title}
                      </motion.h4>

                      <motion.p
                        className="text-4xl md:text-[70px] font-bold mb-4 leading-tight whitespace-nowrap text-[#1B1B1E]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        {slide.text}
                      </motion.p>

                      <motion.p
                        className="text-base md:text-lg font-bold mb-6 max-w-full leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      >
                        Furniture must have personality, as well as be beautiful
                        and make your home Gorgeous
                      </motion.p>

                      <motion.button
                        className="bg-[#424a4d] hover:bg-transparent hover:text-[#1B1B1E] hover:border hover:border-[#1B1B1E] text-white font-bold py-2 px-6 rounded cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.1, type: "spring" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Shop NOW
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </Link>
            </div>
          </SwiperSlide>
        ))}

        {/* Prev Arrow */}
        <div className="swiper-button-prev z-50 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white">
          <FaChevronLeft size={40} />
        </div>

        {/* Next Arrow */}
        <div className="swiper-button-next z-50 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white">
          <FaChevronRight size={40} />
        </div>
      </Swiper>

      {/* Pagination */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 30px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background-color: transparent !important;
          border: 2px solid #fff !important;
          opacity: 0.5 !important;
          margin: 0 6px !important;
          cursor: pointer;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: #fff !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
