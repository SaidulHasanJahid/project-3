'use client';

import Image from 'next/image';
import {
  FaHeart,
  FaShoppingCart,
  FaSmile,
  FaShoppingBag,
} from 'react-icons/fa';

const products = [
 {
    id: 5,
    title: "Elegant Summer Hat",
    price: 45,
    oldPrice: 60,
    rating: 4.6,
    reviews: 5,
    discount: "-25%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378035XJWgisPU.jpg",
  },
  {
    id: 6,
    title: "Stylish Sneakers",
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    reviews: 18,
    discount: "-20%",
    category: "TRENDING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378156sxEgX2Pk.jpg",
  },
  {
    id: 7,
    title: "Modern Glasses",
    price: 80,
    oldPrice: 110,
    rating: 4.3,
    reviews: 9,
    discount: "-27%",
    category: "NEW ARRIVAL",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378418BxWim5Uq.jpg",
  },
  {
    id: 8,
    title: "Stylish Backpack",
    price: 150,
    oldPrice: 180,
    rating: 4.4,
    reviews: 12,
    discount: "-16%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392364Li5C3bEO.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-4 py-16 bg-white w-full">
      <div className="text-center mb-12">
        <p className="uppercase text-gray-500 text-sm">Featured Products</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Featured Products</h2>
      </div>

      <div className="grid grid-cols-2 mt-9 cursor-pointer  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white p-4 rounded-md border border-gray-100 shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]"
          >
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-sm z-10">
                {product.discount}
              </span>
            )}

            {/* Hover Icons */}
            <div
              className="absolute top-10 right-[30px] opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-500 ease-in-out flex flex-col gap-3 z-20"
            >
              {[FaHeart, FaShoppingCart, FaShoppingBag, FaSmile].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white border border-gray-300 rounded-sm flex items-center justify-center transition-all hover:shadow-md"
                >
                  <Icon className="text-black text-[16px]" />
                </div>
              ))}
            </div>

            {/* Product Image */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="text-center mt-4 space-y-1">
              <h3 className="text-sm text-gray-800">{product.title}</h3>
              <div className="font-bold text-gray-900 text-md">
                {product.price}$
                {product.oldPrice && (
                  <span className="text-gray-500 font-normal line-through text-sm ml-2">
                    {product.oldPrice}$
                  </span>
                )}
              </div>
              <div className="text-sm text-yellow-500 flex justify-center items-center gap-1">
                <span>★</span>
                <span className="text-gray-600">0.0 (0)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
