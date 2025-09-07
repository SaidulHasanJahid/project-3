"use client";

import { useFeatureCategoryQuery } from "@/appstore/home/home-api";
import { baseUrl } from "@/utils/url";
import Image from "next/image";
import Link from "next/link";

type Category = {
  id?: number;
  count: number;
  image?: string;
  name: string;
  slug: string;
  parent_id: number;
  is_feature?: boolean;
  is_menu?: boolean;
};

export default function CategoryCard() {
  const { data: featureCategories } = useFeatureCategoryQuery();

  return (
    <section className="bg-white px-[70px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {featureCategories?.length > 0 ? (
          featureCategories?.map((item: any, index: any) => {
            const imageUrl = item.image
              ? `${baseUrl}/${item.image}`
              : "https://placehold.co/281x359?text=No+Image";

            console.log("imageUrl", item);

            return (
              <Link
                href={`/products-by-category/${item.slug}`}
                key={`${item.slug}-${index}`}
              >
                <div className="cursor-pointer group rounded shadow-md overflow-hidden transition duration-500 ease-in-out relative w-[281px] h-[359px]">
                  <Image
                    src={imageUrl}
                    alt={item.name}
                    width={281}
                    height={359}
                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[75px] w-[90%] bg-white text-center py-2 px-3 rounded shadow-md transition-all duration-500 ease-in-out group-hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-900 mt-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">{item.count ?? 0}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </section>
  );
}
