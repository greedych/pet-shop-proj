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
    getRandomProducts: (state) => {
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

export const { getRandomProducts } = productsSlice.actions;
export default productsSlice.reducer;
