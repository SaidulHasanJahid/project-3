import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "api.eyniyl.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "tasa.com.bd" },
      { protocol: "https", hostname: "eco.rafiinternational.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "clinicmaster.goeasyapp.com" },

      // তোমার API
      {
        protocol: "https",
        hostname: "grocery.reclinerbdking.com",
        pathname: "/uploads/**",
      },
{
  protocol: "https",
  hostname: "grocery.reclinerbdking.com",
},
{
  protocol: "https",
  hostname: "tasa.com.bd",
},
      // 🔹 Amazon images (latest error fix)
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "media-amazon.com" },

      { protocol: "https", hostname: "www.decorilla.com" },
      { protocol: "https", hostname: "roomanddecor.com" },
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/images/**" },
    ],
  },
};

export default nextConfig;