import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./RestaurantPage.module.css";
import RestaurantMenu from "./RestaurantMenu";
const Restaurant = () => {
  const { resId } = useParams();
  console.log(resId);

  return (
    <div className={classes.wrapper}>
      <Header />
      <RestaurantMenu />
    </div>
  );
};
export default Restaurant;
