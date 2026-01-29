import {
  Checkbox,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setOnlyDiscount,
  setPriceRange,
  setSort,
} from "../../redux/slices/filtersSlice";
import { useLocation } from "react-router-dom";
import { BoxIcon, CheckedBoxIcon, PriceInput } from "./styles";

function FilterBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isDiscounts, setIsDiscounts] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [priceRangeValue, setPriceRangeValue] = useState({
    from: "",
    to: "",
  });
  console.log(location);
  const isMain = location.pathname === "/";
  const isSales = location.pathname === "/discounts";

  const ChangeSorting = (e) => {
    const value = e.target.value;
    setSortType(value);
  };

  useEffect(() => {
    dispatch(setSort(sortType));
  }, [sortType, dispatch]);

  const ChangeIsDiscounts = () => {
    if (!isDiscounts) {
      setIsDiscounts(true);
    } else {
      setIsDiscounts(false);
    }
  };

  useEffect(() => {
    dispatch(setOnlyDiscount(isDiscounts));
  }, [isDiscounts, dispatch]);

  const priceRangeChange = (e) => {
    const { value, name } = e.target;
    setPriceRangeValue((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (priceRangeValue.from !== "" || priceRangeValue.to !== "") {
      dispatch(setPriceRange(priceRangeValue));
    }
  }, [priceRangeValue, dispatch]);

  if (isMain) return;

  return (
    <Stack flexDirection={"row"} paddingBottom={"40px"} gap={5}>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Typography>Price</Typography>
        <PriceInput
          onChange={priceRangeChange}
          value={priceRangeValue.from}
          size="small"
          type="number"
          name="from"
          placeholder="from"
        />
        <PriceInput
          onChange={priceRangeChange}
          value={priceRangeValue.to}
          size="small"
          type="number"
          placeholder="to"
          name="to"
        />
      </Stack>
      {!isSales && (
        <Stack alignItems={"center"} flexDirection={"row"} gap={2}>
          <Typography>Discounted items</Typography>
          <Checkbox
            disableRipple
            icon={<BoxIcon />}
            checkedIcon={<CheckedBoxIcon />}
            sx={{
              padding: 0,
              alignItems: "center",
            }}
            onChange={ChangeIsDiscounts}
          />
        </Stack>
      )}
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Typography>Sorted</Typography>
        <Select value={sortType} size="small" onChange={ChangeSorting}>
          <MenuItem value={"default"}>by default</MenuItem>
          <MenuItem value={"asc"}>by low to high</MenuItem>
          <MenuItem value={"desc"}>by high to low</MenuItem>
          <MenuItem value={"title"}>by title</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
}

export default FilterBar;
