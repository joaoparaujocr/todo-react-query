import { Box, CircularProgress } from "@mui/material";

const Loading = () => (
  <Box
    sx={{
      display: "flex",
      height: "100vh",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress size={100} />
  </Box>
);

export { Loading };
