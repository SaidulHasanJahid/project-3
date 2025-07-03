// redux/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";
interface PayloadType {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  category: string;
  image: string;
  quantity: number; // Added for managing quantity in cart
}

interface CartState {
  items: PayloadType[];
}

const initialState: CartState = {
  items: isBrowser ? JSON.parse(localStorage.getItem("cart") || "[]") : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<PayloadType>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity; // Update the quantity if item exists
      } else {
        state.items.push(item); // Add new item
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );

      // Update localStorage after removal
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // New action to decrease quantity
    decreaseQuantity(state, action: PayloadAction<number>) {
      console.log(action.payload);
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
