import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = {
  typography: {
    allVariants: {
      color: "#eae2b7",
    },
  },
  palette: {
    primary: {
      main: "#d62828",
    },
    secondary: {
      main: "#f77f00",
    },
  },
};
let customTheme = createTheme(theme);
customTheme = responsiveFontSizes(customTheme);
export default customTheme;
