import { ClassesType, ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartIconActions from "../../buttons/cart-icon-actions";

interface PropsTypes {
  product: ProductType;
  classes?: ClassesType;
}
const ProductCard = ({ product, classes }: PropsTypes) => {
  return (
    <div
      className={`h-[496px] group text-center relative overflow-hidden transition duration-300 bg-white ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <Link href={`/product/${product.slug}`}>
        {product.discount && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 z-10">
            {product.discount}
          </span>
        )}

        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="mx-auto transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Icons */}
          <CartIconActions />
        </div>

        <h2 className="text-[15px] text-[#767678] font-medium mt-4 line-clamp-2">
          {product.title}
        </h2>
        <div className="mt-1 space-x-2 text-sm">
          <span className="text-[#767678] font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center text-sm text-yellow-500 mt-1">
          <FaStar className="mr-1" />
          {product.rating.toFixed(1)} ({product.reviews})
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
