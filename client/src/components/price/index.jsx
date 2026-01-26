import { Stack } from "@mui/material";
import { DisabledPrice, MainPrice } from "./styles";
import { useEffect, useState } from "react";

function Price({ discont_price, price, fontSizeMain, fontSizeDisable }) {
  const [isDiscont, setIsDiscont] = useState(false);

  useEffect(() => {
    setIsDiscont(Boolean(discont_price));
  }, [discont_price]);

  return (
    <>
      {isDiscont ? (
        <Stack flexDirection="row" alignItems="flex-end" gap="15px">
          <MainPrice fontSize={fontSizeMain}>${discont_price}</MainPrice>
          <DisabledPrice fontSize={fontSizeDisable}>${price}</DisabledPrice>
        </Stack>
      ) : (
        <MainPrice fontSize={fontSizeMain}>${price}</MainPrice>
      )}
    </>
  );
}

export default Price;
