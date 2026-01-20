import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { Stack, Typography } from "@mui/material";
import CategoryCard from "./categoryCard";
import { useLocation } from "react-router-dom";
import { CategoriesListTitle, CategoriesStack } from "./styles";

function CategoriesList() {
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const ifLocation = () => {
    let newCategories = [...categories];
    if (location.pathname === "/") {
      return (newCategories = newCategories.slice(0, 4));
    }
    return newCategories;
  };

  const newCategories = ifLocation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Stack>
      <CategoriesListTitle variant="h1">Categories</CategoriesListTitle>
      <CategoriesStack flexDirection="row" flex="1 1 25%" width="100%">
        {newCategories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>{message}</h1>}
      </CategoriesStack>
    </Stack>
  );
}

export default CategoriesList;
