import { Components, outlinedInputClasses } from "@mui/material";

const MuiOutlinedInput: Components["MuiOutlinedInput"] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: "var(--TextField-brandBorderColor)",
      color: "#FFF",
    },

    root: {
      borderColor: "#FFF",
      color: "#FFF",
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "var(--TextField-brandBorderHoverColor)",
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "var(--TextField-brandBorderFocusedColor)",
      },
    },
  },
};

export default MuiOutlinedInput;
