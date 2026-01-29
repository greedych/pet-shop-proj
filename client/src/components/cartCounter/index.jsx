import { Box, Typography } from "@mui/material";
import { useState } from "react";

function CartCounter() {
  const [counter, setCounter] = useState(null);

  return (
    <Box>
      <Typography>{counter}</Typography>
    </Box>
  );
}

export default CartCounter;
