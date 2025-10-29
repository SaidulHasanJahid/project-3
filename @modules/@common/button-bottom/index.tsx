"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Shop", icon: <FiShoppingBag size={22} />, href: "/shop" },
    { label: "Wishlist", icon: <FiHeart size={22} />, href: "/wishlist" },
    { label: "Cart", icon: <FiShoppingCart size={22} />, href: "/cart" },
    { label: "My account", icon: <FiUser size={22} />, href: "/account" },
  ];

  return (
    <div
      className="
        fixed bottom-0 left-0 w-full bg-white border-t border-gray-200
        flex justify-around items-center py-3 z-50
        transition-all duration-300
        max-[1000px]:flex hidden
      "
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`
              flex flex-col items-center justify-center gap-1 cursor-pointer
              transition-all duration-300
              ${isActive ? "text-black scale-105" : "text-gray-600 hover:text-black hover:scale-105"}
            `}
          >
            <span>{item.icon}</span>
            <span className="text-[13px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
