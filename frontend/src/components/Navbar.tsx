import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import accessToken from "../utils/accessToken";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    accessToken.removeToken();
    navigate("/", { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {user!.email}
          </Typography>
          <Button onClick={handleLogout} variant="text" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
