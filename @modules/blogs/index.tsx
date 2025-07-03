'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/164543402825png.png",
  },
  {
    id: 2,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/16454339504png.png",
  },
  {
    id: 3,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/16454333771572852720blog1png.png",
  },
  {
    id: 4,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/16454334471572852760blog7png.png",
  },
  {
    id: 5,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/16454333931572852725blog2jpg.jpg",
  },
  {
    id: 6,
    title: "How to design effective arts?",
    date: "Jan 03 - 2019",
    image: "https://eco.rafiinternational.com/assets/images/blogs/164543351615542698954-minjpg.jpg",
  },
];

const BlogCard = ({ title, image, date }: BlogPost) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col sm:flex-row gap-4 w-full pb-6 cursor-pointer "
  >
    <div className="w-full sm:w-1/2">
      <div className="relative w-full h-[260px] sm:h-full aspect-[3/2] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </div>
    <div className="w-full sm:w-1/2 flex flex-col ">
      <h3 className="text-[24px] sm:text-2xl font-semibold text-[#1b1b1e] hover:text-blue-600 cursor-pointer transition">
        {title}
      </h3>
      <p className="text-[15px] sm:text-base text-[#767678] mt-4">
        The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter...
      </p>
      <p className="text-[15px] text-[#767678] mt-2">{date}</p>
    </div>
  </motion.div>
);

export default function BlogPage() {
  return (

    <>
    {/* Header Banner */}
      <div
        className="w-full h-[150px] sm:h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
        <p className="text-sm mt-1">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Blog
        </p>
      </div>
    
    <div className="container">
      

      {/* Main Container */}
      <div className="w-full flex justify-center px-4 py-10">
        <div className="flex flex-col lg:flex-row w-full max-w-[1240px] gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[580px] bg-[#F8F8F8] p-6 text-[#767678] text-[15px] space-y-10 rounded-md">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search Here"
                className=" px-4 py-2 border border-gray-300 rounded-sm  placeholder:text-[#767678] focus:outline-none w-full h-[48px]"
              />
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[#141926] text-[18px] font-bold mb-4">
                CATEGORIES
                <span className="block w-[30px] h-[3px] bg-[#141926] mt-1" />
              </h4>
              <ul>
                {[
                  "Web Services (7)",
                  "Business Philosophy (7)",
                  "Business Help (0)",
                  "Random Thoughts (0)",
                  "Mechanical (0)",
                  "Entrepreneurs (1)",
                  "Technology (0)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="py-2 border-b border-gray-200 hover:text-blue-600 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-[#141926] text-[18px] font-bold mb-4">
                RECENT POST
                <span className="block w-[30px] h-[3px] bg-[#141926] mt-1" />
              </h4>
              <ul>
                {blogPosts.slice(0, 4).map((post) => (
                  <li key={post.id} className="py-2 border-b border-gray-200">
                    <p className="hover:text-blue-600 cursor-pointer">{post.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-[#141926] text-[18px] font-bold mb-4">
                TAGS
                <span className="block w-[30px] h-[3px] bg-[#141926] mt-1" />
              </h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Business", "Research", "Mechanical", "Process", "Innovation", "Engineering"].map(tag => (
                  <span
                    key={tag}
                    className="border px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="w-full flex flex-col gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
