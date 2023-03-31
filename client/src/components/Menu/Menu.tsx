import Header from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import classes from "./Menu.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";
import { useParams } from "react-router";

const Menu = () => {
  const { items } = useContext(CartContext);
  const { category } = useParams();

  return (
    <div className={classes.wrapper}>
      <Header items={items} />
      <Restaurants category={category ? category : ""} />
    </div>
  );
};

export default Menu;
