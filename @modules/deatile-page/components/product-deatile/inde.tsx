"use client";
import React from "react";
import ProductGallery from "../product-gallery";
import ProductInfo from "../product-info";
import ProductTabs from "@/@modules/products/product-details/product-tab";
import RealatedProducts from "../related-product";

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          <ProductGallery />
          <ProductInfo />
        </div>

        <div className="mt-6 md:mt-8">
          <ProductTabs />
        </div>

        <div className="mt-6 md:mt-8">
          <RealatedProducts />
        </div>
      </div>
    </main>
  );
}
