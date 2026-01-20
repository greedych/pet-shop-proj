import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const GridBox = styled(Grid)(({ theme }) => ({
  backgroundColor: "#F1F3F4",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  color: "#8B8B8B",
  fontWeight: 500,
  lineHeight: "130%",
  fontSize: "1rem",
  letterSpacing: 0,
  paddingBottom: theme.spacing(2),
}));

export const InfoData = styled(Typography)({
  color: "#282828",
  fontWeight: 600,
  lineHeight: "110%",
  fontSize: "2.5rem",
  letterSpacing: 0,
});
