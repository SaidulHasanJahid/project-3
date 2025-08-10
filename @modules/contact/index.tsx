'use client';

import Link from 'next/link';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-() ]+$/, 'Invalid phone number')
    .required('Phone Number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactPage = () => {
  return (
    <>
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm mt-1">
          <Link href="/">
            <span className="text-[16px] cursor-pointer">Home</span>
          </Link>{' '}
          / Contact
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-[30px] text-[#141926] font-bold">Send Message</h2>
            <div className="w-16 h-[2px] bg-gray-600" />

            <Formik
              initialValues={{ name: '', email: '', phone: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('Form values:', values);
                // TODO: Replace with API call
                setTimeout(() => {
                  alert('Message sent!');
                  setSubmitting(false);
                  resetForm();
                }, 1000);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <Form className="space-y-6">
                  {/* Name + Email */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <label
                        htmlFor="name"
                        className="block font-bold text-[16px] text-[#767678] mb-1 text-sm"
                      >
                        Full Name:
                      </label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name *"
                        className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-600 text-xs mt-1"
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block font-bold text-[16px] text-[#767678] mb-1 text-sm"
                      >
                        Your Email:
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-bold text-[16px] text-[#767678] mb-1 text-sm"
                    >
                      Phone Number:
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone Number *"
                      className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-bold text-[16px] text-[#767678] mb-1 text-sm"
                    >
                      Message:
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Your Message *"
                      className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 h-36 text-sm outline-none resize-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`h-[61px] text-white px-6 py-2 mt-2 text-sm w-[160px] ${
                      isSubmitting || !isValid
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#424A4D]"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            <h2 className="text-[30px] text-[#141926] font-bold">Get In Touch</h2>
            <div className="w-16 h-[2px] bg-gray-600" />

            <div className="space-y-5 text-sm">
              <div>
                <strong className="block text-[16px] text-[#767678] font-bold mb-1">
                  Office Address :
                </strong>
                <p className="font-semibold text-[16px] text-[#767678]">
                  3584 Hickory Heights Drive , USA
                </p>
              </div>
              <div>
                <strong className="block text-[16px] text-[#767678] font-bold mb-1">
                  Contact Number :
                </strong>
                <p className="font-semibold text-[16px] text-[#767678]">00 000 000 000</p>
              </div>
              <div>
                <strong className="block text-[16px] text-[#767678] font-bold mb-1">Fax :</strong>
                <p className="font-semibold text-[16px] text-[#767678]">00 000 000 000</p>
              </div>
              <div>
                <strong className="block text-[16px] text-[#767678] font-bold mb-1">
                  Email Address :
                </strong>
                <p className="font-semibold text-[16px] text-[#767678]">admin@geniusocean.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
