"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiShoppingCart, FiSearch, FiHeart } from "react-icons/fi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { IoIosArrowDown, IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import MenuDrawer from "./responsive-drawer";
import MobileMenuDrawer from "./responsive-drawer";
import CartDrawer from "./drawer-cart";
import UserDrawer from "./dwawer-user";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [activeNav, setActiveNav] = useState("BAGS");
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    {
      name: "BAGS",
      href: "/bags",
      dropdown: [
        { name: "Backpack", href: "/bags/backpack" },
        { name: "Corporate", href: "/bags/corporate" },
        { name: "Briefcase Style", href: "/bags/briefcase" },
        { name: "File Bag", href: "/bags/file" },
        { name: "Ladies Tote", href: "/bags/ladies-tote" },
        { name: "Laptop Bag", href: "/bags/laptop" },
      ],
    },
    { name: "FASHIONS", href: "/products-by-category" },
    { name: "TRAVELS", href: "/products-by-category" },
    { name: "WALLETS", href: "/products-by-category" },
    { name: "SHOP", href: "/products-by-category" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
    { name: "BLOG", href: "/blog" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (openMenu || openCart || openUser || openSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu, openCart, openUser, openSearch]);

  return (
    <>
      {/* ===== Fixed Header ===== */}
      <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-[9999] shadow-sm">
        {!isMobile ? (
          // ===== Desktop Header =====
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">
            {/* ===== Left Icons ===== */}
            <div className="flex items-center space-x-5">
              <div className="relative cursor-pointer">
                <LiaExchangeAltSolid size={20} className="text-[#333333]" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-[5px] rounded-full leading-[14px]">
                  1
                </span>
              </div>

              <FiHeart
                size={20}
                className="cursor-pointer text-[#333333] hover:text-black transition"
              />
              <div className="h-5 w-[1px] bg-gray-300 mx-2"></div>

              <FiSearch
                size={20}
                onClick={() => setOpenSearch(true)}
                className="cursor-pointer text-[#333333] hover:text-black transition"
              />
            </div>

            {/* ===== Center Navigation ===== */}
            <nav className="flex items-center space-x-6 text-[14px] font-medium relative z-[9999]">
              {navItems.slice(0, 5).map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setActiveNav(item.name)}
                    className={`flex items-center gap-1 relative cursor-pointer transition-all duration-300 ${
                      activeNav === item.name ? "text-black" : "text-[#333333]"
                    } hover:text-black`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <IoIosArrowDown
                        size={14}
                        className={`mt-[2px] transition-transform duration-300 ${
                          activeNav === item.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                    {activeNav === item.name && (
                      <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-black transition-all duration-300"></span>
                    )}
                  </Link>

                  {/* ===== Dropdown ===== */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-100 rounded-sm 
                      transition-all duration-300 ease-in-out origin-top transform scale-y-0 opacity-0 translate-y-2 
                      group-hover:scale-y-100 group-hover:opacity-100 group-hover:translate-y-0 z-[9999]`}
                    >
                      <ul className="flex flex-col text-[14px] text-[#333333] py-2">
                        {item.dropdown.map((drop, i) => (
                          <li key={i}>
                            <Link
                              href={drop.href}
                              className="block px-4 py-2 hover:bg-gray-50 hover:text-black cursor-pointer transition"
                            >
                              {drop.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* ===== Center Logo ===== */}
              <Link href="/">
                <Image
                  src="https://tasa.com.bd/wp-content/uploads/2023/05/eeeeeeee11111.png"
                  alt="TASA Logo"
                  width={120}
                  height={60}
                  className="object-contain mx-3 cursor-pointer"
                />
              </Link>

              {/* ===== Right side of nav ===== */}
              {navItems.slice(5).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeNav === item.name ? "text-black" : "text-[#333333]"
                  } hover:text-black`}
                >
                  {item.name}
                  {activeNav === item.name && (
                    <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-black"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* ===== Right Icons ===== */}
            <div className="flex items-center space-x-5">
              <FiUser
                size={20}
                className="cursor-pointer text-[#333333] hover:text-black transition"
                onClick={() => setOpenUser(true)}
              />
              <div className="h-5 w-[1px] bg-gray-300 mx-2"></div>
              <div
                className="relative cursor-pointer"
                onClick={() => setOpenCart(true)}
              >
                <FiShoppingCart
                  size={20}
                  className="text-[#333333] hover:text-black transition"
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-[5px] rounded-full leading-[14px]">
                  0
                </span>
              </div>
            </div>
          </div>
        ) : (
          // ===== Mobile Header =====
          <div className="w-full flex flex-col bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <IoMenu
                  size={26}
                  className="cursor-pointer text-[#333]"
                  onClick={() => setOpenMenu(true)}
                />
                <span className="text-[16px] font-medium text-[#333]">MENU</span>
              </div>

              {/* Center Logo */}
              <Link href="/">
                <Image
                  src="https://tasa.com.bd/wp-content/uploads/2023/05/eeeeeeee11111.png"
                  alt="TASA Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </Link>

              {/* Right Icons */}
              <div className="flex items-center gap-4">
                <FiUser
                  size={20}
                  className="cursor-pointer text-[#333]"
                  onClick={() => setOpenUser(true)}
                />
                <div
                  className="relative cursor-pointer"
                  onClick={() => setOpenCart(true)}
                >
                  <FiShoppingCart size={20} className="text-[#333]" />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-[5px] rounded-full leading-[14px]">
                    0
                  </span>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="px-4 pb-3 pt-2">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full border border-gray-300  px-10 py-2 text-[15px] focus:outline-none focus:ring-1 focus:ring-black"
                  onClick={() => setOpenSearch(true)}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ===== Drawers ===== */}
      <MenuDrawer open={false} onClose={() => setOpenMenu(false)} />
      <MobileMenuDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
      <UserDrawer open={openUser} onClose={() => setOpenUser(false)} />

      {/* ===== Search Drawer ===== */}
      <AnimatePresence>
        {openSearch && (
          <motion.div
            className="fixed inset-0 bg-white z-[10000] flex flex-col items-center justify-start pt-24 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-6 right-6">
              <IoMdCloseCircle
                size={28}
                className="cursor-pointer text-gray-700 hover:text-black"
                onClick={() => setOpenSearch(false)}
              />
            </div>
            <input
              type="text"
              autoFocus
              placeholder="Search for products"
              className="w-full max-w-[600px] border-b border-gray-300 text-3xl font-semibold text-center focus:outline-none py-3"
            />
            <p className="text-gray-500 mt-4 text-sm">
              Start typing to see products you are looking for.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
