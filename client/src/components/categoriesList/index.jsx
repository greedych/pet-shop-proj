import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import CategoryCard from "./categoryCard";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoriesStack, CategoriesTitle, CatigoriesBlock } from "./styles";
import TitledDivider from "../titledDivider";

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
        <CategoriesTitle variant="h1">Categories</CategoriesTitle>
      )}
      {location.pathname === "/" && (
        <TitledDivider
          title={"Categories"}
          onClick={checkAllCategories}
          btnText={"All categories"}
        />
      )}

      <CategoriesStack>
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
