"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Blog {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  month: string;
  category: string;
  description: string;
}

// 10 blog objects
const blogs: Blog[] = [
  {
    id: 1,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/IMG_20220927_201615-1-1067x800.jpg",
    title: "How To Repair Leather Scratches",
    author: "Tasabd",
    date: "15",
    month: "May",
    category: "Leather",
    description:
      "How To Repair Leather Scratches Table of Contents Soft Scratches Hard Scratches Although leather may ap...",
  },
  {
    id: 2,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/udytr-1300x731.jpg",
    title: "Customer Satisfaction",
    author: "Tasabd",
    date: "18",
    month: "May",
    category: "Leather",
    description:
      "Customer satisfaction is at the heart of what we do. Our dedication to providing quality leather products...",
  },
  {
    id: 3,
    image: "https://tasa.com.bd/wp-content/uploads/2023/05/IMG_2829-1025x800.jpg",
    title: "Our Story",
    author: "Tasabd",
    date: "20",
    month: "May",
    category: "Leather",
    description:
      "Our journey started with a passion for handcrafted leather products that reflect heritage and authenticity...",
  },
  {
    id: 4,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/InShot_20221222_0918180782-800x800.jpg",
    title: "Top 5 Leather Care Tips",
    author: "Tasabd",
    date: "25",
    month: "May",
    category: "Care",
    description:
      "Keep your leather items looking new with these essential care tips. Learn the best ways to clean and preserve...",
  },
  {
    id: 5,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/final-pack-1063x800.jpg",
    title: "Different Types of Leather Explained",
    author: "Tasabd",
    date: "28",
    month: "May",
    category: "Leather",
    description:
      "From full-grain to bonded leather, discover the differences and find out which type is best for your needs...",
  },
  {
    id: 6,
    image: "https://tasa.com.bd/wp-content/uploads/2023/05/FB_IMG_1683565810294-1-1.jpg",
    title: "Leather in Modern Fashion",
    author: "Tasabd",
    date: "01",
    month: "Jun",
    category: "Fashion",
    description:
      "Leather has always been a symbol of style. Explore how modern designers are redefining leather fashion today...",
  },
  {
    id: 7,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/h9ip.jpg",
    title: "The Art of Handcrafted Leather",
    author: "Tasabd",
    date: "05",
    month: "Jun",
    category: "Craft",
    description:
      "Handcrafted leather goods are timeless. Learn about the craftsmanship that goes into making every unique piece...",
  },
  {
    id: 8,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/20230416_131023_0000-800x800.jpg",
    title: "Why Leather Bags Are Worth It",
    author: "Tasabd",
    date: "10",
    month: "Jun",
    category: "Accessories",
    description:
      "Leather bags offer durability, elegance, and timeless appeal. Here’s why investing in one is always a smart move...",
  },
  {
    id: 9,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/jhgyk-800x800.jpg",
    title: "Sustainable Leather Production",
    author: "Tasabd",
    date: "14",
    month: "Jun",
    category: "Sustainability",
    description:
      "Discover how modern tanneries are adopting eco-friendly processes to make leather more sustainable for the planet...",
  },
  {
    id: 10,
    image: "https://tasa.com.bd/wp-content/uploads/2023/02/IMG_2840-1067x800.jpg",
    title: "Leather Accessories Trends",
    author: "Tasabd",
    date: "18",
    month: "Jun",
    category: "Fashion",
    description:
      "Explore the latest leather accessories trends that are making waves in the fashion industry this year...",
  },
];

export default function BlogCardSection() {
  // Split blogs: left 3, middle 4, right 3
  const leftColumn = blogs.slice(0, 3);
  const middleColumn = blogs.slice(3, 7);
  const rightColumn = blogs.slice(7, 10);

  const renderCard = (blog: Blog) => (
    <div
      key={blog.id}
      className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-500 hover:-translate-y-1 mb-8"
    >
      {/* Date Box */}
      <div className="absolute bg-white shadow-md text-center px-3 py-2 text-gray-900 text-sm font-semibold m-3 z-10">
        <div className="text-lg font-bold leading-none">{blog.date}</div>
        <div className="text-[10px] uppercase tracking-wide">{blog.month}</div>
      </div>

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-semibold uppercase px-3 py-[2px]">
          {blog.category}
        </div>
      </div>

      {/* Text Section */}
      <div className="px-5 py-5 flex flex-col items-center text-center">
        <h3 className="text-[18px] font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
          {blog.title}
        </h3>
        <div className="text-[12px] text-gray-500 mb-2">
          By <span className="text-gray-800">{blog.author}</span>
        </div>
        <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
          {blog.description}
        </p>
        <button className="text-[12px] uppercase font-semibold text-gray-900 hover:text-orange-500 transition-all border-b border-transparent hover:border-orange-500">
          Continue Reading
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Top Banner */}
      <div
        className="w-full h-[260px] flex flex-col justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://tasa.com.bd/wp-content/uploads/2023/02/h9ip.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-[48px] md:text-[60px] font-semibold text-[#fff]">
            Blog
          </h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            / Blog
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="w-full px-4 py-12 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col">{leftColumn.map(renderCard)}</div>

          {/* Middle Column */}
          <div className="flex flex-col">{middleColumn.map(renderCard)}</div>

          {/* Right Column */}
          <div className="flex flex-col">{rightColumn.map(renderCard)}</div>
        </div>
      </section>
    </>
  );
}
