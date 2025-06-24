"use client";

import { useState } from "react";
import {
  FaHeart,
  FaRandom,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import RightDrawer from "./right-drawer";
import TopBar from "./top-bar";

export default function Header() {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(false);

  return (
    <header className="sticky lg:h-[142px] leading-13 top-0 z-50 bg-[#fcf9f8] shadow-md font-sans transition-all duration-300">
      <TopBar />

      {/* Main Container */}
      <div className="max-w-[1240px] w-[90%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <RightDrawer />
            </div>

            {/* Logo */}
            <Image
              src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
              alt="Logo"
              width={165}
              height={30}
              className="cursor-pointer lg:w-[165px] lg:h-[25px] w-[224px] h-[44px]"
            />

            {/* Nav Links - only on large */}
            <nav className="hidden lg:ml-10 lg:flex gap-6 text-sm font-semibold text-[#424A4D] text-[13px]">
              {["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"].map(
                (item) => {
                  const isProduct = item === "PRODUCT";
                  const isPages = item === "PAGES";
                  return (
                    <div
                      key={item}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => {
                        if (isProduct) setShowProductDropdown(true);
                        if (isPages) setShowPagesDropdown(true);
                      }}
                      onMouseLeave={() => {
                        if (isProduct) setShowProductDropdown(false);
                        if (isPages) setShowPagesDropdown(false);
                      }}
                    >
                      <span className="flex items-center gap-1">
                        {item}
                        {(isProduct || isPages) && (
                          <FaChevronDown className="text-xs" />
                        )}
                      </span>

                      {/* Product Dropdown */}
                      {isProduct && (
                        <div
                          className={clsx(
                            "absolute left-0 top-full mt-4 w-[900px] lg:ml-[-200px] bg-white p-6 grid grid-cols-4 gap-4 shadow-xl rounded-md z-50 transition-all duration-300",
                            showProductDropdown
                              ? "opacity-100 visible scale-100"
                              : "opacity-0 invisible scale-95"
                          )}
                          style={{
                            fontSize: "13px",
                            color: "rgb(27,27,30)",
                            lineHeight: "35px",
                          }}
                        >
                          {[
                            {
                              title: "ELECTRONIC",
                              items: [
                                "TELEVISION",
                                "REFRIGERATOR",
                                "WASHING MACHINE",
                                "AIR CONDITIONERS",
                                "SPORT & OUTDOOR",
                                "TOYS & HOBBIES",
                                "OUTDOOR, RECREATION",
                              ],
                            },
                            {
                              title: "FASHION & BEAUTY",
                              items: [
                                "ACCESSORIES",
                                "BAGS",
                                "CLOTHINGS",
                                "SHOES",
                                "JEWELRY & WATCHES",
                                "AUTOMOBILES",
                                "SURVEILLANCE SAFETY",
                              ],
                            },
                            {
                              title: "CAMERA & PHOTO",
                              items: [
                                "DSLR",
                                "Camera Phone",
                                "Action Camera",
                                "Digital Camera",
                                "HEALTH & BEAUTY",
                                "HOME DECORATION",
                              ],
                            },
                            {
                              title: "SMART PHONE & TABLE",
                              items: [
                                "APPLE",
                                "SAMSUNG",
                                "LG",
                                "SONY",
                                "BOOKS & OFFICE",
                                "PORTABLE & PERSONAL",
                              ],
                            },
                          ].map((section, i) => (
                            <div key={i}>
                              <h3 className="font-bold text-[13px] mb-2">
                                {section.title}
                              </h3>
                              <ul className="space-y-1">
                                {section.items.map((item, j) => (
                                  <li key={j} className="hover:text-[#6b3d2e]">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pages Dropdown */}
                      {isPages && (
                        <div
                          className={clsx(
                            "absolute left-0 top-full mt-4 w-48 bg-white p-4 shadow-xl rounded-md z-50 transition-all duration-300",
                            showPagesDropdown
                              ? "opacity-100 visible scale-100"
                              : "opacity-0 invisible scale-95"
                          )}
                          style={{ fontSize: "13px", color: "rgb(27,27,30)" }}
                        >
                          <ul className="space-y-2">
                            {["About Us", "Team", "Services", "404 Page"].map(
                              (page, i) => (
                                <li key={i}>{page}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </nav>
          </div>

          {/* Right: Search icon (mobile) / full bar (desktop) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileExpand(!mobileExpand)}
              className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-[14px]"
              aria-label="Toggle search"
            >
              <FaSearch />
            </button>
          </div>

          {/* Show full search bar + icons only on large */}
          <div className="hidden lg:flex items-center gap-4">
            <SearchBar />
            <HeaderIcons />
          </div>
        </div>

        {/* Slide-out for small devices */}
        <div
          className={clsx(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            mobileExpand ? "max-h-[60px] mt-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex items-center gap-3">
            <SearchBar />
            <HeaderIcons />
          </div>
        </div>
      </div>
    </header>
  );
}

// SearchBar with hidden category select on very small devices
function SearchBar() {
  return (
    <div className="flex items-center h-[40px] rounded-full overflow-hidden border border-gray-200 w-full sm:w-auto max-w-full bg-transparent">
      <input
        type="text"
        placeholder="Search Product For"
        className="px-3 py-1 w-full sm:w-[180px] text-sm text-[#444444] outline-none"
        style={{ border: "none" }}
      />
      <select className="hidden min-[500px]:block px-2 text-sm text-[#444444]" style={{ border: "none", outline: "none" }}>
        <option>All Categories</option>
        <option>Smartphone</option>
        <option>Laptop</option>
        <option>Gaming</option>
      </select>
      <button className="bg-black h-full text-white px-3 flex items-center justify-center text-[14px] min-[500px]:text-[16px]">
        <FaSearch />
      </button>
    </div>
  );
}

// Smaller icons on very small screens
function HeaderIcons() {
  return (
    <div className="flex gap-2 justify-center">
      {[FaHeart, FaRandom, FaShoppingCart].map((Icon, i) => (
        <div
          key={i}
          className="relative w-8 h-8 min-[500px]:w-[45px] min-[500px]:h-[45px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
        >
          <Icon className="text-gray-700 text-[14px] min-[500px]:text-[18px]" />
          <span className="absolute -top-1 -right-1 w-[16px] h-[16px] text-[10px] bg-[#424A4D] text-white rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      ))}
    </div>
  );
}
