import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "products",
  initialState: {
    onlyDiscount: false,
    sort: null,
    from: 0,
    to: Infinity,
  },
  reducers: {
    setOnlyDiscount: (state, action) => {
      console.log(action.payload);
      state.onlyDiscount = action.payload;
    },
    setSort: (state, action) => {
      console.log(action.payload);
      state.sort = action.payload;
    },
    setPriceRange: (state, action) => {
      console.log(action.payload);
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
  },
});

export const { setOnlyDiscount, setSort, setPriceRange } = filtersSlice.actions;
export default filtersSlice.reducer;
