import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/slices/categoriesSlice";
import productsReducer from "../redux/slices/productsSlice";
import categoryReducer from "../redux/slices/categorySlice";
import productReducer from "../redux/slices/productSlice";
import filtersReducer from "../redux/slices/filtersSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
    product: productReducer,
    filters: filtersReducer,
  },
  devTools: true,
});

export default store;
