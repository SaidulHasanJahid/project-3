// "use client";

// import Image from "next/image";
// import { ProductType } from "@/types/types";

// interface ProductCardProps {
//   product: ProductType;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   // ✅ Always fallback to a safe number
//   const safePrice =
//     product && product.price != null && !isNaN(Number(product.price))
//       ? Number(product.price)
//       : 0;

//   return (
//     <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
//       {/* Product Image */}
//       <div className="relative w-full h-64 bg-gray-100">
//         {product?.thumbnail ? (
//           <Image
//             src={product.thumbnail}
//             alt={product.name || "Product Image"}
//             fill
//             className="object-cover"
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold truncate">{product?.name || "Unnamed Product"}</h3>
//         <p className="text-sm text-gray-500 line-clamp-2">
//           {product?.description || "No description available."}
//         </p>

//         {/* Price */}
//         <p className="mt-2 text-xl font-bold text-gray-900">
//           ${safePrice.toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

import products from "@/@mock-data/product.json"; // Assuming you have a data file with products
import ProductCard from "@/@modules/@common/cards/product-card";
import { ProductType } from "@/types/types";

const newTabs = [
  {
    cat_id: 1,
    category_name: "ALL",
  },
  {
    cat_id: 2,
    category_name: "NEW ARRIVAL",
  },
  {
    cat_id: 3,
    category_name: "BEST SELLING",
  },
  {
    cat_id: 4,
    category_name: "TRENDING",
  },
];

export default function CategoryWiseProducts({productsItem}:any) {
  const [activeTab, setActiveTab] = useState<number>(1);
console.log(productsItem);

  const filtered: ProductType[] =
    !activeTab || activeTab === 1
      ? products
      : products.filter((p) => p.category_id === activeTab);

  return (
    <div className="px-4 mt-[50px] py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 justify-center mb-6">
        {newTabs.map((tab) => {
          return (
            <button
              key={tab.cat_id}
              onClick={() => setActiveTab(tab.cat_id)}
              className={`text-sm font-medium border-b-2 pb-1 transition duration-300 cursor-pointer ${
                activeTab === tab.cat_id
                  ? "border-black text-black"
                  : "border-transparent text-[#767678]"
              }`}
            >
              {tab.category_name}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {filtered.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
