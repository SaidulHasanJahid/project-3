"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHeart,
  FaRegSmile,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import products from "@/@mock-data/product.json"; // Assuming you have a data file with products
import { ProductType } from "@/types/types";

const tabs: string[] = ["ALL", "NEW ARRIVAL", "BEST SELLING", "TRENDING"];

export default function Tab() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const filtered: ProductType[] =
    activeTab === "ALL"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="px-4 mt-[50px] py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium border-b-2 pb-1 transition duration-300 cursor-pointer ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="h-[496px] group text-center relative overflow-hidden transition duration-300 bg-white"
          >
            <Link href={`/product/${product.slug}`}>
              {product.discount && (
                <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 z-10">
                  {product.discount}
                </span>
              )}

              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="mx-auto transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Icons */}
                <div className="absolute top-25 cursor-pointer right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                  <button className="bg-white p-2 hover:bg-gray-100">
                    <FaShoppingBag />
                  </button>
                  <button className="bg-white p-2 shadow hover:bg-gray-100">
                    <FaShoppingCart />
                  </button>
                  <button className="bg-white p-2 shadow hover:bg-gray-100">
                    <FaHeart />
                  </button>
                  <button className="bg-white p-2 shadow hover:bg-gray-100">
                    <FaRegSmile />
                  </button>
                </div>
              </div>

              <h2 className="text-[15px] text-[#767678] font-medium mt-4 line-clamp-2">
                {product.title}
              </h2>
              <div className="mt-1 space-x-2 text-sm">
                <span className="text-[#767678] font-bold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center text-sm text-yellow-500 mt-1">
                <FaStar className="mr-1" />
                {product.rating.toFixed(1)} ({product.reviews})
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
