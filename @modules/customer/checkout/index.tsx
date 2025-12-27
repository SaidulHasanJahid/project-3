"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
} from "@/appstore/cart/cart-slice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface FormValues {
  fullName: string;
  country: string;
  address: string;
  district: string;
  phone: string;
  email: string;
  orderNotes: string;
  paymentMethod: string;
}

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: any) => state.cart?.items || []);

  const initialValues: FormValues = {
    fullName: "",
    country: "Bangladesh",
    address: "",
    district: "Chattogram",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "cash",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{11}$/, "Phone must be 11 digits"),
    email: Yup.string().email("Invalid email format").optional(),
  });

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    const subtotal = cartItems.reduce(
      (sum: number, item: any) =>
        sum + (item.discount_price || item.price) * item.quantity,
      0
    );

    const shippingCost =
      values.district === "Chattogram"
        ? 60
        : values.district === "Dhaka"
        ? 100
        : 120;

    const orderData = {
      customerInfo: {
        fullName: values.fullName,
        address: values.address,
        district: values.district,
        phone: values.phone,
        email: values.email || null,
        orderNotes: values.orderNotes || null,
      },
      shipping: {
        method: `Home Delivery - ${values.district}`,
        cost: shippingCost,
      },
      paymentMethod: values.paymentMethod === "cash" ? "Cash on Delivery" : "",
      products: cartItems.map((item: any) => ({
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail,
        price: item.discount_price || item.price,
        quantity: item.quantity,
        subtotal: (item.discount_price || item.price) * item.quantity,
      })),
      totals: {
        subtotal,
        shipping: shippingCost,
        total: subtotal + shippingCost,
      },
    };

    console.log("=== FULL ORDER DETAILS ===", orderData);

    setSubmitting(false);

    // SweetAlert2 success message + redirect to home
    Swal.fire({
      title: "Order Placed Successfully!",
      text: "Thank you for your order. You will be redirected to the home page.",
      icon: "success",
      confirmButtonText: "OK",
      timer: 5000,
      timerProgressBar: true,
    }).then(() => {
      router.push("/"); // Redirect to home page
    });
  };

  const formatBDT = (n: number) =>
    "৳ " + n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const handleIncrease = (item: any) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
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
            Checkout
          </h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / Checkout
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

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <Link
              href="/"
              className="mt-6 inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, isSubmitting }) => {
              const subtotal = cartItems.reduce(
                (sum: number, item: any) =>
                  sum + (item.discount_price || item.price) * item.quantity,
                0
              );

              const shippingCost =
                values.district === "Chattogram"
                  ? 60
                  : values.district === "Dhaka"
                  ? 100
                  : 120;

              const total = subtotal + shippingCost;

              return (
                <Form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* LEFT SIDE - Billing & Shipping */}
                  <div>
                    <h2 className="text-lg font-semibold mb-6 tracking-wide">
                      BILLING & SHIPPING
                    </h2>

                    {/* Full Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">
                        Full Name(আপনার সম্পূর্ণ নাম){" "}
                        <span className="text-red-500">*</span>
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
                      </Field>
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
                    </div>

                    {/* Order Notes */}
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

                  {/* RIGHT SIDE - Your Order */}
                  <div className="bg-[#f9f9f9] border border-gray-200 rounded-sm p-6">
                    <h2 className="text-lg font-semibold mb-6 tracking-wide text-center uppercase">
                      YOUR ORDER
                    </h2>

                    <div className="border bg-white border-gray-200 rounded-sm overflow-hidden">
                      {/* Header */}
                      <div className="flex justify-between bg-gray-100 text-sm font-medium px-6 py-3 border-b border-gray-200">
                        <p>PRODUCT</p>
                        <p>SUBTOTAL</p>
                      </div>

                      {/* Cart Items */}
                      {cartItems.map((item: any) => (
                        <div
                          key={item.id}
                          className="px-6 py-5 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="relative w-[70px] h-[70px] rounded-sm border border-gray-300 overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.thumbnail || "/placeholder.jpg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div className="flex-1">
                                <p className="font-medium text-sm leading-tight">
                                  {item.name}
                                </p>

                                <div className="flex items-center gap-3 mt-3">
                                  <button
                                    type="button"
                                    onClick={() => handleDecrease(item.id)}
                                    className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-sm"
                                  >
                                    −
                                  </button>
                                  <span className="w-10 text-center font-medium">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleIncrease(item)}
                                    className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-sm"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="font-medium text-sm">
                                {formatBDT(
                                  (item.discount_price || item.price) * item.quantity
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Subtotal */}
                      <div className="flex justify-between px-6 py-3 text-sm border-b border-gray-200 bg-gray-50">
                        <p className="font-medium">Subtotal</p>
                        <p className="font-medium">{formatBDT(subtotal)}</p>
                      </div>

                      {/* Shipping */}
                      <div className="px-6 py-4 text-sm border-b border-gray-200">
                        <p className="font-medium mb-3">Shipping</p>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer hover:text-black transition">
                            <Field type="radio" name="district" value="Chattogram" className="cursor-pointer" />
                            <span>Home Delivery–Chattogram City: {formatBDT(60)}</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:text-black transition">
                            <Field type="radio" name="district" value="Dhaka" className="cursor-pointer" />
                            <span>Home Delivery–Dhaka City: {formatBDT(100)}</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:text-black transition">
                            <Field type="radio" name="district" value="Outside District" className="cursor-pointer" />
                            <span>Home Delivery–Outside District: {formatBDT(120)}</span>
                          </label>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex justify-between px-6 py-4 text-base font-bold bg-gray-50">
                        <p>Total</p>
                        <p>{formatBDT(total)}</p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-6 border border-gray-200 rounded-sm text-sm">
                      <label className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-gray-50 transition">
                        <Field type="radio" name="paymentMethod" value="cash" className="cursor-pointer" />
                        <div>
                          <p className="font-medium">Cash on delivery</p>
                          <p className="text-gray-600 mt-1">Pay with cash upon delivery.</p>
                        </div>
                      </label>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                      Your personal data will be used to process your order, support
                      your experience throughout this website, and for other purposes
                      described in our{" "}
                      <Link href="/privacy-policy" className="underline hover:text-black">
                        privacy policy
                      </Link>
                      .
                    </p>

                    {/* Place Order Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full bg-black text-white text-sm font-semibold py-4 hover:bg-gray-800 transition cursor-pointer rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Placing Order..." : "PLACE ORDER"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </>
  );
}