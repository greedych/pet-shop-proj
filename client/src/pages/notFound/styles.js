import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const GoHomeButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(2, 7),
  transition: "all 0.15s ease",
  "&:active": {
    backgroundColor: theme.palette.disabled,
  },
}));
