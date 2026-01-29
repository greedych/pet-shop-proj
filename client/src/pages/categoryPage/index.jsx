import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect, useMemo } from "react";
import { fetchCategory } from "../../redux/slices/categorySlice";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { FiltredProducts } from "../../redux/selectors/productsSelectors";

function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const category = useSelector((state) => state.category.category);

  const selectCategoryProducts = useMemo(
    () => FiltredProducts((state) => state.category.categoryProducts),
    [],
  );

  const categoryProducts = useSelector(selectCategoryProducts);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <ProductsList pageTitle={category.title} products={categoryProducts} />
  );
}

export default CategoryPage;
