"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import ProductList from "./components/listproduct";
import ProductArea from "./components/product-area";
import ProductSlider from "./components/product-slider";
import CategoryMenu from "../@common/category-menu";

const ProductByCategory = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1300);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <CategoryMenu />

      {/* Main Content */}
      <div className="container mx-auto mt-4">
        {/* Show sidebar toggle on small screens */}
        {isMobile && (
          <button
            className="flex items-center gap-2 text-black border px-4 py-2 rounded mb-4"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars /> Filter Products
          </button>
        )}

        {/* Layout */}
        <div className="lg:flex lg:gap-4">
          {/* Sidebar (only visible on large screens) */}
          {!isMobile && (
            <div className="lg:w-1/4 flex-shrink-0">
              <ProductList />
              <ProductSlider />
            </div>
          )}

          {/* Main Product Grid */}
          <div className={`w-full ${isMobile ? "" : "lg:w-3/4"}`}>
            <ProductArea />
          </div>
        </div>
      </div>

      {/* Drawer for ListContent on small devices */}
      {isMobile && drawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full  bg-opacity-40 z-50 flex">
          <div className="w-[80%] sm:w-[60%] md:w-[40%] bg-white p-4 shadow h-full overflow-y-auto relative">
            <button
              className="absolute top-3 right-4 text-xl text-[#767678]"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            <div>
              <ProductList />
              <ProductSlider />
            </div>
          </div>
          <div className="flex-1" onClick={() => setDrawerOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default ProductByCategory;
