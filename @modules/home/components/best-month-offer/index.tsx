// "use client";
// import Image from "next/image";
// import './best.css'

// export default function BestMonthOffer() {
//   return (
//     <section className="px-4 mt-[50px] md:px-16 py-10 bg-white cursor-pointer">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Best Month Offer</h2>
//         <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[18px] font-normal">
//           Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum
//           tristique lobortis lectus magnis. Consequat.
//         </p>
//       </div>

//       {/* Responsive Grid */}
//       <div
//         className="
//           grid gap-6
//           grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-4
//         "
//       >
//         {/* 1st Card - Men Collection */}
//         <div
//           className="
//             group relative overflow-hidden rounded-lg h-[500px]
//             md:col-span-2
//             lg:col-span-2
//             order-1
//           "
//         >
//           <Image
//             src="https://eco.rafiinternational.com/assets/images/arrival/166306363884png.png"
//             alt="Men Collection"
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             priority
//           />
//           <div className="absolute inset-0 flex justify-end items-center p-4 sm:p-10">
//             <div className="relative w-full sm:max-w-md px-10 py-6">
//               <div className="absolute top-0 bottom-0 right-0 w-[60%] h-[300px] border-t-2 border-b-2 border-r-2 border-orange-500 pointer-events-none"></div>
//               <div className="relative z-10 text-right">
//                 <p className="text-sm font-semibold tracking-[3px] text-[#f3612e] uppercase">
//                   SALE UP TO 30%
//                 </p>
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-6 leading-snug">
//                   MEN COLLECTION
//                 </h3>
//                 <p className="text-sm text-gray-700 mt-4 uppercase">New Autumn Arrival 2021</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 2nd Card - EXO Travel Bags */}
//         <div
//           className="
//             group relative overflow-hidden rounded-lg h-[500px]
//             order-2
//           "
//         >
//           <Image
//             src="https://eco.rafiinternational.com/assets/images/arrival/166306365085png.png"
//             alt="EXO Travel Bags"
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             priority
//           />
//           <div className="card-text-container absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
//             <p className="text-sm font-semibold tracking-wider">SALE UP TO 50%</p>
//             <h3 className="mt-2 text-[30px] font-bold w-[190px]">EXO TRAVEL BAGS</h3>
//             <p className="mt-1 text-[18px] font-semibold">BAGS AND SHOES</p>
//           </div>
//         </div>

//         {/* 3rd Card - New Arrivals */}
//         <div
//           className="
//             group relative overflow-hidden rounded-lg h-[500px]
//             order-3
//           "
//         >
//           <Image
//             src="https://eco.rafiinternational.com/assets/images/arrival/166306009486png.png"
//             alt="New Arrivals"
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             priority
//           />
//           <div className="absolute top-4 left-5 text-left p-4 leading-[30px]">
//             <p className="text-sm text-gray-700 font-semibold tracking-wider text-[18px]">
//               SALE UP TO 70%
//             </p>
//             <h3 className="text-xl font-bold mt-5 text-gray-900 text-[30px]">NEW ARRIVALS</h3>
//             <p className="text-sm text-gray-600 mt-6 font-semibold text-[18px]">Casual Shoes</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./best.css";

export default function BestMonthOffer() {
  const offers = [
    {
      id: 1,
      image: "https://eco.rafiinternational.com/assets/images/arrival/166306363884png.png",
      title: "MEN COLLECTION",
      subtitle: "New Autumn Arrival 2021",
      discount: "SALE UP TO 30%",
      type: "big",
    },
    {
      id: 2,
      image: "https://eco.rafiinternational.com/assets/images/arrival/166306365085png.png",
      title: "EXO TRAVEL BAGS",
      subtitle: "BAGS AND SHOES",
      discount: "SALE UP TO 50%",
      type: "normal",
    },
    {
      id: 3,
      image: "https://eco.rafiinternational.com/assets/images/arrival/166306009486png.png",
      title: "NEW ARRIVALS",
      subtitle: "Casual Shoes",
      discount: "SALE UP TO 70%",
      type: "normal",
    },
    {
      id: 4,
      image: "https://eco.rafiinternational.com/assets/images/arrival/166306365660png.png",
      title: "WINTER COLLECTION",
      subtitle: "Jackets & Hoodies",
      discount: "SALE UP TO 40%",
      type: "normal",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="px-4 mt-[50px] md:px-16 py-10 bg-white cursor-pointer relative group">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Best Month Offer
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[18px] font-normal">
          Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus
          fermentum tristique lobortis lectus magnis. Consequat.
        </p>
      </div>

      {swiperReady && (
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true, el: paginationRef.current }}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="best-offer-swiper"
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
          >
            {offers.map((offer, index) => (
              <SwiperSlide
                key={offer.id}
                style={offer.type === "big" ? { width: "200%" } : {}}
              >
                <div
                  className={`group relative overflow-hidden rounded-lg h-[500px] ${
                    offer.type === "big" ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Text Overlay */}
                  <div
                    className={`absolute inset-0 flex ${
                      offer.type === "big"
                        ? "justify-end items-center p-6 sm:p-10"
                        : "flex-col justify-center items-center bg-black/30 text-white"
                    }`}
                  >
                    <div
                      className={`relative ${
                        offer.type === "big"
                          ? "w-full sm:max-w-md px-8 py-6 text-right"
                          : "text-center px-6"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold tracking-[3px] uppercase mb-3 ${
                          activeIndex === index ? "animate-fadeInUp" : ""
                        }`}
                        style={{ animationDelay: "0.2s" }}
                      >
                        {offer.discount}
                      </p>
                      <h3
                        className={`font-bold ${
                          offer.type === "big"
                            ? "text-3xl md:text-4xl text-gray-900"
                            : "text-2xl text-white"
                        } ${activeIndex === index ? "animate-fadeInUp" : ""}`}
                        style={{ animationDelay: "0.5s" }}
                      >
                        {offer.title}
                      </h3>
                      <p
                        className={`mt-4 ${
                          offer.type === "big"
                            ? "text-sm text-gray-700 uppercase"
                            : "text-[18px] font-medium"
                        } ${activeIndex === index ? "animate-fadeInUp" : ""}`}
                        style={{ animationDelay: "0.8s" }}
                      >
                        {offer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fixed navigation buttons */}
          <div
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-50"
          >
            <button className="p-4 w-14 h-14 bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition">
              <AiOutlineLeft size={24} className="text-white" />
            </button>
          </div>

          <div
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-50"
          >
            <button className="p-4 w-14 h-14 bg-[#767678] flex items-center justify-center rounded-full shadow-md hover:bg-black transition">
              <AiOutlineRight size={24} className="text-white" />
            </button>
          </div>

          {/* Pagination */}
          <div ref={paginationRef} className="swiper-pagination mt-6"></div>
        </div>
      )}

      <style jsx global>{`
        .best-offer-swiper .swiper-pagination-bullet {
          background: #767678 !important;
          opacity: 0.6;
          transition: all 0.3s;
        }

        .best-offer-swiper .swiper-pagination-bullet-active {
          background: #767678 !important;
          opacity: 1;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

