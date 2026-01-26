import { Stack } from "@mui/material";
import CategoriesList from "../../components/categoriesList";
import Banner from "../../components/banner";
import ProductsList from "../../components/productsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  getRandomProducts,
} from "../../redux/slices/productsSlice";

function Main() {
  const dispatch = useDispatch();

  const { randomDiscounts, isSuccess } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getRandomProducts());
    }
  }, [dispatch, isSuccess]);

  return (
    <Stack>
      <Banner />
      <CategoriesList />
      <ProductsList products={randomDiscounts} />
    </Stack>
  );
}

export default Main;
