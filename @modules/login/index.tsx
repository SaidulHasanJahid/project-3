'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUser } from '@/@modules/context/user-context'; // Adjust path as needed
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LogInPage() {
  const router = useRouter();
  const { login } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Real login logic here (API call)
    console.log('Login data:', values);
    login(); // set global login state to true
    router.push('/'); // redirect to home after login
  };

  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Login Page</h1>
        <p className="text-sm mt-1">
          <Link href="/">
            <span className="text-[16px]">Home</span>
          </Link>{' '}
          / Login
        </p>
      </div>

      {/* Login Form */}
      <div className="min-h-[500px] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white w-full max-w-md p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center text-[#1e1e50] mb-2">Login Now</h2>
          <p className="text-center text-gray-500 mb-6">Welcome back, please sign in below</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="space-y-4">
                {/* Email */}
                <div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mb-1"
                  />
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaUser />
                    </span>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Type Email Address"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mb-1"
                  />
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaKey />
                    </span>
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Type Password"
                      className="w-full pr-10 pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                      tabIndex={-1}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <Field
                      type="checkbox"
                      name="remember"
                      checked={values.remember}
                      onChange={handleChange}
                    />
                    Remember Password
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#1e1e50] hover:bg-[#2e2e70] cursor-pointer mb-4 text-white font-medium py-2 rounded transition"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p>if u have no account Then pleace <Link className='text-blue-500 mt-5' href={'/'}>register</Link></p>
        </div>
      </div>
    </>
  );
}
