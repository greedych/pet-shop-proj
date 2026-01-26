import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const DisabledPrice = styled(Typography)(({ fontSize }) => ({
  color: "#8B8B8B",
  textDecoration: "line-through",
  lineHeight: "130%",
  fontSize: fontSize, //"0.9rem"
  textAlign: "center",
  paddingBottom: "4px",
}));

export const MainPrice = styled(Typography)(({ fontSize }) => ({
  fontWeight: "600",
  fontSize: fontSize,
  lineHeight: "110%",
}));
