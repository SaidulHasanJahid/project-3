"use client";
import { addToCart, decreaseQuantity } from "@/appstore/cart/cart-slice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartActions = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const cartItem = cart.items.find((item: any) => item.id === product.id);
  console.log(cart);
  const cartPayload = {
    id: product.id,
    title: product.title,
    slug: product.slug,
    price: product.price,
    oldPrice: product.oldPrice,
    category: product.category,
    image: product.image,
    quantity: 1,
  };


  return (
    <div className="flex items-center space-x-2 my-4 mt-4">
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => dispatch(decreaseQuantity(product.id))}
          className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
        >
          -
        </button>
        <input
          type="text"
          value={cartItem ? cartItem.quantity : 1}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => dispatch(addToCart(cartPayload))}
          className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(addToCart(cartPayload))}
        className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full	 mt-3 text-[14px] w-[118px] h-[30px] cursor-pointer hover:bg-[#23272b] transition-all"
      >
        Add to Cart
      </button>
      <button className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full	 mt-3 text-[14px] w-[118px] h-[30px] cursor-pointer hover:bg-[#23272b] transition-all">
        <Link href={'/customer/cart'} >Buy Now</Link>
      </button>
    </div>
  );
};

export default CartActions;
