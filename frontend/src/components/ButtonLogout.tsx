import { Button } from "@mui/material";
import accessToken from "../utils/accessToken";
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    accessToken.removeToken();
    navigate(0);
  };

  return (
    <Button onClick={handleLogout} variant="text" color="inherit">
      Logout
    </Button>
  );
};

export { ButtonLogout };
