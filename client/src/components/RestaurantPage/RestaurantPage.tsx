import Header2 from "../Header/Header";
import RestaurantMenu from "./RestaurantMenu";
import { Stack } from "@mui/material";

const Restaurant = () => {
  return (
    <>
      <Header2 />
      <Stack
        flexWrap={"wrap"}
        alignContent={"center"}
        pt={{ xl: 4, lg: 4, md: 2, sm: 2, xs: 2 }}
      >
        <RestaurantMenu />
      </Stack>
    </>
  );
};
export default Restaurant;
