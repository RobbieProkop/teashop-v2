import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  title: string;
  subHeading: string;
  image: string;
  lectureURL: string;
  isUnlocked: boolean;
  groupID: string;
  slides?: string;
  message?: string;
}

interface productState {
  products: ProductType[] | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: productState = {
  products: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default productSlice.reducer;
