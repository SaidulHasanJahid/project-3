"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  HiChevronUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

const images = [
  "https://tasa.com.bd/wp-content/uploads/2024/06/IMG_9228-800x800.jpg",
  "https://tasa.com.bd/wp-content/uploads/2025/01/DSC00093-800x800.jpg",
  "https://tasa.com.bd/wp-content/uploads/2024/01/DSC01434-800x800.jpg",
  "https://tasa.com.bd/wp-content/uploads/2023/03/DSC01734-800x800.jpg",
];

export default function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);
  const visibleCount = 3;

  // Desktop Up/Down
  const handleThumbUp = () => {
    if (thumbIndex > 0) setThumbIndex(thumbIndex - 1);
  };
  const handleThumbDown = () => {
    if (thumbIndex < images.length - visibleCount)
      setThumbIndex(thumbIndex + 1);
  };

  // Mobile Left/Right
  const handleThumbLeft = () => {
    if (thumbIndex > 0) setThumbIndex(thumbIndex - 1);
  };
  const handleThumbRight = () => {
    if (thumbIndex < images.length - visibleCount)
      setThumbIndex(thumbIndex + 1);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
      {/* ---------- Desktop Vertical Thumbnails ---------- */}
      <div className="hidden lg:flex flex-col items-center relative">
        {/* Thumbnails */}
        <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out">
          {images.slice(thumbIndex, thumbIndex + visibleCount).map((img, i) => {
            const actualIndex = i + thumbIndex;
            return (
              <div
                key={actualIndex}
                className={`w-[122px] h-[190px] border rounded cursor-pointer overflow-hidden transform transition-all duration-300 ${
                  selectedIndex === actualIndex
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 scale-100"
                }`}
                onClick={() => setSelectedIndex(actualIndex)}
              >
                <Image
                  src={img}
                  alt={`Thumb ${actualIndex + 1}`}
                  width={122}
                  height={190}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            );
          })}
        </div>

        {/* Combined Arrows (Bottom) */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={handleThumbUp}
            disabled={thumbIndex === 0}
            className={`p-1.5 bg-gray-200  ${
              thumbIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
          >
            <HiChevronUp size={22} />
          </button>
          <button
            onClick={handleThumbDown}
            disabled={thumbIndex >= images.length - visibleCount}
            className={`p-1.5 bg-gray-200  ${
              thumbIndex >= images.length - visibleCount
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
          >
            <HiChevronDown size={22} />
          </button>
        </div>
      </div>

      {/* ---------- Main Image ---------- */}
      <div className="flex-1 flex flex-col items-center">
        <div className="max-w-[700px] w-full transition-all duration-500 ease-in-out">
          <Image
            src={images[selectedIndex]}
            alt={`Product ${selectedIndex + 1}`}
            width={700}
            height={500}
            className="w-full h-auto object-contain rounded"
            unoptimized
          />
        </div>

        {/* ---------- Mobile/Tablet Horizontal Thumbnails ---------- */}
        <div className="lg:hidden flex justify-center w-full mt-3">
          <div className="flex items-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={handleThumbLeft}
              disabled={thumbIndex === 0}
              className={`p-1 ${
                thumbIndex === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-900 cursor-pointer"
              }`}
            >
              <HiChevronLeft size={26} />
            </button>

            {/* Thumbnails */}
            <div className="overflow-hidden w-[calc(122px*3+16px*2)]">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${thumbIndex * (122 + 16)}px)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`w-[122px] h-[190px]  cursor-pointer overflow-hidden flex-shrink-0 transform transition-all duration-300 ${
                      selectedIndex === i
                        ? " scale-105"
                        : " scale-100"
                    }`}
                    onClick={() => setSelectedIndex(i)}
                  >
                    <Image
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      width={122}
                      height={190}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleThumbRight}
              disabled={thumbIndex >= images.length - visibleCount}
              className={`p-1 ${
                thumbIndex >= images.length - visibleCount
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-900 cursor-pointer"
              }`}
            >
              <HiChevronRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
