import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const RightDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState("nav");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only show hamburger icon if window width <= 1000px
  if (windowWidth > 1000) return null;

  return (
    <div>
      {/* Hamburger icon */}
      <div className="w-[100%]">
        <HiOutlineBars3BottomRight
          size={28}
          onClick={() => setShowDrawer(true)}
          className="cursor-pointer text-[#0D6EFD] text-[28px] w-[100%]"
          aria-label="Open Menu"
        />
      </div>

      {/* Drawer */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300",
          showDrawer ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
            alt="Mobile Logo"
            width={120}
            height={40}
          />
          <button
            onClick={() => setShowDrawer(false)}
            className="text-3xl font-bold leading-none"
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex text-sm font-semibold border-b">
          <button
            onClick={() => setActiveTab("nav")}
            className={clsx(
              "flex-1 p-3 text-center",
              activeTab === "nav"
                ? "bg-[#fcf9f8] text-[rgb(27,27,30)] border-b-2 border-[rgb(27,27,30)]"
                : "text-gray-500"
            )}
          >
            Navigation
          </button>
          <button
            onClick={() => setActiveTab("category")}
            className={clsx(
              "flex-1 p-3 text-center",
              activeTab === "category"
                ? "bg-[#fcf9f8] text-[rgb(27,27,30)] border-b-2 border-[rgb(27,27,30)]"
                : "text-gray-500"
            )}
          >
            Category
          </button>
        </div>

        {/* Content */}
        <div className="p-4 text-sm text-[rgb(27,27,30)] overflow-y-auto h-[calc(100vh-130px)]">
          {activeTab === "nav" && (
            <ul className="space-y-4">
              {["HOME", "PRODUCT", "PAGES", "BLOG", "FAQ", "CONTACT"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer py-3 hover:text-[#6b3d2e]"
                    style={{ border: "none" }}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          )}
          {activeTab === "category" && (
            <ul className="space-y-4">
              {[
                "ELECTRONIC",
                "FASHION & BEAUTY",
                "CAMERA & PHOTO",
                "SMART PHONE & TABLET",
              ].map((cat, i) => (
                <li
                  key={i}
                  className="cursor-pointer py-3 hover:text-[#6b3d2e]"
                  style={{ border: "none" }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showDrawer && (
        <div
          onClick={() => setShowDrawer(false)}
          className="fixed inset-0  bg-opacity-50 z-40"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default RightDrawer;
