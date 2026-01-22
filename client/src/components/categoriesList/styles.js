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
}));

export const CategoriesListTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  paddingRight: theme.spacing(4),
}));

// export const Divider = styled(Box)(({ theme }) => ({
//   height: "1px",
//   width: "100%",
//   border: `1px solid ${theme.palette.divider}`,
// }));

export const AllCatrgoriesButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.dividerText,
  padding: theme.spacing(1, 2),
  fontSize: "1rem",
  lineHeight: "126%",
  borderRadius: "6px",
}));
