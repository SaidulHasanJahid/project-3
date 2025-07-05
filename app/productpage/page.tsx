'use client';

import { useState } from 'react';

import ProductGrid from './test';
import LeftSidebar from '@/@modules/product/productpage/leftsidelist';
import { products } from '@/types/types';

export default function ProductPage() {
  const [activePage, setActivePage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 max-w-screen-xl mx-auto">
      <LeftSidebar products={products} priceRange={priceRange} setPriceRange={setPriceRange} />
      <ProductGrid products={products} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
