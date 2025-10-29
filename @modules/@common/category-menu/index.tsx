"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

interface SubCategory {
  name: string;
  count: number;
  slug?: string;
}

interface Category {
  title: string;
  count: number;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    title: "WALLETS",
    count: 71,
    subCategories: [
      { name: "Bifold", count: 25, slug: "bifold" },
      { name: "Long Wallet", count: 16, slug: "long-wallet" },
      { name: "Card Holder", count: 8, slug: "card-holder" },
      { name: "Travel Wallet", count: 12, slug: "travel-wallet" },
    ],
  },
  {
    title: "CORPORATE",
    count: 19,
    subCategories: [
      { name: "Office Bags", count: 6, slug: "office-bags" },
      { name: "Laptop Sleeves", count: 4, slug: "laptop-sleeves" },
      { name: "Conference Files", count: 9, slug: "conference-files" },
    ],
  },
  {
    title: "COMBO OFFER",
    count: 12,
    subCategories: [
      { name: "Wallet + Keychain", count: 4, slug: "wallet-keychain" },
      { name: "Gift Set", count: 8, slug: "gift-set" },
    ],
  },
  {
    title: "BAGS",
    count: 28,
    subCategories: [
      { name: "Messenger Bags", count: 10, slug: "messenger-bags" },
      { name: "Backpacks", count: 12, slug: "backpacks" },
      { name: "Duffle Bags", count: 6, slug: "duffle-bags" },
    ],
  },
  {
    title: "FASHIONS",
    count: 47,
    subCategories: [
      { name: "Belts", count: 15, slug: "belts" },
      { name: "Wristbands", count: 9, slug: "wristbands" },
      { name: "Sunglasses", count: 23, slug: "sunglasses" },
    ],
  },
  {
    title: "TRAVELS",
    count: 37,
    subCategories: [
      { name: "Passport Covers", count: 12, slug: "passport-covers" },
      { name: "Luggage Tags", count: 8, slug: "luggage-tags" },
      { name: "Travel Kits", count: 17, slug: "travel-kits" },
    ],
  },
  {
    title: "ACCESSORIES",
    count: 11,
    subCategories: [
      { name: "Keychains", count: 4, slug: "keychains" },
      { name: "Bracelets", count: 7, slug: "bracelets" },
    ],
  },
];

export default function CategoryMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle mouse leave for desktop hover menu
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setHoveredIndex(null);
    }
  };

  return (
    <div
      className="w-full mt-20 border-b border-gray-100 relative"
      ref={menuRef}
      onMouseLeave={handleMouseLeave}
    >
  <p className="text-[64px] text-[#242424] text-center hidden md:flex items-center justify-center gap-2">
  <HiMiniArrowLongLeft className="inline-block" />
  <span>Fashions</span>
</p>

      {/* --------- Desktop Menu --------- */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-10 py-3 text-center text-sm font-medium relative">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {/* Main Category */}
            <div className="cursor-pointer flex flex-col items-center select-none px-2 py-1">
              <div
                className={`uppercase transition-all duration-200 ${
                  hoveredIndex === index
                    ? "text-black font-semibold"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                {category.title}
              </div>
              <div className="text-xs text-gray-400">
                {category.count} Products
              </div>

              {/* Bottom border */}
              <div
                className={`h-[2px] mt-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === index ? "w-8 bg-black" : "w-0 bg-transparent"
                }`}
              ></div>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -5, scaleY: 0.95 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -5, scaleY: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white border border-gray-200 shadow-lg rounded-md w-56 text-left z-50 overflow-hidden"
                >
                  {category.subCategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={`/products/${sub.slug}`}
                      className="block px-4 py-2 hover:bg-gray-50 transition-all duration-150"
                    >
                      <div className="text-[13px] text-gray-800 font-medium">
                        {sub.name}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {sub.count} Products
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* --------- Mobile Dropdown --------- */}
      <div className="md:hidden px-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex justify-center items-center w-full py-2 text-gray-800 text-base font-semibold border-b border-gray-200"
        >
          Categories
          <FiChevronDown
            className={`ml-1 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col mt-3 space-y-3 pb-3"
            >
              {categories.map((cat) => (
                <div key={cat.title}>
                  <p className="text-sm font-semibold text-gray-800 uppercase">
                    {cat.title}
                  </p>
                  <p className="text-xs text-gray-400 -mt-1 mb-1">
                    {cat.count} Products
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
