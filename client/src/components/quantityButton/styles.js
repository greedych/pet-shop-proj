import styled from "@emotion/styled";
import { IconButton, Stack } from "@mui/material";

export const CounterCartStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: "100%",
  width: "100%",
  maxWidth: "150px",
  flex: "1 1 33%",
}));

// export const CounterButton = styled("button")(({ theme }) => ({
//   border: "none",
//   background: "none",
//   borderRadius: theme.shape.borderRadius,
//   height: "100%",
//   fontSize: "2rem",
//   color: theme.palette.textDivider,
//   fontWeight: "400",
//   width: "100%",
// }));

export const CounterButtonMinus = styled(IconButton)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: "100%",
}));

export const CounterButtonPlus = styled(IconButton)(({ theme }) => ({
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: "100%",
}));
