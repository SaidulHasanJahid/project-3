import IncrementDecrementButton from "@/@modules/common/buttons/increment-decrement";
import ProductGallery from "@/@modules/common/product-gallery";
import { ProductType } from "@/types/types";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ product }: { product: ProductType }) => {
  const { gallery_images } = product || {};

  const slug = "Stylish Backpack"; // Static data for product title

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Images */}
      <ProductGallery galleryImages={gallery_images} />

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">{slug}</h1>
        <div className="flex items-center text-yellow-500">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <AiFillStar key={idx} />
            ))}
          <span className="ml-2 text-sm text-gray-600">
            (681 Ratings | 44 Answered Questions)
          </span>
        </div>
        <p className="text-sm text-gray-700">
          Brand: <span className="text-blue-600">No Brand</span>
        </p>

        <div>
          <p className="text-2xl font-bold text-red-600">৳ 181</p>
          <p className="text-sm text-gray-500 line-through">
            ৳ 450 <span className="text-green-600">-60%</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Color family</p>
          <div className="border border-orange-500 text-orange-500 inline-block px-3 py-1 rounded text-sm">
            Multicolor
          </div>
        </div>

        <IncrementDecrementButton />

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Buy Now
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
