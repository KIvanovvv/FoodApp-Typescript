import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./RestaurantPage.module.css";
import RestaurantMenu from "./RestaurantMenu";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";
const Restaurant = () => {
  const { resId } = useParams();
  const { items } = useContext(CartContext);

  return (
    <div className={classes.wrapper}>
      <Header items={items} />
      <RestaurantMenu />
    </div>
  );
};
export default Restaurant;
