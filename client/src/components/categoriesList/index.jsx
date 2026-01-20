import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { Stack } from "@mui/material";
import CategoryCard from "./categoryCard";

function CategoriesList() {
  const { categories, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Stack flexDirection="row">
      {categories.map((category) => (
        <CategoryCard {...category} />
      ))}
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{message}</h1>}
    </Stack>
  );
}

export default CategoriesList;
