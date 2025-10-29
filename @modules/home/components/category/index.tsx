"use client";

import Image from "next/image";
import React from "react";

type Category = {
  id: number;
  title: string;
  image: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Men’s Fashion",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/05/category-4-800x800.jpg",
  },
  {
    id: 2,
    title: "Women’s Fashion",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/05/edited-akbar-421-800x800.jpg",
  },
  {
    id: 3,
    title: "Electronics",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/05/category-6-800x800.jpg",
  },
  {
    id: 4,
    title: "Beauty Products",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/03/yy-800x800.jpg",
  },
  {
    id: 5,
    title: "Home & Kitchen",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/03/folio-800x800.jpg",
  },
  {
    id: 6,
    title: "Accessories",
    image:
      "https://tasa.com.bd/wp-content/uploads/2023/03/category-5-800x800.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full container bg-white py-14 px-4 sm:px-8 lg:px-20 overflow-hidden border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-center text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-[#111111] mb-10 tracking-wide">
        SHOP BY CATEGORIES
      </h2>

      {/* Grid */}
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 justify-items-center">
        {categories.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer w-full max-w-[370px] flex flex-col items-center transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 text-[18px] sm:text-[20px] md:text-[22px] text-[#333333] text-center">
              {item.title}
            </h3>
            <p className="text-gray-400 text-[14px] sm:text-[16px]">
              71 products
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
