import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/slices/categoriesSlice";
import productsReducer from "../redux/slices/productsSlice";
import categoryReducer from "../redux/slices/categorySlice";
import productReducer from "../redux/slices/productSlice";
import filtersReducer from "../redux/slices/filtersSlice";
import cartReducer from "../redux/slices/cartSlice";
import postReducer from "../redux/slices/postSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
    product: productReducer,
    filters: filtersReducer,
    cart: cartReducer,
    post: postReducer,
  },
  devTools: true,
});

export default store;
