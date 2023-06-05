// import Header from "../Header/Old/Header";
import Header2 from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import classes from "./Menu.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";
import { useParams } from "react-router";
import FilterOptionsBottom from "./Restaurants/FilterOptionsBottom";

const Menu = () => {
  const { items } = useContext(CartContext);
  const { category } = useParams();

  return (
    <div className={classes.wrapper}>
      <Header2 />
      <Restaurants category={category ? category : ""} />
    </div>
  );
};

export default Menu;
