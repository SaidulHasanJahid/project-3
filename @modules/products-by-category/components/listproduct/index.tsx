"use client";

import { useState } from "react";
import { Range } from "react-range";
import { FaCheck } from "react-icons/fa";

const MIN = 390;
const MAX = 2000;

const colors = [
  { name: "Green", colorCode: "#006400", count: 4 },
  { name: "Red Brown", colorCode: "#5B0000", count: 11 },
  { name: "Red Wine", colorCode: "#9B004C", count: 4 },
  { name: "Black", colorCode: "#000000", count: 7 },
  { name: "Blue", colorCode: "#0047AB", count: 6 },
  { name: "White", colorCode: "#FFFFFF", count: 5 },
  { name: "Yellow", colorCode: "#FFD700", count: 3 },
];

export default function ProductSidebar() {
  const [priceRange, setPriceRange] = useState([MIN, MAX]);
  const [selectedColor, setSelectedColor] = useState<string | null>("Red Brown");
  const [onSale, setOnSale] = useState(true);
  const [inStock, setInStock] = useState(false);

  return (
    <div className="bg-white text-sm font-sans space-y-6 mt-8 w-[90%]">
      {/* FILTER BY PRICE */}
      <div>
        <h3 className="uppercase text-[13px] font-semibold mb-3 text-[#333]">
          FILTER BY PRICE
        </h3>

        <div className="px-2">
          <Range
            step={10}
            min={MIN}
            max={MAX}
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-[3px] bg-gray-300 rounded-full w-full"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-black rounded-full shadow cursor-pointer"
              />
            )}
          />
          <p className="text-[14px] mt-2 text-[#333]">
            Price: ৳{priceRange[0]} — ৳{priceRange[1]}
          </p>
          <button className="bg-[#f5f5f5] text-[#111] text-[13px] cursor-pointer font-semibold w-full mt-2 py-[6px] border border-[#ddd] hover:bg-gray-200 transition">
            FILTER
          </button>
        </div>

        <div className="border-b mt-4"></div>
      </div>

      {/* FILTER BY COLOR */}
      <div>
        <h3 className="uppercase text-[20px]  mb-10 text-[#333]">
          FILTER BY COLOR
        </h3>

        <div className="max-h-[220px] overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {colors.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setSelectedColor(item.name)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="relative w-[63px] h-[63px] rounded-3xl border border-gray-200 flex items-center justify-center"
                  style={{ backgroundColor: item.colorCode }}
                >
                  {selectedColor === item.name && (
                    <FaCheck
                      className={`text-[10px] ${
                        item.colorCode === "#FFFFFF"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`text-[14px] ${
                    selectedColor === item.name
                      ? "text-black font-medium"
                      : "text-[#555]"
                  }`}
                >
                  {item.name}
                </span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-[1px] rounded-full text-gray-600">
                {item.count}
              </span>
            </div>
          ))}
        </div>

        <div className="border-b mt-4"></div>
      </div>

      {/* STOCK STATUS */}
      <div>
        <h3 className="uppercase text-[20px]   mb-10 text-[#333] ">
          STOCK STATUS
        </h3>

        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onSale}
              onChange={() => setOnSale(!onSale)}
              className="accent-black w-4 h-4 cursor-pointer"
            />
            <span className="text-[14px] text-[#767676]">On sale</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inStock}
              onChange={() => setInStock(!inStock)}
              className="accent-black w-4 h-4 cursor-pointer"
            />
            <span className="text-[14px] text-[#767676]">In stock</span>
          </label>
        </div>
      </div>
    </div>
  );
}
