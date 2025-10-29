'use client';

import Image from 'next/image';
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function LatestPost() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 px-4">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#141926] mb-4">
          Latest Post
        </h2>
        <p className="text-[#767678] text-[15px] sm:text-[16px] md:text-[17px] font-medium">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse enim.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-2 
          gap-6 sm:gap-8 md:gap-10 
          max-w-7xl w-[90%] mx-auto
        "
      >
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-sm">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/164543402825png.png"
              alt="Post 1"
              width={400}
              height={250}
              className="w-full h-[160px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center mt-4 sm:mt-6 px-2">
            <h3 className="font-bold text-[16px] sm:text-[20px] md:text-[24px] text-gray-900 mb-1 sm:mb-2">
              How to design effective arts?
            </h3>
            <p className="text-[12px] sm:text-[13px] md:text-sm text-gray-500 mb-2 sm:mb-4">
              03 JAN, 2019
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-[13px] font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="mt-[2px]" />
              <span className="text-[13px] sm:text-[15px] text-[rgb(27,27,30)]">READ MORE</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-sm">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/16454339504png.png"
              alt="Post 2"
              width={400}
              height={250}
              className="w-full h-[160px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center mt-4 sm:mt-6 px-2">
            <h3 className="font-bold text-[16px] sm:text-[20px] md:text-[24px] text-gray-900 mb-1 sm:mb-2">
              How to design effective arts?
            </h3>
            <p className="text-[12px] sm:text-[13px] md:text-sm text-gray-500 mb-2 sm:mb-4">
              03 JAN, 2019
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-[13px] font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="mt-[2px]" />
              <span className="text-[13px] sm:text-[15px] text-[rgb(27,27,30)]">READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
