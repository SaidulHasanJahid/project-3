'use client';

import Link from 'next/link';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactPage = () => {
  return (
    <>
      {/* ✅ Top Banner Section */}
      <div
        className="w-full h-[260px] flex flex-col justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://tasa.com.bd/wp-content/uploads/2023/02/h9ip.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-[48px] md:text-[60px] font-semibold text-[#fff]">Contact us</h1>
          <p className="text-[16px] text-white mt-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            / Contact us
          </p>
        </div>
      </div>

      {/* ✅ Contact Form Section */}
      <div className=" container mx-auto px-4 md:px-10 py-16 bg-white">
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          {/* === Left Column: Form === */}
          <div className="w-full lg:w-[80%]">
            <Formik
              initialValues={{ name: '',
                 email: '', 
                 subject: '',
                  message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setTimeout(() => {
                  alert('Message sent!');
                  setSubmitting(false);
                  resetForm();
                }, 1000);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <Form className="space-y-5">
                  <div>
                    <label className="block text-[16px] text-[#222] mb-1">
                      Full Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-gray-300 px-4 py-2 outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] text-[#222] mb-1">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 px-4 py-2 outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] text-[#222] mb-1">
                      Subject
                    </label>
                    <Field
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full border border-gray-300 px-4 py-2 outline-none"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] text-[#222] mb-1">
                      Your message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="6"
                      placeholder="Your message"
                      className="w-full border border-gray-300 px-4 py-2 outline-none resize-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 text-xs mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full h-[45px] uppercase font-semibold text-[14px] tracking-wide ${
                      isSubmitting || !isValid
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-black text-white hover:bg-[#222] transition'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
