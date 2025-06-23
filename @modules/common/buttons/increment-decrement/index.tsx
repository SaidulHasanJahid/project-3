"use client";
import {
  productDecrement,
  productIncrement,
} from "@/appstore/products/product-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const IncrementDecrementButton = () => {
  const dispatch = useDispatch();
  const { product_qty } = useSelector((state: any) => state?.products);
  return (
    <div>
      <div className="flex items-center gap-3 mt-4">
        <p>Quantity</p>
        <button
          onClick={() => dispatch(productDecrement())}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={product_qty || 0}
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => dispatch(productIncrement())}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrementButton;
