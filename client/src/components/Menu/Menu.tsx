// import Header from "../Header/Old/Header";
import Header2 from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";

import { useParams } from "react-router";
import { Stack } from "@mui/material";

const Menu = () => {
  const { category } = useParams();

  return (
    <Stack gap={2}>
      <Header2 />
      <Restaurants category={category ? category : ""} />
    </Stack>
  );
};

export default Menu;
