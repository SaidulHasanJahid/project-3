"use client";

import PriceDetails from "@/@modules/@common/price-deatile";
import { Input } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCreditCard, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export default function CheckoutForm() {
  const router = useRouter();
  const [showShipping, setShowShipping] = useState(false);
  const [packaging, setPackaging] = useState("free");
  const [packagingType, setPackagingType] = useState("default");

  // Access cart data from Redux store
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Initialize quantities based on cart items
  React.useEffect(() => {
    const qtys: { [key: string]: number } = {};
    cart.forEach((item: any) => {
      qtys[item.id] = quantities[item.id] || 1;
    });
    setQuantities(qtys);
  }, [cart]);

  // Calculate cart total
  const cartTotal = cart.reduce((acc: number, item: any) => {
    const qty = quantities[item.id] || 1;
    return acc + Number(item.price) * qty;
  }, 0);

  // Calculate additional costs based on shipping and packaging
  const shippingCost = packaging === "express" ? 10 : 0;
  const packagingCost = packagingType === "gift" ? 15 : 0;
  const finalPrice = cartTotal + shippingCost + packagingCost;

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   createAccount: false,
  //   shipTo: "Home",
  //   fullNameBilling: "",
  //   emailBilling: "",
  //   phoneBilling: "",
  //   addressBilling: "",
  //   cityBilling: "",
  //   stateBilling: "",
  //   postalBilling: "",
  //   countryBilling: "",
  //   diffAddress: false,
  //   fullNameShipping: "",
  //   phoneShipping: "",
  //   addressShipping: "",
  //   postalShipping: "",
  //   cityShipping: "",
  //   stateShipping: "",
  //   countryShipping: "",
  //   orderNote: "",
  // };
  const initialValues = {
    full_name: null,
    email: null,
    phone: null,
    billing_address: {
      full_name: null,
      phone: null,
      address_line: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      address_type: "billing",
    },
    shipping_address: {
      full_name: null,
      phone: null,
      address_line: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      address_type: "shipping",
    },
    shipping_method: "free",
    packaging: "default",
    items: [],
    payment_method: "cod",
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
  });

  return (
    <>
      {/* Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Checkout
        </p>
      </div>

      <div className="container">
        <div className="mx-auto p-4 md:p-8">
          {/* Stepper */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5 justify-center md:justify-start mb-8">
            <div className="w-full max-w-4xl mx-auto p-8">
              <div className="flex items-center gap-5">
                {/* Step 1 - Address (Active) */}
                <div className="relative flex items-center">
                  <div className="flex items-center bg-slate-600 text-white px-6 py-4 pr-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-white text-slate-600 rounded-full text-sm font-semibold mr-3">
                      1
                    </div>
                    <FaUser className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Address</span>
                  </div>
                  <div className="w-0 h-0 border-l-[20px] border-l-slate-600 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
                </div>

                {/* Step 2 - Orders (Inactive) */}
                <div className="relative flex items-center -ml-1">
                  <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pr-8 pl-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                      2
                    </div>
                    <FaShoppingCart className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Orders</span>
                  </div>
                  <div className="w-0 h-0 border-l-[20px] border-l-gray-200 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent"></div>
                </div>

                {/* Step 3 - Payment (Inactive) */}
                <div className="relative flex items-center -ml-1">
                  <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pl-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                      3
                    </div>
                    <FaCreditCard className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount
            onSubmit={(values, { setSubmitting }) => {
              router.push("/customer/product-summary-p");
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting, isValid, setFieldValue }) => (
              <Form>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Column */}
                  {console.log("values", values)}
                  <div className="flex-1 border border-[#BDCCDB] p-4 md:p-6 space-y-6 shadow-sm max-w-full">
                    {/* Personal Info */}
                    <div className="space-y-4 border-b border-[#BDCCDB] pb-6">
                      <h2 className="font-bold text-[#141926] border-b border-[#BDCCDB] pb-2 text-lg">
                        Personal Information :
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input
                            type="text"
                            placeholder="Enter Your Name"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("full_name", value);
                              setFieldValue("billing_address.full_name", value);
                              setFieldValue(
                                "shipping_address.full_name",
                                value
                              );
                            }}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Enter Your Email"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("email", value);
                              setFieldValue("billing_address.email", value);
                              setFieldValue("shipping_address.email", value);
                            }}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("phone", value);
                              setFieldValue("billing_address.phone", value);
                              setFieldValue("shipping_address.phone", value);
                            }}
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          id="createAccount"
                          name="createAccount"
                          className="accent-gray-800 focus:outline-none focus:ring-0"
                        />
                        <label htmlFor="createAccount" className="text-sm">
                          Create an account ?
                        </label>
                      </div> */}
                    </div>

                    {/* Billing Info */}
                    <div className="space-y-4 border-b border-[#BDCCDB] pb-6">
                      <h2 className="font-bold text-lg text-[#141926] border-b border-[#BDCCDB] pb-2">
                        Billing Details
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          as="select"
                          name="shipTo"
                          className="border border-[#BDCCDB] px-4 py-2 rounded-md w-full h-11 focus:outline-none focus:ring-0 text-[#767678]"
                          onChange={(e: any) =>
                            setFieldValue("shipTo", e.target.value)
                          }
                          // value={values.shipTo}
                        >
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                          <option value="Other">Other</option>
                        </Field>

                        <div>
                          <Input
                            type="text"
                            placeholder="Full Name"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("billing_address.full_name", value);
                            }}
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("billing_address.email", value);
                            }}
                          />
                        </div>
                        <div>
                          <Input
                            type="text"
                            placeholder="Phone Number"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("billing_address.phone", value);
                            }}
                          />
                        </div>
                        <div>
                          <Field
                            name="addressBilling"
                            type="text"
                            placeholder="Address"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                          />
                          <ErrorMessage
                            name="addressBilling"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Field
                            name="cityBilling"
                            type="text"
                            placeholder="City"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                          />
                          <ErrorMessage
                            name="cityBilling"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Field
                            name="stateBilling"
                            type="text"
                            placeholder="State"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                          />
                          <ErrorMessage
                            name="stateBilling"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Field
                            name="postalBilling"
                            type="text"
                            placeholder="Postal Code"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                          />
                          <ErrorMessage
                            name="postalBilling"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Field
                            as="select"
                            name="countryBilling"
                            className="border border-[#BDCCDB] px-4 py-2 rounded-md w-full h-11 focus:outline-none focus:ring-0 text-[#767678]"
                            onChange={(e: any) =>
                              setFieldValue("countryBilling", e.target.value)
                            }
                            value={values.countryBilling}
                          >
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                          </Field>
                          <ErrorMessage
                            name="countryBilling"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        <Field
                          type="checkbox"
                          id="diffAddress"
                          name="diffAddress"
                          className="accent-gray-800 focus:outline-none focus:ring-0"
                          checked={values.diffAddress}
                          onChange={(e: any) => {
                            setFieldValue("diffAddress", e.target.checked);
                            setShowShipping(e.target.checked);
                          }}
                        />
                        <label
                          htmlFor="diffAddress"
                          className="text-sm font-bold text-[#767678]"
                        >
                          Ship to a Different Address?
                        </label>
                      </div>

                      {showShipping && (
                        <div className="space-y-4 border-t border-[#BDCCDB] pt-4 transition-all duration-300">
                          <h2 className="font-bold text-lg text-[#141926]">
                            Shipping Details
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Field
                                name="fullNameShipping"
                                type="text"
                                placeholder="Full Name"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="fullNameShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                name="phoneShipping"
                                type="text"
                                placeholder="Phone Number"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="phoneShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                name="addressShipping"
                                type="text"
                                placeholder="Address"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="addressShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                name="postalShipping"
                                type="text"
                                placeholder="Postal Code"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="postalShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                name="cityShipping"
                                type="text"
                                placeholder="City"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="cityShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                name="stateShipping"
                                type="text"
                                placeholder="State"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              />
                              <ErrorMessage
                                name="stateShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <Field
                                as="select"
                                name="countryShipping"
                                className="border border-[#BDCCDB] px-4 py-2 rounded-md w-full h-11 focus:outline-none focus:ring-0 text-[#767678]"
                                onChange={(e: any) =>
                                  setFieldValue(
                                    "countryShipping",
                                    e.target.value
                                  )
                                }
                                value={values.countryShipping}
                              >
                                <option value="">Select Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                              </Field>
                              <ErrorMessage
                                name="countryShipping"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-4">
                        <Field
                          name="orderNote"
                          type="text"
                          placeholder="Order Note (Optional)"
                          className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className={`bg-[#424A4D] text-white px-6 py-2 rounded-md w-fit cursor-pointer transition hover:bg-gray-700 ${
                        (isSubmitting || !isValid) &&
                        "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Continue"}
                    </button>
                  </div>

                  {/* Right Column - PRICE DETAILS */}
                  <PriceDetails
                    cartTotal={cartTotal}
                    shippingCost={shippingCost}
                    packagingCost={packagingCost}
                    finalPrice={finalPrice}
                    showShippingOptions={true}
                    packaging={packaging}
                    setPackaging={setPackaging}
                    packagingType={packagingType}
                    setPackagingType={setPackagingType}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
