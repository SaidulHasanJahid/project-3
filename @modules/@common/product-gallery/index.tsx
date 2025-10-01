// "use client";
// import { GalleryType } from "@/types/types";
// import { baseUrl } from "@/utils/url";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// interface PropsType {
//   galleryImages: GalleryType[];
// }
// const ProductGallery = ({ galleryImages }: PropsType) => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image index
//   const swiperRef = useRef<any>(null); // Reference to the Swiper instance
//   const handleThumbnailClick = (index: number) => {
//     setSelectedImageIndex(index); // Update the selected image index
//     swiperRef.current.swiper.slideTo(index); // Update the main image to the clicked thumbnail
//   };
//   return (
//     <div>
//       <div>
//         <Swiper
//           ref={swiperRef}
//           spaceBetween={10}
//           slidesPerView={1}
//           navigation={false}
//           modules={[Navigation]}
//           pagination={{ clickable: true }}
//           loop={true}
//           initialSlide={selectedImageIndex} // Ensure the main image corresponds to the selected thumbnail
//         >
//           {galleryImages?.length > 0 &&
//             galleryImages.map((item:any, idx:any) => {
//               return (
//                 <SwiperSlide key={idx}>
//                   <Image
//                     src={`${baseUrl}/${item?.image_url}`}
//                     alt={`Product Image ${idx}`}
//                     width={500}
//                     height={500}
//                     className="w-full h-[400px] object-cover rounded-lg"
//                   />
//                 </SwiperSlide>
//               );
//             })}
//         </Swiper>
//         <div className="flex gap-2 mt-4">
//           {galleryImages.map((item:any, idx:any) => (
//             <Image
//               key={idx}
//               src={`${baseUrl}/${item?.image_url}`}
//               alt={`Thumb ${idx}`}
//               width={100}
//               height={100}
//               className={`border-2 border-transparent rounded cursor-pointer ${
//                 selectedImageIndex === idx ? " !border-blue-500" : ""
//               }`} // Highlight the selected thumbnail
//               onClick={() => handleThumbnailClick(idx)} // Update selected image index on click
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;
"use client";
import { GalleryType } from "@/types/types";
import { baseUrl } from "@/utils/url";
import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface PropsType {
  galleryImages: GalleryType[];
}

const ProductGallery = ({ galleryImages }: PropsType) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const swiperRef = useRef<any>(null);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", // zoom level
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };

  return (
    <div>
      {/* Main Image with Hover Zoom */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg ">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          modules={[Navigation]}
          loop={true}
          initialSlide={selectedImageIndex}
        >
          {galleryImages?.length > 0 &&
            galleryImages.map((item: any, idx: any) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-[400px] overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={`${baseUrl}/${item?.image_url}`}
                    alt={`Product Image ${idx}`}
                    width={500}
                    height={500}
                    className="w-full h-[400px] object-contain transition-transform duration-300 ease-in-out"
                    style={zoomStyle}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {galleryImages.map((item: any, idx: any) => (
          <Image
            key={idx}
            src={`${baseUrl}/${item?.image_url}`}
            alt={`Thumb ${idx}`}
            width={100}
            height={100}
            className={`border-2 border-transparent rounded cursor-pointer ${
              selectedImageIndex === idx ? "!border-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
