import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../urls/urls";
import { CategoryStack } from "./styles";

function CategoryCard({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/" + id);
  };

  return (
    <CategoryStack onClick={handleClick}>
      <img src={BASE_URL + image} alt={title} />
      <Typography variant="body1">{title}</Typography>
    </CategoryStack>
  );
}

export default CategoryCard;
