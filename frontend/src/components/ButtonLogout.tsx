import { Button } from "@mui/material";
import accessToken from "../utils/accessToken";

const ButtonLogout = () => {
  const handleLogout = () => {
    accessToken.removeToken();
    location.reload();
  };

  return (
    <Button onClick={handleLogout} variant="text" color="inherit">
      Logout
    </Button>
  );
};

export { ButtonLogout };
