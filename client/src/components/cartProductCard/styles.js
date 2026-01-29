import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const CartCardStack = styled(Stack)({
  flexDirection: "row",
  border: "1px solid #ddd",
  borderRadius: "6px",
  width: "100%",
  gap: "20px",
  position: "relative",
});

export const CardImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderTopLeftRadius: "6px",
  borderBottomLeftRadius: "6px",
});

export const ImgContainer = styled(Stack)({
  width: "200px",
  height: "180px",
  borderRight: "1px solid #ddd",
});

export const MainCartCardStack = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(5),
  width: "100%",
  padding: theme.spacing(4),
  boxSizing: "border-box",
}));

export const RemoveButtonBox = styled(Box)({
  position: "absolute",
  right: "20px",
  top: "20px",
  padding: "0",
  cursor: "pointer",
});
