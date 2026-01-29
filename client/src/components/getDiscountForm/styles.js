import styled from "@emotion/styled";
import { Button, Stack, TextField, Typography } from "@mui/material";

export const DiscountFormStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4, 4, 0, 4),
  margin: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  flexDirection: "column",
  // flexWrap: "wrap",
}));

export const DiscountFormTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#fff",
  paddingBottom: theme.spacing(3),
}));

export const DiscountForm = styled("from")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
  padding: theme.spacing(4, 0),
}));

export const DogsImage = styled("img")({
  position: "relative",
  bottom: 0,
  width: "58%",
  height: "74%",
  marginTop: "auto",
  // paddingTop: "7%",
});

export const DiscountInput = styled(TextField)({
  fontSize: "1.25rem",
  color: "#fff",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& input": {
    color: "#fff",
  },
});

export const DiscountSubmit = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#fff",
  color: "#000000",
  padding: theme.spacing(2, 4),
  fontSize: "1rem",
}));
