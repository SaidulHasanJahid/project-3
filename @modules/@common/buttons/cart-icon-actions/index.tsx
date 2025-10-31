"use client";

import React from "react";
import { FaHeart, FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { message } from "antd";

interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    discount_price?: number;
    thumbnail: string;
    discount?: number;
    quantity?: number;
  };
  openDrawer: () => void; // Function to open drawer
  isHovered?: boolean; // Optional hover state
}

const CartIconActions: React.FC<Props> = ({ product, openDrawer, isHovered = true }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product?.id) return;

    const payload = {
      id: product.id,
      name: product.name,
      price: Number(product.price),
      discount_price: product.discount_price ?? null,
      thumbnail: product.thumbnail,
      discount: product.discount ?? 0,
      quantity: 1,
    };

    dispatch(addToCart(payload));
    message.success("Product added to cart");
    openDrawer();
  };

  const icons = [
    { id: 1, icon: <FaShoppingCart size={16} />, label: "Add to cart", onClick: handleAddToCart },
    { id: 2, icon: <FaSearch size={16} />, label: "Quick view", onClick: () => message.info("Quick view clicked") },
    { id: 3, icon: <FaExchangeAlt size={16} />, label: "Compare", onClick: () => message.info("Compare clicked") },
    { id: 4, icon: <FaHeart size={16} />, label: "Add wishlist", onClick: () => message.info("Wishlist clicked") },
  ];

  return (
    <div
      className={`absolute top-2 right-2 flex flex-col  transition-all duration-500 ${
        isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
      }`}
    >
      {icons.map((item) => (
        <div key={item.id} className="relative group/item">
          <button
            onClick={item.onClick}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white text-[#333] 
            hover:bg-[#333] hover:text-white transition-all duration-300 cursor-pointer"
          >
            {item.icon}
          </button>

          {/* Tooltip */}
          <span
            className="absolute left-[-115px] top-1/2 -translate-y-1/2 bg-black text-white text-[15px] px-3 py-[3px]
            whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-x-3 group-hover/item:translate-x-0
            transition-all duration-300"
          >
            {item.label}
          </span>

          {/* Tooltip Arrow */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-black opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
        </div>
      ))}
    </div>
  );
};

export default CartIconActions;
