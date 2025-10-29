"use client";

import "./ind.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

interface Banner {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  offer: string;
  buttonText: string;
  image: string;
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const bannerItem: Banner[] = [
    {
      id: 1,
      title: "THE VINTAGE",
      subtitle: "MAMBA",
      description: "TRIFOLD WALLET",
      offer: "Special Sale\nUpto 25% Off.",
      buttonText: "SEE SALE PRODUCT",
      image:
        "https://media.istockphoto.com/id/513982438/photo/spices-for-sale-on-local-market.jpg?s=612x612&w=0&k=20&c=qthhP21ndsPFCQq8JnuhpbPa_kMAznaZqo1589L-VwE=",
    },
    {
      id: 2,
      title: "CLASSIC STYLE",
      subtitle: "LEATHER BAG",
      description: "LIMITED EDITION",
      offer: "Get Flat 20% Off.",
      buttonText: "SHOP NOW",
      image:
        "https://cdn.pixabay.com/photo/2022/09/28/04/37/market-7484192_1280.jpg",
    },
    {
      id: 3,
      title: "MODERN ELEGANCE",
      subtitle: "URBAN PACK",
      description: "PREMIUM DESIGN",
      offer: "Save More — Up to 30% Off.",
      buttonText: "EXPLORE NOW",
      image:
        "https://images.unsplash.com/photo-1713947506242-8fcae733d158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    },
  ];

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
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                priority
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Animated Text & Button */}
              {activeIndex === index && (
                <div className="absolute inset-0 flex items-center justify-start px-3 sm:px-6 md:px-12 lg:px-24">
                  <motion.div
                    key={slide.id}
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
                      className="text-[12px] sm:text-[14px] md:text-[16px] tracking-[1.5px] uppercase"
                    >
                      {slide.title}
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

                    {/* Below line */}
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

                    {/* Button */}
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
                        {slide.buttonText}
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
