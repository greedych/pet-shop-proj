import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/slices/categorySlice";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { category, categoryProducts } = useSelector((state) => state.category);
  console.log(categoryId);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <ProductsList pageTitle={category.title} products={categoryProducts} />
  );
}

export default CategoryPage;
