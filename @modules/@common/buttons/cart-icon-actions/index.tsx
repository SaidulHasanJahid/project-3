"use client";

import React from "react";
import { FaHeart, FaShoppingCart, FaExchangeAlt, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import Swal from "sweetalert2";

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
  openDrawer: () => void;
  isHovered?: boolean;
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

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    openDrawer();
  };

  const icons = [
    {
      id: 1,
      icon: <FaShoppingCart size={16} />,
      label: "Add to cart",
      onClick: handleAddToCart,
    },
    {
      id: 2,
      icon: <FaSearch size={16} />,
      label: "Quick view",
      onClick: () =>
        Swal.fire({
          title: "Quick View",
          text: "Quick view feature coming soon!",
          icon: "info",
          confirmButtonText: "OK",
        }),
    },
    {
      id: 3,
      icon: <FaExchangeAlt size={16} />,
      label: "Compare",
      onClick: () =>
        Swal.fire({
          title: "Compare",
          text: "Compare feature coming soon!",
          icon: "info",
          confirmButtonText: "OK",
        }),
    },
    {
      id: 4,
      icon: <FaHeart size={16} />,
      label: "Add to wishlist",
      onClick: () =>
        Swal.fire({
          title: "Added to Wishlist",
          text: `${product.name} added to your wishlist.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
        }),
    },
  ];

  return (
    <div
      className={`absolute top-2 right-2 flex flex-col gap-0 transition-all duration-500 z-20 ${
        isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
      }`}
    >
      {icons.map((item) => (
        <div key={item.id} className="relative group/item">
          <button
            onClick={item.onClick}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white text-[#333] 
            hover:bg-[#333] hover:text-white transition-all duration-300 cursor-pointer 
            shadow-md hover:shadow-lg rounded-none"
          >
            {item.icon}
          </button>

          {/* Tooltip - Left side */}
          <span
            className="absolute left-[-130px] top-1/2 -translate-y-1/2 bg-black text-white text-[13px] px-3 py-1.5
            whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0
            transition-all duration-300 pointer-events-none "
          >
            {item.label}
          </span>

          {/* Tooltip Arrow */}
          <span
            className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-r-[6px] border-r-black 
            opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
};

export default CartIconActions;