import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";

function DiscountsPage() {
  const dispatch = useDispatch();

  const discountProducts = useSelector(
    (state) => state.products.discountProducts,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsList products={discountProducts} pageTitle={"Discount items"} />
  );
}

export default DiscountsPage;
