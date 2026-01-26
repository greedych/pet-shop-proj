import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const DiscountEmblemStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.11s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
