"use client";

import "./ind.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { useGetHomeBannerQuery } from "@/appstore/banner/api";

interface Banner {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  offer: string;
  buttonText: string;
  thumbnailUrl: string;
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const { data: bannerData } = useGetHomeBannerQuery();
  const bannerItem: Banner[] = bannerData?.data || [];

  // Helper function to create full image URL
  const getImageUrl = (path: string) => {
    if (!path) return "/placeholder.jpg"; // fallback image (optional)

    // If already full URL (starts with http), return as is
    if (path.startsWith("http")) return path;

    const baseUrl =
      process.env.NEXT_PUBLIC_IMAGE_URL || "https://grocery.reclinerbdking.com";

    // Ensure no double slash
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {bannerItem.map((slide, index) => (
          <SwiperSlide key={slide.slug}>
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              {/* Background Image */}
              <Image
                src={getImageUrl(slide.thumbnailUrl)}
                alt={slide.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                priority={index === 0} // Only first image gets priority
                placeholder="blur"
                blurDataURL="/placeholder.jpg" // optional low-res placeholder
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Animated Text & Button */}
              {activeIndex === index && (
                <div className="absolute inset-0 flex items-center justify-start px-3 sm:px-6 md:px-12 lg:px-24">
                  <motion.div
                    key={slide.slug}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
                  >
                    {/* Top small text */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[100px] font-serif leading-[1.1]"
                    >
                      {slide.name}
                    </motion.p>

                    {/* Big middle text */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[100px] font-serif leading-[1.1]"
                    >
                      {slide.subtitle}
                    </motion.h2>

                    {/* Description line */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="text-[12px] sm:text-[14px] md:text-[16px] uppercase mb-3 sm:mb-4 md:mb-5 tracking-[1px]"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Offer text */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[40px] font-medium leading-[1.3]"
                      style={{ color: "#D7E2C7" }}
                    >
                      {slide.offer}
                    </motion.p>

                    {/* Button - Spelling Fixed */}
                    <Link href="/productpage">
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#000000",
                          color: "#ffffff",
                          transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        whileTap={{
                          scale: 0.95,
                          backgroundColor: "#222222",
                          transition: { duration: 0.2, ease: "easeInOut" },
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="mt-3 sm:mt-4 md:mt-5 cursor-pointer bg-white text-black text-[12px] sm:text-[14px] md:text-[16px] tracking-[1px] font-semibold px-4 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 rounded-sm shadow-md transition-all duration-500 ease-in-out"
                      >
                        Explore Now
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}