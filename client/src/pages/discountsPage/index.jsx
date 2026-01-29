import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/productsList";
import { useEffect, useMemo } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { FiltredProducts } from "../../redux/selectors/productsSelectors";

function DiscountsPage() {
  const dispatch = useDispatch();

  // const discountProducts = useSelector(
  //   (state) => state.products.discountProducts,
  // );

  const selectDiscounts = useMemo(
    () => FiltredProducts((state) => state.products.discountProducts),
    [],
  );

  const discountProducts = useSelector(selectDiscounts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsList products={discountProducts} pageTitle={"Discount items"} />
  );
}

export default DiscountsPage;
