"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useVideoSectionHomeQuery } from "@/appstore/video/api";

// YouTube URL থেকে Embed URL বানানোর ফাংশন (BuyerProtection থেকে কপি করা)
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^?&"'>]+)/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }
  return "";
};

// Skeleton for loading state
const FashionIntroSkeleton = () => (
  <section className="w-full bg-white py-14 px-5 md:px-10 lg:px-20">
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-12">
      {/* Left: Video Skeleton */}
      <div className="w-full md:w-1/2 flex">
        <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-full rounded-md overflow-hidden bg-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-400/60 rounded-full p-8">
              <div className="w-16 h-16 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Text Skeleton */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-48 mx-auto md:mx-0" />
          <div className="h-10 bg-gray-300 rounded w-full mx-auto md:mx-0" />
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto md:mx-0" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
          <div className="h-12 bg-gray-300 rounded w-32" />
          <div className="h-12 bg-gray-300 rounded w-32" />
        </div>
      </div>
    </div>
  </section>
);

export default function FashionIntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = useVideoSectionHomeQuery();
  const videos = data?.data || [];
  const homeVideo = videos.find((video: any) => video.status === "active");

  // Loading state
  if (isLoading) return <FashionIntroSkeleton />;

  if (isError || !homeVideo) return null;

  return (
    <section className="w-full bg-white py-14 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-12">
        {/* === Left: Video Thumbnail with Modal === */}
        <div className="w-full md:w-1/2 flex">
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative w-full aspect-[16/9] md:aspect-auto md:h-full rounded-md overflow-hidden cursor-pointer group"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${homeVideo.imageUrl}`}
              alt={homeVideo.title || "Fashion Intro Video"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white bg-black/60 rounded-full p-6 transition-all duration-300 group-hover:bg-black group-hover:scale-125">
                <PlayCircleOutlined className="text-5xl" />
              </div>
            </div>
          </div>
        </div>

        {/* === Right: Text Section === */}
        <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
          <div>
            <p className="uppercase tracking-wider text-sm text-[#777] text-center mb-2">
              Handcrafted With Integrity
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#242424] leading-snug mb-4">
              Discover fashion and style on our online store.
            </h2>

            <p className="text-[14px] font-bold text-[#777] mb-3 mt-15 text-center">
              TASA is a premium leather brand from Bangladesh,
            </p>

            <p className="text-[#777] text-[14px] mb-6 mt-5 text-center">
              that specializes in fashion design. Our focus on quality and craftsmanship shines through in every product we make, as we use only the finest full-grain leathers. Whether you're looking for a stylish new accessory or a durable, long-lasting piece, TASA has you covered. Explore our collection today and experience the luxury of genuine leather.
            </p>
          </div>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-center mt-6 md:mt-auto">
            <button
              className="cursor-pointer uppercase text-[13px] font-semibold px-8 py-3 min-h-[42px]
              bg-[rgba(0,0,0,0.68)] text-white border border-white 
              hover:bg-[rgba(0,0,0,0.85)] hover:shadow-lg 
              transition-all duration-300"
            >
              Shop Now
            </button>

            <button
              className="cursor-pointer uppercase text-[13px] font-semibold px-8 py-3 min-h-[42px]
              bg-white text-[#1a1a1a] border border-[#1a1a1a]
              hover:bg-[#1a1a1a] hover:text-white hover:shadow-lg
              transition-all duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Video Playback */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        centered
        width={900}
        closeIcon={null}
        styles={{
          body: { padding: 0, background: "#000" },
        }}
      >
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={getYouTubeEmbedUrl(homeVideo.videoUrl)}
            title="Fashion Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </Modal>
    </section>
  );
}