import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const CategoryStack = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  textAlign: "center",
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: 316,
  minWidth: 200,
  margin: "0 auto",
  transition: "all 0.11s ease",
  "&:hover": {
    transform: "scale(0.9)",
  },
}));
