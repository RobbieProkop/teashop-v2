import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, ProductType } from "../states";
import { updateCart } from "../utils/cartUtils";

const cart = localStorage.getItem("cart");
const initialState = cart ? JSON.parse(cart) : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existsItem = state.cartItems.find(
        (x: ProductType) => x._id === item._id
      );
      let message;
      if (!existsItem) {
        state.cartItems = [...state.cartItems, item];
      }
      if (existsItem) {
        state.cartItems = state.cartItems.map((x: CartProduct) => {
          if (x._id !== existsItem._id) return x;
          if (x.qty + item.qty > item.countInStock) {
            message = `Sorry, there are only ${item.countInStock} ${item.name} in stock.`;

            return x;
          }
          return { ...x, qty: x.qty + item.qty };
        });
        state.message = message;
      }

      return updateCart(state);
    },
    replaceCartItem: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.map((x: CartProduct) => item);
      return updateCart(state);
    },
  },
});

export const { addToCart, replaceCartItem } = cartSlice.actions;
export default cartSlice.reducer;
