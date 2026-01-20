import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: null,
  },
});

export default store;
