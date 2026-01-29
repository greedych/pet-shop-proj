import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/slices/productSlice";
import { BASE_URL } from "../../urls/urls";
import Price from "../../components/price";
import DiscountEmblem from "../../components/discountEmblem";
import { DescTitle, InfoStack, ProductImage } from "./styles";
import QuantityButton from "../../components/quantityButton";
import AddToCartButton from "../../components/addToCartButton";

function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product,
  );

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const ResetCounter = () => setQuantity(1);

  if (isLoading) return <Typography variant="h1">Loading...</Typography>;
  if (isError) return <Typography variant="h1">{message}</Typography>;

  return (
    <Stack flexDirection={"row"} flex={"1 1 50%"} padding={5} gap={4}>
      <ProductImage>
        <img src={BASE_URL + product.image} />
      </ProductImage>
      <InfoStack>
        <Typography variant="h2">{product.title}</Typography>
        <Stack
          position={"relative"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <Price {...product} fontSizeMain={"64px"} fontSizeDisable={"40px"} />
          <DiscountEmblem {...product} />
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          width={"100%"}
          gap={4}
        >
          <QuantityButton
            productQuantity={quantity}
            plusFunc={() => setQuantity((prev) => (prev += 1))}
            minusFunc={() => setQuantity((prev) => (prev -= 1))}
          />
          <AddToCartButton
            product={product}
            quantity={quantity}
            resetCounter={ResetCounter}
          />
        </Stack>
        <Stack gap={2}>
          <DescTitle>Description</DescTitle>
          <Typography>{product.description}</Typography>
        </Stack>
      </InfoStack>
    </Stack>
  );
}

export default ProductPage;
