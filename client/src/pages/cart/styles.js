import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export const PaymentStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "#F1F3F4",
  width: "40%",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  gap: theme.spacing(4),
}));

export const PaymentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.dividerText,
  fontSize: "2.5rem",
}));

export const PaymentForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CartButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  textTransform: "none",
}));

export const PaymentInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",

    "& fieldset": {
      borderColor: "#ccc",
    },

    "&:hover fieldset": {
      borderColor: "#999",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#1976d2",
    },
  },

  "& input": {
    color: "#000",
  },

  "& label": {
    color: "#666",
  },

  "& label.Mui-focused": {
    color: "#1976d2",
  },
});

export const ModalBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  flexDirection: "row",
  position: "absolute",
  padding: theme.spacing(4),
  margin: "0 auto",
  top: "320px",
  width: "40%",
  left: "calc(50% - 20%)",
  borderRadius: theme.shape.borderRadius,
}));

export const CloseModalButton = styled(Box)({
  position: "absolute",
  right: "20px",
  top: "20px",
  padding: "0",
  cursor: "pointer",
});
