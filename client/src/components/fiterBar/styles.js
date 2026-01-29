import styled from "@emotion/styled";
import { Checkbox, TextField } from "@mui/material";

export const PriceInput = styled(TextField)({
  // padding: theme.spacing(1, 2),
  // border: `1px solid ${theme.palette.divider}`,
  width: "100px",
});

export const BoxIcon = styled("span")(({ theme }) => ({
  width: 36,
  height: 36,
  border: "1px solid #d0d0d0",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
}));

export const CheckedBoxIcon = styled(BoxIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,

  "&::after": {
    content: '""',
    width: 10,
    height: 18,
    border: "solid #fff",
    borderWidth: "0 3px 3px 0",
    transform: "rotate(45deg) scale(0.8)",
    opacity: 0,
    animation: "checkmark 0.2s ease forwards",
  },

  "@keyframes checkmark": {
    to: {
      opacity: 1,
      transform: "rotate(45deg) scale(1)",
    },
  },
}));
