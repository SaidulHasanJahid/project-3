'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaDribbble,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-[#222] text-sm font-sans mt-10">
      {/* Newsletter Section */}
      <div className="bg-[#1c1c1c] text-white w-full">
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-8">
          <h2 className="text-xl font-semibold mb-4 lg:mb-0 uppercase">Sign up to newslatter</h2>
          <div className="flex items-center w-full lg:w-auto max-w-xl">
            <input
              type="text"
              placeholder="Enter your email"
              className="w- lg:w-[500px] p-3 rounded-l-full text-black bg-white	 outline-none"
            />
            <button className="bg-[#2f2f2f] hover:bg-[#444] px-6 py-3 rounded-r-full transition-colors">Send</button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full border-t border-gray-200">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1 - About */}
          <div className="space-y-2 leading-[30px]">
            <h3 className="text-blue-600 text-lg mb-[35px] font-bold">eCommerce</h3>
            <p className='text-[18px ] font-bold' >Got Questions ? Call us 24/7!</p>
            <p className="text-lg font-bold text-[18px ] font-medium">00 000 000 000</p>
            <p><span className="font-semibold">Address :</span> <br /> <span className=' text-[16px] font-medium  text-[#767676]'>3584 Hickory Heights Drive , USA</span></p>
            <p><span className="font-semibold">Email :</span> <br /> <span className=' text-[16px] font-medium  text-[#767676]'>admin@geniusocean.com</span></p> <br />
            <div className="flex gap-4 mt-4 text-[#222] text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition" />
              <FaGooglePlusG className="hover:text-red-600 cursor-pointer transition" />
              <FaDribbble className="hover:text-pink-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Column 2 - Product Category */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0 cursor-pointer">
            <h4 className="font-semibold mb-[35px]">PRODUCT CATEGORY</h4>
            <ul className="space-y-2 text-[15px] leading-[35px] text-[#818181]">
              <li>Electronic</li>
              <li>Fashion & Beauty</li>
              <li>Camera & Photo</li>
              <li>Smart Phone & Table</li>
              <li>Sport & Outdoor</li>
              <li>Jewelry & Watches</li>
            </ul>
          </div>

          {/* Column 3 - Customer Care */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0 cursor-pointer">
            <h4 className="font-semibold mb-[35px]">CUSTOMER CARE</h4>
            <ul className="space-y-z text-[15px] leading-[35px] text-[#818181]">
              <li>Home</li>
              <li>Blog</li>
              <li>Faq</li>
              <li>Privacy & Policy</li>
              <li>Terms & Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 4 - Recent Posts */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0">
  <h4 className="font-semibold mb-[30px]">RECENT POST</h4>
  <div className="space-y-4">
    
    {/* Post 1 */}
    <div className="flex gap-3 items-start hover:text-blue-600 transition cursor-pointer">
      <Image
        src="https://eco.rafiinternational.com/assets/images/blogs/16454334081572852731blog3jpg.jpg"
        alt="Post 1"
        width={50}
        height={50}
        className="object-cover rounded-sm"
      />
      <div>
        <p className="font-medium leading-snug">How to design effective arts?</p>
        <span className="text-xs text-gray-500">Jan 03 - 2019</span>
      </div>
    </div>

    {/* Post 2 */}
    <div className="flex gap-3 items-start hover:text-blue-600 transition cursor-pointer">
      <Image
        src="https://eco.rafiinternational.com/assets/images/blogs/16454333931572852725blog2jpg.jpg"
        alt="Post 2"
        width={50}
        height={50}
        className="object-cover rounded-sm"
      />
      <div>
        <p className="font-medium leading-snug">How to design effective arts?</p>
        <span className="text-xs text-gray-500">Jan 03 - 2019</span>
      </div>
    </div>

    {/* Post 3 */}
    <div className="flex gap-3 items-start hover:text-blue-600 transition cursor-pointer">
      <Image
        src="https://eco.rafiinternational.com/assets/images/blogs/16454333771572852720blog1png.png"
        alt="Post 3"
        width={50}
        height={50}
        className="object-cover rounded-sm"
      />
      <div>
        <p className="font-medium leading-snug">How to design effective arts?</p>
        <span className="text-xs text-gray-500">Aug 03 - 2018</span>
      </div>
    </div>
    
  </div>
</div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        COPYRIGHT © 2022. All Rights Reserved By GeniusOcean
      </div>
    </footer>
  );
};

export default Footer;
