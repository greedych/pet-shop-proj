import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <ProductsList products={products} pageTitle={"Products"} />;
}

export default ProductsPage;
