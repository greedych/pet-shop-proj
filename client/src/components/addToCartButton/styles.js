import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const AddButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(2),
  transition: "all 0.15s ease",
  width: "100%",
  "&:active": {
    backgroundColor: theme.palette.disabled,
  },
}));
