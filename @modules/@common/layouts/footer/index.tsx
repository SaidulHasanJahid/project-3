"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaAngleDoubleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white text-[14px] font-sans">
      {/* === MAIN FOOTER === */}
      <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ===== Column 1: Logo & Info ===== */}
        <div>
          <Image
            src="https://tasa.com.bd/wp-content/uploads/2022/11/Untitled-12.png"
            alt="TASA Logo"
            width={150}
            height={40}
            className="mb-6"
          />

          <p className="leading-relaxed text-[#cfcfcf] mb-5">
            TASA is more than just a leather brand – it’s a symbol of quality,
            style, and value. We hope to be a part of your journey as you make
            your fashion exploration with TASA leather products.
          </p>

          <ul className="space-y-3 text-[#cfcfcf]">
            <li className="flex items-start gap-2">
              <IoLocationSharp className="mt-[2px] text-[#999]" size={18} />
              <p>
                Tasa villa, Pahartali DT road, Beside Bheluaar Dighi School,
                Pahartali, Chattogram
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#999]" size={18} />
              <p>+880 1755-377017</p>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#999]" size={18} />
              <p>supports@tasa.com.bd</p>
            </li>
          </ul>
        </div>

        {/* ===== Column 2 ===== */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">Quick Links</h4>
          </div>
          <ul className="space-y-3">
            {[
              "Our Story",
              "Shipping and Returns",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[18px] font-semibold text-[#cfcfcf] hover:text-gray-400 transition cursor-pointer"
              >
                <FaAngleDoubleRight size={18} className="text-[#999]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Column 3 ===== */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">Support</h4>
          </div>
          <ul className="space-y-3">
            {[
              "Contact Us",
              "Leather Care",
              "Materials",
              "Daraz Flagship Store",
              "About Us",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[18px] font-semibold text-[#cfcfcf] hover:text-gray-400 transition cursor-pointer"
              >
                <FaAngleDoubleRight size={18} className="text-[#999]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Column 4: Newsletter ===== */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">Subscribe</h4>
          </div>

          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 bg-transparent border border-[#444] text-white w-full outline-none placeholder:text-gray-400"
            />
            <button className="bg-black text-white py-3 hover:bg-[#111] transition uppercase font-semibold">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="#"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* === BOTTOM COPYRIGHT BAR === */}
      <div className="border-t border-[#222]">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-[#aaa] text-sm">
          <p className="text-center md:text-left">
            TASA ©2022 all rights reserve
          </p>

          <div className="mt-4 md:mt-0">
            <Image
              src="https://tasa.com.bd/wp-content/themes/woodmart/images/payments.png"
              alt="Payment Methods"
              width={250}
              height={25}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
