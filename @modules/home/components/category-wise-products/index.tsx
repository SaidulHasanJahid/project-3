// components/ProductTabs.tsx
"use client";
import ProductCard from "@/@modules/@common/cards/product-card";
import { useCatelogueWiseProductsQuery } from "@/appstore/home/home-api";
import { Tabs } from "antd";
import React, { useState } from "react";

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

  const { data: catelogueData } = useCatelogueWiseProductsQuery();

  return (
    <div className="w-full z-[9999] mt-30">
      <div className=" bg-white z-[9999] flex justify-center border-b border-gray-200 py-4">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          centered
          tabBarStyle={{ fontWeight: 600, fontSize: 14 }}
        >
          {catelogueData?.data.map((category: any, idx: any) => (
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
