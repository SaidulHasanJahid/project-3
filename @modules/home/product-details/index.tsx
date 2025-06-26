import IncrementDecrementButton from "@/@modules/common/buttons/increment-decrement";
import ProductGallery from "@/@modules/common/product-gallery";
import { ProductType } from "@/types/types";
import Link from "next/link";
import { FaFlag } from "react-icons/fa6";

import {
  FaHeart,
  FaExchangeAlt,
  FaClock,
  FaTag,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import ProductTabSlider from "./product-tab";
import RelatedProductsSlider from "./RelatedProductsSlider";


const ProductDetails = ({ product }: { product: ProductType }) => {
  const { gallery_images } = product || {};

  const slug = "Stylish Backpack"; // Static data for product title





  return (
   <>

     {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center bg-[#1A1A1E99]"
        style={{
        
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-sm mt-1   ">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Product Details
        </p>
      </div>

    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
      {/* Images */}
      <ProductGallery galleryImages={gallery_images} />

      {/* Info */}
       <div className="w-full  bg-white text-[#1c1c1c] font-sans leading-[1.6] text-[14px]">
      <p className="text-[#141926] text-[16px] mb-3">
       <Link href={'/'}> Home</Link> / <Link href={''}> Electronic</Link> / <Link href={''}>TELEVISION</Link> / <Link href={''}>LCD TV</Link>
      </p>

      <h2 className="text-[24px] font-bold text-[#141926] mb-3">
        {slug}
      </h2>

      <div className="flex items-center space-x-2 text-[#6c757d] mb-2">
      
        <span className="text-xs"><span className="bg-[#424A4D] w-7 p-1 mt-3 mb-3 text-white">0★</span> (0)</span>
      </div>

      <div className="flex items-center space-x-2 mb-2 mt-5">
        <span className="text-[16px]  text-[#767678]">315$</span>
        <span className="line-through text-[#767678] text-[14px]">545$</span>
        <span className="bg-[#424A4D] text-white text-xs px-2 py-1.5 rounded">39% Off</span>
      </div>

      <p className="text-[#388E3C] mb-2 font-[13px] mt-3">395 In Stock</p>

      <div className="  space-x-4  mb-3 mt-3">
        <div className="flex items-center text-[#767678] text-[16px] space-x-1">
          <FaClock />
          <span><span className="text-[#141926] font-medium">Estimated Shipping Time:</span> 24 hour</span>
        </div> 
        <div className="flex items-center text-[#767678] text-[16px] space-x-1 mt-2">
          <FaTag />
          <span><span className="text-[#141926] font-medium">Product SKU: </span>vrX2915O5c1</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 my-4 mt-4">

     <IncrementDecrementButton />
      <button className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full	 mt-3 text-[14px] w-[118px] h-[30px] cursor-pointer hover:bg-[#23272b] transition-all">Add to Cart</button>
      <button className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full	 mt-3 text-[14px] w-[118px] h-[30px] cursor-pointer hover:bg-[#23272b] transition-all">Buy Now</button>
        
      </div>

      <div className="flex items-center space-x-5 text-[12px] mb-6 text-[#1B1B1E] mt-6">
        <span className="cursor-pointer hover:underline flex items-center space-x-1">
          <FaHeart /> <span>Wishlist</span>
        </span>
        <span className="cursor-pointer hover:underline flex items-center space-x-1">
          <FaExchangeAlt /> <span>Compare</span>
        </span>
      </div>

      <p className="text-[#424A4D] flex items-center  mb-4 text-[16px] font-semibold cursor-pointer hover:underline"><FaFlag /> <span className="ml-2">Report This Item</span></p>

      <h4 className="text-[#141926] text-[18px] font-semibold mb-3 mt-3">Share Now</h4>
      <div className="flex space-x-2 mb-6 mt-3">
        <div className="w-[30px] h-[30px] bg-[#3b5998] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="w-[30px] h-[30px] bg-[#1da1f2] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
          <FaTwitter />
        </div>
        <div className="w-[30px] h-[30px] bg-[#0077b5] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="w-[30px] h-[30px] bg-[#bd081c] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
          <FaPinterestP />
        </div>
        <div className="w-[30px] h-[30px] bg-[#25d366] text-white flex items-center justify-center rounded hover:opacity-80 cursor-pointer">
          <FaWhatsapp />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-6">
        <div>
          <h4 className="font-bold text-[16px] text-[#767678] mb-2">Warranty Type :</h4>
          <div className="space-y-2 text-[#767678]">
            <label className="flex items-center space-x-2">
              <input type="radio" name="warranty" className="accent-[#767678]" />
              <span>No warranty + $ 5</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="warranty" className="accent-[#767678]" />
              <span>international manufacturer warranty + $ 10</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="warranty" className="accent-[#767678]" />
              <span>Non-local warranty + $ 15</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[16px] text-[#767678] mb-2">Color Family :</h4>
          <div className="space-y-2 text-[#767678]">
            <label className="flex items-center space-x-2">
              <input type="radio" name="color" className="text-[#767678]" />
              <span>Black + $ 10</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="color" className="text-[#767678]" />
              <span>White + $ 12</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="color" className="text-[#767678]" />
              <span>Sliver + $ 15</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="color" className="text-[#767678]" />
              <span>Red + $ 20</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    </div>

   <ProductTabSlider />

        <RelatedProductsSlider />

   </>
  );
};

export default ProductDetails;
