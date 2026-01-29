import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TitledDivider from "../titledDivider";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "./productCard";
import FilterBar from "../fiterBar";

function ProductsList({ products, pageTitle }) {
  const { isLoading, isError, message } = useSelector(
    (state) => state.products,
  );

  const navigate = useNavigate();

  const location = useLocation();

  const checkAllSales = () => {
    navigate("/discounts");
  };

  return (
    <Stack padding={" 0 40px "}>
      {location.pathname === "/" ? (
        <TitledDivider
          title={"Sale"}
          btnText={"All sales"}
          onClick={checkAllSales}
        />
      ) : (
        <Typography variant="h1" padding={"40px 0"}>
          {pageTitle}
        </Typography>
      )}
      <FilterBar />
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {isLoading && <Typography variant="h1">Loading...</Typography>}
        {isError && (
          <Typography variant="h1" color="red">
            {message}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default ProductsList;
