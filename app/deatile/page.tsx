"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaRegClock,
  FaRegComments,
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaTelegramPlane,
  FaThLarge,
} from "react-icons/fa";

export default function PackagingDetail() {
  // ✅ Table of Contents Array
  const tableOfContents = [
    { id: 1, title: "Soft Scratches" },
    { id: 2, title: "Hard Scratches" },
  ];

  return (
    <>
      {/* ---------- Top Banner ---------- */}
      <div
        className="w-full h-[260px] flex flex-col justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://tasa.com.bd/wp-content/uploads/2023/02/h9ip.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-[40px] md:text-[56px] font-semibold tracking-wide">
            Blog
          </h1>
          <p className="text-sm md:text-base mt-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / Blog / Packaging Detail
          </p>
        </div>
      </div>

      {/* ---------- Main Container ---------- */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          {/* ---------- Left Content ---------- */}
          <div>
            {/* Header */}
            <div className="text-center  mb-10 relative">
            <p className="absolute top-[-38px] left-1/2 -translate-x-1/2 inline-block overflow-hidden px-[10px] h-[25px] leading-[25px]  bg-[#333] text-white text-xs uppercase tracking-wider mb-8">         
              Leather
            </p>

              <h2 className="text-[32px] text-[#333] font-semibold mt-5">
                How To Repair Leather Scratches
              </h2>
              <div className="flex justify-center items-center gap-3 text-sm text-gray-500 mt-3">
                <p>
                  Posted by{" "}
                  <span className=" w-1 h-1 font-semibold bg-gray-400 text-[14px] cursor-pointer hover:underline">
                    tasabd
                  </span>
                </p>
                <span className="w-1 h-1 font-semibold text-[#a5a5a5] text-[14px]"/>
                <p className="flex items-center gap-1">
                  <FaRegClock /> February 4, 2023
                </p>
                <span className="w-1 h-1 font-semibold bg-gray-400 text-[14px]" />
                <p className="flex items-center gap-1">
                  <FaRegComments /> No Comments
                </p>
              </div>
            </div>

            {/* ---------- Image + Text ---------- */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border border-gray-200 cursor-pointer">
                <Image
                  src="https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg"
                  alt="Leather Repair Image 1"
                  width={1000}
                  height={600}
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ---------- Table of Contents Section ---------- */}
              <div className="mt-6 text-gray-700 leading-relaxed">
                <h3 className="font-semibold text-lg mb-3">Table of Contents</h3>
                <ul className="list-decimal list-inside space-y-1 text-base">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>

              {/* ---------- Gap Below Table Section ---------- */}
              <div className="mt-12 text-gray-700 leading-relaxed text-justify space-y-5">
                <p>
                  Although leather may appear to be a very durable material, scratches can show up
                  quickly and are difficult to ignore. There are companies that perform leather
                  repairs, but these services can be expensive. Here are a few home remedies you can
                  try first to see if you can restore the leather’s brand-new appearance. To ensure
                  that a product won’t alter the color or texture of something you’ve never used
                  before, test it out on a small patch of your bag first.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 cursor-pointer">
                <Image
                  src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg"
                  alt="Leather Repair Image 2"
                  width={1000}
                  height={400}
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ---------- Social Share Icons ---------- */}
            <div className="flex gap-4 mt-10 justify-center md:justify-start">
              {[FaFacebookF, FaPinterestP, FaLinkedinIn, FaTelegramPlane].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:text-white hover:bg-black transition duration-300 cursor-pointer"
                  >
                    <Icon className="text-base" />
                  </div>
                )
              )}
            </div>

            {/* ---------- Navigation ---------- */}
            <div className="flex justify-between items-center border-t border-b border-gray-300 py-6 mt-10 text-gray-600 text-sm md:text-base">
              <div className="flex items-center gap-2 cursor-pointer hover:text-black transition">
                <FaArrowLeft />
                <span>Our Story</span>
              </div>

              {/* ✅ Grid icon in the middle */}
              <div className="text-[#777] cursor-pointer hover:text-black transition">
                <FaThLarge className="text-lg" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:text-black transition">
                <span>Fashion & Design</span>
                <FaArrowRight />
              </div>
            </div>

            {/* ---------- Comment Form ---------- */}
            <div className="mt-10">
              <h3 className="text-[#242424] text-[22px] font-semibold mb-6">LEAVE A REPLY</h3>
              <p className="text-[16px] text-[#777777] mb-6">
                Your email address will not be published. Required fields are marked{" "}
                <span className="text-red-500">*</span>
              </p>

              <label className="block text-sm font-medium mb-1">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 p-3 mb-4 h-[150px] focus:outline-none focus:border-black"
              ></textarea>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300  p-2 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300  p-2 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  type="text"
                  className="w-full border border-gray-300  p-2 focus:outline-none focus:border-black"
                />
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="save" className="mr-2 cursor-pointer" />
                <label htmlFor="save" className="text-sm text-gray-700 cursor-pointer">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <button className="mt-6 bg-black text-white px-6 py-2 rounded-sm hover:bg-gray-800 transition w-full md:w-auto">
                POST COMMENT
              </button>
            </div>
          </div>

          {/* ---------- Right Sidebar ---------- */}
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-3">
                Categories
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm md:text-base">
                <li className="hover:text-black cursor-pointer transition">Leather</li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-3">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "How To Repair Leather Scratches",
                    date: "May 15, 2023",
                  },
                  {
                    title: "Customer Satisfaction",
                    date: "February 5, 2023",
                  },
                  {
                    title: "Our Story",
                    date: "February 4, 2023",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border-b border-gray-300 py-4 cursor-pointer group"
                  >
                    <Image
                      src="https://tasa.com.bd/wp-content/uploads/2023/05/IMG_2829-scaled-75x65.jpg"
                      alt={item.title}
                      width={75}
                      height={85}
                      className=" group-hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <p className="font-medium text-[#333] group-hover:text-black text-sm md:text-base">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.date} • No Comments
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Comments */}
            <div>
              <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-3">
                Recent Comments
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>
                  John on{" "}
                  <span className="font-medium text-black cursor-pointer hover:underline">
                    Fashion & Design
                  </span>
                </li>
                <li>
                  Sam on{" "}
                  <span className="font-medium text-black cursor-pointer hover:underline">
                    Fashion & Design
                  </span>
                </li>
                <li>
                  Santilata on{" "}
                  <span className="font-medium text-black cursor-pointer hover:underline">
                    Fashion & Design
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
