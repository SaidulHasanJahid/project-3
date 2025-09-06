"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartIconActions from "../../buttons/cart-icon-actions";
import { baseUrl } from "@/utils/url";



const ProductCard = ({ classes, productsItem }: any) => {
  if (!productsItem) return null;

  console.log("productsItem in ProductCard:", productsItem);

  const price = productsItem.price ? Number(productsItem.price) : null;
  const oldPrice = productsItem.oldPrice ? Number(productsItem.oldPrice) : null;
  const rating = productsItem.rating ? Number(productsItem.rating) : 0;
  const reviews = productsItem.reviews ?? 0;

  // Use thumbnail first, then first gallery image
  const imagePath =
    productsItem.thumbnail && productsItem.thumbnail.trim() !== ""
      ? productsItem.thumbnail
      : productsItem.product_gallery?.[0]?.image_url || "";

  // Safe baseUrl usage
const imageSrc = imagePath
  ? imagePath.startsWith("http")
    ? imagePath
    : `${baseUrl || ""}/${imagePath}`
    : "https://via.placeholder.com/300";


  const imageAlt = productsItem.name || "Product Image";

  return (
    <div
      className={`group text-center relative overflow-hidden transition duration-300 bg-white px-4 sm:px-2 md:px-0 h-[496px] ${
        classes?.root ?? ""
      }`}
    >
      <Link href={`/product/${productsItem.slug || productsItem.id}`} className="block">
        {/* Discount Badge */}
        {productsItem.discount && Number(productsItem.discount) > 0 && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 z-10">
            {productsItem.discount}%
          </span>
        )}

        {/* Product Image */}
        <div className="relative w-full max-w-[300px] h-[300px] mx-auto flex items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <CartIconActions />
        </div>

        {/* Title */}
        <h2 className="text-[15px] text-[#767678] font-medium mt-4 line-clamp-2">
          {productsItem.name ?? "No Name"}
        </h2>

        {/* Price */}
        <div className="mt-1 space-x-2 text-sm">
          <span className="text-[#767678] font-bold">
            {price !== null ? `$${price.toFixed(2)}` : "Price not available"}
          </span>
          {oldPrice !== null && (
            <span className="line-through text-gray-400">${oldPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center text-sm text-yellow-500 mt-1">
          <FaStar className="mr-1" />
          {rating.toFixed(1)} ({reviews})
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
