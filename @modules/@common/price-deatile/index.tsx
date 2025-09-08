"use client";
import React from "react";

type Props = {
  cartTotal: number;
  shippingCost?: number;
  packagingCost?: number;
  finalPrice: number;
  showShippingOptions?: boolean;
  packaging?: string;
  setPackaging?: (value: string) => void;
  packagingType?: string;
  setPackagingType?: (value: string) => void;
};

const PriceDetails: React.FC<Props> = ({
  cartTotal,
  shippingCost = 0,
  packagingCost = 0,
  finalPrice,
  showShippingOptions = false,
  packaging,
  setPackaging,
  packagingType,
  setPackagingType,
}) => {
  return (
    <div className="w-full md:w-[350px] border border-[#BDCCDB] py-10 px-6 shadow-sm transition-all duration-300 ease-in-out">
      <h2 className="font-bold text-lg text-[#142350] mb-4">PRICE DETAILS</h2>

      <div className="flex justify-between text-[#767678] text-lg mb-2 border-b border-[#BDCCDB] h-11">
        <span>Subtotal</span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-[#767678] text-lg mb-2 border-b border-[#BDCCDB] h-11">
        <span>Discount</span>
        <span>$0.00</span>
      </div>

      <div className="flex justify-between text-[#767678] text-lg mb-2 border-b border-[#BDCCDB] h-11">
        <span>Shipping</span>
        <span>${shippingCost.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-[#767678] text-lg mb-2 border-b border-[#BDCCDB] h-11">
        <span>Packaging</span>
        <span>${packagingCost.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-[#767678] font-bold mb-4 text-lg h-11">
        <span>Total</span>
        <span>${finalPrice.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-semibold mt-6 h-11 border-t border-[#BDCCDB]">
        <span className="text-lg font-bold pt-2 text-[#767678]">Final Price :</span>
        <span className="text-lg font-bold pt-2 text-[#767678]">${finalPrice.toFixed(2)}</span>
      </div>

      {showShippingOptions && packaging !== undefined && setPackaging && (
        <div className="mt-4">
          <h3 className="font-bold text-[#142350] text-lg mb-2">Shipping Method</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="shippingMethod"
                value="free"
                checked={packaging === "free"}
                onChange={() => setPackaging("free")}
                className="w-5 h-5"
              />
              <span className="text-lg font-bold text-[#767678]">Free Shipping (10-12 days)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="shippingMethod"
                value="express"
                checked={packaging === "express"}
                onChange={() => setPackaging("express")}
                className="w-5 h-5"
              />
              <span className="text-lg font-bold text-[#767678]">Express Shipping + $10 (5-6 days)</span>
            </label>
          </div>
        </div>
      )}

      {showShippingOptions && packagingType !== undefined && setPackagingType && (
        <div className="mt-4 mb-4">
          <h3 className="font-bold text-[#142350] text-lg mb-3 mt-3">Packaging</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="packagingType"
                value="default"
                checked={packagingType === "default"}
                onChange={() => setPackagingType("default")}
                className="w-5 h-5"
              />
              <span className="text-lg font-bold text-[#767678]">
                Default Packaging
                <br />
                <span className="text-sm font-normal">Default packaging by store</span>
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="packagingType"
                value="gift"
                checked={packagingType === "gift"}
                onChange={() => setPackagingType("gift")}
                className="w-5 h-5"
              />
              <span className="text-lg font-bold text-[#767678]">
                Gift Packaging + $15
                <br />
                <span className="text-sm font-normal">Exclusive Gift packaging</span>
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDetails;
