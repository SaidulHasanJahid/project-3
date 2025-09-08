// components/ProductTabs.tsx
"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import { useCatelogueWiseProductsQuery } from "@/appstore/home/home-api";
import ProductCard from "@/@modules/@common/cards/product-card";

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
    <div className="container">
    <div className="w-full mt-10">
      <Tabs
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        centered
        className="custom-tabs"
      >
        {catelogueData?.data?.map((category: any, idx: number) => (
          <Tabs.TabPane tab={category.name} key={idx.toString()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {category?.products?.length > 0 ? (
                category?.products?.map((product: Product) => (
                  <ProductCard   productsItem={product} 
                  className="w-full h-full" 
                  key={`product-${product.id}`} />
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

      {/* Custom CSS */}
      <style jsx global>{`
        .custom-tabs .ant-tabs-nav {
          margin: 0;
          border-bottom: none !important;
        }
        .custom-tabs .ant-tabs-tab {
          font-size: 14px !important;
          color: #767678 !important;
          font-weight: 500;
        }
        .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #141926 !important;
        }
        .custom-tabs .ant-tabs-ink-bar {
          background: #141926 !important;
        }
      `}</style>
    </div>
    </div>
  );
};

export default ProductTabs;
