import { Button } from "@mui/material";
import { BannerButton, BannerTitle, ImgStack } from "./styles";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const checkDiscount = () => {
    navigate("/discount");
  };

  return (
    <ImgStack>
      <BannerTitle color="white">
        Amazing Discounts on Pets Products!
      </BannerTitle>
      <BannerButton onClick={checkDiscount} variant="contained">
        Check out
      </BannerButton>
    </ImgStack>
  );
}

export default Banner;
