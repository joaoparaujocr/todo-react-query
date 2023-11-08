import { Components } from "@mui/material";

const MuiFormLabel: Components["MuiFormLabel"] = {
  styleOverrides: {
    root: {
      color: "#FFF",
      "&.Mui-focused": {
        color: "#FFF",
      },
    },
  },
};

export default MuiFormLabel;
