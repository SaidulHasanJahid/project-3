/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    domains: [
      "eco.rafiinternational.com",
      "unsplash.it",
      "source.unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "via.placeholder.com",
      'picsum.photos',
      'api.eyniyl.com',
      'remotePatterns: [new URL(https://api.eyniyl.com)]',
      'eco.rafiinternational.com', 'api.eyniyl.com', 
    ],
  },
};

export default nextConfig;

