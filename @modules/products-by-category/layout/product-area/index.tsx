"use client";

import React from "react";
import ProductData from "../../../../mockdata/product_ariya.json";
import HeaderProductCategori from "../header";
import CategoriCart from "@/@modules/@common/cards/categori-cart";

const ProductArea = () => {
  return (
    <section className="py-8 px-3 sm:px-6 lg:px-8">
      {/* Header Section */}
      <HeaderProductCategori />

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {ProductData.map((product) => (
          <CategoriCart key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductArea;
