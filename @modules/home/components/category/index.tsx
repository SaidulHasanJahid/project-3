'use client';

import Image from 'next/image';

type Category = {
  title: string;
  count: number;
  image: string;
};

const categories: Category[] = [
  {
    title: 'Electronic',
    count: 13,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059283category-12png.png',
  },
  {
    title: 'Fashion & Beauty',
    count: 9,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059291category-10png.png',
  },
  {
    title: 'Camera & Photo',
    count: 0,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059299category-13png.png',
  },
  {
    title: 'Smart Phone & Table',
    count: 1,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059270category-11png.png',
  },
  {
    title: 'Sport & Outdoor',
    count: 1,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059162category-13png.png',
  },
  {
    title: 'Jewelry & Watches',
    count: 0,
    image: 'https://unsplash.it/400/500?image=60',
  },
];

export default function FirstCard() {
  return (
    <section className="w-full bg-white py-10 px-[20px] sm:px-[40px] lg:px-[60px]">
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((item, id) => (
          <div
            key={id}
            className={`
              cursor-pointer group rounded shadow-md overflow-hidden
              transition duration-500 ease-in-out
              relative

              /* Base: < 765px — 2 per row */
              w-[47%] h-[230px]

              /* 370px – 460px: 1 per row, full width */
              [@media_(min-width:370px)_and_(max-width:460px)]:w-full

              /* 765px – 1200px: 3 per row */
              [@media_(min-width:765px)_and_(max-width:1200px)]:w-[30%]
              [@media_(min-width:765px)_and_(max-width:1200px)]:h-[408px]

              /* > 1200px: all in 1 row */
              [@media_(min-width:1201px)]:w-[358px]
              [@media_(min-width:1201px)]:h-[408px]
            `}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 358px"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 h-[75px] w-[90%] bg-white text-center py-2 px-3 rounded shadow-md transition-all duration-500 ease-in-out group-hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
              <p className="text-gray-500">({item.count})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
