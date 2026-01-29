import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  CardImg,
  CartCardStack,
  ImgContainer,
  MainCartCardStack,
  RemoveButtonBox,
} from "./styles";
import { BASE_URL } from "../../urls/urls";
import Price from "../price";
import QuantityButton from "../quantityButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  countTotal,
  getCartProducts,
  recalculateCart,
  removeCartProduct,
} from "../../redux/slices/cartSlice";
import { useState } from "react";

function CartProductCard({ id, image, title, discont_price, price, count }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCartProduct(id));
    dispatch(recalculateCart());
    dispatch(countTotal());
  };
  const [quantity, setQuantity] = useState(count);

  const PlusCartProduct = () => {
    // dispatch(PlusCart(id));
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (!existingProduct) return;

    if (existingProduct) {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === id
          ? { ...cartProduct, count: cartProduct.count + 1 }
          : cartProduct,
      );
      setQuantity(existingProduct.count + 1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    dispatch(getCartProducts());
    dispatch(countTotal());
  };

  const MinusCartProduct = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === id,
    );

    if (!existingProduct) return;

    let updatedCart;

    if (existingProduct.count > 1) {
      updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === id
          ? { ...cartProduct, count: cartProduct.count - 1 }
          : cartProduct,
      );
      setQuantity(existingProduct.count - 1);
    } else {
      updatedCart = cartProducts.filter((cartProduct) => cartProduct.id !== id);
      dispatch(removeCartProduct(id));
      dispatch(recalculateCart());
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(getCartProducts());
    dispatch(countTotal());
  };

  return (
    <CartCardStack>
      <ImgContainer width="200px" height="180px">
        <CardImg src={BASE_URL + image} alt={title} />
      </ImgContainer>
      <MainCartCardStack>
        <Typography>{title}</Typography>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          gap="10%"
          width="100%"
        >
          <QuantityButton
            productQuantity={quantity}
            plusFunc={PlusCartProduct}
            minusFunc={MinusCartProduct}
          />
          <Price
            discont_price={discont_price}
            price={price}
            fontSizeMain={"2.5rem"}
            fontSizeDisable={"1.25rem"}
          />
        </Stack>
      </MainCartCardStack>
      <RemoveButtonBox onClick={handleRemove}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </RemoveButtonBox>
    </CartCardStack>
  );
}

export default CartProductCard;
