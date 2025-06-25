'use client';

import Image from 'next/image';

export default function InfoBanner() {
  const items = [
    {
      image: 'https://eco.rafiinternational.com/assets/images/services/1667473770badgepng.png',
      title: 'Manage Quality',
      desc: 'Best Quality Gaurentee',
    },
    {
      image: 'https://eco.rafiinternational.com/assets/images/services/1667473742carts1png.png',
      title: 'Win $100 To Shop',
      desc: 'Enter Now',
    },
    {
      image: 'https://eco.rafiinternational.com/assets/images/services/1667473728customer-service-agentpng.png',
      title: 'Best Online Support',
      desc: 'Hour: 10:00AM - 5:00PM',
    },
    {
      image: 'https://eco.rafiinternational.com/assets/images/services/1667473683money-bagpng.png',
      title: 'Money Gurantee',
      desc: 'With A 30 Days',
    },
  ];

  return (
    <div className="w-full md:ml-[0px] bg-white py-6 px-4 md:px-10 lg:px-20 mt-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="min-w-[50px]">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-semibold text-black">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
