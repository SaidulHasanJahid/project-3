'use client';

import Image from 'next/image';
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function LatestPost() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#141926] mb-4">
          Latest Post
        </h2>
        <p className="text-[#767678] text-[16px] sm:text-[17px] font-medium">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse enim.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-[90%] mx-auto">
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-sm">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/164543402825png.png"
              alt="Post 1"
              width={500}
              height={300}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-bold text-[24px] sm:text-[30px] text-gray-900 mb-2">
              How to design effective arts?
            </h3>
            <p className="text-sm text-gray-500 mb-4">03 JAN, 2019</p>
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="mt-[2px]" />
              <span className="text-[15px] text-[rgb(27,27,30)]">READ MORE</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-sm">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/16454339504png.png"
              alt="Post 2"
              width={500}
              height={300}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-bold text-[24px] sm:text-[30px] text-gray-900 mb-2">
              How to design effective arts?
            </h3>
            <p className="text-sm text-gray-500 mb-4">03 JAN, 2019</p>
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="mt-[2px]" />
              <span className="text-[15px] text-[rgb(27,27,30)]">READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
