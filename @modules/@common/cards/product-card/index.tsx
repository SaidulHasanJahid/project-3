import { ClassesType, ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartIconActions from "../../buttons/cart-icon-actions";

interface PropsTypes {
  classes?: ClassesType;
  productsItem: ProductType | null;
}

const ProductCard = ({ classes, productsItem }: any) => {
  if (!productsItem) return null;

  // Safe numeric values
  const price = productsItem.price ? Number(productsItem.price) : null;
  const oldPrice = productsItem.oldPrice ? Number(productsItem.oldPrice) : null;
  const rating = productsItem.rating ? Number(productsItem.rating) : 0;
  const reviews = productsItem.reviews ?? 0;

  // Full image URL
  const imageSrc =
    productsItem.image && productsItem.image !== ""
      ? productsItem.image.startsWith("http")
        ? productsItem.image
        : `${process.env.NEXT_PUBLIC_API_URL}/${productsItem.image}`
      : null;
  const imageAlt = productsItem.name || "Product Image";

  return (
    <div
      className={`h-[496px] group text-center relative overflow-hidden transition duration-300 bg-white ${
        classes?.root ?? ""
      }`}
    >
      <Link
        href={`/products/${productsItem.slug || productsItem.id}`}
        className="block"
      >
        {/* Discount Badge */}
        {productsItem.discount && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 z-10">
            {productsItem.discount}%
          </span>
        )}

        {/* Product Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={300}
              height={300}
              className="mx-auto transition-transform duration-300 group-hover:scale-105 object-contain"
            />
          ) : (
            <div className="w-[300px] h-[300px] bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          {/* Hover Icons */}
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
            <span className="line-through text-gray-400">
              ${oldPrice.toFixed(2)}
            </span>
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
