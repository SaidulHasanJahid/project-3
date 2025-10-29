"use client";

import React from "react";

const FashionIntroSection = () => {
  return (
    <section className="w-full bg-white py-14 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-12">
        {/* === Left: Video === */}
        <div className="w-full md:w-1/2 flex">
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full rounded-md overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* === Right: Text Section === */}
        <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
          <div>
            <p className="uppercase tracking-wider text-sm text-[#777] text-center mb-2">
              Handcrafted With Integrity
            </p>

            <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-semibold text-[#242424] leading-snug mb-4">
              Discover fashion and style on
           our online store.
            </h2>

            <p className="text-[14px] text-center md:text-[14px] font-bold mt-15 text-[#777] mb-3">
              TASA is a premium leather brand from Bangladesh,
            </p>

            <p className="text-[#777] text-[14px] mb-6 mt-5 text-center">
        that specializes in fashion design. Our focus on quality and craftsmanship shines through in every product we make, as we use only the finest full-grain leathers. Whether you're looking for a stylish new accessory or a durable, long-lasting piece, TASA has you covered. Explore our collection today and experience the luxury of genuine leather.


            </p>
          </div>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-center mt-6 md:mt-auto">
            <button
              className="cursor-pointer uppercase text-[13px] font-semibold px-8 py-3 min-h-[42px]
              bg-[rgba(0,0,0,0.68)] text-white border border-white 
              hover:bg-[rgba(0,0,0,0.85)] hover:shadow-lg 
              transition-all duration-300"
            >
              Shop Now
            </button>

            <button
              className="cursor-pointer uppercase text-[13px] font-semibold px-8 py-3 min-h-[42px]
              bg-white text-[#1a1a1a] border border-[#1a1a1a]
              hover:bg-[#1a1a1a] hover:text-white hover:shadow-lg
              transition-all duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionIntroSection;
