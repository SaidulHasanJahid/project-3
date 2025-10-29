"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutPage = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (id: string) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  const teamMembers = [
    {
      name: "Mujibur Rahman",
      title: "IT Head",
      img: "https://tasa.com.bd/wp-content/uploads/2025/06/bgjhv-1536x2048.jpeg",
    },
    {
      name: "Khondokar Akbar Hossain",
      title: "CEO & Fashion Designer",
      img: "https://tasa.com.bd/wp-content/uploads/2023/05/FB_IMG_1683565810294-1-1.jpg",
    },
    {
      name: "Monayem Azam",
      title: "Team Manager",
      img: "https://tasa.com.bd/wp-content/uploads/2023/05/PXL_20230215_174819776.PORTRAIT-01-1536x2048.jpeg",
    },
  ];

  const videos = [
    {
      id: "v1",
      url: "https://videos.pexels.com/video-files/856323/856323-hd_1920_1080_30fps.mp4",
    },
    {
      id: "v2",
      url: "https://videos.pexels.com/video-files/856143/856143-hd_1920_1080_30fps.mp4",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://tasa.com.bd/wp-content/uploads/2023/05/Experience-the-Difference-with-TASA.jpg"
          alt="Leather texture background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider drop-shadow-lg">
            Experience the Difference with TASA
          </h1>
          <p className="text-lg md:text-2xl font-light mt-4">
            Elegant. Authentic. Sustainable.
          </p>
        </div>
      </section>

      {/* Why TASA Section */}
      <section className="w-full max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text - Top aligned */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Why TASA?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our
            brand, including the leather we use. As a premium leather brand, we
            only work with the finest full-grain leather—renowned for its
            durability, natural texture, and timeless patina.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mb-5">
            Experience the Difference with TASA.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you choose TASA, you’re investing in quality, craftsmanship, and
            a piece that will only get better with age.
          </p>
           <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our
            brand, including the leather we use. As a premium leather brand, we
            only work with the finest full-grain leather—renowned for its
            durability, natural texture, and timeless patina.
          </p>
        </div>

        {/* Image - no rounded */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden shadow-xl w-full h-full cursor-pointer"
        >
          <img
            src="https://tasa.com.bd/wp-content/uploads/2023/05/edited-akbar-318.jpg"
            alt="Leather bag on desk"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* About Studio */}
      <section className="max-w-7xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image - no rounded */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden shadow-xl w-full h-full cursor-pointer"
        >
          <img
            src="https://tasa.com.bd/wp-content/uploads/2022/11/ezgif.com-gif-maker-2048x922.jpg"
            alt="Leather design studio"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Text - top aligned */}
        <div className="flex flex-col justify-start">
          <p className="uppercase text-sm tracking-wider text-gray-500 mb-3">
            Elegant Design
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Our Design Studio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation
            meets tradition. Our skilled artisans craft luxury leather products
            that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and
            see how each piece is brought to life by our talented team.
          </p>
           <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our
            brand, including the leather we use. As a premium leather brand, we
            only work with the finest full-grain leather—renowned for its
            durability, natural texture, and timeless patina.
          </p>
                 <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation
            meets tradition. Our skilled artisans craft luxury leather products
            that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and
            see how each piece is brought to life by our talented team.
          </p>
        </div>
      </section>

      {/* What You Need */}
      <section className="max-w-7xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text - top aligned */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What You Need?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for a premium handbag, a stylish wallet, or a
            custom piece designed just for you — TASA’s design studio has it all.
            Crafted with passion, made to last.
          </p>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Our Design Studio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation
            meets tradition. Our skilled artisans craft luxury leather products
            that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and
            see how each piece is brought to life by our talented team.
          </p>
           <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our
            brand, including the leather we use. As a premium leather brand, we
            only work with the finest full-grain leather—renowned for its
            durability, natural texture, and timeless patina.
          </p>
                 <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation
            meets tradition. Our skilled artisans craft luxury leather products
            that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and
            see how each piece is brought to life by our talented team.
          </p>
        </div>

        {/* Image - no rounded */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden shadow-xl w-full h-full cursor-pointer"
        >
          <img
            src="https://tasa.com.bd/wp-content/uploads/2023/05/edited-akbar-138-1.jpg"
            alt="TASA product packaging"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* Our Team */}
      <section className="w-full bg-gray-50 py-20 px-6 text-center text-gray-800">
        <div className="mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Words About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="overflow-hidden shadow-lg mb-4 w-72 h-96">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{member.title}</p>
              <div className="flex space-x-4 text-gray-600 text-lg">
                <a href="#" className="hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-black">
                  <FaXTwitter />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-red-500">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative aspect-video bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer shadow-lg"
            onClick={() => handleVideoClick(video.id)}
          >
            {playingVideo === video.id ? (
              <video
                src={video.url}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-5 rounded-full shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
