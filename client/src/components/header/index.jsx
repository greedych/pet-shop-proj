import { Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pet.svg";
import cartIcon from "../../assets/cart.svg";
import { CartImg, HeaderLink, HeaderStack, MainLogo } from "./styles";

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
      to: "/discount",
      title: "All Sales",
    },
  ];

  const navigate = useNavigate();

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
      <Stack>
        <CartImg src={cartIcon} alt="cart" onClick={cartNavigate} />
      </Stack>
    </HeaderStack>
  );
}

export default Header;
