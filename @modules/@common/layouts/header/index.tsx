"use client";

import React, { useState, useEffect } from "react";
import { Badge, Input } from "antd";
import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useSettigQuery } from "@/appstore/setttings/api";

import SearchDrawer from "./search-drawer";
import CartDrawer from "./drawer-cart";
import LoginDrawer from "./dwawer-user";
import MenuDrawer from "./responsive-drawer";

const HeaderSub = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [loginDrawerOpen, setLoginDrawerOpen] = useState(false);
  const [bagsDropdown, setBagsDropdown] = useState(false);
  const [walletsDropdown, setWalletsDropdown] = useState(false);

  const { data: settingData, isLoading } = useSettigQuery();
  const settings = settingData?.data;

  const cartItems = useSelector((state: any) => state.cart?.items || []);
  const cartCount = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);

  const handleMenuSearchClick = () => {
    setMenuDrawerOpen(false);
    setSearchOpen(true);
  };

  useEffect(() => {
    if (cartDrawerOpen || searchOpen || menuDrawerOpen || loginDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cartDrawerOpen, searchOpen, menuDrawerOpen, loginDrawerOpen]);

  return (
    <>
      {/* ==================== DESKTOP HEADER ==================== */}
      <header className="hidden lg:block bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-[1212px] mx-auto px-4">
          <div className="relative flex items-center justify-between h-20">
            {/* Left Icons */}
            <div className="flex items-center gap-6 pr-6 border-r border-gray-300">
              <Heart className="w-6 h-6 cursor-pointer hover:text-gray-600 transition" />
              <Search
                className="w-6 h-6 cursor-pointer hover:text-gray-600 transition"
                onClick={() => setSearchOpen(true)}
              />
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                {isLoading ? (
                  <div className="w-64 h-20 bg-gray-200 animate-pulse rounded" />
                ) : settings?.primaryLogoPath ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${settings.primaryLogoPath}`}
                    alt={settings.siteName || "Logo"}
                    className="h-20 object-contain"
                  />
                ) : (
                  <span className="text-4xl font-bold tracking-wider">
                    {settings?.siteName || "TASA"}
                  </span>
                )}
              </Link>
            </div>

            {/* Navigation - Menus on both sides with reduced gaps */}
            <nav className="flex items-center justify-between flex-1 px-12">
              {/* Left Menu - gap komano */}
              <div className="flex items-center gap-6"> 
                {/* BAGS Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setBagsDropdown(true)}
                  onMouseLeave={() => setBagsDropdown(false)}
                >
                  <button className="flex items-center gap-1 hover:text-gray-600 transition">
                    BAGS <ChevronDown className="w-4 h-4" />
                  </button>
                  {bagsDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 py-4 px-6 rounded-md z-50">
                      <ul className="space-y-3 text-gray-700">
                        <li className="cursor-pointer hover:text-black">Backpack</li>
                        <li className="cursor-pointer hover:text-black">Corporate</li>
                        <li className="cursor-pointer hover:text-black">Briefcase style</li>
                        <li className="cursor-pointer hover:text-black">File Bag</li>
                        <li className="cursor-pointer hover:text-black">Ladies Tote</li>
                        <li className="cursor-pointer hover:text-black">Laptop Bag</li>
                      </ul>
                    </div>
                  )}
                </div>

                <Link href="/products-by-category" className="hover:text-gray-600 transition">
                  FASHIONS
                </Link>
                <Link href="/products-by-category" className="hover:text-gray-600 transition">
                  TRAVELS
                </Link>

                {/* WALLETS Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setWalletsDropdown(true)}
                  onMouseLeave={() => setWalletsDropdown(false)}
                >
                  <button className="flex items-center gap-1 hover:text-gray-600 transition">
                    WALLETS <ChevronDown className="w-4 h-4" />
                  </button>
                  {walletsDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 py-4 px-6 rounded-md z-50">
                      <ul className="space-y-3 text-gray-700">
                        <li className="cursor-pointer hover:text-black">Long Wallet</li>
                        <li className="cursor-pointer hover:text-black">Bifold</li>
                        <li className="cursor-pointer hover:text-black">Trifold</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Menu - gap komano */}
              <div className="flex items-center gap-6"> {/* 🔹 gap-8 theke gap-6 */}
                <Link href="/products-by-category" className="hover:text-gray-600 transition">
                  SHOP
                </Link>
                <Link href="/about" className="hover:text-gray-600 transition">
                  ABOUT US
                </Link>
                <Link href="/contact" className="hover:text-gray-600 transition">
                  CONTACT US
                </Link>
                <Link href="/blog" className="hover:text-gray-600 transition">
                  BLOG
                </Link>
              </div>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <User
                className="w-6 h-6 cursor-pointer hover:text-gray-600 transition"
                onClick={() => setLoginDrawerOpen(true)}
              />
              <Badge count={cartCount} size="small" color="#000000">
                <ShoppingCart
                  className="w-6 h-6 cursor-pointer hover:text-gray-600 transition"
                  onClick={() => setCartDrawerOpen(true)}
                />
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE HEADER ==================== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between h-16 px-4">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuDrawerOpen(true)} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              {isLoading ? (
                <div className="w-40 h-12 bg-gray-200 animate-pulse rounded" />
              ) : settings?.primaryLogoPath ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${settings.primaryLogoPath}`}
                  alt={settings.siteName || "Logo"}
                  className="h-12 object-contain"
                />
              ) : (
                <span className="text-2xl font-bold">{settings?.siteName || "TASA"}</span>
              )}
            </Link>
          </div>
          <Badge count={cartCount} size="small" color="#000000">
            <ShoppingCart className="w-6 h-6 cursor-pointer" onClick={() => setCartDrawerOpen(true)} />
          </Badge>
        </div>

        <div className="px-4 pb-4 pt-2">
          <div className="flex items-center border border-gray-300 rounded-md h-12 bg-white">
            <Input
              placeholder="Search for products"
              variant="borderless"
              className="text-base placeholder-gray-500 flex-1 pl-4"
              onClick={() => setSearchOpen(true)}
              readOnly
            />
            <Search className="w-6 h-6 text-gray-500 mr-4 cursor-pointer" onClick={() => setSearchOpen(true)} />
          </div>
        </div>
      </header>

      {/* Drawers */}
      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <LoginDrawer open={loginDrawerOpen} onClose={() => setLoginDrawerOpen(false)} />
      <MenuDrawer open={menuDrawerOpen} onClose={() => setMenuDrawerOpen(false)} onSearchClick={handleMenuSearchClick} />
    </>
  );
};

export default HeaderSub;