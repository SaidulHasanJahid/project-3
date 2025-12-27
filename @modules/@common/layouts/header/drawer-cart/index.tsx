// CartDrawer.tsx
import React from "react";
import { Drawer } from "antd";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/appstore/cart/cart-slice";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart?.items || []);
  const subtotal = cartItems.reduce(
    (sum: number, item: any) =>
      sum + (item.discount_price || item.price) * item.quantity,
    0
  );

  const handleIncrease = (id: number) => {
    const item = cartItems.find((i: any) => i.id === id);
    if (item) {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };
  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Drawer
      title={null}
      placement="right"
      width={
        typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : 460
      }
      open={open}
      onClose={onClose}
      closeIcon={false}
      styles={{ body: { padding: "0" } }}
      className="flex flex-col"
    >
      <div className="flex flex-col h-full">
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-12">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex gap-4 py-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.thumbnail || "/placeholder.jpg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-base">{item.name}</h4>
                  <p className="text-lg font-semibold mt-1 text-black">
                    ৳ {(item.discount_price || item.price).toLocaleString()}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-auto text-gray-500 hover:text-red-600 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Subtotal & Buttons */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex justify-between text-xl font-semibold mb-4">
              <span>Subtotal</span>
              <span>৳ {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Taxes and shipping calculated at checkout
            </p>
            <div className="flex gap-7 ml-10">
              <Link href="/customer/cart-view" onClick={onClose}>
                <button className="flex-1 py-4 px-8 border border-black  text-black bg-white text-center font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
                  VIEW CART
                </button>
              </Link>
              <Link href="/customer/checkout" onClick={onClose}>
                <button className="flex-1 py-4 px-8 bg-black text-white  text-center font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
}
