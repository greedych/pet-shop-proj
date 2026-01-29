import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

export const ProductImage = styled(Stack)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "50%",
}));

export const InfoStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const DescTitle = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 500,
});
