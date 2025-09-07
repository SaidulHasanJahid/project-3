"use client";

import ProductCard from "@/@modules/@common/cards/product-card";
import { useGetProductByCategoryQuery } from "@/appstore/products/api";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Your original array
type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  isNew: boolean;
  discount: string | null;
  category_id: number;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  gallery_images: { image_src: string }[];
};
const baseProducts: Product[] = [
  {
    id: 1,
    title: "Physical Product Title will be here",
    slug: "physical-product-title-will-be-here",
    price: 345,
    oldPrice: null,
    rating: 4.5,
    reviews: 10,
    isNew: true,
    discount: null,
    category_id: 2,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/16750533159Lyq1YHG.jpg",
    image1: "https://source.unsplash.com/random/400x400?product1",
    image2:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image3:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 2,
    title: "Physical Product Title will Be Here 102",
    slug: "physical-product-title-will-be-here-102",
    price: 105,
    oldPrice: 205,
    rating: 4.2,
    reviews: 7,
    isNew: true,
    discount: "-49%",
    category_id: 2,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013376Q0pmYfnP.jpg",
    image1: "https://source.unsplash.com/random/400x400?product4",
    image2: "https://source.unsplash.com/random/400x400?product5",
    image3: "https://source.unsplash.com/random/400x400?product6",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 3,
    title: "Top Rated product title will be here according to ...",
    slug: "top-rated-product-title-will-be-here-according-to",
    price: 100,
    oldPrice: 506,
    rating: 4.8,
    reviews: 21,
    isNew: true,
    discount: "-80%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013448fKLXa8ZZ.jpg",
    image1: "https://source.unsplash.com/random/400x400?product7",
    image2: "https://source.unsplash.com/random/400x400?product8",
    image3: "https://source.unsplash.com/random/400x400?product9",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 4,
    title: "Revel - Real Estate Huuu",
    slug: "revel-real-estate-huuu",
    price: 315,
    oldPrice: 360,
    rating: 4.0,
    reviews: 3,
    isNew: true,
    discount: "-13%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013500IhrIbnTy.jpg",
    image1: "https://source.unsplash.com/random/400x400?product10",
    image2: "https://source.unsplash.com/random/400x400?product11",
    image3: "https://source.unsplash.com/random/400x400?product12",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 5,
    title: "Elegant Summer Hat",
    slug: "elegant-summer-hat",
    price: 45,
    oldPrice: 60,
    rating: 4.6,
    reviews: 5,
    isNew: true,
    discount: "-25%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378035XJWgisPU.jpg",
    image1: "https://source.unsplash.com/random/400x400?product13",
    image2: "https://source.unsplash.com/random/400x400?product14",
    image3: "https://source.unsplash.com/random/400x400?product15",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 6,
    title: "Stylish Sneakers",
    slug: "stylish-sneakers",
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    reviews: 18,
    isNew: true,
    discount: "-20%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378156sxEgX2Pk.jpg",
    image1: "https://source.unsplash.com/random/400x400?product16",
    image2: "https://source.unsplash.com/random/400x400?product17",
    image3: "https://source.unsplash.com/random/400x400?product18",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 7,
    title: "Modern Glasses",
    slug: "modern-glasses",
    price: 80,
    oldPrice: 110,
    rating: 4.3,
    reviews: 9,
    isNew: true,
    discount: "-27%",
    category_id: 2,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378418BxWim5Uq.jpg",
    image1: "https://source.unsplash.com/random/400x400?product19",
    image2:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image3:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 8,
    title: "Stylish Backpack",
    slug: "stylish-backpack",
    price: 150,
    oldPrice: 180,
    rating: 4.4,
    reviews: 12,
    isNew: true,
    discount: "-16%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392364Li5C3bEO.jpg",
    image1:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image2:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image3:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 9,
    title: "Cool Jacket for Men",
    slug: "cool-jacket-for-men",
    price: 200,
    oldPrice: 280,
    rating: 4.1,
    reviews: 20,
    isNew: true,
    discount: "-29%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/16393924528O19PHvm.jpg",
    image1:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image2:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    image3:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 10,
    title: "Vintage Camera Model",
    slug: "vintage-camera-model",
    price: 300,
    oldPrice: 350,
    rating: 4.9,
    reviews: 8,
    isNew: true,
    discount: "-14%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639456386BpfFKqHN.jpg",
    image1: "https://source.unsplash.com/random/400x400?camera",
    image2: "https://source.unsplash.com/random/400x400?camera2",
    image3: "https://source.unsplash.com/random/400x400?camera3",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 11,
    title: "Wireless Earbuds",
    slug: "wireless-earbuds",
    price: 90,
    oldPrice: 130,
    rating: 4.3,
    reviews: 14,
    isNew: true,
    discount: "-31%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392738TGJsX6up.jpg",
    image1: "https://source.unsplash.com/random/400x400?earbuds",
    image2: "https://source.unsplash.com/random/400x400?earbuds2",
    image3: "https://source.unsplash.com/random/400x400?earbuds3",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  {
    id: 12,
    title: "Smart Watch Series 5",
    slug: "smart-watch-series-5",
    price: 180,
    oldPrice: 220,
    rating: 4.5,
    reviews: 19,
    isNew: true,
    discount: "-18%",
    category_id: 3,
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392531mZxqr9sa.jpg",
    image1: "https://source.unsplash.com/random/400x400?watch",
    image2: "https://source.unsplash.com/random/400x400?watch2",
    image3: "https://source.unsplash.com/random/400x400?watch3",
    gallery_images: [
      {
        image_src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
      },
      {
        image_src:
          "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60",
      },
      {
        image_src:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
];

export default function ProductArea() {
  const [sort, setSort] = useState("latest");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();

  const { slug } = params;
  const { data: productsData, isFetching } = useGetProductByCategoryQuery(
    slug,
    {
      skip: !slug,
    }
  );

  const products = productsData?.data || [];

  const itemsPerPage = 12;

  const sorted = [...baseProducts].sort((a, b) => {
    if (sort === "latest") return b.id - a.id;
    if (sort === "oldest") return a.id - b.id;
    if (sort === "high") return b.price - a.price;
    if (sort === "low") return a.price - b.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;

  const goPage = (p: number) => {
    if (p >= 1 && p <= totalPages) setCurrentPage(p);
  };

  return (
    <div className="min-h-screen md:w-[1100px] lg:w-[1100px] px-4 py-6">
      {/* Header */}
      <div className=" mx-auto md:h-[40px] lg:h-[40px] z-20 p-8 bg-[#f8f8f8] flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-[15px] text-[#141629] font-semibold">Products</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="flex items-center gap-1 border z-20  py-1 bg-white h-[40px] shadow  text-[#767678] w-[148px] pl-10 cursor-pointer rounded-full border-none  "
              onClick={() => setDropdownOpen((o) => !o)}
            >
              {sort} <FaChevronDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute z-20 right-0 mt-1 bg-white w-[140px] rounded text-[15px] text-[#767678] shadow ">
                {["latest", "oldest", "high", "low"].map((v) => (
                  <div
                    key={v}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                    onClick={() => {
                      setSort(v);
                      setDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                  >
                    {v.replace(/^(.)/, (s) => s.toUpperCase())}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product: any) => {
          return (
            <div className="" key={product.id}>
              <ProductCard key={product.id} productsItem={product} />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => goPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full border disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goPage(i + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full border disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
