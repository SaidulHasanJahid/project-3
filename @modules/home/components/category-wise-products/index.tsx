// components/ProductTabs.tsx
"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import Link from "next/link";
import ProductCard from "@/@modules/@common/cards/product-card";
import { useCatelogueWiseProductsQuery } from "@/appstore/home/home-api";

interface Product {
  id: number;
  name: string;
  thumbnail: string;
  discount?: string;
  price: string;
  discount_price?: string;
  slug: string; 
}

const ProductTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState("0");

  const { data:catelogueData} =useCatelogueWiseProductsQuery();

  console.log("catelogueData", catelogueData?.data);

  // Dummy response (backend theke slug thakbe)
  const response = {
    data: [
      { id: 1, name: "New Arrival", slug: "new-arrival", products: [] },
      {
        id: 2,
        name: "Trending",
        slug: "trending",
        products: [
          {
            id: 32,
            name: "Zain - Digital Agency and Startup HTML Template",
            thumbnail: "uploads/products/1757012019202-910509185.png",
            price: "200.00",
            slug: "zain-digital-agency-startup-html-template",
          },
        ],
      },
      {
        id: 3,
        name: "Best Selling",
        slug: "best-selling",
        products: [
          {
            id: 31,
            name: "Physical Product Title Title will Be Here 102",
            thumbnail: "uploads/products/1757011939939-74394706.png",
            price: "100.00",
            discount_price: "0.00",
            slug: "physical-product-title-102",
          },
        ],
      },
      {
        id: 4,
        name: "Popular",
        slug: "popular",
        products: [
          {
            id: 30,
            name: "Physical Product Title will be here",
            thumbnail: "uploads/products/1757011845688-209015100.jpg",
            price: "1200.00",
            discount: "10",
            discount_price: "1080.00",
            slug: "physical-product-title-popular",
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full z-[9999] mt-30">
      <div className=" bg-white z-[9999] flex justify-center border-b border-gray-200 py-4">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          centered
          tabBarStyle={{ fontWeight: 600, fontSize: 14 }}
        >
          {catelogueData?.data.map((category:any, idx:any) => (
            <Tabs.TabPane tab={category.name} key={idx.toString()}>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 relative z-0">
                {category?.products?.length > 0 ? (
                  category?.products?.map((product: Product) => (
                  
                      <ProductCard key={product?.id} productsItem={product} />
                  ))
                ) : (
                  <div className="col-span-full text-gray-400 text-center py-10">
                    No products available.
                  </div>
                )}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
