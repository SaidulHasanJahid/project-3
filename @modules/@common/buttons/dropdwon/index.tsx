"use client";

import clsx from "clsx";
import React from "react";

interface ProductDropdownProps {
  isOpen: boolean;
}

const productData = [
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
];

export default function ProductDropdown({ isOpen }: ProductDropdownProps) {
  return (
    <div
      className={clsx(
        "absolute left-0 top-full mt-4 w-[900px] lg:ml-[-200px] bg-white p-6 grid grid-cols-4 gap-4 shadow-xl rounded-md z-50 transition-all duration-300",
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
