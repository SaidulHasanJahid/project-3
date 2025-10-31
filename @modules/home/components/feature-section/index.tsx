"use client";

import React from "react";

interface Feature {
  id: number;
  icon: string;
  title: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "https://tasa.com.bd/wp-content/uploads/2023/05/e-1-250x250.png",
    title: "Natural & Sustainable Materials",
  },
  {
    id: 2,
    icon: "https://tasa.com.bd/wp-content/uploads/2023/05/e-3-250x250.png",
    title: "1 Year Warranty",
  },
  {
    id: 3,
    icon: "https://tasa.com.bd/wp-content/uploads/2023/05/e-2-250x250.png",
    title: "Honest Pricing",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="w-full py-10 bg-white overflow-x-auto mt-[-50px]">
      {/* Wrapper with horizontal scroll on small devices */}
      <div className="flex items-center justify-center gap-10 sm:gap-16 lg:gap-24 px-4 sm:px-10 lg:px-20 min-w-max lg:min-w-0">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-between flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center mb-2">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] object-contain"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 text-center">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
