import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect, useMemo } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { FiltredProducts } from "../../redux/selectors/productsSelectors";

function ProductsPage() {
  const dispatch = useDispatch();
  const selectProducts = useMemo(
    () => FiltredProducts((state) => state.products.products),
    [],
  );

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <ProductsList products={products} pageTitle={"Products"} />;
}

export default ProductsPage;
