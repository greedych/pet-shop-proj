import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#0D50FF",
    },
    disabled: "#282828",

    divider: "#DDDDDD",
    dividerText: "#8B8B8B",
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
