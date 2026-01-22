import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const CatigoriesBlock = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(10, 5),
}));

export const CategoriesStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  width: "100%",
  flexWrap: "wrap",
  flexDirection: "row",
  flex: "1 1 25%",
}));

export const CategoriesTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  paddingRight: theme.spacing(4),
}));
