import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, ProductType } from "../states";

const cart = localStorage.getItem("cart");
const initialState = cart ? JSON.parse(cart) : { cartItems: [] };

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
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
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc: number, item: CartProduct) => acc + item.price * item.qty,
          0
        )
      );
      //Calculate shipping price (if order > $100, shipping is free, else $10)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
      //Calculate tax price (5% tax - go Alberta!)
      state.taxPrice = addDecimals(
        Number((0.05 * state.itemsPrice).toFixed(2))
      );
      //Calculate total price
      state.totalPrice = (
        state.itemsPrice +
        state.shippingPrice +
        state.taxPrice
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
