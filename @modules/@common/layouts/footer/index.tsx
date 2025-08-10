'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaDribbble,
} from "react-icons/fa";
import Image from "next/image";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Footer = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values: { email: string }) => {
    console.log('Submitted:', values);
    // Your submit logic here
  };

  return (
    <footer className="bg-white text-[#222] text-sm font-sans mt-10">
      {/* Newsletter Section */}
        <div className="bg-[#1c1c1c] text-white w-full">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8">
          <h2 className="text-xl font-semibold mb-4 lg:mb-0 uppercase">
            Sign up to newslatter
          </h2>

          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="w-full max-w-xl">
                <div className="flex flex-col w-full lg:flex-row lg:items-center">
                  {/* Error text above input */}
                  <div className="text-red-500 text-sm mb-2 lg:mb-0">
                    <ErrorMessage name="email" />
                  </div>

                  <div className="flex w-full">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full lg:w-[500px] p-3 rounded-l-full text-black bg-white outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#2f2f2f] hover:bg-[#444] px-6 py-3 rounded-r-full transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
      {/* Footer Content */}
      <div className="container">
        <div className="w-full border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Column 1 */}
            <div className="space-y-2 leading-[30px]">
              <h3 className="text-blue-600 text-lg mb-[35px] font-bold">
                eCommerce
              </h3>
              <p className="text-[18px] font-bold">
                Got Questions ? Call us 24/7!
              </p>
              <p className="text-lg font-bold">00 000 000 000</p>
              <p>
                <span className="font-semibold">Address :</span> <br />
                <span className="text-[16px] font-medium text-[#767676]">
                  3584 Hickory Heights Drive , USA
                </span>
              </p>
              <p>
                <span className="font-semibold">Email :</span> <br />
                <span className="text-[16px] font-medium text-[#767676]">
                  admin@geniusocean.com
                </span>
              </p>
              <div className="flex gap-4 mt-4 text-[#222] text-lg">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
                <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
                <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition" />
                <FaGooglePlusG className="hover:text-red-600 cursor-pointer transition" />
                <FaDribbble className="hover:text-pink-500 cursor-pointer transition" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-semibold mb-[35px]">PRODUCT CATEGORY</h4>
              <ul className="space-y-2 text-[15px] leading-[35px] text-[#818181] cursor-pointer">
                <li>Electronic</li>
                <li>Fashion & Beauty</li>
                <li>Camera & Photo</li>
                <li>Smart Phone & Tablet</li>
                <li>Sport & Outdoor</li>
                <li>Jewelry & Watches</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-semibold mb-[35px]">CUSTOMER CARE</h4>
              <ul className="space-y-2 text-[15px] leading-[35px] text-[#818181] cursor-pointer">
                <li>Home</li>
                <li>Blog</li>
                <li>Faq</li>
                <li>Privacy & Policy</li>
                <li>Terms & Condition</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-semibold mb-[30px]">RECENT POST</h4>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start hover:text-blue-600 transition cursor-pointer"
                  >
                    <Image
                      src={`https://eco.rafiinternational.com/assets/images/blogs/1645433377${i}1572852720blog${3 - i}.png`}
                      alt={`Post ${i + 1}`}
                      width={50}
                      height={50}
                      className="object-cover rounded-sm"
                    />
                    <div>
                      <p className="font-medium leading-snug">
                        How to design effective arts?
                      </p>
                      <span className="text-xs text-gray-500">
                        {i === 2 ? "Aug 03 - 2018" : "Jan 03 - 2019"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
          COPYRIGHT © 2022. All Rights Reserved By GeniusOcean
        </div>
      </div>
    </footer>
  );
};

export default Footer;
