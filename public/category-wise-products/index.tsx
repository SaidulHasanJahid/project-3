"use client";
import { useState } from "react";

import products from "@/@mock-data/product.json"; // Assuming you have a data file with products
import ProductCard from "@/@modules/@common/cards/product-card";
import { ProductType } from "@/types/types";

const newTabs = [
  {
    cat_id: 1,
    category_name: "ALL",
  },
  {
    cat_id: 2,
    category_name: "NEW ARRIVAL",
  },
  {
    cat_id: 3,
    category_name: "BEST SELLING",
  },
  {
    cat_id: 4,
    category_name: "TRENDING",
  },
];

export default function CategoryWiseProducts() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const filtered: ProductType[] =
    !activeTab || activeTab === 1
      ? products
      : products.filter((p) => p.category_id === activeTab);

  return (
    <div className="px-4 mt-[50px] py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 justify-center mb-6">
        {newTabs.map((tab) => {
          return (
            <button
              key={tab.cat_id}
              onClick={() => setActiveTab(tab.cat_id)}
              className={`text-sm font-medium border-b-2 pb-1 transition duration-300 cursor-pointer ${
                activeTab === tab.cat_id
                  ? "border-black text-black"
                  : "border-transparent text-[#767678]"
              }`}
            >
              {tab.category_name}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {filtered.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
