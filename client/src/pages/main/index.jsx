import { Stack } from "@mui/material";
import CategoriesList from "../../components/categoriesList";
import Banner from "../../components/banner";

function Main() {
  return (
    <Stack>
      <Banner />
      <CategoriesList />
    </Stack>
  );
}

export default Main;
