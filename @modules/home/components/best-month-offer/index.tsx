
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
import { useGetBestMonthDataQuery } from "@/appstore/home/home-api";
import { baseUrl } from "@/utils/url";

export default function BestMonthOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

const { data:bestMonthHomeData, error, isFetching } = useGetBestMonthDataQuery();
  console.log("bestMonthData",bestMonthHomeData);



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

      {bestMonthHomeData?.length >0 && (
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true, el: paginationRef.current }}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="best-offer-swiper"
            onBeforeInit={(swiper:any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
          >
            {bestMonthHomeData?.length >0 && bestMonthHomeData.map((offer:any, index:any) => {
              console.log("offer",offer);
              return(
                 <SwiperSlide
                key={index}
                style={offer?.type === "big" ? { width: "200%" } : {}}
              >
                <div
                  className={`group relative overflow-hidden rounded-lg h-[500px] ${
                    offer?.type === "big" ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={`${baseUrl}/${offer?.image}`}
                    alt={"image not"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Text Overlay */}
                  <div
                    className={`absolute inset-0 flex ${
                      offer?.type === "big"
                        ? "justify-end items-center p-6 sm:p-10"
                        : "flex-col justify-center items-center bg-black/30 text-white"
                    }`}
                  >
                    <div
                      className={`relative ${
                        offer?.type === "big"
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
                        {/* {offer?.discount} */}
                        Sale Up to 50% Off
                      </p>
                      <h3
                        className={`font-bold ${
                          offer?.type === "big"
                            ? "text-3xl md:text-4xl text-gray-900"
                            : "text-2xl text-white"
                        } ${activeIndex === index ? "animate-fadeInUp" : ""}`}
                        style={{ animationDelay: "0.5s" }}
                      >
                        {offer?.title}
                      </h3>
                      <p
                        className={`mt-4 ${
                          offer?.type === "big"
                            ? "text-sm text-gray-700 uppercase"
                            : "text-[18px] font-medium"
                        } ${activeIndex === index ? "animate-fadeInUp" : ""}`}
                        style={{ animationDelay: "0.8s" }}
                      >
                        {offer?.sub_title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              )
            }
             
            )}
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

