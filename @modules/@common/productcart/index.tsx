'use client';

import { FaCartPlus, FaHeart, FaEye, FaBalanceScale } from 'react-icons/fa';
import Image from 'next/image';
import { Product } from '../data/products';

export default function ProductCarddrop({ product }: { product: Product }) {
  return (
    <div className="border rounded shadow-sm hover:shadow-md transition p-3 relative group">
      {product.discount && (
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
          {[FaCartPlus, FaHeart, FaEye, FaBalanceScale].map((Icon, idx) => (
            <button key={idx} className="bg-white p-2 rounded text-black shadow">
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.title}</h3>
        {product.oldPrice && (
          <div className="text-xs text-gray-600 line-through">৳{product.oldPrice}</div>
        )}
        <div className="text-base font-bold text-red-500">৳{product.price}</div>
        <div className="text-yellow-500 text-sm mt-1">★ 0.0</div>
      </div>
    </div>
  );
}
