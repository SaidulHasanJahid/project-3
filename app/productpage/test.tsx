'use client';

import ProductCarddrop from '@/@modules/@common/productcart';
import { Product } from '@/types/types';

type Props = {
  products: Product[];
  activePage: number;
  setActivePage: (n: number) => void;
};

export default function ProductGrid({ products, activePage, setActivePage }: Props) {
  const productsPerPage = 12;
  const startIndex = (activePage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((prod) => (
          <ProductCarddrop key={prod.id} product={prod} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`w-8 h-8 border rounded ${activePage === i + 1 ? 'bg-black text-white' : ''}`}
            onClick={() => setActivePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
