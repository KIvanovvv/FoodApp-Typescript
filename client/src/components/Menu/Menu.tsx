import Header from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import classes from "./Menu.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";

const Menu = () => {
  const { items } = useContext(CartContext);
  console.log(items);

  return (
    <div className={classes.wrapper}>
      <Header items={items} />
      <Restaurants />
    </div>
  );
};

export default Menu;
