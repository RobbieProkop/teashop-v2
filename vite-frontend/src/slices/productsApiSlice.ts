import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export const { useGetProductsQuery } = productsApiSlice;
