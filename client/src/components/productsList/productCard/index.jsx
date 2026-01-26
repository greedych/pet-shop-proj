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

function ProductCard({ product }) {
  const [show, setShow] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const navigate = useNavigate();

  const AddToCart = () => {
    setIsAddToCart(true);
    const addedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(addedProducts);
    const newProduct = addedProducts.find(
      (addedProduct) => addedProduct.id === product.id,
    );

    const localArr = addedProducts.filter(
      (addedProduct) => addedProduct.id !== product.id,
    );
    console.log(newProduct);
    console.log(localArr);

    if (newProduct) {
      newProduct.count += 10;
      console.log(newProduct);
      console.log([...localArr, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...localArr, newProduct]));
    }
    localStorage.setItem(
      "cart",
      JSON.stringify([...localArr, { ...product, count: 1 }]),
    );
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
      onClick={ProductNavigate}
    >
      <Stack position={"relative"}>
        {product.discont_price && <DiscountEmblem {...product} />}
        <ProductCardImage src={BASE_URL + product.image} alt={product.title} />
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
        <ProductCardTitle>{product.title}</ProductCardTitle>
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
