import Header from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import { useParams } from "react-router";
import { Stack } from "@mui/material";

const Menu = () => {
  const { category } = useParams();

  return (
    <Stack gap={2}>
      <Header />
      <Restaurants category={category ? category : ""} />
    </Stack>
  );
};

export default Menu;
