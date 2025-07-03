"use client";
import { GalleryType } from "@/types/types";
import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PropsType {
  galleryImages: GalleryType[];
}
const ProductGallery = ({ galleryImages }: PropsType) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image index
  const swiperRef = useRef<any>(null); // Reference to the Swiper instance
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index); // Update the selected image index
    swiperRef.current.swiper.slideTo(index); // Update the main image to the clicked thumbnail
  };
  return (
    <div>
      <div>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          loop={true}
          initialSlide={selectedImageIndex} // Ensure the main image corresponds to the selected thumbnail
        >
          {galleryImages.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Image
                  src={item?.image_src}
                  alt={`Product Image ${idx}`}
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex gap-2 mt-4">
          {galleryImages.map((item, idx) => (
            <Image
              key={idx}
              src={item?.image_src}
              alt={`Thumb ${idx}`}
              width={100}
              height={100}
              className={`border-2 border-transparent rounded cursor-pointer ${
                selectedImageIndex === idx ? " !border-blue-500" : ""
              }`} // Highlight the selected thumbnail
              onClick={() => handleThumbnailClick(idx)} // Update selected image index on click
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
