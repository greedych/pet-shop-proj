import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../urls/urls";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await axios.get(BASE_URL + `products/${payload}`);
      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const productsSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload[0];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;
