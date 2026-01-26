import { Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { DiscountEmblemStack } from "./styles";

function DiscountEmblem({ discont_price, price }) {
  const discount = useMemo(() => {
    if (!price || !discont_price) return;
    const countDiscount = Math.round(((price - discont_price) / price) * 100);
    return countDiscount;
  }, [discont_price, price]);

  return (
    <DiscountEmblemStack>
      <Typography color="white">-{discount}%</Typography>
    </DiscountEmblemStack>
  );
}

export default DiscountEmblem;
