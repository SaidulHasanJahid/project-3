"use client";

import CartCard from "@/@modules/@common/cards/post-cart-f-b";
import ProductData from "../../../../mockdata/product_ariya.json";
import HeaderProductCategori from "../header";

const ProductArea = () => {
  return (
    <section className="py-8 px-3 sm:px-6 lg:px-8">
      {/* Header Section */}
      <HeaderProductCategori />

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {ProductData.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductArea;
