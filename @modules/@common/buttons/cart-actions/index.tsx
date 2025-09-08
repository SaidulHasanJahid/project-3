"use client";
import { addToCart, decreaseQuantity } from "@/appstore/cart/cart-slice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

interface CartActionsProps {
  product: any;
}

const CartActions: React.FC<CartActionsProps> = ({ product }) => {
  if (!product?.id) return null;

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const cartItem = cart.items.find((item: any) => item.id === product.id);

  const cartPayload = {
    id: product.id,
    name: product.name ?? product.slug,
    slug: product.slug,
    price: Number(product.price),
    oldPrice: product.oldPrice ? Number(product.oldPrice) : null,
    category: product.category ?? "",
    thumbnail: product.thumbnail ?? "/placeholder.png",
    quantity: 1,
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 my-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQuantity(product.id))}
          disabled={cartItem?.quantity === 1}
          className="px-3 py-1 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
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
        className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full mt-3 text-[14px] w-[118px] h-[30px] cursor-pointer hover:bg-[#23272b] transition-all"
      >
        Add to Cart
      </button>

      <Link
        href="/customer/cart"
        className="bg-[#424A4D] text-white px-[18px] py-0 rounded-full mt-3 text-[14px] w-[118px] h-[30px] flex items-center justify-center hover:bg-[#23272b] transition-all"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default CartActions;
