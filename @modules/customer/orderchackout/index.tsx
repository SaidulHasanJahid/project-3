"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  img?: string;
};

type Values = {
  coupon: string;
  shipping: string;
  items: CartItem[];
};

export default function CartPage() {
  const initialItems: CartItem[] = [
    {
      id: "p1",
      title: "Combo offer 2 (Long Wallet Series 1 & Eyewear Case Series 1)",
      price: 1600,
      qty: 1,
      img: "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg?auto=compress&cs=tinysrgb&w=120&h=120",
    },
  ];

  const initialValues: Values = {
    coupon: "",
    shipping: "60",
    items: initialItems,
  };

  const validationSchema = Yup.object({
    coupon: Yup.string().optional(),
    shipping: Yup.string().required(),
  });

  const formatBDT = (n: number) =>
    "৳ " + n.toLocaleString(undefined, { maximumFractionDigits: 2 });

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
            Cart
          </h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            / Cart
          </p>
        </div>
      </div>
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-8 flex items-center gap-3">
          <AiOutlineShoppingCart className="text-xl" />
          <h1 className="text-2xl font-semibold text-[#111]">Cart</h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("PROCEED TO CHECKOUT payload:", values);
            alert("Checkout submitted!");
            setSubmitting(false);
          }}
        >
          {({ values, setFieldValue, isSubmitting }) => {
            const subtotal = values.items.reduce(
              (s, it) => s + it.price * it.qty,
              0
            );

            const coupon = (values.coupon || "").trim().toUpperCase();
            const couponDiscount = coupon === "DISCOUNT10" ? subtotal * 0.1 : 0;

            const shippingCost =
              values.shipping === "60"
                ? 60
                : values.shipping === "100"
                ? 100
                : 120;

            const total = subtotal - couponDiscount + shippingCost;

            const changeQty = (id: string, delta: number) => {
              const newItems = values.items.map((it) =>
                it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
              );
              setFieldValue("items", newItems);
            };

            const removeItem = (id: string) => {
              const newItems = values.items.filter((it) => it.id !== id);
              setFieldValue("items", newItems);
            };

            const applyCoupon = () => {
              if (!values.coupon.trim()) alert("Please enter a coupon code.");
              else if (coupon === "DISCOUNT10") alert("Coupon applied: 10% off");
              else alert("Invalid coupon code.");
            };

            const updateCart = () => alert("Cart updated!");

            return (
              <Form className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* LEFT SIDE */}
                <div className="lg:col-span-8">
                  <div className="border border-gray-200 rounded-sm">
                    {/* Header */}
                    <div className="hidden md:flex items-center text-[13px] font-medium uppercase text-gray-600 border-b px-6 py-3">
                      <div className="w-6"></div>
                      <div className="flex-1">Product</div>
                      <div className="w-28 text-right">Price</div>
                      <div className="w-40 text-center">Quantity</div>
                      <div className="w-32 text-right">Subtotal</div>
                    </div>

                    {/* Items */}
                    {values.items.map((it) => (
                      <div
                        key={it.id}
                        className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 py-5 border-b"
                      >
                        <div className="w-full md:w-6 flex items-start">
                          <button
                            type="button"
                            onClick={() => removeItem(it.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                          >
                            <FiTrash2 />
                          </button>
                        </div>

                        <div className="flex-1 text-sm text-gray-800 md:pl-3">
                          <div className="flex items-center gap-4">
                            <img
                              src={it.img}
                              alt={it.title}
                              className="w-[70px] h-[70px] object-cover rounded-sm border"
                            />
                            <div>
                              <div className="font-medium leading-tight">
                                {it.title}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block w-28 text-right text-sm">
                          {formatBDT(it.price)}
                        </div>

                        <div className="w-full md:w-40 flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => changeQty(it.id, -1)}
                            className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                          >
                            <FiMinus />
                          </button>
                          <span className="w-8 text-center">{it.qty}</span>
                          <button
                            type="button"
                            onClick={() => changeQty(it.id, 1)}
                            className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="w-full md:w-32 text-right text-sm">
                          {formatBDT(it.price * it.qty)}
                        </div>
                      </div>
                    ))}

                    {/* Coupon section */}
                    <div className="px-4 py-6 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <Field
                            name="coupon"
                            placeholder="Coupon code"
                            className="w-full border border-gray-300 px-4 py-[10px] text-sm rounded-sm focus:outline-none focus:border-black"
                          />
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                          <button
                            type="button"
                            onClick={applyCoupon}
                            className="bg-black text-white text-[13px] font-semibold px-4 py-[10px] hover:bg-gray-800 transition"
                          >
                            APPLY COUPON
                          </button>

                          <button
                            type="button"
                            onClick={updateCart}
                            className="border border-gray-300 text-gray-700 text-[13px] font-medium px-4 py-[10px] hover:bg-gray-50 transition"
                          >
                            UPDATE CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <aside className="lg:col-span-4">
                  <div className="border border-gray-200 rounded-sm p-6 shadow-sm bg-white">
                    <h2 className="text-[16px] font-semibold mb-4">
                      CART TOTALS
                    </h2>

                    <div className="flex justify-between border-b pb-2 mb-3 text-sm">
                      <span>Subtotal</span>
                      <span>{formatBDT(subtotal)}</span>
                    </div>

                    {/* Shipping options */}
                    <div className="text-sm space-y-3 border-b pb-3 mb-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Field type="radio" name="shipping" value="60" />
                        <span className="flex-1">
                          Home Delivery–Chattogram City{" "}
                          <span className="text-gray-500">{formatBDT(60)}</span>
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Field type="radio" name="shipping" value="100" />
                        <span className="flex-1">
                          Home Delivery–Dhaka City{" "}
                          <span className="text-gray-500">{formatBDT(100)}</span>
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Field type="radio" name="shipping" value="120" />
                        <span className="flex-1">
                          Home Delivery–Outside District{" "}
                          <span className="text-gray-500">{formatBDT(120)}</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Shipping</span>
                      <span>{formatBDT(shippingCost)}</span>
                    </div>

                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Coupon ({coupon})</span>
                        <span>-{formatBDT(couponDiscount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center py-3 border-t border-b mt-3 mb-3">
                      <span className="text-sm font-medium">Total</span>
                      <span className="text-lg font-semibold">
                        {formatBDT(total)}
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white text-sm font-semibold py-3 hover:bg-gray-800 transition"
                    >
                      PROCEED TO CHECKOUT
                    </button>

                    <p className="mt-3 text-xs text-gray-500">
                      Shipping to Chattogram.{" "}
                      <button className="underline hover:text-black">
                        Change address
                      </button>
                    </p>
                  </div>
                </aside>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
   </>
  );
}
