"use client";

import ProductGallery from "@/@modules/deatile-page/components/product-gallery";
import Link from "next/link";
import { FaFlag } from "react-icons/fa6";

import CartActions from "@/@modules/@common/buttons/icon-cart-categori";
import {
  FaClock,
  FaExchangeAlt,
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaPinterestP,
  FaTag,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ProductTabSlider from "./product-tab";
import { useState } from "react";

const ProductDetails = ({ product }: any) => {
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);

  const { product_gallery } = product || {};

  // Handle toggle for color
  const handleSelect = (c: any) => {
    if (selectedColor?.id === c.id) {
      setSelectedColor(null);
    } else {
      setSelectedColor(c);
    }
  };

  // Handle toggle for size
  const handleSizeSelect = (s: any) => {
    if (selectedSize?.id === s.id) {
      setSelectedSize(null);
    } else {
      setSelectedSize(s);
    }
  };

  // Calculate stock from sizes & colors
  const totalStock =
    product.sizes?.reduce((acc: number, cur: any) => acc + Number(cur.qty || 0), 0) +
    product.colors?.reduce((acc: number, cur: any) => acc + Number(cur.qty || 0), 0);

  console.log("product details:", product);
  return (
    <>
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Product Details
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {/* Images */}
          <div className="">
            <ProductGallery galleryImages={product_gallery || []} />
          </div>

          {/* Info */}
          <div className="w-full bg-white text-[#1c1c1c] font-sans leading-[1.6] text-[14px] lg:col-span-2">
            <p className="text-[#141926] text-[16px] mb-3">
              <Link href={"/"}> Home</Link> /
              <Link href={`/products-by-category/${product.category_id.slug}`}>
                {" "}
                <span className="ml-1"> {product.category_id.name}</span>
              </Link>{" "}
            </p>

            <h2 className="text-[24px] font-bold text-[#141926] mb-3">
              {product.name}
            </h2>

            <div className="flex items-center space-x-2 text-[#6c757d] mb-2">
              <span className="text-xs">
                <span className="bg-[#424A4D] w-7 p-1 mt-3 mb-3 text-white">
                  0★
                </span>{" "}
                (0)
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-2 mt-5">
              <span className="text-[16px] text-[#767678]">
                ${selectedSize ? selectedSize.price : selectedColor ? selectedColor.price : product.price}
              </span>
              <span className="line-through text-[#767678] text-[14px]">
                {product.discount_price}$
              </span>
              <span className="bg-[#424A4D] text-white text-xs px-2 py-1.5 rounded">
                {product.discount}% Off
              </span>
            </div>

            <div className="mt-3 mb-3">
              {product.stock > 0 ? (
                <p className="text-[#388E3C] font-semibold mb-2 text-[13px] mt-3">
                  In Stock ({product.stock})
                </p>
              ) : (
                <p className="text-red-600 font-semibold mb-2 text-[13px] mt-3">
                  Out of Stock
                </p>
              )}
            </div>
            <div className="space-x-4 mb-3 mt-3">
              <div className="flex items-center text-[#767678] text-[16px] space-x-1">
                <FaClock />
                <span>
                  <span className="text-[#141926] font-medium">
                    Estimated Shipping Time:
                  </span>{" "}
                  24 hour
                </span>
              </div>
              <div className="flex items-center text-[#767678] text-[16px] space-x-1 mt-2">
                <FaTag />
                <span>
                  <span className="text-[#141926] font-medium">
                    Product SKU:{" "}
                  </span>
                  {product.sku || "N/A"}
                </span>
              </div>
            </div>

            <CartActions product={product} />

            <div className="flex items-center space-x-5 text-[12px] mb-6 text-[#1B1B1E] mt-6">
              <span className="cursor-pointer hover:underline flex items-center space-x-1">
                <FaHeart /> <span>Wishlist</span>
              </span>
              <span className="cursor-pointer hover:underline flex items-center space-x-1">
                <FaExchangeAlt /> <span>Compare</span>
              </span>
            </div>

            <p className="text-[#424A4D] flex items-center mb-4 text-[16px] font-semibold cursor-pointer hover:underline">
              <FaFlag /> <span className="ml-2">Report This Item</span>
            </p>

            <h4 className="text-[#141926] text-[18px] font-semibold mb-3 mt-3">
              Share Now
            </h4>
            <div className="flex space-x-2 mb-6 mt-3">
              <div className="w-[30px] h-[30px] bg-[#3b5998] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-[30px] h-[30px] bg-[#1da1f2] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="w-[30px] h-[30px] bg-[#0077b5] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="w-[30px] h-[30px] bg-[#bd081c] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
                <FaPinterestP />
              </div>
              <div className="w-[30px] h-[30px] bg-[#25d366] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-6">
              <div>
                <h4 className="font-bold text-[16px] text-[#767678] mb-2">
                  Warranty Type :
                </h4>
                <div className="space-y-2 text-[#767678]">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="warranty"
                      className="accent-[#767678]"
                    />
                    <span>No warranty + $ 5</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="warranty"
                      className="accent-[#767678]"
                    />
                    <span>international manufacturer warranty + $ 10</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="warranty"
                      className="accent-[#767678]"
                    />
                    <span>Non-local warranty + $ 15</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-[#767678] mb-2">
                  Select Size :
                </h4>
                <div className="space-y-2 text-[#767678]">
                  {product.sizes?.map((s: any) => (
                    <label
                      key={s.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSize?.id === s.id}
                        onChange={() => handleSizeSelect(s)}
                        className="w-4 h-4 rounded-full border border-gray-400 checked:bg-[#767678] checked:border-[#767678] appearance-none cursor-pointer"
                      />
                      <span>
                        {s.size.toUpperCase()} ${s.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[16px] text-[#767678] mb-2">
                  Color Family :
                </h4>
                <div className="space-y-2 text-[#767678]">
                  {product.colors?.map((c: any) => (
                    <label
                      key={c.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedColor?.id === c.id}
                        onChange={() => handleSelect(c)}
                        className="w-4 h-4 rounded-full border border-gray-400 checked:bg-[#767678] checked:border-[#767678] appearance-none cursor-pointer"
                      />
                      <span>
                        {c.color || "Default Color"} ${c.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductTabSlider product={product} />
    </>
  );
};

export default ProductDetails;