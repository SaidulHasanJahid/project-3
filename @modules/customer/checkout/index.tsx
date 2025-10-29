"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

interface FormValues {
  fullName: string;
  country: string;
  address: string;
  district: string;
  phone: string;
  email: string;
  orderNotes: string;
  shipping: string;
  paymentMethod: string;
  quantity: number;
}

export default function CheckoutPage() {
  const initialValues: FormValues = {
    fullName: "",
    country: "Bangladesh",
    address: "",
    district: "Chattogram",
    phone: "",
    email: "",
    orderNotes: "",
    shipping: "60",
    paymentMethod: "cash",
    quantity: 1,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    country: Yup.string().required("Country is required"),
    address: Yup.string().required("Address is required"),
    district: Yup.string().required("District is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone must be numeric"),
    email: Yup.string().email("Invalid email format").optional(),
  });

  const handleSubmit = async (values: FormValues) => {
    console.log("Form Data:", values);

    // Simulate API submission (so you can see it in Network tab)
    await fetch("/api/submit-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    alert("Order placed successfully!");
  };

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
            Chackout
          </h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            / Chackout
          </p>
        </div>
      </div>
    <div className="container bg-white py-10 px-4 md:px-10 lg:px-20">
      <p className="text-sm mb-5">
        Have a coupon?{" "}
        <a href="#" className="text-[#000] underline">
          Click here to enter your code
        </a>
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => {
          const subtotal = 1600 * values.quantity;
          const shippingCost =
            values.shipping === "60" ? 60 : values.shipping === "100" ? 100 : 120;
          const total = subtotal + shippingCost;

          return (
            <Form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-lg font-semibold mb-6 tracking-wide">
                  BILLING & SHIPPING
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Full Name(আপনার সম্পূর্ণ নাম) <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Country */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Full address(আপনার সম্পূর্ণ ঠিকানা লিখুন){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="address"
                    type="text"
                    placeholder="House number and street name"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* District */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    District (জেলা) <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="district"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Outside District">Outside District</option>
                  </Field>
                  <ErrorMessage
                    name="district"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Phone(আপনার যেকোন নাম্বারটি দিন){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">
                    Email address (optional)
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Additional Info */}
                <h2 className="text-lg font-semibold mb-3 tracking-wide">
                  ADDITIONAL INFORMATION
                </h2>
                <label className="block text-sm font-medium mb-1">
                  Order notes (optional)
                </label>
                <Field
                  as="textarea"
                  name="orderNotes"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:border-black"
                />
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-[#f9f9f9] border border-gray-200 rounded-sm p-6">
                <h2 className="text-lg font-semibold mb-6 tracking-wide text-center">
                  YOUR ORDER
                </h2>

                {/* Table */}
                <div className="border bg-white border-gray-200">
                  <div className="flex justify-between bg-gray-100 text-sm font-medium px-4 py-2 border-b border-gray-200">
                    <p>PRODUCT</p>
                    <p>SUBTOTAL</p>
                  </div>

                  {/* Product */}
                  <div className="px-4 py-4 border-b border-gray-200 text-sm">
                    <p className="mb-2">
                      Combo offer 2 (Long Wallet Series 1 & Eyewear Case Series 1)
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFieldValue(
                            "quantity",
                            Math.max(1, values.quantity - 1)
                          )
                        }
                        className="px-2 py-[2px] border border-gray-400 text-xs cursor-pointer hover:bg-gray-200 transition"
                      >
                        -
                      </button>
                      <span>{values.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setFieldValue("quantity", values.quantity + 1)}
                        className="px-2 py-[2px] border border-gray-400 text-xs cursor-pointer hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-right">৳ {subtotal.toFixed(2)}</p>
                  </div>

                  {/* Subtotal */}
                  <div className="flex justify-between px-4 py-2 text-sm border-b border-gray-200">
                    <p>Subtotal</p>
                    <p>৳ {subtotal.toFixed(2)}</p>
                  </div>

                  {/* Shipping */}
                  <div className="px-4 py-3 text-sm border-b border-gray-200">
                    <p className="font-medium mb-2">Shipping</p>
                    <div className="space-y-1">
                      <label className="flex items-center gap-2 cursor-pointer hover:text-black transition">
                        <Field type="radio" name="shipping" value="60" />
                        Home Delivery–Chattogram City: ৳ 60.00
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer hover:text-black transition">
                        <Field type="radio" name="shipping" value="100" />
                        Home Delivery–Dhaka City: ৳ 100.00
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer hover:text-black transition">
                        <Field type="radio" name="shipping" value="120" />
                        Home Delivery–Outside District: ৳ 120.00
                      </label>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between px-4 py-3 text-sm font-semibold">
                    <p>Total</p>
                    <p>৳ {total.toFixed(2)}</p>
                  </div>
                </div>

                {/* Payment */}
                <div className="mt-6 border border-gray-200 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 cursor-pointer">
                    <Field type="radio" name="paymentMethod" value="cash" />
                    <p className="font-medium">Cash on delivery</p>
                  </div>
                  <div className="px-4 py-3">
                    <p>Pay with cash upon delivery.</p>
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other purposes
                  described in our{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                  .
                </p>

                {/* Place Order */}
                <button
                  type="submit"
                  className="mt-6 w-full bg-black text-white text-sm font-semibold py-3 hover:bg-gray-800 transition cursor-pointer"
                >
                  PLACE ORDER
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  </>
  );
}
