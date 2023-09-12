import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, ProductType } from "../states";

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

      if (!existsItem) {
        state.cartItems = [...state.cartItems, item];
      }

      // May need to change this to add to the item quantity, instead of replacing the item completely
      if (existsItem) {
        state.cartItems = state.cartItems.map((x: CartProduct) =>
          x._id === existsItem._id ? item : x
        );
      }
      //Calculate price of items
      state.itemsPrice = state.cartItems.reduce(
        (acc: number, item: CartProduct) => acc + item.price * item.qty,
        0
      );
      //Calculate shipping price
      //Calculate tax price
      //Calculate total price
    },
  },
});

export default cartSlice.reducer;
