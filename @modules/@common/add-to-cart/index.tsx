"use client";
import React from "react";

interface QuantityCartButtonsProps {
  inStock?: boolean;
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

const QuantityCartButtons: React.FC<QuantityCartButtonsProps> = ({
  inStock = true,
  quantity,
  onQuantityChange,
}) => {
  const decreaseQuantity = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[300px] mx-auto mt-4">
      {/* Quantity Selector */}
      <div className="flex items-center justify-center border border-gray-300 w-[120px] h-[40px]">
        <button
          onClick={decreaseQuantity}
          disabled={!inStock || quantity <= 1}
          className={`px-3 text-[20px] transition-all ${
            inStock && quantity > 1
              ? "text-gray-600 hover:text-black cursor-pointer"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          -
        </button>

        <span className="w-[40px] text-center border-x border-gray-300 text-[16px] font-medium text-black">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          disabled={!inStock}
          className={`px-3 text-[20px] transition-all ${
            inStock
              ? "text-gray-600 hover:text-black cursor-pointer"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        disabled={!inStock}
        className={`w-full font-semibold tracking-wide py-3 transition-all duration-300 mt-2 ${
          inStock
            ? "bg-black text-white hover:opacity-90 cursor-pointer"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        ADD TO CART
      </button>

      {/* Buy Now Button */}
      <button
        disabled={!inStock}
        className={`w-full font-semibold tracking-wide py-3 transition-all duration-300 mt-2 ${
          inStock
            ? "bg-black text-white hover:opacity-90 cursor-pointer"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        BUY NOW
      </button>

      {/* Conditional Out of Stock Message */}
      {!inStock && (
        <p className="text-[13px] md:text-[14px] text-red-600 font-medium mt-2">
          Out of stock
        </p>
      )}
    </div>
  );
};

export default QuantityCartButtons;
