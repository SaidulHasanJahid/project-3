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
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="w-[250px] h-[250px] mb-2 flex items-center justify-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[250px] h-[250px] object-contain"
              />
            </div>
            <p className="text-lg font-medium text-gray-900 ]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
