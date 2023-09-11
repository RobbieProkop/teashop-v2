import { create } from "zustand";
interface ProductState {
  name: string;
  price: number;
  countInStock: number;
  cartTotal: number;
}

export const useStore = create((set) => ({
  name: "",
  price: 0,
  countInStock: 0,
  cartTotal: 0,
}));
// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./Features/products/productSlice";

// const store = configureStore({
//   reducer: {
//     products: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;
