'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';
import { Range } from 'react-range';

type Category = {
  name: string;
  subcategories?: string[];
};

const categories: Category[] = [
  { name: 'Electronic', subcategories: ['TV', 'Laptop', 'Camera'] },
  { name: 'Fashion & Beauty', subcategories: ['ACCESSORIES', 'BAGS', 'CLOTHINGS', 'SHOES'] },
  { name: 'Camera & Photo', subcategories: ['Lenses', 'Tripods', 'Drones'] },
  { name: 'Smart Phone & Table', subcategories: ['Android', 'iPhone', 'Tablets'] },
  { name: 'Sport & Outdoor' },
  { name: 'Jewelry & Watches' },
  { name: 'Health & Beauty' },
  { name: 'Books & Office' },
  { name: 'Toys & Hobbies' },
  { name: 'Automobiles' },
  { name: 'Home decoration' },
  { name: 'Portable & Personal' },
  { name: 'Outdoor, Recreation' },
  { name: 'Surveillance Safety' },
];

const MIN = 0;
const MAX = 1000000;

export default function ProductList() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([MIN, MAX]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full p-[10px] bg-white text-sm font-sans space-y-4">
      {/* Category Filter */}
      <div className="border border-[#76767878] p-4 rounded">
        <div className="flex justify-between items-center font-semibold border-b pb-2 mb-2 cursor-pointer text-[#767678]">
          <span>Product categories</span>
          <FaChevronDown className="text-xs" />
        </div>

        <ul className="space-y-1 text-[#767678]">
          {categories.map((cat, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition leading-[35px]"
                onClick={() => toggleDropdown(index)}
              >
                <span>{cat.name}</span>
                {cat.subcategories && (
                  <FaChevronDown
                    className={clsx(
                      'text-xs transition-transform duration-300',
                      openIndexes.includes(index) && 'rotate-180'
                    )}
                  />
                )}
              </div>

              {cat.subcategories && openIndexes.includes(index) && (
                <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                  {cat.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="hover:text-blue-500 transition leading-[30px]">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter Outside */}
      <div className=" p-4 rounded bg-white">
        <div className="font-semibold mb-2 text-[#767678]">Filter by Price</div>

        <Range
          step={10000}
          min={MIN}
          max={MAX}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }:any) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className="h-2 bg-gray-300 rounded-full"
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className="w-4 h-4 bg-black rounded-full shadow-md cursor-pointer"
              />
            );
          }}
        />

        <div className="flex items-center justify-between mt-3">
          <input
            type="text"
            readOnly
            value={priceRange[0]}
            className="border px-2 py-1 w-[80px] text-center"
          />
          <span className="mx-1">To</span>
          <input
            type="text"
            readOnly
            value={priceRange[1]}
            className="border px-2 py-1 w-[80px] text-center"
          />
        </div>

        <button
          onClick={() => {
            console.log('Search clicked:', priceRange);
          }}
          className="bg-gray-800 hover:bg-black text-white w-full mt-3 py-2 text-sm rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}
