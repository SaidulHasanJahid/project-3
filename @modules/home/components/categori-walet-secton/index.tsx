"use client";

import React from "react";

interface WalletCategory {
  id: number;
  title: string;
  products: number;
  image: string;
}

const categories: WalletCategory[] = [
  {
    id: 1,
    title: "BIFOLD",
    products: 25,
    image: "https://tasa.com.bd/wp-content/uploads/2023/10/IMG_6199-800x800.jpg",
  },
  {
    id: 2,
    title: "LONG WALLET",
    products: 16,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/IMG_5711-800x800.jpg",
  },
  {
    id: 3,
    title: "TRIFOLD",
    products: 6,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/20230110-IMG_2383-conv-800x800.jpg",
  },
];

const WalletCategories: React.FC = () => {
  return (
    <section className="w-full mt-[15px] px-4 md:px-10 lg:px-20 text-center">
      <h2 className="text-3xl  mb-7">Wallet Categories</h2>

      {/* 3 cards in one row across all screen sizes */}
      <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="w-1/3 px-2 cursor-pointer"
          >
            <div className="aspect-square overflow-hidden ">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-wide">
              {cat.title}
            </h3>
            <p className="text-gray-500 text-sm">{cat.products} products</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WalletCategories;
