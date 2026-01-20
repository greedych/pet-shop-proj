import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

export const CategoriesStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  width: "100%",
  flexWrap: "wrap",
}));

export const CategoriesListTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  paddingBottom: "40px",
});
