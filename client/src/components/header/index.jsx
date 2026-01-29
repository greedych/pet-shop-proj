import { Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pet.svg";
import cartIcon from "../../assets/cart.svg";
import {
  CartImg,
  HeaderLink,
  HeaderStack,
  MainLogo,
  CartCounter,
  CounterBox,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartProducts } from "../../redux/slices/cartSlice";

function Header() {
  const links = [
    {
      to: "/",
      title: "Main Page",
    },
    {
      to: "/categories",
      title: "Categories",
    },
    {
      to: "/products",
      title: "Products",
    },
    {
      to: "/discounts",
      title: "All Sales",
    },
  ];

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const count = useSelector((state) => state.cart.count);

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  const mainLogoNavigate = () => {
    navigate("/");
  };

  const cartNavigate = () => {
    navigate("/cart");
  };

  return (
    <HeaderStack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack>
        <MainLogo src={logo} onClick={mainLogoNavigate} alt="logo" />
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap="20px">
        {links.map((link) => (
          <HeaderLink key={link.title} to={link.to}>
            <Typography>{link.title}</Typography>
          </HeaderLink>
        ))}
      </Stack>
      <Stack position={"relative"}>
        {count > 0 && (
          <CounterBox>
            <CartCounter>{count}</CartCounter>
          </CounterBox>
        )}
        <CartImg src={cartIcon} alt="cart" onClick={cartNavigate} />
      </Stack>
    </HeaderStack>
  );
}

export default Header;
