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

  return (
    <header className="sticky top-0 z-[99] bg-[#fcf9f8] shadow-md font-sans">
      {/* Top bar */}
    <TopBar />

      {/* Main header */}
      <div className=" lg:w-[90%] m-auto  flex flex-col md:flex-row items-center justify-between px-4 lg:px-6 py-4 gap-4 md:gap-0">
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="md:hidden">
           {/* Drawer with tabs */}
          
          <RightDrawer />


          </div>
          <div>
            <Image
              src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
              alt="Logo"
              width={140}
              height={40}
              className="cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-black text-[13px]">
            {["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"].map((item) => {
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
                    {(isProduct || isPages) && <FaChevronDown className="text-xs" />}
                  </span>

                  {isProduct && (
                    <div
                      className={clsx(
                        "absolute left-0 top-full mt-4 w-[900px] lg:ml-[-200px] bg-white p-6 grid grid-cols-4 gap-4 shadow-xl transition-all duration-300 rounded-md z-50",
                        showProductDropdown ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                      )}
                      style={{ fontSize: "13px", color: "rgb(27,27,30)", lineHeight:"35px" }}
                    >
                      {[
                        {
                          title: "ELECTRONIC",
                          items: ["TELEVISION", "REFRIGERATOR", "WASHING MACHINE", "AIR CONDITIONERS", "SPORT & OUTDOOR", "TOYS & HOBBIES", "OUTDOOR, RECREATION"],
                        },
                        {
                          title: "FASHION & BEAUTY",
                          items: ["ACCESSORIES", "BAGS", "CLOTHINGS", "SHOES", "JEWELRY & WATCHES", "AUTOMOBILES", "SURVEILLANCE SAFETY"],
                        },
                        {
                          title: "CAMERA & PHOTO",
                          items: ["DSLR", "Camera Phone", "Action Camera", "Digital Camera", "HEALTH & BEAUTY", "HOME DECORATION"],
                        },
                        {
                          title: "SMART PHONE & TABLE",
                          items: ["APPLE", "SAMSUNG", "LG", "SONY", "BOOKS & OFFICE", "PORTABLE & PERSONAL"],
                        },
                      ].map((section, i) => (
                        <div key={i}>
                          <h3 className="font-bold text-[13px] mb-2">{section.title}</h3>
                          <ul className="space-y-1">
                            {section.items.map((item, j) => (
                              <li key={j} className="hover:text-[#6b3d2e]">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {isPages && (
                    <div
                      className={clsx(
                        "absolute left-0 top-full mt-4 w-48 bg-white p-4 shadow-xl rounded-md z-50 transition-transform duration-300 ease-in-out origin-top",
                        showPagesDropdown ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                      )}
                      style={{ fontSize: "13px", color: "rgb(27,27,30)" }}
                    >
                      <ul className="space-y-2">
                        {["About Us", "Team", "Services", "404 Page"].map((page, i) => (
                          <li key={i}>{page}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap justify-end">
          <div className="flex items-stretch h-[45px] rounded-full w-full sm:w-auto overflow-hidden border border-gray-200">
            <input
              type="text"
              placeholder="Search Product For"
              className="px-4 py-2 w-full sm:w-[180px] text-sm outline-none"
              style={{ border: "none", color: "rgb(27,27,30)" }}
            />
            <select className="px-2 text-sm text-gray-600" style={{ border: "none", outline: "none" }}>
              <option>All Categories</option>
              <option>Smartphone</option>
              <option>Laptop</option>
              <option>Gaming</option>
            </select>
            <button className="bg-black text-white px-4 flex items-center justify-center">
              <FaSearch />
            </button>
          </div>

          <div className="flex gap-2">
            {[FaHeart, FaRandom, FaShoppingCart].map((Icon, i) => (
              <div
                key={i}
                className="relative w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
              >
                <Icon className="text-gray-700 text-sm" />
                <span className="absolute -top-1 -right-1 bg-[rgb(27,27,30)] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>



    </header>
  );
}