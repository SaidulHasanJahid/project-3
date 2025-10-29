"use client";
import React from "react";
import ProductGallery from "../product-gallery";
import ProductInfo from "../product-info";
import ProductTabs from "@/@modules/products/product-details/product-tab";

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* top spacing for fixed header on site (if exists) */}
      <div className="container mx-auto pt-28 px-4">
        <div className="flex flex-col lg:flex-row gap-[4px]">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductTabs />
      </div>
    </main>
  );
}
