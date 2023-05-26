import classes from "./RestaurantPage.module.css";
import Header2 from "../Header/Header2";
import RestaurantMenu2 from "./RestaurantMenu2";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Stack } from "@mui/material";

const Restaurant = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Header2 />
      <Stack
        flexWrap={"wrap"}
        alignContent={"flex-start"}
        pt={{ xl: 4, lg: 4, md: 2, sm: 2, xs: 2 }}
        pl={{ xl: 10, lg: 10, md: 0 }}
      >
        <RestaurantMenu2 />
      </Stack>
    </>
  );
};
export default Restaurant;
