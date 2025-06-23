"use client";
import Image from "next/image";
import './best.css'

export default function BestMonthOffer() {
  return (
    <section className="px-4 mt-[50px] md:px-16 py-10 bg-white cursor-pointer">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Best Month Offer</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[18px] font-normal">
          Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum
          tristique lobortis lectus magnis. Consequat.
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* 1st Card - Men Collection */}
        <div
          className="
            group relative overflow-hidden rounded-lg h-[500px]
            md:col-span-2
            lg:col-span-2
            order-1
          "
        >
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306363884png.png"
            alt="Men Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 flex justify-end items-center p-4 sm:p-10">
            <div className="relative w-full sm:max-w-md px-10 py-6">
              <div className="absolute top-0 bottom-0 right-0 w-[60%] h-[300px] border-t-2 border-b-2 border-r-2 border-orange-500 pointer-events-none"></div>
              <div className="relative z-10 text-right">
                <p className="text-sm font-semibold tracking-[3px] text-[#f3612e] uppercase">
                  SALE UP TO 30%
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-6 leading-snug">
                  MEN COLLECTION
                </h3>
                <p className="text-sm text-gray-700 mt-4 uppercase">New Autumn Arrival 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Card - EXO Travel Bags */}
        <div
          className="
            group relative overflow-hidden rounded-lg h-[500px]
            order-2
          "
        >
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306365085png.png"
            alt="EXO Travel Bags"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="card-text-container absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
            <p className="text-sm font-semibold tracking-wider">SALE UP TO 50%</p>
            <h3 className="mt-2 text-[30px] font-bold w-[190px]">EXO TRAVEL BAGS</h3>
            <p className="mt-1 text-[18px] font-semibold">BAGS AND SHOES</p>
          </div>
        </div>

        {/* 3rd Card - New Arrivals */}
        <div
          className="
            group relative overflow-hidden rounded-lg h-[500px]
            order-3
          "
        >
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306009486png.png"
            alt="New Arrivals"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute top-4 left-5 text-left p-4 leading-[30px]">
            <p className="text-sm text-gray-700 font-semibold tracking-wider text-[18px]">
              SALE UP TO 70%
            </p>
            <h3 className="text-xl font-bold mt-5 text-gray-900 text-[30px]">NEW ARRIVALS</h3>
            <p className="text-sm text-gray-600 mt-6 font-semibold text-[18px]">Casual Shoes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
