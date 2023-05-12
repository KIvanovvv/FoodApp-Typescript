import { createTheme } from "@mui/material";

const theme = {
  typography: {
    allVariants: {
      color: "#eae2b7",
    },
  },
  palette: {
    primary: {
      main: "#d62828", // Set primary color to red[500]
    },
    secondary: {
      main: "#f77f00", // Set secondary color to blue[500]
    },
  },
};

export default createTheme(theme);
