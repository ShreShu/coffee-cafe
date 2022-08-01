import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  promise: {
    isPending: false,
    isFulFilled: false,
    isErrorOccured: false,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    loadcategories(state, action) {
      state.categories = action.payload;
    },
    loadProducts(state, action) {
      state.products = action.payload;
    },
    pending(state) {
      state.promise = {
        isPending: true,
        isFulFilled: false,
        isErrorOccured: false,
      };
    },
    error(state) {
      state.promise = {
        isPending: false,
        isFulFilled: false,
        isErrorOccured: true,
      };
    },
    fullfilled(state) {
      state.promise = {
        isPending: false,
        isFulFilled: true,
        isErrorOccured: false,
      };
    },
  },
});

export default productSlice;
export const productActions = productSlice.actions;
