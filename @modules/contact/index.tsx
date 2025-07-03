'use client';

import Link from 'next/link';
import React from 'react';

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
        <p className="text-sm mt-1   ">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Contact
        </p>
      </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: Contact Form */}
                <div className="w-full lg:w-2/3 space-y-6">
                <h2 className="text-[30px] text-[#141926] font-bold">Send Message</h2>
                <div className="w-16 h-[2px] bg-gray-600" />

                {/* Name + Email */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                    <label className="block font-bold text-[16px] text-[#767678] mb-1 text-sm">Full Name:</label>
                    <input
                        type="text"
                        placeholder="Name *"
                        className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                    />
                    </div>
                    <div className="flex-1">
                    <label className="block font-bold text-[16px] text-[#767678] mb-1 text-sm">Your Email:</label>
                    <input
                        type="email"
                        placeholder="Email Address *"
                        className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                    />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block font-bold text-[16px] text-[#767678] mb-1 text-sm">Phone Number:</label>
                    <input
                    type="text"
                    placeholder="Phone Number *"
                    className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 text-sm outline-none"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block font-bold text-[16px] text-[#767678] mb-1 text-sm">Message:</label>
                    <textarea
                    placeholder="Your Message *"
                    className="w-full border border-gray-300 bg-[#E7E7E8] px-4 py-2 h-36 text-sm outline-none resize-none"
                    />
                </div>

                {/* Send Button */}
                <button className="bg-[#424A4D] h-[61px]  text-white px-6 py-2 mt-2 text-sm w-[160px]">
                    Send Message
                </button>
                </div>

                {/* Right: Contact Info */}
                <div className="w-full lg:w-1/3 space-y-6">
                <h2 className="text-[30px] text-[#141926] font-bold">Get In Touch</h2>
                <div className="w-16 h-[2px] bg-gray-600" />

                <div className="space-y-5 text-sm">
                    <div>
                    <strong className="block text-[16px] text-[#767678] font-bold mb-1">Office Address :</strong>
                    <p className='font-semibold text-[16px] text-[#767678] '>3584 Hickory Heights Drive , USA</p>
                    </div>
                    <div>
                    <strong className="block text-[16px] text-[#767678] font-bold mb-1">Contact Number :</strong>
                    <p className='font-semibold text-[16px] text-[#767678] '>00 000 000 000</p>
                    </div>
                    <div>
                    <strong className="block text-[16px] text-[#767678] font-bold mb-1">Fax :</strong>
                    <p className='font-semibold text-[16px] text-[#767678] '>00 000 000 000</p>
                    </div>
                    <div>
                    <strong className="block text-[16px] text-[#767678] font-bold mb-1">Email Address :</strong>
                    <p className='font-semibold text-[16px] text-[#767678] '>admin@geniusocean.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ContactPage;