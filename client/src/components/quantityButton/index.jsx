import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  CounterButtonMinus,
  CounterButtonPlus,
  CounterCartStack,
} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuantityButton({ productQuantity, plusFunc, minusFunc }) {
  // const [quantity, setQuantity] = useState(0);
  // const count = useSelector(state => state.cart)

  // useEffect(() => {
  //   setQuantity(productQuantity);
  // }, [productQuantity]);

  return (
    <CounterCartStack>
      <CounterButtonMinus onClick={minusFunc}>
        <RemoveIcon />
      </CounterButtonMinus>
      <Box width="100%">
        <Typography width="100%" textAlign="center">
          {productQuantity}
        </Typography>
      </Box>
      <CounterButtonPlus onClick={plusFunc}>
        <AddIcon />
      </CounterButtonPlus>
    </CounterCartStack>
  );
}

export default QuantityButton;
