"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TABS = ["Description", "Buy / Return Policy", "Reviews", "Comments"];

const TAB_CONTENT = [
  `Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam erat volutpat. Duis quam tellus, ullamcorper at tristique ac, viverra at diam. Donec egestas eu odio tincidunt ultrices. Suspendisse egestas vulputate mauris non commodo. In convallis aliquam vulputate. Quisque varius est ac lorem venenatis lobortis. Fusce a iaculis mi, ut elementum ex. Mauris faucibus enim quis lacinia mollis. Vivamus in volutpat ante. Nullam nec vulputate mi. Fusce tempor cursus odio, nec cursus purus malesuada sit amet. Aliquam ultricies Fusce vitae lacinia mauris, eget vehicula augue. Phasellus efficitur felis non ligula dictum, sit amet faucibus nulla sollicitudin. Donec condimentum metus enim, id molestie urna ultrices sed. Nunc rhoncus purus venenatis nulla efficitur, a ultrices elit ornare. Donec vitae congue ante. Sed eleifend ex sit amet odio vestibulum, ac sagittis quam finibus. Ut egestas sit amet urna eu blandit. Duis iaculis ante vitae risus condimentum, vitae laoreet sem dapibus. Aliquam ultricies risus quis sagittis fermentum. Suspendisse interdum magna erat, viverra elementum sem sollicitudin eget Aliquam ultricies Fusce vitae lacinia mauris, eget vehicula augue. Phasellus efficitur felis non ligula dictum, sit amet faucibus nulla sollicitudin. Donec condimentum metus enim, id molestie urna ultrices sed. Nunc rhoncus purus venenatis nulla efficitur, a ultrices elit ornare. Donec vitae congue ante. Sed eleifend ex sit amet odio vestibulum, ac sagittis quam finibus. Ut egestas sit amet urna eu blandit. Duis iaculis ante vitae risus condimentum, vitae laoreet sem dapibus. Aliquam ultricies risus quis sagittis fermentum. Suspendisse interdum magna erat, viverra elementum sem sollicitudin eget.`,
  `This is the content for "Buy / Return Policy". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet nisi sed augue tincidunt, non bibendum metus ullamcorper.`,
  `This is the content for "Reviews". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet nisi sed augue tincidunt, non bibendum metus ullamcorper.`,
  `This is the content for "Comments". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet nisi sed augue tincidunt, non bibendum metus ullamcorper.`,
];

const products = [
  {
    title: "Physical Product Title will be here",
    price: 45,
    oldPrice: 543,
    discount: 92,
    rating: 4.2,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1675053446iCxPWgtT.png",
  },
  {
    title: "Physical Product Title Title will Be Here 99",
    price: 34,
    oldPrice: 99,
    discount: 66,
    rating: 4.7,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1675053315Z9yfuKPk.png",
  },
  {
    title: "Top Rated product title will be here according to your wish 123",
    price: 80,
    oldPrice: 129,
    discount: 38,
    rating: 3.9,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1639377187LerG6ypK.png",
  },
  {
    title: "Zain - Digital Agency and Startup HTML Template",
    price: 20,
    oldPrice: 35,
    discount: 42,
    rating: 4.5,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1648013375aGqS3Zgd.png",
  },
  {
    title: "Top Rated product title will be here according to your wish 123",
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 4.8,
    image:
      "https://eco.rafiinternational.com/assets/images/products/16480134488OmlUgJN.png",
  },
  {
    title: "Physical Product Title will be here",
    price: 45,
    oldPrice: 543,
    discount: 92,
    rating: 4.2,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1639377739mqNT2g2x.png",
  },
  {
    title: "Physical Product Title Title will Be Here 99",
    price: 34,
    oldPrice: 99,
    discount: 66,
    rating: 4.7,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1648013500i2EEZrBt.png",
  },
  {
    title: "Top Rated product title will be here according to your wish 123",
    price: 80,
    oldPrice: 129,
    discount: 38,
    rating: 3.9,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1648013669fVYfMbbZ.png",
  },
  {
    title: "Zain - Digital Agency and Startup HTML Template",
    price: 20,
    oldPrice: 35,
    discount: 42,
    rating: 4.5,
    image:
      "https://eco.rafiinternational.com/assets/images/products/1639392531ypne3xL8.png",
  },
];

export default function ProductTabSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < products.length - 2) {
      setDirection(1);
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="py-10">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Tabs */}
          <div className="border-b border-[#767678] md:border-b-0 md:pr-8 col-span-3">
            <div className="flex gap-6 text-sm border-b pb-2 border-[#767678]">
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`hover:text-black transition text-[17px] font-semibold ${
                    activeTab === index
                      ? "border-[#767678] text-[19px] font-semibold"
                      : "border-transparent text-[#767678]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-[16px] font-semibold leading-9  text-[#767678] "
            >
              <p>{TAB_CONTENT[activeTab]}</p>
            </motion.div>
          </div>

          {/* Right Product Slider */}
          <div className="">
            <motion.div
              className="w-full  text-[14px] "
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex justify-between text-[#1B1B1E] text-[18px] items-center border-b pb-2 font-bold">
                <span>Seller&apos;s Product</span>
                <div className="text-xs font-bold space-x-3">
                  <button
                    onClick={handlePrev}
                    className="text-gray-500 text-[16px] mr-3 hover:text-black hover:font-bold  cursor-pointer "
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-[#1B1B1E] text-[16px] hover:text-black  cursor-pointer hover:font-bold "
                  >
                    Next
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={startIndex}
                  className="space-y-4 mt-4"
                  initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                  transition={{ duration: 0.3 }}
                >
                  {products
                    .slice(startIndex, startIndex + 3)
                    .map((product, index) => (
                      <motion.div
                        key={index}
                        className="flex  h-[155px] gap-4 cursor-pointer pb-4 rounded-md p-2 hover:shadow   bg-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={89}
                          height={150}
                          className="rounded object-cover border w-[98px] h-[98px]"
                        />
                        <div className="flex-1">
                          <h4 className="f text-[#141926] text-[16px] ">
                            {product.title}
                          </h4>
                          <div className="flex gap-2 items-center mt-1 text-sm">
                            {product.oldPrice > 0 && (
                              <span className="line-through text-gray-500">
                                {product.oldPrice} ৳
                              </span>
                            )}
                            <span className="font-bold">{product.price} ৳</span>
                            {product.discount > 0 && (
                              <span className=" text-white px-2 py-0.5 text-xs rounded">
                                {product.discount}% off
                              </span>
                            )}
                          </div>
                          <div className=" flex text-xs mt-1 text-gray-500">
                            <span>
                              <FaStar className="text-yellow-500 mt-1 text-[15px]" />
                            </span>{" "}
                            <span className="mt-1 ml-2">
                              {product.rating.toFixed(1)} (0)
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
