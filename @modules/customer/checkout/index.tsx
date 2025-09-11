"use client";

import PriceDetails from "@/@modules/@common/price-deatile";
import { clearCart } from "@/appstore/cart/cart-slice";
import { useSaveOrderMutation } from "@/appstore/cart/checkout-api";
import { Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ErrorMessage, Form, Formik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCreditCard, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

export default function CheckoutForm() {
  const [packaging, setPackaging] = useState("free");
  const [packagingType, setPackagingType] = useState("default");
  const [isShipping, setIsShipping] = useState(false);
  const [isBilling, setIsBilling] = useState(false);
  const dispatch = useDispatch();
  const [createTrigger, { isLoading }] = useSaveOrderMutation();

  // Access cart data from Redux store
  const cart = useSelector((state: any) => state?.cart?.items || []);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const cart_payload = cart?.map((item: any) => ({
    product_id: item.id,
    quantity: item.quantity,
  }));
  // Initialize quantities based on cart items
  useEffect(() => {
    const qtys: { [key: string]: number } = {};
    cart.forEach((item: any) => {
      qtys[item.id] = quantities[item.id] || 1;
    });
    setQuantities(qtys);
  }, [cart]);

  const cartTotal = cart.reduce((acc: number, item: any) => {
    const qty = quantities[item.id] || 1;
    return acc + Number(item.price) * qty;
  }, 0);

  // Calculate additional costs based on shipping and packaging
  const shippingCost = packaging === "express" ? 10 : 0;
  const packagingCost = packagingType === "gift" ? 15 : 0;
  const finalPrice = cartTotal + shippingCost + packagingCost;

  const handleSaveOrder = async (values: any) => {
    try {
      const response = await createTrigger(values).unwrap();
      if (response?.success) {
        localStorage.clear();
        dispatch(clearCart());
        alert("Order placed successfully!");
      }
    } catch (error) {
      console.log(error, "test");
    }
  };

  const initialValues = {
    full_name: null,
    email: null,
    phone: null,
    country: "Bangladesh",
    state: null,
    city: null,
    address_line: null,
    billing_address: {
      full_name: null,
      phone: null,
      address_line: null,
      city: null,
      state: null,
      postal_code: null,
      country: "Bangladesh",
      address_type: "billing",
    },
    shipping_address: {
      full_name: null,
      phone: null,
      address_line: null,
      city: null,
      state: null,
      postal_code: null,
      country: "Bangladesh",
      address_type: "shipping",
    },
    shipping_method: "free",
    packaging: "default",
    items: [],
    payment_method: "cod",
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    address_line: Yup.string().required("Address is required"),
  });

  return (
    <>
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

                {/* Step 3 - Payment (Inactive) */}
                <div className="relative flex items-center -ml-1">
                  <div className="flex items-center bg-gray-200 text-gray-600 px-6 py-4 pl-8">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-semibold mr-3">
                      3
                    </div>
                    <FaCreditCard className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount
            onSubmit={(values) => {
              handleSaveOrder(values);
            }}
          >
            {({ values, isSubmitting, isValid, setFieldValue }) => (
              <Form>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Column */}

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
                            name="full_name"
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

                        <div className="">
                          <Input
                            type="text"
                            placeholder="Enter City"
                            className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("city", value);
                              setFieldValue("billing_address.city", value);
                              setFieldValue("shipping_address.city", value);
                            }}
                          />
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div className="col-span-2">
                          <TextArea
                            placeholder="Enter Full Address"
                            className="border border-[#BDCCDB] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-0 h-[44px]"
                            rows={2}
                            onChange={(e: any) => {
                              const value = e.target.value;
                              setFieldValue("address_line", value);
                              setFieldValue(
                                "billing_address.address_line",
                                value
                              );
                              setFieldValue(
                                "shipping_address.address_line",
                                value
                              );
                            }}
                          />
                          <ErrorMessage
                            name="address_line"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Info */}

                    <div className="flex items-center gap-2 ">
                      <Checkbox
                        checked={isBilling}
                        onChange={() => setIsBilling(!isBilling)}
                      >
                        Bill to a Different Address?
                      </Checkbox>
                    </div>

                    {isBilling && (
                      <div className="space-y-4 border-b border-[#BDCCDB]">
                        <h2 className="font-bold text-lg text-[#141926] border-b border-[#BDCCDB] pb-2">
                          Billing Details
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Input
                              type="text"
                              placeholder="Full Name"
                              className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              onChange={(e: any) => {
                                const value = e.target.value;
                                setFieldValue(
                                  "billing_address.full_name",
                                  value
                                );
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
                            <Input
                              type="text"
                              placeholder="Country"
                              value={values.billing_address.country}
                              className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              onChange={(e: any) => {
                                const value = e.target.value;
                                setFieldValue("billing_address.country", value);
                              }}
                            />
                          </div>
                          <div>
                            <Input
                              type="text"
                              placeholder="City"
                              className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                              onChange={(e: any) => {
                                const value = e.target.value;
                                setFieldValue("billing_address.city", value);
                              }}
                            />
                          </div>

                          <div className="col-span-2">
                            <TextArea
                              placeholder="Enter Full Address"
                              className="border border-[#BDCCDB] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-0 h-[44px]"
                              rows={2}
                              onChange={(e: any) => {
                                const value = e.target.value;
                                setFieldValue(
                                  "billing_address.address_line",
                                  value
                                );
                              }}
                            />
                            <ErrorMessage
                              name="address_line"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>

                        <select
                          name="billing_address.country"
                          className="border border-[#BDCCDB] px-4 py-2 rounded-md w-full h-11 focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#767678] bg-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select Country
                          </option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                        </select>
                      </div>
                    )}

                    <div className="flex items-center gap-2 ">
                      <Checkbox
                        checked={isShipping}
                        onChange={() => setIsShipping(!isShipping)}
                      >
                        Ship to a Different Address?
                      </Checkbox>
                    </div>

                    {isShipping && (
                      <div className="space-y-4 border-[#BDCCDB] pt-4 transition-all duration-300">
                        <div className="space-y-4 border-b border-[#BDCCDB]">
                          <h2 className="font-bold text-lg text-[#141926] border-b border-[#BDCCDB] pb-2">
                            Shipping Details
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Input
                                type="text"
                                placeholder="Full Name"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                                onChange={(e: any) => {
                                  const value = e.target.value;
                                  setFieldValue(
                                    "shipping_address.full_name",
                                    value
                                  );
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
                                  setFieldValue(
                                    "shipping_address.phone",
                                    value
                                  );
                                }}
                              />
                            </div>
                            <div>
                              <Input
                                type="text"
                                placeholder="Country"
                                value={values.shipping_address.country}
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                                onChange={(e: any) => {
                                  const value = e.target.value;
                                  setFieldValue(
                                    "shipping_address.country",
                                    value
                                  );
                                }}
                              />
                            </div>
                            <div>
                              <Input
                                type="text"
                                placeholder="City"
                                className="border border-[#BDCCDB] w-full h-11 px-4 py-2 rounded-md focus:outline-none focus:ring-0"
                                onChange={(e: any) => {
                                  const value = e.target.value;
                                  setFieldValue("shipping_address.city", value);
                                }}
                              />
                            </div>

                            <div className="col-span-2">
                              <TextArea
                                placeholder="Enter Full Address"
                                className="border border-[#BDCCDB] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-0 h-[44px]"
                                rows={2}
                                onChange={(e: any) => {
                                  const value = e.target.value;
                                  setFieldValue(
                                    "shipping_address.address_line",
                                    value
                                  );
                                }}
                              />
                              <ErrorMessage
                                name="address_line"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className={`bg-[#424A4D] text-white px-6 py-2 rounded-md w-fit cursor-pointer transition hover:bg-gray-700 opacity-50 `}
                    >
                      {isLoading ? "Submitting..." : "Continue"}
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
