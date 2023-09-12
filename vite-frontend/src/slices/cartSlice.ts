import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../components/Product/Product";

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
        state.cartItems = state.cartItems.map((x: ProductType) =>
          x._id === existsItem._id ? item : x
        );
      }
    },
  },
});

export default cartSlice.reducer;
