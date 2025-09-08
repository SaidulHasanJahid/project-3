"use client";

import Link from "next/link";
import { FaUser, FaShoppingCart, FaCreditCard } from "react-icons/fa";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import PriceDetails from "@/@modules/@common/price-deatile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const OrderChackOutPage = () => {
  // Redux থেকে cart data
  const cart = useSelector((state: any) => state?.cart?.items || []);

  // Quantity state
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const qtys: { [key: string]: number } = {};
    cart.forEach((item: any) => {
      qtys[item.id] = quantities[item.id] || 1;
    });
    setQuantities(qtys);
  }, [cart]);

  // Packaging / shipping state
  const [packaging, setPackaging] = useState("free");
  const [packagingType, setPackagingType] = useState("default");

  // Price calculations
  const cartTotal = cart.reduce((acc: number, item: any) => {
    const qty = quantities[item.id] || 1;
    return acc + Number(item.price) * qty;
  }, 0);

  const shippingCost = packaging === "express" ? 10 : 0;
  const packagingCost = packagingType === "gift" ? 15 : 0;
  const finalPrice = cartTotal + shippingCost + packagingCost;

  const router = useRouter();
  const borderStyle =
    "mt-1 block w-full border border-[#BDCCDB] outline-none rounded-md p-2";

  const initialValues = {
    payment: "",
    paymentNumber: "",
    transactionId: "",
    creditCardNumber: "",
    securityCode: "",
    expMonth: "",
    expYear: "",
    cardHolderName: "",
    dniType: "",
    documentNumber: "",
    authCardNumber: "",
    authCardCode: "",
    authMonth: "",
    authYear: "",
    stripeCardNumber: "",
    stripeCW: "",
    stripeMonth: "",
    stripeYear: "",
  };

  const validationSchema = Yup.lazy((values: any) => {
    const baseSchema: any = {
      payment: Yup.string().required("Please select a payment method."),
    };

    if (values.payment === "Mobile Money") {
      baseSchema.paymentNumber = Yup.string().required(
        "Payment Number is required"
      );
      baseSchema.transactionId = Yup.string().required(
        "Transaction ID is required"
      );
    }

    if (values.payment === "Mercadopago") {
      baseSchema.creditCardNumber = Yup.string().required(
        "Credit card number is required"
      );
      baseSchema.securityCode = Yup.string().required(
        "Security code is required"
      );
      baseSchema.expMonth = Yup.string().required(
        "Expiration month is required"
      );
      baseSchema.expYear = Yup.string().required("Expiration year is required");
      baseSchema.cardHolderName = Yup.string().required(
        "Card holder name is required"
      );
      baseSchema.dniType = Yup.string().required("DNI type is required");
      baseSchema.documentNumber = Yup.string().required(
        "Document number is required"
      );
    }

    if (values.payment === "Authorize.Net") {
      baseSchema.authCardNumber = Yup.string().required(
        "Card number is required"
      );
      baseSchema.authCardCode = Yup.string().required("Card code is required");
      baseSchema.authMonth = Yup.string().required("Month is required");
      baseSchema.authYear = Yup.string().required("Year is required");
    }

    if (values.payment === "Stripe") {
      baseSchema.stripeCardNumber = Yup.string().required(
        "Card number is required"
      );
      baseSchema.stripeCW = Yup.string().required("CW is required");
      baseSchema.stripeMonth = Yup.string().required("Month is required");
      baseSchema.stripeYear = Yup.string().required("Year is required");
    }

    return Yup.object().shape(baseSchema);
  });

  const onSubmit = (values: any) => {
    console.log("Form Data:", values);
    router.push("/customer/last-summeryall");
  };

  return (
    <div>
      {/* Top Banner */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">orderchackout</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px] cursor-pointer">Home</span>
          </Link>{" "}
          / Cart
        </p>
      </div>

      {/* ✅ Checkout Steps */}
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="flex items-center gap-5">
          {/* Step 1 */}
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

          {/* Step 2 */}
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

          {/* Step 3 */}
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

      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          <div className="md:w-[934px] lg:w-[934px] w-full mx-auto leading-7 ">
            <div className="border rounded-md p-5 space-y-6 border-[#BDCCDB] ">
              {/* Shipping Info */}
              {/* ... shipping info unchanged ... */}

              {/* Payment Info */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className="space-y-4">
                      <h2 className="font-bold text-[18px] text-[#141926] border-b pb-2 border-[#BDCCDB] ">
                        Payment Info
                      </h2>

                      <div className="space-y-3">
                        {[
                          {
                            value: "Cash On Delivery",
                            desc: "Pay with cash upon delivery.",
                          },
                          { value: "Mobile Money", desc: "(5 - 6 days)" },
                          {
                            value: "Flutter Wave",
                            desc: "Pay via your Flutter Wave account.",
                          },
                          { value: "Mercadopago", desc: "Pay Via MercadoPago" },
                          {
                            value: "Authorize.Net",
                            desc: "Pay Via Authorize.Net",
                          },
                          {
                            value: "Mollie Payment",
                            desc: "Pay with Mollie Payment.",
                          },
                          {
                            value: "Stripe",
                            desc: "Pay via your Credit Card.",
                          },
                          {
                            value: "Paypal",
                            desc: "Pay via your PayPal account.",
                          },
                        ].map((method, idx) => (
                          <div key={method.value}>
                            <label className="flex items-start gap-2 cursor-pointer">
                              <Field
                                type="radio"
                                name="payment"
                                value={method.value}
                                className="mt-1"
                              />
                              <div>
                                <div className="font-bold text-[16px] text-[#767678] ml-1">
                                  {method.value}
                                </div>
                                <div className="text-[14px] font-bold text-[#767678] mt-1">
                                  {method.desc}
                                </div>
                              </div>
                            </label>

                            {method.value === "Cash On Delivery" && (
                              <ErrorMessage
                                name="payment"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            )}

                            {formik.values.payment === method.value && (
                              <div className="ml-6 mt-2 p-3 rounded space-y-3">
                                {idx === 1 && (
                                  <>
                                    <div>
                                      <Field
                                        name="paymentNumber"
                                        placeholder="Payment Number"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="paymentNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>

                                    <div>
                                      <Field
                                        name="transactionId"
                                        placeholder="Transaction ID# *"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="transactionId"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                  </>
                                )}

                                {idx === 3 && (
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Field
                                        name="creditCardNumber"
                                        placeholder="Credit Card Number"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="creditCardNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="securityCode"
                                        placeholder="Security Code"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="securityCode"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="expMonth"
                                        placeholder="Expiration Month"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="expMonth"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="expYear"
                                        placeholder="Expiration Year"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="expYear"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="cardHolderName"
                                        placeholder="Card Holder Name"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="cardHolderName"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        as="select"
                                        name="dniType"
                                        className={borderStyle}
                                      >
                                        <option value="">DNI</option>
                                        <option value="passport">
                                          Passport
                                        </option>
                                        <option value="idcard">ID Card</option>
                                        <option value="driver">
                                          Driver License
                                        </option>
                                      </Field>
                                      <ErrorMessage
                                        name="dniType"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="documentNumber"
                                        placeholder="Document Number"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="documentNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                  </div>
                                )}

                                {idx === 4 && (
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Field
                                        name="authCardNumber"
                                        placeholder="Card Number"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="authCardNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="authCardCode"
                                        placeholder="Card Code"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="authCardCode"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="authMonth"
                                        placeholder="Month"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="authMonth"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="authYear"
                                        placeholder="Year"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="authYear"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                  </div>
                                )}

                                {idx === 6 && (
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Field
                                        name="stripeCardNumber"
                                        placeholder="Card Number"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="stripeCardNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="stripeCW"
                                        placeholder="CW"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="stripeCW"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="stripeMonth"
                                        placeholder="Month"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="stripeMonth"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name="stripeYear"
                                        placeholder="Year"
                                        className={borderStyle}
                                      />
                                      <ErrorMessage
                                        name="stripeYear"
                                        component="div"
                                        className="text-red-500 text-sm"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Link href={"/customer/checkout"}>
                        <button
                          type="button"
                          className="bg-[#424A4D] w-[74px] h-[40px] text-white cursor-pointer rounded"
                        >
                          Back
                        </button>
                      </Link>

                      <button
                        type="submit"
                        className="bg-[#424A4D] w-[104px] h-[40px] text-white cursor-pointer rounded"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>

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
      </div>
    </div>
  );
};

export default OrderChackOutPage;
