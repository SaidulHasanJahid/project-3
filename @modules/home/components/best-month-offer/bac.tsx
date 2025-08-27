
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
import {  useGetBestMonthDataQuery } from "@/appstore/home/home-api";

export default function BestMonthOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  
const { data:bestMonthHomeData, error, isFetching } = useGetBestMonthDataQuery();
  console.log("bestMonthData",bestMonthHomeData);
  console.log("isError",error);
  console.log("isFetching",isFetching); 
  


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

      {bestMonthHomeData?.length && (
        <div className="relative">
       

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

      {/* <style jsx global>{`
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
      `}</style> */}
    </section>
  );
}

