"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ReviewSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  review: Yup.string().required("Review is required"),
  rating: Yup.number().min(1, "Please select a rating").required("Rating is required"),
});

export default function ProductTabs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto ">
      {/* Unified Box */}
      <div className="border  mt-12 mb-20 border-gray-200  bg-white shadow-sm overflow-hidden">
        {/* === DESCRIPTION === */}
        <div>
          <button
            onClick={() => toggleTab(0)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-[16px] font-medium text-[#111] hover:text-black transition-all cursor-pointer border-b border-gray-200"
          >
            Description
            <IoIosArrowDown
              className={`text-[22px] text-gray-600 transition-transform duration-300 ${
                openIndex === 0 ? "rotate-180 text-black" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 0 ? "max-h-[600px] px-6 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-[15px] text-[#555] leading-relaxed pt-4">
              Crafted with precision and care, this product combines durability with modern aesthetics.
              Perfect for daily use or professional wear, its material ensures long-lasting quality
              while maintaining comfort and style throughout the day.
            </p>
          </div>
        </div>

        {/* === ADDITIONAL INFO === */}
        <div>
          <button
            onClick={() => toggleTab(1)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-[16px] font-medium text-[#111] hover:text-black transition-all cursor-pointer border-b border-gray-200"
          >
            Additional Information
            <IoIosArrowDown
              className={`text-[22px] text-gray-600 transition-transform duration-300 ${
                openIndex === 1 ? "rotate-180 text-black" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 1 ? "max-h-[600px] px-6 pb-5" : "max-h-0"
            }`}
          >
            <ul className="text-[15px] text-[#555] space-y-2 pt-4">
              <li className="flex justify-between">
                <span>Material:</span> <span>Cowhide Leather</span>
              </li>
              <li className="flex justify-between">
                <span>Color:</span> <span>Dark Brown</span>
              </li>
              <li className="flex justify-between">
                <span>Weight:</span> <span>450g</span>
              </li>
              <li className="flex justify-between">
                <span>Warranty:</span> <span>12 Months</span>
              </li>
            </ul>
          </div>
        </div>

        {/* === REVIEWS === */}
        <div>
          <button
            onClick={() => toggleTab(2)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-[16px] font-medium text-[#111] hover:text-black transition-all cursor-pointer"
          >
            Reviews (1)
            <IoIosArrowDown
              className={`text-[22px] text-gray-600 transition-transform duration-300 ${
                openIndex === 2 ? "rotate-180 text-black" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 2 ? "max-h-[800px] px-6 pb-6" : "max-h-0"
            }`}
          >
            <div className="pt-5">
              <div className="mb-5">
                <p className="text-[15px] text-[#111] font-medium">Hasan – October 26, 2025</p>
                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="mt-2 text-[15px] text-[#555] leading-relaxed">
                  Excellent quality and packaging! Feels premium and well-crafted.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <h3 className="text-[17px] font-medium mb-4 text-[#111]">Add a review</h3>

                <Formik
                  initialValues={{ name: "", email: "", review: "", rating: 0 }}
                  validationSchema={ReviewSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log("✅ Review Submitted:", values);
                    resetForm();
                  }}
                >
                  {({ errors, touched, setFieldValue, values }) => (
                    <Form className="space-y-5">
                      {/* Rating Stars */}
                      <div>
                        <label className="block text-[15px] font-medium mb-2">Your Rating *</label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setFieldValue("rating", i)}
                              className={`transition transform hover:scale-110 ${
                                values.rating >= i
                                  ? "text-yellow-400"
                                  : "text-gray-300 hover:text-yellow-300"
                              }`}
                            >
                              <FaStar size={22} />
                            </button>
                          ))}
                        </div>
                        {errors.rating && touched.rating && (
                          <div className="text-red-500 text-sm mt-1">{errors.rating}</div>
                        )}
                      </div>

                      {/* Review Textarea */}
                      <div>
                        <label className="block text-[15px] font-medium mb-2">Your Review *</label>
                        <Field
                          as="textarea"
                          name="review"
                          rows={4}
                          placeholder="Write your review..."
                          className="w-full border border-gray-300 rounded-md p-3 text-[15px] focus:outline-none focus:border-[#111] transition"
                        />
                        {errors.review && touched.review && (
                          <div className="text-red-500 text-sm mt-1">{errors.review}</div>
                        )}
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[15px] font-medium mb-2">Name *</label>
                          <Field
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md p-3 text-[15px] focus:outline-none focus:border-[#111] transition"
                          />
                          {errors.name && touched.name && (
                            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                          )}
                        </div>

                        <div>
                          <label className="block text-[15px] font-medium mb-2">Email *</label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md p-3 text-[15px] focus:outline-none focus:border-[#111] transition"
                          />
                          {errors.email && touched.email && (
                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                          )}
                        </div>
                      </div>

                      {/* Remember Checkbox */}
                      <div className="flex items-center gap-2 text-[14px] text-[#555]">
                        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                        <span>Save my name and email in this browser for next time.</span>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="bg-[#111] text-white py-3 px-8 rounded-md text-[15px] font-semibold tracking-wide hover:bg-[#333] transition cursor-pointer"
                      >
                        SUBMIT
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
