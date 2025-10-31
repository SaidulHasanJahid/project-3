"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const sortOptions = [
  "Default sorting",
  "Sort by popularity",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

const HeaderProductCategori = () => {
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

  return (
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
                onClick={() => {
                  setSelectedSort(option);
                  setDropdownOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderProductCategori;
