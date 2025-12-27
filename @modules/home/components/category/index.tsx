"use client";

import { useIsfeatureofferQuery } from "@/appstore/categori/api";
import Image from "next/image";
import React from "react";

type Category = {
  id: number;
  name: string;
  thumbnailUrl: string | null; // API থেকে null বা relative path আসতে পারে
};

export default function CategoryGrid() {
  const { data: categoriData, isLoading, isError } = useIsfeatureofferQuery();
  console.log("Categori Data:", categoriData);

  const categories: Category[] = categoriData?.data || [];

  // HeroCarousel-এর মতো same function যোগ করলাম – full image URL তৈরি করবে
  const getImageUrl = (path: string | null) => {
    if (!path) return "https://via.placeholder.com/400x400/F5F5F5/999999?text=No+Image";

    // যদি ইতিমধ্যে full URL (http দিয়ে শুরু) হয়, তাহলে সেটাই return করো
    if (path.startsWith("http")) return path;

    // Base URL from env (তোমার .env-এ IMAGE_URL আছে)
    const baseUrl = process.env.IMAGE_URL || "https://grocery.reclinerbdking.com";

    // Path-এ leading slash না থাকলে যোগ করো, double slash এড়ানোর জন্য
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
  };

  // Skeleton Card (loading-এর জন্য)
  const SkeletonCard = () => (
    <div className="w-full max-w-[370px] flex flex-col items-center animate-pulse">
      <div className="w-full aspect-square  bg-gray-200" />
      <div className="mt-4 h-8 w-4/5  bg-gray-200" />
      <div className="mt-2 h-5 w-1/2  bg-gray-200" />
    </div>
  );

  if (isError) {
    return (
      <section className="w-full container bg-white py-14 px-4 sm:px-8 lg:px-20 text-center">
        <p className="text-xl text-red-600">Error loading categories.</p>
      </section>
    );
  }

  return (
    <section className="w-full container bg-white py-14 px-4 sm:px-8 lg:px-20 overflow-hidden border-b border-gray-200">
      {/* Section Title */}
      <h2 className="text-center text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-[#111111] mb-10 tracking-wide">
        SHOP BY CATEGORIES
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 justify-items-center">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
          : categories.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer w-full max-w-[370px] flex flex-col items-center transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden   bg-gray-100">
                  <Image
                    src={getImageUrl(item.thumbnailUrl)}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    unoptimized // external domain এর জন্য (optimization error এড়ানো)
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x400/F5F5F5/999999?text=No+Image";
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-[18px] sm:text-[20px] md:text-[22px] text-[#333333] text-center font-medium">
                  {item.name}
                </h3>

                {/* Product Count */}
                <p className="text-gray-400 text-[14px] sm:text-[16px] mt-1">
                  71 products
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}