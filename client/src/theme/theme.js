import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    primary: {
      main: "#0D50FF",
    },
    divider: "#DDDDDD",
    dividerText: "#8B8B8B",
  },
});

export default theme;
