import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/slices/categorySlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
