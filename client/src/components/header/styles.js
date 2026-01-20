import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderStack = styled(Stack)({
  padding: "30px 40px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #DDDDDD ",
});

export const MainLogo = styled("img")({
  width: "70px",
  height: "70px",
  cursor: "pointer",
});

export const CartImg = styled("img")({
  width: "48px",
  height: "48px",
  cursor: "pointer",
});

export const HeaderLink = styled(Link)({
  textDecoration: "none",
  textWrap: "nowrap",
  color: "black",
  fontWeight: "medium",
  lineHeight: "130%",
  fontSize: "1.25rem",
});
