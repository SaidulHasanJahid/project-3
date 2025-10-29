"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const topRatedProducts = [
  {
    name: "Classic Bifold Series 2",
    image: "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg",
    oldPrice: "৳ 1,350.00",
    price: "৳ 1,090.00",
    rating: 5,
  },
  {
    name: "Mulberry Bifold Series 1",
    image:  "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01734-800x800.jpg",
    oldPrice: "",
    price: "৳ 1,299.00 – ৳ 1,390.00",
    rating: 5,
  },
  {
    name: "Minimalist Wallet Series 2",
    image: "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg",
    oldPrice: "৳ 749.00",
    price: "৳ 649.00",
    rating: 5,
  },
];

export default function TopRatedProducts() {
  return (
    <div className=" bg-white text-[14px] font-sans mt-8 w-full">
      <h3 className="uppercase text-[13px] font-semibold mb-4 text-[#222] tracking-wide">
        TOP RATED PRODUCTS
      </h3>

      <div className="space-y-4">
        {topRatedProducts.map((product, index) => (
          <div
            key={index}
            className="group cursor-pointer w-full flex items-start gap-3 pb-3 border-b border-[#e6e6e6] last:border-none transition-all duration-300 hover:bg-[#f9f9f9] hover:shadow-sm py-2 px-2"
          >
            <div className="w-[80px] h-[80px] flex-shrink-0 overflow-hidden ">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="object-cover w-[80px] h-[80px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex-1">
              <h4 className="text-[14px] text-[#111] font-medium leading-[18px] group-hover:text-[#ff9900] cursor-pointer transition-colors duration-300">
                {product.name}
              </h4>

              <div className="flex text-[#ffc107] mt-[2px] mb-[3px]">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <FaStar key={i} className="text-[13px]" />
                ))}
              </div>

              <div className="text-[13px] text-[#333] font-medium">
                {product.oldPrice && (
                  <span className="line-through text-[#999] mr-[5px]">
                    {product.oldPrice}
                  </span>
                )}
                <span className="text-[#111] font-semibold">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
