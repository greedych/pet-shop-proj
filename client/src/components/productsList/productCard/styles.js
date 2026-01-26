import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";

export const ProductCardStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2.5),
  width: "316px",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  transition: "all 0.11s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  },
}));

export const ProductCardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "284px",
  objectFit: "cover",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ProductCardTitle = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textWrap: "nowrap",
  textOverflow: "ellipsis",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const TitleCardStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  padding: theme.spacing(0, 4, 4, 4),
  zIndex: 2,
}));

export const ProductButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isAddToCart" && prop !== "show",
})(({ theme, isAddToCart, show }) => ({
  position: "absolute",
  textTransform: "none",
  bottom: show ? theme.spacing(2) : theme.spacing(-4),
  opacity: show ? 1 : 0,
  left: theme.spacing(2),
  right: theme.spacing(2),
  padding: theme.spacing(2, 0),
  backgroundColor: isAddToCart && theme.palette.disabled,
  color: isAddToCart && "#b6b6b6",
  transition: "all 0.15s ease",
  "&:active": {
    backgroundColor: theme.palette.disabled,
  },
}));
