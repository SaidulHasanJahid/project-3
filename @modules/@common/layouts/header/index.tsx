"use client";

import dynamic from "next/dynamic";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
const CartDropdown = dynamic(() => import("./cart-dropdown"), {
  ssr: false,
});
import RightDrawer from "./right-drawer";
import TopBar from "./top-bar";

export default function Header() {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showInlineSearch, setShowInlineSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !(searchRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowInlineSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const getSearchBarSize = () => {
    if (windowWidth <= 420)
      return { height: 36, width: "100%", textSize: "text-xs" };
    if (windowWidth <= 768)
      return { height: 40, width: "100%", textSize: "text-sm" };
    if (windowWidth <= 1000)
      return { height: 44, width: "100%", textSize: "text-base" };
    return { height: 44, width: 260, textSize: "text-base" };
  };

  const {
    height: searchHeight,
    width: searchWidth,
    textSize,
  } = getSearchBarSize();

  const menuItems = ["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"];

  return (
    <header className="sticky top-0 z-50 bg-[#fff] font-sans transition-all duration-300">
      <div className="px-[70px] mx-auto py-3">
        <TopBar />
      </div>

      <div className="px-[70px] py-4">
        <div className="flex items-center justify-between flex-wrap">
          {windowWidth > 1260 ? (
            <DesktopHeader
              menuItems={menuItems}
              showProductDropdown={showProductDropdown}
              showPagesDropdown={showPagesDropdown}
              setShowProductDropdown={setShowProductDropdown}
              setShowPagesDropdown={setShowPagesDropdown}
              searchHeight={searchHeight}
              searchWidth={searchWidth}
              textSize={textSize}
            />
          ) : (
            <ResponsiveHeader
              windowWidth={windowWidth}
              menuItems={menuItems}
              searchHeight={searchHeight}
              searchWidth={searchWidth}
              textSize={textSize}
              showInlineSearch={showInlineSearch}
              setShowInlineSearch={setShowInlineSearch}
              showProductDropdown={showProductDropdown}
              showPagesDropdown={showPagesDropdown}
              setShowProductDropdown={setShowProductDropdown}
              setShowPagesDropdown={setShowPagesDropdown}
              searchRef={searchRef}
            />
          )}
        </div>
      </div>
    </header>
  );
}

// ✅ Route mapping
const routeMap: { [key: string]: string } = {
  HOME: "/",
  PRODUCT: "/products",
  PAGES: "#",
  BLOG: "/blog",
  FAQ: "/faq",
  CONTACT: "/contact",
};

function DesktopHeader({
  menuItems,
  showProductDropdown,
  showPagesDropdown,
  setShowProductDropdown,
  setShowPagesDropdown,
  searchHeight,
  textSize,
}: any) {
  return (
    <div className="w-full flex justify-between items-center gap-6">
      <Link href="/">
        <Image
          src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
          alt="Logo"
          width={220}
          height={40}
          className="object-contain cursor-pointer"
        />
      </Link>

      <nav className="flex gap-6 text-sm font-semibold text-[#424A4D] text-[13px] relative">
        {menuItems.map((item: string) => {
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
              <Link href={routeMap[item] || "#"}>
                <span className="flex items-center gap-1">
                  {item}
                  {(isProduct || isPages) && <FaChevronDown className="text-xs" />}
                </span>
              </Link>

              {isProduct && (
                <DropdownMenu isOpen={showProductDropdown} type="product" />
              )}
              {isPages && (
                <DropdownMenu isOpen={showPagesDropdown} type="pages" />
              )}
            </div>
          );
        })}
      </nav>

      <div className="w-full max-w-[300px]">
        <SearchBar
          searchHeight={searchHeight}
          searchWidth="100%"
          textSize={textSize}
        />
      </div>
      <CartDropdown iconSize="xl" />
    </div>
  );
}

function ResponsiveHeader({
  windowWidth,
  menuItems,
  searchHeight,
  textSize,
  showInlineSearch,
  setShowInlineSearch,
  showProductDropdown,
  showPagesDropdown,
  setShowProductDropdown,
  setShowPagesDropdown,
  searchRef,
}: any) {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="lg:hidden">
            <RightDrawer />
          </div>

          <div className="hidden min-[420px]:flex items-center gap-4">
            <Image
              src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
              alt="Logo"
              width={180}
              height={40}
              className="object-contain cursor-pointer"
            />
          </div>

          {windowWidth >= 1000 && windowWidth <= 1260 && (
            <nav className="flex gap-6 text-sm font-semibold text-[#424A4D] text-[13px] relative">
              {menuItems.map((item: string) => {
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
                    <Link href={routeMap[item] || "#"}>
                      <span className="flex items-center gap-1">
                        {item}
                        {(isProduct || isPages) && <FaChevronDown className="text-xs" />}
                      </span>
                    </Link>

                    {isProduct && (
                      <DropdownMenu isOpen={showProductDropdown} type="product" />
                    )}
                    {isPages && (
                      <DropdownMenu isOpen={showPagesDropdown} type="pages" />
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-3">
          {windowWidth >= 1000 && windowWidth <= 1260 && (
            <button
              onClick={() => setShowInlineSearch(!showInlineSearch)}
              className="bg-black text-white p-2 rounded-full"
            >
              <FaSearch />
            </button>
          )}
          <CartDropdown iconSize="lg" />
        </div>
      </div>

      {showInlineSearch && windowWidth >= 1000 && windowWidth <= 1260 && (
        <div
          ref={searchRef}
          className="mt-4 bg-white p-3 rounded-md transition-all duration-300"
        >
          <SearchBar
            searchHeight={searchHeight}
            searchWidth="100%"
            textSize={textSize}
          />
        </div>
      )}

      {windowWidth < 1000 && (
        <div className="mt-3 w-full">
          <SearchBarFullWidth searchHeight={searchHeight} textSize={textSize} />
        </div>
      )}
    </>
  );
}

function DropdownMenu({
  isOpen,
  type,
}: {
  isOpen: boolean;
  type: "product" | "pages";
}) {
  if (type === "product") {
    const productData = [
      {
        title: "ELECTRONIC",
        items: ["TELEVISION", "REFRIGERATOR", "WASHING MACHINE"],
      },
      {
        title: "FASHION & BEAUTY",
        items: ["ACCESSORIES", "BAGS", "CLOTHINGS"],
      },
    ];

    return (
      <div
        className={clsx(
          "absolute md:left-[-290px] lg:left-[-300px] top-full mt-4 md:w-[900px] lg:w-[1150px]  bg-white p-6 grid grid-cols-4 gap-4 shadow-xl rounded-md z-50 transition-all duration-300",
          isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
        )}
        style={{ fontSize: "13px", color: "rgb(27,27,30)", lineHeight: "35px" }}
      >
        {productData.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold text-[13px] mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, j) => (
                <li key={j} className="hover:text-[#6b3d2e] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  const pages = ["About Us", "Team", "Services", "404 Page"];
  return (
    <div
      className={clsx(
        "absolute left-0 top-full mt-4 w-48 bg-white p-4 shadow-xl rounded-md z-50 transition-all duration-300",
        isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      )}
      style={{ fontSize: "13px", color: "rgb(27,27,30)" }}
    >
      <ul className="space-y-2">
        {pages.map((page, i) => (
          <li key={i} className="cursor-pointer hover:text-[#6b3d2e]">
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchBar({
  searchHeight,
  searchWidth,
  textSize,
}: {
  searchHeight: number;
  searchWidth: number | string;
  textSize: string;
}) {
  return (
    <div
      className="flex items-center rounded-full overflow-hidden border border-gray-200 bg-transparent"
      style={{ height: searchHeight, minWidth: searchWidth }}
    >
      <input
        type="text"
        placeholder="Search Product For"
        className={`px-3 outline-none ${textSize} text-[#444444] w-full`}
        style={{ height: searchHeight }}
      />
      <select
        className={`text-[#444444] pr-3 ${textSize} hidden min-[500px]:block`}
        style={{ height: searchHeight, background: "transparent" }}
      >
        <option>All Categories</option>
        <option>Smartphone</option>
        <option>Laptop</option>
        <option>Gaming</option>
      </select>
      <button
        className="bg-black text-white flex items-center justify-center px-3"
        style={{ height: searchHeight, minWidth: searchHeight }}
      >
        <FaSearch className={textSize} />
      </button>
    </div>
  );
}

function SearchBarFullWidth({
  searchHeight,
  textSize,
}: {
  searchHeight: number;
  textSize: string;
}) {
  return (
    <div
      className="flex items-center rounded-full overflow-hidden border border-gray-200 bg-transparent w-full"
      style={{ height: searchHeight }}
    >
      <input
        type="text"
        placeholder="Search Product For"
        className={`px-4 outline-none ${textSize} text-[#444444] w-full`}
        style={{ height: searchHeight }}
      />
      <select
        className={`text-[#444444] pr-3 ${textSize} hidden min-[500px]:block`}
        style={{ height: searchHeight, background: "transparent" }}
      >
        <option>All Categories</option>
        <option>Smartphone</option>
        <option>Laptop</option>
        <option>Gaming</option>
      </select>
      <button
        className="bg-black text-white flex items-center justify-center px-4"
        style={{ height: searchHeight, minWidth: searchHeight }}
      >
        <FaSearch className={textSize} />
      </button>
    </div>
  );
}
