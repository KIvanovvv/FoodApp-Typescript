import Header from "../Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Restaurants />
    </div>
  );
};

export default Menu;
