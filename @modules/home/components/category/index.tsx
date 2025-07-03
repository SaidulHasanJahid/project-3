"use client";

import Image from "next/image";

type Category = {
  title: string;
  count: number;
  image: string;
};

const categories: Category[] = [
  {
    title: "Electronic",
    count: 13,
    image:
      "https://eco.rafiinternational.com/assets/images/categories/1663059283category-12png.png",
  },
  {
    title: "Fashion & Beauty",
    count: 9,
    image:
      "https://eco.rafiinternational.com/assets/images/categories/1663059291category-10png.png",
  },
  {
    title: "Camera & Photo",
    count: 0,
    image:
      "https://eco.rafiinternational.com/assets/images/categories/1663059299category-13png.png",
  },
  {
    title: "Smart Phone & Table",
    count: 1,
    image:
      "https://eco.rafiinternational.com/assets/images/categories/1663059270category-11png.png",
  },
  {
    title: "Sport & Outdoor",
    count: 1,
    image:
      "https://eco.rafiinternational.com/assets/images/categories/1663059162category-13png.png",
  },
  {
    title: "Jewelry & Watches",
    count: 0,
    image: "https://unsplash.it/400/500?image=60",
  },
];

export default function FirstCard() {
  return (
    <section className=" bg-white px-[70px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* <div className="flex flex-wrap justify-center gap-6"> */}
        {categories.map((item, id) => (
          <div
            key={id}
            className={`
              cursor-pointer group rounded shadow-md overflow-hidden
              transition duration-500 ease-in-out
              relative

            `}
          >
            <Image
              src={item.image}
              alt={item.title}
              height={400}
              width={358}
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[75px] w-[90%] bg-white text-center py-2 px-3 rounded shadow-md transition-all duration-500 ease-in-out group-hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
              <p className="text-gray-500">({item.count})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
