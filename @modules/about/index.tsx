"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useVideoSectionAboutQuery } from "@/appstore/video/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles import করা (project-এ swiper installed থাকতে হবে)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEmployeesQuery } from "@/appstore/team-members/api";

// YouTube Embed URL ফাংশন
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^?&"'>]+)/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }
  return "";
};

// Skeleton অপরিবর্তিত রাখা হয়েছে
const AboutPageSkeleton = () => (
  <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white">
    {/* Hero Skeleton */}
    <section className="relative w-full h-[60vh] md:h-[75vh] animate-pulse">
      <div className="absolute inset-0 bg-gray-300" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="h-12 bg-gray-400 rounded w-96 mb-4" />
        <div className="h-8 bg-gray-400 rounded w-64" />
      </div>
    </section>

    {/* Why TASA Skeleton */}
    <section className="w-full max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="h-10 bg-gray-300 rounded w-48" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
      <div className="bg-gray-300 rounded-lg h-96 animate-pulse" />
    </section>

    {/* Studio & What You Need Skeleton */}
    {[1, 2].map((i) => (
      <section key={i} className="max-w-7xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {i === 1 ? (
          <>
            <div className="bg-gray-300 rounded-lg h-96 animate-pulse" />
            <div className="space-y-6">
              <div className="h-6 bg-gray-300 rounded w-32" />
              <div className="h-10 bg-gray-300 rounded w-64" />
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="space-y-6">
              <div className="h-10 bg-gray-300 rounded w-56" />
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
            <div className="bg-gray-300 rounded-lg h-96 animate-pulse" />
          </>
        )}
      </section>
    ))}

    {/* Team Skeleton */}
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="text-center mb-12 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-48 mx-auto" />
        <div className="h-10 bg-gray-300 rounded w-64 mx-auto" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-gray-300 w-72 h-96 rounded-lg animate-pulse mb-4" />
              <div className="h-6 bg-gray-300 rounded w-48" />
              <div className="h-4 bg-gray-200 rounded w-32 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Videos Skeleton */}
    <section className="py-20 px-6 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2].map((i) => (
          <div key={i} className="relative aspect-video bg-gray-200 rounded-lg animate-pulse flex items-center justify-center overflow-hidden">
            <div className="bg-gray-400/60 rounded-full p-8">
              <div className="w-16 h-16 bg-gray-500 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const { data: videoData, isLoading: videoLoading, isError: videoError } = useVideoSectionAboutQuery();
  const videos = videoData?.data?.filter((video: any) => video.status === "active") || [];

  const { data: employeeData, isLoading: employeeLoading, isError: employeeError } = useEmployeesQuery();
  const teamMembers = employeeData?.data?.filter((emp: any) => emp.isFrontView && emp.status) || [];

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  // Overall loading (videos or employees)
  if (videoLoading || employeeLoading) return <AboutPageSkeleton />;

  if (videoError || employeeError) return null;

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
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Why TASA?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our brand, including the leather we use. As a premium leather brand, we only work with the finest full-grain leather—renowned for its durability, natural texture, and timeless patina.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mb-5">
            Experience the Difference with TASA.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you choose TASA, you’re investing in quality, craftsmanship, and a piece that will only get better with age.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our brand, including the leather we use. As a premium leather brand, we only work with the finest full-grain leather—renowned for its durability, natural texture, and timeless patina.
          </p>
        </div>

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

        <div className="flex flex-col justify-start">
          <p className="uppercase text-sm tracking-wider text-gray-500 mb-3">
            Elegant Design
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Our Design Studio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation meets tradition. Our skilled artisans craft luxury leather products that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and see how each piece is brought to life by our talented team.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our brand, including the leather we use. As a premium leather brand, we only work with the finest full-grain leather—renowned for its durability, natural texture, and timeless patina.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation meets tradition. Our skilled artisans craft luxury leather products that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and see how each piece is brought to life by our talented team.
          </p>
        </div>
      </section>

      {/* What You Need */}
      <section className="max-w-7xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What You Need?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for a premium handbag, a stylish wallet, or a custom piece designed just for you — TASA’s design studio has it all. Crafted with passion, made to last.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Our Design Studio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation meets tradition. Our skilled artisans craft luxury leather products that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and see how each piece is brought to life by our talented team.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Our commitment to quality shines through in every aspect of our brand, including the leather we use. As a premium leather brand, we only work with the finest full-grain leather—renowned for its durability, natural texture, and timeless patina.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our design studio represents the heart of TASA — where innovation meets tradition. Our skilled artisans craft luxury leather products that blend style and durability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Visit our studio to explore premium materials, exquisite details, and see how each piece is brought to life by our talented team.
          </p>
        </div>

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

      {/* Our Team - Now with Swiper Carousel */}
  {/* Our Team - Swiper Carousel */}
<section className="w-full bg-gray-50 py-20 px-6 text-center text-gray-800">
  <div className="mb-12">
    <p className="uppercase text-sm tracking-widest text-gray-500">
      Words About Us
    </p>
    <h2 className="text-3xl md:text-4xl font-semibold mt-2">Our Team</h2>
  </div>

  <div className="max-w-6xl mx-auto">
    {teamMembers.length > 0 ? (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={48}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 48 },
        }}
        className="pb-12"
      >
        {teamMembers.map((member: any) => (
          <SwiperSlide key={member.id}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="overflow-hidden shadow-lg mb-4 w-72 h-96 rounded-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${member.imagePath}`}
                  alt={member.name}
                  width={288}
                  height={384}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <h3 className="font-semibold text-lg mt-2">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{member.designation.name}</p>
              <div className="flex space-x-4 text-gray-600 text-lg">
                <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                <a href="#" className="hover:text-black"><FaXTwitter /></a>
                <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
                <a href={`mailto:${member.email}`} className="hover:text-red-500"><FaEnvelope /></a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <p className="text-center text-gray-500 py-10">
        No team members available at the moment.
      </p>
    )}
  </div>
</section>

      {/* Videos Section */}
      <section className="py-20 px-6 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video: any) => (
            <div
              key={video._id}
              onClick={() => openVideoModal(video.videoUrl)}
              className="relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${video.imageUrl}`}
                alt={video.title || "About Video"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-full shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-white">
                  <PlayCircleOutlined className="text-5xl text-gray-800" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No videos available at the moment.
          </p>
        )}
      </section>

      {/* YouTube Video Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={closeModal}
        centered
        width={900}
        closeIcon={null}
        styles={{
          body: { padding: 0, background: "#000" },
        }}
      >
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={getYouTubeEmbedUrl(currentVideoUrl)}
            title="About Page Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </Modal>
    </div>
  );
}


  // const teamMembers = [
  //   {
  //     name: "Mujibur Rahman",
  //     title: "IT Head",
  //     img: "https://tasa.com.bd/wp-content/uploads/2025/06/bgjhv-1536x2048.jpeg",
  //   },
  //   {
  //     name: "Khondokar Akbar Hossain",
  //     title: "CEO & Fashion Designer",
  //     img: "https://tasa.com.bd/wp-content/uploads/2023/05/FB_IMG_1683565810294-1-1.jpg",
  //   },
  //   {
  //     name: "Monayem Azam",
  //     title: "Team Manager",
  //     img: "https://tasa.com.bd/wp-content/uploads/2023/05/PXL_20230215_174819776.PORTRAIT-01-1536x2048.jpeg",
  //   },
  // ];