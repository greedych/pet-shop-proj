import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const DividerTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  paddingRight: theme.spacing(4),
}));

export const DividerTitleButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.dividerText,
  padding: theme.spacing(1, 2),
  fontSize: "1rem",
  lineHeight: "126%",
  borderRadius: "6px",
}));
