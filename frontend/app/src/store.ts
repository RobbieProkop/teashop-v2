import { create } from "zustand";

export const useStore = create((set) => ({
  name: "",
  price: 0,
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
