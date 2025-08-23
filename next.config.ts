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
      "picsum.photos",
      "api.eyniyl.com",
      "placehold.co",
    ],
    // Optional: remotePatterns use korte chao
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'api.eyniyl.com',
    //   },
    // ],
  },
};

export default nextConfig;
