import { Button } from "@mui/material";
import { BannerButton, BannerTitle, ImgStack } from "./styles";

function Banner() {
  return (
    <ImgStack>
      <BannerTitle color="white">
        Amazing Discounts on Pets Products!
      </BannerTitle>
      <BannerButton variant="contained">Check out</BannerButton>
    </ImgStack>
  );
}

export default Banner;
