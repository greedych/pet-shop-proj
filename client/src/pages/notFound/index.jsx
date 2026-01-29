import { Button, Stack, Typography } from "@mui/material";
import notfound from "../../assets/404.png";
import { GoHomeButton } from "./styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const GoMain = () => {
    navigate("/");
  };

  return (
    <Stack alignItems={"center"} gap={4} padding={8}>
      <img src={notfound} />
      <Typography variant="h1">Page Not Found</Typography>
      <Typography color="#8B8B8B">
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Typography>
      <GoHomeButton onClick={GoMain} variant="contained">
        Go Home
      </GoHomeButton>
    </Stack>
  );
}

export default NotFound;
