'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';


interface Props {
  params: {
    slug: string;
    image: string;
    image1: string;
    image2: string;
    price: number;
    oldPrice: number | null;
    discount: number | null;
    rating: number;
  };
}



export default function ProductPage({ params }: Props) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { slug, image, image1 , image2 , image3 ,price, oldPrice,discount,rating  } = params;

    const productImages = [image, image1, image2, image3];
console.log(productImages);

  return (
    <>
      {/* Product Section */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images */}
        <div>
          <Swiper navigation modules={[Navigation]} className="rounded border">
            {productImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={src}
                  alt={`Product Image ${idx}`}
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-2 mt-4">
            {productImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Thumb ${idx}`}
                width={60}
                height={60}
                className="border-2 border-orange-500 rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">
           { slug }
          </h1>
          <div className="flex items-center text-yellow-500">
            {Array(5).fill(null).map((_, idx) => <AiFillStar key={idx} />)}
            <span className="ml-2 text-sm text-gray-600">(681 Ratings | 44 Answered Questions)</span>
          </div>
          <p className="text-sm text-gray-700">
            Brand: <span className="text-blue-600">No Brand</span>
          </p>

          <div>
            <p className="text-2xl font-bold text-red-600">৳ 181</p>
            <p className="text-sm text-gray-500 line-through">
              ৳ 450 <span className="text-green-600">-60%</span>
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Color family</p>
            <div className="border border-orange-500 text-orange-500 inline-block px-3 py-1 rounded text-sm">
              Multicolor
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <p>Quantity</p>
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-200 rounded"
            >-</button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-12 text-center border rounded"
            />
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >+</button>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
              Buy Now
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

 
    </>
  );
}
