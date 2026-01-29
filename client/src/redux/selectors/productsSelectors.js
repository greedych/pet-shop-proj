import { createSelector } from "@reduxjs/toolkit";

export const FiltredProducts = (products) =>
  createSelector([products, (state) => state.filters], (products, filters) => {
    let result = [...products];
    console.log(filters);
    if (filters.onlyDiscount) {
      result = result.filter((product) => product.discont_price);
    }

    result = result.filter((product) => {
      const min = Number(filters.from) || 0;
      const max = Number(filters.to) || Infinity;
      const price = product.discont_price ?? product.price;
      return price >= min && price <= max;
    });

    if (filters.sort === "asc") {
      result.sort((a, b) => {
        const aPrice = a.discont_price ?? a.price;
        const bPrice = b.discont_price ?? b.price;
        return aPrice - bPrice;
      });
    }

    if (filters.sort === "desc") {
      result.sort((a, b) => {
        const aPrice = a.discont_price ?? a.price;
        const bPrice = b.discont_price ?? b.price;
        return bPrice - aPrice;
      });
    }

    if (filters.sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  });
