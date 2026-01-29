import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    cartProducts: [],
    total: 0,
  },
  reducers: {
    getCartProducts: (state) => {
      const localData = JSON.parse(localStorage.getItem("cart")) || [];
      state.cartProducts = [...localData];
      state.count = localData.length;
    },
    removeCartProduct: (state, action) => {
      let localData = JSON.parse(localStorage.getItem("cart"));
      localData = localData.filter((product) => product.id !== action.payload);
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload,
      );
      localStorage.setItem("cart", JSON.stringify(localData));
    },
    recalculateCart: (state) => {
      const localData = JSON.parse(localStorage.getItem("cart")) || [];
      state.count = localData.length;
    },
    // PlusCart: (state, action) => {
    //   const cartProducts = JSON.parse(localStorage.getItem("cart"));
    //   const existingProduct = cartProducts.find(
    //     (cartProduct) => cartProduct.id === action.payload,
    //   );

    //   if (existingProduct) {
    //     const updatedCart = cartProducts.map((cartProduct) =>
    //       cartProduct.id === action.payload
    //         ? { ...cartProduct, count: cartProduct.count + 1 }
    //         : cartProduct,
    //     );
    //     state.cartProducts = state.cartProducts.map((cartProduct) =>
    //       cartProduct.id === action.payload
    //         ? (cartProduct.count += 1)
    //         : { cartProduct },
    //     );

    //     localStorage.setItem("cart", JSON.stringify(updatedCart));
    //   }
    // },
    countTotal: (state) => {
      state.total = state.cartProducts.reduce((sum, cartProduct) => {
        const price = cartProduct.discont_price ?? cartProduct.price;
        return sum + price * cartProduct.count;
      }, 0);
    },
  },
});

export const {
  getCartProducts,
  removeCartProduct,
  recalculateCart,
  countTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
