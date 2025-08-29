"use client";
import { useState } from "react";
import ProductCard from "@/@modules/@common/cards/product-card";
import { ProductType } from "@/types/types";

const tabs = [
  { cat_id: 1, category_name: "All" },
  { cat_id: 2, category_name: "Electronics" },
  { cat_id: 3, category_name: "Fashion" },
  { cat_id: 4, category_name: "Home & Garden" },
  { cat_id: 5, category_name: "Sports" },
];

export default function CategoryWiseProducts({ productsItem }: { productsItem: ProductType[] }) {
  const [activeTab, setActiveTab] = useState<number>(1);

  console.log("productsItem:", productsItem);

  const filtered: ProductType[] =
    activeTab === 1 ? productsItem : productsItem.filter(p => p.category_id === activeTab);

  return (
    <div className="px-4 mt-[50px] py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 justify-center mb-6">


        {tabs.map(tab => (
          <button
            key={tab.cat_id}
            onClick={() => setActiveTab(tab.cat_id)}
            className={`text-sm font-medium border-b-2 pb-1 transition duration-300 cursor-pointer ${
              activeTab === tab.cat_id ? "border-black text-black" : "border-transparent text-[#767678]"
            }`}
          >
            {tab.category_name}
          </button>
        ))}
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard productsItem={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

