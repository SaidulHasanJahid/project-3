"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaAngleDoubleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";
import { useSettigQuery } from "@/appstore/setttings/api";
import Link from "next/link";

const Footer = () => {
  const { data: settingData, isLoading } = useSettigQuery();
  const settings = settingData?.data;

  const description =
    settings?.siteDescription ;
  const address =
    settings?.contactAddress ;
  const phone =
    settings?.primaryPhone || settings?.secondaryPhone ;
  const email = settings?.email ;

  return (
    <footer className="bg-[#0d0d0d] text-white text-[14px] font-sans">
      {/* === MAIN FOOTER === */}
      <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ===== Column 1: Logo & Info ===== */}
      <Link href="/">
        <div>
          {isLoading ? (
            <div className="w-[150px] h-[40px] bg-gray-700 animate-pulse mb-6 rounded" />
          ) : settings?.primaryLogoPath ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${settings.primaryLogoPath}`}
              alt={settings.siteName || "Logo"}
              width={150}
              height={40}
              className="mb-6 object-contain"
            />
          ) : settings?.primaryLogoPath ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${settings.primaryLogoPath}`}
              alt={settings.siteName || "Logo"}
              width={150}
              height={40}
              className="mb-6 object-contain"
            />
          ) : (
            <span className="text-2xl font-bold mb-6 block">
              {settings?.siteName || "reclinerKIng"}
            </span>
          )}

          <p className="leading-relaxed text-[#cfcfcf] mb-5">{description}</p>

          <ul className="space-y-3 text-[#cfcfcf]">
            <li className="flex items-start gap-2">
              <IoLocationSharp className="mt-[2px] text-[#999]" size={18} />
              <p>{address}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#999]" size={18} />
              <p>{phone}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#999]" size={18} />
              <p>{email}</p>
            </li>
          </ul>
        </div>
      </Link>
        {/* ===== Column 2: Quick Links ===== */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">
              Quick Links
            </h4>
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

        {/* ===== Column 3: Support ===== */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">Support</h4>
          </div>
          <ul className="space-y-3">
            {["Contact Us", "FAQ", "Warranty Info", "About Us"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[18px] font-semibold text-[#cfcfcf] hover:text-gray-400 transition cursor-pointer"
                >
                  <FaAngleDoubleRight size={18} className="text-[#999]" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ===== Column 4: Newsletter ===== */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BsDashLg className="text-[#999]" size={18} />
            <h4 className="font-semibold text-white text-[16px]">Subscribe</h4>
          </div>

          {settings?.additionalNotes && (
            <p className="text-[#cfcfcf] mb-4 text-sm">
              {settings.additionalNotes}
            </p>
          )}

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

          {/* Social Icons (add real links if you have them in settings later) */}
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
            {settings?.siteName || "reclinerKIng"} ©{new Date().getFullYear()}{" "}
            all rights reserved
          </p>

          <div className="mt-4 md:mt-0">
            {/* You can add your own payment methods image here */}
            <Image
              src="/path-to-your-payments-image.png"
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
