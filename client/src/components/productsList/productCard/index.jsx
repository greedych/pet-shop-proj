import { Button, Stack, Typography } from "@mui/material";
import { BASE_URL } from "../../../urls/urls";
import Price from "../../price";
import {
  ProductButton,
  ProductCardImage,
  ProductCardStack,
  ProductCardTitle,
  TitleCardStack,
} from "./styles";
import DiscountEmblem from "../../discountEmblem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recalculateCart } from "../../../redux/slices/cartSlice";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddToCart = (_, quantity = 1) => {
    setIsAddToCart(true);
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id,
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? { ...cartProduct, count: cartProduct.count + quantity }
          : cartProduct,
      );
    } else {
      updatedCart = [...cartProducts, { ...product, count: quantity }];
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(recalculateCart());
  };

  const ProductNavigate = () => {
    navigate("/products/" + product.id);
  };

  // width={"23.23%"}

  return (
    <ProductCardStack
      position={"relative"}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Stack position={"relative"}>
        {product.discont_price && <DiscountEmblem {...product} />}
        <ProductCardImage
          src={BASE_URL + product.image}
          alt={product.title}
          onClick={ProductNavigate}
        />
        {/* {show && ( */}
        <ProductButton
          onClick={AddToCart}
          isAddToCart={isAddToCart}
          show={show}
          variant="contained"
        >
          Add to cart
        </ProductButton>
        {/* )} */}
      </Stack>
      <TitleCardStack>
        <ProductCardTitle onClick={ProductNavigate}>
          {product.title}
        </ProductCardTitle>
        <Price
          {...product}
          fontSizeDisable={"1.25rem"}
          fontSizeMain={"2.5rem"}
        />
      </TitleCardStack>
    </ProductCardStack>
  );
}

export default ProductCard;
