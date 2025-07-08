'use client';

import { useState,  } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    title: 'Physical Product Title will be here',
    price: 45,
    oldPrice: 543,
    discount: 92,
    rating: 4.2,
    image: 'https://eco.rafiinternational.com/assets/images/products/1675053446iCxPWgtT.png',
  },
  {
    title: 'Physical Product Title Title will Be Here 99',
    price: 34,
    oldPrice: 99,
    discount: 66,
    rating: 4.7,
    image: 'https://eco.rafiinternational.com/assets/images/products/1675053315Z9yfuKPk.png',
  },
  {
    title: 'Top Rated product title will be here according to your wish 123',
    price: 80,
    oldPrice: 129,
    discount: 38,
    rating: 3.9,
    image: 'https://eco.rafiinternational.com/assets/images/products/1639377187LerG6ypK.png',
  },
  {
    title: 'Zain - Digital Agency and Startup HTML Template',
    price: 20,
    oldPrice: 35,
    discount: 42,
    rating: 4.5,
    image: 'https://eco.rafiinternational.com/assets/images/products/1648013375aGqS3Zgd.png',
  },
  {
    title: 'Top Rated product title will be here according to your wish 123',
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 4.8,
    image: 'https://eco.rafiinternational.com/assets/images/products/16480134488OmlUgJN.png',
  },
  {
    title: 'Physical Product Title will be here',
    price: 45,
    oldPrice: 543,
    discount: 92,
    rating: 4.2,
    image: 'https://eco.rafiinternational.com/assets/images/products/1639377739mqNT2g2x.png',
  },
  {
    title: 'Physical Product Title Title will Be Here 99',
    price: 34,
    oldPrice: 99,
    discount: 66,
    rating: 4.7,
    image: 'https://eco.rafiinternational.com/assets/images/products/1648013500i2EEZrBt.png',
  },
  {
    title: 'Top Rated product title will be here according to your wish 123',
    price: 80,
    oldPrice: 129,
    discount: 38,
    rating: 3.9,
    image: 'https://eco.rafiinternational.com/assets/images/products/1648013669fVYfMbbZ.png',
  },
  {
    title: 'Zain - Digital Agency and Startup HTML Template',
    price: 20,
    oldPrice: 35,
    discount: 42,
    rating: 4.5,
    image: 'https://eco.rafiinternational.com/assets/images/products/1639392531ypne3xL8.png',
  },
];

export default function ProductSwiper() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % products.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0 ? products.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const visible =
    currentProducts.length < itemsPerPage
      ? [...currentProducts, ...products.slice(0, itemsPerPage - currentProducts.length)]
      : currentProducts;

  return (
    <div className="w-full text-[14px] mt-10">
      {/* Header */}
      <div className="flex justify-between text-[#1B1B1E] text-[18px] items-center border-b pb-2 font-bold">
        <span>Seller&apos;s Product</span>
        <div className="text-xs font-bold space-x-3">
          <button
            onClick={handlePrev}
            className="text-gray-500 text-[16px] hover:text-black hover:font-bold cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="text-[#1B1B1E] text-[16px] hover:text-black hover:font-bold cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      {/* Swiper with 1 Slide that updates every 3 products */}
      <Swiper
        slidesPerView={1}
        direction="vertical"
        allowTouchMove={false}
        speed={500}
        modules={[Navigation]}
        className="mt-4"
      >
        <SwiperSlide>
          <div className="space-y-4 transition-all duration-500">
            {visible.map((product, index) => (
              <div
                key={index}
                className="flex h-[155px] gap-4 cursor-pointer pb-4 rounded-md p-2 hover:shadow bg-white transition transform hover:scale-[1.02]"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={98}
                  height={98}
                  className="rounded object-cover border w-[98px] h-[98px]"
                />
                <div className="flex-1">
                  <h4 className="text-[#141926] text-[16px] font-medium">
                    {product.title}
                  </h4>
                  <div className="flex gap-2 items-center mt-1 text-sm">
                    {product.oldPrice > 0 && (
                      <span className="line-through text-gray-500">
                        {product.oldPrice} ৳
                      </span>
                    )}
                    <span className="font-bold">{product.price} ৳</span>
                    {product.discount > 0 && (
                      <span className="text-white bg-red-500 px-2 py-0.5 text-xs rounded">
                        {product.discount}% off
                      </span>
                    )}
                  </div>
                  <div className="flex text-xs mt-1 text-gray-500 items-center">
                    <FaStar className="text-yellow-500 mr-1 text-[14px]" />
                    <span>{product.rating.toFixed(1)} (0)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
