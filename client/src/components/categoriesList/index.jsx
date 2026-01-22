import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { Divider, Stack } from "@mui/material";
import CategoryCard from "./categoryCard";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AllCatrgoriesButton,
  CategoriesListTitle,
  CategoriesStack,
  CatigoriesBlock,
} from "./styles";

function CategoriesList() {
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const checkAllCategories = () => {
    navigate("/categories");
  };

  const newCategories =
    location.pathname === "/" ? categories.slice(0, 4) : categories;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CatigoriesBlock>
      {location.pathname !== "/" && (
        <CategoriesListTitle variant="h1">Categories</CategoriesListTitle>
      )}
      {location.pathname === "/" && (
        <Stack
          flexDirection="row"
          alignItems="center"
          paddingBottom={5}
          width="100%"
        >
          <CategoriesListTitle variant="h1">Categories</CategoriesListTitle>
          <Divider flexItem sx={{ flexGrow: 1, alignSelf: "center" }} />
          <AllCatrgoriesButton onClick={checkAllCategories} variant="outlined">
            All categories
          </AllCatrgoriesButton>
        </Stack>
      )}

      <CategoriesStack flexDirection="row" flex="1 1 25%" width="100%">
        {newCategories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>{message}</h1>}
      </CategoriesStack>
    </CatigoriesBlock>
  );
}

export default CategoriesList;
