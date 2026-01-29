import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../urls/urls";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get(BASE_URL + "products/all");
      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    discountProducts: [],
    randomDiscounts: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {
    getRandomDiscounts: (state) => {
      const copyProducts = [...state.randomDiscounts];

      if (copyProducts.length > 0) {
        for (let i = copyProducts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copyProducts[i], copyProducts[j]] = [
            copyProducts[j],
            copyProducts[i],
          ];
        }
      }
      state.randomDiscounts = copyProducts.slice(0, 4);
    },
    getIsDiscounts: (state) => {
      state.products = state.products.filter(
        (products) => products.discont_price,
      );
    },
    sortAscending: (state) => {
      state.products.sort((a, b) => {
        const aPrice = a.discont_price ?? a.price;
        const bPrice = b.discont_price ?? b.price;
        return aPrice - bPrice;
      });
    },
    sortDescending: (state) => {
      state.products.sort((a, b) => {
        const aPrice = a.discont_price ?? a.price;
        const bPrice = b.discont_price ?? b.price;
        return bPrice - aPrice;
      });
    },
    sortByTitle: (state) => {
      state.products.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortFromTo: (state, action) => {
      const { from, to } = action.payload || {};
      const min = +from;
      const max = +to;
      console.log(min, max);
      state.products = state.products.filter((product) => {
        const price = product.discont_price ?? product.price;
        return price > min && price < max;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.randomDiscounts = [...action.payload].filter(
          (products) => products.discont_price,
        );
        state.discountProducts = [...action.payload].filter(
          (products) => products.discont_price,
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const {
  getRandomDiscounts,
  getIsDiscounts,
  sortAscending,
  sortDescending,
  sortByTitle,
  sortFromTo,
} = productsSlice.actions;
export default productsSlice.reducer;
