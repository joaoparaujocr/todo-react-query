import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { ButtonLogout } from "./ButtonLogout";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {user!.email}
          </Typography>
          <ButtonLogout />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
