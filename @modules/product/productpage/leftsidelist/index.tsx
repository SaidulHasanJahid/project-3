'use client';

import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { Product } from '@/types/types';
// Make sure your tsconfig allows importing JSON this way

type Props = {
  products: Product[];
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
};

// Category List
const categories = [
  { title: 'Electronic', dropdown: true },
  { title: 'Fashion & Beauty', dropdown: true },
  { title: 'Camera & Photo', dropdown: false },
  { title: 'Smart Phone & Tablet', dropdown: true },
  { title: 'Sport & Outdoor', dropdown: false },
  { title: 'Health & Beauty', dropdown: false },
];

export default function LeftSidebar({ products, priceRange, setPriceRange }: Props) {
  return (
    <aside className="w-full md:w-1/4 space-y-6">
      {/* --------- Product Categories --------- */}
      <div className="border rounded p-4 shadow-sm">
        <h2 className="font-semibold mb-3">Product categories</h2>
        {categories.map((cat, index) => (
          <div key={index} className="flex justify-between items-center py-1 border-b text-sm">
            <span>{cat.title}</span>
            {cat.dropdown && <FaChevronDown />}
          </div>
        ))}
      </div>

      {/* --------- Price Filter --------- */}
      <div className="border rounded p-4 shadow-sm">
        <h2 className="font-semibold mb-3">Filter by Price</h2>
        <input
          type="range"
          min={0}
          max={10000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full"
        />
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            value={priceRange[0]}
            readOnly
            className="w-1/2 border px-2 py-1 text-sm"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-1/2 border px-2 py-1 text-sm"
          />
        </div>
        <button className="mt-3 bg-black text-white py-1 px-4 text-sm">Search</button>
      </div>

      {/* --------- Recent Products --------- */}
      <div className="border rounded p-4 shadow-sm">
        <h2 className="font-semibold mb-3">Recent Product</h2>
        {products.slice(0, 4).map((prod) => (
          <div key={prod.id} className="flex items-center gap-2 mb-3">
            <Image
              src={prod.image}
              alt={prod.title}
              width={40}
              height={40}
              className="rounded object-cover"
            />
            <div>
              <p className="text-sm">{prod.title}</p>
              <p className="text-xs text-gray-500">৳{prod.price}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
