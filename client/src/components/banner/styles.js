import { Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const ImgStack = styled(Stack)({
  backgroundImage: "url(../../../public/banner.png)",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "80px 40px 210px 40px",
  alignItems: "flex-start",
});

export const BannerTitle = styled(Typography)({
  fontSize: "6rem",
  fontWeight: "bold",
  lineHeight: "110%",
  letterSpacing: "0%",
  textWrap: "wrap",
  paddingBottom: "40px",
  paddingRight: "300px",
});

export const BannerButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(2, 7),
}));
