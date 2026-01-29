import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/slices/productSlice";
import { BASE_URL } from "../../urls/urls";
import Price from "../../components/price";
import DiscountEmblem from "../../components/discountEmblem";

function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product,
  );
  console.log(product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (isLoading) return <Typography variant="h1">Loading...</Typography>;
  if (isError) return <Typography variant="h1">{message}</Typography>;

  return (
    <Stack flexDirection={"row"} flex={"1 1 50%"}>
      <Stack width={"50%"}>
        <img src={BASE_URL + product.image} />
      </Stack>
      <Stack>
        <Typography variant="h2">{product.title}</Typography>
        <Stack position={"relative"}>
          <Price {...product} fontSizeMain={"64px"} fontSizeDisable={"40px"} />
          <DiscountEmblem {...product} position="relative" />
        </Stack>
        <Stack>
          <Typography>Description</Typography>
          <Typography>{product.description}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProductPage;
