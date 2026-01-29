import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../urls/urls";

export const postSale = createAsyncThunk(
  "post/postSale",
  async (saleData, { rejectWithValue }) => {
    try {
      const responce = await axios.post(BASE_URL + "sale/send", saleData);
      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const postOrder = createAsyncThunk(
  "post/postOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const responce = await axios.post(BASE_URL + "order/send", orderData);
      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const postsSlice = createSlice({
  name: "post",
  initialState: {
    postStatus: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSale.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSale.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.postStatus = action.payload.status;
      })
      .addCase(postSale.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });

    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.postStatus = action.payload.status;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

// export const {} = categorySlice.actions;
export default postsSlice.reducer;
