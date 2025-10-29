"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import ProductData from "../../../../mockdata/product_ariya.json";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";

// ---------- Sorting Options ----------
const sortOptions = [
  "Default sorting",
  "Sort by popularity",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

// ---------- CartIconActions Component ----------
const CartIconActions = ({ isHovered }: { isHovered: boolean }) => {
  const icons = [
    { id: 1, icon: <FaShoppingCart size={15} />, label: "Add to cart" },
    { id: 2, icon: <FaSearch size={15} />, label: "Quick view" },
    { id: 3, icon: <FaExchangeAlt size={15} />, label: "Compare" },
    { id: 4, icon: <FaHeart size={15} />, label: "Add to wishlist" },
  ];

  return (
    <div
      className={`absolute top-5 right-2 flex flex-col  transition-all duration-300 ${
        isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
      }`}
      style={{ pointerEvents: isHovered ? "auto" : "none" }}
    >
      {icons.map((item) => (
        <div key={item.id} className="relative group">
          <button
            className="w-[38px] h-[38px] flex items-center justify-center bg-white text-[#333] 
            hover:bg-[#333] hover:text-white transition-all duration-300 cursor-pointer"
          >
            {item.icon}
          </button>

          {/* Tooltip */}
          <span
            className="absolute left-[-115px] top-1/2 -translate-y-1/2 bg-black text-white text-[12px] px-3 py-[3px] 
            whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 
            transition-all duration-300"
          >
            {item.label}
          </span>

          {/* Tooltip Arrow */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      ))}
    </div>
  );
};

// ---------- CartCard Component ----------
type Product = {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  discount?: string;
  thumbnail: string;
};

const CartCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white shadow-md overflow-hidden cursor-pointer w-full transition-all duration-300
        h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full" style={{ aspectRatio: "1/1", minHeight: "140px" }}>
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className={`object-cover w-full h-full transition-transform duration-500 ${
            isHovered ? "scale-105" : ""
          }`}
        />
        {product.discount && (
          <span className="absolute top-1 left-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#333] text-white text-[10px] sm:text-xs flex items-center justify-center rounded-full">
            {product.discount}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-1 sm:p-2 text-left flex flex-col justify-between h-[70px]">
        <div>
          <h3 className="text-[11px] sm:text-[13px] font-medium text-[#777] mb-1 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <p className="text-[11px] sm:text-[13px] text-[#777]">{product.price}</p>
            {product.discount_price && (
              <p className="text-[9px] sm:text-[11px] text-[#999] line-through">{product.discount_price}</p>
            )}
          </div>
        </div>
      </div>

      {/* Hover Cart Icons */}
      <CartIconActions isHovered={isHovered} />
    </div>
  );
};

// ---------- ProductArea Component ----------
const ProductArea = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedSort(option);
    setDropdownOpen(false);
  };

  return (
    <section className="py-8 px-3 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-8 border-b border-gray-200 pb-3">
        <div className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
          Home / <span className="text-gray-700 font-medium">Fashions</span> /{" "}
          <span className="text-gray-900 font-semibold">Page 2</span>
        </div>

        {/* Sorting Dropdown */}
        <div className="relative z-30" ref={dropdownRef}>
          <button
            className="border-b border-gray-300 text-gray-700 text-xs sm:text-sm px-3 py-2 w-44 sm:w-52 text-left bg-white cursor-pointer flex justify-between items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedSort}
            <FiChevronDown
              className={`transition-transform text-gray-500 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 shadow-md rounded-md overflow-hidden z-40">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {ProductData.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductArea;
