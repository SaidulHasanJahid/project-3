import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "via.placeholder.com",
      "picsum.photos",
      "api.eyniyl.com",
      "placehold.co",
      "cdn.pixabay.com",
      "tasa.com.bd",
      "eco.rafiinternational.com",
      "i.ibb.co", // ✅ wallet images
      "clinicmaster.goeasyapp.com", // ✅ added for your drawer/cart product images
    ],
  },
};

export default nextConfig;
